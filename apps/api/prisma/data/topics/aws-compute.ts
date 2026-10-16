import { L, type SeedTopic } from '../types.js';

export const topic: SeedTopic = {
  slug: 'aws-compute',
  icon: 'Server',
  level: 'ASSOCIATE',
  exams: ['CLF-C02', 'SAA-C03'],
  name: L("AWS Compute: EC2, Scaling, Load Balancing & Serverless", "AWS コンピューティング：EC2・スケーリング・ロードバランシング・サーバーレス", "AWS Compute: EC2၊ Scaling၊ Load Balancing နဲ့ Serverless"),
  description: L(
    "EC2 instance types, AMIs, IMDSv2, purchasing options, placement groups, EBS volumes and resizing, Elastic IP, Auto Scaling, Elastic Load Balancing, and when to choose Lambda, ECS/Fargate, EKS, App Runner, Beanstalk, Lightsail, Batch or Outposts.",
    "EC2 のインスタンスタイプ、AMI、IMDSv2、購入オプション、プレイスメントグループ、EBS ボリュームとサイズ変更、Elastic IP、Auto Scaling、Elastic Load Balancing、そして Lambda・ECS/Fargate・EKS・App Runner・Beanstalk・Lightsail・Batch・Outposts の使い分けを学びます。",
    "EC2 instance type၊ AMI၊ IMDSv2၊ purchasing option၊ placement group၊ EBS volume နဲ့ resize လုပ်နည်း၊ Elastic IP၊ Auto Scaling၊ Elastic Load Balancing၊ ပြီးတော့ Lambda၊ ECS/Fargate၊ EKS၊ App Runner၊ Beanstalk၊ Lightsail၊ Batch၊ Outposts ကို ဘယ်အချိန် ရွေးရမလဲ လေ့လာမယ်။",
  ),
  lesson: {
    minutes: 24,
    objectives: [
      L("Read an instance type name such as `t3.micro` or `m7g.large` and pick the right family, including Graviton and burstable instances.",
        "`t3.micro` や `m7g.large` のようなインスタンスタイプ名を読み解き、Graviton やバースト可能インスタンスを含め適切なファミリーを選べる。",
        "`t3.micro`၊ `m7g.large` လို instance type နာမည်ကို ဖတ်တတ်ပြီး Graviton နဲ့ burstable instance အပါအဝင် မှန်တဲ့ family ကို ရွေးနိုင်မယ်။"),
      L("Launch and access EC2 securely with AMIs, user data, IMDSv2, key pairs, EC2 Instance Connect and Session Manager.",
        "AMI・ユーザーデータ・IMDSv2・キーペア・EC2 Instance Connect・Session Manager を使い、EC2 を安全に起動・接続できる。",
        "AMI၊ user data၊ IMDSv2၊ key pair၊ EC2 Instance Connect၊ Session Manager တွေသုံးပြီး EC2 ကို လုံခြုံစွာ launch လုပ်ပြီး ဝင်နိုင်မယ်။"),
      L("Choose the cheapest correct purchasing option: On-Demand, Savings Plans, Reserved, Spot, Dedicated or Capacity Reservations.",
        "On-Demand・Savings Plans・Reserved・Spot・Dedicated・Capacity Reservations から、正しく最も安い購入オプションを選べる。",
        "On-Demand၊ Savings Plans၊ Reserved၊ Spot၊ Dedicated၊ Capacity Reservation ထဲက မှန်ပြီး အသက်သာဆုံး purchasing option ကို ရွေးနိုင်မယ်။"),
      L("Compare EBS volume types with instance store, take snapshots, and grow a full root volume without downtime.",
        "EBS ボリュームタイプとインスタンスストアを比較し、スナップショットを取得し、満杯のルートボリュームをダウンタイムなしで拡張できる。",
        "EBS volume type တွေကို instance store နဲ့ နှိုင်းယှဉ်၊ snapshot ယူ၊ ပြည့်နေတဲ့ root volume ကို downtime မရှိဘဲ ချဲ့နိုင်မယ်။"),
      L("Design a highly available web tier with an Auto Scaling group behind an ALB or NLB across multiple AZs.",
        "複数 AZ にまたがる ALB または NLB の背後に Auto Scaling グループを置き、高可用性の Web 層を設計できる。",
        "AZ အများကြီးပေါ်မှာ ALB သို့ NLB နောက်က Auto Scaling group နဲ့ highly available web tier ကို design လုပ်နိုင်မယ်။"),
      L("Decide when to use Lambda, ECS on EC2 or Fargate, EKS, App Runner, Elastic Beanstalk, Lightsail, Batch or Outposts instead of plain EC2.",
        "素の EC2 の代わりに Lambda・ECS（EC2/Fargate）・EKS・App Runner・Elastic Beanstalk・Lightsail・Batch・Outposts を使うべき場面を判断できる。",
        "ရိုးရိုး EC2 အစား Lambda၊ ECS (EC2 သို့ Fargate)၊ EKS၊ App Runner၊ Elastic Beanstalk၊ Lightsail၊ Batch၊ Outposts ကို ဘယ်အချိန်သုံးရမလဲ ဆုံးဖြတ်နိုင်မယ်။"),
    ],
    sections: [
      {
        id: "ec2-instance-types",
        title: L("EC2 basics and how to read instance type names", "EC2 の基本とインスタンスタイプ名の読み方", "EC2 အခြေခံနဲ့ instance type နာမည် ဖတ်နည်း"),
        blocks: [
          { type: 'p', text: L(
            "**Amazon EC2 (Elastic Compute Cloud)** gives you virtual servers, called **instances**, that you rent by the second. It is classic **IaaS**: AWS runs the hardware and the hypervisor (the Nitro System), and you manage the operating system, patches, applications and firewall rules. Think of EC2 as renting an empty apartment: the building owner fixes the walls and plumbing, but furniture, locks on your own door and cleaning are your job. You already did this when you ran your app on a `t3.micro` — every choice you made (AMI, key pair, security group, 8 GiB disk) is part of what this lesson explains.",
            "**Amazon EC2（Elastic Compute Cloud）** は、**インスタンス**と呼ばれる仮想サーバーを秒単位で借りられるサービスです。典型的な **IaaS** で、AWS はハードウェアとハイパーバイザー（Nitro System）を運用し、利用者は OS・パッチ・アプリケーション・ファイアウォールルールを管理します。EC2 は家具なしの部屋を借りるようなものです。建物の壁や配管はオーナーが直しますが、家具・自室の鍵・掃除は自分の仕事です。あなたが `t3.micro` でアプリを動かしたときに選んだ AMI・キーペア・セキュリティグループ・8 GiB のディスクは、すべてこのレッスンで説明する内容です。",
            "**Amazon EC2 (Elastic Compute Cloud)** ဆိုတာ **instance** လို့ခေါ်တဲ့ virtual server တွေကို စက္ကန့်အလိုက် ငှားသုံးရတာပါ။ ဒါက ပုံမှန် **IaaS** ပါ — hardware နဲ့ hypervisor (Nitro System) ကို AWS က run ပေးပြီး OS၊ patch၊ application၊ firewall rule တွေကိုတော့ ကိုယ်တိုင် စီမံရတယ်။ ပရိဘောဂမပါတဲ့ အခန်းငှားတာနဲ့ တူတယ် — နံရံ၊ ရေပိုက်ကို အိမ်ပိုင်ရှင်က ပြင်ပေးပေမယ့် ပရိဘောဂ၊ ကိုယ့်တံခါးသော့၊ သန့်ရှင်းရေးက ကိုယ့်တာဝန်ပါ။ `t3.micro` ပေါ်မှာ app run တုန်းက ရွေးခဲ့တဲ့ AMI၊ key pair၊ security group၊ 8 GiB disk အားလုံးကို ဒီ lesson မှာ ရှင်းပြမှာပါ။"
          ) },
          { type: 'p', text: L(
            "An instance type name has a pattern: **family + generation + optional attributes + size**. In `m7g.large`: `m` = general-purpose family, `7` = 7th generation, `g` = AWS **Graviton** (Arm-based) processor, `large` = size. Other attribute letters: `a` = AMD, `i` = Intel, `d` = local NVMe instance store, `n` = enhanced networking, `e` = extra memory. Sizes double each step (`large` → `xlarge` → `2xlarge`), roughly doubling vCPU, memory and price. **Graviton** instances typically give better price-performance than comparable x86 instances, as long as your software runs on Arm64 (most Linux, Java, Node.js, Python and container workloads do).",
            "インスタンスタイプ名には **ファミリー + 世代 + 任意の属性 + サイズ** というパターンがあります。`m7g.large` なら、`m` = 汎用ファミリー、`7` = 第 7 世代、`g` = AWS **Graviton**（Arm ベース）プロセッサー、`large` = サイズです。他の属性文字として、`a` = AMD、`i` = Intel、`d` = ローカル NVMe インスタンスストア、`n` = 拡張ネットワーク、`e` = 追加メモリがあります。サイズは 1 段階ごとに倍になり（`large` → `xlarge` → `2xlarge`）、vCPU・メモリ・料金もほぼ倍になります。**Graviton** インスタンスは、ソフトウェアが Arm64 で動く限り（多くの Linux・Java・Node.js・Python・コンテナは対応）、同等の x86 より価格性能比が高いのが一般的です。",
            "Instance type နာမည်မှာ **family + generation + attribute (ရှိရင်) + size** ဆိုတဲ့ pattern ရှိတယ်။ `m7g.large` မှာ `m` = general-purpose family၊ `7` = 7th generation၊ `g` = AWS **Graviton** (Arm-based) processor၊ `large` = size ပါ။ တခြား attribute စာလုံးတွေ — `a` = AMD၊ `i` = Intel၊ `d` = local NVMe instance store၊ `n` = enhanced networking၊ `e` = extra memory။ Size တစ်ဆင့်တက်တိုင်း (`large` → `xlarge` → `2xlarge`) vCPU၊ memory၊ ဈေး နှစ်ဆလောက် တက်တယ်။ ကိုယ့် software က Arm64 ပေါ်မှာ run လို့ရရင် (Linux၊ Java၊ Node.js၊ Python၊ container အများစု ရတယ်) **Graviton** က x86 ထက် price-performance ပိုကောင်းလေ့ရှိတယ်။"
          ) },
          { type: 'table',
            head: [L("Family", "ファミリー", "Family (အမျိုးအစား)"), L("Optimized for", "最適化の対象", "ဘာအတွက် အကောင်းဆုံးလဲ"), L("Typical use", "代表的な用途", "သုံးလေ့ရှိတဲ့ နေရာ")],
            rows: [
              [L("`t` (t3, t4g)", "`t` 系（t3、t4g）", "`t` (t3၊ t4g)"), L("Burstable general purpose (CPU credits)", "バースト可能な汎用（CPU クレジット）", "Burstable general purpose (CPU credit သုံး)"), L("Dev/test, small web apps, low average CPU", "開発/テスト、小規模 Web アプリ、平均 CPU が低い処理", "Dev/test၊ web app သေးသေး၊ ပျမ်းမျှ CPU နည်းတဲ့ workload")],
              [L("`m` (m7i, m7g)", "`m` 系（m7i、m7g）", "`m` (m7i၊ m7g)"), L("Balanced CPU and memory", "CPU とメモリのバランス", "CPU နဲ့ memory မျှတ"), L("App servers, backends, mid-size databases", "アプリサーバー、バックエンド、中規模 DB", "App server၊ backend၊ အလတ်စား database")],
              [L("`c` (c7g, c7i)", "`c` 系（c7g、c7i）", "`c` (c7g၊ c7i)"), L("Compute (high CPU per GiB)", "コンピューティング（GiB あたりの CPU が多い）", "Compute (GiB တစ်ခုချင်းအတွက် CPU များ)"), L("Batch, video encoding, game servers, HPC", "バッチ、動画エンコード、ゲームサーバー、HPC", "Batch၊ video encoding၊ game server၊ HPC")],
              [L("`r`, `x` (r7g, x2idn)", "`r`、`x` 系（r7g、x2idn）", "`r`၊ `x` (r7g၊ x2idn)"), L("Memory", "メモリ", "Memory (RAM များ)"), L("In-memory caches, SAP HANA, large databases", "インメモリキャッシュ、SAP HANA、大規模 DB", "In-memory cache၊ SAP HANA၊ database ကြီး")],
              [L("`i`, `d` (i4i, d3)", "`i`、`d` 系（i4i、d3）", "`i`၊ `d` (i4i၊ d3)"), L("Storage (fast local NVMe / dense HDD)", "ストレージ（高速ローカル NVMe / 大容量 HDD）", "Storage (မြန်တဲ့ local NVMe / HDD များ)"), L("NoSQL, data warehousing, Kafka", "NoSQL、データウェアハウス、Kafka", "NoSQL၊ data warehouse၊ Kafka")],
              [L("`p`, `g`, `inf`, `trn`", "`p`・`g`・`inf`・`trn` 系", "`p`၊ `g`၊ `inf`၊ `trn`"), L("Accelerated (GPU, Inferentia, Trainium)", "高速化（GPU、Inferentia、Trainium）", "Accelerated (GPU၊ Inferentia၊ Trainium)"), L("ML training/inference, graphics", "機械学習の学習/推論、グラフィックス", "ML training/inference၊ graphics")],
            ] },
          { type: 'p', text: L(
            "**Burstable (T) instances** earn **CPU credits** while running below a baseline (for `t3.micro`, 10% per vCPU) and spend them to burst above it. In **standard** mode the CPU is throttled to baseline when credits run out; in **unlimited** mode (the default for T3/T4g) it keeps bursting and you pay for surplus credits. If your app sits at 60–100% CPU all day, a T instance is the wrong choice — move to `m` or `c`.",
            "**バースト可能（T）インスタンス**は、ベースライン（`t3.micro` では vCPU あたり 10%）より低い使用率で動いている間に **CPU クレジット**を貯め、それを使ってベースラインを超えてバーストします。**standard** モードではクレジットが尽きると CPU がベースラインに制限され、**unlimited** モード（T3/T4g の既定）ではバーストを続け、超過分のクレジットに課金されます。アプリが一日中 CPU 60〜100% なら T インスタンスは不適切なので、`m` や `c` に移行しましょう。",
            "**Burstable (T) instance** တွေက baseline (`t3.micro` ဆို vCPU တစ်ခုကို 10%) အောက်မှာ run နေချိန် **CPU credit** စုထားပြီး baseline ထက်ကျော်ဖို့ လိုတဲ့အခါ အဲ့ credit ကို သုံးတယ်။ **Standard** mode မှာ credit ကုန်ရင် CPU ကို baseline အထိ လျှော့ချလိုက်တယ်၊ **unlimited** mode (T3/T4g ရဲ့ default) မှာတော့ ဆက် burst ပြီး ပိုသုံးတဲ့ credit အတွက် ငွေပေးရတယ်။ App က တစ်နေကုန် CPU 60–100% ဆိုရင် T instance မသင့်ဘူး — `m` သို့ `c` ကို ပြောင်းပါ။"
          ) },
          { type: 'callout', tone: 'memory', text: L(
            "Family letters: **T**iny/burs**T**, **M**ain (balanced), **C**ompute, **R**AM, **I**/O (storage), **P**/**G** = **P**ictures/**G**PU. A trailing **g** before the dot = **G**raviton.",
            "ファミリーの覚え方：**T** = 小さく**T**（バースト）、**M** = **M**ain（バランス）、**C** = **C**ompute、**R** = **R**AM、**I** = **I**/O（ストレージ）、**P**/**G** = **G**PU。ドットの前の末尾 **g** = **G**raviton。",
            "Family မှတ်နည်း: **T** = burs**T**၊ **M** = **M**ain (balanced)၊ **C** = **C**ompute၊ **R** = **R**AM၊ **I** = **I**/O (storage)၊ **P**/**G** = **G**PU။ Dot ရှေ့က နောက်ဆုံး **g** = **G**raviton။"
          ) },
        ],
      },
      {
        id: "launch-and-access",
        title: L("Launching: AMIs, user data, IMDSv2 and secure access", "起動：AMI・ユーザーデータ・IMDSv2・安全な接続", "Launch လုပ်ခြင်း: AMI၊ user data၊ IMDSv2 နဲ့ လုံခြုံတဲ့ access"),
        blocks: [
          { type: 'p', text: L(
            "An **AMI (Amazon Machine Image)** is the template for the root disk: OS plus any preinstalled software, and the block device mapping. AMIs are **regional** — to launch in another Region you **copy** the AMI there. A common pattern is the **golden AMI**: bake your app and agents into a custom AMI so new instances boot fast and identical. **User data** is a script (cloud-init) that runs **once at first boot as root** — perfect for `dnf install` and pulling your app code. **Instance metadata** at `169.254.169.254` lets the instance learn its own ID, AZ, IP and temporary IAM role credentials.",
            "**AMI（Amazon Machine Image）**はルートディスクのテンプレートで、OS とプリインストールされたソフトウェア、ブロックデバイスマッピングを含みます。AMI は**リージョン単位**なので、別リージョンで起動するには AMI を**コピー**します。よくあるパターンは**ゴールデン AMI** で、アプリやエージェントをカスタム AMI に焼き込み、新しいインスタンスを高速かつ同一の状態で起動します。**ユーザーデータ**は**初回起動時に root として 1 回だけ**実行されるスクリプト（cloud-init）で、`dnf install` やアプリコードの取得に最適です。`169.254.169.254` の**インスタンスメタデータ**から、インスタンス自身の ID・AZ・IP・IAM ロールの一時認証情報を取得できます。",
            "**AMI (Amazon Machine Image)** ဆိုတာ root disk ရဲ့ template ပါ — OS၊ ကြိုတင်ထည့်ထားတဲ့ software၊ block device mapping ပါတယ်။ AMI က **region အလိုက်** ဖြစ်လို့ တခြား Region မှာ launch ချင်ရင် AMI ကို အဲ့ဒီကို **copy** ကူးရတယ်။ အသုံးများတဲ့ pattern က **golden AMI** — app နဲ့ agent တွေကို custom AMI ထဲ ထည့်ထားလို့ instance အသစ်တွေ မြန်မြန် boot ပြီး အတူတူ ဖြစ်တယ်။ **User data** က **ပထမဆုံး boot ချိန်မှာ root အနေနဲ့ တစ်ခါပဲ** run တဲ့ script (cloud-init) ပါ — `dnf install` လုပ်ဖို့၊ app code ဆွဲဖို့ အကောင်းဆုံး။ `169.254.169.254` က **instance metadata** ကနေ instance က ကိုယ့် ID၊ AZ၊ IP၊ IAM role ရဲ့ temporary credential တွေကို သိနိုင်တယ်။"
          ) },
          { type: 'p', text: L(
            "**IMDSv2** protects metadata with a **session token**: the caller first sends an HTTP `PUT` to get a token, then sends it in a header with every `GET`. This blocks many SSRF attacks that could steal role credentials through a vulnerable web app. New Amazon Linux 2023 AMIs default to IMDSv2-only; best practice is to require it everywhere (`HttpTokens=required`).",
            "**IMDSv2** は**セッショントークン**でメタデータを保護します。呼び出し元はまず HTTP `PUT` でトークンを取得し、以降のすべての `GET` でそのトークンをヘッダーに付けます。これにより、脆弱な Web アプリを経由してロールの認証情報を盗む SSRF 攻撃の多くを防げます。新しい Amazon Linux 2023 の AMI は既定で IMDSv2 のみで、ベストプラクティスはすべてで必須化（`HttpTokens=required`）することです。",
            "**IMDSv2** က metadata ကို **session token** နဲ့ ကာကွယ်တယ်။ ခေါ်တဲ့သူက အရင် HTTP `PUT` နဲ့ token ယူ၊ ပြီးမှ `GET` တိုင်းမှာ token ကို header ထဲ ထည့်ပို့ရတယ်။ ဒါကြောင့် အားနည်းချက်ရှိတဲ့ web app ကနေ role credential ခိုးတဲ့ SSRF attack အများစုကို တားနိုင်တယ်။ Amazon Linux 2023 AMI အသစ်တွေက default IMDSv2-only ဖြစ်ပြီး best practice က နေရာတိုင်းမှာ require (`HttpTokens=required`) လုပ်ထားတာပါ။"
          ) },
          { type: 'code', lang: 'bash', code: `# Launch a Graviton instance with IMDSv2 required and a 20 GiB gp3 root disk
aws ec2 run-instances \\
  --image-id ami-0123456789abcdef0 \\
  --instance-type t4g.small \\
  --key-name my-tokyo-key \\
  --subnet-id subnet-0aaa1111bbbb2222c \\
  --security-group-ids sg-0123abcd4567ef890 \\
  --iam-instance-profile Name=ec2-ssm-role \\
  --metadata-options HttpTokens=required,HttpEndpoint=enabled \\
  --block-device-mappings '[{"DeviceName":"/dev/xvda","Ebs":{"VolumeSize":20,"VolumeType":"gp3"}}]' \\
  --user-data file://bootstrap.sh \\
  --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=web-01}]'

# Inside the instance: read metadata with IMDSv2
TOKEN=$(curl -sX PUT http://169.254.169.254/latest/api/token \\
  -H "X-aws-ec2-metadata-token-ttl-seconds: 21600")
curl -s -H "X-aws-ec2-metadata-token: $TOKEN" \\
  http://169.254.169.254/latest/meta-data/placement/availability-zone`,
            caption: L("A production-style launch: IMDSv2 required, SSM role attached, bigger gp3 root disk than the 8 GiB default.", "本番を意識した起動：IMDSv2 必須、SSM ロール付与、既定の 8 GiB より大きい gp3 ルートディスク。", "Production ပုံစံ launch: IMDSv2 require၊ SSM role တပ်၊ default 8 GiB ထက်ကြီးတဲ့ gp3 root disk။") },
          { type: 'p', text: L(
            "How do you log in? A **key pair** (RSA or ED25519) is classic SSH: AWS stores the public key, you download the private key **once** — lose it and you cannot recover it. **EC2 Instance Connect** pushes a temporary SSH public key for about 60 seconds using IAM permissions, so no long-lived keys are shared (use an **EC2 Instance Connect Endpoint** for private subnets). **Session Manager** (part of AWS Systems Manager) gives a browser or CLI shell with **no inbound port 22, no bastion host and no key pair**; it needs the SSM Agent and an instance profile such as `AmazonSSMManagedInstanceCore`, and every session can be logged to CloudWatch Logs or S3.",
            "ログイン方法は？ **キーペア**（RSA または ED25519）は従来の SSH 方式で、AWS が公開鍵を保管し、利用者は秘密鍵を **1 回だけ**ダウンロードします。紛失すると復旧できません。**EC2 Instance Connect** は IAM 権限を使って一時的な SSH 公開鍵を約 60 秒間プッシュするため、長期的な鍵を共有せずに済みます（プライベートサブネットには **EC2 Instance Connect Endpoint** を使います）。**Session Manager**（AWS Systems Manager の一部）は、**インバウンド 22 番ポートも踏み台ホストもキーペアも不要**でブラウザーや CLI のシェルを提供します。SSM Agent と `AmazonSSMManagedInstanceCore` などのインスタンスプロファイルが必要で、すべてのセッションを CloudWatch Logs や S3 に記録できます。",
            "ဘယ်လို login ဝင်မလဲ? **Key pair** (RSA သို့ ED25519) က ရိုးရိုး SSH နည်းပါ — public key ကို AWS က သိမ်းပြီး private key ကို **တစ်ခါပဲ** download ရတယ်၊ ပျောက်ရင် ပြန်ယူလို့ မရဘူး။ **EC2 Instance Connect** က IAM permission သုံးပြီး temporary SSH public key ကို စက္ကန့် ၆၀ လောက် push လုပ်ပေးလို့ အကြာကြီးသုံးတဲ့ key တွေ မျှဝေစရာ မလိုဘူး (private subnet အတွက် **EC2 Instance Connect Endpoint** သုံးပါ)။ **Session Manager** (AWS Systems Manager ရဲ့ အစိတ်အပိုင်း) က **inbound port 22၊ bastion host၊ key pair မလိုဘဲ** browser သို့ CLI ကနေ shell ပေးတယ်။ SSM Agent နဲ့ `AmazonSSMManagedInstanceCore` လို instance profile လိုပြီး session တိုင်းကို CloudWatch Logs သို့ S3 မှာ log သိမ်းနိုင်တယ်။"
          ) },
          { type: 'callout', tone: 'exam', text: L(
            "Exam keywords: \"no SSH keys, no open inbound ports, audit every session\" → **Session Manager**. \"Software installed automatically at first boot\" → **user data**. \"Instance must find its own instance ID / role credentials\" → **instance metadata (IMDSv2)**. \"Launch faster with everything preinstalled\" → **golden AMI**.",
            "試験キーワード：「SSH キー不要・インバウンドポートを開けない・全セッションを監査」→ **Session Manager**。「初回起動時にソフトを自動インストール」→ **ユーザーデータ**。「インスタンスが自分のインスタンス ID やロール認証情報を取得」→ **インスタンスメタデータ（IMDSv2）**。「すべてプリインストール済みで高速起動」→ **ゴールデン AMI**。",
            "Exam keyword: \"SSH key မလို၊ inbound port မဖွင့်၊ session တိုင်း audit\" → **Session Manager**။ \"ပထမ boot မှာ software အလိုအလျောက် install\" → **user data**။ \"Instance က ကိုယ့် instance ID / role credential ကို ရှာရမယ်\" → **instance metadata (IMDSv2)**။ \"အကုန် ကြိုထည့်ထားပြီး မြန်မြန် launch\" → **golden AMI**။"
          ) },
        ],
      },
      {
        id: "purchasing-options",
        title: L("Purchasing options: paying the right price", "購入オプション：適正な価格で支払う", "Purchasing option: မှန်ကန်တဲ့ ဈေးနဲ့ ပေးချေခြင်း"),
        blocks: [
          { type: 'p', text: L(
            "The same `m7g.large` can cost very different amounts depending on **how** you buy it. Think of a hotel: walk-in guests pay the full nightly rate (**On-Demand**), a company that promises to book rooms for a year gets a corporate discount (**Savings Plans / Reserved Instances**), last-minute empty rooms are sold cheaply but can be taken back (**Spot**), and some guests rent an entire floor for privacy (**Dedicated Hosts**).",
            "同じ `m7g.large` でも、**買い方**によって費用は大きく変わります。ホテルで考えてみましょう。飛び込みの客は通常料金（**On-Demand**）、1 年間の予約を約束する企業は法人割引（**Savings Plans / Reserved Instances**）、直前の空室は安く売られるが取り消されることもある（**Spot**）、プライバシーのためにフロアごと借りる客もいます（**Dedicated Hosts**）。",
            "`m7g.large` တစ်ခုတည်းကို **ဘယ်လိုဝယ်လဲ** ပေါ်မူတည်ပြီး ဈေးအများကြီး ကွာနိုင်တယ်။ ဟိုတယ်နဲ့ ဥပမာပေးမယ် — ရုတ်တရက် ဝင်လာတဲ့ ဧည့်သည်က ဈေးအပြည့်ပေးရ (**On-Demand**)၊ တစ်နှစ်လုံး booking လုပ်မယ်လို့ ကတိပေးတဲ့ ကုမ္ပဏီက discount ရ (**Savings Plans / Reserved Instances**)၊ နောက်ဆုံးမိနစ် လွတ်နေတဲ့ အခန်းကို ဈေးပေါပေါ ရောင်းပေမယ့် ပြန်ယူခံရနိုင် (**Spot**)၊ privacy အတွက် ထပ်တစ်ထပ်လုံး ငှားတဲ့သူလည်း ရှိတယ် (**Dedicated Hosts**)။"
          ) },
          { type: 'table',
            head: [L("Option", "オプション", "Option (ဝယ်နည်း)"), L("Commitment / behavior", "コミットメント / 特徴", "Commitment / သဘောသဘာဝ"), L("Best for", "最適な用途", "အကောင်းဆုံး သုံးမယ့်နေရာ")],
            rows: [
              [L("On-Demand", "オンデマンド（On-Demand）", "On-Demand (လိုသလောက်ငှား)"), L("No commitment, per-second billing (Linux), highest unit price", "コミットなし、秒単位課金（Linux）、単価は最も高い", "Commitment မရှိ၊ စက္ကန့်အလိုက် billing (Linux)၊ unit ဈေး အမြင့်ဆုံး"), L("Short, unpredictable or new workloads", "短期・予測不能・新規のワークロード", "ခဏသုံး၊ ခန့်မှန်းမရ၊ အသစ် workload")],
              [L("Compute Savings Plans", "Compute Savings Plans（全コンピューティング対象）", "Compute Savings Plans (compute အားလုံး)"), L("Commit $/hour for 1 or 3 years; applies across family, size, Region, OS, and also Fargate and Lambda", "1 年または 3 年、1 時間あたりの金額をコミット。ファミリー・サイズ・リージョン・OS をまたいで適用され、Fargate と Lambda にも適用", "၁ နှစ် သို့ ၃ နှစ် တစ်နာရီ $ ပမာဏ commit၊ family၊ size၊ Region၊ OS မရွေး၊ Fargate နဲ့ Lambda ပါ apply"), L("Steady usage that may change shape", "形が変わる可能性のある安定した使用量", "ပုံစံပြောင်းနိုင်ပေမယ့် တည်ငြိမ်တဲ့ usage")],
              [L("EC2 Instance Savings Plans / Standard RI", "EC2 Instance Savings Plans / Standard RI（ファミリー固定）", "EC2 Instance Savings Plans / Standard RI (family ချည်ထား)"), L("Locked to an instance family in a Region; deepest commitment discount (up to about 72%)", "リージョン内のインスタンスファミリーに固定。コミット型で最大の割引（最大約 72%）", "Region တစ်ခုထဲက instance family နဲ့ ချည်ထား၊ commitment discount အများဆုံး (72% ခန့်အထိ)"), L("Known, stable family for years", "数年間ファミリーが変わらない安定ワークロード", "နှစ်နဲ့ချီ family မပြောင်းတဲ့ workload")],
              [L("Convertible RI", "Convertible RI（交換可能）", "Convertible RI (လဲလို့ရ)"), L("Can exchange for other families/OS; smaller discount", "他のファミリー/OS に交換可能、割引は小さめ", "တခြား family/OS နဲ့ လဲလို့ရ၊ discount နည်းနည်း နည်း"), L("Long-term but flexible needs", "長期だが柔軟性が必要", "ကာလရှည်ပေမယ့် flexible လိုတဲ့နေရာ")],
              [L("Spot Instances", "スポットインスタンス（Spot）", "Spot Instances (အပို capacity)"), L("Spare capacity, up to 90% off; AWS can reclaim with a 2-minute warning", "余剰キャパシティ、最大 90% 割引。2 分前の通知で AWS が回収することがある", "AWS ရဲ့ အပိုလွတ် capacity၊ 90% အထိ လျှော့၊ ၂ မိနစ် သတိပေးပြီး ပြန်ယူနိုင်"), L("Fault-tolerant batch, CI, big data, stateless web behind ASG", "耐障害性のあるバッチ、CI、ビッグデータ、ASG 配下のステートレス Web", "Fault-tolerant batch၊ CI၊ big data၊ ASG နောက်က stateless web")],
              [L("Dedicated Host", "Dedicated Host（専有ホスト）", "Dedicated Host (server တစ်လုံးလုံး)"), L("A whole physical server for you; visibility of sockets/cores", "物理サーバー 1 台を専有、ソケット/コアが見える", "Physical server တစ်လုံးလုံး ကိုယ့်အတွက်၊ socket/core ကို မြင်ရ"), L("BYOL per-socket/per-core licenses, strict compliance", "ソケット/コア単位の BYOL ライセンス、厳格なコンプライアンス", "Socket/core အလိုက် BYOL license၊ တင်းကျပ်တဲ့ compliance")],
              [L("Dedicated Instance", "Dedicated Instance（専有インスタンス）", "Dedicated Instance (hardware မမျှ)"), L("Hardware not shared with other accounts, but no host control", "他アカウントとハードウェアを共有しないが、ホストの制御は不可", "တခြား account နဲ့ hardware မမျှ၊ ဒါပေမယ့် host ကို မထိန်းရ"), L("Isolation requirement without licensing needs", "ライセンス要件のない分離要件", "License မလိုဘဲ isolation ပဲလိုတဲ့နေရာ")],
              [L("On-Demand Capacity Reservation", "オンデマンドキャパシティ予約", "On-Demand Capacity Reservation (capacity ကြိုယူ)"), L("Reserves capacity in one AZ, no term; billed whether used or not", "1 つの AZ でキャパシティを確保、期間の縛りなし。使わなくても課金", "AZ တစ်ခုမှာ capacity ကြိုယူ၊ term မရှိ၊ မသုံးလည်း ငွေပေးရ"), L("Guaranteed capacity for an event or DR", "イベントや DR 用の確実なキャパシティ", "Event သို့ DR အတွက် capacity အာမခံ")],
            ] },
          { type: 'callout', tone: 'exam', text: L(
            "Exam patterns: \"can be interrupted / flexible start time\" → **Spot**. \"Steady 24/7 for 1–3 years, may switch to Fargate or other Regions\" → **Compute Savings Plans**. \"Licensing tied to physical cores/sockets\" → **Dedicated Host**. \"Must guarantee capacity in a specific AZ, no long commitment\" → **On-Demand Capacity Reservation** (Savings Plans and regional RIs give a discount, **not** capacity). Never put a database that cannot be interrupted on Spot.",
            "試験パターン：「中断されてもよい / 開始時刻が柔軟」→ **Spot**。「1〜3 年 24 時間 365 日安定、Fargate や他リージョンに変える可能性あり」→ **Compute Savings Plans**。「物理コア/ソケットに紐づくライセンス」→ **Dedicated Host**。「特定 AZ でキャパシティを保証、長期コミットなし」→ **オンデマンドキャパシティ予約**（Savings Plans やリージョナル RI は割引であって、キャパシティの保証**ではありません**）。中断できない DB を Spot に置いてはいけません。",
            "Exam pattern: \"ကြားဖြတ်ခံရလည်း ရ / စတဲ့အချိန် flexible\" → **Spot**။ \"၁–၃ နှစ် 24/7 တည်ငြိမ်၊ Fargate သို့ တခြား Region ပြောင်းနိုင်\" → **Compute Savings Plans**။ \"Physical core/socket နဲ့ ချိတ်တဲ့ license\" → **Dedicated Host**။ \"AZ တစ်ခုမှာ capacity အာမခံရမယ်၊ ကာလရှည် commitment မလို\" → **On-Demand Capacity Reservation** (Savings Plans နဲ့ regional RI က discount ပဲ ပေးတယ်၊ capacity **မဟုတ်ဘူး**)။ ကြားဖြတ်လို့ မရတဲ့ database ကို Spot ပေါ် ဘယ်တော့မှ မတင်ပါနဲ့။"
          ) },
        ],
      },
      {
        id: "placement-groups",
        title: L("Placement groups: controlling where instances physically land", "プレイスメントグループ：インスタンスの物理的な配置を制御する", "Placement group: instance တွေ ရုပ်ပိုင်းဆိုင်ရာ ဘယ်နေရာ ကျမလဲ ထိန်းချုပ်ခြင်း"),
        blocks: [
          { type: 'p', text: L(
            "Normally AWS decides which physical hosts run your instances. A **placement group** lets you influence that, trading off **latency** against **failure isolation**. Imagine seating a team: put them all at one table to talk fast (cluster), give each VIP a separate room so one fire alarm does not affect them all (spread), or split a large team across floors where each floor has its own power (partition).",
            "通常、どの物理ホストでインスタンスを動かすかは AWS が決めます。**プレイスメントグループ**を使うと、**レイテンシー**と**障害の分離**のバランスを調整できます。チームの座席配置で考えると、すぐ話せるよう全員を 1 つのテーブルに座らせる（クラスター）、1 つの火災報知器で全員が影響を受けないよう VIP ごとに別室にする（スプレッド）、大人数のチームをそれぞれ電源が独立したフロアに分ける（パーティション）、というイメージです。",
            "ပုံမှန်ဆို ဘယ် physical host ပေါ်မှာ instance run မလဲ AWS က ဆုံးဖြတ်တယ်။ **Placement group** က **latency** နဲ့ **failure isolation** ကြား ချိန်ညှိခွင့် ပေးတယ်။ Team တစ်ခုကို ထိုင်ခုံချပေးတာနဲ့ ဥပမာပေးမယ် — မြန်မြန်စကားပြောနိုင်အောင် စားပွဲတစ်ခုတည်းမှာ အကုန်ထိုင် (cluster)၊ fire alarm တစ်ခုကြောင့် အကုန်မထိခိုက်အောင် VIP တစ်ယောက်ချင်း အခန်းခွဲ (spread)၊ လူများတဲ့ team ကို မီးသီးခြားရှိတဲ့ ထပ်တွေခွဲထား (partition)။"
          ) },
          { type: 'list', items: [
            L("**Cluster** — instances packed close together in **one AZ** for the lowest latency and highest throughput between nodes. Use for tightly coupled HPC and MPI jobs. Risk: one rack or AZ problem hits everything.",
              "**クラスター** — ノード間の最小レイテンシーと最大スループットのため、インスタンスを **1 つの AZ** 内に密集させます。密結合の HPC や MPI ジョブ向け。リスクは、1 つのラックや AZ の問題がすべてに影響することです。",
              "**Cluster** — node တွေကြား latency အနည်းဆုံး၊ throughput အများဆုံးရဖို့ instance တွေကို **AZ တစ်ခုတည်း** ထဲမှာ နီးနီးကပ်ကပ် ထားတယ်။ Tightly coupled HPC နဲ့ MPI job အတွက်။ Risk: rack သို့ AZ တစ်ခု ပြဿနာဖြစ်ရင် အကုန်ထိတယ်။"),
            L("**Spread** — each instance on **distinct hardware racks**; maximum **7 running instances per AZ** per group (can span AZs). Use for a small number of critical instances, such as a primary and standby.",
              "**スプレッド** — 各インスタンスを**別々のハードウェアラック**に配置します。グループあたり **AZ ごとに最大 7 台**の実行中インスタンス（複数 AZ にまたがれます）。プライマリとスタンバイなど、少数の重要なインスタンス向けです。",
              "**Spread** — instance တစ်ခုချင်းကို **သီးခြား hardware rack** ပေါ် ထားတယ်၊ group တစ်ခုမှာ **AZ တစ်ခုကို run နေတဲ့ instance ၇ ခုအထိ** (AZ ကျော်လို့ရ)။ Primary နဲ့ standby လို အရေးကြီး instance အနည်းငယ်အတွက်။"),
            L("**Partition** — instances divided into logical **partitions** (up to 7 per AZ) that do not share racks; can hold hundreds of instances and exposes the partition number. Use for rack-aware distributed systems: HDFS, HBase, Cassandra, Kafka.",
              "**パーティション** — インスタンスを、ラックを共有しない論理的な**パーティション**（AZ あたり最大 7）に分けます。数百台を収容でき、パーティション番号がインスタンスから見えます。HDFS・HBase・Cassandra・Kafka などのラック認識型分散システム向けです。",
              "**Partition** — instance တွေကို rack မမျှတဲ့ logical **partition** (AZ တစ်ခုကို ၇ ခုအထိ) တွေ ခွဲထားတယ်၊ instance ရာချီ ထည့်လို့ရပြီး partition နံပါတ်ကို instance က သိနိုင်တယ်။ HDFS၊ HBase၊ Cassandra၊ Kafka လို rack-aware distributed system အတွက်။"),
          ] },
          { type: 'callout', tone: 'memory', text: L(
            "**C**luster = **C**lose (speed). **S**pread = **S**eparate (max **7** per AZ, few VIPs). **P**artition = **P**ieces of big clusters (Hadoop, Cassandra, Kafka).",
            "**C**luster = **C**lose（近く＝速さ）。**S**pread = **S**eparate（別々、AZ あたり最大 **7**、少数の VIP）。**P**artition = 大規模クラスターの **P**ieces（Hadoop・Cassandra・Kafka）。",
            "**C**luster = **C**lose (နီးကပ် = မြန်)။ **S**pread = **S**eparate (ခွဲထား၊ AZ တစ်ခု **၇** ခုအထိ၊ VIP အနည်းငယ်)။ **P**artition = cluster ကြီးတွေရဲ့ **P**ieces (Hadoop၊ Cassandra၊ Kafka)။"
          ) },
        ],
      },
      {
        id: "ebs-and-instance-store",
        title: L("Storage: EBS volumes, instance store, snapshots and fixing \"disk full\"", "ストレージ：EBS ボリューム・インスタンスストア・スナップショットと「ディスクフル」の解決", "Storage: EBS volume၊ instance store၊ snapshot နဲ့ \"disk full\" ဖြေရှင်းနည်း"),
        blocks: [
          { type: 'p', text: L(
            "**Amazon EBS (Elastic Block Store)** is a network-attached virtual disk. It lives in **one AZ**, is replicated inside that AZ, **persists after stop**, and can be detached and attached to another instance in the same AZ. **Instance store** is a physical NVMe disk on the host: extremely fast and included in the price, but **ephemeral** — data survives a reboot, but is **lost on stop, hibernate or terminate**, or if the host fails. Use instance store only for caches, buffers, scratch data or replicated data (for example Cassandra nodes).",
            "**Amazon EBS（Elastic Block Store）**はネットワーク接続の仮想ディスクです。**1 つの AZ** に存在し、その AZ 内で複製され、**停止後もデータが残り**、同じ AZ 内の別インスタンスに付け替えられます。**インスタンスストア**はホスト上の物理 NVMe ディスクで、非常に高速で料金に含まれますが、**一時的**です。再起動ではデータが残りますが、**停止・休止・終了**やホスト障害で**失われます**。キャッシュ、バッファー、一時データ、複製済みデータ（Cassandra ノードなど）にのみ使いましょう。",
            "**Amazon EBS (Elastic Block Store)** က network နဲ့ချိတ်ထားတဲ့ virtual disk ပါ။ **AZ တစ်ခုထဲမှာ** ရှိပြီး အဲ့ AZ ထဲမှာ replicate လုပ်ထားတယ်၊ **stop လုပ်ပြီးရင်လည်း data ကျန်တယ်**၊ AZ တူ တခြား instance ကို ဖြုတ်တပ်လို့ရတယ်။ **Instance store** က host ပေါ်က physical NVMe disk ပါ — အရမ်းမြန်ပြီး ဈေးထဲ ပါပြီးသား၊ ဒါပေမယ့် **ephemeral (ယာယီ)** ပါ — reboot ဆိုရင် data ကျန်ပေမယ့် **stop၊ hibernate၊ terminate** လုပ်ရင် ဒါမှမဟုတ် host ပျက်ရင် **ပျောက်တယ်**။ Cache၊ buffer၊ scratch data၊ တခြားနေရာမှာ copy ရှိပြီးသား data (ဥပမာ Cassandra node) အတွက်ပဲ သုံးပါ။"
          ) },
          { type: 'table',
            head: [L("Volume type", "ボリュームタイプ", "Volume အမျိုးအစား"), L("Media / performance", "メディア / 性能", "Media / မြန်နှုန်း"), L("Use when", "使う場面", "ဘယ်အချိန် သုံးမလဲ"), L("Boot volume?", "ブート可能？", "Boot volume ဖြစ်လား?")],
            rows: [
              [L("gp3 (General Purpose SSD)", "gp3（汎用 SSD）", "gp3 (အထွေထွေသုံး SSD)"), L("SSD; baseline 3,000 IOPS and 125 MiB/s at any size; IOPS and throughput provisioned independently of size", "SSD。サイズに関係なくベースライン 3,000 IOPS・125 MiB/s。IOPS とスループットをサイズと独立して設定可能", "SSD၊ size မရွေး baseline 3,000 IOPS နဲ့ 125 MiB/s၊ IOPS နဲ့ throughput ကို size နဲ့ သီးခြား သတ်မှတ်လို့ရ"), L("Default for almost everything: boot disks, web apps, dev/test, most databases", "ほぼすべての既定：ブートディスク、Web アプリ、開発/テスト、多くの DB", "အများစုအတွက် default: boot disk၊ web app၊ dev/test၊ database အများစု"), L("Yes", "はい", "ဖြစ်တယ်")],
              [L("gp2 (older)", "gp2（旧世代）", "gp2 (အဟောင်း)"), L("SSD; IOPS tied to size (3 IOPS/GiB) with burst", "SSD。IOPS がサイズに比例（3 IOPS/GiB）、バーストあり", "SSD၊ IOPS က size နဲ့ချိတ် (3 IOPS/GiB)၊ burst ရှိ"), L("Legacy; migrate to gp3, usually cheaper per GiB", "レガシー。gp3 への移行が推奨で、通常 GiB 単価も安い", "Legacy ဖြစ်လို့ gp3 ကို ပြောင်း၊ GiB ဈေးလည်း ပိုသက်သာလေ့ရှိ"), L("Yes", "はい", "ဖြစ်တယ်")],
              [L("io2 Block Express", "io2 Block Express（プロビジョンド IOPS）", "io2 Block Express (IOPS အမြင့်ဆုံး)"), L("Provisioned IOPS SSD; highest IOPS, sub-millisecond latency, 99.999% durability, Multi-Attach", "プロビジョンド IOPS SSD。最高 IOPS、ミリ秒未満のレイテンシー、99.999% の耐久性、Multi-Attach", "Provisioned IOPS SSD၊ IOPS အမြင့်ဆုံး၊ millisecond အောက် latency၊ 99.999% durability၊ Multi-Attach"), L("Mission-critical databases (Oracle, SAP HANA, large SQL Server)", "ミッションクリティカルな DB（Oracle、SAP HANA、大規模 SQL Server）", "Mission-critical database (Oracle၊ SAP HANA၊ SQL Server ကြီး)"), L("Yes", "はい", "ဖြစ်တယ်")],
              [L("st1 (Throughput Optimized HDD)", "st1（スループット最適化 HDD）", "st1 (throughput အတွက် HDD)"), L("HDD; high sequential MB/s, low cost", "HDD。シーケンシャル MB/s が高く低コスト", "HDD၊ sequential MB/s မြင့်၊ ဈေးနည်း"), L("Big data, log processing, data warehouses", "ビッグデータ、ログ処理、データウェアハウス", "Big data၊ log processing၊ data warehouse"), L("No", "いいえ", "မဖြစ်ဘူး")],
              [L("sc1 (Cold HDD)", "sc1（コールド HDD）", "sc1 (cold data အတွက် HDD)"), L("HDD; lowest cost per GiB, lowest performance", "HDD。GiB 単価が最も安く、性能も最も低い", "HDD၊ GiB ဈေး အနည်းဆုံး၊ performance အနိမ့်ဆုံး"), L("Rarely accessed data", "ほとんどアクセスしないデータ", "ခဏခဏ မသုံးတဲ့ data"), L("No", "いいえ", "မဖြစ်ဘူး")],
            ] },
          { type: 'p', text: L(
            "**Snapshots** are point-in-time, **incremental** backups of a volume stored by AWS in S3 at Region level. Because they are regional, a snapshot is how you move a volume to **another AZ** (restore from snapshot there) or another Region (copy the snapshot). Automate them with **Amazon Data Lifecycle Manager** or **AWS Backup**; protect against accidental deletion with **Recycle Bin**; turn on **EBS encryption by default** per Region (KMS) so every new volume and its snapshots are encrypted. **Elastic Volumes** let you increase size, change type (gp2 → gp3) or raise IOPS **while the volume is in use** — but you can **never shrink** a volume, and after a change you must wait (about 6 hours) before modifying the same volume again.",
            "**スナップショット**はボリュームのある時点の**増分**バックアップで、AWS がリージョンレベルで S3 に保存します。リージョン単位なので、ボリュームを**別の AZ** に移す（そこでスナップショットから復元する）方法や、別リージョンに移す（スナップショットをコピーする）方法になります。**Amazon Data Lifecycle Manager** や **AWS Backup** で自動化し、**ごみ箱（Recycle Bin）**で誤削除から保護し、リージョンごとに **EBS のデフォルト暗号化**（KMS）を有効にすれば、新しいボリュームとそのスナップショットはすべて暗号化されます。**Elastic Volumes** を使うと、**使用中のまま**サイズ拡張、タイプ変更（gp2 → gp3）、IOPS の引き上げができます。ただしボリュームを**縮小することはできず**、変更後に同じボリュームを再度変更するには一定時間（約 6 時間）待つ必要があります。",
            "**Snapshot** ဆိုတာ volume ရဲ့ အချိန်တစ်ခုက **incremental** backup ဖြစ်ပြီး AWS က Region level မှာ S3 ထဲ သိမ်းထားတယ်။ Region အလိုက်ဖြစ်လို့ volume ကို **တခြား AZ** ကို ရွှေ့ချင်ရင် (အဲ့မှာ snapshot ကနေ restore) ဒါမှမဟုတ် တခြား Region ကို ရွှေ့ချင်ရင် (snapshot ကို copy) snapshot နဲ့ပဲ လုပ်ရတယ်။ **Amazon Data Lifecycle Manager** သို့ **AWS Backup** နဲ့ automate လုပ်၊ မတော်တဆ ဖျက်မိတာကို **Recycle Bin** နဲ့ ကာကွယ်၊ Region တစ်ခုချင်းမှာ **EBS encryption by default** (KMS) ဖွင့်ထားရင် volume အသစ်နဲ့ snapshot အားလုံး encrypt ဖြစ်တယ်။ **Elastic Volumes** နဲ့ volume **သုံးနေရင်းမှာပဲ** size တိုး၊ type ပြောင်း (gp2 → gp3)၊ IOPS မြှင့်လို့ရတယ် — ဒါပေမယ့် volume ကို **ဘယ်တော့မှ ချုံ့လို့ မရဘူး**၊ ပြောင်းပြီးရင် အဲ့ volume ကို ထပ်ပြောင်းဖို့ (၆ နာရီခန့်) စောင့်ရတယ်။"
          ) },
          { type: 'code', lang: 'bash', code: `# 1) Snapshot first (safety net), then grow the 8 GiB root volume to 30 GiB
aws ec2 create-snapshot --volume-id vol-0abc123def4567890 \\
  --description "before-resize"
aws ec2 modify-volume --volume-id vol-0abc123def4567890 \\
  --size 30 --volume-type gp3
aws ec2 describe-volumes-modifications \\
  --volume-ids vol-0abc123def4567890   # wait for optimizing/completed

# 2) Inside the instance: grow the partition, then the file system
lsblk                          # nvme0n1 30G, but nvme0n1p1 still 8G
sudo growpart /dev/nvme0n1 1   # extend partition 1
df -hT /                       # check the file system type
sudo xfs_growfs -d /           # XFS (Amazon Linux 2023 default)
# sudo resize2fs /dev/nvme0n1p1  # ext4 (e.g. Ubuntu)
df -h /                        # now ~30G, no reboot needed`,
            caption: L("The real fix for your \"No space left on device\" error: no stop, no new instance.", "「No space left on device」エラーの本当の解決策：停止も新しいインスタンスも不要です。", "\"No space left on device\" error ရဲ့ တကယ့်ဖြေရှင်းနည်း: stop မလို၊ instance အသစ် မလို။") },
          { type: 'steps', items: [
            L("Lab — find what filled the disk: run `df -h` and `sudo du -xh / --max-depth=2 | sort -h | tail` (often logs in `/var/log`, Docker images in `/var/lib/docker`, or the package cache).",
              "ラボ — ディスクを埋めた原因を探す：`df -h` と `sudo du -xh / --max-depth=2 | sort -h | tail` を実行します（`/var/log` のログ、`/var/lib/docker` の Docker イメージ、パッケージキャッシュが原因であることが多いです）。",
              "Lab — disk ကို ဘာက ပြည့်စေလဲ ရှာ: `df -h` နဲ့ `sudo du -xh / --max-depth=2 | sort -h | tail` ကို run ပါ (`/var/log` က log၊ `/var/lib/docker` က Docker image၊ package cache တွေက အဖြစ်များတယ်)။"),
            L("Free quick space if needed: `sudo journalctl --vacuum-size=200M`, `docker system prune -a`, `sudo dnf clean all`.",
              "必要なら素早く空きを作ります：`sudo journalctl --vacuum-size=200M`、`docker system prune -a`、`sudo dnf clean all`。",
              "လိုရင် နေရာ အမြန်လွတ်အောင်: `sudo journalctl --vacuum-size=200M`၊ `docker system prune -a`၊ `sudo dnf clean all`။"),
            L("In the console: EC2 → Volumes → select the root volume → **Create snapshot**, then **Modify volume** → size 30 GiB, type gp3.",
              "コンソールで：EC2 → ボリューム → ルートボリュームを選択 → **スナップショットを作成**し、次に**ボリュームを変更** → サイズ 30 GiB、タイプ gp3。",
              "Console မှာ: EC2 → Volumes → root volume ကို ရွေး → **Create snapshot** လုပ်ပြီး **Modify volume** → size 30 GiB၊ type gp3။"),
            L("When the state shows **optimizing**, run `growpart` and `xfs_growfs` (or `resize2fs`) as in the code above, and confirm with `df -h`.",
              "状態が **optimizing** になったら、上のコードのとおり `growpart` と `xfs_growfs`（または `resize2fs`）を実行し、`df -h` で確認します。",
              "State က **optimizing** ပြရင် အပေါ်က code အတိုင်း `growpart` နဲ့ `xfs_growfs` (သို့ `resize2fs`) run ပြီး `df -h` နဲ့ စစ်ပါ။"),
            L("Prevent it next time: create a CloudWatch alarm on disk usage (the CloudWatch agent publishes `disk_used_percent`) and ship logs to CloudWatch Logs with rotation.",
              "再発防止：ディスク使用率の CloudWatch アラームを作成し（CloudWatch エージェントが `disk_used_percent` を送信）、ローテーション付きでログを CloudWatch Logs に送ります。",
              "နောက်တစ်ခါ မဖြစ်အောင်: disk usage အတွက် CloudWatch alarm လုပ် (CloudWatch agent က `disk_used_percent` ပို့ပေးတယ်)၊ log တွေကို rotation နဲ့ CloudWatch Logs ကို ပို့ပါ။"),
          ] },
          { type: 'callout', tone: 'warn', text: L(
            "Changing to a bigger instance type (`t3.micro` → `t3.small`) adds CPU and RAM, **not disk**. Disk size belongs to the EBS volume. Also remember: by default the root volume is **deleted on termination** (`DeleteOnTermination=true`), while extra data volumes are kept.",
            "より大きなインスタンスタイプ（`t3.micro` → `t3.small`）に変えても増えるのは CPU と RAM で、**ディスクは増えません**。ディスクサイズは EBS ボリュームの設定です。また、既定ではルートボリュームは**終了時に削除**され（`DeleteOnTermination=true`）、追加のデータボリュームは残ります。",
            "Instance type ကြီးကြီး (`t3.micro` → `t3.small`) ပြောင်းရင် CPU နဲ့ RAM ပဲ တိုးတယ်၊ **disk မတိုးဘူး**။ Disk size က EBS volume ရဲ့ setting ပါ။ ပြီးတော့ default အရ root volume က **terminate လုပ်ရင် ပျက်တယ်** (`DeleteOnTermination=true`)၊ ထပ်တပ်ထားတဲ့ data volume တွေကတော့ ကျန်တယ်။"
          ) },
        ],
      },
      {
        id: "elastic-ip",
        title: L("Elastic IP, public IPv4 cost and the EC2 network interface", "Elastic IP・パブリック IPv4 の料金と EC2 のネットワークインターフェイス", "Elastic IP၊ public IPv4 ကုန်ကျစရိတ်နဲ့ EC2 network interface"),
        blocks: [
          { type: 'p', text: L(
            "Every instance has an **ENI (elastic network interface)** with a private IP that stays for its lifetime, and security groups attach to that ENI. An auto-assigned **public IPv4 changes every time you stop and start** the instance. An **Elastic IP (EIP)** is a static public IPv4 address that belongs to your account in one Region until you release it, and you can remap it to another instance in seconds — a simple way to fail over a single server.",
            "すべてのインスタンスには **ENI（Elastic Network Interface）**があり、その存続期間中変わらないプライベート IP を持ち、セキュリティグループは ENI にアタッチされます。自動割り当ての**パブリック IPv4 は停止・起動のたびに変わります**。**Elastic IP（EIP）**は、解放するまで 1 つのリージョンでアカウントに属する静的なパブリック IPv4 アドレスで、数秒で別のインスタンスに付け替えられるため、単一サーバーのフェイルオーバーを簡単に実現できます。",
            "Instance တိုင်းမှာ **ENI (elastic network interface)** ရှိပြီး instance ရှိနေသရွေ့ မပြောင်းတဲ့ private IP ရှိတယ်၊ security group တွေက ENI ကို တပ်တာပါ။ Auto-assign လုပ်တဲ့ **public IPv4 က stop/start လုပ်တိုင်း ပြောင်းတယ်**။ **Elastic IP (EIP)** က release မလုပ်မချင်း Region တစ်ခုထဲမှာ ကိုယ့် account ပိုင်တဲ့ static public IPv4 ဖြစ်ပြီး စက္ကန့်ပိုင်းအတွင်း တခြား instance ကို ပြောင်းတပ်လို့ရတယ် — server တစ်လုံးတည်းအတွက် failover လုပ်ဖို့ လွယ်တဲ့နည်းပါ။"
          ) },
          { type: 'callout', tone: 'warn', text: L(
            "Since **1 February 2024** AWS charges an hourly fee for **every public IPv4 address** — Elastic IPs (attached or idle), auto-assigned public IPs, and those used by NAT gateways and load balancers. Release EIPs you do not need, avoid public IPs on instances behind a load balancer, and use Session Manager instead of a public IP just for SSH.",
            "**2024 年 2 月 1 日**以降、AWS は**すべてのパブリック IPv4 アドレス**に時間単位の料金を課金しています。Elastic IP（アタッチ中もアイドルも）、自動割り当てのパブリック IP、NAT ゲートウェイやロードバランサーが使う IP も対象です。不要な EIP は解放し、ロードバランサー配下のインスタンスにはパブリック IP を付けず、SSH のためだけのパブリック IP の代わりに Session Manager を使いましょう。",
            "**2024 ဖေဖော်ဝါရီ ၁ ရက်** ကစပြီး AWS က **public IPv4 address တိုင်း** ကို တစ်နာရီချင်း charge ယူတယ် — Elastic IP (တပ်ထားထား၊ အလွတ်ဖြစ်ဖြစ်)၊ auto-assign public IP၊ NAT gateway နဲ့ load balancer သုံးတဲ့ IP တွေပါ ပါတယ်။ မလိုတဲ့ EIP ကို release လုပ်၊ load balancer နောက်က instance တွေမှာ public IP မထည့်နဲ့၊ SSH အတွက်ပဲ public IP ထားမယ့်အစား Session Manager သုံးပါ။"
          ) },
          { type: 'diagram', text: `  AMI (OS + app)  --launch-->  +---------------------------+
                               |  EC2 instance (t3.micro)  |
  User data (first boot) ----> |  IMDSv2 169.254.169.254   |
                               +-----+---------------+-----+
                                     |               |
                    ENI: private IP 10.0.1.25   EBS root volume
                    + public IP or Elastic IP   gp3, same AZ
                    + Security Group(s)              |
                                                 Snapshot
                                            (regional, in S3)`,
            caption: L("The building blocks of one EC2 instance and where each setting lives.", "1 台の EC2 インスタンスを構成する要素と、それぞれの設定の場所。", "EC2 instance တစ်လုံးရဲ့ အစိတ်အပိုင်းတွေနဲ့ setting တစ်ခုချင်း ဘယ်မှာ ရှိလဲ။") },
        ],
      },
      {
        id: "auto-scaling",
        title: L("EC2 Auto Scaling: the right number of instances, automatically", "EC2 Auto Scaling：適切な台数を自動で維持する", "EC2 Auto Scaling: instance အရေအတွက် မှန်မှန်ကို အလိုအလျောက်"),
        blocks: [
          { type: 'p', text: L(
            "An **Auto Scaling group (ASG)** keeps a fleet between **minimum** and **maximum** sizes and tries to match the **desired capacity**. It gives you two things: **elasticity** (add instances at peak, remove them at night to save money) and **self-healing** (replace instances that fail health checks). Like a convenience store manager who calls in extra staff when the queue grows and sends them home when it is quiet, and immediately replaces anyone who calls in sick. The ASG uses a **launch template** that defines AMI, instance type, key pair, security groups, IAM role and user data (launch configurations are legacy). It spreads instances evenly across the AZs of its subnets.",
            "**Auto Scaling グループ（ASG）**は、フリートを**最小**と**最大**の間に保ち、**希望するキャパシティ（desired）**に合わせようとします。得られるのは **弾力性**（ピーク時に追加し、夜間に削減してコストを節約）と**自己修復**（ヘルスチェックに失敗したインスタンスを置き換え）の 2 つです。行列が長くなれば応援スタッフを呼び、空いたら帰し、病欠が出たらすぐ代わりを入れるコンビニの店長のようなものです。ASG は AMI・インスタンスタイプ・キーペア・セキュリティグループ・IAM ロール・ユーザーデータを定義した**起動テンプレート**を使います（起動設定はレガシーです）。インスタンスはサブネットの AZ に均等に分散されます。",
            "**Auto Scaling group (ASG)** က fleet ကို **minimum** နဲ့ **maximum** ကြားမှာ ထိန်းပြီး **desired capacity** နဲ့ ကိုက်အောင် ကြိုးစားတယ်။ အကျိုး နှစ်ခုရတယ် — **elasticity** (peak မှာ instance တိုး၊ ညဘက် လျှော့ပြီး ငွေချွေ) နဲ့ **self-healing** (health check မအောင်တဲ့ instance ကို အစားထိုး)။ Queue ရှည်လာရင် ဝန်ထမ်းထပ်ခေါ်၊ လူနည်းရင် ပြန်လွှတ်၊ ဖျားလို့ မလာနိုင်တဲ့သူကို ချက်ချင်း အစားထိုးတဲ့ convenience store manager နဲ့ တူတယ်။ ASG က AMI၊ instance type၊ key pair၊ security group၊ IAM role၊ user data သတ်မှတ်ထားတဲ့ **launch template** ကို သုံးတယ် (launch configuration က legacy ပါ)။ Subnet တွေရဲ့ AZ တွေမှာ instance တွေကို ညီညီမျှမျှ ခွဲထားတယ်။"
          ) },
          { type: 'list', items: [
            L("**Target tracking** — keep a metric at a target, like a thermostat: average CPU at 50% or `ALBRequestCountPerTarget` at 1,000. The simplest and usually the best default.",
              "**ターゲット追跡** — サーモスタットのようにメトリクスを目標値に保ちます（平均 CPU 50%、`ALBRequestCountPerTarget` 1,000 など）。最もシンプルで、通常は最適な既定の選択です。",
              "**Target tracking** — thermostat လို metric ကို target မှာ ထိန်းတယ်: ပျမ်းမျှ CPU 50% သို့ `ALBRequestCountPerTarget` 1,000။ အလွယ်ဆုံးဖြစ်ပြီး ပုံမှန်အားဖြင့် အကောင်းဆုံး default ပါ။"),
            L("**Step scaling** — add or remove different amounts depending on how far a CloudWatch alarm is breached (CPU > 70% add 2, > 90% add 4).",
              "**ステップスケーリング** — CloudWatch アラームの超過幅に応じて増減数を変えます（CPU > 70% で 2 台追加、> 90% で 4 台追加）。",
              "**Step scaling** — CloudWatch alarm ကို ဘယ်လောက်ကျော်လဲ ပေါ်မူတည်ပြီး တိုး/လျှော့ အရေအတွက် ကွာတယ် (CPU > 70% ဆို ၂ လုံးတိုး၊ > 90% ဆို ၄ လုံးတိုး)။"),
            L("**Scheduled scaling** — known patterns: set desired to 10 every weekday at 08:45 JST before office hours.",
              "**スケジュールされたスケーリング** — 既知のパターン向け：平日の毎朝 8:45（JST）、始業前に desired を 10 にします。",
              "**Scheduled scaling** — သိပြီးသား pattern အတွက်: ရုံးချိန်မတိုင်ခင် ကြားရက်တိုင်း 08:45 JST မှာ desired ကို 10 ထား။"),
            L("**Predictive scaling** — uses machine learning on past traffic to scale out ahead of daily or weekly cycles.",
              "**予測スケーリング** — 過去のトラフィックを機械学習で分析し、日次・週次のサイクルに先回りしてスケールアウトします。",
              "**Predictive scaling** — အရင် traffic ကို machine learning နဲ့ ခွဲခြမ်းပြီး နေ့စဉ်/အပတ်စဉ် cycle မတိုင်ခင် ကြိုတိုးတယ်။"),
            L("**Health checks** — by default EC2 status checks only. Enable **ELB health checks** so an instance whose app returns errors is replaced too; set a **health check grace period** so new instances have time to boot.",
              "**ヘルスチェック** — 既定では EC2 ステータスチェックのみです。**ELB ヘルスチェック**を有効にすると、アプリがエラーを返すインスタンスも置き換えられます。新しいインスタンスが起動する時間を確保するため**ヘルスチェックの猶予期間**を設定します。",
              "**Health check** — default မှာ EC2 status check ပဲ။ App က error ပြန်နေတဲ့ instance ကိုပါ အစားထိုးအောင် **ELB health check** ဖွင့်ပါ၊ instance အသစ် boot ဖို့ အချိန်ရအောင် **health check grace period** သတ်မှတ်ပါ။"),
          ] },
          { type: 'code', lang: 'bash', code: `# Create an ASG across two AZ subnets, attached to an ALB target group
aws autoscaling create-auto-scaling-group \\
  --auto-scaling-group-name web-asg \\
  --launch-template LaunchTemplateName=web-lt,Version='$Latest' \\
  --min-size 2 --desired-capacity 2 --max-size 8 \\
  --vpc-zone-identifier "subnet-0aaa1111,subnet-0bbb2222" \\
  --target-group-arns arn:aws:elasticloadbalancing:ap-northeast-1:111122223333:targetgroup/web-tg/0123456789abcdef \\
  --health-check-type ELB --health-check-grace-period 120

# Target tracking: keep average CPU around 50%
aws autoscaling put-scaling-policy \\
  --auto-scaling-group-name web-asg \\
  --policy-name cpu50 --policy-type TargetTrackingScaling \\
  --target-tracking-configuration '{"PredefinedMetricSpecification":{"PredefinedMetricType":"ASGAverageCPUUtilization"},"TargetValue":50.0}'`,
            caption: L("ASG with ELB health checks and a target tracking policy.", "ELB ヘルスチェックとターゲット追跡ポリシーを設定した ASG。", "ELB health check နဲ့ target tracking policy ပါတဲ့ ASG။") },
          { type: 'callout', tone: 'exam', text: L(
            "\"The app returns HTTP 500 but Auto Scaling never replaces the instance\" → the ASG is using only **EC2** health checks; switch to **ELB** health checks. \"Instances are terminated before they finish booting\" → increase the **health check grace period**. ASGs are free; you pay only for the instances and other resources.",
            "「アプリが HTTP 500 を返すのに Auto Scaling がインスタンスを置き換えない」→ ASG が **EC2** ヘルスチェックのみを使っているので、**ELB** ヘルスチェックに切り替えます。「起動が終わる前にインスタンスが終了される」→ **ヘルスチェックの猶予期間**を延ばします。ASG 自体は無料で、インスタンスなどのリソース分だけ支払います。",
            "\"App က HTTP 500 ပြန်နေပေမယ့် Auto Scaling က instance ကို ဘယ်တော့မှ မလဲဘူး\" → ASG က **EC2** health check ပဲ သုံးနေလို့ **ELB** health check ကို ပြောင်းပါ။ \"Boot မပြီးခင် instance တွေ terminate ခံရတယ်\" → **health check grace period** တိုးပါ။ ASG ကိုယ်တိုင်က အခမဲ့ပါ၊ instance နဲ့ တခြား resource အတွက်ပဲ ပေးရတယ်။"
          ) },
        ],
      },
      {
        id: "load-balancing",
        title: L("Elastic Load Balancing: ALB, NLB and GWLB", "Elastic Load Balancing：ALB・NLB・GWLB", "Elastic Load Balancing: ALB၊ NLB နဲ့ GWLB"),
        blocks: [
          { type: 'p', text: L(
            "A load balancer is the single front door for many instances: it spreads traffic, checks target health and stops sending to unhealthy ones, terminates TLS with a free **ACM** certificate, and lets the ASG add or remove instances without clients noticing. Traffic goes to **target groups** (instances, IP addresses, Lambda functions or another ALB). Choose by **OSI layer**.",
            "ロードバランサーは多数のインスタンスへの唯一の玄関口です。トラフィックを分散し、ターゲットのヘルスをチェックして異常なものには送らず、無料の **ACM** 証明書で TLS を終端し、クライアントに気づかれずに ASG がインスタンスを増減できるようにします。トラフィックは**ターゲットグループ**（インスタンス、IP アドレス、Lambda 関数、別の ALB）に送られます。**OSI レイヤー**で選びましょう。",
            "Load balancer က instance အများကြီးအတွက် တံခါးဝ တစ်ခုတည်းပါ — traffic ခွဲပေး၊ target health စစ်ပြီး unhealthy ဖြစ်တာကို မပို့တော့၊ အခမဲ့ **ACM** certificate နဲ့ TLS ကို terminate လုပ်၊ client တွေ မသိလိုက်ဘဲ ASG က instance တိုး/လျှော့ လုပ်နိုင်အောင် ကူညီတယ်။ Traffic က **target group** (instance၊ IP address၊ Lambda function၊ တခြား ALB) ဆီ သွားတယ်။ **OSI layer** နဲ့ ရွေးပါ။"
          ) },
          { type: 'table',
            head: [L("Feature", "機能", "Feature (လုပ်ဆောင်ချက်)"), L("Application LB (ALB)", "アプリケーション LB（ALB）", "ALB (Application ဆိုင်ရာ LB)"), L("Network LB (NLB)", "ネットワーク LB（NLB）", "NLB (Network ဆိုင်ရာ LB)"), L("Gateway LB (GWLB)", "ゲートウェイ LB（GWLB）", "GWLB (Gateway ဆိုင်ရာ LB)")],
            rows: [
              [L("Layer / protocols", "レイヤー / プロトコル", "Layer / protocol (အလွှာ)"), L("L7: HTTP, HTTPS, gRPC, WebSocket", "L7（アプリ層）：HTTP、HTTPS、gRPC、WebSocket", "L7: HTTP၊ HTTPS၊ gRPC၊ WebSocket"), L("L4: TCP, UDP, TLS", "L4（トランスポート層）：TCP、UDP、TLS", "L4: TCP၊ UDP၊ TLS"), L("L3: IP packets via GENEVE (port 6081)", "L3：GENEVE（ポート 6081）による IP パケット", "L3: GENEVE (port 6081) နဲ့ IP packet")],
              [L("Routing", "ルーティング", "Routing (လမ်းကြောင်းခွဲ)"), L("Path, host, header, query string, method rules; redirects and fixed responses", "パス・ホスト・ヘッダー・クエリ文字列・メソッドのルール、リダイレクト、固定レスポンス", "Path၊ host၊ header၊ query string၊ method rule၊ redirect၊ fixed response"), L("By port/protocol; ultra-low latency, millions of requests per second", "ポート/プロトコル単位。超低レイテンシー、毎秒数百万リクエスト", "Port/protocol အလိုက်၊ latency အရမ်းနည်း၊ တစ်စက္ကန့် request သန်းချီ"), L("Sends all traffic through a fleet of virtual appliances", "すべてのトラフィックを仮想アプライアンス群に通す", "Traffic အားလုံးကို virtual appliance fleet ကို ဖြတ်စေ")],
              [L("IP addresses", "IP アドレス", "IP address (လိပ်စာ)"), L("DNS name only (IPs change)", "DNS 名のみ（IP は変わる）", "DNS name ပဲ (IP ပြောင်းတယ်)"), L("One static IP per AZ, can use Elastic IPs", "AZ ごとに 1 つの静的 IP、Elastic IP も使用可", "AZ တစ်ခုကို static IP တစ်ခု၊ Elastic IP သုံးလို့ရ"), L("Used as a route-table target via GWLB endpoints", "GWLB エンドポイント経由でルートテーブルのターゲットとして使用", "GWLB endpoint ကနေ route table target အဖြစ် သုံး")],
              [L("Typical use", "代表的な用途", "သုံးလေ့ရှိတဲ့ နေရာ"), L("Websites, microservices, containers, Lambda backends", "Web サイト、マイクロサービス、コンテナ、Lambda バックエンド", "Website၊ microservice၊ container၊ Lambda backend"), L("Gaming, IoT, financial trading, static IP allow-listing, PrivateLink", "ゲーム、IoT、金融取引、静的 IP の許可リスト、PrivateLink", "Gaming၊ IoT၊ financial trading၊ static IP allow-list၊ PrivateLink"), L("Third-party firewalls, IDS/IPS, deep packet inspection", "サードパーティーのファイアウォール、IDS/IPS、ディープパケットインスペクション", "Third-party firewall၊ IDS/IPS၊ deep packet inspection")],
              [L("Cross-zone load balancing", "クロスゾーン負荷分散", "Cross-zone load balancing (AZ ကျော် ခွဲဝေ)"), L("On by default, no inter-AZ data charge", "既定で有効、AZ 間データ転送料なし", "Default ဖွင့်ထား၊ AZ ကြား data charge မရှိ"), L("Off by default; inter-AZ data charges apply if enabled", "既定で無効。有効にすると AZ 間データ転送料が発生", "Default ပိတ်ထား၊ ဖွင့်ရင် AZ ကြား data charge ရှိ"), L("Off by default", "既定で無効", "Default ပိတ်ထား")],
            ] },
          { type: 'diagram', text: `                    Users (Internet)
                           |
                 +---------v----------+
                 |  ALB  (HTTPS 443)  |  public subnets, 2 AZs
                 +----+----------+----+
                      |          |      health checks /health
        +-------------v---+  +---v-------------+
        | AZ ap-ne-1a     |  | AZ ap-ne-1c     |
        | [EC2]  [EC2]    |  | [EC2]  [EC2]    |  private subnets
        +-----------------+  +-----------------+
        \\____ Auto Scaling group: min 2 / desired 4 / max 8 ____/`,
            caption: L("The classic highly available web tier: one ALB, one ASG, two Availability Zones.", "典型的な高可用性 Web 層：1 つの ALB、1 つの ASG、2 つのアベイラビリティーゾーン。", "Highly available web tier ရဲ့ ပုံမှန်ပုံစံ: ALB တစ်ခု၊ ASG တစ်ခု၊ Availability Zone နှစ်ခု။") },
          { type: 'p', text: L(
            "**Sticky sessions** (session affinity) bind a user to the same target using a cookie (`AWSALB` duration-based or your own application cookie) — useful for legacy apps that keep session state in memory, but it can unbalance load; storing sessions in ElastiCache or DynamoDB is better. **Deregistration delay** (connection draining, default 300 s) lets in-flight requests finish before a target is removed. The ALB adds `X-Forwarded-For` so your app can see the client IP, while the NLB preserves the source IP directly.",
            "**スティッキーセッション**（セッションアフィニティ）は、Cookie（期間ベースの `AWSALB` または独自のアプリ Cookie）でユーザーを同じターゲットに結び付けます。セッション状態をメモリに保持するレガシーアプリに便利ですが、負荷が偏る可能性があるため、ElastiCache や DynamoDB にセッションを保存するほうが良い設計です。**登録解除の遅延**（Connection Draining、既定 300 秒）により、ターゲットを外す前に処理中のリクエストを完了させます。ALB は `X-Forwarded-For` を付加するのでアプリはクライアント IP を確認でき、NLB は送信元 IP をそのまま保持します。",
            "**Sticky session** (session affinity) က cookie (`AWSALB` duration-based သို့ ကိုယ့် application cookie) နဲ့ user ကို target တစ်ခုတည်းနဲ့ ချည်ထားတယ် — session state ကို memory ထဲ သိမ်းတဲ့ legacy app အတွက် အသုံးဝင်ပေမယ့် load မညီဖြစ်နိုင်လို့ session ကို ElastiCache သို့ DynamoDB မှာ သိမ်းတာ ပိုကောင်းတယ်။ **Deregistration delay** (connection draining၊ default 300 s) က target ကို မဖြုတ်ခင် လုပ်နေဆဲ request တွေ ပြီးအောင် စောင့်ပေးတယ်။ ALB က `X-Forwarded-For` ထည့်ပေးလို့ app က client IP ကို မြင်ရပြီး NLB ကတော့ source IP ကို တိုက်ရိုက် ထိန်းထားတယ်။"
          ) },
          { type: 'callout', tone: 'memory', text: L(
            "**A**LB = **A**pplication (URLs, paths, hosts — L7). **N**LB = **N**umbers (static IPs, TCP/UDP, speed — L4). **G**WLB = **G**uards (firewall appliances — L3). Need a static IP in front of an ALB? Put **Global Accelerator** or an NLB in front of it.",
            "**A**LB = **A**pplication（URL・パス・ホスト、L7）。**N**LB = **N**umbers（静的 IP・TCP/UDP・速度、L4）。**G**WLB = **G**uards（ファイアウォールアプライアンス、L3）。ALB の前に静的 IP が必要？ → **Global Accelerator** か NLB を前段に置きます。",
            "**A**LB = **A**pplication (URL၊ path၊ host — L7)။ **N**LB = **N**umbers (static IP၊ TCP/UDP၊ မြန်နှုန်း — L4)။ **G**WLB = **G**uards (firewall appliance — L3)။ ALB ရှေ့မှာ static IP လိုလား? **Global Accelerator** သို့ NLB ကို ရှေ့က ထားပါ။"
          ) },
        ],
      },
      {
        id: "serverless-containers",
        title: L("Serverless and containers: Lambda, ECS, Fargate, EKS, ECR, App Runner", "サーバーレスとコンテナ：Lambda・ECS・Fargate・EKS・ECR・App Runner", "Serverless နဲ့ container: Lambda၊ ECS၊ Fargate၊ EKS၊ ECR၊ App Runner"),
        blocks: [
          { type: 'p', text: L(
            "**AWS Lambda** runs your function code in response to events, and you pay per request and per millisecond of compute — zero cost when idle. Key limits to memorize: **maximum 15 minutes** per invocation, memory **128 MB to 10,240 MB** (CPU scales with memory), `/tmp` up to 10 GB, deployment as a zip or a container image up to 10 GB. Triggers include API Gateway, ALB, function URLs, S3 events, SQS, SNS, EventBridge (including schedules), DynamoDB Streams and Kinesis. **Concurrency** is the number of executions running at once; the default Regional quota is 1,000 (can be raised). **Reserved concurrency** guarantees and caps a function, and **provisioned concurrency** keeps environments warm to remove cold starts.",
            "**AWS Lambda** はイベントに応じて関数コードを実行し、リクエスト数とミリ秒単位の計算時間に対して課金されるため、アイドル時のコストはゼロです。覚えるべき制限：1 回の呼び出しは**最大 15 分**、メモリは **128 MB〜10,240 MB**（CPU はメモリに比例）、`/tmp` は最大 10 GB、デプロイは zip または最大 10 GB のコンテナイメージ。トリガーには API Gateway、ALB、関数 URL、S3 イベント、SQS、SNS、EventBridge（スケジュールを含む）、DynamoDB Streams、Kinesis があります。**同時実行数**は同時に動いている実行の数で、リージョンの既定クォータは 1,000（引き上げ可能）です。**予約済み同時実行**は関数の枠を保証しつつ上限を設け、**プロビジョニングされた同時実行**は環境をウォームに保ってコールドスタートをなくします。",
            "**AWS Lambda** က event တစ်ခုခုဖြစ်တိုင်း function code ကို run ပေးပြီး request နဲ့ compute millisecond အလိုက်ပဲ ပေးရလို့ မသုံးတဲ့အချိန် ကုန်ကျစရိတ် သုည ပါ။ မှတ်ထားရမယ့် limit — invocation တစ်ခါ **အများဆုံး ၁၅ မိနစ်**၊ memory **128 MB မှ 10,240 MB** (memory နဲ့အတူ CPU တိုး)၊ `/tmp` 10 GB အထိ၊ zip သို့ 10 GB အထိ container image နဲ့ deploy။ Trigger တွေ — API Gateway၊ ALB၊ function URL၊ S3 event၊ SQS၊ SNS၊ EventBridge (schedule အပါ)၊ DynamoDB Streams၊ Kinesis။ **Concurrency** က တစ်ပြိုင်နက် run နေတဲ့ execution အရေအတွက်ပါ၊ Region default quota က 1,000 (တိုးလို့ရ)။ **Reserved concurrency** က function အတွက် နေရာ အာမခံပြီး ကန့်သတ်ချက်လည်း ထားတယ်၊ **provisioned concurrency** က environment တွေကို warm ထားပြီး cold start ကို ဖယ်ရှားတယ်။"
          ) },
          { type: 'p', text: L(
            "For containers, **Amazon ECR** stores your images (with vulnerability scanning). **Amazon ECS** is AWS's own orchestrator: you define a **task definition** (image, CPU, memory, ports, IAM task role) and a **service** keeps N tasks running behind an ALB. ECS has two launch types: **EC2** (you manage a cluster of instances — more control, can use Reserved/Spot, GPUs) and **Fargate** (serverless — no instances to patch, pay per task vCPU and memory). **Amazon EKS** runs managed **Kubernetes** control planes; choose it when you already use Kubernetes tooling or need portability (EKS also works with Fargate or EKS Auto Mode). **AWS App Runner** goes one step higher: point it at a container image or source repository and it builds, deploys, load-balances, scales and adds HTTPS for a web app or API automatically.",
            "コンテナでは、**Amazon ECR** がイメージを保存します（脆弱性スキャン付き）。**Amazon ECS** は AWS 独自のオーケストレーターで、**タスク定義**（イメージ・CPU・メモリ・ポート・IAM タスクロール）を定義し、**サービス**が ALB の背後で N 個のタスクを維持します。ECS には 2 つの起動タイプがあります。**EC2**（インスタンスのクラスターを自分で管理。制御性が高く、Reserved/Spot や GPU を利用可能）と **Fargate**（サーバーレス。パッチを当てるインスタンスがなく、タスクの vCPU とメモリに対して課金）です。**Amazon EKS** はマネージドな **Kubernetes** コントロールプレーンを提供し、既に Kubernetes のツールを使っている場合や移植性が必要な場合に選びます（EKS も Fargate や EKS Auto Mode と組み合わせられます）。**AWS App Runner** はさらに上のレベルで、コンテナイメージやソースリポジトリを指定するだけで、Web アプリや API のビルド・デプロイ・負荷分散・スケーリング・HTTPS 化を自動で行います。",
            "Container အတွက် **Amazon ECR** က image တွေ သိမ်းပေးတယ် (vulnerability scanning ပါ)။ **Amazon ECS** က AWS ရဲ့ ကိုယ်ပိုင် orchestrator ပါ — **task definition** (image၊ CPU၊ memory၊ port၊ IAM task role) သတ်မှတ်ပြီး **service** က ALB နောက်မှာ task N ခု run နေအောင် ထိန်းတယ်။ ECS မှာ launch type နှစ်မျိုး — **EC2** (instance cluster ကို ကိုယ်တိုင်စီမံ၊ control ပိုရ၊ Reserved/Spot၊ GPU သုံးလို့ရ) နဲ့ **Fargate** (serverless — patch လုပ်စရာ instance မရှိ၊ task ရဲ့ vCPU နဲ့ memory အလိုက် ပေး)။ **Amazon EKS** က managed **Kubernetes** control plane ပေးတယ်၊ Kubernetes tool တွေ သုံးပြီးသား ဒါမှမဟုတ် portability လိုရင် ရွေးပါ (EKS ကိုလည်း Fargate သို့ EKS Auto Mode နဲ့ တွဲလို့ရ)။ **AWS App Runner** က တစ်ဆင့်ထပ်မြင့်တယ် — container image သို့ source repository ကို ပြလိုက်ရုံနဲ့ web app/API ကို build၊ deploy၊ load balance၊ scale၊ HTTPS အကုန် အလိုအလျောက် လုပ်ပေးတယ်။"
          ) },
          { type: 'callout', tone: 'exam', text: L(
            "\"Job runs longer than 15 minutes\" → **not Lambda**; use ECS/Fargate tasks, AWS Batch or Step Functions to split the work. \"Run containers without managing servers\" → **Fargate** (with ECS or EKS). \"Existing Kubernetes manifests\" → **EKS**. \"Store and scan Docker images\" → **ECR**. \"Reduce Lambda cold starts\" → **provisioned concurrency**.",
            "「ジョブが 15 分以上かかる」→ **Lambda は不可**。ECS/Fargate タスク、AWS Batch、または Step Functions で処理を分割します。「サーバーを管理せずにコンテナを実行」→ **Fargate**（ECS または EKS と組み合わせ）。「既存の Kubernetes マニフェスト」→ **EKS**。「Docker イメージの保存とスキャン」→ **ECR**。「Lambda のコールドスタートを減らす」→ **プロビジョニングされた同時実行**。",
            "\"Job က ၁၅ မိနစ်ထက် ကြာတယ်\" → **Lambda မရ**၊ ECS/Fargate task၊ AWS Batch သို့ Step Functions နဲ့ အလုပ်ကို ခွဲပါ။ \"Server မစီမံဘဲ container run\" → **Fargate** (ECS သို့ EKS နဲ့)။ \"ရှိပြီးသား Kubernetes manifest\" → **EKS**။ \"Docker image သိမ်း၊ scan\" → **ECR**။ \"Lambda cold start လျှော့\" → **provisioned concurrency**။"
          ) },
        ],
      },
      {
        id: "other-compute",
        title: L("Choosing the right compute: Beanstalk, Lightsail, Batch, Outposts and a decision guide", "適切なコンピューティングの選択：Beanstalk・Lightsail・Batch・Outposts と判断ガイド", "မှန်ကန်တဲ့ compute ရွေးခြင်း: Beanstalk၊ Lightsail၊ Batch၊ Outposts နဲ့ ဆုံးဖြတ်ချက်လမ်းညွှန်"),
        blocks: [
          { type: 'list', items: [
            L("**AWS Elastic Beanstalk** — PaaS for web apps (Java, .NET, Node.js, Python, PHP, Go, Docker): upload code and it creates EC2, ASG, ELB and monitoring for you. The service itself is free; you pay for the resources it creates, and you can still see and tune them.",
              "**AWS Elastic Beanstalk** — Web アプリ（Java、.NET、Node.js、Python、PHP、Go、Docker）向けの PaaS。コードをアップロードすると EC2・ASG・ELB・監視を作成してくれます。サービス自体は無料で、作成されたリソース分を支払い、それらのリソースも確認・調整できます。",
              "**AWS Elastic Beanstalk** — web app (Java၊ .NET၊ Node.js၊ Python၊ PHP၊ Go၊ Docker) အတွက် PaaS ပါ၊ code upload လုပ်လိုက်ရင် EC2၊ ASG၊ ELB၊ monitoring ကို ဆောက်ပေးတယ်။ Service ကိုယ်တိုင် အခမဲ့၊ ဆောက်ပေးတဲ့ resource အတွက်ပဲ ပေးရပြီး အဲ့ resource တွေကို မြင်၊ ချိန်ညှိလို့ ရသေးတယ်။"),
            L("**Amazon Lightsail** — simple virtual private servers, databases and containers with a predictable monthly bundle (compute, SSD, data transfer, static IP). Best for small websites, WordPress, and beginners who do not need VPC-level design.",
              "**Amazon Lightsail** — コンピューティング・SSD・データ転送・静的 IP を含む予測しやすい月額バンドルで、シンプルな仮想サーバー・DB・コンテナを提供します。小規模 Web サイト、WordPress、VPC レベルの設計が不要な初心者に最適です。",
              "**Amazon Lightsail** — compute၊ SSD၊ data transfer၊ static IP ပါတဲ့ ခန့်မှန်းရလွယ်တဲ့ လစဉ် bundle နဲ့ ရိုးရှင်းတဲ့ virtual server၊ database၊ container ပေးတယ်။ Website သေးသေး၊ WordPress၊ VPC level design မလိုတဲ့ beginner တွေအတွက် အကောင်းဆုံး။"),
            L("**AWS Batch** — queues and runs batch jobs of any length on managed EC2, Spot or Fargate capacity; it chooses instance types and scales to zero. Use it for simulations, rendering, genomics, nightly ETL.",
              "**AWS Batch** — 任意の長さのバッチジョブをキューに入れ、マネージドな EC2・Spot・Fargate のキャパシティで実行します。インスタンスタイプを選び、ゼロまでスケールします。シミュレーション、レンダリング、ゲノム解析、夜間 ETL に使います。",
              "**AWS Batch** — ဘယ်လောက်ကြာကြာ batch job တွေကို queue လုပ်ပြီး managed EC2၊ Spot၊ Fargate capacity ပေါ်မှာ run ပေးတယ်၊ instance type ရွေးပေးပြီး သုည အထိ scale ဆင်းတယ်။ Simulation၊ rendering၊ genomics၊ ညဘက် ETL အတွက်။"),
            L("**AWS Outposts** — AWS-managed racks or servers installed in **your own datacenter**, running EC2, EBS, ECS, EKS and RDS locally with the same APIs. Use for low latency to on-premises systems, local data processing or data residency. (Local Zones and Wavelength are AWS-run locations close to users, not on your premises.)",
              "**AWS Outposts** — **自社データセンター**に設置される AWS 管理のラックやサーバーで、EC2・EBS・ECS・EKS・RDS を同じ API でローカル実行します。オンプレミスシステムへの低レイテンシー、ローカルでのデータ処理、データ所在地の要件に使います（Local Zones と Wavelength はユーザーの近くにある AWS 運用の拠点で、自社内ではありません）。",
              "**AWS Outposts** — **ကိုယ့်ကိုယ်ပိုင် datacenter** ထဲမှာ တပ်ဆင်ပေးတဲ့ AWS-managed rack သို့ server ဖြစ်ပြီး EC2၊ EBS၊ ECS၊ EKS၊ RDS ကို API တူတူနဲ့ local မှာ run တယ်။ On-premises system နဲ့ latency နည်းဖို့၊ local data processing၊ data residency အတွက် သုံးတယ်။ (Local Zones နဲ့ Wavelength က user နားက AWS run တဲ့ နေရာတွေပါ၊ ကိုယ့်ရုံးထဲ မဟုတ်ဘူး။)"),
          ] },
          { type: 'table',
            head: [L("If the requirement says…", "要件にこう書かれていたら…", "Requirement မှာ ဒီလိုပြောရင်…"), L("Choose", "選ぶサービス", "ရွေးရမယ့်ဟာ")],
            rows: [
              [L("Full OS control, custom agents, any software", "OS の完全な制御、カスタムエージェント、任意のソフトウェア", "OS ကို အပြည့်ထိန်း၊ custom agent၊ ဘယ် software မဆို"), L("Amazon EC2", "Amazon EC2（仮想サーバー）", "Amazon EC2 (ကိုယ်ပိုင် server)")],
              [L("Event-driven code, short runs, pay nothing when idle", "イベント駆動のコード、短時間の実行、アイドル時は無料", "Event-driven code၊ ခဏ run၊ မသုံးချိန် ငွေမကုန်"), L("AWS Lambda", "AWS Lambda（サーバーレス関数）", "AWS Lambda (serverless function သုံး)")],
              [L("Containers with no servers to manage", "管理するサーバーのないコンテナ", "Server မစီမံရတဲ့ container"), L("ECS or EKS on AWS Fargate", "AWS Fargate 上の ECS または EKS", "AWS Fargate ပေါ်က ECS သို့ EKS")],
              [L("Deploy a web app from code, AWS creates the infrastructure", "コードから Web アプリをデプロイし、インフラは AWS が作成", "Code ကနေ web app deploy၊ infrastructure ကို AWS ဆောက်ပေး"), L("Elastic Beanstalk or App Runner", "Elastic Beanstalk または App Runner", "Elastic Beanstalk သို့ App Runner")],
              [L("Simple fixed monthly price for a small site", "小規模サイト向けのシンプルな固定月額", "Site သေးအတွက် ရိုးရှင်းတဲ့ ပုံသေ လစဉ်ဈေး"), L("Amazon Lightsail", "Amazon Lightsail（シンプルな VPS）", "Amazon Lightsail (ရိုးရှင်းတဲ့ VPS)")],
              [L("Large batch jobs, hours long, cost-optimized", "数時間かかる大規模バッチ、コスト最適化", "နာရီချီကြာတဲ့ batch job ကြီး၊ cost-optimized"), L("AWS Batch (with Spot)", "AWS Batch（Spot と組み合わせ）", "AWS Batch (Spot နဲ့)")],
              [L("AWS services inside the customer datacenter", "顧客データセンター内での AWS サービス", "Customer datacenter ထဲမှာ AWS service"), L("AWS Outposts", "AWS Outposts（オンプレミス設置）", "AWS Outposts (ကိုယ့် datacenter ထဲ)")],
            ] },
          { type: 'callout', tone: 'memory', text: L(
            "Control ladder, from most control to least: **EC2 → ECS on EC2 → Fargate → Beanstalk / App Runner → Lambda**. Moving right means less to manage and less to customize. Exam questions asking for \"least operational overhead\" usually want the right-most option that still meets the limits.",
            "制御のはしご（制御が多い順）：**EC2 → ECS on EC2 → Fargate → Beanstalk / App Runner → Lambda**。右に行くほど管理は減り、カスタマイズの幅も狭まります。「運用負荷が最も少ない」を問う試験問題では、制限を満たす範囲で最も右の選択肢が正解であることが多いです。",
            "Control လှေကား (control အများဆုံးကနေ အနည်းဆုံး): **EC2 → ECS on EC2 → Fargate → Beanstalk / App Runner → Lambda**။ ညာဘက်ရောက်လေ စီမံရတာ နည်းလေ၊ customize လုပ်နိုင်တာလည်း နည်းလေပါ။ \"Operational overhead အနည်းဆုံး\" မေးတဲ့ exam question တွေက limit နဲ့ ကိုက်သေးတဲ့ ညာဘက်အကျဆုံး option ကို လိုချင်လေ့ရှိတယ်။"
          ) },
        ],
      },
    ],
    summary: [
      L("Instance names follow family + generation + attributes + size; `g` means Graviton, and T instances burst on CPU credits — wrong for constant high CPU.",
        "インスタンス名はファミリー + 世代 + 属性 + サイズで、`g` は Graviton、T インスタンスは CPU クレジットでバーストするため、常時高 CPU には不向きです。",
        "Instance နာမည်က family + generation + attribute + size ပါ၊ `g` = Graviton၊ T instance တွေက CPU credit နဲ့ burst လို့ CPU အမြဲမြင့်တဲ့ workload နဲ့ မသင့်ဘူး။"),
      L("AMIs are regional templates; user data runs once at first boot; require IMDSv2; prefer Session Manager over open port 22.",
        "AMI はリージョン単位のテンプレート、ユーザーデータは初回起動時に 1 回実行、IMDSv2 を必須にし、22 番ポートを開けるより Session Manager を使いましょう。",
        "AMI က region အလိုက် template၊ user data က ပထမ boot မှာ တစ်ခါ run၊ IMDSv2 ကို require လုပ်၊ port 22 ဖွင့်တာထက် Session Manager ကို ဦးစားပေးပါ။"),
      L("Spot for interruptible work, Savings Plans/RIs for steady usage, Dedicated Hosts for per-socket licensing, Capacity Reservations for guaranteed AZ capacity.",
        "中断可能な処理は Spot、安定した使用量は Savings Plans/RI、ソケット単位ライセンスは Dedicated Hosts、AZ のキャパシティ保証は Capacity Reservations。",
        "ကြားဖြတ်ခံရလည်း ရတဲ့အလုပ် → Spot၊ တည်ငြိမ်တဲ့ usage → Savings Plans/RI၊ socket အလိုက် license → Dedicated Host၊ AZ capacity အာမခံ → Capacity Reservation။"),
      L("Placement groups: cluster for low latency, spread for a few critical instances (7 per AZ), partition for big rack-aware clusters.",
        "プレイスメントグループ：低レイテンシーはクラスター、少数の重要インスタンスはスプレッド（AZ あたり 7 台）、大規模なラック認識型クラスターはパーティション。",
        "Placement group: latency နည်းဖို့ cluster၊ အရေးကြီး instance အနည်းငယ်အတွက် spread (AZ တစ်ခု ၇ ခု)၊ rack-aware cluster ကြီးတွေအတွက် partition။"),
      L("EBS is AZ-scoped and persistent; instance store is fast but ephemeral; gp3 is the default, io2 for critical databases, st1/sc1 HDD cannot boot.",
        "EBS は AZ 単位で永続的、インスタンスストアは高速だが一時的。既定は gp3、重要な DB は io2、HDD の st1/sc1 はブート不可です。",
        "EBS က AZ အလိုက်ဖြစ်ပြီး data ကျန်တယ်၊ instance store က မြန်ပေမယ့် ယာယီ၊ default က gp3၊ အရေးကြီး database အတွက် io2၊ HDD ဖြစ်တဲ့ st1/sc1 နဲ့ boot လို့ မရဘူး။"),
      L("A full disk is fixed online: snapshot, `modify-volume`, then `growpart` and `xfs_growfs`/`resize2fs`; volumes can grow but never shrink.",
        "ディスクフルはオンラインで解決できます：スナップショット → `modify-volume` → `growpart` と `xfs_growfs`/`resize2fs`。ボリュームは拡張できますが縮小はできません。",
        "Disk ပြည့်တာကို online မှာပဲ ဖြေရှင်းလို့ရ: snapshot → `modify-volume` → `growpart` နဲ့ `xfs_growfs`/`resize2fs`၊ volume ကို ချဲ့လို့ရပေမယ့် ချုံ့လို့ မရဘူး။"),
      L("ALB (L7 routing), NLB (L4, static IPs, extreme performance), GWLB (appliances) in front of an ASG across AZs with ELB health checks gives elastic, self-healing apps.",
        "複数 AZ にまたがる ASG の前に ALB（L7 ルーティング）・NLB（L4、静的 IP、高性能）・GWLB（アプライアンス）を置き、ELB ヘルスチェックを使えば、弾力的で自己修復するアプリになります。",
        "AZ အများကြီးပေါ်က ASG ရှေ့မှာ ALB (L7 routing)၊ NLB (L4၊ static IP၊ performance အမြင့်)၊ GWLB (appliance) ထားပြီး ELB health check သုံးရင် elastic ဖြစ်ပြီး ကိုယ့်ဘာသာ ပြန်ကောင်းတဲ့ app ရတယ်။"),
      L("Lambda max 15 minutes; Fargate for serverless containers, EKS for Kubernetes, Beanstalk/App Runner for code-to-web, Lightsail for simple sites, Batch for long jobs, Outposts on-premises.",
        "Lambda は最大 15 分。サーバーレスコンテナは Fargate、Kubernetes は EKS、コードから Web は Beanstalk/App Runner、シンプルなサイトは Lightsail、長時間ジョブは Batch、オンプレミスは Outposts。",
        "Lambda က အများဆုံး ၁၅ မိနစ်၊ serverless container → Fargate၊ Kubernetes → EKS၊ code ကနေ web → Beanstalk/App Runner၊ ရိုးရှင်းတဲ့ site → Lightsail၊ ကြာတဲ့ job → Batch၊ on-premises → Outposts။"),
    ],
  },
  questions: [
    {
      difficulty: 'EASY',
      exams: ['CLF-C02', 'SAA-C03'],
      prompt: L("A company runs nightly image-rendering jobs that can be stopped and restarted at any time without losing work. Which EC2 purchasing option is the MOST cost-effective?",
        "ある企業は、作業を失わずにいつでも停止・再開できる夜間の画像レンダリングジョブを実行しています。最もコスト効率の高い EC2 購入オプションはどれですか？",
        "Company တစ်ခုက ညဘက် image-rendering job တွေ run တယ်၊ အလုပ်မပျောက်ဘဲ ဘယ်အချိန် ရပ်ပြီး ပြန်စလို့ရတယ်။ အသက်သာဆုံး EC2 purchasing option က ဘာလဲ?"),
      options: ['On-Demand Instances', 'Standard Reserved Instances', 'Spot Instances', 'Dedicated Hosts'],
      correct: [2],
      explanation: L("Spot Instances use spare capacity at up to 90% off and fit interruptible, fault-tolerant jobs; a 2-minute notice is given before reclaim. Reserved Instances need a 1- or 3-year commitment and are meant for steady 24/7 usage, not occasional nightly jobs.",
        "Spot インスタンスは余剰キャパシティを最大 90% 割引で利用でき、中断可能で耐障害性のあるジョブに適しています。回収の 2 分前に通知されます。Reserved Instances は 1 年または 3 年のコミットが必要で、断続的な夜間ジョブではなく 24 時間稼働の安定した使用向けです。",
        "Spot Instance က AWS ရဲ့ အပို capacity ကို 90% အထိ လျှော့ဈေးနဲ့ သုံးတာဖြစ်ပြီး ကြားဖြတ်ခံရလည်း ရတဲ့ fault-tolerant job နဲ့ ကိုက်တယ်၊ ပြန်မယူခင် ၂ မိနစ် သတိပေးတယ်။ Reserved Instance က ၁ နှစ် သို့ ၃ နှစ် commit လိုပြီး 24/7 တည်ငြိမ်တဲ့ usage အတွက်ပါ၊ ညတိုင်း ခဏ run တဲ့ job အတွက် မဟုတ်ဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['CLF-C02'],
      prompt: L("A developer wants code to run automatically each time a file is uploaded to an S3 bucket. Each run takes about 20 seconds and there should be no servers to manage. Which service fits best?",
        "開発者は、S3 バケットにファイルがアップロードされるたびにコードを自動実行したいと考えています。1 回の実行は約 20 秒で、管理するサーバーは不要にしたいです。最適なサービスはどれですか？",
        "Developer တစ်ယောက်က S3 bucket ထဲ file upload လုပ်တိုင်း code ကို အလိုအလျောက် run စေချင်တယ်။ တစ်ခါ run ရင် စက္ကန့် ၂၀ လောက်ကြာပြီး server စီမံစရာ မရှိစေချင်ဘူး။ ဘယ် service က အကောင်းဆုံးလဲ?"),
      options: ['AWS Lambda', 'Amazon EC2', 'Amazon Lightsail', 'AWS Outposts'],
      correct: [0],
      explanation: L("Lambda is event-driven and serverless: an S3 event notification can invoke a function directly, and you pay only for the 20 seconds of compute. EC2 would require you to run and patch a server that waits for events all day.",
        "Lambda はイベント駆動かつサーバーレスで、S3 イベント通知から関数を直接呼び出せ、支払いは 20 秒分のコンピューティングのみです。EC2 では、一日中イベントを待つサーバーを運用し、パッチを当て続ける必要があります。",
        "Lambda က event-driven၊ serverless ပါ — S3 event notification က function ကို တိုက်ရိုက် ခေါ်နိုင်ပြီး compute စက္ကန့် ၂၀ အတွက်ပဲ ပေးရတယ်။ EC2 ဆိုရင် event ကို တစ်နေကုန် စောင့်နေတဲ့ server ကို run ပြီး patch လုပ်နေရမယ်။"),
    },
    {
      difficulty: 'EASY',
      exams: ['CLF-C02', 'SAA-C03'],
      prompt: L("After stopping and starting an EC2 instance, its public IPv4 address changed and partners could no longer reach it. What should be used to keep a fixed public IPv4 address?",
        "EC2 インスタンスを停止・起動したらパブリック IPv4 アドレスが変わり、取引先から接続できなくなりました。固定のパブリック IPv4 アドレスを維持するには何を使うべきですか？",
        "EC2 instance ကို stop/start လုပ်ပြီးနောက် public IPv4 address ပြောင်းသွားလို့ partner တွေ ချိတ်လို့ မရတော့ဘူး။ ပုံသေ public IPv4 address ထားဖို့ ဘာသုံးရမလဲ?"),
      options: ['A secondary private IP address', 'An Elastic IP address', 'An auto-assigned public IP address', 'An Elastic Network Adapter (ENA)'],
      correct: [1],
      explanation: L("An Elastic IP is a static public IPv4 address that stays with your account until released and can be associated with the instance. Auto-assigned public IPs are released on stop, which is exactly the problem described. Remember that all public IPv4 addresses, including EIPs, are billed hourly.",
        "Elastic IP は解放するまでアカウントに残る静的なパブリック IPv4 アドレスで、インスタンスに関連付けられます。自動割り当てのパブリック IP は停止時に解放されるため、まさにこの問題の原因です。なお、EIP を含むすべてのパブリック IPv4 アドレスは時間単位で課金されます。",
        "Elastic IP က release မလုပ်မချင်း account မှာ ကျန်နေတဲ့ static public IPv4 ဖြစ်ပြီး instance နဲ့ ချိတ်လို့ရတယ်။ Auto-assign public IP က stop လုပ်ရင် ပြန်လွှတ်ပေးလိုက်လို့ ဒီပြဿနာ ဖြစ်တာပါ။ EIP အပါအဝင် public IPv4 အားလုံးကို တစ်နာရီချင်း charge ယူတာ သတိရပါ။"),
    },
    {
      difficulty: 'EASY',
      exams: ['SAA-C03'],
      prompt: L("In the instance type `m7g.large`, what does the letter `g` indicate?",
        "インスタンスタイプ `m7g.large` の `g` は何を示していますか？",
        "Instance type `m7g.large` မှာ `g` စာလုံးက ဘာကို ပြတာလဲ?"),
      options: ['It includes a GPU', 'It is a general-purpose family', 'It uses an AWS Graviton (Arm-based) processor', 'It has gigabit networking'],
      correct: [2],
      explanation: L("The attribute letter `g` after the generation number means an AWS Graviton Arm-based processor. The general-purpose family is shown by the first letter `m`, and GPU instances belong to families such as `p` and `g` at the start of the name, not after the generation.",
        "世代番号の後の属性文字 `g` は AWS Graviton（Arm ベース）プロセッサーを意味します。汎用ファミリーは先頭の `m` で示され、GPU インスタンスは名前の先頭が `p` や `g` のファミリーであり、世代の後ではありません。",
        "Generation နံပါတ်နောက်က attribute စာလုံး `g` က AWS Graviton Arm-based processor ကို ဆိုလိုတယ်။ General-purpose family ကို ရှေ့ဆုံးက `m` က ပြတာပါ၊ GPU instance တွေက နာမည်ရှေ့ဆုံးမှာ `p`၊ `g` နဲ့စတဲ့ family တွေပါ၊ generation နောက်မှာ မဟုတ်ဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['CLF-C02', 'SAA-C03'],
      prompt: L("An application writes temporary files to an instance store volume. What happens to that data when the instance is stopped?",
        "アプリケーションが一時ファイルをインスタンスストアボリュームに書き込んでいます。インスタンスを停止すると、そのデータはどうなりますか？",
        "Application တစ်ခုက temporary file တွေကို instance store volume ထဲ ရေးတယ်။ Instance ကို stop လုပ်ရင် အဲ့ data ဘာဖြစ်မလဲ?"),
      options: ['It persists and is available after the next start', 'It is lost', 'It is automatically snapshotted to Amazon S3', 'It is moved to the root EBS volume'],
      correct: [1],
      explanation: L("Instance store is physically attached to the host and is ephemeral: data survives a reboot but is lost on stop, hibernate, terminate or host failure. Persistence after stop is a property of EBS volumes, not instance store, and nothing is snapshotted automatically.",
        "インスタンスストアはホストに物理的に接続された一時的なストレージで、再起動ではデータが残りますが、停止・休止・終了・ホスト障害で失われます。停止後もデータが残るのは EBS ボリュームの特性で、インスタンスストアではありません。自動でスナップショットが取られることもありません。",
        "Instance store က host နဲ့ ရုပ်ပိုင်းဆိုင်ရာ ချိတ်ထားတဲ့ ephemeral storage ပါ — reboot ဆို data ကျန်ပေမယ့် stop၊ hibernate၊ terminate၊ host ပျက်ရင် ပျောက်တယ်။ Stop ပြီးလည်း data ကျန်တာက EBS volume ရဲ့ အရည်အချင်းပါ၊ instance store မဟုတ်ဘူး၊ snapshot လည်း အလိုအလျောက် မယူပေးဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['CLF-C02'],
      prompt: L("A small shop wants to run a WordPress website on a simple virtual server with a predictable monthly price and minimal AWS knowledge. Which service should it use?",
        "小さなお店が、予測しやすい月額料金で、AWS の知識が少なくても使えるシンプルな仮想サーバー上で WordPress サイトを運営したいと考えています。どのサービスを使うべきですか？",
        "ဆိုင်သေးလေးတစ်ခုက ခန့်မှန်းရလွယ်တဲ့ လစဉ်ဈေးနဲ့၊ AWS အကြောင်း သိပ်မသိလည်း သုံးနိုင်တဲ့ ရိုးရှင်းတဲ့ virtual server ပေါ်မှာ WordPress website run ချင်တယ်။ ဘယ် service သုံးသင့်လဲ?"),
      options: ['AWS Elastic Beanstalk', 'AWS Batch', 'Amazon EKS', 'Amazon Lightsail'],
      correct: [3],
      explanation: L("Lightsail offers simple virtual servers with WordPress blueprints and bundled monthly pricing that includes compute, storage, data transfer and a static IP. Elastic Beanstalk is also simple to deploy but creates EC2, ELB and Auto Scaling resources billed separately, so the cost is less predictable for a beginner.",
        "Lightsail は WordPress のブループリントを備えたシンプルな仮想サーバーを、コンピューティング・ストレージ・データ転送・静的 IP を含む月額バンドルで提供します。Elastic Beanstalk もデプロイは簡単ですが、個別に課金される EC2・ELB・Auto Scaling のリソースを作成するため、初心者にとって費用が予測しにくくなります。",
        "Lightsail က WordPress blueprint ပါတဲ့ ရိုးရှင်းတဲ့ virtual server ကို compute၊ storage၊ data transfer၊ static IP ပါတဲ့ လစဉ် bundle ဈေးနဲ့ ပေးတယ်။ Elastic Beanstalk လည်း deploy လုပ်ရ လွယ်ပေမယ့် သီးခြား charge ယူတဲ့ EC2၊ ELB၊ Auto Scaling resource တွေ ဆောက်လို့ beginner အတွက် ဈေးကို ခန့်မှန်းရ ခက်တယ်။"),
    },
    {
      difficulty: 'EASY',
      exams: ['CLF-C02', 'SAA-C03'],
      prompt: L("Which TWO benefits does Amazon EC2 Auto Scaling provide? (Select TWO)",
        "Amazon EC2 Auto Scaling が提供するメリットはどれですか？（2 つ選択）",
        "Amazon EC2 Auto Scaling က ဘယ်အကျိုးကျေးဇူး နှစ်ခုကို ပေးလဲ? (နှစ်ခု ရွေးပါ)"),
      options: ['Automatically replaces unhealthy instances', 'Encrypts all EBS volumes in the account', 'Adds or removes instances to match demand', 'Assigns an Elastic IP to every instance', 'Patches the guest operating system'],
      correct: [0, 2],
      explanation: L("An Auto Scaling group self-heals by replacing instances that fail health checks and scales capacity between min and max to match demand. EBS encryption is set by the volume or the account-level default, and OS patching is done with tools such as Systems Manager Patch Manager, not by Auto Scaling.",
        "Auto Scaling グループは、ヘルスチェックに失敗したインスタンスを置き換えて自己修復し、需要に合わせて最小〜最大の範囲でキャパシティを増減します。EBS の暗号化はボリュームやアカウントの既定設定で行い、OS のパッチ適用は Systems Manager Patch Manager などのツールで行うもので、Auto Scaling の機能ではありません。",
        "Auto Scaling group က health check မအောင်တဲ့ instance ကို အစားထိုးပြီး self-heal လုပ်တယ်၊ demand နဲ့ ကိုက်အောင် min နဲ့ max ကြား capacity ကို တိုး/လျှော့ လုပ်တယ်။ EBS encryption က volume သို့ account default setting နဲ့ လုပ်တာ၊ OS patch ကတော့ Systems Manager Patch Manager လို tool နဲ့ လုပ်တာပါ၊ Auto Scaling ရဲ့ အလုပ် မဟုတ်ဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['CLF-C02'],
      prompt: L("A factory needs to run Amazon EC2 and Amazon EBS inside its own on-premises datacenter with single-digit millisecond latency to local machines, using the same AWS APIs. Which service meets this need?",
        "ある工場では、ローカル機器への 1 桁ミリ秒のレイテンシーで、同じ AWS API を使い、自社オンプレミスのデータセンター内で Amazon EC2 と Amazon EBS を実行する必要があります。この要件を満たすサービスはどれですか？",
        "စက်ရုံတစ်ခုက ကိုယ်ပိုင် on-premises datacenter ထဲမှာ local machine တွေနဲ့ single-digit millisecond latency ရအောင် AWS API တူတူနဲ့ Amazon EC2 နဲ့ Amazon EBS run ဖို့ လိုတယ်။ ဘယ် service က ကိုက်လဲ?"),
      options: ['Amazon CloudFront', 'AWS Outposts', 'AWS Global Accelerator', 'Amazon Lightsail'],
      correct: [1],
      explanation: L("AWS Outposts delivers AWS-managed racks or servers into your own facility, running EC2, EBS and other services locally with the same APIs. CloudFront and Global Accelerator speed up delivery over the AWS edge network, but the compute still runs in an AWS Region, not in the factory.",
        "AWS Outposts は AWS が管理するラックやサーバーを自社施設に設置し、EC2・EBS などのサービスを同じ API でローカル実行します。CloudFront と Global Accelerator は AWS のエッジネットワークで配信を高速化しますが、コンピューティング自体は工場内ではなく AWS リージョンで動きます。",
        "AWS Outposts က AWS-managed rack သို့ server ကို ကိုယ့်နေရာထဲ ပို့ပေးပြီး EC2၊ EBS စတဲ့ service တွေကို API တူတူနဲ့ local မှာ run တယ်။ CloudFront နဲ့ Global Accelerator က AWS edge network နဲ့ delivery ကို မြန်စေပေမယ့် compute ကတော့ စက်ရုံထဲမှာ မဟုတ်ဘဲ AWS Region မှာပဲ run တယ်။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("A web server on a `t3.micro` with an 8 GiB gp3 root volume reports \"No space left on device\". The team must add space without stopping the instance. Which TWO actions are required? (Select TWO)",
        "8 GiB の gp3 ルートボリュームを持つ `t3.micro` の Web サーバーで「No space left on device」が発生しました。インスタンスを停止せずに容量を追加する必要があります。必要な操作はどれですか？（2 つ選択）",
        "8 GiB gp3 root volume ပါတဲ့ `t3.micro` web server မှာ \"No space left on device\" ပြနေတယ်။ Instance ကို stop မလုပ်ဘဲ နေရာ တိုးရမယ်။ လိုအပ်တဲ့ action နှစ်ခုက ဘာလဲ? (နှစ်ခု ရွေးပါ)"),
      options: ['Increase the volume size with EBS Elastic Volumes (modify-volume)', 'Change the instance type to t3.small', 'Extend the partition and file system inside the OS (growpart, then xfs_growfs or resize2fs)', 'Attach an instance store volume as the new root disk', 'Create a new AMI and relaunch the instance'],
      correct: [0, 2],
      explanation: L("Elastic Volumes grows the EBS volume online, and then the OS must be told to use the new space by growing the partition and the file system. A bigger instance type adds CPU and memory, not disk, and relaunching from an AMI causes downtime and is unnecessary.",
        "Elastic Volumes で EBS ボリュームをオンラインで拡張し、その後パーティションとファイルシステムを拡張して OS に新しい容量を使わせる必要があります。より大きなインスタンスタイプで増えるのは CPU とメモリでディスクではなく、AMI から再起動するとダウンタイムが発生し、不要です。",
        "Elastic Volumes နဲ့ EBS volume ကို online မှာ ချဲ့ပြီးနောက် partition နဲ့ file system ကို ချဲ့ပြီး နေရာအသစ်ကို OS သုံးအောင် လုပ်ရတယ်။ Instance type ကြီးကြီးက CPU နဲ့ memory ပဲ တိုးတယ်၊ disk မတိုးဘူး၊ AMI ကနေ relaunch လုပ်ရင် downtime ဖြစ်ပြီး မလိုအပ်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['CLF-C02', 'SAA-C03'],
      prompt: L("A company has a steady 24/7 compute workload for the next 3 years. It plans to move some services from EC2 to AWS Fargate and may change instance families and Regions. Which option gives a discount with the MOST flexibility?",
        "ある企業には今後 3 年間、24 時間 365 日安定したコンピューティングワークロードがあります。一部のサービスを EC2 から AWS Fargate に移す予定で、インスタンスファミリーやリージョンを変える可能性もあります。最も柔軟性の高い割引オプションはどれですか？",
        "Company တစ်ခုမှာ နောက် ၃ နှစ်အတွက် 24/7 တည်ငြိမ်တဲ့ compute workload ရှိတယ်။ Service တချို့ကို EC2 ကနေ AWS Fargate ကို ရွှေ့မယ်၊ instance family နဲ့ Region လည်း ပြောင်းနိုင်တယ်။ Flexibility အများဆုံးနဲ့ discount ရမယ့် option က ဘာလဲ?"),
      options: ['EC2 Instance Savings Plans', 'Standard Reserved Instances', 'Compute Savings Plans', 'Spot Instances'],
      correct: [2],
      explanation: L("Compute Savings Plans apply to any instance family, size, Region and OS, and also to Fargate and Lambda usage. EC2 Instance Savings Plans and Standard RIs give a larger discount but are tied to an instance family in one Region, so they do not cover the move to Fargate.",
        "Compute Savings Plans はあらゆるインスタンスファミリー・サイズ・リージョン・OS に加え、Fargate と Lambda の使用量にも適用されます。EC2 Instance Savings Plans や Standard RI は割引率が大きいものの、1 つのリージョンのインスタンスファミリーに固定されるため、Fargate への移行はカバーされません。",
        "Compute Savings Plans က instance family၊ size၊ Region၊ OS မရွေး apply ဖြစ်ပြီး Fargate နဲ့ Lambda usage ကိုပါ ဖုံးတယ်။ EC2 Instance Savings Plans နဲ့ Standard RI က discount ပိုများပေမယ့် Region တစ်ခုထဲက instance family နဲ့ ချည်ထားလို့ Fargate ကို ရွှေ့တာကို မဖုံးဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("Requests to `example.com/api/*` must go to one set of containers and `example.com/images/*` to another, behind a single endpoint with HTTPS. Which load balancer should be used?",
        "`example.com/api/*` へのリクエストはあるコンテナ群に、`example.com/images/*` は別のコンテナ群に、HTTPS 付きの単一エンドポイントで振り分ける必要があります。どのロードバランサーを使うべきですか？",
        "`example.com/api/*` request တွေကို container အုပ်စုတစ်ခုဆီ၊ `example.com/images/*` ကို နောက်အုပ်စုဆီ HTTPS ပါတဲ့ endpoint တစ်ခုတည်းကနေ ပို့ရမယ်။ ဘယ် load balancer သုံးရမလဲ?"),
      options: ['Network Load Balancer', 'Application Load Balancer', 'Gateway Load Balancer', 'Classic Load Balancer'],
      correct: [1],
      explanation: L("The ALB works at Layer 7 and supports path-based routing rules that send each path to a different target group. An NLB works at Layer 4 and only sees ports and protocols, so it cannot inspect URL paths.",
        "ALB はレイヤー 7 で動作し、パスごとに異なるターゲットグループへ送るパスベースのルーティングルールをサポートします。NLB はレイヤー 4 で動作し、ポートとプロトコルしか見ないため、URL パスを判別できません。",
        "ALB က Layer 7 မှာ အလုပ်လုပ်ပြီး path တစ်ခုချင်းကို target group မတူတဲ့ဆီ ပို့တဲ့ path-based routing rule ကို support လုပ်တယ်။ NLB က Layer 4 မှာ အလုပ်လုပ်ပြီး port နဲ့ protocol ပဲ မြင်လို့ URL path ကို မခွဲနိုင်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("A security review requires that EC2 instance metadata is protected against SSRF attacks using IMDSv2. Which TWO statements about IMDSv2 are correct? (Select TWO)",
        "セキュリティレビューで、IMDSv2 を使って EC2 インスタンスメタデータを SSRF 攻撃から保護することが求められました。IMDSv2 について正しい記述はどれですか？（2 つ選択）",
        "Security review က IMDSv2 သုံးပြီး EC2 instance metadata ကို SSRF attack ကနေ ကာကွယ်ဖို့ လိုအပ်တယ်။ IMDSv2 အကြောင်း မှန်တဲ့ statement နှစ်ခုက ဘာလဲ? (နှစ်ခု ရွေးပါ)"),
      options: ['A session token must first be obtained with an HTTP PUT request', 'Each request must be signed with an IAM access key', 'Metadata becomes reachable from the internet through the public IP', 'The service is reached at the link-local address 169.254.169.254'],
      correct: [0, 3],
      explanation: L("IMDSv2 is session-oriented: the caller sends a PUT to get a token, then includes it in a header on each GET to 169.254.169.254, which is only reachable from inside the instance. No IAM access key is needed, and metadata is never exposed on the public IP.",
        "IMDSv2 はセッション指向で、呼び出し元は PUT でトークンを取得し、169.254.169.254 への各 GET のヘッダーにそれを含めます。このアドレスはインスタンス内部からのみ到達可能です。IAM アクセスキーは不要で、メタデータがパブリック IP で公開されることはありません。",
        "IMDSv2 က session-oriented ပါ — ခေါ်တဲ့သူက PUT နဲ့ token ယူပြီး 169.254.169.254 ကို GET တိုင်း header ထဲ ထည့်ပို့ရတယ်၊ ဒီ address ကို instance အထဲကပဲ ရောက်နိုင်တယ်။ IAM access key မလိုဘူး၊ metadata ကို public IP ကနေ ဘယ်တော့မှ မဖွင့်ပေးဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("Administrators need shell access to EC2 instances in private subnets. Security policy forbids inbound port 22, bastion hosts and shared SSH keys, and every session must be logged. What should they use?",
        "管理者はプライベートサブネットの EC2 インスタンスにシェルでアクセスする必要があります。セキュリティポリシーでインバウンドの 22 番ポート、踏み台ホスト、共有 SSH キーは禁止され、すべてのセッションを記録する必要があります。何を使うべきですか？",
        "Administrator တွေက private subnet ထဲက EC2 instance တွေကို shell access လိုတယ်။ Security policy က inbound port 22၊ bastion host၊ shared SSH key တွေကို တားထားပြီး session တိုင်းကို log သိမ်းရမယ်။ ဘာသုံးရမလဲ?"),
      options: ['AWS Systems Manager Session Manager', 'EC2 Instance Connect with a public IP address', 'A bastion host in a public subnet', 'RDP through an Elastic IP address'],
      correct: [0],
      explanation: L("Session Manager connects through the SSM Agent over outbound HTTPS, so no inbound ports, bastions or keys are needed, and sessions can be logged to CloudWatch Logs or S3. EC2 Instance Connect still uses SSH on port 22, and a bastion host is explicitly forbidden.",
        "Session Manager は SSM Agent を通じてアウトバウンドの HTTPS で接続するため、インバウンドポート・踏み台・キーは不要で、セッションを CloudWatch Logs や S3 に記録できます。EC2 Instance Connect は依然として 22 番ポートの SSH を使い、踏み台ホストは明示的に禁止されています。",
        "Session Manager က SSM Agent ကနေ outbound HTTPS နဲ့ ချိတ်လို့ inbound port၊ bastion၊ key မလိုဘဲ session တွေကို CloudWatch Logs သို့ S3 မှာ log သိမ်းနိုင်တယ်။ EC2 Instance Connect က port 22 SSH ကို သုံးနေဆဲဖြစ်ပြီး bastion host ကိုတော့ တိုက်ရိုက် တားထားတယ်။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("An Auto Scaling group should keep the average CPU utilization of its instances at about 50% with the least configuration effort. Which scaling policy should be used?",
        "Auto Scaling グループで、最小限の設定作業でインスタンスの平均 CPU 使用率を約 50% に保ちたいです。どのスケーリングポリシーを使うべきですか？",
        "Auto Scaling group က instance တွေရဲ့ ပျမ်းမျှ CPU utilization ကို 50% လောက်မှာ configuration အနည်းဆုံးနဲ့ ထိန်းချင်တယ်။ ဘယ် scaling policy သုံးရမလဲ?"),
      options: ['Scheduled scaling', 'Simple scaling', 'Step scaling', 'Target tracking scaling'],
      correct: [3],
      explanation: L("Target tracking works like a thermostat: you set the metric and the target value, and Auto Scaling creates and manages the CloudWatch alarms. Step scaling can achieve similar results but requires you to define alarms and step adjustments yourself, and scheduled scaling ignores actual load.",
        "ターゲット追跡はサーモスタットのように動作し、メトリクスと目標値を設定するだけで Auto Scaling が CloudWatch アラームを作成・管理します。ステップスケーリングでも同様の結果は得られますが、アラームとステップ調整を自分で定義する必要があり、スケジュールされたスケーリングは実際の負荷を考慮しません。",
        "Target tracking က thermostat လိုပါ — metric နဲ့ target value သတ်မှတ်ရုံနဲ့ Auto Scaling က CloudWatch alarm တွေကို ဆောက်ပြီး စီမံပေးတယ်။ Step scaling နဲ့လည်း ရလဒ်တူနိုင်ပေမယ့် alarm နဲ့ step adjustment တွေကို ကိုယ်တိုင် သတ်မှတ်ရတယ်၊ scheduled scaling ကတော့ တကယ့် load ကို မကြည့်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("A company is migrating software whose license is priced per physical CPU socket and requires the same physical server across restarts. Which EC2 option should it choose?",
        "ある企業は、物理 CPU ソケット単位でライセンス料金が決まり、再起動しても同じ物理サーバーが必要なソフトウェアを移行しています。どの EC2 オプションを選ぶべきですか？",
        "Company တစ်ခုက physical CPU socket အလိုက် license ဈေးသတ်မှတ်ပြီး restart လုပ်လည်း physical server တစ်ခုတည်း လိုအပ်တဲ့ software ကို migrate လုပ်နေတယ်။ ဘယ် EC2 option ရွေးရမလဲ?"),
      options: ['Dedicated Instances', 'Dedicated Hosts', 'On-Demand Capacity Reservations', 'Spot Instances'],
      correct: [1],
      explanation: L("Dedicated Hosts give you a whole physical server with visibility of sockets and cores and host affinity, which is what bring-your-own-license per-socket models require. Dedicated Instances also run on single-tenant hardware but give no socket visibility or control over which host is used.",
        "Dedicated Hosts は物理サーバー 1 台を専有でき、ソケットとコアの可視性とホストアフィニティを提供します。これはソケット単位の BYOL モデルに必要な条件です。Dedicated Instances もシングルテナントのハードウェアで動きますが、ソケットの可視性や使用するホストの制御はありません。",
        "Dedicated Host က physical server တစ်လုံးလုံးကို socket နဲ့ core မြင်ရပြီး host affinity နဲ့ ပေးတယ်၊ ဒါက socket အလိုက် BYOL model တွေ လိုအပ်တာပါ။ Dedicated Instance လည်း single-tenant hardware ပေါ်မှာ run ပေမယ့် socket ကို မမြင်ရ၊ ဘယ် host သုံးမလဲ မထိန်းနိုင်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['CLF-C02', 'SAA-C03'],
      prompt: L("A team wants to run Docker containers without provisioning, patching or scaling any EC2 instances. Which TWO options meet this requirement? (Select TWO)",
        "チームは EC2 インスタンスのプロビジョニング・パッチ適用・スケーリングを一切せずに Docker コンテナを実行したいと考えています。この要件を満たすものはどれですか？（2 つ選択）",
        "Team တစ်ခုက EC2 instance တစ်ခုမှ provision၊ patch၊ scale မလုပ်ဘဲ Docker container run ချင်တယ်။ ဒီ requirement နဲ့ ကိုက်တဲ့ option နှစ်ခုက ဘာလဲ? (နှစ်ခု ရွေးပါ)"),
      options: ['Amazon ECS with the EC2 launch type', 'Amazon ECS on AWS Fargate', 'Amazon EC2 Auto Scaling', 'Amazon EKS with AWS Fargate', 'AWS Outposts'],
      correct: [1, 3],
      explanation: L("Fargate is the serverless compute engine for containers and works with both ECS and EKS, so there are no instances to manage. The ECS EC2 launch type runs tasks on a cluster of EC2 instances that you must patch and scale yourself.",
        "Fargate はコンテナ向けのサーバーレスなコンピューティングエンジンで、ECS と EKS の両方で使えるため、管理するインスタンスがありません。ECS の EC2 起動タイプは、自分でパッチ適用とスケーリングを行う EC2 インスタンスのクラスター上でタスクを実行します。",
        "Fargate က container အတွက် serverless compute engine ဖြစ်ပြီး ECS ရော EKS ရော နဲ့ သုံးလို့ရလို့ စီမံစရာ instance မရှိဘူး။ ECS EC2 launch type ကတော့ ကိုယ်တိုင် patch နဲ့ scale လုပ်ရတဲ့ EC2 instance cluster ပေါ်မှာ task run တယ်။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("Instances in an Auto Scaling group behind an ALB sometimes return HTTP 500 errors because the application hangs, but the ASG never replaces them. EC2 status checks are passing. What should be done?",
        "ALB の背後にある Auto Scaling グループのインスタンスが、アプリのハングにより時々 HTTP 500 エラーを返しますが、ASG はそれらを置き換えません。EC2 ステータスチェックは成功しています。どうすべきですか？",
        "ALB နောက်က Auto Scaling group ထဲက instance တွေ app hang လို့ တစ်ခါတစ်ခါ HTTP 500 error ပြန်နေပေမယ့် ASG က အစားမထိုးဘူး။ EC2 status check တွေက pass ဖြစ်နေတယ်။ ဘာလုပ်ရမလဲ?"),
      options: ['Enable Elastic Load Balancing health checks on the Auto Scaling group', 'Increase the health check grace period', 'Replace the target tracking policy with scheduled scaling', 'Add a lifecycle hook to the Auto Scaling group'],
      correct: [0],
      explanation: L("By default an ASG uses only EC2 status checks, which test the hypervisor and OS reachability, not the application. With the ELB health check type, instances the ALB marks unhealthy are terminated and replaced. A longer grace period would only delay health checking further.",
        "既定では ASG は EC2 ステータスチェックのみを使い、これはハイパーバイザーや OS への到達性を確認するだけでアプリケーションは確認しません。ヘルスチェックタイプを ELB にすると、ALB が異常と判断したインスタンスが終了・置き換えられます。猶予期間を延ばしても、ヘルスチェックの開始がさらに遅れるだけです。",
        "Default အရ ASG က EC2 status check ပဲ သုံးတယ်၊ ဒါက hypervisor နဲ့ OS ရောက်လားပဲ စစ်တာ၊ application ကို မစစ်ဘူး။ Health check type ကို ELB ထားရင် ALB က unhealthy လို့ သတ်မှတ်တဲ့ instance တွေကို terminate လုပ်ပြီး အစားထိုးတယ်။ Grace period ပိုရှည်ရင် health check စတာ ပိုနောက်ကျရုံပဲ။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("A research team runs a tightly coupled HPC simulation using MPI. Nodes exchange data constantly and need the lowest possible network latency and highest throughput between them. How should the instances be placed?",
        "研究チームは MPI を使った密結合の HPC シミュレーションを実行しています。ノード間で常にデータを交換するため、ノード間で可能な限り低いネットワークレイテンシーと最大のスループットが必要です。インスタンスをどう配置すべきですか？",
        "Research team တစ်ခုက MPI သုံးတဲ့ tightly coupled HPC simulation run တယ်။ Node တွေက data ကို အမြဲဖလှယ်နေလို့ node ကြား network latency အနည်းဆုံးနဲ့ throughput အများဆုံး လိုတယ်။ Instance တွေကို ဘယ်လို နေရာချရမလဲ?"),
      options: ['In a spread placement group across three AZs', 'In a partition placement group with seven partitions', 'In a cluster placement group in a single AZ', 'Across multiple Regions behind an NLB'],
      correct: [2],
      explanation: L("A cluster placement group packs instances close together in one AZ on a high-bandwidth, low-latency network segment, which is ideal for tightly coupled MPI workloads. Spreading across AZs or racks improves fault isolation but increases latency between nodes.",
        "クラスタープレイスメントグループは、インスタンスを 1 つの AZ 内の高帯域・低レイテンシーのネットワークセグメントに密集させるため、密結合の MPI ワークロードに最適です。AZ やラックに分散させると障害の分離は向上しますが、ノード間のレイテンシーが増えます。",
        "Cluster placement group က instance တွေကို AZ တစ်ခုထဲက bandwidth မြင့်၊ latency နည်းတဲ့ network segment ပေါ်မှာ နီးနီးကပ်ကပ် ထားလို့ tightly coupled MPI workload အတွက် အကောင်းဆုံးပါ။ AZ သို့ rack တွေ ခွဲထားရင် fault isolation ကောင်းလာပေမယ့် node ကြား latency များလာတယ်။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("A company is deploying a 300-node Apache Cassandra cluster on EC2. It wants to reduce the impact of correlated hardware failures, and the database must know which rack each node is in so it can place replicas correctly. Which placement strategy should be used?",
        "ある企業が EC2 上に 300 ノードの Apache Cassandra クラスターをデプロイします。相関するハードウェア障害の影響を減らしたく、レプリカを正しく配置するために、各ノードがどのラックにあるかをデータベースが把握する必要があります。どの配置戦略を使うべきですか？",
        "Company တစ်ခုက EC2 ပေါ်မှာ node ၃၀၀ ပါတဲ့ Apache Cassandra cluster ကို deploy လုပ်မယ်။ ဆက်စပ်ပြီး ပျက်တတ်တဲ့ hardware failure ရဲ့ သက်ရောက်မှုကို လျှော့ချင်ပြီး replica တွေကို မှန်မှန်ထားနိုင်အောင် node တစ်ခုချင်း ဘယ် rack မှာလဲ database က သိရမယ်။ ဘယ် placement strategy သုံးရမလဲ?"),
      options: ['Partition placement group', 'Spread placement group', 'Cluster placement group', 'Dedicated Hosts with host affinity'],
      correct: [0],
      explanation: L("Partition placement groups split instances into partitions that do not share racks, support hundreds of instances, and expose the partition number through instance metadata for rack-aware replication. A spread placement group is limited to 7 running instances per AZ, far too few for 300 nodes.",
        "パーティションプレイスメントグループは、ラックを共有しないパーティションにインスタンスを分け、数百台をサポートし、ラック認識型レプリケーションのためにパーティション番号をインスタンスメタデータで公開します。スプレッドプレイスメントグループは AZ あたり実行中 7 台までに制限されるため、300 ノードには少なすぎます。",
        "Partition placement group က instance တွေကို rack မမျှတဲ့ partition တွေ ခွဲထားပြီး instance ရာချီကို support လုပ်တယ်၊ rack-aware replication အတွက် partition နံပါတ်ကို instance metadata ကနေ ပြပေးတယ်။ Spread placement group က AZ တစ်ခုကို run နေတဲ့ instance ၇ ခုပဲ ရလို့ node ၃၀၀ အတွက် အရမ်းနည်းတယ်။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("A multiplayer game backend uses a custom UDP protocol and must handle millions of packets per second with very low latency. Partners also need fixed IP addresses per AZ to add to their firewall allow-lists. Which load balancer should be used?",
        "マルチプレイヤーゲームのバックエンドは独自の UDP プロトコルを使い、非常に低いレイテンシーで毎秒数百万パケットを処理する必要があります。また、取引先はファイアウォールの許可リストに追加するため、AZ ごとに固定 IP アドレスを必要としています。どのロードバランサーを使うべきですか？",
        "Multiplayer game backend တစ်ခုက custom UDP protocol သုံးပြီး latency အရမ်းနည်းနည်းနဲ့ တစ်စက္ကန့် packet သန်းချီကို ကိုင်တွယ်ရမယ်။ Partner တွေကလည်း firewall allow-list ထဲ ထည့်ဖို့ AZ တစ်ခုချင်း ပုံသေ IP address လိုတယ်။ ဘယ် load balancer သုံးရမလဲ?"),
      options: ['Application Load Balancer', 'Network Load Balancer', 'Gateway Load Balancer', 'Classic Load Balancer'],
      correct: [1],
      explanation: L("The NLB operates at Layer 4, supports UDP, handles millions of requests per second at ultra-low latency, and provides one static IP per AZ that can be an Elastic IP. The ALB supports only HTTP/HTTPS/gRPC and does not provide static IP addresses.",
        "NLB はレイヤー 4 で動作し、UDP をサポートし、超低レイテンシーで毎秒数百万リクエストを処理でき、AZ ごとに Elastic IP にもできる静的 IP を 1 つ提供します。ALB は HTTP/HTTPS/gRPC のみをサポートし、静的 IP アドレスを提供しません。",
        "NLB က Layer 4 မှာ အလုပ်လုပ်ပြီး UDP ကို support လုပ်တယ်၊ latency အရမ်းနည်းနည်းနဲ့ တစ်စက္ကန့် request သန်းချီ ကိုင်နိုင်တယ်၊ AZ တစ်ခုချင်း Elastic IP လည်း ဖြစ်နိုင်တဲ့ static IP တစ်ခု ပေးတယ်။ ALB က HTTP/HTTPS/gRPC ပဲ support လုပ်ပြီး static IP address မပေးဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("A video transcoding step currently runs in AWS Lambda but some files now take 25–40 minutes to process, causing timeouts. The team wants to avoid managing servers where possible. Which TWO solutions are appropriate? (Select TWO)",
        "動画のトランスコード処理は現在 AWS Lambda で動いていますが、一部のファイルは処理に 25〜40 分かかるようになり、タイムアウトが発生しています。チームは可能な限りサーバー管理を避けたいと考えています。適切な解決策はどれですか？（2 つ選択）",
        "Video transcoding step ကို အခု AWS Lambda မှာ run နေပေမယ့် file တချို့က process လုပ်ဖို့ ၂၅–၄၀ မိနစ် ကြာလာလို့ timeout ဖြစ်နေတယ်။ Team က ဖြစ်နိုင်သမျှ server မစီမံချင်ဘူး။ သင့်တော်တဲ့ solution နှစ်ခုက ဘာလဲ? (နှစ်ခု ရွေးပါ)"),
      options: ['Run the job as an Amazon ECS task on AWS Fargate', 'Increase the Lambda timeout to 45 minutes', 'Enable provisioned concurrency on the function', 'Submit the job to AWS Batch using Fargate or Spot compute', 'Increase the Lambda memory to 10,240 MB'],
      correct: [0, 3],
      explanation: L("Lambda has a hard maximum of 15 minutes per invocation, so long jobs must move to a service without that limit: Fargate tasks or AWS Batch both run for hours without servers to manage. Provisioned concurrency only reduces cold starts, and more memory may speed up processing but cannot guarantee that 40-minute jobs fit under 15 minutes.",
        "Lambda は 1 回の呼び出しあたり最大 15 分という固定の上限があるため、長時間のジョブはその制限のないサービスに移す必要があります。Fargate タスクと AWS Batch はどちらもサーバー管理なしで数時間実行できます。プロビジョニングされた同時実行はコールドスタートを減らすだけで、メモリを増やしても処理は速くなる可能性がありますが、40 分のジョブが 15 分以内に収まる保証はありません。",
        "Lambda မှာ invocation တစ်ခါကို အများဆုံး ၁၅ မိနစ်ဆိုတဲ့ ပုံသေ limit ရှိလို့ ကြာတဲ့ job တွေကို အဲ့ limit မရှိတဲ့ service ကို ရွှေ့ရမယ် — Fargate task နဲ့ AWS Batch နှစ်ခုလုံး server မစီမံဘဲ နာရီချီ run နိုင်တယ်။ Provisioned concurrency က cold start ကိုပဲ လျှော့ပေးတယ်၊ memory တိုးရင် မြန်လာနိုင်ပေမယ့် ၄၀ မိနစ် job က ၁၅ မိနစ်အတွင်း ပြီးမယ်လို့ အာမမခံနိုင်ဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("A clustered database requires block storage shared by several instances in the same AZ (Multi-Attach), 99.999% durability and consistent sub-millisecond latency. Which EBS volume type should be used?",
        "クラスター化されたデータベースには、同じ AZ 内の複数インスタンスで共有するブロックストレージ（Multi-Attach）、99.999% の耐久性、安定したミリ秒未満のレイテンシーが必要です。どの EBS ボリュームタイプを使うべきですか？",
        "Clustered database တစ်ခုက AZ တူထဲက instance အများကြီး မျှသုံးတဲ့ block storage (Multi-Attach)၊ 99.999% durability နဲ့ တည်ငြိမ်တဲ့ millisecond အောက် latency လိုတယ်။ ဘယ် EBS volume type သုံးရမလဲ?"),
      options: ['gp3', 'st1', 'sc1', 'io2 Block Express'],
      correct: [3],
      explanation: L("io2 Block Express is the Provisioned IOPS SSD class designed for 99.999% durability, sub-millisecond latency and Multi-Attach. gp3 is a cost-effective general-purpose SSD with lower durability (99.8–99.9%) and no Multi-Attach support, and st1/sc1 are HDD types for throughput or cold data.",
        "io2 Block Express は、99.999% の耐久性・ミリ秒未満のレイテンシー・Multi-Attach のために設計されたプロビジョンド IOPS SSD です。gp3 はコスト効率の良い汎用 SSD ですが、耐久性は低く（99.8〜99.9%）Multi-Attach をサポートせず、st1/sc1 はスループット重視やコールドデータ向けの HDD です。",
        "io2 Block Express က 99.999% durability၊ millisecond အောက် latency၊ Multi-Attach အတွက် design လုပ်ထားတဲ့ Provisioned IOPS SSD ပါ။ gp3 က ဈေးသက်သာတဲ့ general-purpose SSD ဖြစ်ပေမယ့် durability နည်းတယ် (99.8–99.9%)၊ Multi-Attach မရဘူး၊ st1/sc1 က throughput သို့ cold data အတွက် HDD type တွေပါ။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("A stateless web tier runs in an Auto Scaling group. The company wants to cut costs with Spot Instances while minimizing interruptions and keeping a baseline of reliable capacity. Which TWO configurations should be used? (Select TWO)",
        "ステートレスな Web 層が Auto Scaling グループで動いています。中断を最小限に抑え、信頼できるベースキャパシティを維持しつつ、Spot インスタンスでコストを削減したいと考えています。使うべき設定はどれですか？（2 つ選択）",
        "Stateless web tier တစ်ခု Auto Scaling group မှာ run နေတယ်။ Company က interruption အနည်းဆုံးဖြစ်အောင်၊ ယုံကြည်ရတဲ့ baseline capacity လည်း ထားပြီး Spot Instance နဲ့ ကုန်ကျစရိတ် လျှော့ချင်တယ်။ ဘယ် configuration နှစ်ခု သုံးရမလဲ? (နှစ်ခု ရွေးပါ)"),
      options: ['Use a single instance type in a single AZ to simplify capacity planning', 'Use a mixed instances policy with an On-Demand base capacity and several instance types across multiple AZs', 'Launch the Spot Instances on Dedicated Hosts', 'Use the price-capacity-optimized Spot allocation strategy'],
      correct: [1, 3],
      explanation: L("A mixed instances policy keeps an On-Demand base and diversifies Spot across many instance types and AZs, so a single capacity pool reclaim affects only part of the fleet; the price-capacity-optimized strategy picks the deepest, cheapest pools to lower interruption rates. Using one instance type in one AZ concentrates all Spot capacity in a single pool and maximizes interruption risk.",
        "混合インスタンスポリシーは On-Demand のベースを維持し、Spot を多数のインスタンスタイプと AZ に分散させるため、1 つのキャパシティプールが回収されてもフリートの一部しか影響を受けません。price-capacity-optimized 戦略は、余裕が大きく安価なプールを選んで中断率を下げます。1 つの AZ で 1 種類のインスタンスタイプだけを使うと、Spot キャパシティが 1 つのプールに集中し、中断のリスクが最大になります。",
        "Mixed instances policy က On-Demand base ကို ထိန်းထားပြီး Spot ကို instance type နဲ့ AZ အများကြီးမှာ ခွဲထားလို့ capacity pool တစ်ခု ပြန်ယူခံရလည်း fleet ရဲ့ တစ်စိတ်တစ်ပိုင်းပဲ ထိတယ်၊ price-capacity-optimized strategy က capacity များပြီး ဈေးနည်းတဲ့ pool တွေကို ရွေးလို့ interruption နည်းတယ်။ AZ တစ်ခုထဲမှာ instance type တစ်မျိုးတည်း သုံးရင် Spot capacity အကုန် pool တစ်ခုထဲ စုသွားပြီး interruption risk အများဆုံး ဖြစ်တယ်။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("A retailer needs guaranteed EC2 capacity of 40 `c7i.2xlarge` instances in `ap-northeast-1a` for a two-week sale event, without any 1- or 3-year commitment. Which option meets this requirement?",
        "ある小売業者は、2 週間のセールイベントのために `ap-northeast-1a` で `c7i.2xlarge` 40 台分の EC2 キャパシティを保証したいと考えていますが、1 年や 3 年のコミットはしたくありません。この要件を満たすオプションはどれですか？",
        "Retailer တစ်ခုက ၂ ပတ်ကြာ sale event အတွက် `ap-northeast-1a` မှာ `c7i.2xlarge` ၄၀ လုံးစာ EC2 capacity ကို အာမခံချင်တယ်၊ ၁ နှစ် သို့ ၃ နှစ် commitment လုံးဝ မလုပ်ချင်ဘူး။ ဘယ် option က ကိုက်လဲ?"),
      options: ['Regional Reserved Instances', 'A Compute Savings Plan', 'A Spot Fleet with capacity-optimized allocation', 'An On-Demand Capacity Reservation'],
      correct: [3],
      explanation: L("On-Demand Capacity Reservations reserve capacity in a specific AZ for any duration with no term commitment; you can cancel after the event. Regional RIs and Savings Plans provide billing discounts with a 1- or 3-year term but do not reserve capacity, and Spot capacity can be reclaimed at any time.",
        "オンデマンドキャパシティ予約は、期間の縛りなしで特定の AZ に任意の期間キャパシティを確保でき、イベント後にキャンセルできます。リージョナル RI と Savings Plans は 1 年または 3 年の期間で請求上の割引を提供しますが、キャパシティは確保せず、Spot のキャパシティはいつでも回収される可能性があります。",
        "On-Demand Capacity Reservation က term commitment မရှိဘဲ AZ တစ်ခုမှာ ကြိုက်သလောက်ကြာ capacity ကြိုယူထားနိုင်ပြီး event ပြီးရင် cancel လုပ်လို့ရတယ်။ Regional RI နဲ့ Savings Plans က ၁ နှစ် သို့ ၃ နှစ် term နဲ့ billing discount ပေးပေမယ့် capacity မယူပေးဘူး၊ Spot capacity ကတော့ ဘယ်အချိန်မဆို ပြန်ယူခံရနိုင်တယ်။"),
    },
  ],
  flashcards: [
    { term: 'Burstable instance (T family)',
      definition: L("An instance that earns CPU credits below its baseline and spends them to burst; unlimited mode charges for surplus credits.", "ベースライン未満で CPU クレジットを貯め、それを使ってバーストするインスタンス。unlimited モードでは超過クレジットが課金されます。", "Baseline အောက်မှာ CPU credit စုပြီး burst လိုတဲ့အခါ သုံးတဲ့ instance ပါ၊ unlimited mode မှာ ပိုသုံးတဲ့ credit အတွက် ငွေပေးရတယ်။"),
      example: L("A `t3.micro` blog is idle most of the day and bursts briefly when a post is shared.", "`t3.micro` のブログは一日の大半はアイドルで、記事がシェアされたときだけ短時間バーストします。", "`t3.micro` ပေါ်က blog က တစ်နေကုန် အလွတ်နီးပါးဖြစ်ပြီး post share ခံရချိန်မှာပဲ ခဏ burst တယ်။") },
    { term: 'AMI (Amazon Machine Image)',
      definition: L("A regional template containing the OS, software and block device mapping used to launch instances.", "インスタンスの起動に使う、OS・ソフトウェア・ブロックデバイスマッピングを含むリージョン単位のテンプレート。", "Instance launch လုပ်ဖို့ သုံးတဲ့ OS၊ software၊ block device mapping ပါတဲ့ region အလိုက် template ပါ။"),
      example: L("Bake a golden AMI with Nginx and the CloudWatch agent, then copy it from Tokyo to Osaka for DR.", "Nginx と CloudWatch エージェントを入れたゴールデン AMI を作成し、DR のために東京から大阪へコピーします。", "Nginx နဲ့ CloudWatch agent ပါတဲ့ golden AMI လုပ်ပြီး DR အတွက် Tokyo ကနေ Osaka ကို copy ကူးတယ်။") },
    { term: 'IMDSv2',
      definition: L("Session-token-based access to instance metadata at 169.254.169.254: PUT for a token, then GET with the token header.", "169.254.169.254 のインスタンスメタデータへのセッショントークン方式のアクセス。PUT でトークンを取得し、トークンヘッダー付きで GET します。", "169.254.169.254 က instance metadata ကို session token နဲ့ ဝင်တဲ့နည်း — PUT နဲ့ token ယူ၊ token header နဲ့ GET လုပ်။"),
      example: L("Set `HttpTokens=required` on every instance so an SSRF bug cannot leak IAM role credentials.", "すべてのインスタンスで `HttpTokens=required` を設定し、SSRF のバグで IAM ロールの認証情報が漏れないようにします。", "Instance တိုင်းမှာ `HttpTokens=required` ထားလို့ SSRF bug ကြောင့် IAM role credential မပေါက်ကြားဘူး။") },
    { term: 'Compute Savings Plans',
      definition: L("A 1- or 3-year commitment to a dollar amount per hour that discounts EC2, Fargate and Lambda regardless of family, size, OS or Region.", "1 年または 3 年、1 時間あたりの金額をコミットし、ファミリー・サイズ・OS・リージョンに関係なく EC2・Fargate・Lambda を割引するプラン。", "၁ နှစ် သို့ ၃ နှစ် တစ်နာရီ $ ပမာဏ commit လုပ်ပြီး family၊ size၊ OS၊ Region မရွေး EC2၊ Fargate၊ Lambda ကို discount ပေးတဲ့ plan ပါ။"),
      example: L("Commit to the steady baseline you always use, and leave peaks on On-Demand or Spot.", "常に使う安定したベースライン分をコミットし、ピーク分は On-Demand や Spot に任せます。", "အမြဲသုံးတဲ့ baseline ကိုပဲ commit လုပ်ပြီး peak တွေကို On-Demand သို့ Spot နဲ့ ထားတယ်။") },
    { term: 'Spot Instance',
      definition: L("Spare EC2 capacity at up to 90% off that AWS can reclaim with a 2-minute interruption notice.", "最大 90% 割引で使える EC2 の余剰キャパシティで、AWS が 2 分前の中断通知で回収できます。", "90% အထိ လျှော့ဈေးနဲ့ သုံးရတဲ့ EC2 အပို capacity ဖြစ်ပြီး ၂ မိနစ် interruption notice နဲ့ AWS က ပြန်ယူနိုင်တယ်။"),
      example: L("CI build agents and batch rendering run on Spot; the production database never does.", "CI のビルドエージェントやバッチレンダリングは Spot で動かしますが、本番 DB は決して Spot に置きません。", "CI build agent နဲ့ batch rendering ကို Spot ပေါ် run တယ်၊ production database ကိုတော့ ဘယ်တော့မှ မတင်ဘူး။") },
    { term: 'Placement group',
      definition: L("A way to influence instance placement: cluster (low latency, one AZ), spread (separate racks, 7 per AZ) or partition (rack-isolated groups).", "インスタンスの配置を制御する仕組み：クラスター（低レイテンシー、1 AZ）、スプレッド（別ラック、AZ あたり 7 台）、パーティション（ラック分離されたグループ）。", "Instance နေရာချထားမှုကို ထိန်းတဲ့နည်း — cluster (latency နည်း၊ AZ တစ်ခု)၊ spread (rack ခွဲ၊ AZ တစ်ခု ၇ ခု)၊ partition (rack ခွဲထားတဲ့ group)။"),
      example: L("Put a Kafka cluster in a partition placement group so a rack failure affects only one partition.", "Kafka クラスターをパーティションプレイスメントグループに置き、ラック障害の影響を 1 つのパーティションに限定します。", "Kafka cluster ကို partition placement group ထဲထားလို့ rack တစ်ခုပျက်ရင် partition တစ်ခုပဲ ထိတယ်။") },
    { term: 'gp3',
      definition: L("The default general-purpose SSD EBS volume with a 3,000 IOPS / 125 MiB/s baseline at any size and independently provisioned performance.", "サイズに関係なく 3,000 IOPS / 125 MiB/s のベースラインを持ち、性能を独立して設定できる既定の汎用 SSD EBS ボリューム。", "Size မရွေး 3,000 IOPS / 125 MiB/s baseline ပါပြီး performance ကို သီးခြား သတ်မှတ်လို့ရတဲ့ default general-purpose SSD EBS volume ပါ။"),
      example: L("Convert old gp2 volumes to gp3 online with `modify-volume` to save cost without downtime.", "古い gp2 ボリュームを `modify-volume` でオンラインのまま gp3 に変換し、ダウンタイムなしでコストを削減します。", "gp2 volume အဟောင်းတွေကို `modify-volume` နဲ့ online မှာပဲ gp3 ပြောင်းလို့ downtime မရှိဘဲ ငွေချွေတယ်။") },
    { term: 'Elastic IP',
      definition: L("A static public IPv4 address owned by your account in one Region until released; billed hourly like all public IPv4 addresses.", "解放するまで 1 つのリージョンでアカウントが所有する静的パブリック IPv4 アドレス。すべてのパブリック IPv4 と同様に時間単位で課金されます。", "Release မလုပ်မချင်း Region တစ်ခုမှာ ကိုယ့် account ပိုင်တဲ့ static public IPv4 ပါ၊ public IPv4 အားလုံးလိုပဲ တစ်နာရီချင်း charge ယူတယ်။"),
      example: L("Remap the EIP from a failed server to its standby so DNS and partner allow-lists do not change.", "障害の起きたサーバーからスタンバイに EIP を付け替え、DNS や取引先の許可リストを変更せずに済ませます。", "ပျက်သွားတဲ့ server ကနေ standby ဆီ EIP ကို ပြောင်းတပ်လို့ DNS နဲ့ partner allow-list မပြောင်းရဘူး။") },
    { term: 'Launch template',
      definition: L("A versioned definition of how to launch instances (AMI, type, key pair, security groups, IAM role, user data) used by Auto Scaling and EC2.", "Auto Scaling や EC2 が使う、インスタンスの起動方法（AMI・タイプ・キーペア・セキュリティグループ・IAM ロール・ユーザーデータ）をバージョン管理した定義。", "Auto Scaling နဲ့ EC2 သုံးတဲ့ instance launch နည်း (AMI၊ type၊ key pair၊ security group၊ IAM role၊ user data) ကို version နဲ့ သိမ်းထားတဲ့ definition ပါ။"),
      example: L("Create version 2 with a new AMI, then run an instance refresh to roll it out across the ASG.", "新しい AMI でバージョン 2 を作成し、インスタンスの更新（instance refresh）で ASG 全体に展開します。", "AMI အသစ်နဲ့ version 2 လုပ်ပြီး instance refresh run လို့ ASG တစ်ခုလုံးကို ဖြန့်တယ်။") },
    { term: 'Application Load Balancer',
      definition: L("A Layer 7 load balancer for HTTP, HTTPS, gRPC and WebSocket with path, host and header-based routing to target groups.", "HTTP・HTTPS・gRPC・WebSocket 向けのレイヤー 7 ロードバランサーで、パス・ホスト・ヘッダーに基づいてターゲットグループへルーティングします。", "HTTP၊ HTTPS၊ gRPC၊ WebSocket အတွက် Layer 7 load balancer ဖြစ်ပြီး path၊ host၊ header အလိုက် target group ဆီ route လုပ်တယ်။"),
      example: L("`/api/*` goes to an ECS service and `/admin/*` to a separate Auto Scaling group, both behind one HTTPS listener.", "`/api/*` は ECS サービスへ、`/admin/*` は別の Auto Scaling グループへ送り、どちらも 1 つの HTTPS リスナーの背後に置きます。", "`/api/*` က ECS service ဆီ၊ `/admin/*` က သီးခြား Auto Scaling group ဆီ သွားပြီး နှစ်ခုလုံး HTTPS listener တစ်ခုနောက်မှာ ရှိတယ်။") },
    { term: 'AWS Lambda',
      definition: L("Serverless, event-driven functions billed per request and duration, with a 15-minute maximum per invocation.", "リクエスト数と実行時間で課金される、サーバーレスなイベント駆動の関数。1 回の呼び出しは最大 15 分です。", "Request နဲ့ ကြာချိန်အလိုက် charge ယူတဲ့ serverless၊ event-driven function ပါ၊ invocation တစ်ခါ အများဆုံး ၁၅ မိနစ်။"),
      example: L("An S3 upload triggers a function that creates a thumbnail in two seconds.", "S3 へのアップロードで関数が起動し、2 秒でサムネイルを作成します。", "S3 upload တစ်ခုက function ကို trigger လုပ်ပြီး ၂ စက္ကန့်အတွင်း thumbnail လုပ်ပေးတယ်။") },
    { term: 'AWS Fargate',
      definition: L("Serverless compute for containers on ECS or EKS: you specify task vCPU and memory, and AWS runs it without instances to manage.", "ECS や EKS 上のコンテナ向けサーバーレスコンピューティング。タスクの vCPU とメモリを指定するだけで、管理するインスタンスなしで AWS が実行します。", "ECS သို့ EKS ပေါ်က container အတွက် serverless compute ပါ — task ရဲ့ vCPU နဲ့ memory သတ်မှတ်ရုံနဲ့ instance မစီမံဘဲ AWS က run ပေးတယ်။"),
      example: L("Run the API as an ECS service on Fargate with 0.5 vCPU and 1 GB per task, scaled by Service Auto Scaling.", "API を Fargate 上の ECS サービスとして、タスクあたり 0.5 vCPU・1 GB で実行し、Service Auto Scaling でスケールします。", "API ကို Fargate ပေါ်က ECS service အဖြစ် task တစ်ခုကို 0.5 vCPU၊ 1 GB နဲ့ run ပြီး Service Auto Scaling နဲ့ scale လုပ်တယ်။") },
  ],
};
