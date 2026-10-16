import { L, type SeedTopic } from '../types.js';

export const topic: SeedTopic = {
  slug: 'aws-operations',
  icon: 'Activity',
  level: 'ASSOCIATE',
  exams: ['CLF-C02', 'SAA-C03'],
  name: L("AWS Operations: Monitoring, Automation & IaC", "AWS 運用：監視・自動化・IaC", "AWS Operations- Monitoring၊ Automation နဲ့ IaC"),
  description: L(
    "Run AWS workloads like a professional: CloudWatch metrics, logs and alarms, CloudTrail and Config for audit and compliance, EventBridge, Systems Manager, Trusted Advisor and cost tools, CloudFormation/CDK/Terraform and CI/CD with GitHub Actions OIDC.",
    "AWS のワークロードをプロのように運用します。CloudWatch のメトリクス・ログ・アラーム、監査とコンプライアンスのための CloudTrail と Config、EventBridge、Systems Manager、Trusted Advisor とコスト管理ツール、CloudFormation/CDK/Terraform、そして GitHub Actions OIDC を使った CI/CD を学びます。",
    "AWS workload တွေကို professional တစ်ယောက်လို run တတ်အောင် လေ့လာမယ်- CloudWatch metric၊ log၊ alarm၊ audit နဲ့ compliance အတွက် CloudTrail နဲ့ Config၊ EventBridge၊ Systems Manager၊ Trusted Advisor နဲ့ cost tool တွေ၊ CloudFormation/CDK/Terraform နဲ့ GitHub Actions OIDC သုံးတဲ့ CI/CD။",
  ),
  lesson: {
    minutes: 24,
    objectives: [
      L("Choose the right service for a monitoring question: CloudWatch (performance), CloudTrail (who did what), Config (what changed and is it compliant).",
        "監視の問いに合ったサービスを選べる：CloudWatch（パフォーマンス）、CloudTrail（誰が何をしたか）、Config（何が変わり、準拠しているか）。",
        "Monitoring မေးခွန်းတစ်ခုအတွက် မှန်တဲ့ service ကို ရွေးနိုင်မယ်- CloudWatch (performance)၊ CloudTrail (ဘယ်သူ ဘာလုပ်လဲ)၊ Config (ဘာပြောင်းလဲ၊ compliant ဖြစ်လား)။"),
      L("Collect memory and disk metrics with the CloudWatch agent, query logs with Logs Insights and build alarms with actions.",
        "CloudWatch エージェントでメモリとディスクのメトリクスを収集し、Logs Insights でログを検索し、アクション付きのアラームを作成できる。",
        "CloudWatch agent နဲ့ memory၊ disk metric တွေ စုနိုင်မယ်၊ Logs Insights နဲ့ log ရှာနိုင်မယ်၊ action ပါတဲ့ alarm တွေ ဆောက်နိုင်မယ်။"),
      L("Operate EC2 fleets with Systems Manager (Session Manager, Run Command, Parameter Store, Patch Manager) and troubleshoot a missing managed instance.",
        "Systems Manager（Session Manager、Run Command、Parameter Store、Patch Manager）で EC2 群を運用し、マネージドインスタンスが表示されない問題をトラブルシュートできる。",
        "Systems Manager (Session Manager၊ Run Command၊ Parameter Store၊ Patch Manager) နဲ့ EC2 fleet ကို run နိုင်ပြီး managed instance မပေါ်တဲ့ ပြဿနာကို ဖြေရှင်းနိုင်မယ်။"),
      L("Automate reactions to events with EventBridge rules and schedules.",
        "EventBridge のルールとスケジュールで、イベントへの対応を自動化できる。",
        "EventBridge rule နဲ့ schedule တွေသုံးပြီး event တွေကို အလိုအလျောက် တုံ့ပြန်အောင် လုပ်နိုင်မယ်။"),
      L("Use Trusted Advisor, Health Dashboard, Compute Optimizer, Cost Explorer, Budgets, Cost Anomaly Detection and Service Quotas for their correct purpose.",
        "Trusted Advisor、Health Dashboard、Compute Optimizer、Cost Explorer、Budgets、Cost Anomaly Detection、Service Quotas を正しい目的で使い分けられる。",
        "Trusted Advisor၊ Health Dashboard၊ Compute Optimizer၊ Cost Explorer၊ Budgets၊ Cost Anomaly Detection၊ Service Quotas ကို သူ့နေရာနဲ့သူ မှန်မှန်ကန်ကန် သုံးနိုင်မယ်။"),
      L("Read a CloudFormation template, use change sets, drift detection and StackSets, and compare CloudFormation with CDK and Terraform.",
        "CloudFormation テンプレートを読み、変更セット・ドリフト検出・StackSets を使い、CDK や Terraform と比較できる。",
        "CloudFormation template ကို ဖတ်နိုင်မယ်၊ change set၊ drift detection၊ StackSets ကို သုံးနိုင်မယ်၊ CDK နဲ့ Terraform နဲ့ နှိုင်းယှဉ်နိုင်မယ်။"),
      L("Deploy from GitHub Actions to AWS with OIDC short-lived credentials instead of long-lived access keys.",
        "長期のアクセスキーではなく、OIDC による短期認証情報で GitHub Actions から AWS にデプロイできる。",
        "သက်တမ်းရှည် access key အစား OIDC short-lived credential နဲ့ GitHub Actions ကနေ AWS ကို deploy လုပ်နိုင်မယ်။"),
    ],
    sections: [
      {
        id: "ops-toolbox",
        title: L("The operations toolbox: which service answers which question", "運用ツールボックス：どのサービスがどの問いに答えるか", "Operations toolbox- ဘယ် service က ဘယ်မေးခွန်းကို ဖြေလဲ"),
        blocks: [
          { type: 'p', text: L(
            "Once your app is running on AWS, the real work begins: is it healthy, who changed it, is it compliant, is it costing too much? AWS has a separate service for each question, and the exam loves to mix them up. Think of a hospital: **CloudWatch** is the heart-rate monitor (live vital signs), **CloudTrail** is the security camera at the door (who came in and what they did), and **AWS Config** is the medical record (how the patient changed over time and whether it meets the rules).",
            "アプリが AWS 上で動き始めてからが本番です。正常に動いているか、誰が変更したか、ルールに準拠しているか、コストがかかりすぎていないか。AWS ではこれらの問いごとに別々のサービスがあり、試験ではよく混同を誘います。病院で例えると、**CloudWatch** は心拍モニター（リアルタイムのバイタル）、**CloudTrail** は入口の防犯カメラ（誰が入って何をしたか）、**AWS Config** はカルテ（患者が時間とともにどう変化し、基準を満たしているか）です。",
            "App က AWS ပေါ်မှာ run နေပြီဆိုရင် တကယ့်အလုပ်က စတာပါ- ကောင်းကောင်း run နေလား၊ ဘယ်သူ ပြောင်းလိုက်လဲ၊ rule တွေနဲ့ ကိုက်လား၊ ငွေ အရမ်းကုန်နေလား။ AWS မှာ မေးခွန်းတစ်ခုစီအတွက် service သီးသန့်ရှိပြီး exam က သူတို့ကို ရောထွေးအောင် မေးလေ့ရှိတယ်။ ဆေးရုံနဲ့ ဥပမာပေးရရင် **CloudWatch** က နှလုံးခုန်နှုန်း monitor (live vital sign)၊ **CloudTrail** က တံခါးဝက CCTV (ဘယ်သူဝင်လာပြီး ဘာလုပ်လဲ)၊ **AWS Config** က လူနာမှတ်တမ်း (အချိန်နဲ့အမျှ ဘယ်လိုပြောင်းလဲပြီး စံနှုန်းနဲ့ ကိုက်လား) ပါ။"
          ) },
          { type: 'table',
            head: [L("Question you are asking", "あなたの問い", "မေးနေတဲ့ မေးခွန်း"), L("Service", "サービス", "Service အမည်"), L("Typical example", "典型例", "ပုံမှန် ဥပမာ")],
            rows: [
              [L("Is it healthy and fast right now?", "今、正常で速いか？", "အခု ကောင်းကောင်း မြန်မြန် run နေလား?"), L("Amazon CloudWatch", "Amazon CloudWatch（監視）", "Amazon CloudWatch (စောင့်ကြည့်ခြင်း)"), L("Alarm when CPU > 80% for 10 minutes", "CPU が 10 分間 80% 超でアラーム", "CPU ၁၀ မိနစ်ကြာ 80% ကျော်ရင် alarm")],
              [L("Who made this API call?", "この API 呼び出しは誰が行ったか？", "ဒီ API call ကို ဘယ်သူ ခေါ်လဲ?"), L("AWS CloudTrail", "AWS CloudTrail（API 監査）", "AWS CloudTrail (API မှတ်တမ်း)"), L("Who deleted the S3 bucket yesterday?", "昨日 S3 バケットを削除したのは誰か？", "မနေ့က S3 bucket ကို ဘယ်သူ ဖျက်လဲ?")],
              [L("What did this resource look like, and is it compliant?", "このリソースの構成はどうだったか、準拠しているか？", "ဒီ resource က ဘယ်လို configuration ရှိခဲ့လဲ၊ compliant ဖြစ်လား?"), L("AWS Config", "AWS Config（構成記録）", "AWS Config (configuration မှတ်တမ်း)"), L("Flag any security group open to 0.0.0.0/0 on port 22", "ポート 22 が 0.0.0.0/0 に開いたセキュリティグループを検出", "Port 22 ကို 0.0.0.0/0 ဖွင့်ထားတဲ့ security group ကို ရှာပြ")],
              [L("When X happens, do Y automatically", "X が起きたら自動で Y を実行", "X ဖြစ်ရင် Y ကို အလိုအလျောက် လုပ်"), L("Amazon EventBridge", "Amazon EventBridge（イベント連携）", "Amazon EventBridge (event ချိတ်ဆက်မှု)"), L("Instance stopped → notify Slack via Lambda", "インスタンス停止 → Lambda で Slack に通知", "Instance ရပ်သွား → Lambda နဲ့ Slack ကို အသိပေး")],
              [L("Run commands / patch / log in to servers", "サーバーへのコマンド実行・パッチ適用・ログイン", "Server တွေကို command run/patch/login"), L("AWS Systems Manager", "AWS Systems Manager（サーバー運用）", "AWS Systems Manager (server စီမံခန့်ခွဲမှု)"), L("Restart Docker on 50 instances without SSH", "SSH なしで 50 台の Docker を再起動", "SSH မသုံးဘဲ instance ၅၀ မှာ Docker restart")],
              [L("Am I following best practices? Is AWS itself OK?", "ベストプラクティスに沿っているか？ AWS 自体は正常か？", "Best practice အတိုင်း လုပ်ထားလား? AWS ကိုယ်တိုင် အဆင်ပြေလား?"), L("Trusted Advisor / AWS Health Dashboard", "Trusted Advisor / AWS Health Dashboard（推奨と障害情報）", "Trusted Advisor / AWS Health Dashboard (အကြံပြုချက်နဲ့ health သတင်း)"), L("Unused EIPs; scheduled EC2 host retirement", "未使用の EIP、EC2 ホストのリタイア予定", "မသုံးတဲ့ EIP၊ EC2 host retirement အစီအစဉ်")],
              [L("How much am I spending, and will I overspend?", "いくら使っていて、予算を超えそうか？", "ငွေ ဘယ်လောက်ကုန်နေလဲ၊ budget ကျော်မလား?"), L("Cost Explorer / Budgets / Cost Anomaly Detection", "Cost Explorer / Budgets / Cost Anomaly Detection（コスト管理）", "Cost Explorer / Budgets / Cost Anomaly Detection (cost စီမံမှု)"), L("Email when forecasted spend > budget", "予測コストが予算を超えたらメール", "ခန့်မှန်း spend က budget ကျော်ရင် email")],
            ] },
          { type: 'callout', tone: 'memory', text: L(
            "**Watch – Trail – Config**: CloudWatch = **performance** (metrics/logs), CloudTrail = **API activity** (who, when, from where), Config = **configuration history + compliance**. If the question says 'audit who', pick CloudTrail; if it says 'track configuration changes' or 'compliance', pick Config.",
            "**Watch – Trail – Config**：CloudWatch = **パフォーマンス**（メトリクス・ログ）、CloudTrail = **API アクティビティ**（誰が・いつ・どこから）、Config = **構成履歴＋コンプライアンス**。問題文に「誰が操作したか監査」とあれば CloudTrail、「構成変更の追跡」や「コンプライアンス」とあれば Config を選びます。",
            "**Watch – Trail – Config** လို့ မှတ်ပါ- CloudWatch = **performance** (metric/log)၊ CloudTrail = **API activity** (ဘယ်သူ၊ ဘယ်တော့၊ ဘယ်ကနေ)၊ Config = **configuration history + compliance**။ မေးခွန်းမှာ 'ဘယ်သူလုပ်လဲ audit' ဆိုရင် CloudTrail၊ 'configuration ပြောင်းတာ track' ဒါမှမဟုတ် 'compliance' ဆိုရင် Config ကို ရွေးပါ။"
          ) },
        ],
      },
      {
        id: "cloudwatch-metrics",
        title: L("CloudWatch metrics and the CloudWatch agent", "CloudWatch メトリクスと CloudWatch エージェント", "CloudWatch metric နဲ့ CloudWatch agent"),
        blocks: [
          { type: 'p', text: L(
            "A **metric** is a time-ordered set of data points, identified by a **namespace** (for example `AWS/EC2`), a **metric name** (`CPUUtilization`) and **dimensions** (`InstanceId=i-0abc...`). AWS services publish metrics automatically for free. For EC2, **basic monitoring** sends data every **5 minutes**; **detailed monitoring** (paid) sends every **1 minute**. Metrics are kept for up to 15 months, with older data rolled up to coarser resolution.",
            "**メトリクス**とは時系列のデータポイントの集まりで、**名前空間**（例：`AWS/EC2`）、**メトリクス名**（`CPUUtilization`）、**ディメンション**（`InstanceId=i-0abc...`）で識別されます。AWS サービスは自動的に無料でメトリクスを発行します。EC2 の場合、**基本モニタリング**は **5 分**間隔、**詳細モニタリング**（有料）は **1 分**間隔でデータを送ります。メトリクスは最大 15 か月保持され、古いデータは粗い粒度に集約されます。",
            "**Metric** ဆိုတာ အချိန်အလိုက်စီထားတဲ့ data point တွေပါ။ **Namespace** (ဥပမာ `AWS/EC2`)၊ **metric name** (`CPUUtilization`)၊ **dimension** (`InstanceId=i-0abc...`) တို့နဲ့ ခွဲခြားတယ်။ AWS service တွေက metric တွေကို အလိုအလျောက် အခမဲ့ ပို့ပေးတယ်။ EC2 မှာ **basic monitoring** က **၅ မိနစ်** တစ်ခါ၊ **detailed monitoring** (ပိုက်ဆံပေးရ) က **၁ မိနစ်** တစ်ခါ ပို့တယ်။ Metric တွေကို ၁၅ လအထိ သိမ်းထားပြီး ဟောင်းတဲ့ data ကို resolution နိမ့်အောင် စုပေါင်းထားတယ်။"
          ) },
          { type: 'p', text: L(
            "Here is the classic trap: CloudWatch sees EC2 from the **hypervisor**, outside the guest OS. It can see CPU, network, disk I/O on instance store and status checks, but it **cannot see memory usage, disk space used on EBS volumes, or process counts**. Those live inside the OS. To get them you install the **CloudWatch agent** (unified agent), which also ships log files such as `/var/log/nginx/access.log` to CloudWatch Logs. The agent needs an IAM role with `CloudWatchAgentServerPolicy`, and its config can be stored in Parameter Store and pushed to a fleet with Systems Manager.",
            "ここが定番のひっかけです。CloudWatch は EC2 をゲスト OS の外側、つまり**ハイパーバイザー**から見ています。CPU、ネットワーク、インスタンスストアのディスク I/O、ステータスチェックは見えますが、**メモリ使用率、EBS ボリュームのディスク使用量、プロセス数は見えません**。これらは OS の中にある情報だからです。取得するには **CloudWatch エージェント**（統合エージェント）をインストールします。このエージェントは `/var/log/nginx/access.log` などのログファイルを CloudWatch Logs に送ることもできます。エージェントには `CloudWatchAgentServerPolicy` を持つ IAM ロールが必要で、設定は Parameter Store に保存して Systems Manager でフリート全体に配布できます。",
            "ဒါက exam မှာ ခဏခဏ ထောင်ချောက်ဆင်တဲ့ အချက်ပါ- CloudWatch က EC2 ကို guest OS အပြင်ဘက် **hypervisor** ကနေ ကြည့်တာပါ။ CPU၊ network၊ instance store disk I/O၊ status check တွေကို မြင်ရပေမယ့် **memory usage၊ EBS volume ရဲ့ disk space သုံးထားတာ၊ process အရေအတွက်** တွေကို မမြင်ရဘူး။ အဲဒါတွေက OS ထဲမှာပဲ ရှိလို့ပါ။ ရချင်ရင် **CloudWatch agent** (unified agent) ကို install လုပ်ရမယ်။ ဒီ agent က `/var/log/nginx/access.log` လို log file တွေကိုလည်း CloudWatch Logs ဆီ ပို့ပေးနိုင်တယ်။ Agent အတွက် `CloudWatchAgentServerPolicy` ပါတဲ့ IAM role လိုပြီး config ကို Parameter Store မှာ သိမ်းကာ Systems Manager နဲ့ fleet တစ်ခုလုံးကို ဖြန့်လို့ရတယ်။"
          ) },
          { type: 'p', text: L(
            "You can also publish **custom metrics** from your own code with `PutMetricData` (for example `OrdersPerMinute` or queue lag). Custom metrics are standard resolution (60 seconds) by default, or **high-resolution** down to **1 second** when you need very fast alarms. For apps that write structured logs, the **Embedded Metric Format (EMF)** lets you create metrics just by writing a JSON log line.",
            "独自のコードから `PutMetricData` で**カスタムメトリクス**（例：`OrdersPerMinute` やキューの遅延）を発行することもできます。カスタムメトリクスはデフォルトで標準解像度（60 秒）ですが、非常に速いアラームが必要な場合は最短 **1 秒**の**高解像度**にできます。構造化ログを出力するアプリでは、**Embedded Metric Format（EMF）**を使うと JSON のログ行を書くだけでメトリクスを作成できます。",
            "ကိုယ့် code ကနေ `PutMetricData` နဲ့ **custom metric** (ဥပမာ `OrdersPerMinute`၊ queue lag) တွေလည်း ပို့လို့ရတယ်။ Custom metric တွေက default အားဖြင့် standard resolution (စက္ကန့် ၆၀) ဖြစ်ပြီး alarm အရမ်းမြန်ဖို့လိုရင် **၁ စက္ကန့်** အထိ **high-resolution** လုပ်လို့ရတယ်။ Structured log ရေးတဲ့ app တွေအတွက် **Embedded Metric Format (EMF)** သုံးရင် JSON log line တစ်ကြောင်းရေးရုံနဲ့ metric ဖြစ်လာတယ်။"
          ) },
          { type: 'callout', tone: 'memory', text: L(
            "**'Outside the box' vs 'inside the box'**: CloudWatch by default sees only what the hypervisor sees (CPU, network, status checks). Anything **inside** the OS (memory, disk %, app logs) = **CloudWatch agent**.",
            "**「箱の外」と「箱の中」**：CloudWatch はデフォルトでハイパーバイザーから見えるもの（CPU、ネットワーク、ステータスチェック）しか見えません。OS の**中**にあるもの（メモリ、ディスク使用率、アプリログ）は **CloudWatch エージェント**が必要です。",
            "**'သေတ္တာအပြင်' နဲ့ 'သေတ္တာအတွင်း'** လို့ မှတ်ပါ- CloudWatch က default မှာ hypervisor မြင်တာ (CPU၊ network၊ status check) ပဲ မြင်တယ်။ OS **အတွင်း** ကအရာ (memory၊ disk %၊ app log) မှန်သမျှ = **CloudWatch agent** လိုတယ်။"
          ) },
        ],
      },
      {
        id: "logs-alarms-dashboards",
        title: L("CloudWatch Logs, Logs Insights, alarms and dashboards", "CloudWatch Logs、Logs Insights、アラーム、ダッシュボード", "CloudWatch Logs၊ Logs Insights၊ Alarm နဲ့ Dashboard"),
        blocks: [
          { type: 'p', text: L(
            "**CloudWatch Logs** stores log events in **log streams** (one per source, such as one container) grouped into **log groups** (one per app, such as `/myapp/api`). Retention is set per log group and the default is **never expire**, which quietly grows your bill, so always set retention (for example 30 days) and export older logs to S3 if needed. A **metric filter** turns log patterns into metrics (count lines containing `ERROR`), and a **subscription filter** streams logs in near real time to Lambda, Kinesis Data Streams or Data Firehose.",
            "**CloudWatch Logs** はログイベントを**ログストリーム**（ソースごと、例：コンテナ 1 つごと）に保存し、それらを**ロググループ**（アプリごと、例：`/myapp/api`）にまとめます。保持期間はロググループごとに設定し、デフォルトは**無期限**のため、知らないうちに料金が増えます。必ず保持期間（例：30 日）を設定し、必要なら古いログを S3 にエクスポートしましょう。**メトリクスフィルター**はログのパターンをメトリクスに変換し（`ERROR` を含む行を数えるなど）、**サブスクリプションフィルター**はログをほぼリアルタイムで Lambda、Kinesis Data Streams、Data Firehose に流します。",
            "**CloudWatch Logs** က log event တွေကို **log stream** (source တစ်ခုစီ၊ ဥပမာ container တစ်ခုစီ) ထဲမှာ သိမ်းပြီး **log group** (app တစ်ခုစီ၊ ဥပမာ `/myapp/api`) အဖြစ် စုထားတယ်။ Retention ကို log group တစ်ခုချင်းစီမှာ သတ်မှတ်ရပြီး default က **never expire** ဖြစ်လို့ bill က တိတ်တိတ်လေး တက်လာတတ်တယ်။ ဒါကြောင့် retention (ဥပမာ ၃၀ ရက်) အမြဲသတ်မှတ်ပြီး ဟောင်းတဲ့ log ကို လိုရင် S3 ဆီ export လုပ်ပါ။ **Metric filter** က log pattern ကို metric ပြောင်းပေးတယ် (`ERROR` ပါတဲ့ line ရေတွက်တာမျိုး)၊ **subscription filter** က log တွေကို Lambda၊ Kinesis Data Streams၊ Data Firehose ဆီ near real time စီးဆင်းပေးတယ်။"
          ) },
          { type: 'p', text: L(
            "**CloudWatch Logs Insights** is an interactive query language for log groups. You pay per GB scanned, so narrow the time range. A typical query finds the slowest or most frequent errors in the last hour:",
            "**CloudWatch Logs Insights** はロググループ向けの対話型クエリ言語です。スキャンした GB 単位で課金されるため、時間範囲を絞りましょう。典型的なクエリは、直近 1 時間で最も多いエラーを探すものです。",
            "**CloudWatch Logs Insights** က log group တွေကို interactive query လုပ်တဲ့ language ပါ။ Scan လုပ်တဲ့ GB အလိုက် ပိုက်ဆံကျလို့ time range ကို ကျဉ်းအောင်ထားပါ။ နောက်ဆုံး တစ်နာရီအတွင်း အများဆုံးဖြစ်တဲ့ error တွေကို ရှာတဲ့ ပုံမှန် query က ဒီလိုပါ-"
          ) },
          { type: 'code', lang: 'bash', code: `# Logs Insights query run from the CLI (last 1 hour)
aws logs start-query \\
  --log-group-name /myapp/api \\
  --start-time $(date -d '-1 hour' +%s) \\
  --end-time $(date +%s) \\
  --query-string 'fields @timestamp, @message
    | filter @message like /ERROR/
    | stats count(*) as errors by bin(5m)
    | sort errors desc
    | limit 20'

# then fetch results with the returned queryId
aws logs get-query-results --query-id <queryId>`,
            caption: L("Logs Insights: count ERROR lines in 5-minute buckets.", "Logs Insights：ERROR 行を 5 分ごとに集計します。", "Logs Insights- ERROR line တွေကို ၅ မိနစ်အပိုင်းလိုက် ရေတွက်တာ။") },
          { type: 'p', text: L(
            "A **CloudWatch alarm** watches one metric (or a metric math expression) and has three states: `OK`, `ALARM` and `INSUFFICIENT_DATA`. You define the statistic, period, threshold and **evaluation periods** (for example 2 out of 3 periods of 5 minutes) to avoid noisy alerts. Alarm **actions** can notify an **SNS topic** (email, SMS, Lambda, chat), run an **EC2 action** (stop, terminate, reboot, recover), trigger an **Auto Scaling policy**, or create a Systems Manager OpsItem. A **composite alarm** combines several alarms with AND/OR to reduce alert noise.",
            "**CloudWatch アラーム**は 1 つのメトリクス（またはメトリクス計算式）を監視し、`OK`、`ALARM`、`INSUFFICIENT_DATA` の 3 つの状態を持ちます。統計、期間、しきい値、**評価期間**（例：5 分間隔の 3 期間中 2 期間）を指定して、誤報を減らします。アラームの**アクション**では、**SNS トピック**への通知（メール、SMS、Lambda、チャット）、**EC2 アクション**（停止・終了・再起動・復旧）、**Auto Scaling ポリシー**の実行、Systems Manager OpsItem の作成ができます。**複合アラーム**は複数のアラームを AND/OR で組み合わせ、アラートのノイズを減らします。",
            "**CloudWatch alarm** က metric တစ်ခု (ဒါမှမဟုတ် metric math expression) ကို စောင့်ကြည့်ပြီး `OK`၊ `ALARM`၊ `INSUFFICIENT_DATA` ဆိုတဲ့ state ၃ ခုရှိတယ်။ Alert အလွဲတွေ မထွက်အောင် statistic၊ period၊ threshold နဲ့ **evaluation period** (ဥပမာ ၅ မိနစ် period ၃ ခုထဲက ၂ ခု) ကို သတ်မှတ်ရတယ်။ Alarm **action** အနေနဲ့ **SNS topic** ကို အသိပေးတာ (email၊ SMS၊ Lambda၊ chat)၊ **EC2 action** (stop၊ terminate၊ reboot၊ recover)၊ **Auto Scaling policy** ကို နှိုးတာ၊ Systems Manager OpsItem ဖန်တီးတာ လုပ်လို့ရတယ်။ **Composite alarm** က alarm အများကြီးကို AND/OR နဲ့ ပေါင်းပြီး alert ဆူညံမှုကို လျှော့ပေးတယ်။"
          ) },
          { type: 'code', lang: 'bash', code: `# Alarm: CPU >= 80% for 2 of 3 five-minute periods -> SNS
aws cloudwatch put-metric-alarm \\
  --alarm-name web-cpu-high \\
  --namespace AWS/EC2 --metric-name CPUUtilization \\
  --dimensions Name=InstanceId,Value=i-0123456789abcdef0 \\
  --statistic Average --period 300 \\
  --evaluation-periods 3 --datapoints-to-alarm 2 \\
  --threshold 80 --comparison-operator GreaterThanOrEqualToThreshold \\
  --treat-missing-data missing \\
  --alarm-actions arn:aws:sns:ap-northeast-1:111122223333:ops-alerts`,
            caption: L("Create a CPU alarm that notifies an SNS topic.", "SNS トピックに通知する CPU アラームを作成します。", "SNS topic ကို အသိပေးမယ့် CPU alarm ဆောက်တာ။") },
          { type: 'callout', tone: 'exam', text: L(
            "Exam patterns: 'recover an EC2 instance automatically when the underlying host fails' → CloudWatch alarm on `StatusCheckFailed_System` with the **EC2 recover action**. 'Alert when memory usage > 90%' → install the **CloudWatch agent** first, then alarm on the custom metric. **CloudWatch dashboards** are global, can show metrics from multiple Regions and accounts, and can be shared.",
            "試験のパターン：「基盤ホストの障害時に EC2 インスタンスを自動復旧したい」→ `StatusCheckFailed_System` の CloudWatch アラームに **EC2 復旧アクション**。「メモリ使用率が 90% を超えたら通知」→ まず **CloudWatch エージェント**を入れ、そのカスタムメトリクスにアラームを設定します。**CloudWatch ダッシュボード**はグローバルで、複数リージョン・複数アカウントのメトリクスを表示でき、共有も可能です。",
            "Exam pattern- 'အောက်က host ပျက်ရင် EC2 instance ကို အလိုအလျောက် recover လုပ်ချင်တယ်' → `StatusCheckFailed_System` အပေါ် CloudWatch alarm နဲ့ **EC2 recover action**။ 'Memory usage 90% ကျော်ရင် alert' → **CloudWatch agent** အရင်တင်ပြီးမှ custom metric အပေါ် alarm ထားပါ။ **CloudWatch dashboard** တွေက global ဖြစ်ပြီး region နဲ့ account အများကြီးက metric တွေကို ပြနိုင်ကာ share လုပ်လို့လည်းရတယ်။"
          ) },
        ],
      },
      {
        id: "cloudtrail-config",
        title: L("CloudTrail and AWS Config: audit and compliance", "CloudTrail と AWS Config：監査とコンプライアンス", "CloudTrail နဲ့ AWS Config- Audit နဲ့ Compliance"),
        blocks: [
          { type: 'p', text: L(
            "**AWS CloudTrail** records API calls made in your account: by the console, CLI, SDKs and AWS services themselves. Each event tells you **who** (IAM identity), **what** (`DeleteBucket`), **when**, **from where** (source IP) and whether it succeeded. **Event history** shows the last **90 days of management events** for free, with no setup. For longer retention or analysis you create a **trail**, which delivers log files to an **S3 bucket** (optionally also to CloudWatch Logs so you can alarm on events like root login).",
            "**AWS CloudTrail** はアカウント内で行われた API 呼び出し（コンソール、CLI、SDK、AWS サービス自身によるもの）を記録します。各イベントから**誰が**（IAM ID）、**何を**（`DeleteBucket`）、**いつ**、**どこから**（送信元 IP）行い、成功したかがわかります。**イベント履歴**では、設定なしで直近 **90 日間の管理イベント**を無料で確認できます。より長い保持や分析には**証跡（trail）**を作成し、ログファイルを **S3 バケット**に配信します（ルートログインなどのイベントでアラームを出すため、CloudWatch Logs にも送れます）。",
            "**AWS CloudTrail** က account ထဲမှာ ခေါ်တဲ့ API call တွေ (console၊ CLI၊ SDK နဲ့ AWS service တွေကိုယ်တိုင် ခေါ်တာ) ကို မှတ်တမ်းတင်တယ်။ Event တစ်ခုစီက **ဘယ်သူ** (IAM identity)၊ **ဘာ** (`DeleteBucket`)၊ **ဘယ်တော့**၊ **ဘယ်ကနေ** (source IP) လုပ်ပြီး အောင်မြင်လားဆိုတာ ပြောပြတယ်။ **Event history** မှာ setup မလိုဘဲ နောက်ဆုံး **ရက် ၉၀ က management event** တွေကို အခမဲ့ ကြည့်လို့ရတယ်။ ပိုကြာကြာ သိမ်းချင်ရင် ဒါမှမဟုတ် analyze လုပ်ချင်ရင် **trail** ဆောက်ပြီး log file တွေကို **S3 bucket** ဆီ ပို့ရတယ် (root login လို event တွေမှာ alarm ထားဖို့ CloudWatch Logs ဆီလည်း ပို့လို့ရတယ်)။"
          ) },
          { type: 'table',
            head: [L("Event type", "イベントタイプ", "Event အမျိုးအစား"), L("What it records", "記録内容", "ဘာမှတ်တမ်းတင်လဲ"), L("Logged by default?", "デフォルトで記録？", "Default မှာ log လုပ်လား?")],
            rows: [
              [L("Management events", "管理イベント", "Management event များ"), L("Control-plane operations: `RunInstances`, `CreateUser`, `PutBucketPolicy`, console sign-in", "コントロールプレーン操作：`RunInstances`、`CreateUser`、`PutBucketPolicy`、コンソールサインイン", "Control-plane လုပ်ဆောင်ချက်- `RunInstances`၊ `CreateUser`၊ `PutBucketPolicy`၊ console sign-in"), L("Yes (event history 90 days; first copy in a trail is free)", "はい（イベント履歴 90 日、証跡の最初のコピーは無料）", "ဟုတ်တယ် (event history ရက် ၉၀၊ trail ထဲ ပထမ copy အခမဲ့)")],
              [L("Data events", "データイベント", "Data event များ"), L("High-volume data-plane operations: S3 `GetObject`/`PutObject`, Lambda `Invoke`, DynamoDB item operations", "大量のデータプレーン操作：S3 の `GetObject`/`PutObject`、Lambda の `Invoke`、DynamoDB の項目操作", "Volume များတဲ့ data-plane လုပ်ဆောင်ချက်- S3 `GetObject`/`PutObject`၊ Lambda `Invoke`၊ DynamoDB item operation"), L("No, enable on a trail (extra cost)", "いいえ、証跡で有効化が必要（追加料金）", "မဟုတ်ဘူး၊ trail မှာ enable လုပ်ရ (ပိုက်ဆံ ထပ်ကျ)")],
              [L("Insights events", "Insights イベント", "Insights event များ"), L("Unusual API call rates or error rates", "API 呼び出し数やエラー率の異常", "ပုံမှန်မဟုတ်တဲ့ API call rate ဒါမှမဟုတ် error rate"), L("No, enable on a trail (extra cost)", "いいえ、証跡で有効化が必要（追加料金）", "မဟုတ်ဘူး၊ trail မှာ enable လုပ်ရ (ပိုက်ဆံ ထပ်ကျ)")],
            ] },
          { type: 'p', text: L(
            "Best practice: create a **multi-Region trail** (or an **organization trail** from AWS Organizations) into a central, locked-down S3 bucket, and enable **log file integrity validation** so you can prove logs were not modified. **CloudTrail Lake** is a managed data lake that stores events and lets you run SQL queries over them without building your own Athena pipeline.",
            "ベストプラクティスは、**マルチリージョン証跡**（または AWS Organizations の**組織の証跡**）を作成し、アクセスを厳しく制限した中央の S3 バケットに保存し、**ログファイルの整合性検証**を有効にしてログが改ざんされていないことを証明できるようにすることです。**CloudTrail Lake** はイベントを保存するマネージドなデータレイクで、自前で Athena のパイプラインを作らなくても SQL でクエリできます。",
            "Best practice က **multi-Region trail** (ဒါမှမဟုတ် AWS Organizations ရဲ့ **organization trail**) ကို ဆောက်ပြီး access ကို တင်းကျပ်စွာ ကန့်သတ်ထားတဲ့ central S3 bucket ထဲ သိမ်းကာ log တွေ ပြင်ဆင်မခံရကြောင်း သက်သေပြနိုင်ဖို့ **log file integrity validation** ကို enable လုပ်တာပါ။ **CloudTrail Lake** က event တွေကို သိမ်းပေးတဲ့ managed data lake ဖြစ်ပြီး ကိုယ်ပိုင် Athena pipeline မဆောက်ဘဲ SQL နဲ့ query လုပ်လို့ရတယ်။"
          ) },
          { type: 'p', text: L(
            "**AWS Config** continuously records the **configuration** of your resources as **configuration items** and keeps a **timeline**: 'this security group allowed port 22 from 0.0.0.0/0 between 10:02 and 10:47'. **Config rules** (AWS managed rules such as `s3-bucket-public-read-prohibited` or `restricted-ssh`, or custom rules with Lambda or Guard) evaluate each resource as COMPLIANT or NON_COMPLIANT. **Remediation actions** use Systems Manager Automation documents to fix problems automatically, for example re-enabling S3 Block Public Access. **Conformance packs** bundle rules (for example a CIS pack), and **aggregators** give a multi-account, multi-Region view.",
            "**AWS Config** はリソースの**構成**を**構成アイテム**として継続的に記録し、**タイムライン**を保持します。例えば「このセキュリティグループは 10:02〜10:47 の間、0.0.0.0/0 からポート 22 を許可していた」といった情報です。**Config ルール**（`s3-bucket-public-read-prohibited` や `restricted-ssh` などの AWS マネージドルール、または Lambda や Guard によるカスタムルール）で各リソースを COMPLIANT / NON_COMPLIANT と評価します。**修復アクション**は Systems Manager Automation ドキュメントを使って自動修正します（例：S3 のブロックパブリックアクセスを再有効化）。**コンフォーマンスパック**はルールをまとめたもの（例：CIS パック）で、**アグリゲーター**は複数アカウント・複数リージョンを一元的に表示します。",
            "**AWS Config** က resource တွေရဲ့ **configuration** ကို **configuration item** အဖြစ် အဆက်မပြတ် မှတ်တမ်းတင်ပြီး **timeline** ထားပေးတယ်- 'ဒီ security group က 10:02 ကနေ 10:47 အထိ 0.0.0.0/0 ကနေ port 22 ကို ခွင့်ပြုထားခဲ့တယ်' ဆိုတာမျိုး။ **Config rule** (`s3-bucket-public-read-prohibited`၊ `restricted-ssh` လို AWS managed rule ဒါမှမဟုတ် Lambda/Guard နဲ့ရေးတဲ့ custom rule) တွေက resource တစ်ခုစီကို COMPLIANT ဒါမှမဟုတ် NON_COMPLIANT လို့ စစ်ပေးတယ်။ **Remediation action** က Systems Manager Automation document သုံးပြီး ပြဿနာကို အလိုအလျောက် ပြင်ပေးတယ် (ဥပမာ S3 Block Public Access ကို ပြန်ဖွင့်တာ)။ **Conformance pack** က rule တွေကို စုထားတာ (ဥပမာ CIS pack) ဖြစ်ပြီး **aggregator** က account နဲ့ region အများကြီးကို တစ်နေရာတည်းက ကြည့်ပေးတယ်။"
          ) },
          { type: 'callout', tone: 'warn', text: L(
            "AWS Config is **detective, not preventive**: it tells you a bucket became public (and can remediate after the fact), but it does not block the API call. To **prevent** an action, use IAM policies or **SCPs** in AWS Organizations.",
            "AWS Config は**発見的統制であり、予防的統制ではありません**。バケットが公開されたことを知らせ（事後に修復もできますが）、API 呼び出し自体はブロックしません。操作を**防ぐ**には IAM ポリシーや AWS Organizations の **SCP** を使います。",
            "AWS Config က **detective ပါ၊ preventive မဟုတ်ဘူး**- bucket က public ဖြစ်သွားပြီဆိုတာ ပြောပြတယ် (နောက်မှ remediate လည်း လုပ်ပေးနိုင်တယ်)၊ ဒါပေမဲ့ API call ကိုယ်တိုင်ကို မတားဘူး။ လုပ်ဆောင်ချက်ကို **တားချင်ရင်** IAM policy ဒါမှမဟုတ် AWS Organizations ရဲ့ **SCP** ကို သုံးပါ။"
          ) },
          { type: 'callout', tone: 'exam', text: L(
            "Keyword map: 'Which user terminated the instance?' → **CloudTrail**. 'Show how the security group configuration changed over the last month' → **AWS Config**. 'Track S3 object-level access (who downloaded which file)' → **CloudTrail data events** (or S3 server access logs). 'Detect and auto-fix unencrypted EBS volumes' → **Config rule + remediation**.",
            "キーワード対応：「どのユーザーがインスタンスを終了したか？」→ **CloudTrail**。「先月セキュリティグループの構成がどう変わったか表示」→ **AWS Config**。「S3 のオブジェクトレベルのアクセス（誰がどのファイルをダウンロードしたか）を追跡」→ **CloudTrail データイベント**（または S3 サーバーアクセスログ）。「暗号化されていない EBS ボリュームを検出して自動修正」→ **Config ルール＋修復**。",
            "Keyword map- 'ဘယ် user က instance ကို terminate လုပ်လဲ?' → **CloudTrail**။ 'ပြီးခဲ့တဲ့လအတွင်း security group configuration ဘယ်လိုပြောင်းလဲ ပြပါ' → **AWS Config**။ 'S3 object-level access (ဘယ်သူ ဘယ်ဖိုင် download လုပ်လဲ) ကို track' → **CloudTrail data event** (ဒါမှမဟုတ် S3 server access log)။ 'Encrypt မလုပ်ထားတဲ့ EBS volume ကို ရှာပြီး အလိုအလျောက် ပြင်' → **Config rule + remediation**။"
          ) },
        ],
      },
      {
        id: "eventbridge",
        title: L("Amazon EventBridge: reacting to events and schedules", "Amazon EventBridge：イベントとスケジュールへの対応", "Amazon EventBridge- Event နဲ့ Schedule တွေကို တုံ့ပြန်ခြင်း"),
        blocks: [
          { type: 'p', text: L(
            "**Amazon EventBridge** (formerly CloudWatch Events) is a serverless **event bus**. AWS services publish events to the **default event bus** automatically (an EC2 instance changed state, a CodePipeline failed, GuardDuty found a threat, AWS Health posted an issue). You write a **rule** with an **event pattern** that matches the events you care about, and send them to **targets** such as Lambda, SNS, SQS, Step Functions, an SSM Automation runbook or another event bus. Custom applications and SaaS partners can publish to **custom** and **partner** event buses.",
            "**Amazon EventBridge**（旧 CloudWatch Events）はサーバーレスの**イベントバス**です。AWS サービスは**デフォルトのイベントバス**に自動的にイベントを発行します（EC2 インスタンスの状態変化、CodePipeline の失敗、GuardDuty の脅威検出、AWS Health の通知など）。関心のあるイベントに一致する**イベントパターン**を持つ**ルール**を作り、Lambda、SNS、SQS、Step Functions、SSM Automation ランブック、別のイベントバスなどの**ターゲット**に送ります。独自アプリや SaaS パートナーは**カスタム**・**パートナー**イベントバスに発行できます。",
            "**Amazon EventBridge** (အရင်နာမည် CloudWatch Events) က serverless **event bus** ပါ။ AWS service တွေက **default event bus** ဆီ event တွေကို အလိုအလျောက် ပို့တယ် (EC2 instance state ပြောင်းတာ၊ CodePipeline fail တာ၊ GuardDuty က threat တွေ့တာ၊ AWS Health က issue တင်တာ)။ ကိုယ်စိတ်ဝင်စားတဲ့ event နဲ့ ကိုက်တဲ့ **event pattern** ပါတဲ့ **rule** ကိုရေးပြီး Lambda၊ SNS၊ SQS၊ Step Functions၊ SSM Automation runbook ဒါမှမဟုတ် တခြား event bus လို **target** တွေဆီ ပို့တယ်။ Custom app နဲ့ SaaS partner တွေက **custom** နဲ့ **partner** event bus တွေဆီ ပို့လို့ရတယ်။"
          ) },
          { type: 'code', lang: 'json', code: `{
  "source": ["aws.ec2"],
  "detail-type": ["EC2 Instance State-change Notification"],
  "detail": {
    "state": ["stopped", "terminated"]
  }
}`,
            caption: L("Event pattern: match EC2 instances that stopped or terminated.", "イベントパターン：停止または終了した EC2 インスタンスに一致。", "Event pattern- stop ဒါမှမဟုတ် terminate ဖြစ်သွားတဲ့ EC2 instance တွေနဲ့ ကိုက်တယ်။") },
          { type: 'diagram', text: `  [EC2]  [CodePipeline]  [AWS Health]  [your app]
     \\          |              |            /
      v         v              v           v
   +---------------------------------------------+
   |          EventBridge event bus              |
   |   rule 1: pattern = EC2 stopped             |
   |   rule 2: pattern = pipeline FAILED         |
   |   schedule: cron(0 22 ? * MON-FRI *)        |
   +---------------------------------------------+
        |               |                 |
        v               v                 v
    [Lambda ->      [SNS topic]     [SSM Automation
     Slack]          (email)         stop dev EC2]`,
            caption: L("Many sources, rules with patterns, many targets.", "多数のソース、パターン付きルール、多数のターゲット。", "Source အများကြီး၊ pattern ပါတဲ့ rule တွေ၊ target အများကြီး။") },
          { type: 'p', text: L(
            "For time-based jobs, use **EventBridge Scheduler** (or a scheduled rule) with `rate(5 minutes)` or a `cron()` expression and a time zone, such as stopping all dev instances at 22:00 Tokyo time on weekdays. This replaces the old habit of running cron on a dedicated EC2 instance, which is a single point of failure and costs money 24/7.",
            "時間ベースのジョブには、`rate(5 minutes)` や `cron()` 式とタイムゾーンを指定した **EventBridge Scheduler**（またはスケジュールルール）を使います。例えば平日の東京時間 22:00 に開発用インスタンスをすべて停止する、といった用途です。これは専用 EC2 で cron を動かす従来の方法を置き換えます。その方法は単一障害点であり、24 時間 365 日コストがかかります。",
            "အချိန်အလိုက် run ရမယ့် job တွေအတွက် `rate(5 minutes)` ဒါမှမဟုတ် `cron()` expression နဲ့ time zone ပါတဲ့ **EventBridge Scheduler** (ဒါမှမဟုတ် scheduled rule) ကို သုံးပါ။ ဥပမာ ကြားရက်တွေမှာ Tokyo အချိန် ည ၁၀ နာရီ dev instance အားလုံးကို stop လုပ်တာမျိုး။ ဒါက EC2 တစ်လုံးမှာ cron run တဲ့ အလေ့အထဟောင်းကို အစားထိုးတယ်- အဲဒီနည်းက single point of failure ဖြစ်ပြီး ၂၄ နာရီ ပိုက်ဆံကုန်တယ်။"
          ) },
          { type: 'callout', tone: 'tip', text: L(
            "EventBridge vs SNS in one line: SNS pushes a message to **subscribers of a topic**; EventBridge **routes events by content** (pattern matching on any field) to many target types, including SaaS sources and schedules.",
            "EventBridge と SNS の違いを一言で：SNS は**トピックのサブスクライバー**にメッセージをプッシュし、EventBridge は**内容に基づいて**（任意のフィールドのパターン一致で）多様なターゲットにイベントをルーティングします。SaaS ソースやスケジュールにも対応します。",
            "EventBridge နဲ့ SNS ကို တစ်ကြောင်းတည်းနဲ့ ခွဲရရင်- SNS က **topic ရဲ့ subscriber** တွေဆီ message ကို push လုပ်တယ်၊ EventBridge က event ကို **content အလိုက်** (field ဘာမဆိုကို pattern matching) target အမျိုးမျိုးဆီ route လုပ်ပေးတယ်၊ SaaS source နဲ့ schedule တွေလည်း ပါတယ်။"
          ) },
        ],
      },
      {
        id: "systems-manager",
        title: L("AWS Systems Manager: operate servers without SSH", "AWS Systems Manager：SSH なしでサーバーを運用", "AWS Systems Manager- SSH မသုံးဘဲ server တွေကို run ခြင်း"),
        blocks: [
          { type: 'p', text: L(
            "**AWS Systems Manager (SSM)** is a toolbox for operating EC2 instances and on-premises servers at scale. You already use it if your GitHub Actions workflow calls **Run Command** to `docker pull` and restart containers on EC2. The key capabilities for the exams:",
            "**AWS Systems Manager（SSM）**は、EC2 インスタンスやオンプレミスサーバーを大規模に運用するためのツール群です。GitHub Actions のワークフローから **Run Command** を呼び出して EC2 上で `docker pull` やコンテナ再起動を行っているなら、すでに使っています。試験で重要な機能は次のとおりです。",
            "**AWS Systems Manager (SSM)** က EC2 instance နဲ့ on-premises server တွေကို အများကြီး တစ်ပြိုင်နက် run ဖို့ toolbox ပါ။ ခင်ဗျားရဲ့ GitHub Actions workflow က **Run Command** ကိုခေါ်ပြီး EC2 ပေါ်မှာ `docker pull` လုပ်ကာ container restart လုပ်နေတယ်ဆိုရင် သုံးနေပြီးသားပါ။ Exam အတွက် အရေးကြီးတဲ့ capability တွေက-"
          ) },
          { type: 'list', items: [
            L("**Session Manager**: browser or CLI shell into an instance with **no open inbound ports, no SSH keys and no bastion host**. Access is controlled by IAM and every session can be logged to S3 or CloudWatch Logs.",
              "**Session Manager**：**インバウンドポートの開放、SSH キー、踏み台ホストなし**で、ブラウザや CLI からインスタンスのシェルに接続できます。アクセスは IAM で制御し、すべてのセッションを S3 や CloudWatch Logs に記録できます。",
              "**Session Manager**- **inbound port မဖွင့်ဘဲ၊ SSH key မလိုဘဲ၊ bastion host မလိုဘဲ** browser ဒါမှမဟုတ် CLI ကနေ instance shell ထဲ ဝင်လို့ရတယ်။ Access ကို IAM နဲ့ ထိန်းပြီး session တိုင်းကို S3 ဒါမှမဟုတ် CloudWatch Logs မှာ log လုပ်လို့ရတယ်။"),
            L("**Run Command**: run an SSM document (for example `AWS-RunShellScript`) on many instances selected by ID or **tag**, with rate control and error thresholds. No SSH needed.",
              "**Run Command**：ID や**タグ**で選んだ多数のインスタンスに SSM ドキュメント（例：`AWS-RunShellScript`）を実行します。同時実行数やエラーしきい値も制御でき、SSH は不要です。",
              "**Run Command**- ID ဒါမှမဟုတ် **tag** နဲ့ရွေးထားတဲ့ instance အများကြီးပေါ်မှာ SSM document (ဥပမာ `AWS-RunShellScript`) ကို run တယ်။ Rate control နဲ့ error threshold ထားလို့ရပြီး SSH မလိုဘူး။"),
            L("**Parameter Store**: hierarchical storage for configuration and secrets (`/myapp/prod/db_url`), with `SecureString` values encrypted by KMS and versioning.",
              "**Parameter Store**：設定値やシークレットを階層的に保存（`/myapp/prod/db_url`）。`SecureString` は KMS で暗号化され、バージョン管理もされます。",
              "**Parameter Store**- configuration နဲ့ secret တွေကို hierarchy နဲ့ သိမ်းတယ် (`/myapp/prod/db_url`)။ `SecureString` value တွေကို KMS နဲ့ encrypt လုပ်ပြီး version လည်း ထားပေးတယ်။"),
            L("**Patch Manager**: scan and install OS patches using **patch baselines** and **maintenance windows**, with compliance reporting.",
              "**Patch Manager**：**パッチベースライン**と**メンテナンスウィンドウ**を使って OS パッチをスキャン・適用し、コンプライアンスをレポートします。",
              "**Patch Manager**- **patch baseline** နဲ့ **maintenance window** တွေသုံးပြီး OS patch တွေကို scan နဲ့ install လုပ်ကာ compliance report ထုတ်ပေးတယ်။"),
            L("**Fleet Manager** (GUI to browse files, users and performance of managed nodes), **Inventory** (installed software), **State Manager** (keep a desired configuration) and **Automation** (multi-step runbooks such as 'create AMI then patch').",
              "**Fleet Manager**（マネージドノードのファイル・ユーザー・パフォーマンスを GUI で確認）、**Inventory**（インストール済みソフトウェア）、**State Manager**（望ましい構成を維持）、**Automation**（「AMI 作成後にパッチ適用」などの複数ステップのランブック）。",
              "**Fleet Manager** (managed node တွေရဲ့ file၊ user၊ performance ကို GUI နဲ့ ကြည့်)၊ **Inventory** (install ထားတဲ့ software)၊ **State Manager** (လိုချင်တဲ့ configuration ကို ထိန်းထား)၊ **Automation** ('AMI ဆောက်ပြီးမှ patch' လို အဆင့်များတဲ့ runbook)။"),
          ] },
          { type: 'p', text: L(
            "For an instance to appear as a **managed node**, three things must be true: (1) the **SSM Agent** is installed and running (preinstalled on Amazon Linux 2/2023, recent Ubuntu and Windows Server AMIs); (2) the instance has an **IAM instance profile** with the `AmazonSSMManagedInstanceCore` managed policy (or Default Host Management Configuration is enabled); (3) the agent has **outbound HTTPS (443)** to the Systems Manager endpoints (`ssm`, `ssmmessages`, `ec2messages`) through a NAT gateway, internet gateway or **VPC interface endpoints** for private subnets. Inbound rules are not needed.",
            "インスタンスが**マネージドノード**として表示されるには、次の 3 条件が必要です。(1) **SSM Agent** がインストールされ起動している（Amazon Linux 2/2023、最近の Ubuntu、Windows Server の AMI にはプリインストール済み）。(2) インスタンスに `AmazonSSMManagedInstanceCore` マネージドポリシーを持つ **IAM インスタンスプロファイル**がある（または Default Host Management Configuration が有効）。(3) エージェントが NAT ゲートウェイ、インターネットゲートウェイ、またはプライベートサブネット向けの **VPC インターフェイスエンドポイント**経由で、Systems Manager のエンドポイント（`ssm`、`ssmmessages`、`ec2messages`）に**アウトバウンド HTTPS（443）**で接続できる。インバウンドルールは不要です。",
            "Instance တစ်ခုက **managed node** အဖြစ် ပေါ်လာဖို့ အချက် ၃ ချက် မှန်ရမယ်- (1) **SSM Agent** install ထားပြီး run နေရမယ် (Amazon Linux 2/2023၊ နောက်ပိုင်း Ubuntu နဲ့ Windows Server AMI တွေမှာ ပါပြီးသား)၊ (2) instance မှာ `AmazonSSMManagedInstanceCore` managed policy ပါတဲ့ **IAM instance profile** ရှိရမယ် (ဒါမှမဟုတ် Default Host Management Configuration ဖွင့်ထားရမယ်)၊ (3) agent က NAT gateway၊ internet gateway ဒါမှမဟုတ် private subnet အတွက် **VPC interface endpoint** ကနေတဆင့် Systems Manager endpoint (`ssm`၊ `ssmmessages`၊ `ec2messages`) တွေဆီ **outbound HTTPS (443)** ချိတ်နိုင်ရမယ်။ Inbound rule မလိုဘူး။"
          ) },
          { type: 'code', lang: 'bash', code: `# Deploy a new image to every instance tagged App=web (no SSH)
aws ssm send-command \\
  --document-name "AWS-RunShellScript" \\
  --targets "Key=tag:App,Values=web" \\
  --parameters 'commands=["docker pull 111122223333.dkr.ecr.ap-northeast-1.amazonaws.com/web:1.4.2","docker compose -f /opt/web/compose.yml up -d"]' \\
  --max-concurrency "50%" --max-errors "1" \\
  --cloud-watch-output-config CloudWatchOutputEnabled=true \\
  --comment "deploy web 1.4.2"

# Check the result per instance
aws ssm list-command-invocations --command-id <CommandId> --details`,
            caption: L("Run Command targeting a tag, with rolling concurrency.", "タグを対象に、同時実行数を制御して Run Command を実行。", "Tag ကို target ထားပြီး concurrency ထိန်းကာ Run Command run တာ။") },
          { type: 'table',
            head: [L("Feature", "項目", "လုပ်ဆောင်ချက်"), L("Parameter Store (Standard)", "Parameter Store（Standard 階層）", "Parameter Store (Standard အဆင့်)"), L("Parameter Store (Advanced)", "Parameter Store（Advanced 階層）", "Parameter Store (Advanced အဆင့်)"), L("Secrets Manager", "Secrets Manager（シークレット管理）", "Secrets Manager (secret စီမံမှု)")],
            rows: [
              [L("Cost", "コスト", "ကုန်ကျစရိတ်"), L("No additional charge", "追加料金なし", "အပိုကြေး မရှိ"), L("Charged per parameter", "パラメータ単位で課金", "Parameter တစ်ခုစီ ပိုက်ဆံကျ"), L("Charged per secret and API calls", "シークレット数と API 呼び出しで課金", "Secret တစ်ခုစီ နဲ့ API call အလိုက် ပိုက်ဆံကျ")],
              [L("Max value size", "最大サイズ", "အများဆုံး size"), L("4 KB", "4 KB まで", "4 KB အထိ"), L("8 KB", "8 KB まで", "8 KB အထိ"), L("64 KB", "64 KB まで", "64 KB အထိ")],
              [L("Automatic rotation", "自動ローテーション", "အလိုအလျောက် rotation"), L("No", "なし", "မရှိ"), L("No (parameter policies only expire/notify)", "なし（パラメータポリシーは有効期限・通知のみ）", "မရှိ (parameter policy က expire/notify ပဲ)"), L("Yes, built in (e.g. RDS passwords via Lambda)", "あり、組み込み（例：Lambda による RDS パスワード）", "ရှိ၊ built-in (ဥပမာ Lambda နဲ့ RDS password)")],
              [L("Best for", "適した用途", "သင့်တော်တဲ့ နေရာ"), L("Config values, feature flags, simple secrets", "設定値、機能フラグ、単純なシークレット", "Config value၊ feature flag၊ ရိုးရှင်းတဲ့ secret"), L("Many or large parameters, policies", "大量・大きなパラメータ、ポリシー", "Parameter များ/ကြီးတာ၊ policy"), L("DB credentials that must rotate", "ローテーションが必要な DB 認証情報", "Rotate လုပ်ရမယ့် DB credential")],
            ] },
          { type: 'callout', tone: 'exam', text: L(
            "'Instance does not show up in Systems Manager / Run Command fails with no target' → check (1) SSM Agent, (2) instance profile with `AmazonSSMManagedInstanceCore`, (3) outbound 443 or VPC endpoints. 'Give admins shell access without opening port 22 and with full audit logs' → **Session Manager**. 'Rotate database passwords automatically' → **Secrets Manager**, not Parameter Store.",
            "「インスタンスが Systems Manager に表示されない／Run Command の対象がない」→ (1) SSM Agent、(2) `AmazonSSMManagedInstanceCore` 付きインスタンスプロファイル、(3) アウトバウンド 443 または VPC エンドポイントを確認。「ポート 22 を開けずに、完全な監査ログ付きで管理者にシェルアクセスを提供」→ **Session Manager**。「データベースのパスワードを自動ローテーション」→ Parameter Store ではなく **Secrets Manager**。",
            "'Instance က Systems Manager မှာ မပေါ်ဘူး / Run Command မှာ target မရှိလို့ fail' → (1) SSM Agent၊ (2) `AmazonSSMManagedInstanceCore` ပါတဲ့ instance profile၊ (3) outbound 443 ဒါမှမဟုတ် VPC endpoint ကို စစ်ပါ။ 'Port 22 မဖွင့်ဘဲ audit log အပြည့်နဲ့ admin တွေကို shell access ပေးချင်' → **Session Manager**။ 'Database password ကို အလိုအလျောက် rotate' → Parameter Store မဟုတ်ဘဲ **Secrets Manager**။"
          ) },
        ],
      },
      {
        id: "advisors-cost",
        title: L("Trusted Advisor, Health, Compute Optimizer, cost tools and Service Quotas", "Trusted Advisor、Health、Compute Optimizer、コストツール、Service Quotas", "Trusted Advisor၊ Health၊ Compute Optimizer၊ Cost tool နဲ့ Service Quotas"),
        blocks: [
          { type: 'p', text: L(
            "**AWS Trusted Advisor** inspects your account against AWS best practices in these categories: **cost optimization, performance, security, fault tolerance, service limits (quotas) and operational excellence**. What you see depends on your **Support plan**: Basic and Developer get the **core security checks and service quota checks**; **Business, Enterprise On-Ramp and Enterprise** get the full set of checks plus API access and EventBridge integration. **AWS Health Dashboard** has two views: **service health** (public status of AWS services in every Region) and **your account health** (events that affect *your* resources, such as a scheduled EC2 host retirement or an EBS volume issue).",
            "**AWS Trusted Advisor** は、アカウントを AWS のベストプラクティスに照らして次のカテゴリで点検します：**コスト最適化、パフォーマンス、セキュリティ、耐障害性、サービスの制限（クォータ）、運用上の優秀性**。表示内容は**サポートプラン**によって異なります。Basic と Developer は**主要なセキュリティチェックとサービスクォータのチェック**のみ、**Business、Enterprise On-Ramp、Enterprise** はすべてのチェックに加え API アクセスと EventBridge 連携が利用できます。**AWS Health Dashboard** には 2 つのビューがあります：**サービスヘルス**（全リージョンの AWS サービスの公開ステータス）と**アカウントヘルス**（EC2 ホストのリタイア予定や EBS ボリュームの問題など、*自分の*リソースに影響するイベント）です。",
            "**AWS Trusted Advisor** က account ကို AWS best practice နဲ့ တိုက်စစ်ပေးတယ်- **cost optimization၊ performance၊ security၊ fault tolerance၊ service limit (quota)၊ operational excellence** ဆိုတဲ့ category တွေနဲ့ပါ။ ဘာမြင်ရမလဲဆိုတာ **Support plan** ပေါ်မူတည်တယ်- Basic နဲ့ Developer က **core security check နဲ့ service quota check** တွေပဲ ရတယ်၊ **Business၊ Enterprise On-Ramp၊ Enterprise** က check အားလုံးနဲ့ API access၊ EventBridge integration ပါ ရတယ်။ **AWS Health Dashboard** မှာ view ၂ ခုရှိတယ်- **service health** (region အားလုံးက AWS service တွေရဲ့ public status) နဲ့ **your account health** (*ကိုယ့်* resource ကို ထိခိုက်တဲ့ event၊ ဥပမာ EC2 host retirement အစီအစဉ်၊ EBS volume ပြဿနာ)။"
          ) },
          { type: 'p', text: L(
            "**AWS Compute Optimizer** uses machine learning on CloudWatch utilization history to recommend right-sizing for **EC2 instances, Auto Scaling groups, EBS volumes, Lambda functions, ECS services on Fargate and RDS**. Its EC2 memory-based recommendations are much better when the **CloudWatch agent** reports memory. For money: **Cost Explorer** visualizes and **forecasts** spend and gives Savings Plans/RI recommendations; **AWS Budgets** alerts (email/SNS) on actual or **forecasted** cost, usage, or RI/Savings Plans utilization and coverage, and **budget actions** can apply an IAM policy or SCP or stop EC2/RDS when exceeded; **Cost Anomaly Detection** uses ML to spot unusual spend (for example a forgotten GPU instance) without you choosing a threshold. **Cost allocation tags** must be activated in the Billing console before they appear in Cost Explorer.",
            "**AWS Compute Optimizer** は CloudWatch の使用率履歴に機械学習を適用し、**EC2 インスタンス、Auto Scaling グループ、EBS ボリューム、Lambda 関数、Fargate 上の ECS サービス、RDS** の適正サイズを推奨します。EC2 のメモリに基づく推奨は、**CloudWatch エージェント**がメモリを報告しているとより正確になります。コスト面では、**Cost Explorer** が支出を可視化・**予測**し、Savings Plans/RI の推奨を出します。**AWS Budgets** はコスト・使用量・RI/Savings Plans の使用率やカバレッジについて、実績または**予測値**でアラート（メール/SNS）を出し、**予算アクション**で超過時に IAM ポリシーや SCP の適用、EC2/RDS の停止ができます。**Cost Anomaly Detection** は ML で異常な支出（例：消し忘れた GPU インスタンス）をしきい値なしで検出します。**コスト配分タグ**は、請求コンソールで有効化しないと Cost Explorer に表示されません。",
            "**AWS Compute Optimizer** က CloudWatch utilization history ပေါ်မှာ machine learning သုံးပြီး **EC2 instance၊ Auto Scaling group၊ EBS volume၊ Lambda function၊ Fargate ပေါ်က ECS service၊ RDS** တွေအတွက် right-sizing အကြံပြုတယ်။ **CloudWatch agent** က memory ကို report လုပ်ပေးရင် EC2 memory-based recommendation တွေ ပိုတိကျတယ်။ ငွေကိစ္စမှာ **Cost Explorer** က spend ကို ပုံဖော်ပြီး **forecast** လုပ်ကာ Savings Plans/RI recommendation ပေးတယ်၊ **AWS Budgets** က တကယ်ကုန်တာ ဒါမှမဟုတ် **ခန့်မှန်း** cost၊ usage၊ RI/Savings Plans utilization နဲ့ coverage အပေါ် alert (email/SNS) ပို့ပြီး **budget action** နဲ့ ကျော်သွားရင် IAM policy/SCP apply လုပ်တာ ဒါမှမဟုတ် EC2/RDS stop လုပ်တာ လုပ်နိုင်တယ်၊ **Cost Anomaly Detection** က threshold မသတ်မှတ်ရဘဲ ML နဲ့ ပုံမှန်မဟုတ်တဲ့ spend (ဥပမာ ပိတ်ဖို့မေ့နေတဲ့ GPU instance) ကို ရှာပေးတယ်။ **Cost allocation tag** တွေကို Billing console မှာ activate မလုပ်မချင်း Cost Explorer မှာ မပေါ်ဘူး။"
          ) },
          { type: 'table',
            head: [L("Tool", "ツール", "ကိရိယာ (Tool)"), L("Answers", "答える問い", "ဖြေပေးတာ"), L("Proactive alert?", "事前アラート？", "ကြိုတင် alert ပေးလား?")],
            rows: [
              [L("Cost Explorer", "Cost Explorer（分析）", "Cost Explorer (ခွဲခြမ်းစိတ်ဖြာမှု)"), L("Where did my money go? What will next months cost?", "お金は何に使われたか？今後数か月いくらかかるか？", "ငွေ ဘယ်မှာကုန်လဲ? နောက်လတွေ ဘယ်လောက်ကုန်မလဲ?"), L("No, it is for analysis", "いいえ、分析用", "မပေး၊ analysis အတွက်")],
              [L("AWS Budgets", "AWS Budgets（予算）", "AWS Budgets (budget သတ်မှတ်ချက်)"), L("Tell me before I pass my limit", "上限を超える前に知らせて", "Limit မကျော်ခင် ပြောပါ"), L("Yes, threshold you define (actual or forecast)", "はい、自分で決めたしきい値（実績・予測）", "ပေး၊ ကိုယ်သတ်မှတ်တဲ့ threshold (actual/forecast)")],
              [L("Cost Anomaly Detection", "Cost Anomaly Detection（異常検出）", "Cost Anomaly Detection (ထူးခြားမှု ရှာဖွေ)"), L("Is this spend pattern unusual?", "この支出パターンは異常か？", "ဒီ spend pattern က ထူးဆန်းလား?"), L("Yes, ML-based, no fixed threshold", "はい、ML ベースで固定しきい値なし", "ပေး၊ ML-based၊ fixed threshold မလို")],
              [L("Compute Optimizer", "Compute Optimizer（適正サイズ）", "Compute Optimizer (size ညှိပေး)"), L("Is this instance/volume/function the right size?", "このインスタンス・ボリューム・関数のサイズは適切か？", "ဒီ instance/volume/function size မှန်လား?"), L("No, recommendations", "いいえ、推奨のみ", "မပေး၊ recommendation ပဲ")],
              [L("Trusted Advisor", "Trusted Advisor（ベストプラクティス）", "Trusted Advisor (best practice စစ်ဆေး)"), L("Am I following best practices across 6 categories?", "6 カテゴリでベストプラクティスに沿っているか？", "Category ၆ ခုမှာ best practice လိုက်နာလား?"), L("Weekly email / EventBridge (plan-dependent)", "週次メール／EventBridge（プランによる）", "အပတ်စဉ် email / EventBridge (plan ပေါ်မူတည်)")],
            ] },
          { type: 'p', text: L(
            "**Service Quotas** shows the limits for each service in each Region (for example the number of vCPUs for On-Demand instances, or Elastic IPs per Region) and lets you **request an increase** from one console. You can create **CloudWatch alarms on quota usage** so a big scale-out event does not fail at 2 a.m. with `LimitExceeded`. Quota templates in AWS Organizations can request increases automatically for new accounts.",
            "**Service Quotas** は各リージョンにおける各サービスの上限（例：オンデマンドインスタンスの vCPU 数、リージョンあたりの Elastic IP 数）を表示し、1 つのコンソールから**引き上げをリクエスト**できます。**クォータ使用量に対する CloudWatch アラーム**を作成しておけば、深夜 2 時の大規模スケールアウトが `LimitExceeded` で失敗するのを防げます。AWS Organizations のクォータテンプレートを使うと、新しいアカウントに対して自動的に引き上げをリクエストできます。",
            "**Service Quotas** က region တစ်ခုစီမှာ service တစ်ခုစီရဲ့ limit တွေ (ဥပမာ On-Demand instance vCPU အရေအတွက်၊ region တစ်ခုမှာ Elastic IP အရေအတွက်) ကို ပြပြီး console တစ်ခုတည်းကနေ **increase တောင်းလို့** ရတယ်။ **Quota usage အပေါ် CloudWatch alarm** ထားထားရင် မနက် ၂ နာရီ scale-out ကြီးတစ်ခုက `LimitExceeded` နဲ့ fail မဖြစ်တော့ဘူး။ AWS Organizations ရဲ့ quota template နဲ့ account အသစ်တွေအတွက် increase ကို အလိုအလျောက် တောင်းလို့ရတယ်။"
          ) },
          { type: 'callout', tone: 'memory', text: L(
            "**Explorer looks back, Budgets warns ahead, Anomaly spots the weird.** And Trusted Advisor's full checks need **Business support or higher**.",
            "**Explorer は過去を見て、Budgets は先を警告し、Anomaly は異常を見つける。** そして Trusted Advisor の全チェックには **Business サポート以上**が必要です。",
            "**Explorer က နောက်ကိုကြည့်တယ်၊ Budgets က ရှေ့ကို သတိပေးတယ်၊ Anomaly က ထူးဆန်းတာကို ရှာတယ်။** Trusted Advisor ရဲ့ check အားလုံးအတွက် **Business support နဲ့အထက်** လိုတယ်လို့ မှတ်ပါ။"
          ) },
        ],
      },
      {
        id: "infrastructure-as-code",
        title: L("Infrastructure as Code: CloudFormation, CDK and Terraform", "コードによるインフラ管理（IaC）：CloudFormation、CDK、Terraform", "Infrastructure as Code- CloudFormation၊ CDK နဲ့ Terraform"),
        blocks: [
          { type: 'p', text: L(
            "Clicking in the console is fine for learning, but production must be **repeatable**: the same VPC in dev, staging and prod, reviewed in pull requests. **AWS CloudFormation** reads a **template** (YAML or JSON) and creates a **stack**, a group of resources it manages as one unit. Update the template and CloudFormation calculates the difference; delete the stack and everything in it is removed (unless protected). If creation fails, it **rolls back** automatically. Think of a template as a recipe and a stack as the dish cooked from it: you can cook the same recipe in Tokyo and in Osaka.",
            "コンソールでのクリック操作は学習には十分ですが、本番環境は**再現可能**でなければなりません。開発・ステージング・本番で同じ VPC を作り、プルリクエストでレビューする必要があります。**AWS CloudFormation** は**テンプレート**（YAML または JSON）を読み込み、**スタック**を作成します。スタックとは、1 つの単位として管理されるリソースのまとまりです。テンプレートを更新すると CloudFormation が差分を計算し、スタックを削除すると中のリソースはすべて削除されます（保護されていない限り）。作成に失敗すると自動的に**ロールバック**します。テンプレートはレシピ、スタックはそのレシピから作った料理と考えてください。同じレシピで東京でも大阪でも料理できます。",
            "Console မှာ click လုပ်တာက လေ့လာဖို့ အဆင်ပြေပေမယ့် production က **ထပ်ခါထပ်ခါ တူညီစွာ လုပ်နိုင်** ရမယ်- dev၊ staging၊ prod မှာ VPC တူတူ၊ pull request မှာ review လုပ်ပြီးသား။ **AWS CloudFormation** က **template** (YAML ဒါမှမဟုတ် JSON) ကိုဖတ်ပြီး **stack** ကို ဆောက်တယ်။ Stack ဆိုတာ unit တစ်ခုအနေနဲ့ စီမံတဲ့ resource အုပ်စုပါ။ Template ကို update လုပ်ရင် CloudFormation က ကွာခြားချက်ကို တွက်ပေးတယ်၊ stack ကိုဖျက်ရင် အထဲက အရာအားလုံး ပျက်တယ် (protect မလုပ်ထားရင်)။ ဆောက်တာ fail ရင် အလိုအလျောက် **rollback** လုပ်တယ်။ Template ကို ဟင်းချက်နည်း၊ stack ကို အဲဒီနည်းနဲ့ ချက်ထားတဲ့ ဟင်းလို့ စဉ်းစားပါ- နည်းတူတူနဲ့ Tokyo မှာရော Osaka မှာပါ ချက်လို့ရတယ်။"
          ) },
          { type: 'code', lang: 'yaml', code: `AWSTemplateFormatVersion: "2010-09-09"
Description: Web server with an alarm
Parameters:                      # inputs at deploy time
  Env:
    Type: String
    AllowedValues: [dev, prod]
  AmiId:
    Type: AWS::SSM::Parameter::Value<AWS::EC2::Image::Id>
    Default: /aws/service/ami-amazon-linux-latest/al2023-ami-kernel-default-x86_64
Mappings:                        # static lookup tables
  SizeByEnv:
    dev:  { Type: t3.micro }
    prod: { Type: m7i.large }
Conditions:
  IsProd: !Equals [!Ref Env, prod]
Resources:                       # the ONLY required section
  WebInstance:
    Type: AWS::EC2::Instance
    Properties:
      ImageId: !Ref AmiId
      InstanceType: !FindInMap [SizeByEnv, !Ref Env, Type]
      IamInstanceProfile: !Ref SsmProfile
  SsmRole:
    Type: AWS::IAM::Role
    Properties:
      AssumeRolePolicyDocument:
        Statement:
          - Effect: Allow
            Principal: { Service: ec2.amazonaws.com }
            Action: sts:AssumeRole
      ManagedPolicyArns:
        - arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore
  SsmProfile:
    Type: AWS::IAM::InstanceProfile
    Properties:
      Roles: [!Ref SsmRole]
  DataVolume:
    Type: AWS::EC2::Volume
    DeletionPolicy: Snapshot       # keep a snapshot if stack is deleted
    Properties:
      Size: 20
      AvailabilityZone: !GetAtt WebInstance.AvailabilityZone
  CpuAlarm:
    Type: AWS::CloudWatch::Alarm
    Condition: IsProd              # only created in prod
    Properties:
      Namespace: AWS/EC2
      MetricName: CPUUtilization
      Dimensions: [{ Name: InstanceId, Value: !Ref WebInstance }]
      Statistic: Average
      Period: 300
      EvaluationPeriods: 3
      Threshold: 80
      ComparisonOperator: GreaterThanThreshold
Outputs:
  InstanceId:
    Value: !Ref WebInstance
    Export: { Name: !Sub "\${AWS::StackName}-InstanceId" }`,
            caption: L("Template anatomy: Parameters, Mappings, Conditions, Resources, Outputs.", "テンプレートの構成：Parameters、Mappings、Conditions、Resources、Outputs。", "Template ဖွဲ့စည်းပုံ- Parameters၊ Mappings၊ Conditions၊ Resources၊ Outputs။") },
          { type: 'list', items: [
            L("**Change sets**: preview exactly what an update will add, modify or **replace** before executing it. A replacement of an RDS instance means a new database, so always review.",
              "**変更セット**：更新を実行する前に、何が追加・変更・**置換**されるかを正確にプレビューします。RDS インスタンスの置換は新しいデータベースを意味するため、必ず確認しましょう。",
              "**Change set**- update မလုပ်ခင် ဘာတွေ add၊ modify၊ **replace** ဖြစ်မလဲ အတိအကျ ကြိုကြည့်တာ။ RDS instance ကို replace လုပ်တာက database အသစ်ဖြစ်သွားတာမို့ အမြဲ review လုပ်ပါ။"),
            L("**Drift detection**: finds resources someone changed manually outside CloudFormation (for example a security group rule added in the console).",
              "**ドリフト検出**：CloudFormation の外で手動変更されたリソース（例：コンソールで追加されたセキュリティグループルール）を見つけます。",
              "**Drift detection**- CloudFormation အပြင်ကနေ လက်နဲ့ ပြောင်းထားတဲ့ resource (ဥပမာ console မှာ ထည့်လိုက်တဲ့ security group rule) ကို ရှာပေးတယ်။"),
            L("**StackSets**: deploy one template to **many accounts and Regions** at once, for example a baseline Config rule set across every account in AWS Organizations.",
              "**StackSets**：1 つのテンプレートを**多数のアカウント・リージョン**に一括デプロイします。例えば AWS Organizations の全アカウントにベースラインの Config ルールを展開します。",
              "**StackSets**- template တစ်ခုကို **account နဲ့ region အများကြီး** ဆီ တစ်ပြိုင်နက် deploy လုပ်တယ်။ ဥပမာ AWS Organizations ထဲက account တိုင်းမှာ baseline Config rule set ချတာ။"),
            L("**DeletionPolicy** (`Retain`, `Snapshot`, `Delete`), **stack policies** and **termination protection** protect important data; **nested stacks** and cross-stack **exports** reuse components.",
              "**DeletionPolicy**（`Retain`、`Snapshot`、`Delete`）、**スタックポリシー**、**削除保護**で重要なデータを守り、**ネストされたスタック**とスタック間の**エクスポート**で部品を再利用します。",
              "**DeletionPolicy** (`Retain`၊ `Snapshot`၊ `Delete`)၊ **stack policy** နဲ့ **termination protection** က အရေးကြီးတဲ့ data ကို ကာကွယ်ပေးပြီး **nested stack** နဲ့ cross-stack **export** တွေက component တွေကို ပြန်သုံးခွင့်ပေးတယ်။"),
          ] },
          { type: 'table',
            head: [L("Aspect", "観点", "အချက်"), L("CloudFormation", "CloudFormation（AWS ネイティブ）", "CloudFormation (AWS ကိုယ်ပိုင်)"), L("AWS CDK", "AWS CDK（コードで記述）", "AWS CDK (code နဲ့ရေး)"), L("Terraform", "Terraform（HashiCorp 製）", "Terraform (HashiCorp ထုတ်)")],
            rows: [
              [L("Language", "言語", "ဘာသာစကား (Language)"), L("YAML / JSON (declarative)", "YAML / JSON（宣言型）", "YAML / JSON (declarative ပုံစံ)"), L("TypeScript, Python, Java, C#, Go", "TypeScript、Python、Java、C#、Go など", "TypeScript၊ Python၊ Java၊ C#၊ Go စသည်"), L("HCL (declarative)", "HCL（宣言型）", "HCL (declarative ပုံစံ)")],
              [L("How it deploys", "デプロイ方法", "Deploy လုပ်ပုံ"), L("Directly as stacks", "スタックとして直接", "Stack အဖြစ် တိုက်ရိုက်"), L("Synthesizes CloudFormation templates (`cdk synth`), then deploys stacks", "CloudFormation テンプレートを生成（`cdk synth`）してからスタックをデプロイ", "CloudFormation template ကို synthesize (`cdk synth`) လုပ်ပြီးမှ stack deploy"), L("Calls provider APIs directly; plan/apply", "プロバイダー API を直接呼び出す（plan/apply）", "Provider API ကို တိုက်ရိုက်ခေါ် (plan/apply)")],
              [L("State", "状態管理", "State (အခြေအနေ) စီမံမှု"), L("Managed by AWS", "AWS が管理", "AWS က စီမံ"), L("Managed by AWS (CloudFormation)", "AWS（CloudFormation）が管理", "AWS (CloudFormation) က စီမံ"), L("State file you must store and lock (e.g. S3 backend with locking)", "自分で保存・ロックする state ファイル（例：ロック付き S3 バックエンド）", "ကိုယ်တိုင် သိမ်းပြီး lock လုပ်ရမယ့် state file (ဥပမာ locking ပါတဲ့ S3 backend)")],
              [L("Multi-cloud", "マルチクラウド", "Multi-cloud အသုံးပြုမှု"), L("AWS only", "AWS のみ", "AWS ပဲ"), L("AWS only", "AWS のみ", "AWS ပဲ"), L("Yes: AWS, Azure, GCP, SaaS providers", "はい：AWS、Azure、GCP、SaaS プロバイダー", "ရ- AWS၊ Azure၊ GCP၊ SaaS provider")],
              [L("Exam answer when...", "試験での選択基準", "Exam မှာ ဘယ်အခါ ရွေးလဲ"), L("'AWS native IaC', StackSets, drift", "「AWS ネイティブの IaC」、StackSets、ドリフト", "'AWS native IaC'၊ StackSets၊ drift"), L("'Developers want to use a familiar programming language'", "「開発者が慣れたプログラミング言語を使いたい」", "'Developer တွေ ရင်းနှီးတဲ့ programming language သုံးချင်တယ်'"), L("Usually not an answer option on AWS exams", "AWS の試験では通常選択肢に出ない", "AWS exam မှာ အဖြေအဖြစ် မများ")],
            ] },
          { type: 'callout', tone: 'exam', text: L(
            "'Preview the impact of a stack update' → **change set**. 'Detect manual changes to stack resources' → **drift detection**. 'Deploy the same template to 40 accounts in 3 Regions' → **StackSets**. 'Keep the RDS data when the stack is deleted' → `DeletionPolicy: Snapshot` or `Retain`. Elastic Beanstalk also uses CloudFormation under the hood, but it is a PaaS, not general IaC.",
            "「スタック更新の影響をプレビュー」→ **変更セット**。「スタックリソースの手動変更を検出」→ **ドリフト検出**。「同じテンプレートを 3 リージョンの 40 アカウントにデプロイ」→ **StackSets**。「スタック削除時に RDS のデータを残す」→ `DeletionPolicy: Snapshot` または `Retain`。Elastic Beanstalk も内部で CloudFormation を使いますが、汎用 IaC ではなく PaaS です。",
            "'Stack update ရဲ့ သက်ရောက်မှုကို ကြိုကြည့်' → **change set**။ 'Stack resource ကို လက်နဲ့ပြောင်းတာ ရှာ' → **drift detection**။ 'Template တစ်ခုကို region ၃ ခုက account ၄၀ ဆီ deploy' → **StackSets**။ 'Stack ဖျက်ရင်တောင် RDS data ကို ထားချင်' → `DeletionPolicy: Snapshot` ဒါမှမဟုတ် `Retain`။ Elastic Beanstalk ကလည်း နောက်ကွယ်မှာ CloudFormation သုံးပေမယ့် general IaC မဟုတ်ဘဲ PaaS ပါ။"
          ) },
        ],
      },
      {
        id: "cicd-github-oidc",
        title: L("CI/CD: AWS Code* services and GitHub Actions with OIDC", "CI/CD：AWS Code* サービスと OIDC を使う GitHub Actions", "CI/CD- AWS Code* service တွေနဲ့ OIDC သုံးတဲ့ GitHub Actions"),
        blocks: [
          { type: 'p', text: L(
            "AWS native CI/CD has three building blocks: **CodePipeline** orchestrates stages (source → build → test → deploy, with manual approvals); **CodeBuild** is a serverless build runner that executes `buildspec.yml` and is billed per build minute; **CodeDeploy** deploys to EC2/on-premises (in-place or blue/green), Lambda (canary/linear traffic shifting) and ECS (blue/green), using `appspec.yml` and rolling back on alarms. Many teams instead use **GitHub Actions** and only call AWS at the deploy step, exactly like your pipeline.",
            "AWS ネイティブの CI/CD には 3 つの構成要素があります。**CodePipeline** はステージ（ソース → ビルド → テスト → デプロイ、手動承認を含む）を統括し、**CodeBuild** は `buildspec.yml` を実行するサーバーレスのビルド環境でビルド時間（分）単位で課金され、**CodeDeploy** は `appspec.yml` を使って EC2/オンプレミス（インプレースまたはブルー/グリーン）、Lambda（カナリア/リニアのトラフィック移行）、ECS（ブルー/グリーン）にデプロイし、アラーム時にロールバックします。多くのチームは代わりに **GitHub Actions** を使い、デプロイ段階だけ AWS を呼び出します。まさにあなたのパイプラインと同じです。",
            "AWS native CI/CD မှာ အစိတ်အပိုင်း ၃ ခုရှိတယ်- **CodePipeline** က stage တွေ (source → build → test → deploy၊ manual approval ပါ) ကို စီစဉ်ပေးတယ်၊ **CodeBuild** က `buildspec.yml` ကို run တဲ့ serverless build runner ဖြစ်ပြီး build မိနစ်အလိုက် ပိုက်ဆံကျတယ်၊ **CodeDeploy** က `appspec.yml` သုံးပြီး EC2/on-premises (in-place ဒါမှမဟုတ် blue/green)၊ Lambda (canary/linear traffic shifting)၊ ECS (blue/green) ဆီ deploy လုပ်ကာ alarm ဖြစ်ရင် rollback လုပ်တယ်။ Team အများစုကတော့ **GitHub Actions** ကိုသုံးပြီး deploy အဆင့်မှာပဲ AWS ကို ခေါ်ကြတယ်- ခင်ဗျား pipeline အတိုင်းပါပဲ။"
          ) },
          { type: 'p', text: L(
            "The security question is: how does GitHub authenticate to AWS? The old way stored an IAM user's **access key** as a GitHub secret: long-lived, easy to leak, and hard to rotate. The modern way is **OpenID Connect (OIDC)**: you register `token.actions.githubusercontent.com` as an **IAM OIDC identity provider**, create an IAM role whose **trust policy** only allows your repository and branch (`sub` = `repo:my-org/my-app:ref:refs/heads/main`), and the workflow exchanges a signed GitHub token for **temporary credentials** via `AssumeRoleWithWebIdentity`. No secret to steal.",
            "セキュリティ上の問いは「GitHub はどうやって AWS に認証するか」です。従来の方法では IAM ユーザーの**アクセスキー**を GitHub シークレットに保存していました。長期間有効で漏えいしやすく、ローテーションも面倒です。現代的な方法は **OpenID Connect（OIDC）**です。`token.actions.githubusercontent.com` を **IAM OIDC ID プロバイダー**として登録し、**信頼ポリシー**で自分のリポジトリとブランチ（`sub` = `repo:my-org/my-app:ref:refs/heads/main`）だけを許可する IAM ロールを作成します。ワークフローは署名付きの GitHub トークンを `AssumeRoleWithWebIdentity` で**一時的な認証情報**と交換します。盗まれるシークレットがありません。",
            "Security မေးခွန်းက- GitHub က AWS ကို ဘယ်လို authenticate လုပ်လဲ။ နည်းဟောင်းက IAM user ရဲ့ **access key** ကို GitHub secret မှာ သိမ်းတာ- သက်တမ်းရှည်တယ်၊ ပေါက်ကြားလွယ်တယ်၊ rotate လုပ်ရ ခက်တယ်။ နည်းသစ်က **OpenID Connect (OIDC)** ပါ- `token.actions.githubusercontent.com` ကို **IAM OIDC identity provider** အဖြစ် register လုပ်၊ **trust policy** မှာ ကိုယ့် repository နဲ့ branch (`sub` = `repo:my-org/my-app:ref:refs/heads/main`) ကိုပဲ ခွင့်ပြုတဲ့ IAM role ဆောက်၊ workflow က sign လုပ်ထားတဲ့ GitHub token ကို `AssumeRoleWithWebIdentity` နဲ့ **temporary credential** အဖြစ် လဲယူတယ်။ ခိုးစရာ secret မရှိတော့ဘူး။"
          ) },
          { type: 'code', lang: 'yaml', code: `name: deploy
on:
  push:
    branches: [main]
permissions:
  id-token: write      # required to request the OIDC token
  contents: read
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: arn:aws:iam::111122223333:role/gha-deploy
          aws-region: ap-northeast-1
      - name: Deploy via SSM Run Command
        run: |
          aws ssm send-command \\
            --document-name AWS-RunShellScript \\
            --targets Key=tag:App,Values=web \\
            --parameters 'commands=["/opt/web/deploy.sh \${{ github.sha }}"]'`,
            caption: L("GitHub Actions: OIDC role, then SSM Run Command (no access keys).", "GitHub Actions：OIDC ロールを引き受けてから SSM Run Command（アクセスキー不要）。", "GitHub Actions- OIDC role ယူပြီး SSM Run Command (access key မလို)။") },
          { type: 'diagram', text: `GitHub Actions          AWS STS / IAM             EC2 (private)
--------------          -------------             -------------
1. job starts
2. OIDC token  ------>  3. trust policy check
                           (repo + branch)
                        4. temp credentials
   <-------------------    (1 hour max default)
5. aws ssm send-command --------------------->  SSM Agent pulls
                                                 command (443 out)
                                                 docker pull + up
6. poll result  <-------------------------------  output to CW Logs`,
            caption: L("OIDC + Run Command: no SSH, no inbound ports, no stored keys.", "OIDC＋Run Command：SSH なし、インバウンドポートなし、保存されたキーなし。", "OIDC + Run Command- SSH မလို၊ inbound port မလို၊ သိမ်းထားတဲ့ key မလို။") },
          { type: 'callout', tone: 'memory', text: L(
            "**Pipeline conducts, Build compiles, Deploy delivers.** And for any external CI (GitHub, GitLab): **OIDC role > access keys**, always.",
            "**Pipeline は指揮し、Build はビルドし、Deploy は届ける。** そして外部 CI（GitHub、GitLab）では常に **OIDC ロール ＞ アクセスキー**です。",
            "**Pipeline က ညွှန်ကြား၊ Build က တည်ဆောက်၊ Deploy က ပို့ဆောင်** လို့ မှတ်ပါ။ ပြင်ပ CI (GitHub၊ GitLab) အတွက်ဆို အမြဲ **OIDC role > access key** ပါ။"
          ) },
        ],
      },
      {
        id: "lab-and-exam-traps",
        title: L("Hands-on lab and final exam traps", "ハンズオンラボと最後の試験対策", "Hands-on lab နဲ့ နောက်ဆုံး exam ထောင်ချောက်များ"),
        blocks: [
          { type: 'steps', items: [
            L("Launch a `t3.micro` Amazon Linux 2023 instance in a private subnet with **no key pair** and a security group with **no inbound rules**. Attach an instance profile with `AmazonSSMManagedInstanceCore` and `CloudWatchAgentServerPolicy`.",
              "プライベートサブネットに Amazon Linux 2023 の `t3.micro` を**キーペアなし**、**インバウンドルールなし**のセキュリティグループで起動します。`AmazonSSMManagedInstanceCore` と `CloudWatchAgentServerPolicy` を持つインスタンスプロファイルをアタッチします。",
              "Private subnet ထဲမှာ Amazon Linux 2023 `t3.micro` ကို **key pair မပါဘဲ**၊ **inbound rule မရှိတဲ့** security group နဲ့ launch လုပ်ပါ။ `AmazonSSMManagedInstanceCore` နဲ့ `CloudWatchAgentServerPolicy` ပါတဲ့ instance profile ကို တွဲပါ။"),
            L("Give the subnet a path to SSM: a NAT gateway, or interface endpoints for `ssm`, `ssmmessages` and `ec2messages`. Wait a few minutes and confirm the node appears in **Fleet Manager**.",
              "サブネットから SSM への経路を用意します：NAT ゲートウェイ、または `ssm`・`ssmmessages`・`ec2messages` のインターフェイスエンドポイント。数分待って、ノードが **Fleet Manager** に表示されることを確認します。",
              "Subnet ကနေ SSM ဆီ လမ်းကြောင်းပေးပါ- NAT gateway ဒါမှမဟုတ် `ssm`၊ `ssmmessages`၊ `ec2messages` အတွက် interface endpoint။ မိနစ်အနည်းငယ်စောင့်ပြီး node က **Fleet Manager** မှာ ပေါ်လာတာ စစ်ပါ။"),
            L("Open a shell with **Session Manager** (`aws ssm start-session --target i-...`). Install the CloudWatch agent with Run Command using the `AWS-ConfigureAWSPackage` document (name `AmazonCloudWatchAgent`).",
              "**Session Manager**（`aws ssm start-session --target i-...`）でシェルを開きます。Run Command で `AWS-ConfigureAWSPackage` ドキュメント（名前 `AmazonCloudWatchAgent`）を使い CloudWatch エージェントをインストールします。",
              "**Session Manager** (`aws ssm start-session --target i-...`) နဲ့ shell ဖွင့်ပါ။ Run Command မှာ `AWS-ConfigureAWSPackage` document (name `AmazonCloudWatchAgent`) နဲ့ CloudWatch agent ကို install လုပ်ပါ။"),
            L("Store an agent config collecting `mem_used_percent` and `disk_used_percent` in Parameter Store, then apply it. Confirm the metrics appear in the `CWAgent` namespace.",
              "`mem_used_percent` と `disk_used_percent` を収集するエージェント設定を Parameter Store に保存して適用します。メトリクスが `CWAgent` 名前空間に表示されることを確認します。",
              "`mem_used_percent` နဲ့ `disk_used_percent` ကို စုမယ့် agent config ကို Parameter Store မှာ သိမ်းပြီး apply လုပ်ပါ။ Metric တွေ `CWAgent` namespace မှာ ပေါ်လာတာ စစ်ပါ။"),
            L("Create an SNS topic with your email, then `put-metric-alarm` on `mem_used_percent > 80`. Run a stress tool and watch the alarm go to `ALARM`.",
              "メールを登録した SNS トピックを作成し、`mem_used_percent > 80` に対して `put-metric-alarm` を実行します。負荷ツールを実行し、アラームが `ALARM` になるのを確認します。",
              "ကိုယ့် email ပါတဲ့ SNS topic ဆောက်ပြီး `mem_used_percent > 80` အပေါ် `put-metric-alarm` လုပ်ပါ။ Stress tool run ပြီး alarm က `ALARM` ဖြစ်သွားတာ ကြည့်ပါ။"),
            L("Open CloudTrail **Event history**, filter by event name `StartSession` and `SendCommand`, and confirm your own IAM identity appears. Finally, create an EventBridge Scheduler job that stops the instance at 22:00 Asia/Tokyo, and delete everything when done.",
              "CloudTrail の**イベント履歴**を開き、イベント名 `StartSession` と `SendCommand` で絞り込み、自分の IAM ID が表示されることを確認します。最後に Asia/Tokyo の 22:00 にインスタンスを停止する EventBridge Scheduler のジョブを作成し、終わったらすべて削除します。",
              "CloudTrail **Event history** ကိုဖွင့်ပြီး event name `StartSession` နဲ့ `SendCommand` နဲ့ filter လုပ်ကာ ကိုယ့် IAM identity ပေါ်လာတာ စစ်ပါ။ နောက်ဆုံး Asia/Tokyo ည ၁၀ နာရီမှာ instance ကို stop လုပ်မယ့် EventBridge Scheduler job ဆောက်ပြီး ပြီးရင် အားလုံး ဖျက်ပါ။"),
          ] },
          { type: 'list', items: [
            L("CloudWatch Logs retention defaults to **never expire**; set it.", "CloudWatch Logs の保持期間はデフォルトで**無期限**です。必ず設定しましょう。", "CloudWatch Logs retention က default **never expire** ဖြစ်တယ်၊ သတ်မှတ်ပါ။"),
            L("CloudTrail event history = 90 days of **management** events; **data events** need a trail.", "CloudTrail のイベント履歴は**管理**イベント 90 日分のみ。**データイベント**には証跡が必要です。", "CloudTrail event history = **management** event ရက် ၉၀၊ **data event** အတွက် trail လိုတယ်။"),
            L("Trusted Advisor full checks require **Business** support or higher.", "Trusted Advisor の全チェックには **Business** サポート以上が必要です。", "Trusted Advisor check အားလုံးအတွက် **Business** support နဲ့အထက် လိုတယ်။"),
            L("Personal Health Dashboard questions say 'events affecting **my** resources'.", "Health Dashboard（アカウントヘルス）の問題には「**自分の**リソースに影響するイベント」と書かれています。", "Account Health Dashboard မေးခွန်းတွေမှာ '**ကိုယ့်** resource ကို ထိခိုက်တဲ့ event' လို့ ပါလေ့ရှိတယ်။"),
            L("'Least operational overhead to run a script on 200 instances' → **Run Command**, not SSH loops or Lambda + SSH.", "「200 台でスクリプトを実行、運用負荷を最小に」→ SSH ループや Lambda＋SSH ではなく **Run Command**。", "'Instance ၂၀၀ မှာ script run ဖို့ operational overhead အနည်းဆုံး' → SSH loop ဒါမှမဟုတ် Lambda + SSH မဟုတ်ဘဲ **Run Command**။"),
          ] },
          { type: 'callout', tone: 'exam', text: L(
            "CLF-C02 asks **what** each service is for (CloudWatch vs CloudTrail vs Config, Trusted Advisor categories, Budgets vs Cost Explorer). SAA-C03 asks **how** to combine them: alarm → SNS → Lambda, EventBridge → SSM Automation, Config rule → auto-remediation, CloudFormation StackSets for multi-account baselines.",
            "CLF-C02 では各サービスが**何のためか**（CloudWatch・CloudTrail・Config の違い、Trusted Advisor のカテゴリ、Budgets と Cost Explorer の違い）が問われます。SAA-C03 では**どう組み合わせるか**が問われます：アラーム → SNS → Lambda、EventBridge → SSM Automation、Config ルール → 自動修復、マルチアカウントのベースラインには CloudFormation StackSets。",
            "CLF-C02 က service တစ်ခုစီ **ဘာအတွက်လဲ** (CloudWatch/CloudTrail/Config ကွာခြားချက်၊ Trusted Advisor category၊ Budgets နဲ့ Cost Explorer) ကို မေးတယ်။ SAA-C03 က **ဘယ်လို ပေါင်းသုံးမလဲ** ကို မေးတယ်- alarm → SNS → Lambda၊ EventBridge → SSM Automation၊ Config rule → auto-remediation၊ multi-account baseline အတွက် CloudFormation StackSets။"
          ) },
        ],
      },
    ],
    summary: [
      L("CloudWatch = metrics, logs, alarms and dashboards; memory and disk usage need the CloudWatch agent.", "CloudWatch = メトリクス・ログ・アラーム・ダッシュボード。メモリとディスク使用率には CloudWatch エージェントが必要です。", "CloudWatch = metric၊ log၊ alarm၊ dashboard၊ memory နဲ့ disk usage အတွက် CloudWatch agent လိုတယ်။"),
      L("Alarms act through SNS, EC2 actions (recover/stop/reboot), Auto Scaling and SSM; set log retention and use Logs Insights to query.", "アラームは SNS、EC2 アクション（復旧・停止・再起動）、Auto Scaling、SSM を通じて動作します。ログの保持期間を設定し、Logs Insights で検索します。", "Alarm က SNS၊ EC2 action (recover/stop/reboot)၊ Auto Scaling၊ SSM ကနေ အလုပ်လုပ်တယ်၊ log retention သတ်မှတ်ပြီး Logs Insights နဲ့ query လုပ်ပါ။"),
      L("CloudTrail answers 'who did what'; management events are on by default, data events must be enabled on a trail.", "CloudTrail は「誰が何をしたか」に答えます。管理イベントはデフォルトで記録、データイベントは証跡で有効化が必要です。", "CloudTrail က 'ဘယ်သူ ဘာလုပ်လဲ' ကို ဖြေတယ်၊ management event က default ပါပြီး data event ကို trail မှာ enable လုပ်ရတယ်။"),
      L("AWS Config records configuration history and evaluates compliance with rules; remediation uses SSM Automation, but Config does not prevent actions.", "AWS Config は構成履歴を記録し、ルールで準拠状況を評価します。修復には SSM Automation を使いますが、Config は操作を防止しません。", "AWS Config က configuration history မှတ်ပြီး rule နဲ့ compliance စစ်တယ်၊ remediation က SSM Automation သုံးတယ်၊ ဒါပေမဲ့ Config က action ကို မတားဘူး။"),
      L("EventBridge routes events by pattern to targets and replaces cron servers with schedules.", "EventBridge はパターンでイベントをターゲットにルーティングし、スケジュール機能で cron サーバーを置き換えます。", "EventBridge က pattern အလိုက် event တွေကို target ဆီ route လုပ်ပြီး schedule နဲ့ cron server ကို အစားထိုးတယ်။"),
      L("Systems Manager needs SSM Agent + `AmazonSSMManagedInstanceCore` instance profile + outbound 443 (or VPC endpoints); Session Manager removes SSH and bastions.", "Systems Manager には SSM Agent＋`AmazonSSMManagedInstanceCore` のインスタンスプロファイル＋アウトバウンド 443（または VPC エンドポイント）が必要です。Session Manager で SSH と踏み台が不要になります。", "Systems Manager အတွက် SSM Agent + `AmazonSSMManagedInstanceCore` instance profile + outbound 443 (ဒါမှမဟုတ် VPC endpoint) လိုတယ်၊ Session Manager က SSH နဲ့ bastion ကို မလိုတော့အောင် လုပ်ပေးတယ်။"),
      L("Trusted Advisor (6 categories, plan-dependent), Health Dashboard, Compute Optimizer, Cost Explorer, Budgets, Cost Anomaly Detection and Service Quotas each have a distinct job.", "Trusted Advisor（6 カテゴリ、プラン依存）、Health Dashboard、Compute Optimizer、Cost Explorer、Budgets、Cost Anomaly Detection、Service Quotas はそれぞれ異なる役割を持ちます。", "Trusted Advisor (category ၆ ခု၊ plan ပေါ်မူတည်)၊ Health Dashboard၊ Compute Optimizer၊ Cost Explorer၊ Budgets၊ Cost Anomaly Detection၊ Service Quotas တစ်ခုစီမှာ သူ့အလုပ်သီးသန့် ရှိတယ်။"),
      L("CloudFormation stacks, change sets, drift detection and StackSets are AWS-native IaC; CDK synthesizes CloudFormation; GitHub Actions should use OIDC roles, not access keys.", "CloudFormation のスタック、変更セット、ドリフト検出、StackSets は AWS ネイティブの IaC です。CDK は CloudFormation を生成し、GitHub Actions はアクセスキーではなく OIDC ロールを使うべきです。", "CloudFormation stack၊ change set၊ drift detection၊ StackSets က AWS-native IaC ပါ၊ CDK က CloudFormation ကို synthesize လုပ်တယ်၊ GitHub Actions က access key မဟုတ်ဘဲ OIDC role သုံးသင့်တယ်။"),
    ],
  },
  questions: [
    {
      difficulty: 'EASY',
      exams: ['CLF-C02'],
      prompt: L("A team wants to receive an email when the average CPU utilization of an EC2 instance stays above 80% for 10 minutes. Which service should they use?",
        "EC2 インスタンスの平均 CPU 使用率が 10 分間 80% を超え続けたときにメールを受け取りたいと考えています。どのサービスを使うべきですか？",
        "EC2 instance ရဲ့ ပျမ်းမျှ CPU utilization က ၁၀ မိနစ်ကြာ 80% ကျော်နေရင် email ရချင်တယ်။ ဘယ် service ကို သုံးသင့်လဲ?"),
      options: ['AWS CloudTrail', 'Amazon CloudWatch', 'AWS Config', 'AWS Trusted Advisor'],
      correct: [1],
      explanation: L("A CloudWatch alarm on `CPUUtilization` with an SNS topic action sends the email. CloudTrail records API calls, not performance metrics, so it cannot alarm on CPU.",
        "`CPUUtilization` に対する CloudWatch アラームと SNS トピックのアクションでメールを送れます。CloudTrail は API 呼び出しを記録するもので、パフォーマンスメトリクスではないため CPU でアラームは出せません。",
        "`CPUUtilization` အပေါ် CloudWatch alarm နဲ့ SNS topic action ထားရင် email ပို့ပေးတယ်။ CloudTrail က API call ကို မှတ်တမ်းတင်တာ၊ performance metric မဟုတ်လို့ CPU အပေါ် alarm မထုတ်နိုင်ဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['CLF-C02'],
      prompt: L("A production S3 bucket was deleted last night. Which service shows which IAM identity called `DeleteBucket` and from which IP address?",
        "昨夜、本番の S3 バケットが削除されました。どの IAM ID がどの IP アドレスから `DeleteBucket` を呼び出したかを示すサービスはどれですか？",
        "မနေ့ညက production S3 bucket ကို ဖျက်သွားတယ်။ ဘယ် IAM identity က ဘယ် IP ကနေ `DeleteBucket` ကို ခေါ်လဲဆိုတာ ပြတဲ့ service က ဘယ်ဟာလဲ?"),
      options: ['AWS Config', 'Amazon Inspector', 'AWS CloudTrail', 'Amazon CloudWatch'],
      correct: [2],
      explanation: L("CloudTrail records every API call with the identity, time and source IP; `DeleteBucket` is a management event visible in event history for 90 days. AWS Config shows that the bucket configuration disappeared, but not who made the call.",
        "CloudTrail はすべての API 呼び出しを ID・時刻・送信元 IP とともに記録します。`DeleteBucket` は管理イベントで、イベント履歴で 90 日間確認できます。AWS Config はバケットの構成が消えたことは示せますが、誰が呼び出したかは示しません。",
        "CloudTrail က API call တိုင်းကို identity၊ အချိန်၊ source IP နဲ့ မှတ်တမ်းတင်တယ်၊ `DeleteBucket` က management event ဖြစ်လို့ event history မှာ ရက် ၉၀ ကြည့်လို့ရတယ်။ AWS Config က bucket configuration ပျောက်သွားတာ ပြနိုင်ပေမယ့် ဘယ်သူခေါ်လဲ မပြဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['CLF-C02', 'SAA-C03'],
      prompt: L("A developer cannot find a memory utilization metric for an EC2 instance in CloudWatch. What should be done to collect it?",
        "開発者が CloudWatch で EC2 インスタンスのメモリ使用率メトリクスを見つけられません。収集するには何をすべきですか？",
        "Developer တစ်ယောက်က CloudWatch မှာ EC2 instance ရဲ့ memory utilization metric ကို ရှာမတွေ့ဘူး။ စုဆောင်းဖို့ ဘာလုပ်သင့်လဲ?"),
      options: ['Enable EC2 detailed monitoring', 'Install the CloudWatch agent on the instance', 'Enable CloudTrail data events', 'Turn on AWS Compute Optimizer'],
      correct: [1],
      explanation: L("Memory lives inside the guest OS, which the hypervisor cannot see, so the CloudWatch agent must publish it as a custom metric. Detailed monitoring only increases the frequency of the default metrics to 1 minute; it does not add memory.",
        "メモリはハイパーバイザーから見えないゲスト OS 内の情報なので、CloudWatch エージェントでカスタムメトリクスとして発行する必要があります。詳細モニタリングはデフォルトメトリクスの頻度を 1 分にするだけで、メモリは追加されません。",
        "Memory က hypervisor မမြင်ရတဲ့ guest OS ထဲမှာ ရှိလို့ CloudWatch agent က custom metric အဖြစ် ပို့ပေးရမယ်။ Detailed monitoring က default metric တွေကို ၁ မိနစ်တစ်ခါ ဖြစ်အောင်ပဲ လုပ်ပေးတာ၊ memory မထည့်ပေးဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['CLF-C02', 'SAA-C03'],
      prompt: L("Administrators need interactive shell access to EC2 instances in private subnets without opening inbound port 22 and with every session logged. What is the BEST solution?",
        "管理者は、インバウンドのポート 22 を開けずに、すべてのセッションを記録しながら、プライベートサブネットの EC2 インスタンスに対話型シェルでアクセスする必要があります。最適な解決策はどれですか？",
        "Admin တွေက inbound port 22 မဖွင့်ဘဲ session တိုင်းကို log လုပ်ထားပြီး private subnet ထဲက EC2 instance တွေကို interactive shell နဲ့ ဝင်ချင်တယ်။ အကောင်းဆုံး ဖြေရှင်းနည်းက ဘာလဲ?"),
      options: ['AWS Systems Manager Session Manager', 'A bastion host in a public subnet', 'Open port 22 only to the office IP range', 'AWS Systems Manager Run Command'],
      correct: [0],
      explanation: L("Session Manager gives an IAM-controlled shell through the SSM Agent with no inbound ports or keys and can log sessions to S3 or CloudWatch Logs. Run Command runs non-interactive commands; it is not an interactive shell.",
        "Session Manager は SSM Agent 経由で IAM 制御のシェルを提供し、インバウンドポートやキーは不要で、セッションを S3 や CloudWatch Logs に記録できます。Run Command は非対話型のコマンド実行であり、対話型シェルではありません。",
        "Session Manager က SSM Agent ကနေတဆင့် IAM နဲ့ထိန်းတဲ့ shell ကို inbound port၊ key မလိုဘဲ ပေးပြီး session တွေကို S3 ဒါမှမဟုတ် CloudWatch Logs မှာ log လုပ်နိုင်တယ်။ Run Command က interactive မဟုတ်တဲ့ command run တာဖြစ်လို့ interactive shell မဟုတ်ဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['CLF-C02'],
      prompt: L("A startup wants to be notified when its FORECASTED monthly AWS bill is expected to exceed a fixed amount. Which service should it use?",
        "あるスタートアップは、月額の AWS 請求の予測額が一定額を超えそうなときに通知を受けたいと考えています。どのサービスを使うべきですか？",
        "Startup တစ်ခုက လစဉ် AWS bill ရဲ့ ခန့်မှန်းငွေ (forecast) က သတ်မှတ်ငွေပမာဏ ကျော်မယ်ဆိုရင် အသိပေးခံချင်တယ်။ ဘယ် service ကို သုံးသင့်လဲ?"),
      options: ['AWS Cost Explorer', 'AWS Pricing Calculator', 'AWS Budgets', 'AWS Cost and Usage Report'],
      correct: [2],
      explanation: L("AWS Budgets sends alerts on actual or forecasted cost against a threshold you define. Cost Explorer can show a forecast chart, but it does not send threshold alerts by itself.",
        "AWS Budgets は自分で定義したしきい値に対して、実績または予測コストでアラートを送ります。Cost Explorer は予測グラフを表示できますが、それ自体でしきい値アラートは送りません。",
        "AWS Budgets က ကိုယ်သတ်မှတ်တဲ့ threshold နဲ့ တကယ့် cost ဒါမှမဟုတ် forecast cost ကို နှိုင်းပြီး alert ပို့တယ်။ Cost Explorer က forecast chart ပြနိုင်ပေမယ့် threshold alert ကိုယ်တိုင် မပို့ဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['CLF-C02'],
      prompt: L("Which of the following are check categories of AWS Trusted Advisor? (Select TWO)",
        "AWS Trusted Advisor のチェックカテゴリはどれですか？（2 つ選択）",
        "အောက်ပါတို့ထဲက AWS Trusted Advisor ရဲ့ check category တွေက ဘယ်ဟာတွေလဲ? (Select TWO)"),
      options: ['Cost optimization', 'Fault tolerance', 'Source code quality', 'Data residency'],
      correct: [0, 1],
      explanation: L("Trusted Advisor checks cost optimization, performance, security, fault tolerance, service limits and operational excellence. It does not review application source code (that is a tool like Amazon CodeGuru or Amazon Q Developer), and data residency is a compliance decision, not a Trusted Advisor category.",
        "Trusted Advisor はコスト最適化、パフォーマンス、セキュリティ、耐障害性、サービスの制限、運用上の優秀性をチェックします。アプリのソースコードはレビューしません（それは Amazon CodeGuru や Amazon Q Developer などのツールの役割です）。データレジデンシーはコンプライアンス上の判断で、Trusted Advisor のカテゴリではありません。",
        "Trusted Advisor က cost optimization၊ performance၊ security၊ fault tolerance၊ service limit၊ operational excellence ကို စစ်တယ်။ App source code ကို မစစ်ဘူး (အဲဒါ Amazon CodeGuru ဒါမှမဟုတ် Amazon Q Developer လို tool ရဲ့ အလုပ်)၊ data residency က compliance ဆုံးဖြတ်ချက်ဖြစ်ပြီး Trusted Advisor category မဟုတ်ဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['CLF-C02'],
      prompt: L("A company wants to be informed about AWS events that affect its own resources, such as a scheduled retirement of the host running one of its EC2 instances. Where should it look?",
        "ある企業は、自社の EC2 インスタンスを実行しているホストのリタイア予定など、自社リソースに影響する AWS イベントを知りたいと考えています。どこを確認すべきですか？",
        "Company တစ်ခုက ကိုယ့် EC2 instance run နေတဲ့ host ရဲ့ retirement အစီအစဉ်လို ကိုယ့် resource ကို ထိခိုက်တဲ့ AWS event တွေကို သိချင်တယ်။ ဘယ်မှာ ကြည့်သင့်လဲ?"),
      options: ['AWS Trusted Advisor', 'AWS Health Dashboard (your account health)', 'AWS CloudTrail event history', 'Service Quotas console'],
      correct: [1],
      explanation: L("The account health view of the AWS Health Dashboard shows events that affect your specific resources, including scheduled maintenance and host retirements. Trusted Advisor gives best-practice recommendations, not AWS-side events.",
        "AWS Health Dashboard のアカウントヘルスでは、計画メンテナンスやホストのリタイアなど、自分のリソースに影響するイベントが表示されます。Trusted Advisor はベストプラクティスの推奨を出すもので、AWS 側のイベントは表示しません。",
        "AWS Health Dashboard ရဲ့ account health view က scheduled maintenance နဲ့ host retirement အပါအဝင် ကိုယ့် resource ကို ထိခိုက်တဲ့ event တွေကို ပြတယ်။ Trusted Advisor က best-practice recommendation ပေးတာ၊ AWS ဘက်က event တွေ မပြဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['CLF-C02'],
      prompt: L("Which AWS service lets you define VPCs, EC2 instances and alarms in a YAML or JSON template and deploy them repeatedly as stacks?",
        "VPC、EC2 インスタンス、アラームを YAML または JSON のテンプレートで定義し、スタックとして繰り返しデプロイできる AWS サービスはどれですか？",
        "VPC၊ EC2 instance၊ alarm တွေကို YAML ဒါမှမဟုတ် JSON template နဲ့ သတ်မှတ်ပြီး stack အဖြစ် ထပ်ခါထပ်ခါ deploy လုပ်နိုင်တဲ့ AWS service က ဘယ်ဟာလဲ?"),
      options: ['AWS CodeDeploy', 'AWS Elastic Beanstalk', 'AWS Systems Manager', 'AWS CloudFormation'],
      correct: [3],
      explanation: L("CloudFormation is AWS-native infrastructure as code: templates create, update and delete stacks of resources. CodeDeploy deploys application code to existing compute; it does not create infrastructure from templates.",
        "CloudFormation は AWS ネイティブの IaC で、テンプレートからリソースのスタックを作成・更新・削除します。CodeDeploy は既存のコンピューティングにアプリケーションコードをデプロイするもので、テンプレートからインフラは作成しません。",
        "CloudFormation က AWS-native infrastructure as code ပါ- template ကနေ resource stack တွေကို create၊ update၊ delete လုပ်တယ်။ CodeDeploy က ရှိပြီးသား compute ဆီ application code ကို deploy လုပ်တာ၊ template ကနေ infrastructure မဆောက်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("A newly launched EC2 instance in a private subnet does not appear as a managed node in AWS Systems Manager. The AMI is Amazon Linux 2023. Which actions will fix the problem? (Select TWO)",
        "プライベートサブネットに新しく起動した EC2 インスタンスが、AWS Systems Manager のマネージドノードとして表示されません。AMI は Amazon Linux 2023 です。問題を解決するアクションはどれですか？（2 つ選択）",
        "Private subnet ထဲမှာ အသစ် launch လုပ်ထားတဲ့ EC2 instance က AWS Systems Manager မှာ managed node အဖြစ် မပေါ်ဘူး။ AMI က Amazon Linux 2023 ပါ။ ပြဿနာကို ဖြေရှင်းမယ့် action တွေက ဘယ်ဟာတွေလဲ? (Select TWO)"),
      options: ['Attach an instance profile that includes the AmazonSSMManagedInstanceCore policy', 'Provide outbound HTTPS to the Systems Manager endpoints through a NAT gateway or VPC interface endpoints', 'Add an inbound rule for port 22 from 0.0.0.0/0', 'Assign an Elastic IP address to the instance', 'Enable detailed monitoring on the instance'],
      correct: [0, 1],
      explanation: L("Amazon Linux 2023 already has the SSM Agent, so the agent needs IAM permissions (instance profile with `AmazonSSMManagedInstanceCore`) and an outbound path on 443 to the SSM endpoints. The agent connects outbound, so inbound port 22 or an Elastic IP do not help.",
        "Amazon Linux 2023 には SSM Agent が入っているため、必要なのは IAM 権限（`AmazonSSMManagedInstanceCore` 付きインスタンスプロファイル）と、SSM エンドポイントへのアウトバウンド 443 の経路です。エージェントはアウトバウンドで接続するため、インバウンドのポート 22 や Elastic IP は役に立ちません。",
        "Amazon Linux 2023 မှာ SSM Agent ပါပြီးသားမို့ agent အတွက် IAM permission (`AmazonSSMManagedInstanceCore` ပါတဲ့ instance profile) နဲ့ SSM endpoint ဆီ outbound 443 လမ်းကြောင်း လိုတယ်။ Agent က outbound ချိတ်တာဖြစ်လို့ inbound port 22 ဒါမှမဟုတ် Elastic IP က မကူညီဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['CLF-C02', 'SAA-C03'],
      prompt: L("A security team must see how a security group's rules changed over the past 30 days and be alerted when any security group allows SSH from 0.0.0.0/0. Which service meets both needs?",
        "セキュリティチームは、過去 30 日間にセキュリティグループのルールがどう変化したかを確認し、任意のセキュリティグループが 0.0.0.0/0 からの SSH を許可したときに通知を受ける必要があります。両方の要件を満たすサービスはどれですか？",
        "Security team က ပြီးခဲ့တဲ့ ရက် ၃၀ အတွင်း security group rule တွေ ဘယ်လိုပြောင်းလဲလဲ ကြည့်ရမယ်၊ security group တစ်ခုခုက 0.0.0.0/0 ကနေ SSH ခွင့်ပြုရင် alert ရရမယ်။ နှစ်ခုလုံးကို ဖြည့်ဆည်းတဲ့ service က ဘယ်ဟာလဲ?"),
      options: ['AWS CloudTrail', 'Amazon Inspector', 'AWS Trusted Advisor', 'AWS Config'],
      correct: [3],
      explanation: L("AWS Config keeps a configuration timeline for each resource and the managed rule `restricted-ssh` flags non-compliant security groups (notify via EventBridge/SNS). CloudTrail shows the API calls that changed the group, but it does not evaluate compliance or show the resulting configuration over time.",
        "AWS Config は各リソースの構成タイムラインを保持し、マネージドルール `restricted-ssh` が非準拠のセキュリティグループを検出します（EventBridge/SNS で通知）。CloudTrail はグループを変更した API 呼び出しは示しますが、準拠状況の評価や、時系列での構成結果の表示はしません。",
        "AWS Config က resource တစ်ခုစီရဲ့ configuration timeline ကို သိမ်းထားပြီး managed rule `restricted-ssh` က non-compliant security group တွေကို ပြတယ် (EventBridge/SNS နဲ့ အသိပေး)။ CloudTrail က group ကို ပြောင်းတဲ့ API call ကို ပြပေမယ့် compliance မစစ်ဘူး၊ အချိန်အလိုက် configuration ရလဒ်ကိုလည်း မပြဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("Auditors require a record of which IAM principal downloaded each object from a confidential S3 bucket. CloudTrail event history shows nothing about these downloads. What should the solutions architect do?",
        "監査人は、機密 S3 バケットから各オブジェクトをどの IAM プリンシパルがダウンロードしたかの記録を求めています。CloudTrail のイベント履歴にはこれらのダウンロードが表示されません。ソリューションアーキテクトは何をすべきですか？",
        "Auditor တွေက confidential S3 bucket ထဲက object တစ်ခုစီကို ဘယ် IAM principal က download လုပ်လဲဆိုတဲ့ မှတ်တမ်း လိုချင်တယ်။ CloudTrail event history မှာ ဒီ download တွေအကြောင်း ဘာမှမပြဘူး။ Solutions architect က ဘာလုပ်သင့်လဲ?"),
      options: ['Increase the CloudTrail event history retention to 1 year', 'Create a trail and enable S3 data events for the bucket', 'Create an AWS Config rule for the bucket', 'Enable VPC Flow Logs on the VPC'],
      correct: [1],
      explanation: L("`GetObject` is a data event, which is not logged by default; you must enable S3 data events on a trail (or a CloudTrail Lake event data store). Event history only covers management events and its 90-day window cannot be extended.",
        "`GetObject` はデータイベントで、デフォルトでは記録されません。証跡（または CloudTrail Lake のイベントデータストア）で S3 データイベントを有効にする必要があります。イベント履歴は管理イベントのみが対象で、90 日の期間は延長できません。",
        "`GetObject` က data event ဖြစ်ပြီး default မှာ log မလုပ်ဘူး၊ trail (ဒါမှမဟုတ် CloudTrail Lake event data store) မှာ S3 data event ကို enable လုပ်ရမယ်။ Event history က management event ကိုပဲ ပြပြီး ရက် ၉၀ ကို တိုးလို့မရဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("An application on EC2 reads an Amazon RDS master password. Security policy requires the password to be rotated automatically every 30 days with minimal custom code. Where should the password be stored?",
        "EC2 上のアプリが Amazon RDS のマスターパスワードを読み込みます。セキュリティポリシーでは、カスタムコードを最小限にして 30 日ごとにパスワードを自動ローテーションする必要があります。パスワードはどこに保存すべきですか？",
        "EC2 ပေါ်က application က Amazon RDS master password ကို ဖတ်တယ်။ Security policy အရ custom code အနည်းဆုံးနဲ့ ရက် ၃၀ တစ်ခါ password ကို အလိုအလျောက် rotate လုပ်ရမယ်။ Password ကို ဘယ်မှာ သိမ်းသင့်လဲ?"),
      options: ['Systems Manager Parameter Store as a SecureString', 'AWS KMS as a customer managed key', 'An encrypted object in Amazon S3', 'AWS Secrets Manager'],
      correct: [3],
      explanation: L("Secrets Manager has built-in rotation for RDS credentials on a schedule. Parameter Store SecureString encrypts the value but has no built-in rotation, so you would have to write and schedule your own code.",
        "Secrets Manager には RDS 認証情報をスケジュールでローテーションする機能が組み込まれています。Parameter Store の SecureString は値を暗号化しますが、組み込みのローテーションがないため、自分でコードを書いてスケジュールする必要があります。",
        "Secrets Manager မှာ RDS credential ကို schedule နဲ့ rotate လုပ်တဲ့ built-in feature ပါတယ်။ Parameter Store SecureString က value ကို encrypt လုပ်ပေမယ့် built-in rotation မရှိလို့ ကိုယ်တိုင် code ရေးပြီး schedule လုပ်ရမယ်။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("A company wants all development EC2 instances (tagged Env=dev) to stop every weekday at 22:00 Tokyo time with the LEAST operational overhead. What should a solutions architect recommend?",
        "ある企業は、開発用 EC2 インスタンス（タグ Env=dev）をすべて、平日の東京時間 22:00 に、運用負荷を最小限にして停止したいと考えています。ソリューションアーキテクトは何を推奨すべきですか？",
        "Company တစ်ခုက development EC2 instance (tag Env=dev) အားလုံးကို ကြားရက်တိုင်း Tokyo အချိန် ည ၁၀ နာရီမှာ operational overhead အနည်းဆုံးနဲ့ stop လုပ်ချင်တယ်။ Solutions architect က ဘာအကြံပြုသင့်လဲ?"),
      options: ['Run a cron job on a dedicated EC2 instance that calls the AWS CLI', 'Create an EventBridge Scheduler schedule with a cron expression and Asia/Tokyo time zone that runs an SSM Automation runbook to stop the tagged instances', 'Write a Lambda function that polls every minute and checks the time', 'Create an AWS Budgets action that stops instances when spend exceeds the budget'],
      correct: [1],
      explanation: L("EventBridge Scheduler is serverless, supports time zones and cron, and can start an SSM Automation runbook such as `AWS-StopEC2Instance` on tagged instances. A cron EC2 instance adds a server to patch and pay for, and a Budgets action reacts to spend, not to a clock.",
        "EventBridge Scheduler はサーバーレスで、タイムゾーンと cron に対応し、タグ付きインスタンスに対して `AWS-StopEC2Instance` などの SSM Automation ランブックを実行できます。cron 用の EC2 はパッチ適用やコストが必要なサーバーを増やし、Budgets アクションは時刻ではなく支出に反応します。",
        "EventBridge Scheduler က serverless ဖြစ်ပြီး time zone နဲ့ cron ကို support လုပ်ကာ tag ပါတဲ့ instance တွေပေါ်မှာ `AWS-StopEC2Instance` လို SSM Automation runbook ကို run နိုင်တယ်။ Cron EC2 က patch လုပ်ရ၊ ပိုက်ဆံပေးရမယ့် server တစ်လုံး တိုးစေပြီး Budgets action က အချိန်ကို မဟုတ်ဘဲ spend ကို တုံ့ပြန်တာပါ။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("Before updating a production CloudFormation stack, the team must know whether the change will replace the RDS DB instance. Which feature should they use?",
        "本番の CloudFormation スタックを更新する前に、変更によって RDS DB インスタンスが置換されるかどうかを知る必要があります。どの機能を使うべきですか？",
        "Production CloudFormation stack ကို update မလုပ်ခင် အဲဒီပြောင်းလဲမှုက RDS DB instance ကို replace လုပ်မလား သိရမယ်။ ဘယ် feature ကို သုံးသင့်လဲ?"),
      options: ['StackSets', 'Drift detection', 'Stack policy', 'Change sets'],
      correct: [3],
      explanation: L("A change set lists every resource that will be added, modified or replaced before you execute the update. Drift detection compares the stack with the real resources to find manual changes; it does not preview a new template.",
        "変更セットは、更新を実行する前に追加・変更・置換されるすべてのリソースを一覧表示します。ドリフト検出はスタックと実際のリソースを比較して手動変更を見つけるもので、新しいテンプレートのプレビューはしません。",
        "Change set က update မလုပ်ခင် add၊ modify၊ replace ဖြစ်မယ့် resource အားလုံးကို စာရင်းပြတယ်။ Drift detection က stack နဲ့ တကယ့် resource ကို နှိုင်းပြီး လက်နဲ့ပြောင်းထားတာကို ရှာတာ၊ template အသစ်ကို ကြိုမပြဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("A single EC2 instance runs a legacy app with data on EBS. The company wants the instance to be moved automatically to healthy hardware, keeping its instance ID, private IP and EBS volumes, if the underlying host fails. What should be configured?",
        "EBS 上のデータを持つレガシーアプリが 1 台の EC2 インスタンスで動いています。基盤ホストが故障した場合、インスタンス ID、プライベート IP、EBS ボリュームを保持したまま、正常なハードウェアへ自動的に移したいと考えています。何を設定すべきですか？",
        "EBS ပေါ်မှာ data ရှိတဲ့ legacy app က EC2 instance တစ်လုံးတည်းမှာ run နေတယ်။ အောက်က host ပျက်ရင် instance ID၊ private IP၊ EBS volume တွေ မပြောင်းဘဲ ကောင်းတဲ့ hardware ဆီ အလိုအလျောက် ရွှေ့ချင်တယ်။ ဘာကို configure လုပ်သင့်လဲ?"),
      options: ['A CloudWatch alarm on StatusCheckFailed_System with the EC2 recover action', 'An AWS Config rule with automatic remediation', 'A Trusted Advisor fault tolerance check', 'A Lambda function that reboots the instance every hour'],
      correct: [0],
      explanation: L("The recover action migrates the instance to new hardware while keeping its ID, private IPs, Elastic IPs and EBS volumes; it is triggered by a system status check failure. A Config rule evaluates configuration compliance, not host health, and scheduled reboots do not fix a hardware failure.",
        "復旧アクションはインスタンス ID、プライベート IP、Elastic IP、EBS ボリュームを保持したまま新しいハードウェアに移行し、システムステータスチェックの失敗で起動されます。Config ルールは構成の準拠を評価するもので、ホストの健全性は扱いません。定期再起動ではハードウェア障害は解決しません。",
        "Recover action က instance ID၊ private IP၊ Elastic IP၊ EBS volume တွေ မပြောင်းဘဲ hardware အသစ်ဆီ ရွှေ့ပေးပြီး system status check fail ဖြစ်ရင် စတင်တယ်။ Config rule က configuration compliance ကို စစ်တာ၊ host health မဟုတ်ဘူး၊ အချိန်မှန် reboot က hardware ပျက်တာကို မဖြေရှင်းဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("A GitHub Actions workflow deploys to AWS using an IAM user access key stored as a repository secret. The security team wants to remove all long-lived credentials. Which steps should be taken? (Select TWO)",
        "GitHub Actions のワークフローが、リポジトリシークレットに保存した IAM ユーザーのアクセスキーで AWS にデプロイしています。セキュリティチームは長期の認証情報をすべて廃止したいと考えています。どの手順を取るべきですか？（2 つ選択）",
        "GitHub Actions workflow က repository secret မှာ သိမ်းထားတဲ့ IAM user access key နဲ့ AWS ကို deploy လုပ်နေတယ်။ Security team က သက်တမ်းရှည် credential အားလုံးကို ဖယ်ချင်တယ်။ ဘယ်အဆင့်တွေ လုပ်သင့်လဲ? (Select TWO)"),
      options: ['Rotate the IAM user access key every 90 days', 'Create an IAM OIDC identity provider for token.actions.githubusercontent.com', 'Store the root user access key in GitHub encrypted secrets', 'Create an IAM role whose trust policy allows AssumeRoleWithWebIdentity only for the specific repository and branch'],
      correct: [1, 3],
      explanation: L("With an OIDC provider and a role whose trust policy checks the `sub` claim, the workflow receives temporary credentials and no key is stored anywhere. Rotating the access key still leaves a long-lived secret, and root keys should never be created.",
        "OIDC プロバイダーと、`sub` クレームを確認する信頼ポリシーを持つロールを使えば、ワークフローは一時的な認証情報を受け取り、どこにもキーを保存しません。アクセスキーのローテーションでは長期のシークレットが残り、ルートのキーは決して作成すべきではありません。",
        "OIDC provider နဲ့ `sub` claim ကို စစ်တဲ့ trust policy ပါတဲ့ role သုံးရင် workflow က temporary credential ရပြီး ဘယ်နေရာမှာမှ key သိမ်းစရာ မလိုဘူး။ Access key ကို rotate လုပ်တာက သက်တမ်းရှည် secret ကျန်နေဆဲဖြစ်ပြီး root key ကို ဘယ်တော့မှ မဖန်တီးသင့်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['CLF-C02', 'SAA-C03'],
      prompt: L("A finance team wants to be alerted automatically when spending on any service suddenly deviates from its normal pattern, without having to choose a fixed threshold for each service. Which service should it use?",
        "財務チームは、サービスごとに固定のしきい値を決めなくても、いずれかのサービスの支出が通常のパターンから急に外れたときに自動で通知を受けたいと考えています。どのサービスを使うべきですか？",
        "Finance team က service တစ်ခုစီအတွက် fixed threshold မသတ်မှတ်ဘဲ ဘယ် service ရဲ့ spend မဆို ပုံမှန် pattern ကနေ ရုတ်တရက် သွေဖည်ရင် အလိုအလျောက် alert ရချင်တယ်။ ဘယ် service ကို သုံးသင့်လဲ?"),
      options: ['AWS Budgets', 'AWS Cost Explorer', 'AWS Trusted Advisor', 'AWS Cost Anomaly Detection'],
      correct: [3],
      explanation: L("Cost Anomaly Detection uses machine learning to learn normal spend per service or account and alerts on anomalies. AWS Budgets requires you to define a fixed amount or percentage threshold.",
        "Cost Anomaly Detection は機械学習でサービスやアカウントごとの通常の支出を学習し、異常があればアラートを出します。AWS Budgets では固定の金額や割合のしきい値を自分で定義する必要があります。",
        "Cost Anomaly Detection က machine learning နဲ့ service ဒါမှမဟုတ် account တစ်ခုစီရဲ့ ပုံမှန် spend ကို လေ့လာပြီး anomaly ဖြစ်ရင် alert ပေးတယ်။ AWS Budgets ကတော့ fixed amount ဒါမှမဟုတ် percentage threshold ကို ကိုယ်တိုင် သတ်မှတ်ရတယ်။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("EC2 instances run in private subnets of a VPC that has no internet gateway and no NAT gateway. The instances have the correct instance profile, but Session Manager cannot connect. Which VPC interface endpoints must be created? (Select THREE)",
        "EC2 インスタンスは、インターネットゲートウェイも NAT ゲートウェイもない VPC のプライベートサブネットで動いています。インスタンスには正しいインスタンスプロファイルがありますが、Session Manager で接続できません。どの VPC インターフェイスエンドポイントを作成する必要がありますか？（3 つ選択）",
        "EC2 instance တွေက internet gateway လည်းမရှိ၊ NAT gateway လည်းမရှိတဲ့ VPC ရဲ့ private subnet ထဲမှာ run နေတယ်။ Instance profile မှန်ပေမယ့် Session Manager နဲ့ ချိတ်လို့မရဘူး။ ဘယ် VPC interface endpoint တွေကို ဆောက်ရမလဲ? (Select THREE)"),
      options: ['com.amazonaws.<region>.ssm', 'An inbound security group rule for port 22', 'com.amazonaws.<region>.ssmmessages', 'An Elastic IP address on each instance', 'com.amazonaws.<region>.ec2messages'],
      correct: [0, 2, 4],
      explanation: L("Systems Manager in an isolated subnet uses interface endpoints for `ssm`, `ssmmessages` (the Session Manager data channel) and `ec2messages`, and the endpoint security group must allow inbound 443 from the instances. Port 22 and Elastic IPs are irrelevant because Session Manager does not use SSH and an Elastic IP gives no path without an internet gateway.",
        "隔離されたサブネットでの Systems Manager には `ssm`、`ssmmessages`（Session Manager のデータチャネル）、`ec2messages` のインターフェイスエンドポイントを使い、エンドポイントのセキュリティグループでインスタンスからのインバウンド 443 を許可する必要があります。Session Manager は SSH を使わず、インターネットゲートウェイがなければ Elastic IP も経路にならないため、ポート 22 と Elastic IP は無関係です。",
        "Isolated subnet မှာ Systems Manager သုံးဖို့ `ssm`၊ `ssmmessages` (Session Manager data channel)၊ `ec2messages` interface endpoint တွေ လိုပြီး endpoint security group က instance တွေဆီက inbound 443 ကို ခွင့်ပြုရမယ်။ Session Manager က SSH မသုံးလို့ port 22 မလို၊ internet gateway မရှိရင် Elastic IP က လမ်းကြောင်းမပေးလို့ Elastic IP လည်း မဆိုင်ဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("A company uses AWS Organizations with 60 member accounts. It must deploy the same set of AWS Config rules, an SNS topic and IAM roles to every existing account and every future account in four Regions, with the LEAST operational overhead. What should a solutions architect do?",
        "ある企業は 60 のメンバーアカウントを持つ AWS Organizations を使っています。同じ AWS Config ルール群、SNS トピック、IAM ロールを、4 つのリージョンの既存および将来のすべてのアカウントに、運用負荷を最小限にしてデプロイする必要があります。ソリューションアーキテクトは何をすべきですか？",
        "Company တစ်ခုက member account ၆၀ ပါတဲ့ AWS Organizations ကို သုံးတယ်။ AWS Config rule တွေ၊ SNS topic၊ IAM role တွေကို region ၄ ခုမှာ ရှိပြီးသား account နဲ့ နောင် account အသစ်အားလုံးဆီ operational overhead အနည်းဆုံးနဲ့ deploy လုပ်ရမယ်။ Solutions architect က ဘာလုပ်သင့်လဲ?"),
      options: ['Use CloudFormation StackSets with service-managed permissions and automatic deployment enabled for the organization', 'Write a script that assumes a role in each account and runs aws cloudformation deploy in each Region', 'Ask each account owner to run cdk deploy from their laptop', 'Enable the organizational view in AWS Trusted Advisor'],
      correct: [0],
      explanation: L("StackSets with service-managed permissions deploy one template to many accounts and Regions, and automatic deployment adds the stack to new accounts that join the target OU. A custom script works but must be maintained and re-run for every new account, which is more overhead.",
        "サービスマネージド型のアクセス許可を使う StackSets は、1 つのテンプレートを多数のアカウント・リージョンにデプロイし、自動デプロイを有効にすると対象 OU に参加した新しいアカウントにもスタックを追加します。独自スクリプトでも可能ですが、保守が必要で新しいアカウントごとに再実行が必要なため、運用負荷が大きくなります。",
        "Service-managed permission ပါတဲ့ StackSets က template တစ်ခုကို account နဲ့ region အများကြီးဆီ deploy လုပ်ပေးပြီး automatic deployment ဖွင့်ထားရင် target OU ထဲ ဝင်လာတဲ့ account အသစ်တွေကိုလည်း stack ထည့်ပေးတယ်။ Custom script လည်း ရပေမယ့် ထိန်းသိမ်းရပြီး account အသစ်တိုင်းမှာ ပြန် run ရလို့ overhead ပိုများတယ်။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("An operations team receives too many pages. They want to be paged only when BOTH the ALB 5XX error count is high AND the target group latency is high at the same time, while keeping the individual alarms for dashboards. What should they configure?",
        "運用チームは呼び出しが多すぎて困っています。ALB の 5XX エラー数が多く、かつターゲットグループのレイテンシーも高いときだけ呼び出されるようにし、個別のアラームはダッシュボード用に残したいと考えています。何を設定すべきですか？",
        "Operations team က page (alert) အရမ်းများနေတယ်။ ALB 5XX error count များတာ နဲ့ target group latency မြင့်တာ **နှစ်ခုလုံး** တစ်ပြိုင်နက်ဖြစ်မှ page ချင်ပြီး alarm တစ်ခုချင်းစီကို dashboard အတွက် ထားချင်တယ်။ ဘာကို configure လုပ်သင့်လဲ?"),
      options: ['Two separate alarms, each with an SNS action', 'A metric filter on the ALB access logs', 'A composite alarm using AND of the two alarms, with the SNS action only on the composite alarm', 'A CloudWatch anomaly detection band on the request count'],
      correct: [2],
      explanation: L("A composite alarm combines alarm states with AND/OR/NOT, so the SNS page fires only when both conditions are true and the child alarms can have no actions. Two separate alarms with SNS actions would still page on each condition independently.",
        "複合アラームはアラームの状態を AND/OR/NOT で組み合わせるため、両方の条件が真のときだけ SNS で呼び出され、子アラームにはアクションを設定しなくて済みます。SNS アクション付きの個別アラーム 2 つでは、それぞれの条件で個別に呼び出されてしまいます。",
        "Composite alarm က alarm state တွေကို AND/OR/NOT နဲ့ ပေါင်းလို့ condition နှစ်ခုလုံး မှန်မှသာ SNS page ထွက်ပြီး child alarm တွေမှာ action မထားဘဲ ထားလို့ရတယ်။ SNS action ပါတဲ့ alarm နှစ်ခု သီးသန့်ထားရင် condition တစ်ခုချင်းစီမှာ သီးခြား page ထွက်နေဦးမှာပါ။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("A web app on EC2 writes errors to /var/log/app/error.log. The team wants these log lines stored centrally and an alarm when more than 50 ERROR lines appear in 5 minutes. Which combination meets the requirement? (Select TWO)",
        "EC2 上の Web アプリは /var/log/app/error.log にエラーを書き込みます。チームはこれらのログ行を一元的に保存し、5 分間に ERROR 行が 50 を超えたらアラームを出したいと考えています。要件を満たす組み合わせはどれですか？（2 つ選択）",
        "EC2 ပေါ်က web app က error တွေကို /var/log/app/error.log မှာ ရေးတယ်။ Team က ဒီ log line တွေကို တစ်နေရာတည်းမှာ သိမ်းပြီး ၅ မိနစ်အတွင်း ERROR line ၅၀ ကျော်ရင် alarm ထုတ်ချင်တယ်။ ဘယ်ပေါင်းစပ်မှုက requirement နဲ့ ကိုက်လဲ? (Select TWO)"),
      options: ['Enable EC2 detailed monitoring', 'Install the CloudWatch agent and configure it to send the log file to a CloudWatch Logs log group', 'Enable CloudTrail data events for EC2', 'Create a metric filter for ERROR on the log group and a CloudWatch alarm on the resulting metric'],
      correct: [1, 3],
      explanation: L("The CloudWatch agent ships the file to CloudWatch Logs, and a metric filter turns matching lines into a metric that an alarm can evaluate (Sum > 50 over 300 seconds). CloudTrail records AWS API calls, not application log files, and detailed monitoring only changes metric frequency.",
        "CloudWatch エージェントがファイルを CloudWatch Logs に送り、メトリクスフィルターが一致する行をメトリクスに変換し、アラームがそれを評価します（300 秒で合計 > 50）。CloudTrail は AWS の API 呼び出しを記録するもので、アプリのログファイルは扱いません。詳細モニタリングはメトリクスの頻度を変えるだけです。",
        "CloudWatch agent က file ကို CloudWatch Logs ဆီ ပို့ပြီး metric filter က ကိုက်တဲ့ line တွေကို metric ပြောင်းကာ alarm က စစ်တယ် (စက္ကန့် ၃၀၀ အတွင်း Sum > 50)။ CloudTrail က AWS API call ကို မှတ်တာ၊ app log file မဟုတ်ဘူး၊ detailed monitoring က metric frequency ကိုပဲ ပြောင်းတယ်။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("A company must guarantee that no one in any member account, including account administrators, can stop or delete the organization CloudTrail trail. Which solution PREVENTS this action?",
        "ある企業は、アカウント管理者を含め、どのメンバーアカウントの誰も組織の CloudTrail 証跡を停止・削除できないことを保証しなければなりません。この操作を防止するソリューションはどれですか？",
        "Company တစ်ခုက account administrator အပါအဝင် ဘယ် member account က ဘယ်သူမှ organization CloudTrail trail ကို stop ဒါမှမဟုတ် delete မလုပ်နိုင်ကြောင်း အာမခံရမယ်။ ဒီ action ကို **တားဆီး** ပေးတဲ့ solution က ဘာလဲ?"),
      options: ['An SCP that denies cloudtrail:StopLogging, cloudtrail:DeleteTrail and cloudtrail:UpdateTrail', 'An AWS Config rule cloudtrail-enabled with automatic remediation', 'A CloudWatch alarm on the StopLogging API call', 'A Trusted Advisor security check'],
      correct: [0],
      explanation: L("Service control policies set the maximum permissions in member accounts and apply even to account administrators, so the API calls are denied. A Config rule with remediation is detective: it re-enables logging after the fact, leaving a gap in the audit trail.",
        "サービスコントロールポリシー（SCP）はメンバーアカウントにおける最大の権限を定め、アカウント管理者にも適用されるため、これらの API 呼び出しは拒否されます。修復付きの Config ルールは発見的統制で、事後にログ記録を再開するだけなので、監査証跡に空白が生じます。",
        "Service control policy (SCP) က member account တွေရဲ့ အများဆုံး permission ကို သတ်မှတ်ပြီး account administrator ကိုပါ သက်ရောက်လို့ ဒီ API call တွေကို deny လုပ်ပေးတယ်။ Remediation ပါတဲ့ Config rule က detective ဖြစ်ပြီး နောက်မှ logging ကို ပြန်ဖွင့်ပေးတာမို့ audit trail မှာ ကွက်လပ် ကျန်တယ်။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("A GitHub Actions workflow assumes an AWS role with OIDC and works on the main branch. When the same workflow runs on a feature branch, it fails with 'Not authorized to perform sts:AssumeRoleWithWebIdentity'. What is the MOST likely cause?",
        "GitHub Actions のワークフローは OIDC で AWS のロールを引き受け、main ブランチでは正常に動作します。同じワークフローを feature ブランチで実行すると「Not authorized to perform sts:AssumeRoleWithWebIdentity」で失敗します。最も可能性の高い原因はどれですか？",
        "GitHub Actions workflow က OIDC နဲ့ AWS role ကို assume လုပ်ပြီး main branch မှာ အလုပ်ဖြစ်တယ်။ အဲဒီ workflow ကိုပဲ feature branch မှာ run ရင် 'Not authorized to perform sts:AssumeRoleWithWebIdentity' နဲ့ fail တယ်။ အဖြစ်နိုင်ဆုံး အကြောင်းရင်းက ဘာလဲ?"),
      options: ['The role is missing the AmazonSSMManagedInstanceCore policy', 'The SSM Agent on the target instances is stopped', 'The role trust policy restricts the sub claim to repo:org/app:ref:refs/heads/main', 'The OIDC provider must be recreated for every branch'],
      correct: [2],
      explanation: L("The trust policy condition on `token.actions.githubusercontent.com:sub` only matches the main branch, so STS rejects tokens from other branches. This is good practice; widen it only deliberately (for example to a GitHub environment). Permission policies and the SSM Agent matter after the role is assumed, so they cannot cause an AssumeRole error.",
        "信頼ポリシーの `token.actions.githubusercontent.com:sub` の条件が main ブランチにのみ一致するため、STS は他のブランチからのトークンを拒否します。これは良いプラクティスで、広げる場合は意図的に行います（例：GitHub environment 単位）。アクセス許可ポリシーや SSM Agent はロールを引き受けた後に関係するため、AssumeRole のエラーの原因にはなりません。",
        "Trust policy ရဲ့ `token.actions.githubusercontent.com:sub` condition က main branch နဲ့ပဲ ကိုက်လို့ STS က တခြား branch က token တွေကို ငြင်းပယ်တယ်။ ဒါက ကောင်းတဲ့ practice ပါ၊ ချဲ့ချင်ရင် ရည်ရွယ်ချက်ရှိရှိ (ဥပမာ GitHub environment အလိုက်) ပဲ ချဲ့ပါ။ Permission policy နဲ့ SSM Agent က role assume ပြီးမှ ဆိုင်တာမို့ AssumeRole error ကို မဖြစ်စေနိုင်ဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("A company is preparing for a seasonal traffic spike. It wants (1) EC2 right-sizing recommendations that take memory pressure into account and (2) a warning before the Region's On-Demand vCPU limit blocks a scale-out. Which actions meet these goals? (Select TWO)",
        "ある企業は季節的なトラフィック急増に備えています。(1) メモリの負荷を考慮した EC2 の適正サイズ推奨と、(2) リージョンのオンデマンド vCPU 上限によってスケールアウトが阻止される前の警告が必要です。これらの目標を満たすアクションはどれですか？（2 つ選択）",
        "Company တစ်ခုက season အလိုက် traffic တက်မှာကို ပြင်ဆင်နေတယ်။ (1) memory pressure ကို ထည့်တွက်တဲ့ EC2 right-sizing recommendation နဲ့ (2) region ရဲ့ On-Demand vCPU limit က scale-out ကို မပိတ်ခင် သတိပေးချက် လိုချင်တယ်။ ဒီ goal တွေနဲ့ ကိုက်တဲ့ action တွေက ဘယ်ဟာတွေလဲ? (Select TWO)"),
      options: ['Create a CloudWatch alarm on the Service Quotas usage metric for On-Demand vCPUs', 'Enable CloudTrail Insights events', 'Install the CloudWatch agent to publish memory utilization so AWS Compute Optimizer can use it', 'Use Cost Explorer Reserved Instance recommendations'],
      correct: [0, 2],
      explanation: L("Service Quotas publishes usage metrics you can alarm on before reaching the limit (and you can request an increase), and Compute Optimizer uses the agent's memory metric for better EC2 recommendations. CloudTrail Insights detects unusual API activity, and RI recommendations are about purchasing commitments, not sizing or quotas.",
        "Service Quotas は使用量メトリクスを発行するため、上限に達する前にアラームを出せます（引き上げもリクエスト可能）。Compute Optimizer はエージェントのメモリメトリクスを使って EC2 の推奨を改善します。CloudTrail Insights は異常な API アクティビティを検出するもので、RI の推奨は購入のコミットメントに関するもので、サイズやクォータとは関係ありません。",
        "Service Quotas က usage metric တွေ ပို့ပေးလို့ limit မရောက်ခင် alarm ထားနိုင်တယ် (increase လည်း တောင်းနိုင်တယ်)၊ Compute Optimizer က agent ရဲ့ memory metric ကိုသုံးပြီး EC2 recommendation ပိုကောင်းအောင် လုပ်တယ်။ CloudTrail Insights က ထူးဆန်းတဲ့ API activity ကို ရှာတာ၊ RI recommendation က commitment ဝယ်ယူမှုအကြောင်းဖြစ်ပြီး sizing ဒါမှမဟုတ် quota နဲ့ မဆိုင်ဘူး။"),
    },
  ],
  flashcards: [
    { term: 'CloudWatch agent',
      definition: L("Software installed on EC2 or on-premises servers that publishes OS-level metrics (memory, disk usage) and ships log files to CloudWatch.", "EC2 やオンプレミスのサーバーにインストールし、OS レベルのメトリクス（メモリ、ディスク使用率）を発行してログファイルを CloudWatch に送るソフトウェアです。", "EC2 ဒါမှမဟုတ် on-premises server မှာ install လုပ်ပြီး OS-level metric (memory၊ disk usage) တွေ ပို့ကာ log file တွေကို CloudWatch ဆီ ပို့ပေးတဲ့ software ပါ။"),
      example: L("Publish `mem_used_percent` to the `CWAgent` namespace and alarm at 90%.", "`mem_used_percent` を `CWAgent` 名前空間に発行し、90% でアラームを出します。", "`mem_used_percent` ကို `CWAgent` namespace ဆီ ပို့ပြီး 90% မှာ alarm ထားတာ။") },
    { term: 'CloudWatch alarm',
      definition: L("Watches a metric against a threshold over evaluation periods; states are OK, ALARM and INSUFFICIENT_DATA, and it can trigger SNS, EC2, Auto Scaling or SSM actions.", "評価期間にわたってメトリクスをしきい値と比較して監視します。状態は OK・ALARM・INSUFFICIENT_DATA で、SNS・EC2・Auto Scaling・SSM のアクションを実行できます。", "Evaluation period တွေအတွင်း metric ကို threshold နဲ့ နှိုင်းကြည့်တယ်၊ state က OK၊ ALARM၊ INSUFFICIENT_DATA ဖြစ်ပြီး SNS၊ EC2၊ Auto Scaling၊ SSM action တွေကို စတင်နိုင်တယ်။"),
      example: L("`StatusCheckFailed_System` ≥ 1 for 2 minutes → EC2 recover action.", "`StatusCheckFailed_System` が 2 分間 1 以上 → EC2 復旧アクション。", "`StatusCheckFailed_System` ≥ 1 က ၂ မိနစ်ကြာ → EC2 recover action။") },
    { term: 'CloudWatch Logs Insights',
      definition: L("An interactive query language for searching and aggregating log data in CloudWatch Logs, billed per GB scanned.", "CloudWatch Logs のログデータを検索・集計する対話型クエリ言語で、スキャンした GB 単位で課金されます。", "CloudWatch Logs ထဲက log data ကို ရှာပြီး စုပေါင်းတွက်တဲ့ interactive query language ဖြစ်ပြီး scan လုပ်တဲ့ GB အလိုက် ပိုက်ဆံကျတယ်။"),
      example: L("`filter @message like /ERROR/ | stats count(*) by bin(5m)`", "`filter @message like /ERROR/ | stats count(*) by bin(5m)` で 5 分ごとのエラー数を集計します。", "`filter @message like /ERROR/ | stats count(*) by bin(5m)` နဲ့ ၅ မိနစ်တစ်ခါ error ရေတွက်တာ။") },
    { term: 'CloudTrail data events',
      definition: L("High-volume data-plane API activity (S3 object operations, Lambda Invoke, DynamoDB items) that is not logged by default and must be enabled on a trail.", "大量のデータプレーン API アクティビティ（S3 オブジェクト操作、Lambda Invoke、DynamoDB 項目）で、デフォルトでは記録されず、証跡で有効化する必要があります。", "Volume များတဲ့ data-plane API activity (S3 object operation၊ Lambda Invoke၊ DynamoDB item) ဖြစ်ပြီး default မှာ log မလုပ်လို့ trail မှာ enable လုပ်ရတယ်။"),
      example: L("Prove who downloaded `payroll.csv` from a confidential bucket.", "機密バケットから `payroll.csv` を誰がダウンロードしたかを証明します。", "Confidential bucket ထဲက `payroll.csv` ကို ဘယ်သူ download လုပ်လဲ သက်သေပြတာ။") },
    { term: 'AWS Config rule',
      definition: L("A managed or custom rule that evaluates resource configurations as COMPLIANT or NON_COMPLIANT; it can trigger SSM Automation remediation but does not block actions.", "リソースの構成を COMPLIANT / NON_COMPLIANT と評価するマネージドまたはカスタムのルールです。SSM Automation による修復を実行できますが、操作はブロックしません。", "Resource configuration ကို COMPLIANT ဒါမှမဟုတ် NON_COMPLIANT လို့ စစ်တဲ့ managed/custom rule ပါ၊ SSM Automation remediation ကို စတင်နိုင်ပေမယ့် action ကို မတားဘူး။"),
      example: L("`encrypted-volumes` flags unencrypted EBS volumes.", "`encrypted-volumes` は暗号化されていない EBS ボリュームを検出します。", "`encrypted-volumes` က encrypt မလုပ်ထားတဲ့ EBS volume တွေကို ပြတယ်။") },
    { term: 'EventBridge rule',
      definition: L("Matches events on an event bus using an event pattern (or runs on a schedule) and sends them to targets such as Lambda, SNS, SQS or Step Functions.", "イベントバス上のイベントをイベントパターンで照合し（またはスケジュールで実行し）、Lambda、SNS、SQS、Step Functions などのターゲットに送ります。", "Event bus ပေါ်က event တွေကို event pattern နဲ့ ကိုက်ညှိပြီး (ဒါမှမဟုတ် schedule နဲ့ run ပြီး) Lambda၊ SNS၊ SQS၊ Step Functions လို target တွေဆီ ပို့တယ်။"),
      example: L("Pattern `source: aws.ec2, state: stopped` → Lambda posts to Slack.", "パターン `source: aws.ec2, state: stopped` → Lambda が Slack に投稿。", "Pattern `source: aws.ec2, state: stopped` → Lambda က Slack ကို post လုပ်တာ။") },
    { term: 'Session Manager',
      definition: L("A Systems Manager capability that opens an IAM-controlled, audited shell to managed nodes with no inbound ports, SSH keys or bastion hosts.", "インバウンドポート、SSH キー、踏み台ホストなしで、マネージドノードへ IAM 制御かつ監査付きのシェルを開く Systems Manager の機能です。", "Inbound port၊ SSH key၊ bastion host မလိုဘဲ managed node တွေဆီ IAM နဲ့ထိန်းပြီး audit လုပ်ထားတဲ့ shell ဖွင့်ပေးတဲ့ Systems Manager capability ပါ။"),
      example: L("`aws ssm start-session --target i-0abc123`", "`aws ssm start-session --target i-0abc123` でシェルに接続します。", "`aws ssm start-session --target i-0abc123` နဲ့ shell ဝင်တာ။") },
    { term: 'AmazonSSMManagedInstanceCore',
      definition: L("The AWS managed IAM policy that an EC2 instance profile needs so the SSM Agent can register the instance as a managed node.", "SSM Agent がインスタンスをマネージドノードとして登録するために、EC2 インスタンスプロファイルに必要な AWS マネージド IAM ポリシーです。", "SSM Agent က instance ကို managed node အဖြစ် register လုပ်နိုင်ဖို့ EC2 instance profile မှာ လိုအပ်တဲ့ AWS managed IAM policy ပါ။"),
      example: L("Instance missing from Fleet Manager → first check this policy and outbound 443.", "Fleet Manager にインスタンスが表示されない → まずこのポリシーとアウトバウンド 443 を確認します。", "Fleet Manager မှာ instance မပေါ် → ဒီ policy နဲ့ outbound 443 ကို အရင်စစ်ပါ။") },
    { term: 'Parameter Store',
      definition: L("A Systems Manager capability for hierarchical configuration data and secrets; SecureString values are encrypted with KMS, but there is no built-in rotation.", "階層的な設定データとシークレットを保存する Systems Manager の機能です。SecureString は KMS で暗号化されますが、組み込みのローテーションはありません。", "Hierarchy နဲ့ configuration data နဲ့ secret တွေ သိမ်းတဲ့ Systems Manager capability ပါ၊ SecureString ကို KMS နဲ့ encrypt လုပ်ပေမယ့် built-in rotation မရှိဘူး။"),
      example: L("`/myapp/prod/api_url` read by the app at startup.", "アプリが起動時に `/myapp/prod/api_url` を読み込みます。", "App စတက်တဲ့အခါ `/myapp/prod/api_url` ကို ဖတ်တာ။") },
    { term: 'Change set',
      definition: L("A CloudFormation preview that lists which resources an update will add, modify or replace before you execute it.", "更新を実行する前に、どのリソースが追加・変更・置換されるかを一覧表示する CloudFormation のプレビューです。", "Update မလုပ်ခင် ဘယ် resource တွေ add၊ modify၊ replace ဖြစ်မလဲ စာရင်းပြတဲ့ CloudFormation preview ပါ။"),
      example: L("Shows `Replacement: True` for an RDS instance after changing its identifier.", "識別子を変更した後の RDS インスタンスに `Replacement: True` と表示されます。", "Identifier ပြောင်းပြီးနောက် RDS instance မှာ `Replacement: True` ပြတာ။") },
    { term: 'StackSets',
      definition: L("A CloudFormation feature that deploys one template to multiple AWS accounts and Regions, optionally auto-deploying to new accounts in an OU.", "1 つのテンプレートを複数の AWS アカウント・リージョンにデプロイする CloudFormation の機能で、OU の新しいアカウントに自動デプロイすることもできます。", "Template တစ်ခုကို AWS account နဲ့ region အများကြီးဆီ deploy လုပ်ပေးတဲ့ CloudFormation feature ဖြစ်ပြီး OU ထဲက account အသစ်တွေကို auto-deploy လည်း လုပ်နိုင်တယ်။"),
      example: L("Roll out a security baseline to 60 accounts in 4 Regions.", "60 アカウント・4 リージョンにセキュリティベースラインを展開します。", "Account ၆၀၊ region ၄ ခုဆီ security baseline ဖြန့်တာ။") },
    { term: 'GitHub Actions OIDC',
      definition: L("A federation method where a workflow exchanges a GitHub-signed token for temporary AWS credentials via an IAM role, removing stored access keys.", "ワークフローが GitHub 署名のトークンを IAM ロール経由で一時的な AWS 認証情報と交換するフェデレーション方式で、保存したアクセスキーが不要になります。", "Workflow က GitHub sign လုပ်ထားတဲ့ token ကို IAM role ကနေ temporary AWS credential နဲ့ လဲယူတဲ့ federation နည်းဖြစ်ပြီး access key သိမ်းစရာ မလိုတော့ဘူး။"),
      example: L("`permissions: id-token: write` + `aws-actions/configure-aws-credentials` with `role-to-assume`.", "`permissions: id-token: write` と、`role-to-assume` を指定した `aws-actions/configure-aws-credentials` を使います。", "`permissions: id-token: write` နဲ့ `role-to-assume` ပါတဲ့ `aws-actions/configure-aws-credentials` ကို သုံးတာ။") },
  ],
};
