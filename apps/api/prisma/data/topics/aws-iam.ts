import { L, type SeedTopic } from '../types.js';

export const topic: SeedTopic = {
  slug: 'aws-iam',
  icon: 'ShieldCheck',
  level: 'ASSOCIATE',
  exams: ['CLF-C02', 'SAA-C03'],
  name: L("AWS IAM & Security Services", "AWS IAM とセキュリティサービス", "AWS IAM နဲ့ Security Service များ"),
  description: L(
    "Root user hygiene, IAM users, groups, roles and policies, policy evaluation logic, STS and temporary credentials, GitHub Actions OIDC federation, Organizations and SCPs, IAM Identity Center, and the AWS security services from KMS to GuardDuty.",
    "ルートユーザーの保護、IAM ユーザー・グループ・ロール・ポリシー、ポリシー評価ロジック、STS と一時的な認証情報、GitHub Actions の OIDC フェデレーション、Organizations と SCP、IAM Identity Center、そして KMS から GuardDuty までの AWS セキュリティサービスを学びます。",
    "Root user ကို ကာကွယ်နည်း၊ IAM user/group/role/policy၊ policy evaluation logic၊ STS နဲ့ temporary credential၊ GitHub Actions OIDC federation၊ Organizations နဲ့ SCP၊ IAM Identity Center၊ KMS ကနေ GuardDuty အထိ AWS security service တွေကို လေ့လာမယ်။",
  ),
  lesson: {
    minutes: 21,
    objectives: [
      L("Secure the root user and choose correctly between IAM users, groups, roles and IAM Identity Center.",
        "ルートユーザーを保護し、IAM ユーザー・グループ・ロール・IAM Identity Center を正しく使い分けられる。",
        "Root user ကို လုံခြုံအောင်ထားပြီး IAM user၊ group၊ role၊ IAM Identity Center ကို မှန်မှန်ကန်ကန် ရွေးသုံးနိုင်မယ်။"),
      L("Read and write IAM policy JSON (Effect, Action, Resource, Condition) and predict the result with the policy evaluation logic.",
        "IAM ポリシーの JSON（Effect、Action、Resource、Condition）を読み書きし、ポリシー評価ロジックで結果を予測できる。",
        "IAM policy JSON (Effect၊ Action၊ Resource၊ Condition) ကို ဖတ်/ရေးနိုင်ပြီး policy evaluation logic နဲ့ ရလဒ်ကို ကြိုခန့်မှန်းနိုင်မယ်။"),
      L("Use roles and STS for EC2, cross-account access and GitHub Actions OIDC, and debug a failed `sts:AssumeRoleWithWebIdentity`.",
        "EC2、クロスアカウントアクセス、GitHub Actions OIDC でロールと STS を使い、失敗した `sts:AssumeRoleWithWebIdentity` をデバッグできる。",
        "EC2၊ cross-account access၊ GitHub Actions OIDC အတွက် role နဲ့ STS ကို သုံးနိုင်ပြီး fail ဖြစ်တဲ့ `sts:AssumeRoleWithWebIdentity` ကို debug လုပ်နိုင်မယ်။"),
      L("Explain how AWS Organizations, SCPs, permission boundaries and IAM Access Analyzer limit and audit access at scale.",
        "AWS Organizations、SCP、アクセス許可の境界、IAM Access Analyzer が大規模環境でアクセスをどう制限・監査するかを説明できる。",
        "AWS Organizations၊ SCP၊ permission boundary၊ IAM Access Analyzer တို့က account အများကြီးမှာ access ကို ဘယ်လို ကန့်သတ်/စစ်ဆေးလဲ ရှင်းပြနိုင်မယ်။"),
      L("Choose between KMS key types, Secrets Manager and Parameter Store, and ACM for data protection.",
        "データ保護のために KMS キーの種類、Secrets Manager と Parameter Store、ACM を選択できる。",
        "Data protection အတွက် KMS key အမျိုးအစား၊ Secrets Manager နဲ့ Parameter Store၊ ACM ကို ရွေးချယ်နိုင်မယ်။"),
      L("Match each security service (Shield, WAF, GuardDuty, Inspector, Macie, Security Hub, Detective, Artifact, Cognito) to its job.",
        "各セキュリティサービス（Shield、WAF、GuardDuty、Inspector、Macie、Security Hub、Detective、Artifact、Cognito）を役割と結び付けられる。",
        "Security service တစ်ခုချင်းစီ (Shield၊ WAF၊ GuardDuty၊ Inspector၊ Macie၊ Security Hub၊ Detective၊ Artifact၊ Cognito) ကို သူ့အလုပ်နဲ့ တွဲပြောနိုင်မယ်။"),
    ],
    sections: [
      {
        id: "root-and-identities",
        title: L("The root user and the IAM building blocks", "ルートユーザーと IAM の構成要素", "Root user နဲ့ IAM ရဲ့ အခြေခံ အစိတ်အပိုင်းများ"),
        blocks: [
          { type: 'p', text: L(
            "**AWS Identity and Access Management (IAM)** answers two questions for every API call: **who are you?** (authentication) and **are you allowed to do this?** (authorization). IAM is a global service, it is free, and by default everything is denied: a brand-new identity can do nothing until a policy allows it. Think of an office building: IAM issues the ID badges (identities) and programs which doors each badge opens (policies).",
            "**AWS Identity and Access Management（IAM）**は、すべての API 呼び出しに対して 2 つの問いに答えます。**あなたは誰か？**（認証）と**それを実行してよいか？**（認可）です。IAM はグローバルサービスで無料、そしてデフォルトではすべて拒否されます。新しく作成した ID はポリシーで許可されるまで何もできません。オフィスビルに例えると、IAM は社員証（ID）を発行し、どの社員証でどの扉が開くか（ポリシー）を設定する仕組みです。",
            "**AWS Identity and Access Management (IAM)** က API call တိုင်းအတွက် မေးခွန်း ၂ ခုကို ဖြေပေးတယ်- **မင်းက ဘယ်သူလဲ?** (authentication) နဲ့ **ဒါလုပ်ခွင့် ရှိလား?** (authorization)။ IAM က global service ဖြစ်ပြီး အခမဲ့ပါ။ Default က အားလုံး deny ပဲ- identity အသစ်တစ်ခုက policy နဲ့ ခွင့်မပြုမချင်း ဘာမှ လုပ်လို့မရဘူး။ ရုံးအဆောက်အဦလို စဉ်းစားကြည့်ပါ- IAM က ID badge (identity) ထုတ်ပေးပြီး badge တစ်ခုချင်းက ဘယ်တံခါးတွေ ဖွင့်လို့ရလဲ (policy) သတ်မှတ်ပေးတာပါ။"
          ) },
          { type: 'p', text: L(
            "The **root user** is the email address that created the account. It has unrestricted power, including closing the account and changing the support plan, and IAM policies cannot limit it. Best practice: enable **MFA** on root, **never create root access keys** (delete any that exist), store the credentials safely, and use root only for the few tasks that require it. Daily work happens through federated users (IAM Identity Center) or roles.",
            "**ルートユーザー**はアカウントを作成したメールアドレスです。アカウントの解約や Support プランの変更を含む無制限の権限を持ち、IAM ポリシーでは制限できません。ベストプラクティスは、ルートに **MFA** を有効化し、**ルートのアクセスキーは絶対に作成しない**（既存のものは削除）、認証情報を安全に保管し、ルートが必要な少数のタスクにのみ使うことです。日常業務はフェデレーションユーザー（IAM Identity Center）やロールで行います。",
            "**Root user** ဆိုတာ account ကို ဖွင့်ခဲ့တဲ့ email address ပါ။ Account ပိတ်တာ၊ support plan ပြောင်းတာအပါအဝင် အကန့်အသတ်မရှိ power ရှိပြီး IAM policy နဲ့ ကန့်သတ်လို့ မရဘူး။ Best practice က root မှာ **MFA** ဖွင့်ပါ၊ **root access key ဘယ်တော့မှ မဖန်တီးပါနဲ့** (ရှိရင် ဖျက်ပါ)၊ credential ကို လုံခြုံစွာ သိမ်းပြီး root လိုအပ်တဲ့ အလုပ်အနည်းငယ်အတွက်ပဲ သုံးပါ။ နေ့စဉ်အလုပ်ကို federated user (IAM Identity Center) သို့မဟုတ် role နဲ့ လုပ်ပါ။"
          ) },
          { type: 'table',
            head: [L("Identity", "ID の種類", "Identity"), L("What it is", "概要", "ဘာလဲ"), L("Credentials", "認証情報", "Credential"), L("Use it for", "用途", "ဘာအတွက်သုံးလဲ")],
            rows: [
              [L("IAM user", "IAM ユーザー", "IAM user"), L("A long-lived identity for one person or app", "1 人の人または 1 つのアプリ用の長期的な ID", "လူတစ်ယောက် (သို့) app တစ်ခုအတွက် ရေရှည် identity"), L("Password and/or access keys (long-term)", "パスワードやアクセスキー（長期）", "Password နဲ့/သို့ access key (ရေရှည်)"), L("Legacy tools that cannot use roles; break-glass", "ロールを使えないレガシーツール、緊急用", "Role မသုံးနိုင်တဲ့ legacy tool၊ အရေးပေါ်သုံး")],
              [L("IAM group", "IAM グループ", "IAM group"), L("A collection of users that share policies", "ポリシーを共有するユーザーの集まり", "Policy တူတူသုံးတဲ့ user အစု"), L("None (not a principal)", "なし（プリンシパルではない）", "မရှိ (principal မဟုတ်)"), L("Assigning permissions to teams of users", "ユーザーのチームへの権限付与", "User team တွေကို permission ပေးဖို့")],
              [L("IAM role", "IAM ロール", "IAM role"), L("An identity anyone trusted can assume temporarily", "信頼された相手が一時的に引き受ける ID", "ယုံကြည်ထားသူ ယာယီ assume လုပ်လို့ရတဲ့ identity"), L("Temporary STS credentials", "STS の一時的な認証情報", "STS ယာယီ credential"), L("EC2, Lambda, cross-account, federation, CI/CD", "EC2、Lambda、クロスアカウント、フェデレーション、CI/CD", "EC2၊ Lambda၊ cross-account၊ federation၊ CI/CD")],
              [L("Identity Center user", "Identity Center ユーザー", "Identity Center user"), L("A workforce user signing in through SSO", "SSO でサインインする従業員ユーザー", "SSO နဲ့ sign in ဝင်တဲ့ ဝန်ထမ်း user"), L("Short-term, via permission sets", "アクセス許可セット経由の短期認証情報", "Permission set ကနေ ရတဲ့ ယာယီ credential"), L("Humans across many accounts", "複数アカウントを使う人間", "Account အများကြီးသုံးတဲ့ လူတွေ")],
            ] },
          { type: 'callout', tone: 'memory', text: L(
            "Users are **people with permanent keys**, groups are **folders of users** (groups cannot be nested and cannot be a principal), roles are **hats you put on** for a while and take off. If a question says \"application on EC2 needs to call S3\", the answer is a **role**, never access keys on the instance.",
            "ユーザーは**永続的なキーを持つ人**、グループは**ユーザーのフォルダー**（入れ子不可、プリンシパルにもなれない）、ロールは**一時的にかぶる帽子**です。「EC2 上のアプリが S3 を呼び出す必要がある」という問題なら、答えは**ロール**で、インスタンスにアクセスキーを置くことは決してありません。",
            "User က **အမြဲတမ်း key ကိုင်ထားတဲ့ လူ**၊ group က **user တွေထည့်တဲ့ folder** (group ထဲ group ထည့်လို့မရ၊ principal လည်း မဖြစ်နိုင်)၊ role က **ခဏ ဆောင်းပြီး ပြန်ချွတ်တဲ့ ဦးထုပ်** ပါ။ \"EC2 ပေါ်က app က S3 ကို ခေါ်ရမယ်\" ဆိုတဲ့ မေးခွန်းဆို အဖြေက **role** ပဲ၊ instance ပေါ်မှာ access key ထားတာ ဘယ်တော့မှ မဟုတ်ဘူး။"
          ) },
        ],
      },
      {
        id: "policy-anatomy",
        title: L("IAM policies: anatomy and types", "IAM ポリシー：構造と種類", "IAM policy- ဖွဲ့စည်းပုံနဲ့ အမျိုးအစားများ"),
        blocks: [
          { type: 'p', text: L(
            "A **policy** is a JSON document of one or more statements. Each statement has an **Effect** (`Allow` or `Deny`), an **Action** list (API operations such as `s3:GetObject`), a **Resource** list (ARNs the actions apply to) and an optional **Condition** (when the statement applies: source IP, MFA present, tags, Region, time). Resource-based policies also contain a **Principal** element that says who is being granted access.",
            "**ポリシー**は 1 つ以上のステートメントからなる JSON ドキュメントです。各ステートメントには **Effect**（`Allow` または `Deny`）、**Action**（`s3:GetObject` などの API 操作）、**Resource**（アクションの対象となる ARN）、任意の **Condition**（送信元 IP、MFA の有無、タグ、リージョン、時刻など適用条件）があります。リソースベースのポリシーには、誰にアクセスを与えるかを示す **Principal** 要素も含まれます。",
            "**Policy** ဆိုတာ statement တစ်ခု (သို့) အများပါတဲ့ JSON document ပါ။ Statement တိုင်းမှာ **Effect** (`Allow` သို့ `Deny`)၊ **Action** (`s3:GetObject` လို API operation)၊ **Resource** (action သက်ရောက်မယ့် ARN) နဲ့ မထည့်လည်းရတဲ့ **Condition** (source IP၊ MFA ရှိမရှိ၊ tag၊ Region၊ အချိန် စတဲ့ ဘယ်အချိန်မှာ သက်ရောက်မလဲ) ပါတယ်။ Resource-based policy မှာ ဘယ်သူ့ကို access ပေးမလဲ ပြောတဲ့ **Principal** element လည်း ပါတယ်။"
          ) },
          { type: 'code', lang: 'json', code: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "ReadAppBucketFromOfficeOnly",
      "Effect": "Allow",
      "Action": ["s3:GetObject", "s3:ListBucket"],
      "Resource": [
        "arn:aws:s3:::my-app-assets",
        "arn:aws:s3:::my-app-assets/*"
      ],
      "Condition": {
        "IpAddress": { "aws:SourceIp": "203.0.113.0/24" }
      }
    },
    {
      "Sid": "NeverDeleteObjects",
      "Effect": "Deny",
      "Action": "s3:DeleteObject",
      "Resource": "arn:aws:s3:::my-app-assets/*"
    }
  ]
}`, caption: L("Identity-based policy: read one bucket from the office IP range, and an explicit deny on deletes.", "ID ベースのポリシー：オフィスの IP 範囲から 1 つのバケットを読み取り、削除は明示的に拒否します。", "Identity-based policy- office IP range ကနေ bucket တစ်ခုကို ဖတ်ခွင့်ပေးပြီး delete ကို explicit deny လုပ်ထားတယ်။") },
          { type: 'p', text: L(
            "Notice the two Resource ARNs: `ListBucket` acts on the **bucket** ARN, while `GetObject` acts on **objects** (`bucket/*`). Forgetting one of them is the most common reason a hand-written S3 policy \"does not work\". `Version` must be `2012-10-17`; it is the policy language version, not a date you edit.",
            "Resource の 2 つの ARN に注目してください。`ListBucket` は**バケット**の ARN に、`GetObject` は**オブジェクト**（`bucket/*`）に作用します。どちらかを忘れることが、手書きの S3 ポリシーが「動かない」最も多い原因です。`Version` は `2012-10-17` にします。これはポリシー言語のバージョンで、編集する日付ではありません。",
            "Resource ARN ၂ ခုကို သတိထားကြည့်ပါ- `ListBucket` က **bucket** ARN ပေါ်မှာ အလုပ်လုပ်ပြီး `GetObject` က **object** (`bucket/*`) ပေါ်မှာ အလုပ်လုပ်တယ်။ တစ်ခုခု မေ့သွားတာက ကိုယ်တိုင်ရေးတဲ့ S3 policy \"အလုပ်မလုပ်ဘူး\" ဖြစ်ရတဲ့ အဖြစ်အများဆုံး အကြောင်းရင်းပါ။ `Version` က `2012-10-17` ဖြစ်ရမယ်- ဒါက policy language version ဖြစ်ပြီး ကိုယ်ပြင်ရမယ့် ရက်စွဲ မဟုတ်ဘူး။"
          ) },
          { type: 'table',
            head: [L("Policy type", "ポリシーの種類", "Policy အမျိုးအစား"), L("Attached to", "アタッチ先", "ဘယ်မှာ တွဲလဲ"), L("Key point", "ポイント", "အဓိကအချက်")],
            rows: [
              [L("AWS managed", "AWS 管理ポリシー", "AWS managed"), L("Users, groups, roles (reusable)", "ユーザー・グループ・ロール（再利用可）", "User၊ group၊ role (ပြန်သုံးလို့ရ)"), L("Written and updated by AWS, e.g. `ReadOnlyAccess`; often broader than you need", "AWS が作成・更新（例 `ReadOnlyAccess`）。必要以上に広いことが多い", "AWS က ရေးပြီး update လုပ်တယ် (ဥပမာ `ReadOnlyAccess`)၊ လိုတာထက် ကျယ်တတ်တယ်")],
              [L("Customer managed", "カスタマー管理ポリシー", "Customer managed"), L("Users, groups, roles (reusable)", "ユーザー・グループ・ロール（再利用可）", "User၊ group၊ role (ပြန်သုံးလို့ရ)"), L("You write it, it is versioned (up to 5 versions), best for least privilege", "自分で作成、バージョン管理（最大 5 つ）、最小権限に最適", "ကိုယ်တိုင်ရေး၊ version (၅ ခုအထိ) ရှိ၊ least privilege အတွက် အကောင်းဆုံး")],
              [L("Inline", "インラインポリシー", "Inline"), L("Exactly one identity", "1 つの ID のみ", "Identity တစ်ခုတည်း"), L("Deleted with the identity; use only for a strict one-to-one relationship", "ID と一緒に削除される。厳密な 1 対 1 の関係のみに使う", "Identity ဖျက်ရင် အတူပျက်တယ်၊ တစ်ခုနဲ့တစ်ခု တင်းကျပ်စွာ တွဲရမှသာ သုံး")],
              [L("Resource-based", "リソースベース", "Resource-based"), L("A resource: S3 bucket, SQS queue, KMS key, role trust policy", "リソース：S3 バケット、SQS キュー、KMS キー、ロールの信頼ポリシー", "Resource- S3 bucket၊ SQS queue၊ KMS key၊ role trust policy"), L("Has a `Principal`; can grant access to other accounts directly", "`Principal` を持ち、他アカウントに直接アクセスを付与できる", "`Principal` ပါတယ်၊ တခြား account ကို တိုက်ရိုက် access ပေးနိုင်တယ်")],
            ] },
          { type: 'callout', tone: 'exam', text: L(
            "Exam pattern: \"grant access to a bucket for another AWS account without creating users there\" points to a **resource-based (bucket) policy** or a **cross-account role**. \"Reusable, versioned, least-privilege permissions\" points to a **customer managed policy**. A **role trust policy** is itself a resource-based policy whose Action is `sts:AssumeRole*`.",
            "試験パターン：「相手側にユーザーを作らずに別の AWS アカウントへバケットのアクセスを与える」なら**リソースベース（バケット）ポリシー**か**クロスアカウントロール**です。「再利用可能でバージョン管理された最小権限」なら**カスタマー管理ポリシー**です。**ロールの信頼ポリシー**自体も、Action が `sts:AssumeRole*` のリソースベースポリシーです。",
            "Exam pattern- \"တခြား AWS account ကို အဲဒီမှာ user မဖန်တီးဘဲ bucket access ပေးချင်တယ်\" ဆိုရင် **resource-based (bucket) policy** သို့ **cross-account role** ပါ။ \"ပြန်သုံးလို့ရ၊ version ရှိ၊ least privilege\" ဆိုရင် **customer managed policy** ပါ။ **Role trust policy** ကိုယ်တိုင်က Action `sts:AssumeRole*` ပါတဲ့ resource-based policy တစ်မျိုးပါပဲ။"
          ) },
        ],
      },
      {
        id: "policy-evaluation",
        title: L("Policy evaluation logic: who wins?", "ポリシー評価ロジック：どれが優先されるか", "Policy evaluation logic- ဘယ်သူ နိုင်လဲ?"),
        blocks: [
          { type: 'p', text: L(
            "When several policies apply, AWS combines them with three rules. **1) Default deny**: no allow means no access (an implicit deny). **2) An explicit Deny always wins** over any Allow, anywhere. **3) Guardrails cap permissions**: SCPs, permission boundaries and session policies never grant anything; they only define the maximum, so an action must be allowed by every layer that is present.",
            "複数のポリシーが適用される場合、AWS は 3 つのルールで組み合わせます。**1) デフォルト拒否**：Allow がなければアクセス不可（暗黙的な拒否）。**2) 明示的な Deny は常に優先**され、どこにある Allow にも勝ちます。**3) ガードレールは上限を決める**：SCP、アクセス許可の境界、セッションポリシーは何も付与せず最大値を定義するだけなので、存在するすべての層で許可される必要があります。",
            "Policy အများကြီး သက်ရောက်တဲ့အခါ AWS က စည်းမျဉ်း ၃ ခုနဲ့ ပေါင်းစပ်တယ်။ **၁) Default deny**- allow မရှိရင် access မရ (implicit deny)။ **၂) Explicit Deny က အမြဲ နိုင်တယ်**- ဘယ်နေရာက Allow ကိုမဆို ကျော်တယ်။ **၃) Guardrail တွေက အများဆုံး ကန့်သတ်ချက်ပဲ**- SCP၊ permission boundary၊ session policy တွေက ဘာမှ grant မလုပ်ဘဲ maximum ကိုပဲ သတ်မှတ်တာမို့ ရှိနေတဲ့ layer တိုင်းက allow ပေးမှ ရမယ်။"
          ) },
          { type: 'diagram', text: `        API request (principal, action, resource)
                         |
                         v
   +-------------------------------------------+
   | Explicit Deny in ANY applicable policy?   |--yes--> DENY
   +-------------------------------------------+
                         | no
                         v
   +-------------------------------------------+
   | Organizations SCP / RCP allows it?        |--no---> DENY
   +-------------------------------------------+
                         | yes
                         v
   +-------------------------------------------+
   | Identity-based OR resource-based allows?  |--no---> DENY
   +-------------------------------------------+   (implicit)
                         | yes
                         v
   +-------------------------------------------+
   | Permission boundary / session policy      |--no---> DENY
   | (if present) also allows it?              |
   +-------------------------------------------+
                         | yes
                         v
                       ALLOW
   Cross-account: BOTH the caller's identity policy AND the
   target's resource policy (or role trust) must allow.`, caption: L("Simplified IAM policy evaluation flow (single request).", "簡略化した IAM ポリシー評価フロー（1 リクエスト）。", "ရိုးရှင်းအောင် ပြထားတဲ့ IAM policy evaluation flow (request တစ်ခု)။") },
          { type: 'p', text: L(
            "Example: a developer has `AdministratorAccess`, but the account sits in an OU whose SCP denies `ec2:*` outside `ap-northeast-1`. When she launches an instance in `us-east-1`, the explicit deny in the SCP wins, even though her identity policy says `*:*`. A **permission boundary** works similarly at the identity level: you let a team create roles for their Lambda functions, but attach a boundary so those roles can never exceed, say, S3 and DynamoDB access. That is how you safely delegate role creation.",
            "例：ある開発者は `AdministratorAccess` を持っていますが、アカウントが所属する OU の SCP が `ap-northeast-1` 以外での `ec2:*` を拒否しています。彼女が `us-east-1` でインスタンスを起動すると、ID ポリシーが `*:*` でも SCP の明示的な拒否が優先されます。**アクセス許可の境界**は ID レベルで同様に働きます。チームに Lambda 用ロールの作成を任せつつ、境界を付けておけば、そのロールは例えば S3 と DynamoDB 以上の権限を持てません。これがロール作成を安全に委任する方法です。",
            "ဥပမာ- developer တစ်ယောက်မှာ `AdministratorAccess` ရှိပေမဲ့ သူ့ account ရှိတဲ့ OU ရဲ့ SCP က `ap-northeast-1` အပြင်မှာ `ec2:*` ကို deny လုပ်ထားတယ်။ သူ `us-east-1` မှာ instance launch လုပ်ရင် identity policy က `*:*` ဖြစ်နေပေမဲ့ SCP ရဲ့ explicit deny က နိုင်တယ်။ **Permission boundary** ကလည်း identity level မှာ အလားတူပဲ- team ကို သူတို့ Lambda အတွက် role ဖန်တီးခွင့်ပေးပြီး boundary တွဲထားရင် အဲဒီ role တွေက S3 နဲ့ DynamoDB ထက် ပိုတဲ့ permission ဘယ်တော့မှ မရနိုင်ဘူး။ ဒါက role creation ကို လုံခြုံစွာ လွှဲပေးနည်းပါ။"
          ) },
          { type: 'callout', tone: 'memory', text: L(
            "**\"Deny beats Allow, Allow beats silence.\"** And guardrails (SCP, boundary, session policy) are like a fence: they decide how far you can walk, but they do not give you legs. The effective permission is the **intersection** of all layers.",
            "**「Deny は Allow に勝ち、Allow は沈黙に勝つ」**。ガードレール（SCP、境界、セッションポリシー）は柵のようなもので、どこまで歩けるかを決めますが、足を与えるわけではありません。有効な権限はすべての層の**共通部分**です。",
            "**\"Deny က Allow ကို နိုင်တယ်၊ Allow က ဘာမှမပြောတာကို နိုင်တယ်\"**။ Guardrail (SCP၊ boundary၊ session policy) တွေက ခြံစည်းရိုးလိုပဲ- ဘယ်အထိ လျှောက်လို့ရလဲ ဆုံးဖြတ်ပေမဲ့ ခြေထောက် မပေးဘူး။ Effective permission က layer အားလုံးရဲ့ **intersection** (ထပ်တူကျတဲ့အပိုင်း) ပါ။"
          ) },
          { type: 'list', items: [
            L("**Least privilege**: start from zero, grant only the actions and resources a task needs, then tighten with IAM Access Analyzer's last-accessed data and policy generation.",
              "**最小権限**：ゼロから始め、タスクに必要なアクションとリソースだけを付与し、IAM Access Analyzer の最終アクセス情報やポリシー生成で絞り込みます。",
              "**Least privilege**- သုညကနေ စပြီး အလုပ်အတွက် လိုတဲ့ action နဲ့ resource ကိုပဲ ပေးပါ၊ ပြီးရင် IAM Access Analyzer ရဲ့ last-accessed data နဲ့ policy generation သုံးပြီး ထပ်ကျဉ်းပါ။"),
            L("Test before you trust: the **IAM policy simulator** (`aws iam simulate-principal-policy`) shows whether a principal is allowed an action and which statement decided it.",
              "信頼する前にテスト：**IAM ポリシーシミュレーター**（`aws iam simulate-principal-policy`）で、プリンシパルがアクションを許可されるか、どのステートメントで決まったかを確認できます。",
              "မယုံခင် စမ်းပါ- **IAM policy simulator** (`aws iam simulate-principal-policy`) က principal တစ်ခုကို action ခွင့်ပြုလား၊ ဘယ် statement က ဆုံးဖြတ်လဲ ပြပေးတယ်။"),
          ] },
        ],
      },
      {
        id: "roles-and-sts",
        title: L("Roles and STS: temporary credentials everywhere", "ロールと STS：あらゆる場所で一時的な認証情報", "Role နဲ့ STS- နေရာတိုင်းမှာ temporary credential"),
        blocks: [
          { type: 'p', text: L(
            "A role has two policies: a **trust policy** (who may assume it) and **permission policies** (what the role can do once assumed). When a principal assumes a role, **AWS Security Token Service (STS)** returns temporary credentials: an access key ID, a secret key and a **session token**, valid from 15 minutes up to the role's maximum session duration (1 hour by default, configurable up to 12 hours). Leaked temporary credentials expire on their own, which is why roles beat long-term access keys.",
            "ロールには 2 種類のポリシーがあります。**信頼ポリシー**（誰が引き受けられるか）と**アクセス許可ポリシー**（引き受けた後に何ができるか）です。プリンシパルがロールを引き受けると、**AWS Security Token Service（STS）**が一時的な認証情報（アクセスキー ID、シークレットキー、**セッショントークン**）を返します。有効期間は 15 分からロールの最大セッション時間（デフォルト 1 時間、最大 12 時間まで設定可）です。漏洩しても自動的に失効するため、ロールは長期アクセスキーより優れています。",
            "Role မှာ policy ၂ မျိုး ရှိတယ်- **trust policy** (ဘယ်သူ assume လုပ်ခွင့်ရှိလဲ) နဲ့ **permission policy** (assume ပြီးရင် ဘာလုပ်နိုင်လဲ)။ Principal တစ်ခုက role ကို assume လုပ်တဲ့အခါ **AWS Security Token Service (STS)** က temporary credential (access key ID၊ secret key၊ **session token**) ပြန်ပေးတယ်။ သက်တမ်းက မိနစ် ၁၅ ကနေ role ရဲ့ maximum session duration (default ၁ နာရီ၊ ၁၂ နာရီအထိ ပြင်လို့ရ) အထိပါ။ ပေါက်ကြားသွားရင်တောင် သူ့ဘာသာ expire ဖြစ်သွားလို့ role က long-term access key ထက် ပိုကောင်းတာပါ။"
          ) },
          { type: 'list', items: [
            L("**EC2 instance profile**: a container that passes a role to an instance. The SDK and CLI fetch rotating credentials from the instance metadata service (use **IMDSv2**). Your SSM-managed EC2 needs a role with `AmazonSSMManagedInstanceCore`.",
              "**EC2 インスタンスプロファイル**：ロールをインスタンスに渡す入れ物です。SDK や CLI はインスタンスメタデータサービス（**IMDSv2** を使用）から自動更新される認証情報を取得します。SSM で管理する EC2 には `AmazonSSMManagedInstanceCore` を持つロールが必要です。",
              "**EC2 instance profile**- role ကို instance ဆီ ပေးပို့တဲ့ container ပါ။ SDK နဲ့ CLI က instance metadata service (**IMDSv2** သုံးပါ) ကနေ အလိုအလျောက် လဲပေးတဲ့ credential ကို ယူတယ်။ SSM နဲ့ manage လုပ်တဲ့ EC2 မှာ `AmazonSSMManagedInstanceCore` ပါတဲ့ role လိုတယ်။"),
            L("**Cross-account role**: account B creates a role trusting account A; a user or role in A, allowed by its own policy to call `sts:AssumeRole` on that ARN, switches in. Add an **external ID** condition when a third-party SaaS assumes your role (confused-deputy protection).",
              "**クロスアカウントロール**：アカウント B がアカウント A を信頼するロールを作成し、自身のポリシーでその ARN への `sts:AssumeRole` を許可された A のユーザーやロールが切り替えます。サードパーティの SaaS がロールを引き受ける場合は **外部 ID** の条件を追加します（混乱した代理問題への対策）。",
              "**Cross-account role**- account B က account A ကို trust လုပ်တဲ့ role ဖန်တီးတယ်၊ A ထဲက user/role က ကိုယ့် policy မှာ အဲဒီ ARN အပေါ် `sts:AssumeRole` ခွင့်ရှိရင် switch ဝင်လို့ရတယ်။ Third-party SaaS က ကိုယ့် role ကို assume လုပ်ရင် **external ID** condition ထည့်ပါ (confused deputy ကာကွယ်ဖို့)။"),
            L("**Service roles** let AWS services act for you (Lambda execution role, ECS task role); **service-linked roles** are predefined by the service itself and you cannot edit their permissions.",
              "**サービスロール**は AWS サービスが代わりに操作するためのもの（Lambda 実行ロール、ECS タスクロール）です。**サービスにリンクされたロール**はサービス自身が定義しており、権限は編集できません。",
              "**Service role** က AWS service တွေကို ကိုယ့်ကိုယ်စား လုပ်ခွင့်ပေးတယ် (Lambda execution role၊ ECS task role)။ **Service-linked role** ကတော့ service ကိုယ်တိုင် ကြိုသတ်မှတ်ထားလို့ permission ကို ပြင်လို့မရဘူး။"),
          ] },
          { type: 'table',
            head: [L("STS API", "STS API", "STS API"), L("Who calls it", "呼び出し元", "ဘယ်သူ ခေါ်လဲ"), L("Typical scenario", "典型的なシナリオ", "ပုံမှန် scenario")],
            rows: [
              [L("`AssumeRole`", "`AssumeRole`", "`AssumeRole`"), L("An AWS principal (user/role)", "AWS プリンシパル（ユーザー/ロール）", "AWS principal (user/role)"), L("Cross-account access, switching roles", "クロスアカウントアクセス、ロールの切り替え", "Cross-account access၊ role switch")],
              [L("`AssumeRoleWithWebIdentity`", "`AssumeRoleWithWebIdentity`", "`AssumeRoleWithWebIdentity`"), L("Holder of an OIDC token", "OIDC トークンの保持者", "OIDC token ကိုင်ထားသူ"), L("GitHub Actions, EKS IRSA, Cognito identity pools", "GitHub Actions、EKS IRSA、Cognito ID プール", "GitHub Actions၊ EKS IRSA၊ Cognito identity pool")],
              [L("`AssumeRoleWithSAML`", "`AssumeRoleWithSAML`", "`AssumeRoleWithSAML`"), L("Holder of a SAML assertion", "SAML アサーションの保持者", "SAML assertion ကိုင်ထားသူ"), L("Corporate IdP (e.g. Entra ID) to AWS console", "企業 IdP（例 Entra ID）から AWS コンソールへ", "ကုမ္ပဏီ IdP (ဥပမာ Entra ID) ကနေ AWS console ဝင်")],
              [L("`GetSessionToken`", "`GetSessionToken`", "`GetSessionToken`"), L("An IAM user", "IAM ユーザー", "IAM user"), L("Get MFA-backed temporary credentials for the CLI", "CLI 用に MFA 付きの一時認証情報を取得", "CLI အတွက် MFA ပါတဲ့ temporary credential ယူ")],
            ] },
          { type: 'code', lang: 'bash', code: `# Who am I right now? (works with any credentials)
aws sts get-caller-identity

# Assume a cross-account role and get temporary credentials
aws sts assume-role \\
  --role-arn arn:aws:iam::222233334444:role/AuditReadOnly \\
  --role-session-name kaung-audit \\
  --duration-seconds 3600

# Attach a role to a running EC2 instance via an instance profile
aws iam create-instance-profile --instance-profile-name app-ec2
aws iam add-role-to-instance-profile \\
  --instance-profile-name app-ec2 --role-name app-ec2-role
aws ec2 associate-iam-instance-profile \\
  --instance-id i-0abc123def4567890 \\
  --iam-instance-profile Name=app-ec2`, caption: L("STS and instance-profile commands you will use every week.", "毎週のように使う STS とインスタンスプロファイルのコマンド。", "အပတ်တိုင်း သုံးရမယ့် STS နဲ့ instance profile command တွေ။") },
          { type: 'callout', tone: 'exam', text: L(
            "SAA-C03 loves: \"most secure way for an app on EC2 to access DynamoDB\" = **IAM role via instance profile**. \"Developers in account A must manage resources in account B\" = **cross-account role + `sts:AssumeRole`**. Storing access keys in code, AMIs or user data is always the wrong answer.",
            "SAA-C03 の頻出問題：「EC2 上のアプリが DynamoDB にアクセスする最も安全な方法」＝**インスタンスプロファイル経由の IAM ロール**。「アカウント A の開発者がアカウント B のリソースを管理する」＝**クロスアカウントロール＋`sts:AssumeRole`**。アクセスキーをコード、AMI、ユーザーデータに保存する選択肢は常に誤りです。",
            "SAA-C03 မှာ မကြာခဏ ပါတာ- \"EC2 ပေါ်က app က DynamoDB ကို အလုံခြုံဆုံး access လုပ်နည်း\" = **instance profile နဲ့ IAM role**။ \"Account A က developer တွေ account B ထဲက resource ကို manage လုပ်ရမယ်\" = **cross-account role + `sts:AssumeRole`**။ Access key ကို code၊ AMI၊ user data ထဲ သိမ်းတာက အမြဲ အဖြေမှားပါ။"
          ) },
        ],
      },
      {
        id: "oidc-github-actions",
        title: L("OIDC federation: GitHub Actions without stored keys", "OIDC フェデレーション：キーを保存しない GitHub Actions", "OIDC federation- key မသိမ်းဘဲ GitHub Actions သုံးနည်း"),
        blocks: [
          { type: 'p', text: L(
            "Storing `AWS_ACCESS_KEY_ID` in GitHub secrets means a long-lived key that someone must rotate and that can leak from logs or forks. **OIDC federation** removes it. You register GitHub as an **IAM OIDC identity provider** (`token.actions.githubusercontent.com`) once per account. Each workflow run then asks GitHub for a signed JWT describing exactly which repo, branch or environment is running, and exchanges it with STS for short-lived role credentials. It is like a hotel key card printed for one guest, one room and one night.",
            "`AWS_ACCESS_KEY_ID` を GitHub Secrets に保存すると、誰かがローテーションしなければならず、ログやフォークから漏洩しうる長期キーが残ります。**OIDC フェデレーション**はこれを不要にします。アカウントごとに一度、GitHub を **IAM OIDC ID プロバイダー**（`token.actions.githubusercontent.com`）として登録します。以後、各ワークフロー実行は、どのリポジトリ・ブランチ・環境で動いているかを示す署名付き JWT を GitHub に要求し、STS で短期間のロール認証情報と交換します。1 人の宿泊客、1 部屋、1 泊分だけ発行されるホテルのカードキーのようなものです。",
            "`AWS_ACCESS_KEY_ID` ကို GitHub secret ထဲ သိမ်းထားရင် တစ်ယောက်ယောက်က rotate လုပ်ပေးရမယ့်၊ log တွေ fork တွေကနေ ပေါက်ကြားနိုင်တဲ့ ရေရှည် key တစ်ခု ကျန်နေမယ်။ **OIDC federation** က အဲဒါကို ဖယ်ရှားပေးတယ်။ Account တစ်ခုမှာ တစ်ကြိမ်ပဲ GitHub ကို **IAM OIDC identity provider** (`token.actions.githubusercontent.com`) အဖြစ် register လုပ်ပါ။ ပြီးရင် workflow run တိုင်းက ဘယ် repo၊ branch၊ environment က run နေလဲ ဖော်ပြထားတဲ့ sign လုပ်ထားသော JWT ကို GitHub ဆီက တောင်းပြီး STS မှာ ခဏသုံး role credential နဲ့ လဲတယ်။ ဧည့်သည်တစ်ယောက်၊ အခန်းတစ်ခန်း၊ တစ်ညအတွက်ပဲ ထုတ်ပေးတဲ့ ဟိုတယ် key card လိုပါပဲ။"
          ) },
          { type: 'diagram', text: `  GitHub Actions job           GitHub OIDC IdP
  (permissions:                token.actions.
   id-token: write)            githubusercontent.com
        |  1. request JWT              |
        |----------------------------->|
        |<-----------------------------|
        |  JWT: iss, aud=sts.amazonaws.com,
        |       sub=repo:my-org/my-app:ref:refs/heads/main
        |
        |  2. AssumeRoleWithWebIdentity(JWT, RoleArn)
        v
  +---------------------+   3. verify JWT signature,
  |      AWS STS        |      match trust policy:
  +---------------------+      Federated = OIDC provider
        |                      aud == sts.amazonaws.com
        |                      sub matches pattern
        |  4. temp creds (~1 h)
        v
  aws ssm send-command / aws s3 sync ... as the IAM role`, caption: L("GitHub Actions to AWS via OIDC: no stored secrets, just a signed token exchanged for a role.", "OIDC による GitHub Actions から AWS への接続：保存されたシークレットはなく、署名付きトークンをロールと交換するだけです。", "OIDC နဲ့ GitHub Actions ကနေ AWS ဆီ- secret မသိမ်းဘဲ sign လုပ်ထားတဲ့ token ကို role နဲ့ လဲတာပဲ။") },
          { type: 'code', lang: 'json', code: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::111122223333:oidc-provider/token.actions.githubusercontent.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
        },
        "StringLike": {
          "token.actions.githubusercontent.com:sub": [
            "repo:my-org/my-app:ref:refs/heads/main",
            "repo:my-org@1234567/my-app@89012345:ref:refs/heads/main"
          ]
        }
      }
    }
  ]
}`, caption: L("Trust policy for a deploy role: only the main branch of one repo, in either subject format.", "デプロイ用ロールの信頼ポリシー：1 つのリポジトリの main ブランチのみを、どちらのサブジェクト形式でも許可します。", "Deploy role အတွက် trust policy- repo တစ်ခုရဲ့ main branch ကိုပဲ subject format နှစ်မျိုးလုံးနဲ့ ခွင့်ပြုထားတယ်။") },
          { type: 'p', text: L(
            "The `sub` claim is where most failures happen. Its default shape is `repo:OWNER/REPO:ref:refs/heads/BRANCH`, but it changes with context: a job that uses a GitHub **environment** gets `repo:OWNER/REPO:environment:prod`, a pull request gets `repo:OWNER/REPO:pull_request`, and an organization or repository can customize the template. Some setups emit **immutable IDs** such as `repo:Owner@123/repo@456:ref:refs/heads/main`, which survive renames and block someone from recreating a deleted repo name. If your trust policy only lists the name-based string, STS compares, finds no match and refuses.",
            "失敗の大半は `sub` クレームで起こります。デフォルトの形は `repo:OWNER/REPO:ref:refs/heads/BRANCH` ですが、状況によって変わります。GitHub の **environment** を使うジョブは `repo:OWNER/REPO:environment:prod`、プルリクエストは `repo:OWNER/REPO:pull_request` になり、組織やリポジトリでテンプレートをカスタマイズすることもできます。構成によっては `repo:Owner@123/repo@456:ref:refs/heads/main` のような**イミュータブル ID** が出力されます。これは名前変更の影響を受けず、削除されたリポジトリ名を他人が再作成する攻撃も防ぎます。信頼ポリシーに名前ベースの文字列しかないと、STS は比較して一致せず拒否します。",
            "Fail ဖြစ်တာ အများစုက `sub` claim မှာပါ။ Default ပုံစံက `repo:OWNER/REPO:ref:refs/heads/BRANCH` ဖြစ်ပေမဲ့ context အလိုက် ပြောင်းတယ်- GitHub **environment** သုံးတဲ့ job ဆို `repo:OWNER/REPO:environment:prod`၊ pull request ဆို `repo:OWNER/REPO:pull_request` ဖြစ်ပြီး organization (သို့) repo က template ကို customize လုပ်နိုင်တယ်။ တချို့ setup တွေက `repo:Owner@123/repo@456:ref:refs/heads/main` လို **immutable ID** ထုတ်ပေးတယ်- ဒါက နာမည်ပြောင်းလည်း မပြောင်းဘဲ ဖျက်ထားတဲ့ repo နာမည်ကို တခြားသူ ပြန်ဖန်တီးတာကိုလည်း ကာကွယ်ပေးတယ်။ Trust policy မှာ နာမည်နဲ့ string ပဲ ပါရင် STS က တိုက်စစ်ပြီး မကိုက်လို့ ငြင်းပယ်လိုက်တယ်။"
          ) },
          { type: 'list', items: [
            L("**Debug checklist for \"Not authorized to perform sts:AssumeRoleWithWebIdentity\"**: (1) the workflow has `permissions: id-token: write`; (2) the role ARN and account are correct; (3) the provider ARN in `Principal.Federated` exists in that account; (4) `aud` is `sts.amazonaws.com`; (5) the actual `sub` matches your pattern exactly.",
              "**「Not authorized to perform sts:AssumeRoleWithWebIdentity」のデバッグチェックリスト**：(1) ワークフローに `permissions: id-token: write` がある、(2) ロール ARN とアカウントが正しい、(3) `Principal.Federated` のプロバイダー ARN がそのアカウントに存在する、(4) `aud` が `sts.amazonaws.com`、(5) 実際の `sub` がパターンと完全に一致する。",
              "**\"Not authorized to perform sts:AssumeRoleWithWebIdentity\" debug checklist**- (၁) workflow မှာ `permissions: id-token: write` ပါလား၊ (၂) role ARN နဲ့ account မှန်လား၊ (၃) `Principal.Federated` ထဲက provider ARN က အဲဒီ account မှာ တကယ်ရှိလား၊ (၄) `aud` က `sts.amazonaws.com` လား၊ (၅) တကယ့် `sub` က ကိုယ့် pattern နဲ့ အတိအကျ ကိုက်လား။"),
            L("Wildcards need `StringLike`; with `StringEquals` the `*` is a literal character and never matches. Print the real claims (not the token) in a debug step, then copy the `sub` exactly into the trust policy.",
              "ワイルドカードには `StringLike` が必要です。`StringEquals` では `*` は文字そのものとして扱われ、一致しません。デバッグ用ステップで実際のクレーム（トークンではない）を出力し、`sub` を正確に信頼ポリシーへコピーします。",
              "Wildcard သုံးရင် `StringLike` လိုတယ်- `StringEquals` မှာ `*` က စာလုံးအဖြစ်ပဲ ယူလို့ ဘယ်တော့မှ မကိုက်ဘူး။ Debug step မှာ တကယ့် claim (token မဟုတ်) ကို print ထုတ်ပြီး `sub` ကို trust policy ထဲ အတိအကျ ကူးထည့်ပါ။"),
          ] },
          { type: 'code', lang: 'bash', code: `# Debug step inside the workflow: print only the JWT claims (payload)
TOKEN=$(curl -sS -H "Authorization: bearer $ACTIONS_ID_TOKEN_REQUEST_TOKEN" \\
  "$ACTIONS_ID_TOKEN_REQUEST_URL&audience=sts.amazonaws.com" | jq -r .value)
echo "$TOKEN" | cut -d. -f2 | tr '_-' '/+' | base64 -d 2>/dev/null | jq '{sub, aud, iss}'

# Compare with what the role actually trusts
aws iam get-role --role-name gha-deploy \\
  --query 'Role.AssumeRolePolicyDocument.Statement[0].Condition'`, caption: L("See the real `sub` your job sends, then compare it with the trust policy.", "ジョブが送る実際の `sub` を確認し、信頼ポリシーと比較します。", "Job က ပို့တဲ့ တကယ့် `sub` ကို ကြည့်ပြီး trust policy နဲ့ တိုက်စစ်ပါ။") },
          { type: 'callout', tone: 'warn', text: L(
            "Never \"fix\" a mismatch with `repo:*` or `repo:my-org/*` on a role that can deploy to production: any repo (or any branch, including a fork's pull request flow) could then assume it. Pin the repo, the branch or environment, and prefer the immutable-ID form when your tokens use it.",
            "本番にデプロイできるロールで、不一致を `repo:*` や `repo:my-org/*` で「修正」してはいけません。どのリポジトリ（またはどのブランチ）でも引き受けられてしまいます。リポジトリとブランチまたは environment を固定し、トークンがイミュータブル ID 形式を使う場合はそちらを優先します。",
            "Production ကို deploy လုပ်နိုင်တဲ့ role မှာ mismatch ကို `repo:*` (သို့) `repo:my-org/*` နဲ့ \"ပြင်\" လို့ မဖြစ်ပါဘူး- ဘယ် repo (ဘယ် branch) ကမဆို assume လုပ်လို့ ရသွားမယ်။ Repo နဲ့ branch (သို့) environment ကို pin လုပ်ပါ၊ token က immutable ID format သုံးရင် အဲဒါကို ဦးစားပေးပါ။"
          ) },
        ],
      },
      {
        id: "organizations-sso",
        title: L("Organizations, SCPs, Identity Center and Access Analyzer", "Organizations、SCP、Identity Center、Access Analyzer", "Organizations၊ SCP၊ Identity Center နဲ့ Access Analyzer"),
        blocks: [
          { type: 'p', text: L(
            "Real companies run many accounts (prod, dev, security, logging) for blast-radius isolation. **AWS Organizations** groups them into **organizational units (OUs)** under one **management account**, with **consolidated billing** and shared volume discounts. **Service control policies (SCPs)** set the maximum permissions for every IAM user and role in member accounts, including their root users. SCPs never grant access, do not affect the management account, and do not restrict service-linked roles. **Resource control policies (RCPs)** are the newer counterpart that caps what can be done to resources such as S3 buckets and KMS keys.",
            "実際の企業は、影響範囲を分離するために多数のアカウント（本番、開発、セキュリティ、ログ）を運用します。**AWS Organizations** はそれらを 1 つの**管理アカウント**の下の**組織単位（OU）**にまとめ、**一括請求**とボリュームディスカウントの共有を提供します。**サービスコントロールポリシー（SCP）**はメンバーアカウントのすべての IAM ユーザーとロール（ルートユーザーを含む）の最大権限を設定します。SCP はアクセスを付与せず、管理アカウントには影響せず、サービスにリンクされたロールも制限しません。**リソースコントロールポリシー（RCP）**は、S3 バケットや KMS キーなどのリソースに対して可能な操作の上限を決める新しい仕組みです。",
            "တကယ့်ကုမ္ပဏီတွေက blast radius ခွဲထားဖို့ account အများကြီး (prod၊ dev၊ security၊ logging) သုံးကြတယ်။ **AWS Organizations** က အဲဒါတွေကို **management account** တစ်ခုအောက်က **organizational unit (OU)** တွေထဲ စုစည်းပေးပြီး **consolidated billing** နဲ့ volume discount မျှသုံးခွင့် ပေးတယ်။ **Service control policy (SCP)** က member account ထဲက IAM user နဲ့ role အားလုံး (root user ပါ) ရဲ့ maximum permission ကို သတ်မှတ်တယ်။ SCP က access ဘယ်တော့မှ grant မလုပ်ဘူး၊ management account ကို မသက်ရောက်ဘူး၊ service-linked role ကိုလည်း မကန့်သတ်ဘူး။ **Resource control policy (RCP)** ကတော့ S3 bucket၊ KMS key လို resource တွေအပေါ် လုပ်နိုင်တာကို ကန့်သတ်တဲ့ နောက်ပိုင်းထွက် တွဲဖက်ပါ။"
          ) },
          { type: 'code', lang: 'json', code: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "DenyOutsideTokyoAndOsaka",
      "Effect": "Deny",
      "NotAction": ["iam:*", "organizations:*", "sts:*", "support:*"],
      "Resource": "*",
      "Condition": {
        "StringNotEquals": {
          "aws:RequestedRegion": ["ap-northeast-1", "ap-northeast-3"]
        }
      }
    }
  ]
}`, caption: L("SCP guardrail: deny regional services outside Japan, while global services keep working.", "SCP ガードレール：日本以外のリージョンでのサービスを拒否し、グローバルサービスは動作させます。", "SCP guardrail- Japan အပြင်က Region မှာ service တွေကို deny လုပ်ပြီး global service တွေကတော့ ဆက်အလုပ်လုပ်တယ်။") },
          { type: 'p', text: L(
            "**IAM Identity Center** (successor to AWS SSO) is the recommended way for **humans** to access many accounts. Connect your corporate directory (Microsoft Entra ID, Okta, or the built-in directory), define **permission sets** (for example `ReadOnly`, `PowerUser`), and assign groups to accounts. Identity Center creates the matching roles in each account, users get one portal and `aws sso login` gives the CLI short-term credentials. No IAM users, no access keys to rotate.",
            "**IAM Identity Center**（AWS SSO の後継）は、**人間**が多数のアカウントにアクセスする際の推奨方法です。企業ディレクトリ（Microsoft Entra ID、Okta、または組み込みディレクトリ）を接続し、**アクセス許可セット**（例 `ReadOnly`、`PowerUser`）を定義して、グループをアカウントに割り当てます。Identity Center が各アカウントに対応するロールを作成し、ユーザーは 1 つのポータルを使い、`aws sso login` で CLI 用の短期認証情報を取得します。IAM ユーザーもローテーションすべきアクセスキーも不要です。",
            "**IAM Identity Center** (AWS SSO ရဲ့ နောက်ဆက်တွဲ) က **လူတွေ** account အများကြီးကို ဝင်ဖို့ AWS က အကြံပြုတဲ့နည်းပါ။ ကုမ္ပဏီ directory (Microsoft Entra ID၊ Okta သို့ built-in directory) ကို ချိတ်၊ **permission set** (ဥပမာ `ReadOnly`၊ `PowerUser`) တွေ သတ်မှတ်ပြီး group တွေကို account တွေနဲ့ assign လုပ်ပါ။ Identity Center က account တစ်ခုချင်းမှာ သက်ဆိုင်ရာ role ကို ဖန်တီးပေးတယ်၊ user တွေက portal တစ်ခုတည်း သုံးပြီး `aws sso login` နဲ့ CLI အတွက် ခဏသုံး credential ရတယ်။ IAM user လည်း မလို၊ rotate လုပ်ရမယ့် access key လည်း မရှိဘူး။"
          ) },
          { type: 'list', items: [
            L("**IAM Access Analyzer**: finds resources shared outside your account or organization (external access), flags **unused** roles, keys and permissions, validates policies against best practices, and can **generate** a least-privilege policy from CloudTrail activity.",
              "**IAM Access Analyzer**：アカウントや組織の外部に共有されたリソース（外部アクセス）を検出し、**未使用**のロール・キー・権限を指摘し、ベストプラクティスに沿ってポリシーを検証し、CloudTrail のアクティビティから最小権限ポリシーを**生成**できます。",
              "**IAM Access Analyzer**- account (သို့) organization အပြင်ကို share ထားတဲ့ resource (external access) တွေကို ရှာတယ်၊ **မသုံးတော့တဲ့** role၊ key၊ permission တွေကို ပြတယ်၊ policy ကို best practice နဲ့ validate လုပ်ပြီး CloudTrail activity ကနေ least-privilege policy ကို **generate** လုပ်ပေးနိုင်တယ်။"),
            L("**Credential report** (account-wide CSV of users, passwords, keys, MFA) and **last accessed** information help you find and remove stale access.",
              "**認証情報レポート**（ユーザー、パスワード、キー、MFA のアカウント全体の CSV）と**最終アクセス**情報は、古いアクセスを見つけて削除するのに役立ちます。",
              "**Credential report** (user၊ password၊ key၊ MFA စာရင်း account တစ်ခုလုံးရဲ့ CSV) နဲ့ **last accessed** information က မသုံးတော့တဲ့ access တွေကို ရှာပြီး ဖယ်ရှားဖို့ ကူညီတယ်။"),
          ] },
          { type: 'callout', tone: 'exam', text: L(
            "Keywords: \"prevent all accounts from using a Region / disabling CloudTrail\" = **SCP**. \"Single sign-on for employees across multiple accounts using the existing corporate IdP\" = **IAM Identity Center**. \"Find S3 buckets or roles shared with external accounts\" = **IAM Access Analyzer**. Remember: an SCP that allows something still needs an IAM policy to grant it.",
            "キーワード：「すべてのアカウントで特定リージョンの使用や CloudTrail の無効化を防ぐ」＝**SCP**。「既存の企業 IdP を使い、複数アカウントで従業員のシングルサインオン」＝**IAM Identity Center**。「外部アカウントと共有されている S3 バケットやロールを見つける」＝**IAM Access Analyzer**。SCP で許可していても、付与するには IAM ポリシーが必要なことを忘れないでください。",
            "Keyword- \"account အားလုံးမှာ Region တစ်ခု သုံးတာ / CloudTrail ပိတ်တာကို တားချင်\" = **SCP**။ \"ရှိပြီးသား ကုမ္ပဏီ IdP နဲ့ account အများကြီးအတွက် ဝန်ထမ်း single sign-on\" = **IAM Identity Center**။ \"External account နဲ့ share ထားတဲ့ S3 bucket/role ကို ရှာ\" = **IAM Access Analyzer**။ သတိရပါ- SCP က allow လုပ်ထားလည်း တကယ် grant လုပ်ဖို့ IAM policy လိုသေးတယ်။"
          ) },
        ],
      },
      {
        id: "data-protection",
        title: L("Data protection: KMS, Secrets Manager, Parameter Store, ACM", "データ保護：KMS、Secrets Manager、Parameter Store、ACM", "Data protection- KMS၊ Secrets Manager၊ Parameter Store၊ ACM"),
        blocks: [
          { type: 'p', text: L(
            "**AWS KMS** creates and controls encryption keys whose key material never leaves its FIPS-validated HSMs unencrypted. **AWS managed keys** (alias `aws/s3`, `aws/ebs`) are created for you, rotate automatically every year and have a key policy you cannot change. **Customer managed keys** are yours: you write the key policy, choose who can use or administer the key, enable or disable rotation, schedule deletion, and share it across accounts. AWS owned keys are used internally by services and are invisible to you. Every KMS call is logged in CloudTrail, which is why auditors like it.",
            "**AWS KMS** は暗号化キーを作成・管理し、キーマテリアルは FIPS 検証済みの HSM から暗号化されない状態で外に出ることはありません。**AWS マネージドキー**（エイリアス `aws/s3`、`aws/ebs`）は自動作成され、毎年自動でローテーションされ、キーポリシーは変更できません。**カスタマーマネージドキー**は自分のもので、キーポリシーを書き、使用者や管理者を決め、ローテーションの有効化・無効化、削除のスケジュール、アカウント間共有ができます。AWS 所有キーはサービス内部で使われ、利用者からは見えません。KMS の呼び出しはすべて CloudTrail に記録されるため、監査担当者に好まれます。",
            "**AWS KMS** က encryption key တွေကို ဖန်တီး/ထိန်းချုပ်ပေးပြီး key material က FIPS validated HSM ထဲကနေ encrypt မလုပ်ထားဘဲ ဘယ်တော့မှ အပြင်မထွက်ဘူး။ **AWS managed key** (alias `aws/s3`၊ `aws/ebs`) တွေကို AWS က ဖန်တီးပေးပြီး နှစ်စဉ် auto rotate လုပ်တယ်၊ key policy ကို ကိုယ်ပြင်လို့မရဘူး။ **Customer managed key** ကတော့ ကိုယ်ပိုင်- key policy ကိုယ်ရေး၊ ဘယ်သူသုံး/manage လုပ်ခွင့်ရှိလဲ ရွေး၊ rotation ဖွင့်/ပိတ်၊ deletion schedule လုပ်၊ account ကြား share လုပ်လို့ရတယ်။ AWS owned key တွေက service အတွင်းပိုင်းမှာ သုံးပြီး ကိုယ့်ဘက်က မမြင်ရဘူး။ KMS call တိုင်းက CloudTrail မှာ log ကျလို့ auditor တွေ ကြိုက်ကြတယ်။"
          ) },
          { type: 'diagram', text: `  Envelope encryption (what S3/EBS do for you)

   1. GenerateDataKey  --->  AWS KMS (KMS key never leaves)
                       <---  plaintext data key + encrypted data key
   2. Encrypt data locally with the plaintext data key
   3. Discard plaintext key; store encrypted data key WITH the data

      +-----------------------------+
      | ciphertext | encrypted DEK  |   stored object
      +-----------------------------+
   4. To read: Decrypt(encrypted DEK) via KMS -> decrypt data`, caption: L("Envelope encryption: KMS protects small data keys; data keys protect large data.", "エンベロープ暗号化：KMS は小さなデータキーを保護し、データキーが大きなデータを保護します。", "Envelope encryption- KMS က data key သေးသေးလေးကို ကာကွယ်ပြီး data key က data အကြီးကို ကာကွယ်တယ်။") },
          { type: 'p', text: L(
            "Why envelopes? KMS `Encrypt` accepts at most 4 KB, and sending gigabytes to an API would be slow. Instead, a fresh **data key** encrypts the data locally, and KMS only wraps that small key. It is like locking documents in a safe (data key) and keeping the safe's key in a bank vault (KMS).",
            "なぜエンベロープなのでしょうか。KMS の `Encrypt` は最大 4 KB までしか受け付けず、ギガバイト単位のデータを API に送るのは遅すぎます。そこで新しい**データキー**でデータをローカルに暗号化し、KMS はその小さなキーだけを包みます。書類を金庫（データキー）に入れ、金庫の鍵を銀行の貸金庫（KMS）に預けるようなものです。",
            "Envelope ဘာကြောင့်သုံးလဲ? KMS `Encrypt` က 4 KB အထိပဲ လက်ခံပြီး GB ချီတဲ့ data ကို API ဆီ ပို့ရင် နှေးလွန်းတယ်။ ဒါကြောင့် **data key** အသစ်နဲ့ data ကို local မှာ encrypt လုပ်ပြီး KMS က အဲဒီ key သေးသေးလေးကိုပဲ ထုပ်ပိုးပေးတယ်။ စာရွက်တွေကို မီးခံသေတ္တာ (data key) ထဲထည့်ပြီး သေတ္တာသော့ကို ဘဏ်လော်ကာ (KMS) မှာ အပ်ထားသလိုပါပဲ။"
          ) },
          { type: 'table',
            head: [L("Need", "要件", "လိုအပ်ချက်"), L("Secrets Manager", "Secrets Manager", "Secrets Manager"), L("SSM Parameter Store", "SSM Parameter Store", "SSM Parameter Store")],
            rows: [
              [L("Automatic rotation", "自動ローテーション", "Automatic rotation"), L("Built in (managed rotation for RDS, Redshift, DocumentDB; Lambda for others)", "組み込み（RDS、Redshift、DocumentDB はマネージド、その他は Lambda）", "Built-in ပါ (RDS၊ Redshift၊ DocumentDB အတွက် managed၊ ကျန်တာ Lambda)"), L("Not built in (you script it)", "組み込みなし（自分でスクリプト化）", "Built-in မပါ (ကိုယ်တိုင် script ရေး)")],
              [L("Cost", "コスト", "ကုန်ကျစရိတ်"), L("Paid per secret per month plus API calls", "シークレットごとの月額と API 呼び出し料金", "Secret တစ်ခုချင်း လစဉ်ကြေး + API call ကြေး"), L("Standard tier free; Advanced tier paid", "Standard 階層は無料、Advanced 階層は有料", "Standard tier အခမဲ့၊ Advanced tier ပိုက်ဆံပေး")],
              [L("Encryption", "暗号化", "Encryption"), L("Always encrypted with KMS", "常に KMS で暗号化", "အမြဲ KMS နဲ့ encrypt"), L("`SecureString` uses KMS; `String` is plain text", "`SecureString` は KMS を使用、`String` は平文", "`SecureString` က KMS သုံး၊ `String` က plain text")],
              [L("Extras", "その他", "အပိုအင်္ဂါရပ်"), L("Cross-Region replication, resource policies, 64 KB values", "クロスリージョンレプリケーション、リソースポリシー、64 KB の値", "Cross-Region replication၊ resource policy၊ 64 KB value"), L("Hierarchies `/app/prod/db-url`, config values, 4 KB (8 KB Advanced)", "階層構造 `/app/prod/db-url`、設定値、4 KB（Advanced は 8 KB）", "Hierarchy `/app/prod/db-url`၊ config value၊ 4 KB (Advanced 8 KB)")],
            ] },
          { type: 'p', text: L(
            "**AWS Certificate Manager (ACM)** issues free public TLS certificates for integrated services (ALB, CloudFront, API Gateway) and renews them automatically. A certificate for **CloudFront must be requested in `us-east-1`**; for an ALB it must be in the ALB's Region. Standard ACM public certificates cannot be downloaded and installed on your own EC2 web server; for that, use the ALB in front or a certificate you manage yourself.",
            "**AWS Certificate Manager（ACM）**は統合サービス（ALB、CloudFront、API Gateway）向けに無料のパブリック TLS 証明書を発行し、自動更新します。**CloudFront 用の証明書は `us-east-1` でリクエストする必要があり**、ALB 用は ALB と同じリージョンに必要です。通常の ACM パブリック証明書はダウンロードして自前の EC2 Web サーバーにインストールできないため、その場合は前段に ALB を置くか、自分で管理する証明書を使います。",
            "**AWS Certificate Manager (ACM)** က integrated service (ALB၊ CloudFront၊ API Gateway) တွေအတွက် public TLS certificate ကို အခမဲ့ ထုတ်ပေးပြီး auto renew လုပ်တယ်။ **CloudFront အတွက် certificate ကို `us-east-1` မှာ request လုပ်ရမယ်**၊ ALB အတွက်ဆို ALB ရှိတဲ့ Region မှာ ရှိရမယ်။ ပုံမှန် ACM public certificate ကို download ဆွဲပြီး ကိုယ့် EC2 web server ပေါ် install လုပ်လို့ မရဘူး- အဲဒီအတွက် ရှေ့မှာ ALB ထားပါ (သို့) ကိုယ်တိုင် manage လုပ်တဲ့ certificate သုံးပါ။"
          ) },
          { type: 'callout', tone: 'memory', text: L(
            "**Secrets Manager = Secrets that Spin** (rotate). **Parameter Store = Plain config, Parsimonious** (free standard tier). **ACM + CloudFront = Virginia** (`us-east-1`). **AWS managed key = AWS holds the policy pen; customer managed key = you hold the pen.**",
            "**Secrets Manager＝回る（ローテーションする）シークレット**。**Parameter Store＝設定値、節約型**（Standard 階層は無料）。**ACM＋CloudFront＝バージニア**（`us-east-1`）。**AWS マネージドキー＝ポリシーのペンは AWS、カスタマーマネージドキー＝ペンは自分。**",
            "**Secrets Manager = လည်နေတဲ့ (rotate လုပ်တဲ့) secret**။ **Parameter Store = config သိမ်း၊ ချွေတာ** (standard tier အခမဲ့)။ **ACM + CloudFront = Virginia** (`us-east-1`)။ **AWS managed key = policy ရေးတဲ့ ဘောပင်ကို AWS ကိုင်၊ customer managed key = ဘောပင်ကို ကိုယ်ကိုင်။**"
          ) },
        ],
      },
      {
        id: "security-services",
        title: L("Threat protection and compliance services", "脅威対策とコンプライアンスのサービス", "Threat protection နဲ့ compliance service များ"),
        blocks: [
          { type: 'p', text: L(
            "The exams list many similar-sounding security services. Separate them by the **question each one answers**: Am I being attacked? Is my software vulnerable? Where is my sensitive data? What happened, and why? Who are my app users? This mental map turns most CLF-C02 security questions into quick wins.",
            "試験には似た名前のセキュリティサービスが多く登場します。**それぞれが答える問い**で区別しましょう。攻撃を受けていないか？ソフトウェアに脆弱性はないか？機密データはどこにあるか？何が起き、なぜ起きたか？アプリのユーザーは誰か？この地図を頭に入れておくと、CLF-C02 のセキュリティ問題の多くはすぐに解けます。",
            "Exam တွေမှာ နာမည်ဆင်တူတဲ့ security service တွေ အများကြီး ပါတယ်။ **တစ်ခုချင်းက ဘယ်မေးခွန်းကို ဖြေလဲ** နဲ့ ခွဲပါ- ငါ တိုက်ခိုက်ခံနေရလား? Software မှာ vulnerability ရှိလား? Sensitive data ဘယ်မှာလဲ? ဘာဖြစ်ခဲ့လဲ၊ ဘာကြောင့်လဲ? App user တွေက ဘယ်သူလဲ? ဒီမြေပုံကို ခေါင်းထဲထားရင် CLF-C02 security မေးခွန်း အများစုကို မြန်မြန် ဖြေနိုင်မယ်။"
          ) },
          { type: 'table',
            head: [L("Service", "サービス", "Service"), L("Question it answers", "答える問い", "ဖြေတဲ့ မေးခွန်း"), L("Exam keywords", "試験のキーワード", "Exam keyword")],
            rows: [
              [L("Shield Standard / Advanced", "Shield Standard / Advanced", "Shield Standard / Advanced"), L("Am I protected from DDoS?", "DDoS から守られているか？", "DDoS ကနေ ကာကွယ်ထားလား?"), L("Standard: free, automatic L3/L4. Advanced: paid, 24/7 Shield Response Team, DDoS cost protection", "Standard：無料・自動の L3/L4。Advanced：有料、24 時間 365 日の Shield Response Team、DDoS コスト保護", "Standard- အခမဲ့၊ auto L3/L4။ Advanced- ပိုက်ဆံပေး၊ 24/7 Shield Response Team၊ DDoS cost protection")],
              [L("AWS WAF", "AWS WAF", "AWS WAF"), L("Is this HTTP request malicious?", "この HTTP リクエストは悪意あるものか？", "ဒီ HTTP request က ဆိုးကျိုးရှိလား?"), L("L7, SQL injection, XSS, rate-based rules, geo block; on CloudFront, ALB, API Gateway", "L7、SQL インジェクション、XSS、レートベースルール、地域ブロック。CloudFront、ALB、API Gateway に適用", "L7၊ SQL injection၊ XSS၊ rate-based rule၊ geo block၊ CloudFront/ALB/API Gateway မှာ တပ်")],
              [L("Amazon GuardDuty", "Amazon GuardDuty", "Amazon GuardDuty"), L("Is something suspicious happening?", "不審な動きが起きていないか？", "သံသယဖြစ်စရာ တစ်ခုခု ဖြစ်နေလား?"), L("ML threat detection on CloudTrail, VPC Flow Logs, DNS logs; crypto-mining, compromised credentials", "CloudTrail、VPC フローログ、DNS ログを ML で脅威検出。暗号通貨マイニング、侵害された認証情報", "CloudTrail၊ VPC Flow Logs၊ DNS log ပေါ် ML threat detection၊ crypto-mining၊ ပေါက်ကြားသွားတဲ့ credential")],
              [L("Amazon Inspector", "Amazon Inspector", "Amazon Inspector"), L("Is my software vulnerable?", "ソフトウェアに脆弱性はないか？", "Software မှာ vulnerability ရှိလား?"), L("CVE scanning of EC2, ECR container images, Lambda; network reachability", "EC2、ECR コンテナイメージ、Lambda の CVE スキャン、ネットワーク到達性", "EC2၊ ECR container image၊ Lambda ကို CVE scan၊ network reachability")],
              [L("Amazon Macie", "Amazon Macie", "Amazon Macie"), L("Where is my sensitive data?", "機密データはどこにあるか？", "Sensitive data ဘယ်မှာလဲ?"), L("ML discovery of PII in **S3**, public or unencrypted buckets", "**S3** 内の PII を ML で検出、公開や暗号化されていないバケット", "**S3** ထဲက PII ကို ML နဲ့ ရှာ၊ public/unencrypted bucket")],
              [L("AWS Security Hub", "AWS Security Hub", "AWS Security Hub"), L("What is my overall security posture?", "全体的なセキュリティ態勢は？", "Security posture တစ်ခုလုံး ဘယ်လိုလဲ?"), L("Aggregates findings; CIS and AWS Foundational Security Best Practices checks", "検出結果を集約、CIS や AWS 基礎セキュリティのベストプラクティスのチェック", "Finding တွေ စုစည်း၊ CIS နဲ့ AWS Foundational Security Best Practices စစ်ဆေးချက်")],
              [L("Amazon Detective", "Amazon Detective", "Amazon Detective"), L("Why did it happen? (root cause)", "なぜ起きたか？（根本原因）", "ဘာကြောင့် ဖြစ်တာလဲ? (root cause)"), L("Investigate a GuardDuty finding with behavior graphs", "動作グラフで GuardDuty の検出結果を調査", "GuardDuty finding ကို behavior graph နဲ့ စုံစမ်း")],
              [L("AWS Artifact", "AWS Artifact", "AWS Artifact"), L("Can I prove AWS is compliant?", "AWS のコンプライアンスを証明できるか？", "AWS compliant ဖြစ်ကြောင်း သက်သေပြနိုင်လား?"), L("Download SOC, PCI, ISO reports; accept agreements such as the BAA", "SOC、PCI、ISO レポートのダウンロード、BAA などの契約の受諾", "SOC၊ PCI၊ ISO report download၊ BAA လို agreement လက်ခံ")],
              [L("Amazon Cognito", "Amazon Cognito", "Amazon Cognito"), L("Who are my app's end users?", "アプリのエンドユーザーは誰か？", "App ရဲ့ end user တွေ ဘယ်သူလဲ?"), L("User pools: sign-up/sign-in, social login, MFA. Identity pools: temporary AWS credentials", "ユーザープール：サインアップ/サインイン、ソーシャルログイン、MFA。ID プール：一時的な AWS 認証情報", "User pool- sign-up/sign-in၊ social login၊ MFA။ Identity pool- ယာယီ AWS credential")],
            ] },
          { type: 'callout', tone: 'memory', text: L(
            "**GuardDuty guards** (watches logs for threats), **Inspector inspects** (software vulnerabilities), **Macie = S3 PII**, **Detective detects the why**, **Security Hub is the hub** that collects everyone's findings, **Artifact = audit paperwork**. Shield = DDoS (L3/L4), WAF = web requests (L7).",
            "**GuardDuty は見張り番**（ログから脅威を監視）、**Inspector は検査官**（ソフトウェアの脆弱性）、**Macie＝S3 の PII**、**Detective は「なぜ」を探る探偵**、**Security Hub は全員の検出結果を集めるハブ**、**Artifact＝監査書類**。Shield＝DDoS（L3/L4）、WAF＝Web リクエスト（L7）。",
            "**GuardDuty က အစောင့်** (log ကြည့်ပြီး threat ရှာ)၊ **Inspector က စစ်ဆေးရေးမှူး** (software vulnerability)၊ **Macie = S3 PII**၊ **Detective က \"ဘာကြောင့်\" ကို ရှာတဲ့ စုံထောက်**၊ **Security Hub က finding အားလုံး စုတဲ့ hub**၊ **Artifact = audit စာရွက်စာတမ်း**။ Shield = DDoS (L3/L4)၊ WAF = web request (L7)။"
          ) },
          { type: 'callout', tone: 'exam', text: L(
            "Trap: GuardDuty **detects** but does not block; to respond automatically, route findings through EventBridge to Lambda or Step Functions. WAF can block an IP or a rate of requests, but it cannot be attached to an NLB or directly to an EC2 instance. For SQL injection protection the answer is **WAF**, not Shield.",
            "ひっかけ：GuardDuty は**検出**するだけでブロックはしません。自動対応するには、検出結果を EventBridge 経由で Lambda や Step Functions に渡します。WAF は IP やリクエストレートでブロックできますが、NLB や EC2 インスタンスに直接アタッチすることはできません。SQL インジェクション対策の答えは Shield ではなく **WAF** です。",
            "ထောင်ချောက်- GuardDuty က **detect** ပဲ လုပ်ပြီး block မလုပ်ဘူး- auto response လုပ်ချင်ရင် finding ကို EventBridge ကနေ Lambda (သို့) Step Functions ဆီ ပို့ပါ။ WAF က IP တစ်ခု (သို့) request rate ကို block လုပ်နိုင်ပေမဲ့ NLB (သို့) EC2 instance ကို တိုက်ရိုက် တွဲလို့မရဘူး။ SQL injection ကာကွယ်ဖို့ အဖြေက Shield မဟုတ်ဘဲ **WAF** ပါ။"
          ) },
        ],
      },
      {
        id: "hands-on-lab",
        title: L("Hands-on lab: GitHub Actions OIDC deploy role", "ハンズオン：GitHub Actions OIDC デプロイ用ロール", "Hands-on lab- GitHub Actions OIDC deploy role"),
        blocks: [
          { type: 'p', text: L(
            "This lab rebuilds the pipeline from your EC2 project the right way: no keys in GitHub, a role that only the `main` branch can assume, and only the permissions SSM needs. Use a sandbox account and replace the account ID, org and repo names.",
            "このラボでは、EC2 プロジェクトのパイプラインを正しい方法で作り直します。GitHub にキーを置かず、`main` ブランチだけが引き受けられ、SSM に必要な権限だけを持つロールです。サンドボックスアカウントを使い、アカウント ID、組織名、リポジトリ名を置き換えてください。",
            "ဒီ lab မှာ ကိုယ့် EC2 project ရဲ့ pipeline ကို မှန်ကန်တဲ့နည်းနဲ့ ပြန်ဆောက်မယ်- GitHub ထဲ key မထား၊ `main` branch ကပဲ assume လုပ်နိုင်တဲ့ role၊ SSM အတွက် လိုတဲ့ permission ပဲ ပေးမယ်။ Sandbox account သုံးပြီး account ID၊ org နဲ့ repo နာမည်တွေကို အစားထိုးပါ။"
          ) },
          { type: 'steps', items: [
            L("In IAM, add an OpenID Connect identity provider with URL `https://token.actions.githubusercontent.com` and audience `sts.amazonaws.com` (or run the CLI below).",
              "IAM で、URL `https://token.actions.githubusercontent.com`、対象者 `sts.amazonaws.com` の OpenID Connect ID プロバイダーを追加します（または下の CLI を実行）。",
              "IAM မှာ URL `https://token.actions.githubusercontent.com`၊ audience `sts.amazonaws.com` နဲ့ OpenID Connect identity provider တစ်ခု ထည့်ပါ (သို့ အောက်က CLI ကို run ပါ)။"),
            L("Save the trust policy from the OIDC section as `trust.json`, with your account ID and the exact `sub` your workflow prints, then create the role `gha-deploy`.",
              "OIDC セクションの信頼ポリシーを、自分のアカウント ID とワークフローが出力した正確な `sub` で `trust.json` として保存し、ロール `gha-deploy` を作成します。",
              "OIDC section က trust policy ကို ကိုယ့် account ID နဲ့ workflow က print ထုတ်ပေးတဲ့ `sub` အတိအကျနဲ့ `trust.json` အဖြစ် သိမ်းပြီး `gha-deploy` role ကို ဖန်တီးပါ။"),
            L("Attach a customer managed policy that allows only `ssm:SendCommand` on your instance (by tag) and the `AWS-RunShellScript` document, plus `ssm:GetCommandInvocation`.",
              "インスタンス（タグで指定）と `AWS-RunShellScript` ドキュメントへの `ssm:SendCommand`、および `ssm:GetCommandInvocation` だけを許可するカスタマー管理ポリシーをアタッチします。",
              "ကိုယ့် instance (tag နဲ့) နဲ့ `AWS-RunShellScript` document အပေါ် `ssm:SendCommand` နဲ့ `ssm:GetCommandInvocation` ကိုပဲ ခွင့်ပြုတဲ့ customer managed policy ကို တွဲပါ။"),
            L("In the workflow, set `permissions: id-token: write` and `contents: read`, and use `aws-actions/configure-aws-credentials` with `role-to-assume` set to the role ARN.",
              "ワークフローで `permissions: id-token: write` と `contents: read` を設定し、`role-to-assume` にロール ARN を指定して `aws-actions/configure-aws-credentials` を使います。",
              "Workflow မှာ `permissions: id-token: write` နဲ့ `contents: read` ထည့်ပြီး `role-to-assume` ကို role ARN ထားကာ `aws-actions/configure-aws-credentials` ကို သုံးပါ။"),
            L("Run the workflow and add a step `aws sts get-caller-identity`; the ARN should be `assumed-role/gha-deploy/...`.",
              "ワークフローを実行し、`aws sts get-caller-identity` のステップを追加します。ARN は `assumed-role/gha-deploy/...` になるはずです。",
              "Workflow ကို run ပြီး `aws sts get-caller-identity` step ထည့်ပါ- ARN က `assumed-role/gha-deploy/...` ဖြစ်ရမယ်။"),
            L("Negative test: run the same workflow from a feature branch. It must fail with `Not authorized to perform sts:AssumeRoleWithWebIdentity`, proving the `sub` condition works. Check the failed call in CloudTrail.",
              "否定テスト：同じワークフローをフィーチャーブランチから実行します。`Not authorized to perform sts:AssumeRoleWithWebIdentity` で失敗すれば、`sub` 条件が機能している証拠です。失敗した呼び出しを CloudTrail で確認します。",
              "Negative test- feature branch ကနေ workflow တူတူကို run ပါ။ `Not authorized to perform sts:AssumeRoleWithWebIdentity` နဲ့ fail ဖြစ်ရမယ်- ဒါက `sub` condition အလုပ်လုပ်ကြောင်း သက်သေပဲ။ Fail ဖြစ်တဲ့ call ကို CloudTrail မှာ စစ်ကြည့်ပါ။"),
            L("Delete any old `AWS_ACCESS_KEY_ID` secrets and deactivate the IAM user keys they belonged to, then run IAM Access Analyzer to confirm nothing unused remains.",
              "古い `AWS_ACCESS_KEY_ID` シークレットを削除し、それに対応する IAM ユーザーのキーを無効化してから、IAM Access Analyzer で未使用のものが残っていないか確認します。",
              "အဟောင်း `AWS_ACCESS_KEY_ID` secret တွေကို ဖျက်ပြီး ဆိုင်ရာ IAM user key တွေကို deactivate လုပ်ပါ၊ ပြီးရင် IAM Access Analyzer နဲ့ မသုံးတာ ဘာမှ မကျန်တော့ကြောင်း စစ်ပါ။"),
          ] },
          { type: 'code', lang: 'bash', code: `aws iam create-open-id-connect-provider \\
  --url https://token.actions.githubusercontent.com \\
  --client-id-list sts.amazonaws.com

aws iam create-role --role-name gha-deploy \\
  --assume-role-policy-document file://trust.json \\
  --max-session-duration 3600

aws iam create-policy --policy-name gha-ssm-deploy \\
  --policy-document file://ssm-deploy.json
aws iam attach-role-policy --role-name gha-deploy \\
  --policy-arn arn:aws:iam::111122223333:policy/gha-ssm-deploy

# Verify: is the role allowed to send the command?
aws iam simulate-principal-policy \\
  --policy-source-arn arn:aws:iam::111122223333:role/gha-deploy \\
  --action-names ssm:SendCommand ec2:TerminateInstances`, caption: L("Create the provider, the role and a least-privilege policy, then simulate.", "プロバイダー、ロール、最小権限ポリシーを作成し、シミュレーションします。", "Provider၊ role နဲ့ least-privilege policy ကို ဖန်တီးပြီး simulate လုပ်ပါ။") },
          { type: 'callout', tone: 'tip', text: L(
            "The simulator should return `allowed` for `ssm:SendCommand` and `implicitDeny` for `ec2:TerminateInstances`. That second line is the real proof of least privilege: always test what the role must NOT be able to do.",
            "シミュレーターは `ssm:SendCommand` に `allowed`、`ec2:TerminateInstances` に `implicitDeny` を返すはずです。2 行目こそ最小権限の本当の証明です。ロールが「できてはいけないこと」も必ずテストしましょう。",
            "Simulator က `ssm:SendCommand` အတွက် `allowed`၊ `ec2:TerminateInstances` အတွက် `implicitDeny` ပြန်ပေးရမယ်။ ဒုတိယလိုင်းက least privilege ရဲ့ တကယ့်သက်သေပါ- role က \"မလုပ်နိုင်ရမယ့်အရာ\" ကိုလည်း အမြဲ စမ်းပါ။"
          ) },
        ],
      },
    ],
    summary: [
      L("Lock the root user with MFA and no access keys; humans use IAM Identity Center, workloads use roles.",
        "ルートユーザーは MFA で保護しアクセスキーを持たせない。人間は IAM Identity Center、ワークロードはロールを使います。",
        "Root user ကို MFA နဲ့ ကာကွယ်ပြီး access key မထားပါနဲ့- လူတွေက IAM Identity Center၊ workload တွေက role သုံးပါ။"),
      L("Policies are JSON with Effect, Action, Resource and Condition; identity-based policies attach to principals, resource-based policies name a Principal.",
        "ポリシーは Effect、Action、Resource、Condition を持つ JSON で、ID ベースはプリンシパルにアタッチし、リソースベースは Principal を指定します。",
        "Policy က Effect၊ Action၊ Resource၊ Condition ပါတဲ့ JSON ပါ- identity-based က principal မှာ တွဲပြီး resource-based က Principal ကို ညွှန်းတယ်။"),
      L("Evaluation: default deny, explicit Deny always wins, and SCPs, boundaries and session policies only cap permissions.",
        "評価：デフォルト拒否、明示的な Deny が常に優先、SCP・境界・セッションポリシーは権限の上限を決めるだけです。",
        "Evaluation- default deny၊ explicit Deny က အမြဲနိုင်၊ SCP၊ boundary၊ session policy တွေက permission ကို ကန့်သတ်ရုံပဲ။"),
      L("STS issues temporary credentials: instance profiles for EC2, `AssumeRole` for cross-account, `AssumeRoleWithWebIdentity` for OIDC.",
        "STS は一時的な認証情報を発行します。EC2 はインスタンスプロファイル、クロスアカウントは `AssumeRole`、OIDC は `AssumeRoleWithWebIdentity` です。",
        "STS က temporary credential ထုတ်ပေးတယ်- EC2 အတွက် instance profile၊ cross-account အတွက် `AssumeRole`၊ OIDC အတွက် `AssumeRoleWithWebIdentity`။"),
      L("For GitHub OIDC, the trust policy must match `aud` = `sts.amazonaws.com` and the exact `sub` the token sends, including immutable-ID or environment formats.",
        "GitHub OIDC では、信頼ポリシーが `aud`＝`sts.amazonaws.com` と、イミュータブル ID や environment 形式を含むトークンが送る正確な `sub` に一致する必要があります。",
        "GitHub OIDC မှာ trust policy က `aud` = `sts.amazonaws.com` နဲ့ token ပို့တဲ့ `sub` (immutable ID၊ environment format အပါအဝင်) ကို အတိအကျ ကိုက်ရမယ်။"),
      L("Organizations + SCPs set guardrails for member accounts; IAM Access Analyzer finds external and unused access.",
        "Organizations と SCP はメンバーアカウントのガードレールを設定し、IAM Access Analyzer は外部アクセスや未使用のアクセスを検出します。",
        "Organizations + SCP က member account တွေအတွက် guardrail သတ်မှတ်ပြီး IAM Access Analyzer က external နဲ့ မသုံးတဲ့ access ကို ရှာတယ်။"),
      L("KMS uses envelope encryption; Secrets Manager rotates secrets, Parameter Store holds config cheaply, ACM gives free auto-renewing certificates.",
        "KMS はエンベロープ暗号化を使い、Secrets Manager はシークレットをローテーションし、Parameter Store は設定を安価に保持し、ACM は自動更新される無料の証明書を提供します。",
        "KMS က envelope encryption သုံးတယ်- Secrets Manager က secret ကို rotate လုပ်၊ Parameter Store က config ကို သက်သက်သာသာ သိမ်း၊ ACM က auto renew ဖြစ်တဲ့ certificate ကို အခမဲ့ ပေးတယ်။"),
      L("Shield = DDoS, WAF = L7 web attacks, GuardDuty = threats, Inspector = vulnerabilities, Macie = S3 PII, Security Hub = posture, Detective = root cause, Artifact = compliance reports, Cognito = app users.",
        "Shield＝DDoS、WAF＝L7 の Web 攻撃、GuardDuty＝脅威、Inspector＝脆弱性、Macie＝S3 の PII、Security Hub＝セキュリティ態勢、Detective＝根本原因、Artifact＝コンプライアンスレポート、Cognito＝アプリのユーザーです。",
        "Shield = DDoS၊ WAF = L7 web attack၊ GuardDuty = threat၊ Inspector = vulnerability၊ Macie = S3 PII၊ Security Hub = posture၊ Detective = root cause၊ Artifact = compliance report၊ Cognito = app user။"),
    ],
  },
  questions: [
    {
      difficulty: 'EASY', exams: ['CLF-C02', 'SAA-C03'],
      prompt: L("A startup has just created its AWS account. Which actions follow AWS best practices for the root user? (Select TWO)",
        "あるスタートアップが AWS アカウントを作成したばかりです。ルートユーザーに関する AWS のベストプラクティスに沿った行動はどれですか？（2 つ選択）",
        "Startup တစ်ခုက AWS account အခုမှ ဖွင့်ထားတယ်။ Root user အတွက် AWS best practice နဲ့ ကိုက်ညီတဲ့ လုပ်ဆောင်ချက်တွေက ဘာတွေလဲ? (၂ ခု ရွေးပါ)"),
      options: ['Enable MFA on the root user', 'Use the root user for daily administration tasks', 'Share the root password with the operations team in a chat channel', 'Do not create root user access keys, and delete any that exist'],
      correct: [0, 3],
      explanation: L("Protect root with MFA and never keep root access keys, because root cannot be restricted by IAM policies. Daily work should use Identity Center users or roles; using or sharing root for routine tasks removes accountability and multiplies the risk.",
        "ルートは IAM ポリシーで制限できないため、MFA で保護し、ルートのアクセスキーは保持しません。日常業務は Identity Center のユーザーやロールで行うべきで、ルートを日常的に使ったり共有したりすると説明責任が失われ、リスクが大きくなります。",
        "Root ကို IAM policy နဲ့ ကန့်သတ်လို့ မရလို့ MFA နဲ့ ကာကွယ်ပြီး root access key ဘယ်တော့မှ မထားရဘူး။ နေ့စဉ်အလုပ်ကို Identity Center user (သို့) role နဲ့ လုပ်သင့်တယ်- root ကို ပုံမှန်သုံးတာ၊ share တာက ဘယ်သူလုပ်လဲ မသိရတော့ဘဲ risk ပိုများစေတယ်။"),
    },
    {
      difficulty: 'EASY', exams: ['CLF-C02', 'SAA-C03'],
      prompt: L("An application running on an EC2 instance needs to upload files to an S3 bucket. What is the MOST secure way to give it permissions?",
        "EC2 インスタンス上で動くアプリケーションが S3 バケットにファイルをアップロードする必要があります。権限を与える最も安全な方法はどれですか？",
        "EC2 instance ပေါ်မှာ run နေတဲ့ application က S3 bucket ထဲ file upload လုပ်ရမယ်။ Permission ပေးဖို့ အလုံခြုံဆုံးနည်းက ဘာလဲ?"),
      options: ['Store an IAM user access key in the application configuration file', 'Attach an IAM role to the instance through an instance profile', 'Add the instance to an IAM group with S3 permissions', 'Export the root user access keys as environment variables'],
      correct: [1],
      explanation: L("An instance profile delivers a role's temporary, automatically rotated credentials to the instance through the metadata service. Access keys in a config file are long-lived secrets that can leak, and IAM groups can contain only users, not instances.",
        "インスタンスプロファイルは、メタデータサービスを通じてロールの一時的で自動更新される認証情報をインスタンスに渡します。設定ファイル内のアクセスキーは漏洩しうる長期シークレットであり、IAM グループにはユーザーしか入れられずインスタンスは追加できません。",
        "Instance profile က metadata service ကနေ role ရဲ့ ယာယီ၊ auto rotate ဖြစ်တဲ့ credential ကို instance ဆီ ပေးတယ်။ Config file ထဲက access key က ပေါက်ကြားနိုင်တဲ့ ရေရှည် secret ဖြစ်ပြီး IAM group ထဲမှာ user ပဲ ထည့်လို့ရလို့ instance မထည့်နိုင်ဘူး။"),
    },
    {
      difficulty: 'EASY', exams: ['CLF-C02'],
      prompt: L("Which statement about IAM groups is correct?",
        "IAM グループについて正しい記述はどれですか？",
        "IAM group နဲ့ ပတ်သက်ပြီး မှန်ကန်တဲ့ ဖော်ပြချက်က ဘယ်ဟာလဲ?"),
      options: ['A group can contain other groups', 'A group can be specified as the Principal in an S3 bucket policy', 'A user can be a member of multiple groups', 'A group has its own access keys for API calls'],
      correct: [2],
      explanation: L("A user can belong to several groups and receives the union of their permissions. Groups cannot be nested, are not principals (so they cannot appear in a resource policy's Principal), and have no credentials of their own.",
        "ユーザーは複数のグループに所属でき、それらの権限の和集合を受け取ります。グループは入れ子にできず、プリンシパルでもないため（リソースポリシーの Principal に指定できない）、独自の認証情報も持ちません。",
        "User တစ်ယောက်က group အများကြီးမှာ ပါလို့ရပြီး group တွေရဲ့ permission အားလုံးကို ပေါင်းရတယ်။ Group ထဲ group ထည့်လို့မရ၊ principal မဟုတ်လို့ resource policy ရဲ့ Principal မှာ မထည့်နိုင်သလို ကိုယ်ပိုင် credential လည်း မရှိဘူး။"),
    },
    {
      difficulty: 'EASY', exams: ['CLF-C02'],
      prompt: L("Which AWS service provides protection against common network and transport layer (L3/L4) DDoS attacks automatically and at no additional cost?",
        "一般的なネットワーク層・トランスポート層（L3/L4）の DDoS 攻撃に対する保護を、追加料金なしで自動的に提供する AWS サービスはどれですか？",
        "အများဆုံးတွေ့ရတဲ့ network/transport layer (L3/L4) DDoS attack တွေကို အပိုကြေးမပေးဘဲ အလိုအလျောက် ကာကွယ်ပေးတဲ့ AWS service က ဘာလဲ?"),
      options: ['AWS WAF', 'AWS Shield Advanced', 'Amazon GuardDuty', 'AWS Shield Standard'],
      correct: [3],
      explanation: L("Shield Standard is enabled for every customer automatically at no extra charge and covers common L3/L4 attacks. Shield Advanced adds paid features such as the Shield Response Team and DDoS cost protection; WAF filters L7 web requests and is billed separately.",
        "Shield Standard はすべての利用者に追加料金なしで自動的に有効化され、一般的な L3/L4 攻撃に対応します。Shield Advanced は Shield Response Team や DDoS コスト保護などの有料機能を追加し、WAF は L7 の Web リクエストをフィルタリングする別料金のサービスです。",
        "Shield Standard က customer တိုင်းအတွက် အပိုကြေးမပေးဘဲ auto ဖွင့်ထားပြီး အများဆုံးတွေ့ရတဲ့ L3/L4 attack တွေကို ကာကွယ်တယ်။ Shield Advanced က Shield Response Team၊ DDoS cost protection လို ပိုက်ဆံပေးရတဲ့ feature တွေ ထပ်ထည့်တယ်- WAF ကတော့ L7 web request ကို filter လုပ်ပြီး သီးခြား ကြေးပေးရတယ်။"),
    },
    {
      difficulty: 'EASY', exams: ['CLF-C02'],
      prompt: L("An auditor asks a company for the AWS SOC 2 and PCI DSS compliance reports. Where can the company download them?",
        "監査人が企業に AWS の SOC 2 と PCI DSS のコンプライアンスレポートを求めています。企業はどこでそれらをダウンロードできますか？",
        "Auditor တစ်ယောက်က ကုမ္ပဏီကို AWS ရဲ့ SOC 2 နဲ့ PCI DSS compliance report တွေ တောင်းတယ်။ ကုမ္ပဏီက အဲဒါတွေကို ဘယ်မှာ download ဆွဲလို့ရလဲ?"),
      options: ['AWS Artifact', 'AWS Security Hub', 'AWS Trusted Advisor', 'AWS Config'],
      correct: [0],
      explanation: L("AWS Artifact is the self-service portal for AWS compliance reports and agreements. Security Hub checks your own resources against standards such as CIS, but it does not provide AWS's third-party audit reports.",
        "AWS Artifact は AWS のコンプライアンスレポートや契約をセルフサービスで入手できるポータルです。Security Hub は CIS などの基準で自分のリソースをチェックしますが、AWS の第三者監査レポートは提供しません。",
        "AWS Artifact က AWS compliance report နဲ့ agreement တွေကို ကိုယ်တိုင် ယူလို့ရတဲ့ portal ပါ။ Security Hub က ကိုယ့် resource တွေကို CIS လို standard နဲ့ စစ်ပေးပေမဲ့ AWS ရဲ့ third-party audit report ကို မပေးဘူး။"),
    },
    {
      difficulty: 'EASY', exams: ['CLF-C02', 'SAA-C03'],
      prompt: L("A company must find S3 buckets that contain personally identifiable information (PII) such as names and credit card numbers. Which service should it use?",
        "ある企業は、氏名やクレジットカード番号などの個人を特定できる情報（PII）を含む S3 バケットを見つける必要があります。どのサービスを使うべきですか？",
        "ကုမ္ပဏီတစ်ခုက နာမည်၊ credit card နံပါတ် စတဲ့ personally identifiable information (PII) ပါတဲ့ S3 bucket တွေကို ရှာရမယ်။ ဘယ် service ကို သုံးသင့်လဲ?"),
      options: ['Amazon Inspector', 'Amazon GuardDuty', 'Amazon Detective', 'Amazon Macie'],
      correct: [3],
      explanation: L("Macie uses machine learning and pattern matching to discover sensitive data in S3. Inspector scans workloads for software vulnerabilities, and GuardDuty detects threats from log activity; neither classifies the contents of your objects.",
        "Macie は機械学習とパターンマッチングで S3 内の機密データを検出します。Inspector はワークロードのソフトウェア脆弱性をスキャンし、GuardDuty はログのアクティビティから脅威を検出しますが、どちらもオブジェクトの内容を分類しません。",
        "Macie က machine learning နဲ့ pattern matching သုံးပြီး S3 ထဲက sensitive data ကို ရှာတယ်။ Inspector က workload တွေရဲ့ software vulnerability ကို scan လုပ်ပြီး GuardDuty က log activity ကနေ threat ကို ရှာတယ်- နှစ်ခုလုံး object ထဲက content ကို အမျိုးအစား မခွဲဘူး။"),
    },
    {
      difficulty: 'EASY', exams: ['CLF-C02', 'SAA-C03'],
      prompt: L("A mobile app needs sign-up and sign-in for millions of customers, including login with Google and Apple accounts. Which service fits best?",
        "モバイルアプリで、Google や Apple アカウントでのログインを含め、数百万人の顧客のサインアップとサインインが必要です。最適なサービスはどれですか？",
        "Mobile app တစ်ခုမှာ Google နဲ့ Apple account login အပါအဝင် customer သန်းချီအတွက် sign-up နဲ့ sign-in လိုတယ်။ ဘယ် service က အသင့်တော်ဆုံးလဲ?"),
      options: ['AWS IAM Identity Center', 'Amazon Cognito', 'One IAM user per customer', 'AWS Directory Service'],
      correct: [1],
      explanation: L("Cognito user pools provide a managed user directory for application end users with social and SAML/OIDC federation, MFA and hosted sign-in. IAM Identity Center is for your workforce accessing AWS accounts and business apps, not for millions of app customers.",
        "Cognito ユーザープールは、ソーシャルや SAML/OIDC フェデレーション、MFA、ホストされたサインイン画面を備えた、アプリのエンドユーザー向けのマネージドなユーザーディレクトリです。IAM Identity Center は従業員が AWS アカウントや業務アプリにアクセスするためのもので、数百万人のアプリ顧客向けではありません。",
        "Cognito user pool က app end user တွေအတွက် social နဲ့ SAML/OIDC federation၊ MFA၊ hosted sign-in ပါတဲ့ managed user directory ပါ။ IAM Identity Center ကတော့ ဝန်ထမ်းတွေ AWS account နဲ့ business app ဝင်ဖို့ဖြစ်ပြီး app customer သန်းချီအတွက် မဟုတ်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM', exams: ['CLF-C02', 'SAA-C03'],
      prompt: L("A user belongs to a group whose policy allows `s3:*` on a bucket. An inline policy on the same user denies `s3:DeleteObject` on that bucket. What happens when the user tries to delete an object?",
        "あるユーザーが、バケットに対する `s3:*` を許可するポリシーを持つグループに所属しています。同じユーザーのインラインポリシーは、そのバケットに対する `s3:DeleteObject` を拒否しています。ユーザーがオブジェクトを削除しようとするとどうなりますか？",
        "User တစ်ယောက်က bucket အပေါ် `s3:*` ကို allow လုပ်တဲ့ policy ပါတဲ့ group ထဲ ပါတယ်။ အဲဒီ user ရဲ့ inline policy က အဲဒီ bucket အပေါ် `s3:DeleteObject` ကို deny လုပ်ထားတယ်။ User က object ဖျက်ကြည့်ရင် ဘာဖြစ်မလဲ?"),
      options: ['The delete succeeds because the group policy allows s3:*', 'The delete is denied because an explicit Deny overrides any Allow', 'The policy attached most recently takes effect', 'The delete succeeds only when performed from the console'],
      correct: [1],
      explanation: L("In IAM policy evaluation, an explicit Deny in any applicable policy always overrides Allows, regardless of where they come from. Policy attachment order is irrelevant, and the console uses the same APIs as the CLI, so it gets the same answer.",
        "IAM のポリシー評価では、適用されるいずれかのポリシーにある明示的な Deny が、どこから来た Allow よりも常に優先されます。ポリシーをアタッチした順序は関係なく、コンソールも CLI と同じ API を使うため結果は同じです。",
        "IAM policy evaluation မှာ သက်ဆိုင်တဲ့ policy တစ်ခုခုထဲက explicit Deny က ဘယ်ကလာတဲ့ Allow ကိုမဆို အမြဲ ကျော်တယ်။ Policy တွဲတဲ့ အစီအစဉ်က အရေးမကြီးဘူး၊ console ကလည်း CLI နဲ့ API တူတူ သုံးလို့ ရလဒ်တူတူပဲ။"),
    },
    {
      difficulty: 'MEDIUM', exams: ['SAA-C03'],
      prompt: L("A Lambda function connects to an Amazon RDS for MySQL database. Security requires the database password to be rotated automatically every 30 days with the LEAST operational overhead. What should a solutions architect recommend?",
        "Lambda 関数が Amazon RDS for MySQL データベースに接続します。セキュリティ要件として、データベースのパスワードを 30 日ごとに最小の運用負荷で自動ローテーションする必要があります。ソリューションアーキテクトは何を推奨すべきですか？",
        "Lambda function တစ်ခုက Amazon RDS for MySQL database ကို ချိတ်တယ်။ Security requirement အရ database password ကို ရက် ၃၀ တိုင်း operational overhead အနည်းဆုံးနဲ့ auto rotate လုပ်ရမယ်။ Solutions architect က ဘာကို အကြံပြုသင့်လဲ?"),
      options: ['Store it as an SSM Parameter Store SecureString and rotate it with a cron job on an EC2 instance', 'Encrypt it with a KMS key and store the ciphertext in S3', 'Store it in AWS Secrets Manager with managed rotation enabled', 'Put it in the Lambda environment variables and update them monthly'],
      correct: [2],
      explanation: L("Secrets Manager has built-in managed rotation for RDS credentials and updates the database and the secret together. Parameter Store SecureString is encrypted but has no native rotation, so you would have to build and run your own rotation job.",
        "Secrets Manager には RDS の認証情報のためのマネージドローテーションが組み込まれており、データベースとシークレットを同時に更新します。Parameter Store の SecureString は暗号化されますがネイティブのローテーションがないため、ローテーションの仕組みを自分で構築・運用する必要があります。",
        "Secrets Manager မှာ RDS credential အတွက် managed rotation built-in ပါပြီး database နဲ့ secret ကို တစ်ပြိုင်နက် update လုပ်ပေးတယ်။ Parameter Store SecureString က encrypt ဖြစ်ပေမဲ့ native rotation မပါလို့ rotation job ကို ကိုယ်တိုင် ဆောက်ပြီး run ရမယ်။"),
    },
    {
      difficulty: 'MEDIUM', exams: ['SAA-C03'],
      prompt: L("A company uses AWS Organizations with 40 member accounts. It must ensure that no one in any member account, including administrators, can stop or delete AWS CloudTrail trails. What is the MOST effective solution?",
        "ある企業は 40 のメンバーアカウントで AWS Organizations を使用しています。管理者を含め、どのメンバーアカウントの誰も AWS CloudTrail の証跡を停止・削除できないようにする必要があります。最も効果的な解決策はどれですか？",
        "ကုမ္ပဏီတစ်ခုက member account ၄၀ နဲ့ AWS Organizations သုံးတယ်။ Administrator အပါအဝင် ဘယ် member account ထဲက ဘယ်သူမှ AWS CloudTrail trail ကို stop/delete မလုပ်နိုင်အောင် လုပ်ရမယ်။ အထိရောက်ဆုံး ဖြေရှင်းနည်းက ဘာလဲ?"),
      options: ['Attach an IAM policy that denies the actions in every account', 'Add a permission boundary to every IAM role', 'Create an AWS Config rule with auto-remediation that re-enables trails', 'Attach an SCP that denies cloudtrail:StopLogging and cloudtrail:DeleteTrail to the organization root'],
      correct: [3],
      explanation: L("An SCP applies to every IAM principal in member accounts, including their root users and administrators, and local admins cannot remove it. Per-account IAM policies or boundaries can be detached by those same administrators, and Config only reacts after the trail has already been stopped.",
        "SCP はメンバーアカウントのすべての IAM プリンシパル（ルートユーザーや管理者を含む）に適用され、アカウント内の管理者は削除できません。アカウントごとの IAM ポリシーや境界は同じ管理者が外せてしまい、Config は証跡が停止された後に反応するだけです。",
        "SCP က member account ထဲက IAM principal အားလုံး (root user နဲ့ administrator အပါအဝင်) ကို သက်ရောက်ပြီး account ထဲက admin တွေ ဖယ်လို့ မရဘူး။ Account တစ်ခုချင်းရဲ့ IAM policy (သို့) boundary ကို အဲဒီ admin တွေကိုယ်တိုင် ဖြုတ်လို့ရပြီး Config ကတော့ trail ရပ်သွားပြီးမှ တုံ့ပြန်တာပါ။"),
    },
    {
      difficulty: 'MEDIUM', exams: ['SAA-C03'],
      prompt: L("A company serves a website through Amazon CloudFront with a custom domain and wants a free, automatically renewed TLS certificate from AWS Certificate Manager. Which statements are correct? (Select TWO)",
        "ある企業はカスタムドメインで Amazon CloudFront を通じて Web サイトを配信しており、AWS Certificate Manager から無料で自動更新される TLS 証明書を使いたいと考えています。正しい記述はどれですか？（2 つ選択）",
        "ကုမ္ပဏီတစ်ခုက custom domain နဲ့ Amazon CloudFront ကနေ website ကို serve လုပ်ပြီး AWS Certificate Manager ရဲ့ အခမဲ့၊ auto renew ဖြစ်တဲ့ TLS certificate သုံးချင်တယ်။ မှန်ကန်တဲ့ ဖော်ပြချက်တွေက ဘာတွေလဲ? (၂ ခု ရွေးပါ)"),
      options: ['ACM certificates must be renewed manually every 90 days', 'Public ACM certificates used with integrated services such as CloudFront and ALB have no extra charge', 'The certificate used by CloudFront must be requested in the us-east-1 Region', 'Standard public ACM certificates can be downloaded and installed directly on Apache on EC2'],
      correct: [1, 2],
      explanation: L("Public certificates used with ACM-integrated services are free and renewed automatically, and CloudFront only reads certificates from us-east-1. Manual 90-day renewal describes some other certificate authorities, and standard ACM public certificates cannot be exported to your own servers.",
        "ACM 統合サービスで使うパブリック証明書は無料で自動更新され、CloudFront は us-east-1 の証明書のみを読み取ります。90 日ごとの手動更新は他の認証局の話であり、通常の ACM パブリック証明書は自前のサーバーにエクスポートできません。",
        "ACM နဲ့ integrate ဖြစ်တဲ့ service တွေမှာ သုံးတဲ့ public certificate က အခမဲ့ဖြစ်ပြီး auto renew ဖြစ်တယ်၊ CloudFront က us-east-1 က certificate ကိုပဲ ဖတ်တယ်။ ရက် ၉၀ တိုင်း manual renew က တခြား CA တွေအကြောင်းဖြစ်ပြီး ပုံမှန် ACM public certificate ကို ကိုယ့် server ဆီ export လုပ်လို့ မရဘူး။"),
    },
    {
      difficulty: 'MEDIUM', exams: ['CLF-C02', 'SAA-C03'],
      prompt: L("A company with 30 AWS accounts already manages employees in Microsoft Entra ID. It wants employees to sign in once and access the accounts they are assigned to with short-term credentials. Which solution meets these requirements?",
        "30 の AWS アカウントを持つ企業は、すでに Microsoft Entra ID で従業員を管理しています。従業員が一度のサインインで、割り当てられたアカウントに短期認証情報でアクセスできるようにしたいと考えています。要件を満たす解決策はどれですか？",
        "AWS account ၃၀ ရှိတဲ့ ကုမ္ပဏီတစ်ခုက ဝန်ထမ်းတွေကို Microsoft Entra ID မှာ manage လုပ်ပြီးသား။ ဝန်ထမ်းတွေ တစ်ခါပဲ sign in ဝင်ပြီး assign ထားတဲ့ account တွေကို ခဏသုံး credential နဲ့ ဝင်စေချင်တယ်။ ဘယ်ဖြေရှင်းနည်းက requirement နဲ့ ကိုက်လဲ?"),
      options: ['AWS IAM Identity Center connected to Entra ID, using permission sets assigned to groups', 'An Amazon Cognito user pool federated with Entra ID', 'One IAM user per employee in each of the 30 accounts', 'A shared IAM user per team protected with MFA'],
      correct: [0],
      explanation: L("IAM Identity Center federates with an external IdP such as Entra ID, provisions permission sets as roles in each account and issues short-term credentials. Cognito targets customer-facing applications, and IAM users mean 30 sets of long-term credentials per person to manage.",
        "IAM Identity Center は Entra ID などの外部 IdP とフェデレーションし、アクセス許可セットを各アカウントのロールとしてプロビジョニングし、短期認証情報を発行します。Cognito は顧客向けアプリケーション用であり、IAM ユーザーでは 1 人あたり 30 組の長期認証情報を管理することになります。",
        "IAM Identity Center က Entra ID လို external IdP နဲ့ federate လုပ်ပြီး permission set တွေကို account တစ်ခုချင်းမှာ role အဖြစ် ဖန်တီးကာ ခဏသုံး credential ထုတ်ပေးတယ်။ Cognito က customer သုံးတဲ့ app တွေအတွက်ဖြစ်ပြီး IAM user သုံးရင် လူတစ်ယောက်ကို ရေရှည် credential ၃၀ စုံ manage လုပ်ရမယ်။"),
    },
    {
      difficulty: 'MEDIUM', exams: ['SAA-C03'],
      prompt: L("Developers in Account A must manage EC2 instances in Account B without creating IAM users in Account B. Which components are required? (Select TWO)",
        "アカウント A の開発者が、アカウント B に IAM ユーザーを作成せずにアカウント B の EC2 インスタンスを管理する必要があります。必要な構成要素はどれですか？（2 つ選択）",
        "Account A က developer တွေက Account B မှာ IAM user မဖန်တီးဘဲ Account B ထဲက EC2 instance တွေကို manage လုပ်ရမယ်။ ဘယ် component တွေ လိုအပ်လဲ? (၂ ခု ရွေးပါ)"),
      options: ['An IAM role in Account B with EC2 permissions and a trust policy that trusts Account A', 'IAM users for each developer created in Account B', 'An identity-based policy in Account A that allows sts:AssumeRole on the role ARN in Account B', 'The Account B root user access keys shared with Account A', 'An SCP in Account A that grants sts:AssumeRole'],
      correct: [0, 2],
      explanation: L("Cross-account access needs both sides to agree: the role in B must trust A, and the developers in A must be allowed to call `sts:AssumeRole` on that role. SCPs never grant permissions, and creating users or sharing root keys in B is exactly what the requirement forbids.",
        "クロスアカウントアクセスには双方の合意が必要です。B のロールが A を信頼し、A の開発者がそのロールに対する `sts:AssumeRole` を許可されている必要があります。SCP は権限を付与せず、B でユーザーを作成したりルートキーを共有したりするのはまさに要件で禁止されていることです。",
        "Cross-account access မှာ နှစ်ဘက်လုံး သဘောတူရမယ်- B ထဲက role က A ကို trust လုပ်ရမယ်၊ A ထဲက developer တွေကလည်း အဲဒီ role အပေါ် `sts:AssumeRole` ခေါ်ခွင့် ရှိရမယ်။ SCP က permission ဘယ်တော့မှ grant မလုပ်ဘူး၊ B မှာ user ဖန်တီးတာ (သို့) root key share တာက requirement က တားထားတာပဲ။"),
    },
    {
      difficulty: 'MEDIUM', exams: ['SAA-C03'],
      prompt: L("A web application behind an Application Load Balancer is receiving SQL injection attempts and bursts of thousands of requests per minute from a few IP addresses. Which solution addresses both issues?",
        "Application Load Balancer の背後にある Web アプリケーションが、SQL インジェクションの試みと、少数の IP アドレスからの毎分数千件のリクエストの集中を受けています。両方の問題に対処できる解決策はどれですか？",
        "Application Load Balancer နောက်က web application တစ်ခုက SQL injection ကြိုးစားမှုတွေနဲ့ IP အနည်းငယ်ကနေ တစ်မိနစ် ထောင်ချီ request တွေ ရနေတယ်။ ပြဿနာ နှစ်ခုလုံးကို ဖြေရှင်းပေးမယ့် နည်းက ဘာလဲ?"),
      options: ['Enable AWS Shield Standard on the ALB', 'Enable Amazon GuardDuty in the Region', 'Associate an AWS WAF web ACL with a SQL injection managed rule group and a rate-based rule to the ALB', 'Add network ACL rules that block TCP port 443'],
      correct: [2],
      explanation: L("AWS WAF inspects L7 HTTP requests, so managed rules can block SQL injection and a rate-based rule throttles noisy IPs. Shield Standard handles L3/L4 DDoS, not application payloads, and GuardDuty only detects threats without blocking traffic.",
        "AWS WAF は L7 の HTTP リクエストを検査するため、マネージドルールで SQL インジェクションをブロックし、レートベースルールで大量に送信する IP を抑制できます。Shield Standard は L3/L4 の DDoS 対策でアプリケーションのペイロードは見ず、GuardDuty は脅威を検出するだけで通信をブロックしません。",
        "AWS WAF က L7 HTTP request ကို စစ်ဆေးလို့ managed rule နဲ့ SQL injection ကို block လုပ်ပြီး rate-based rule နဲ့ request အများကြီးပို့တဲ့ IP ကို ထိန်းနိုင်တယ်။ Shield Standard က L3/L4 DDoS အတွက်ဖြစ်ပြီး application payload ကို မကြည့်ဘူး၊ GuardDuty က threat ကို detect ပဲ လုပ်ပြီး traffic ကို block မလုပ်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM', exams: ['SAA-C03'],
      prompt: L("A company must encrypt S3 data with a key whose key policy it controls, be able to disable the key immediately if needed, and audit every use of the key in CloudTrail. Which option meets these requirements?",
        "ある企業は、キーポリシーを自社で管理でき、必要に応じて即座に無効化でき、キーの使用をすべて CloudTrail で監査できるキーで S3 データを暗号化する必要があります。要件を満たすのはどれですか？",
        "ကုမ္ပဏီတစ်ခုက key policy ကို ကိုယ်တိုင် ထိန်းချုပ်နိုင်၊ လိုရင် ချက်ချင်း disable လုပ်နိုင်ပြီး key သုံးတိုင်း CloudTrail မှာ audit လုပ်နိုင်တဲ့ key နဲ့ S3 data ကို encrypt လုပ်ရမယ်။ ဘယ် option က requirement နဲ့ ကိုက်လဲ?"),
      options: ['SSE-S3 with Amazon S3 managed keys', 'SSE-KMS with the AWS managed key aws/s3', 'An AWS owned key', 'SSE-KMS with a customer managed KMS key'],
      correct: [3],
      explanation: L("Only a customer managed key lets you edit the key policy and disable or schedule deletion of the key, and KMS logs each use to CloudTrail. The AWS managed key `aws/s3` is also logged, but its key policy is controlled by AWS and you cannot disable it.",
        "キーポリシーを編集し、キーの無効化や削除スケジュールができるのはカスタマーマネージドキーだけで、KMS は各使用を CloudTrail に記録します。AWS マネージドキー `aws/s3` も記録されますが、キーポリシーは AWS が管理しており無効化できません。",
        "Key policy ကို ပြင်နိုင်ပြီး key ကို disable (သို့) deletion schedule လုပ်နိုင်တာ customer managed key တစ်ခုတည်းပါ၊ KMS က သုံးတိုင်း CloudTrail မှာ log ရေးတယ်။ AWS managed key `aws/s3` လည်း log ကျပေမဲ့ key policy ကို AWS က ထိန်းထားလို့ disable လုပ်လို့ မရဘူး။"),
    },
    {
      difficulty: 'HARD', exams: ['SAA-C03'],
      prompt: L("A GitHub Actions deploy fails with \"Not authorized to perform sts:AssumeRoleWithWebIdentity\". The role trust policy uses `StringEquals` on `token.actions.githubusercontent.com:sub` = `repo:my-org/my-app:ref:refs/heads/main`. A debug step shows the token's `sub` is `repo:my-org@1234567/my-app@89012345:ref:refs/heads/main` and `aud` is `sts.amazonaws.com`. What is the MOST secure fix?",
        "GitHub Actions のデプロイが「Not authorized to perform sts:AssumeRoleWithWebIdentity」で失敗します。ロールの信頼ポリシーは `token.actions.githubusercontent.com:sub` に対して `StringEquals` で `repo:my-org/my-app:ref:refs/heads/main` を指定しています。デバッグ用ステップでは、トークンの `sub` が `repo:my-org@1234567/my-app@89012345:ref:refs/heads/main`、`aud` が `sts.amazonaws.com` と表示されます。最も安全な修正方法はどれですか？",
        "GitHub Actions deploy က \"Not authorized to perform sts:AssumeRoleWithWebIdentity\" နဲ့ fail ဖြစ်တယ်။ Role trust policy က `token.actions.githubusercontent.com:sub` ကို `StringEquals` နဲ့ `repo:my-org/my-app:ref:refs/heads/main` လို့ သတ်မှတ်ထားတယ်။ Debug step မှာ token ရဲ့ `sub` က `repo:my-org@1234567/my-app@89012345:ref:refs/heads/main`၊ `aud` က `sts.amazonaws.com` လို့ ပြတယ်။ အလုံခြုံဆုံး ပြင်နည်းက ဘာလဲ?"),
      options: ['Attach the AdministratorAccess managed policy to the role', 'Change the audience requested by the workflow to the role ARN', 'Update the sub condition to the exact immutable-ID subject the token sends', 'Replace the condition with StringLike on repo:*'],
      correct: [2],
      explanation: L("The trust policy is rejected because the `sub` strings differ; matching the exact immutable-ID subject (pinned repo and branch) fixes it without widening access. `repo:*` would let any GitHub repository assume the role, and permission policies such as AdministratorAccess are evaluated only after the role is assumed, so they cannot fix a trust failure.",
        "`sub` の文字列が異なるため信頼ポリシーで拒否されています。トークンが送る正確なイミュータブル ID のサブジェクト（リポジトリとブランチを固定）に一致させれば、アクセスを広げずに解決できます。`repo:*` ではどの GitHub リポジトリでもロールを引き受けられてしまい、AdministratorAccess などのアクセス許可ポリシーはロールを引き受けた後に評価されるため、信頼の失敗は解決できません。",
        "`sub` string မတူလို့ trust policy က ငြင်းပယ်နေတာပါ- token ပို့တဲ့ immutable ID subject (repo နဲ့ branch ကို pin ထား) ကို အတိအကျ ကိုက်အောင်လုပ်ရင် access မကျယ်စေဘဲ ပြေလည်တယ်။ `repo:*` ဆိုရင် ဘယ် GitHub repo ကမဆို role ကို assume လုပ်နိုင်သွားမယ်၊ AdministratorAccess လို permission policy က role assume ပြီးမှ evaluate လုပ်တာမို့ trust failure ကို မပြင်နိုင်ဘူး။"),
    },
    {
      difficulty: 'HARD', exams: ['SAA-C03'],
      prompt: L("A team migrates a GitHub Actions pipeline from stored access keys to OIDC. Which TWO issues would prevent the job from obtaining AWS credentials? (Select TWO)",
        "あるチームが GitHub Actions のパイプラインを、保存したアクセスキーから OIDC に移行しています。ジョブが AWS 認証情報を取得できなくなる問題はどの 2 つですか？（2 つ選択）",
        "Team တစ်ခုက GitHub Actions pipeline ကို သိမ်းထားတဲ့ access key ကနေ OIDC ကို ပြောင်းနေတယ်။ Job က AWS credential မရအောင် တားဆီးမယ့် ပြဿနာ နှစ်ခုက ဘာတွေလဲ? (၂ ခု ရွေးပါ)"),
      options: ['The workflow does not grant permissions: id-token: write', 'The role permission policy does not allow s3:PutObject', 'The trust policy uses StringEquals with a sub value that contains a * wildcard', 'The role maximum session duration is set to 12 hours'],
      correct: [0, 2],
      explanation: L("Without `id-token: write` the job cannot request an OIDC token at all, and with `StringEquals` the `*` is treated literally, so the `sub` never matches. A missing `s3:PutObject` causes AccessDenied later, after credentials were obtained, and a 12-hour maximum session is a valid setting.",
        "`id-token: write` がないとジョブは OIDC トークンを要求できず、`StringEquals` では `*` が文字として扱われるため `sub` が一致しません。`s3:PutObject` がない場合は認証情報を取得した後に AccessDenied になるだけで、12 時間の最大セッションは有効な設定です。",
        "`id-token: write` မပါရင် job က OIDC token လုံးဝ တောင်းလို့ မရဘူး၊ `StringEquals` မှာ `*` ကို စာလုံးအဖြစ် ယူလို့ `sub` ဘယ်တော့မှ မကိုက်ဘူး။ `s3:PutObject` မပါတာက credential ရပြီးမှ AccessDenied ဖြစ်တာပါ၊ maximum session ၁၂ နာရီက မှန်ကန်တဲ့ setting ပါ။"),
    },
    {
      difficulty: 'HARD', exams: ['SAA-C03'],
      prompt: L("An SCP attached to the organization root denies all EC2 actions outside ap-northeast-1. Which principal can still launch an EC2 instance in us-east-1?",
        "組織のルートにアタッチされた SCP が、ap-northeast-1 以外でのすべての EC2 アクションを拒否しています。それでも us-east-1 で EC2 インスタンスを起動できるプリンシパルはどれですか？",
        "Organization root မှာ တွဲထားတဲ့ SCP က ap-northeast-1 အပြင်မှာ EC2 action အားလုံးကို deny လုပ်ထားတယ်။ us-east-1 မှာ EC2 instance launch လုပ်နိုင်သေးတဲ့ principal က ဘယ်သူလဲ?"),
      options: ['An IAM user with AdministratorAccess in a member account', 'The root user of a member account', 'An IAM role with AdministratorAccess in the management account', 'A role in a member account whose permission boundary allows ec2:*'],
      correct: [2],
      explanation: L("SCPs do not affect users or roles in the management account, which is why AWS recommends keeping workloads out of it. In member accounts the SCP limits everyone, including the root user, and a permission boundary cannot raise permissions above an SCP.",
        "SCP は管理アカウントのユーザーやロールには影響しません。そのため AWS は管理アカウントにワークロードを置かないことを推奨しています。メンバーアカウントでは SCP がルートユーザーを含む全員を制限し、アクセス許可の境界で SCP 以上の権限にすることはできません。",
        "SCP က management account ထဲက user/role တွေကို မသက်ရောက်ဘူး- ဒါကြောင့် AWS က management account မှာ workload မထားဖို့ အကြံပြုတာပါ။ Member account တွေမှာတော့ SCP က root user အပါအဝင် လူတိုင်းကို ကန့်သတ်ပြီး permission boundary က SCP ထက် permission ပိုမြင့်အောင် မလုပ်နိုင်ဘူး။"),
    },
    {
      difficulty: 'HARD', exams: ['SAA-C03'],
      prompt: L("An IAM role has an identity-based policy allowing `s3:*` and `dynamodb:*`. Its permission boundary allows `s3:*` and `ec2:*`. No SCPs or resource policies apply. What are the role's effective permissions?",
        "ある IAM ロールの ID ベースのポリシーは `s3:*` と `dynamodb:*` を許可しています。アクセス許可の境界は `s3:*` と `ec2:*` を許可しています。SCP やリソースポリシーは適用されません。ロールの有効な権限はどれですか？",
        "IAM role တစ်ခုရဲ့ identity-based policy က `s3:*` နဲ့ `dynamodb:*` ကို allow လုပ်တယ်။ သူ့ permission boundary က `s3:*` နဲ့ `ec2:*` ကို allow လုပ်တယ်။ SCP နဲ့ resource policy မသက်ရောက်ဘူး။ Role ရဲ့ effective permission က ဘာလဲ?"),
      options: ['s3:* only', 's3:*, dynamodb:* and ec2:*', 's3:* and dynamodb:*', 'No permissions, because the two policies do not match exactly'],
      correct: [0],
      explanation: L("Effective permissions are the intersection of the identity policy and the boundary, so only `s3:*` remains. The boundary does not grant `ec2:*` by itself, and DynamoDB is outside the boundary, so a union of all three is wrong.",
        "有効な権限は ID ポリシーと境界の共通部分なので、残るのは `s3:*` だけです。境界それ自体は `ec2:*` を付与せず、DynamoDB は境界の外なので、3 つすべての和集合という答えは誤りです。",
        "Effective permission က identity policy နဲ့ boundary ရဲ့ intersection ဖြစ်လို့ `s3:*` ပဲ ကျန်တယ်။ Boundary ကိုယ်တိုင်က `ec2:*` ကို grant မလုပ်ဘူး၊ DynamoDB က boundary အပြင်ဘက်မှာ ရှိလို့ သုံးခုလုံး ပေါင်းတာက မှားတယ်။"),
    },
    {
      difficulty: 'HARD', exams: ['SAA-C03'],
      prompt: L("A Lambda function must encrypt 50 MB files with AWS KMS before writing them to a third-party storage system. Which approach is correct?",
        "Lambda 関数が、50 MB のファイルをサードパーティのストレージに書き込む前に AWS KMS で暗号化する必要があります。正しい方法はどれですか？",
        "Lambda function တစ်ခုက 50 MB file တွေကို third-party storage ထဲ မရေးခင် AWS KMS နဲ့ encrypt လုပ်ရမယ်။ မှန်ကန်တဲ့ နည်းက ဘာလဲ?"),
      options: ['Call kms:Encrypt directly with the 50 MB file as the plaintext', 'Call GenerateDataKey, encrypt the file locally with the plaintext data key, and store the encrypted data key with the file', 'Split the file into 4 KB chunks and call kms:Encrypt on each chunk with the AWS managed key', 'Store the file as a secret in AWS Secrets Manager'],
      correct: [1],
      explanation: L("This is envelope encryption: KMS generates and wraps a data key, the data is encrypted locally, and only the small encrypted key is stored alongside it. `kms:Encrypt` accepts at most 4 KB of plaintext, and chunking into thousands of KMS calls is slow, costly and throttle-prone.",
        "これはエンベロープ暗号化です。KMS がデータキーを生成して包み、データはローカルで暗号化され、小さな暗号化済みキーだけがデータと一緒に保存されます。`kms:Encrypt` の平文は最大 4 KB で、数千回の KMS 呼び出しに分割するのは遅く、コストがかかり、スロットリングも起こりやすくなります。",
        "ဒါက envelope encryption ပါ- KMS က data key ကို generate လုပ်ပြီး ထုပ်ပိုးပေးတယ်၊ data ကို local မှာ encrypt လုပ်ပြီး encrypt ထားတဲ့ key သေးသေးလေးကိုပဲ data နဲ့အတူ သိမ်းတယ်။ `kms:Encrypt` က plaintext 4 KB အထိပဲ လက်ခံပြီး KMS call ထောင်ချီ ခွဲခေါ်တာက နှေး၊ ကုန်ကျစရိတ်များ၊ throttle ဖြစ်လွယ်တယ်။"),
    },
    {
      difficulty: 'HARD', exams: ['SAA-C03'],
      prompt: L("A bucket in Account A has a bucket policy that allows role R in Account B to call `s3:GetObject`. The objects are encrypted with SSE-KMS using a customer managed key in Account A. Role R has no S3 permissions in its identity policy, and reads fail. Which changes are required? (Select TWO)",
        "アカウント A のバケットには、アカウント B のロール R に `s3:GetObject` を許可するバケットポリシーがあります。オブジェクトはアカウント A のカスタマーマネージドキーを使った SSE-KMS で暗号化されています。ロール R の ID ポリシーには S3 の権限がなく、読み取りが失敗します。必要な変更はどれですか？（2 つ選択）",
        "Account A ထဲက bucket မှာ Account B ရဲ့ role R ကို `s3:GetObject` ခွင့်ပြုတဲ့ bucket policy ရှိတယ်။ Object တွေကို Account A ရဲ့ customer managed key နဲ့ SSE-KMS encrypt လုပ်ထားတယ်။ Role R ရဲ့ identity policy မှာ S3 permission မရှိလို့ read fail ဖြစ်တယ်။ ဘယ်ပြောင်းလဲမှုတွေ လိုအပ်လဲ? (၂ ခု ရွေးပါ)"),
      options: ['Add role R to an IAM group in Account A', 'Add an identity-based policy to role R that allows s3:GetObject on the bucket objects (and kms:Decrypt on the key)', 'Attach an SCP in Account B that allows s3:GetObject', 'Allow role R to use kms:Decrypt in the key policy of the KMS key in Account A', 'Enable S3 Transfer Acceleration on the bucket'],
      correct: [1, 3],
      explanation: L("Cross-account access requires an Allow on both sides: the caller's identity policy in B and the resource side in A, which here means both the bucket policy and the KMS key policy. Roles cannot be added to IAM groups, and an SCP only sets a maximum and never grants access.",
        "クロスアカウントアクセスには両側での Allow が必要です。B 側の呼び出し元の ID ポリシーと、A 側のリソース（ここではバケットポリシーと KMS キーポリシーの両方）です。ロールは IAM グループに追加できず、SCP は上限を決めるだけでアクセスを付与しません。",
        "Cross-account access မှာ နှစ်ဘက်လုံးက Allow လိုတယ်- B ဘက်က ခေါ်သူရဲ့ identity policy နဲ့ A ဘက်က resource (ဒီမှာဆို bucket policy နဲ့ KMS key policy နှစ်ခုလုံး)။ Role ကို IAM group ထဲ ထည့်လို့မရဘူး၊ SCP က maximum ကိုပဲ သတ်မှတ်ပြီး access ဘယ်တော့မှ မပေးဘူး။"),
    },
    {
      difficulty: 'HARD', exams: ['CLF-C02', 'SAA-C03'],
      prompt: L("A security team needs to (1) detect EC2 instances communicating with known crypto-mining domains, (2) scan ECR container images for CVEs, and (3) see all findings in one place scored against the AWS Foundational Security Best Practices standard. Which services should it enable? (Select THREE)",
        "セキュリティチームは、(1) 既知の暗号通貨マイニングドメインと通信する EC2 インスタンスの検出、(2) ECR コンテナイメージの CVE スキャン、(3) AWS 基礎セキュリティのベストプラクティス標準に基づいたすべての検出結果の一元表示が必要です。有効にすべきサービスはどれですか？（3 つ選択）",
        "Security team က (၁) သိပြီးသား crypto-mining domain တွေနဲ့ ဆက်သွယ်နေတဲ့ EC2 instance တွေကို detect လုပ်၊ (၂) ECR container image တွေကို CVE scan လုပ်၊ (၃) finding အားလုံးကို AWS Foundational Security Best Practices standard နဲ့ တစ်နေရာတည်းမှာ ကြည့်ချင်တယ်။ ဘယ် service တွေ enable လုပ်သင့်လဲ? (၃ ခု ရွေးပါ)"),
      options: ['Amazon Macie', 'AWS Security Hub', 'AWS Artifact', 'Amazon GuardDuty', 'Amazon Inspector', 'Amazon Detective'],
      correct: [1, 3, 4],
      explanation: L("GuardDuty detects malicious network activity from DNS and flow logs, Inspector scans ECR images for CVEs, and Security Hub aggregates findings and runs the AWS Foundational Security Best Practices checks. Detective helps investigate a finding after the fact but does not detect or score, and Macie focuses on sensitive data in S3.",
        "GuardDuty は DNS ログやフローログから悪意あるネットワーク活動を検出し、Inspector は ECR イメージの CVE をスキャンし、Security Hub は検出結果を集約して AWS 基礎セキュリティのベストプラクティスのチェックを実行します。Detective は検出結果を事後に調査するもので検出や採点はせず、Macie は S3 の機密データに特化しています。",
        "GuardDuty က DNS log နဲ့ flow log ကနေ malicious network activity ကို detect လုပ်တယ်၊ Inspector က ECR image ကို CVE scan လုပ်တယ်၊ Security Hub က finding တွေ စုစည်းပြီး AWS Foundational Security Best Practices check တွေ run တယ်။ Detective က finding ကို နောက်မှ စုံစမ်းဖို့ ကူညီပေမဲ့ detect/score မလုပ်ဘူး၊ Macie က S3 ထဲက sensitive data အတွက်ပါ။"),
    },
  ],
  flashcards: [
    { term: 'Root user',
      definition: L("The identity created with the account's email address; it has unrestricted access that IAM policies cannot limit.", "アカウントのメールアドレスで作成される ID で、IAM ポリシーでは制限できない無制限のアクセス権を持ちます。", "Account ရဲ့ email address နဲ့ ဖန်တီးထားတဲ့ identity ဖြစ်ပြီး IAM policy နဲ့ ကန့်သတ်လို့မရတဲ့ အကန့်အသတ်မဲ့ access ရှိတယ်။"),
      example: L("Enable MFA, delete root access keys, and use root only to change the support plan or close the account.", "MFA を有効にし、ルートのアクセスキーを削除し、Support プランの変更やアカウントの解約時のみルートを使います。", "MFA ဖွင့်၊ root access key ဖျက်ပြီး support plan ပြောင်းတာ၊ account ပိတ်တာလိုမျိုးမှာပဲ root ကို သုံးပါ။") },
    { term: 'IAM role',
      definition: L("An identity with permission policies and a trust policy that trusted principals assume to receive temporary STS credentials.", "アクセス許可ポリシーと信頼ポリシーを持ち、信頼されたプリンシパルが引き受けて STS の一時的な認証情報を得る ID です。", "Permission policy နဲ့ trust policy ပါတဲ့ identity ဖြစ်ပြီး ယုံကြည်ထားတဲ့ principal တွေက assume လုပ်ကာ STS ယာယီ credential ရယူတယ်။"),
      example: L("An EC2 instance uses role `app-ec2-role` via an instance profile to read from S3 without any stored keys.", "EC2 インスタンスはインスタンスプロファイル経由でロール `app-ec2-role` を使い、キーを保存せずに S3 から読み取ります。", "EC2 instance က instance profile ကနေ `app-ec2-role` ကို သုံးပြီး key မသိမ်းဘဲ S3 ကနေ ဖတ်တယ်။") },
    { term: 'Trust policy',
      definition: L("The resource-based policy on a role that defines which principals may assume it and under which conditions.", "ロールに付けるリソースベースのポリシーで、どのプリンシパルがどの条件で引き受けられるかを定義します。", "Role ပေါ်က resource-based policy ဖြစ်ပြီး ဘယ် principal က ဘယ် condition နဲ့ assume လုပ်ခွင့်ရှိလဲ သတ်မှတ်တယ်။"),
      example: L("A trust policy allows `sts:AssumeRoleWithWebIdentity` only when `aud` is `sts.amazonaws.com` and `sub` is the main branch of one repo.", "信頼ポリシーで、`aud` が `sts.amazonaws.com` かつ `sub` が 1 つのリポジトリの main ブランチの場合のみ `sts:AssumeRoleWithWebIdentity` を許可します。", "Trust policy က `aud` = `sts.amazonaws.com` ဖြစ်ပြီး `sub` က repo တစ်ခုရဲ့ main branch ဖြစ်မှသာ `sts:AssumeRoleWithWebIdentity` ကို ခွင့်ပြုတယ်။") },
    { term: 'Explicit deny',
      definition: L("A `Deny` statement that overrides every Allow from any policy type during evaluation.", "評価時に、あらゆる種類のポリシーの Allow よりも優先される `Deny` ステートメントです。", "Evaluation လုပ်တဲ့အခါ ဘယ် policy အမျိုးအစားက Allow ကိုမဆို ကျော်နိုင်တဲ့ `Deny` statement ပါ။"),
      example: L("A user with `AdministratorAccess` still cannot delete objects if any attached policy denies `s3:DeleteObject`.", "`AdministratorAccess` を持つユーザーでも、アタッチされたポリシーのいずれかが `s3:DeleteObject` を拒否していればオブジェクトを削除できません。", "`AdministratorAccess` ရှိတဲ့ user ဖြစ်ပေမဲ့ တွဲထားတဲ့ policy တစ်ခုခုက `s3:DeleteObject` ကို deny လုပ်ရင် object ဖျက်လို့ မရဘူး။") },
    { term: 'AWS STS',
      definition: L("The Security Token Service that issues temporary credentials (access key, secret key, session token) through APIs such as AssumeRole.", "AssumeRole などの API で一時的な認証情報（アクセスキー、シークレットキー、セッショントークン）を発行する Security Token Service です。", "AssumeRole လို API တွေကနေ ယာယီ credential (access key၊ secret key၊ session token) ထုတ်ပေးတဲ့ Security Token Service ပါ။"),
      example: L("`aws sts assume-role --role-arn ... --role-session-name audit` returns credentials that expire after one hour.", "`aws sts assume-role --role-arn ... --role-session-name audit` は 1 時間後に失効する認証情報を返します。", "`aws sts assume-role --role-arn ... --role-session-name audit` က တစ်နာရီကြာရင် expire ဖြစ်မယ့် credential ပြန်ပေးတယ်။") },
    { term: 'OIDC federation (GitHub Actions)',
      definition: L("Trusting GitHub's OIDC provider so workflows exchange a signed JWT for role credentials via `AssumeRoleWithWebIdentity`, with no stored keys.", "GitHub の OIDC プロバイダーを信頼し、ワークフローが署名付き JWT を `AssumeRoleWithWebIdentity` でロールの認証情報と交換する仕組みで、キーを保存しません。", "GitHub ရဲ့ OIDC provider ကို trust လုပ်ပြီး workflow က sign လုပ်ထားတဲ့ JWT ကို `AssumeRoleWithWebIdentity` နဲ့ role credential အဖြစ် လဲတာပါ- key မသိမ်းရဘူး။"),
      example: L("If the token's `sub` uses the immutable-ID format `repo:Owner@123/repo@456:...`, the trust policy must list that exact value.", "トークンの `sub` がイミュータブル ID 形式 `repo:Owner@123/repo@456:...` なら、信頼ポリシーにはその正確な値を記載する必要があります。", "Token ရဲ့ `sub` က immutable ID format `repo:Owner@123/repo@456:...` ဖြစ်နေရင် trust policy မှာ အဲဒီ value အတိအကျကို ထည့်ရမယ်။") },
    { term: 'Service control policy (SCP)',
      definition: L("An AWS Organizations policy that sets the maximum permissions for IAM principals in member accounts; it never grants access.", "メンバーアカウントの IAM プリンシパルの最大権限を設定する AWS Organizations のポリシーで、アクセスを付与することはありません。", "Member account ထဲက IAM principal တွေရဲ့ maximum permission ကို သတ်မှတ်တဲ့ AWS Organizations policy ဖြစ်ပြီး access ဘယ်တော့မှ မပေးဘူး။"),
      example: L("An SCP on the root OU denies `cloudtrail:StopLogging` so even member-account administrators cannot disable auditing.", "ルート OU の SCP で `cloudtrail:StopLogging` を拒否すれば、メンバーアカウントの管理者でも監査を無効にできません。", "Root OU ပေါ်က SCP က `cloudtrail:StopLogging` ကို deny လုပ်ထားရင် member account admin တွေတောင် audit ကို ပိတ်လို့မရဘူး။") },
    { term: 'Permission boundary',
      definition: L("A managed policy that caps the maximum permissions an IAM user or role can have; effective access is the intersection with its identity policies.", "IAM ユーザーやロールが持てる最大権限を制限するマネージドポリシーで、有効なアクセスは ID ポリシーとの共通部分になります。", "IAM user (သို့) role ရဲ့ maximum permission ကို ကန့်သတ်တဲ့ managed policy ဖြစ်ပြီး effective access က identity policy နဲ့ intersection ပါ။"),
      example: L("Developers may create Lambda roles only if they attach the `dev-boundary` policy, so no new role exceeds S3 and DynamoDB access.", "開発者は `dev-boundary` ポリシーを付ける場合のみ Lambda 用ロールを作成でき、新しいロールが S3 と DynamoDB 以上の権限を持つことはありません。", "Developer တွေက `dev-boundary` policy တွဲမှသာ Lambda role ဖန်တီးခွင့်ရလို့ role အသစ်တွေက S3 နဲ့ DynamoDB ထက် ပိုတဲ့ access မရနိုင်ဘူး။") },
    { term: 'IAM Identity Center',
      definition: L("The recommended workforce SSO service that connects an identity source and assigns permission sets across AWS accounts with short-term credentials.", "ID ソースを接続し、AWS アカウント全体にアクセス許可セットを割り当てて短期認証情報を提供する、推奨される従業員向け SSO サービスです。", "Identity source ကို ချိတ်ပြီး AWS account တွေမှာ permission set တွေ assign လုပ်ကာ ခဏသုံး credential ပေးတဲ့ ဝန်ထမ်းအတွက် အကြံပြုထားတဲ့ SSO service ပါ။"),
      example: L("Engineers sign in with Entra ID, pick `prod / ReadOnly` in the portal, and run `aws sso login` for the CLI.", "エンジニアは Entra ID でサインインし、ポータルで `prod / ReadOnly` を選び、CLI 用に `aws sso login` を実行します。", "Engineer တွေက Entra ID နဲ့ sign in ဝင်၊ portal မှာ `prod / ReadOnly` ကို ရွေးပြီး CLI အတွက် `aws sso login` run တယ်။") },
    { term: 'Envelope encryption',
      definition: L("Encrypting data with a data key and then encrypting that data key with a KMS key, so large data never has to be sent to KMS.", "データをデータキーで暗号化し、そのデータキーを KMS キーで暗号化する方式で、大きなデータを KMS に送る必要がありません。", "Data ကို data key နဲ့ encrypt လုပ်ပြီး အဲဒီ data key ကို KMS key နဲ့ ထပ် encrypt လုပ်တဲ့နည်းဖြစ်လို့ data အကြီးကို KMS ဆီ ပို့စရာ မလိုဘူး။"),
      example: L("S3 SSE-KMS calls `GenerateDataKey`, encrypts each object locally and stores the encrypted data key in the object metadata.", "S3 の SSE-KMS は `GenerateDataKey` を呼び出して各オブジェクトをローカルで暗号化し、暗号化済みのデータキーをオブジェクトのメタデータに保存します。", "S3 SSE-KMS က `GenerateDataKey` ကို ခေါ်ပြီး object တစ်ခုချင်းကို local မှာ encrypt လုပ်ကာ encrypt ထားတဲ့ data key ကို object metadata ထဲ သိမ်းတယ်။") },
    { term: 'Secrets Manager vs Parameter Store',
      definition: L("Secrets Manager stores secrets with built-in rotation and replication for a fee; Parameter Store holds config and SecureString values, with a free standard tier and no native rotation.", "Secrets Manager はローテーションとレプリケーションを備えた有料のシークレット保管サービス、Parameter Store は設定値や SecureString を保持し、Standard 階層は無料でネイティブのローテーションはありません。", "Secrets Manager က rotation နဲ့ replication built-in ပါတဲ့ ပိုက်ဆံပေးရတဲ့ secret သိမ်းဆည်းရေးပါ၊ Parameter Store က config နဲ့ SecureString value တွေ သိမ်းပြီး standard tier အခမဲ့၊ native rotation မပါဘူး။"),
      example: L("The RDS master password lives in Secrets Manager with 30-day rotation; `/app/prod/api-url` lives in Parameter Store.", "RDS のマスターパスワードは 30 日ローテーション付きで Secrets Manager に、`/app/prod/api-url` は Parameter Store に保存します。", "RDS master password ကို ရက် ၃၀ rotation နဲ့ Secrets Manager မှာ သိမ်းပြီး `/app/prod/api-url` ကို Parameter Store မှာ သိမ်းတယ်။") },
    { term: 'Amazon GuardDuty',
      definition: L("A managed threat detection service that analyzes CloudTrail, VPC Flow Logs and DNS logs with ML and threat intelligence; it detects but does not block.", "CloudTrail、VPC フローログ、DNS ログを ML と脅威インテリジェンスで分析するマネージド脅威検出サービスで、検出はしますがブロックはしません。", "CloudTrail၊ VPC Flow Logs၊ DNS log တွေကို ML နဲ့ threat intelligence သုံးပြီး ခွဲခြမ်းစိတ်ဖြာတဲ့ managed threat detection service ပါ- detect လုပ်ပေမဲ့ block မလုပ်ဘူး။"),
      example: L("GuardDuty flags an instance querying a crypto-mining domain; EventBridge triggers a Lambda that isolates it.", "GuardDuty が暗号通貨マイニングのドメインに問い合わせるインスタンスを検出し、EventBridge が Lambda を起動して隔離します。", "GuardDuty က crypto-mining domain ကို query လုပ်နေတဲ့ instance ကို ပြတယ်၊ EventBridge က Lambda ကို trigger လုပ်ပြီး instance ကို isolate လုပ်တယ်။") },
  ],
};
