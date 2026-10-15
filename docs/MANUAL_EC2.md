# AWS Console နဲ့ Manual Deploy (Terraform မသုံးဘဲ)

Region: **Asia Pacific (Tokyo) ap-northeast-1** — Console ညာဘက်အပေါ်မှာ အရင်ရွေးပါ။

```
Internet ─► Route 53 (A record) ─► Elastic IP ─► EC2 (Security Group: 22 ← ကိုယ့် IP, 80/443 ← any)
                                                  └─ Docker: caddy → web → api → db
```

## 1. Key pair
EC2 → **Key pairs** → *Create key pair*
- Name: `cloud-academy-key` · Type: **ED25519** · Format: **.pem**
- Download ဖြစ်လာတဲ့ `.pem` ကို `C:\Users\<you>\.ssh\` ထဲ ရွှေ့ထား (ပျောက်ရင် ပြန်ယူလို့မရ)

## 2. Security group
EC2 → **Security Groups** → *Create security group* · Name: `cloud-academy-web` · VPC: default

| Type | Port | Source | ဘာကြောင့် |
|---|---|---|---|
| SSH | 22 | **My IP** | ကိုယ်တစ်ယောက်တည်း ဝင်ရန် — `0.0.0.0/0` မထားနဲ့ |
| HTTP | 80 | Anywhere-IPv4 | Website + Let's Encrypt စစ်ဆေးမှု |
| HTTPS | 443 | Anywhere-IPv4 | HTTPS |

Outbound: default (All traffic) ထားပါ။

## 3. EC2 instance
EC2 → **Instances** → *Launch instances*

| Setting | Value |
|---|---|
| Name | `cloud-academy-web` |
| AMI | **Ubuntu Server 24.04 LTS** (64-bit x86) |
| Instance type | **t3.small** (t3.micro ဆို build လုပ်တုန်း memory မလောက်) |
| Key pair | `cloud-academy-key` |
| Network | default VPC · Auto-assign public IP: **Enable** |
| Firewall | *Select existing* → `cloud-academy-web` |
| Storage | **20 GiB gp3** · Advanced → Encrypted: **Yes** |
| Advanced → Metadata version | **V2 only (token required)** |
| Advanced → **User data** | `infra/manual/ec2-user-data.sh` ကို Notepad နဲ့ဖွင့်ပြီး အကုန် copy → paste |

*Launch instance* → Status checks **2/2 passed** ဖြစ်တဲ့အထိ စောင့်။

## 4. Elastic IP (IP မပြောင်းအောင်)
EC2 → **Elastic IPs** → *Allocate* → ရလာတဲ့ IP ကိုရွေး → *Actions → Associate* → instance `cloud-academy-web`

> Instance ကို stop/start လုပ်ရင် ပုံမှန် public IP က ပြောင်းတယ်။ Elastic IP က မပြောင်းလို့ DNS နဲ့ ချိတ်ဖို့ လိုတယ်။

## 5. စစ်ဆေး (HTTP)
```powershell
ssh -i $HOME\.ssh\cloud-academy-key.pem ubuntu@<ELASTIC-IP>
sudo tail -f /var/log/cloud-academy-bootstrap.log     # "==> Done" ပေါ်ရင် ပြီး (Ctrl+C)
cd /opt/cloud-academy && docker compose ps            # db / api / web healthy
```
Browser → `http://<ELASTIC-IP>/` ✅

> `.pem` permission error တက်ရင် (Windows):
> `icacls $HOME\.ssh\cloud-academy-key.pem /inheritance:r /grant:r "$($env:USERNAME):R"`

## 6. Route 53 — Domain ချိတ်
1. Route 53 → *Registered domains* → **Register domain** (ဝယ်ပြီးရင် Hosted zone အလိုလိုပေါ်)
2. *Hosted zones* → ကိုယ့် domain → **Create record**
   - Record name: `academy` (domain ကိုယ်တိုင်ဆို ဗလာထား)
   - Type: **A** · Value: `<ELASTIC-IP>` · TTL: 300
3. စစ်: `nslookup academy.your-domain.com` → Elastic IP ပြရင် OK (၁–၅ မိနစ်)

## 7. HTTPS ဖွင့် (VM ထဲမှာ)
DNS က Elastic IP ကို ညွှန်ပြီးမှ လုပ်ပါ —
```bash
cd /opt/cloud-academy
sudo sed -i '/^WEB_PORT=/d;/^COOKIE_SECURE=/d' .env
sudo tee -a .env >/dev/null <<'EOF'
COMPOSE_FILE=docker-compose.yml:docker-compose.https.yml
DOMAIN=academy.your-domain.com
WEB_PORT=127.0.0.1:8080
COOKIE_SECURE=true
EOF
docker compose up -d
docker compose logs -f caddy       # "certificate obtained successfully" ပေါ်ရင် OK
```
Browser → `https://academy.your-domain.com/` 🔒

## 8. Update / ပိတ် / ဖျက်
```bash
cd /opt/cloud-academy && git pull && docker compose up -d --build   # code update
```
- ခဏရပ်: EC2 → Instance state → **Stop** (EBS + Elastic IP ကတော့ ဆက်ကျသင့်)
- လုံးဝဖျက် (အစဉ်အတိုင်း): **Terminate instance → Release Elastic IP → Route 53 record ဖျက် → Security group / Key pair ဖျက်**
- ⚠️ Elastic IP ကို release မလုပ်ရင် instance မရှိလည်း ငွေဆက်ကုန်တယ်
