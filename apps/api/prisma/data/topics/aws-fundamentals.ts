import { L, type SeedTopic } from '../types.js';

export const topic: SeedTopic = {
  slug: 'aws-fundamentals',
  icon: 'Cloud',
  level: 'FOUNDATIONAL',
  exams: ['CLF-C02'],
  name: L("AWS Cloud Concepts & Fundamentals", "AWS クラウドの概念と基礎", "AWS Cloud အယူအဆနဲ့ အခြေခံ"),
  description: L(
    "The value of the AWS Cloud, deployment models, global infrastructure, the shared responsibility model, Well-Architected and CAF, the 7 Rs of migration, pricing and billing tools, and AWS Support plans.",
    "AWS クラウドの価値、デプロイモデル、グローバルインフラ、責任共有モデル、Well-Architected と CAF、移行の 7R、料金と請求ツール、AWS Support プランを学びます。",
    "AWS Cloud ရဲ့ တန်ဖိုး၊ deployment model တွေ၊ global infrastructure၊ shared responsibility model၊ Well-Architected နဲ့ CAF၊ migration 7 Rs၊ pricing နဲ့ billing tool တွေ၊ AWS Support plan တွေကို လေ့လာမယ်။",
  ),
  lesson: {
    minutes: 20,
    objectives: [
      L("Explain the six advantages of cloud computing and the three deployment models with business examples.",
        "クラウドコンピューティングの 6 つのメリットと 3 つのデプロイモデルを、ビジネス例を使って説明できる。",
        "Cloud computing ရဲ့ အားသာချက် ၆ ခုနဲ့ deployment model ၃ မျိုးကို business ဥပမာနဲ့ ရှင်းပြနိုင်မယ်။"),
      L("Describe Regions, Availability Zones, Local Zones, Wavelength Zones and edge locations, and choose a Region using four criteria.",
        "リージョン、アベイラビリティーゾーン、Local Zones、Wavelength Zones、エッジロケーションを説明し、4 つの基準でリージョンを選べる。",
        "Region၊ Availability Zone၊ Local Zone၊ Wavelength Zone၊ Edge location တွေကို ရှင်းပြပြီး စံနှုန်း ၄ ခုနဲ့ Region ကို ရွေးနိုင်မယ်။"),
      L("Apply the shared responsibility model to EC2, RDS and Lambda.",
        "EC2・RDS・Lambda に責任共有モデルを当てはめて説明できる。",
        "EC2၊ RDS၊ Lambda မှာ shared responsibility model ကို အသုံးချ ခွဲခြားနိုင်မယ်။"),
      L("Name the six Well-Architected pillars, the six CAF perspectives and the 7 Rs of migration.",
        "Well-Architected の 6 つの柱、CAF の 6 つのパースペクティブ、移行の 7R を挙げられる。",
        "Well-Architected pillar ၆ ခု၊ CAF perspective ၆ ခု၊ migration 7 Rs ကို ပြောနိုင်မယ်။"),
      L("Pick the right purchase option, billing tool and Support plan for a given scenario.",
        "シナリオに応じて適切な購入オプション、請求ツール、Support プランを選べる。",
        "Scenario တစ်ခုအတွက် သင့်တော်တဲ့ purchase option၊ billing tool၊ Support plan ကို ရွေးနိုင်မယ်။"),
    ],
    sections: [
      {
        id: "why-cloud",
        title: L("Why the cloud? The six advantages", "なぜクラウドなのか：6 つのメリット", "Cloud ကို ဘာကြောင့်သုံးလဲ- အားသာချက် ၆ ခု"),
        blocks: [
          { type: 'p', text: L(
            "**Cloud computing** is the on-demand delivery of IT resources over the internet with **pay-as-you-go** pricing. Instead of buying servers, waiting weeks for delivery and guessing how many you will need, you call an API and get capacity in minutes. Think of electricity: you do not build a power plant at home; you plug in and pay for the kilowatt-hours you use. AWS is the power company for compute, storage, databases and hundreds of other services.",
            "**クラウドコンピューティング**とは、IT リソースをインターネット経由でオンデマンドに、**従量課金**で提供することです。サーバーを購入して納品を何週間も待ち、必要台数を予想する代わりに、API を呼び出せば数分で容量を確保できます。電気を思い浮かべてください。自宅に発電所は建てず、コンセントにつないで使った kWh 分だけ支払います。AWS はコンピューティング、ストレージ、データベースなど数百のサービスにおける電力会社のような存在です。",
            "**Cloud computing** ဆိုတာ IT resource တွေကို internet ကနေ လိုတဲ့အချိန် **pay-as-you-go** (သုံးသလောက်ပေး) နဲ့ ပေးတာပါ။ Server ဝယ်ပြီး ရက်သတ္တပတ်ချီ စောင့်၊ ဘယ်နှစ်လုံးလိုမလဲ ခန့်မှန်းနေမယ့်အစား API ခေါ်လိုက်တာနဲ့ မိနစ်ပိုင်းအတွင်း capacity ရတယ်။ လျှပ်စစ်မီးလိုပဲ စဉ်းစားပါ- အိမ်မှာ power plant မဆောက်ဘူး၊ plug ထိုးပြီး သုံးသလောက် ပေးတယ်။ AWS က compute၊ storage၊ database စတဲ့ service ရာချီအတွက် ဓာတ်အားပေးကုမ္ပဏီလိုပါပဲ။"
          ) },
          { type: 'list', items: [
            L("**Trade fixed expense for variable expense**: no big upfront data center spend (CapEx); pay only for what you consume (OpEx).",
              "**固定費を変動費に変える**：データセンターへの多額の先行投資（CapEx）が不要で、使った分だけ支払います（OpEx）。",
              "**Fixed expense ကို variable expense အဖြစ်ပြောင်း**- data center အတွက် ငွေအများကြီး ကြိုမသုံးရ (CapEx)၊ သုံးသလောက်ပဲ ပေး (OpEx)။"),
            L("**Benefit from massive economies of scale**: AWS buys hardware for millions of customers, so its per-unit cost is lower and it passes savings on as lower prices.",
              "**大規模な規模の経済の恩恵を受ける**：AWS は数百万の顧客のためにハードウェアを調達するため単価が下がり、その分が値下げとして還元されます。",
              "**Economies of scale ရဲ့ အကျိုး**- AWS က customer သန်းချီအတွက် hardware ဝယ်လို့ တစ်ခုချင်း ကုန်ကျစရိတ် နည်းပြီး ဈေးနှုန်းလျှော့ပေးနိုင်တယ်။"),
            L("**Stop guessing capacity**: scale up or down as demand changes instead of over-buying (idle servers) or under-buying (outages).",
              "**キャパシティの予測が不要**：過剰購入（遊休サーバー）や不足（障害）を避け、需要に合わせて増減できます。",
              "**Capacity ခန့်မှန်းစရာမလို**- အများကြီးဝယ်ထားလို့ server အလကား ထိုင်နေတာ (သို့) နည်းလို့ system ကျတာမျိုး မဖြစ်ဘဲ demand အလိုက် တိုး/လျှော့ နိုင်တယ်။"),
            L("**Increase speed and agility**: new resources are minutes away, so experiments are cheap and fast.",
              "**スピードと俊敏性の向上**：新しいリソースは数分で用意でき、実験を安く速く行えます。",
              "**Speed နဲ့ agility တိုး**- resource အသစ်က မိနစ်ပိုင်းပဲ ကြာလို့ စမ်းသပ်မှုတွေ ဈေးသက်သာ မြန်ဆန်တယ်။"),
            L("**Stop spending money running and maintaining data centers**: spend engineering time on your product, not on racking servers and cooling.",
              "**データセンターの運用・保守にお金をかけない**：サーバーのラッキングや冷却ではなく、自社プロダクトにエンジニアの時間を使えます。",
              "**Data center run/ပြုပြင်ဖို့ ငွေမသုံးနဲ့တော့**- server တပ်ဆင်တာ၊ အအေးပေးတာထက် ကိုယ့် product ပေါ်မှာ engineer အချိန်ကို သုံးနိုင်တယ်။"),
            L("**Go global in minutes**: deploy to multiple Regions worldwide for lower latency for your customers.",
              "**数分でグローバル展開**：世界中の複数リージョンにデプロイし、顧客への遅延を減らせます。",
              "**မိနစ်ပိုင်းအတွင်း global ဖြစ်**- ကမ္ဘာအနှံ့ Region အများကြီးမှာ deploy လုပ်ပြီး customer တွေအတွက် latency လျှော့နိုင်တယ်။"),
          ] },
          { type: 'callout', tone: 'memory', text: L(
            "Memorize the six as **V-E-G-S-M-G**: Variable expense, Economies of scale, Guessing capacity stops, Speed and agility, Maintaining data centers stops, Global in minutes.",
            "6 つは **V-E-G-S-M-G** で覚えましょう：Variable expense、Economies of scale、Guessing capacity をやめる、Speed and agility、Maintaining data centers をやめる、Global in minutes。",
            "၆ ခုကို **V-E-G-S-M-G** လို့ မှတ်ပါ- Variable expense၊ Economies of scale၊ Guessing capacity မလို၊ Speed and agility၊ Maintaining data centers မလို၊ Global in minutes။"
          ) },
          { type: 'p', text: L(
            "Related terms the exam uses: **scalability** (the ability to grow to handle more load), **elasticity** (automatically adding and removing capacity to match demand, for example EC2 Auto Scaling), **high availability** (the system keeps running when a component fails) and **fault tolerance** (no interruption at all, usually through redundancy).",
            "試験でよく出る関連用語：**スケーラビリティ**（負荷増加に対応して拡張できる能力）、**弾力性**（EC2 Auto Scaling のように需要に合わせて容量を自動で増減すること）、**高可用性**（一部が故障してもシステムが動き続けること）、**フォールトトレランス**（冗長化により中断がまったく発生しないこと）。",
            "Exam မှာ သုံးတဲ့ ဆက်စပ်စကားလုံးတွေ- **Scalability** (load များလာရင် ချဲ့နိုင်စွမ်း)၊ **Elasticity** (EC2 Auto Scaling လို demand အလိုက် capacity ကို အလိုအလျောက် တိုး/လျှော့)၊ **High availability** (အစိတ်အပိုင်းတစ်ခု ပျက်ရင်တောင် system ဆက်အလုပ်လုပ်)၊ **Fault tolerance** (redundancy ကြောင့် လုံးဝ မရပ်တန့်)။"
          ) },
        ],
      },
      {
        id: "deployment-models",
        title: L("Deployment models and service models", "デプロイモデルとサービスモデル", "Deployment model နဲ့ Service model"),
        blocks: [
          { type: 'p', text: L(
            "A **deployment model** answers the question: where do the workloads run? AWS describes three models. Most large Japanese and global enterprises today are **hybrid** during their migration: a core banking system may stay on-premises for years while new web front ends run on AWS.",
            "**デプロイモデル**は「ワークロードをどこで動かすか」に答えるものです。AWS は 3 つのモデルを定義しています。日本やグローバルの大企業の多くは、移行期間中は**ハイブリッド**です。たとえば勘定系システムは何年もオンプレミスに残しつつ、新しい Web フロントエンドは AWS で動かします。",
            "**Deployment model** ဆိုတာ workload တွေ ဘယ်မှာ run မလဲ ဆိုတဲ့မေးခွန်းကို ဖြေတာပါ။ AWS က model ၃ မျိုး သတ်မှတ်ထားတယ်။ ဂျပန်နဲ့ ကမ္ဘာ့ ကုမ္ပဏီကြီးတော်တော်များများက migrate လုပ်နေချိန်မှာ **hybrid** ပါ- ဥပမာ core banking system ကို on-premises မှာ နှစ်ချီထားပြီး Web front end အသစ်တွေကို AWS မှာ run တယ်။"
          ) },
          { type: 'table',
            head: [L("Model", "モデル", "Model (ပုံစံ)"), L("What it means", "意味", "အဓိပ္ပာယ်"), L("Typical example", "典型例", "ဥပမာ")],
            rows: [
              [L("Cloud (cloud-native)", "クラウド（クラウドネイティブ）", "Cloud (cloud-native) အပြည့်"),
               L("All parts of the application run in the cloud.", "アプリケーションのすべてがクラウドで動きます。", "Application အစိတ်အပိုင်းအားလုံး cloud ပေါ်မှာ run တယ်။"),
               L("A startup builds on Lambda, DynamoDB and S3 from day one.", "スタートアップが初日から Lambda・DynamoDB・S3 で構築する。", "Startup တစ်ခုက ပထမနေ့ကတည်းက Lambda၊ DynamoDB၊ S3 နဲ့ တည်ဆောက်တယ်။")],
              [L("Hybrid", "ハイブリッド", "Hybrid (ရောစပ်)"),
               L("Cloud resources connected to on-premises infrastructure.", "クラウドのリソースとオンプレミスのインフラを接続します。", "Cloud resource တွေကို on-premises infrastructure နဲ့ ချိတ်ဆက်သုံးတယ်။"),
               L("On-prem ERP plus AWS analytics, linked by Site-to-Site VPN or Direct Connect.", "オンプレミスの ERP と AWS の分析基盤を Site-to-Site VPN や Direct Connect で接続する。", "On-prem ERP နဲ့ AWS analytics ကို Site-to-Site VPN (သို့) Direct Connect နဲ့ ချိတ်တယ်။")],
              [L("On-premises (private cloud)", "オンプレミス（プライベートクラウド）", "On-premises (ကိုယ်ပိုင် private cloud)"),
               L("Resources in your own data center, often virtualized; AWS Outposts brings AWS hardware on-site.", "自社データセンター内のリソース（多くは仮想化）。AWS Outposts を使うと AWS のハードウェアを自社に設置できます。", "ကိုယ့် data center ထဲက resource (များသောအားဖြင့် virtualized)။ AWS Outposts က AWS hardware ကို ကိုယ့်နေရာထဲ ယူလာပေးတယ်။"),
               L("A factory that must process data locally with very low latency.", "データを極めて低遅延で現地処理する必要がある工場。", "Data ကို latency အရမ်းနည်းနည်းနဲ့ နေရာမှာတင် process လုပ်ရမယ့် စက်ရုံ။")],
            ] },
          { type: 'p', text: L(
            "A **service model** answers a different question: how much do you manage? **IaaS** (for example Amazon EC2) gives you the OS; **PaaS** (for example AWS Elastic Beanstalk or Amazon RDS) manages the platform so you focus on code or data; **SaaS** (for example Amazon WorkMail or a Marketplace SaaS product) is finished software you simply use. Serverless services such as AWS Lambda remove servers from your view entirely.",
            "**サービスモデル**は別の問い「どこまで自分で管理するか」に答えます。**IaaS**（例：Amazon EC2）では OS を管理し、**PaaS**（例：AWS Elastic Beanstalk、Amazon RDS）ではプラットフォームが管理されるためコードやデータに集中でき、**SaaS**（例：Amazon WorkMail や Marketplace の SaaS 製品）は完成したソフトウェアを使うだけです。AWS Lambda のようなサーバーレスでは、サーバーの存在を意識する必要すらありません。",
            "**Service model** ကတော့ ကိုယ်ဘယ်လောက်ထိ စီမံရမလဲ ဆိုတဲ့ မေးခွန်းကို ဖြေတယ်။ **IaaS** (ဥပမာ Amazon EC2) မှာ OS ကို ကိုယ်စီမံရတယ်၊ **PaaS** (ဥပမာ AWS Elastic Beanstalk၊ Amazon RDS) မှာ platform ကို AWS စီမံလို့ code နဲ့ data ပေါ်ပဲ အာရုံစိုက်ရတယ်၊ **SaaS** (ဥပမာ Amazon WorkMail၊ Marketplace SaaS product) က အသင့်ပြီး software ကို သုံးရုံပဲ။ AWS Lambda လို serverless မှာတော့ server ကို လုံးဝ မမြင်ရတော့ဘူး။"
          ) },
        ],
      },
      {
        id: "global-infrastructure",
        title: L("AWS Global Infrastructure and choosing a Region", "AWS グローバルインフラとリージョンの選び方", "AWS Global Infrastructure နဲ့ Region ရွေးနည်း"),
        blocks: [
          { type: 'p', text: L(
            "AWS is built from nested building blocks. A **Region** is a separate geographic area such as `ap-northeast-1` (Tokyo) or `ap-northeast-3` (Osaka). Each Region contains **at least three Availability Zones (AZs)**. An AZ is **one or more discrete data centers** with redundant power, networking and connectivity, physically separated from the other AZs but linked by high-bandwidth, low-latency networking. Running across two or more AZs is the standard way to achieve high availability.",
            "AWS は入れ子構造の構成要素でできています。**リージョン**は `ap-northeast-1`（東京）や `ap-northeast-3`（大阪）のような独立した地理的エリアです。各リージョンには**最低 3 つのアベイラビリティーゾーン（AZ）**があります。AZ は冗長な電源・ネットワーク・接続を持つ **1 つ以上の独立したデータセンター**で、他の AZ と物理的に離れていますが、高帯域・低遅延のネットワークで結ばれています。2 つ以上の AZ にまたがって動かすことが、高可用性を実現する標準的な方法です。",
            "AWS ကို အဆင့်ဆင့် ထပ်ထားတဲ့ building block တွေနဲ့ တည်ဆောက်ထားတယ်။ **Region** ဆိုတာ `ap-northeast-1` (Tokyo) (သို့) `ap-northeast-3` (Osaka) လို သီးခြား ပထဝီဒေသ တစ်ခုပါ။ Region တစ်ခုစီမှာ **Availability Zone (AZ) အနည်းဆုံး ၃ ခု** ရှိတယ်။ AZ ဆိုတာ redundant power၊ network၊ connectivity ပါတဲ့ **သီးခြား data center တစ်ခု (သို့) တစ်ခုထက်ပို** ဖြစ်ပြီး တခြား AZ တွေနဲ့ ရုပ်ပိုင်းဆိုင်ရာ ခွဲထားပေမဲ့ bandwidth မြင့် latency နည်းတဲ့ network နဲ့ ချိတ်ထားတယ်။ AZ ၂ ခုနဲ့အထက်မှာ run တာက high availability ရဖို့ စံနည်းလမ်းပါ။"
          ) },
          { type: 'diagram', text:
`  Region: ap-northeast-1 (Tokyo)
+----------------------------------------------+
|  +-----------+  +-----------+  +-----------+ |
|  |   AZ a    |  |   AZ c    |  |   AZ d    | |
|  | [DC] [DC] |  |   [DC]    |  | [DC] [DC] | |
|  +-----------+  +-----------+  +-----------+ |
|   low-latency private links between AZs      |
+----------------------------------------------+
        |                          |
  Local Zone (metro)        Wavelength Zone (5G)
        |
  Edge locations / PoPs  -> CloudFront, Route 53`,
            caption: L("Data centers form AZs, AZs form a Region; edge sites extend the network", "データセンターが AZ を、AZ がリージョンを構成し、エッジ拠点がネットワークを拡張する", "Data center တွေက AZ ဖြစ်၊ AZ တွေက Region ဖြစ်၊ edge site တွေက network ကို ချဲ့တယ်") },
          { type: 'table',
            head: [L("Building block", "構成要素", "Building block (အစိတ်အပိုင်း)"), L("Purpose", "目的", "ရည်ရွယ်ချက်"), L("Use it when", "使う場面", "ဘယ်အချိန်သုံးလဲ")],
            rows: [
              [L("Availability Zone", "アベイラビリティーゾーン", "Availability Zone (AZ ဇုန်)"),
               L("Isolated failure domain inside a Region.", "リージョン内の独立した障害ドメイン。", "Region ထဲက သီးခြား failure domain။"),
               L("Multi-AZ RDS, an Auto Scaling group across 3 AZs.", "Multi-AZ の RDS、3 AZ にまたがる Auto Scaling グループ。", "Multi-AZ RDS၊ AZ ၃ ခုဖြတ်တဲ့ Auto Scaling group။")],
              [L("Local Zone", "Local Zone（ローカルゾーン）", "Local Zone (မြို့ကြီးဇုန်)"),
               L("Extends a Region into a large metro area for single-digit millisecond latency.", "リージョンを大都市圏に拡張し、1 桁ミリ秒の遅延を実現します。", "Region ကို မြို့ကြီးတစ်ခုဆီ ချဲ့ပြီး single-digit millisecond latency ရစေတယ်။"),
               L("Media rendering or real-time gaming near end users.", "エンドユーザーの近くでのメディアレンダリングやリアルタイムゲーム。", "End user နားမှာ media rendering (သို့) real-time gaming။")],
              [L("Wavelength Zone", "Wavelength Zone（5G ゾーン）", "Wavelength Zone (5G ဇုန်)"),
               L("AWS compute inside telecom carriers' 5G networks.", "通信事業者の 5G ネットワーク内にある AWS コンピューティング。", "Telecom carrier တွေရဲ့ 5G network ထဲက AWS compute။"),
               L("Ultra-low-latency apps for mobile devices on 5G.", "5G 上のモバイル端末向け超低遅延アプリ。", "5G သုံးတဲ့ mobile device အတွက် latency အရမ်းနည်းရမယ့် app။")],
              [L("Edge location (PoP)", "エッジロケーション（PoP）", "Edge location (PoP) နေရာ"),
               L("Caches content and answers DNS close to users; hundreds worldwide.", "ユーザーの近くでコンテンツをキャッシュし DNS に応答します。世界に数百か所あります。", "User နားမှာ content ကို cache လုပ်ပြီး DNS ဖြေပေးတယ်၊ ကမ္ဘာအနှံ့ ရာချီရှိတယ်။"),
               L("CloudFront CDN, Route 53, AWS Global Accelerator, Shield.", "CloudFront CDN、Route 53、AWS Global Accelerator、Shield で使用。", "CloudFront CDN၊ Route 53၊ AWS Global Accelerator၊ Shield။")],
              [L("AWS Outposts", "AWS Outposts（オンプレミス設置）", "AWS Outposts (ကိုယ့်နေရာမှာ တပ်)"),
               L("AWS-managed racks installed in your own data center.", "自社データセンターに設置される AWS 管理のラック。", "ကိုယ့် data center ထဲမှာ တပ်ဆင်တဲ့ AWS-managed rack။"),
               L("Hybrid workloads needing local data processing.", "現地でのデータ処理が必要なハイブリッドワークロード。", "Data ကို local မှာ process လုပ်ရမယ့် hybrid workload။")],
            ] },
          { type: 'p', text: L(
            "How do you choose a Region? Use four factors, in roughly this order: **1. Compliance and data governance** (laws may require personal data to stay in Japan, so Tokyo or Osaka); **2. Proximity / latency** to your customers; **3. Service and feature availability** (new services often launch in a few Regions first); **4. Pricing** (the same instance can cost more in one Region than another, for example São Paulo is usually more expensive than N. Virginia).",
            "リージョンはどう選ぶのでしょうか。おおむね次の順に 4 つの要素を考えます：**1. コンプライアンスとデータガバナンス**（法律で個人データを日本国内に置く必要があるなら東京か大阪）、**2. 顧客への近さ／遅延**、**3. サービスと機能の提供状況**（新サービスは一部のリージョンから先に提供されることが多い）、**4. 料金**（同じインスタンスでもリージョンにより価格が異なり、たとえばサンパウロは通常バージニア北部より高い）。",
            "Region ကို ဘယ်လိုရွေးမလဲ? အချက် ၄ ခုကို ဒီအစဉ်အတိုင်း စဉ်းစားပါ- **၁. Compliance နဲ့ data governance** (ဥပမာ ဥပဒေအရ personal data ကို ဂျပန်မှာပဲ ထားရမယ်ဆိုရင် Tokyo (သို့) Osaka)၊ **၂. Customer နဲ့ နီးကပ်မှု / latency**၊ **၃. Service နဲ့ feature ရရှိနိုင်မှု** (service အသစ်တွေက Region အနည်းငယ်မှာ အရင်ထွက်လေ့ရှိ)၊ **၄. ဈေးနှုန်း** (instance တစ်မျိုးတည်းပေမဲ့ Region အလိုက် ဈေးကွာတယ်၊ ဥပမာ São Paulo က N. Virginia ထက် များသောအားဖြင့် ဈေးကြီးတယ်)။"
          ) },
          { type: 'callout', tone: 'exam', text: L(
            "Exam traps: an AZ is **not** a single data center (it can be several); edge locations are **not** where you run EC2; and if a question mentions a legal requirement about where data lives, **compliance beats latency and price**. Most services are Regional; IAM, Route 53, CloudFront and Organizations are global.",
            "試験のひっかけ：AZ は単一のデータセンター**ではありません**（複数の場合があります）。エッジロケーションは EC2 を動かす場所**ではありません**。データの保存場所に関する法的要件が出てきたら、**遅延や価格よりコンプライアンスが優先**です。多くのサービスはリージョン単位ですが、IAM、Route 53、CloudFront、Organizations はグローバルです。",
            "Exam ထောင်ချောက်- AZ က data center တစ်ခုတည်း **မဟုတ်ဘူး** (အများကြီး ဖြစ်နိုင်)၊ Edge location မှာ EC2 run လို့ **မရဘူး**၊ data ဘယ်မှာထားရမလဲဆိုတဲ့ ဥပဒေလိုအပ်ချက် ပါလာရင် **latency နဲ့ ဈေးထက် compliance က အရင်**။ Service အများစုက Regional ဖြစ်ပြီး IAM၊ Route 53၊ CloudFront၊ Organizations က global ပါ။"
          ) },
        ],
      },
      {
        id: "shared-responsibility",
        title: L("The shared responsibility model", "責任共有モデル", "Shared responsibility model (တာဝန်ခွဲဝေမှု)"),
        blocks: [
          { type: 'p', text: L(
            "Security in AWS is a partnership. **AWS is responsible for security OF the cloud**: the physical data centers, hardware, the global network and the virtualization layer. **You are responsible for security IN the cloud**: your data, IAM users and permissions, security group rules, OS patching on EC2, and encryption choices. An apartment analogy helps: the building owner secures the entrance, walls and elevators; you lock your own door and decide who gets a key.",
            "AWS のセキュリティはパートナーシップです。**AWS はクラウド「の」セキュリティ**、つまり物理データセンター、ハードウェア、グローバルネットワーク、仮想化レイヤーに責任を持ちます。**利用者はクラウド「内」のセキュリティ**、つまりデータ、IAM ユーザーと権限、セキュリティグループのルール、EC2 の OS パッチ、暗号化の選択に責任を持ちます。マンションに例えると、オーナーはエントランス・壁・エレベーターを守り、住人は自分の部屋の鍵をかけ、誰に合鍵を渡すかを決めます。",
            "AWS မှာ security ဆိုတာ partnership ပါ။ **AWS က cloud 「ရဲ့」 security** (physical data center၊ hardware၊ global network၊ virtualization layer) ကို တာဝန်ယူတယ်။ **ကိုယ်က cloud 「ထဲက」 security** (data၊ IAM user နဲ့ permission၊ security group rule၊ EC2 ပေါ်က OS patching၊ encryption ရွေးချယ်မှု) ကို တာဝန်ယူရတယ်။ တိုက်ခန်းနဲ့ ဥပမာပေးရရင်- အဆောက်အအုံပိုင်ရှင်က ဝင်ပေါက်၊ နံရံ၊ ဓာတ်လှေကားကို လုံခြုံအောင်လုပ်ပေးတယ်၊ ကိုယ်ကတော့ ကိုယ့်အခန်းတံခါးကို သော့ခတ်ပြီး ဘယ်သူ့ကို သော့ပေးမလဲ ဆုံးဖြတ်ရတယ်။"
          ) },
          { type: 'diagram', text:
`CUSTOMER: security IN the cloud
+------------------------------------------------+
| Customer data                                  |
| IAM, applications, access management           |
| OS, network & firewall config (EC2)            |
| Client/server-side encryption, network traffic |
+------------------------------------------------+
AWS: security OF the cloud
+------------------------------------------------+
| Compute | Storage | Database | Networking      |
| Hardware / AWS Global Infrastructure           |
| Regions | Availability Zones | Edge locations  |
+------------------------------------------------+`,
            caption: L("The line moves up as services become more managed", "サービスがマネージドになるほど境界線は上に移動する", "Service က managed ဖြစ်လာလေ မျဉ်းက အပေါ်တက်လေ") },
          { type: 'table',
            head: [L("Service", "サービス", "Service (ဝန်ဆောင်မှု)"), L("AWS manages", "AWS が管理", "AWS စီမံတာ"), L("You manage", "利用者が管理", "ကိုယ်စီမံရတာ")],
            rows: [
              [L("Amazon EC2 (IaaS)", "Amazon EC2（IaaS 型）", "Amazon EC2 (IaaS အမျိုးအစား)"),
               L("Hardware, hypervisor, physical network.", "ハードウェア、ハイパーバイザー、物理ネットワーク。", "Hardware၊ hypervisor၊ physical network။"),
               L("Guest OS patches, apps, security groups, data, IAM roles.", "ゲスト OS のパッチ、アプリ、セキュリティグループ、データ、IAM ロール。", "Guest OS patch၊ app၊ security group၊ data၊ IAM role။")],
              [L("Amazon RDS (managed DB)", "Amazon RDS（マネージド DB）", "Amazon RDS (managed DB ဝန်ဆောင်မှု)"),
               L("OS and database engine patching, backups infrastructure.", "OS とデータベースエンジンのパッチ適用、バックアップ基盤。", "OS နဲ့ database engine patching၊ backup infrastructure။"),
               L("DB users, security groups, encryption choice, data.", "DB ユーザー、セキュリティグループ、暗号化の選択、データ。", "DB user၊ security group၊ encryption ရွေးချယ်မှု၊ data။")],
              [L("AWS Lambda (serverless)", "AWS Lambda（サーバーレス）", "AWS Lambda (serverless ဝန်ဆောင်မှု)"),
               L("Servers, OS, runtime patching, scaling.", "サーバー、OS、ランタイムのパッチ、スケーリング。", "Server၊ OS၊ runtime patching၊ scaling။"),
               L("Function code, execution role permissions, data.", "関数コード、実行ロールの権限、データ。", "Function code၊ execution role permission၊ data။")],
            ] },
          { type: 'callout', tone: 'exam', text: L(
            "Some controls are **shared**: patch management (AWS patches infrastructure, you patch your guest OS and apps), configuration management, and awareness and training. Whatever the service, **your data and who can access it are always your responsibility**.",
            "一部の統制は**共有**です：パッチ管理（AWS はインフラ、利用者はゲスト OS とアプリにパッチを適用）、構成管理、意識向上とトレーニング。どのサービスでも、**データと誰がアクセスできるかは常に利用者の責任**です。",
            "Control တချို့က **shared** ပါ- patch management (AWS က infrastructure ကို patch၊ ကိုယ်က guest OS နဲ့ app ကို patch)၊ configuration management၊ awareness နဲ့ training။ ဘယ် service ပဲဖြစ်ဖြစ် **ကိုယ့် data နဲ့ အဲဒီ data ကို ဘယ်သူဝင်ခွင့်ရလဲ ဆိုတာက အမြဲ ကိုယ့်တာဝန်** ပါ။"
          ) },
        ],
      },
      {
        id: "well-architected-caf",
        title: L("Well-Architected Framework and Cloud Adoption Framework", "Well-Architected フレームワークとクラウド導入フレームワーク", "Well-Architected Framework နဲ့ Cloud Adoption Framework"),
        blocks: [
          { type: 'p', text: L(
            "The **AWS Well-Architected Framework** is a set of best practices for designing and reviewing workloads. It is like a building inspection checklist: it does not build the house for you, but it tells you whether the wiring, plumbing and foundations are sound. You can run a free review of your workload with the **AWS Well-Architected Tool** in the console.",
            "**AWS Well-Architected フレームワーク**は、ワークロードの設計とレビューのためのベストプラクティス集です。建物検査のチェックリストのようなもので、家を建ててはくれませんが、配線・配管・基礎が健全かを教えてくれます。コンソールの **AWS Well-Architected Tool** を使えば、ワークロードのレビューを無料で実施できます。",
            "**AWS Well-Architected Framework** ဆိုတာ workload တွေကို design လုပ်ဖို့နဲ့ review လုပ်ဖို့ best practice အစုပါ။ အဆောက်အအုံ စစ်ဆေးရေး checklist နဲ့တူတယ်- အိမ်ကို ဆောက်မပေးဘူး၊ ဒါပေမဲ့ ဝါယာကြိုး၊ ရေပိုက်၊ အုတ်မြစ်တွေ ကောင်းမကောင်း ပြောပြတယ်။ Console ထဲက **AWS Well-Architected Tool** နဲ့ ကိုယ့် workload ကို အခမဲ့ review လုပ်နိုင်တယ်။"
          ) },
          { type: 'table',
            head: [L("Pillar", "柱", "Pillar (မဏ္ဍိုင်)"), L("Key question", "主な問い", "အဓိကမေးခွန်း"), L("Example practice", "実践例", "လက်တွေ့ဥပမာ")],
            rows: [
              [L("Operational Excellence", "運用上の優秀性", "Operational Excellence (လည်ပတ်မှု ထူးချွန်)"), L("How do we run and improve operations?", "運用をどう実行し、改善するか？", "Operation တွေကို ဘယ်လို run ပြီး တိုးတက်အောင်လုပ်မလဲ?"), L("Infrastructure as code, small frequent changes, runbooks.", "Infrastructure as Code、小さく頻繁な変更、ランブック。", "Infrastructure as code၊ သေးသေးနဲ့ မကြာခဏ ပြောင်းလဲမှု၊ runbook။")],
              [L("Security", "セキュリティ", "Security (လုံခြုံရေး)"), L("How do we protect data and systems?", "データとシステムをどう守るか？", "Data နဲ့ system ကို ဘယ်လိုကာကွယ်မလဲ?"), L("Least privilege, encryption, traceability with CloudTrail.", "最小権限、暗号化、CloudTrail によるトレーサビリティ。", "Least privilege၊ encryption၊ CloudTrail နဲ့ traceability။")],
              [L("Reliability", "信頼性", "Reliability (ယုံကြည်စိတ်ချရမှု)"), L("Can it recover from failure and meet demand?", "障害から回復し、需要に対応できるか？", "Failure ကနေ ပြန်ကောင်းပြီး demand ကို ဖြည့်နိုင်လား?"), L("Multi-AZ, automatic recovery, tested backups.", "マルチ AZ、自動復旧、テスト済みバックアップ。", "Multi-AZ၊ automatic recovery၊ စမ်းသပ်ပြီးသား backup။")],
              [L("Performance Efficiency", "パフォーマンス効率", "Performance Efficiency (စွမ်းဆောင်ရည် ထိရောက်မှု)"), L("Do we use resources efficiently as needs change?", "要件の変化に応じてリソースを効率的に使えているか？", "လိုအပ်ချက်ပြောင်းလာရင် resource ကို ထိရောက်စွာ သုံးနေလား?"), L("Right instance type, serverless, CloudFront caching.", "適切なインスタンスタイプ、サーバーレス、CloudFront のキャッシュ。", "သင့်တော်တဲ့ instance type၊ serverless၊ CloudFront caching။")],
              [L("Cost Optimization", "コスト最適化", "Cost Optimization (ကုန်ကျစရိတ် သက်သာအောင်)"), L("Do we deliver value at the lowest price?", "最低価格で価値を提供できているか？", "ဈေးအသက်သာဆုံးနဲ့ တန်ဖိုးပေးနေလား?"), L("Right-sizing, Savings Plans, turning off idle resources.", "ライトサイジング、Savings Plans、遊休リソースの停止。", "Right-sizing၊ Savings Plans၊ မသုံးတဲ့ resource ပိတ်ခြင်း။")],
              [L("Sustainability", "持続可能性", "Sustainability (ရေရှည်တည်တံ့မှု)"), L("How do we minimize environmental impact?", "環境への影響をどう最小化するか？", "သဘာဝပတ်ဝန်းကျင် ထိခိုက်မှုကို ဘယ်လိုလျှော့မလဲ?"), L("Maximize utilization, Graviton instances, managed services.", "使用率の最大化、Graviton インスタンス、マネージドサービス。", "Utilization မြှင့်၊ Graviton instance၊ managed service။")],
            ] },
          { type: 'callout', tone: 'memory', text: L(
            "Six pillars = **CRISPS**: Cost optimization, Reliability, operational excellence (**I**mprove operations), Security, Performance efficiency, Sustainability. Sustainability was added in 2021 as the sixth pillar.",
            "6 つの柱は **CRISPS** で覚えます：Cost optimization、Reliability、運用上の優秀性（**I**mprove operations）、Security、Performance efficiency、Sustainability。Sustainability は 2021 年に 6 番目の柱として追加されました。",
            "Pillar ၆ ခုကို **CRISPS** လို့ မှတ်ပါ- Cost optimization၊ Reliability၊ operational excellence (**I**mprove operations)၊ Security၊ Performance efficiency၊ Sustainability။ Sustainability ကို ၂၀၂၁ မှာ ၆ ခုမြောက် pillar အဖြစ် ထည့်ခဲ့တယ်။"
          ) },
          { type: 'p', text: L(
            "The **AWS Cloud Adoption Framework (AWS CAF)** looks at the organization, not the workload. It groups guidance into six **perspectives**. **Business**, **People** and **Governance** are business capabilities (strategy, culture and training, risk and portfolio management). **Platform**, **Security** and **Operations** are technical capabilities (architecture, protection, and running services day to day). Use CAF when the question is about getting the whole company ready, for example retraining staff or changing budgeting.",
            "**AWS クラウド導入フレームワーク（AWS CAF）**はワークロードではなく組織を対象にしています。ガイダンスを 6 つの**パースペクティブ**に分けています。**Business**、**People**、**Governance** はビジネス面の能力（戦略、文化と教育、リスクとポートフォリオ管理）、**Platform**、**Security**、**Operations** は技術面の能力（アーキテクチャ、保護、日々のサービス運用）です。社員の再教育や予算の組み方の変更など、会社全体の準備が問われる場合は CAF を使います。",
            "**AWS Cloud Adoption Framework (AWS CAF)** က workload ကို မဟုတ်ဘဲ organization ကို ကြည့်တယ်။ Guidance ကို **perspective** ၆ ခု ခွဲထားတယ်။ **Business**၊ **People**၊ **Governance** က business capability (strategy၊ culture နဲ့ training၊ risk နဲ့ portfolio management)၊ **Platform**၊ **Security**၊ **Operations** က technical capability (architecture၊ ကာကွယ်ရေး၊ နေ့စဉ် service run ခြင်း) ပါ။ ဝန်ထမ်းတွေ ပြန်လေ့ကျင့်ပေးတာ၊ budget ပုံစံပြောင်းတာလို ကုမ္ပဏီတစ်ခုလုံး အဆင်သင့်ဖြစ်ဖို့ မေးရင် CAF ကို သုံးပါ။"
          ) },
          { type: 'callout', tone: 'exam', text: L(
            "If a question says **workload design review** or **pillar**, think Well-Architected. If it says **organizational readiness**, **perspective**, **staff skills** or **business outcomes of migration**, think CAF. Example: the People perspective addresses culture, training and organizational change.",
            "問題に**ワークロードの設計レビュー**や**柱**が出てきたら Well-Architected、**組織の準備**、**パースペクティブ**、**社員のスキル**、**移行のビジネス成果**が出てきたら CAF を考えます。例：People パースペクティブは文化、トレーニング、組織変革を扱います。",
            "မေးခွန်းမှာ **workload design review** (သို့) **pillar** ပါရင် Well-Architected၊ **organizational readiness**၊ **perspective**၊ **staff skill**၊ **migration ရဲ့ business outcome** ပါရင် CAF လို့ တွေးပါ။ ဥပမာ People perspective က culture၊ training၊ organizational change ကို ကိုင်တွယ်တယ်။"
          ) },
        ],
      },
      {
        id: "migration-7rs",
        title: L("Migration strategies: the 7 Rs", "移行戦略：7 つの R", "Migration strategy- 7 Rs နည်းလမ်း"),
        blocks: [
          { type: 'p', text: L(
            "When a company moves hundreds of applications, it does not treat them all the same. Each application gets one of the **7 Rs**. Think of moving to a new apartment: some furniture you carry as is, some you repaint, some you replace with new furniture, and some you throw away.",
            "企業が数百のアプリケーションを移行するとき、すべてを同じように扱うわけではありません。各アプリケーションに **7 つの R** のいずれかを割り当てます。引っ越しに例えると、そのまま運ぶ家具、塗り直す家具、新品に買い替える家具、捨てる家具があります。",
            "Company တစ်ခုက application ရာချီကို ရွှေ့တဲ့အခါ အကုန်လုံးကို တစ်ပုံစံတည်း မဆက်ဆံဘူး။ Application တစ်ခုစီကို **7 Rs** ထဲက တစ်ခု သတ်မှတ်တယ်။ အိမ်အသစ်ပြောင်းတာနဲ့ တူတယ်- ပရိဘောဂတချို့ကို ဒီအတိုင်းသယ်၊ တချို့ကို ဆေးပြန်သုတ်၊ တချို့ကို အသစ်ဝယ်၊ တချို့ကို လွှင့်ပစ်တယ်။"
          ) },
          { type: 'table',
            head: [L("Strategy", "戦略", "Strategy (နည်းဗျူဟာ)"), L("What happens", "内容", "ဘာလုပ်လဲ"), L("Example", "例", "ဥပမာ")],
            rows: [
              [L("Retire", "Retire（廃止）", "Retire (ပိတ်သိမ်း)"), L("Turn off apps nobody needs.", "不要なアプリを停止します。", "မလိုတော့တဲ့ app ကို ပိတ်တယ်။"), L("An old reporting tool with zero users.", "利用者ゼロの古いレポートツール。", "User မရှိတော့တဲ့ report tool အဟောင်း။")],
              [L("Retain", "Retain（保持）", "Retain (ဆက်ထား)"), L("Keep on-premises for now.", "当面オンプレミスに残します。", "လောလောဆယ် on-premises မှာ ထားတယ်။"), L("A mainframe that was recently upgraded.", "最近更新したばかりのメインフレーム。", "မကြာသေးခင်က upgrade လုပ်ထားတဲ့ mainframe။")],
              [L("Rehost (lift and shift)", "Rehost（リフト＆シフト）", "Rehost (lift and shift၊ ဒီအတိုင်းရွှေ့)"), L("Move as is to EC2.", "そのまま EC2 に移します。", "ဒီအတိုင်း EC2 ပေါ် ရွှေ့တယ်။"), L("Use AWS Application Migration Service (MGN).", "AWS Application Migration Service（MGN）を使う。", "AWS Application Migration Service (MGN) သုံးတယ်။")],
              [L("Relocate", "Relocate（移設）", "Relocate (platform လိုက်ရွှေ့)"), L("Move a whole hypervisor platform without changes.", "ハイパーバイザー基盤ごと変更なしで移します。", "Hypervisor platform တစ်ခုလုံးကို မပြောင်းဘဲ ရွှေ့တယ်။"), L("VMware workloads moved to VMware on AWS.", "VMware ワークロードを AWS 上の VMware に移す。", "VMware workload ကို AWS ပေါ်က VMware ဆီ ရွှေ့တယ်။")],
              [L("Replatform (lift, tinker and shift)", "Replatform（リフト・ティンカー・シフト）", "Replatform (lift, tinker and shift၊ နည်းနည်းပြင်)"), L("Small optimizations, no core code change.", "コアのコードは変えず、小さな最適化を行います。", "Core code မပြောင်းဘဲ optimization အသေးလေးတွေ လုပ်တယ်။"), L("Self-managed MySQL moved to Amazon RDS.", "自己管理の MySQL を Amazon RDS に移す。", "ကိုယ်တိုင်စီမံတဲ့ MySQL ကို Amazon RDS ဆီ ရွှေ့တယ်။")],
              [L("Repurchase (drop and shop)", "Repurchase（買い替え）", "Repurchase (drop and shop၊ အသစ်ဝယ်)"), L("Replace with a SaaS product.", "SaaS 製品に置き換えます。", "SaaS product နဲ့ အစားထိုးတယ်။"), L("On-prem CRM replaced by Salesforce.", "オンプレミスの CRM を Salesforce に置き換える。", "On-prem CRM ကို Salesforce နဲ့ အစားထိုးတယ်။")],
              [L("Refactor / re-architect", "Refactor／リアーキテクト", "Refactor / re-architect (ပြန်ဒီဇိုင်း)"), L("Redesign as cloud-native for new capabilities.", "新しい機能のためにクラウドネイティブとして再設計します。", "Capability အသစ်ရဖို့ cloud-native အဖြစ် ပြန် design လုပ်တယ်။"), L("Monolith rebuilt with Lambda and DynamoDB.", "モノリスを Lambda と DynamoDB で作り直す。", "Monolith ကို Lambda နဲ့ DynamoDB နဲ့ ပြန်ဆောက်တယ်။")],
            ] },
          { type: 'p', text: L(
            "Helpful migration tools: **AWS Migration Hub** tracks progress, **AWS Application Migration Service** rehosts servers, **AWS Database Migration Service (DMS)** moves databases with minimal downtime (with the Schema Conversion Tool for engine changes), and the **AWS Snow Family** physically ships large data sets when the network is too slow.",
            "移行に役立つツール：**AWS Migration Hub** は進捗を追跡し、**AWS Application Migration Service** はサーバーをリホストし、**AWS Database Migration Service（DMS）**はダウンタイムを最小限にしてデータベースを移行します（エンジン変更時は Schema Conversion Tool を併用）。ネットワークが遅すぎる場合、**AWS Snow Family** で大量データを物理的に輸送します。",
            "Migration အတွက် အသုံးဝင်တဲ့ tool တွေ- **AWS Migration Hub** က progress ကို ခြေရာခံတယ်၊ **AWS Application Migration Service** က server တွေကို rehost လုပ်တယ်၊ **AWS Database Migration Service (DMS)** က downtime အနည်းဆုံးနဲ့ database ရွှေ့တယ် (engine ပြောင်းရင် Schema Conversion Tool တွဲသုံး)၊ network နှေးလွန်းရင် **AWS Snow Family** နဲ့ data အများကြီးကို ရုပ်ပိုင်းဆိုင်ရာ ပို့တယ်။"
          ) },
          { type: 'callout', tone: 'exam', text: L(
            "Key differentiator: **Rehost** = no changes; **Replatform** = a few cloud optimizations without changing core architecture (classic example: moving to RDS); **Refactor** = significant code and architecture changes, highest effort but most cloud benefit.",
            "見分けるポイント：**Rehost** は変更なし、**Replatform** はコアのアーキテクチャを変えずにクラウド向け最適化を少し行う（典型例：RDS への移行）、**Refactor** はコードとアーキテクチャを大きく変更し、労力は最大ですがクラウドの恩恵も最大です。",
            "ခွဲခြားရမယ့်အချက်- **Rehost** = ဘာမှမပြောင်း၊ **Replatform** = core architecture မပြောင်းဘဲ cloud optimization နည်းနည်း (ဥပမာ RDS ဆီရွှေ့)၊ **Refactor** = code နဲ့ architecture ကို အကြီးအကျယ်ပြောင်း၊ အလုပ်အများဆုံးပေမဲ့ cloud အကျိုးအများဆုံး။"
          ) },
        ],
      },
      {
        id: "pricing",
        title: L("Pricing fundamentals and EC2 purchase options", "料金の基本と EC2 の購入オプション", "Pricing အခြေခံနဲ့ EC2 purchase option"),
        blocks: [
          { type: 'p', text: L(
            "AWS pricing rests on three principles: **pay as you go** (pay for what you use), **save when you commit** (1- or 3-year commitments lower the rate), and **pay less by using more** (tiered volume pricing, for example Amazon S3 gets cheaper per GB at higher volumes). For compute, you combine purchase options like a smart commuter: a monthly train pass for the daily commute, single tickets for occasional trips, and discount tickets when your schedule is flexible.",
            "AWS の料金は 3 つの原則に基づきます：**使った分だけ支払う**、**コミットすると節約できる**（1 年または 3 年の契約で単価が下がる）、**使うほど安くなる**（段階的なボリューム料金。たとえば Amazon S3 は量が多いほど GB 単価が下がる）。コンピューティングでは、賢い通勤者のように購入オプションを組み合わせます。毎日の通勤には定期券、たまの移動には普通乗車券、予定が柔軟なときは割引切符を使うイメージです。",
            "AWS pricing က principle ၃ ခုပေါ် အခြေခံတယ်- **pay as you go** (သုံးသလောက်ပေး)၊ **save when you commit** (၁ နှစ် (သို့) ၃ နှစ် commit လုပ်ရင် ဈေးသက်သာ)၊ **pay less by using more** (tiered volume pricing၊ ဥပမာ Amazon S3 မှာ များများသုံးလေ GB တစ်ခုစီဈေး နည်းလေ)။ Compute အတွက် purchase option တွေကို ပေါင်းသုံးပါ- နေ့တိုင်းရုံးသွားဖို့ လစဉ်ရထားလက်မှတ်၊ ရံဖန်ရံခါ ခရီးအတွက် တစ်ကြိမ်လက်မှတ်၊ အချိန်လိုက်လျောနိုင်ရင် discount လက်မှတ် သုံးသလိုပါပဲ။"
          ) },
          { type: 'table',
            head: [L("Option", "オプション", "Option (ရွေးချယ်စရာ)"), L("Discount vs On-Demand", "オンデマンド比の割引", "On-Demand နဲ့ယှဉ် discount"), L("Best for", "最適な用途", "သင့်တော်တာ")],
            rows: [
              [L("On-Demand", "オンデマンド", "On-Demand (လိုသလိုသုံး)"), L("None; no commitment, pay per second or hour.", "なし。契約不要で秒または時間単位の課金。", "မရှိ၊ commit မလို၊ စက္ကန့် (သို့) နာရီအလိုက်ပေး။"), L("Short, unpredictable workloads; testing.", "短期で予測不能なワークロード、テスト。", "ခဏတာ၊ ခန့်မှန်းမရတဲ့ workload၊ testing။")],
              [L("Reserved Instances (1 or 3 years)", "リザーブドインスタンス（1 年／3 年）", "Reserved Instances (၁ နှစ် / ၃ နှစ်)"), L("Up to 72%.", "最大 72%。", "72% အထိ။"), L("Steady-state use of a specific instance family in a Region.", "特定リージョンの特定インスタンスファミリーの定常利用。", "Region တစ်ခုမှာ instance family တစ်မျိုးကို အမြဲသုံးတာ။")],
              [L("Savings Plans (1 or 3 years)", "Savings Plans（1 年／3 年）", "Savings Plans (၁ နှစ် / ၃ နှစ်)"), L("Up to 72%.", "最大 72%。", "72% အထိ။"), L("Commit to $/hour; Compute Savings Plans also cover Fargate and Lambda across Regions and families.", "1 時間あたりの金額をコミット。Compute Savings Plans はリージョンやファミリーをまたぎ Fargate と Lambda にも適用。", "တစ်နာရီ $ ပမာဏကို commit၊ Compute Savings Plans က Region နဲ့ family မရွေး Fargate၊ Lambda ပါ ဖုံးတယ်။")],
              [L("Spot Instances", "スポットインスタンス", "Spot Instances (အပို capacity)"), L("Up to 90%.", "最大 90%。", "90% အထိ။"), L("Fault-tolerant, flexible jobs; can be interrupted with a 2-minute warning.", "耐障害性があり柔軟なジョブ。2 分前の通知で中断される場合あり。", "Fault-tolerant၊ အချိန်လိုက်လျောနိုင်တဲ့ job၊ ၂ မိနစ် ကြိုသတိပေးပြီး ရပ်ခံရနိုင်တယ်။")],
              [L("Dedicated Hosts", "Dedicated Hosts（専有ホスト）", "Dedicated Hosts (သီးသန့် server)"), L("Most expensive.", "最も高価。", "ဈေးအကြီးဆုံး။"), L("Server-bound software licenses or compliance needing a physical server.", "サーバー単位のライセンスや物理サーバー専有が必要なコンプライアンス。", "Server-bound software license (သို့) physical server သီးသန့်လိုတဲ့ compliance။")],
            ] },
          { type: 'list', items: [
            L("**Data transfer IN** to AWS from the internet is generally **free**.", "インターネットから AWS への**データ転送（IN）**は通常**無料**です。", "Internet ကနေ AWS ထဲ **data transfer IN** က ယေဘုယျအားဖြင့် **အခမဲ့**။"),
            L("**Data transfer OUT** to the internet is **charged** per GB; CloudFront can reduce this cost.", "インターネットへの**データ転送（OUT）**は GB 単位で**課金**されます。CloudFront でコストを下げられます。", "Internet ဆီ **data transfer OUT** ကို GB အလိုက် **ကျသင့်**တယ်၊ CloudFront နဲ့ လျှော့နိုင်တယ်။"),
            L("Traffic **between AZs** or **between Regions** is usually charged; traffic within the same AZ using private IPs is free.", "**AZ 間**や**リージョン間**の通信は通常課金されます。同一 AZ 内のプライベート IP 通信は無料です。", "**AZ အချင်းချင်း** (သို့) **Region အချင်းချင်း** traffic ကို များသောအားဖြင့် ကျသင့်တယ်၊ AZ တစ်ခုတည်းထဲ private IP နဲ့ဆိုရင် အခမဲ့။"),
            L("**Free Tier**: exam questions describe three offer types: **Always Free** (for example 1 million Lambda requests per month), **12 Months Free** and **Trials**. Since mid-2025, new accounts instead receive sign-up credits and a time-limited free plan, while Always Free offers continue.",
              "**無料利用枠**：試験では 3 種類の提供形態が出ます：**常時無料**（例：Lambda の月 100 万リクエスト）、**12 か月無料**、**トライアル**。2025 年半ばからは新規アカウントにはサインアップクレジットと期間限定の無料プランが付与され、常時無料の提供は継続しています。",
              "**Free Tier**- exam မှာ offer ၃ မျိုး မေးတယ်- **Always Free** (ဥပမာ Lambda request တစ်လ ၁ သန်း)၊ **12 Months Free**၊ **Trials**။ ၂၀၂၅ ခုနှစ်လယ်ကစပြီး account အသစ်တွေက sign-up credit နဲ့ အချိန်ကန့်သတ် free plan ရပြီး Always Free offer တွေကတော့ ဆက်ရှိတယ်။"),
          ] },
          { type: 'callout', tone: 'memory', text: L(
            "Discount ladder: **Spot up to 90%** (cheap but interruptible) > **RI / Savings Plans up to 72%** (commitment) > **On-Demand** (flexible). Data rule: **IN is free, OUT costs money**.",
            "割引のはしご：**スポット最大 90%**（安いが中断あり）＞ **RI／Savings Plans 最大 72%**（コミット）＞ **オンデマンド**（柔軟）。データのルール：**IN は無料、OUT は有料**。",
            "Discount လှေကား- **Spot 90% အထိ** (ဈေးပေါပေမဲ့ ရပ်ခံရနိုင်) > **RI / Savings Plans 72% အထိ** (commit လို) > **On-Demand** (flexible)။ Data rule- **IN အခမဲ့၊ OUT ငွေကုန်**။"
          ) },
        ],
      },
      {
        id: "billing-tools",
        title: L("Billing and Cost Management tools", "請求とコスト管理のツール", "Billing နဲ့ Cost Management tool တွေ"),
        blocks: [
          { type: 'p', text: L(
            "AWS gives you a tool for each stage of the money lifecycle: **estimate** before you build, **monitor and alert** while you run, **analyze** afterwards, and **allocate** costs to teams. Picking the right one is a favorite exam topic, because the names sound similar.",
            "AWS は費用のライフサイクルの各段階にツールを用意しています：構築前の**見積もり**、運用中の**監視とアラート**、事後の**分析**、チームへのコストの**配賦**です。名前が似ているため、正しいツールの選択は試験の定番テーマです。",
            "AWS က ငွေကုန်ကျမှု lifecycle အဆင့်တိုင်းအတွက် tool ပေးထားတယ်- မဆောက်ခင် **ခန့်မှန်း**၊ run နေစဉ် **monitor နဲ့ alert**၊ နောက်မှ **analyze**၊ team တွေဆီ cost ကို **ခွဲဝေ**။ နာမည်တွေ ဆင်တူလို့ မှန်တဲ့ tool ရွေးတာက exam မှာ မကြာခဏ မေးတယ်။"
          ) },
          { type: 'list', items: [
            L("**AWS Pricing Calculator**: estimate the cost of an architecture **before** you deploy it; share the estimate as a link.",
              "**AWS Pricing Calculator**：デプロイ**前**にアーキテクチャのコストを見積もり、見積もりをリンクで共有できます。",
              "**AWS Pricing Calculator**- deploy **မလုပ်ခင်** architecture ရဲ့ cost ကို ခန့်မှန်းပြီး link နဲ့ share လုပ်နိုင်တယ်။"),
            L("**AWS Cost Explorer**: visualize and analyze past spend by service, account or tag, and **forecast** future spend; it also gives RI and Savings Plans recommendations.",
              "**AWS Cost Explorer**：サービス・アカウント・タグ別に過去の支出を可視化・分析し、将来の支出を**予測**します。RI や Savings Plans の推奨も提供します。",
              "**AWS Cost Explorer**- အရင်က ကုန်ကျမှုကို service၊ account၊ tag အလိုက် ပုံဖော်ပြီး analyze လုပ်တယ်၊ နောင် ကုန်ကျမှုကို **forecast** လုပ်တယ်၊ RI နဲ့ Savings Plans recommendation လည်း ပေးတယ်။"),
            L("**AWS Budgets**: set a cost, usage, RI or Savings Plans budget and get **alerts** (email or SNS) when actual or **forecasted** spend crosses a threshold; budget actions can even apply an IAM policy or stop instances.",
              "**AWS Budgets**：コスト・使用量・RI・Savings Plans の予算を設定し、実績または**予測**の支出がしきい値を超えると（メールや SNS で）**アラート**を受け取れます。予算アクションで IAM ポリシーの適用やインスタンス停止も可能です。",
              "**AWS Budgets**- cost၊ usage၊ RI၊ Savings Plans budget သတ်မှတ်ပြီး တကယ့် (သို့) **forecast** ကုန်ကျမှုက threshold ကျော်ရင် (email (သို့) SNS နဲ့) **alert** ရတယ်၊ budget action နဲ့ IAM policy ချိတ်တာ၊ instance ရပ်တာလည်း လုပ်နိုင်တယ်။"),
            L("**AWS Cost and Usage Report (CUR)**, now delivered through **Data Exports**: the **most detailed** line-item billing data, delivered to an S3 bucket and queried with Amazon Athena or QuickSight.",
              "**AWS Cost and Usage Report（CUR）**（現在は **Data Exports** から出力）：**最も詳細な**明細レベルの請求データで、S3 バケットに出力され、Amazon Athena や QuickSight でクエリします。",
              "**AWS Cost and Usage Report (CUR)** (အခု **Data Exports** ကနေ ထုတ်)- **အသေးစိတ်အကျဆုံး** line-item billing data ဖြစ်ပြီး S3 bucket ထဲ ပို့ပေးတယ်၊ Amazon Athena (သို့) QuickSight နဲ့ query လုပ်တယ်။"),
            L("**Cost allocation tags**: tags such as `project=shop` must be **activated** in the Billing console before they appear in Cost Explorer and CUR.",
              "**コスト配分タグ**：`project=shop` のようなタグは、Cost Explorer や CUR に表示される前に、請求コンソールで**有効化**する必要があります。",
              "**Cost allocation tag**- `project=shop` လို tag တွေကို Cost Explorer နဲ့ CUR မှာ မြင်ရဖို့ Billing console မှာ **activate** လုပ်ရတယ်။"),
            L("**AWS Organizations consolidated billing**: one bill for all member accounts, usage is **combined for volume discounts**, and RI / Savings Plans discounts can be shared across accounts, at no extra cost.",
              "**AWS Organizations の一括請求**：全メンバーアカウントの請求を 1 つにまとめ、使用量が**合算されてボリューム割引**が適用され、RI／Savings Plans の割引もアカウント間で共有できます。追加料金はかかりません。",
              "**AWS Organizations consolidated billing**- member account အားလုံးအတွက် bill တစ်စောင်တည်း၊ usage ကို **ပေါင်းပြီး volume discount** ရ၊ RI / Savings Plans discount ကို account တွေကြား မျှသုံးနိုင်၊ ပိုက်ဆံ ထပ်မပေးရ။"),
          ] },
          { type: 'code', lang: 'bash', code:
`# Last month's cost grouped by service
aws ce get-cost-and-usage \\
  --time-period Start=2026-09-01,End=2026-10-01 \\
  --granularity MONTHLY --metrics UnblendedCost \\
  --group-by Type=DIMENSION,Key=SERVICE

# Create a 50 USD monthly budget that emails at 80% forecast
aws budgets create-budget --account-id 111122223333 \\
  --budget '{"BudgetName":"monthly-50","BudgetLimit":{"Amount":"50","Unit":"USD"},"TimeUnit":"MONTHLY","BudgetType":"COST"}' \\
  --notifications-with-subscribers '[{"Notification":{"NotificationType":"FORECASTED","ComparisonOperator":"GREATER_THAN","Threshold":80,"ThresholdType":"PERCENTAGE"},"Subscribers":[{"SubscriptionType":"EMAIL","Address":"me@example.com"}]}]'

# Activate a user-defined cost allocation tag
aws ce update-cost-allocation-tags-status \\
  --cost-allocation-tags-status TagKey=project,Status=Active`,
            caption: L("AWS CLI: analyze cost, create a budget alert, activate a tag", "AWS CLI：コスト分析、予算アラートの作成、タグの有効化", "AWS CLI- cost analyze၊ budget alert ဆောက်၊ tag activate") },
          { type: 'steps', items: [
            L("Sign in as an IAM user or Identity Center user with billing access (not the root user) and open **Billing and Cost Management**.",
              "請求へのアクセス権を持つ IAM ユーザーまたは Identity Center ユーザー（ルートユーザーではない）でサインインし、**Billing and Cost Management** を開きます。",
              "Billing access ပါတဲ့ IAM user (သို့) Identity Center user (root user မဟုတ်) နဲ့ sign in ဝင်ပြီး **Billing and Cost Management** ကို ဖွင့်ပါ။"),
            L("Open **Budgets** and create a monthly cost budget (for example 10 USD) with an alert at 80% forecasted and 100% actual.",
              "**Budgets** を開き、月次のコスト予算（例：10 USD）を作成し、予測 80% と実績 100% でアラートを設定します。",
              "**Budgets** ကိုဖွင့်ပြီး လစဉ် cost budget (ဥပမာ 10 USD) ဆောက်ပါ၊ forecast 80% နဲ့ actual 100% မှာ alert ထားပါ။"),
            L("Tag your EC2 instance from the GitHub Actions lab with `project=demo-app`, then activate the `project` key under **Cost allocation tags**.",
              "GitHub Actions の演習で作成した EC2 インスタンスに `project=demo-app` タグを付け、**Cost allocation tags** で `project` キーを有効化します。",
              "GitHub Actions lab က EC2 instance ကို `project=demo-app` tag တပ်ပြီး **Cost allocation tags** မှာ `project` key ကို activate လုပ်ပါ။"),
            L("After about 24 hours, open **Cost Explorer**, group by the `project` tag, and check the forecast for the month.",
              "約 24 時間後に **Cost Explorer** を開き、`project` タグでグループ化して当月の予測を確認します。",
              "၂၄ နာရီလောက်ကြာရင် **Cost Explorer** ဖွင့်ပြီး `project` tag နဲ့ group ဖွဲ့ကာ ဒီလ forecast ကို စစ်ပါ။"),
            L("Use the **AWS Pricing Calculator** to estimate the same instance as a 1-year Compute Savings Plan and compare with On-Demand.",
              "**AWS Pricing Calculator** で同じインスタンスを 1 年の Compute Savings Plan として見積もり、オンデマンドと比較します。",
              "**AWS Pricing Calculator** နဲ့ အဲဒီ instance ကိုပဲ ၁ နှစ် Compute Savings Plan အဖြစ် ခန့်မှန်းပြီး On-Demand နဲ့ နှိုင်းယှဉ်ပါ။"),
          ] },
          { type: 'callout', tone: 'exam', text: L(
            "Match the verb to the tool: **estimate** = Pricing Calculator, **visualize / forecast / analyze** = Cost Explorer, **alert / threshold** = Budgets, **most granular data / Athena** = Cost and Usage Report, **unusual spend detected by ML** = Cost Anomaly Detection, **single bill for many accounts** = Organizations consolidated billing.",
            "動詞でツールを選びます：**見積もり** = Pricing Calculator、**可視化／予測／分析** = Cost Explorer、**アラート／しきい値** = Budgets、**最も詳細なデータ／Athena** = Cost and Usage Report、**ML による異常な支出の検出** = Cost Anomaly Detection、**複数アカウントの請求を 1 つに** = Organizations の一括請求。",
            "ကြိယာနဲ့ tool ကို တွဲမှတ်ပါ- **ခန့်မှန်း** = Pricing Calculator၊ **ပုံဖော် / forecast / analyze** = Cost Explorer၊ **alert / threshold** = Budgets၊ **အသေးစိတ်ဆုံး data / Athena** = Cost and Usage Report၊ **ML နဲ့ ပုံမှန်မဟုတ်တဲ့ ကုန်ကျမှု ရှာ** = Cost Anomaly Detection၊ **account အများကြီးအတွက် bill တစ်စောင်** = Organizations consolidated billing။"
          ) },
        ],
      },
      {
        id: "support-ecosystem",
        title: L("Support plans, Trusted Advisor, Marketplace and partners", "Support プラン、Trusted Advisor、Marketplace、パートナー", "Support plan၊ Trusted Advisor၊ Marketplace နဲ့ partner တွေ"),
        blocks: [
          { type: 'p', text: L(
            "AWS Support plans are like hospital memberships: everyone can walk into the public clinic (Basic), but faster doctors, 24/7 phone lines and a personal physician cost more. The exam tests which plan is the **cheapest one that meets** a stated requirement.",
            "AWS Support プランは病院の会員制度のようなものです。誰でも一般外来（Basic）は利用できますが、より速い対応、24 時間 365 日の電話窓口、専属医師には追加費用がかかります。試験では、要件を**満たす最も安いプラン**はどれかが問われます。",
            "AWS Support plan တွေက ဆေးရုံ membership လိုပါပဲ- လူတိုင်း အများပြည်သူ ဆေးခန်း (Basic) ကို သွားလို့ရတယ်၊ ဒါပေမဲ့ ပိုမြန်တဲ့ ဆရာဝန်၊ 24/7 ဖုန်းလိုင်း၊ ကိုယ်ပိုင် ဆရာဝန်ဆိုရင် ပိုပေးရတယ်။ Exam က requirement ကို **ဖြည့်နိုင်တဲ့ ဈေးအသက်သာဆုံး plan** ကို မေးတယ်။"
          ) },
          { type: 'table',
            head: [L("Plan", "プラン", "Plan (အစီအစဉ်)"), L("Technical support", "技術サポート", "Technical support (နည်းပညာ အကူ)"), L("Fastest response target", "最速の応答目標", "အမြန်ဆုံး response target"), L("Extras", "その他", "အပိုအကျိုး")],
            rows: [
              [L("Basic (free)", "Basic（無料）", "Basic (အခမဲ့)"), L("No technical cases; account and billing help, docs, re:Post.", "技術ケースなし。アカウントと請求のサポート、ドキュメント、re:Post。", "Technical case မရ၊ account နဲ့ billing အကူ၊ docs၊ re:Post။"), L("Not applicable.", "該当なし。", "မသက်ဆိုင်။"), L("Core Trusted Advisor checks, AWS Health Dashboard.", "Trusted Advisor のコアチェック、AWS Health Dashboard。", "Trusted Advisor core check၊ AWS Health Dashboard။")],
              [L("Developer", "Developer プラン", "Developer plan အဆင့်"), L("Business-hours email to Cloud Support Associates.", "営業時間内に Cloud Support Associate へメール。", "အလုပ်ချိန်အတွင်း Cloud Support Associate ဆီ email။"), L("System impaired: < 12 business hours.", "システム障害：12 営業時間以内。", "System impaired- business hour ၁၂ အတွင်း။"), L("Best for experimenting and testing.", "試行やテストに最適。", "စမ်းသပ်ဖို့ testing အတွက် အကောင်းဆုံး။")],
              [L("Business", "Business プラン", "Business plan အဆင့်"), L("24/7 phone, chat and email to Cloud Support Engineers.", "24 時間 365 日、Cloud Support Engineer へ電話・チャット・メール。", "24/7 Cloud Support Engineer ဆီ ဖုန်း၊ chat၊ email။"), L("Production system down: < 1 hour.", "本番システム停止：1 時間以内。", "Production system down- ၁ နာရီအတွင်း။"), L("Full Trusted Advisor checks, AWS Support API.", "Trusted Advisor の全チェック、AWS Support API。", "Trusted Advisor check အပြည့်၊ AWS Support API။")],
              [L("Enterprise On-Ramp", "Enterprise On-Ramp プラン", "Enterprise On-Ramp plan အဆင့်"), L("24/7, plus a pool of Technical Account Managers.", "24 時間 365 日、TAM のプールによる支援。", "24/7၊ Technical Account Manager အုပ်စု (pool) ပါ။"), L("Business-critical system down: < 30 minutes.", "ビジネスクリティカルなシステム停止：30 分以内。", "Business-critical system down- မိနစ် ၃၀ အတွင်း။"), L("Concierge Support Team, proactive reviews.", "コンシェルジュサポートチーム、プロアクティブなレビュー。", "Concierge Support Team၊ proactive review။")],
              [L("Enterprise", "Enterprise プラン", "Enterprise plan အဆင့်"), L("24/7, with a **designated** Technical Account Manager (TAM).", "24 時間 365 日、**専任の** TAM が付きます。", "24/7၊ **ကိုယ်ပိုင်သတ်မှတ်ထားတဲ့** Technical Account Manager (TAM)။"), L("Business-critical system down: < 15 minutes.", "ビジネスクリティカルなシステム停止：15 分以内。", "Business-critical system down- မိနစ် ၁၅ အတွင်း။"), L("Concierge, Infrastructure Event Management, training.", "コンシェルジュ、Infrastructure Event Management、トレーニング。", "Concierge၊ Infrastructure Event Management၊ training။")],
            ] },
          { type: 'callout', tone: 'memory', text: L(
            "Response ladder: **Business 1 hour → On-Ramp 30 minutes → Enterprise 15 minutes**. **TAM** first appears with Enterprise On-Ramp (a pool); a **designated** TAM only with Enterprise. **Full Trusted Advisor** starts at Business.",
            "応答時間のはしご：**Business 1 時間 → On-Ramp 30 分 → Enterprise 15 分**。**TAM** は Enterprise On-Ramp（プール）から、**専任** TAM は Enterprise のみ。**Trusted Advisor の全チェック**は Business から。",
            "Response လှေကား- **Business ၁ နာရီ → On-Ramp မိနစ် ၃၀ → Enterprise မိနစ် ၁၅**။ **TAM** က Enterprise On-Ramp (pool) ကစ ပါတယ်၊ **designated** TAM ကတော့ Enterprise မှာပဲ။ **Full Trusted Advisor** က Business ကစတယ်။"
          ) },
          { type: 'list', items: [
            L("**AWS Trusted Advisor** inspects your account and recommends improvements in cost optimization, performance, security, fault tolerance, service limits (quotas) and operational excellence.",
              "**AWS Trusted Advisor** はアカウントを検査し、コスト最適化、パフォーマンス、セキュリティ、耐障害性、サービスの制限（クォータ）、運用上の優秀性について改善を推奨します。",
              "**AWS Trusted Advisor** က account ကို စစ်ပြီး cost optimization၊ performance၊ security၊ fault tolerance၊ service limit (quota)၊ operational excellence အတွက် အကြံပြုတယ်။"),
            L("**AWS Marketplace** is a curated digital catalog to find, buy and deploy third-party software (AMIs, SaaS, containers, data); charges appear on your AWS bill.",
              "**AWS Marketplace** は、サードパーティのソフトウェア（AMI、SaaS、コンテナ、データ）を検索・購入・デプロイできる厳選されたデジタルカタログで、料金は AWS の請求書に計上されます。",
              "**AWS Marketplace** ဆိုတာ third-party software (AMI၊ SaaS၊ container၊ data) ကို ရှာ၊ ဝယ်၊ deploy လုပ်လို့ရတဲ့ digital catalog ဖြစ်ပြီး ကုန်ကျငွေက AWS bill ထဲ ပါလာတယ်။"),
            L("**AWS Partner Network (APN)** connects you with consulting and services partners (to help design and migrate) and technology partners (software and hardware built on AWS).",
              "**AWS Partner Network（APN）**は、設計や移行を支援するコンサルティング／サービスパートナーや、AWS 上のソフトウェア・ハードウェアを提供するテクノロジーパートナーとつなげます。",
              "**AWS Partner Network (APN)** က design နဲ့ migration ကူညီမယ့် consulting/services partner တွေ၊ AWS ပေါ်မှာ software/hardware ဆောက်တဲ့ technology partner တွေနဲ့ ချိတ်ပေးတယ်။"),
            L("**AWS Professional Services** and **AWS re:Post** (community Q&A) are other help options; the **AWS Health Dashboard** shows events that affect your resources.",
              "**AWS Professional Services** や **AWS re:Post**（コミュニティ Q&A）も支援の選択肢です。**AWS Health Dashboard** は自分のリソースに影響するイベントを表示します。",
              "**AWS Professional Services** နဲ့ **AWS re:Post** (community Q&A) ကလည်း အကူအညီ ရနိုင်တဲ့နေရာတွေ၊ **AWS Health Dashboard** က ကိုယ့် resource ကို ထိခိုက်တဲ့ event တွေကို ပြတယ်။"),
          ] },
          { type: 'callout', tone: 'exam', text: L(
            "Typical question: a company needs 24/7 phone support and full Trusted Advisor checks at the lowest cost: **Business**. If it needs a **designated TAM** or **15-minute** response for business-critical systems: **Enterprise**. If it wants TAM guidance and a **30-minute** response but at a lower price: **Enterprise On-Ramp**.",
            "典型的な問題：24 時間 365 日の電話サポートと Trusted Advisor の全チェックが必要で最小コストなら **Business**。**専任 TAM** やビジネスクリティカルなシステムに **15 分**の応答が必要なら **Enterprise**。TAM の支援と **30 分**の応答をより低価格で求めるなら **Enterprise On-Ramp** です。",
            "ပုံမှန်မေးခွန်း- 24/7 ဖုန်း support နဲ့ Trusted Advisor check အပြည့် လိုပြီး ဈေးအသက်သာဆုံးဆို **Business**။ **Designated TAM** (သို့) business-critical system အတွက် **မိနစ် ၁၅** response လိုရင် **Enterprise**။ TAM guidance နဲ့ **မိနစ် ၃၀** response ကို ဈေးသက်သာသက်သာနဲ့ လိုချင်ရင် **Enterprise On-Ramp**။"
          ) },
        ],
      },
    ],
    summary: [
      L("The six advantages: variable expense, economies of scale, stop guessing capacity, speed and agility, no data center upkeep, go global in minutes.",
        "6 つのメリット：変動費化、規模の経済、キャパシティ予測が不要、スピードと俊敏性、データセンター保守が不要、数分でグローバル展開。",
        "အားသာချက် ၆ ခု- variable expense၊ economies of scale၊ capacity ခန့်မှန်းစရာမလို၊ speed နဲ့ agility၊ data center ထိန်းစရာမလို၊ မိနစ်ပိုင်းအတွင်း global။"),
      L("Regions contain at least three AZs; an AZ is one or more data centers. Choose a Region by compliance, latency, service availability and price.",
        "リージョンには最低 3 つの AZ があり、AZ は 1 つ以上のデータセンターです。リージョンはコンプライアンス、遅延、サービス提供状況、価格で選びます。",
        "Region မှာ AZ အနည်းဆုံး ၃ ခုရှိပြီး AZ က data center တစ်ခု (သို့) အများ။ Region ကို compliance၊ latency၊ service ရရှိမှု၊ ဈေး နဲ့ ရွေးပါ။"),
      L("AWS secures the cloud itself; you secure what you put in it, and your data is always your responsibility.",
        "AWS はクラウドそのものを守り、利用者はクラウドに置いたものを守ります。データは常に利用者の責任です。",
        "AWS က cloud ကိုယ်တိုင်ကို ကာကွယ်တယ်၊ ကိုယ်က cloud ထဲထည့်တာကို ကာကွယ်ရတယ်၊ data က အမြဲ ကိုယ့်တာဝန်။"),
      L("Well-Architected has six pillars including Sustainability; CAF has six perspectives for organizational readiness.",
        "Well-Architected には Sustainability を含む 6 つの柱があり、CAF には組織の準備のための 6 つのパースペクティブがあります。",
        "Well-Architected မှာ Sustainability အပါအဝင် pillar ၆ ခု၊ CAF မှာ organizational readiness အတွက် perspective ၆ ခု ရှိတယ်။"),
      L("The 7 Rs: Retire, Retain, Rehost, Relocate, Replatform, Repurchase, Refactor.",
        "移行の 7R：Retire、Retain、Rehost、Relocate、Replatform、Repurchase、Refactor です。",
        "7 Rs- Retire၊ Retain၊ Rehost၊ Relocate၊ Replatform၊ Repurchase၊ Refactor။"),
      L("Spot saves up to 90% but can be interrupted; RIs and Savings Plans save up to 72% for commitment; data IN is free, OUT is charged.",
        "スポットは最大 90% 節約できますが中断される可能性があり、RI と Savings Plans はコミットにより最大 72% 節約できます。データ IN は無料、OUT は有料です。",
        "Spot က 90% အထိ သက်သာပေမဲ့ ရပ်ခံရနိုင်၊ RI နဲ့ Savings Plans က commit လုပ်ရင် 72% အထိ သက်သာ၊ data IN အခမဲ့၊ OUT ကျသင့်။"),
      L("Pricing Calculator estimates, Cost Explorer analyzes and forecasts, Budgets alerts, CUR gives the most detail, consolidated billing combines accounts.",
        "Pricing Calculator は見積もり、Cost Explorer は分析と予測、Budgets はアラート、CUR は最も詳細なデータ、一括請求はアカウントをまとめます。",
        "Pricing Calculator က ခန့်မှန်း၊ Cost Explorer က analyze နဲ့ forecast၊ Budgets က alert၊ CUR က အသေးစိတ်ဆုံး၊ consolidated billing က account တွေကို ပေါင်းတယ်။"),
      L("Support: Business = 1 hour and full Trusted Advisor; On-Ramp = 30 minutes and a TAM pool; Enterprise = 15 minutes and a designated TAM.",
        "Support：Business は 1 時間と Trusted Advisor 全チェック、On-Ramp は 30 分と TAM プール、Enterprise は 15 分と専任 TAM。",
        "Support- Business = ၁ နာရီနဲ့ Trusted Advisor အပြည့်၊ On-Ramp = မိနစ် ၃၀ နဲ့ TAM pool၊ Enterprise = မိနစ် ၁၅ နဲ့ designated TAM။"),
    ],
  },
  questions: [
    {
      difficulty: 'EASY', exams: ['CLF-C02'],
      prompt: L("An online retailer used to buy extra servers every year in case of a traffic spike, and most of them sat idle. Which advantage of cloud computing solves this problem most directly?",
        "あるオンライン小売業者は、アクセス急増に備えて毎年余分なサーバーを購入していましたが、ほとんどが遊休状態でした。この問題を最も直接的に解決するクラウドのメリットはどれですか？",
        "Online retailer တစ်ခုက traffic ရုတ်တရက်တက်မှာစိုးလို့ နှစ်တိုင်း server အပိုဝယ်ခဲ့ပေမဲ့ အများစုက အလကား ထိုင်နေခဲ့တယ်။ ဒီပြဿနာကို အတိုက်ရိုက်ဆုံး ဖြေရှင်းပေးတဲ့ cloud အားသာချက်က ဘယ်ဟာလဲ?"),
      options: ['Benefit from massive economies of scale', 'Stop guessing capacity', 'Go global in minutes', 'Stop spending money on data center maintenance'],
      correct: [1],
      explanation: L("Stop guessing capacity means you scale to actual demand instead of over-provisioning for a guess. Economies of scale lower unit prices, but they do not stop you from buying servers you never use.",
        "キャパシティの予測が不要とは、推測で過剰に用意するのではなく、実際の需要に合わせてスケールできることです。規模の経済は単価を下げますが、使わないサーバーを買うことを防ぐものではありません。",
        "Stop guessing capacity ဆိုတာ ခန့်မှန်းပြီး အများကြီးမထားဘဲ တကယ့် demand အလိုက် scale လုပ်တာပါ။ Economies of scale က ဈေးလျှော့ပေးပေမဲ့ မသုံးမယ့် server ဝယ်တာကို မတားဘူး။"),
    },
    {
      difficulty: 'EASY', exams: ['CLF-C02'],
      prompt: L("Which statement correctly describes an AWS Availability Zone?",
        "AWS のアベイラビリティーゾーンを正しく説明しているものはどれですか？",
        "AWS Availability Zone ကို မှန်ကန်စွာ ဖော်ပြထားတာ ဘယ်ဟာလဲ?"),
      options: ['A global network of sites that cache CloudFront content', 'A separate geographic area such as Tokyo or Frankfurt', 'One or more discrete data centers with redundant power and networking inside a Region', 'A rack of AWS hardware installed in a customer data center'],
      correct: [2],
      explanation: L("An AZ is one or more discrete data centers with redundant power, networking and connectivity within a Region. A geographic area like Tokyo is a Region, cached content sites are edge locations, and on-site racks are AWS Outposts.",
        "AZ はリージョン内にある、冗長な電源・ネットワーク・接続を持つ 1 つ以上の独立したデータセンターです。東京のような地理的エリアはリージョン、キャッシュ拠点はエッジロケーション、顧客拠点のラックは AWS Outposts です。",
        "AZ ဆိုတာ Region ထဲက redundant power၊ network၊ connectivity ပါတဲ့ သီးခြား data center တစ်ခု (သို့) အများပါ။ Tokyo လို ဒေသက Region၊ cache site တွေက edge location၊ customer ဆီက rack က AWS Outposts ပါ။"),
    },
    {
      difficulty: 'EASY', exams: ['CLF-C02'],
      prompt: L("According to the AWS shared responsibility model, which task is the responsibility of AWS?",
        "AWS の責任共有モデルによると、AWS の責任となるタスクはどれですか？",
        "AWS shared responsibility model အရ AWS ရဲ့ တာဝန်ဖြစ်တဲ့ task က ဘယ်ဟာလဲ?"),
      options: ['Physical security of the data centers', 'Configuring security group rules for EC2 instances', 'Encrypting data stored in an S3 bucket', 'Creating IAM users and assigning permissions'],
      correct: [0],
      explanation: L("AWS is responsible for security OF the cloud, including physical data center security. Security groups, encryption choices and IAM are configured by the customer, so they are security IN the cloud.",
        "AWS はクラウド「の」セキュリティに責任を持ち、物理的なデータセンターのセキュリティも含まれます。セキュリティグループ、暗号化の選択、IAM は利用者が設定するクラウド「内」のセキュリティです。",
        "AWS က cloud 「ရဲ့」 security ကို တာဝန်ယူပြီး physical data center security ပါဝင်တယ်။ Security group၊ encryption ရွေးချယ်မှု၊ IAM က customer သတ်မှတ်ရတဲ့ cloud 「ထဲက」 security ပါ။"),
    },
    {
      difficulty: 'EASY', exams: ['CLF-C02'],
      prompt: L("A solutions architect wants to give a customer an estimate of the monthly cost of a new architecture before anything is deployed. Which tool should be used?",
        "ソリューションアーキテクトが、何もデプロイする前に新しいアーキテクチャの月額費用の見積もりを顧客に提示したいと考えています。どのツールを使うべきですか？",
        "Solutions architect တစ်ယောက်က ဘာမှ deploy မလုပ်ခင် architecture အသစ်ရဲ့ လစဉ် cost ခန့်မှန်းချက်ကို customer ကို ပေးချင်တယ်။ ဘယ် tool သုံးသင့်လဲ?"),
      options: ['AWS Cost Explorer', 'AWS Budgets', 'AWS Cost and Usage Report', 'AWS Pricing Calculator'],
      correct: [3],
      explanation: L("AWS Pricing Calculator estimates costs for services you have not deployed yet and lets you share the estimate. Cost Explorer only analyzes and forecasts spend from usage that already exists in the account.",
        "AWS Pricing Calculator は未デプロイのサービスのコストを見積もり、共有できます。Cost Explorer はアカウントに既に存在する使用量をもとに分析・予測するだけです。",
        "AWS Pricing Calculator က မ deploy ရသေးတဲ့ service တွေရဲ့ cost ကို ခန့်မှန်းပြီး share လုပ်ခွင့်ပေးတယ်။ Cost Explorer က account ထဲမှာ ရှိပြီးသား usage ကိုပဲ analyze/forecast လုပ်တယ်။"),
    },
    {
      difficulty: 'EASY', exams: ['CLF-C02'],
      prompt: L("Which AWS service uses edge locations to deliver content to users with low latency?",
        "エッジロケーションを使ってユーザーに低遅延でコンテンツを配信する AWS サービスはどれですか？",
        "Edge location တွေကိုသုံးပြီး user တွေဆီ latency နည်းနည်းနဲ့ content ပို့ပေးတဲ့ AWS service က ဘယ်ဟာလဲ?"),
      options: ['Amazon EC2', 'Amazon CloudFront', 'AWS Outposts', 'Amazon RDS'],
      correct: [1],
      explanation: L("Amazon CloudFront is the CDN that caches content at edge locations close to viewers. EC2 and RDS run inside Regions and AZs, not at edge locations; Outposts runs in your own data center.",
        "Amazon CloudFront は視聴者に近いエッジロケーションでコンテンツをキャッシュする CDN です。EC2 と RDS はエッジではなくリージョンと AZ で動き、Outposts は自社データセンターで動きます。",
        "Amazon CloudFront က viewer နားက edge location မှာ content ကို cache လုပ်တဲ့ CDN ပါ။ EC2 နဲ့ RDS က edge မှာမဟုတ်ဘဲ Region နဲ့ AZ ထဲမှာ run တယ်၊ Outposts က ကိုယ့် data center ထဲမှာ run တယ်။"),
    },
    {
      difficulty: 'EASY', exams: ['CLF-C02'],
      prompt: L("A company wants to buy a third-party firewall appliance as an AMI and have the charges appear on its AWS bill. Where should it look?",
        "ある企業が、サードパーティのファイアウォールアプライアンスを AMI として購入し、料金を AWS の請求書に計上したいと考えています。どこを探すべきですか？",
        "Company တစ်ခုက third-party firewall appliance ကို AMI အဖြစ် ဝယ်ပြီး ကုန်ကျငွေကို AWS bill ထဲ ပါစေချင်တယ်။ ဘယ်မှာ ရှာသင့်လဲ?"),
      options: ['AWS Marketplace', 'AWS Partner Network', 'AWS Artifact', 'AWS Trusted Advisor'],
      correct: [0],
      explanation: L("AWS Marketplace is the digital catalog of third-party software, including AMIs and SaaS, billed through your AWS account. The AWS Partner Network is a program of partner companies, not a store where you deploy software.",
        "AWS Marketplace は AMI や SaaS を含むサードパーティソフトウェアのデジタルカタログで、AWS アカウント経由で請求されます。AWS Partner Network はパートナー企業のプログラムであり、ソフトウェアをデプロイするストアではありません。",
        "AWS Marketplace က AMI နဲ့ SaaS အပါအဝင် third-party software catalog ဖြစ်ပြီး AWS account ကနေ ငွေတောင်းတယ်။ AWS Partner Network က partner ကုမ္ပဏီတွေရဲ့ program ဖြစ်ပြီး software deploy လုပ်တဲ့ စတိုးဆိုင် မဟုတ်ဘူး။"),
    },
    {
      difficulty: 'EASY', exams: ['CLF-C02'],
      prompt: L("A research team runs image-processing batch jobs that can be stopped and restarted at any time without problems. Which EC2 purchase option is the most cost-effective?",
        "ある研究チームは、いつ停止・再開しても問題のない画像処理バッチジョブを実行しています。最もコスト効率の高い EC2 の購入オプションはどれですか？",
        "Research team တစ်ခုက ဘယ်အချိန်ရပ်ရပ်၊ ပြန်စစ ပြဿနာမရှိတဲ့ image-processing batch job တွေ run တယ်။ ကုန်ကျစရိတ် အသက်သာဆုံး EC2 purchase option က ဘယ်ဟာလဲ?"),
      options: ['On-Demand Instances', 'Dedicated Hosts', 'Spot Instances', 'Standard Reserved Instances'],
      correct: [2],
      explanation: L("Spot Instances use spare capacity at up to 90% off and suit interruptible, fault-tolerant jobs. Reserved Instances require a 1- or 3-year commitment and fit steady workloads, not flexible batch jobs.",
        "スポットインスタンスは余剰容量を最大 90% 割引で使え、中断可能で耐障害性のあるジョブに適しています。リザーブドインスタンスは 1 年または 3 年のコミットが必要で、柔軟なバッチではなく定常的なワークロード向けです。",
        "Spot Instances က AWS ရဲ့ အပို capacity ကို 90% အထိ လျှော့ဈေးနဲ့ သုံးတာဖြစ်ပြီး ရပ်လို့ရတဲ့ fault-tolerant job တွေနဲ့ သင့်တယ်။ Reserved Instances က ၁ နှစ်/၃ နှစ် commit လိုပြီး အမြဲ run တဲ့ workload အတွက်ပါ။"),
    },
    {
      difficulty: 'MEDIUM', exams: ['CLF-C02'],
      prompt: L("A Japanese fintech company is deciding which AWS Region to use for a new customer database. Which factors should drive the decision? (Select TWO)",
        "日本のフィンテック企業が新しい顧客データベースに使う AWS リージョンを検討しています。判断の根拠とすべき要素はどれですか？（2 つ選択）",
        "ဂျပန် fintech ကုမ္ပဏီတစ်ခုက customer database အသစ်အတွက် ဘယ် AWS Region သုံးမလဲ ဆုံးဖြတ်နေတယ်။ ဘယ်အချက်တွေက ဆုံးဖြတ်ချက်ကို ဦးဆောင်သင့်လဲ? (Select TWO)"),
      options: ['Data residency and compliance requirements', 'The number of edge locations in the country', 'Proximity of the Region to the company\'s customers', 'Whether IAM users can be created in that Region', 'The color of the AWS console theme in that Region'],
      correct: [0, 2],
      explanation: L("Region selection is driven by compliance and data governance, latency to customers, service availability and price. Edge locations serve CloudFront and Route 53, not databases, and IAM is a global service, so neither affects the choice.",
        "リージョン選択はコンプライアンスとデータガバナンス、顧客への遅延、サービス提供状況、価格で決まります。エッジロケーションは CloudFront や Route 53 用でデータベースとは無関係であり、IAM はグローバルサービスなので、どちらも判断材料になりません。",
        "Region ရွေးချယ်မှုကို compliance နဲ့ data governance၊ customer ဆီ latency၊ service ရရှိမှု၊ ဈေးက ဆုံးဖြတ်တယ်။ Edge location က CloudFront နဲ့ Route 53 အတွက်ဖြစ်ပြီး database နဲ့ မဆိုင်ဘူး၊ IAM က global service ဖြစ်လို့ နှစ်ခုလုံး ရွေးချယ်မှုကို မထိခိုက်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM', exams: ['CLF-C02'],
      prompt: L("A company runs production workloads on AWS and needs 24/7 phone access to Cloud Support Engineers, a response within 1 hour when production is down, and all Trusted Advisor checks. Which is the most cost-effective Support plan?",
        "ある企業は AWS で本番ワークロードを運用しており、Cloud Support Engineer への 24 時間 365 日の電話アクセス、本番停止時の 1 時間以内の応答、Trusted Advisor の全チェックが必要です。最もコスト効率の高い Support プランはどれですか？",
        "Company တစ်ခုက AWS ပေါ်မှာ production workload run ပြီး Cloud Support Engineer ဆီ 24/7 ဖုန်းဆက်ခွင့်၊ production down ရင် ၁ နာရီအတွင်း response၊ Trusted Advisor check အားလုံး လိုတယ်။ ကုန်ကျစရိတ် အသက်သာဆုံး Support plan က ဘယ်ဟာလဲ?"),
      options: ['Basic', 'Developer', 'Enterprise', 'Business'],
      correct: [3],
      explanation: L("Business Support is the lowest tier with 24/7 phone, chat and email, a 1-hour production-down response and the full set of Trusted Advisor checks. Enterprise also meets the needs but costs more; Developer offers only business-hours email.",
        "Business Support は、24 時間 365 日の電話・チャット・メール、本番停止時 1 時間の応答、Trusted Advisor の全チェックを備えた最も低いプランです。Enterprise も要件を満たしますが高価で、Developer は営業時間内のメールのみです。",
        "Business Support က 24/7 ဖုန်း၊ chat၊ email၊ production down အတွက် ၁ နာရီ response၊ Trusted Advisor check အပြည့် ပါတဲ့ အနိမ့်ဆုံး plan ပါ။ Enterprise လည်း ဖြည့်နိုင်ပေမဲ့ ဈေးပိုကြီးတယ်၊ Developer က အလုပ်ချိန် email ပဲ ရတယ်။"),
    },
    {
      difficulty: 'MEDIUM', exams: ['CLF-C02'],
      prompt: L("Which pillar of the AWS Well-Architected Framework focuses on a workload\'s ability to recover from failures and to acquire resources to meet demand?",
        "AWS Well-Architected フレームワークのうち、障害から回復し、需要に応じてリソースを確保するワークロードの能力に焦点を当てる柱はどれですか？",
        "AWS Well-Architected Framework ထဲမှာ workload က failure ကနေ ပြန်ကောင်းနိုင်စွမ်းနဲ့ demand အလိုက် resource ရယူနိုင်စွမ်းကို အဓိကထားတဲ့ pillar က ဘယ်ဟာလဲ?"),
      options: ['Reliability', 'Performance Efficiency', 'Operational Excellence', 'Sustainability'],
      correct: [0],
      explanation: L("Reliability covers recovering from infrastructure or service failures, Multi-AZ design and meeting demand. Performance Efficiency is about using the right resource types efficiently, not about recovery.",
        "信頼性はインフラやサービスの障害からの回復、マルチ AZ 設計、需要への対応を扱います。パフォーマンス効率は適切なリソースタイプを効率よく使うことで、回復とは異なります。",
        "Reliability က infrastructure/service failure ကနေ ပြန်ကောင်းခြင်း၊ Multi-AZ design၊ demand ဖြည့်ခြင်းကို ဖုံးတယ်။ Performance Efficiency က resource type မှန်မှန် ထိရောက်စွာ သုံးတာဖြစ်ပြီး recovery နဲ့ မဆိုင်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM', exams: ['CLF-C02'],
      prompt: L("A company plans to move data transfer-heavy workloads to AWS. Which types of data transfer are typically free of charge? (Select TWO)",
        "ある企業がデータ転送の多いワークロードを AWS に移行する予定です。通常無料となるデータ転送はどれですか？（2 つ選択）",
        "Company တစ်ခုက data transfer များတဲ့ workload တွေကို AWS ဆီ ရွှေ့မယ်။ ပုံမှန်အားဖြင့် အခမဲ့ဖြစ်တဲ့ data transfer အမျိုးအစားတွေက ဘယ်ဟာတွေလဲ? (Select TWO)"),
      options: ['Data transferred out from EC2 to the internet', 'Data transferred in from the internet to EC2', 'Data replicated between two AWS Regions', 'Data transferred between EC2 and Amazon S3 in the same Region'],
      correct: [1, 3],
      explanation: L("Inbound data transfer from the internet is free, and transfer between EC2 and S3 within the same Region is free. Data out to the internet and cross-Region replication are charged per GB.",
        "インターネットからのインバウンド転送は無料で、同一リージョン内の EC2 と S3 間の転送も無料です。インターネットへのアウトバウンドやリージョン間レプリケーションは GB 単位で課金されます。",
        "Internet ကနေ ဝင်လာတဲ့ data နဲ့ Region တစ်ခုတည်းထဲ EC2 နဲ့ S3 ကြား transfer က အခမဲ့ပါ။ Internet ဆီ ထွက်တဲ့ data နဲ့ Region ကြား replication ကတော့ GB အလိုက် ကျသင့်တယ်။"),
    },
    {
      difficulty: 'MEDIUM', exams: ['CLF-C02'],
      prompt: L("A company is moving its self-managed MySQL database from on-premises servers to Amazon RDS for MySQL without changing application code. Which migration strategy is this?",
        "ある企業が、アプリケーションのコードを変更せずに、オンプレミスで自己管理している MySQL を Amazon RDS for MySQL に移行します。これはどの移行戦略ですか？",
        "Company တစ်ခုက on-premises မှာ ကိုယ်တိုင်စီမံတဲ့ MySQL database ကို application code မပြောင်းဘဲ Amazon RDS for MySQL ဆီ ရွှေ့နေတယ်။ ဒါက ဘယ် migration strategy လဲ?"),
      options: ['Rehost', 'Replatform', 'Refactor', 'Repurchase'],
      correct: [1],
      explanation: L("Replatform (lift, tinker and shift) makes a cloud optimization such as moving to a managed database without changing core code. Rehost would mean installing MySQL on EC2 exactly as before.",
        "Replatform（リフト・ティンカー・シフト）は、コアのコードを変えずにマネージド DB への移行のようなクラウド最適化を行います。Rehost なら以前と同じように EC2 に MySQL をインストールすることになります。",
        "Replatform (lift, tinker and shift) က core code မပြောင်းဘဲ managed database ဆီ ရွှေ့တာလို cloud optimization လုပ်တာပါ။ Rehost ဆိုရင် EC2 ပေါ်မှာ MySQL ကို အရင်အတိုင်း တင်တာ ဖြစ်မယ်။"),
    },
    {
      difficulty: 'MEDIUM', exams: ['CLF-C02'],
      prompt: L("A startup wants to receive an email when its forecasted AWS spend for the month is expected to exceed 500 USD. Which service should it use?",
        "あるスタートアップは、当月の AWS 支出の予測が 500 USD を超えそうなときにメールを受け取りたいと考えています。どのサービスを使うべきですか？",
        "Startup တစ်ခုက ဒီလ AWS ကုန်ကျမှု forecast က 500 USD ကျော်မယ်လို့ ခန့်မှန်းရရင် email ရချင်တယ်။ ဘယ် service သုံးသင့်လဲ?"),
      options: ['AWS Cost Explorer', 'AWS Pricing Calculator', 'AWS Budgets', 'AWS Trusted Advisor'],
      correct: [2],
      explanation: L("AWS Budgets sends alerts when actual or forecasted cost crosses a threshold. Cost Explorer can show a forecast in charts, but it does not send threshold notifications.",
        "AWS Budgets は、実績または予測コストがしきい値を超えたときにアラートを送ります。Cost Explorer はグラフで予測を表示できますが、しきい値の通知は送りません。",
        "AWS Budgets က actual (သို့) forecast cost က threshold ကျော်ရင် alert ပို့တယ်။ Cost Explorer က forecast ကို chart နဲ့ ပြနိုင်ပေမဲ့ threshold notification မပို့ဘူး။"),
    },
    {
      difficulty: 'MEDIUM', exams: ['CLF-C02'],
      prompt: L("A company has 15 AWS accounts and wants to manage them centrally. What are benefits of AWS Organizations consolidated billing? (Select TWO)",
        "ある企業は 15 個の AWS アカウントを持ち、一元管理したいと考えています。AWS Organizations の一括請求のメリットはどれですか？（2 つ選択）",
        "Company တစ်ခုမှာ AWS account ၁၅ ခုရှိပြီး ဗဟိုကနေ စီမံချင်တယ်။ AWS Organizations consolidated billing ရဲ့ အကျိုးကျေးဇူးတွေက ဘယ်ဟာတွေလဲ? (Select TWO)"),
      options: ['Free Enterprise Support for every member account', 'A single bill for all accounts', 'Automatic purchase of Reserved Instances', 'Combined usage that can reach volume pricing tiers sooner'],
      correct: [1, 3],
      explanation: L("Consolidated billing gives one bill and aggregates usage across accounts for volume discounts, at no extra charge. It does not include any Support plan, and it never buys Reserved Instances on your behalf.",
        "一括請求では請求書が 1 つになり、アカウント全体の使用量が合算されてボリューム割引が適用されます（追加料金なし）。Support プランは含まれず、リザーブドインスタンスを自動購入することもありません。",
        "Consolidated billing က bill တစ်စောင်တည်း ပေးပြီး account အားလုံးရဲ့ usage ကို ပေါင်းလို့ volume discount ရတယ် (ပိုက်ဆံထပ်မပေးရ)။ Support plan မပါဘူး၊ Reserved Instances ကိုလည်း ကိုယ့်ကိုယ်စား အလိုအလျောက် မဝယ်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM', exams: ['CLF-C02'],
      prompt: L("A mobile game studio needs single-digit millisecond latency between its game servers and players\' smartphones connected to a carrier 5G network. Which AWS infrastructure should it use?",
        "モバイルゲームスタジオは、通信事業者の 5G ネットワークに接続したプレイヤーのスマートフォンとゲームサーバー間で 1 桁ミリ秒の遅延を必要としています。どの AWS インフラを使うべきですか？",
        "Mobile game studio တစ်ခုက carrier 5G network ချိတ်ထားတဲ့ player ရဲ့ smartphone နဲ့ game server ကြား single-digit millisecond latency လိုတယ်။ ဘယ် AWS infrastructure သုံးသင့်လဲ?"),
      options: ['AWS Outposts', 'Amazon CloudFront edge locations', 'An additional Availability Zone', 'AWS Wavelength Zones'],
      correct: [3],
      explanation: L("Wavelength Zones embed AWS compute inside telecom 5G networks so traffic does not leave the carrier network. Local Zones and edge locations are close to users but are not inside the 5G network, and CloudFront caches content rather than running game servers.",
        "Wavelength Zones は通信事業者の 5G ネットワーク内に AWS のコンピューティングを配置し、トラフィックが通信網の外に出ません。Local Zones やエッジロケーションはユーザーに近いものの 5G 網の内部ではなく、CloudFront はゲームサーバーを動かすのではなくコンテンツをキャッシュします。",
        "Wavelength Zones က telecom 5G network ထဲမှာ AWS compute ကို ထည့်ထားလို့ traffic က carrier network အပြင် မထွက်ဘူး။ Local Zone နဲ့ edge location က user နားမှာရှိပေမဲ့ 5G network ထဲမှာ မဟုတ်ဘူး၊ CloudFront က game server run တာမဟုတ်ဘဲ content cache လုပ်တာပါ။"),
    },
    {
      difficulty: 'HARD', exams: ['CLF-C02'],
      prompt: L("A company uses Amazon RDS for PostgreSQL. Under the shared responsibility model, which tasks remain the customer\'s responsibility? (Select THREE)",
        "ある企業は Amazon RDS for PostgreSQL を使っています。責任共有モデルにおいて、利用者の責任として残るタスクはどれですか？（3 つ選択）",
        "Company တစ်ခုက Amazon RDS for PostgreSQL သုံးတယ်။ Shared responsibility model အရ customer တာဝန်အဖြစ် ကျန်နေတဲ့ task တွေက ဘယ်ဟာတွေလဲ? (Select THREE)"),
      options: ['Patching the operating system of the database host', 'Configuring security groups that control access to the DB instance', 'Managing database users and their privileges', 'Replacing failed physical storage drives', 'Deciding whether to enable encryption at rest'],
      correct: [1, 2, 4],
      explanation: L("With RDS, AWS manages the host OS, engine patching and physical hardware, but you still control network access (security groups), database users and privileges, and whether data is encrypted. Host OS patching is AWS\'s job because RDS is a managed service.",
        "RDS では AWS がホスト OS、エンジンのパッチ、物理ハードウェアを管理しますが、ネットワークアクセス（セキュリティグループ）、DB ユーザーと権限、データを暗号化するかどうかは利用者が管理します。RDS はマネージドサービスなので、ホスト OS のパッチは AWS の担当です。",
        "RDS မှာ host OS၊ engine patching၊ physical hardware ကို AWS စီမံပေမဲ့ network access (security group)၊ database user နဲ့ privilege၊ data ကို encrypt လုပ်မလုပ် ဆိုတာကို ကိုယ်ထိန်းရတယ်။ RDS က managed service ဖြစ်လို့ host OS patching က AWS ရဲ့ အလုပ်ပါ။"),
    },
    {
      difficulty: 'HARD', exams: ['CLF-C02'],
      prompt: L("A company has steady compute usage 24/7 for the next three years. It expects to move some workloads from EC2 to AWS Fargate and AWS Lambda and may change instance families and Regions. Which pricing option gives a large discount with the most flexibility?",
        "ある企業は今後 3 年間、24 時間 365 日の安定したコンピューティング使用を見込んでいます。一部のワークロードを EC2 から AWS Fargate や AWS Lambda に移す予定で、インスタンスファミリーやリージョンも変更する可能性があります。大幅な割引と最大の柔軟性を両立する料金オプションはどれですか？",
        "Company တစ်ခုမှာ နောက် ၃ နှစ်အတွက် 24/7 တည်ငြိမ်တဲ့ compute usage ရှိတယ်။ Workload တချို့ကို EC2 ကနေ AWS Fargate နဲ့ AWS Lambda ဆီ ရွှေ့မယ်၊ instance family နဲ့ Region လည်း ပြောင်းနိုင်တယ်။ Discount ကြီးကြီးနဲ့ flexibility အများဆုံး ပေးတဲ့ pricing option က ဘယ်ဟာလဲ?"),
      options: ['Compute Savings Plans', 'Standard Reserved Instances', 'EC2 Instance Savings Plans', 'Spot Instances'],
      correct: [0],
      explanation: L("Compute Savings Plans apply across instance families, sizes, Regions, and also to Fargate and Lambda. EC2 Instance Savings Plans and Standard RIs give deep discounts but are tied to an instance family in a Region and do not cover Lambda.",
        "Compute Savings Plans はインスタンスファミリー、サイズ、リージョンをまたいで適用され、Fargate と Lambda にも適用されます。EC2 Instance Savings Plans や Standard RI は割引が大きいものの、リージョン内の特定ファミリーに縛られ、Lambda は対象外です。",
        "Compute Savings Plans က instance family၊ size၊ Region မရွေး သက်ရောက်ပြီး Fargate နဲ့ Lambda ကိုပါ ဖုံးတယ်။ EC2 Instance Savings Plans နဲ့ Standard RI က discount ကြီးပေမဲ့ Region တစ်ခုထဲက instance family တစ်ခုနဲ့ ချည်ထားပြီး Lambda ကို မဖုံးဘူး။"),
    },
    {
      difficulty: 'HARD', exams: ['CLF-C02'],
      prompt: L("The finance team needs the most granular hourly, line-item billing data for every resource, including tags, and wants to query it with SQL in Amazon Athena. Which option meets this requirement?",
        "財務チームは、タグを含むすべてのリソースについて最も詳細な時間単位の明細請求データが必要で、Amazon Athena の SQL でクエリしたいと考えています。この要件を満たすものはどれですか？",
        "Finance team က resource တိုင်းအတွက် tag ပါဝင်တဲ့ အသေးစိတ်ဆုံး နာရီအလိုက် line-item billing data လိုပြီး Amazon Athena မှာ SQL နဲ့ query လုပ်ချင်တယ်။ ဒီ requirement ကို ဘယ်ဟာက ဖြည့်ပေးလဲ?"),
      options: ['AWS Cost Explorer reports', 'AWS Cost and Usage Report delivered to Amazon S3', 'AWS Budgets reports', 'The monthly invoice PDF in the Billing console'],
      correct: [1],
      explanation: L("The Cost and Usage Report (now created through Data Exports) is the most detailed billing dataset and is delivered to S3, where Athena can query it. Cost Explorer offers charts and summaries, but not raw line items for SQL queries.",
        "Cost and Usage Report（現在は Data Exports で作成）は最も詳細な請求データセットで、S3 に出力され Athena でクエリできます。Cost Explorer はグラフや集計を提供しますが、SQL クエリ用の生の明細は提供しません。",
        "Cost and Usage Report (အခု Data Exports နဲ့ ဆောက်) က အသေးစိတ်ဆုံး billing dataset ဖြစ်ပြီး S3 ထဲ ပို့လို့ Athena နဲ့ query လုပ်နိုင်တယ်။ Cost Explorer က chart နဲ့ summary ပေးပေမဲ့ SQL query အတွက် raw line item မပေးဘူး။"),
    },
    {
      difficulty: 'HARD', exams: ['CLF-C02'],
      prompt: L("A mid-sized company wants proactive guidance from Technical Account Managers and a response within 30 minutes for business-critical system outages, at the lowest possible cost. Which Support plan should it choose?",
        "中規模企業が、TAM によるプロアクティブなガイダンスと、ビジネスクリティカルなシステム停止に対する 30 分以内の応答を、できるだけ低コストで求めています。どの Support プランを選ぶべきですか？",
        "အလတ်စား ကုမ္ပဏီတစ်ခုက Technical Account Manager တွေဆီက proactive guidance နဲ့ business-critical system ကျရင် မိနစ် ၃၀ အတွင်း response ကို ဈေးအသက်သာဆုံးနဲ့ လိုချင်တယ်။ ဘယ် Support plan ရွေးသင့်လဲ?"),
      options: ['Business', 'Enterprise', 'Enterprise On-Ramp', 'Developer'],
      correct: [2],
      explanation: L("Enterprise On-Ramp provides a pool of TAMs and a 30-minute response for business-critical outages. Enterprise adds a designated TAM and 15-minute response but costs more; Business has no TAM at all.",
        "Enterprise On-Ramp は TAM のプールと、ビジネスクリティカルな停止に対する 30 分の応答を提供します。Enterprise は専任 TAM と 15 分の応答が加わりますが高価で、Business には TAM が付きません。",
        "Enterprise On-Ramp က TAM pool နဲ့ business-critical outage အတွက် မိနစ် ၃၀ response ပေးတယ်။ Enterprise က designated TAM နဲ့ မိနစ် ၁၅ response ထပ်ပေးပေမဲ့ ဈေးပိုကြီးတယ်၊ Business မှာ TAM လုံးဝ မပါဘူး။"),
    },
    {
      difficulty: 'HARD', exams: ['CLF-C02'],
      prompt: L("Which perspectives of the AWS Cloud Adoption Framework (AWS CAF) focus on technical capabilities? (Select THREE)",
        "AWS クラウド導入フレームワーク（AWS CAF）のうち、技術面の能力に焦点を当てるパースペクティブはどれですか？（3 つ選択）",
        "AWS Cloud Adoption Framework (AWS CAF) ထဲက technical capability ကို အဓိကထားတဲ့ perspective တွေက ဘယ်ဟာတွေလဲ? (Select THREE)"),
      options: ['Business', 'Platform', 'People', 'Security', 'Governance', 'Operations'],
      correct: [1, 3, 5],
      explanation: L("Platform, Security and Operations are the technical perspectives of AWS CAF. Business, People and Governance focus on business capabilities such as strategy, culture and training, and risk management.",
        "Platform、Security、Operations が AWS CAF の技術面のパースペクティブです。Business、People、Governance は戦略、文化と教育、リスク管理などビジネス面の能力に焦点を当てます。",
        "Platform၊ Security၊ Operations က AWS CAF ရဲ့ technical perspective တွေပါ။ Business၊ People၊ Governance ကတော့ strategy၊ culture နဲ့ training၊ risk management လို business capability ကို အဓိကထားတယ်။"),
    },
  ],
  flashcards: [
    { term: 'Availability Zone (AZ)',
      definition: L("One or more discrete data centers with redundant power, networking and connectivity inside a Region; every Region has at least three.", "リージョン内にある、冗長な電源・ネットワーク・接続を持つ 1 つ以上の独立したデータセンターです。各リージョンに最低 3 つあります。", "Region ထဲက redundant power၊ network၊ connectivity ပါတဲ့ သီးခြား data center တစ်ခု (သို့) အများ၊ Region တိုင်းမှာ အနည်းဆုံး ၃ ခု ရှိတယ်။"),
      example: L("An Auto Scaling group spread across `ap-northeast-1a`, `1c` and `1d` survives the loss of one AZ.", "`ap-northeast-1a`、`1c`、`1d` に分散した Auto Scaling グループは、1 つの AZ が失われても稼働し続けます。", "`ap-northeast-1a`၊ `1c`၊ `1d` မှာ ဖြန့်ထားတဲ့ Auto Scaling group က AZ တစ်ခု ပျက်ရင်တောင် ဆက် run တယ်။") },
    { term: 'Edge location',
      definition: L("A site close to end users that CloudFront, Route 53 and Global Accelerator use to cache content and answer requests with low latency.", "CloudFront、Route 53、Global Accelerator がコンテンツのキャッシュや低遅延の応答に使う、エンドユーザーに近い拠点です。", "End user နားက site ဖြစ်ပြီး CloudFront၊ Route 53၊ Global Accelerator က content cache လုပ်ဖို့နဲ့ latency နည်းနည်းနဲ့ ဖြေဖို့ သုံးတယ်။"),
      example: L("A video stored in an S3 bucket in Virginia is served to Tokyo viewers from a Tokyo edge location.", "バージニアの S3 バケットにある動画が、東京のエッジロケーションから東京の視聴者に配信されます。", "Virginia က S3 bucket ထဲက video ကို Tokyo edge location ကနေ Tokyo viewer တွေဆီ ပို့ပေးတယ်။") },
    { term: 'Shared responsibility model',
      definition: L("AWS secures the cloud (hardware, facilities, global network); the customer secures what is in the cloud (data, IAM, configuration).", "AWS はクラウド（ハードウェア、施設、グローバルネットワーク）を守り、利用者はクラウド内のもの（データ、IAM、設定）を守ります。", "AWS က cloud (hardware၊ facility၊ global network) ကို ကာကွယ်ပြီး customer က cloud ထဲက အရာ (data၊ IAM၊ configuration) ကို ကာကွယ်တယ်။"),
      example: L("On EC2 you patch the guest OS; on Lambda AWS patches the runtime, but you still own the function code and its IAM role.", "EC2 ではゲスト OS のパッチを利用者が適用し、Lambda ではランタイムのパッチを AWS が適用しますが、関数コードと IAM ロールは利用者の責任です。", "EC2 မှာ guest OS ကို ကိုယ် patch လုပ်ရတယ်၊ Lambda မှာ runtime ကို AWS patch လုပ်ပေမဲ့ function code နဲ့ IAM role က ကိုယ့်တာဝန်ပဲ။") },
    { term: 'AWS Well-Architected Framework',
      definition: L("Best practices organized into six pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization and Sustainability.", "6 つの柱（運用上の優秀性、セキュリティ、信頼性、パフォーマンス効率、コスト最適化、持続可能性）にまとめられたベストプラクティスです。", "Operational Excellence၊ Security၊ Reliability၊ Performance Efficiency၊ Cost Optimization၊ Sustainability ဆိုတဲ့ pillar ၆ ခုနဲ့ စီထားတဲ့ best practice တွေပါ။"),
      example: L("A team runs a review in the Well-Architected Tool and finds its database is single-AZ, a Reliability risk.", "チームが Well-Architected Tool でレビューを行い、データベースがシングル AZ で信頼性のリスクがあると気づきます。", "Team က Well-Architected Tool မှာ review လုပ်ပြီး database က single-AZ ဖြစ်နေလို့ Reliability risk ရှိတာ တွေ့တယ်။") },
    { term: 'AWS Cloud Adoption Framework (CAF)',
      definition: L("Guidance for organizational cloud readiness, grouped into six perspectives: Business, People, Governance, Platform, Security and Operations.", "組織のクラウド導入準備のためのガイダンスで、Business、People、Governance、Platform、Security、Operations の 6 つのパースペクティブに分かれています。", "Organization တစ်ခုလုံး cloud အတွက် အဆင်သင့်ဖြစ်ဖို့ guidance ဖြစ်ပြီး Business၊ People၊ Governance၊ Platform၊ Security၊ Operations perspective ၆ ခု ခွဲထားတယ်။"),
      example: L("Planning cloud training for 200 engineers falls under the People perspective.", "200 人のエンジニア向けクラウド研修の計画は People パースペクティブに該当します。", "Engineer ၂၀၀ အတွက် cloud training စီစဉ်တာက People perspective အောက်မှာ ကျတယ်။") },
    { term: 'Replatform',
      definition: L("A migration strategy that makes a few cloud optimizations without changing the core architecture (lift, tinker and shift).", "コアのアーキテクチャを変えずに、いくつかのクラウド最適化を行う移行戦略です（リフト・ティンカー・シフト）。", "Core architecture မပြောင်းဘဲ cloud optimization အနည်းငယ် လုပ်တဲ့ migration strategy (lift, tinker and shift) ပါ။"),
      example: L("Moving an on-prem Oracle database to Amazon RDS for Oracle while the app code stays the same.", "アプリのコードはそのままで、オンプレミスの Oracle を Amazon RDS for Oracle に移す。", "App code ဒီအတိုင်းထားပြီး on-prem Oracle database ကို Amazon RDS for Oracle ဆီ ရွှေ့တာ။") },
    { term: 'Savings Plans',
      definition: L("A pricing model where you commit to a consistent amount of compute spend ($/hour) for 1 or 3 years in exchange for discounts of up to 72%.", "1 年または 3 年間、一定額のコンピューティング支出（1 時間あたりの金額）をコミットする代わりに、最大 72% の割引を受けられる料金モデルです。", "၁ နှစ် (သို့) ၃ နှစ်အတွက် တစ်နာရီ compute spend ($/hour) ပမာဏကို commit လုပ်ပြီး 72% အထိ discount ရတဲ့ pricing model ပါ။"),
      example: L("A Compute Savings Plan keeps its discount even after you move a workload from EC2 to Fargate.", "Compute Savings Plan は、ワークロードを EC2 から Fargate に移しても割引が継続します。", "Workload ကို EC2 ကနေ Fargate ဆီ ရွှေ့ရင်တောင် Compute Savings Plan ရဲ့ discount ဆက်ရတယ်။") },
    { term: 'Spot Instances',
      definition: L("Spare EC2 capacity offered at up to 90% off On-Demand; AWS can reclaim it with a two-minute warning.", "オンデマンド比で最大 90% 割引で提供される EC2 の余剰容量で、AWS は 2 分前の通知で回収できます。", "On-Demand ထက် 90% အထိ လျှော့ဈေးနဲ့ ပေးတဲ့ EC2 အပို capacity ဖြစ်ပြီး AWS က ၂ မိနစ် ကြိုသတိပေးပြီး ပြန်ယူနိုင်တယ်။"),
      example: L("Rendering thousands of video frames with a queue, where an interrupted frame is simply retried.", "キューを使って数千の動画フレームをレンダリングし、中断されたフレームは再試行するだけで済む。", "Queue နဲ့ video frame ထောင်ချီကို render လုပ်ပြီး ရပ်သွားတဲ့ frame ကို ပြန်လုပ်ရုံပဲ။") },
    { term: 'AWS Budgets',
      definition: L("A service that tracks cost, usage, RI or Savings Plans against a limit and sends alerts (or runs actions) when actual or forecasted values exceed it.", "コスト、使用量、RI、Savings Plans を上限と比較して追跡し、実績または予測値が超えたときにアラートを送信（またはアクションを実行）するサービスです。", "Cost၊ usage၊ RI၊ Savings Plans ကို limit နဲ့ နှိုင်းယှဉ် ခြေရာခံပြီး actual (သို့) forecast က ကျော်ရင် alert ပို့ (သို့) action လုပ်တဲ့ service ပါ။"),
      example: L("Email the team at 80% of a 100 USD monthly budget so a forgotten NAT gateway is noticed early.", "月 100 USD の予算の 80% でチームにメールを送り、消し忘れた NAT ゲートウェイに早く気づけるようにする。", "လစဉ် 100 USD budget ရဲ့ 80% ရောက်ရင် team ကို email ပို့ပြီး မေ့ကျန်ခဲ့တဲ့ NAT gateway ကို စောစော သိနိုင်တယ်။") },
    { term: 'Technical Account Manager (TAM)',
      definition: L("An AWS technical advisor who gives proactive guidance; a pool of TAMs comes with Enterprise On-Ramp and a designated TAM with Enterprise Support.", "プロアクティブなガイダンスを提供する AWS の技術アドバイザーです。Enterprise On-Ramp では TAM のプール、Enterprise Support では専任 TAM が付きます。", "Proactive guidance ပေးတဲ့ AWS technical advisor ဖြစ်ပြီး Enterprise On-Ramp မှာ TAM pool၊ Enterprise Support မှာ designated TAM ပါတယ်။"),
      example: L("Before a big sale event, the TAM reviews architecture and coordinates Infrastructure Event Management.", "大型セールの前に、TAM がアーキテクチャをレビューし、Infrastructure Event Management を調整します。", "Sale event ကြီးမတိုင်ခင် TAM က architecture ကို review လုပ်ပြီး Infrastructure Event Management ကို ညှိပေးတယ်။") },
  ],
};
