import { L, type SeedTopic } from './types.js';

export const awsTopics: SeedTopic[] = [
  {
    slug: 'aws-fundamentals',
    icon: 'Cloud',
    name: L('Cloud Fundamentals', 'クラウドの基礎', 'Cloud အခြေခံ'),
    description: L(
      'Global infrastructure, shared responsibility, accounts and the Well-Architected Framework.',
      'グローバルインフラ、責任共有、アカウント、Well-Architected フレームワーク。',
      'Global infrastructure၊ Shared responsibility၊ Account နဲ့ Well-Architected Framework။',
    ),
    questions: [
      {
        difficulty: 'EASY',
        prompt: L(
          'What is an AWS Availability Zone?',
          'AWS のアベイラビリティーゾーンとは何ですか？',
          'AWS Availability Zone ဆိုတာ ဘာလဲ?',
        ),
        options: [
          'A single server rack',
          'One or more discrete datacenters with independent power and networking inside a Region',
          'A global edge location for CloudFront',
          'A billing group of accounts',
        ],
        correct: [1],
        explanation: L(
          'Each Region has multiple, isolated AZs. Deploying across AZs protects you from a single datacenter failure.',
          '各リージョンには独立した複数の AZ があり、AZ をまたいだ配置でデータセンター障害に備えます。',
          'Region တစ်ခုမှာ သီးခြား AZ အများကြီးရှိပြီး AZ ခွဲထားရင် datacenter တစ်ခုပျက်လည်း ဆက် run တယ်။',
        ),
      },
      {
        difficulty: 'EASY',
        prompt: L(
          'Under the shared responsibility model, who patches the guest OS on an EC2 instance?',
          '責任共有モデルで EC2 のゲスト OS にパッチを当てるのは誰ですか？',
          'Shared responsibility အရ EC2 ရဲ့ OS ကို patch ဘယ်သူ လုပ်ရလဲ?',
        ),
        options: ['AWS', 'The customer', 'The AWS Marketplace vendor', 'Nobody — EC2 patches itself'],
        correct: [1],
        explanation: L(
          'EC2 is IaaS: AWS secures the hardware and hypervisor, you manage the OS, patches and security groups.',
          'EC2 は IaaS です。AWS はハードウェアとハイパーバイザー、利用者は OS・パッチ・SG を管理します。',
          'EC2 က IaaS ဖြစ်လို့ OS၊ patch၊ security group ကို customer က စီမံရတယ်။',
        ),
      },
      {
        difficulty: 'MEDIUM',
        prompt: L(
          'Which is NOT one of the six pillars of the AWS Well-Architected Framework?',
          'AWS Well-Architected フレームワークの 6 つの柱に含まれないものは？',
          'AWS Well-Architected Framework ရဲ့ pillar ၆ ခုထဲ မပါတာက ဘာလဲ?',
        ),
        options: ['Operational Excellence', 'Security', 'Scalability', 'Sustainability'],
        correct: [2],
        explanation: L(
          'The pillars are Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization and Sustainability.',
          '6 つの柱: 運用上の優秀性、セキュリティ、信頼性、パフォーマンス効率、コスト最適化、持続可能性。',
          'Pillar ၆ ခု — Operational Excellence၊ Security၊ Reliability၊ Performance Efficiency၊ Cost Optimization၊ Sustainability။',
        ),
      },
      {
        difficulty: 'MEDIUM',
        prompt: L(
          'What should you do with the AWS account root user?',
          'AWS アカウントのルートユーザーはどう扱うべきですか？',
          'AWS root user ကို ဘယ်လို ကိုင်တွယ်သင့်လဲ?',
        ),
        options: [
          'Use it for daily work',
          'Enable MFA, avoid access keys and use it only for root-only tasks',
          'Share it with the whole team',
          'Delete it after creating IAM users',
        ],
        correct: [1],
        explanation: L(
          'Protect the root user with MFA, do not create access keys for it, and use IAM Identity Center or IAM roles for daily tasks.',
          'ルートユーザーは MFA で保護し、アクセスキーを作らず、日常作業には IAM を使います。',
          'Root user ကို MFA နဲ့ ကာကွယ်၊ access key မဆောက်ဘဲ နေ့စဉ်အလုပ်ကို IAM နဲ့ လုပ်ပါ။',
        ),
      },
      {
        difficulty: 'HARD',
        prompt: L(
          'Which service centrally manages multiple AWS accounts and applies Service Control Policies?',
          '複数アカウントを一元管理し SCP を適用するサービスは？',
          'AWS account အများကြီးကို ဗဟိုကနေ စီမံပြီး SCP ချတဲ့ service က?',
        ),
        options: ['AWS Organizations', 'AWS Config', 'AWS Control Panel', 'Amazon Inspector'],
        correct: [0],
        explanation: L(
          'AWS Organizations groups accounts into OUs, enables consolidated billing and applies SCP guardrails — similar to Azure Management Groups.',
          'AWS Organizations は OU でアカウントをまとめ、一括請求と SCP を提供します（Azure の管理グループに近い）。',
          'AWS Organizations က account တွေ OU ဖွဲ့၊ billing စု၊ SCP ချ — Azure Management Group နဲ့ ဆင်တယ်။',
        ),
      },
    ],
    flashcards: [
      { term: 'Region', definition: L('Geographic area with multiple isolated Availability Zones.', '複数の独立した AZ を持つ地理的エリア。', 'AZ အများကြီးပါတဲ့ ပထဝီဝင်နေရာ။'), example: L('ap-northeast-1 (Tokyo)') },
      { term: 'Availability Zone', definition: L('One or more datacenters with independent power and networking.', '独立した電源とネットワークを持つデータセンター群。', 'မီး၊ network သီးခြားရှိတဲ့ datacenter အုပ်စု။') },
      { term: 'Edge Location', definition: L('Point of presence used by CloudFront and Route 53 for low latency.', 'CloudFront や Route 53 が使う拠点。', 'CloudFront/Route 53 သုံးတဲ့ user နဲ့ နီးတဲ့နေရာ။') },
      { term: 'Root User', definition: L('Account owner with full access. Protect with MFA and do not use daily.', '全権限を持つ所有者。MFA で保護し日常利用しない。', 'အကုန်လုပ်ခွင့်ရှိ account ပိုင်ရှင်။ MFA ထား၊ နေ့စဉ်မသုံး။') },
      { term: 'AWS Organizations', definition: L('Multi-account management with OUs, SCPs and consolidated billing.', 'OU・SCP・一括請求による複数アカウント管理。', 'Account အများကြီး စီမံ၊ SCP၊ billing စု။') },
      { term: 'Well-Architected Framework', definition: L('Six pillars of best practice for cloud architecture.', 'クラウド設計のベストプラクティス 6 本柱。', 'Cloud design ရဲ့ best practice pillar ၆ ခု။') },
    ],
  },
  {
    slug: 'aws-compute',
    icon: 'Server',
    name: L('EC2 & Compute', 'EC2 とコンピューティング', 'EC2 နဲ့ Compute'),
    description: L(
      'EC2 instance types, states, purchasing options, Auto Scaling and Lambda.',
      'EC2 のタイプ、状態、購入オプション、Auto Scaling、Lambda。',
      'EC2 instance type၊ state၊ ဝယ်နည်း၊ Auto Scaling နဲ့ Lambda။',
    ),
    questions: [
      {
        difficulty: 'EASY',
        prompt: L(
          'You STOP an EBS-backed EC2 instance. What are you still charged for?',
          'EBS ベースの EC2 を停止しました。引き続き課金されるのは？',
          'EBS-backed EC2 ကို Stop လုပ်ရင် ဘာအတွက် ငွေဆက်ကုန်လဲ?',
        ),
        options: ['Instance compute hours', 'Attached EBS volumes', 'Nothing at all', 'Instance store volumes'],
        correct: [1],
        explanation: L(
          'Stopped instances are not billed for compute, but EBS volumes (and Elastic IPs not in use) still cost money.',
          '停止中はコンピューティング料金はかかりませんが、EBS ボリュームは課金されます。',
          'Stop လုပ်ထားရင် compute ငွေ မကုန်ပေမယ့် EBS volume ငွေ ဆက်ကုန်တယ်။',
        ),
      },
      {
        difficulty: 'MEDIUM',
        prompt: L(
          'What happens to data on an instance store volume when you stop the instance?',
          'インスタンスを停止するとインスタンスストアのデータはどうなりますか？',
          'Instance ကို stop လုပ်ရင် instance store ပေါ်က data ဘာဖြစ်လဲ?',
        ),
        options: ['It is preserved', 'It is lost', 'It is moved to S3', 'It is converted to EBS'],
        correct: [1],
        explanation: L(
          'Instance store is temporary local storage on the host — like Azure’s temporary disk. Stop or terminate erases it.',
          'インスタンスストアはホスト上の一時ストレージで、停止・終了で消えます（Azure の一時ディスクに相当）。',
          'Instance store က host ပေါ်က ယာယီ disk (Azure temp disk လို)၊ stop လုပ်ရင် ပျောက်တယ်။',
        ),
      },
      {
        difficulty: 'MEDIUM',
        prompt: L(
          'How much warning does AWS give before reclaiming a Spot Instance?',
          'スポットインスタンスが回収される前の通知は何分前ですか？',
          'Spot Instance ကို AWS ပြန်ယူမယ့်အခါ ဘယ်လောက် ကြိုသတိပေးလဲ?',
        ),
        options: ['30 seconds', '2 minutes', '15 minutes', '1 hour'],
        correct: [1],
        explanation: L(
          'AWS sends a two-minute interruption notice. (Azure Spot VMs give about 30 seconds.)',
          'AWS は 2 分前に中断通知を送ります（Azure Spot は約 30 秒）。',
          'AWS က ၂ မိနစ် ကြိုသတိပေးတယ် (Azure Spot က ၃၀ စက္ကန့်)။',
        ),
      },
      {
        difficulty: 'EASY',
        prompt: L(
          'Which service automatically adds or removes EC2 instances based on demand?',
          '需要に応じて EC2 を自動で増減するサービスは？',
          'Load အလိုက် EC2 ကို အလိုလို တိုး/လျှော့ပေးတဲ့ service က?',
        ),
        options: ['EC2 Auto Scaling', 'AWS Batch', 'Elastic Beanstalk', 'AWS Outposts'],
        correct: [0],
        explanation: L(
          'An Auto Scaling group keeps a desired capacity and scales with policies — the AWS counterpart of an Azure VM Scale Set.',
          'Auto Scaling グループはポリシーで台数を調整します（Azure VMSS に相当）。',
          'Auto Scaling group က policy နဲ့ instance ချိန်ပေး — Azure VMSS နဲ့ တူတယ်။',
        ),
      },
      {
        difficulty: 'HARD',
        prompt: L(
          'Which options give a discount in exchange for a 1- or 3-year commitment? (Select all that apply)',
          '1 年または 3 年の確約で割引になるものをすべて選んでください。',
          '၁ နှစ်/၃ နှစ် ကတိပေးရင် ဈေးလျှော့တာတွေ အကုန်ရွေးပါ။',
        ),
        options: ['Savings Plans', 'Reserved Instances', 'Spot Instances', 'On-Demand Instances'],
        correct: [0, 1],
        explanation: L(
          'Savings Plans and Reserved Instances require a term commitment. Spot uses spare capacity without commitment.',
          'Savings Plans と RI は期間確約が必要です。スポットは確約なしの余剰容量です。',
          'Savings Plans နဲ့ RI က ကတိလို။ Spot က ကတိမလိုဘဲ လက်ကျန် capacity သုံးတာ။',
        ),
      },
    ],
    flashcards: [
      { term: 'EC2', definition: L('Virtual servers in AWS (IaaS).', 'AWS の仮想サーバー（IaaS）。', 'AWS ရဲ့ virtual server။'), example: L('t3.micro, m7g.large') },
      { term: 'AMI', definition: L('Amazon Machine Image — template used to launch an instance.', 'インスタンス起動用のテンプレート。', 'Instance ဆောက်ဖို့ OS template။') },
      { term: 'Instance Store', definition: L('Temporary host-attached storage, lost on stop or terminate.', 'ホストに付属する一時ストレージ。停止で消える。', 'Host ပေါ်က ယာယီ storage၊ stop လုပ်ရင် ပျောက်။') },
      { term: 'Auto Scaling Group', definition: L('Keeps desired instance count and scales by policy.', '希望台数を維持しポリシーで増減。', 'Instance အရေအတွက် ထိန်းပြီး policy နဲ့ တိုး/လျှော့။') },
      { term: 'Spot Instance', definition: L('Spare capacity at a deep discount with a 2-minute interruption notice.', '大幅割引の余剰容量。2 分前に中断通知。', 'ဈေးပေါ၊ ၂ မိနစ် ကြိုသတိပေးပြီး ပြန်ယူနိုင်။') },
      { term: 'AWS Lambda', definition: L('Serverless functions billed per request and duration.', 'リクエストと実行時間で課金されるサーバーレス関数。', 'Run သလောက်ပဲ ပေးရတဲ့ serverless function။') },
    ],
  },
  {
    slug: 'aws-networking',
    icon: 'Network',
    name: L('VPC & Networking', 'VPC とネットワーク', 'VPC နဲ့ Networking'),
    description: L(
      'VPC, subnets, route tables, security groups vs NACLs, gateways and load balancers.',
      'VPC、サブネット、ルートテーブル、SG と NACL、ゲートウェイ、ロードバランサー。',
      'VPC၊ Subnet၊ Route table၊ Security group နဲ့ NACL၊ Gateway၊ Load balancer။',
    ),
    questions: [
      {
        difficulty: 'EASY',
        prompt: L(
          'What makes a subnet "public" in a VPC?',
          'VPC のサブネットが「パブリック」になる条件は？',
          'VPC subnet တစ်ခုကို "public" ဖြစ်စေတာ ဘာလဲ?',
        ),
        options: [
          'Its name contains "public"',
          'Its route table has a route to an Internet Gateway',
          'It uses a /16 CIDR',
          'It has a NAT Gateway inside it',
        ],
        correct: [1],
        explanation: L(
          'A public subnet has a route (0.0.0.0/0) to an Internet Gateway. Private subnets reach the internet through a NAT Gateway.',
          'インターネットゲートウェイへのルート（0.0.0.0/0）があればパブリックです。プライベートは NAT 経由。',
          'Route table မှာ Internet Gateway ဆီ route ရှိရင် public။ Private subnet က NAT Gateway ကနေ ထွက်တယ်။',
        ),
      },
      {
        difficulty: 'MEDIUM',
        prompt: L(
          'Which statements about Security Groups are true? (Select all that apply)',
          'セキュリティグループについて正しいものをすべて選んでください。',
          'Security Group အကြောင်း မှန်တာတွေ အကုန်ရွေးပါ။',
        ),
        options: ['They are stateful', 'They support allow rules only', 'They are evaluated in numbered order', 'They apply at the instance (ENI) level'],
        correct: [0, 1, 3],
        explanation: L(
          'Security groups are stateful, allow-only and attached to ENIs. Network ACLs are stateless, support deny, and use numbered rule order.',
          'SG はステートフル・許可のみ・ENI 単位。NACL はステートレスで拒否ルールあり、番号順に評価されます。',
          'SG က stateful၊ allow ပဲ၊ ENI မှာချိတ်။ NACL က stateless၊ deny ရ၊ နံပါတ်အစဉ်နဲ့ စစ်တယ်။',
        ),
      },
      {
        difficulty: 'MEDIUM',
        prompt: L(
          'How many IP addresses does AWS reserve in each subnet?',
          'AWS は各サブネットで IP アドレスをいくつ予約しますか？',
          'AWS က subnet တိုင်းမှာ IP ဘယ်နှခု ယူထားလဲ?',
        ),
        options: ['2', '4', '5', '8'],
        correct: [2],
        explanation: L(
          'AWS reserves the first four and the last IP of every subnet — the same number as Azure.',
          'AWS も先頭 4 つと最後の 1 つ、計 5 個を予約します（Azure と同じ）。',
          'AWS ကလည်း ပထမ ၄ ခု + နောက်ဆုံး ၁ ခု = ၅ ခု ယူတယ် (Azure နဲ့ တူ)။',
        ),
      },
      {
        difficulty: 'EASY',
        prompt: L(
          'Which load balancer routes HTTP requests by path and host header?',
          'パスやホストヘッダーで HTTP を振り分けるロードバランサーは？',
          'Path နဲ့ host header အလိုက် HTTP ခွဲပေးတဲ့ load balancer က?',
        ),
        options: ['Application Load Balancer', 'Network Load Balancer', 'Gateway Load Balancer', 'Classic Load Balancer'],
        correct: [0],
        explanation: L(
          'ALB works at Layer 7 (like Azure Application Gateway). NLB works at Layer 4 for TCP/UDP.',
          'ALB は L7（Azure Application Gateway 相当）、NLB は L4（TCP/UDP）です。',
          'ALB က Layer 7 (Azure App Gateway လို)၊ NLB က Layer 4။',
        ),
      },
      {
        difficulty: 'HARD',
        prompt: L(
          'How can you open a shell on an EC2 instance with NO inbound port 22 and no bastion host?',
          'インバウンド 22 番も踏み台も使わずに EC2 でシェルを開く方法は？',
          'Port 22 မဖွင့်၊ bastion မထားဘဲ EC2 ထဲ shell ဝင်နည်းက?',
        ),
        options: ['EC2 Instance Connect over port 22', 'AWS Systems Manager Session Manager', 'Elastic IP address', 'VPC Peering'],
        correct: [1],
        explanation: L(
          'Session Manager uses the SSM agent and an IAM role, so no inbound ports or SSH keys are required, and sessions are logged.',
          'Session Manager は SSM エージェントと IAM ロールで接続し、インバウンドポートや SSH キーが不要です。',
          'Session Manager က SSM agent နဲ့ IAM role သုံးလို့ port ဖွင့်စရာ၊ SSH key မလို။',
        ),
      },
    ],
    flashcards: [
      { term: 'VPC', definition: L('Your isolated virtual network in AWS (CIDR /16 to /28).', 'AWS 内の分離された仮想ネットワーク（/16〜/28）。', 'AWS ထဲက ကိုယ်ပိုင် virtual network။') },
      { term: 'Internet Gateway', definition: L('Allows public subnets to reach the internet.', 'パブリックサブネットをインターネットに接続。', 'Public subnet ကို internet နဲ့ ချိတ်။') },
      { term: 'NAT Gateway', definition: L('Lets private subnets make outbound internet connections.', 'プライベートサブネットからの送信接続を許可。', 'Private subnet ကနေ internet ထွက်ခွင့်ပေး။') },
      { term: 'Security Group', definition: L('Stateful, allow-only firewall at the instance level.', 'インスタンス単位のステートフル・許可のみのファイアウォール。', 'Instance level stateful firewall (allow ပဲ)။') },
      { term: 'Network ACL', definition: L('Stateless subnet firewall with ordered allow/deny rules.', '番号順の許可/拒否を持つステートレスなサブネット FW。', 'Subnet level stateless firewall (allow/deny)။') },
      { term: 'Session Manager', definition: L('Shell access through SSM without inbound ports or SSH keys.', 'インバウンドポートや SSH キー不要のシェル接続。', 'Port/SSH key မလိုဘဲ shell ဝင်နည်း။') },
    ],
  },
  {
    slug: 'aws-storage',
    icon: 'HardDrive',
    name: L('S3 & EBS', 'S3 と EBS', 'S3 နဲ့ EBS'),
    description: L(
      'Object storage classes, durability, EBS volume types and snapshots.',
      'オブジェクトストレージクラス、耐久性、EBS ボリュームタイプ、スナップショット。',
      'S3 storage class၊ durability၊ EBS volume type နဲ့ snapshot။',
    ),
    questions: [
      {
        difficulty: 'EASY',
        prompt: L(
          'What durability does Amazon S3 Standard offer?',
          'Amazon S3 Standard の耐久性は？',
          'Amazon S3 Standard ရဲ့ durability က ဘယ်လောက်လဲ?',
        ),
        options: ['99.9%', '99.99%', '99.999999999% (11 nines)', '100%'],
        correct: [2],
        explanation: L(
          'S3 is designed for 11 nines of durability by storing data redundantly across multiple AZs.',
          'S3 は複数 AZ に冗長保存し、イレブンナイン（99.999999999%）の耐久性を目指して設計されています。',
          'S3 က AZ အများကြီးမှာ ခွဲသိမ်းလို့ durability 11 nines (99.999999999%)။',
        ),
      },
      {
        difficulty: 'MEDIUM',
        prompt: L(
          'Which S3 storage class is cheapest for long-term archives that are rarely retrieved?',
          'ほとんど取り出さない長期アーカイブに最も安い S3 ストレージクラスは？',
          'ခဏခဏ မထုတ်တဲ့ archive အတွက် အသက်သာဆုံး S3 class က?',
        ),
        options: ['S3 Standard', 'S3 Standard-IA', 'S3 Glacier Deep Archive', 'S3 Express One Zone'],
        correct: [2],
        explanation: L(
          'Glacier Deep Archive has the lowest storage price with retrieval times measured in hours.',
          'Glacier Deep Archive は最安ですが、取り出しに数時間かかります。',
          'Glacier Deep Archive က အသက်သာဆုံးပေမယ့် ပြန်ထုတ်ရင် နာရီချီကြာတယ်။',
        ),
      },
      {
        difficulty: 'MEDIUM',
        prompt: L(
          'Which EBS volume type is the default general-purpose SSD with independently configurable IOPS?',
          'IOPS を個別に設定できる汎用 SSD のデフォルト EBS タイプは？',
          'IOPS ကို သီးခြားချိန်လို့ရတဲ့ default general-purpose SSD EBS type က?',
        ),
        options: ['gp3', 'io2', 'st1', 'sc1'],
        correct: [0],
        explanation: L(
          'gp3 lets you set IOPS and throughput independently of size. io2 is for the most demanding databases.',
          'gp3 はサイズと独立して IOPS とスループットを設定できます。io2 は高負荷 DB 向けです。',
          'gp3 က size နဲ့ မဆိုင်ဘဲ IOPS/throughput ချိန်ရ။ io2 က DB အကြီးတွေအတွက်။',
        ),
      },
      {
        difficulty: 'EASY',
        prompt: L(
          'Where are EBS snapshots stored and how are they billed?',
          'EBS スナップショットはどこに保存され、どう課金されますか？',
          'EBS snapshot ကို ဘယ်မှာ သိမ်းပြီး ဘယ်လို ငွေတောင်းလဲ?',
        ),
        options: ['On the instance store, free', 'In S3 (managed by AWS), incrementally', 'In Glacier only, per snapshot', 'On another EBS volume, full copy each time'],
        correct: [1],
        explanation: L(
          'Snapshots are stored in AWS-managed S3 and are incremental — only changed blocks are saved after the first one.',
          'スナップショットは AWS 管理の S3 に増分で保存され、変更ブロックのみ課金されます。',
          'Snapshot ကို AWS စီမံတဲ့ S3 ထဲ incremental (ပြောင်းတဲ့ block ပဲ) သိမ်းတယ်။',
        ),
      },
      {
        difficulty: 'HARD',
        prompt: L(
          'An EBS volume is created in us-east-1a. Can you attach it to an instance in us-east-1b?',
          'us-east-1a で作成した EBS を us-east-1b のインスタンスに接続できますか？',
          'us-east-1a မှာ ဆောက်တဲ့ EBS ကို us-east-1b က instance မှာ တပ်လို့ရလား?',
        ),
        options: ['Yes, directly', 'No — create a snapshot and restore it in us-east-1b', 'Only with Multi-Attach', 'Only if both use gp3'],
        correct: [1],
        explanation: L(
          'EBS volumes are AZ-scoped. Snapshot the volume and create a new volume from it in the target AZ.',
          'EBS は AZ 単位です。スナップショットから別 AZ に新しいボリュームを作成します。',
          'EBS က AZ အလိုက်ပဲ။ Snapshot ယူပြီး တခြား AZ မှာ volume အသစ် ပြန်ဆောက်ရတယ်။',
        ),
      },
    ],
    flashcards: [
      { term: 'Amazon S3', definition: L('Object storage with 11 nines durability.', 'イレブンナインの耐久性を持つオブジェクトストレージ。', 'Durability 11 nines ရှိတဲ့ object storage။') },
      { term: 'S3 Glacier Deep Archive', definition: L('Lowest-cost archive class; retrieval in hours.', '最安のアーカイブクラス。取り出しは数時間。', 'အသက်သာဆုံး archive၊ ပြန်ထုတ်ရင် နာရီချီ။') },
      { term: 'S3 Lifecycle Rule', definition: L('Automatically moves or deletes objects by age.', '経過日数でオブジェクトを自動移行・削除。', 'ရက်အလိုက် object ကို class ပြောင်း/ဖျက်။') },
      { term: 'EBS', definition: L('Block storage volume attached to EC2, scoped to one AZ.', 'EC2 に接続するブロックストレージ。AZ 単位。', 'EC2 မှာ တပ်တဲ့ disk၊ AZ တစ်ခုအတွင်းပဲ။') },
      { term: 'gp3', definition: L('General-purpose SSD with independent IOPS and throughput.', 'IOPS とスループットを個別設定できる汎用 SSD。', 'IOPS ကို သီးခြားချိန်ရတဲ့ SSD။') },
      { term: 'EBS Snapshot', definition: L('Incremental backup of a volume stored in S3.', 'S3 に保存されるボリュームの増分バックアップ。', 'S3 ထဲ သိမ်းတဲ့ incremental backup။') },
    ],
  },
  {
    slug: 'aws-iam',
    icon: 'ShieldCheck',
    name: L('IAM & Security', 'IAM とセキュリティ', 'IAM နဲ့ Security'),
    description: L(
      'Users, groups, roles, policies, least privilege and security services.',
      'ユーザー、グループ、ロール、ポリシー、最小権限、セキュリティサービス。',
      'User၊ Group၊ Role၊ Policy၊ least privilege နဲ့ security service။',
    ),
    questions: [
      {
        difficulty: 'EASY',
        prompt: L(
          'An application on EC2 needs to read from S3. What is the recommended way to grant access?',
          'EC2 上のアプリが S3 を読む必要があります。推奨される権限付与方法は？',
          'EC2 ပေါ်က app က S3 ကို ဖတ်ဖို့ ဘယ်လို ခွင့်ပေးသင့်လဲ?',
        ),
        options: ['Store access keys in the code', 'Attach an IAM role (instance profile)', 'Use the root user keys', 'Make the bucket public'],
        correct: [1],
        explanation: L(
          'An IAM role provides temporary credentials automatically — the AWS equivalent of an Azure managed identity.',
          'IAM ロールは一時的な認証情報を自動提供します（Azure のマネージド ID に相当）。',
          'IAM role က ယာယီ credential ကို အလိုလိုပေး — Azure Managed Identity နဲ့ တူတယ်။',
        ),
      },
      {
        difficulty: 'MEDIUM',
        prompt: L(
          'An identity policy allows s3:* but an explicit Deny exists for s3:DeleteObject. What is the result for DeleteObject?',
          'ID ポリシーで s3:* を許可、s3:DeleteObject は明示的に拒否。DeleteObject の結果は？',
          'Policy က s3:* ကို Allow ပေမယ့် s3:DeleteObject ကို Deny ထားရင် DeleteObject က?',
        ),
        options: ['Allowed', 'Denied', 'Allowed only for the root user', 'Depends on the region'],
        correct: [1],
        explanation: L('In IAM policy evaluation an explicit Deny always overrides any Allow.', 'IAM の評価では明示的な Deny が常に Allow より優先されます。', 'IAM မှာ explicit Deny က Allow ကို အမြဲ အနိုင်ယူတယ်။'),
      },
      {
        difficulty: 'MEDIUM',
        prompt: L(
          'Which service records API calls made in your AWS account for auditing?',
          'アカウント内の API 呼び出しを監査用に記録するサービスは？',
          'AWS account ထဲက API call တွေကို audit အတွက် မှတ်တမ်းတင်တဲ့ service က?',
        ),
        options: ['Amazon CloudWatch', 'AWS CloudTrail', 'AWS X-Ray', 'Amazon GuardDuty'],
        correct: [1],
        explanation: L(
          'CloudTrail logs who did what and when. CloudWatch is for metrics, logs and alarms.',
          'CloudTrail は「誰がいつ何をしたか」を記録します。CloudWatch はメトリクスとアラーム用です。',
          'CloudTrail က ဘယ်သူ ဘာလုပ်လဲ မှတ်တယ်။ CloudWatch က metric/alarm အတွက်။',
        ),
      },
      {
        difficulty: 'EASY',
        prompt: L(
          'What does the principle of least privilege mean?',
          '最小権限の原則とは何ですか？',
          'Least privilege ဆိုတာ ဘာလဲ?',
        ),
        options: [
          'Give everyone administrator access',
          'Grant only the permissions needed to perform a task',
          'Use as few IAM users as possible',
          'Disable MFA for service accounts',
        ],
        correct: [1],
        explanation: L(
          'Grant the minimum permissions required, and review them regularly with tools such as IAM Access Analyzer.',
          '必要最小限の権限のみ付与し、IAM Access Analyzer などで定期的に見直します。',
          'လိုသလောက် permission ပဲပေးပြီး ပုံမှန် ပြန်စစ်ပါ။',
        ),
      },
      {
        difficulty: 'HARD',
        prompt: L(
          'Which services help protect against threats? Match the right ones. (Select all that apply)',
          '脅威対策に役立つサービスをすべて選んでください。',
          'Threat ကာကွယ်ရာမှာ ကူညီတဲ့ service တွေ အကုန်ရွေးပါ။',
        ),
        options: ['Amazon GuardDuty', 'AWS WAF', 'AWS Shield', 'Amazon Polly'],
        correct: [0, 1, 2],
        explanation: L(
          'GuardDuty detects threats, WAF filters web attacks and Shield protects against DDoS. Polly is text-to-speech.',
          'GuardDuty は脅威検知、WAF は Web 攻撃対策、Shield は DDoS 対策。Polly は音声合成です。',
          'GuardDuty = threat ရှာ၊ WAF = web attack ကာ၊ Shield = DDoS ကာ။ Polly က text-to-speech။',
        ),
      },
    ],
    flashcards: [
      { term: 'IAM Role', definition: L('Identity with temporary credentials assumed by services or users.', 'サービスやユーザーが引き受ける一時認証情報の ID。', 'Service/user က ယာယီ assume လုပ်တဲ့ identity။') },
      { term: 'IAM Policy', definition: L('JSON document that allows or denies actions on resources.', 'リソース操作を許可/拒否する JSON 文書。', 'Allow/Deny ကို ရေးတဲ့ JSON document။') },
      { term: 'Explicit Deny', definition: L('Always overrides any Allow in policy evaluation.', '評価時に常に Allow より優先される。', 'Allow ကို အမြဲ အနိုင်ယူတယ်။') },
      { term: 'AWS CloudTrail', definition: L('Audit log of API activity in the account.', 'アカウント内 API 操作の監査ログ。', 'API activity audit log။') },
      { term: 'Amazon GuardDuty', definition: L('Managed threat detection using logs and intelligence.', 'ログと脅威情報を使ったマネージド脅威検知。', 'Log ကြည့်ပြီး threat ရှာပေး။') },
      { term: 'AWS KMS', definition: L('Managed encryption keys (similar to Azure Key Vault keys).', 'マネージド暗号化キー（Azure Key Vault のキーに相当）。', 'Encryption key စီမံ (Key Vault လို)။') },
    ],
  },
  {
    slug: 'aws-operations',
    icon: 'Activity',
    name: L('Monitoring & Cost', '監視とコスト', 'Monitoring နဲ့ Cost'),
    description: L(
      'CloudWatch, budgets, Trusted Advisor, IaC and Azure ↔ AWS mapping.',
      'CloudWatch、Budgets、Trusted Advisor、IaC、Azure と AWS の対応。',
      'CloudWatch၊ Budgets၊ Trusted Advisor၊ IaC နဲ့ Azure ↔ AWS နှိုင်းယှဉ်ချက်။',
    ),
    questions: [
      {
        difficulty: 'EASY',
        prompt: L(
          'Which service creates alarms when EC2 CPU goes above 80%?',
          'EC2 の CPU が 80% を超えたらアラームを出すサービスは？',
          'EC2 CPU 80% ကျော်ရင် alarm ထုတ်တဲ့ service က?',
        ),
        options: ['Amazon CloudWatch', 'AWS CloudTrail', 'AWS Config', 'AWS Artifact'],
        correct: [0],
        explanation: L('CloudWatch collects metrics and triggers alarms (similar to Azure Monitor).', 'CloudWatch はメトリクスを収集しアラームを発行します（Azure Monitor 相当）。', 'CloudWatch က metric စုပြီး alarm ထုတ်တယ် (Azure Monitor လို)။'),
      },
      {
        difficulty: 'MEDIUM',
        prompt: L(
          'What is the AWS equivalent of an Azure Resource Group for infrastructure as code deployments?',
          'IaC デプロイにおける Azure リソースグループの AWS 相当は？',
          'IaC deploy မှာ Azure Resource Group နဲ့ အနီးစပ်ဆုံး AWS ဟာက?',
        ),
        options: ['CloudFormation stack', 'Availability Zone', 'Security group', 'S3 bucket'],
        correct: [0],
        explanation: L(
          'A CloudFormation stack groups resources deployed together; deleting the stack removes them. AWS also has Resource Groups based on tags.',
          'CloudFormation スタックは一緒にデプロイされたリソースをまとめ、削除で一括削除されます。',
          'CloudFormation stack က အတူ deploy လုပ်တဲ့ resource တွေ စုထားပြီး stack ဖျက်ရင် အကုန်ပျက်တယ်။',
        ),
      },
      {
        difficulty: 'MEDIUM',
        prompt: L(
          'Which tool alerts you when forecasted monthly spend exceeds a threshold?',
          '月額予測がしきい値を超えたら通知するツールは？',
          'လစဉ် ခန့်မှန်းငွေ သတ်မှတ်ချက်ကျော်ရင် သတိပေးတဲ့ tool က?',
        ),
        options: ['AWS Budgets', 'AWS Pricing Calculator', 'AWS Marketplace', 'AWS Health Dashboard'],
        correct: [0],
        explanation: L('AWS Budgets sends alerts on actual or forecasted cost and usage.', 'AWS Budgets は実績・予測のコストや使用量でアラートを送ります。', 'AWS Budgets က အမှန်/ခန့်မှန်း ငွေအလိုက် alert ပို့တယ်။'),
      },
      {
        difficulty: 'EASY',
        prompt: L(
          'Azure Virtual Machine Scale Sets map to which AWS feature?',
          'Azure VM Scale Sets に相当する AWS の機能は？',
          'Azure VM Scale Set နဲ့ ညီတဲ့ AWS feature က?',
        ),
        options: ['EC2 Auto Scaling groups', 'AWS Lambda', 'Elastic IP', 'AWS Outposts'],
        correct: [0],
        explanation: L('Both maintain a fleet of identical instances that scale automatically.', 'どちらも同一インスタンス群を自動スケールで維持します。', 'နှစ်ခုလုံး တူညီ instance အုပ်စုကို autoscale လုပ်တယ်။'),
      },
      {
        difficulty: 'HARD',
        prompt: L(
          'Match correctly: which pairs are equivalent between Azure and AWS? (Select all that apply)',
          'Azure と AWS で対応する組み合わせをすべて選んでください。',
          'Azure နဲ့ AWS ညီတဲ့ အတွဲတွေ အကုန်ရွေးပါ။',
        ),
        options: ['VNet ↔ VPC', 'NSG ↔ Security Group', 'Blob Storage ↔ Amazon S3', 'Key Vault ↔ Amazon Route 53'],
        correct: [0, 1, 2],
        explanation: L(
          'Key Vault maps to AWS KMS / Secrets Manager. Route 53 maps to Azure DNS.',
          'Key Vault は KMS / Secrets Manager、Route 53 は Azure DNS に相当します。',
          'Key Vault = KMS/Secrets Manager၊ Route 53 = Azure DNS။',
        ),
      },
    ],
    flashcards: [
      { term: 'Amazon CloudWatch', definition: L('Metrics, logs and alarms for AWS resources.', 'AWS リソースのメトリクス・ログ・アラーム。', 'Metric၊ log၊ alarm platform။') },
      { term: 'AWS Budgets', definition: L('Alerts on actual or forecasted cost and usage.', '実績・予測コストのアラート。', 'Cost/usage alert။') },
      { term: 'Trusted Advisor', definition: L('Best-practice checks for cost, security and limits.', 'コスト・セキュリティ・上限のベストプラクティス診断。', 'Cost/security best practice စစ်ပေး။') },
      { term: 'CloudFormation', definition: L('AWS-native infrastructure as code using stacks.', 'スタックを使う AWS ネイティブの IaC。', 'Stack သုံးတဲ့ AWS IaC။') },
      { term: 'Azure ↔ AWS: VNet / VPC', definition: L('Both are private virtual networks with subnets.', 'どちらもサブネットを持つプライベート仮想ネットワーク。', 'နှစ်ခုလုံး subnet ပါတဲ့ private network။') },
      { term: 'Azure ↔ AWS: Monitor / CloudWatch', definition: L('Metrics, logs and alerts services on each cloud.', '各クラウドのメトリクス・ログ・アラートサービス。', 'Cloud တစ်ခုချင်းရဲ့ monitoring service။') },
    ],
  },
];
