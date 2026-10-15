# Architecture

```
Browser ──HTTP──► nginx (web container :80)
                    ├── /           → React SPA (static, cached /assets/*)
                    └── /api/*      → Fastify (api container :4000)
                                          └── Prisma ──► PostgreSQL (db container, 127.0.0.1 only)
```

Same-origin by design: the SPA calls `/api`, so the session cookie is first-party,
`SameSite=Lax`, `httpOnly`, and CORS is only needed for local dev.

## Key decisions

| Decision | Why |
|---|---|
| **Server-side grading** | `GET /quiz/questions` never returns `isCorrect`. `POST /quiz/check` reveals one answer only after the learner commits; `POST /quiz/submit` re-grades everything before saving, so stored scores can be trusted. |
| **Localized content as JSON** (`{en, ja, my}`) | One row per question regardless of language count; `en` is mandatory and is the fallback. Options stay in English because they are service names. |
| **SM-2 in `lib/sm2.ts`** | Pure function → unit-tested without a DB. Ratings map to SM-2 quality 1/3/4/5; "again" re-queues in 10 minutes. |
| **Idempotent seed by stable keys** | `azure-compute-q03` etc. Options are synced by position so their IDs (referenced by saved attempts) stay stable. |
| **JWT in httpOnly cookie** | Not readable by JS (XSS can't steal it). 7-day expiry. Login uses constant-time comparison against a dummy hash for unknown emails. |
| **Zod everywhere** | Env vars, request bodies and query strings are validated; validation errors return `400 { error: { code, details[] } }`. |
| **Streak in the user's time zone** | The browser sends its IANA zone (`tz`); days are bucketed with `Intl.DateTimeFormat`. |
| **Rate limiting** | 300 req/min per IP globally, 10/min on login & register. `trustProxy` is on because nginx sits in front. |

## API

| Method | Path | Auth | Purpose |
|---|---|---|---|
| GET | `/health`, `/health/ready` | – | Liveness / DB readiness |
| POST | `/api/auth/register` · `/login` · `/logout` | – | Session cookie |
| GET / PATCH | `/api/auth/me` | ✔ | Profile, preferred locale |
| GET | `/api/topics?provider=AZURE` | – | Topics with counts |
| GET | `/api/quiz/questions?provider&topic&difficulty&limit` | – | Random questions (no answers) |
| POST | `/api/quiz/check` | – | Grade one answer |
| POST | `/api/quiz/submit` | optional | Grade all; saves when signed in |
| GET | `/api/flashcards?provider&topic&mode=all\|due` | optional | Cards + your review state |
| POST | `/api/flashcards/:id/review` | ✔ | `{ rating }` → next due date |
| GET | `/api/me/stats?tz=Asia/Tokyo` | ✔ | Dashboard data |

## Data model

`Topic 1─* Question 1─* Option`, `Topic 1─* Flashcard`,
`User 1─* QuizAttempt`, `User 1─* FlashcardReview *─1 Flashcard` (unique per user+card).
