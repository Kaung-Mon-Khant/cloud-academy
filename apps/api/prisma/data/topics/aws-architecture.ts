import { L, type SeedTopic } from '../types.js';

export const topic: SeedTopic = {
  slug: 'aws-architecture',
  icon: 'Layers',
  level: 'ASSOCIATE',
  exams: ['SAA-C03'],
  name: L("AWS Solution Architecture Patterns", "AWS ソリューションアーキテクチャのパターン", "AWS Solution Architecture Pattern များ"),
  description: L(
    "Think like a Solutions Architect: decode SAA-C03 scenario keywords, design for high availability and disaster recovery, decouple with SQS, SNS, EventBridge and Kinesis, add caching layers, and build secure, cost-optimized and high-performing reference architectures.",
    "ソリューションアーキテクトのように考えます。SAA-C03 のシナリオのキーワードを読み解き、高可用性と災害対策を設計し、SQS・SNS・EventBridge・Kinesis で疎結合化し、キャッシュ層を加え、セキュアでコスト最適かつ高性能なリファレンスアーキテクチャを構築します。",
    "Solutions Architect တစ်ယောက်လို တွေးတတ်အောင် လေ့လာမယ်- SAA-C03 scenario keyword တွေကို ဖော်ထုတ်ဖတ်တတ်မယ်၊ high availability နဲ့ disaster recovery ကို design လုပ်မယ်၊ SQS၊ SNS၊ EventBridge၊ Kinesis နဲ့ decouple လုပ်မယ်၊ caching layer ထည့်မယ်၊ လုံခြုံပြီး cost သက်သာ၊ performance ကောင်းတဲ့ reference architecture တွေ ဆောက်မယ်။",
  ),
  lesson: {
    minutes: 24,
    objectives: [
      L("Decode SAA-C03 scenario keywords such as MOST cost-effective, LEAST operational overhead, highly available and decouple, and use them to eliminate wrong answers.",
        "MOST cost-effective、LEAST operational overhead、highly available、decouple などの SAA-C03 シナリオのキーワードを読み解き、誤答の消去に使える。",
        "MOST cost-effective၊ LEAST operational overhead၊ highly available၊ decouple လို SAA-C03 scenario keyword တွေကို နားလည်ပြီး အဖြေမှားတွေကို ဖယ်ထုတ်ဖို့ သုံးနိုင်မယ်။"),
      L("Explain the difference between high availability, fault tolerance and scalability, and choose between Multi-AZ and multi-Region designs.",
        "高可用性・耐障害性・スケーラビリティの違いを説明し、マルチ AZ とマルチリージョンの設計を使い分けられる。",
        "High availability၊ fault tolerance၊ scalability တို့ရဲ့ ကွာခြားချက်ကို ရှင်းပြနိုင်ပြီး Multi-AZ နဲ့ multi-Region design ကြား ရွေးချယ်နိုင်မယ်။"),
      L("Select a disaster recovery strategy (backup and restore, pilot light, warm standby, multi-site active/active) from a given RTO, RPO and budget.",
        "与えられた RTO・RPO・予算から災害対策戦略（バックアップと復元、パイロットライト、ウォームスタンバイ、マルチサイト アクティブ/アクティブ）を選択できる。",
        "ပေးထားတဲ့ RTO၊ RPO နဲ့ budget ကနေ disaster recovery strategy (backup and restore၊ pilot light၊ warm standby၊ multi-site active/active) ကို ရွေးနိုင်မယ်။"),
      L("Decouple components with SQS (standard vs FIFO, visibility timeout, long polling, DLQ), SNS fan-out, EventBridge, Step Functions and Kinesis.",
        "SQS（標準と FIFO、可視性タイムアウト、ロングポーリング、DLQ）、SNS ファンアウト、EventBridge、Step Functions、Kinesis でコンポーネントを疎結合化できる。",
        "SQS (standard နဲ့ FIFO၊ visibility timeout၊ long polling၊ DLQ)၊ SNS fan-out၊ EventBridge၊ Step Functions၊ Kinesis နဲ့ component တွေကို decouple လုပ်နိုင်မယ်။"),
      L("Place the right cache (CloudFront, ElastiCache, DAX, API Gateway cache) at the right layer.",
        "適切なキャッシュ（CloudFront、ElastiCache、DAX、API Gateway キャッシュ）を適切な層に配置できる。",
        "မှန်ကန်တဲ့ cache (CloudFront၊ ElastiCache၊ DAX၊ API Gateway cache) ကို မှန်ကန်တဲ့ layer မှာ ထားနိုင်မယ်။"),
      L("Draw and justify the three classic reference architectures: stateless 3-tier web, serverless API and static site on S3 with CloudFront OAC.",
        "3 つの定番リファレンスアーキテクチャ（ステートレスな 3 層 Web、サーバーレス API、S3 と CloudFront OAC による静的サイト）を描き、その理由を説明できる。",
        "Classic reference architecture သုံးမျိုး (stateless 3-tier web၊ serverless API၊ S3 နဲ့ CloudFront OAC သုံးတဲ့ static site) ကို ဆွဲပြပြီး ဘာကြောင့်လဲ ရှင်းပြနိုင်မယ်။"),
      L("Apply security, cost and performance patterns: private subnets, VPC endpoints, KMS, WAF, Secrets Manager, Spot, Savings Plans, S3 tiers, read replicas, Global Accelerator and gp3 vs io2.",
        "セキュリティ・コスト・パフォーマンスのパターン（プライベートサブネット、VPC エンドポイント、KMS、WAF、Secrets Manager、スポット、Savings Plans、S3 のストレージクラス、リードレプリカ、Global Accelerator、gp3 と io2）を適用できる。",
        "Security၊ cost၊ performance pattern တွေ (private subnet၊ VPC endpoint၊ KMS၊ WAF၊ Secrets Manager၊ Spot၊ Savings Plans၊ S3 tier၊ read replica၊ Global Accelerator၊ gp3 နဲ့ io2) ကို အသုံးချနိုင်မယ်။"),
    ],
    sections: [
      {
        id: "reading-saa-questions",
        title: L("Reading SAA-C03 scenarios: the keywords decide the answer", "SAA-C03 のシナリオを読む：キーワードが答えを決める", "SAA-C03 scenario ဖတ်နည်း- keyword က အဖြေကို ဆုံးဖြတ်တယ်"),
        blocks: [
          { type: 'p', text: L(
            "SAA-C03 questions rarely ask for a definition. They describe a company, a problem and a constraint, then offer four answers that **all work technically**. Only one matches the constraint. Your job is to find the constraint word first, like a detective looking for the one clue that eliminates every other suspect.",
            "SAA-C03 の問題が定義を直接問うことはほとんどありません。会社・課題・制約を説明し、**技術的にはすべて動作する** 4 つの選択肢を提示します。制約に合うのは 1 つだけです。あなたの仕事は、他の容疑者をすべて除外する手がかりを探す探偵のように、まず制約を表す語を見つけることです。",
            "SAA-C03 မေးခွန်းတွေက definition ကို တိုက်ရိုက် မေးလေ့မရှိဘူး။ Company တစ်ခု၊ ပြဿနာတစ်ခု၊ constraint တစ်ခုကို ပြောပြီး **technically အားလုံး အလုပ်လုပ်တဲ့** အဖြေ ၄ ခု ပေးတယ်။ Constraint နဲ့ ကိုက်တာ တစ်ခုပဲ ရှိတယ်။ ကျန်တဲ့ သံသယရှိသူအားလုံးကို ဖယ်ပေးမယ့် clue တစ်ခုကို ရှာတဲ့ စုံထောက်လိုပဲ constraint စကားလုံးကို အရင်ရှာရမယ်။") },
          { type: 'table',
            head: [L("Keyword in the question", "問題文のキーワード", "မေးခွန်းထဲက keyword"), L("What it usually points to", "通常示唆するもの", "များသောအားဖြင့် ညွှန်ပြတာ"), L("Typical trap", "よくある罠", "အဖြစ်များတဲ့ ထောင်ချောက်")],
            rows: [
              [L("MOST cost-effective", "MOST cost-effective（最も費用対効果が高い）", "MOST cost-effective"), L("Managed or serverless, Spot, S3 lifecycle, gateway endpoints, smallest thing that meets the requirement", "マネージドまたはサーバーレス、スポット、S3 ライフサイクル、ゲートウェイエンドポイント、要件を満たす最小構成", "Managed သို့ serverless၊ Spot၊ S3 lifecycle၊ gateway endpoint၊ requirement ပြည့်တဲ့ အသေးဆုံးဖြေရှင်းချက်"), L("Choosing a multi-Region design when the question only asks for one AZ failure", "問題が AZ 障害しか求めていないのにマルチリージョンを選ぶ", "မေးခွန်းက AZ failure ပဲ မေးတာကို multi-Region design ရွေးမိတာ")],
              [L("LEAST operational overhead", "LEAST operational overhead（運用負荷が最小）", "LEAST operational overhead"), L("Fully managed services: Lambda, Fargate, Aurora Serverless, DynamoDB, Secrets Manager rotation", "フルマネージドサービス：Lambda、Fargate、Aurora Serverless、DynamoDB、Secrets Manager のローテーション", "Fully managed service- Lambda၊ Fargate၊ Aurora Serverless၊ DynamoDB၊ Secrets Manager rotation"), L("Custom scripts on EC2 or cron jobs you must patch and monitor", "パッチ適用と監視が必要な EC2 上のカスタムスクリプトや cron ジョブ", "Patch နဲ့ monitor လုပ်ရမယ့် EC2 ပေါ်က custom script၊ cron job")],
              [L("Highly available", "Highly available（高可用性）", "Highly available"), L("Multiple AZs, ALB, Auto Scaling, RDS Multi-AZ, managed regional services", "複数 AZ、ALB、Auto Scaling、RDS マルチ AZ、リージョナルなマネージドサービス", "AZ အများ၊ ALB၊ Auto Scaling၊ RDS Multi-AZ၊ regional managed service"), L("A bigger single instance or read replicas sold as HA", "大きな単一インスタンスや、HA として提示されるリードレプリカ", "Instance တစ်လုံးကို ကြီးအောင်လုပ်တာ၊ read replica ကို HA လို့ ထင်တာ")],
              [L("Decouple / spiky traffic / do not lose orders", "Decouple／急増するトラフィック／注文を失わない", "Decouple / traffic ရုတ်တရက်တက် / order မပျောက်စေနဲ့"), L("SQS queue as a buffer, SNS fan-out, EventBridge", "バッファとしての SQS キュー、SNS ファンアウト、EventBridge", "Buffer အဖြစ် SQS queue၊ SNS fan-out၊ EventBridge"), L("Synchronous calls between tiers, or SNS alone (no storage if a subscriber is down)", "層間の同期呼び出し、または SNS 単体（購読者が停止中だと保持されない）", "Tier တွေကြား synchronous call၊ SNS တစ်ခုတည်း (subscriber down ရင် message မသိမ်းဘူး)")],
              [L("Real time, ordered, replay", "リアルタイム、順序保証、再処理（リプレイ）", "Real time၊ order မှန်၊ replay"), L("Kinesis Data Streams or SQS FIFO", "Kinesis Data Streams または SQS FIFO", "Kinesis Data Streams သို့ SQS FIFO"), L("SQS standard (best-effort ordering, no replay)", "SQS 標準キュー（ベストエフォートの順序、リプレイ不可）", "SQS standard (order ကို best-effort ပဲ၊ replay မရ)")],
            ] },
          { type: 'steps', items: [
            L("**Read the last sentence first.** It holds the real question and the constraint word, for example: Which solution meets these requirements with the LEAST operational overhead?",
              "**最後の文を先に読みます。** そこに本当の問いと制約語があります。例：Which solution meets these requirements with the LEAST operational overhead?",
              "**နောက်ဆုံးစာကြောင်းကို အရင်ဖတ်ပါ။** အဲဒီမှာ တကယ့်မေးခွန်းနဲ့ constraint စကားလုံး ပါတယ်။ ဥပမာ- Which solution meets these requirements with the LEAST operational overhead?"),
            L("**Underline the hard requirements** in the scenario: numbers (RPO 15 minutes), words like must, without code changes, encrypted, in order.",
              "**シナリオ中の必須要件に下線を引きます。** 数値（RPO 15 分）や、must、without code changes、encrypted、in order といった語です。",
              "**Scenario ထဲက မဖြစ်မနေ requirement တွေကို မျဉ်းသားပါ။** ဂဏန်း (RPO 15 minutes)၊ must၊ without code changes၊ encrypted၊ in order လို စကားလုံးတွေ။"),
            L("**Eliminate answers that break a hard requirement.** A standard queue fails in order; a single-AZ database fails highly available.",
              "**必須要件を破る選択肢を消去します。** 標準キューは in order を満たさず、シングル AZ のデータベースは highly available を満たしません。",
              "**Hard requirement ကို ချိုးဖောက်တဲ့ အဖြေတွေကို ဖယ်ပါ။** Standard queue က in order ကို မပြည့်ဘူး၊ single-AZ database က highly available ကို မပြည့်ဘူး။"),
            L("**Rank the survivors by the constraint word.** If two answers both work, pick the managed one for operational overhead or the cheaper one for cost.",
              "**残った選択肢を制約語で順位付けします。** 2 つとも動作するなら、運用負荷ならマネージドな方、コストなら安い方を選びます。",
              "**ကျန်တဲ့ အဖြေတွေကို constraint စကားလုံးနဲ့ အဆင့်ခွဲပါ။** နှစ်ခုလုံး အလုပ်လုပ်ရင် operational overhead ဆို managed ဖြစ်တာ၊ cost ဆို စျေးသက်သာတာကို ရွေးပါ။"),
            L("**Sanity-check for over-engineering.** The right answer solves the stated problem, not every problem the company might have in five years.",
              "**過剰設計でないか確認します。** 正解は記述された課題を解決するもので、5 年後に起こりうるすべての課題を解決するものではありません。",
              "**Over-engineering ဖြစ်နေလား စစ်ပါ။** အဖြေမှန်က ပြောထားတဲ့ ပြဿနာကို ဖြေရှင်းတာ၊ နောက် ၅ နှစ်မှာ ဖြစ်နိုင်တဲ့ ပြဿနာအားလုံးကို မဟုတ်ဘူး။"),
          ] },
          { type: 'callout', tone: 'exam', text: L(
            "When two options are technically valid, the constraint word is the tie-breaker. LEAST operational overhead almost always beats a self-managed EC2 solution, even if the EC2 option is slightly cheaper.",
            "2 つの選択肢が技術的に正しい場合、制約語が決め手です。LEAST operational overhead では、EC2 案が多少安くても、ほぼ必ずマネージドサービスが自己管理の EC2 案に勝ちます。",
            "Option နှစ်ခုလုံး technically မှန်ရင် constraint စကားလုံးက ဆုံးဖြတ်ပေးတယ်။ LEAST operational overhead ဆိုရင် EC2 option က နည်းနည်းစျေးသက်သာနေရင်တောင် managed service က အမြဲလိုလို နိုင်တယ်။") },
        ],
      },
      {
        id: "well-architected",
        title: L("The Well-Architected Framework applied to exam scenarios", "試験シナリオに適用する Well-Architected フレームワーク", "Exam scenario တွေမှာ Well-Architected Framework ကို အသုံးချခြင်း"),
        blocks: [
          { type: 'p', text: L(
            "The AWS Well-Architected Framework has **six pillars**. SAA-C03 domains map directly onto four of them (secure, resilient, high-performing, cost-optimized), so every question is really asking: which pillar is being tested, and what is the textbook pattern for it?",
            "AWS Well-Architected フレームワークには **6 つの柱** があります。SAA-C03 のドメインはそのうち 4 つ（セキュア、レジリエント、高性能、コスト最適化）に直接対応するため、どの問題も「どの柱が問われていて、その定石パターンは何か」を聞いていると言えます。",
            "AWS Well-Architected Framework မှာ **pillar ခြောက်ခု** ရှိတယ်။ SAA-C03 domain တွေက အဲဒီထဲက လေးခု (secure၊ resilient၊ high-performing၊ cost-optimized) နဲ့ တိုက်ရိုက် ကိုက်တယ်။ ဒါကြောင့် မေးခွန်းတိုင်းက တကယ်တော့ ဘယ် pillar ကို စစ်နေတာလဲ၊ အဲဒီအတွက် textbook pattern က ဘာလဲလို့ မေးနေတာပါ။") },
          { type: 'list', items: [
            L("**Operational Excellence** – automate with IaC, make small reversible changes, observe with CloudWatch. Exam hint: CloudFormation, Systems Manager.",
              "**運用上の優秀性** – IaC で自動化し、小さく元に戻せる変更を行い、CloudWatch で観測します。試験のヒント：CloudFormation、Systems Manager。",
              "**Operational Excellence** – IaC နဲ့ automate လုပ်၊ သေးငယ်ပြီး ပြန်ပြင်လို့ရတဲ့ change တွေလုပ်၊ CloudWatch နဲ့ စောင့်ကြည့်။ Exam hint- CloudFormation၊ Systems Manager။"),
            L("**Security** – least privilege IAM, encryption everywhere, traceability. Exam hint: KMS, IAM roles, WAF, private subnets.",
              "**セキュリティ** – 最小権限の IAM、あらゆる場所での暗号化、追跡可能性。試験のヒント：KMS、IAM ロール、WAF、プライベートサブネット。",
              "**Security** – least privilege IAM၊ နေရာတိုင်း encryption၊ traceability။ Exam hint- KMS၊ IAM role၊ WAF၊ private subnet။"),
            L("**Reliability** – recover automatically, scale horizontally, stop guessing capacity. Exam hint: Multi-AZ, Auto Scaling, SQS, DR strategies.",
              "**信頼性** – 自動で復旧し、水平にスケールし、キャパシティの推測をやめます。試験のヒント：マルチ AZ、Auto Scaling、SQS、DR 戦略。",
              "**Reliability** – အလိုအလျောက် recover လုပ်၊ horizontal scale လုပ်၊ capacity ကို ခန့်မှန်းနေတာ ရပ်။ Exam hint- Multi-AZ၊ Auto Scaling၊ SQS၊ DR strategy။"),
            L("**Performance Efficiency** – use the right resource type, go global in minutes, use caching. Exam hint: CloudFront, ElastiCache, read replicas, io2.",
              "**パフォーマンス効率** – 適切なリソースタイプを使い、数分でグローバル展開し、キャッシュを使います。試験のヒント：CloudFront、ElastiCache、リードレプリカ、io2。",
              "**Performance Efficiency** – မှန်ကန်တဲ့ resource type သုံး၊ မိနစ်ပိုင်းအတွင်း global ဖြစ်အောင်လုပ်၊ caching သုံး။ Exam hint- CloudFront၊ ElastiCache၊ read replica၊ io2။"),
            L("**Cost Optimization** – pay only for what you use, measure, choose the right pricing model. Exam hint: Spot, Savings Plans, S3 Intelligent-Tiering.",
              "**コスト最適化** – 使った分だけ支払い、測定し、適切な料金モデルを選びます。試験のヒント：スポット、Savings Plans、S3 Intelligent-Tiering。",
              "**Cost Optimization** – သုံးသလောက်ပဲ ပေး၊ တိုင်းတာ၊ မှန်တဲ့ pricing model ရွေး။ Exam hint- Spot၊ Savings Plans၊ S3 Intelligent-Tiering။"),
            L("**Sustainability** – maximize utilization, prefer managed services and efficient hardware such as Graviton.",
              "**持続可能性** – 使用率を最大化し、マネージドサービスや Graviton のような効率的なハードウェアを優先します。",
              "**Sustainability** – utilization ကို အမြင့်ဆုံးဖြစ်အောင်လုပ်၊ managed service နဲ့ Graviton လို efficient hardware ကို ဦးစားပေး။"),
          ] },
          { type: 'callout', tone: 'memory', text: L(
            "Six pillars mnemonic: **SCOPRS** – Security, Cost, Operational excellence, Performance, Reliability, Sustainability. Think of an architect looking through a SCOPE that has six lenses.",
            "6 本柱の覚え方：**SCOPRS** – Security、Cost、Operational excellence、Performance、Reliability、Sustainability。6 枚のレンズが付いたスコープを覗くアーキテクトを想像しましょう。",
            "Pillar ခြောက်ခု မှတ်နည်း- **SCOPRS** – Security၊ Cost၊ Operational excellence၊ Performance၊ Reliability၊ Sustainability။ Lens ခြောက်ချပ်ပါတဲ့ SCOPE နဲ့ ကြည့်နေတဲ့ architect ကို စိတ်ကူးကြည့်ပါ။") },
        ],
      },
      {
        id: "ha-ft-scalability",
        title: L("High availability vs fault tolerance vs scalability, Multi-AZ vs multi-Region", "高可用性・耐障害性・スケーラビリティ、マルチ AZ とマルチリージョン", "High availability၊ fault tolerance၊ scalability နဲ့ Multi-AZ vs multi-Region"),
        blocks: [
          { type: 'p', text: L(
            "These three words sound similar but mean different things. Imagine a Tokyo ramen shop. **High availability** means that if one cook gets sick, another cook takes over after a short pause, so the shop stays open. **Fault tolerance** means two cooks always cook every bowl in parallel, so a failure causes zero interruption. **Scalability** means you can add more cooks at lunchtime and send them home at 3 p.m.",
            "この 3 つの言葉は似ていますが意味は異なります。東京のラーメン店を想像してください。**高可用性** は、料理人が 1 人病気になっても、少しの中断の後に別の料理人が引き継ぎ、店が営業を続けられることです。**耐障害性** は、2 人の料理人が常にすべての丼を並行して作るため、障害が起きても中断がゼロであることです。**スケーラビリティ** は、昼時に料理人を増やし、15 時に帰せることです。",
            "ဒီစကားလုံး သုံးလုံးက ဆင်တူပေမယ့် အဓိပ္ပာယ် မတူဘူး။ Tokyo က ramen ဆိုင်တစ်ဆိုင်ကို စဉ်းစားကြည့်ပါ။ **High availability** ဆိုတာ စားဖိုမှူးတစ်ယောက် နေမကောင်းဖြစ်ရင် ခဏရပ်ပြီး နောက်တစ်ယောက်က ဆက်လုပ်လို့ ဆိုင်ဖွင့်ထားနိုင်တာ။ **Fault tolerance** ဆိုတာ စားဖိုမှူးနှစ်ယောက်က ပန်းကန်တိုင်းကို အပြိုင် ချက်နေလို့ တစ်ယောက်ပျက်လည်း လုံးဝ မရပ်တာ။ **Scalability** ဆိုတာ နေ့လည်စာချိန်မှာ စားဖိုမှူး ထပ်ထည့်ပြီး ညနေ ၃ နာရီမှာ ပြန်လွှတ်နိုင်တာ။") },
          { type: 'table',
            head: [L("Concept", "概念", "Concept"), L("Meaning", "意味", "အဓိပ္ပာယ်"), L("AWS example", "AWS の例", "AWS ဥပမာ")],
            rows: [
              [L("High availability", "高可用性", "High availability"), L("Minimal downtime; brief failover is acceptable", "ダウンタイムを最小化。短いフェイルオーバーは許容", "Downtime အနည်းဆုံး၊ ခဏတာ failover ကို လက်ခံတယ်"), L("RDS Multi-AZ fails over to the standby in about 1–2 minutes", "RDS マルチ AZ は約 1〜2 分でスタンバイにフェイルオーバー", "RDS Multi-AZ က standby ဆီ ၁–၂ မိနစ်လောက်အတွင်း failover လုပ်တယ်")],
              [L("Fault tolerance", "耐障害性", "Fault tolerance"), L("No interruption even when a component fails; usually costs more", "部品が故障しても中断なし。通常はコストが高い", "Component ပျက်လည်း လုံးဝမရပ်ဘူး၊ များသောအားဖြင့် စျေးပိုကြီးတယ်"), L("Enough EC2 capacity in each AZ so that losing one AZ still serves full load", "1 つの AZ を失っても全負荷を処理できる EC2 容量を各 AZ に配置", "AZ တစ်ခု ပျောက်သွားလည်း load အပြည့် ဆောင်နိုင်အောင် AZ တိုင်းမှာ EC2 capacity လုံလုံလောက်လောက်ထား")],
              [L("Scalability / elasticity", "スケーラビリティ／弾力性", "Scalability / elasticity"), L("Capacity grows and shrinks with demand", "需要に応じて容量が増減する", "Demand အလိုက် capacity တိုး၊ လျော့"), L("Auto Scaling group with target tracking on CPU", "CPU に対するターゲット追跡を使う Auto Scaling グループ", "CPU အပေါ် target tracking သုံးတဲ့ Auto Scaling group")],
              [L("Multi-AZ", "マルチ AZ", "Multi-AZ"), L("Protects against a data center or AZ failure inside one Region", "1 つのリージョン内のデータセンターや AZ の障害から保護", "Region တစ်ခုအတွင်း data center သို့ AZ failure ကနေ ကာကွယ်တယ်"), L("ALB + ASG across 3 AZs in ap-northeast-1", "ap-northeast-1 の 3 AZ にまたがる ALB + ASG", "ap-northeast-1 ထဲ AZ ၃ ခုဖြတ်ထားတဲ့ ALB + ASG")],
              [L("Multi-Region", "マルチリージョン", "Multi-Region"), L("Protects against a Region-wide outage, gives low latency worldwide or meets data residency; complex and costly", "リージョン全体の障害から保護し、世界中で低レイテンシーを提供、またはデータ所在地要件を満たす。複雑で高コスト", "Region တစ်ခုလုံး ပျက်တာကနေ ကာကွယ်၊ ကမ္ဘာအနှံ့ latency နည်းစေ၊ data residency ပြည့်စေ။ ရှုပ်ထွေးပြီး စျေးကြီးတယ်"), L("Aurora Global Database Tokyo to Osaka with Route 53 failover", "Route 53 フェイルオーバー付きの東京から大阪への Aurora Global Database", "Route 53 failover ပါတဲ့ Tokyo ကနေ Osaka ကို Aurora Global Database")],
            ] },
          { type: 'callout', tone: 'memory', text: L(
            "**Multi-AZ is for availability, read replicas are for performance.** A Multi-AZ instance standby cannot serve reads; a read replica is asynchronous and must be promoted manually. Remember: standby = spare tire, replica = extra lane.",
            "**マルチ AZ は可用性のため、リードレプリカはパフォーマンスのため。** マルチ AZ インスタンスのスタンバイは読み取りを処理できず、リードレプリカは非同期で手動の昇格が必要です。覚え方：スタンバイ = スペアタイヤ、レプリカ = 追加の車線。",
            "**Multi-AZ က availability အတွက်၊ read replica က performance အတွက်။** Multi-AZ instance ရဲ့ standby က read မဆောင်ရွက်ပေးဘူး၊ read replica က asynchronous ဖြစ်ပြီး manual promote လုပ်ရတယ်။ မှတ်နည်း- standby = spare tire (အပိုဘီး)၊ replica = လမ်းကြောင်း အပို။") },
          { type: 'callout', tone: 'warn', text: L(
            "Do not jump to multi-Region unless the question says Region failure, global users or a specific RPO/RTO that a single Region cannot meet. Multi-AZ is the default answer for highly available.",
            "問題文にリージョン障害、グローバルユーザー、または単一リージョンでは満たせない特定の RPO/RTO が書かれていない限り、マルチリージョンに飛びつかないでください。highly available の既定の答えはマルチ AZ です。",
            "မေးခွန်းထဲမှာ Region failure၊ global user ဒါမှမဟုတ် Region တစ်ခုတည်းနဲ့ မပြည့်နိုင်တဲ့ RPO/RTO မပါရင် multi-Region ကို ချက်ချင်း မရွေးပါနဲ့။ Highly available ရဲ့ default အဖြေက Multi-AZ ပါ။") },
        ],
      },
      {
        id: "three-tier-reference",
        title: L("Reference architecture 1: the stateless, highly available web tier", "リファレンスアーキテクチャ 1：ステートレスで高可用な Web 層", "Reference architecture 1- stateless ဖြစ်ပြီး highly available ဖြစ်တဲ့ web tier"),
        blocks: [
          { type: 'p', text: L(
            "This is the most tested picture in SAA-C03. Route 53 resolves the domain to an Application Load Balancer in public subnets. The ALB spreads requests across an Auto Scaling group of EC2 instances in **private subnets in at least two AZs**. The instances are **stateless**: session data lives in ElastiCache or DynamoDB, not on the server, so any instance can be terminated or replaced at any time. Data lives in RDS Multi-AZ.",
            "これは SAA-C03 で最もよく出題される構成です。Route 53 がドメインをパブリックサブネットの Application Load Balancer に解決します。ALB はリクエストを、**少なくとも 2 つの AZ のプライベートサブネット** にある EC2 インスタンスの Auto Scaling グループに分散します。インスタンスは **ステートレス** で、セッションデータはサーバー上ではなく ElastiCache や DynamoDB に保存するため、どのインスタンスもいつでも終了・置換できます。データは RDS マルチ AZ に保存します。",
            "ဒါက SAA-C03 မှာ အမေးအများဆုံး ပုံပါ။ Route 53 က domain ကို public subnet ထဲက Application Load Balancer ဆီ resolve လုပ်တယ်။ ALB က request တွေကို **အနည်းဆုံး AZ နှစ်ခုရဲ့ private subnet** ထဲက EC2 Auto Scaling group ဆီ ခွဲဝေပေးတယ်။ Instance တွေက **stateless** ဖြစ်တယ်- session data ကို server ပေါ်မှာမထားဘဲ ElastiCache သို့ DynamoDB မှာ ထားလို့ ဘယ် instance ကိုမဆို အချိန်မရွေး terminate သို့ replace လုပ်လို့ရတယ်။ Data ကတော့ RDS Multi-AZ မှာ ရှိတယ်။") },
          { type: 'diagram', text: `                    Users
                      |
               Route 53 (DNS)
                      |
            +---------v---------+
            | ALB (public subs) |
            +----+---------+----+
                 |         |
      AZ-a       |         |       AZ-b
   +-------------v-+     +-v-------------+
   | EC2 (ASG)     |     | EC2 (ASG)     |  private app subnets
   +-------+-------+     +-------+-------+
           |   ElastiCache (sessions)  |
           +------------+--------------+
                        |
   +--------------------v+    +---------------------+
   | RDS primary  (AZ-a) |===>| RDS standby  (AZ-b) |
   +---------------------+    +---------------------+
          synchronous replication, automatic failover`,
            caption: L("Classic highly available 3-tier web architecture across two AZs", "2 つの AZ にまたがる定番の高可用 3 層 Web アーキテクチャ", "AZ နှစ်ခု ဖြတ်ထားတဲ့ classic highly available 3-tier web architecture") },
          { type: 'list', items: [
            L("**Why ALB?** Layer 7 routing by path or host, health checks, and it is itself multi-AZ and managed.",
              "**なぜ ALB か？** パスやホストによるレイヤー 7 ルーティングとヘルスチェックがあり、ALB 自体がマルチ AZ でマネージドだからです。",
              "**ဘာကြောင့် ALB လဲ?** Path သို့ host အလိုက် layer 7 routing၊ health check ပါပြီး ALB ကိုယ်တိုင် multi-AZ ဖြစ်ကာ managed ဖြစ်လို့ပါ။"),
            L("**Why ASG across AZs?** If AZ-a fails, the ASG launches replacements in AZ-b automatically; set the ASG to use ELB health checks so unhealthy app instances are replaced.",
              "**なぜ AZ にまたがる ASG か？** AZ-a が故障しても ASG が自動的に AZ-b に代替を起動します。ELB ヘルスチェックを使うよう設定すると、異常なアプリインスタンスも置き換えられます。",
              "**ဘာကြောင့် AZ ဖြတ်တဲ့ ASG လဲ?** AZ-a ပျက်ရင် ASG က AZ-b မှာ အစားထိုး instance တွေ အလိုအလျောက် launch လုပ်တယ်။ ELB health check သုံးအောင် set ထားရင် app မကောင်းတဲ့ instance တွေကိုပါ အစားထိုးပေးတယ်။"),
            L("**Why stateless?** Sticky sessions tie a user to one instance; if it dies, the session dies. External session storage makes scaling in and out safe.",
              "**なぜステートレスか？** スティッキーセッションはユーザーを 1 つのインスタンスに縛るため、そのインスタンスが落ちるとセッションも失われます。外部のセッションストレージならスケールイン・アウトが安全です。",
              "**ဘာကြောင့် stateless လဲ?** Sticky session က user ကို instance တစ်လုံးနဲ့ ချည်ထားလို့ အဲဒီ instance သေရင် session ပါ ပျောက်တယ်။ Session ကို အပြင်မှာ သိမ်းထားရင် scale in/out လုပ်တာ လုံခြုံတယ်။"),
            L("**Why RDS Multi-AZ?** Synchronous standby in another AZ with automatic DNS failover; the application keeps the same endpoint.",
              "**なぜ RDS マルチ AZ か？** 別 AZ に同期スタンバイがあり、DNS による自動フェイルオーバーが行われます。アプリケーションは同じエンドポイントを使い続けられます。",
              "**ဘာကြောင့် RDS Multi-AZ လဲ?** တခြား AZ မှာ synchronous standby ရှိပြီး DNS failover အလိုအလျောက် လုပ်ပေးတယ်။ Application က endpoint အတူတူကိုပဲ ဆက်သုံးနိုင်တယ်။"),
          ] },
          { type: 'code', lang: 'yaml', code: `Resources:
  AppDatabase:
    Type: AWS::RDS::DBInstance
    Properties:
      Engine: mysql
      DBInstanceClass: db.m7g.large
      AllocatedStorage: 100
      StorageType: gp3
      MultiAZ: true                   # synchronous standby in another AZ
      StorageEncrypted: true          # KMS encryption at rest
      ManageMasterUserPassword: true  # password stored in Secrets Manager
      MasterUsername: admin
      DBSubnetGroupName: !Ref DbSubnetGroup   # private subnets only
      VPCSecurityGroups:
        - !Ref DbSecurityGroup                # allows 3306 from app SG only
      BackupRetentionPeriod: 7`,
            caption: L("CloudFormation snippet: an encrypted RDS Multi-AZ database in private subnets", "CloudFormation スニペット：プライベートサブネット内の暗号化された RDS マルチ AZ データベース", "CloudFormation snippet- private subnet ထဲက encrypt လုပ်ထားတဲ့ RDS Multi-AZ database") },
          { type: 'callout', tone: 'exam', text: L(
            "If a scenario says users are logged out when instances scale in, the answer is to move session state to ElastiCache or DynamoDB, not to enable sticky sessions or to stop scaling.",
            "インスタンスがスケールインするとユーザーがログアウトされるというシナリオなら、答えはセッション状態を ElastiCache や DynamoDB に移すことです。スティッキーセッションの有効化やスケーリングの停止ではありません。",
            "Instance တွေ scale in လုပ်တဲ့အခါ user တွေ logout ဖြစ်သွားတယ်ဆိုတဲ့ scenario ဆိုရင် အဖြေက session state ကို ElastiCache သို့ DynamoDB ဆီ ရွှေ့တာပါ။ Sticky session ဖွင့်တာ ဒါမှမဟုတ် scaling ရပ်တာ မဟုတ်ဘူး။") },
        ],
      },
      {
        id: "disaster-recovery",
        title: L("Disaster recovery strategies: RTO, RPO and cost", "災害対策戦略：RTO・RPO・コスト", "Disaster recovery strategy များ- RTO၊ RPO နဲ့ cost"),
        blocks: [
          { type: 'p', text: L(
            "Two numbers drive every DR design. **RPO (Recovery Point Objective)** is how much data you can afford to lose, measured backwards in time from the disaster. **RTO (Recovery Time Objective)** is how long the business can be down before service is restored. Lower numbers cost more money, so the four AWS strategies form a ladder from cheap and slow to expensive and instant.",
            "すべての DR 設計は 2 つの数値で決まります。**RPO（目標復旧時点）** は失っても許容できるデータ量で、災害時点から過去に遡って測ります。**RTO（目標復旧時間）** はサービスが復旧するまでに業務が停止していられる時間です。数値を小さくするほどコストが上がるため、AWS の 4 つの戦略は「安くて遅い」から「高くて即時」までのはしごになっています。",
            "DR design တိုင်းကို ဂဏန်းနှစ်ခုက ဆုံးဖြတ်တယ်။ **RPO (Recovery Point Objective)** ဆိုတာ disaster ဖြစ်တဲ့အချိန်ကနေ နောက်ပြန်တွက်ပြီး data ဘယ်လောက်ထိ ဆုံးရှုံးလို့ရလဲ။ **RTO (Recovery Time Objective)** ဆိုတာ service ပြန်ရလာတဲ့အထိ business ဘယ်လောက်ကြာကြာ ရပ်နေလို့ရလဲ။ ဂဏန်းနည်းလေ ပိုက်ဆံပိုကုန်လေမို့ AWS strategy လေးခုက စျေးသက်ပြီးနှေးတာကနေ စျေးကြီးပြီး ချက်ချင်းဖြစ်တာအထိ လှေကားထစ်လို ဖြစ်နေတယ်။") },
          { type: 'table',
            head: [L("Strategy", "戦略", "Strategy"), L("What runs in the DR Region", "DR リージョンで稼働しているもの", "DR Region မှာ ဘာ run နေလဲ"), L("Typical RPO / RTO", "一般的な RPO／RTO", "ပုံမှန် RPO / RTO"), L("Cost", "コスト", "Cost")],
            rows: [
              [L("Backup and restore", "バックアップと復元", "Backup and restore"), L("Nothing running; only backups, snapshots and AMIs copied there (AWS Backup cross-Region copy, S3 CRR)", "何も稼働せず、バックアップ・スナップショット・AMI のコピーのみ（AWS Backup のクロスリージョンコピー、S3 CRR）", "ဘာမှ မ run ဘူး၊ backup၊ snapshot၊ AMI copy တွေပဲ ရှိတယ် (AWS Backup cross-Region copy၊ S3 CRR)"), L("Hours / hours to a day", "数時間／数時間〜1 日", "နာရီပိုင်း / နာရီပိုင်းကနေ တစ်ရက်"), L("$ lowest", "$ 最安", "$ အသက်သာဆုံး")],
              [L("Pilot light", "パイロットライト", "Pilot light"), L("Core data layer live and replicating (DB replica); app servers off or not yet created", "コアのデータ層が稼働しレプリケーション中（DB レプリカ）。アプリサーバーは停止または未作成", "Core data layer က live ဖြစ်ပြီး replicate လုပ်နေတယ် (DB replica)၊ app server တွေ ပိတ်ထား သို့ မဆောက်ရသေး"), L("Minutes / tens of minutes", "数分／数十分", "မိနစ်ပိုင်း / မိနစ်ဆယ်ချီ"), L("$$", "$$", "$$")],
              [L("Warm standby", "ウォームスタンバイ", "Warm standby"), L("A complete but scaled-down copy of production is running and can take traffic", "本番の完全だが縮小されたコピーが稼働し、トラフィックを受けられる", "Production ရဲ့ အပြည့်အစုံ ဒါပေမယ့် size လျှော့ထားတဲ့ copy က run နေပြီး traffic လက်ခံနိုင်တယ်"), L("Seconds to minutes / minutes", "数秒〜数分／数分", "စက္ကန့်ကနေ မိနစ် / မိနစ်ပိုင်း"), L("$$$", "$$$", "$$$")],
              [L("Multi-site active/active", "マルチサイト アクティブ/アクティブ", "Multi-site active/active"), L("Full production capacity in two or more Regions, all serving traffic", "2 つ以上のリージョンで本番と同等の容量がすべてトラフィックを処理", "Region နှစ်ခု သို့ ပိုများတဲ့နေရာမှာ production capacity အပြည့်နဲ့ traffic အားလုံး ဆောင်ရွက်နေတယ်"), L("Near zero / near zero", "ほぼゼロ／ほぼゼロ", "သုညနီးပါး / သုညနီးပါး"), L("$$$$ highest", "$$$$ 最高", "$$$$ အစျေးအကြီးဆုံး")],
            ] },
          { type: 'diagram', text: ` PRIMARY (ap-northeast-1 Tokyo)     DR (ap-northeast-3 Osaka)
 +---------------------------+       +---------------------------+
 | Route 53 failover PRIMARY |       | Route 53 failover SECOND. |
 | ALB + ASG  6 x EC2   ON   |       | ALB + ASG  min=0     OFF  |
 | Aurora writer        ON   |=====> | Aurora replica       ON   |
 | S3 assets bucket          |-CRR-> | S3 assets bucket          |
 +---------------------------+       +---------------------------+
   Disaster: promote DB, scale ASG 0 -> 6, Route 53 fails over`,
            caption: L("Pilot light: only the data layer burns continuously, like the small flame in a gas heater", "パイロットライト：ガスヒーターの種火のように、データ層だけが常に燃えている", "Pilot light- gas heater ထဲက မီးတောက်လေးလိုပဲ data layer တစ်ခုတည်းက အမြဲတောက်နေတယ်") },
          { type: 'callout', tone: 'memory', text: L(
            "Ladder of DR, cheapest to fastest: **Backup → Pilot → Warm → Multi**. Pilot light = only the flame (data) is on; warm standby = the whole oven is on but on low heat; multi-site = two kitchens cooking at full power.",
            "DR のはしご（安い順＝遅い順）：**Backup → Pilot → Warm → Multi**。パイロットライト＝種火（データ）だけが点いている。ウォームスタンバイ＝オーブン全体が弱火で点いている。マルチサイト＝2 つの厨房がフル稼働。",
            "DR လှေကား (စျေးအသက်သာဆုံးကနေ အမြန်ဆုံးအထိ)- **Backup → Pilot → Warm → Multi**။ Pilot light = မီးတောက်လေး (data) ပဲ ဖွင့်ထား၊ warm standby = မီးဖို တစ်ခုလုံး ဖွင့်ထားပေမယ့် မီးအေးအေး၊ multi-site = မီးဖိုချောင် နှစ်ခုက အားအပြည့်နဲ့ ချက်နေ။") },
          { type: 'callout', tone: 'exam', text: L(
            "Watch the difference between pilot light and warm standby: if the DR Region must **already serve some traffic** or be ready in minutes without launching servers, it is warm standby. For Aurora, **Aurora Global Database** gives cross-Region replication with an RPO typically around one second, and **AWS Elastic Disaster Recovery** gives block-level replication of servers for low RPO at low standby cost.",
            "パイロットライトとウォームスタンバイの違いに注意しましょう。DR リージョンが **すでに一部のトラフィックを処理している** 必要がある、またはサーバーを起動せずに数分で準備できる必要があるなら、ウォームスタンバイです。Aurora では **Aurora Global Database** が一般的に約 1 秒の RPO でクロスリージョンレプリケーションを提供し、**AWS Elastic Disaster Recovery** はサーバーのブロックレベルレプリケーションにより低い待機コストで低 RPO を実現します。",
            "Pilot light နဲ့ warm standby ကွာခြားချက်ကို သတိထားပါ- DR Region က **traffic တချို့ကို ဆောင်ရွက်နေပြီးသား** ဖြစ်ရမယ် ဒါမှမဟုတ် server အသစ် launch မလုပ်ဘဲ မိနစ်ပိုင်းအတွင်း အဆင်သင့်ဖြစ်ရမယ်ဆိုရင် warm standby ပါ။ Aurora အတွက် **Aurora Global Database** က ပုံမှန် RPO ၁ စက္ကန့်လောက်နဲ့ cross-Region replicate လုပ်ပေးပြီး **AWS Elastic Disaster Recovery** က server တွေကို block-level replicate လုပ်လို့ standby cost နည်းနည်းနဲ့ RPO နည်းအောင် လုပ်ပေးတယ်။") },
        ],
      },
      {
        id: "decoupling-sqs",
        title: L("Decoupling with Amazon SQS: standard vs FIFO, visibility timeout, long polling, DLQ", "Amazon SQS による疎結合化：標準と FIFO、可視性タイムアウト、ロングポーリング、DLQ", "Amazon SQS နဲ့ decouple လုပ်ခြင်း- standard vs FIFO၊ visibility timeout၊ long polling၊ DLQ"),
        blocks: [
          { type: 'p', text: L(
            "Tight coupling means the web tier calls the order processor directly; if the processor is slow or down, customers see errors. A queue is like the ticket rail in a busy kitchen: waiters pin orders on the rail and cooks take them when ready. Neither side needs to know how fast the other works. **SQS is pull-based**: producers send messages, consumers poll for them, and messages wait safely (default retention 4 days, configurable from 1 minute to 14 days).",
            "密結合とは、Web 層が注文処理を直接呼び出すことです。処理側が遅い、または停止していると、顧客にエラーが表示されます。キューは忙しい厨房の伝票レールのようなものです。ホール係が伝票をレールに留め、料理人は手が空いたときに取ります。どちらも相手の速度を知る必要はありません。**SQS はプル型** です。プロデューサーがメッセージを送り、コンシューマーがポーリングし、メッセージは安全に待機します（保持期間はデフォルト 4 日、1 分〜14 日で設定可能）。",
            "Tight coupling ဆိုတာ web tier က order processor ကို တိုက်ရိုက်ခေါ်တာ၊ processor နှေးနေရင် ဒါမှမဟုတ် down နေရင် customer တွေက error မြင်ရတယ်။ Queue ဆိုတာ အလုပ်များတဲ့ မီးဖိုချောင်ထဲက order စာရွက်ချိတ်တဲ့ တန်းလိုပါပဲ- စားပွဲထိုးက order စာရွက်ကို ချိတ်ထားပြီး စားဖိုမှူးက အဆင်သင့်ဖြစ်မှ ယူတယ်။ ဘယ်ဘက်ကမှ တစ်ဖက်က ဘယ်လောက်မြန်လဲ သိစရာမလိုဘူး။ **SQS က pull-based**- producer က message ပို့၊ consumer က poll လုပ်ယူ၊ message တွေက လုံလုံခြုံခြုံ စောင့်နေတယ် (default retention ၄ ရက်၊ ၁ မိနစ်ကနေ ၁၄ ရက်အထိ ပြင်လို့ရ)။") },
          { type: 'table',
            head: [L("Feature", "機能", "Feature"), L("Standard queue", "標準キュー", "Standard queue"), L("FIFO queue", "FIFO キュー", "FIFO queue")],
            rows: [
              [L("Ordering", "順序", "Order"), L("Best-effort; messages can arrive out of order", "ベストエフォート。順序が入れ替わることがある", "Best-effort၊ order လွဲပြီး ရောက်နိုင်တယ်"), L("Strict order within a message group (`MessageGroupId`)", "メッセージグループ（`MessageGroupId`）内で厳密な順序", "Message group (`MessageGroupId`) အတွင်း order တိကျတယ်")],
              [L("Delivery", "配信", "Delivery"), L("At-least-once; occasional duplicates, so consumers must be idempotent", "少なくとも 1 回。まれに重複するため、コンシューマーは冪等であるべき", "At-least-once၊ တခါတလေ duplicate ဖြစ်လို့ consumer က idempotent ဖြစ်ရမယ်"), L("Exactly-once processing with deduplication ID or content-based deduplication", "重複排除 ID またはコンテンツベースの重複排除による 1 回限りの処理", "Deduplication ID သို့ content-based deduplication နဲ့ exactly-once processing")],
              [L("Throughput", "スループット", "Throughput"), L("Nearly unlimited", "ほぼ無制限", "အကန့်အသတ် မရှိသလောက်"), L("300 messages/s per API action, 3,000 with batching; high-throughput mode for much more", "API アクションごとに 300 件/秒、バッチで 3,000 件/秒。高スループットモードでさらに多く", "API action တစ်ခုကို message 300/s၊ batching နဲ့ 3,000၊ high-throughput mode နဲ့ အများကြီး ပိုရ")],
              [L("Name", "名前", "Name"), L("Any name", "任意", "ကြိုက်တဲ့ name"), L("Must end with `.fifo`", "末尾は `.fifo` 必須", "`.fifo` နဲ့ ဆုံးရမယ်")],
            ] },
          { type: 'list', items: [
            L("**Visibility timeout** (default 30 seconds, max 12 hours): after a consumer receives a message, it becomes invisible to others. If the consumer does not delete it before the timeout, it reappears and is processed again. Set it longer than your processing time to stop duplicate processing.",
              "**可視性タイムアウト**（デフォルト 30 秒、最大 12 時間）：コンシューマーがメッセージを受信すると、他からは見えなくなります。タイムアウト前に削除しないと再表示され、再処理されます。重複処理を防ぐには処理時間より長く設定します。",
              "**Visibility timeout** (default ၃၀ စက္ကန့်၊ အများဆုံး ၁၂ နာရီ)- consumer က message လက်ခံပြီးတာနဲ့ တခြားသူတွေ မမြင်ရတော့ဘူး။ Timeout မပြည့်ခင် delete မလုပ်ရင် ပြန်ပေါ်လာပြီး ထပ်ခါ process ဖြစ်တယ်။ Duplicate process မဖြစ်အောင် processing time ထက် ပိုရှည်အောင် ထားပါ။"),
            L("**Long polling** (`ReceiveMessageWaitTimeSeconds` 1–20): the receive call waits up to 20 seconds for a message instead of returning empty immediately. Fewer empty responses means lower cost and lower latency.",
              "**ロングポーリング**（`ReceiveMessageWaitTimeSeconds` 1〜20）：受信呼び出しがすぐに空で返るのではなく、最大 20 秒メッセージを待ちます。空の応答が減るため、コストとレイテンシーが下がります。",
              "**Long polling** (`ReceiveMessageWaitTimeSeconds` 1–20)- receive call က ချက်ချင်း ဗလာနဲ့ ပြန်မလာဘဲ message ကို စက္ကန့် ၂၀ အထိ စောင့်တယ်။ ဗလာ response နည်းလေ cost နဲ့ latency နည်းလေပါ။"),
            L("**Dead-letter queue (DLQ)**: a redrive policy with `maxReceiveCount` moves a message that keeps failing (a poison message) into a separate queue for inspection. A FIFO queue needs a FIFO DLQ. Later you can redrive messages back to the source queue.",
              "**デッドレターキュー（DLQ）**：`maxReceiveCount` を持つリドライブポリシーにより、失敗し続けるメッセージ（ポイズンメッセージ）を調査用の別キューに移します。FIFO キューには FIFO の DLQ が必要です。後でメッセージを元のキューにリドライブできます。",
              "**Dead-letter queue (DLQ)**- `maxReceiveCount` ပါတဲ့ redrive policy က အကြိမ်ကြိမ် fail ဖြစ်နေတဲ့ message (poison message) ကို စစ်ဆေးဖို့ သီးသန့် queue ဆီ ရွှေ့ပေးတယ်။ FIFO queue အတွက် FIFO DLQ လိုတယ်။ နောက်မှ message တွေကို source queue ဆီ redrive ပြန်လုပ်လို့ရတယ်။"),
            L("**Scaling consumers**: an Auto Scaling group can scale on the queue backlog per instance (`ApproximateNumberOfMessagesVisible` divided by instance count), and Lambda scales its pollers automatically.",
              "**コンシューマーのスケーリング**：Auto Scaling グループはインスタンスあたりのキューのバックログ（`ApproximateNumberOfMessagesVisible` をインスタンス数で割った値）でスケールでき、Lambda はポーラーを自動でスケールします。",
              "**Consumer scale လုပ်ခြင်း**- Auto Scaling group က instance တစ်လုံးချင်းစီရဲ့ queue backlog (`ApproximateNumberOfMessagesVisible` ကို instance အရေအတွက်နဲ့ စား) အလိုက် scale လုပ်နိုင်ပြီး Lambda က poller တွေကို အလိုအလျောက် scale လုပ်တယ်။"),
          ] },
          { type: 'code', lang: 'bash', code: `# Standard queue with 2-minute visibility timeout and long polling
aws sqs create-queue --queue-name orders \\
  --attributes VisibilityTimeout=120,ReceiveMessageWaitTimeSeconds=20

# FIFO queue: name must end in .fifo
aws sqs create-queue --queue-name payments.fifo \\
  --attributes FifoQueue=true,ContentBasedDeduplication=true

Q=https://sqs.ap-northeast-1.amazonaws.com/111122223333/orders

# Producer: send a message
aws sqs send-message --queue-url "$Q" \\
  --message-body '{"orderId":"A-1001","total":4200}'

# Consumer: long poll for up to 10 messages
aws sqs receive-message --queue-url "$Q" \\
  --max-number-of-messages 10 --wait-time-seconds 20

# Consumer: delete after successful processing
aws sqs delete-message --queue-url "$Q" --receipt-handle "<handle>"`,
            caption: L("Create queues, send, receive with long polling and delete", "キューの作成、送信、ロングポーリングでの受信、削除", "Queue ဆောက်၊ ပို့၊ long polling နဲ့ လက်ခံ၊ ပြီးရင် delete") },
          { type: 'code', lang: 'yaml', code: `Resources:
  OrdersDLQ:
    Type: AWS::SQS::Queue
    Properties:
      MessageRetentionPeriod: 1209600   # 14 days to investigate
  OrdersQueue:
    Type: AWS::SQS::Queue
    Properties:
      VisibilityTimeout: 120
      ReceiveMessageWaitTimeSeconds: 20
      RedrivePolicy:
        deadLetterTargetArn: !GetAtt OrdersDLQ.Arn
        maxReceiveCount: 5              # 5 failures -> DLQ`,
            caption: L("CloudFormation: a queue with a dead-letter queue", "CloudFormation：デッドレターキュー付きのキュー", "CloudFormation- dead-letter queue ပါတဲ့ queue") },
          { type: 'callout', tone: 'memory', text: L(
            "Three SQS knobs, three problems: messages processed **twice** → raise the **visibility timeout**; too many **empty receives** → turn on **long polling**; one message **fails forever** → add a **DLQ**.",
            "SQS の 3 つの設定と 3 つの問題：メッセージが **2 回** 処理される → **可視性タイムアウト** を延ばす。**空の受信** が多すぎる → **ロングポーリング** を有効化。1 つのメッセージが **永遠に失敗** する → **DLQ** を追加。",
            "SQS ခလုတ် သုံးခု၊ ပြဿနာ သုံးခု- message က **နှစ်ခါ** process ဖြစ် → **visibility timeout** တိုး၊ **ဗလာ receive** များလွန်း → **long polling** ဖွင့်၊ message တစ်ခုက **အမြဲ fail** → **DLQ** ထည့်။") },
        ],
      },
      {
        id: "fan-out-events-streams",
        title: L("SNS fan-out, EventBridge, Step Functions and Kinesis", "SNS ファンアウト、EventBridge、Step Functions、Kinesis", "SNS fan-out၊ EventBridge၊ Step Functions နဲ့ Kinesis"),
        blocks: [
          { type: 'p', text: L(
            "SQS delivers each message to **one** consumer. When one event must reach **many** independent systems, use **SNS fan-out**: publish once to an SNS topic and subscribe several SQS queues. SNS pushes a copy to every queue, and each queue buffers for its own consumer, so a slow analytics job never delays billing. Subscription filter policies let each queue receive only the messages it cares about.",
            "SQS は各メッセージを **1 つ** のコンシューマーに届けます。1 つのイベントを **多数** の独立したシステムに届ける必要がある場合は **SNS ファンアウト** を使います。SNS トピックに 1 回発行し、複数の SQS キューをサブスクライブさせます。SNS はすべてのキューにコピーをプッシュし、各キューがそれぞれのコンシューマーのためにバッファするので、遅い分析ジョブが請求処理を遅らせることはありません。サブスクリプションフィルターポリシーで、各キューが必要なメッセージだけを受け取れます。",
            "SQS က message တစ်ခုစီကို consumer **တစ်ခု** ဆီပဲ ပို့ပေးတယ်။ Event တစ်ခုက သီးခြား system **အများ** ဆီ ရောက်ရမယ်ဆိုရင် **SNS fan-out** သုံးပါ- SNS topic ကို တစ်ခါ publish လုပ်ပြီး SQS queue အများကို subscribe လုပ်ထား။ SNS က queue တိုင်းဆီ copy push လုပ်ပေးပြီး queue တစ်ခုစီက ကိုယ့် consumer အတွက် buffer လုပ်ထားလို့ နှေးတဲ့ analytics job က billing ကို မနှောင့်နှေးစေဘူး။ Subscription filter policy နဲ့ queue တစ်ခုစီက ကိုယ်လိုတဲ့ message ကိုပဲ လက်ခံနိုင်တယ်။") },
          { type: 'diagram', text: `                        +--> SQS orders-billing   --> Billing Lambda
                        |
 Order service          |
 --publish--> SNS topic +--> SQS orders-shipping  --> Shipping (ECS)
              "orders"  |
                        |
                        +--> SQS orders-analytics --> Firehose -> S3`,
            caption: L("SNS to SQS fan-out: one publish, three independent buffered consumers", "SNS から SQS へのファンアウト：1 回の発行で 3 つの独立したバッファ付きコンシューマー", "SNS ကနေ SQS fan-out- publish တစ်ခါနဲ့ သီးခြား buffer ပါတဲ့ consumer သုံးခု") },
          { type: 'table',
            head: [L("Service", "サービス", "Service"), L("Model", "モデル", "Model"), L("Best for", "最適な用途", "အသင့်တော်ဆုံး"), L("Key exam facts", "試験の重要ポイント", "Exam အဓိကအချက်")],
            rows: [
              [L("SQS", "SQS", "SQS"), L("Queue, pull, one consumer per message", "キュー、プル型、メッセージごとに 1 コンシューマー", "Queue၊ pull၊ message တစ်ခုကို consumer တစ်ခု"), L("Buffering work, absorbing spikes, decoupling tiers", "作業のバッファ、急増の吸収、層の疎結合化", "အလုပ်ကို buffer လုပ်၊ traffic တက်တာကို စုပ်ယူ၊ tier တွေ decouple"), L("Visibility timeout, DLQ, FIFO, max 14 days retention, no replay after delete", "可視性タイムアウト、DLQ、FIFO、最大 14 日保持、削除後のリプレイ不可", "Visibility timeout၊ DLQ၊ FIFO၊ retention အများဆုံး ၁၄ ရက်၊ delete ပြီးရင် replay မရ")],
              [L("SNS", "SNS", "SNS"), L("Pub/sub, push to many subscribers", "Pub/Sub、多数の購読者へプッシュ", "Pub/sub၊ subscriber အများဆီ push"), L("Fan-out, notifications (email, SMS, HTTP, Lambda, SQS)", "ファンアウト、通知（メール、SMS、HTTP、Lambda、SQS）", "Fan-out၊ notification (email၊ SMS၊ HTTP၊ Lambda၊ SQS)"), L("No persistence for offline subscribers; pair with SQS for durability; FIFO topics exist", "オフラインの購読者向けの永続化なし。耐久性には SQS と組み合わせる。FIFO トピックあり", "Offline subscriber အတွက် မသိမ်းထားဘူး၊ durability အတွက် SQS နဲ့ တွဲ၊ FIFO topic လည်း ရှိ")],
              [L("EventBridge", "EventBridge", "EventBridge"), L("Event bus with content-based rules", "コンテンツベースのルールを持つイベントバス", "Content-based rule ပါတဲ့ event bus"), L("Reacting to AWS service events, SaaS partner events, cross-account routing, schedules", "AWS サービスのイベント、SaaS パートナーのイベント、クロスアカウントのルーティング、スケジュールへの対応", "AWS service event၊ SaaS partner event၊ cross-account routing၊ schedule တွေကို တုံ့ပြန်ခြင်း"), L("Rich JSON pattern filtering, archive and replay, Pipes, Scheduler, schema registry", "豊富な JSON パターンフィルタリング、アーカイブとリプレイ、Pipes、Scheduler、スキーマレジストリ", "JSON pattern filter အပြည့်အစုံ၊ archive နဲ့ replay၊ Pipes၊ Scheduler၊ schema registry")],
              [L("Kinesis Data Streams", "Kinesis Data Streams", "Kinesis Data Streams"), L("Ordered stream of records in shards", "シャード内の順序付きレコードストリーム", "Shard ထဲက order စီထားတဲ့ record stream"), L("Real-time analytics, clickstreams, IoT, multiple consumers reading the same data", "リアルタイム分析、クリックストリーム、IoT、同じデータを読む複数コンシューマー", "Real-time analytics၊ clickstream၊ IoT၊ data အတူတူကို consumer အများ ဖတ်ခြင်း"), L("Order per partition key, retention 24 hours up to 365 days, replay, on-demand or provisioned mode", "パーティションキーごとの順序、保持 24 時間〜最大 365 日、リプレイ、オンデマンドまたはプロビジョンドモード", "Partition key အလိုက် order၊ retention ၂၄ နာရီကနေ ရက် ၃၆၅ အထိ၊ replay၊ on-demand သို့ provisioned mode")],
              [L("Amazon Data Firehose", "Amazon Data Firehose", "Amazon Data Firehose"), L("Fully managed delivery stream", "フルマネージドの配信ストリーム", "Fully managed delivery stream"), L("Loading streaming data into S3, Redshift, OpenSearch, Splunk", "ストリーミングデータを S3、Redshift、OpenSearch、Splunk に取り込む", "Streaming data ကို S3၊ Redshift၊ OpenSearch၊ Splunk ထဲ ထည့်ခြင်း"), L("Near real time (buffering), optional Lambda transform, no replay, no shards to manage", "ほぼリアルタイム（バッファリング）、任意の Lambda 変換、リプレイなし、シャード管理不要", "Near real time (buffering)၊ Lambda transform ထည့်လို့ရ၊ replay မရ၊ shard စီမံစရာမလို")],
            ] },
          { type: 'p', text: L(
            "**Step Functions** orchestrates multi-step workflows as a state machine with retries, error catching, parallel branches and wait states, so you do not write coordination code in Lambda. **Standard workflows** run up to one year with exactly-once execution, which suits order processing or human approval. **Express workflows** run up to five minutes at very high volume, which suits event processing.",
            "**Step Functions** は、リトライ、エラー捕捉、並列分岐、待機状態を備えたステートマシンとして複数ステップのワークフローをオーケストレーションするため、Lambda に調整用のコードを書く必要がありません。**Standard ワークフロー** は最大 1 年実行でき、1 回限りの実行のため注文処理や人による承認に向いています。**Express ワークフロー** は最大 5 分で非常に大量の処理に向き、イベント処理に適しています。",
            "**Step Functions** က retry၊ error catch၊ parallel branch၊ wait state တွေပါတဲ့ state machine အဖြစ် multi-step workflow ကို orchestrate လုပ်ပေးလို့ Lambda ထဲမှာ coordination code ရေးစရာ မလိုဘူး။ **Standard workflow** က တစ်နှစ်အထိ run နိုင်ပြီး exactly-once execution ဖြစ်လို့ order processing သို့ လူက approve လုပ်ရတာမျိုးနဲ့ ကိုက်တယ်။ **Express workflow** က ၅ မိနစ်အထိ volume အရမ်းများများ run နိုင်လို့ event processing နဲ့ ကိုက်တယ်။") },
          { type: 'callout', tone: 'exam', text: L(
            "Keyword map: one consumer and buffering → **SQS**; many subscribers → **SNS + SQS**; react to an AWS event such as an EC2 state change or a SaaS event → **EventBridge**; ordered real-time stream with replay → **Kinesis Data Streams**; just load streaming data into S3 or Redshift with least effort → **Firehose**; multi-step workflow with retries → **Step Functions**.",
            "キーワード対応表：単一コンシューマーとバッファ → **SQS**、多数の購読者 → **SNS + SQS**、EC2 の状態変化などの AWS イベントや SaaS イベントに反応 → **EventBridge**、リプレイ可能な順序付きリアルタイムストリーム → **Kinesis Data Streams**、ストリーミングデータを最小の手間で S3 や Redshift に取り込むだけ → **Firehose**、リトライ付きの複数ステップのワークフロー → **Step Functions**。",
            "Keyword map- consumer တစ်ခုနဲ့ buffering → **SQS**၊ subscriber အများ → **SNS + SQS**၊ EC2 state change လို AWS event သို့ SaaS event ကို တုံ့ပြန် → **EventBridge**၊ replay ရတဲ့ order စီ real-time stream → **Kinesis Data Streams**၊ streaming data ကို အလွယ်ဆုံး S3 သို့ Redshift ထဲ ထည့်ရုံ → **Firehose**၊ retry ပါတဲ့ multi-step workflow → **Step Functions**။") },
        ],
      },
      {
        id: "caching-layers",
        title: L("Caching layers: CloudFront, ElastiCache, DAX and API Gateway", "キャッシュ層：CloudFront、ElastiCache、DAX、API Gateway", "Caching layer များ- CloudFront၊ ElastiCache၊ DAX နဲ့ API Gateway"),
        blocks: [
          { type: 'p', text: L(
            "A cache stores the answer to a question so the next person does not have to ask the expensive source again, like a convenience store keeping popular onigiri at the front instead of in the warehouse. The closer the cache is to the user, the faster the response and the less load on everything behind it. On the exam, first decide **which layer** is slow, then pick the cache for that layer.",
            "キャッシュは問いへの答えを保存し、次の人が高コストな元のデータに再度問い合わせなくて済むようにします。コンビニが人気のおにぎりを倉庫ではなく店頭に置いておくようなものです。キャッシュがユーザーに近いほど応答は速くなり、背後のすべての負荷が減ります。試験ではまず **どの層** が遅いかを判断し、その層に合ったキャッシュを選びます。",
            "Cache ဆိုတာ မေးခွန်းရဲ့ အဖြေကို သိမ်းထားလို့ နောက်လူက စျေးကြီးတဲ့ source ကို ထပ်မေးစရာ မလိုတော့တာပါ၊ konbini က လူကြိုက်များတဲ့ onigiri ကို ဂိုဒေါင်ထဲမထားဘဲ ဆိုင်ရှေ့မှာ ထားသလိုပဲ။ Cache က user နဲ့ နီးလေ response မြန်လေ၊ နောက်ကွယ်က အရာအားလုံးရဲ့ load နည်းလေပါ။ Exam မှာ **ဘယ် layer** နှေးနေလဲ အရင်ဆုံးဖြတ်ပြီး အဲဒီ layer အတွက် cache ကို ရွေးပါ။") },
          { type: 'table',
            head: [L("Cache", "キャッシュ", "Cache"), L("Layer", "層", "Layer"), L("Use when", "使う場面", "ဘယ်အချိန်သုံးမလဲ")],
            rows: [
              [L("CloudFront", "CloudFront", "CloudFront"), L("Edge, closest to users worldwide", "エッジ。世界中のユーザーに最も近い", "Edge၊ ကမ္ဘာအနှံ့ user တွေနဲ့ အနီးဆုံး"), L("Static assets, images, video, cacheable API responses; also reduces data transfer out cost from the origin", "静的アセット、画像、動画、キャッシュ可能な API レスポンス。オリジンからのデータ転送コストも削減", "Static asset၊ ပုံ၊ video၊ cache လုပ်လို့ရတဲ့ API response၊ origin ကနေ data transfer out cost လည်း လျော့စေ")],
              [L("API Gateway cache", "API Gateway キャッシュ", "API Gateway cache"), L("API stage (REST APIs)", "API ステージ（REST API）", "API stage (REST API)"), L("Repeated identical GET requests; default TTL 300 seconds, max 3600 seconds", "同一の GET リクエストの繰り返し。デフォルト TTL 300 秒、最大 3600 秒", "တူညီတဲ့ GET request အထပ်ထပ်၊ default TTL ၃၀၀ စက္ကန့်၊ အများဆုံး ၃၆၀၀ စက္ကန့်")],
              [L("ElastiCache (Valkey / Redis OSS / Memcached)", "ElastiCache（Valkey／Redis OSS／Memcached）", "ElastiCache (Valkey / Redis OSS / Memcached)"), L("In-memory, in front of a database or for sessions", "インメモリ。データベースの前段やセッション用", "In-memory၊ database ရှေ့မှာ သို့ session အတွက်"), L("Read-heavy RDS queries, session store, leaderboards; Valkey/Redis supports replication, Multi-AZ and persistence, Memcached is simple multi-threaded", "読み取り中心の RDS クエリ、セッションストア、ランキング。Valkey/Redis はレプリケーション・マルチ AZ・永続化に対応し、Memcached はシンプルなマルチスレッド", "Read များတဲ့ RDS query၊ session store၊ leaderboard၊ Valkey/Redis က replication၊ Multi-AZ၊ persistence ရ၊ Memcached က ရိုးရှင်းတဲ့ multi-threaded")],
              [L("DynamoDB Accelerator (DAX)", "DynamoDB Accelerator（DAX）", "DynamoDB Accelerator (DAX)"), L("In-memory, only in front of DynamoDB", "インメモリ。DynamoDB の前段専用", "In-memory၊ DynamoDB ရှေ့မှာပဲ"), L("Microsecond reads with an API-compatible client and minimal code change", "API 互換クライアントによるマイクロ秒単位の読み取り。コード変更は最小限", "API-compatible client နဲ့ microsecond read၊ code ပြင်ရတာ အနည်းဆုံး")],
            ] },
          { type: 'list', items: [
            L("**Lazy loading (cache-aside)**: read the cache, on a miss read the database and write the result into the cache. Only requested data is cached, but the first read is slow and data can be stale; use a TTL.",
              "**遅延読み込み（キャッシュアサイド）**：キャッシュを読み、ミスしたらデータベースを読んで結果をキャッシュに書き込みます。要求されたデータだけがキャッシュされますが、初回の読み取りは遅く、データが古くなる可能性があるため TTL を使います。",
              "**Lazy loading (cache-aside)**- cache ကို အရင်ဖတ်၊ miss ဖြစ်ရင် database ကိုဖတ်ပြီး ရလဒ်ကို cache ထဲ ရေး။ တောင်းတဲ့ data ပဲ cache ဖြစ်ပေမယ့် ပထမအကြိမ် ဖတ်တာ နှေးပြီး data ဟောင်းနိုင်လို့ TTL သုံးပါ။"),
            L("**Write-through**: every database write also updates the cache, so data is always fresh but you cache data nobody may read.",
              "**ライトスルー**：データベースへの書き込みのたびにキャッシュも更新するため常に新しいデータですが、誰も読まないデータまでキャッシュすることになります。",
              "**Write-through**- database ကို ရေးတိုင်း cache ကိုပါ update လုပ်လို့ data က အမြဲ အသစ်ဖြစ်ပေမယ့် ဘယ်သူမှ မဖတ်မယ့် data ကိုပါ cache လုပ်မိတယ်။"),
          ] },
          { type: 'callout', tone: 'memory', text: L(
            "Match cache to source: **D**ynamoDB → **D**AX; relational database or sessions → ElastiCache; global static content → CloudFront; repeated API calls → API Gateway cache. DAX only speaks DynamoDB.",
            "キャッシュと元データの対応：**D**ynamoDB → **D**AX、リレーショナルデータベースやセッション → ElastiCache、グローバルな静的コンテンツ → CloudFront、繰り返しの API 呼び出し → API Gateway キャッシュ。DAX は DynamoDB 専用です。",
            "Cache နဲ့ source ကို တွဲမှတ်ပါ- **D**ynamoDB → **D**AX၊ relational database သို့ session → ElastiCache၊ global static content → CloudFront၊ ထပ်ခါထပ်ခါ API call → API Gateway cache။ DAX က DynamoDB နဲ့ပဲ အလုပ်လုပ်တယ်။") },
        ],
      },
      {
        id: "serverless-static-security",
        title: L("Reference architectures 2 and 3, and securing any architecture", "リファレンスアーキテクチャ 2・3 と、あらゆる構成のセキュリティ確保", "Reference architecture 2 နဲ့ 3၊ architecture တိုင်းကို လုံခြုံအောင်လုပ်ခြင်း"),
        blocks: [
          { type: 'p', text: L(
            "**Serverless API**: API Gateway receives HTTPS requests, invokes Lambda, and Lambda reads and writes DynamoDB. There are no servers to patch, it scales to zero, every component is multi-AZ by default, and you pay per request. This is the usual answer for LEAST operational overhead with unpredictable traffic. **Static website**: files in a private S3 bucket served by CloudFront using **Origin Access Control (OAC)**, so users cannot bypass CloudFront. OAC replaces the legacy OAI and supports SSE-KMS encrypted objects. Add an ACM certificate (issued in us-east-1 for CloudFront) and Route 53 alias records.",
            "**サーバーレス API**：API Gateway が HTTPS リクエストを受けて Lambda を呼び出し、Lambda が DynamoDB を読み書きします。パッチを当てるサーバーはなく、ゼロまでスケールし、すべての構成要素がデフォルトでマルチ AZ で、リクエスト単位で支払います。予測できないトラフィックで LEAST operational overhead を求める場合の定番の答えです。**静的 Web サイト**：プライベートな S3 バケットのファイルを、**オリジンアクセスコントロール（OAC）** を使って CloudFront が配信するため、ユーザーは CloudFront を迂回できません。OAC は従来の OAI の後継で、SSE-KMS で暗号化されたオブジェクトにも対応します。ACM 証明書（CloudFront 用は us-east-1 で発行）と Route 53 のエイリアスレコードを追加します。",
            "**Serverless API**- API Gateway က HTTPS request လက်ခံပြီး Lambda ကို invoke လုပ်၊ Lambda က DynamoDB ကို ဖတ်/ရေးတယ်။ Patch လုပ်ရမယ့် server မရှိ၊ သုညအထိ scale ဆင်း၊ component တိုင်းက default အနေနဲ့ multi-AZ ဖြစ်ပြီး request အလိုက်ပဲ ပေးရတယ်။ Traffic ကို ခန့်မှန်းမရပြီး LEAST operational overhead လိုရင် ဒါက ပုံမှန်အဖြေပါ။ **Static website**- private S3 bucket ထဲက file တွေကို **Origin Access Control (OAC)** သုံးပြီး CloudFront က serve လုပ်လို့ user တွေက CloudFront ကို ကျော်ပြီး မဝင်နိုင်ဘူး။ OAC က legacy OAI ကို အစားထိုးတာဖြစ်ပြီး SSE-KMS encrypt လုပ်ထားတဲ့ object တွေကိုပါ support လုပ်တယ်။ ACM certificate (CloudFront အတွက် us-east-1 မှာ ထုတ်ရ) နဲ့ Route 53 alias record ထည့်ပါ။") },
          { type: 'list', items: [
            L("**Private subnets**: put app servers and databases in private subnets; only load balancers and NAT gateways live in public subnets. Security groups should reference each other (DB SG allows 3306 only from the app SG).",
              "**プライベートサブネット**：アプリサーバーとデータベースはプライベートサブネットに置き、パブリックサブネットにはロードバランサーと NAT ゲートウェイだけを置きます。セキュリティグループは互いを参照させます（DB の SG はアプリの SG からの 3306 のみ許可）。",
              "**Private subnet**- app server နဲ့ database တွေကို private subnet မှာထား၊ public subnet မှာ load balancer နဲ့ NAT gateway ပဲ ထား။ Security group တွေက တစ်ခုနဲ့တစ်ခု reference လုပ်သင့်တယ် (DB SG က app SG ကနေ 3306 ကိုပဲ ခွင့်ပြု)။"),
            L("**VPC endpoints**: **gateway endpoints** for S3 and DynamoDB are free and added to route tables; **interface endpoints** (PrivateLink) create ENIs with private IPs for most other services and are billed per hour and per GB. Both keep traffic off the internet and avoid NAT charges.",
              "**VPC エンドポイント**：S3 と DynamoDB 用の **ゲートウェイエンドポイント** は無料でルートテーブルに追加します。**インターフェイスエンドポイント**（PrivateLink）は他の多くのサービス向けにプライベート IP を持つ ENI を作成し、時間単位と GB 単位で課金されます。どちらもトラフィックをインターネットに出さず、NAT の料金を回避します。",
              "**VPC endpoint**- S3 နဲ့ DynamoDB အတွက် **gateway endpoint** က အခမဲ့ဖြစ်ပြီး route table ထဲ ထည့်ရတယ်၊ **interface endpoint** (PrivateLink) က တခြား service အများစုအတွက် private IP ပါတဲ့ ENI ဆောက်ပေးပြီး နာရီနဲ့ GB အလိုက် ပိုက်ဆံကျတယ်။ နှစ်မျိုးလုံးက traffic ကို internet ပေါ် မထွက်စေဘဲ NAT charge ကို ရှောင်ပေးတယ်။"),
            L("**KMS**: encrypt EBS, RDS, S3 and DynamoDB at rest with KMS keys; customer managed keys give you control over the key policy, rotation and audit in CloudTrail.",
              "**KMS**：EBS、RDS、S3、DynamoDB を KMS キーで保存時に暗号化します。カスタマーマネージドキーなら、キーポリシー、ローテーション、CloudTrail での監査を自分で制御できます。",
              "**KMS**- EBS၊ RDS၊ S3၊ DynamoDB ကို KMS key နဲ့ at rest encrypt လုပ်၊ customer managed key ဆိုရင် key policy၊ rotation၊ CloudTrail audit ကို ကိုယ်တိုင် ထိန်းချုပ်နိုင်တယ်။"),
            L("**AWS WAF**: attach a web ACL to CloudFront, ALB, API Gateway or AppSync to block SQL injection, XSS, bad IPs and floods with rate-based rules. **Shield Standard** protects against common DDoS for free; **Shield Advanced** adds response team support and cost protection.",
              "**AWS WAF**：CloudFront、ALB、API Gateway、AppSync に Web ACL をアタッチし、SQL インジェクション、XSS、不正な IP、レートベースルールによる大量リクエストをブロックします。**Shield Standard** は一般的な DDoS を無料で防ぎ、**Shield Advanced** は対応チームの支援とコスト保護を追加します。",
              "**AWS WAF**- CloudFront၊ ALB၊ API Gateway၊ AppSync မှာ web ACL ချိတ်ပြီး SQL injection၊ XSS၊ IP ဆိုးတွေနဲ့ rate-based rule နဲ့ request အလျှံပယ်ကို block လုပ်။ **Shield Standard** က အဖြစ်များတဲ့ DDoS ကို အခမဲ့ကာကွယ်ပြီး **Shield Advanced** က response team support နဲ့ cost protection ထပ်ပေးတယ်။"),
            L("**Secrets Manager**: store database passwords and API keys with **built-in automatic rotation** (native for RDS, Aurora, Redshift, DocumentDB). Parameter Store SecureString is cheaper for config values but has no built-in rotation.",
              "**Secrets Manager**：データベースのパスワードや API キーを **組み込みの自動ローテーション** 付きで保存します（RDS、Aurora、Redshift、DocumentDB はネイティブ対応）。Parameter Store の SecureString は設定値向けで安価ですが、組み込みのローテーションはありません。",
              "**Secrets Manager**- database password နဲ့ API key တွေကို **built-in automatic rotation** နဲ့ သိမ်း (RDS၊ Aurora၊ Redshift၊ DocumentDB အတွက် native)။ Parameter Store SecureString က config value အတွက် စျေးသက်သာပေမယ့် built-in rotation မပါဘူး။"),
          ] },
          { type: 'callout', tone: 'exam', text: L(
            "Phrases to recognize: users must not access S3 directly → **CloudFront OAC + bucket policy**; credentials rotated automatically → **Secrets Manager**; private instances need S3 without internet → **S3 gateway endpoint**; block SQL injection at the edge → **WAF on CloudFront**.",
            "見分けるべきフレーズ：ユーザーが S3 に直接アクセスしてはならない → **CloudFront OAC + バケットポリシー**、認証情報を自動ローテーション → **Secrets Manager**、プライベートインスタンスがインターネットなしで S3 を使う → **S3 ゲートウェイエンドポイント**、エッジで SQL インジェクションをブロック → **CloudFront の WAF**。",
            "မှတ်ထားရမယ့် စကားစု- user တွေ S3 ကို တိုက်ရိုက် မဝင်ရ → **CloudFront OAC + bucket policy**၊ credential ကို အလိုအလျောက် rotate → **Secrets Manager**၊ private instance တွေ internet မပါဘဲ S3 လို → **S3 gateway endpoint**၊ edge မှာ SQL injection ကို block → **CloudFront ပေါ်က WAF**။") },
        ],
      },
      {
        id: "cost-performance",
        title: L("Cost-optimized and high-performing architectures", "コスト最適化と高性能のアーキテクチャ", "Cost သက်သာပြီး performance မြင့်တဲ့ architecture များ"),
        blocks: [
          { type: 'p', text: L(
            "Cost questions reward matching the pricing model to the workload shape. Steady 24/7 load is predictable, so commit to it; interruptible batch work is flexible, so use spare capacity; unknown access patterns are uncertain, so let AWS move data automatically.",
            "コストの問題では、料金モデルをワークロードの形に合わせることが評価されます。24 時間 365 日の安定した負荷は予測可能なのでコミットし、中断可能なバッチ処理は柔軟なので余剰キャパシティを使い、アクセスパターンが不明なら AWS に自動でデータを移動させます。",
            "Cost မေးခွန်းတွေမှာ pricing model ကို workload ပုံသဏ္ဌာန်နဲ့ ကိုက်အောင် ရွေးတာကို အမှတ်ပေးတယ်။ 24/7 တည်ငြိမ်တဲ့ load က ခန့်မှန်းလို့ရလို့ commit လုပ်ပါ၊ ကြားဖြတ်ရပ်လို့ရတဲ့ batch အလုပ်က flexible ဖြစ်လို့ အပို capacity ကို သုံးပါ၊ access pattern မသိရင် AWS ကို data အလိုအလျောက် ရွှေ့ခိုင်းပါ။") },
          { type: 'list', items: [
            L("**Right-size first** with Compute Optimizer and CloudWatch metrics; a smaller or Graviton instance is the cheapest saving of all.",
              "**まず適正サイズ化** を Compute Optimizer と CloudWatch メトリクスで行います。小さいインスタンスや Graviton インスタンスへの変更が最も手軽な節約です。",
              "**အရင်ဆုံး right-size လုပ်ပါ**- Compute Optimizer နဲ့ CloudWatch metric သုံး၊ instance သေးတာ သို့ Graviton ကို ပြောင်းတာက အလွယ်ဆုံး ချွေတာနည်းပါ။"),
            L("**Spot Instances** (up to 90% off, two-minute interruption notice) for stateless web fleets in mixed ASGs, batch, CI and big data. Never for a single critical database.",
              "**スポットインスタンス**（最大 90% 割引、2 分前の中断通知）は、混合 ASG のステートレスな Web 群、バッチ、CI、ビッグデータに使います。単一の重要なデータベースには使いません。",
              "**Spot Instance** (90% အထိ လျှော့၊ interruption မဖြစ်ခင် ၂ မိနစ် သတိပေး) ကို mixed ASG ထဲက stateless web fleet၊ batch၊ CI၊ big data အတွက် သုံးပါ။ အရေးကြီးတဲ့ database တစ်လုံးတည်းအတွက် ဘယ်တော့မှ မသုံးနဲ့။"),
            L("**Savings Plans** (1 or 3 years): Compute Savings Plans cover EC2, Fargate and Lambda flexibly; EC2 Instance Savings Plans give a deeper discount for one instance family in one Region. Reserved Instances still matter for RDS, ElastiCache and other databases.",
              "**Savings Plans**（1 年または 3 年）：Compute Savings Plans は EC2、Fargate、Lambda を柔軟にカバーし、EC2 Instance Savings Plans は 1 つのリージョンの 1 つのインスタンスファミリーに対してより大きな割引を提供します。RDS、ElastiCache などのデータベースには引き続きリザーブドインスタンスが重要です。",
              "**Savings Plans** (၁ နှစ် သို့ ၃ နှစ်)- Compute Savings Plans က EC2၊ Fargate၊ Lambda ကို flexible ဖုံးပေးပြီး EC2 Instance Savings Plans က Region တစ်ခုထဲက instance family တစ်ခုအတွက် discount ပိုများပေးတယ်။ RDS၊ ElastiCache စတဲ့ database တွေအတွက်တော့ Reserved Instance က အရေးကြီးနေတုန်းပဲ။"),
            L("**S3 storage classes**: lifecycle rules to Standard-IA, Glacier Instant Retrieval, Flexible Retrieval or Deep Archive for known patterns; **Intelligent-Tiering** for unknown or changing patterns (small monitoring fee per object, no retrieval fees).",
              "**S3 ストレージクラス**：パターンが分かっていればライフサイクルルールで Standard-IA、Glacier Instant Retrieval、Flexible Retrieval、Deep Archive へ移行し、不明または変化するパターンには **Intelligent-Tiering** を使います（オブジェクトごとに少額の監視料金、取り出し料金なし）。",
              "**S3 storage class**- pattern သိရင် lifecycle rule နဲ့ Standard-IA၊ Glacier Instant Retrieval၊ Flexible Retrieval၊ Deep Archive ဆီ ရွှေ့၊ pattern မသိရင် သို့ ပြောင်းလဲနေရင် **Intelligent-Tiering** သုံး (object တစ်ခုစီအတွက် monitoring fee နည်းနည်း၊ retrieval fee မရှိ)။"),
            L("**NAT gateway and data transfer**: NAT gateways bill per hour and per GB processed, so send S3 and DynamoDB traffic through gateway endpoints. Inbound data is free, cross-AZ and internet egress are charged, and CloudFront often lowers egress cost compared with serving directly from the origin.",
              "**NAT ゲートウェイとデータ転送**：NAT ゲートウェイは時間単位と処理 GB 単位で課金されるため、S3 と DynamoDB のトラフィックはゲートウェイエンドポイント経由にします。受信データは無料で、AZ 間とインターネットへの送信は課金され、CloudFront はオリジンから直接配信するより送信コストを下げることがよくあります。",
              "**NAT gateway နဲ့ data transfer**- NAT gateway က နာရီနဲ့ process လုပ်တဲ့ GB အလိုက် ပိုက်ဆံကျလို့ S3 နဲ့ DynamoDB traffic ကို gateway endpoint ကနေ ပို့ပါ။ ဝင်လာတဲ့ data က အခမဲ့၊ cross-AZ နဲ့ internet ဆီ ထွက်တာက ပိုက်ဆံကျပြီး origin ကနေ တိုက်ရိုက် serve တာထက် CloudFront က egress cost ကို မကြာခဏ လျော့ပေးတယ်။"),
          ] },
          { type: 'table',
            head: [L("Performance need", "パフォーマンス要件", "Performance လိုအပ်ချက်"), L("Answer", "答え", "အဖြေ"), L("Why", "理由", "ဘာကြောင့်")],
            rows: [
              [L("Read-heavy relational database", "読み取り中心のリレーショナル DB", "Read များတဲ့ relational database"), L("RDS or Aurora read replicas (Aurora up to 15, one reader endpoint)", "RDS または Aurora のリードレプリカ（Aurora は最大 15、単一のリーダーエンドポイント）", "RDS သို့ Aurora read replica (Aurora က ၁၅ ခုအထိ၊ reader endpoint တစ်ခု)"), L("Offloads SELECT queries; asynchronous so slight lag", "SELECT クエリをオフロード。非同期のためわずかな遅延あり", "SELECT query တွေကို ခွဲယူပေး၊ asynchronous ဖြစ်လို့ နည်းနည်း နောက်ကျနိုင်")],
              [L("Global TCP/UDP app, static IPs, fast Regional failover", "グローバルな TCP/UDP アプリ、固定 IP、高速なリージョンフェイルオーバー", "Global TCP/UDP app၊ static IP၊ Region failover မြန်မြန်"), L("AWS Global Accelerator", "AWS Global Accelerator", "AWS Global Accelerator"), L("Two anycast static IPs, traffic rides the AWS backbone; no caching", "2 つのエニーキャスト固定 IP、トラフィックは AWS バックボーンを通る。キャッシュなし", "Anycast static IP နှစ်ခု၊ traffic က AWS backbone ပေါ်ကနေ သွား၊ caching မရှိ")],
              [L("Fast uploads to one S3 bucket from far away", "遠方から 1 つの S3 バケットへの高速アップロード", "အဝေးကနေ S3 bucket တစ်ခုဆီ upload မြန်မြန်"), L("S3 Transfer Acceleration (plus multipart upload)", "S3 Transfer Acceleration（とマルチパートアップロード）", "S3 Transfer Acceleration (multipart upload နဲ့တွဲ)"), L("Clients upload to the nearest edge location, then AWS backbone to the bucket", "クライアントは最寄りのエッジロケーションにアップロードし、AWS バックボーン経由でバケットへ", "Client က အနီးဆုံး edge location ဆီ upload လုပ်ပြီး AWS backbone ကနေ bucket ဆီ")],
              [L("General-purpose block storage", "汎用ブロックストレージ", "General-purpose block storage"), L("EBS gp3", "EBS gp3", "EBS gp3"), L("Baseline 3,000 IOPS and 125 MiB/s regardless of size; provision more IOPS and throughput independently; cheaper than gp2", "サイズに関係なく 3,000 IOPS と 125 MiB/s のベースライン。IOPS とスループットを独立して追加可能。gp2 より安い", "Size မရွေး baseline 3,000 IOPS နဲ့ 125 MiB/s၊ IOPS နဲ့ throughput ကို သီးခြား ထပ်ထည့်လို့ရ၊ gp2 ထက် စျေးသက်သာ")],
              [L("Mission-critical database needing very high, consistent IOPS", "非常に高く安定した IOPS が必要なミッションクリティカルな DB", "IOPS အရမ်းမြင့်ပြီး တည်ငြိမ်ဖို့ လိုတဲ့ mission-critical database"), L("EBS io2 Block Express", "EBS io2 Block Express", "EBS io2 Block Express"), L("Highest IOPS, sub-millisecond latency, 99.999% durability, Multi-Attach", "最高の IOPS、ミリ秒未満のレイテンシー、99.999% の耐久性、Multi-Attach", "IOPS အမြင့်ဆုံး၊ millisecond အောက် latency၊ 99.999% durability၊ Multi-Attach")],
            ] },
          { type: 'callout', tone: 'exam', text: L(
            "CloudFront vs Global Accelerator is a favorite trap. HTTP content that can be cached → **CloudFront**. Non-HTTP (gaming over UDP, IoT over MQTT), static IP allow-listing or deterministic fast failover between Regions → **Global Accelerator**.",
            "CloudFront と Global Accelerator は定番の罠です。キャッシュ可能な HTTP コンテンツ → **CloudFront**。HTTP 以外（UDP のゲーム、MQTT の IoT）、固定 IP の許可リスト、リージョン間の確実で高速なフェイルオーバー → **Global Accelerator**。",
            "CloudFront နဲ့ Global Accelerator က လူကြိုက်များတဲ့ ထောင်ချောက်ပါ။ Cache လုပ်လို့ရတဲ့ HTTP content → **CloudFront**။ HTTP မဟုတ်တာ (UDP game၊ MQTT IoT)၊ static IP allow-list ဒါမှမဟုတ် Region တွေကြား သေချာမြန်ဆန်တဲ့ failover → **Global Accelerator**။") },
          { type: 'callout', tone: 'tip', text: L(
            "Before the exam, practice one sentence per pattern: when I see X, I think Y because Z. If you can say why the runner-up answer is wrong, you truly understand the pattern.",
            "試験前に、パターンごとに 1 文で練習しましょう：X を見たら Y を考える、なぜなら Z だから。次点の選択肢がなぜ誤りかを説明できれば、そのパターンを本当に理解しています。",
            "Exam မဖြေခင် pattern တစ်ခုစီအတွက် စာကြောင်းတစ်ကြောင်းနဲ့ လေ့ကျင့်ပါ- X ကိုမြင်ရင် Y ကို တွေးတယ်၊ ဘာလို့လဲဆိုတော့ Z ကြောင့်။ ဒုတိယအကောင်းဆုံး အဖြေက ဘာကြောင့် မှားလဲ ပြောနိုင်ရင် pattern ကို တကယ် နားလည်ပြီပါ။") },
        ],
      },
    ],
    summary: [
      L("Read the last sentence first: the constraint word (MOST cost-effective, LEAST operational overhead, highly available) breaks ties between technically valid answers.",
        "最後の文を先に読みます。制約語（MOST cost-effective、LEAST operational overhead、highly available）が、技術的に正しい選択肢の間の決め手になります。",
        "နောက်ဆုံးစာကြောင်းကို အရင်ဖတ်ပါ- constraint စကားလုံး (MOST cost-effective၊ LEAST operational overhead၊ highly available) က technically မှန်တဲ့ အဖြေတွေကြား ဆုံးဖြတ်ပေးတယ်။"),
      L("Multi-AZ gives high availability inside a Region; multi-Region is for Region failure, global latency or residency and costs much more.",
        "マルチ AZ はリージョン内の高可用性を提供し、マルチリージョンはリージョン障害、グローバルなレイテンシー、データ所在地のためのもので、はるかに高コストです。",
        "Multi-AZ က Region အတွင်း high availability ပေးတယ်၊ multi-Region က Region failure၊ global latency သို့ residency အတွက်ဖြစ်ပြီး စျေးအများကြီး ပိုကြီးတယ်။"),
      L("The stateless web tier is Route 53 → ALB → ASG across AZs in private subnets → RDS Multi-AZ, with sessions in ElastiCache or DynamoDB.",
        "ステートレスな Web 層は Route 53 → ALB → プライベートサブネットで AZ にまたがる ASG → RDS マルチ AZ で、セッションは ElastiCache または DynamoDB に置きます。",
        "Stateless web tier ဆိုတာ Route 53 → ALB → private subnet ထဲ AZ ဖြတ်ထားတဲ့ ASG → RDS Multi-AZ ဖြစ်ပြီး session ကို ElastiCache သို့ DynamoDB မှာ ထားတယ်။"),
      L("DR ladder by cost and speed: backup and restore → pilot light (data only) → warm standby (scaled-down full stack) → multi-site active/active.",
        "コストと速度による DR のはしご：バックアップと復元 → パイロットライト（データのみ）→ ウォームスタンバイ（縮小した完全スタック）→ マルチサイト アクティブ/アクティブ。",
        "Cost နဲ့ speed အလိုက် DR လှေကား- backup and restore → pilot light (data ပဲ) → warm standby (size လျှော့ထားတဲ့ stack အပြည့်) → multi-site active/active။"),
      L("SQS buffers work for one consumer: tune visibility timeout for duplicates, long polling for empty receives, DLQ for poison messages, FIFO for strict order.",
        "SQS は 1 つのコンシューマーのために作業をバッファします。重複には可視性タイムアウト、空の受信にはロングポーリング、ポイズンメッセージには DLQ、厳密な順序には FIFO を使います。",
        "SQS က consumer တစ်ခုအတွက် အလုပ်ကို buffer လုပ်ပေးတယ်- duplicate အတွက် visibility timeout၊ ဗလာ receive အတွက် long polling၊ poison message အတွက် DLQ၊ order တိကျဖို့ FIFO။"),
      L("SNS + SQS fans one event out to many consumers; EventBridge routes AWS and SaaS events by pattern; Step Functions orchestrates; Kinesis streams in order with replay.",
        "SNS + SQS は 1 つのイベントを多数のコンシューマーにファンアウトし、EventBridge は AWS と SaaS のイベントをパターンでルーティングし、Step Functions はオーケストレーションし、Kinesis はリプレイ可能な順序付きストリームを提供します。",
        "SNS + SQS က event တစ်ခုကို consumer အများဆီ fan-out လုပ်တယ်၊ EventBridge က AWS နဲ့ SaaS event တွေကို pattern နဲ့ route လုပ်တယ်၊ Step Functions က orchestrate လုပ်တယ်၊ Kinesis က replay ရတဲ့ order စီ stream ပေးတယ်။"),
      L("Cache at the slow layer: CloudFront at the edge, API Gateway cache for APIs, ElastiCache for relational reads and sessions, DAX for DynamoDB.",
        "遅い層でキャッシュします。エッジには CloudFront、API には API Gateway キャッシュ、リレーショナルの読み取りとセッションには ElastiCache、DynamoDB には DAX。",
        "နှေးတဲ့ layer မှာ cache လုပ်ပါ- edge မှာ CloudFront၊ API အတွက် API Gateway cache၊ relational read နဲ့ session အတွက် ElastiCache၊ DynamoDB အတွက် DAX။"),
      L("Secure with private subnets, gateway endpoints, KMS, WAF and Secrets Manager; save with right-sizing, Spot, Savings Plans, S3 tiers and fewer NAT bytes; speed up with read replicas, Global Accelerator, Transfer Acceleration and the right EBS type.",
        "プライベートサブネット、ゲートウェイエンドポイント、KMS、WAF、Secrets Manager で保護し、適正サイズ化、スポット、Savings Plans、S3 のストレージクラス、NAT 通過量の削減で節約し、リードレプリカ、Global Accelerator、Transfer Acceleration、適切な EBS タイプで高速化します。",
        "Private subnet၊ gateway endpoint၊ KMS၊ WAF၊ Secrets Manager နဲ့ လုံခြုံအောင်လုပ်၊ right-sizing၊ Spot၊ Savings Plans၊ S3 tier၊ NAT ဖြတ်တဲ့ byte လျှော့တာနဲ့ ချွေတာ၊ read replica၊ Global Accelerator၊ Transfer Acceleration၊ မှန်တဲ့ EBS type နဲ့ မြန်အောင်လုပ်။"),
    ],
  },
  questions: [
    {
      difficulty: 'EASY',
      exams: ['SAA-C03'],
      prompt: L("An e-commerce web tier sends orders directly to a processing tier. During flash sales the processing tier is overwhelmed and orders are lost. The company wants to decouple the tiers so that no orders are lost during spikes. Which service should be placed between the tiers?",
        "EC サイトの Web 層が注文を処理層に直接送っています。タイムセール中に処理層が過負荷になり、注文が失われます。急増時にも注文を失わないよう層を疎結合化したいと考えています。層の間に置くべきサービスはどれですか？",
        "E-commerce web tier က order တွေကို processing tier ဆီ တိုက်ရိုက်ပို့တယ်။ Flash sale အချိန်မှာ processing tier က မနိုင်တော့လို့ order တွေ ပျောက်ကုန်တယ်။ Traffic တက်ချိန်မှာ order မပျောက်အောင် tier တွေကို decouple လုပ်ချင်တယ်။ Tier တွေကြားမှာ ဘယ် service ကို ထားသင့်လဲ?"),
      options: ['Amazon SQS', 'Amazon Route 53', 'Amazon CloudFront', 'AWS Global Accelerator'],
      correct: [0],
      explanation: L("An SQS queue durably buffers orders so the processing tier can consume them at its own pace and scale on queue depth. Route 53, CloudFront and Global Accelerator route or accelerate requests but do not store work for later processing.",
        "SQS キューは注文を永続的にバッファするため、処理層は自分のペースで消費し、キューの深さに応じてスケールできます。Route 53、CloudFront、Global Accelerator はリクエストをルーティングまたは高速化しますが、後で処理するために作業を保存することはできません。",
        "SQS queue က order တွေကို durable အနေနဲ့ buffer လုပ်ထားလို့ processing tier က ကိုယ့်နှုန်းနဲ့ယူပြီး queue depth အလိုက် scale လုပ်နိုင်တယ်။ Route 53၊ CloudFront၊ Global Accelerator က request ကို route သို့ မြန်အောင်လုပ်ပေးပေမယ့် နောက်မှ process ဖို့ အလုပ်ကို မသိမ်းထားပေးဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['SAA-C03'],
      prompt: L("A marketing team needs to host a static website made of HTML, CSS and images for a global audience. The solution must be highly available, have low latency worldwide and be the MOST cost-effective. What should a solutions architect recommend?",
        "マーケティングチームは、HTML、CSS、画像からなる静的 Web サイトを世界中のユーザー向けにホストする必要があります。高可用性、世界中での低レイテンシー、そして MOST cost-effective であることが求められます。ソリューションアーキテクトは何を推奨すべきですか？",
        "Marketing team က HTML၊ CSS၊ ပုံတွေပါတဲ့ static website ကို ကမ္ဘာအနှံ့ user တွေအတွက် host လုပ်ဖို့ လိုတယ်။ Highly available ဖြစ်ရမယ်၊ ကမ္ဘာအနှံ့ latency နည်းရမယ်၊ MOST cost-effective ဖြစ်ရမယ်။ Solutions architect က ဘာကို recommend လုပ်သင့်လဲ?"),
      options: ['Two EC2 instances with Apache behind an Application Load Balancer', 'A private S3 bucket served through CloudFront with origin access control', 'An ECS Fargate service running Nginx in two Availability Zones', 'An Amazon Lightsail instance with a static IP address'],
      correct: [1],
      explanation: L("S3 is serverless, highly durable and cheap for static files, and CloudFront caches them at edge locations worldwide; OAC keeps the bucket private. EC2 or Fargate web servers work but add compute cost and patching for content that needs no server-side processing.",
        "S3 はサーバーレスで耐久性が高く静的ファイルに安価で、CloudFront が世界中のエッジロケーションでキャッシュします。OAC によりバケットはプライベートのままです。EC2 や Fargate の Web サーバーでも動作しますが、サーバー側の処理が不要なコンテンツにコンピューティングコストとパッチ適用の手間が増えます。",
        "S3 က serverless ဖြစ်ပြီး durability မြင့်ကာ static file အတွက် စျေးသက်သာတယ်၊ CloudFront က ကမ္ဘာအနှံ့ edge location တွေမှာ cache လုပ်ပေးတယ်၊ OAC က bucket ကို private ထားပေးတယ်။ EC2 သို့ Fargate web server တွေလည်း အလုပ်လုပ်ပေမယ့် server-side processing မလိုတဲ့ content အတွက် compute cost နဲ့ patching ပိုတက်စေတယ်။"),
    },
    {
      difficulty: 'EASY',
      exams: ['SAA-C03'],
      prompt: L("A company runs a non-critical internal reporting application. The business accepts an RTO of 24 hours and an RPO of 12 hours if the Region fails, and wants the lowest possible DR cost. Which disaster recovery strategy meets these requirements?",
        "ある会社は重要度の低い社内レポートアプリを運用しています。リージョン障害時には RTO 24 時間、RPO 12 時間を許容でき、DR コストを可能な限り抑えたいと考えています。要件を満たす災害対策戦略はどれですか？",
        "Company တစ်ခုက အရေးမကြီးတဲ့ internal reporting application တစ်ခု run နေတယ်။ Region ပျက်ရင် RTO ၂၄ နာရီ၊ RPO ၁၂ နာရီကို business က လက်ခံပြီး DR cost ကို အနည်းဆုံးဖြစ်စေချင်တယ်။ ဘယ် disaster recovery strategy က requirement နဲ့ ကိုက်လဲ?"),
      options: ['Pilot light', 'Warm standby', 'Multi-site active/active', 'Backup and restore'],
      correct: [3],
      explanation: L("With hours of tolerance, copying backups and AMIs to another Region and restoring on demand is enough and runs no standby resources. Pilot light keeps a live database replica running, which costs more than this RTO and RPO require.",
        "数時間の許容があるため、バックアップと AMI を別リージョンにコピーし、必要時に復元するだけで十分で、待機リソースも稼働しません。パイロットライトは稼働中のデータベースレプリカを維持するため、この RTO と RPO に必要な以上のコストがかかります。",
        "နာရီပိုင်း သည်းခံနိုင်လို့ backup နဲ့ AMI တွေကို တခြား Region ဆီ copy လုပ်ပြီး လိုမှ restore လုပ်တာနဲ့ လုံလောက်ပြီး standby resource ဘာမှ မ run ဘူး။ Pilot light က live database replica ကို run ထားရလို့ ဒီ RTO နဲ့ RPO အတွက် လိုတာထက် ပိုကုန်တယ်။"),
    },
    {
      difficulty: 'EASY',
      exams: ['SAA-C03'],
      prompt: L("A production MySQL database on Amazon RDS must keep running with automatic failover if an Availability Zone fails. The application should not need a connection string change. What should be enabled?",
        "Amazon RDS 上の本番 MySQL データベースは、アベイラビリティーゾーンが故障しても自動フェイルオーバーで稼働し続ける必要があります。アプリケーションの接続文字列は変更したくありません。何を有効にすべきですか？",
        "Amazon RDS ပေါ်က production MySQL database က Availability Zone ပျက်ရင် automatic failover နဲ့ ဆက် run နေရမယ်။ Application ရဲ့ connection string ကို မပြောင်းချင်ဘူး။ ဘာကို enable လုပ်သင့်လဲ?"),
      options: ['An RDS read replica in another AZ', 'RDS Multi-AZ deployment', 'A larger DB instance class', 'Automated snapshots every hour'],
      correct: [1],
      explanation: L("Multi-AZ keeps a synchronous standby in another AZ and fails over automatically by updating the same DNS endpoint. A read replica is asynchronous and must be promoted manually, after which it has a different endpoint.",
        "マルチ AZ は別 AZ に同期スタンバイを維持し、同じ DNS エンドポイントを更新して自動的にフェイルオーバーします。リードレプリカは非同期で手動の昇格が必要で、昇格後は別のエンドポイントになります。",
        "Multi-AZ က တခြား AZ မှာ synchronous standby ထားပြီး DNS endpoint အတူတူကို update လုပ်ကာ အလိုအလျောက် failover လုပ်တယ်။ Read replica က asynchronous ဖြစ်ပြီး manual promote လုပ်ရကာ promote ပြီးရင် endpoint မတူတော့ဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['SAA-C03'],
      prompt: L("Workers poll an SQS standard queue and each message takes about 90 seconds to process. The team notices that many messages are processed twice. The queue uses default settings. What is the MOST likely fix?",
        "ワーカーが SQS 標準キューをポーリングしており、各メッセージの処理に約 90 秒かかります。多くのメッセージが 2 回処理されていることに気付きました。キューはデフォルト設定です。最も可能性の高い対処はどれですか？",
        "Worker တွေက SQS standard queue ကို poll လုပ်နေပြီး message တစ်ခုကို process လုပ်ဖို့ စက္ကန့် ၉၀ လောက် ကြာတယ်။ Message အများကြီး နှစ်ခါ process ဖြစ်နေတာကို team က တွေ့တယ်။ Queue က default setting နဲ့ပဲ။ အဖြစ်နိုင်ဆုံး ဖြေရှင်းနည်းက ဘာလဲ?"),
      options: ['Increase the message retention period', 'Enable long polling on the queue', 'Increase the visibility timeout above the processing time', 'Attach a dead-letter queue'],
      correct: [2],
      explanation: L("The default visibility timeout is 30 seconds, so the message becomes visible again while the first worker is still processing it and a second worker picks it up. Long polling only reduces empty receives; it does not hide in-flight messages longer.",
        "デフォルトの可視性タイムアウトは 30 秒のため、最初のワーカーが処理中にメッセージが再表示され、2 番目のワーカーが取得してしまいます。ロングポーリングは空の受信を減らすだけで、処理中のメッセージを長く隠すことはできません。",
        "Default visibility timeout က ၃၀ စက္ကန့်ဖြစ်လို့ ပထမ worker process လုပ်နေတုန်း message ပြန်ပေါ်လာပြီး ဒုတိယ worker က ယူသွားတယ်။ Long polling က ဗလာ receive ကိုပဲ လျော့ပေးတာ၊ process လုပ်နေတဲ့ message ကို ပိုကြာကြာ ဖုံးမထားပေးဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['SAA-C03'],
      prompt: L("An application polls an SQS queue in a tight loop and receives mostly empty responses, which increases API request costs. How can the cost be reduced with the LEAST effort?",
        "アプリケーションが短い間隔で SQS キューをポーリングしており、ほとんどが空の応答のため API リクエストのコストが増えています。最小の手間でコストを削減するにはどうすればよいですか？",
        "Application က SQS queue ကို ခဏခဏ poll လုပ်နေပြီး ဗလာ response တွေပဲ အများဆုံးရနေလို့ API request cost တက်နေတယ်။ အလွယ်ဆုံးနည်းနဲ့ cost ဘယ်လို လျော့မလဲ?"),
      options: ['Convert the queue to a FIFO queue', 'Set ReceiveMessageWaitTimeSeconds to 20 to enable long polling', 'Configure a delay queue of 15 minutes', 'Replace the queue with an SNS topic'],
      correct: [1],
      explanation: L("Long polling makes each receive call wait up to 20 seconds for messages, cutting the number of empty responses and therefore billed requests. A FIFO queue changes ordering semantics and does not reduce empty receives.",
        "ロングポーリングにより各受信呼び出しが最大 20 秒メッセージを待つため、空の応答、つまり課金対象のリクエスト数が減ります。FIFO キューは順序のセマンティクスを変えるだけで、空の受信は減りません。",
        "Long polling က receive call တစ်ခုချင်းစီကို message အတွက် စက္ကန့် ၂၀ အထိ စောင့်စေလို့ ဗလာ response၊ ဒါကြောင့် ပိုက်ဆံကျတဲ့ request အရေအတွက် လျော့သွားတယ်။ FIFO queue က ordering ပုံစံကိုပဲ ပြောင်းတာ၊ ဗလာ receive ကို မလျော့ပေးဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['SAA-C03'],
      prompt: L("A gaming leaderboard stored in Amazon DynamoDB needs microsecond read latency for hot items. The developers want to make minimal code changes. Which solution should be used?",
        "Amazon DynamoDB に保存されたゲームのランキングで、頻繁に読まれる項目にマイクロ秒単位の読み取りレイテンシーが必要です。開発者はコード変更を最小限にしたいと考えています。どのソリューションを使うべきですか？",
        "Amazon DynamoDB ထဲ သိမ်းထားတဲ့ game leaderboard မှာ hot item တွေအတွက် microsecond read latency လိုတယ်။ Developer တွေက code ပြင်တာ အနည်းဆုံးဖြစ်ချင်တယ်။ ဘယ် solution ကို သုံးသင့်လဲ?"),
      options: ['DynamoDB Accelerator (DAX)', 'Amazon ElastiCache for Memcached', 'An Amazon RDS read replica', 'Amazon CloudFront in front of DynamoDB'],
      correct: [0],
      explanation: L("DAX is an in-memory cache built for DynamoDB with an API-compatible client, so existing calls work with very small changes and reads drop to microseconds. ElastiCache could cache the data but requires writing cache-aside logic in the application.",
        "DAX は DynamoDB 専用のインメモリキャッシュで API 互換のクライアントを持つため、既存の呼び出しはごくわずかな変更で動作し、読み取りはマイクロ秒になります。ElastiCache でもキャッシュできますが、アプリケーションにキャッシュアサイドのロジックを書く必要があります。",
        "DAX က DynamoDB အတွက် သီးသန့်လုပ်ထားတဲ့ in-memory cache ဖြစ်ပြီး API-compatible client ပါလို့ ရှိပြီးသား call တွေက နည်းနည်းလေးပြင်ရုံနဲ့ အလုပ်လုပ်ပြီး read က microsecond ဖြစ်သွားတယ်။ ElastiCache နဲ့လည်း cache လုပ်လို့ရပေမယ့် application ထဲမှာ cache-aside logic ရေးရတယ်။"),
    },
    {
      difficulty: 'EASY',
      exams: ['SAA-C03'],
      prompt: L("EC2 instances in a private subnet must read objects from Amazon S3. Security requires that the traffic does not traverse the internet, and the solution must be the MOST cost-effective. What should be configured?",
        "プライベートサブネットの EC2 インスタンスが Amazon S3 のオブジェクトを読み取る必要があります。セキュリティ上、トラフィックはインターネットを経由してはならず、MOST cost-effective である必要があります。何を設定すべきですか？",
        "Private subnet ထဲက EC2 instance တွေက Amazon S3 ထဲက object တွေကို ဖတ်ရမယ်။ Security အရ traffic က internet ကို မဖြတ်ရဘူး၊ solution က MOST cost-effective ဖြစ်ရမယ်။ ဘာကို configure လုပ်သင့်လဲ?"),
      options: ['A NAT gateway in a public subnet', 'An internet gateway attached to the VPC', 'A gateway VPC endpoint for S3 added to the private route tables', 'An interface VPC endpoint for Amazon EC2'],
      correct: [2],
      explanation: L("A gateway endpoint for S3 adds a route that keeps traffic on the AWS network and has no hourly or data processing charge. A NAT gateway would send traffic toward the internet path and bills per hour and per GB processed.",
        "S3 のゲートウェイエンドポイントは、トラフィックを AWS ネットワーク内に留めるルートを追加し、時間料金もデータ処理料金もかかりません。NAT ゲートウェイはインターネット経路にトラフィックを送り、時間単位と処理 GB 単位で課金されます。",
        "S3 gateway endpoint က traffic ကို AWS network ပေါ်မှာပဲ ထားတဲ့ route ထည့်ပေးပြီး နာရီခ ဒါမှမဟုတ် data processing charge မရှိဘူး။ NAT gateway က traffic ကို internet လမ်းကြောင်းဘက် ပို့ပြီး နာရီနဲ့ process လုပ်တဲ့ GB အလိုက် ပိုက်ဆံကျတယ်။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("When an order is placed, three independent systems (billing, shipping and analytics) must each process the order event. Each system runs at a different speed, and a failure in one must not affect the others or cause events to be lost. Which design meets these requirements?",
        "注文が行われると、3 つの独立したシステム（請求、配送、分析）がそれぞれ注文イベントを処理する必要があります。各システムの処理速度は異なり、1 つの障害が他に影響したりイベントが失われたりしてはなりません。要件を満たす設計はどれですか？",
        "Order တစ်ခု ဝင်လာရင် သီးခြား system သုံးခု (billing၊ shipping၊ analytics) က order event ကို တစ်ခုစီ process လုပ်ရမယ်။ System တစ်ခုစီရဲ့ အမြန်နှုန်း မတူဘူး၊ တစ်ခု ပျက်ရင် တခြားဟာတွေကို မထိခိုက်ရဘူး၊ event လည်း မပျောက်ရဘူး။ ဘယ် design က requirement နဲ့ ကိုက်လဲ?"),
      options: ['A single SQS queue polled by all three systems', 'An SNS topic with three SQS queue subscriptions, one per system', 'An Amazon Data Firehose stream delivering to S3', 'A Step Functions Express workflow that calls each system synchronously'],
      correct: [1],
      explanation: L("SNS fan-out delivers a copy of each event to every subscribed queue, and each queue durably buffers for its own consumer, isolating failures. With a single queue each message is consumed by only one system, so the other two would miss it.",
        "SNS ファンアウトは各イベントのコピーをサブスクライブしたすべてのキューに配信し、各キューが自分のコンシューマーのために永続的にバッファするため、障害が分離されます。単一のキューでは各メッセージは 1 つのシステムしか消費しないため、残り 2 つは受け取れません。",
        "SNS fan-out က event တစ်ခုစီရဲ့ copy ကို subscribe လုပ်ထားတဲ့ queue တိုင်းဆီ ပို့ပြီး queue တစ်ခုစီက ကိုယ့် consumer အတွက် durable buffer လုပ်ထားလို့ failure တွေ သီးခြားဖြစ်နေတယ်။ Queue တစ်ခုတည်းဆိုရင် message တစ်ခုကို system တစ်ခုပဲ ယူနိုင်လို့ ကျန်နှစ်ခုက လွတ်သွားမယ်။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("A banking application sends account transactions to a queue. Transactions for the same account must be processed in the exact order they were sent and must never be processed twice. Transactions for different accounts can be processed in parallel. Which solution meets these requirements?",
        "銀行アプリケーションが口座の取引をキューに送信します。同じ口座の取引は送信された順序どおりに処理され、決して 2 回処理されてはなりません。異なる口座の取引は並列に処理できます。要件を満たすソリューションはどれですか？",
        "Banking application က account transaction တွေကို queue ဆီ ပို့တယ်။ Account တစ်ခုတည်းရဲ့ transaction တွေကို ပို့တဲ့ order အတိုင်း process လုပ်ရမယ်၊ ဘယ်တော့မှ နှစ်ခါ မ process ရဘူး။ မတူတဲ့ account တွေရဲ့ transaction တွေကိုတော့ parallel process လုပ်လို့ရတယ်။ ဘယ် solution က ကိုက်လဲ?"),
      options: ['An SQS standard queue with deduplication logic in the consumer', 'An SNS standard topic with an email subscription', 'An SQS FIFO queue using the account ID as the message group ID', 'An EventBridge rule that targets a Lambda function'],
      correct: [2],
      explanation: L("A FIFO queue guarantees order within a message group and exactly-once processing with deduplication; using the account ID as `MessageGroupId` keeps each account ordered while different accounts run in parallel. A standard queue offers only best-effort ordering, so custom deduplication still would not fix order.",
        "FIFO キューはメッセージグループ内の順序と、重複排除による 1 回限りの処理を保証します。口座 ID を `MessageGroupId` にすると、口座ごとに順序を保ちながら異なる口座は並列に処理されます。標準キューの順序はベストエフォートのため、独自の重複排除を加えても順序の問題は解決しません。",
        "FIFO queue က message group အတွင်း order နဲ့ deduplication နဲ့ exactly-once processing ကို အာမခံတယ်၊ account ID ကို `MessageGroupId` အဖြစ်သုံးရင် account တစ်ခုချင်းစီ order မှန်ပြီး မတူတဲ့ account တွေက parallel run တယ်။ Standard queue က best-effort order ပဲ ပေးလို့ custom deduplication ထည့်လည်း order ပြဿနာ မပြေလည်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("A web application runs on EC2 instances in a single Availability Zone and stores user sessions in memory on each instance. Users are logged out whenever an instance is replaced, and an AZ outage takes the whole site down. Which actions will make the application highly available and scalable? (Select TWO)",
        "Web アプリケーションが単一のアベイラビリティーゾーンの EC2 インスタンスで稼働し、ユーザーセッションを各インスタンスのメモリに保存しています。インスタンスが置き換わるたびにユーザーがログアウトされ、AZ 障害でサイト全体が停止します。アプリケーションを高可用かつスケーラブルにするアクションはどれですか？（2 つ選択）",
        "Web application က Availability Zone တစ်ခုတည်းထဲက EC2 instance တွေမှာ run ပြီး user session တွေကို instance တစ်ခုစီရဲ့ memory ထဲ သိမ်းထားတယ်။ Instance အစားထိုးတိုင်း user တွေ logout ဖြစ်ပြီး AZ ပျက်ရင် site တစ်ခုလုံး down တယ်။ Application ကို highly available နဲ့ scalable ဖြစ်စေမယ့် action တွေက ဘာလဲ? (Select TWO)"),
      options: ['Store session state in Amazon ElastiCache', 'Move to a larger instance type to handle more users', 'Run an Auto Scaling group across at least two AZs behind an Application Load Balancer', 'Save session files to each instance\'s EBS volume', 'Launch the instances in a cluster placement group'],
      correct: [0, 2],
      explanation: L("External session storage makes the instances stateless so any of them can be replaced, and an ASG across multiple AZs behind an ALB survives an AZ failure and scales horizontally. EBS volumes are tied to one instance and one AZ, so sessions saved there are still lost when the instance is replaced.",
        "外部のセッションストレージによりインスタンスがステートレスになり、どれでも置き換えられます。また、ALB の背後で複数 AZ にまたがる ASG は AZ 障害に耐え、水平にスケールします。EBS ボリュームは 1 つのインスタンスと 1 つの AZ に紐づくため、そこに保存したセッションはインスタンスの置き換え時に失われます。",
        "Session ကို အပြင်မှာ သိမ်းရင် instance တွေက stateless ဖြစ်လို့ ဘယ်ဟာကိုမဆို အစားထိုးလို့ရတယ်၊ ALB နောက်က AZ အများဖြတ်တဲ့ ASG က AZ failure ကို ခံနိုင်ပြီး horizontal scale လုပ်တယ်။ EBS volume က instance တစ်လုံး၊ AZ တစ်ခုနဲ့ ချိတ်ထားလို့ အဲဒီမှာ သိမ်းတဲ့ session တွေက instance အစားထိုးရင် ပျောက်နေတုန်းပဲ။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("A company runs its application in ap-northeast-1. For disaster recovery in ap-northeast-3 it requires an RPO of a few minutes and an RTO of under one hour, while keeping DR costs as low as possible. Application servers can be launched from AMIs during a disaster. Which strategy is MOST appropriate?",
        "ある会社は ap-northeast-1 でアプリケーションを運用しています。ap-northeast-3 での災害対策として、数分の RPO と 1 時間未満の RTO を求め、DR コストは可能な限り低く抑えたいと考えています。アプリケーションサーバーは災害時に AMI から起動できます。最も適切な戦略はどれですか？",
        "Company တစ်ခုက application ကို ap-northeast-1 မှာ run တယ်။ ap-northeast-3 မှာ disaster recovery အတွက် RPO မိနစ်အနည်းငယ်၊ RTO တစ်နာရီအောက် လိုပြီး DR cost ကို အနည်းဆုံးထားချင်တယ်။ Disaster ဖြစ်ချိန်မှာ application server တွေကို AMI ကနေ launch လုပ်လို့ရတယ်။ ဘယ် strategy က အသင့်တော်ဆုံးလဲ?"),
      options: ['Warm standby', 'Multi-site active/active', 'Pilot light', 'Backup and restore'],
      correct: [2],
      explanation: L("Pilot light keeps only the data layer continuously replicated to meet the minutes-level RPO, while app servers are launched from AMIs at failover to meet a sub-hour RTO at low cost. Warm standby would also meet the targets but keeps a running scaled-down stack, which costs more than necessary.",
        "パイロットライトはデータ層だけを継続的にレプリケーションして数分の RPO を満たし、フェイルオーバー時に AMI からアプリサーバーを起動して低コストで 1 時間未満の RTO を満たします。ウォームスタンバイも目標を満たしますが、縮小したスタックを常に稼働させるため必要以上のコストがかかります。",
        "Pilot light က data layer ကိုပဲ အမြဲ replicate လုပ်ထားလို့ မိနစ်ပိုင်း RPO ပြည့်ပြီး failover ချိန်မှာ AMI ကနေ app server launch လုပ်လို့ cost နည်းနည်းနဲ့ တစ်နာရီအောက် RTO ပြည့်တယ်။ Warm standby လည်း target ပြည့်ပေမယ့် size လျှော့ထားတဲ့ stack ကို အမြဲ run ထားရလို့ လိုတာထက် ပိုကုန်တယ်။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("A multiplayer game uses a custom UDP protocol and has players worldwide. Players complain about jitter, and partners need to allow-list a small fixed set of IP addresses. The game runs in two Regions and must fail over quickly between them. Which service should be used?",
        "マルチプレイヤーゲームが独自の UDP プロトコルを使い、世界中にプレイヤーがいます。プレイヤーはジッターに不満を持っており、パートナーは少数の固定 IP アドレスを許可リストに登録する必要があります。ゲームは 2 つのリージョンで稼働し、リージョン間で素早くフェイルオーバーする必要があります。どのサービスを使うべきですか？",
        "Multiplayer game တစ်ခုက custom UDP protocol သုံးပြီး ကမ္ဘာအနှံ့ player တွေ ရှိတယ်။ Player တွေက jitter အကြောင်း complain လုပ်ပြီး partner တွေက fixed IP address အနည်းငယ်ကို allow-list လုပ်ဖို့ လိုတယ်။ Game က Region နှစ်ခုမှာ run ပြီး Region တွေကြား မြန်မြန် failover လုပ်ရမယ်။ ဘယ် service ကို သုံးသင့်လဲ?"),
      options: ['Amazon CloudFront with origin failover', 'Amazon Route 53 geolocation routing', 'Amazon S3 Transfer Acceleration', 'AWS Global Accelerator'],
      correct: [3],
      explanation: L("Global Accelerator provides two static anycast IPs, carries TCP and UDP traffic over the AWS backbone to reduce jitter, and shifts traffic between Regional endpoints quickly based on health. CloudFront is for HTTP and HTTPS content and does not proxy custom UDP protocols.",
        "Global Accelerator は 2 つの固定エニーキャスト IP を提供し、TCP と UDP のトラフィックを AWS バックボーン経由で運んでジッターを減らし、ヘルスに基づいてリージョンのエンドポイント間で素早くトラフィックを切り替えます。CloudFront は HTTP と HTTPS のコンテンツ向けで、独自の UDP プロトコルはプロキシしません。",
        "Global Accelerator က static anycast IP နှစ်ခုပေးပြီး TCP နဲ့ UDP traffic ကို AWS backbone ပေါ်ကနေ သယ်လို့ jitter လျော့စေကာ health အလိုက် Regional endpoint တွေကြား traffic ကို မြန်မြန် ပြောင်းပေးတယ်။ CloudFront က HTTP နဲ့ HTTPS content အတွက်ဖြစ်ပြီး custom UDP protocol ကို proxy မလုပ်ပေးဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("An application on EC2 connects to an Amazon Aurora PostgreSQL cluster. The security team requires that database credentials are not stored in code and are rotated automatically every 30 days. Which solution meets these requirements with the LEAST operational overhead?",
        "EC2 上のアプリケーションが Amazon Aurora PostgreSQL クラスターに接続します。セキュリティチームは、データベースの認証情報をコードに保存せず、30 日ごとに自動ローテーションすることを求めています。LEAST operational overhead で要件を満たすソリューションはどれですか？",
        "EC2 ပေါ်က application က Amazon Aurora PostgreSQL cluster ကို connect လုပ်တယ်။ Security team က database credential ကို code ထဲ မသိမ်းရဘူး၊ ရက် ၃၀ တစ်ခါ အလိုအလျောက် rotate လုပ်ရမယ်လို့ လိုချင်တယ်။ LEAST operational overhead နဲ့ ဘယ် solution က ကိုက်လဲ?"),
      options: ['Store the credentials in AWS Secrets Manager with automatic rotation enabled', 'Store the credentials as a Systems Manager Parameter Store SecureString and rotate them with a cron job on an EC2 instance', 'Store the credentials in an encrypted S3 object and update it manually each month', 'Hard-code the credentials in the AMI and rebuild the AMI every 30 days'],
      correct: [0],
      explanation: L("Secrets Manager has native rotation for Aurora on a schedule, and the application retrieves the current secret through its IAM role. Parameter Store SecureString can hold the secret, but it has no built-in rotation, so the cron job is extra code and infrastructure to maintain.",
        "Secrets Manager は Aurora 向けにスケジュールでのネイティブなローテーションを備え、アプリケーションは IAM ロールで現在のシークレットを取得します。Parameter Store の SecureString でもシークレットを保持できますが、組み込みのローテーションがないため、cron ジョブは保守すべき追加のコードとインフラになります。",
        "Secrets Manager မှာ Aurora အတွက် schedule နဲ့ native rotation ပါပြီး application က IAM role နဲ့ လက်ရှိ secret ကို ယူတယ်။ Parameter Store SecureString နဲ့လည်း secret သိမ်းလို့ရပေမယ့် built-in rotation မပါလို့ cron job က maintain လုပ်ရမယ့် code နဲ့ infrastructure အပိုဖြစ်တယ်။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("A company has a steady web workload that runs on EC2 24/7 and a nightly image-rendering batch job that can be interrupted and restarted at any time. The company wants to reduce compute costs for both workloads. Which purchasing options should be used? (Select TWO)",
        "ある会社には、EC2 で 24 時間 365 日稼働する安定した Web ワークロードと、いつでも中断・再開できる夜間の画像レンダリングバッチジョブがあります。両方のワークロードのコンピューティングコストを削減したいと考えています。どの購入オプションを使うべきですか？（2 つ選択）",
        "Company တစ်ခုမှာ EC2 ပေါ် 24/7 run နေတဲ့ တည်ငြိမ်တဲ့ web workload နဲ့ အချိန်မရွေး ရပ်ပြီး ပြန်စလို့ရတဲ့ ညဘက် image-rendering batch job ရှိတယ်။ Workload နှစ်ခုလုံးရဲ့ compute cost ကို လျော့ချင်တယ်။ ဘယ် purchasing option တွေကို သုံးသင့်လဲ? (Select TWO)"),
      options: ['On-Demand Instances for the batch job', 'Spot Instances for the batch job', 'A Compute Savings Plan for the steady web workload', 'Dedicated Hosts for the steady web workload', 'On-Demand Capacity Reservations for the batch job'],
      correct: [1, 2],
      explanation: L("Interruptible batch work is the ideal Spot use case with discounts of up to 90%, and a predictable 24/7 baseline is best covered by a 1- or 3-year Savings Plan commitment. Dedicated Hosts are for licensing or compliance needs and cost more, not less.",
        "中断可能なバッチ処理は最大 90% 割引のスポットに最適で、予測可能な 24 時間 365 日のベースラインは 1 年または 3 年の Savings Plans のコミットで最もよくカバーできます。Dedicated Hosts はライセンスやコンプライアンスのためのもので、コストは下がるどころか上がります。",
        "ရပ်လို့ရတဲ့ batch အလုပ်က 90% အထိ လျှော့တဲ့ Spot အတွက် အကောင်းဆုံး use case ဖြစ်ပြီး ခန့်မှန်းလို့ရတဲ့ 24/7 baseline ကို ၁ နှစ် သို့ ၃ နှစ် Savings Plan commitment နဲ့ ဖုံးတာ အကောင်းဆုံးပါ။ Dedicated Host က licensing သို့ compliance လိုအပ်ချက်အတွက်ဖြစ်ပြီး cost ကို လျော့မပေးဘဲ ပိုတက်စေတယ်။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("A retail website must ingest clickstream events in real time. Two separate applications, a fraud detector and a recommendation engine, must read the same events in order per user, and the data team must be able to reprocess the last 7 days of events after a bug fix. Which service should be used?",
        "小売サイトがクリックストリームのイベントをリアルタイムで取り込む必要があります。不正検知とレコメンドエンジンという 2 つの別々のアプリケーションが、ユーザーごとの順序で同じイベントを読み取る必要があり、データチームはバグ修正後に直近 7 日間のイベントを再処理できる必要があります。どのサービスを使うべきですか？",
        "Retail website က clickstream event တွေကို real time ထည့်ယူရမယ်။ Fraud detector နဲ့ recommendation engine ဆိုတဲ့ သီးခြား application နှစ်ခုက event အတူတူကို user အလိုက် order မှန်မှန် ဖတ်ရမယ်၊ bug fix ပြီးရင် data team က နောက်ဆုံး ၇ ရက်က event တွေကို ပြန် process လုပ်နိုင်ရမယ်။ ဘယ် service ကို သုံးသင့်လဲ?"),
      options: ['Amazon Kinesis Data Streams', 'Amazon Data Firehose', 'Amazon SQS standard queue', 'Amazon SNS standard topic'],
      correct: [0],
      explanation: L("Kinesis Data Streams keeps records ordered per partition key (the user ID), lets multiple consumers read the same stream independently, and supports retention up to 365 days for replay. Firehose only delivers data to destinations such as S3 and cannot be replayed by multiple consumers.",
        "Kinesis Data Streams はパーティションキー（ユーザー ID）ごとにレコードの順序を保ち、複数のコンシューマーが同じストリームを独立して読め、リプレイのために最大 365 日の保持をサポートします。Firehose は S3 などの宛先にデータを配信するだけで、複数のコンシューマーによるリプレイはできません。",
        "Kinesis Data Streams က partition key (user ID) အလိုက် record order ကို ထိန်းထားပြီး consumer အများက stream အတူတူကို သီးခြားစီ ဖတ်နိုင်ကာ replay အတွက် retention ရက် ၃၆၅ အထိ support လုပ်တယ်။ Firehose က data ကို S3 လို destination ဆီ ပို့ရုံပဲဖြစ်ပြီး consumer အများနဲ့ replay မလုပ်နိုင်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("A company uses an Amazon RDS for MySQL Multi-AZ DB instance. At month end, heavy reporting queries slow down the production workload. The company wants to improve performance with minimal changes and without affecting availability. What should a solutions architect do?",
        "ある会社は Amazon RDS for MySQL のマルチ AZ DB インスタンスを使っています。月末に重いレポートクエリが本番ワークロードを遅くします。最小限の変更で、可用性に影響を与えずにパフォーマンスを改善したいと考えています。ソリューションアーキテクトは何をすべきですか？",
        "Company တစ်ခုက Amazon RDS for MySQL Multi-AZ DB instance ကို သုံးတယ်။ လကုန်မှာ လေးလံတဲ့ reporting query တွေက production workload ကို နှေးစေတယ်။ အပြောင်းအလဲ အနည်းဆုံးနဲ့ availability ကို မထိခိုက်ဘဲ performance တိုးချင်တယ်။ Solutions architect က ဘာလုပ်သင့်လဲ?"),
      options: ['Increase the allocated storage of the DB instance', 'Send the reporting queries to the Multi-AZ standby instance', 'Upgrade to a larger instance class at every month end', 'Create a read replica and point the reporting tool at the replica endpoint'],
      correct: [3],
      explanation: L("A read replica offloads read-only reporting queries from the primary, and only the reporting tool needs a new endpoint. The standby of a Multi-AZ DB instance cannot serve read traffic; it exists only for failover.",
        "リードレプリカは読み取り専用のレポートクエリをプライマリからオフロードし、新しいエンドポイントが必要なのはレポートツールだけです。マルチ AZ DB インスタンスのスタンバイは読み取りトラフィックを処理できず、フェイルオーバー専用です。",
        "Read replica က read-only reporting query တွေကို primary ကနေ ခွဲယူပေးပြီး endpoint အသစ် လိုတာ reporting tool တစ်ခုတည်းပါ။ Multi-AZ DB instance ရဲ့ standby က read traffic မဆောင်ရွက်ပေးဘူး၊ failover အတွက်ပဲ ရှိတာ။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("A company is hardening a three-tier application: an internet-facing ALB, EC2 application servers and an Amazon RDS database. Requirements: block common web exploits such as SQL injection, make the database unreachable from the internet, allow database access only from the application tier and encrypt data at rest. Which actions should be taken? (Select THREE)",
        "ある会社が 3 層アプリケーション（インターネット向け ALB、EC2 アプリケーションサーバー、Amazon RDS データベース）を強化しています。要件：SQL インジェクションなどの一般的な Web 攻撃をブロックする、データベースをインターネットから到達不能にする、データベースへのアクセスをアプリケーション層からのみ許可する、保存データを暗号化する。どのアクションを取るべきですか？（3 つ選択）",
        "Company တစ်ခုက three-tier application (internet-facing ALB၊ EC2 application server၊ Amazon RDS database) ကို လုံခြုံအောင် လုပ်နေတယ်။ Requirement- SQL injection လို အဖြစ်များတဲ့ web exploit တွေကို block လုပ်၊ database ကို internet ကနေ မရောက်နိုင်အောင်လုပ်၊ database ကို application tier ကနေပဲ ဝင်ခွင့်ပေး၊ data at rest ကို encrypt လုပ်။ ဘယ် action တွေ လုပ်သင့်လဲ? (Select THREE)"),
      options: ['Attach an AWS WAF web ACL with managed rule groups to the ALB', 'Place the RDS instance in public subnets protected by a network ACL', 'Allow port 3306 on the database security group only from the application tier security group', 'Store the database password in EC2 user data', 'Launch the RDS instance in private subnets with storage encryption using an AWS KMS key', 'Give the EC2 instances IAM user access keys in a configuration file'],
      correct: [0, 2, 4],
      explanation: L("WAF on the ALB filters SQL injection and other exploits, a security group that references the app tier SG limits database access to that tier, and private subnets with KMS storage encryption keep the database off the internet and encrypted at rest. A public subnet with a network ACL still gives the database an internet-routable path, which violates the requirement.",
        "ALB の WAF が SQL インジェクションなどの攻撃をフィルタリングし、アプリ層の SG を参照するセキュリティグループがデータベースへのアクセスをその層に限定し、KMS によるストレージ暗号化を有効にしたプライベートサブネットがデータベースをインターネットから切り離して保存時に暗号化します。ネットワーク ACL で保護したパブリックサブネットでも、データベースにインターネットからルーティング可能な経路が残るため要件に反します。",
        "ALB ပေါ်က WAF က SQL injection နဲ့ တခြား exploit တွေကို filter လုပ်တယ်၊ app tier SG ကို reference လုပ်တဲ့ security group က database access ကို အဲဒီ tier ကိုပဲ ကန့်သတ်တယ်၊ KMS storage encryption ပါတဲ့ private subnet က database ကို internet နဲ့ ခွဲထားပြီး at rest encrypt လုပ်ထားတယ်။ Network ACL နဲ့ ကာထားတဲ့ public subnet ဆိုရင်တောင် database မှာ internet ကနေ route လုပ်လို့ရတဲ့ လမ်းကြောင်း ကျန်နေလို့ requirement ကို ချိုးဖောက်တယ်။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("A data processing fleet in private subnets downloads several terabytes per day from Amazon S3 in the same Region through a NAT gateway. The monthly bill shows high NAT gateway data processing charges. The company wants the MOST cost-effective change that keeps the instances private. What should a solutions architect do?",
        "プライベートサブネットのデータ処理フリートが、NAT ゲートウェイ経由で同じリージョンの Amazon S3 から 1 日に数テラバイトをダウンロードしています。月次請求で NAT ゲートウェイのデータ処理料金が高額になっています。インスタンスをプライベートのまま保つ MOST cost-effective な変更は何ですか？",
        "Private subnet ထဲက data processing fleet က NAT gateway ကနေ Region အတူတူထဲက Amazon S3 ကနေ တစ်ရက်ကို terabyte အများကြီး download လုပ်တယ်။ လစဉ် bill မှာ NAT gateway data processing charge အများကြီး ပြနေတယ်။ Instance တွေကို private ထားပြီး MOST cost-effective ဖြစ်တဲ့ ပြောင်းလဲမှုက ဘာလဲ?"),
      options: ['Replace the NAT gateway with a NAT instance on a larger instance type', 'Create a gateway VPC endpoint for S3 and associate it with the private subnet route tables', 'Create an interface VPC endpoint for S3 in each Availability Zone', 'Move the instances to public subnets with Elastic IP addresses'],
      correct: [1],
      explanation: L("A gateway endpoint for S3 is free and routes S3 traffic privately, removing the NAT data processing charge entirely. An interface endpoint for S3 would also keep traffic private, but it adds hourly and per-GB charges, so it is not the most cost-effective option for same-Region bulk traffic.",
        "S3 のゲートウェイエンドポイントは無料で S3 のトラフィックをプライベートにルーティングし、NAT のデータ処理料金を完全になくします。S3 のインターフェイスエンドポイントでもトラフィックはプライベートになりますが、時間料金と GB 単位の料金がかかるため、同一リージョンの大量トラフィックでは最も費用対効果の高い選択肢ではありません。",
        "S3 gateway endpoint က အခမဲ့ဖြစ်ပြီး S3 traffic ကို private route လုပ်ပေးလို့ NAT data processing charge လုံးဝ မရှိတော့ဘူး။ S3 interface endpoint လည်း traffic ကို private ထားပေမယ့် နာရီခနဲ့ GB အလိုက် charge ထပ်ကျလို့ Region တစ်ခုတည်းအတွင်း traffic အများကြီးအတွက် အသက်သာဆုံး မဟုတ်ဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("A global payments platform must stay available even if an entire AWS Region fails. Users in Asia and Europe must write to the nearest Region with low latency, the RPO must be close to zero and traffic must automatically move away from an unhealthy Region within seconds to minutes. Which combination of services meets these requirements? (Select TWO)",
        "グローバルな決済プラットフォームは、AWS リージョン全体が故障しても利用可能であり続ける必要があります。アジアとヨーロッパのユーザーは最寄りのリージョンに低レイテンシーで書き込む必要があり、RPO はほぼゼロで、異常なリージョンからは数秒〜数分で自動的にトラフィックを移す必要があります。要件を満たすサービスの組み合わせはどれですか？（2 つ選択）",
        "Global payments platform တစ်ခုက AWS Region တစ်ခုလုံး ပျက်ရင်တောင် available ဖြစ်နေရမယ်။ Asia နဲ့ Europe က user တွေက အနီးဆုံး Region ဆီ latency နည်းနည်းနဲ့ write လုပ်နိုင်ရမယ်၊ RPO က သုညနီးပါးဖြစ်ရမယ်၊ ကျန်းမာရေးမကောင်းတဲ့ Region ကနေ traffic ကို စက္ကန့်ကနေ မိနစ်အတွင်း အလိုအလျောက် ရွှေ့ရမယ်။ ဘယ် service ပေါင်းစပ်မှုက ကိုက်လဲ? (Select TWO)"),
      options: ['Amazon DynamoDB global tables in both Regions', 'An Amazon RDS Multi-AZ deployment in one Region', 'Amazon Route 53 latency-based routing with health checks', 'S3 Cross-Region Replication of nightly database dumps', 'A larger Auto Scaling group in a single Region'],
      correct: [0, 2],
      explanation: L("DynamoDB global tables provide multi-Region, multi-active replication so each Region accepts writes locally with very low RPO, and Route 53 latency routing with health checks sends users to the nearest healthy Region. RDS Multi-AZ protects only against an AZ failure inside one Region, not a Region outage.",
        "DynamoDB グローバルテーブルはマルチリージョンのマルチアクティブレプリケーションを提供し、各リージョンがローカルで書き込みを受け付け、RPO も非常に小さくなります。ヘルスチェック付きの Route 53 レイテンシーベースルーティングは、ユーザーを最寄りの正常なリージョンに送ります。RDS マルチ AZ は 1 つのリージョン内の AZ 障害からしか保護せず、リージョン障害には対応できません。",
        "DynamoDB global table က multi-Region၊ multi-active replication ပေးလို့ Region တစ်ခုစီက local မှာ write လက်ခံပြီး RPO အရမ်းနည်းတယ်၊ health check ပါတဲ့ Route 53 latency-based routing က user တွေကို အနီးဆုံး ကျန်းမာတဲ့ Region ဆီ ပို့ပေးတယ်။ RDS Multi-AZ က Region တစ်ခုအတွင်း AZ failure ကိုပဲ ကာကွယ်ပြီး Region outage ကို မကာကွယ်ဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("A Lambda function consumes messages from an SQS standard queue. A few malformed messages fail every time, are retried endlessly, waste invocations and delay valid messages. The operations team wants failed messages isolated for later inspection and an alert when this happens, without losing valid messages. What should a solutions architect do?",
        "Lambda 関数が SQS 標準キューのメッセージを処理しています。いくつかの不正な形式のメッセージが毎回失敗して際限なく再試行され、呼び出しを浪費し、正しいメッセージを遅延させています。運用チームは、正しいメッセージを失わずに、失敗したメッセージを後で調査できるよう隔離し、その発生時にアラートを受けたいと考えています。ソリューションアーキテクトは何をすべきですか？",
        "Lambda function တစ်ခုက SQS standard queue ကနေ message တွေကို process လုပ်တယ်။ ပုံစံမှားနေတဲ့ message အနည်းငယ်က အမြဲ fail ဖြစ်ပြီး အဆုံးမရှိ retry ဖြစ်နေလို့ invocation ဖြုန်းပြီး မှန်တဲ့ message တွေကို နှောင့်နှေးစေတယ်။ Operations team က မှန်တဲ့ message မပျောက်ဘဲ fail ဖြစ်တဲ့ message တွေကို နောက်မှ စစ်ဖို့ ခွဲထုတ်ထားချင်ပြီး ဖြစ်ရင် alert လိုချင်တယ်။ Solutions architect က ဘာလုပ်သင့်လဲ?"),
      options: ['Convert the queue to a FIFO queue', 'Reduce the message retention period to 1 minute', 'Configure a dead-letter queue with a redrive policy of maxReceiveCount 5 and a CloudWatch alarm on the DLQ depth', 'Increase the visibility timeout to 12 hours'],
      correct: [2],
      explanation: L("After five failed receives the redrive policy moves the poison message to the DLQ, so valid messages flow normally, and an alarm on `ApproximateNumberOfMessagesVisible` for the DLQ alerts the team. Reducing retention to 1 minute would delete valid messages too and leave nothing to inspect.",
        "5 回受信に失敗すると、リドライブポリシーがポイズンメッセージを DLQ に移すため、正しいメッセージは通常どおり流れます。DLQ の `ApproximateNumberOfMessagesVisible` に対するアラームでチームに通知されます。保持期間を 1 分にすると正しいメッセージまで削除され、調査対象も残りません。",
        "Receive ၅ ခါ fail ဖြစ်ရင် redrive policy က poison message ကို DLQ ဆီ ရွှေ့ပေးလို့ မှန်တဲ့ message တွေက ပုံမှန်အတိုင်း စီးဆင်းတယ်၊ DLQ ရဲ့ `ApproximateNumberOfMessagesVisible` အပေါ် alarm က team ကို အသိပေးတယ်။ Retention ကို ၁ မိနစ် လျှော့ရင် မှန်တဲ့ message တွေပါ ပျက်သွားပြီး စစ်စရာလည်း ဘာမှ မကျန်ဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("An order workflow has five steps: validate payment, reserve inventory, wait for a manager approval that can take up to three days, ship and notify. Each step must retry on transient errors, and a failure must trigger a compensation step. The company wants the LEAST operational overhead and no custom coordination code. Which solution should be used?",
        "注文ワークフローには 5 つのステップがあります：支払いの検証、在庫の確保、最大 3 日かかる可能性のあるマネージャー承認の待機、出荷、通知。各ステップは一時的なエラーでリトライし、失敗時には補償ステップを実行する必要があります。LEAST operational overhead で、独自の調整コードは書きたくありません。どのソリューションを使うべきですか？",
        "Order workflow မှာ အဆင့် ၅ ဆင့်ရှိတယ်- payment စစ်၊ inventory ကြိုယူ၊ ၃ ရက်အထိ ကြာနိုင်တဲ့ manager approval ကို စောင့်၊ ship၊ notify။ အဆင့်တိုင်းက ခဏတာ error မှာ retry လုပ်ရမယ်၊ fail ဖြစ်ရင် compensation step ကို run ရမယ်။ LEAST operational overhead လိုပြီး custom coordination code မရေးချင်ဘူး။ ဘယ် solution ကို သုံးသင့်လဲ?"),
      options: ['An AWS Step Functions Standard workflow', 'An AWS Step Functions Express workflow', 'A chain of Lambda functions that invoke each other directly', 'SQS queues between each step coordinated by a cron script on EC2'],
      correct: [0],
      explanation: L("Standard workflows can run for up to one year, support wait states and callback tasks for human approval, and provide built-in Retry and Catch for compensation logic. Express workflows are limited to five minutes, so they cannot wait three days for an approval.",
        "Standard ワークフローは最大 1 年実行でき、人による承認のための待機状態とコールバックタスクをサポートし、補償ロジック用の Retry と Catch を標準で備えています。Express ワークフローは 5 分までに制限されるため、3 日間承認を待つことはできません。",
        "Standard workflow က တစ်နှစ်အထိ run နိုင်ပြီး လူ approve လုပ်ဖို့ wait state နဲ့ callback task ကို support လုပ်ကာ compensation logic အတွက် built-in Retry နဲ့ Catch ပါတယ်။ Express workflow က ၅ မိနစ်ပဲ ကန့်သတ်ထားလို့ approval ကို ၃ ရက် မစောင့်နိုင်ဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("A company serves a static website through Amazon CloudFront from an S3 bucket. The objects are encrypted with SSE-KMS using a customer managed key. Users must not be able to access the bucket directly, and the S3 Block Public Access settings must stay enabled. Which actions should a solutions architect take? (Select TWO)",
        "ある会社は Amazon CloudFront を通じて S3 バケットから静的 Web サイトを配信しています。オブジェクトはカスタマーマネージドキーを使った SSE-KMS で暗号化されています。ユーザーがバケットに直接アクセスできてはならず、S3 のブロックパブリックアクセス設定は有効のままにする必要があります。ソリューションアーキテクトが取るべきアクションはどれですか？（2 つ選択）",
        "Company တစ်ခုက S3 bucket ကနေ Amazon CloudFront ကတဆင့် static website ကို serve လုပ်တယ်။ Object တွေကို customer managed key နဲ့ SSE-KMS encrypt လုပ်ထားတယ်။ User တွေ bucket ကို တိုက်ရိုက် မဝင်နိုင်ရဘူး၊ S3 Block Public Access setting တွေကို enable ထားရမယ်။ Solutions architect က ဘာ action တွေ လုပ်သင့်လဲ? (Select TWO)"),
      options: ['Use a legacy origin access identity (OAI) for the S3 origin', 'Create an origin access control (OAC) and a bucket policy that allows the cloudfront.amazonaws.com service principal with an AWS:SourceArn condition for the distribution', 'Use the S3 static website endpoint as a custom origin', 'Update the KMS key policy to allow the CloudFront service principal to use the key for the distribution', 'Disable Block Public Access and restrict access with a Referer header condition'],
      correct: [1, 3],
      explanation: L("OAC signs requests from CloudFront, the bucket policy limits access to that one distribution, and because objects use SSE-KMS the key policy must also allow CloudFront to decrypt. A legacy OAI does not support SSE-KMS encrypted objects, and the S3 website endpoint cannot be used with OAC because it requires public access.",
        "OAC は CloudFront からのリクエストに署名し、バケットポリシーはアクセスをそのディストリビューションのみに限定します。また、オブジェクトが SSE-KMS を使っているため、キーポリシーでも CloudFront の復号を許可する必要があります。従来の OAI は SSE-KMS で暗号化されたオブジェクトに対応しておらず、S3 Web サイトエンドポイントはパブリックアクセスが必要なため OAC と併用できません。",
        "OAC က CloudFront ကနေလာတဲ့ request တွေကို sign လုပ်ပေးတယ်၊ bucket policy က access ကို အဲဒီ distribution တစ်ခုတည်းကိုပဲ ကန့်သတ်တယ်၊ object တွေက SSE-KMS သုံးထားလို့ key policy မှာလည်း CloudFront ကို decrypt လုပ်ခွင့်ပေးရမယ်။ Legacy OAI က SSE-KMS encrypt ထားတဲ့ object တွေကို support မလုပ်ဘူး၊ S3 website endpoint က public access လိုလို့ OAC နဲ့ တွဲမသုံးနိုင်ဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("A company runs a critical application on EC2 with Amazon Aurora MySQL in ap-northeast-1. A new DR policy requires an RTO of 5 minutes and an RPO of about 1 minute if the Region fails. Finance has rejected the cost of running full production capacity in two Regions. Which approach meets the requirements MOST cost-effectively?",
        "ある会社は ap-northeast-1 で EC2 と Amazon Aurora MySQL を使う重要なアプリケーションを運用しています。新しい DR ポリシーでは、リージョン障害時に RTO 5 分、RPO 約 1 分が求められます。財務部門は 2 つのリージョンで本番と同等の容量を稼働させるコストを却下しました。最も費用対効果の高い方法で要件を満たすアプローチはどれですか？",
        "Company တစ်ခုက ap-northeast-1 မှာ EC2 နဲ့ Amazon Aurora MySQL သုံးတဲ့ critical application ကို run တယ်။ DR policy အသစ်က Region ပျက်ရင် RTO ၅ မိနစ်၊ RPO ၁ မိနစ်လောက် လိုတယ်။ Region နှစ်ခုမှာ production capacity အပြည့် run တဲ့ cost ကို finance က ငြင်းလိုက်တယ်။ MOST cost-effective ဖြစ်ပြီး requirement နဲ့ ကိုက်တဲ့ နည်းလမ်းက ဘာလဲ?"),
      options: ['Multi-site active/active with full capacity in three Regions', 'Backup and restore using AWS Backup cross-Region copies every hour', 'Pilot light with Aurora snapshots copied daily and an ASG with a minimum of zero', 'Warm standby with an Aurora Global Database secondary and a small running Auto Scaling group behind an ALB in the DR Region'],
      correct: [3],
      explanation: L("Aurora Global Database replicates with an RPO typically around one second, and a scaled-down stack that is already running can take traffic and scale out within the 5-minute RTO. Daily snapshots in the pilot light option give an RPO of up to a day, and launching from zero makes a 5-minute RTO very hard to meet; active/active was rejected for cost.",
        "Aurora Global Database は一般的に約 1 秒の RPO でレプリケーションし、すでに稼働している縮小スタックは 5 分の RTO 内でトラフィックを受けてスケールアウトできます。パイロットライト案の日次スナップショットでは RPO が最大 1 日になり、ゼロから起動するため 5 分の RTO を満たすのは非常に困難です。アクティブ/アクティブはコストの理由で却下されています。",
        "Aurora Global Database က ပုံမှန် RPO ၁ စက္ကန့်လောက်နဲ့ replicate လုပ်ပြီး run နေပြီးသား size လျှော့ stack က ၅ မိနစ် RTO အတွင်း traffic လက်ခံကာ scale out လုပ်နိုင်တယ်။ Pilot light option ထဲက daily snapshot က RPO တစ်ရက်အထိ ဖြစ်စေပြီး သုညကနေ launch လုပ်ရလို့ ၅ မိနစ် RTO ပြည့်ဖို့ အရမ်းခက်တယ်၊ active/active ကိုတော့ cost ကြောင့် ငြင်းထားပြီးသား။"),
    },
  ],
  flashcards: [
    { term: 'RTO and RPO',
      definition: L("RTO (Recovery Time Objective) is the maximum acceptable downtime; RPO (Recovery Point Objective) is the maximum acceptable data loss measured in time before the disaster.", "RTO（目標復旧時間）は許容できる最大の停止時間、RPO（目標復旧時点）は災害前の時間で測る許容できる最大のデータ損失です。", "RTO (Recovery Time Objective) က လက်ခံနိုင်တဲ့ အများဆုံး downtime ဖြစ်ပြီး RPO (Recovery Point Objective) က disaster မတိုင်ခင် အချိန်နဲ့တိုင်းတဲ့ လက်ခံနိုင်တဲ့ အများဆုံး data loss ပါ။"),
      example: L("RPO 15 minutes means losing at most the last 15 minutes of orders; RTO 1 hour means service is back within an hour.", "RPO 15 分は直近 15 分以内の注文までしか失わないこと、RTO 1 時間は 1 時間以内にサービスが復旧することを意味します。", "RPO ၁၅ မိနစ်ဆိုတာ နောက်ဆုံး ၁၅ မိနစ်အတွင်း order တွေထက် ပိုမပျောက်ရ၊ RTO ၁ နာရီဆိုတာ တစ်နာရီအတွင်း service ပြန်ရရမယ်။") },
    { term: 'Pilot light',
      definition: L("A DR strategy where only the core data layer runs and replicates in the DR Region; application servers are launched and scaled only during a disaster.", "DR リージョンでコアのデータ層だけが稼働・レプリケーションし、アプリケーションサーバーは災害時にのみ起動・スケールする DR 戦略です。", "DR Region မှာ core data layer ကိုပဲ run ပြီး replicate လုပ်ထားကာ application server တွေကို disaster ဖြစ်မှ launch လုပ်ပြီး scale လုပ်တဲ့ DR strategy ပါ။"),
      example: L("An Aurora replica runs in Osaka while the ASG there has a minimum of zero.", "大阪で Aurora レプリカが稼働し、そこの ASG の最小数はゼロです。", "Osaka မှာ Aurora replica run နေပြီး အဲဒီက ASG ရဲ့ minimum က သုည။") },
    { term: 'Warm standby',
      definition: L("A DR strategy where a complete but scaled-down copy of production is always running in another Region and is scaled up during failover.", "本番の完全だが縮小されたコピーが別のリージョンで常に稼働し、フェイルオーバー時にスケールアップする DR 戦略です。", "Production ရဲ့ အပြည့်အစုံ ဒါပေမယ့် size လျှော့ထားတဲ့ copy ကို တခြား Region မှာ အမြဲ run ထားပြီး failover ချိန်မှာ scale up လုပ်တဲ့ DR strategy ပါ။"),
      example: L("Two small EC2 instances behind an ALB in the DR Region scale to twenty when Route 53 fails over.", "DR リージョンの ALB の背後にある 2 台の小さな EC2 が、Route 53 のフェイルオーバー時に 20 台にスケールします。", "DR Region ထဲ ALB နောက်က EC2 အသေး ၂ လုံးက Route 53 failover ဖြစ်တဲ့အခါ ၂၀ လုံးအထိ scale လုပ်တယ်။") },
    { term: 'RDS Multi-AZ',
      definition: L("A deployment option that keeps a synchronous standby in another AZ and fails over automatically using the same endpoint; for availability, not read scaling.", "別の AZ に同期スタンバイを維持し、同じエンドポイントで自動フェイルオーバーするデプロイオプションです。読み取りのスケーリングではなく可用性のためのものです。", "တခြား AZ မှာ synchronous standby ထားပြီး endpoint အတူတူနဲ့ အလိုအလျောက် failover လုပ်တဲ့ deployment option ပါ၊ read scale အတွက် မဟုတ်ဘဲ availability အတွက်။"),
      example: L("During an AZ outage the database endpoint points to the standby within a couple of minutes.", "AZ 障害時、データベースのエンドポイントは数分以内にスタンバイを指すようになります。", "AZ outage ဖြစ်ချိန်မှာ database endpoint က မိနစ်အနည်းငယ်အတွင်း standby ကို ညွှန်ပြောင်းသွားတယ်။") },
    { term: 'Visibility timeout',
      definition: L("The period during which a received SQS message is hidden from other consumers; default 30 seconds, maximum 12 hours.", "受信した SQS メッセージが他のコンシューマーから隠される期間です。デフォルトは 30 秒、最大 12 時間です。", "လက်ခံပြီးသား SQS message ကို တခြား consumer တွေ မမြင်ရအောင် ဖုံးထားတဲ့ ကာလပါ၊ default ၃၀ စက္ကန့်၊ အများဆုံး ၁၂ နာရီ။"),
      example: L("Processing takes 90 seconds, so set the visibility timeout to 120 seconds to avoid duplicates.", "処理に 90 秒かかるため、重複を避けるには可視性タイムアウトを 120 秒に設定します。", "Process လုပ်တာ ၉၀ စက္ကန့်ကြာလို့ duplicate မဖြစ်အောင် visibility timeout ကို ၁၂၀ စက္ကန့် ထားတယ်။") },
    { term: 'Dead-letter queue (DLQ)',
      definition: L("A queue that receives messages that failed processing more than `maxReceiveCount` times, isolating poison messages for inspection and redrive.", "`maxReceiveCount` 回を超えて処理に失敗したメッセージを受け取るキューで、ポイズンメッセージを調査とリドライブのために隔離します。", "`maxReceiveCount` အကြိမ်ထက် ပို process fail ဖြစ်တဲ့ message တွေကို လက်ခံတဲ့ queue ဖြစ်ပြီး poison message တွေကို စစ်ဖို့နဲ့ redrive လုပ်ဖို့ ခွဲထားပေးတယ်။"),
      example: L("`orders-dlq` with `maxReceiveCount: 5` and a CloudWatch alarm when it is not empty.", "`maxReceiveCount: 5` の `orders-dlq` と、空でないときの CloudWatch アラーム。", "`maxReceiveCount: 5` ပါတဲ့ `orders-dlq` နဲ့ ဗလာမဟုတ်ရင် CloudWatch alarm။") },
    { term: 'SQS FIFO queue',
      definition: L("A queue type that guarantees strict ordering within a message group and exactly-once processing; the name must end with `.fifo`.", "メッセージグループ内の厳密な順序と 1 回限りの処理を保証するキューのタイプで、名前は `.fifo` で終わる必要があります。", "Message group အတွင်း order တိကျမှုနဲ့ exactly-once processing ကို အာမခံတဲ့ queue type ဖြစ်ပြီး name က `.fifo` နဲ့ ဆုံးရမယ်။"),
      example: L("`payments.fifo` with `MessageGroupId` set to the account ID.", "`MessageGroupId` に口座 ID を設定した `payments.fifo`。", "`MessageGroupId` ကို account ID ထားတဲ့ `payments.fifo`။") },
    { term: 'SNS fan-out',
      definition: L("A pattern where one message published to an SNS topic is pushed to multiple subscribed SQS queues so each consumer processes it independently.", "SNS トピックに発行された 1 つのメッセージを、サブスクライブした複数の SQS キューにプッシュし、各コンシューマーが独立して処理するパターンです。", "SNS topic ကို publish လုပ်တဲ့ message တစ်ခုကို subscribe လုပ်ထားတဲ့ SQS queue အများဆီ push လုပ်ပြီး consumer တစ်ခုစီက သီးခြား process လုပ်တဲ့ pattern ပါ။"),
      example: L("An `orders` topic feeds billing, shipping and analytics queues.", "`orders` トピックが請求・配送・分析のキューに配信します。", "`orders` topic က billing၊ shipping၊ analytics queue တွေဆီ ပို့ပေးတယ်။") },
    { term: 'DynamoDB Accelerator (DAX)',
      definition: L("A fully managed in-memory cache for DynamoDB that delivers microsecond read latency through an API-compatible client.", "API 互換クライアントを通じてマイクロ秒単位の読み取りレイテンシーを提供する、DynamoDB 用のフルマネージドなインメモリキャッシュです。", "API-compatible client ကနေ microsecond read latency ပေးတဲ့ DynamoDB အတွက် fully managed in-memory cache ပါ။"),
      example: L("A leaderboard reads hot items from DAX instead of the table, with minimal code change.", "ランキングはコード変更を最小限にして、頻繁に読まれる項目をテーブルではなく DAX から読みます。", "Leaderboard က code နည်းနည်းပဲ ပြင်ပြီး hot item တွေကို table အစား DAX ကနေ ဖတ်တယ်။") },
    { term: 'Origin access control (OAC)',
      definition: L("A CloudFront feature that signs requests to an S3 origin so the bucket can stay private and accept only that distribution; supports SSE-KMS and replaces OAI.", "S3 オリジンへのリクエストに署名し、バケットをプライベートに保ったまま特定のディストリビューションのみを受け入れられるようにする CloudFront の機能です。SSE-KMS に対応し、OAI の後継です。", "S3 origin ဆီ request တွေကို sign လုပ်ပေးလို့ bucket ကို private ထားပြီး အဲဒီ distribution ကိုပဲ လက်ခံနိုင်စေတဲ့ CloudFront feature ပါ၊ SSE-KMS ကို support လုပ်ပြီး OAI ကို အစားထိုးတယ်။"),
      example: L("Bucket policy allows `cloudfront.amazonaws.com` only when `AWS:SourceArn` equals the distribution ARN.", "バケットポリシーは、`AWS:SourceArn` がディストリビューションの ARN と一致する場合のみ `cloudfront.amazonaws.com` を許可します。", "Bucket policy က `AWS:SourceArn` က distribution ARN နဲ့ တူမှပဲ `cloudfront.amazonaws.com` ကို ခွင့်ပြုတယ်။") },
    { term: 'Gateway VPC endpoint',
      definition: L("A free VPC endpoint for S3 and DynamoDB that is added as a route in route tables, keeping traffic on the AWS network without a NAT gateway.", "S3 と DynamoDB 用の無料の VPC エンドポイントで、ルートテーブルにルートとして追加し、NAT ゲートウェイなしでトラフィックを AWS ネットワーク内に留めます。", "S3 နဲ့ DynamoDB အတွက် အခမဲ့ VPC endpoint ဖြစ်ပြီး route table ထဲ route အဖြစ် ထည့်ရကာ NAT gateway မပါဘဲ traffic ကို AWS network ပေါ်မှာ ထားပေးတယ်။"),
      example: L("Private batch servers download terabytes from S3 with no NAT data processing charges.", "プライベートのバッチサーバーが NAT のデータ処理料金なしで S3 からテラバイト単位をダウンロードします。", "Private batch server တွေက NAT data processing charge မရှိဘဲ S3 ကနေ terabyte ချီ download လုပ်တယ်။") },
    { term: 'AWS Global Accelerator',
      definition: L("A networking service that gives two static anycast IP addresses and routes TCP and UDP traffic over the AWS global network to the nearest healthy Regional endpoint.", "2 つの固定エニーキャスト IP アドレスを提供し、TCP と UDP のトラフィックを AWS グローバルネットワーク経由で最寄りの正常なリージョンのエンドポイントにルーティングするネットワークサービスです。", "Static anycast IP address နှစ်ခုပေးပြီး TCP နဲ့ UDP traffic ကို AWS global network ပေါ်ကနေ အနီးဆုံး ကျန်းမာတဲ့ Regional endpoint ဆီ route လုပ်ပေးတဲ့ networking service ပါ။"),
      example: L("A UDP game in Tokyo and Frankfurt fails over between Regions in seconds without DNS caching delays.", "東京とフランクフルトの UDP ゲームが、DNS キャッシュによる遅延なく数秒でリージョン間をフェイルオーバーします。", "Tokyo နဲ့ Frankfurt က UDP game က DNS cache ကြောင့် နောက်ကျတာမရှိဘဲ စက္ကန့်ပိုင်းအတွင်း Region တွေကြား failover လုပ်တယ်။") },
  ],
};
