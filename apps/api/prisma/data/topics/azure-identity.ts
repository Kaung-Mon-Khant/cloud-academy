import { L, type SeedTopic } from '../types.js';

export const topic: SeedTopic = {
  slug: 'azure-identity',
  icon: 'ShieldCheck',
  level: 'ASSOCIATE',
  exams: ['AZ-900', 'AZ-104'],
  name: L("Identity, Access & Security", "ID・アクセス・セキュリティ", "Identity၊ Access နဲ့ Security"),
  description: L(
    "Microsoft Entra ID tenants, users and groups, MFA and Conditional Access, Azure RBAC, managed identities, Zero Trust, defense in depth and Microsoft Defender for Cloud.",
    "Microsoft Entra ID のテナント・ユーザー・グループ、MFA と条件付きアクセス、Azure RBAC、マネージド ID、ゼロトラスト、多層防御、Microsoft Defender for Cloud を学びます。",
    "Microsoft Entra ID ရဲ့ tenant၊ user၊ group တွေ၊ MFA နဲ့ Conditional Access၊ Azure RBAC၊ managed identity၊ Zero Trust၊ defense in depth နဲ့ Microsoft Defender for Cloud ကို လေ့လာမယ်။",
  ),
  lesson: {
    minutes: 20,
    objectives: [
      L("Describe a Microsoft Entra ID tenant and manage users, guest users and groups (security vs Microsoft 365, assigned vs dynamic).",
        "Microsoft Entra ID テナントを説明し、ユーザー・ゲストユーザー・グループ（セキュリティ / Microsoft 365、割り当て / 動的）を管理できる。",
        "Microsoft Entra ID tenant ကို ရှင်းပြပြီး user၊ guest user၊ group (security vs Microsoft 365၊ assigned vs dynamic) တွေကို စီမံနိုင်မယ်။"),
      L("Explain MFA, passwordless, SSPR, Conditional Access and Entra ID Protection, and which license each needs.",
        "MFA、パスワードレス、SSPR、条件付きアクセス、Entra ID Protection と、それぞれに必要なライセンスを説明できる。",
        "MFA၊ passwordless၊ SSPR၊ Conditional Access၊ Entra ID Protection နဲ့ ဘယ်ဟာက ဘယ် license လိုလဲ ရှင်းပြနိုင်မယ်။"),
      L("Grant least-privilege access with Azure RBAC: security principal, role definition, scope and inheritance.",
        "Azure RBAC（セキュリティプリンシパル、ロール定義、スコープ、継承）で最小権限のアクセスを付与できる。",
        "Azure RBAC (security principal၊ role definition၊ scope၊ inheritance) နဲ့ least privilege access ပေးနိုင်မယ်။"),
      L("Distinguish Microsoft Entra roles from Azure roles, and Global Administrator from Owner.",
        "Microsoft Entra ロールと Azure ロール、Global Administrator と Owner の違いを区別できる。",
        "Microsoft Entra role နဲ့ Azure role၊ Global Administrator နဲ့ Owner ကို ခွဲခြားနိုင်မယ်။"),
      L("Choose between system-assigned and user-assigned managed identities and service principals.",
        "システム割り当て・ユーザー割り当てマネージド ID とサービスプリンシパルを使い分けられる。",
        "System-assigned၊ user-assigned managed identity နဲ့ service principal ထဲက ဘယ်ဟာသုံးရမလဲ ရွေးနိုင်မယ်။"),
      L("Explain Zero Trust, defense in depth and what Microsoft Defender for Cloud provides.",
        "ゼロトラスト、多層防御、Microsoft Defender for Cloud の機能を説明できる。",
        "Zero Trust၊ defense in depth နဲ့ Microsoft Defender for Cloud က ဘာတွေပေးလဲ ရှင်းပြနိုင်မယ်။"),
    ],
    sections: [
      {
        id: "entra-id-basics",
        title: L("Microsoft Entra ID: identity is the new perimeter", "Microsoft Entra ID：ID こそが新しい境界", "Microsoft Entra ID - Identity က အသစ်သော နယ်နိမိတ်"),
        blocks: [
          { type: 'p', text: L(
            "In the old datacenter world, security meant a strong firewall around the office network. Today your users work from home, cafes and phones, and your apps run in Azure and SaaS. The one thing every request still carries is an **identity**. **Microsoft Entra ID** (formerly Azure Active Directory) is Microsoft's cloud identity and access management service: it answers **who are you?** (authentication) and works with Azure to answer **what may you do?** (authorization).",
            "かつてのデータセンターでは、セキュリティとはオフィスネットワークを囲む強固なファイアウォールのことでした。今日、ユーザーは自宅・カフェ・スマートフォンから働き、アプリは Azure や SaaS で動いています。それでもすべての要求が必ず持っているのが **ID** です。**Microsoft Entra ID**（旧 Azure Active Directory）は Microsoft のクラウド ID・アクセス管理サービスで、**あなたは誰か？**（認証）に答え、Azure と連携して **何をしてよいか？**（認可）に答えます。",
            "အရင် datacenter ခေတ်မှာ security ဆိုတာ office network ပတ်လည်မှာ firewall ခိုင်ခိုင်ထားတာပါ။ အခုတော့ user တွေက အိမ်၊ ကော်ဖီဆိုင်၊ ဖုန်းကနေ အလုပ်လုပ်ပြီး app တွေက Azure နဲ့ SaaS မှာ run နေတယ်။ Request တိုင်းမှာ အမြဲပါနေတာက **identity** ပါ။ **Microsoft Entra ID** (အရင်နာမည် Azure Active Directory) က Microsoft ရဲ့ cloud identity နဲ့ access management service ဖြစ်ပြီး **မင်းဘယ်သူလဲ?** (authentication) ကို ဖြေပေးတယ်၊ Azure နဲ့ပေါင်းပြီး **ဘာလုပ်ခွင့်ရှိလဲ?** (authorization) ကို ဖြေပေးတယ်။"
          ) },
          { type: 'p', text: L(
            "A **tenant** is one dedicated instance of Entra ID that represents an organization, for example `contoso.onmicrosoft.com`. Every Azure subscription **trusts exactly one tenant** for its identities, while one tenant can be trusted by many subscriptions. Think of the tenant as the company's HR office that issues employee badges, and subscriptions as buildings that accept those badges.",
            "**テナント**は組織を表す Entra ID の専用インスタンスで、例えば `contoso.onmicrosoft.com` です。Azure サブスクリプションは ID について**ちょうど 1 つのテナント**を信頼し、1 つのテナントは多数のサブスクリプションから信頼されます。テナントは社員証を発行する人事部、サブスクリプションはその社員証で入館できるビルと考えてください。",
            "**Tenant** ဆိုတာ organization တစ်ခုကို ကိုယ်စားပြုတဲ့ Entra ID ရဲ့ သီးသန့် instance တစ်ခုပါ၊ ဥပမာ `contoso.onmicrosoft.com`။ Azure subscription တစ်ခုက identity အတွက် **tenant တစ်ခုတည်းကိုပဲ** ယုံကြည်တယ်၊ tenant တစ်ခုကိုတော့ subscription အများကြီးက ယုံကြည်နိုင်တယ်။ Tenant ကို ဝန်ထမ်းကတ်ထုတ်ပေးတဲ့ HR ရုံး၊ subscription တွေကို အဲဒီကတ်နဲ့ ဝင်ခွင့်ရတဲ့ အဆောက်အအုံတွေလို့ မြင်ကြည့်ပါ။"
          ) },
          { type: 'table',
            head: [L("Aspect", "観点", "အချက်"), L("Microsoft Entra ID", "Microsoft Entra ID（クラウド）", "Microsoft Entra ID (cloud ဝန်ဆောင်မှု)"), L("Active Directory Domain Services (on-prem)", "Active Directory Domain Services（オンプレミス）", "Active Directory Domain Services (on-prem စနစ်)")],
            rows: [
              [L("Built for", "用途", "ရည်ရွယ်ချက်"), L("Cloud apps, SaaS, web sign-in", "クラウドアプリ、SaaS、Web サインイン", "Cloud app၊ SaaS၊ web sign-in"), L("Domain-joined Windows servers and PCs", "ドメイン参加した Windows サーバーと PC", "Domain join လုပ်ထားတဲ့ Windows server နဲ့ PC")],
              [L("Protocols", "プロトコル", "အသုံးပြုတဲ့ Protocol"), L("OAuth 2.0, OpenID Connect, SAML", "OAuth 2.0、OpenID Connect、SAML などの Web プロトコル", "OAuth 2.0၊ OpenID Connect၊ SAML"), L("Kerberos, NTLM, LDAP", "Kerberos、NTLM、LDAP などの従来型プロトコル", "Kerberos၊ NTLM၊ LDAP")],
              [L("Structure", "構造", "ဖွဲ့စည်းပုံ"), L("Flat: users, groups, administrative units", "フラット：ユーザー、グループ、管理単位", "Flat- user၊ group၊ administrative unit"), L("OUs, Group Policy, forests and domains", "OU、グループポリシー、フォレストとドメイン", "OU၊ Group Policy၊ forest နဲ့ domain")],
              [L("Who runs it", "運用者", "ဘယ်သူ run လဲ"), L("Microsoft (PaaS/SaaS)", "Microsoft が運用（PaaS/SaaS）", "Microsoft က run (PaaS/SaaS)"), L("You, on domain controllers", "利用者がドメインコントローラー上で運用", "ကိုယ်တိုင် domain controller ပေါ်မှာ")],
            ] },
          { type: 'callout', tone: 'tip', text: L(
            "Hybrid companies synchronize on-premises AD users into Entra ID with **Microsoft Entra Connect** (or the lighter **Entra Cloud Sync**), so people use one identity everywhere. If you need classic domain join and LDAP in Azure without running DCs, use **Microsoft Entra Domain Services**.",
            "ハイブリッド企業は **Microsoft Entra Connect**（または軽量な **Entra Cloud Sync**）でオンプレミス AD のユーザーを Entra ID に同期し、どこでも 1 つの ID を使えるようにします。DC を運用せずに Azure でドメイン参加や LDAP が必要なら **Microsoft Entra Domain Services** を使います。",
            "Hybrid company တွေက on-prem AD user တွေကို **Microsoft Entra Connect** (ဒါမှမဟုတ် ပေါ့ပါးတဲ့ **Entra Cloud Sync**) နဲ့ Entra ID ထဲ sync လုပ်ပြီး နေရာတိုင်းမှာ identity တစ်ခုတည်းသုံးကြတယ်။ DC မ run ဘဲ Azure မှာ domain join၊ LDAP လိုရင် **Microsoft Entra Domain Services** ကိုသုံးပါ။"
          ) },
        ],
      },
      {
        id: "users-groups",
        title: L("Users, guests and groups", "ユーザー、ゲスト、グループ", "User၊ Guest နဲ့ Group"),
        blocks: [
          { type: 'p', text: L(
            "Entra ID has two main user types. A **member** user belongs to your organization (created in the cloud or synced from AD). A **guest** user is an external person invited through **B2B collaboration**: they sign in with their own company or personal account, so you never manage their password. When the partner leaves their company, their home account is disabled and access to you stops too. **Microsoft Entra External ID** is the umbrella name for these external identity features, including B2B and customer-facing sign-up for your own apps.",
            "Entra ID のユーザーには主に 2 種類あります。**メンバー**ユーザーは組織に属します（クラウドで作成、または AD から同期）。**ゲスト**ユーザーは **B2B コラボレーション**で招待された外部の人で、自分の会社や個人のアカウントでサインインするため、パスワードを管理する必要はありません。パートナーが退職すると元のアカウントが無効になり、こちらへのアクセスも止まります。**Microsoft Entra External ID** は、B2B や自社アプリの顧客向けサインアップを含む外部 ID 機能の総称です。",
            "Entra ID မှာ user အမျိုးအစား အဓိက ၂ မျိုးရှိတယ်။ **Member** user က ကိုယ့် organization ထဲက လူ (cloud မှာ ဖန်တီးတာ ဒါမှမဟုတ် AD ကနေ sync လုပ်တာ)။ **Guest** user ကတော့ **B2B collaboration** နဲ့ ဖိတ်ထားတဲ့ ပြင်ပလူပါ- သူတို့ကိုယ်ပိုင် company account ဒါမှမဟုတ် personal account နဲ့ sign in ဝင်လို့ သူတို့ password ကို ကိုယ်က စီမံစရာမလိုဘူး။ Partner က သူ့ company က ထွက်သွားရင် home account ပိတ်ခံရပြီး ကိုယ့်ဆီ access လည်း ရပ်သွားတယ်။ **Microsoft Entra External ID** က B2B နဲ့ ကိုယ့် app အတွက် customer sign-up အပါအဝင် external identity feature တွေရဲ့ ခြုံငုံနာမည်ပါ။"
          ) },
          { type: 'table',
            head: [L("Choice", "選択肢", "ရွေးချယ်မှု"), L("Option A", "選択肢 A", "ရွေးချယ်မှု A"), L("Option B", "選択肢 B", "ရွေးချယ်မှု B")],
            rows: [
              [L("Group type", "グループの種類", "Group အမျိုးအစား"), L("**Security**: grant access to resources, apps, Azure RBAC roles", "**セキュリティ**：リソース、アプリ、Azure RBAC ロールへのアクセス付与", "**Security**- resource၊ app၊ Azure RBAC role access ပေးဖို့"), L("**Microsoft 365**: shared mailbox, calendar, Teams, SharePoint for collaboration", "**Microsoft 365**：共同作業用の共有メールボックス、予定表、Teams、SharePoint", "**Microsoft 365**- ပူးပေါင်းလုပ်ဖို့ shared mailbox၊ calendar၊ Teams၊ SharePoint")],
              [L("Membership", "メンバーシップ", "Member ထည့်ပုံ"), L("**Assigned**: an admin or owner adds members manually", "**割り当て済み**：管理者や所有者が手動でメンバーを追加", "**Assigned**- admin ဒါမှမဟုတ် owner က member ကို ကိုယ်တိုင်ထည့်"), L("**Dynamic**: a rule on attributes adds/removes members automatically (needs P1)", "**動的**：属性のルールでメンバーを自動追加・削除（P1 が必要）", "**Dynamic**- attribute rule နဲ့ member ကို အလိုအလျောက် ထည့်/ဖယ် (P1 လို)")],
            ] },
          { type: 'code', lang: 'bash', code:
`# Create a cloud user and a security group, then add the user
az ad user create --display-name "Aung Aung" \\
  --user-principal-name aung@contoso.onmicrosoft.com \\
  --password "<StrongTempPassword>" --force-change-password-next-sign-in true
az ad group create --display-name "sg-web-operators" --mail-nickname sg-web-operators
az ad group member add --group sg-web-operators \\
  --member-id $(az ad user show --id aung@contoso.onmicrosoft.com --query id -o tsv)

# Example dynamic membership rule (set in the portal or Graph):
# (user.department -eq "Sales") and (user.country -eq "Japan")`,
            caption: L("Users and groups with Azure CLI", "Azure CLI によるユーザーとグループ", "Azure CLI နဲ့ user နဲ့ group") },
          { type: 'callout', tone: 'exam', text: L(
            "Classic AZ-104 trap: a dynamic group's members **cannot be added manually**, and a group's membership type decides that. Also, dynamic rules can be **user** or **device** based, not both in one group. Need automatic membership by department? Dynamic user group plus **Entra ID P1** for the members.",
            "AZ-104 の定番の罠：動的グループのメンバーは**手動で追加できません**。また動的ルールは**ユーザー**か**デバイス**のどちらかで、1 つのグループに両方は混在できません。部署ごとに自動でメンバーにしたいなら、動的ユーザーグループ＋メンバー分の **Entra ID P1** です。",
            "AZ-104 မှာ မကြာခဏ ထောင်ချောက်- dynamic group မှာ member ကို **manual ထည့်လို့မရဘူး**။ Dynamic rule က **user** ဒါမှမဟုတ် **device** အခြေခံ တစ်မျိုးပဲ ဖြစ်ရတယ်၊ group တစ်ခုထဲမှာ နှစ်မျိုးမရောရဘူး။ Department အလိုက် auto ထည့်ချင်ရင် dynamic user group + **Entra ID P1** လိုတယ်။"
          ) },
          { type: 'callout', tone: 'memory', text: L(
            "**S**ecurity group = **S**ecure access. **M**icrosoft 365 group = **M**ail and Teams collaboration. **D**ynamic = **D**epartment-style rules, done automatically.",
            "**S**ecurity グループ＝**S**ecure（安全な）アクセス。**M**icrosoft 365 グループ＝**M**ail と Teams の共同作業。**D**ynamic＝**D**epartment のようなルールで自動。",
            "**S**ecurity group = **S**ecure access ပေးဖို့။ **M**icrosoft 365 group = **M**ail နဲ့ Teams collaboration။ **D**ynamic = **D**epartment လို rule နဲ့ အလိုအလျောက်။"
          ) },
        ],
      },
      {
        id: "authentication",
        title: L("Authentication: MFA, passwordless and SSPR", "認証：MFA、パスワードレス、SSPR", "Authentication - MFA၊ Passwordless နဲ့ SSPR"),
        blocks: [
          { type: 'p', text: L(
            "Passwords alone are weak: they are guessed, reused and phished. **Multifactor authentication (MFA)** requires two or more **different kinds** of evidence. A password plus a PIN is still one factor (both are things you know); a password plus an Authenticator push is two factors. Microsoft reports that MFA blocks the vast majority of account-compromise attacks, which is why Azure now enforces MFA for sign-ins to the Azure portal, CLI and PowerShell.",
            "パスワードだけでは弱く、推測・使い回し・フィッシングの被害に遭います。**多要素認証（MFA）**は 2 つ以上の**異なる種類**の証拠を要求します。パスワード＋PIN はどちらも「知っているもの」なので 1 要素のままですが、パスワード＋Authenticator のプッシュ通知は 2 要素です。MFA はアカウント侵害攻撃の大部分を防ぐと Microsoft は報告しており、Azure は現在 Azure portal、CLI、PowerShell へのサインインに MFA を必須化しています。",
            "Password တစ်ခုတည်းက အားနည်းတယ်- ခန့်မှန်းခံရတယ်၊ ထပ်ခါသုံးတယ်၊ phishing ခံရတယ်။ **Multifactor authentication (MFA)** က **မတူညီတဲ့ အမျိုးအစား** သက်သေ ၂ ခု ဒါမှမဟုတ် အထက် တောင်းတယ်။ Password + PIN က နှစ်ခုလုံး သိတဲ့အရာမို့ factor တစ်ခုပဲ ရှိသေးတယ်။ Password + Authenticator push ဆိုရင်တော့ factor ၂ ခုပါ။ MFA က account ဖောက်ခံရတဲ့ attack အများစုကို တားနိုင်တယ်လို့ Microsoft က ပြောထားလို့ Azure portal၊ CLI၊ PowerShell sign-in တွေအတွက် MFA ကို အခု မဖြစ်မနေ သုံးခိုင်းထားတယ်။"
          ) },
          { type: 'list', items: [
            L("**Something you know**: password, PIN.", "**知っているもの**：パスワード、PIN。", "**သိတဲ့အရာ**- password၊ PIN။"),
            L("**Something you have**: phone with Microsoft Authenticator, FIDO2 security key, hardware token.", "**持っているもの**：Microsoft Authenticator 入りのスマホ、FIDO2 セキュリティキー、ハードウェアトークン。", "**ပိုင်ဆိုင်တဲ့အရာ**- Microsoft Authenticator ပါတဲ့ ဖုန်း၊ FIDO2 security key၊ hardware token။"),
            L("**Something you are**: fingerprint or face (biometrics).", "**自分自身の特徴**：指紋や顔（生体認証）。", "**ကိုယ်တိုင်ဖြစ်တဲ့အရာ**- လက်ဗွေ ဒါမှမဟုတ် မျက်နှာ (biometrics)။"),
          ] },
          { type: 'p', text: L(
            "**Passwordless** removes the password completely and is both safer and easier: **Windows Hello for Business** (PIN/biometric tied to the device), **Microsoft Authenticator** phone sign-in, and **passkeys / FIDO2 security keys**. **Self-service password reset (SSPR)** lets users reset a forgotten password themselves after proving identity with registered methods (Authenticator, phone, email, security questions), which cuts helpdesk tickets. With **password writeback** (P1), the new password is written back to on-premises AD for hybrid users.",
            "**パスワードレス**はパスワードを完全になくし、より安全で簡単です：**Windows Hello for Business**（デバイスに紐付いた PIN/生体認証）、**Microsoft Authenticator** の電話サインイン、**パスキー / FIDO2 セキュリティキー**。**セルフサービスパスワードリセット（SSPR）**では、登録済みの方法（Authenticator、電話、メール、秘密の質問）で本人確認した後、ユーザー自身が忘れたパスワードをリセットでき、ヘルプデスクへの問い合わせが減ります。**パスワードライトバック**（P1）を使うと、ハイブリッドユーザーの新しいパスワードがオンプレミス AD に書き戻されます。",
            "**Passwordless** က password ကို လုံးဝဖယ်ပြီး ပိုလုံခြုံ၊ ပိုလွယ်တယ်- **Windows Hello for Business** (device နဲ့ချိတ်ထားတဲ့ PIN/biometric)၊ **Microsoft Authenticator** phone sign-in၊ **passkey / FIDO2 security key**။ **Self-service password reset (SSPR)** က user တွေ register လုပ်ထားတဲ့ method (Authenticator၊ phone၊ email၊ security question) နဲ့ ကိုယ့်ကိုယ်ကို သက်သေပြပြီး မေ့သွားတဲ့ password ကို ကိုယ်တိုင် reset လုပ်ခွင့်ပေးလို့ helpdesk ticket လျော့တယ်။ **Password writeback** (P1) သုံးရင် hybrid user ရဲ့ password အသစ်ကို on-prem AD ဆီ ပြန်ရေးပေးတယ်။"
          ) },
          { type: 'callout', tone: 'memory', text: L(
            "MFA = **Know, Have, Are** (pick two different ones). Two passwords are still only **Know + Know** = one factor.",
            "MFA＝**知る・持つ・自分**（異なるものを 2 つ選ぶ）。パスワード 2 つは **知る＋知る**＝1 要素にすぎません。",
            "MFA = **သိ၊ ပိုင်၊ ဖြစ်** (မတူတာ ၂ ခုရွေး)။ Password ၂ ခုဆိုတာ **သိ + သိ** = factor တစ်ခုပဲ။"
          ) },
        ],
      },
      {
        id: "conditional-access",
        title: L("Conditional Access, ID Protection and licenses", "条件付きアクセス、ID Protection、ライセンス", "Conditional Access၊ ID Protection နဲ့ License"),
        blocks: [
          { type: 'p', text: L(
            "Requiring MFA for every click annoys users; never requiring it is dangerous. **Conditional Access** is Entra ID's policy engine that decides **per sign-in** using signals: **IF** these conditions are true (user/group, app, location, device state, client app, risk) **THEN** block, grant, or grant with requirements (MFA, compliant device, terms of use). Example: staff in the Tokyo office on a compliant laptop get in normally; the same user from an unknown country must do MFA; legacy authentication is blocked for everyone.",
            "クリックのたびに MFA を求めるとユーザーは困り、まったく求めないのは危険です。**条件付きアクセス**は Entra ID のポリシーエンジンで、シグナルを使って**サインインごと**に判断します：**IF**（ユーザー/グループ、アプリ、場所、デバイスの状態、クライアントアプリ、リスク）が成り立つ **THEN** ブロック、許可、または条件付き許可（MFA、準拠デバイス、利用規約）。例：東京オフィスで準拠ノート PC を使う社員は通常どおりサインインでき、同じユーザーが不明な国からアクセスすると MFA が必要、レガシー認証は全員ブロック、という具合です。",
            "Click တိုင်း MFA တောင်းရင် user တွေ စိတ်ညစ်တယ်၊ ဘယ်တော့မှ မတောင်းရင်လည်း အန္တရာယ်ရှိတယ်။ **Conditional Access** က Entra ID ရဲ့ policy engine ဖြစ်ပြီး signal တွေကိုသုံးပြီး **sign-in တစ်ခုချင်းစီ** အတွက် ဆုံးဖြတ်တယ်- **IF** (user/group၊ app၊ location၊ device state၊ client app၊ risk) ဖြစ်ရင် **THEN** block၊ grant ဒါမှမဟုတ် လိုအပ်ချက်နဲ့ grant (MFA၊ compliant device၊ terms of use)။ ဥပမာ- Tokyo office ထဲက compliant laptop နဲ့ ဝန်ထမ်းက ပုံမှန်ဝင်ရတယ်၊ အဲဒီ user ပဲ မသိတဲ့ နိုင်ငံကဝင်ရင် MFA လုပ်ရတယ်၊ legacy authentication ကိုတော့ အားလုံး block။"
          ) },
          { type: 'diagram', text:
`  SIGNALS                    DECISION            ENFORCEMENT
 +----------------+        +-------------+      +----------------+
 | User / group   |        |             | ---> | Allow access   |
 | App            |  --->  | Conditional | ---> | Require MFA or |
 | Location / IP  |        |   Access    |      | compliant dev. |
 | Device state   |        |   policy    | ---> | Block access   |
 | Sign-in risk   |        +-------------+      +----------------+
 +----------------+`,
            caption: L("Conditional Access: IF signals THEN decision", "条件付きアクセス：IF シグナル THEN 判断", "Conditional Access- IF signal THEN ဆုံးဖြတ်ချက်") },
          { type: 'p', text: L(
            "**Microsoft Entra ID Protection** uses Microsoft's threat intelligence to calculate **sign-in risk** (for example, a leaked-password spray or an impossible-travel sign-in) and **user risk** (for example, credentials found on the dark web). Risk-based Conditional Access can then automatically require MFA or a secure password change. For small tenants without P1, **security defaults** are a free, one-switch baseline: MFA registration for everyone, MFA for admins and when needed, and legacy authentication blocked.",
            "**Microsoft Entra ID Protection** は Microsoft の脅威インテリジェンスで**サインインリスク**（例：パスワードスプレー、ありえない移動）と**ユーザーリスク**（例：ダークウェブで漏えいした資格情報）を算出します。リスクベースの条件付きアクセスで、自動的に MFA や安全なパスワード変更を要求できます。P1 のない小規模テナントには、無料でスイッチ 1 つの基本設定である**セキュリティの既定値**があります：全員の MFA 登録、管理者や必要時の MFA、レガシー認証のブロックです。",
            "**Microsoft Entra ID Protection** က Microsoft ရဲ့ threat intelligence နဲ့ **sign-in risk** (ဥပမာ password spray၊ impossible travel) နဲ့ **user risk** (ဥပမာ dark web မှာ ပေါက်ကြားတဲ့ credential) ကို တွက်တယ်။ Risk-based Conditional Access က MFA ဒါမှမဟုတ် secure password change ကို အလိုအလျောက် တောင်းနိုင်တယ်။ P1 မရှိတဲ့ tenant သေးတွေအတွက် **security defaults** ဆိုတဲ့ free ဖြစ်ပြီး switch တစ်ခုတည်းနဲ့ ဖွင့်ရတဲ့ baseline ရှိတယ်- လူတိုင်း MFA register၊ admin နဲ့ လိုတဲ့အခါ MFA၊ legacy authentication block။"
          ) },
          { type: 'table',
            head: [L("License", "ライセンス", "License အမျိုးအစား"), L("Key capabilities (concept level)", "主な機能（概念レベル）", "အဓိက စွမ်းရည် (concept level)")],
            rows: [
              [L("Entra ID **Free**", "Entra ID **Free**（無料）", "Entra ID **Free** (အခမဲ့)"), L("Users and groups, SSO to apps, B2B guests, security defaults, sync with Entra Connect", "ユーザーとグループ、アプリへの SSO、B2B ゲスト、セキュリティの既定値、Entra Connect による同期", "User နဲ့ group၊ app SSO၊ B2B guest၊ security defaults၊ Entra Connect sync")],
              [L("Entra ID **P1**", "Entra ID **P1**（有料）", "Entra ID **P1** (ပိုက်ဆံပေး)"), L("Free + **Conditional Access**, **dynamic groups**, SSPR with on-premises writeback, hybrid features", "Free＋**条件付きアクセス**、**動的グループ**、オンプレミスへの書き戻し付き SSPR、ハイブリッド機能", "Free + **Conditional Access**၊ **dynamic group**၊ on-prem writeback ပါတဲ့ SSPR၊ hybrid feature")],
              [L("Entra ID **P2**", "Entra ID **P2**（上位）", "Entra ID **P2** (အမြင့်ဆုံး)"), L("P1 + **ID Protection** (risk-based policies) and **Privileged Identity Management (PIM)** for just-in-time admin roles", "P1＋**ID Protection**（リスクベースのポリシー）と、管理者ロールをジャストインタイムで付与する **Privileged Identity Management（PIM）**", "P1 + **ID Protection** (risk-based policy) နဲ့ admin role ကို just-in-time ပေးတဲ့ **Privileged Identity Management (PIM)**")],
            ] },
          { type: 'callout', tone: 'exam', text: L(
            "License questions are easy points: **Conditional Access or dynamic groups → P1**. **Risk-based policies (ID Protection) or PIM → P2**. Security defaults and Conditional Access cannot be used together: you turn security defaults off when you create CA policies.",
            "ライセンス問題は得点源です：**条件付きアクセスや動的グループ → P1**。**リスクベースのポリシー（ID Protection）や PIM → P2**。セキュリティの既定値と条件付きアクセスは併用できず、CA ポリシーを作るときはセキュリティの既定値をオフにします。",
            "License မေးခွန်းတွေက အမှတ်ယူလွယ်တယ်- **Conditional Access ဒါမှမဟုတ် dynamic group → P1**။ **Risk-based policy (ID Protection) ဒါမှမဟုတ် PIM → P2**။ Security defaults နဲ့ Conditional Access ကို တွဲမသုံးနိုင်ဘူး- CA policy ဖန်တီးရင် security defaults ကို ပိတ်ရတယ်။"
          ) },
        ],
      },
      {
        id: "azure-rbac",
        title: L("Azure RBAC: who can do what, where", "Azure RBAC：誰が・何を・どこで", "Azure RBAC - ဘယ်သူ၊ ဘာကို၊ ဘယ်မှာ"),
        blocks: [
          { type: 'p', text: L(
            "Authentication proves who you are; **Azure role-based access control (RBAC)** decides what you can do with Azure resources. A **role assignment** joins three things: a **security principal** (user, group, service principal or managed identity) **who**, a **role definition** (a list of allowed actions such as `Microsoft.Compute/virtualMachines/start/action`) **what**, and a **scope** **where**. Like a hotel key card: the guest (principal) gets a card type (role) that opens certain doors on certain floors (scope).",
            "認証は「誰か」を証明し、**Azure ロールベースのアクセス制御（RBAC）**は Azure リソースで「何ができるか」を決めます。**ロール割り当て**は 3 つを結び付けます：**誰が**＝**セキュリティプリンシパル**（ユーザー、グループ、サービスプリンシパル、マネージド ID）、**何を**＝**ロール定義**（`Microsoft.Compute/virtualMachines/start/action` のような許可アクションの一覧）、**どこで**＝**スコープ**です。ホテルのカードキーのように、宿泊客（プリンシパル）は特定のフロア（スコープ）の特定のドアを開けられる種類のカード（ロール）を受け取ります。",
            "Authentication က ဘယ်သူလဲ သက်သေပြတယ်၊ **Azure role-based access control (RBAC)** က Azure resource တွေမှာ ဘာလုပ်ခွင့်ရှိလဲ ဆုံးဖြတ်တယ်။ **Role assignment** တစ်ခုက ၃ ခုကို ချိတ်တယ်- **ဘယ်သူ** = **security principal** (user၊ group၊ service principal၊ managed identity)၊ **ဘာ** = **role definition** (`Microsoft.Compute/virtualMachines/start/action` လို ခွင့်ပြုထားတဲ့ action စာရင်း)၊ **ဘယ်မှာ** = **scope**။ Hotel key card လိုပါပဲ- ဧည့်သည် (principal) က အထပ်သတ်မှတ်ထားတဲ့ (scope) တံခါးတွေဖွင့်လို့ရတဲ့ ကတ်အမျိုးအစား (role) ရတယ်။"
          ) },
          { type: 'diagram', text:
`Management group  (assign here -> applies to everything below)
      |
      +-- Subscription
             |
             +-- Resource group
                    |
                    +-- Resource (VM, storage account, ...)

Role assignment = Security principal + Role definition + Scope
                     (who)               (what)           (where)`,
            caption: L("RBAC scopes and inheritance flow downward", "RBAC のスコープと継承は下方向に流れる", "RBAC scope နဲ့ inheritance က အောက်ဘက်ကို စီးဆင်းတယ်") },
          { type: 'table',
            head: [L("Built-in role", "組み込みロール", "Built-in role အမည်"), L("Manage resources", "リソース管理", "Resource စီမံ"), L("Grant access to others", "他者へのアクセス付与", "တခြားသူကို access ပေး"), L("Typical user", "典型的な利用者", "ပုံမှန်သုံးသူ")],
            rows: [
              [L("**Owner**", "**Owner**（所有者）", "**Owner** (ပိုင်ရှင်)"), L("Yes, everything", "はい、すべて", "ရ၊ အားလုံး"), L("Yes", "はい", "ရ"), L("Subscription or project lead", "サブスクリプション / プロジェクト責任者", "Subscription ဒါမှမဟုတ် project lead")],
              [L("**Contributor**", "**Contributor**（共同作成者）", "**Contributor** (လုပ်ဆောင်သူ)"), L("Yes, create/change/delete", "はい、作成・変更・削除", "ရ၊ create/change/delete"), L("No", "いいえ", "မရ"), L("Engineers and DevOps pipelines", "エンジニア、DevOps パイプライン", "Engineer နဲ့ DevOps pipeline")],
              [L("**Reader**", "**Reader**（閲覧者）", "**Reader** (ကြည့်သူ)"), L("View only", "閲覧のみ", "ကြည့်ရုံပဲ"), L("No", "いいえ", "မရ"), L("Auditors, finance, support", "監査担当、財務、サポート", "Auditor၊ finance၊ support")],
              [L("**User Access Administrator**", "**User Access Administrator**（アクセス管理者）", "**User Access Administrator** (access စီမံသူ)"), L("No", "いいえ", "မရ"), L("Yes, manage role assignments", "はい、ロール割り当ての管理", "ရ၊ role assignment စီမံ"), L("Security / access team", "セキュリティ / アクセス管理チーム", "Security / access အဖွဲ့")],
            ] },
          { type: 'callout', tone: 'memory', text: L(
            "**O-C-R-U**: **O**wner = everything; **C**ontributor = everything except **access**; **R**eader = look, don't touch; **U**ser Access Administrator = only **access**. Contributor + User Access Administrator together ≈ Owner.",
            "**O-C-R-U**：**O**wner＝すべて、**C**ontributor＝**アクセス管理**以外すべて、**R**eader＝見るだけ、**U**ser Access Administrator＝**アクセス管理**だけ。Contributor＋User Access Administrator ≈ Owner です。",
            "**O-C-R-U**- **O**wner = အားလုံး၊ **C**ontributor = **access** ကလွဲရင် အားလုံး၊ **R**eader = ကြည့်ရုံ မထိနဲ့၊ **U**ser Access Administrator = **access** ပဲ။ Contributor + User Access Administrator ≈ Owner။"
          ) },
        ],
      },
      {
        id: "rbac-advanced",
        title: L("Inheritance, custom roles, deny assignments, Entra roles vs Azure roles", "継承、カスタムロール、拒否割り当て、Entra ロールと Azure ロール", "Inheritance၊ custom role၊ deny assignment၊ Entra role vs Azure role"),
        blocks: [
          { type: 'p', text: L(
            "Role assignments are **inherited downward**: Reader at a subscription means Reader on every resource group and resource inside it. RBAC is **additive**: if a user is Reader on the subscription and Contributor on `rg-web`, their effective permission in `rg-web` is Contributor. You cannot take away an inherited permission with another role assignment. The only thing that overrides an allow is a **deny assignment**, which blocks specific actions even if a role allows them. You do not create deny assignments directly; Azure creates them, for example through **deployment stacks** deny settings or **Azure Managed Applications**.",
            "ロール割り当ては**下方向に継承**されます。サブスクリプションの Reader は、その中のすべての Resource Group とリソースで Reader です。RBAC は**加算的**です。ユーザーがサブスクリプションで Reader、`rg-web` で Contributor なら、`rg-web` での実効権限は Contributor です。別のロール割り当てで継承された権限を取り消すことはできません。許可を上書きできる唯一のものは**拒否割り当て**で、ロールが許可していても特定のアクションをブロックします。拒否割り当ては直接作成せず、**デプロイスタック**の拒否設定や **Azure Managed Applications** などを通じて Azure が作成します。",
            "Role assignment တွေက **အောက်ကို inherit** ဖြစ်တယ်- subscription မှာ Reader ဆိုရင် အထဲက resource group နဲ့ resource အားလုံးမှာ Reader ပါ။ RBAC က **additive (ပေါင်းထည့်)** ဖြစ်တယ်- user က subscription မှာ Reader၊ `rg-web` မှာ Contributor ဆိုရင် `rg-web` ထဲမှာ effective permission က Contributor ပါ။ နောက် role assignment တစ်ခုနဲ့ inherit ဖြစ်လာတဲ့ permission ကို ပြန်နုတ်လို့ မရဘူး။ Allow ကို override လုပ်နိုင်တာ တစ်ခုတည်းက **deny assignment** ဖြစ်ပြီး role က ခွင့်ပြုထားရင်တောင် action သတ်မှတ်ချက်တွေကို block လုပ်တယ်။ Deny assignment ကို ကိုယ်တိုင်တိုက်ရိုက် မဖန်တီးရဘူး- **deployment stack** deny setting ဒါမှမဟုတ် **Azure Managed Applications** လိုဟာတွေကနေ Azure က ဖန်တီးတာပါ။"
          ) },
          { type: 'code', lang: 'bash', code:
`# Give a group Contributor on one resource group only (least privilege)
GROUP_ID=$(az ad group show --group sg-web-operators --query id -o tsv)
az role assignment create --assignee-object-id $GROUP_ID \\
  --assignee-principal-type Group --role "Contributor" \\
  --scope /subscriptions/<sub-id>/resourceGroups/rg-web

# Check what a user can do (includes inherited assignments)
az role assignment list --assignee aung@contoso.onmicrosoft.com \\
  --all --include-inherited --output table`,
            caption: L("Assign roles to groups, not individuals", "ロールは個人ではなくグループに割り当てる", "Role ကို လူတစ်ယောက်ချင်းမဟုတ်ဘဲ group ကို ပေးပါ") },
          { type: 'code', lang: 'json', code:
`{
  "Name": "VM Operator",
  "IsCustom": true,
  "Description": "Start, restart and stop VMs only.",
  "Actions": [
    "Microsoft.Compute/virtualMachines/read",
    "Microsoft.Compute/virtualMachines/start/action",
    "Microsoft.Compute/virtualMachines/restart/action",
    "Microsoft.Compute/virtualMachines/deallocate/action"
  ],
  "NotActions": [],
  "DataActions": [],
  "AssignableScopes": ["/subscriptions/<sub-id>"]
}`,
            caption: L("Custom role: Actions for the control plane, DataActions for data, AssignableScopes for where it can be used", "カスタムロール：Actions はコントロールプレーン、DataActions はデータ、AssignableScopes は使用可能な範囲", "Custom role- Actions က control plane၊ DataActions က data၊ AssignableScopes က ဘယ်မှာသုံးလို့ရလဲ") },
          { type: 'table',
            head: [L("Aspect", "観点", "အချက်"), L("Microsoft Entra roles", "Microsoft Entra ロール", "Microsoft Entra role များ"), L("Azure roles (RBAC)", "Azure ロール（RBAC）", "Azure role များ (RBAC)")],
            rows: [
              [L("Controls", "制御対象", "ထိန်းချုပ်တာ"), L("Directory objects: users, groups, licenses, app registrations", "ディレクトリオブジェクト：ユーザー、グループ、ライセンス、アプリ登録", "Directory object- user၊ group၊ license၊ app registration"), L("Azure resources: VMs, storage, networks", "Azure リソース：VM、ストレージ、ネットワーク", "Azure resource- VM၊ storage၊ network")],
              [L("Examples", "例", "ဥပမာ"), L("Global Administrator, User Administrator, Helpdesk Administrator", "Global Administrator、User Administrator、Helpdesk Administrator など", "Global Administrator၊ User Administrator၊ Helpdesk Administrator"), L("Owner, Contributor, Reader, Virtual Machine Contributor", "Owner、Contributor、Reader、Virtual Machine Contributor など", "Owner၊ Contributor၊ Reader၊ Virtual Machine Contributor")],
              [L("Scope", "スコープ", "Scope (အကျယ်အဝန်း)"), L("Tenant or administrative unit", "テナントまたは管理単位", "Tenant ဒါမှမဟုတ် administrative unit"), L("Management group, subscription, resource group, resource", "管理グループ、サブスクリプション、Resource Group、リソース", "Management group၊ subscription၊ resource group၊ resource")],
            ] },
          { type: 'callout', tone: 'exam', text: L(
            "Trap: a **Global Administrator** does NOT automatically see Azure subscriptions. They must turn on **Access management for Azure resources** (elevate access), which grants **User Access Administrator at root scope `/`**; then they can assign themselves Owner. Also remember: to reset a user's password you need an **Entra role** (for example Helpdesk Administrator), never an Azure role like Owner.",
            "罠：**Global Administrator** は自動的には Azure サブスクリプションを見られません。**Azure リソースのアクセス管理**（アクセス権の昇格）をオンにする必要があり、これで**ルートスコープ `/` の User Access Administrator** が付与され、自分に Owner を割り当てられるようになります。また、ユーザーのパスワードリセットには **Entra ロール**（例：Helpdesk Administrator）が必要で、Owner のような Azure ロールではできません。",
            "ထောင်ချောက်- **Global Administrator** က Azure subscription တွေကို အလိုအလျောက် မမြင်ရဘူး။ **Access management for Azure resources** (elevate access) ကို ဖွင့်ရတယ်၊ အဲဒါက **root scope `/` မှာ User Access Administrator** ပေးပြီး ပြီးမှ ကိုယ့်ကိုယ်ကို Owner ပေးလို့ရတယ်။ နောက်တစ်ခု- user password reset လုပ်ဖို့ **Entra role** (ဥပမာ Helpdesk Administrator) လိုတယ်၊ Owner လို Azure role နဲ့ မရဘူး။"
          ) },
        ],
      },
      {
        id: "managed-identities",
        title: L("Service principals and managed identities: identities for apps", "サービスプリンシパルとマネージド ID：アプリのための ID", "Service principal နဲ့ managed identity - app တွေအတွက် identity"),
        blocks: [
          { type: 'p', text: L(
            "Apps and scripts need identities too. When you register an app, Entra ID creates a **service principal**, the app's identity in your tenant. A service principal authenticates with a **client secret** or **certificate**, and someone must store, protect and rotate that credential. Secrets in config files are one of the most common causes of cloud breaches.",
            "アプリやスクリプトにも ID が必要です。アプリを登録すると、Entra ID はテナント内のアプリの ID である**サービスプリンシパル**を作成します。サービスプリンシパルは**クライアントシークレット**か**証明書**で認証し、誰かがその資格情報を保管・保護・ローテーションしなければなりません。設定ファイル内のシークレットは、クラウド侵害の最も一般的な原因の 1 つです。",
            "App နဲ့ script တွေလည်း identity လိုတယ်။ App ကို register လုပ်ရင် Entra ID က ကိုယ့် tenant ထဲမှာ app ရဲ့ identity ဖြစ်တဲ့ **service principal** ကို ဖန်တီးတယ်။ Service principal က **client secret** ဒါမှမဟုတ် **certificate** နဲ့ authenticate လုပ်တယ်၊ အဲဒီ credential ကို တစ်ယောက်ယောက်က သိမ်း၊ ကာကွယ်၊ rotate လုပ်ရတယ်။ Config file ထဲက secret တွေက cloud breach ရဲ့ အဖြစ်အများဆုံး အကြောင်းရင်းတစ်ခုပါ။"
          ) },
          { type: 'p', text: L(
            "A **managed identity** is a special service principal whose credentials **Azure manages for you**: no secret to see, store or rotate. Code running on a VM, App Service, Function or container simply asks the local endpoint for a token and calls Key Vault, Storage or SQL. You still grant it access with RBAC (for example **Key Vault Secrets User**).",
            "**マネージド ID** は、資格情報を **Azure が代わりに管理する**特別なサービスプリンシパルです。見る・保管する・ローテーションするシークレットはありません。VM、App Service、Functions、コンテナー上のコードはローカルのエンドポイントにトークンを要求するだけで、Key Vault、Storage、SQL を呼び出せます。アクセス許可は引き続き RBAC で付与します（例：**Key Vault Secrets User**）。",
            "**Managed identity** က credential ကို **Azure က ကိုယ့်ကိုယ်စား စီမံပေးတဲ့** service principal အထူးအမျိုးအစားပါ- မြင်ရ၊ သိမ်းရ၊ rotate လုပ်ရမယ့် secret မရှိဘူး။ VM၊ App Service၊ Function၊ container ပေါ်က code က local endpoint ဆီက token တောင်းရုံနဲ့ Key Vault၊ Storage၊ SQL ကို ခေါ်လို့ရတယ်။ Access ကိုတော့ RBAC နဲ့ ပေးရဆဲပါ (ဥပမာ **Key Vault Secrets User**)။"
          ) },
          { type: 'table',
            head: [L("Feature", "機能", "လက္ခဏာ"), L("System-assigned", "システム割り当て", "System-assigned (resource နဲ့ချိတ်)"), L("User-assigned", "ユーザー割り当て", "User-assigned (သီးခြား)")],
            rows: [
              [L("Created as", "作成方法", "ဖန်တီးပုံ"), L("A setting on one resource", "1 つのリソース上の設定", "Resource တစ်ခုပေါ်က setting"), L("Its own standalone Azure resource", "独立した Azure リソース", "သီးခြား Azure resource တစ်ခု")],
              [L("Lifecycle", "ライフサイクル", "သက်တမ်း (Lifecycle)"), L("Deleted automatically with the resource", "リソースと一緒に自動削除", "Resource ဖျက်ရင် အလိုအလျောက် ပျက်"), L("Lives until you delete it", "自分で削除するまで存続", "ကိုယ်တိုင်ဖျက်မှ ပျက်")],
              [L("Sharing", "共有", "မျှဝေသုံးခြင်း"), L("One resource only", "1 つのリソースのみ", "Resource တစ်ခုတည်း"), L("Many resources can share it", "複数のリソースで共有可能", "Resource အများကြီး share လို့ရ")],
              [L("Best for", "最適な用途", "သင့်တော်တာ"), L("Single workload, simple setup", "単一ワークロード、簡単な構成", "Workload တစ်ခု၊ setup ရိုးရှင်း"), L("Scale sets, many apps with same access, pre-provisioned access", "スケールセット、同じアクセスを持つ多数のアプリ、事前のアクセス準備", "Scale set၊ access တူတဲ့ app အများ၊ ကြိုတင် access ပြင်ဆင်ထားချင်ရင်")],
            ] },
          { type: 'code', lang: 'bash', code:
`# Turn on a system-assigned identity for a VM and let it read Key Vault secrets
PRINCIPAL_ID=$(az vm identity assign -g rg-web -n vm-web01 --query systemAssignedIdentity -o tsv)
az role assignment create --assignee-object-id $PRINCIPAL_ID \\
  --assignee-principal-type ServicePrincipal \\
  --role "Key Vault Secrets User" \\
  --scope $(az keyvault show -n kv-contoso-prod --query id -o tsv)

# A user-assigned identity is a resource you create first
az identity create -g rg-shared -n id-app-shared`,
            caption: L("Managed identity + RBAC = no secrets in code", "マネージド ID＋RBAC＝コードにシークレットなし", "Managed identity + RBAC = code ထဲ secret မရှိ") },
          { type: 'callout', tone: 'tip', text: L(
            "Rule of thumb: if the code runs **in Azure**, use a **managed identity**. If it runs **outside Azure** (GitHub Actions, on-premises), use a service principal, ideally with **workload identity federation** (OIDC) so there is still no stored secret.",
            "目安：コードが **Azure 内**で動くなら**マネージド ID**。**Azure 外**（GitHub Actions、オンプレミス）で動くならサービスプリンシパルを使い、可能なら**ワークロード ID フェデレーション**（OIDC）で保存されたシークレットをなくします。",
            "မှတ်ရလွယ်တဲ့ rule- code က **Azure ထဲမှာ** run ရင် **managed identity** သုံး။ **Azure အပြင်** (GitHub Actions၊ on-prem) မှာ run ရင် service principal သုံးပြီး secret မသိမ်းရအောင် **workload identity federation** (OIDC) နဲ့ တွဲသုံးတာ အကောင်းဆုံး။"
          ) },
        ],
      },
      {
        id: "zero-trust-defender",
        title: L("Zero Trust, defense in depth and Microsoft Defender for Cloud", "ゼロトラスト、多層防御、Microsoft Defender for Cloud", "Zero Trust၊ Defense in depth နဲ့ Microsoft Defender for Cloud"),
        blocks: [
          { type: 'p', text: L(
            "**Zero Trust** replaces \"trust everything inside the network\" with \"never trust, always verify\". It has three principles: **Verify explicitly** (authenticate and authorize every request using all signals), **Use least privilege access** (just-in-time and just-enough access, for example PIM and narrow RBAC scopes), and **Assume breach** (segment networks, encrypt everything, monitor and limit the blast radius). Conditional Access is Zero Trust in action.",
            "**ゼロトラスト**は「ネットワーク内部はすべて信頼する」を「決して信頼せず、常に検証する」に置き換えます。3 つの原則があります：**明示的に検証する**（すべてのシグナルで要求ごとに認証・認可）、**最小特権アクセスを使用する**（PIM や狭い RBAC スコープなどによる Just-In-Time / Just-Enough のアクセス）、**侵害を想定する**（ネットワークを分割し、すべてを暗号化し、監視して被害範囲を限定）。条件付きアクセスはゼロトラストの実践例です。",
            "**Zero Trust** က \"network ထဲမှာ ရှိရင် အားလုံးယုံ\" ဆိုတာကို \"ဘယ်တော့မှ မယုံနဲ့၊ အမြဲစစ်\" နဲ့ အစားထိုးတယ်။ Principle ၃ ခုရှိတယ်- **Verify explicitly** (signal အားလုံးသုံးပြီး request တိုင်း authenticate/authorize)၊ **Use least privilege access** (PIM၊ RBAC scope ကျဉ်းကျဉ်းလို just-in-time၊ just-enough access)၊ **Assume breach** (network ခွဲ၊ အားလုံး encrypt၊ monitor လုပ်ပြီး ထိခိုက်မှုအကွာအဝေး ကန့်သတ်)။ Conditional Access က Zero Trust ကို လက်တွေ့အသုံးချတာပါ။"
          ) },
          { type: 'p', text: L(
            "**Defense in depth** is like a medieval castle: moat, walls, guards and a locked treasury. If one layer fails, the next one slows the attacker. Azure describes seven layers, from outside to the center:",
            "**多層防御**は中世の城のようなものです：堀、城壁、衛兵、施錠された宝物庫。1 つの層が破られても次の層が攻撃者を遅らせます。Azure では外側から中心に向かって 7 つの層を説明しています：",
            "**Defense in depth** က ရှေးခေတ် ရဲတိုက်လိုပါပဲ- ကျုံး၊ တံတိုင်း၊ အစောင့်၊ သော့ခတ်ထားတဲ့ ဘဏ္ဍာတိုက်။ Layer တစ်ခု ပေါက်သွားရင် နောက် layer က တိုက်ခိုက်သူကို နှောင့်နှေးစေတယ်။ Azure က အပြင်ကနေ အလယ်ထိ layer ၇ ခုကို ဖော်ပြထားတယ်-"
          ) },
          { type: 'steps', items: [
            L("**Physical security**: datacenter buildings and hardware (Microsoft).", "**物理セキュリティ**：データセンターの建物とハードウェア（Microsoft）。", "**Physical security**- datacenter အဆောက်အအုံနဲ့ hardware (Microsoft)။"),
            L("**Identity and access**: Entra ID, MFA, Conditional Access, RBAC.", "**ID とアクセス**：Entra ID、MFA、条件付きアクセス、RBAC。", "**Identity and access**- Entra ID၊ MFA၊ Conditional Access၊ RBAC။"),
            L("**Perimeter**: DDoS Protection, Azure Firewall.", "**境界**：DDoS Protection、Azure Firewall。", "**Perimeter**- DDoS Protection၊ Azure Firewall။"),
            L("**Network**: NSGs, segmentation, private endpoints.", "**ネットワーク**：NSG、セグメント化、プライベートエンドポイント。", "**Network**- NSG၊ segmentation၊ private endpoint။"),
            L("**Compute**: patch VMs, secure access with Bastion, endpoint protection.", "**コンピューティング**：VM のパッチ適用、Bastion による安全なアクセス、エンドポイント保護。", "**Compute**- VM patch၊ Bastion နဲ့ secure access၊ endpoint protection။"),
            L("**Application**: secure code, secrets in Key Vault.", "**アプリケーション**：安全なコード、Key Vault でのシークレット管理。", "**Application**- secure code၊ secret ကို Key Vault မှာ။"),
            L("**Data**: encryption at rest and in transit, access control.", "**データ**：保存時・転送時の暗号化、アクセス制御。", "**Data**- at rest နဲ့ in transit encryption၊ access control။"),
          ] },
          { type: 'p', text: L(
            "**Microsoft Defender for Cloud** is the security dashboard for this whole picture. It has two halves: **Cloud Security Posture Management (CSPM)**, which continuously assesses your configuration, gives **recommendations** and a **secure score** (foundational CSPM is free), plus regulatory compliance views; and **Cloud Workload Protection (CWP)**, paid **Defender plans** (for Servers, Storage, SQL, Containers, Key Vault and more) that detect threats and raise **security alerts**. It also covers **AWS, GCP and on-premises** machines (via Azure Arc).",
            "**Microsoft Defender for Cloud** は、この全体像のためのセキュリティダッシュボードです。2 つの部分があります。構成を継続的に評価し、**推奨事項**と**セキュアスコア**（基本の CSPM は無料）、規制コンプライアンスのビューを提供する **Cloud Security Posture Management（CSPM）**と、脅威を検出して**セキュリティアラート**を出す有料の **Defender プラン**（Servers、Storage、SQL、Containers、Key Vault など）である **Cloud Workload Protection（CWP）** です。**AWS、GCP、オンプレミス**のマシン（Azure Arc 経由）も対象にできます。",
            "**Microsoft Defender for Cloud** က ဒီပုံတစ်ခုလုံးအတွက် security dashboard ပါ။ အပိုင်း ၂ ခုရှိတယ်- configuration ကို အဆက်မပြတ် စစ်ပြီး **recommendation** နဲ့ **secure score** (foundational CSPM က free) နဲ့ regulatory compliance view ပေးတဲ့ **Cloud Security Posture Management (CSPM)**၊ နဲ့ threat ကို ရှာဖွေပြီး **security alert** ထုတ်ပေးတဲ့ ပိုက်ဆံပေးရတဲ့ **Defender plan** (Servers၊ Storage၊ SQL၊ Containers၊ Key Vault စသည်) ဖြစ်တဲ့ **Cloud Workload Protection (CWP)**။ **AWS၊ GCP၊ on-prem** machine (Azure Arc ကနေ) တွေကိုလည်း ကာကွယ်ပေးတယ်။"
          ) },
          { type: 'callout', tone: 'exam', text: L(
            "AZ-900 asks you to match: \"improve security posture / secure score / recommendations\" → **Defender for Cloud**. \"Who can do what on resources\" → **RBAC**. \"Enforce allowed regions or SKUs\" → **Azure Policy** (governance, not identity). \"Never trust, always verify\" → **Zero Trust**. \"Multiple layers so one failure isn't fatal\" → **defense in depth**.",
            "AZ-900 では対応付けが問われます：「セキュリティ態勢の改善 / セキュアスコア / 推奨事項」→ **Defender for Cloud**。「リソースで誰が何をできるか」→ **RBAC**。「許可するリージョンや SKU の強制」→ **Azure Policy**（ID ではなくガバナンス）。「決して信頼せず、常に検証」→ **ゼロトラスト**。「1 つが破られても致命的にならない複数の層」→ **多層防御**。",
            "AZ-900 မှာ တွဲပေးခိုင်းတတ်တယ်- \"security posture မြှင့် / secure score / recommendation\" → **Defender for Cloud**။ \"Resource မှာ ဘယ်သူ ဘာလုပ်ခွင့်ရှိလဲ\" → **RBAC**။ \"ခွင့်ပြုတဲ့ region ဒါမှမဟုတ် SKU ကို enforce\" → **Azure Policy** (identity မဟုတ်ဘဲ governance)။ \"ဘယ်တော့မှမယုံ၊ အမြဲစစ်\" → **Zero Trust**။ \"Layer အများကြီးမို့ တစ်ခုပေါက်လည်း မပြီးဘူး\" → **defense in depth**။"
          ) },
        ],
      },
      {
        id: "hands-on-lab",
        title: L("Hands-on mini-lab: least-privilege access in 15 minutes", "ハンズオンミニラボ：15 分で最小権限アクセス", "လက်တွေ့ mini-lab - မိနစ် ၁၅ နဲ့ least privilege access"),
        blocks: [
          { type: 'p', text: L(
            "Use a free or sandbox subscription. Goal: a group can manage only one resource group, and a VM reads a secret without any password in code.",
            "無料またはサンドボックスのサブスクリプションを使います。目標：グループが 1 つの Resource Group だけを管理でき、VM がコードにパスワードを持たずにシークレットを読み取れるようにすることです。",
            "Free ဒါမှမဟုတ် sandbox subscription သုံးပါ။ ရည်မှန်းချက်- group တစ်ခုက resource group တစ်ခုတည်းကိုပဲ စီမံနိုင်ပြီး VM က code ထဲ password မပါဘဲ secret ကို ဖတ်နိုင်ဖို့။"
          ) },
          { type: 'steps', items: [
            L("Open **Cloud Shell** (Bash) and run `az group create -n rg-lab-identity -l japaneast`.", "**Cloud Shell**（Bash）を開き、`az group create -n rg-lab-identity -l japaneast` を実行します。", "**Cloud Shell** (Bash) ဖွင့်ပြီး `az group create -n rg-lab-identity -l japaneast` ကို run ပါ။"),
            L("Create a test user and a security group `sg-lab-ops`, and add the user to the group (see the CLI in section 2).", "テストユーザーとセキュリティグループ `sg-lab-ops` を作成し、ユーザーをグループに追加します（セクション 2 の CLI 参照）。", "Test user နဲ့ security group `sg-lab-ops` ဖန်တီးပြီး user ကို group ထဲထည့်ပါ (section 2 က CLI ကြည့်ပါ)။"),
            L("Assign **Contributor** to `sg-lab-ops` at the scope of `rg-lab-identity` only.", "`sg-lab-ops` に `rg-lab-identity` のスコープでのみ **Contributor** を割り当てます。", "`sg-lab-ops` ကို `rg-lab-identity` scope မှာပဲ **Contributor** ပေးပါ။"),
            L("Sign in as the test user in a private browser window: confirm you can create a storage account in `rg-lab-identity` but cannot see other resource groups or open **Access control (IAM) > Add**.", "プライベートウィンドウでテストユーザーとしてサインインし、`rg-lab-identity` にストレージアカウントを作成できるが、他の Resource Group は見えず、**アクセス制御 (IAM) > 追加** ができないことを確認します。", "Private browser window မှာ test user နဲ့ sign in ဝင်ပြီး `rg-lab-identity` မှာ storage account ဖန်တီးလို့ရပေမယ့် တခြား resource group တွေမမြင်ရ၊ **Access control (IAM) > Add** မလုပ်နိုင်တာ စစ်ပါ။"),
            L("Create a small VM and a Key Vault (RBAC permission model) in the group, add a secret, enable the VM's **system-assigned identity** and grant it **Key Vault Secrets User**.", "グループ内に小さな VM と Key Vault（RBAC アクセス許可モデル）を作成してシークレットを追加し、VM の**システム割り当て ID** を有効にして **Key Vault Secrets User** を付与します。", "Group ထဲမှာ VM သေးသေးတစ်လုံးနဲ့ Key Vault (RBAC permission model) ဖန်တီး၊ secret ထည့်၊ VM ရဲ့ **system-assigned identity** ဖွင့်ပြီး **Key Vault Secrets User** ပေးပါ။"),
            L("On the VM, run `az login --identity` then `az keyvault secret show --vault-name <kv> -n <secret>`: it works with no password.", "VM 上で `az login --identity`、続いて `az keyvault secret show --vault-name <kv> -n <secret>` を実行すると、パスワードなしで動作します。", "VM ပေါ်မှာ `az login --identity` ပြီးရင် `az keyvault secret show --vault-name <kv> -n <secret>` run ကြည့်ပါ- password မလိုဘဲ အလုပ်လုပ်တယ်။"),
            L("Clean up: `az group delete -n rg-lab-identity --yes`, then delete the test user and group. Notice the system-assigned identity disappeared with the VM.", "後片付け：`az group delete -n rg-lab-identity --yes` を実行し、テストユーザーとグループを削除します。システム割り当て ID が VM と一緒に消えたことを確認しましょう。", "ရှင်းလင်း- `az group delete -n rg-lab-identity --yes` run ပြီး test user နဲ့ group ကို ဖျက်ပါ။ System-assigned identity က VM နဲ့အတူ ပျောက်သွားတာ သတိထားကြည့်ပါ။"),
          ] },
          { type: 'callout', tone: 'warn', text: L(
            "Role assignment changes can take a few minutes to take effect, and a user may need to sign out and back in. Don't conclude \"RBAC is broken\" after 10 seconds.",
            "ロール割り当ての変更が反映されるまで数分かかることがあり、ユーザーはサインアウトして再サインインが必要な場合があります。10 秒で「RBAC が壊れている」と判断しないでください。",
            "Role assignment ပြောင်းတာ အသက်ဝင်ဖို့ မိနစ်အနည်းငယ် ကြာနိုင်ပြီး user က sign out လုပ်ပြီး ပြန်ဝင်ရနိုင်တယ်။ ၁၀ စက္ကန့်အတွင်း \"RBAC ပျက်နေတယ်\" လို့ မဆုံးဖြတ်ပါနဲ့။"
          ) },
        ],
      },
    ],
    summary: [
      L("A Microsoft Entra ID tenant is your organization's identity directory; each subscription trusts exactly one tenant.",
        "Microsoft Entra ID テナントは組織の ID ディレクトリで、各サブスクリプションはちょうど 1 つのテナントを信頼します。",
        "Microsoft Entra ID tenant က organization ရဲ့ identity directory ဖြစ်ပြီး subscription တစ်ခုက tenant တစ်ခုတည်းကိုပဲ ယုံကြည်တယ်။"),
      L("Security groups grant access; Microsoft 365 groups enable collaboration; dynamic membership uses attribute rules and needs P1. Guests come in through B2B.",
        "セキュリティグループはアクセス付与、Microsoft 365 グループは共同作業用。動的メンバーシップは属性ルールを使い P1 が必要。ゲストは B2B で招待します。",
        "Security group က access ပေးဖို့၊ Microsoft 365 group က collaboration အတွက်၊ dynamic membership က attribute rule သုံးပြီး P1 လိုတယ်။ Guest တွေက B2B နဲ့ ဝင်လာတယ်။"),
      L("MFA combines different factor types; passwordless and SSPR improve security and reduce helpdesk load.",
        "MFA は異なる種類の要素を組み合わせ、パスワードレスと SSPR はセキュリティを高めヘルプデスクの負荷を減らします。",
        "MFA က factor အမျိုးအစားမတူတာတွေကို ပေါင်းသုံးတယ်၊ passwordless နဲ့ SSPR က security မြှင့်ပြီး helpdesk ဝန် လျော့ပေးတယ်။"),
      L("Conditional Access (P1) is IF-signals-THEN-decision; ID Protection risk policies and PIM need P2; security defaults are the free baseline.",
        "条件付きアクセス（P1）は IF シグナル THEN 判断。ID Protection のリスクポリシーと PIM は P2。セキュリティの既定値は無料の基本設定です。",
        "Conditional Access (P1) က IF signal THEN ဆုံးဖြတ်ချက်၊ ID Protection risk policy နဲ့ PIM က P2 လို၊ security defaults က free baseline။"),
      L("Azure RBAC = principal + role definition + scope; assignments inherit downward and are additive; only deny assignments override an allow.",
        "Azure RBAC＝プリンシパル＋ロール定義＋スコープ。割り当ては下方向に継承され加算的で、許可を上書きできるのは拒否割り当てだけです。",
        "Azure RBAC = principal + role definition + scope၊ assignment တွေ အောက်ကို inherit ဖြစ်ပြီး additive ဖြစ်တယ်၊ allow ကို deny assignment ပဲ override လုပ်နိုင်တယ်။"),
      L("Entra roles manage the directory (Global Administrator); Azure roles manage resources (Owner). Global Admins must elevate access to manage subscriptions.",
        "Entra ロールはディレクトリを管理（Global Administrator）、Azure ロールはリソースを管理（Owner）。Global Administrator がサブスクリプションを管理するにはアクセス権の昇格が必要です。",
        "Entra role က directory ကို စီမံ (Global Administrator)၊ Azure role က resource ကို စီမံ (Owner)။ Global Admin က subscription စီမံဖို့ elevate access လုပ်ရတယ်။"),
      L("Managed identities remove secrets: system-assigned lives and dies with one resource; user-assigned is standalone and shareable.",
        "マネージド ID はシークレットをなくします。システム割り当ては 1 つのリソースと運命を共にし、ユーザー割り当ては独立して共有可能です。",
        "Managed identity က secret ကို ဖယ်ရှားပေးတယ်- system-assigned က resource တစ်ခုနဲ့ အသက်ရှင်/ပျက်အတူ၊ user-assigned က သီးခြားဖြစ်ပြီး share လို့ရတယ်။"),
      L("Zero Trust: verify explicitly, least privilege, assume breach. Defense in depth layers protection. Defender for Cloud gives secure score, recommendations and threat protection.",
        "ゼロトラスト：明示的に検証、最小特権、侵害を想定。多層防御で保護を重ねます。Defender for Cloud はセキュアスコア、推奨事項、脅威保護を提供します。",
        "Zero Trust- verify explicitly၊ least privilege၊ assume breach။ Defense in depth က ကာကွယ်မှုကို အလွှာလိုက်ထားတယ်။ Defender for Cloud က secure score၊ recommendation နဲ့ threat protection ပေးတယ်။"),
    ],
  },
  questions: [
    {
      difficulty: 'EASY',
      exams: ['AZ-900'],
      prompt: L("Which Azure service provides cloud-based identity and access management, including sign-in to Microsoft 365, the Azure portal and thousands of SaaS apps?",
        "Microsoft 365、Azure portal、数千の SaaS アプリへのサインインを含む、クラウドベースの ID・アクセス管理を提供する Azure サービスはどれですか？",
        "Microsoft 365၊ Azure portal နဲ့ SaaS app ထောင်ချီကို sign in ဝင်တာအပါအဝင် cloud-based identity နဲ့ access management ပေးတဲ့ Azure service က ဘယ်ဟာလဲ?"),
      options: ['Microsoft Entra ID', 'Azure Key Vault', 'Azure Policy', 'Active Directory Domain Services on a VM'],
      correct: [0],
      explanation: L("Microsoft Entra ID (formerly Azure AD) is Microsoft's cloud identity service. AD DS on a VM is the classic on-premises directory (Kerberos/LDAP) that you run yourself; it is not the cloud identity platform for SaaS sign-in. Key Vault stores secrets and Azure Policy enforces rules.",
        "Microsoft Entra ID（旧 Azure AD）は Microsoft のクラウド ID サービスです。VM 上の AD DS は自分で運用する従来型ディレクトリ（Kerberos/LDAP）で、SaaS サインイン用のクラウド ID 基盤ではありません。Key Vault はシークレットを保管し、Azure Policy はルールを強制します。",
        "Microsoft Entra ID (အရင် Azure AD) က Microsoft ရဲ့ cloud identity service ပါ။ VM ပေါ်က AD DS က ကိုယ်တိုင် run ရတဲ့ classic directory (Kerberos/LDAP) ဖြစ်ပြီး SaaS sign-in အတွက် cloud identity platform မဟုတ်ဘူး။ Key Vault က secret သိမ်းတယ်၊ Azure Policy က rule enforce လုပ်တယ်။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900'],
      prompt: L("Which of the following are valid factor categories for multifactor authentication? (Select TWO)",
        "多要素認証の要素カテゴリとして正しいものはどれですか？（2 つ選択）",
        "Multifactor authentication အတွက် မှန်ကန်တဲ့ factor အမျိုးအစားတွေက ဘယ်ဟာတွေလဲ? (၂ ခုရွေးပါ)"),
      options: ['Something you know, such as a password', 'Something you were assigned, such as a security group', 'Something you have, such as a phone with Microsoft Authenticator', 'Somewhere you saved, such as a browser cookie'],
      correct: [0, 2],
      explanation: L("MFA factors are something you know (password/PIN), something you have (phone, FIDO2 key) and something you are (biometrics). Group membership is an authorization attribute, not proof of identity, and a browser cookie is a session artifact, not a factor.",
        "MFA の要素は、知っているもの（パスワード/PIN）、持っているもの（スマホ、FIDO2 キー）、自分自身の特徴（生体認証）です。グループメンバーシップは認可のための属性で本人確認の証拠ではなく、ブラウザーの Cookie はセッション情報であり要素ではありません。",
        "MFA factor တွေက သိတဲ့အရာ (password/PIN)၊ ပိုင်တဲ့အရာ (ဖုန်း၊ FIDO2 key)၊ ကိုယ်တိုင်ဖြစ်တဲ့အရာ (biometrics) ပါ။ Group membership က authorization attribute ဖြစ်ပြီး identity သက်သေမဟုတ်ဘူး၊ browser cookie ကလည်း session အချက်အလက်ပဲ၊ factor မဟုတ်ဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900'],
      prompt: L("Which Zero Trust principle is applied when administrators receive just-in-time, just-enough permissions only for the tasks they perform?",
        "管理者が実行する作業に対してのみ、Just-In-Time かつ必要最小限の権限を受け取る場合、適用されているゼロトラストの原則はどれですか？",
        "Admin တွေက လုပ်မယ့်အလုပ်အတွက်ပဲ just-in-time၊ just-enough permission ရတာက ဘယ် Zero Trust principle ကို အသုံးချတာလဲ?"),
      options: ['Verify explicitly', 'Use least privilege access', 'Assume breach', 'Defense in depth'],
      correct: [1],
      explanation: L("Least privilege access means granting only the access needed, only when needed (JIT/JEA, PIM). Verify explicitly is about authenticating every request with all signals, and defense in depth is a layered-security strategy, not one of the three Zero Trust principles.",
        "最小特権アクセスとは、必要なアクセスだけを必要なときだけ付与することです（JIT/JEA、PIM）。明示的に検証するはすべてのシグナルで要求ごとに認証することで、多層防御は階層的なセキュリティ戦略であり、ゼロトラストの 3 原則の 1 つではありません。",
        "Least privilege access ဆိုတာ လိုတဲ့ access ကို လိုတဲ့အချိန်ပဲ ပေးတာ (JIT/JEA၊ PIM)။ Verify explicitly က signal အားလုံးနဲ့ request တိုင်း authenticate လုပ်တာဖြစ်ပြီး defense in depth က layer အလိုက် security strategy ဖြစ်လို့ Zero Trust principle ၃ ခုထဲမှာ မပါဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("A developer must create, modify and delete all resources in a resource group but must NOT be able to grant access to other users. Which built-in role should you assign?",
        "開発者は Resource Group 内のすべてのリソースを作成・変更・削除できる必要がありますが、他のユーザーにアクセスを付与できてはいけません。どの組み込みロールを割り当てるべきですか？",
        "Developer တစ်ယောက်က resource group ထဲက resource အားလုံးကို create၊ modify၊ delete လုပ်နိုင်ရမယ်၊ ဒါပေမဲ့ တခြား user ကို access ပေးခွင့် မရှိရဘူး။ ဘယ် built-in role ပေးသင့်လဲ?"),
      options: ['Owner', 'Reader', 'Contributor', 'User Access Administrator'],
      correct: [2],
      explanation: L("Contributor can manage all resources but cannot create role assignments. Owner can do the same plus grant access, which breaks the requirement. User Access Administrator can only manage access, and Reader can only view.",
        "Contributor はすべてのリソースを管理できますが、ロール割り当ては作成できません。Owner は同じことに加えてアクセス付与もできるため要件に反します。User Access Administrator はアクセス管理のみ、Reader は閲覧のみです。",
        "Contributor က resource အားလုံး စီမံနိုင်ပေမဲ့ role assignment မဖန်တီးနိုင်ဘူး။ Owner က အဲဒါအပြင် access ပါ ပေးနိုင်လို့ requirement နဲ့ မကိုက်ဘူး။ User Access Administrator က access ပဲ စီမံနိုင်ပြီး Reader က ကြည့်ရုံပဲ ရတယ်။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("Consultants from a partner company need access to an internal app. They must sign in with their own company credentials and you do not want to manage their passwords. What should you do?",
        "パートナー企業のコンサルタントが社内アプリにアクセスする必要があります。彼らは自社の資格情報でサインインし、あなたは彼らのパスワードを管理したくありません。どうすべきですか？",
        "Partner company က consultant တွေ internal app ကို သုံးဖို့လိုတယ်။ သူတို့ကိုယ်ပိုင် company credential နဲ့ sign in ဝင်ရမယ်၊ သူတို့ password ကိုလည်း ကိုယ်က မစီမံချင်ဘူး။ ဘာလုပ်သင့်လဲ?"),
      options: ['Create member accounts and email them the passwords', 'Create a service principal for each consultant', 'Share the credentials of one admin account', 'Invite them as Microsoft Entra B2B guest users'],
      correct: [3],
      explanation: L("B2B collaboration invites external users as guests who authenticate with their home identity, so you never manage their passwords and access ends when their home account is disabled. Member accounts would make you responsible for credentials, and service principals are for apps, not people.",
        "B2B コラボレーションでは外部ユーザーをゲストとして招待し、ゲストは自分のホーム ID で認証するため、パスワードを管理する必要がなく、ホームアカウントが無効になるとアクセスも終了します。メンバーアカウントでは資格情報の管理責任を負い、サービスプリンシパルは人ではなくアプリ用です。",
        "B2B collaboration က ပြင်ပ user ကို guest အဖြစ်ဖိတ်ပြီး သူတို့ home identity နဲ့ authenticate လုပ်လို့ password ကို စီမံစရာမလိုဘူး၊ home account ပိတ်ရင် access လည်း ရပ်တယ်။ Member account ဆိုရင် credential တာဝန်ကို ကိုယ်ယူရပြီး service principal က လူအတွက်မဟုတ်ဘဲ app အတွက်ပါ။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900'],
      prompt: L("Which feature of Microsoft Defender for Cloud gives you a single measurement of your security posture that improves as you remediate recommendations?",
        "推奨事項を修正するにつれて向上する、セキュリティ態勢を 1 つの数値で示す Microsoft Defender for Cloud の機能はどれですか？",
        "Recommendation တွေကို ပြင်လေ တိုးလာတဲ့ security posture ကို တိုင်းတာချက်တစ်ခုတည်းနဲ့ ပြပေးတဲ့ Microsoft Defender for Cloud feature က ဘယ်ဟာလဲ?"),
      options: ['Service Health alerts', 'Azure Advisor cost recommendations', 'Secure score', 'Azure Monitor metrics'],
      correct: [2],
      explanation: L("Secure score in Defender for Cloud summarizes your security posture and rises as you fix recommendations. Azure Advisor cost recommendations focus on spending, and Service Health reports Azure platform incidents, not your configuration.",
        "Defender for Cloud のセキュアスコアはセキュリティ態勢を要約し、推奨事項を修正すると上がります。Azure Advisor のコスト推奨事項は支出に関するもので、Service Health はあなたの構成ではなく Azure プラットフォームの障害を報告します。",
        "Defender for Cloud ရဲ့ secure score က security posture ကို အကျဉ်းချုပ်ပြပြီး recommendation ပြင်လေ တက်လာတယ်။ Azure Advisor cost recommendation က ကုန်ကျစရိတ်အကြောင်း၊ Service Health က ကိုယ့် configuration မဟုတ်ဘဲ Azure platform incident ကို ပြတယ်။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("All users whose department attribute is Sales must automatically be added to and removed from a group that grants access to a sales app. What should you create?",
        "department 属性が Sales のすべてのユーザーを、営業アプリへのアクセスを付与するグループに自動で追加・削除する必要があります。何を作成すべきですか？",
        "Department attribute က Sales ဖြစ်တဲ့ user အားလုံးကို sales app access ပေးတဲ့ group ထဲ အလိုအလျောက် ထည့်/ဖယ် ဖြစ်ရမယ်။ ဘာဖန်တီးသင့်လဲ?"),
      options: ['A security group with Assigned membership', 'A security group with Dynamic User membership', 'A Microsoft 365 group with Assigned membership', 'An administrative unit with a Conditional Access policy'],
      correct: [1],
      explanation: L("A Dynamic User group evaluates a rule such as (user.department -eq \"Sales\") and adds or removes members automatically; it requires Entra ID P1. Assigned membership would need someone to update the group manually every time HR changes a department.",
        "動的ユーザーグループは (user.department -eq \"Sales\") のようなルールを評価してメンバーを自動で追加・削除します。Entra ID P1 が必要です。割り当て済みメンバーシップでは、人事が部署を変更するたびに誰かが手動でグループを更新する必要があります。",
        "Dynamic User group က (user.department -eq \"Sales\") လို rule ကို စစ်ပြီး member ကို အလိုအလျောက် ထည့်/ဖယ်တယ်၊ Entra ID P1 လိုတယ်။ Assigned membership ဆိုရင် HR က department ပြောင်းတိုင်း တစ်ယောက်ယောက်က group ကို manual ပြင်ရမယ်။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("User1 is assigned Reader at the subscription scope and Contributor on resource group RG1. What can User1 do in RG1?",
        "User1 にはサブスクリプションスコープで Reader、Resource Group RG1 で Contributor が割り当てられています。User1 は RG1 で何ができますか？",
        "User1 ကို subscription scope မှာ Reader၊ resource group RG1 မှာ Contributor ပေးထားတယ်။ User1 က RG1 ထဲမှာ ဘာလုပ်နိုင်လဲ?"),
      options: ['Only view resources, because the subscription-level Reader wins', 'Create and manage resources, because RBAC permissions are additive', 'Nothing, because conflicting assignments cancel each other', 'Manage resources in every resource group in the subscription'],
      correct: [1],
      explanation: L("Azure RBAC is additive: the effective permission is the union of all assignments, so User1 has Contributor rights in RG1 and Reader everywhere else. A higher-scope Reader does not restrict a lower-scope Contributor; only a deny assignment could block actions.",
        "Azure RBAC は加算的で、実効権限はすべての割り当ての和集合です。そのため User1 は RG1 で Contributor、それ以外では Reader の権限を持ちます。上位スコープの Reader が下位スコープの Contributor を制限することはなく、アクションをブロックできるのは拒否割り当てだけです。",
        "Azure RBAC က additive ဖြစ်လို့ effective permission က assignment အားလုံးကို ပေါင်းထားတာပါ။ ဒါကြောင့် User1 က RG1 မှာ Contributor၊ တခြားနေရာမှာ Reader ရတယ်။ အပေါ် scope က Reader က အောက် scope က Contributor ကို မကန့်သတ်ဘူး၊ deny assignment ပဲ action ကို block လုပ်နိုင်တယ်။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("An app on VM1 must read secrets from a Key Vault without any credentials stored in code or config. The identity must be removed automatically when VM1 is deleted. What should you use?",
        "VM1 上のアプリは、コードや設定に資格情報を保存せずに Key Vault からシークレットを読み取る必要があります。ID は VM1 の削除時に自動的に削除される必要があります。何を使うべきですか？",
        "VM1 ပေါ်က app က code ဒါမှမဟုတ် config ထဲ credential မသိမ်းဘဲ Key Vault ကနေ secret ဖတ်ရမယ်။ VM1 ဖျက်ရင် identity ပါ အလိုအလျောက် ပျက်ရမယ်။ ဘာသုံးသင့်လဲ?"),
      options: ['A user-assigned managed identity', 'A service principal with a client secret', 'A system-assigned managed identity', 'The storage account access key'],
      correct: [2],
      explanation: L("A system-assigned managed identity has no secret to manage and shares the VM's lifecycle, so it is deleted with VM1. A user-assigned identity also avoids secrets but is a standalone resource that survives the VM, and a service principal with a client secret stores a credential.",
        "システム割り当てマネージド ID は管理すべきシークレットがなく VM とライフサイクルを共有するため、VM1 と一緒に削除されます。ユーザー割り当て ID もシークレット不要ですが、VM 削除後も残る独立したリソースです。クライアントシークレット付きサービスプリンシパルは資格情報を保存することになります。",
        "System-assigned managed identity က စီမံရမယ့် secret မရှိဘဲ VM နဲ့ lifecycle တူလို့ VM1 ဖျက်ရင် အတူပျက်တယ်။ User-assigned identity ကလည်း secret မလိုပေမဲ့ VM ပျက်ပြီးလည်း ကျန်နေတဲ့ သီးခြား resource ပါ။ Client secret နဲ့ service principal က credential ကို သိမ်းရတယ်။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("At which scopes can you create an Azure RBAC role assignment? (Select THREE)",
        "Azure RBAC のロール割り当てを作成できるスコープはどれですか？（3 つ選択）",
        "Azure RBAC role assignment ကို ဘယ် scope တွေမှာ ဖန်တီးနိုင်လဲ? (၃ ခုရွေးပါ)"),
      options: ['Management group', 'Resource group', 'Microsoft 365 group', 'Individual resource', 'Conditional Access policy'],
      correct: [0, 1, 3],
      explanation: L("Azure roles can be assigned at management group, subscription, resource group and resource scope, and they inherit downward. A Microsoft 365 group is a security principal that receives assignments, not a scope, and a Conditional Access policy is an Entra ID sign-in control.",
        "Azure ロールは管理グループ、サブスクリプション、Resource Group、リソースのスコープで割り当てられ、下方向に継承されます。Microsoft 365 グループは割り当てを受けるセキュリティプリンシパルでありスコープではなく、条件付きアクセスポリシーは Entra ID のサインイン制御です。",
        "Azure role ကို management group၊ subscription၊ resource group၊ resource scope တွေမှာ ပေးနိုင်ပြီး အောက်ကို inherit ဖြစ်တယ်။ Microsoft 365 group က assignment ကို လက်ခံတဲ့ security principal ဖြစ်ပြီး scope မဟုတ်ဘူး၊ Conditional Access policy က Entra ID sign-in control ပါ။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("Your company wants to require MFA only when users sign in from outside the corporate network, and block legacy authentication. Which minimum Microsoft Entra ID license is required?",
        "社内ネットワーク外からサインインする場合のみ MFA を要求し、レガシー認証をブロックしたいと考えています。必要な Microsoft Entra ID の最小ライセンスはどれですか？",
        "Company network အပြင်ကနေ sign in ဝင်တဲ့အခါမှပဲ MFA တောင်းပြီး legacy authentication ကို block ချင်တယ်။ အနည်းဆုံး ဘယ် Microsoft Entra ID license လိုလဲ?"),
      options: ['Microsoft Entra ID P1', 'Microsoft Entra ID Free', 'Microsoft Entra ID P2 only', 'No license; any Azure subscription includes it'],
      correct: [0],
      explanation: L("Location-based rules require Conditional Access, which is included from Entra ID P1. Free only offers security defaults, which cannot target specific locations. P2 also works but is not the minimum; it adds risk-based policies and PIM.",
        "場所ベースのルールには条件付きアクセスが必要で、これは Entra ID P1 から含まれます。Free はセキュリティの既定値のみで、特定の場所を対象にできません。P2 でも可能ですが最小ではなく、リスクベースのポリシーと PIM が追加されます。",
        "Location-based rule အတွက် Conditional Access လိုပြီး အဲဒါက Entra ID P1 ကစပြီး ပါတယ်။ Free မှာ security defaults ပဲ ရှိပြီး location သတ်မှတ်လို့ မရဘူး။ P2 နဲ့လည်း ရပေမဲ့ အနည်းဆုံး မဟုတ်ဘူး၊ risk-based policy နဲ့ PIM ထပ်ပါတာပါ။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("A security team must manage who has access to Azure resources in a subscription, but must not be able to create, modify or delete the resources themselves. Which role meets the requirement with least privilege?",
        "セキュリティチームはサブスクリプション内の Azure リソースへのアクセス権を管理する必要がありますが、リソース自体を作成・変更・削除できてはいけません。最小権限で要件を満たすロールはどれですか？",
        "Security team က subscription ထဲ Azure resource တွေကို ဘယ်သူ access ရလဲ စီမံရမယ်၊ ဒါပေမဲ့ resource ကိုယ်တိုင်ကို create၊ modify၊ delete မလုပ်နိုင်ရဘူး။ Least privilege နဲ့ ဘယ် role က ကိုက်လဲ?"),
      options: ['Contributor', 'Owner', 'Reader', 'User Access Administrator'],
      correct: [3],
      explanation: L("User Access Administrator can manage role assignments but cannot manage resources. Owner could manage access too, but it also allows changing and deleting resources, so it is not least privilege. Contributor manages resources but cannot grant access.",
        "User Access Administrator はロール割り当てを管理できますが、リソースは管理できません。Owner もアクセス管理は可能ですが、リソースの変更や削除もできるため最小権限ではありません。Contributor はリソースを管理できますがアクセスは付与できません。",
        "User Access Administrator က role assignment စီမံနိုင်ပေမဲ့ resource ကို မစီမံနိုင်ဘူး။ Owner ကလည်း access စီမံနိုင်ပေမဲ့ resource ပြင်/ဖျက်ပါ လုပ်နိုင်လို့ least privilege မဟုတ်ဘူး။ Contributor က resource စီမံနိုင်ပေမဲ့ access မပေးနိုင်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-900'],
      prompt: L("Which of the following are layers in the Azure defense-in-depth model? (Select TWO)",
        "Azure の多層防御モデルの層に該当するものはどれですか？（2 つ選択）",
        "Azure defense-in-depth model ထဲက layer တွေက ဘယ်ဟာတွေလဲ? (၂ ခုရွေးပါ)"),
      options: ['Perimeter', 'Billing', 'Identity and access', 'Marketplace'],
      correct: [0, 2],
      explanation: L("The seven layers are physical security, identity and access, perimeter, network, compute, application and data. Billing and Marketplace are commercial features of Azure, not security layers.",
        "7 つの層は、物理セキュリティ、ID とアクセス、境界、ネットワーク、コンピューティング、アプリケーション、データです。Billing と Marketplace は Azure の商用機能であり、セキュリティの層ではありません。",
        "Layer ၇ ခုက physical security၊ identity and access၊ perimeter၊ network၊ compute၊ application၊ data ပါ။ Billing နဲ့ Marketplace က Azure ရဲ့ commercial feature တွေဖြစ်ပြီး security layer မဟုတ်ဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("A new Global Administrator in your Microsoft Entra tenant cannot see any Azure subscriptions in the portal. They need to regain control of all subscriptions. What should they do first?",
        "Microsoft Entra テナントの新しい Global Administrator が、ポータルで Azure サブスクリプションを 1 つも表示できません。すべてのサブスクリプションの管理権を取り戻す必要があります。最初に何をすべきですか？",
        "Microsoft Entra tenant ထဲက Global Administrator အသစ်က portal မှာ Azure subscription တစ်ခုမှ မမြင်ရဘူး။ Subscription အားလုံးကို ပြန်ထိန်းချုပ်ဖို့ ပထမဆုံး ဘာလုပ်သင့်လဲ?"),
      options: ['Assign themselves the Owner role in Microsoft Entra ID', 'Turn on Access management for Azure resources to get User Access Administrator at root scope', 'Purchase Microsoft Entra ID P2 and enable PIM', 'Create a new tenant and move the subscriptions'],
      correct: [1],
      explanation: L("Entra roles and Azure roles are separate. Elevating access grants the Global Administrator User Access Administrator at root scope (/), from which they can assign Owner on subscriptions. Owner is an Azure role and does not exist in Microsoft Entra ID, so it cannot be assigned there; P2/PIM is not required for this.",
        "Entra ロールと Azure ロールは別物です。アクセス権の昇格で Global Administrator にルートスコープ（/）の User Access Administrator が付与され、そこからサブスクリプションに Owner を割り当てられます。Owner は Azure ロールで Microsoft Entra ID には存在しないため、そこでは割り当てられません。P2/PIM はこの操作に不要です。",
        "Entra role နဲ့ Azure role က သီးခြားစီပါ။ Elevate access လုပ်ရင် Global Administrator ကို root scope (/) မှာ User Access Administrator ပေးပြီး အဲဒီကနေ subscription တွေမှာ Owner ပေးလို့ရတယ်။ Owner က Azure role ဖြစ်ပြီး Microsoft Entra ID ထဲမှာ မရှိလို့ အဲဒီမှာ ပေးလို့မရဘူး။ ဒီအတွက် P2/PIM မလိုဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("User2 has the Owner role on resource group RG2, and no resource locks exist. However, User2 receives an authorization error when trying to delete a storage account that was deployed by a deployment stack. What is the most likely cause?",
        "User2 は Resource Group RG2 で Owner ロールを持ち、リソースロックは存在しません。しかし、デプロイスタックでデプロイされたストレージアカウントを削除しようとすると認可エラーになります。最も可能性の高い原因はどれですか？",
        "User2 က resource group RG2 မှာ Owner role ရှိပြီး resource lock လည်း မရှိဘူး။ ဒါပေမဲ့ deployment stack နဲ့ deploy လုပ်ထားတဲ့ storage account ကို ဖျက်ဖို့ကြိုးစားရင် authorization error ရတယ်။ အဖြစ်နိုင်ဆုံး အကြောင်းရင်းက ဘာလဲ?"),
      options: ['A deny assignment applies at that scope', 'The Owner role does not include delete permissions', 'Role assignments take 24 hours to propagate', 'User2 needs a Microsoft Entra ID P2 license'],
      correct: [0],
      explanation: L("Deployment stacks can apply deny settings, which Azure enforces as deny assignments. Deny assignments take precedence over role assignments, so even an Owner is blocked. Owner does include delete, and propagation takes minutes, not 24 hours; Entra licensing does not control Azure resource actions.",
        "デプロイスタックは拒否設定を適用でき、Azure はそれを拒否割り当てとして強制します。拒否割り当てはロール割り当てより優先されるため、Owner であってもブロックされます。Owner には削除権限が含まれ、反映は 24 時間ではなく数分です。Entra のライセンスは Azure リソースの操作を制御しません。",
        "Deployment stack က deny setting ထည့်နိုင်ပြီး Azure က အဲဒါကို deny assignment အဖြစ် enforce လုပ်တယ်။ Deny assignment က role assignment ထက် ဦးစားပေးလို့ Owner တောင် block ခံရတယ်။ Owner မှာ delete ပါတယ်၊ propagation က ၂၄ နာရီမဟုတ်ဘဲ မိနစ်ပိုင်းပဲ ကြာတယ်၊ Entra license က Azure resource action ကို မထိန်းချုပ်ဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("Ten Azure Functions apps must all read blobs from the same storage account using one identity. The identity and its permissions must remain even if individual apps are deleted and redeployed. Which TWO actions should you take? (Select TWO)",
        "10 個の Azure Functions アプリが 1 つの ID を使って同じストレージアカウントの BLOB を読み取る必要があります。個々のアプリを削除・再デプロイしても ID とその権限は残る必要があります。どの 2 つの操作を行うべきですか？（2 つ選択）",
        "Azure Functions app ၁၀ ခုက identity တစ်ခုတည်းနဲ့ storage account တစ်ခုထဲက blob တွေကို ဖတ်ရမယ်။ App တစ်ခုချင်း ဖျက်ပြီး ပြန် deploy လုပ်ရင်တောင် identity နဲ့ permission ကျန်နေရမယ်။ ဘယ် action ၂ ခု လုပ်သင့်လဲ? (၂ ခုရွေးပါ)"),
      options: ['Create a user-assigned managed identity and attach it to each app', 'Enable a system-assigned managed identity on each app', 'Assign the identity the Storage Blob Data Reader role on the storage account', 'Store the storage account key in each app setting'],
      correct: [0, 2],
      explanation: L("A user-assigned identity is a standalone resource that many apps can share and that survives app deletion; granting it Storage Blob Data Reader gives data-plane read access. System-assigned identities would be ten different identities deleted with each app, and storage keys are secrets that grant full access.",
        "ユーザー割り当て ID は、多数のアプリで共有でき、アプリを削除しても残る独立したリソースです。それに Storage Blob Data Reader を付与するとデータプレーンの読み取りアクセスが得られます。システム割り当て ID ではアプリごとに別の 10 個の ID になりアプリと一緒に削除されます。ストレージキーはフルアクセスを与えるシークレットです。",
        "User-assigned identity က app အများကြီး share လို့ရပြီး app ဖျက်လည်း ကျန်နေတဲ့ သီးခြား resource ပါ၊ Storage Blob Data Reader ပေးရင် data-plane read access ရတယ်။ System-assigned ဆိုရင် app တစ်ခုချင်းစီမှာ identity ၁၀ ခု သီးခြားဖြစ်ပြီး app နဲ့အတူ ပျက်တယ်၊ storage key ကတော့ full access ပေးတဲ့ secret ပါ။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("You create a custom Azure role that should be available only within the Production subscription. Which property of the role definition controls where the role can be assigned?",
        "本番サブスクリプション内でのみ使用できるカスタム Azure ロールを作成します。ロールを割り当て可能な場所を制御するロール定義のプロパティはどれですか？",
        "Production subscription ထဲမှာပဲ သုံးလို့ရမယ့် custom Azure role ကို ဖန်တီးတယ်။ Role ကို ဘယ်မှာ assign လုပ်နိုင်လဲ ထိန်းချုပ်တဲ့ role definition property က ဘယ်ဟာလဲ?"),
      options: ['Actions', 'NotActions', 'AssignableScopes', 'DataActions'],
      correct: [2],
      explanation: L("AssignableScopes lists the management groups, subscriptions or resource groups where the custom role can be assigned. Actions and DataActions define what the role allows on the control plane and data plane, and NotActions subtracts operations from Actions; none of them restrict where it can be used.",
        "AssignableScopes には、カスタムロールを割り当て可能な管理グループ、サブスクリプション、Resource Group を列挙します。Actions と DataActions はコントロールプレーンとデータプレーンで許可する操作を定義し、NotActions は Actions から操作を差し引くもので、いずれも使用場所を制限しません。",
        "AssignableScopes မှာ custom role ကို assign လုပ်နိုင်တဲ့ management group၊ subscription၊ resource group တွေကို စာရင်းထည့်တယ်။ Actions နဲ့ DataActions က control plane နဲ့ data plane မှာ ဘာခွင့်ပြုလဲ သတ်မှတ်ပြီး NotActions က Actions ထဲက operation ကို နုတ်တာပါ၊ ဘယ်ဟာမှ ဘယ်မှာသုံးရမလဲ မကန့်သတ်ဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("Security wants users to be prompted for MFA automatically when Microsoft detects a medium or high sign-in risk, such as an impossible-travel sign-in. Which TWO components are required? (Select TWO)",
        "ありえない移動などの中または高のサインインリスクを Microsoft が検出したとき、ユーザーに自動的に MFA を求めたいと考えています。必要な 2 つのコンポーネントはどれですか？（2 つ選択）",
        "Impossible travel လို medium ဒါမှမဟုတ် high sign-in risk ကို Microsoft က တွေ့ရင် user ကို MFA အလိုအလျောက် တောင်းစေချင်တယ်။ လိုအပ်တဲ့ component ၂ ခုက ဘယ်ဟာလဲ? (၂ ခုရွေးပါ)"),
      options: ['An Azure Policy assignment at the tenant root group', 'Microsoft Entra ID P2 licenses for the users', 'A CanNotDelete resource lock on the subscription', 'A Conditional Access policy that uses the sign-in risk condition'],
      correct: [1, 3],
      explanation: L("Sign-in risk is calculated by Entra ID Protection, which requires P2, and a risk-based Conditional Access policy enforces MFA when the risk level matches. Azure Policy governs resource configuration and resource locks prevent deletion; neither affects sign-in.",
        "サインインリスクは P2 が必要な Entra ID Protection によって算出され、リスクベースの条件付きアクセスポリシーがリスクレベルに一致したときに MFA を強制します。Azure Policy はリソース構成を統制し、リソースロックは削除を防ぐもので、どちらもサインインには影響しません。",
        "Sign-in risk ကို P2 လိုတဲ့ Entra ID Protection က တွက်ပြီး risk-based Conditional Access policy က risk level ကိုက်ရင် MFA ကို enforce လုပ်တယ်။ Azure Policy က resource configuration ကို ထိန်းပြီး resource lock က ဖျက်တာကို တားတာပါ၊ နှစ်ခုလုံး sign-in ကို မသက်ရောက်ဘူး။"),
    },
  ],
  flashcards: [
    { term: 'Microsoft Entra ID tenant',
      definition: L("A dedicated instance of Microsoft Entra ID that holds an organization's users, groups and apps. Each Azure subscription trusts exactly one tenant.", "組織のユーザー・グループ・アプリを保持する Microsoft Entra ID の専用インスタンスです。各 Azure サブスクリプションはちょうど 1 つのテナントを信頼します。", "Organization ရဲ့ user၊ group၊ app တွေကို သိမ်းထားတဲ့ Microsoft Entra ID သီးသန့် instance ပါ။ Azure subscription တစ်ခုက tenant တစ်ခုတည်းကိုပဲ ယုံကြည်တယ်။"),
      example: L("contoso.onmicrosoft.com is Contoso's tenant; its dev, test and prod subscriptions all trust it.", "contoso.onmicrosoft.com は Contoso のテナントで、dev・test・prod のサブスクリプションはすべてこれを信頼します。", "contoso.onmicrosoft.com က Contoso ရဲ့ tenant ဖြစ်ပြီး dev၊ test၊ prod subscription အားလုံးက အဲဒါကို ယုံကြည်တယ်။") },
    { term: 'B2B guest user',
      definition: L("An external user invited into your tenant who signs in with their own home identity; you control their access but not their password.", "自分のホーム ID でサインインする、テナントに招待された外部ユーザーです。アクセスは管理できますがパスワードは管理しません。", "ကိုယ့် tenant ထဲ ဖိတ်ထားပြီး သူ့ကိုယ်ပိုင် home identity နဲ့ sign in ဝင်တဲ့ ပြင်ပ user ပါ။ Access ကို ကိုယ်ထိန်းပေမဲ့ password ကို မထိန်းဘူး။"),
      example: L("An auditor from a partner firm is invited as a guest and given Reader on one resource group.", "パートナー企業の監査担当者をゲストとして招待し、1 つの Resource Group の Reader を付与します。", "Partner firm က auditor ကို guest အဖြစ်ဖိတ်ပြီး resource group တစ်ခုမှာ Reader ပေးတယ်။") },
    { term: 'Dynamic group',
      definition: L("A group whose membership is calculated from a rule on user or device attributes; members are added and removed automatically. Requires Entra ID P1.", "ユーザーまたはデバイスの属性に対するルールでメンバーシップが決まり、メンバーが自動で追加・削除されるグループです。Entra ID P1 が必要です。", "User ဒါမှမဟုတ် device attribute rule နဲ့ membership ကို တွက်ပြီး member တွေ အလိုအလျောက် ထည့်/ဖယ် ဖြစ်တဲ့ group ပါ။ Entra ID P1 လိုတယ်။"),
      example: L("Rule (user.department -eq \"Finance\") keeps the Finance group up to date when HR changes departments.", "ルール (user.department -eq \"Finance\") により、人事が部署を変更しても Finance グループが自動で最新に保たれます。", "(user.department -eq \"Finance\") rule က HR က department ပြောင်းတဲ့အခါ Finance group ကို အလိုအလျောက် update ဖြစ်စေတယ်။") },
    { term: 'Conditional Access',
      definition: L("Entra ID policy engine that evaluates signals at sign-in (user, app, location, device, risk) and then allows, blocks or requires extra controls such as MFA. Requires P1.", "サインイン時にシグナル（ユーザー、アプリ、場所、デバイス、リスク）を評価し、許可・ブロック、または MFA などの追加制御を要求する Entra ID のポリシーエンジンです。P1 が必要です。", "Sign-in အချိန် signal (user၊ app၊ location၊ device၊ risk) တွေကို စစ်ပြီး allow၊ block ဒါမှမဟုတ် MFA လို ထပ်တောင်းတဲ့ Entra ID policy engine ပါ။ P1 လိုတယ်။"),
      example: L("Require MFA for the Azure portal when users are outside the Tokyo office IP range.", "東京オフィスの IP 範囲外にいるユーザーが Azure portal にアクセスするときは MFA を要求します。", "Tokyo office IP range အပြင်ကနေ Azure portal ဝင်ရင် MFA တောင်းတယ်။") },
    { term: 'Self-service password reset (SSPR)',
      definition: L("Lets users reset their own forgotten password after verifying with registered authentication methods, reducing helpdesk calls.", "登録済みの認証方法で本人確認した後、ユーザー自身が忘れたパスワードをリセットできる機能で、ヘルプデスクへの問い合わせを減らします。", "Register လုပ်ထားတဲ့ authentication method နဲ့ စစ်ပြီး user က မေ့သွားတဲ့ password ကို ကိုယ်တိုင် reset လုပ်နိုင်တဲ့ feature ဖြစ်ပြီး helpdesk call လျော့စေတယ်။"),
      example: L("At 11 p.m. a user approves an Authenticator notification and sets a new password without calling IT.", "夜 11 時、ユーザーは Authenticator の通知を承認し、IT に電話せずに新しいパスワードを設定します。", "ညနေ ၁၁ နာရီမှာ user က Authenticator notification ကို approve လုပ်ပြီး IT ကို မဖုန်းဆက်ဘဲ password အသစ်ထားတယ်။") },
    { term: 'Role assignment',
      definition: L("The attachment of a role definition to a security principal at a scope; the core unit of Azure RBAC.", "ロール定義をスコープ上でセキュリティプリンシパルに結び付けるもので、Azure RBAC の基本単位です。", "Role definition ကို scope တစ်ခုမှာ security principal နဲ့ ချိတ်တာဖြစ်ပြီး Azure RBAC ရဲ့ အခြေခံ unit ပါ။"),
      example: L("Group sg-web-operators + Contributor + /subscriptions/<id>/resourceGroups/rg-web.", "グループ sg-web-operators＋Contributor＋/subscriptions/<id>/resourceGroups/rg-web。", "Group sg-web-operators + Contributor + /subscriptions/<id>/resourceGroups/rg-web။") },
    { term: 'User Access Administrator',
      definition: L("Built-in Azure role that can manage role assignments (access) but cannot manage the resources themselves.", "ロール割り当て（アクセス）を管理できるが、リソース自体は管理できない Azure の組み込みロールです。", "Role assignment (access) ကို စီမံနိုင်ပေမဲ့ resource ကိုယ်တိုင်ကို မစီမံနိုင်တဲ့ Azure built-in role ပါ။"),
      example: L("The security team gets User Access Administrator on the subscription to review and grant access.", "セキュリティチームはアクセスの確認と付与のため、サブスクリプションで User Access Administrator を受け取ります。", "Security team က access စစ်ဖို့နဲ့ ပေးဖို့ subscription မှာ User Access Administrator ရတယ်။") },
    { term: 'Deny assignment',
      definition: L("A rule that blocks specific actions for principals at a scope even if a role assignment allows them; it takes precedence over role assignments and is created by Azure, not directly by you.", "ロール割り当てが許可していても、スコープ上のプリンシパルに対して特定のアクションをブロックするルールです。ロール割り当てより優先され、利用者が直接ではなく Azure によって作成されます。", "Role assignment က ခွင့်ပြုထားရင်တောင် scope တစ်ခုမှာ principal တွေရဲ့ action သတ်မှတ်ချက်ကို block လုပ်တဲ့ rule ပါ။ Role assignment ထက် ဦးစားပေးပြီး ကိုယ်တိုင်မဟုတ်ဘဲ Azure က ဖန်တီးတယ်။"),
      example: L("A deployment stack with deny settings stops even Owners from deleting its managed resources.", "拒否設定付きのデプロイスタックは、Owner であっても管理下のリソースを削除できないようにします。", "Deny setting ပါတဲ့ deployment stack က Owner တောင် သူစီမံတဲ့ resource ကို မဖျက်နိုင်အောင် တားတယ်။") },
    { term: 'Managed identity',
      definition: L("An Entra ID identity for Azure resources whose credentials Azure manages automatically. System-assigned is tied to one resource; user-assigned is a standalone, shareable resource.", "資格情報を Azure が自動管理する、Azure リソース用の Entra ID の ID です。システム割り当ては 1 つのリソースに紐付き、ユーザー割り当ては独立して共有可能なリソースです。", "Credential ကို Azure က အလိုအလျောက် စီမံပေးတဲ့ Azure resource အတွက် Entra ID identity ပါ။ System-assigned က resource တစ်ခုနဲ့ ချိတ်ထားပြီး user-assigned က share လို့ရတဲ့ သီးခြား resource ပါ။"),
      example: L("An App Service uses its managed identity to get a token and read a connection string from Key Vault.", "App Service がマネージド ID でトークンを取得し、Key Vault から接続文字列を読み取ります。", "App Service က သူ့ managed identity နဲ့ token ယူပြီး Key Vault ကနေ connection string ကို ဖတ်တယ်။") },
    { term: 'Microsoft Defender for Cloud',
      definition: L("Cloud security posture management (secure score, recommendations, compliance) plus workload protection (Defender plans, threat alerts) for Azure, other clouds and on-premises.", "Azure・他クラウド・オンプレミス向けの、クラウドセキュリティ態勢管理（セキュアスコア、推奨事項、コンプライアンス）とワークロード保護（Defender プラン、脅威アラート）です。", "Azure၊ တခြား cloud နဲ့ on-prem အတွက် cloud security posture management (secure score၊ recommendation၊ compliance) နဲ့ workload protection (Defender plan၊ threat alert) ပေးတဲ့ service ပါ။"),
      example: L("Defender for Cloud flags a storage account that allows public access and raises your secure score after you fix it.", "Defender for Cloud がパブリックアクセスを許可するストレージアカウントを指摘し、修正後にセキュアスコアが上がります。", "Public access ခွင့်ပြုထားတဲ့ storage account ကို Defender for Cloud က ပြပြီး ပြင်လိုက်ရင် secure score တက်တယ်။") },
  ],
};
