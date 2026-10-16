import { L, type SeedTopic } from '../types.js';

export const topic: SeedTopic = {
  slug: 'azure-operations',
  icon: 'Activity',
  level: 'ASSOCIATE',
  exams: ['AZ-900', 'AZ-104'],
  name: L("Monitoring, Backup & Operations", "監視・バックアップ・運用", "Monitoring၊ Backup နဲ့ Operations (လုပ်ငန်းလည်ပတ်မှု)"),
  description: L(
    "Azure Monitor metrics and logs, Log Analytics and KQL, diagnostic settings, alerts and action groups, Application Insights, Service Health, Advisor, Azure Backup, Site Recovery, Update Manager and Network Watcher.",
    "Azure Monitor のメトリックとログ、Log Analytics と KQL、診断設定、アラートとアクショングループ、Application Insights、Service Health、Advisor、Azure Backup、Site Recovery、Update Manager、Network Watcher を学びます。",
    "Azure Monitor ရဲ့ metric နဲ့ log၊ Log Analytics နဲ့ KQL၊ diagnostic setting၊ alert နဲ့ action group၊ Application Insights၊ Service Health၊ Advisor၊ Azure Backup၊ Site Recovery၊ Update Manager နဲ့ Network Watcher ကို လေ့လာမယ်။",
  ),
  lesson: {
    minutes: 22,
    objectives: [
      L("Explain the Azure Monitor data platform and choose between metrics and logs.",
        "Azure Monitor のデータプラットフォームを説明し、メトリックとログを使い分けられる。",
        "Azure Monitor data platform ကို ရှင်းပြပြီး metric နဲ့ log ကို ခွဲခြားရွေးနိုင်မယ်။"),
      L("Collect resource logs and guest data with diagnostic settings and the Azure Monitor Agent, and query them with basic KQL.",
        "診断設定と Azure Monitor エージェントでリソースログとゲストデータを収集し、基本的な KQL でクエリできる。",
        "Diagnostic setting နဲ့ Azure Monitor Agent သုံးပြီး resource log နဲ့ guest data ကို စုဆောင်းကာ အခြေခံ KQL နဲ့ query လုပ်နိုင်မယ်။"),
      L("Design alerts with the right signal type, action groups and alert processing rules.",
        "適切なシグナルの種類、アクショングループ、アラート処理ルールでアラートを設計できる。",
        "သင့်တော်တဲ့ signal type၊ action group နဲ့ alert processing rule တွေနဲ့ alert ကို ဒီဇိုင်းဆွဲနိုင်မယ်။"),
      L("Distinguish Azure status, Service Health, Resource Health and Azure Advisor.",
        "Azure status・Service Health・Resource Health・Azure Advisor を区別できる。",
        "Azure status၊ Service Health၊ Resource Health နဲ့ Azure Advisor ကို ခွဲခြားနိုင်မယ်။"),
      L("Protect workloads with Azure Backup and Azure Site Recovery, using RPO and RTO to pick the right one.",
        "RPO と RTO を基準に Azure Backup と Azure Site Recovery を選び、ワークロードを保護できる。",
        "RPO နဲ့ RTO ကို အခြေခံပြီး Azure Backup နဲ့ Azure Site Recovery ထဲက သင့်တော်တာ ရွေးကာ workload ကို ကာကွယ်နိုင်မယ်။"),
      L("Keep machines patched with Azure Update Manager and troubleshoot connectivity with Network Watcher.",
        "Azure Update Manager でマシンのパッチを維持し、Network Watcher で接続のトラブルシューティングができる。",
        "Azure Update Manager နဲ့ machine တွေကို patch လုပ်ထားပြီး Network Watcher နဲ့ connectivity ပြဿနာ ရှာနိုင်မယ်။"),
    ],
    sections: [
      {
        id: "azure-monitor",
        title: L("Azure Monitor: one platform for metrics and logs", "Azure Monitor：メトリックとログのための 1 つのプラットフォーム", "Azure Monitor- metric နဲ့ log အတွက် platform တစ်ခုတည်း"),
        blocks: [
          { type: 'p', text: L(
            "**Azure Monitor** is the umbrella service that collects, stores, analyzes and acts on telemetry from Azure, on-premises and other clouds. Think of a hospital: **metrics** are the heart-rate monitor beside the bed (a number every few seconds, perfect for a quick glance and instant alarms), while **logs** are the patient's full medical record (rich, detailed events you search when you need to understand *why* something happened).",
            "**Azure Monitor** は、Azure・オンプレミス・他クラウドからテレメトリを収集・保存・分析し、対応する包括的なサービスです。病院にたとえると、**メトリック**はベッド横の心拍モニター（数秒ごとの数値で、一目で確認でき即座にアラームを出せる）、**ログ**は患者のカルテ（*なぜ*起きたかを理解するときに検索する詳細なイベント）です。",
            "**Azure Monitor** က Azure၊ on-premises၊ တခြား cloud တွေက telemetry ကို စုဆောင်း၊ သိမ်း၊ ခွဲခြမ်းစိတ်ဖြာပြီး တုံ့ပြန်ပေးတဲ့ ထီးကြီး service ပါ။ ဆေးရုံနဲ့ ဥပမာပေးရရင်- **metric** က ကုတင်ဘေးက နှလုံးခုန်နှုန်း monitor (စက္ကန့်အနည်းငယ်တိုင်း ဂဏန်းတစ်ခု၊ ချက်ချင်းကြည့်ပြီး alarm ပေးဖို့ ကောင်း)၊ **log** က လူနာရဲ့ ဆေးမှတ်တမ်းအပြည့်အစုံ (ဘာကြောင့် ဖြစ်တာလဲ နားလည်ဖို့ ရှာဖွေတဲ့ အသေးစိတ် event) ပါ။"
          ) },
          { type: 'diagram', text:
`SOURCES                   DATA PLATFORM          CONSUME / ACT
--------------------      ----------------       -----------------
Azure resources  ---+     +--------------+       Metrics Explorer
Guest OS (AMA)   ---+---->| Metrics      |-----> Alerts
Applications     ---+     | (time series)|       Autoscale
Activity Log     ---+     +--------------+       Workbooks
Custom sources   ---+     +--------------+       Dashboards
                    +---->| Logs         |-----> Log Analytics
                          | (workspace)  |       (KQL), Export`,
            caption: L("Everything flows into two stores, metrics and logs, then into tools that visualize and act", "すべてのデータはメトリックとログの 2 つのストアに流れ、可視化と対応のツールで利用されます", "Data အားလုံးက metric နဲ့ log ဆိုတဲ့ store ၂ ခုထဲ ဝင်ပြီး မြင်သာအောင်ပြ၊ တုံ့ပြန်တဲ့ tool တွေက သုံးတယ်") },
          { type: 'table',
            head: [L("Aspect", "観点", "အချက်"), L("Metrics", "メトリック", "Metric များ"), L("Logs", "ログ", "Log များ")],
            rows: [
              [L("Data shape", "データの形", "Data ပုံစံ"), L("Numbers with a timestamp (CPU %, requests/sec)", "タイムスタンプ付きの数値（CPU %、要求数/秒）", "Timestamp ပါတဲ့ ဂဏန်း (CPU %၊ requests/sec)"), L("Records with many columns (text, numbers, IDs)", "多数の列を持つレコード（テキスト・数値・ID）", "Column အများကြီးပါတဲ့ record (စာ၊ ဂဏန်း၊ ID)")],
              [L("Speed", "速さ", "မြန်နှုန်း"), L("Near real time, ideal for fast alerts", "ほぼリアルタイム、すばやいアラートに最適", "Real time နီးပါး၊ မြန်တဲ့ alert အတွက် ကောင်း"), L("Short ingestion delay (minutes)", "取り込みに少し遅延がある（数分）", "Ingest လုပ်ဖို့ နည်းနည်းကြာ (မိနစ်ပိုင်း)")],
              [L("Stored in", "保存先", "သိမ်းတဲ့နေရာ"), L("Metrics database; platform metrics kept 93 days", "メトリックデータベース、プラットフォームメトリックは 93 日保持", "Metrics database၊ platform metric ကို ၉၃ ရက် ထားတယ်"), L("Log Analytics workspace, retention you configure", "Log Analytics ワークスペース、保持期間は自分で設定", "Log Analytics workspace၊ retention ကို ကိုယ်တိုင်သတ်မှတ်")],
              [L("Analyze with", "分析ツール", "ခွဲခြမ်းတဲ့ tool"), L("Metrics Explorer", "メトリックエクスプローラー", "Metrics Explorer (ဂရပ်ကြည့်)"), L("KQL queries in Log Analytics", "Log Analytics の KQL クエリ", "Log Analytics ထဲက KQL query")],
              [L("Collected by default?", "既定で収集されるか", "Default စုဆောင်းလား"), L("Yes, platform metrics for most resources", "はい、ほとんどのリソースのプラットフォームメトリック", "ဟုတ်၊ resource အများစုရဲ့ platform metric"), L("Only the Activity Log; resource logs need diagnostic settings", "Activity Log のみ。リソースログには診断設定が必要", "Activity Log ပဲ၊ resource log အတွက် diagnostic setting လို")],
            ] },
          { type: 'callout', tone: 'memory', text: L(
            "**Metrics = Meter** (a number on a gauge, right now). **Logs = Library** (detailed books you search with KQL). If the question says \"query\", \"correlate\" or \"search events\", think logs.",
            "**Metrics = メーター**（今この瞬間のゲージの数値）、**Logs = 図書館**（KQL で検索する詳細な本）。問題文に「クエリ」「相関」「イベントを検索」とあればログを考えましょう。",
            "**Metrics = Meter** (အခုလက်ရှိ gauge ပေါ်က ဂဏန်း)။ **Logs = Library** (KQL နဲ့ ရှာတဲ့ အသေးစိတ်စာအုပ်တွေ)။ မေးခွန်းမှာ \"query\"၊ \"correlate\"၊ \"search events\" ပါရင် log ကို စဉ်းစားပါ။"
          ) },
        ],
      },
      {
        id: "activity-log-diagnostics",
        title: L("Activity Log, resource logs and diagnostic settings", "Activity Log、リソースログ、診断設定", "Activity Log၊ resource log နဲ့ diagnostic setting"),
        blocks: [
          { type: 'p', text: L(
            "There are three layers of log data, and the exam loves to mix them up. The **Activity Log** records **control-plane** operations at subscription level: who created, changed or deleted a resource, and when (\"Who deleted VM-web01 last night?\"). It is collected automatically and kept for **90 days**. **Resource logs** record **data-plane** activity inside a resource (Key Vault secret reads, SQL queries, storage requests) and are **not collected until you create a diagnostic setting**. **Guest OS data** (Windows event logs, Linux syslog, performance counters inside the VM) needs the **Azure Monitor Agent (AMA)** plus a **data collection rule (DCR)**.",
            "ログデータには 3 つの層があり、試験ではよく混同させられます。**Activity Log** はサブスクリプションレベルの**コントロールプレーン**操作、つまり誰がいつリソースを作成・変更・削除したかを記録します（「昨夜 VM-web01 を削除したのは誰？」）。自動的に収集され、**90 日間**保持されます。**リソースログ**はリソース内部の**データプレーン**の動作（Key Vault のシークレット読み取り、SQL クエリ、ストレージ要求など）を記録し、**診断設定を作成するまで収集されません**。**ゲスト OS のデータ**（Windows イベントログ、Linux の syslog、VM 内のパフォーマンスカウンター）には **Azure Monitor エージェント（AMA）**と**データ収集ルール（DCR）**が必要です。",
            "Log data မှာ အလွှာ ၃ ခုရှိပြီး exam က ရောထွေးအောင် မေးလေ့ရှိတယ်။ **Activity Log** က subscription level မှာ **control-plane** operation တွေ- ဘယ်သူက ဘယ်အချိန် resource ကို ဖန်တီး/ပြင်/ဖျက်လဲ ဆိုတာ မှတ်တယ် (\"မနေ့ညက VM-web01 ကို ဘယ်သူဖျက်လဲ?\")။ အလိုအလျောက် စုဆောင်းပြီး **၉၀ ရက်** ထားတယ်။ **Resource log** က resource အတွင်းက **data-plane** လှုပ်ရှားမှု (Key Vault secret ဖတ်တာ၊ SQL query၊ storage request) ကို မှတ်ပြီး **diagnostic setting မဖန်တီးမချင်း မစုဆောင်းဘူး**။ **Guest OS data** (Windows event log၊ Linux syslog၊ VM အတွင်းက performance counter) အတွက် **Azure Monitor Agent (AMA)** နဲ့ **data collection rule (DCR)** လိုတယ်။"
          ) },
          { type: 'list', items: [
            L("A **diagnostic setting** routes platform metrics and resource logs (or the Activity Log) to up to four kinds of destinations: a **Log Analytics workspace** (query and alert), a **storage account** (cheap archive), **Event Hubs** (stream to a SIEM such as Splunk) and **partner solutions**.",
              "**診断設定**は、プラットフォームメトリックとリソースログ（または Activity Log）を最大 4 種類の宛先に送ります：**Log Analytics ワークスペース**（クエリとアラート）、**ストレージアカウント**（安価なアーカイブ）、**Event Hubs**（Splunk などの SIEM へストリーミング）、**パートナーソリューション**です。",
              "**Diagnostic setting** က platform metric နဲ့ resource log (ဒါမှမဟုတ် Activity Log) ကို destination ၄ မျိုးဆီ ပို့ပေးတယ်- **Log Analytics workspace** (query နဲ့ alert)၊ **storage account** (စျေးသက်သာတဲ့ archive)၊ **Event Hubs** (Splunk လို SIEM ဆီ stream)၊ **partner solution**။"),
            L("Each resource can have up to **5 diagnostic settings**, for example one to the security team's workspace and one to a long-term archive storage account.",
              "各リソースには最大 **5 つの診断設定**を作成でき、たとえばセキュリティチームのワークスペース用と長期アーカイブ用ストレージアカウント用を分けられます。",
              "Resource တစ်ခုမှာ **diagnostic setting ၅ ခု** ထိ ထားလို့ရတယ်၊ ဥပမာ security team ရဲ့ workspace အတွက်တစ်ခု၊ ရေရှည် archive storage account အတွက်တစ်ခု။"),
            L("To keep Activity Log data longer than 90 days or query it with KQL, export it with a diagnostic setting to a workspace (table `AzureActivity`).",
              "Activity Log を 90 日より長く保持したり KQL でクエリしたりするには、診断設定でワークスペース（`AzureActivity` テーブル）にエクスポートします。",
              "Activity Log ကို ၉၀ ရက်ထက်ပိုထားချင်ရင် ဒါမှမဟုတ် KQL နဲ့ query လုပ်ချင်ရင် diagnostic setting နဲ့ workspace (`AzureActivity` table) ဆီ export လုပ်ပါ။"),
            L("The legacy **Log Analytics agent (MMA/OMS)** was retired in August 2024; new designs use **AMA + DCR**.",
              "従来の **Log Analytics エージェント（MMA/OMS）**は 2024 年 8 月に廃止されました。新しい設計では **AMA + DCR** を使います。",
              "အဟောင်း **Log Analytics agent (MMA/OMS)** ကို 2024 ခုနှစ် August မှာ ရပ်လိုက်ပြီ၊ design အသစ်တွေမှာ **AMA + DCR** ကို သုံးပါ။"),
          ] },
          { type: 'code', lang: 'bash', code:
`# Send Key Vault audit logs and metrics to a Log Analytics workspace
az monitor diagnostic-settings create \\
  --name kv-to-law \\
  --resource "/subscriptions/<sub-id>/resourceGroups/rg-sec/providers/Microsoft.KeyVault/vaults/kv-prod-01" \\
  --workspace "/subscriptions/<sub-id>/resourceGroups/rg-mon/providers/Microsoft.OperationalInsights/workspaces/law-prod" \\
  --logs '[{"categoryGroup":"audit","enabled":true}]' \\
  --metrics '[{"category":"AllMetrics","enabled":true}]'`,
            caption: L("Without this setting, Key Vault data-plane logs are simply not recorded", "この設定がないと、Key Vault のデータプレーンログはそもそも記録されません", "ဒီ setting မရှိရင် Key Vault data-plane log တွေကို လုံးဝ မမှတ်တမ်းတင်ဘူး") },
          { type: 'callout', tone: 'exam', text: L(
            "\"Who stopped the VM?\" = **Activity Log**. \"Who read the secret in Key Vault?\" = **resource logs via a diagnostic setting**. \"Collect Windows event logs from inside the VM\" = **Azure Monitor Agent + data collection rule**. A diagnostic setting on a VM does **not** collect guest OS logs.",
            "「VM を停止したのは誰？」= **Activity Log**。「Key Vault のシークレットを読んだのは誰？」= **診断設定によるリソースログ**。「VM 内部の Windows イベントログを収集」= **Azure Monitor エージェント + データ収集ルール**。VM の診断設定ではゲスト OS のログは収集**できません**。",
            "\"VM ကို ဘယ်သူ stop လုပ်လဲ?\" = **Activity Log**။ \"Key Vault secret ကို ဘယ်သူဖတ်လဲ?\" = **diagnostic setting နဲ့ resource log**။ \"VM အတွင်းက Windows event log စုဆောင်း\" = **Azure Monitor Agent + data collection rule**။ VM ပေါ်က diagnostic setting က guest OS log ကို **မစုဆောင်းပေးဘူး**။"
          ) },
        ],
      },
      {
        id: "log-analytics-kql",
        title: L("Log Analytics workspaces and basic KQL", "Log Analytics ワークスペースと基本の KQL", "Log Analytics workspace နဲ့ အခြေခံ KQL"),
        blocks: [
          { type: 'p', text: L(
            "A **Log Analytics workspace** is the database where Azure Monitor Logs live. Each data source writes to its own **table** (`Heartbeat`, `Perf`, `Event`, `Syslog`, `AzureActivity`, `AzureDiagnostics`...). Retention is **30 days by default** for interactive queries, can be raised to **2 years**, and long-term retention can keep data up to **12 years** at lower cost. Many organizations use **one central workspace per region or environment** and control access with Azure RBAC.",
            "**Log Analytics ワークスペース**は Azure Monitor Logs が格納されるデータベースです。データソースごとに専用の**テーブル**（`Heartbeat`、`Perf`、`Event`、`Syslog`、`AzureActivity`、`AzureDiagnostics` など）に書き込まれます。対話型クエリの保持期間は**既定で 30 日**、最大 **2 年**まで延長でき、長期保持では低コストで最大 **12 年**保存できます。多くの組織は**リージョンや環境ごとに 1 つの中央ワークスペース**を使い、Azure RBAC でアクセスを制御します。",
            "**Log Analytics workspace** က Azure Monitor Logs ကို သိမ်းတဲ့ database ပါ။ Data source တစ်ခုစီက ကိုယ်ပိုင် **table** (`Heartbeat`၊ `Perf`၊ `Event`၊ `Syslog`၊ `AzureActivity`၊ `AzureDiagnostics`...) ထဲ ရေးတယ်။ Interactive query အတွက် retention က **default ၃၀ ရက်**၊ **၂ နှစ်** ထိ တိုးနိုင်ပြီး long-term retention နဲ့ စျေးသက်သာစွာ **၁၂ နှစ်** ထိ ထားနိုင်တယ်။ Organization အများစုက **region သို့ environment တစ်ခုကို ဗဟို workspace တစ်ခု** သုံးပြီး Azure RBAC နဲ့ access ထိန်းတယ်။"
          ) },
          { type: 'p', text: L(
            "**KQL (Kusto Query Language)** reads like a pipeline: start with a table, then pass the rows through operators with `|`, like water flowing through filters. The four operators you must know: `where` (filter rows), `summarize` (aggregate, like GROUP BY), `project` (choose columns) and `render` (draw a chart). `ago(1h)` means \"one hour before now\".",
            "**KQL（Kusto Query Language）**はパイプラインのように読みます。テーブルから始め、`|` で行を演算子に流します。水がフィルターを通るイメージです。必ず覚えるべき演算子は 4 つ：`where`（行の絞り込み）、`summarize`（集計、GROUP BY のようなもの）、`project`（列の選択）、`render`（グラフ描画）。`ago(1h)` は「今から 1 時間前」を意味します。",
            "**KQL (Kusto Query Language)** ကို pipeline လို ဖတ်ရတယ်- table တစ်ခုနဲ့ စပြီး `|` နဲ့ row တွေကို operator တွေထဲ ဖြတ်စီးစေတယ်၊ ရေက filter တွေထဲ စီးသလိုပါ။ မဖြစ်မနေ သိရမယ့် operator ၄ ခု- `where` (row filter)၊ `summarize` (စုပေါင်းတွက်၊ GROUP BY လို)၊ `project` (column ရွေး)၊ `render` (chart ဆွဲ)။ `ago(1h)` က \"အခုကနေ ၁ နာရီ အရင်\" ကို ဆိုလိုတယ်။"
          ) },
          { type: 'code', lang: 'kql', code:
`// 1. Which VMs stopped sending heartbeats in the last 15 minutes?
Heartbeat
| summarize LastSeen = max(TimeGenerated) by Computer
| where LastSeen < ago(15m)

// 2. Average CPU per computer, 5-minute buckets, as a chart
Perf
| where TimeGenerated > ago(4h)
| where ObjectName == "Processor" and CounterName == "% Processor Time"
| summarize AvgCPU = avg(CounterValue) by bin(TimeGenerated, 5m), Computer
| render timechart

// 3. Who deleted resources in the last 7 days?
AzureActivity
| where TimeGenerated > ago(7d)
| where OperationNameValue endswith "/DELETE"
| project TimeGenerated, Caller, ResourceGroup, _ResourceId, ActivityStatusValue`,
            caption: L("Table first, then filter, aggregate and render", "まずテーブル、次に絞り込み・集計・描画", "ပထမ table၊ ပြီးမှ filter၊ စုပေါင်းတွက်၊ chart ဆွဲ") },
          { type: 'callout', tone: 'memory', text: L(
            "**\"Where Summer Parties Rock\"**: `where` filters, `summarize` groups, `project` picks columns, `render` draws. And `count()` lives inside `summarize`: `summarize count() by Computer`.",
            "**「Where Summer Parties Rock」**：`where` で絞り込み、`summarize` で集計、`project` で列を選び、`render` で描画。`count()` は `summarize` の中で使います：`summarize count() by Computer`。",
            "**\"Where Summer Parties Rock\"** လို့ မှတ်ပါ- `where` filter၊ `summarize` group၊ `project` column ရွေး၊ `render` chart ဆွဲ။ `count()` က `summarize` ထဲမှာ သုံးရတယ်- `summarize count() by Computer`။"
          ) },
        ],
      },
      {
        id: "alerts",
        title: L("Alerts, action groups and alert processing rules", "アラート、アクショングループ、アラート処理ルール", "Alert၊ action group နဲ့ alert processing rule"),
        blocks: [
          { type: 'p', text: L(
            "An **alert rule** has three parts: the **scope** (which resources), the **condition** (signal + logic, such as \"CPU > 85% for 10 minutes\") and the **actions** (an **action group**). When the condition is met, an alert fires with a **severity** from **Sev0 (critical)** to **Sev4 (verbose)**. Like a smoke detector: the sensor is the condition, the siren and the call to the fire brigade are the action group.",
            "**アラートルール**は 3 つの要素で構成されます：**スコープ**（対象リソース）、**条件**（シグナルとロジック、例：「CPU > 85% が 10 分間」）、**アクション**（**アクショングループ**）。条件を満たすと、**Sev0（重大）**から **Sev4（詳細）**までの**重大度**でアラートが発生します。煙探知機にたとえると、センサーが条件、サイレンと消防署への通報がアクショングループです。",
            "**Alert rule** မှာ အပိုင်း ၃ ခု ပါတယ်- **scope** (ဘယ် resource)၊ **condition** (signal + logic၊ ဥပမာ \"CPU > 85% ကို ၁၀ မိနစ်\")၊ **action** (**action group**)။ Condition ပြည့်ရင် **Sev0 (critical)** ကနေ **Sev4 (verbose)** ထိ **severity** နဲ့ alert ထွက်တယ်။ မီးခိုး detector နဲ့ တူတယ်- sensor က condition၊ ဥဩသံနဲ့ မီးသတ်ကို ဖုန်းဆက်တာက action group ပါ။"
          ) },
          { type: 'table',
            head: [L("Alert type", "アラートの種類", "Alert အမျိုးအစား"), L("Signal", "シグナル", "Signal (အချက်ပြ data)"), L("Example", "例", "ဥပမာ")],
            rows: [
              [L("Metric alert", "メトリックアラート", "Metric alert (ဂဏန်းအခြေခံ)"), L("Platform or custom metrics; static or **dynamic** (machine-learned) thresholds", "プラットフォーム/カスタムメトリック、静的または**動的**（機械学習）しきい値", "Platform/custom metric၊ static သို့ **dynamic** (machine-learned) threshold"), L("VM CPU above 85% for 10 minutes", "VM の CPU が 10 分間 85% 超", "VM CPU ၁၀ မိနစ်ကြာ 85% ကျော်")],
              [L("Log search alert", "ログ検索アラート", "Log search alert (KQL အခြေခံ)"), L("A KQL query run on a schedule against a workspace", "ワークスペースに対して定期実行する KQL クエリ", "Workspace ပေါ်မှာ schedule နဲ့ run တဲ့ KQL query"), L("More than 5 `EventID 4625` failed logons in 10 minutes", "10 分間に `EventID 4625` のログオン失敗が 5 件超", "၁၀ မိနစ်အတွင်း `EventID 4625` logon မအောင်မြင်တာ ၅ ကြိမ်ကျော်")],
              [L("Activity log alert", "アクティビティログアラート", "Activity log alert (control-plane event)"), L("Activity Log events, including Service Health and Resource Health", "Service Health と Resource Health を含む Activity Log のイベント", "Service Health နဲ့ Resource Health အပါအဝင် Activity Log event"), L("Someone deletes a VM, or a service issue hits Japan East", "VM が削除された、または Japan East でサービス障害が発生", "တစ်ယောက်ယောက်က VM ဖျက်တာ၊ Japan East မှာ service issue ဖြစ်တာ")],
              [L("Smart detection", "スマート検出", "Smart detection (အလိုအလျောက် ရှာဖွေ)"), L("Application Insights anomaly detection", "Application Insights の異常検出", "Application Insights ရဲ့ ပုံမှန်မဟုတ်တာ ရှာဖွေမှု"), L("Sudden rise in failed web requests", "Web 要求の失敗が急増", "Web request မအောင်မြင်တာ ရုတ်တရက် တက်လာ")],
            ] },
          { type: 'list', items: [
            L("**Action group**: a reusable list of **notifications** (email, SMS, Azure app push, voice call) and **actions** (Automation runbook, Azure Function, Logic App, webhook, ITSM, Event Hub). One action group can be shared by hundreds of alert rules.",
              "**アクショングループ**：**通知**（メール、SMS、Azure アプリのプッシュ、音声通話）と**アクション**（Automation Runbook、Azure Functions、Logic Apps、Webhook、ITSM、Event Hubs）の再利用可能なリストです。1 つのアクショングループを数百のアラートルールで共有できます。",
              "**Action group**: **notification** (email၊ SMS၊ Azure app push၊ voice call) နဲ့ **action** (Automation runbook၊ Azure Function၊ Logic App၊ webhook၊ ITSM၊ Event Hub) တွေကို ပြန်သုံးလို့ရတဲ့ list ပါ။ Action group တစ်ခုကို alert rule ရာနဲ့ချီ မျှသုံးနိုင်တယ်။"),
            L("**Alert processing rules** modify fired alerts at scale without editing the rules: **suppress** notifications during a maintenance window (for example every Saturday 22:00-02:00), or **add an action group** to every alert in a subscription.",
              "**アラート処理ルール**は、ルールを編集せずに発生したアラートを一括で変更します。メンテナンス期間（例：毎週土曜 22:00〜02:00）の通知を**抑制**したり、サブスクリプション内のすべてのアラートに**アクショングループを追加**したりできます。",
              "**Alert processing rule** က rule တွေကို မပြင်ဘဲ ထွက်လာတဲ့ alert တွေကို အစုလိုက် ပြောင်းပေးတယ်- maintenance window (ဥပမာ စနေနေ့တိုင်း 22:00-02:00) မှာ notification ကို **suppress** လုပ်တာ၊ subscription ထဲက alert အားလုံးကို **action group ထည့်** တာ။"),
            L("Alert **user states** are **New**, **Acknowledged** and **Closed**; the **monitor condition** (Fired/Resolved) is set by the system. Metric alerts are stateful by default and resolve automatically.",
              "アラートの**ユーザー状態**は **New**・**Acknowledged**・**Closed** で、**監視条件**（Fired/Resolved）はシステムが設定します。メトリックアラートは既定でステートフルで、自動的に解決されます。",
              "Alert ရဲ့ **user state** တွေက **New**၊ **Acknowledged**၊ **Closed** ဖြစ်ပြီး **monitor condition** (Fired/Resolved) ကို system က သတ်မှတ်တယ်။ Metric alert တွေက default stateful ဖြစ်ပြီး အလိုအလျောက် resolve ဖြစ်တယ်။"),
          ] },
          { type: 'code', lang: 'bash', code:
`# Action group that emails the on-call team
az monitor action-group create -g rg-mon -n ag-oncall \\
  --short-name oncall --action email oncall ops@contoso.com

# Metric alert: average CPU > 85% over 10 minutes, checked every minute
az monitor metrics alert create -g rg-mon -n cpu-high-web01 \\
  --scopes "/subscriptions/<sub-id>/resourceGroups/rg-web/providers/Microsoft.Compute/virtualMachines/web01" \\
  --condition "avg Percentage CPU > 85" \\
  --window-size 10m --evaluation-frequency 1m --severity 2 \\
  --action ag-oncall`,
            caption: L("Create the action group once, then attach it to many alert rules", "アクショングループを一度作成し、多数のアラートルールに関連付けます", "Action group ကို တစ်ခါဖန်တီးပြီး alert rule အများကြီးမှာ ချိတ်သုံးပါ") },
          { type: 'callout', tone: 'exam', text: L(
            "\"Stop alert notifications during planned maintenance without disabling rules\" = **alert processing rule with suppression**. \"Notify when a VM is deleted\" = **activity log alert**. \"Alert on a pattern in collected logs\" = **log search alert**. \"Reuse the same email/SMS list\" = **action group**.",
            "「ルールを無効化せずに計画メンテナンス中の通知を止める」= **抑制付きのアラート処理ルール**。「VM が削除されたら通知」= **アクティビティログアラート**。「収集したログ内のパターンでアラート」= **ログ検索アラート**。「同じメール/SMS の宛先を再利用」= **アクショングループ**。",
            "\"Rule မပိတ်ဘဲ planned maintenance အချိန် notification ရပ်\" = **suppression ပါတဲ့ alert processing rule**။ \"VM ဖျက်ရင် အသိပေး\" = **activity log alert**။ \"စုထားတဲ့ log ထဲက pattern နဲ့ alert\" = **log search alert**။ \"Email/SMS list ကို ပြန်သုံး\" = **action group**။"
          ) },
        ],
      },
      {
        id: "insights",
        title: L("Application Insights, VM Insights and workbooks", "Application Insights、VM Insights、ブック", "Application Insights၊ VM Insights နဲ့ workbook"),
        blocks: [
          { type: 'p', text: L(
            "**Application Insights** is the **application performance monitoring (APM)** feature of Azure Monitor. You add the OpenTelemetry-based SDK or enable auto-instrumentation (for example on App Service), and it collects requests, response times, dependencies (SQL, HTTP calls), exceptions, page views and custom events into a workspace-based resource. Highlights: **Application Map** (visual map of components and failing calls), **Live Metrics**, **availability tests** that ping your URL from multiple locations worldwide, and distributed tracing.",
            "**Application Insights** は Azure Monitor の**アプリケーションパフォーマンス監視（APM）**機能です。OpenTelemetry ベースの SDK を追加するか、自動インストルメンテーション（App Service など）を有効にすると、要求・応答時間・依存関係（SQL、HTTP 呼び出し）・例外・ページビュー・カスタムイベントをワークスペースベースのリソースに収集します。主な機能は、**アプリケーションマップ**（コンポーネントと失敗した呼び出しの可視化）、**ライブメトリック**、世界の複数拠点から URL を確認する**可用性テスト**、分散トレースです。",
            "**Application Insights** က Azure Monitor ရဲ့ **application performance monitoring (APM)** feature ပါ။ OpenTelemetry အခြေခံ SDK ထည့်တာ ဒါမှမဟုတ် auto-instrumentation (ဥပမာ App Service မှာ) ဖွင့်လိုက်ရင် request၊ response time၊ dependency (SQL၊ HTTP call)၊ exception၊ page view၊ custom event တွေကို workspace-based resource ထဲ စုဆောင်းပေးတယ်။ ထူးခြားချက်တွေ- **Application Map** (component တွေနဲ့ fail ဖြစ်တဲ့ call တွေကို ပုံနဲ့ပြ)၊ **Live Metrics**၊ ကမ္ဘာ့နေရာအများကနေ URL ကို စစ်တဲ့ **availability test**၊ distributed tracing။"
          ) },
          { type: 'list', items: [
            L("**VM Insights**: monitors VM and scale set performance (CPU, memory, disk, network trends) and, with the dependency map, shows processes and connections between machines. It uses the Azure Monitor Agent and sends data to a Log Analytics workspace.",
              "**VM Insights**：VM と仮想マシンスケールセットのパフォーマンス（CPU・メモリ・ディスク・ネットワークの傾向）を監視し、依存関係マップでプロセスやマシン間の接続を表示します。Azure Monitor エージェントを使い、Log Analytics ワークスペースにデータを送ります。",
              "**VM Insights**: VM နဲ့ scale set ရဲ့ performance (CPU၊ memory၊ disk၊ network trend) ကို monitor လုပ်ပြီး dependency map နဲ့ process တွေ၊ machine ကြား connection တွေကို ပြတယ်။ Azure Monitor Agent သုံးပြီး Log Analytics workspace ဆီ data ပို့တယ်။"),
            L("**Container Insights** does the same for AKS clusters (node and pod health, logs).",
              "**Container Insights** は AKS クラスターに対して同様の監視（ノードとポッドの正常性、ログ）を行います。",
              "**Container Insights** က AKS cluster အတွက် အတူတူ လုပ်ပေးတယ် (node နဲ့ pod health၊ log)။"),
            L("**Workbooks** combine text, KQL queries, metrics and parameters into interactive reports; **Azure dashboards** pin tiles for an at-a-glance view; **Grafana** dashboards are also supported.",
              "**ブック（Workbooks）**はテキスト・KQL クエリ・メトリック・パラメーターを組み合わせた対話型レポートです。**Azure ダッシュボード**はタイルをピン留めして一目で確認でき、**Grafana** ダッシュボードもサポートされます。",
              "**Workbook** က text၊ KQL query၊ metric၊ parameter တွေကို ပေါင်းထားတဲ့ interactive report ပါ၊ **Azure dashboard** က tile တွေ pin လုပ်ပြီး တစ်ချက်ကြည့်ရုံနဲ့ သိနိုင်တယ်၊ **Grafana** dashboard ကိုလည်း support လုပ်တယ်။"),
          ] },
          { type: 'callout', tone: 'tip', text: L(
            "Rule of thumb: **inside the code** (slow API, exceptions, dependency failures) = Application Insights; **inside the VM** (memory pressure, disk queue, which ports talk to which servers) = VM Insights; **around the platform** (CPU metric, resource logs) = Azure Monitor metrics and diagnostic settings.",
            "目安：**コードの内部**（遅い API、例外、依存関係の失敗）= Application Insights、**VM の内部**（メモリ不足、ディスクキュー、どのポートがどのサーバーと通信しているか）= VM Insights、**プラットフォーム周り**（CPU メトリック、リソースログ）= Azure Monitor のメトリックと診断設定。",
            "မှတ်စရာ- **code အတွင်း** (API နှေး၊ exception၊ dependency fail) = Application Insights၊ **VM အတွင်း** (memory မလောက်၊ disk queue၊ ဘယ် port က ဘယ် server နဲ့ ဆက်သွယ်လဲ) = VM Insights၊ **platform ပတ်ဝန်းကျင်** (CPU metric၊ resource log) = Azure Monitor metric နဲ့ diagnostic setting။"
          ) },
        ],
      },
      {
        id: "health-advisor",
        title: L("Service Health, Resource Health and Azure Advisor", "Service Health、Resource Health、Azure Advisor", "Service Health၊ Resource Health နဲ့ Azure Advisor"),
        blocks: [
          { type: 'p', text: L(
            "When something breaks, the first question is: **is it Azure, or is it us?** Three health views answer that at different zoom levels, like a weather service: the national weather map (Azure status), the forecast for your own city (Service Health), and the thermometer on your own balcony (Resource Health).",
            "障害が起きたとき、最初の疑問は**「Azure の問題か、自分たちの問題か？」**です。3 つの正常性ビューが異なる拡大レベルで答えます。天気予報にたとえると、全国の天気図（Azure status）、自分の街の予報（Service Health）、自宅ベランダの温度計（Resource Health）です。",
            "တစ်ခုခု ပျက်တဲ့အခါ ပထမမေးခွန်းက **\"Azure ပြဿနာလား၊ ကိုယ့်ပြဿနာလား?\"** ပါ။ Health view ၃ ခုက zoom level မတူဘဲ ဖြေပေးတယ်- မိုးလေဝသနဲ့ ဥပမာပေးရရင် တစ်နိုင်ငံလုံး ရာသီဥတုမြေပုံ (Azure status)၊ ကိုယ့်မြို့အတွက် ခန့်မှန်းချက် (Service Health)၊ ကိုယ့်အိမ် ဝရန်တာက သာမိုမီတာ (Resource Health)။"
          ) },
          { type: 'table',
            head: [L("Tool", "ツール", "Tool (ကိရိယာ)"), L("Scope", "範囲", "Scope (သက်ရောက်နယ်)"), L("Tells you", "わかること", "ဘာပြောပြလဲ")],
            rows: [
              [L("Azure status page", "Azure status ページ", "Azure status page (အများသုံး)"), L("Global, public, all customers", "グローバル、公開、全顧客向け", "ကမ္ဘာလုံးဆိုင်ရာ၊ public၊ customer အားလုံး"), L("Widespread outages across Azure", "Azure 全体の大規模障害", "Azure တစ်ခုလုံး ကျယ်ကျယ်ပြန့်ပြန့် outage")],
              [L("Azure Service Health", "Azure Service Health", "Azure Service Health (ကိုယ့် subscription)"), L("Your subscriptions, the services and regions you use", "自分のサブスクリプションと、利用中のサービス・リージョン", "ကိုယ့် subscription၊ ကိုယ်သုံးတဲ့ service နဲ့ region"), L("Service issues, **planned maintenance**, health and security advisories", "サービスの問題、**計画メンテナンス**、正常性・セキュリティアドバイザリ", "Service issue၊ **planned maintenance**၊ health နဲ့ security advisory")],
              [L("Azure Resource Health", "Azure Resource Health", "Azure Resource Health (resource တစ်ခု)"), L("One specific resource", "特定の 1 つのリソース", "သတ်မှတ် resource တစ်ခု"), L("Available, Unavailable, Degraded or Unknown, with history and likely cause", "Available・Unavailable・Degraded・Unknown と履歴、推定原因", "Available၊ Unavailable၊ Degraded၊ Unknown နဲ့ history၊ ဖြစ်နိုင်တဲ့ အကြောင်းရင်း")],
            ] },
          { type: 'p', text: L(
            "**Azure Advisor** is a free, personalized consultant that analyzes your configuration and usage and gives recommendations in five categories: **Reliability**, **Security**, **Performance**, **Cost** and **Operational excellence**. Examples: resize or shut down an underused VM (Cost), add a second VM to an availability set (Reliability), enable backup for a VM. The **Advisor score** shows how closely you follow the recommendations, and you can create **Advisor alerts** and weekly digests.",
            "**Azure Advisor** は構成と使用状況を分析し、5 つのカテゴリで推奨事項を示す無料のパーソナライズされたコンサルタントです：**信頼性（Reliability）**、**セキュリティ**、**パフォーマンス**、**コスト**、**オペレーショナルエクセレンス**。例：あまり使われていない VM のサイズ変更や停止（コスト）、可用性セットに 2 台目の VM を追加（信頼性）、VM のバックアップの有効化。**Advisor スコア**で推奨事項への準拠度がわかり、**Advisor アラート**や週次ダイジェストも作成できます。",
            "**Azure Advisor** က ကိုယ့် configuration နဲ့ usage ကို ခွဲခြမ်းစိတ်ဖြာပြီး အမျိုးအစား ၅ ခုနဲ့ အကြံပေးတဲ့ အခမဲ့ personalized consultant ပါ- **Reliability**၊ **Security**၊ **Performance**၊ **Cost**၊ **Operational excellence**။ ဥပမာ- သိပ်မသုံးတဲ့ VM ကို size လျှော့/ပိတ် (Cost)၊ availability set ထဲ VM ဒုတိယတစ်လုံး ထည့် (Reliability)၊ VM အတွက် backup ဖွင့်။ **Advisor score** က အကြံပြုချက်တွေကို ဘယ်လောက် လိုက်နာလဲ ပြပြီး **Advisor alert** နဲ့ အပတ်စဉ် digest လည်း ဖန်တီးနိုင်တယ်။"
          ) },
          { type: 'callout', tone: 'memory', text: L(
            "Advisor's five pillars spell **\"CROPS\"**: **C**ost, **R**eliability, **O**perational excellence, **P**erformance, **S**ecurity. Service Health = \"Is **Azure** healthy for **me**?\"; Resource Health = \"Is **this resource** healthy?\"",
            "Advisor の 5 つの柱は **「CROPS」**：**C**ost、**R**eliability、**O**perational excellence、**P**erformance、**S**ecurity。Service Health =「**自分にとって** **Azure** は正常？」、Resource Health =「**このリソース**は正常？」。",
            "Advisor ရဲ့ pillar ၅ ခုကို **\"CROPS\"** လို့ မှတ်ပါ- **C**ost၊ **R**eliability၊ **O**perational excellence၊ **P**erformance၊ **S**ecurity။ Service Health = \"**ငါ့အတွက်** **Azure** ကောင်းလား?\"၊ Resource Health = \"**ဒီ resource** ကောင်းလား?\""
          ) },
          { type: 'callout', tone: 'exam', text: L(
            "\"Be notified of planned maintenance that affects our VMs in Japan East\" = **Service Health alert** (an activity log alert on Service Health). \"Was my VM down because of the platform last night?\" = **Resource Health**. \"Find idle resources to save money\" = **Advisor**.",
            "「Japan East の VM に影響する計画メンテナンスを通知してほしい」= **Service Health アラート**（Service Health に対するアクティビティログアラート）。「昨夜 VM が停止したのはプラットフォームが原因？」= **Resource Health**。「節約のため未使用リソースを見つける」= **Advisor**。",
            "\"Japan East က ကိုယ့် VM တွေကို ထိခိုက်မယ့် planned maintenance ကို အသိပေးစေချင်\" = **Service Health alert** (Service Health ပေါ်က activity log alert)။ \"မနေ့ညက VM ပျက်တာ platform ကြောင့်လား?\" = **Resource Health**။ \"ငွေချွေတာဖို့ မသုံးတဲ့ resource ရှာ\" = **Advisor**။"
          ) },
        ],
      },
      {
        id: "azure-backup",
        title: L("Azure Backup: vaults, policies, soft delete and restore", "Azure Backup：コンテナー、ポリシー、論理的な削除、復元", "Azure Backup- vault၊ policy၊ soft delete နဲ့ restore"),
        blocks: [
          { type: 'p', text: L(
            "**Azure Backup** takes point-in-time copies of your data so you can go back in time after accidental deletion, corruption or ransomware. It is like a bank safe-deposit box: copies are stored separately from the original, in a **vault** that you configure but cannot easily tamper with.",
            "**Azure Backup** はデータの特定時点のコピーを取り、誤削除・破損・ランサムウェアの後でも過去の状態に戻れるようにします。銀行の貸金庫のようなもので、コピーは元データとは別の**コンテナー（vault）**に保管され、構成はできても簡単には改ざんできません。",
            "**Azure Backup** က data ရဲ့ point-in-time copy တွေ ယူထားလို့ မတော်တဆဖျက်မိတာ၊ ပျက်စီးတာ၊ ransomware တိုက်ခိုက်ခံရတာ ပြီးရင်လည်း အရင်အချိန်ကို ပြန်သွားနိုင်တယ်။ ဘဏ်က safe-deposit box လိုပါပဲ- copy တွေကို original နဲ့ သီးခြား **vault** ထဲမှာ သိမ်းပြီး configure လုပ်လို့ရပေမယ့် လွယ်လွယ်နဲ့ မပြင်ဆင်နိုင်ဘူး။"
          ) },
          { type: 'table',
            head: [L("Vault", "コンテナー", "Vault (သိုလှောင်ခန်း)"), L("Protects", "保護対象", "ကာကွယ်ပေးတာ"), L("Notes", "補足", "မှတ်ချက်")],
            rows: [
              [L("Recovery Services vault", "Recovery Services コンテナー", "Recovery Services vault (အဟောင်း/အဓိက)"), L("Azure VMs, SQL Server and SAP HANA in Azure VMs, Azure Files, on-premises via MARS agent / MABS / DPM", "Azure VM、Azure VM 上の SQL Server と SAP HANA、Azure Files、MARS エージェント・MABS・DPM 経由のオンプレミス", "Azure VM၊ Azure VM ထဲက SQL Server နဲ့ SAP HANA၊ Azure Files၊ MARS agent / MABS / DPM နဲ့ on-premises"), L("Also used by Azure Site Recovery", "Azure Site Recovery でも使用", "Azure Site Recovery ကလည်း သုံးတယ်")],
              [L("Backup vault", "Backup コンテナー", "Backup vault (workload အသစ်များ)"), L("Azure Managed Disks, Azure Blobs, Azure Database for PostgreSQL, AKS", "Azure マネージドディスク、Azure BLOB、Azure Database for PostgreSQL、AKS", "Azure Managed Disk၊ Azure Blob၊ Azure Database for PostgreSQL၊ AKS"), L("Newer workloads; managed through Backup center / Business Continuity Center", "新しいワークロード向け、バックアップセンター / Business Continuity Center で管理", "Workload အသစ်တွေအတွက်၊ Backup center / Business Continuity Center ကနေ စီမံ")],
            ] },
          { type: 'list', items: [
            L("**Region rule**: to back up an Azure VM, the vault must be in the **same region** as the VM. Choose the vault's storage redundancy (LRS, ZRS or GRS) **before** protecting the first item; it cannot be changed afterwards. **Cross Region Restore** requires a GRS vault.",
              "**リージョンのルール**：Azure VM をバックアップするには、コンテナーが VM と**同じリージョン**にある必要があります。コンテナーのストレージ冗長性（LRS・ZRS・GRS）は最初の項目を保護する**前に**選択し、後から変更できません。**リージョン間の復元**には GRS のコンテナーが必要です。",
              "**Region rule**: Azure VM ကို backup လုပ်ဖို့ vault က VM နဲ့ **region တူ** ဖြစ်ရမယ်။ Vault ရဲ့ storage redundancy (LRS၊ ZRS၊ GRS) ကို ပထမ item ကို protect မလုပ်ခင် **ကြိုရွေး** ရမယ်၊ နောက်မှ မပြောင်းနိုင်ဘူး။ **Cross Region Restore** အတွက် GRS vault လိုတယ်။"),
            L("**Backup policy** = schedule + retention. The **Standard** policy backs up once a day; the **Enhanced** policy allows multiple backups per day (for example every 4 hours) and is required for Trusted Launch VMs. Retention can be daily, weekly, monthly and yearly (GFS style). Instant-restore snapshots are kept locally for fast restores before data moves to the vault tier.",
              "**バックアップポリシー** = スケジュール + 保持期間。**Standard** ポリシーは 1 日 1 回、**Enhanced** ポリシーは 1 日に複数回（例：4 時間ごと）のバックアップが可能で、トラステッド起動 VM には必須です。保持は日次・週次・月次・年次（GFS 方式）で設定できます。インスタントリストア用のスナップショットはローカルに保持され、その後データはコンテナー層に移ります。",
              "**Backup policy** = schedule + retention။ **Standard** policy က တစ်ရက်တစ်ခါ backup လုပ်တယ်၊ **Enhanced** policy က တစ်ရက်ကို အကြိမ်များစွာ (ဥပမာ ၄ နာရီတစ်ခါ) လုပ်နိုင်ပြီး Trusted Launch VM အတွက် မဖြစ်မနေ လိုတယ်။ Retention ကို daily၊ weekly၊ monthly၊ yearly (GFS ပုံစံ) သတ်မှတ်နိုင်တယ်။ Instant-restore snapshot တွေကို အမြန် restore လုပ်ဖို့ local မှာ ထားပြီးမှ data ကို vault tier ဆီ ရွှေ့တယ်။"),
            L("**Soft delete** keeps deleted backup data for **14 days** by default at no extra cost (enhanced soft delete can extend this and make it always-on). Add **immutable vaults** and **multi-user authorization (MUA)** with a Resource Guard to stop attackers from deleting backups.",
              "**論理的な削除**は、削除されたバックアップデータを既定で **14 日間**追加料金なしで保持します（強化された論理的な削除で期間延長や常時有効化が可能）。さらに**不変コンテナー**と Resource Guard による**マルチユーザー承認（MUA）**で、攻撃者によるバックアップ削除を防ぎます。",
              "**Soft delete** က ဖျက်လိုက်တဲ့ backup data ကို default **၁၄ ရက်** အပိုကုန်ကျစရိတ်မရှိဘဲ ထိန်းထားတယ် (enhanced soft delete နဲ့ ကာလတိုး၊ အမြဲဖွင့်ထားနိုင်)။ Attacker က backup မဖျက်နိုင်အောင် **immutable vault** နဲ့ Resource Guard သုံးတဲ့ **multi-user authorization (MUA)** ထပ်ထည့်ပါ။"),
            L("**Restore options** for an Azure VM: create a **new VM**, **restore disks** (then attach or build a VM from a template), **replace existing** disks, **Cross Region Restore** to the paired region, or **file-level recovery** by mounting a recovery point with a downloaded script.",
              "Azure VM の**復元オプション**：**新しい VM の作成**、**ディスクの復元**（その後アタッチやテンプレートから VM 作成）、既存ディスクの**置き換え**、ペアリージョンへの**リージョン間の復元**、ダウンロードしたスクリプトで復旧ポイントをマウントする**ファイルレベルの回復**。",
              "Azure VM ရဲ့ **restore option** တွေ- **VM အသစ်** ဖန်တီး၊ **disk restore** (ပြီးရင် attach သို့ template နဲ့ VM ဆောက်)၊ ရှိပြီးသား disk ကို **replace**၊ paired region ဆီ **Cross Region Restore**၊ download လုပ်ထားတဲ့ script နဲ့ recovery point ကို mount လုပ်တဲ့ **file-level recovery**။"),
          ] },
          { type: 'callout', tone: 'exam', text: L(
            "Watch for these: \"back up files and folders from an on-premises Windows server directly to Azure\" = **MARS agent** to a Recovery Services vault (MARS does not support Linux). \"Restore one deleted file from last night's VM backup\" = **File Recovery**, not a full VM restore. \"VM does not appear when configuring backup\" = the vault is probably in a **different region**.",
            "注意ポイント：「オンプレミスの Windows サーバーのファイルとフォルダーを直接 Azure にバックアップ」= Recovery Services コンテナーへの **MARS エージェント**（MARS は Linux 非対応）。「昨夜の VM バックアップから削除した 1 ファイルを復元」= VM 全体の復元ではなく**ファイルの回復**。「バックアップ構成時に VM が表示されない」= コンテナーが**別のリージョン**にある可能性が高いです。",
            "သတိထားရမယ့်အချက်တွေ- \"On-premises Windows server က file/folder ကို Azure ဆီ တိုက်ရိုက် backup\" = Recovery Services vault ဆီ **MARS agent** (MARS က Linux ကို support မလုပ်)။ \"မနေ့ညက VM backup ထဲကနေ ဖျက်မိတဲ့ file တစ်ခု ပြန်ယူ\" = VM အပြည့် restore မဟုတ်ဘဲ **File Recovery**။ \"Backup configure လုပ်တဲ့အခါ VM မပေါ်\" = vault က **region မတူ** ဖြစ်နေနိုင်တယ်။"
          ) },
        ],
      },
      {
        id: "site-recovery",
        title: L("Azure Site Recovery: RPO, RTO and failover", "Azure Site Recovery：RPO・RTO・フェールオーバー", "Azure Site Recovery- RPO၊ RTO နဲ့ failover"),
        blocks: [
          { type: 'p', text: L(
            "Backup answers \"can I get my data back?\". **Disaster recovery** answers \"can my business keep running if the whole region goes down?\". **Azure Site Recovery (ASR)** continuously replicates VMs (Azure to Azure, VMware/Hyper-V/physical to Azure) to a secondary location so you can fail over in minutes. Two numbers drive every DR design:",
            "バックアップは「データを取り戻せるか？」に答えます。**ディザスターリカバリー**は「リージョン全体が停止しても事業を継続できるか？」に答えます。**Azure Site Recovery（ASR）**は VM を継続的にセカンダリの場所へ複製し（Azure 間、VMware/Hyper-V/物理サーバーから Azure）、数分でフェールオーバーできるようにします。DR 設計は次の 2 つの数値で決まります。",
            "Backup က \"data ပြန်ရနိုင်လား?\" ကို ဖြေတယ်။ **Disaster recovery** က \"region တစ်ခုလုံး ပျက်သွားရင် business ဆက်လည်ပတ်နိုင်လား?\" ကို ဖြေတယ်။ **Azure Site Recovery (ASR)** က VM တွေကို (Azure မှ Azure၊ VMware/Hyper-V/physical မှ Azure) secondary နေရာဆီ အဆက်မပြတ် replicate လုပ်ပေးလို့ မိနစ်ပိုင်းအတွင်း failover လုပ်နိုင်တယ်။ DR design တိုင်းကို ဂဏန်း ၂ ခုက ဆုံးဖြတ်တယ်-"
          ) },
          { type: 'diagram', text:
`  last good          DISASTER              service
  recovery point     happens               restored
       |                |                     |
-------*================X=====================*------> time
       |<---- RPO ----->|<------- RTO ------->|
        data you lose     time you are down
        (minutes)         (minutes to hours)`,
            caption: L("RPO looks backward (data loss), RTO looks forward (downtime)", "RPO は過去を見る（データ損失）、RTO は未来を見る（停止時間）", "RPO က နောက်ကို ကြည့် (data ဆုံးရှုံးမှု)၊ RTO က ရှေ့ကို ကြည့် (ရပ်နေတဲ့အချိန်)") },
          { type: 'list', items: [
            L("**RPO (Recovery Point Objective)**: the maximum amount of data, measured in time, you can afford to lose. \"RPO 15 minutes\" means at most the last 15 minutes of transactions may be lost.",
              "**RPO（目標復旧時点）**：許容できるデータ損失の最大量を時間で表したもの。「RPO 15 分」は直近 15 分までのトランザクション損失を許容するという意味です。",
              "**RPO (Recovery Point Objective)**: ဆုံးရှုံးခံနိုင်တဲ့ data အများဆုံးပမာဏကို အချိန်နဲ့ တိုင်းတာ။ \"RPO 15 မိနစ်\" ဆိုတာ နောက်ဆုံး ၁၅ မိနစ်စာ transaction ထိပဲ ပျောက်ခံနိုင်တယ်လို့ ဆိုလိုတယ်။"),
            L("**RTO (Recovery Time Objective)**: the maximum time the service can be down before it must be running again.",
              "**RTO（目標復旧時間）**：サービスが再稼働するまでに許容される最大停止時間です。",
              "**RTO (Recovery Time Objective)**: service ပြန်အလုပ်လုပ်ရမယ့်အထိ ရပ်နေခွင့်ရှိတဲ့ အများဆုံးအချိန်။"),
            L("ASR creates **crash-consistent** recovery points about every 5 minutes and optional **app-consistent** snapshots on a longer interval. A **recovery plan** groups VMs and orders their startup (database first, then app, then web) with optional scripts.",
              "ASR は約 5 分ごとに**クラッシュ整合性**のある復旧ポイントを作成し、より長い間隔で**アプリ整合性**のあるスナップショットも作成できます。**復旧計画**は VM をグループ化して起動順序（DB → アプリ → Web）を定義し、スクリプトも追加できます。",
              "ASR က ၅ မိနစ်လောက်တိုင်း **crash-consistent** recovery point ဖန်တီးပြီး ပိုရှည်တဲ့ကြားကာလနဲ့ **app-consistent** snapshot လည်း ယူနိုင်တယ်။ **Recovery plan** က VM တွေကို အုပ်စုဖွဲ့ပြီး စတင်တဲ့ အစီအစဉ် (database အရင်၊ ပြီးမှ app၊ ပြီးမှ web) ကို script နဲ့တကွ သတ်မှတ်ပေးတယ်။"),
            L("ASR uses a **Recovery Services vault** created in a region other than the source (typically the target region).",
              "ASR はソースとは別のリージョン（通常はターゲットリージョン）に作成した **Recovery Services コンテナー**を使います。",
              "ASR က source မဟုတ်တဲ့ region (ပုံမှန်အားဖြင့် target region) မှာ ဖန်တီးထားတဲ့ **Recovery Services vault** ကို သုံးတယ်။"),
          ] },
          { type: 'steps', items: [
            L("**Enable replication** for the VMs to the target region; ASR installs the Mobility service extension and performs initial replication.",
              "VM の**レプリケーションを有効化**してターゲットリージョンへ複製します。ASR がモビリティサービス拡張機能をインストールし、初期レプリケーションを行います。",
              "VM တွေအတွက် target region ဆီ **replication ဖွင့်** ပါ- ASR က Mobility service extension ကို install လုပ်ပြီး initial replication လုပ်တယ်။"),
            L("Run a **test failover** into an **isolated virtual network**. Production keeps running and replication continues, so you can rehearse safely. Then **clean up** the test.",
              "**分離された仮想ネットワーク**に**テストフェールオーバー**を実行します。本番は稼働を続け、レプリケーションも継続するので安全にリハーサルできます。その後テストを**クリーンアップ**します。",
              "**Isolated virtual network** ထဲကို **test failover** run ပါ။ Production ဆက် run နေပြီး replication လည်း ဆက်လုပ်နေလို့ စိတ်ချလက်ချ လေ့ကျင့်နိုင်တယ်။ ပြီးရင် test ကို **clean up** လုပ်ပါ။"),
            L("During a real disaster, run **failover** (planned or unplanned) to a chosen recovery point, then **commit** it.",
              "実際の災害時には、選んだ復旧ポイントへ**フェールオーバー**（計画または計画外）を実行し、**コミット**します。",
              "တကယ့် disaster ဖြစ်ရင် ရွေးထားတဲ့ recovery point ဆီ **failover** (planned သို့ unplanned) run ပြီး **commit** လုပ်ပါ။"),
            L("**Re-protect** to replicate back from the secondary to the original region, and later **fail back** when the primary region is healthy.",
              "**再保護**でセカンダリから元のリージョンへ逆方向に複製し、プライマリリージョンが正常に戻ったら**フェールバック**します。",
              "Secondary ကနေ မူလ region ဆီ ပြန် replicate လုပ်ဖို့ **re-protect** လုပ်ပြီး primary region ကောင်းလာရင် **fail back** လုပ်ပါ။"),
          ] },
          { type: 'table',
            head: [L("Question", "問い", "မေးခွန်း"), L("Azure Backup", "Azure Backup", "Azure Backup (data ပြန်ယူ)"), L("Azure Site Recovery", "Azure Site Recovery", "Azure Site Recovery (ဆက်လည်ပတ်)")],
            rows: [
              [L("Main goal", "主な目的", "အဓိကရည်ရွယ်ချက်"), L("Recover data from a point in time", "特定時点からデータを復旧", "အချိန်တစ်ခုက data ကို ပြန်ယူ"), L("Keep applications running in another region", "別リージョンでアプリを稼働し続ける", "တခြား region မှာ application ဆက် run")],
              [L("Typical RPO", "一般的な RPO", "ပုံမှန် RPO"), L("Hours (last backup)", "数時間（最後のバックアップ）", "နာရီပိုင်း (နောက်ဆုံး backup)"), L("Minutes or less (continuous replication)", "数分以下（継続的レプリケーション）", "မိနစ်ပိုင်း သို့ အောက် (အဆက်မပြတ် replication)")],
              [L("Typical RTO", "一般的な RTO", "ပုံမှန် RTO"), L("Hours (restore takes time)", "数時間（復元に時間がかかる）", "နာရီပိုင်း (restore က ကြာ)"), L("Minutes (VMs start in the target)", "数分（ターゲットで VM を起動）", "မိနစ်ပိုင်း (target မှာ VM စတင်)")],
              [L("Retention", "保持", "Retention (သိမ်းထားကာလ)"), L("Days to years (compliance)", "数日〜数年（コンプライアンス）", "ရက်ပိုင်းမှ နှစ်ပိုင်း (compliance)"), L("Short window of recovery points", "短期間の復旧ポイント", "Recovery point ကာလတို")],
            ] },
          { type: 'callout', tone: 'memory', text: L(
            "**RPO = Point = how much data (Past). RTO = Time = how long down (fuTure).** Backup is your **photo album**; Site Recovery is a **spare house** that is already furnished and ready to move into.",
            "**RPO = Point = どれだけのデータ（過去）。RTO = Time = どれだけの停止時間（未来）。**バックアップは**アルバム**、Site Recovery は家具付きですぐ住める**予備の家**です。",
            "**RPO = Point = data ဘယ်လောက် (အတိတ်)။ RTO = Time = ဘယ်လောက်ကြာကြာ ရပ် (အနာဂတ်)။** Backup က **ဓာတ်ပုံအယ်လ်ဘမ်**၊ Site Recovery က ပရိဘောဂ အပြည့်နဲ့ ချက်ချင်းပြောင်းနေလို့ရတဲ့ **အရန်အိမ်** ပါ။"
          ) },
        ],
      },
      {
        id: "update-manager-network-watcher",
        title: L("Azure Update Manager, Network Watcher and a hands-on lab", "Azure Update Manager、Network Watcher、ハンズオン", "Azure Update Manager၊ Network Watcher နဲ့ hands-on lab"),
        blocks: [
          { type: 'p', text: L(
            "**Azure Update Manager** is the unified service for Windows and Linux patching on Azure VMs and **Azure Arc-enabled servers** (on-premises or other clouds). It replaces the retired Automation Update Management and needs **no Log Analytics workspace or extra agent** for Azure VMs. Key features: **periodic assessment** (checks for missing updates every 24 hours), on-demand **one-time updates**, **scheduled patching** with **maintenance configurations** (for example, the second Saturday of every month at 02:00 JST), dynamic scopes that target machines by tag or resource group, and hotpatching on supported Windows Server editions.",
            "**Azure Update Manager** は、Azure VM と **Azure Arc 対応サーバー**（オンプレミスや他クラウド）の Windows・Linux のパッチ適用を一元化するサービスです。廃止された Automation Update Management の後継で、Azure VM には **Log Analytics ワークスペースや追加のエージェントが不要**です。主な機能：**定期評価**（24 時間ごとに不足している更新プログラムを確認）、オンデマンドの**1 回限りの更新**、**メンテナンス構成**による**スケジュールされたパッチ適用**（例：毎月第 2 土曜日の 02:00 JST）、タグや Resource Group でマシンを対象にする動的スコープ、対応する Windows Server エディションでのホットパッチです。",
            "**Azure Update Manager** က Azure VM နဲ့ **Azure Arc-enabled server** (on-premises သို့ တခြား cloud) တွေမှာ Windows နဲ့ Linux patch လုပ်တာကို စုစည်းပေးတဲ့ service ပါ။ ရပ်လိုက်ပြီဖြစ်တဲ့ Automation Update Management ကို အစားထိုးပြီး Azure VM အတွက် **Log Analytics workspace သို့ agent အပို မလိုဘူး**။ အဓိက feature တွေ- **periodic assessment** (၂၄ နာရီတိုင်း မရှိသေးတဲ့ update စစ်)၊ on-demand **one-time update**၊ **maintenance configuration** နဲ့ **scheduled patching** (ဥပမာ လစဉ် ဒုတိယ စနေနေ့ 02:00 JST)၊ tag သို့ resource group နဲ့ machine ရွေးတဲ့ dynamic scope၊ support လုပ်တဲ့ Windows Server edition မှာ hotpatching။"
          ) },
          { type: 'p', text: L(
            "**Network Watcher** is the network diagnostics toolbox, enabled automatically per region when you create a VNet. Know these tools by name: **IP flow verify** (is a packet allowed or denied by an NSG, and by which rule?), **Next hop** (where does traffic go, e.g. to a virtual appliance or nowhere?), **Connection troubleshoot**, **Packet capture**, **Topology**, and **VNet flow logs** (the successor to NSG flow logs). Details are covered in the networking topic.",
            "**Network Watcher** はネットワーク診断ツール群で、VNet を作成するとリージョンごとに自動で有効になります。次のツール名を覚えましょう：**IP フローの確認**（パケットが NSG で許可/拒否されるか、どのルールか）、**次ホップ**（通信がどこへ向かうか。仮想アプライアンスか、行き先なしか）、**接続のトラブルシューティング**、**パケットキャプチャ**、**トポロジ**、**VNet フローログ**（NSG フローログの後継）。詳細はネットワークのトピックで扱います。",
            "**Network Watcher** က network diagnostic tool အစုံပါ၊ VNet ဖန်တီးရင် region တစ်ခုစီမှာ အလိုအလျောက် ဖွင့်ပေးတယ်။ ဒီ tool နာမည်တွေကို သိထားပါ- **IP flow verify** (packet ကို NSG က ခွင့်ပြု/ပိတ်လား၊ ဘယ် rule လဲ?)၊ **Next hop** (traffic ဘယ်သွားလဲ၊ virtual appliance ဆီလား၊ ဘယ်မှ မရောက်လား?)၊ **Connection troubleshoot**၊ **Packet capture**၊ **Topology**၊ **VNet flow logs** (NSG flow logs ရဲ့ ဆက်ခံသူ)။ အသေးစိတ်ကို networking topic မှာ လေ့လာမယ်။"
          ) },
          { type: 'steps', items: [
            L("Hands-on lab: create a Log Analytics workspace `law-lab` in Japan East and a small Linux or Windows VM.",
              "ハンズオン：Japan East に Log Analytics ワークスペース `law-lab` と小さな Linux または Windows VM を作成します。",
              "Hands-on lab: Japan East မှာ Log Analytics workspace `law-lab` နဲ့ Linux သို့ Windows VM သေးသေးတစ်လုံး ဖန်တီးပါ။"),
            L("Enable **VM Insights** on the VM (this deploys the Azure Monitor Agent and a data collection rule), then wait 10-15 minutes and open the Performance tab.",
              "VM で **VM Insights** を有効にします（Azure Monitor エージェントとデータ収集ルールが展開されます）。10〜15 分待ってパフォーマンスタブを開きます。",
              "VM ပေါ်မှာ **VM Insights** ဖွင့်ပါ (Azure Monitor Agent နဲ့ data collection rule ကို deploy လုပ်ပေးတယ်)၊ ၁၀-၁၅ မိနစ်စောင့်ပြီး Performance tab ကို ဖွင့်ကြည့်ပါ။"),
            L("In the workspace **Logs** blade, run `Heartbeat | summarize max(TimeGenerated) by Computer` and an `InsightsMetrics` query rendered as a `timechart`.",
              "ワークスペースの **ログ** で `Heartbeat | summarize max(TimeGenerated) by Computer` と、`timechart` で描画する `InsightsMetrics` のクエリを実行します。",
              "Workspace ရဲ့ **Logs** blade မှာ `Heartbeat | summarize max(TimeGenerated) by Computer` နဲ့ `timechart` နဲ့ ဆွဲတဲ့ `InsightsMetrics` query ကို run ပါ။"),
            L("Create an **action group** with your email, then a **metric alert** for `Percentage CPU > 80` and an **activity log alert** for \"Deallocate Virtual Machine\". Stop the VM and check your inbox.",
              "メールアドレスで**アクショングループ**を作成し、`Percentage CPU > 80` の**メトリックアラート**と「仮想マシンの割り当て解除」の**アクティビティログアラート**を作成します。VM を停止して受信トレイを確認します。",
              "ကိုယ့် email နဲ့ **action group** ဖန်တီးပြီး `Percentage CPU > 80` အတွက် **metric alert** နဲ့ \"Deallocate Virtual Machine\" အတွက် **activity log alert** ဖန်တီးပါ။ VM ကို stop လုပ်ပြီး inbox ကို စစ်ပါ။"),
            L("Create a **Recovery Services vault** in the same region, enable backup with the default policy, and run **Backup now**. Explore **File Recovery** once the recovery point exists.",
              "同じリージョンに **Recovery Services コンテナー**を作成し、既定のポリシーでバックアップを有効にして**今すぐバックアップ**を実行します。復旧ポイントができたら**ファイルの回復**を試します。",
              "Region တူမှာ **Recovery Services vault** ဖန်တီးပြီး default policy နဲ့ backup ဖွင့်ကာ **Backup now** run ပါ။ Recovery point ရလာရင် **File Recovery** ကို စမ်းကြည့်ပါ။"),
            L("Open **Azure Update Manager**, run **Check for updates** on the VM, then delete the resource group (stop protection and delete backup data first).",
              "**Azure Update Manager** を開き VM で**更新プログラムの確認**を実行します。最後に Resource Group を削除します（先に保護を停止してバックアップデータを削除）。",
              "**Azure Update Manager** ကို ဖွင့်ပြီး VM ပေါ်မှာ **Check for updates** run ပါ၊ ပြီးရင် resource group ကို ဖျက်ပါ (အရင်ဆုံး protection ရပ်ပြီး backup data ကို ဖျက်ပါ)။"),
          ] },
          { type: 'callout', tone: 'warn', text: L(
            "You cannot delete a Recovery Services vault that still contains protected items or soft-deleted backup data. Stop protection, delete the data, and wait for or undo soft delete before removing the vault.",
            "保護された項目や論理的に削除されたバックアップデータが残っている Recovery Services コンテナーは削除できません。保護を停止してデータを削除し、論理的な削除の期間を待つか対処してからコンテナーを削除します。",
            "Protected item သို့ soft-delete ဖြစ်နေတဲ့ backup data ကျန်နေသေးတဲ့ Recovery Services vault ကို ဖျက်လို့မရဘူး။ Protection ရပ်၊ data ဖျက်ပြီး soft delete ကာလကို စောင့် သို့ ဖြေရှင်းပြီးမှ vault ကို ဖျက်ပါ။"
          ) },
        ],
      },
    ],
    summary: [
      L("Azure Monitor stores telemetry as metrics (fast numeric time series, 93 days) and logs (Log Analytics workspace, queried with KQL).",
        "Azure Monitor はテレメトリをメトリック（高速な数値の時系列、93 日）とログ（Log Analytics ワークスペース、KQL でクエリ）として保存します。",
        "Azure Monitor က telemetry ကို metric (မြန်တဲ့ ဂဏန်း time series၊ ၉၃ ရက်) နဲ့ log (Log Analytics workspace၊ KQL နဲ့ query) အဖြစ် သိမ်းတယ်။"),
      L("Activity Log = control-plane events for 90 days; resource logs need diagnostic settings; guest OS data needs the Azure Monitor Agent with a data collection rule.",
        "Activity Log = 90 日間のコントロールプレーンのイベント、リソースログには診断設定、ゲスト OS のデータにはデータ収集ルール付きの Azure Monitor エージェントが必要です。",
        "Activity Log = ၉၀ ရက်စာ control-plane event၊ resource log အတွက် diagnostic setting လို၊ guest OS data အတွက် data collection rule ပါတဲ့ Azure Monitor Agent လိုတယ်။"),
      L("KQL basics: table | where | summarize ... by | project | render timechart.",
        "KQL の基本：テーブル | where | summarize ... by | project | render timechart。",
        "KQL အခြေခံ- table | where | summarize ... by | project | render timechart။"),
      L("Alert rules = scope + condition + action group; choose metric, log search or activity log alerts, and use alert processing rules to suppress or add actions at scale.",
        "アラートルール = スコープ + 条件 + アクショングループ。メトリック・ログ検索・アクティビティログのアラートを選び、アラート処理ルールで抑制やアクションの追加を一括で行います。",
        "Alert rule = scope + condition + action group၊ metric၊ log search သို့ activity log alert ကို ရွေးပြီး alert processing rule နဲ့ suppress လုပ်တာ၊ action ထည့်တာကို အစုလိုက်လုပ်ပါ။"),
      L("Application Insights monitors application code; VM Insights monitors VM performance and dependencies.",
        "Application Insights はアプリケーションコードを、VM Insights は VM のパフォーマンスと依存関係を監視します。",
        "Application Insights က application code ကို၊ VM Insights က VM performance နဲ့ dependency ကို monitor လုပ်တယ်။"),
      L("Service Health covers Azure issues and planned maintenance for your services; Resource Health covers one resource; Advisor gives CROPS recommendations.",
        "Service Health は自分が使うサービスの Azure 障害と計画メンテナンス、Resource Health は 1 つのリソース、Advisor は CROPS の推奨事項を扱います。",
        "Service Health က ကိုယ်သုံးတဲ့ service အတွက် Azure issue နဲ့ planned maintenance၊ Resource Health က resource တစ်ခု၊ Advisor က CROPS အကြံပြုချက်တွေ ပေးတယ်။"),
      L("Azure Backup uses Recovery Services vaults (VMs, SQL, Files, MARS) or Backup vaults (disks, blobs, PostgreSQL, AKS); the VM's vault must be in the same region, and soft delete keeps deleted backups 14 days by default.",
        "Azure Backup は Recovery Services コンテナー（VM・SQL・Files・MARS）か Backup コンテナー（ディスク・BLOB・PostgreSQL・AKS）を使います。VM のコンテナーは同じリージョンに必要で、論理的な削除は既定で削除済みバックアップを 14 日保持します。",
        "Azure Backup က Recovery Services vault (VM၊ SQL၊ Files၊ MARS) သို့ Backup vault (disk၊ blob၊ PostgreSQL၊ AKS) ကို သုံးတယ်၊ VM ရဲ့ vault က region တူရမယ်၊ soft delete က ဖျက်ထားတဲ့ backup ကို default ၁၄ ရက် ထိန်းထားတယ်။"),
      L("Site Recovery replicates VMs for low RPO/RTO; rehearse with test failover into an isolated VNet, then failover, commit, re-protect and fail back. Update Manager handles patching for Azure and Arc machines.",
        "Site Recovery は低い RPO/RTO のために VM を複製します。分離 VNet へのテストフェールオーバーで練習し、フェールオーバー・コミット・再保護・フェールバックを行います。Update Manager は Azure と Arc のマシンのパッチ適用を担います。",
        "Site Recovery က RPO/RTO နိမ့်ဖို့ VM ကို replicate လုပ်တယ်၊ isolated VNet ထဲ test failover နဲ့ လေ့ကျင့်ပြီး failover၊ commit၊ re-protect၊ fail back လုပ်ပါ။ Update Manager က Azure နဲ့ Arc machine တွေရဲ့ patching ကို ကိုင်တွယ်တယ်။"),
    ],
  },
  questions: [
    {
      difficulty: 'EASY',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("Your manager asks who deleted a virtual machine yesterday evening. Where should you look first?",
        "上司から、昨日の夕方に仮想マシンを削除したのは誰かと聞かれました。最初にどこを確認すべきですか？",
        "Manager က မနေ့ညနေက virtual machine ကို ဘယ်သူဖျက်လဲ မေးတယ်။ ပထမဆုံး ဘယ်မှာ ကြည့်သင့်လဲ?"),
      options: ['Activity Log', 'Resource Health', 'Azure Advisor', 'Application Insights'],
      correct: [0],
      explanation: L("The Activity Log records control-plane operations such as create, update and delete, including the caller and time, for 90 days. Resource Health shows whether a resource is available, not who changed it.",
        "Activity Log は作成・更新・削除などのコントロールプレーン操作を、実行者と時刻を含めて 90 日間記録します。Resource Health はリソースが利用可能かどうかを示すもので、誰が変更したかはわかりません。",
        "Activity Log က create၊ update၊ delete လို control-plane operation တွေကို လုပ်ဆောင်သူနဲ့ အချိန်ပါ ၉၀ ရက် မှတ်တမ်းတင်တယ်။ Resource Health က resource available ဖြစ်မဖြစ်ပဲ ပြတာဖြစ်လို့ ဘယ်သူ ပြောင်းလဲ မပြဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("Which language is used to query data stored in a Log Analytics workspace?",
        "Log Analytics ワークスペースに保存されたデータのクエリに使う言語はどれですか？",
        "Log Analytics workspace ထဲက data ကို query လုပ်ဖို့ ဘယ် language သုံးလဲ?"),
      options: ['T-SQL', 'Kusto Query Language (KQL)', 'PowerShell', 'GraphQL'],
      correct: [1],
      explanation: L("Azure Monitor Logs, Microsoft Sentinel and Azure Data Explorer use KQL, with operators such as `where`, `summarize` and `render`. T-SQL is for SQL Server databases, not workspaces.",
        "Azure Monitor Logs・Microsoft Sentinel・Azure Data Explorer は `where`・`summarize`・`render` などの演算子を持つ KQL を使います。T-SQL は SQL Server データベース用で、ワークスペースには使いません。",
        "Azure Monitor Logs၊ Microsoft Sentinel၊ Azure Data Explorer တွေက `where`၊ `summarize`၊ `render` လို operator ပါတဲ့ KQL ကို သုံးတယ်။ T-SQL က SQL Server database အတွက်ဖြစ်လို့ workspace မှာ မသုံးဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900'],
      prompt: L("Which free service analyzes your deployed resources and gives personalized recommendations to reduce cost and improve reliability and performance?",
        "展開済みのリソースを分析し、コスト削減や信頼性・パフォーマンス向上のためのパーソナライズされた推奨事項を提供する無料サービスはどれですか？",
        "Deploy လုပ်ထားတဲ့ resource တွေကို ခွဲခြမ်းစိတ်ဖြာပြီး cost လျှော့ဖို့၊ reliability နဲ့ performance တိုးဖို့ personalized အကြံပြုချက်ပေးတဲ့ အခမဲ့ service က ဘာလဲ?"),
      options: ['Azure Monitor', 'Azure Service Health', 'Azure Advisor', 'Azure Pricing calculator'],
      correct: [2],
      explanation: L("Azure Advisor gives recommendations in five categories: cost, reliability, operational excellence, performance and security. The Pricing calculator estimates costs before deployment but does not analyze existing resources.",
        "Azure Advisor はコスト・信頼性・オペレーショナルエクセレンス・パフォーマンス・セキュリティの 5 つのカテゴリで推奨事項を示します。料金計算ツールは展開前のコスト見積もり用で、既存リソースは分析しません。",
        "Azure Advisor က cost၊ reliability၊ operational excellence၊ performance၊ security ဆိုတဲ့ အမျိုးအစား ၅ ခုနဲ့ အကြံပြုတယ်။ Pricing calculator က deploy မလုပ်ခင် cost ခန့်မှန်းတာဖြစ်ပြီး ရှိပြီးသား resource ကို မစစ်ဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("You want a personalized view of Azure outages and planned maintenance that affect only the services and regions your subscription uses. What should you use?",
        "自分のサブスクリプションが使うサービスとリージョンだけに影響する Azure の障害と計画メンテナンスを、パーソナライズされた形で確認したいと考えています。何を使うべきですか？",
        "ကိုယ့် subscription သုံးတဲ့ service နဲ့ region တွေကိုပဲ ထိခိုက်တဲ့ Azure outage နဲ့ planned maintenance ကို personalized ကြည့်ချင်တယ်။ ဘာသုံးသင့်လဲ?"),
      options: ['The Azure status page', 'Azure Resource Health', 'Azure Advisor', 'Azure Service Health'],
      correct: [3],
      explanation: L("Azure Service Health shows service issues, planned maintenance and advisories filtered to your subscriptions, and can raise alerts. The Azure status page is public and global, and Resource Health focuses on one individual resource.",
        "Azure Service Health は自分のサブスクリプションに絞り込んだサービスの問題・計画メンテナンス・アドバイザリを表示し、アラートも作成できます。Azure status ページは公開のグローバルな情報で、Resource Health は個々のリソースに焦点を当てます。",
        "Azure Service Health က ကိုယ့် subscription နဲ့ သက်ဆိုင်တဲ့ service issue၊ planned maintenance၊ advisory တွေကို ပြပြီး alert လည်း ထုတ်နိုင်တယ်။ Azure status page က public နဲ့ global ဖြစ်ပြီး Resource Health က resource တစ်ခုချင်းကို အာရုံစိုက်တယ်။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("Developers need to see request rates, response times, failed dependencies and exceptions for a web app running on App Service. Which feature should they enable?",
        "開発者は App Service で動く Web アプリの要求率・応答時間・失敗した依存関係・例外を確認する必要があります。どの機能を有効にすべきですか？",
        "Developer တွေက App Service ပေါ်က web app ရဲ့ request rate၊ response time၊ fail ဖြစ်တဲ့ dependency နဲ့ exception တွေကို ကြည့်ဖို့ လိုတယ်။ ဘယ် feature ကို ဖွင့်သင့်လဲ?"),
      options: ['VM Insights', 'Application Insights', 'Network Watcher', 'Azure Advisor'],
      correct: [1],
      explanation: L("Application Insights is the APM feature of Azure Monitor and collects requests, dependencies, exceptions and traces from application code. VM Insights monitors virtual machine performance, not application-level telemetry.",
        "Application Insights は Azure Monitor の APM 機能で、アプリケーションコードから要求・依存関係・例外・トレースを収集します。VM Insights は仮想マシンのパフォーマンスを監視し、アプリケーションレベルのテレメトリは扱いません。",
        "Application Insights က Azure Monitor ရဲ့ APM feature ဖြစ်ပြီး application code ကနေ request၊ dependency၊ exception၊ trace တွေကို စုဆောင်းတယ်။ VM Insights က VM performance ကို monitor လုပ်တာဖြစ်လို့ application-level telemetry မဟုတ်ဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-104'],
      prompt: L("By default, how long are Activity Log events retained in Azure?",
        "既定では、Activity Log のイベントは Azure にどのくらいの期間保持されますか？",
        "Default အားဖြင့် Activity Log event တွေကို Azure မှာ ဘယ်လောက်ကြာ ထိန်းထားလဲ?"),
      options: ['30 days', '1 year', '90 days', 'Indefinitely'],
      correct: [2],
      explanation: L("Activity Log events are kept for 90 days. To keep them longer or query them with KQL, create a diagnostic setting that sends them to a Log Analytics workspace or storage account. 30 days is the default retention of a Log Analytics workspace, a common distractor.",
        "Activity Log のイベントは 90 日間保持されます。より長く保持したり KQL でクエリしたりするには、Log Analytics ワークスペースやストレージアカウントに送る診断設定を作成します。30 日は Log Analytics ワークスペースの既定の保持期間で、よくあるひっかけです。",
        "Activity Log event တွေကို ၉၀ ရက် ထားတယ်။ ပိုကြာကြာထားချင်ရင် ဒါမှမဟုတ် KQL နဲ့ query လုပ်ချင်ရင် Log Analytics workspace သို့ storage account ဆီ ပို့တဲ့ diagnostic setting ဖန်တီးပါ။ ၃၀ ရက်က Log Analytics workspace ရဲ့ default retention ဖြစ်လို့ ထောင်ချောက်အဖြေ ဖြစ်တတ်တယ်။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-104'],
      prompt: L("You need to back up Azure virtual machines with daily backups and 30-day retention. Which resource stores the backups?",
        "Azure 仮想マシンを毎日バックアップし、30 日間保持する必要があります。バックアップを格納するリソースはどれですか？",
        "Azure VM တွေကို နေ့စဉ် backup လုပ်ပြီး ၃၀ ရက် ထိန်းထားဖို့ လိုတယ်။ Backup တွေကို ဘယ် resource မှာ သိမ်းလဲ?"),
      options: ['Recovery Services vault', 'Backup vault', 'Azure Key Vault', 'A general-purpose v2 storage account'],
      correct: [0],
      explanation: L("Azure VM backups are stored in a Recovery Services vault. A Backup vault is used for newer workloads such as Azure Disks, Blobs, PostgreSQL and AKS, and Key Vault stores secrets and keys, not backups.",
        "Azure VM のバックアップは Recovery Services コンテナーに格納されます。Backup コンテナーは Azure ディスク・BLOB・PostgreSQL・AKS などの新しいワークロード用で、Key Vault はシークレットやキーを格納するものでバックアップ用ではありません。",
        "Azure VM backup တွေကို Recovery Services vault ထဲမှာ သိမ်းတယ်။ Backup vault က Azure Disk၊ Blob၊ PostgreSQL၊ AKS လို workload အသစ်တွေအတွက်ဖြစ်ပြီး Key Vault က secret နဲ့ key သိမ်းတာဖြစ်လို့ backup အတွက် မဟုတ်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("Which of the following can an action group do when an alert fires? (Select THREE)",
        "アラートが発生したとき、アクショングループが実行できるものはどれですか？（3 つ選択）",
        "Alert ထွက်တဲ့အခါ action group က ဘာတွေ လုပ်နိုင်လဲ? (၃ ခု ရွေးပါ)"),
      options: ['Change the alert rule\'s threshold automatically', 'Send email and SMS notifications', 'Start an Azure Automation runbook', 'Delete the alert rule after it fires', 'Call a webhook'],
      correct: [1, 2, 4],
      explanation: L("Action groups contain notifications (email, SMS, push, voice) and actions (Automation runbooks, Functions, Logic Apps, webhooks, ITSM, Event Hubs). They do not modify or delete the alert rule itself; to change how fired alerts are handled at scale, use alert processing rules.",
        "アクショングループには通知（メール・SMS・プッシュ・音声）とアクション（Automation Runbook・Functions・Logic Apps・Webhook・ITSM・Event Hubs）が含まれます。アラートルール自体を変更・削除することはありません。発生したアラートの扱いを一括で変えるにはアラート処理ルールを使います。",
        "Action group ထဲမှာ notification (email၊ SMS၊ push၊ voice) နဲ့ action (Automation runbook၊ Function၊ Logic App၊ webhook၊ ITSM၊ Event Hub) တွေ ပါတယ်။ Alert rule ကိုယ်တိုင်ကို မပြင်/မဖျက်ဘူး၊ ထွက်လာတဲ့ alert တွေကို အစုလိုက် ကိုင်တွယ်ပုံ ပြောင်းချင်ရင် alert processing rule သုံးပါ။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("Every Saturday from 22:00 to 02:00 your team patches production servers. You want to stop alert notifications during this window without disabling or editing 40 alert rules. What should you create?",
        "毎週土曜日の 22:00〜02:00 にチームが本番サーバーにパッチを適用します。40 個のアラートルールを無効化・編集せずに、この時間帯のアラート通知を止めたいと考えています。何を作成すべきですか？",
        "စနေနေ့တိုင်း 22:00 မှ 02:00 ထိ team က production server တွေကို patch လုပ်တယ်။ Alert rule ၄၀ ကို မပိတ်/မပြင်ဘဲ ဒီအချိန်အတွင်း alert notification ကို ရပ်ချင်တယ်။ ဘာဖန်တီးသင့်လဲ?"),
      options: ['A new action group with no members', 'An alert processing rule with a suppression action and a recurring schedule', 'A ReadOnly lock on the resource group', 'A data collection rule that excludes the servers'],
      correct: [1],
      explanation: L("Alert processing rules can suppress notifications for alerts in a scope on a recurring schedule, leaving the alert rules unchanged. An empty action group would require editing every rule, and a resource lock does not affect alert notifications.",
        "アラート処理ルールは、アラートルールを変更せずに、スコープ内のアラートの通知を定期スケジュールで抑制できます。空のアクショングループではすべてのルールを編集する必要があり、リソースロックはアラート通知に影響しません。",
        "Alert processing rule က alert rule တွေကို မပြောင်းဘဲ scope အတွင်းက alert notification တွေကို ထပ်ခါထပ်ခါ schedule နဲ့ suppress လုပ်နိုင်တယ်။ Member မပါတဲ့ action group ဆိုရင် rule တိုင်းကို ပြင်ရမယ်၊ resource lock က alert notification ကို မထိခိုက်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("The security team wants every secret read and permission failure in Key Vault `kv-prod-01` to be searchable in a Log Analytics workspace. What should you do?",
        "セキュリティチームは、Key Vault `kv-prod-01` のすべてのシークレット読み取りとアクセス許可エラーを Log Analytics ワークスペースで検索できるようにしたいと考えています。どうすべきですか？",
        "Security team က Key Vault `kv-prod-01` ထဲက secret ဖတ်တာနဲ့ permission fail ဖြစ်တာ အားလုံးကို Log Analytics workspace မှာ ရှာလို့ရစေချင်တယ်။ ဘာလုပ်သင့်လဲ?"),
      options: ['Create a diagnostic setting on the key vault that sends audit logs to the workspace', 'Install the Azure Monitor Agent on the key vault', 'Enable VM Insights for the subscription', 'Create an activity log alert for the key vault'],
      correct: [0],
      explanation: L("Data-plane operations such as secret reads are resource logs, which are only collected when you create a diagnostic setting. Key Vault is a PaaS service, so there is no agent to install, and the Activity Log only records management operations.",
        "シークレットの読み取りなどのデータプレーン操作はリソースログであり、診断設定を作成したときにのみ収集されます。Key Vault は PaaS サービスなのでエージェントはインストールできず、Activity Log は管理操作しか記録しません。",
        "Secret ဖတ်တာလို data-plane operation တွေက resource log ဖြစ်ပြီး diagnostic setting ဖန်တီးမှသာ စုဆောင်းတယ်။ Key Vault က PaaS service ဖြစ်လို့ agent install လုပ်စရာမရှိဘူး၊ Activity Log ကလည်း management operation ကိုပဲ မှတ်တယ်။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("You need a KQL query that returns the number of heartbeat records sent by each computer in the last hour. Which query is correct?",
        "直近 1 時間に各コンピューターが送信したハートビートレコードの数を返す KQL クエリが必要です。正しいクエリはどれですか？",
        "နောက်ဆုံး ၁ နာရီအတွင်း computer တစ်လုံးစီက ပို့တဲ့ heartbeat record အရေအတွက်ကို ပြတဲ့ KQL query လိုတယ်။ ဘယ် query မှန်လဲ?"),
      options: ['Heartbeat | count by Computer | where TimeGenerated > ago(1h)', 'SELECT Computer, COUNT(*) FROM Heartbeat GROUP BY Computer', 'Heartbeat | project count() by Computer', 'Heartbeat | where TimeGenerated > ago(1h) | summarize count() by Computer'],
      correct: [3],
      explanation: L("In KQL you filter first with `where`, then aggregate with `summarize count() by Computer`. `count` cannot be grouped with `by`, `project` does not aggregate, and SQL syntax is not KQL.",
        "KQL では、まず `where` で絞り込み、次に `summarize count() by Computer` で集計します。`count` は `by` でグループ化できず、`project` は集計を行いません。また SQL 構文は KQL ではありません。",
        "KQL မှာ `where` နဲ့ အရင် filter လုပ်ပြီး `summarize count() by Computer` နဲ့ စုပေါင်းတွက်ရတယ်။ `count` ကို `by` နဲ့ group မလုပ်နိုင်ဘူး၊ `project` က aggregate မလုပ်ဘူး၊ SQL syntax က KQL မဟုတ်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("You must collect Windows Security event logs and memory performance counters from inside 30 Azure VMs into a Log Analytics workspace. What should you configure?",
        "30 台の Azure VM の内部から Windows セキュリティイベントログとメモリのパフォーマンスカウンターを Log Analytics ワークスペースに収集する必要があります。何を構成すべきですか？",
        "Azure VM ၃၀ လုံးအတွင်းက Windows Security event log နဲ့ memory performance counter တွေကို Log Analytics workspace ထဲ စုဆောင်းရမယ်။ ဘာကို configure လုပ်သင့်လဲ?"),
      options: ['A diagnostic setting on each VM resource', 'The Azure Monitor Agent and a data collection rule', 'Application Insights auto-instrumentation', 'Network Watcher packet capture'],
      correct: [1],
      explanation: L("Guest OS data is collected by the Azure Monitor Agent, and a data collection rule defines which events and counters to send to which workspace. A diagnostic setting on the VM resource only covers platform metrics, not data from inside the guest OS.",
        "ゲスト OS のデータは Azure Monitor エージェントが収集し、どのイベントとカウンターをどのワークスペースに送るかはデータ収集ルールで定義します。VM リソースの診断設定はプラットフォームメトリックのみで、ゲスト OS 内部のデータは対象外です。",
        "Guest OS data ကို Azure Monitor Agent က စုဆောင်းပြီး ဘယ် event နဲ့ counter ကို ဘယ် workspace ဆီ ပို့မလဲဆိုတာ data collection rule က သတ်မှတ်တယ်။ VM resource ပေါ်က diagnostic setting က platform metric ပဲ ပါပြီး guest OS အတွင်းက data မပါဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("Which TWO types of information does Azure Service Health provide? (Select TWO)",
        "Azure Service Health が提供する情報はどれですか？（2 つ選択）",
        "Azure Service Health က ဘယ်အချက်အလက် ၂ မျိုး ပေးလဲ? (၂ ခု ရွေးပါ)"),
      options: ['Service issues affecting the Azure services and regions you use', 'Planned maintenance that may affect your resources', 'CPU utilization of each virtual machine', 'Recommendations to buy reserved instances'],
      correct: [0, 1],
      explanation: L("Service Health reports service issues, planned maintenance, and health and security advisories for your subscriptions. VM CPU usage comes from Azure Monitor metrics, and reservation recommendations come from Azure Advisor.",
        "Service Health は、自分のサブスクリプションに関するサービスの問題・計画メンテナンス・正常性とセキュリティのアドバイザリを報告します。VM の CPU 使用率は Azure Monitor のメトリック、予約の推奨事項は Azure Advisor から得られます。",
        "Service Health က ကိုယ့် subscription နဲ့ ဆိုင်တဲ့ service issue၊ planned maintenance၊ health နဲ့ security advisory တွေကို အစီရင်ခံတယ်။ VM CPU usage က Azure Monitor metric ကနေ ရပြီး reservation အကြံပြုချက်က Azure Advisor ကနေ ရတယ်။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("A user accidentally deleted one Excel file from VM1 this morning. VM1 is backed up nightly to a Recovery Services vault. What is the fastest way to recover only that file?",
        "ユーザーが今朝 VM1 から Excel ファイルを 1 つ誤って削除しました。VM1 は毎晩 Recovery Services コンテナーにバックアップされています。そのファイルだけを最も速く復旧する方法はどれですか？",
        "User တစ်ယောက်က ဒီမနက် VM1 ထဲက Excel file တစ်ခုကို မှားဖျက်မိတယ်။ VM1 ကို ညတိုင်း Recovery Services vault ဆီ backup လုပ်ထားတယ်။ အဲဒီ file တစ်ခုတည်းကို အမြန်ဆုံး ပြန်ယူနည်းက ဘာလဲ?"),
      options: ['Replace the existing disks of VM1', 'Restore VM1 as a new virtual machine', 'Use Cross Region Restore to the paired region', 'Use File Recovery to mount the recovery point and copy the file'],
      correct: [3],
      explanation: L("File Recovery downloads a script that mounts the recovery point's disks as drives, so you can copy just the needed file. Replacing disks or restoring a whole VM takes longer and could overwrite other changes.",
        "ファイルの回復ではスクリプトをダウンロードして復旧ポイントのディスクをドライブとしてマウントするため、必要なファイルだけをコピーできます。ディスクの置き換えや VM 全体の復元は時間がかかり、他の変更を上書きする可能性もあります。",
        "File Recovery က recovery point ရဲ့ disk တွေကို drive အဖြစ် mount လုပ်ပေးတဲ့ script ကို download ပေးလို့ လိုတဲ့ file တစ်ခုတည်းကို copy ယူနိုင်တယ်။ Disk replace လုပ်တာ သို့ VM တစ်ခုလုံး restore လုပ်တာက ပိုကြာပြီး တခြားပြောင်းလဲမှုတွေကို overwrite ဖြစ်စေနိုင်တယ်။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("The business states that after a disaster the order system may lose no more than 15 minutes of transactions. Which metric does this requirement define?",
        "事業部門は、災害後に受注システムで失ってよいトランザクションは最大 15 分間分までだと定めています。この要件はどの指標を定義していますか？",
        "Business က disaster ဖြစ်ပြီးရင် order system မှာ transaction ၁၅ မိနစ်စာထက် ပိုမပျောက်ရဘူးလို့ ပြောတယ်။ ဒီလိုအပ်ချက်က ဘယ် metric ကို သတ်မှတ်တာလဲ?"),
      options: ['Recovery Time Objective (RTO)', 'Recovery Point Objective (RPO)', 'Service-level agreement (SLA)', 'Mean time to repair (MTTR)'],
      correct: [1],
      explanation: L("RPO is the maximum acceptable data loss measured in time, here 15 minutes. RTO is the maximum acceptable downtime before the service is restored, which is a different requirement.",
        "RPO は時間で表した許容できる最大のデータ損失で、ここでは 15 分です。RTO はサービス復旧までに許容される最大停止時間で、別の要件です。",
        "RPO က အချိန်နဲ့ တိုင်းတဲ့ လက်ခံနိုင်တဲ့ အများဆုံး data ဆုံးရှုံးမှုဖြစ်ပြီး ဒီမှာ ၁၅ မိနစ်ပါ။ RTO က service ပြန်ရဖို့ လက်ခံနိုင်တဲ့ အများဆုံး downtime ဖြစ်လို့ မတူတဲ့ လိုအပ်ချက်ပါ။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("VM1 runs in Japan East. You created Recovery Services vault RSV1 in Japan West. When you configure backup in RSV1, VM1 does not appear in the list of VMs. What is the most likely reason?",
        "VM1 は Japan East で動いています。Recovery Services コンテナー RSV1 を Japan West に作成しました。RSV1 でバックアップを構成すると、VM の一覧に VM1 が表示されません。最も可能性の高い理由はどれですか？",
        "VM1 က Japan East မှာ run နေတယ်။ Recovery Services vault RSV1 ကို Japan West မှာ ဖန်တီးထားတယ်။ RSV1 မှာ backup configure လုပ်တော့ VM list ထဲမှာ VM1 မပေါ်ဘူး။ အဖြစ်နိုင်ဆုံး အကြောင်းရင်းက ဘာလဲ?"),
      options: ['The vault must be in the same region as the VM', 'VM1 must be stopped before it can be backed up', 'Soft delete must be disabled on RSV1', 'VM1 needs the MARS agent installed first'],
      correct: [0],
      explanation: L("Azure VM backup requires the Recovery Services vault to be in the same region as the VM, so you need a vault in Japan East. VMs can be backed up while running, and the MARS agent is for file-level backup of on-premises or individual Windows machines, not for Azure VM backup.",
        "Azure VM のバックアップでは Recovery Services コンテナーが VM と同じリージョンにある必要があるため、Japan East にコンテナーが必要です。VM は稼働中でもバックアップでき、MARS エージェントはオンプレミスや個々の Windows マシンのファイルレベルのバックアップ用で、Azure VM バックアップには不要です。",
        "Azure VM backup အတွက် Recovery Services vault က VM နဲ့ region တူရမယ်၊ ဒါကြောင့် Japan East မှာ vault လိုတယ်။ VM run နေရင်းလည်း backup လုပ်လို့ရပြီး MARS agent က on-premises သို့ Windows machine တစ်လုံးချင်းရဲ့ file-level backup အတွက်ဖြစ်လို့ Azure VM backup အတွက် မလိုဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("You replicate production VMs to Japan West with Azure Site Recovery and must prove the DR plan works every quarter without any impact on production. Which statements are true about a test failover? (Select TWO)",
        "Azure Site Recovery で本番 VM を Japan West に複製しており、四半期ごとに本番へ影響を与えずに DR 計画が機能することを証明する必要があります。テストフェールオーバーについて正しい記述はどれですか？（2 つ選択）",
        "Production VM တွေကို Azure Site Recovery နဲ့ Japan West ဆီ replicate လုပ်ထားပြီး production ကို လုံးဝမထိခိုက်ဘဲ quarter တိုင်း DR plan အလုပ်လုပ်ကြောင်း သက်သေပြရမယ်။ Test failover နဲ့ ပတ်သက်ပြီး ဘယ်အချက်တွေ မှန်လဲ? (၂ ခု ရွေးပါ)"),
      options: ['You should run it into an isolated virtual network', 'Replication of the production VMs continues during the test', 'The source VMs must be shut down before the test starts', 'A test failover must be committed before you can clean it up'],
      correct: [0, 1],
      explanation: L("A test failover creates VMs in the target region, ideally in an isolated VNet to avoid IP conflicts, while production keeps running and replication continues. Shutting down source VMs and committing apply to a real failover, not a test; a test is simply cleaned up afterwards.",
        "テストフェールオーバーはターゲットリージョンに VM を作成します。IP の競合を避けるため分離 VNet を使うのが望ましく、その間も本番は稼働しレプリケーションも継続します。ソース VM の停止やコミットは実際のフェールオーバーの手順で、テストは終了後にクリーンアップするだけです。",
        "Test failover က target region မှာ VM တွေ ဖန်တီးတယ်၊ IP conflict မဖြစ်အောင် isolated VNet သုံးတာ အကောင်းဆုံးဖြစ်ပြီး production ဆက် run နေကာ replication လည်း ဆက်လုပ်နေတယ်။ Source VM ပိတ်တာနဲ့ commit လုပ်တာက တကယ့် failover အတွက်ဖြစ်ပြီး test ကိုတော့ ပြီးရင် clean up လုပ်ရုံပါပဲ။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("Twenty VMs are already protected in a Recovery Services vault configured with LRS. A new requirement says backups must be restorable in the paired region if Japan East becomes unavailable. What should you do?",
        "LRS で構成された Recovery Services コンテナーで、すでに 20 台の VM が保護されています。新しい要件では、Japan East が利用できなくなった場合にペアリージョンでバックアップを復元できる必要があります。どうすべきですか？",
        "LRS နဲ့ configure လုပ်ထားတဲ့ Recovery Services vault မှာ VM ၂၀ ကို protect လုပ်ပြီးသား ရှိတယ်။ Japan East မရနိုင်တော့ရင် paired region မှာ backup ကို restore လုပ်နိုင်ရမယ်ဆိုတဲ့ လိုအပ်ချက်အသစ် ရှိလာတယ်။ ဘာလုပ်သင့်လဲ?"),
      options: ['Enable Cross Region Restore on the existing LRS vault', 'Enable ZRS on the managed disks of each VM', 'Create a new vault with GRS and Cross Region Restore enabled, and protect the VMs in it', 'Configure Azure Site Recovery on the existing vault'],
      correct: [2],
      explanation: L("Cross Region Restore requires a GRS vault, and a vault's storage redundancy cannot be changed after items are protected. You need a GRS vault with Cross Region Restore enabled (stopping protection in the old vault). ZRS disks only protect within one region, and Site Recovery is replication for DR, not restoring backups.",
        "リージョン間の復元には GRS のコンテナーが必要で、項目を保護した後はコンテナーのストレージ冗長性を変更できません。リージョン間の復元を有効にした GRS のコンテナーが必要です（古いコンテナーの保護は停止）。ZRS ディスクは 1 リージョン内の保護のみで、Site Recovery は DR のための複製であり、バックアップの復元ではありません。",
        "Cross Region Restore အတွက် GRS vault လိုပြီး item တွေ protect လုပ်ပြီးရင် vault ရဲ့ storage redundancy ကို မပြောင်းနိုင်တော့ဘူး။ Cross Region Restore ဖွင့်ထားတဲ့ GRS vault အသစ် လိုတယ် (vault အဟောင်းမှာ protection ရပ်)။ ZRS disk က region တစ်ခုအတွင်းပဲ ကာကွယ်ပြီး Site Recovery က DR အတွက် replication ဖြစ်လို့ backup restore မဟုတ်ဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("You must be alerted when the text \"Fatal disk error\" appears in the System event log of any of 50 VMs whose events are already collected in a Log Analytics workspace. Which alert type should you create?",
        "イベントが Log Analytics ワークスペースに収集済みの 50 台の VM のいずれかで、システムイベントログに「Fatal disk error」という文字列が出たらアラートを受ける必要があります。どのアラートの種類を作成すべきですか？",
        "Event တွေကို Log Analytics workspace ထဲ စုဆောင်းပြီးသား VM ၅၀ ထဲက ဘယ်တစ်လုံးရဲ့ System event log မှာမဆို \"Fatal disk error\" စာသားပေါ်ရင် alert ရရမယ်။ ဘယ် alert type ဖန်တီးသင့်လဲ?"),
      options: ['A metric alert with a dynamic threshold', 'An activity log alert', 'A Resource Health alert', 'A log search alert rule that runs a KQL query'],
      correct: [3],
      explanation: L("Searching event text across many machines requires a log search alert, which runs a KQL query such as `Event | where RenderedDescription has \"Fatal disk error\"` on a schedule. Metric alerts evaluate numeric values, and activity log alerts only see control-plane and health events, not guest OS event logs.",
        "多数のマシンでイベントのテキストを検索するにはログ検索アラートが必要で、`Event | where RenderedDescription has \"Fatal disk error\"` のような KQL クエリを定期的に実行します。メトリックアラートは数値を評価し、アクティビティログアラートはコントロールプレーンと正常性のイベントのみを対象とし、ゲスト OS のイベントログは見ません。",
        "Machine အများကြီးမှာ event text ရှာဖို့ log search alert လိုပြီး `Event | where RenderedDescription has \"Fatal disk error\"` လို KQL query ကို schedule နဲ့ run တယ်။ Metric alert က ဂဏန်းတန်ဖိုးကို စစ်တာဖြစ်ပြီး activity log alert က control-plane နဲ့ health event ကိုပဲ မြင်လို့ guest OS event log ကို မမြင်ဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("An attacker with compromised credentials stopped protection of VM2 and deleted its backup data from a Recovery Services vault with default settings. Which statements are true? (Select TWO)",
        "資格情報を侵害した攻撃者が、既定設定の Recovery Services コンテナーで VM2 の保護を停止し、バックアップデータを削除しました。正しい記述はどれですか？（2 つ選択）",
        "Credential ခိုးယူခံရတဲ့ attacker တစ်ယောက်က default setting နဲ့ Recovery Services vault ထဲမှာ VM2 ရဲ့ protection ကို ရပ်ပြီး backup data ကို ဖျက်လိုက်တယ်။ ဘယ်အချက်တွေ မှန်လဲ? (၂ ခု ရွေးပါ)"),
      options: ['The deleted backup data is kept in a soft-deleted state for 14 days', 'You can undelete the backup items and resume protection during that period', 'Soft delete is available only in Backup vaults, not Recovery Services vaults', 'All recovery points are permanently lost immediately'],
      correct: [0, 1],
      explanation: L("Soft delete is enabled by default in Recovery Services vaults and keeps deleted backup data for 14 days at no extra cost, so you can undelete and resume protection. To make this harder for attackers, add enhanced (always-on) soft delete, immutability and multi-user authorization.",
        "論理的な削除は Recovery Services コンテナーで既定で有効になっており、削除されたバックアップデータを追加料金なしで 14 日間保持するため、復元して保護を再開できます。攻撃者による削除をさらに難しくするには、強化された（常時有効の）論理的な削除、不変性、マルチユーザー承認を追加します。",
        "Soft delete ကို Recovery Services vault မှာ default ဖွင့်ထားပြီး ဖျက်လိုက်တဲ့ backup data ကို အပိုကုန်ကျစရိတ်မရှိဘဲ ၁၄ ရက် ထိန်းထားလို့ undelete လုပ်ပြီး protection ပြန်စနိုင်တယ်။ Attacker အတွက် ပိုခက်အောင် enhanced (always-on) soft delete၊ immutability နဲ့ multi-user authorization ထပ်ထည့်ပါ။"),
    },
  ],
  flashcards: [
    { term: 'Log Analytics workspace',
      definition: L("The data store for Azure Monitor Logs, organized in tables and queried with KQL; retention is configurable.", "Azure Monitor Logs のデータストアで、テーブル単位で整理され KQL でクエリします。保持期間は設定できます。", "Azure Monitor Logs ရဲ့ data store ဖြစ်ပြီး table အလိုက် စီထားကာ KQL နဲ့ query လုပ်တယ်၊ retention ကို သတ်မှတ်နိုင်တယ်။"),
      example: L("All production VMs and Key Vaults send logs to `law-prod-japaneast`.", "すべての本番 VM と Key Vault が `law-prod-japaneast` にログを送ります。", "Production VM နဲ့ Key Vault အားလုံးက `law-prod-japaneast` ဆီ log ပို့တယ်။") },
    { term: 'Diagnostic setting',
      definition: L("A configuration that routes a resource's platform logs and metrics to a workspace, storage account, Event Hub or partner solution.", "リソースのプラットフォームログとメトリックを、ワークスペース・ストレージアカウント・Event Hubs・パートナーソリューションに送る構成です。", "Resource ရဲ့ platform log နဲ့ metric ကို workspace၊ storage account၊ Event Hub သို့ partner solution ဆီ ပို့ပေးတဲ့ configuration ပါ။"),
      example: L("Send Azure SQL audit logs to a storage account for 7-year retention.", "Azure SQL の監査ログを 7 年保持用のストレージアカウントに送ります。", "Azure SQL audit log ကို ၇ နှစ် ထိန်းထားဖို့ storage account ဆီ ပို့တယ်။") },
    { term: 'Activity Log',
      definition: L("A subscription-level record of control-plane operations and service health events, kept for 90 days.", "コントロールプレーン操作と Service Health のイベントを記録するサブスクリプションレベルのログで、90 日間保持されます。", "Control-plane operation နဲ့ service health event တွေကို မှတ်တဲ့ subscription-level record ဖြစ်ပြီး ၉၀ ရက် ထားတယ်။"),
      example: L("Shows that admin@contoso.com deleted `vm-web01` at 21:14 yesterday.", "admin@contoso.com が昨日 21:14 に `vm-web01` を削除したことがわかります。", "admin@contoso.com က မနေ့က 21:14 မှာ `vm-web01` ကို ဖျက်ခဲ့ကြောင်း ပြတယ်။") },
    { term: 'Azure Monitor Agent (AMA)',
      definition: L("The agent that collects guest OS logs and performance data from Windows and Linux machines, controlled by data collection rules.", "Windows と Linux のマシンからゲスト OS のログとパフォーマンスデータを収集するエージェントで、データ収集ルールで制御します。", "Windows နဲ့ Linux machine တွေက guest OS log နဲ့ performance data ကို စုဆောင်းတဲ့ agent ဖြစ်ပြီး data collection rule နဲ့ ထိန်းတယ်။"),
      example: L("One DCR sends Security events from 30 VMs to the SOC workspace.", "1 つの DCR で 30 台の VM のセキュリティイベントを SOC のワークスペースに送ります。", "DCR တစ်ခုက VM ၃၀ ရဲ့ Security event တွေကို SOC workspace ဆီ ပို့တယ်။") },
    { term: 'Action group',
      definition: L("A reusable set of notifications and automated actions that alert rules trigger.", "アラートルールがトリガーする、通知と自動アクションの再利用可能なセットです。", "Alert rule တွေက trigger လုပ်တဲ့ notification နဲ့ automated action တွေကို ပြန်သုံးလို့ရတဲ့ အစုပါ။"),
      example: L("`ag-oncall` emails the team, sends SMS to the manager and calls a Logic App to open a ticket.", "`ag-oncall` がチームにメール、マネージャーに SMS を送り、Logic App でチケットを作成します。", "`ag-oncall` က team ကို email၊ manager ကို SMS ပို့ပြီး ticket ဖွင့်ဖို့ Logic App ကို ခေါ်တယ်။") },
    { term: 'Alert processing rule',
      definition: L("A rule that modifies fired alerts at scale, for example suppressing notifications during maintenance or adding action groups.", "発生したアラートを一括で変更するルールで、メンテナンス中の通知抑制やアクショングループの追加などを行います。", "ထွက်လာတဲ့ alert တွေကို အစုလိုက် ပြောင်းပေးတဲ့ rule ဖြစ်ပြီး maintenance အချိန် notification suppress လုပ်တာ၊ action group ထည့်တာ စသည်။"),
      example: L("Suppress all alerts in `rg-prod` every Saturday 22:00-02:00 JST.", "毎週土曜 22:00〜02:00 JST に `rg-prod` のすべてのアラートを抑制します。", "စနေနေ့တိုင်း 22:00-02:00 JST မှာ `rg-prod` ထဲက alert အားလုံးကို suppress လုပ်တယ်။") },
    { term: 'Azure Resource Health',
      definition: L("Shows the current and past health of an individual resource (Available, Unavailable, Degraded, Unknown) and whether the platform caused an issue.", "個々のリソースの現在と過去の正常性（Available・Unavailable・Degraded・Unknown）と、問題の原因がプラットフォームかどうかを示します。", "Resource တစ်ခုချင်းရဲ့ လက်ရှိနဲ့ အတိတ် health (Available၊ Unavailable၊ Degraded၊ Unknown) နဲ့ ပြဿနာက platform ကြောင့်လား ပြတယ်။"),
      example: L("Confirms that `vm-db01` was unavailable from 03:10 to 03:25 due to a host failure.", "ホスト障害により `vm-db01` が 03:10〜03:25 に利用不可だったことを確認できます。", "Host ပျက်လို့ `vm-db01` က 03:10 မှ 03:25 ထိ unavailable ဖြစ်ခဲ့ကြောင်း အတည်ပြုပေးတယ်။") },
    { term: 'Recovery Services vault',
      definition: L("A vault that stores backups of Azure VMs, SQL/SAP HANA in VMs, Azure Files and on-premises data, and also hosts Azure Site Recovery.", "Azure VM、VM 上の SQL/SAP HANA、Azure Files、オンプレミスのデータのバックアップを格納し、Azure Site Recovery にも使われるコンテナーです。", "Azure VM၊ VM ထဲက SQL/SAP HANA၊ Azure Files၊ on-premises data တွေရဲ့ backup ကို သိမ်းပြီး Azure Site Recovery ကလည်း သုံးတဲ့ vault ပါ။"),
      example: L("`rsv-japaneast` holds nightly backups of all Japan East VMs with 30-day retention.", "`rsv-japaneast` に Japan East の全 VM の夜間バックアップを 30 日間保持します。", "`rsv-japaneast` က Japan East VM အားလုံးရဲ့ ညစဉ် backup ကို ၃၀ ရက် ထိန်းထားတယ်။") },
    { term: 'RPO / RTO',
      definition: L("RPO is the maximum acceptable data loss in time; RTO is the maximum acceptable downtime before recovery.", "RPO は時間で表した許容できる最大データ損失、RTO は復旧までに許容される最大停止時間です。", "RPO က အချိန်နဲ့ တိုင်းတဲ့ လက်ခံနိုင်တဲ့ အများဆုံး data ဆုံးရှုံးမှု၊ RTO က ပြန်ကောင်းဖို့ လက်ခံနိုင်တဲ့ အများဆုံး downtime ပါ။"),
      example: L("Order system: RPO 15 minutes, RTO 1 hour, so Site Recovery is needed rather than nightly backups.", "受注システム：RPO 15 分、RTO 1 時間なので、夜間バックアップではなく Site Recovery が必要です。", "Order system- RPO 15 မိနစ်၊ RTO 1 နာရီ ဖြစ်လို့ ညစဉ် backup ထက် Site Recovery လိုတယ်။") },
    { term: 'Azure Update Manager',
      definition: L("A unified service to assess and install OS updates on Azure VMs and Azure Arc-enabled servers using schedules and maintenance configurations.", "スケジュールとメンテナンス構成を使い、Azure VM と Azure Arc 対応サーバーの OS 更新プログラムを評価・インストールする統合サービスです。", "Schedule နဲ့ maintenance configuration သုံးပြီး Azure VM နဲ့ Azure Arc-enabled server တွေရဲ့ OS update ကို စစ်ဆေး၊ install လုပ်ပေးတဲ့ unified service ပါ။"),
      example: L("Patch all VMs tagged `env=prod` on the second Saturday of each month at 02:00 JST.", "`env=prod` タグの全 VM に毎月第 2 土曜日の 02:00 JST にパッチを適用します。", "`env=prod` tag ပါတဲ့ VM အားလုံးကို လစဉ် ဒုတိယ စနေနေ့ 02:00 JST မှာ patch လုပ်တယ်။") },
  ],
};
