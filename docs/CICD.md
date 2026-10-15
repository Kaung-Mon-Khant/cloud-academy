# CI/CD — `git push` → EC2 အလိုလို update

```
git push (main)
   │
   ▼
GitHub Actions ── CI: typecheck · test · build · terraform validate
   │  ✅ success
   ▼
Deploy workflow ── OIDC token ──► AWS STS ──► IAM Role (15 မိနစ်သက်တမ်း credential)
   │
   ▼
AWS Systems Manager (SSM) Run Command ──► EC2 (SSM Agent)
                                            git fetch + reset → docker compose up --build → /health စစ်
```

**ဘာကြောင့် ဒီနည်းလဲ**

| နည်းဟောင်း | ဒီနည်း |
|---|---|
| AWS Access Key ကို GitHub Secret ထဲ သိမ်း (ပေါက်ကြားရင် အန္တရာယ်) | **OIDC** — key လုံးဝမသိမ်း၊ run တိုင်း ယာယီ credential |
| SSH port 22 ကို GitHub IP အားလုံးအတွက် ဖွင့် | **SSM** — inbound port မဖွင့်ရ (EC2 က AWS ကို outbound နဲ့ ချိတ်) |
| Role က ဘာမဆိုလုပ်နိုင် | Role က **ဒီ instance တစ်လုံး**ပေါ်မှာ **AWS-RunShellScript** ပဲ run ခွင့် |

---

## Step 1 — EC2 ကို SSM နဲ့ ချိတ် (Instance role)

1. IAM → **Roles** → *Create role*
   - Trusted entity: **AWS service** → Use case: **EC2**
   - Permission: **`AmazonSSMManagedInstanceCore`**
   - Name: `cloud-academy-ec2-ssm`
2. EC2 → instance ရွေး → **Actions → Security → Modify IAM role** → `cloud-academy-ec2-ssm` → *Update*
3. ၂–၅ မိနစ်စောင့်ပြီး **Systems Manager → Fleet Manager** မှာ instance ပေါ်လာလား စစ်
   (Ubuntu AMI မှာ SSM Agent ပါပြီးသား။ မပေါ်ရင် EC2 ထဲမှာ `sudo snap restart amazon-ssm-agent`)

> ဒါပြီးရင် **Session Manager** (Systems Manager → Session Manager → Start session) နဲ့
> SSH/port 22 မလိုဘဲ browser ကနေ terminal ဝင်လို့ရပြီ — ကုမ္ပဏီ network ကနေလည်း ရတယ်။

## Step 2 — GitHub ကို AWS က ယုံကြည်အောင် (OIDC provider)

IAM → **Identity providers** → *Add provider*
- Provider type: **OpenID Connect**
- Provider URL: `https://token.actions.githubusercontent.com`
- Audience: `sts.amazonaws.com`
- *Add provider*

(Account တစ်ခုမှာ တစ်ခါပဲ လုပ်ရ)

## Step 3 — GitHub Actions သုံးမယ့် Role

1. IAM → Roles → *Create role* → **Web identity**
   - Identity provider: `token.actions.githubusercontent.com` · Audience: `sts.amazonaws.com`
   - GitHub organization: `Kaung-Mon-Khant` · Repository: `cloud-academy` · Branch: `main`
   - Permission ကို ဒီအဆင့်မှာ ဘာမှမရွေးဘဲ *Next*
   - Name: `github-actions-cloud-academy-deploy` → *Create role*
2. Role ကိုဖွင့် → **Trust relationships** → *Edit* → `infra/aws-iam/github-trust-policy.json` နဲ့ တူမတူ စစ်
   (`sub` က `repo:Kaung-Mon-Khant/cloud-academy:ref:refs/heads/main` — main branch ကပဲ deploy လုပ်ခွင့်)
3. **Permissions** → *Add permissions → Create inline policy* → **JSON** →
   `infra/aws-iam/github-deploy-permissions.json` ကို paste ပြီး
   `<ACCOUNT_ID>` (12 လုံး) နဲ့ `<INSTANCE_ID>` (`i-...`) ကို အစားထိုး → Name: `ssm-deploy-cloud-academy`
4. Role ရဲ့ **ARN** ကို copy (`arn:aws:iam::123456789012:role/github-actions-cloud-academy-deploy`)

## Step 4 — GitHub repo variables

GitHub repo → **Settings → Secrets and variables → Actions → Variables** tab → *New repository variable*

| Name | Value |
|---|---|
| `AWS_ROLE_ARN` | Step 3 က Role ARN |
| `EC2_INSTANCE_ID` | `i-097fba2f27b919e16` |
| `AWS_REGION` | `ap-northeast-1` |

(Secret မဟုတ်ပါ — ဒါတွေက လျှို့ဝှက်ချက်မဟုတ်လို့ Variables မှာထား)

## Step 5 — စမ်း

- **Actions** tab → *Deploy to EC2* → **Run workflow** (manual) — ဒါမှမဟုတ်
- code ပြင် → `git push` → CI ✅ → Deploy အလိုလို run

Log မှာ `Deployed abc1234` နဲ့ `✅ Deployed` ပေါ်ရင် အောင်မြင်ပြီ။

## Troubleshooting

| Error | အဖြေ |
|---|---|
| `Not authorized to perform sts:AssumeRoleWithWebIdentity` | Trust policy ရဲ့ repo/branch နာမည် (အကြီးအသေးပါ) စစ်၊ OIDC provider ရှိလား |
| `InvalidInstanceId` | Instance က Fleet Manager မှာ မပေါ်သေး → Step 1၊ region မှန်လား |
| `AccessDenied ... ssm:SendCommand` | Inline policy ထဲက ACCOUNT_ID / INSTANCE_ID |
| Deploy `TimedOut` / `Killed` | t3.micro memory/disk → t3.small၊ disk 20 GB |
| Deploy workflow မ run | CI က ❌ ဖြစ်နေလို့ — CI ကို အရင်ပြင်၊ ဒါမှမဟုတ် manual *Run workflow* |
