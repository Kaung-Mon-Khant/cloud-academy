import { L, type SeedTopic } from '../types.js';

export const topic: SeedTopic = {
  slug: 'azure-fundamentals',
  icon: 'Cloud',
  level: 'FOUNDATIONAL',
  exams: ['AZ-900'],
  name: L("Cloud Concepts & Azure Fundamentals", "クラウドの概念と Azure の基礎", "Cloud အယူအဆနဲ့ Azure အခြေခံ"),
  description: L(
    "Why the cloud exists, IaaS/PaaS/SaaS, deployment models, shared responsibility, Azure regions and zones, and the resource hierarchy managed by Azure Resource Manager.",
    "クラウドが選ばれる理由、IaaS/PaaS/SaaS、デプロイモデル、責任共有モデル、Azure のリージョンとゾーン、そして Azure Resource Manager が管理するリソース階層を学びます。",
    "Cloud ကို ဘာကြောင့်သုံးလဲ၊ IaaS/PaaS/SaaS၊ deployment model တွေ၊ shared responsibility၊ Azure region နဲ့ zone တွေ၊ Azure Resource Manager က စီမံတဲ့ resource hierarchy ကို လေ့လာမယ်။",
  ),
  lesson: {
    minutes: 18,
    objectives: [
      L("Explain CapEx vs OpEx and the consumption-based model with a real business example.",
        "CapEx と OpEx の違い、従量課金モデルを実際のビジネス例で説明できる。",
        "CapEx နဲ့ OpEx ကွာခြားချက်၊ consumption-based model ကို လက်တွေ့ business ဥပမာနဲ့ ရှင်းပြနိုင်မယ်။"),
      L("Distinguish scalability from elasticity, and high availability from reliability.",
        "スケーラビリティと弾力性、高可用性と信頼性の違いを区別できる。",
        "Scalability နဲ့ Elasticity၊ High availability နဲ့ Reliability ကို ခွဲခြားနိုင်မယ်။"),
      L("Choose between IaaS, PaaS, SaaS and serverless, and state who is responsible for what.",
        "IaaS・PaaS・SaaS・サーバーレスを使い分け、誰が何に責任を持つかを説明できる。",
        "IaaS၊ PaaS၊ SaaS၊ Serverless ထဲက ဘယ်ဟာ ရွေးရမလဲ၊ ဘယ်သူက ဘာတာဝန်ယူရလဲ ပြောနိုင်မယ်။"),
      L("Describe regions, region pairs, sovereign regions and availability zones.",
        "リージョン、リージョンペア、ソブリンリージョン、可用性ゾーンを説明できる。",
        "Region၊ Region pair၊ Sovereign region၊ Availability Zone တွေကို ရှင်းပြနိုင်မယ်။"),
      L("Organize resources with management groups, subscriptions and resource groups using Azure Resource Manager.",
        "Azure Resource Manager を使い、管理グループ・サブスクリプション・Resource Group でリソースを整理できる。",
        "Azure Resource Manager ကိုသုံးပြီး Management group၊ Subscription၊ Resource Group တွေနဲ့ resource တွေကို စနစ်တကျ စီစဉ်နိုင်မယ်။"),
    ],
    sections: [
      {
        id: "what-is-cloud",
        title: L("What cloud computing really is: renting instead of buying", "クラウドの本質：買うのではなく借りる", "Cloud computing ဆိုတာ ဝယ်တာမဟုတ်ဘဲ ငှားသုံးတာ"),
        blocks: [
          { type: 'p', text: L(
            "**Cloud computing** is the delivery of computing services (servers, storage, databases, networking, software, analytics) over the internet. The key idea: instead of **buying** a datacenter, you **rent** exactly what you need, when you need it. Think of buying a car versus using a taxi or car-sharing: owning a car means a big upfront payment, insurance and maintenance even when it sits in the parking lot; a taxi costs only for the trips you take.",
            "**クラウドコンピューティング**とは、サーバー・ストレージ・データベース・ネットワーク・ソフトウェアなどのコンピューティングサービスをインターネット経由で提供することです。ポイントは、データセンターを**購入**する代わりに、必要なものを必要なときだけ**借りる**ことです。車を買うかタクシーやカーシェアを使うかを想像してください。車を所有すると、駐車場に置いているだけでも初期費用・保険・メンテナンスがかかりますが、タクシーなら乗った分だけ支払います。",
            "**Cloud computing** ဆိုတာ server၊ storage၊ database၊ network၊ software စတဲ့ computing service တွေကို internet ကနေ ပေးတာပါ။ အဓိက အယူအဆက datacenter ကို **ဝယ်** မယ့်အစား လိုတဲ့အချိန် လိုသလောက်ပဲ **ငှား** သုံးတာပါ။ ကားဝယ်တာနဲ့ taxi စီးတာကို စဉ်းစားကြည့်ပါ။ ကားဝယ်ရင် ငွေအများကြီး တစ်ခါတည်းပေးရတယ်၊ ကားရပ်ထားရုံနဲ့တောင် insurance၊ ပြုပြင်စရိတ် ကုန်တယ်။ Taxi ကတော့ စီးသလောက်ပဲ ပေးရတယ်။"
          ) },
          { type: 'table',
            head: [L("Aspect", "観点", "အချက်"), L("CapEx (Capital Expenditure)", "CapEx（設備投資）", "CapEx (အရင်းအနှီး အသုံးစရိတ်)"), L("OpEx (Operational Expenditure)", "OpEx（運用費）", "OpEx (လုပ်ငန်းလည်ပတ် အသုံးစရိတ်)")],
            rows: [
              [L("When you pay", "支払うタイミング", "ငွေပေးရတဲ့အချိန်"), L("Large upfront payment", "最初にまとめて大きく支払う", "အစမှာ တစ်ခါတည်း အများကြီးပေး"), L("Pay as you go, monthly", "使った分を毎月支払う", "သုံးသလောက် လစဉ်ပေး")],
              [L("Example", "例", "ဥပမာ"), L("Buying servers, building a server room", "サーバー購入、サーバールーム構築", "Server ဝယ်တာ၊ server room ဆောက်တာ"), L("Azure VM billed per second/hour of use", "使用時間に応じて課金される Azure VM", "သုံးတဲ့အချိန်အလိုက် ကျသင့်တဲ့ Azure VM")],
              [L("Tax / accounting", "税務・会計", "အခွန် / စာရင်းကိုင်ပိုင်း"), L("Depreciated over several years", "数年かけて減価償却", "နှစ်အနည်းငယ်အတွင်း depreciation လုပ်"), L("Deducted in the same year it is spent", "支出した年度に経費計上", "သုံးတဲ့နှစ်ထဲမှာပဲ expense အဖြစ် နုတ်")],
              [L("Risk", "リスク", "အန္တရာယ် (Risk)"), L("Over- or under-buying capacity", "容量の買いすぎ・不足", "Capacity ဝယ်တာ များလွန်း/နည်းလွန်း"), L("Can change or stop at any time", "いつでも変更・停止できる", "ဘယ်အချိန်မဆို ပြောင်း/ရပ် လို့ရ")],
            ] },
          { type: 'p', text: L(
            "Cloud uses a **consumption-based model**: you pay only for the resources you use, with no upfront cost, and you can stop paying when you stop using them. This is why a startup in Tokyo can launch a global app without buying a single server, and why a retailer can handle a year-end sale without keeping idle servers all year.",
            "クラウドは**従量課金モデル（consumption-based model）**です。初期費用なしで使ったリソース分だけ支払い、使わなくなれば支払いも止まります。だからこそ東京のスタートアップはサーバーを 1 台も買わずにグローバルなアプリを公開でき、小売企業は年末セールのために 1 年中サーバーを遊ばせておく必要がありません。",
            "Cloud က **consumption-based model** ကို သုံးပါတယ်။ အစမှာ ငွေမပေးရဘဲ သုံးတဲ့ resource အတွက်ပဲ ပေးရပြီး မသုံးတော့ရင် ပေးစရာမလိုတော့ဘူး။ ဒါကြောင့် Tokyo က startup တစ်ခုက server တစ်လုံးမှ မဝယ်ဘဲ global app တင်နိုင်တယ်၊ ဆိုင်ကြီးတွေက နှစ်ကုန် sale အတွက် တစ်နှစ်လုံး server အလကားထားစရာ မလိုဘူး။"
          ) },
          { type: 'callout', tone: 'memory', text: L(
            "**CapEx = Car you buy, OpEx = Only pay per ride.** Cloud shifts spending from CapEx to OpEx.",
            "**CapEx = 車を買う（Capital）、OpEx = 乗った分だけ払う（Operational）**。クラウドは支出を CapEx から OpEx に移します。",
            "**CapEx = ကားဝယ်တာ၊ OpEx = စီးတဲ့ခရီးအလိုက် ပေးတာ** လို့ မှတ်ထားပါ။ Cloud က အသုံးစရိတ်ကို CapEx ကနေ OpEx ဘက် ရွှေ့ပေးတယ်။"
          ) },
        ],
      },
      {
        id: "cloud-benefits",
        title: L("Benefits of the cloud: availability, scale, reliability and more", "クラウドのメリット：可用性・拡張性・信頼性など", "Cloud ရဲ့ အကျိုးကျေးဇူးများ- availability၊ scale၊ reliability စသည်"),
        blocks: [
          { type: 'p', text: L(
            "AZ-900 tests a specific vocabulary of cloud benefits. The words sound similar, so learn the precise meaning of each one.",
            "AZ-900 ではクラウドのメリットに関する特定の用語が問われます。似た言葉が多いので、それぞれの正確な意味を覚えましょう。",
            "AZ-900 မှာ cloud အကျိုးကျေးဇူးနဲ့ ဆိုင်တဲ့ စကားလုံးတွေကို မေးတယ်။ အသံဆင်တူတာများလို့ တစ်ခုချင်းစီရဲ့ အဓိပ္ပာယ်အတိအကျကို မှတ်ထားပါ။"
          ) },
          { type: 'list', items: [
            L("**High availability**: the service stays up with minimal downtime, usually expressed as an SLA percentage such as 99.9% or 99.99%.",
              "**高可用性**：ダウンタイムを最小限にしてサービスを稼働し続けること。通常 99.9% や 99.99% などの SLA で表されます。",
              "**High availability**: downtime အနည်းဆုံးနဲ့ service ဆက်အလုပ်လုပ်နေတာ။ ပုံမှန်အားဖြင့် 99.9%၊ 99.99% လို SLA ရာခိုင်နှုန်းနဲ့ ဖော်ပြတယ်။"),
            L("**Scalability**: the ability to add or remove resources to handle demand. **Vertical** = bigger machine (scale up: more CPU/RAM). **Horizontal** = more machines (scale out: more instances).",
              "**スケーラビリティ**：需要に合わせてリソースを追加・削減できる能力。**垂直**＝マシンを大きくする（スケールアップ：CPU/メモリ追加）。**水平**＝台数を増やす（スケールアウト：インスタンス追加）。",
              "**Scalability**: demand နဲ့ ကိုက်အောင် resource တိုး/လျှော့ နိုင်စွမ်း။ **Vertical** = စက်ကို ပိုကြီးအောင် (scale up: CPU/RAM တိုး)။ **Horizontal** = စက်အရေအတွက် တိုး (scale out: instance တိုး)။"),
            L("**Elasticity**: scaling that happens **automatically** as demand changes, for example autoscale adding web servers during a flash sale and removing them at night.",
              "**弾力性（Elasticity）**：需要の変化に応じて**自動的に**スケールすること。例：フラッシュセール中に autoscale で Web サーバーを追加し、夜間に削減する。",
              "**Elasticity**: demand ပြောင်းတာနဲ့အမျှ **အလိုအလျောက်** scale ဖြစ်တာ။ ဥပမာ flash sale အချိန် autoscale က web server တိုးပေးပြီး ညဘက် ပြန်လျှော့ပေးတာ။"),
            L("**Reliability**: the ability to **recover** from failures and keep functioning, for example by spreading resources across regions.",
              "**信頼性**：障害から**復旧**し、機能し続ける能力。例：リソースを複数リージョンに分散する。",
              "**Reliability**: failure ဖြစ်ရင် **ပြန်လည်ကောင်းမွန်** လာပြီး ဆက်လုပ်နိုင်စွမ်း။ ဥပမာ resource တွေကို region အများမှာ ခွဲထားတာ။"),
            L("**Predictability**: of **performance** (autoscale, load balancing keep response times steady) and of **cost** (Pricing Calculator, Cost Management, budgets help forecast spending).",
              "**予測可能性**：**パフォーマンス**（autoscale や負荷分散で応答時間を安定させる）と**コスト**（料金計算ツール、Cost Management、予算で支出を予測する）の予測可能性です。",
              "**Predictability**: **performance** (autoscale၊ load balancing နဲ့ response time တည်ငြိမ်) နဲ့ **cost** (Pricing Calculator၊ Cost Management၊ budget နဲ့ အသုံးစရိတ် ကြိုခန့်မှန်း) နှစ်မျိုးလုံးကို ကြိုသိနိုင်တာ။"),
            L("**Security and governance**: built-in policies, compliance templates and security tools (Azure Policy, Microsoft Defender for Cloud) help enforce standards.",
              "**セキュリティとガバナンス**：組み込みのポリシー、コンプライアンステンプレート、セキュリティツール（Azure Policy、Microsoft Defender for Cloud）で基準を徹底できます。",
              "**Security and governance**: built-in policy တွေ၊ compliance template တွေ၊ security tool တွေ (Azure Policy၊ Microsoft Defender for Cloud) နဲ့ standard တွေကို လိုက်နာအောင် ထိန်းနိုင်တယ်။"),
            L("**Manageability**: management **of** the cloud (autoscale, monitoring, templates) and management **in** the cloud (Portal, CLI, PowerShell, APIs).",
              "**管理性**：クラウド**の**管理（autoscale、監視、テンプレート）と、クラウド**での**管理（Portal、CLI、PowerShell、API）の両面があります。",
              "**Manageability**: cloud **ကို** စီမံခြင်း (autoscale၊ monitoring၊ template) နဲ့ cloud **ထဲမှာ** စီမံခြင်း (Portal၊ CLI၊ PowerShell၊ API) နှစ်မျိုးရှိတယ်။"),
          ] },
          { type: 'callout', tone: 'exam', text: L(
            "Classic trap: “automatically adds resources when demand rises” = **elasticity**, not just scalability. “Add more VMs” = **scale out (horizontal)**; “change to a bigger VM size” = **scale up (vertical)**. Also remember: Azure does **not** promise 100% availability.",
            "よくある引っかけ：「需要が増えると自動でリソースを追加する」は単なるスケーラビリティではなく**弾力性**です。「VM を増やす」＝**スケールアウト（水平）**、「より大きな VM サイズに変更」＝**スケールアップ（垂直）**。また、Azure は 100% の可用性を**保証しません**。",
            "ထောင်ချောက်မေးခွန်း- 「demand တက်ရင် resource အလိုအလျောက် တိုးပေးတယ်」 ဆိုရင် **elasticity** ပါ၊ scalability သက်သက် မဟုတ်ဘူး။ 「VM အရေအတွက် တိုး」= **scale out (horizontal)**၊ 「VM size ပိုကြီးတာ ပြောင်း」= **scale up (vertical)**။ Azure က 100% availability ကို **အာမခံမပေး** ဘူးဆိုတာလည်း မှတ်ထားပါ။"
          ) },
        ],
      },
      {
        id: "service-models",
        title: L("Service models: IaaS, PaaS, SaaS and serverless", "サービスモデル：IaaS・PaaS・SaaS・サーバーレス", "Service model များ- IaaS၊ PaaS၊ SaaS နဲ့ Serverless"),
        blocks: [
          { type: 'p', text: L(
            "Service models describe **how much** the provider manages for you. A good analogy is housing: **IaaS** is renting an empty apartment (you bring furniture and fix things inside), **PaaS** is a serviced apartment (furnished, cleaned, you just live and work), **SaaS** is a hotel room (everything is done, you only use it).",
            "サービスモデルは、プロバイダーが**どこまで**管理してくれるかを表します。住まいに例えると、**IaaS** は家具なしの賃貸マンション（家具は自分で用意し、室内の修理も自分）、**PaaS** はサービスアパートメント（家具・清掃付きで、住んで仕事をするだけ）、**SaaS** はホテルの部屋（すべて用意済みで、使うだけ）です。",
            "Service model တွေက provider က သင့်အတွက် **ဘယ်လောက်ထိ** စီမံပေးလဲ ဆိုတာကို ပြတာပါ။ အိမ်နဲ့ ဥပမာပေးရရင် **IaaS** က ပရိဘောဂမပါတဲ့ အခန်းငှားတာ (ပရိဘောဂ ကိုယ်တိုင်ယူလာ၊ အခန်းထဲ ပျက်တာ ကိုယ်တိုင်ပြင်)၊ **PaaS** က serviced apartment (ပရိဘောဂ၊ သန့်ရှင်းရေး ပါပြီးသား၊ နေပြီး အလုပ်လုပ်ရုံပဲ)၊ **SaaS** က ဟိုတယ်အခန်း (အကုန်ပြင်ပြီးသား၊ သုံးရုံပဲ) ပါ။"
          ) },
          { type: 'table',
            head: [L("Model", "モデル", "မော်ဒယ်"), L("You manage", "利用者が管理", "သင်စီမံရတာ"), L("Azure examples", "Azure の例", "Azure ဥပမာ"), L("Choose when", "選ぶ場面", "ရွေးသင့်တဲ့အခါ")],
            rows: [
              [L("IaaS", "IaaS（インフラ）", "IaaS (အခြေခံ infrastructure)"), L("OS, patches, runtime, apps, data", "OS、パッチ、ランタイム、アプリ、データ", "OS၊ patch၊ runtime၊ app၊ data"), L("Virtual Machines, Virtual Network, managed disks", "Virtual Machines、Virtual Network、マネージドディスク", "Virtual Machines၊ Virtual Network၊ managed disk"), L("Lift-and-shift migration, full OS control, custom software", "リフト＆シフト移行、OS の完全制御、独自ソフトウェア", "Lift-and-shift migration၊ OS ကို အပြည့်ထိန်းချင်၊ custom software")],
              [L("PaaS", "PaaS（プラットフォーム）", "PaaS (platform ဝန်ဆောင်မှု)"), L("Your code/app and data only", "自分のコード・アプリとデータのみ", "ကိုယ့် code/app နဲ့ data ပဲ"), L("App Service, Azure SQL Database, Azure Cosmos DB", "App Service、Azure SQL Database、Azure Cosmos DB など", "App Service၊ Azure SQL Database၊ Azure Cosmos DB"), L("Developers want to focus on code, not servers", "開発者がサーバーではなくコードに集中したい", "Developer တွေက server မဟုတ်ဘဲ code ကိုပဲ အာရုံစိုက်ချင်")],
              [L("SaaS", "SaaS（ソフトウェア）", "SaaS (software ဝန်ဆောင်မှု)"), L("Users, data, configuration", "ユーザー、データ、設定", "User၊ data၊ configuration"), L("Microsoft 365, Outlook, Dynamics 365", "Microsoft 365、Outlook、Dynamics 365 など", "Microsoft 365၊ Outlook၊ Dynamics 365"), L("Ready-made business software, no development", "開発不要の既製ビジネスソフトウェア", "Develop မလုပ်ဘဲ အသင့်သုံး business software")],
              [L("Serverless", "サーバーレス", "Serverless (server မမြင်ရ)"), L("Functions/workflows only; pay per execution", "関数・ワークフローのみ、実行ごとに課金", "Function/workflow ပဲ၊ run တဲ့အကြိမ်အလိုက် ပေး"), L("Azure Functions, Logic Apps", "Azure Functions、Logic Apps など", "Azure Functions၊ Logic Apps"), L("Event-driven, unpredictable or bursty workloads", "イベント駆動、予測しにくい・突発的なワークロード", "Event-driven၊ ကြိုမခန့်မှန်းနိုင်တဲ့/ရုတ်တရက်များတဲ့ workload")],
            ] },
          { type: 'p', text: L(
            "**Serverless** is usually treated as a form of PaaS: servers still exist, but you never see or manage them. You write a function that reacts to an event (an HTTP request, a new file in storage, a timer) and on the Consumption plan you pay only while it runs.",
            "**サーバーレス**は通常 PaaS の一形態として扱われます。サーバーは存在しますが、見ることも管理することもありません。イベント（HTTP リクエスト、ストレージへの新規ファイル、タイマー）に反応する関数を書き、従量課金プランでは実行中のみ支払います。",
            "**Serverless** ကို ပုံမှန်အားဖြင့် PaaS ရဲ့ ပုံစံတစ်မျိုးအဖြစ် သတ်မှတ်တယ်။ Server တွေ ရှိနေသေးပေမယ့် သင်မမြင်ရ၊ မစီမံရပါဘူး။ Event (HTTP request၊ storage ထဲ file အသစ်ရောက်တာ၊ timer) တစ်ခုခုဖြစ်ရင် အလုပ်လုပ်မယ့် function ကိုရေးပြီး Consumption plan မှာ run နေတဲ့အချိန်အတွက်ပဲ ပေးရတယ်။"
          ) },
          { type: 'callout', tone: 'memory', text: L(
            "**I-P-S = Infrastructure, Platform, Software**: the further right you go, the less you manage. IaaS = “I install the OS”, PaaS = “Push my code”, SaaS = “Simply sign in”.",
            "**I-P-S＝Infrastructure、Platform、Software**：右に行くほど管理範囲が減ります。IaaS＝「I（自分）が OS を入れる」、PaaS＝「コードを Push するだけ」、SaaS＝「Sign in するだけ」。",
            "**I-P-S = Infrastructure၊ Platform၊ Software** - ညာဘက်ရောက်လေ ကိုယ်စီမံရတာ နည်းလေပါ။ IaaS = 「I install the OS (OS ကိုယ်တိုင်တင်)」၊ PaaS = 「Push my code (code ပဲ push)」၊ SaaS = 「Simply sign in (sign in ရုံပဲ)」 လို့ မှတ်ပါ။"
          ) },
        ],
      },
      {
        id: "shared-responsibility",
        title: L("The shared responsibility model", "責任共有モデル", "တာဝန်ခွဲဝေယူမှု model (Shared responsibility)"),
        blocks: [
          { type: 'p', text: L(
            "Security in the cloud is a partnership. **Microsoft** is always responsible for the physical layer: datacenters, physical hosts and the physical network. **You** are always responsible for your data, your devices and your accounts/identities. Everything in between shifts depending on the service model.",
            "クラウドのセキュリティはパートナーシップです。**Microsoft** は常に物理層（データセンター、物理ホスト、物理ネットワーク）に責任を持ちます。**利用者**は常に自分のデータ、デバイス、アカウント・ID に責任を持ちます。その間の部分はサービスモデルによって変わります。",
            "Cloud security ဆိုတာ နှစ်ဖက်ပူးပေါင်းရတာပါ။ **Microsoft** က physical layer (datacenter၊ physical host၊ physical network) အတွက် အမြဲတာဝန်ယူတယ်။ **သင်** ကတော့ ကိုယ့် data၊ device၊ account/identity အတွက် အမြဲတာဝန်ယူရတယ်။ ကြားထဲက အပိုင်းတွေကတော့ service model အလိုက် ပြောင်းတယ်။"
          ) },
          { type: 'diagram', text:
`Responsibility          On-prem  IaaS     PaaS     SaaS
----------------------  -------  -------  -------  -------
Data & information      YOU      YOU      YOU      YOU
Devices (PC/mobile)     YOU      YOU      YOU      YOU
Accounts & identities   YOU      YOU      YOU      YOU
Identity infra          YOU      YOU      SHARED   SHARED
Applications            YOU      YOU      SHARED   MSFT
Network controls        YOU      YOU      SHARED   MSFT
Operating system        YOU      YOU      MSFT     MSFT
Physical hosts          YOU      MSFT     MSFT     MSFT
Physical network        YOU      MSFT     MSFT     MSFT
Physical datacenter     YOU      MSFT     MSFT     MSFT`,
            caption: L("Who is responsible at each layer (MSFT = Microsoft)", "各レイヤーの責任者（MSFT＝Microsoft）", "Layer တစ်ခုချင်းစီမှာ ဘယ်သူတာဝန်ယူလဲ (MSFT = Microsoft)") },
          { type: 'p', text: L(
            "Example: if you run SQL Server on an Azure VM (IaaS), **you** must patch Windows and SQL Server. If you move to Azure SQL Database (PaaS), Microsoft patches the OS and database engine, but **you** still decide who can log in and must protect the data (for example, not exposing it to the internet with weak passwords).",
            "例：Azure VM（IaaS）上で SQL Server を動かす場合、Windows と SQL Server のパッチ適用は**利用者**の責任です。Azure SQL Database（PaaS）に移行すると OS とデータベースエンジンのパッチは Microsoft が行いますが、誰がログインできるかの決定やデータ保護（弱いパスワードでインターネットに公開しないなど）は引き続き**利用者**の責任です。",
            "ဥပမာ- Azure VM (IaaS) ပေါ်မှာ SQL Server run ရင် Windows နဲ့ SQL Server ကို patch လုပ်တာ **သင့်** တာဝန်ပါ။ Azure SQL Database (PaaS) ကို ပြောင်းရင် OS နဲ့ database engine patch ကို Microsoft က လုပ်ပေးပေမယ့် ဘယ်သူ login ဝင်ခွင့်ရှိလဲ ဆုံးဖြတ်တာ၊ data ကို ကာကွယ်တာ (password အားနည်းနည်းနဲ့ internet ပေါ် မဖွင့်ထားတာ) ကတော့ **သင့်** တာဝန်ပဲ ဆက်ဖြစ်နေတယ်။"
          ) },
          { type: 'callout', tone: 'exam', text: L(
            "The exam loves “which is ALWAYS the customer's responsibility?” Answer: **information and data, devices, accounts and identities**. “Physical security of the datacenter” is always Microsoft. With **IaaS, the customer patches the OS**; with PaaS/SaaS, Microsoft does.",
            "試験頻出：「常に利用者の責任はどれか？」答えは**情報とデータ、デバイス、アカウントと ID**。「データセンターの物理的セキュリティ」は常に Microsoft です。**IaaS では OS のパッチは利用者**、PaaS/SaaS では Microsoft が行います。",
            "Exam မှာ 「ဘယ်ဟာက customer ရဲ့ တာဝန် အမြဲဖြစ်လဲ?」 ကို အရမ်းမေးတယ်။ အဖြေက **information နဲ့ data၊ device၊ account နဲ့ identity** ပါ။ 「Datacenter physical security」 က အမြဲ Microsoft ပါ။ **IaaS မှာ OS patch ကို customer က လုပ်ရ** ပြီး PaaS/SaaS မှာ Microsoft က လုပ်တယ်။"
          ) },
        ],
      },
      {
        id: "deployment-models",
        title: L("Deployment models: public, private, hybrid and multi-cloud", "デプロイモデル：パブリック・プライベート・ハイブリッド・マルチクラウド", "Deployment model များ- public၊ private၊ hybrid၊ multi-cloud"),
        blocks: [
          { type: 'p', text: L(
            "Service models answer “what do I manage?”. Deployment models answer “**where** does it run and who owns the hardware?”.",
            "サービスモデルは「何を管理するか」に答えます。デプロイモデルは「**どこで**動き、ハードウェアを誰が所有するか」に答えます。",
            "Service model က 「ဘာကို ကိုယ်စီမံရမလဲ」 ကို ဖြေတယ်။ Deployment model ကတော့ 「**ဘယ်မှာ** run မလဲ၊ hardware ကို ဘယ်သူပိုင်လဲ」 ကို ဖြေတယ်။"
          ) },
          { type: 'list', items: [
            L("**Public cloud**: hardware owned and operated by the provider (Azure) and shared by many customers. No CapEx, fast to start, pay as you go. Less physical control.",
              "**パブリッククラウド**：プロバイダー（Azure）が所有・運用し、多数の顧客で共有するハードウェア。CapEx 不要、すぐに開始でき、従量課金。物理的な制御は少ない。",
              "**Public cloud**: provider (Azure) ပိုင်ပြီး လည်ပတ်တဲ့ hardware ကို customer အများကြီး မျှသုံးတာ။ CapEx မလို၊ မြန်မြန်စနိုင်၊ သုံးသလောက်ပေး။ Physical control နည်းတယ်။"),
            L("**Private cloud**: cloud-style infrastructure used by a single organization, in its own datacenter or a hosted facility. Full control, but the organization pays for hardware and maintenance (CapEx).",
              "**プライベートクラウド**：単一組織が自社データセンターまたはホスティング施設で使うクラウド型インフラ。完全に制御できるが、ハードウェアと保守の費用（CapEx）は組織負担。",
              "**Private cloud**: အဖွဲ့အစည်းတစ်ခုတည်းက ကိုယ်ပိုင် datacenter (သို့) hosting နေရာမှာ သုံးတဲ့ cloud ပုံစံ infrastructure။ Control အပြည့်ရပေမယ့် hardware နဲ့ maintenance စရိတ် (CapEx) ကို ကိုယ်တိုင်ပေးရတယ်။"),
            L("**Hybrid cloud**: public and private clouds connected so workloads and data can move between them. Typical reasons: data that must stay on-premises for regulation, gradual migration, or bursting to the cloud at peak times.",
              "**ハイブリッドクラウド**：パブリックとプライベートを接続し、ワークロードとデータを相互に移動できる構成。規制でオンプレミスに残すべきデータ、段階的な移行、ピーク時のクラウドへのバーストなどが典型的な理由です。",
              "**Hybrid cloud**: public နဲ့ private ကို ချိတ်ပြီး workload နဲ့ data ကို အပြန်အလှန် ရွှေ့လို့ရတဲ့ပုံစံ။ ဥပဒေကြောင့် on-premises မှာ ထားရမယ့် data၊ တဖြည်းဖြည်း migrate လုပ်တာ၊ peak အချိန် cloud ကို burst လုပ်တာ စတဲ့ အကြောင်းရင်းတွေကြောင့် သုံးတယ်။"),
            L("**Multi-cloud**: using two or more public cloud providers (for example Azure and AWS), often to use best-of-breed services or avoid dependence on one vendor.",
              "**マルチクラウド**：2 つ以上のパブリッククラウド（例：Azure と AWS）を使うこと。各社の優れたサービスを使う、特定ベンダーへの依存を避けるなどが目的です。",
              "**Multi-cloud**: public cloud provider နှစ်ခု (သို့) ထိုထက်ပို (ဥပမာ Azure နဲ့ AWS) ကို သုံးတာ။ Provider တစ်ခုချင်းရဲ့ အကောင်းဆုံး service ကိုသုံးဖို့၊ vendor တစ်ခုတည်းကို မမှီခိုဖို့ သုံးလေ့ရှိတယ်။"),
          ] },
          { type: 'p', text: L(
            "**Azure Arc** extends Azure management to resources **outside** Azure: on-premises servers, Kubernetes clusters, data services and even VMs in other clouds. Once Arc-enabled, they appear in Azure Resource Manager so you can apply Azure Policy, tags and RBAC to them. **Azure VMware Solution** lets you run existing VMware workloads in Azure for hybrid migrations.",
            "**Azure Arc** は Azure の管理機能を Azure **外**のリソース（オンプレミスのサーバー、Kubernetes クラスター、データサービス、他クラウドの VM）に拡張します。Arc 対応にすると Azure Resource Manager に表示され、Azure Policy・タグ・RBAC を適用できます。**Azure VMware Solution** は既存の VMware ワークロードを Azure 上で実行でき、ハイブリッド移行に使われます。",
            "**Azure Arc** က Azure ရဲ့ management ကို Azure **အပြင်** က resource တွေ (on-premises server၊ Kubernetes cluster၊ data service၊ တခြား cloud က VM) ဆီထိ ချဲ့ပေးတယ်။ Arc-enabled လုပ်ပြီးရင် Azure Resource Manager ထဲမှာ ပေါ်လာလို့ Azure Policy၊ tag၊ RBAC တွေကို apply လုပ်လို့ရတယ်။ **Azure VMware Solution** ကတော့ ရှိပြီးသား VMware workload တွေကို Azure ပေါ်မှာ run ခွင့်ပေးပြီး hybrid migration မှာ သုံးတယ်။"
          ) },
          { type: 'callout', tone: 'tip', text: L(
            "Real-world example: a Japanese bank keeps core customer data on-premises for regulatory reasons, but runs its mobile app front end in Azure. That is **hybrid**. If it also uses AWS for analytics, it is **multi-cloud** too, and Azure Arc can govern servers in all locations from one place.",
            "実例：日本の銀行が規制上の理由で顧客の基幹データをオンプレミスに置き、モバイルアプリのフロントエンドを Azure で動かす場合は**ハイブリッド**です。さらに分析に AWS を使えば**マルチクラウド**でもあり、Azure Arc ですべての場所のサーバーを一元的にガバナンスできます。",
            "လက်တွေ့ဥပမာ- ဂျပန်ဘဏ်တစ်ခုက ဥပဒေအရ customer core data ကို on-premises မှာထားပြီး mobile app front end ကို Azure မှာ run တယ်ဆိုရင် **hybrid** ပါ။ Analytics အတွက် AWS ကိုပါ သုံးရင် **multi-cloud** လည်း ဖြစ်ပြီး Azure Arc နဲ့ နေရာအားလုံးက server တွေကို တစ်နေရာတည်းကနေ govern လုပ်နိုင်တယ်။"
          ) },
        ],
      },
      {
        id: "global-infrastructure",
        title: L("Azure global infrastructure: regions, pairs and availability zones", "Azure のグローバルインフラ：リージョン・ペア・可用性ゾーン", "Azure global infrastructure- region၊ pair နဲ့ availability zone"),
        blocks: [
          { type: 'p', text: L(
            "A **datacenter** is a physical building full of servers. You never pick a datacenter directly. Instead you pick a **region**: a geographical area containing one or more datacenters connected by a low-latency network, such as **Japan East** (Tokyo/Saitama) or **Southeast Asia** (Singapore). Choose a region close to your users for low latency, and check that it offers the services you need and meets data residency rules.",
            "**データセンター**はサーバーが並ぶ物理的な建物です。データセンターを直接選ぶことはなく、代わりに**リージョン**を選びます。リージョンとは、低遅延ネットワークで結ばれた 1 つ以上のデータセンターを含む地理的エリアで、**Japan East**（東京・埼玉）や **Southeast Asia**（シンガポール）などがあります。遅延を抑えるためユーザーに近いリージョンを選び、必要なサービスの提供状況とデータ所在地の要件も確認します。",
            "**Datacenter** ဆိုတာ server တွေ အပြည့်ရှိတဲ့ အဆောက်အဦးပါ။ Datacenter ကို တိုက်ရိုက် မရွေးရပါဘူး။ **Region** ကို ရွေးရတယ်။ Region ဆိုတာ latency နည်းတဲ့ network နဲ့ ချိတ်ထားတဲ့ datacenter တစ်ခု (သို့) အများ ပါဝင်တဲ့ ပထဝီဧရိယာပါ၊ ဥပမာ **Japan East** (Tokyo/Saitama) နဲ့ **Southeast Asia** (Singapore)။ Latency နည်းအောင် user နဲ့ နီးတဲ့ region ကို ရွေးပြီး လိုတဲ့ service ရှိမရှိ၊ data residency စည်းမျဉ်းနဲ့ ကိုက်မကိုက် စစ်ပါ။"
          ) },
          { type: 'diagram', text:
`        Region: Japan East              Region pair: Japan West
+----------------------------------+    +----------------------+
| +--------+ +--------+ +--------+ |    |  paired region,      |
| | Zone 1 | | Zone 2 | | Zone 3 | |<-->|  hundreds of km      |
| | DC  DC | |   DC   | | DC  DC | |    |  away, used for      |
| +--------+ +--------+ +--------+ |    |  disaster recovery   |
| independent power/cooling/network|    +----------------------+
+----------------------------------+`,
            caption: L("Datacenters form zones, zones form a region, regions are paired", "データセンターがゾーンを、ゾーンがリージョンを構成し、リージョン同士がペアになる", "Datacenter တွေက zone ဖြစ်၊ zone တွေက region ဖြစ်၊ region တွေက pair ဖွဲ့တယ်") },
          { type: 'list', items: [
            L("**Availability zones**: physically separate datacenters (one or more each) inside a region, with independent power, cooling and networking. Zone-enabled regions have a **minimum of three** zones. They protect you from a datacenter-level failure.",
              "**可用性ゾーン**：リージョン内の物理的に分離されたデータセンター群（各 1 つ以上）で、電源・冷却・ネットワークが独立しています。ゾーン対応リージョンには**最低 3 つ**のゾーンがあり、データセンター単位の障害から保護します。",
              "**Availability zone**: region တစ်ခုအတွင်းက မီး၊ အအေးခံ၊ network သီးခြားစီရှိတဲ့ ရုပ်ပိုင်းဆိုင်ရာ ခွဲထားတဲ့ datacenter (တစ်ခု သို့ အများ) တွေပါ။ Zone ပါတဲ့ region မှာ **အနည်းဆုံး zone ၃ ခု** ရှိပြီး datacenter တစ်ခုလုံး ပျက်တာကနေ ကာကွယ်ပေးတယ်။"),
            L("Zone services come in three styles: **zonal** (pinned to one zone, e.g. a VM in zone 1), **zone-redundant** (replicated automatically across zones, e.g. ZRS storage), and **non-regional/global** services (e.g. Microsoft Entra ID, Azure Front Door).",
              "ゾーンに関するサービスは 3 種類：**ゾーン**（1 つのゾーンに固定、例：ゾーン 1 の VM）、**ゾーン冗長**（ゾーン間で自動複製、例：ZRS ストレージ）、**非リージョン/グローバル**サービス（例：Microsoft Entra ID、Azure Front Door）。",
              "Zone နဲ့ဆိုင်တဲ့ service ၃ မျိုးရှိတယ်- **zonal** (zone တစ်ခုမှာ ချိတ်ထား၊ ဥပမာ zone 1 က VM)၊ **zone-redundant** (zone အများမှာ အလိုအလျောက် copy ကူး၊ ဥပမာ ZRS storage)၊ **non-regional/global** service (ဥပမာ Microsoft Entra ID၊ Azure Front Door)။"),
            L("**Region pairs**: many regions are paired with another region in the same geography, typically hundreds of kilometres apart (e.g. Japan East with Japan West, East US with West US). Benefits: platform updates are rolled out to one region of a pair at a time, one region in each pair is prioritized for recovery during a large outage, and some services (such as geo-redundant storage) replicate to the pair. Some newer regions have no pair and rely on availability zones instead.",
              "**リージョンペア**：多くのリージョンは同じ地域内の別リージョンとペアになっており、通常数百 km 離れています（例：Japan East と Japan West、East US と West US）。メリットは、プラットフォーム更新がペアの片方ずつ順番に適用される、大規模障害時に各ペアの一方が優先的に復旧される、一部のサービス（GRS ストレージなど）がペアに複製される、などです。新しいリージョンの中にはペアを持たず、可用性ゾーンで冗長化するものもあります。",
              "**Region pair**: region အများစုကို ပထဝီတူ (geography) ထဲက တခြား region တစ်ခုနဲ့ pair လုပ်ထားပြီး ပုံမှန် ကီလိုမီတာ ရာနဲ့ချီ ကွာတယ် (ဥပမာ Japan East နဲ့ Japan West၊ East US နဲ့ West US)။ အကျိုးကျေးဇူး- platform update ကို pair ထဲက region တစ်ခုစီ အလှည့်ကျ လုပ်တယ်၊ outage ကြီးဖြစ်ရင် pair တစ်ခုစီက region တစ်ခုကို ဦးစားပေး ပြန်ကောင်းအောင် လုပ်တယ်၊ GRS storage လို service တချို့က pair ဆီ copy ကူးတယ်။ Region အသစ်တချို့မှာ pair မရှိဘဲ availability zone နဲ့ပဲ အားကိုးတယ်။"),
            L("**Sovereign regions**: isolated instances of Azure for compliance or legal reasons, such as **Azure Government** (US government agencies) and **Azure operated by 21Vianet** in China.",
              "**ソブリンリージョン**：コンプライアンスや法的理由で分離された Azure のインスタンス。**Azure Government**（米国政府機関向け）や中国の **21Vianet が運営する Azure** などがあります。",
              "**Sovereign region**: compliance (သို့) ဥပဒေကြောင့် သီးခြားခွဲထားတဲ့ Azure instance တွေ၊ ဥပမာ **Azure Government** (US အစိုးရ အေဂျင်စီတွေအတွက်) နဲ့ China က **21Vianet က လည်ပတ်တဲ့ Azure**။"),
          ] },
          { type: 'callout', tone: 'exam', text: L(
            "Match the failure to the protection: one server/rack fails → **availability set**; one datacenter fails → **availability zones**; whole region fails → **region pair / multi-region**. Trap: availability zones are **within** a region, not across regions. Also, not every region supports zones.",
            "障害と対策を対応させましょう：サーバーやラック 1 台の障害 → **可用性セット**、データセンター障害 → **可用性ゾーン**、リージョン全体の障害 → **リージョンペア／マルチリージョン**。引っかけ：可用性ゾーンはリージョンを跨ぐのではなく、リージョンの**中**にあります。また、すべてのリージョンがゾーンに対応しているわけではありません。",
            "Failure နဲ့ ကာကွယ်နည်းကို တွဲမှတ်ပါ- server/rack တစ်ခုပျက် → **availability set**၊ datacenter တစ်ခုပျက် → **availability zone**၊ region တစ်ခုလုံးပျက် → **region pair / multi-region**။ ထောင်ချောက်- availability zone တွေက region **အတွင်း** မှာပဲ ရှိတယ်၊ region ကိုကျော်ပြီး မဟုတ်ဘူး။ Region တိုင်းမှာ zone မရှိဘူးဆိုတာလည်း မှတ်ပါ။"
          ) },
        ],
      },
      {
        id: "resource-hierarchy",
        title: L("Resource hierarchy: management groups, subscriptions, resource groups", "リソース階層：管理グループ・サブスクリプション・Resource Group", "Resource hierarchy- management group၊ subscription၊ resource group"),
        blocks: [
          { type: 'p', text: L(
            "Azure organizes everything in four levels. Think of a company filing system: the **management group** is the cabinet, the **subscription** is a drawer with its own budget, the **resource group** is a folder for one project, and **resources** are the documents inside.",
            "Azure はすべてを 4 つの階層で整理します。会社のファイリングに例えると、**管理グループ**はキャビネット、**サブスクリプション**は予算を持つ引き出し、**Resource Group** は 1 プロジェクト用のフォルダー、**リソース**はその中の書類です。",
            "Azure က အရာအားလုံးကို level ၄ ဆင့်နဲ့ စီစဉ်ထားတယ်။ ရုံးက file သိမ်းစနစ်နဲ့ ဥပမာပေးရရင် **management group** က ဗီရို၊ **subscription** က ကိုယ်ပိုင် budget ရှိတဲ့ အံဆွဲ၊ **resource group** က project တစ်ခုအတွက် folder၊ **resource** တွေက folder ထဲက စာရွက်တွေပါ။"
          ) },
          { type: 'diagram', text:
`Tenant Root Management Group   (Microsoft Entra tenant)
 |
 +-- MG: Corp
 |    +-- MG: Production
 |    |    +-- Subscription: Prod-JP   <- billing + access boundary
 |    |         +-- RG: rg-web-prod
 |    |         |    +-- App Service, SQL DB, Storage
 |    |         +-- RG: rg-network-prod
 |    |              +-- VNet, Firewall
 |    +-- MG: Development
 |         +-- Subscription: Dev-JP
 +-- MG: Sandbox
 Policy and RBAC assigned at a level flow DOWN to children`,
            caption: L("Settings inherit from top to bottom", "設定は上から下へ継承される", "Setting တွေက အပေါ်ကနေ အောက်ကို inherit ဖြစ်တယ်") },
          { type: 'list', items: [
            L("**Resource**: a single manageable item (VM, storage account, VNet). It lives in **exactly one** resource group.",
              "**リソース**：管理可能な単一の項目（VM、ストレージアカウント、VNet）。**必ず 1 つだけ**の Resource Group に属します。",
              "**Resource**: စီမံလို့ရတဲ့ item တစ်ခု (VM၊ storage account၊ VNet)။ Resource group **တစ်ခုတည်း** ထဲမှာပဲ ရှိရတယ်။"),
            L("**Resource group**: a logical container for resources that share a lifecycle. Resource groups **cannot be nested**. Deleting a resource group **deletes everything in it**. Resources in a group can be in different regions from the group itself; the group's location only stores its metadata. Resources can be moved between groups.",
              "**Resource Group**：ライフサイクルが同じリソースの論理コンテナー。**入れ子にできません**。Resource Group を削除すると**中身もすべて削除**されます。グループ内のリソースはグループと異なるリージョンに置けます（グループの場所はメタデータの保存先のみ）。リソースはグループ間で移動できます。",
              "**Resource group**: lifecycle တူတဲ့ resource တွေကို စုထားတဲ့ logical container ပါ။ Resource group ထဲမှာ resource group ထပ်ထည့်လို့ (**nest**) **မရဘူး**။ Resource group ကိုဖျက်ရင် **ထဲက အကုန်ပျက်** သွားတယ်။ Group ထဲက resource တွေက group နဲ့ region မတူလည်းရတယ် (group ရဲ့ location က metadata သိမ်းဖို့ပဲ)။ Resource တွေကို group တစ်ခုကနေ တစ်ခု ရွှေ့လို့ရတယ်။"),
            L("**Subscription**: a **billing boundary** (one invoice per subscription) and an **access control boundary**. It trusts one Microsoft Entra ID tenant. Companies often create separate subscriptions for production, development, or each department.",
              "**サブスクリプション**：**課金の境界**（サブスクリプションごとに請求書）であり、**アクセス制御の境界**です。1 つの Microsoft Entra ID テナントを信頼します。本番・開発・部署ごとにサブスクリプションを分けることがよくあります。",
              "**Subscription**: **billing နယ်နိမိတ်** (subscription တစ်ခုကို invoice တစ်စောင်) နဲ့ **access control နယ်နိမိတ်** ပါ။ Microsoft Entra ID tenant တစ်ခုကို trust လုပ်တယ်။ Company တွေက production၊ development (သို့) department အလိုက် subscription ခွဲလေ့ရှိတယ်။"),
            L("**Management group**: a container for subscriptions (and other management groups) used to apply **Azure Policy and RBAC at scale**. Every directory has a single **root management group**. The tree supports up to **six levels** of depth below the root (not counting the subscription level).",
              "**管理グループ**：サブスクリプション（や他の管理グループ）を入れるコンテナーで、**Azure Policy と RBAC を大規模に適用**するために使います。各ディレクトリには**ルート管理グループ**が 1 つあり、ルートの下に最大**6 階層**まで作れます（サブスクリプション階層は含まない）。",
              "**Management group**: subscription တွေ (နဲ့ တခြား management group တွေ) ကို ထည့်တဲ့ container ပါ၊ **Azure Policy နဲ့ RBAC ကို scale ကြီးကြီး apply** လုပ်ဖို့ သုံးတယ်။ Directory တိုင်းမှာ **root management group** တစ်ခုရှိပြီး root အောက်မှာ အဆင့် **၆ ဆင့်** ထိ ဆောက်လို့ရတယ် (subscription level မပါ)။"),
          ] },
          { type: 'callout', tone: 'memory', text: L(
            "Top-down order: **“My Small Rice Restaurant” = Management group → Subscription → Resource group → Resource.** Permissions and policies pour down like water: assign once at the top, every child inherits.",
            "上から順に：**「My Small Rice Restaurant」＝Management group → Subscription → Resource group → Resource**。権限とポリシーは水のように上から下へ流れます。上で 1 回割り当てれば、すべての子が継承します。",
            "အပေါ်ကနေ အောက်- **「My Small Rice Restaurant」 = Management group → Subscription → Resource group → Resource** လို့ မှတ်ပါ။ Permission နဲ့ policy တွေက ရေလို အပေါ်ကနေ အောက်စီးတယ်၊ အပေါ်မှာ တစ်ခါ assign လုပ်ရင် အောက်က အကုန် inherit ဖြစ်တယ်။"
          ) },
        ],
      },
      {
        id: "arm-and-lab",
        title: L("Azure Resource Manager and a hands-on mini-lab", "Azure Resource Manager とハンズオンミニラボ", "Azure Resource Manager နဲ့ လက်တွေ့ mini-lab"),
        blocks: [
          { type: 'p', text: L(
            "**Azure Resource Manager (ARM)** is the deployment and management service for Azure. Every request, whether from the Portal, Azure CLI, PowerShell, REST API or SDK, goes through ARM, which authenticates it with Microsoft Entra ID, checks RBAC, Azure Policy and locks, then sends it to the right resource provider. Because all tools use the same layer, you get **consistent results** whichever tool you use.",
            "**Azure Resource Manager（ARM）**は Azure のデプロイ・管理サービスです。Portal、Azure CLI、PowerShell、REST API、SDK のどこからのリクエストもすべて ARM を通り、Microsoft Entra ID で認証され、RBAC・Azure Policy・ロックが確認されてから適切なリソースプロバイダーに送られます。すべてのツールが同じ層を使うため、どのツールでも**一貫した結果**になります。",
            "**Azure Resource Manager (ARM)** က Azure ရဲ့ deployment နဲ့ management service ပါ။ Portal၊ Azure CLI၊ PowerShell၊ REST API၊ SDK ဘယ်ကလာတဲ့ request မဆို ARM ကိုဖြတ်ရတယ်။ ARM က Microsoft Entra ID နဲ့ authenticate လုပ်၊ RBAC၊ Azure Policy၊ lock တွေ စစ်ပြီးမှ သက်ဆိုင်ရာ resource provider ဆီ ပို့တယ်။ Tool အားလုံး layer တစ်ခုတည်းကို သုံးလို့ ဘယ် tool သုံးသုံး **ရလဒ်တူ** ရတယ်။"
          ) },
          { type: 'list', items: [
            L("**Declarative templates** (ARM JSON or **Bicep**): describe what you want, ARM figures out how. Deployments are **idempotent**: running the same template twice gives the same result.",
              "**宣言型テンプレート**（ARM JSON または **Bicep**）：欲しい状態を記述すれば、方法は ARM が判断します。デプロイは**冪等**で、同じテンプレートを 2 回実行しても結果は同じです。",
              "**Declarative template** (ARM JSON သို့ **Bicep**): ဘာလိုချင်လဲကို ရေးရုံပဲ၊ ဘယ်လိုလုပ်မလဲကို ARM က စဉ်းစားတယ်။ Deployment တွေက **idempotent** ပါ၊ template တစ်ခုတည်းကို နှစ်ခါ run လည်း ရလဒ်အတူတူပဲ။"),
            L("Manage resources **as a group**: deploy, monitor and delete a whole solution together.",
              "リソースを**グループとして**管理：ソリューション全体をまとめてデプロイ・監視・削除できます。",
              "Resource တွေကို **group လိုက်** စီမံ- solution တစ်ခုလုံးကို တစ်ခါတည်း deploy၊ monitor၊ delete လုပ်နိုင်တယ်။"),
            L("Built-in access control, **tags** for organizing and billing, **locks** to prevent accidental deletion, and dependency handling between resources.",
              "組み込みのアクセス制御、整理・課金のための**タグ**、誤削除を防ぐ**ロック**、リソース間の依存関係の処理を備えています。",
              "Built-in access control၊ စီစဉ်ဖို့နဲ့ billing အတွက် **tag**၊ မတော်တဆ မဖျက်မိအောင် **lock**၊ resource တွေကြား dependency ကို ကိုင်တွယ်ပေးတာတွေ ပါတယ်။"),
          ] },
          { type: 'code', lang: 'bash', code:
`# Sign in and choose the subscription to work in
az login
az account list --output table
az account set --subscription "<subscription-name-or-id>"

# List regions available to you
az account list-locations --query "[].{Name:name, Display:displayName}" -o table

# Create a resource group in Japan East and tag it
az group create --name rg-learn-dev --location japaneast --tags env=dev owner=me

# Create a storage account (a resource) inside the group
az storage account create --name stlearn$RANDOM --resource-group rg-learn-dev \\
  --location japaneast --sku Standard_LRS

# See everything in the group, then clean up (deletes ALL resources inside)
az resource list --resource-group rg-learn-dev -o table
az group delete --name rg-learn-dev --yes --no-wait`,
            caption: L("Azure CLI: subscription, resource group and resource basics", "Azure CLI：サブスクリプション、Resource Group、リソースの基本", "Azure CLI- subscription၊ resource group၊ resource အခြေခံ") },
          { type: 'steps', items: [
            L("Open the Azure Portal and select **Cloud Shell** (Bash) from the top bar, or use a free/trial subscription on your PC with Azure CLI installed.",
              "Azure Portal を開き、上部バーから **Cloud Shell**（Bash）を選びます。または Azure CLI をインストールした PC で無料/試用サブスクリプションを使います。",
              "Azure Portal ကိုဖွင့်ပြီး အပေါ်ဘားက **Cloud Shell** (Bash) ကို ရွေးပါ။ (သို့) Azure CLI တင်ထားတဲ့ ကိုယ့် PC ကနေ free/trial subscription ကို သုံးပါ။"),
            L("Run the commands above to create `rg-learn-dev` in `japaneast` with tags.",
              "上のコマンドを実行し、`japaneast` にタグ付きの `rg-learn-dev` を作成します。",
              "အပေါ်က command တွေကို run ပြီး `japaneast` မှာ tag ပါတဲ့ `rg-learn-dev` ကို ဆောက်ပါ။"),
            L("In the Portal, open **Resource groups > rg-learn-dev** and look at **Overview**, **Tags** and **Deployments**. Notice every CLI action was recorded as an ARM deployment or operation.",
              "Portal で **Resource groups > rg-learn-dev** を開き、**概要**、**タグ**、**デプロイ**を確認します。CLI の操作がすべて ARM のデプロイや操作として記録されていることに注目してください。",
              "Portal မှာ **Resource groups > rg-learn-dev** ကိုဖွင့်ပြီး **Overview**၊ **Tags**၊ **Deployments** ကို ကြည့်ပါ။ CLI နဲ့လုပ်ခဲ့တာ အားလုံး ARM deployment/operation အဖြစ် မှတ်တမ်းဝင်နေတာ သတိထားကြည့်ပါ။"),
            L("Open **Subscriptions > your subscription** and find the management group it belongs to, plus **Cost analysis**, to see how hierarchy and billing connect.",
              "**サブスクリプション > 自分のサブスクリプション**を開き、所属する管理グループと **コスト分析**を確認し、階層と課金のつながりを見ます。",
              "**Subscriptions > ကိုယ့် subscription** ကိုဖွင့်ပြီး ဘယ် management group ထဲမှာ ရှိလဲ၊ **Cost analysis** ကိုပါ ကြည့်ပြီး hierarchy နဲ့ billing ဘယ်လိုချိတ်လဲ လေ့လာပါ။"),
            L("Delete the resource group with `az group delete` so you are not charged. Confirm in the Portal that the storage account is gone too.",
              "課金されないよう `az group delete` で Resource Group を削除し、ストレージアカウントも消えたことを Portal で確認します。",
              "ငွေမကုန်အောင် `az group delete` နဲ့ resource group ကို ဖျက်ပါ။ Storage account ပါ ပျောက်သွားလား Portal မှာ စစ်ပါ။"),
          ] },
          { type: 'callout', tone: 'exam', text: L(
            "If a question says “consistent management layer”, “deploy resources as a group”, or “declarative JSON/Bicep templates”, the answer is **Azure Resource Manager**. Don't confuse it with Azure Arc (manages resources outside Azure) or Azure Monitor (observability).",
            "「一貫した管理レイヤー」「リソースをグループとしてデプロイ」「宣言型 JSON/Bicep テンプレート」とあれば答えは **Azure Resource Manager** です。Azure Arc（Azure 外のリソースを管理）や Azure Monitor（監視）と混同しないようにしましょう。",
            "မေးခွန်းမှာ 「consistent management layer」၊ 「resource တွေကို group လိုက် deploy」၊ 「declarative JSON/Bicep template」 ပါရင် အဖြေက **Azure Resource Manager** ပါ။ Azure Arc (Azure အပြင်က resource ကို စီမံ) နဲ့ Azure Monitor (monitoring) နဲ့ မရောပါနဲ့။"
          ) },
        ],
      },
    ],
    summary: [
      L("Cloud shifts spending from CapEx (buy upfront) to OpEx (pay as you go) using a consumption-based model.",
        "クラウドは従量課金モデルにより、支出を CapEx（先行投資）から OpEx（従量払い）へ移します。",
        "Cloud က consumption-based model နဲ့ အသုံးစရိတ်ကို CapEx (ကြိုဝယ်) ကနေ OpEx (သုံးသလောက်ပေး) ဘက် ရွှေ့ပေးတယ်။"),
      L("Elasticity is automatic scaling; scale up = bigger machine, scale out = more machines.",
        "弾力性は自動スケーリング。スケールアップ＝大きいマシン、スケールアウト＝台数を増やす。",
        "Elasticity = အလိုအလျောက် scale။ Scale up = စက်ပိုကြီး၊ Scale out = စက်ပိုများ။"),
      L("IaaS gives OS control, PaaS lets you focus on code, SaaS is ready-to-use software; serverless bills per execution.",
        "IaaS は OS を制御でき、PaaS はコードに集中でき、SaaS はすぐ使えるソフトウェア。サーバーレスは実行ごとに課金。",
        "IaaS က OS ကို ထိန်းနိုင်၊ PaaS က code ကိုပဲ အာရုံစိုက်နိုင်၊ SaaS က အသင့်သုံး software၊ Serverless က run တဲ့အကြိမ်အလိုက် ပေး။"),
      L("Data, devices, accounts and identities are always the customer's responsibility; physical datacenters are always Microsoft's.",
        "データ・デバイス・アカウント・ID は常に利用者の責任、物理データセンターは常に Microsoft の責任です。",
        "Data၊ device၊ account၊ identity က အမြဲ customer တာဝန်၊ physical datacenter က အမြဲ Microsoft တာဝန်။"),
      L("Hybrid = public + private connected; multi-cloud = several public clouds; Azure Arc governs resources outside Azure.",
        "ハイブリッド＝パブリックとプライベートの接続、マルチクラウド＝複数のパブリッククラウド。Azure Arc は Azure 外のリソースをガバナンスします。",
        "Hybrid = public + private ချိတ်ထား၊ Multi-cloud = public cloud အများ၊ Azure Arc က Azure အပြင်က resource ကို govern လုပ်တယ်။"),
      L("Availability zones (min. three per enabled region) protect against datacenter failure; region pairs protect against regional disasters.",
        "可用性ゾーン（対応リージョンに最低 3 つ）はデータセンター障害、リージョンペアはリージョン規模の災害から保護します。",
        "Availability zone (zone ပါတဲ့ region မှာ အနည်းဆုံး ၃ ခု) က datacenter ပျက်တာကနေ၊ region pair က region တစ်ခုလုံး ဘေးအန္တရာယ်ကနေ ကာကွယ်တယ်။"),
      L("Hierarchy: management group → subscription (billing boundary) → resource group (no nesting) → resource; settings inherit downward.",
        "階層：管理グループ → サブスクリプション（課金の境界）→ Resource Group（入れ子不可）→ リソース。設定は下へ継承されます。",
        "Hierarchy- management group → subscription (billing နယ်နိမိတ်) → resource group (nest မရ) → resource၊ setting တွေ အောက်ကို inherit ဖြစ်တယ်။"),
      L("Azure Resource Manager is the single, consistent management layer behind Portal, CLI, PowerShell and templates.",
        "Azure Resource Manager は Portal・CLI・PowerShell・テンプレートの背後にある、単一で一貫した管理レイヤーです。",
        "Azure Resource Manager က Portal၊ CLI၊ PowerShell၊ template အားလုံးနောက်က တစ်ခုတည်းသော consistent management layer ပါ။"),
    ],
  },
  questions: [
    {
      difficulty: 'EASY',
      exams: ['AZ-900'],
      prompt: L("A company is migrating a legacy application that needs a custom agent installed in the operating system. Which service model gives it full control of the OS?",
        "ある企業が、OS にカスタムエージェントをインストールする必要があるレガシーアプリを移行します。OS を完全に制御できるサービスモデルはどれですか？",
        "Company တစ်ခုက OS ထဲမှာ custom agent တင်ရမယ့် legacy application ကို migrate လုပ်မယ်။ OS ကို အပြည့်အဝ ထိန်းချုပ်နိုင်တဲ့ service model က ဘယ်ဟာလဲ?"),
      options: ['PaaS', 'SaaS', 'IaaS', 'Serverless'],
      correct: [2],
      explanation: L("IaaS (for example Azure Virtual Machines) gives you control of the OS, so you can install any agent. PaaS hides the OS from you, so you cannot install OS-level software there.",
        "IaaS（例：Azure Virtual Machines）では OS を制御できるため、任意のエージェントをインストールできます。PaaS では OS が隠されているため、OS レベルのソフトウェアはインストールできません。",
        "IaaS (ဥပမာ Azure Virtual Machines) မှာ OS ကို ကိုယ်တိုင်ထိန်းနိုင်လို့ ဘယ် agent မဆို တင်လို့ရတယ်။ PaaS မှာ OS ကို ဖုံးထားလို့ OS level software တင်လို့ မရဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900'],
      prompt: L("Under the shared responsibility model, which responsibility always stays with the customer, regardless of IaaS, PaaS or SaaS?",
        "責任共有モデルにおいて、IaaS・PaaS・SaaS に関係なく常に利用者に残る責任はどれですか？",
        "Shared responsibility model အရ IaaS၊ PaaS၊ SaaS ဘာပဲသုံးသုံး customer ဆီမှာ အမြဲကျန်နေတဲ့ တာဝန်က ဘယ်ဟာလဲ?"),
      options: ['Physical security of the datacenter', 'Patching the host hypervisor', 'Maintaining the physical network', 'Information and data'],
      correct: [3],
      explanation: L("Information and data (along with devices and accounts/identities) is always the customer's responsibility. Physical datacenter security, the physical network and the hypervisor are always Microsoft's job.",
        "情報とデータ（およびデバイス、アカウント・ID）は常に利用者の責任です。データセンターの物理セキュリティ、物理ネットワーク、ハイパーバイザーは常に Microsoft の責任です。",
        "Information နဲ့ data (device၊ account/identity အပါအဝင်) က အမြဲ customer တာဝန်ပါ။ Datacenter physical security၊ physical network၊ hypervisor ကတော့ အမြဲ Microsoft တာဝန်ပါ။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900'],
      prompt: L("A company spends a large amount upfront to buy servers and build its own server room. What type of expense is this?",
        "ある企業がサーバーの購入とサーバールーム構築のために多額の初期費用を支払いました。これはどの種類の支出ですか？",
        "Company တစ်ခုက server ဝယ်ပြီး ကိုယ်ပိုင် server room ဆောက်ဖို့ ငွေအများကြီး ကြိုပေးလိုက်တယ်။ ဒါ ဘယ်လို expense အမျိုးအစားလဲ?"),
      options: ['Operational expenditure (OpEx)', 'Capital expenditure (CapEx)', 'Consumption-based expenditure', 'Serverless expenditure'],
      correct: [1],
      explanation: L("Buying physical infrastructure upfront is CapEx, which is depreciated over time. OpEx is paying for services as you use them, which is what the cloud's consumption-based model offers.",
        "物理インフラを前払いで購入するのは CapEx で、時間をかけて減価償却されます。OpEx は使った分だけサービスに支払うもので、クラウドの従量課金モデルが提供するものです。",
        "Physical infrastructure ကို ကြိုဝယ်တာက CapEx ပါ၊ အချိန်ကြာတာနဲ့ depreciation လုပ်တယ်။ OpEx ကတော့ သုံးသလောက် ပေးတာပါ၊ cloud ရဲ့ consumption-based model က ဒါကို ပေးတာပါ။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900'],
      prompt: L("Your company uses Microsoft 365 for email and documents and does not manage any servers or code for it. Which service model is this?",
        "あなたの会社はメールと文書に Microsoft 365 を使っており、サーバーやコードは一切管理していません。これはどのサービスモデルですか？",
        "သင့် company က email နဲ့ document အတွက် Microsoft 365 ကို သုံးပြီး server (သို့) code ဘာမှ မစီမံဘူး။ ဒါ ဘယ် service model လဲ?"),
      options: ['SaaS', 'PaaS', 'IaaS', 'Private cloud'],
      correct: [0],
      explanation: L("Microsoft 365 is SaaS: complete software delivered over the internet where you only manage users, data and settings. PaaS would still require you to build and deploy your own application.",
        "Microsoft 365 は SaaS です。インターネット経由で提供される完成したソフトウェアで、利用者はユーザー・データ・設定のみ管理します。PaaS では自分でアプリを作成・デプロイする必要があります。",
        "Microsoft 365 က SaaS ပါ- internet ကနေ ပေးတဲ့ ပြီးပြည့်စုံတဲ့ software ဖြစ်ပြီး user၊ data၊ setting ကိုပဲ စီမံရတယ်။ PaaS ဆိုရင် ကိုယ့် application ကို ကိုယ်တိုင် ရေးပြီး deploy လုပ်ရသေးတယ်။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900'],
      prompt: L("You want to group a web app, its database and its storage account so they can be managed and deleted together. What should you use?",
        "Web アプリ、そのデータベース、ストレージアカウントをまとめて管理・削除できるようにグループ化したいです。何を使うべきですか？",
        "Web app၊ သူ့ database နဲ့ storage account ကို တစ်ခါတည်း စီမံ/ဖျက်လို့ရအောင် group ဖွဲ့ချင်တယ်။ ဘာကိုသုံးသင့်လဲ?"),
      options: ['A management group', 'An availability zone', 'A region pair', 'A resource group'],
      correct: [3],
      explanation: L("A resource group is the logical container for resources that share a lifecycle; deleting it removes everything inside. A management group organizes subscriptions, not individual resources.",
        "Resource Group はライフサイクルが同じリソースの論理コンテナーで、削除すると中身もすべて削除されます。管理グループはサブスクリプションを整理するもので、個々のリソースを入れるものではありません。",
        "Resource group က lifecycle တူတဲ့ resource တွေအတွက် logical container ပါ၊ ဖျက်ရင် ထဲက အကုန်ပျက်တယ်။ Management group ကတော့ subscription တွေကို စီစဉ်တာပါ၊ resource တစ်ခုချင်းကို ထည့်တာ မဟုတ်ဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900'],
      prompt: L("An online shop's web tier automatically adds instances during a flash sale and removes them when traffic drops. Which cloud benefit does this describe?",
        "オンラインショップの Web 層が、フラッシュセール中に自動でインスタンスを追加し、トラフィックが減ると削減します。これはどのクラウドのメリットですか？",
        "Online shop ရဲ့ web tier က flash sale အချိန် instance တွေကို အလိုအလျောက် တိုးပြီး traffic ကျရင် ပြန်လျှော့တယ်။ ဒါ ဘယ် cloud အကျိုးကျေးဇူးလဲ?"),
      options: ['Elasticity', 'High availability', 'Predictability', 'Reliability'],
      correct: [0],
      explanation: L("Elasticity is automatically scaling resources in and out as demand changes. High availability is about keeping the service up (uptime), not about matching capacity to demand.",
        "弾力性とは、需要の変化に応じてリソースを自動的に増減させることです。高可用性はサービスを稼働し続けること（稼働時間）であり、容量を需要に合わせることではありません。",
        "Elasticity ဆိုတာ demand ပြောင်းသလို resource တွေကို အလိုအလျောက် တိုး/လျှော့ တာပါ။ High availability က service ဆက်တက်နေဖို့ (uptime) အကြောင်းပါ၊ capacity ကို demand နဲ့ ညှိတာ မဟုတ်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-900'],
      prompt: L("What is the minimum number of availability zones in an Azure region that supports availability zones?",
        "可用性ゾーンをサポートする Azure リージョンには、最低いくつのゾーンがありますか？",
        "Availability zone ကို support လုပ်တဲ့ Azure region တစ်ခုမှာ zone အနည်းဆုံး ဘယ်နှခု ရှိလဲ?"),
      options: ['1', '2', '3', '6'],
      correct: [2],
      explanation: L("Zone-enabled regions have at least three separate zones, each with independent power, cooling and networking. Two would not allow a majority to survive a zone failure, which is why the design uses a minimum of three.",
        "ゾーン対応リージョンには、電源・冷却・ネットワークが独立したゾーンが最低 3 つあります。2 つではゾーン障害時に過半数を維持できないため、最低 3 つの設計になっています。",
        "Zone ပါတဲ့ region မှာ မီး၊ အအေးခံ၊ network သီးခြားစီရှိတဲ့ zone အနည်းဆုံး ၃ ခု ရှိတယ်။ ၂ ခုပဲဆိုရင် zone တစ်ခုပျက်တဲ့အခါ အများစု မကျန်နိုင်လို့ အနည်းဆုံး ၃ ခုနဲ့ ဒီဇိုင်းထားတာပါ။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-900'],
      prompt: L("The finance team wants Production and Development costs on separate invoices. At which level should the resources be separated?",
        "経理チームは、本番環境と開発環境のコストを別々の請求書にしたいと考えています。どの単位でリソースを分けるべきですか？",
        "Finance team က Production နဲ့ Development cost ကို invoice သီးခြားစီ လိုချင်တယ်။ Resource တွေကို ဘယ် level မှာ ခွဲသင့်လဲ?"),
      options: ['Subscriptions', 'Resource groups', 'Tags', 'Availability sets'],
      correct: [0],
      explanation: L("A subscription is the billing boundary: each subscription gets its own invoice. Resource groups and tags help you filter costs in Cost Management, but they do not produce separate invoices.",
        "サブスクリプションは課金の境界で、サブスクリプションごとに請求書が発行されます。Resource Group やタグは Cost Management でコストを絞り込むのに役立ちますが、請求書は分かれません。",
        "Subscription က billing နယ်နိမိတ်ပါ- subscription တစ်ခုစီကို invoice သီးခြား ထွက်တယ်။ Resource group နဲ့ tag က Cost Management မှာ cost ကို filter လုပ်ဖို့ ကူညီပေမယ့် invoice သီးခြား မထွက်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-900'],
      prompt: L("A bank must keep customer records in its own datacenter for regulatory reasons but wants to run its customer-facing website in Azure, with the two connected. Which deployment model is this?",
        "ある銀行は規制上の理由で顧客記録を自社データセンターに保管する必要がありますが、顧客向け Web サイトは Azure で動かし、両者を接続したいと考えています。これはどのデプロイモデルですか？",
        "ဘဏ်တစ်ခုက ဥပဒေအရ customer record တွေကို ကိုယ်ပိုင် datacenter မှာ ထားရပေမယ့် customer သုံးတဲ့ website ကို Azure မှာ run ပြီး နှစ်ခုကို ချိတ်ချင်တယ်။ ဒါ ဘယ် deployment model လဲ?"),
      options: ['Public cloud', 'Private cloud', 'Hybrid cloud', 'Multi-cloud'],
      correct: [2],
      explanation: L("Hybrid cloud combines on-premises (private) infrastructure with a public cloud and connects them. Multi-cloud means using several public cloud providers, which is not described here.",
        "ハイブリッドクラウドは、オンプレミス（プライベート）インフラとパブリッククラウドを組み合わせて接続する構成です。マルチクラウドは複数のパブリッククラウドを使うことで、この状況には当てはまりません。",
        "Hybrid cloud က on-premises (private) infrastructure နဲ့ public cloud ကို ပေါင်းပြီး ချိတ်ထားတာပါ။ Multi-cloud က public cloud provider အများကို သုံးတာဖြစ်လို့ ဒီအခြေအနေနဲ့ မကိုက်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-900'],
      prompt: L("A company wants to apply Azure Policy and tags to its on-premises Windows servers and to virtual machines running in another cloud provider. What should it use?",
        "ある企業が、オンプレミスの Windows サーバーと他のクラウドプロバイダーで動く仮想マシンに Azure Policy とタグを適用したいと考えています。何を使うべきですか？",
        "Company တစ်ခုက on-premises Windows server တွေနဲ့ တခြား cloud provider မှာ run နေတဲ့ VM တွေကို Azure Policy နဲ့ tag apply လုပ်ချင်တယ်။ ဘာကိုသုံးသင့်လဲ?"),
      options: ['Azure Advisor', 'Azure VMware Solution', 'Azure Monitor', 'Azure Arc'],
      correct: [3],
      explanation: L("Azure Arc projects servers, Kubernetes clusters and data services outside Azure into Azure Resource Manager, so Policy, tags and RBAC can be applied. Azure VMware Solution runs VMware workloads inside Azure; it does not manage machines in other clouds.",
        "Azure Arc は Azure 外のサーバー、Kubernetes クラスター、データサービスを Azure Resource Manager に登録し、Policy・タグ・RBAC を適用できるようにします。Azure VMware Solution は VMware ワークロードを Azure 内で実行するもので、他クラウドのマシンは管理しません。",
        "Azure Arc က Azure အပြင်က server၊ Kubernetes cluster၊ data service တွေကို Azure Resource Manager ထဲ ထည့်ပေးလို့ Policy၊ tag၊ RBAC apply လုပ်နိုင်တယ်။ Azure VMware Solution က VMware workload ကို Azure ထဲမှာ run တာပါ၊ တခြား cloud က machine ကို မစီမံဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-900'],
      prompt: L("Which are benefits of Azure region pairs? (Select TWO)",
        "Azure のリージョンペアのメリットはどれですか？（2 つ選択）",
        "Azure region pair ရဲ့ အကျိုးကျေးဇူးတွေက ဘာတွေလဲ? (၂ ခု ရွေးပါ)"),
      options: ['Planned platform updates are rolled out to one region of the pair at a time', 'Both regions are located in the same datacenter for low latency', 'During a broad outage, one region in each pair is prioritized for recovery', 'Region pairs guarantee zero data loss for every service'],
      correct: [0, 2],
      explanation: L("Region pairs get sequential updates (one region at a time) and prioritized recovery in large outages. They are deliberately far apart, not in the same datacenter, and they do not guarantee zero data loss; replication is often asynchronous.",
        "リージョンペアでは更新が順番に（片方ずつ）適用され、大規模障害時には復旧が優先されます。ペアは意図的に離れた場所にあり同じデータセンターではありません。また、複製は非同期のことが多く、データ損失ゼロは保証されません。",
        "Region pair မှာ update ကို တစ်ခုစီ အလှည့်ကျလုပ်ပြီး outage ကြီးဖြစ်ရင် ပြန်ကောင်းအောင် ဦးစားပေးတယ်။ Pair တွေကို ရည်ရွယ်ပြီး ဝေးဝေးထားတာဖြစ်လို့ datacenter တစ်ခုတည်းမှာ မဟုတ်ဘူး၊ replication က asynchronous ဖြစ်လေ့ရှိလို့ data loss သုည ကို အာမမခံဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-900'],
      prompt: L("A development team wants to deploy code without managing operating systems or servers. Which TWO Azure services are PaaS offerings? (Select TWO)",
        "開発チームが OS やサーバーを管理せずにコードをデプロイしたいと考えています。PaaS のサービスはどれですか？（2 つ選択）",
        "Development team က OS နဲ့ server မစီမံဘဲ code ကို deploy လုပ်ချင်တယ်။ PaaS ဖြစ်တဲ့ Azure service ၂ ခုက ဘာတွေလဲ? (၂ ခု ရွေးပါ)"),
      options: ['Azure Virtual Machines', 'Azure App Service', 'Azure SQL Database', 'Microsoft 365'],
      correct: [1, 2],
      explanation: L("App Service and Azure SQL Database are PaaS: Microsoft manages the OS and platform, you manage your app and data. Virtual Machines are IaaS (you manage the OS) and Microsoft 365 is SaaS.",
        "App Service と Azure SQL Database は PaaS で、OS とプラットフォームは Microsoft が管理し、利用者はアプリとデータを管理します。Virtual Machines は IaaS（OS は利用者が管理）、Microsoft 365 は SaaS です。",
        "App Service နဲ့ Azure SQL Database က PaaS ပါ- OS နဲ့ platform ကို Microsoft က စီမံပြီး ကိုယ်က app နဲ့ data ကိုပဲ စီမံတယ်။ Virtual Machines က IaaS (OS ကိုယ်တိုင်စီမံ)၊ Microsoft 365 က SaaS ပါ။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-900'],
      prompt: L("A VM is running out of memory, so an administrator changes its size from 2 vCPUs/8 GB to 8 vCPUs/32 GB. What kind of scaling is this?",
        "VM のメモリが不足したため、管理者がサイズを 2 vCPU/8 GB から 8 vCPU/32 GB に変更しました。これはどの種類のスケーリングですか？",
        "VM မှာ memory မလောက်လို့ admin က size ကို 2 vCPU/8 GB ကနေ 8 vCPU/32 GB ပြောင်းလိုက်တယ်။ ဒါ ဘယ်လို scaling လဲ?"),
      options: ['Horizontal scaling (scale out)', 'Vertical scaling (scale up)', 'Geo-replication', 'Load balancing'],
      correct: [1],
      explanation: L("Making a single machine bigger is vertical scaling (scale up). Horizontal scaling (scale out) would add more VM instances instead of enlarging one.",
        "1 台のマシンを大きくするのは垂直スケーリング（スケールアップ）です。水平スケーリング（スケールアウト）は 1 台を大きくするのではなく、VM インスタンスを追加します。",
        "စက်တစ်လုံးကို ပိုကြီးအောင်လုပ်တာ vertical scaling (scale up) ပါ။ Horizontal scaling (scale out) ဆိုရင် တစ်လုံးကို ချဲ့မယ့်အစား VM instance တွေ ထပ်တိုးတာပါ။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("Which statements about Azure resource groups are true? (Select all that apply)",
        "Azure の Resource Group について正しい記述をすべて選んでください。（該当するものをすべて選択）",
        "Azure resource group အကြောင်း မှန်တဲ့ statement တွေကို ရွေးပါ။ (သက်ဆိုင်တာ အားလုံး ရွေးပါ)"),
      options: ['A resource can belong to more than one resource group at the same time', 'Deleting a resource group deletes all resources inside it', 'Resources in a resource group can be in a different region from the resource group', 'A resource group can contain other resource groups'],
      correct: [1, 2],
      explanation: L("Deleting a resource group removes everything in it, and a group's location only stores metadata, so its resources can live in other regions. A resource belongs to exactly one group, and resource groups cannot be nested.",
        "Resource Group を削除すると中身はすべて削除されます。また、グループの場所はメタデータの保存先にすぎないため、リソースは他のリージョンに置けます。リソースは 1 つのグループにのみ属し、Resource Group は入れ子にできません。",
        "Resource group ကိုဖျက်ရင် ထဲက အကုန်ပျက်တယ်၊ group ရဲ့ location က metadata သိမ်းဖို့ပဲဖြစ်လို့ resource တွေက တခြား region မှာ ရှိလို့ရတယ်။ Resource တစ်ခုက group တစ်ခုတည်းမှာပဲ ရှိရပြီး resource group တွေကို nest လုပ်လို့ မရဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-900'],
      prompt: L("An application runs on VMs in Japan East. It must keep running if an entire datacenter fails, while keeping latency between instances very low. What should you do?",
        "あるアプリが Japan East の VM で動いています。データセンター全体が停止しても稼働し続け、かつインスタンス間の遅延を非常に低く保つ必要があります。どうすべきですか？",
        "Application တစ်ခုက Japan East က VM တွေပေါ်မှာ run နေတယ်။ Datacenter တစ်ခုလုံး ပျက်လည်း ဆက် run ရမယ်၊ instance တွေကြား latency လည်း အရမ်းနည်းရမယ်။ ဘာလုပ်သင့်လဲ?"),
      options: ['Deploy the VMs across availability zones in Japan East', 'Deploy the VMs in a single availability set', 'Deploy one VM in Japan East and one in Southeast Asia', 'Resize the VMs to a larger SKU'],
      correct: [0],
      explanation: L("Availability zones are separate datacenters within the same region, so they survive a datacenter failure with low inter-zone latency. An availability set only protects against rack or host failures inside one datacenter, and a distant region adds latency.",
        "可用性ゾーンは同一リージョン内の別々のデータセンターなので、低遅延のままデータセンター障害に耐えられます。可用性セットは 1 つのデータセンター内のラックやホストの障害のみ保護し、遠いリージョンは遅延が増えます。",
        "Availability zone တွေက region တစ်ခုတည်းထဲက သီးခြား datacenter တွေဖြစ်လို့ latency နည်းနည်းနဲ့ datacenter ပျက်တာကို ခံနိုင်တယ်။ Availability set က datacenter တစ်ခုအတွင်း rack/host ပျက်တာကိုပဲ ကာကွယ်ပြီး ဝေးတဲ့ region ကတော့ latency တက်စေတယ်။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-900'],
      prompt: L("A company moves its database from SQL Server on Azure VMs to Azure SQL Database. Which responsibility shifts from the company to Microsoft?",
        "ある企業が Azure VM 上の SQL Server から Azure SQL Database にデータベースを移行します。企業から Microsoft に移る責任はどれですか？",
        "Company တစ်ခုက database ကို Azure VM ပေါ်က SQL Server ကနေ Azure SQL Database ကို ရွှေ့တယ်။ Company ကနေ Microsoft ဆီ ပြောင်းသွားတဲ့ တာဝန်က ဘယ်ဟာလဲ?"),
      options: ['Managing which users can access the database', 'Classifying and protecting sensitive data', 'Patching the operating system', 'Securing employees’ laptops'],
      correct: [2],
      explanation: L("Moving from IaaS to PaaS shifts OS (and database engine) patching to Microsoft. Access management and data protection remain the customer's responsibility in every model, as do end-user devices.",
        "IaaS から PaaS への移行で、OS（とデータベースエンジン）のパッチ適用は Microsoft に移ります。アクセス管理とデータ保護、エンドユーザーのデバイスは、どのモデルでも利用者の責任のままです。",
        "IaaS ကနေ PaaS ပြောင်းရင် OS (နဲ့ database engine) patch လုပ်တာ Microsoft ဆီ ရောက်သွားတယ်။ Access စီမံတာ၊ data ကာကွယ်တာ၊ end-user device တွေကတော့ ဘယ် model မှာမဆို customer တာဝန်ပဲ ဆက်ဖြစ်တယ်။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-900'],
      prompt: L("Which of the following requests are processed by Azure Resource Manager? (Select THREE)",
        "次のうち Azure Resource Manager によって処理されるリクエストはどれですか？（3 つ選択）",
        "အောက်ပါ request တွေထဲက ဘယ်ဟာတွေကို Azure Resource Manager က process လုပ်လဲ? (၃ ခု ရွေးပါ)"),
      options: ['Creating a VM in the Azure portal', 'Running az group create in Azure CLI', 'Running New-AzResourceGroup in Azure PowerShell', 'Copying a file inside a VM over Remote Desktop'],
      correct: [0, 1, 2],
      explanation: L("The Portal, Azure CLI and Azure PowerShell all send management (control plane) requests through Azure Resource Manager. Copying a file inside a VM over RDP happens inside the guest OS and never goes through ARM.",
        "Portal、Azure CLI、Azure PowerShell はすべて管理（コントロールプレーン）要求を Azure Resource Manager 経由で送ります。RDP で VM 内のファイルをコピーするのはゲスト OS 内の操作であり、ARM を通りません。",
        "Portal၊ Azure CLI၊ Azure PowerShell အားလုံးက management (control plane) request တွေကို Azure Resource Manager ကနေ ပို့တယ်။ RDP နဲ့ VM ထဲမှာ file copy ကူးတာက guest OS ထဲမှာ ဖြစ်တာလို့ ARM ကို မဖြတ်ဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("A company has 40 subscriptions and wants the same Azure Policy and RBAC role assignments applied to all of them with the least administrative effort, including future subscriptions. What should it do?",
        "ある企業には 40 のサブスクリプションがあり、将来追加されるものも含めて、最小限の管理作業で同じ Azure Policy と RBAC ロール割り当てをすべてに適用したいと考えています。どうすべきですか？",
        "Company တစ်ခုမှာ subscription ၄၀ ရှိပြီး နောင်ထပ်လာမယ့် subscription တွေပါ အပါအဝင် Azure Policy နဲ့ RBAC role assignment တူတူကို အလုပ်အနည်းဆုံးနဲ့ apply လုပ်ချင်တယ်။ ဘာလုပ်သင့်လဲ?"),
      options: ['Assign the policy and roles to each subscription individually', 'Place the subscriptions in a management group and assign at that management group', 'Assign the policy and roles to every resource group', 'Apply the same tag to every subscription'],
      correct: [1],
      explanation: L("Assignments at a management group are inherited by every subscription under it, including subscriptions added later. Assigning to each subscription works but requires 40+ separate assignments and must be repeated for new ones; tags do not enforce anything.",
        "管理グループでの割り当ては、その下のすべてのサブスクリプション（後から追加されたものを含む）に継承されます。サブスクリプションごとの割り当ても可能ですが、40 以上の割り当てが必要で新規分も毎回追加が必要です。タグには強制力がありません。",
        "Management group မှာ assign လုပ်ရင် အောက်က subscription အားလုံး (နောက်မှထည့်တာ အပါအဝင်) inherit ဖြစ်တယ်။ Subscription တစ်ခုချင်း assign လုပ်လည်းရပေမယ့် ၄၀ ကျော် သီးခြားလုပ်ရပြီး အသစ်လာတိုင်း ထပ်လုပ်ရတယ်၊ tag ကတော့ ဘာမှ enforce မလုပ်ဘူး။"),
    },
  ],
  flashcards: [
    { term: 'Consumption-based model',
      definition: L("A pricing model where you pay only for the resources you use, with no upfront cost (OpEx).", "初期費用なしで、使ったリソース分だけ支払う料金モデル（OpEx）です。", "အစမှာ ငွေမပေးရဘဲ သုံးတဲ့ resource အတွက်ပဲ ပေးရတဲ့ pricing model (OpEx) ပါ။"),
      example: L("A test VM that runs 40 hours a month is billed for about 40 hours, not the whole month.", "月 40 時間だけ動くテスト用 VM は、1 か月分ではなく約 40 時間分だけ課金されます。", "တစ်လမှာ ၄၀ နာရီပဲ run တဲ့ test VM ကို တစ်လလုံးအတွက် မဟုတ်ဘဲ ၄၀ နာရီခန့်အတွက်ပဲ ကျသင့်တယ်။") },
    { term: 'Elasticity',
      definition: L("The ability to automatically add or remove resources as demand changes.", "需要の変化に応じて、リソースを自動的に追加・削減できる能力です。", "Demand ပြောင်းသလို resource တွေကို အလိုအလျောက် တိုး/လျှော့ နိုင်စွမ်းပါ။"),
      example: L("Autoscale grows an App Service plan from 2 to 10 instances during Black Friday, then back to 2.", "Black Friday 中に autoscale が App Service プランを 2 から 10 インスタンスに増やし、終了後 2 に戻します。", "Black Friday အချိန် autoscale က App Service plan ကို instance 2 ကနေ 10 ထိ တိုးပြီး ပြီးရင် 2 ပြန်လျှော့တယ်။") },
    { term: 'IaaS',
      definition: L("Infrastructure as a Service: rent VMs, storage and networks; you manage the OS and everything above it.", "Infrastructure as a Service：VM・ストレージ・ネットワークを借り、OS 以上はすべて利用者が管理します。", "Infrastructure as a Service- VM၊ storage၊ network ကို ငှားသုံးပြီး OS နဲ့ အပေါ်က အရာအားလုံးကို ကိုယ်တိုင်စီမံရတယ်။"),
      example: L("Lift-and-shift an on-premises Windows server with custom software to an Azure VM.", "独自ソフトウェアが入ったオンプレミスの Windows サーバーを Azure VM にリフト＆シフトします。", "Custom software ပါတဲ့ on-premises Windows server ကို Azure VM ဆီ lift-and-shift လုပ်တာ။") },
    { term: 'PaaS',
      definition: L("Platform as a Service: Microsoft manages the OS and runtime; you deploy your code and manage your data.", "Platform as a Service：OS とランタイムは Microsoft が管理し、利用者はコードをデプロイしデータを管理します。", "Platform as a Service- OS နဲ့ runtime ကို Microsoft က စီမံပြီး ကိုယ်က code deploy လုပ်ကာ data ကို စီမံတယ်။"),
      example: L("Deploy a Node.js web app to Azure App Service without patching any server.", "サーバーのパッチを当てることなく Node.js の Web アプリを Azure App Service にデプロイします。", "Server patch တစ်ခုမှ မလုပ်ဘဲ Node.js web app ကို Azure App Service ပေါ် deploy လုပ်တာ။") },
    { term: 'Shared responsibility model',
      definition: L("The split of security duties between Microsoft and the customer, which changes with IaaS, PaaS and SaaS.", "Microsoft と利用者のセキュリティ責任の分担で、IaaS・PaaS・SaaS によって変わります。", "Microsoft နဲ့ customer ကြား security တာဝန်ခွဲဝေမှုဖြစ်ပြီး IaaS၊ PaaS၊ SaaS အလိုက် ပြောင်းတယ်။"),
      example: L("On a VM you patch the OS; on Azure SQL Database Microsoft does, but you still control logins and data.", "VM では OS のパッチを利用者が当てますが、Azure SQL Database では Microsoft が当てます。ただしログインとデータは利用者が管理します。", "VM မှာ OS patch ကို ကိုယ်လုပ်ရ၊ Azure SQL Database မှာ Microsoft လုပ်ပေးပေမယ့် login နဲ့ data ကိုတော့ ကိုယ်ပဲ ထိန်းရတယ်။") },
    { term: 'Availability zone',
      definition: L("A physically separate location (one or more datacenters) within an Azure region with independent power, cooling and networking.", "Azure リージョン内の物理的に分離された場所（1 つ以上のデータセンター）で、電源・冷却・ネットワークが独立しています。", "Azure region အတွင်းက မီး၊ အအေးခံ၊ network သီးခြားရှိတဲ့ ရုပ်ပိုင်းဆိုင်ရာ ခွဲထားတဲ့ နေရာ (datacenter တစ်ခု သို့ အများ) ပါ။"),
      example: L("Run three web VMs in zones 1, 2 and 3 of Japan East so one datacenter outage does not stop the app.", "Japan East のゾーン 1・2・3 に Web VM を 1 台ずつ置き、1 つのデータセンター障害でもアプリが止まらないようにします。", "Japan East ရဲ့ zone 1၊ 2၊ 3 မှာ web VM တစ်လုံးစီထားလို့ datacenter တစ်ခုပျက်လည်း app မရပ်ဘူး။") },
    { term: 'Region pair',
      definition: L("Two Azure regions in the same geography, far apart, that receive staggered updates and prioritized recovery.", "同じ地域内で離れた 2 つの Azure リージョンで、更新が時間差で適用され、復旧が優先されます。", "Geography တူထဲမှာ ဝေးဝေးရှိတဲ့ Azure region နှစ်ခုဖြစ်ပြီး update ကို အလှည့်ကျရကာ recovery ဦးစားပေးခံရတယ်။"),
      example: L("Geo-redundant storage in Japan East replicates data to its pair, Japan West.", "Japan East の geo 冗長ストレージは、ペアである Japan West にデータを複製します。", "Japan East က geo-redundant storage က data ကို သူ့ pair ဖြစ်တဲ့ Japan West ဆီ copy ကူးတယ်။") },
    { term: 'Resource group',
      definition: L("A logical container for resources that share a lifecycle; cannot be nested, and deleting it deletes its resources.", "ライフサイクルが同じリソースの論理コンテナー。入れ子にできず、削除すると中のリソースも削除されます。", "Lifecycle တူတဲ့ resource တွေအတွက် logical container ပါ၊ nest မရ၊ ဖျက်ရင် ထဲက resource တွေပါ ပျက်တယ်။"),
      example: L("rg-shop-dev holds the dev web app, database and storage; delete it after the sprint to stop all charges.", "rg-shop-dev に開発用の Web アプリ・DB・ストレージを入れ、スプリント後に削除してすべての課金を止めます。", "rg-shop-dev ထဲမှာ dev web app၊ database၊ storage ထည့်ထားပြီး sprint ပြီးရင် ဖျက်လိုက်လို့ charge အကုန် ရပ်သွားတယ်။") },
    { term: 'Management group',
      definition: L("A container above subscriptions used to apply Azure Policy and RBAC to many subscriptions at once.", "サブスクリプションの上位にあるコンテナーで、多数のサブスクリプションに Azure Policy と RBAC を一括適用するために使います。", "Subscription အပေါ်က container ဖြစ်ပြီး subscription အများကြီးကို Azure Policy နဲ့ RBAC တစ်ခါတည်း apply လုပ်ဖို့ သုံးတယ်။"),
      example: L("Assign an allowed-locations policy to the Production management group so every prod subscription uses only Japan regions.", "Production 管理グループに許可リージョンのポリシーを割り当て、すべての本番サブスクリプションで日本のリージョンのみ使えるようにします。", "Production management group မှာ allowed-locations policy ကို assign လုပ်လို့ prod subscription အားလုံး Japan region ပဲ သုံးနိုင်တယ်။") },
    { term: 'Azure Resource Manager',
      definition: L("The deployment and management layer for Azure; every Portal, CLI, PowerShell and API request passes through it.", "Azure のデプロイ・管理レイヤーで、Portal・CLI・PowerShell・API のすべてのリクエストがここを通ります。", "Azure ရဲ့ deployment နဲ့ management layer ဖြစ်ပြီး Portal၊ CLI၊ PowerShell၊ API request အားလုံး ဒီကိုဖြတ်တယ်။"),
      example: L("Deploy the same Bicep file to dev and prod and get identical, repeatable environments.", "同じ Bicep ファイルを開発と本番にデプロイし、同一で再現可能な環境を作ります。", "Bicep file တစ်ခုတည်းကို dev နဲ့ prod မှာ deploy လုပ်ပြီး တူညီ၊ ထပ်ခါထပ်ခါ ဆောက်လို့ရတဲ့ environment ရတယ်။") },
  ],
};
