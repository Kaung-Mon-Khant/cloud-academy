# ☁️ Cloud Academy

Azure နဲ့ AWS ကို **Quiz**၊ **Spaced-repetition Flashcard** နဲ့ **တိုးတက်မှု Dashboard** တို့နဲ့ လေ့လာနိုင်တဲ့ full-stack web app ပါ။
English · 日本語 · မြန်မာ ဘာသာ ၃ မျိုး ပြောင်းလို့ရပြီး Azure VM ဒါမှမဟုတ် AWS EC2 ပေါ် Terraform တစ်ချက်နဲ့ deploy လုပ်လို့ရပါတယ်။

| | |
|---|---|
| **Frontend** | React 19 · TypeScript · Vite · Tailwind CSS v4 · Motion · TanStack Query · React Router 7 · i18next · Zustand |
| **Backend** | Node 22 · Fastify 5 · Prisma 6 · PostgreSQL 17 · Zod · JWT (httpOnly cookie) · bcrypt |
| **Infra** | Docker Compose · nginx · Terraform (AWS EC2 / Azure VM) · GitHub Actions |
| **Content** | Azure 6 topics + AWS 6 topics · 60 questions · 72 flashcards · 3 languages |

## Features

- **Quiz** — topic / difficulty / အရေအတွက် ရွေးပြီး ဖြေ၊ မေးခွန်းတိုင်း ချက်ချင်း ရှင်းလင်းချက်ပြ၊ multi-select မေးခွန်းပါ၊ keyboard (`1–4`, `Enter`) နဲ့ ဖြေလို့ရ။ **အဖြေမှန်ကို browser ဆီ ကြိုမပို့ဘဲ server ဘက်မှာပဲ အမှတ်ပေးတယ်။**
- **Flashcards** — 3D flip card၊ **SM-2 algorithm** (Again / Hard / Good / Easy) နဲ့ နောက်တစ်ခါ ပြန်ကြည့်ရမယ့်ရက် အလိုလိုတွက်၊ "Due today" mode။
- **Dashboard** — Study streak (timezone မှန်ကန်စွာ)၊ accuracy၊ ၁၆ ပတ်စာ activity grid၊ အားနည်းတဲ့ topic၊ မကြာသေးမီက quiz စာရင်း။
- **Azure ↔ AWS switch** — Cloud ပြောင်းရင် အရောင် (Azure = cobalt, AWS = amber)၊ content၊ CLI terminal animation အကုန် ပြောင်းတယ်။
- **Language switcher** — ဘာသာတစ်ခုချင်း ကိုယ်ပိုင် font နဲ့ (Noto Sans JP / Noto Sans Myanmar)၊ account မှာပါ မှတ်ထားတယ်။
- **Dark / Light / System theme**၊ mobile tab bar၊ reduced-motion support၊ accessible (ARIA roles, focus states, skip link)။
- Guest အနေနဲ့ quiz/flashcard သုံးလို့ရ၊ account ဖွင့်ရင် progress သိမ်းတယ်။

## Project structure

```
cloud-academy/
├── apps/
│   ├── api/                      # Fastify REST API
│   │   ├── prisma/
│   │   │   ├── schema.prisma     # Data model
│   │   │   ├── migrations/       # SQL migrations
│   │   │   ├── data/             # Learning content (azure.ts, aws.ts) — EN/JA/MY
│   │   │   └── seed.ts           # Idempotent seed
│   │   ├── src/
│   │   │   ├── config/env.ts     # Validated environment
│   │   │   ├── plugins/          # prisma, auth (JWT cookie), error handler
│   │   │   ├── modules/          # auth · topics · quiz · flashcards · stats
│   │   │   ├── lib/              # sm2 scheduler, grading, http errors
│   │   │   ├── app.ts            # App factory (testable)
│   │   │   └── server.ts         # Entry point + graceful shutdown
│   │   └── test/                 # Vitest unit tests
│   └── web/                      # React SPA
│       ├── src/
│       │   ├── components/       # layout (shell, switchers) · ui (button, badge, …)
│       │   ├── features/         # quiz · flashcards · dashboard
│       │   ├── pages/            # route components
│       │   ├── hooks/ stores/ lib/
│       │   ├── i18n/locales/     # en.json · ja.json · my.json
│       │   └── styles/index.css  # Design tokens (Tailwind v4)
│       ├── nginx.conf            # SPA + /api proxy + security headers
│       └── Dockerfile
├── infra/
│   ├── cloud-init/               # First-boot script (shared)
│   └── terraform/{aws,azure}/    # One VM each, SSH locked to your IP
├── docs/                         # ARCHITECTURE.md · DEPLOY.md
├── docker-compose.yml            # db + api + web
└── .github/workflows/ci.yml
```

## Quick start (local)

**လိုအပ်တာ:** Node 22+, Docker Desktop

```bash
cp .env.example .env          # JWT_SECRET နဲ့ password ကို ပြောင်းပါ
npm install
npm run db:up                 # PostgreSQL ကို Docker နဲ့ စ
npm run db:migrate            # Table ဆောက်
npm run db:seed               # Quiz / flashcard data ထည့်
npm run dev                   # API :4000 + Web :5173
```

→ http://localhost:5173

**Docker နဲ့ အကုန်တစ်ခါတည်း:**

```bash
cp .env.example .env
docker compose up -d --build  # → http://localhost
```

## Deploy to a cloud VM

[docs/DEPLOY.md](docs/DEPLOY.md) မှာ အသေးစိတ်ပါ။ အတိုချုပ် —

```bash
cd infra/terraform/azure      # ဒါမှမဟုတ် infra/terraform/aws
cp terraform.tfvars.example terraform.tfvars   # IP, key, repo URL ဖြည့်
terraform init && terraform apply
```

၅–၁၀ မိနစ်အကြာ `terraform output url` ကို ဖွင့်ပါ။ စမ်းပြီးရင် **`terraform destroy`** လုပ်ဖို့ မမေ့ပါနဲ့။

## Scripts

| Command | |
|---|---|
| `npm run dev` | DB + API + Web (watch mode) |
| `npm test` | API unit tests (SM-2, grading, streak) |
| `npm run typecheck` | TypeScript (api + web) |
| `npm run db:reset` | DB ဖျက်ပြီး ပြန် migrate + seed |
| `npm run db:studio -w apps/api` | Prisma Studio နဲ့ data ကြည့် |

## Adding content

`apps/api/prisma/data/azure.ts` ဒါမှမဟုတ် `aws.ts` ထဲမှာ question/flashcard ထပ်ထည့်ပြီး `npm run db:seed` run ပါ။ Seed က key နဲ့ upsert လုပ်လို့ ထပ်ခါ run လည်း duplicate မဖြစ်ဘူး၊ user progress လည်း မပျက်ဘူး။

```ts
{
  difficulty: 'MEDIUM',
  prompt: L('English question', '日本語の質問', 'မြန်မာ မေးခွန်း'),
  options: ['A', 'B', 'C', 'D'],
  correct: [1],              // index ၂ ခုထက်ပိုရင် multi-select
  explanation: L('Why…', 'なぜ…', 'ဘာကြောင့်…'),
}
```
