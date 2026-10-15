# Cloud VM ပေါ် Deploy လုပ်နည်း

Terraform က VM တစ်လုံး (network၊ firewall၊ public IP အပါအဝင်) ဆောက်ပြီး first boot မှာ
`infra/cloud-init/bootstrap.sh.tftpl` က Docker install → repo clone → secret ထုတ် → `docker compose up` လုပ်ပေးတယ်။

```
               ┌──────────── Azure ────────────┐      ┌──────────── AWS ─────────────┐
Resource       rg-cloud-academy-lab              VPC 10.20.0.0/16
Network        VNet 10.30.0.0/16 / snet-web      Public subnet + Internet Gateway
Firewall       NSG: 22 ← your IP, 80 ← Internet  Security Group: 22 ← your IP, 80 ← any
Compute        Standard_B2s · Zone 1 · Ubuntu    t3.small · Ubuntu 24.04 · IMDSv2
Disk           StandardSSD_LRS 30 GB             gp3 20 GB (encrypted)
Public IP      Standard / Static                 Elastic IP
Cost saver     Auto-shutdown 23:00 Tokyo         (stop manually: aws ec2 stop-instances)
```

## 0. မစခင်

1. **Repo ကို GitHub ပေါ် push** (VM က `git clone` လုပ်လို့ public repo ဒါမှမဟုတ် token ပါ URL လို)
2. **SSH key** — `ssh-keygen -t ed25519` (ရှိပြီးသားဆို ကျော်)
3. **ကိုယ့် IP** — `curl -s https://ifconfig.me` → `x.x.x.x/32`
4. CLI login — Azure: `az login`၊ AWS: `aws configure`
5. ⚠️ **ကုမ္ပဏီ subscription/account** ဆိုရင် lab ဆောက်ခွင့်နဲ့ budget ကို admin ကို အရင်မေးပါ

## 1A. Azure VM

```bash
cd infra/terraform/azure
cp terraform.tfvars.example terraform.tfvars   # subscription_id, owner, IP, key, repo_url
terraform init
terraform plan        # ဘာတွေ ဆောက်မလဲ အရင်ကြည့်
terraform apply
```

## 1B. AWS EC2

```bash
cd infra/terraform/aws
cp terraform.tfvars.example terraform.tfvars   # IP, key, repo_url
terraform init
terraform plan
terraform apply
```

## 1C. Domain + HTTPS (AWS Route 53)

`http://<IP>` အစား `https://academy.your-domain.com` နဲ့ ဖွင့်ချင်ရင် —

```
Browser ──DNS──► Route 53 (A record) ──► Elastic IP
        ──HTTPS:443──► Caddy (Let's Encrypt cert, auto-renew) ──► nginx (web) ──► api ──► db
```

1. **Domain ဝယ်** — AWS Console → Route 53 → *Registered domains* → *Register domain*။
   ဝယ်ပြီးတာနဲ့ *Hosted zones* ထဲမှာ zone အလိုလိုပေါ်လာမယ် (၁၅ မိနစ် – နာရီအနည်းငယ်)။
   တခြားမှာ ဝယ်ထားရင် Route 53 မှာ Hosted zone ဆောက်ပြီး NS record ၄ ခုကို domain ဝယ်ခဲ့တဲ့ဆိုဒ်မှာ ထည့်။
2. `terraform.tfvars` မှာ —
   ```hcl
   hosted_zone = "your-domain.com"
   subdomain   = "academy"        # "" ဆိုရင် your-domain.com ကိုယ်တိုင်
   ```
3. `terraform apply` → Terraform က Port 443 ဖွင့်၊ A record ဆောက်၊ VM မှာ Caddy နဲ့ HTTPS ကို သတ်မှတ်ပေးတယ်။
4. `terraform output url` → `https://academy.your-domain.com/` (certificate ရဖို့ ၁–၂ မိနစ်)

> VM ဆောက်ပြီးမှ domain ထည့်တာဆိုရင် `.env` ကို ပထမ boot မှာပဲ ရေးလို့ VM ကို ပြန်ဆောက်ရမယ် —
> `terraform apply` က `user_data` ပြောင်းတာကြောင့် instance ကို အလိုလို replace လုပ်ပေးတယ် (DB data ပျက်မယ်)။

## 2. စစ်ဆေးရန်

```bash
terraform output url              # browser မှာ ဖွင့် (build ပြီးဖို့ ၅–၁၀ မိနစ်)
terraform output -raw bootstrap_log | sh   # bootstrap log ကို live ကြည့်
```

VM ထဲမှာ —

```bash
cd /opt/cloud-academy
docker compose ps                 # db / api / web အကုန် healthy ဖြစ်ရမယ်
docker compose logs -f api
```

## 3. Update deploy

```bash
ssh <user>@<ip>
cd /opt/cloud-academy && git pull && docker compose up -d --build
```

## 4. ပြီးရင် ဖျက်ပါ (ငွေမကုန်အောင်)

```bash
terraform destroy
```

## Production အတွက် ထပ်လုပ်သင့်တာ

- **Managed database** — Azure Database for PostgreSQL / Amazon RDS သုံးပြီး `DATABASE_URL` ပြောင်း
- **Secrets** — `.env` အစား Key Vault / AWS Secrets Manager
- **Terraform state** — Azure Storage / S3 remote backend
- **Backup** — Postgres volume ကို snapshot ဒါမှမဟုတ် `pg_dump` cron
- **SSH မဖွင့်ဘဲ** — Azure Bastion / AWS Systems Manager Session Manager

## Troubleshooting

| ပြဿနာ | စစ်ရန် |
|---|---|
| Site မပေါ် | Bootstrap log၊ `docker compose ps`၊ NSG/SG မှာ port 80 |
| SSH `timed out` | IP ပြောင်းသွားလား → tfvars ပြင်ပြီး `terraform apply` |
| `api` unhealthy | `docker compose logs api` — migration/DB password |
| HTTPS cert မရ | `dig +short <domain>` က EIP ပြလား၊ SG မှာ 80/443၊ `docker compose logs caddy` |
| Build အရမ်းကြာ / OOM | VM size ကြီးအောင် (B2ms / t3.medium) |
