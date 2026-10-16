import { L, type SeedTopic } from '../types.js';

export const topic: SeedTopic = {
  slug: 'aws-databases',
  icon: 'Database',
  level: 'ASSOCIATE',
  exams: ['CLF-C02', 'SAA-C03'],
  name: L("AWS Databases: RDS, Aurora, DynamoDB & More", "AWS データベース：RDS・Aurora・DynamoDB ほか", "AWS Database - RDS၊ Aurora၊ DynamoDB နဲ့ အခြား"),
  description: L(
    "How to choose the right AWS database: self-managed vs managed, RDS Multi-AZ vs Read Replicas, backups and encryption, RDS Proxy, Aurora, DynamoDB keys, capacity and indexes, caching with DAX and ElastiCache, purpose-built databases, Redshift, Athena/Glue and migration with DMS.",
    "ワークロードに合った AWS データベースの選び方を学びます。自己管理とマネージドの違い、RDS の Multi-AZ とリードレプリカ、バックアップと暗号化、RDS Proxy、Aurora、DynamoDB のキー・キャパシティ・インデックス、DAX と ElastiCache によるキャッシュ、目的別データベース、Redshift、Athena／Glue、DMS による移行を扱います。",
    "Workload နဲ့ကိုက်တဲ့ AWS database ကို ဘယ်လိုရွေးမလဲ လေ့လာမယ်။ Self-managed နဲ့ managed ကွာခြားချက်၊ RDS Multi-AZ နဲ့ Read Replica၊ backup နဲ့ encryption၊ RDS Proxy၊ Aurora၊ DynamoDB key၊ capacity၊ index၊ DAX နဲ့ ElastiCache caching၊ purpose-built database တွေ၊ Redshift၊ Athena/Glue နဲ့ DMS migration တို့ ပါမယ်။",
  ),
  lesson: {
    minutes: 21,
    objectives: [
      L("Match a workload to the right database family (relational, key-value, document, in-memory, graph, time-series, warehouse).",
        "ワークロードを適切なデータベースの種類（リレーショナル、キーバリュー、ドキュメント、インメモリ、グラフ、時系列、データウェアハウス）に対応付けられる。",
        "Workload တစ်ခုကို သင့်တော်တဲ့ database အမျိုးအစား (relational၊ key-value၊ document၊ in-memory၊ graph၊ time-series၊ warehouse) နဲ့ တွဲပေးနိုင်မယ်။"),
      L("Explain what AWS manages for you in RDS compared with running a database yourself on EC2.",
        "EC2 上でデータベースを自分で運用する場合と比べて、RDS では AWS が何を管理してくれるかを説明できる。",
        "EC2 ပေါ်မှာ database ကို ကိုယ်တိုင် run တာနဲ့ယှဉ်ရင် RDS မှာ AWS က ဘာတွေ manage လုပ်ပေးလဲ ရှင်းပြနိုင်မယ်။"),
      L("Distinguish Multi-AZ (high availability) from Read Replicas (read scaling) and configure backups, PITR and encryption correctly.",
        "Multi-AZ（高可用性）とリードレプリカ（読み取りのスケーリング）を区別し、バックアップ・PITR・暗号化を正しく設定できる。",
        "Multi-AZ (high availability) နဲ့ Read Replica (read scaling) ကို ခွဲခြားနိုင်ပြီး backup၊ PITR၊ encryption ကို မှန်မှန်ကန်ကန် configure လုပ်နိုင်မယ်။"),
      L("Describe the Aurora storage architecture, Aurora Replicas, Serverless v2 and Global Database.",
        "Aurora のストレージ構造、Aurora レプリカ、Serverless v2、Global Database を説明できる。",
        "Aurora storage architecture၊ Aurora Replica၊ Serverless v2 နဲ့ Global Database ကို ရှင်းပြနိုင်မယ်။"),
      L("Design a DynamoDB table with suitable keys, capacity mode and indexes, and add caching with DAX or ElastiCache.",
        "適切なキー・キャパシティモード・インデックスで DynamoDB テーブルを設計し、DAX や ElastiCache でキャッシュを追加できる。",
        "သင့်တော်တဲ့ key၊ capacity mode၊ index တွေနဲ့ DynamoDB table ကို design လုပ်ပြီး DAX ဒါမှမဟုတ် ElastiCache နဲ့ caching ထည့်နိုင်မယ်။"),
      L("Pick the right purpose-built, analytics or migration service: Redshift, DocumentDB, Neptune, Keyspaces, Timestream, Athena, Glue, DMS.",
        "Redshift・DocumentDB・Neptune・Keyspaces・Timestream・Athena・Glue・DMS から適切な目的別／分析／移行サービスを選べる。",
        "Redshift၊ DocumentDB၊ Neptune၊ Keyspaces၊ Timestream၊ Athena၊ Glue၊ DMS ထဲက သင့်တော်တဲ့ purpose-built/analytics/migration service ကို ရွေးနိုင်မယ်။"),
    ],
    sections: [
      {
        id: "choosing-a-database",
        title: L("Choosing a database: one size does not fit all", "データベースの選び方：万能な 1 つはない", "Database ရွေးချယ်ခြင်း - တစ်ခုတည်းနဲ့ အကုန်မကိုက်ဘူး"),
        blocks: [
          { type: 'p', text: L(
            "For decades many teams put everything in one relational database. AWS instead promotes **purpose-built databases**: pick the engine whose data model matches how the application reads and writes. Think of kitchen tools: you can cut bread with a cleaver, but a bread knife works better. Ask four questions: What is the **shape** of the data (tables with relations, simple key lookups, JSON documents, connected graphs, timestamps)? What is the **access pattern** (complex joins, single-item lookups, big aggregations)? What **scale and latency** do you need (thousands vs millions of requests per second, milliseconds vs microseconds)? Is the workload **OLTP** (many small transactions, like placing orders) or **OLAP** (few large analytical queries, like yearly sales reports)?",
            "長い間、多くのチームはすべてを 1 つのリレーショナルデータベースに入れてきました。AWS は代わりに**目的別データベース（purpose-built databases）**を推奨しています。アプリの読み書きの方法に合ったデータモデルのエンジンを選ぶという考え方です。台所の包丁にたとえると、中華包丁でもパンは切れますが、パン切り包丁のほうがうまく切れます。次の 4 点を確認しましょう。データの**形**（関連を持つテーブル、単純なキー検索、JSON ドキュメント、つながったグラフ、タイムスタンプ）、**アクセスパターン**（複雑な JOIN、1 件の検索、大規模な集計）、必要な**規模とレイテンシー**（毎秒数千か数百万リクエストか、ミリ秒かマイクロ秒か）、そしてワークロードが **OLTP**（注文登録のような小さなトランザクションが大量）か **OLAP**（年間売上レポートのような大きな分析クエリが少数）かです。",
            "နှစ်ပေါင်းများစွာ team အများစုက data အကုန်လုံးကို relational database တစ်ခုတည်းမှာ ထည့်ခဲ့ကြတယ်။ AWS ကတော့ **purpose-built database** ကို အားပေးတယ် - application က data ကို ဖတ်ပုံ ရေးပုံနဲ့ ကိုက်တဲ့ data model ရှိတဲ့ engine ကို ရွေးဖို့ပါ။ မီးဖိုချောင်က ဓားလိုပဲ၊ ခုတ်ဓားနဲ့လည်း ပေါင်မုန့်လှီးလို့ရပေမဲ့ ပေါင်မုန့်ဓားက ပိုကောင်းတယ်။ မေးခွန်း ၄ ခု မေးကြည့်ပါ - data ရဲ့ **ပုံစံ** (relation ပါတဲ့ table၊ ရိုးရိုး key lookup၊ JSON document၊ ချိတ်ဆက်နေတဲ့ graph၊ timestamp)၊ **access pattern** (join ရှုပ်ရှုပ်၊ item တစ်ခုချင်းရှာ၊ အကြီးစား aggregation)၊ လိုအပ်တဲ့ **scale နဲ့ latency** (တစ်စက္ကန့် request ထောင်ချီလား သန်းချီလား၊ millisecond လား microsecond လား)၊ workload က **OLTP** (order တင်တာလို transaction သေးသေး အများကြီး) လား **OLAP** (နှစ်ချုပ် sales report လို analytics query ကြီးကြီး နည်းနည်း) လား။"
          ) },
          { type: 'table',
            head: [L("Data model", "データモデル", "Data model"), L("Best for", "適した用途", "သင့်တော်တဲ့ use case"), L("AWS service", "AWS サービス", "AWS service")],
            rows: [
              [L("Relational (SQL, OLTP)", "リレーショナル（SQL、OLTP）", "Relational (SQL, OLTP)"), L("Orders, accounts, ERP; joins and ACID transactions", "注文・口座・ERP、JOIN と ACID トランザクション", "Order၊ account၊ ERP - join နဲ့ ACID transaction"), L("RDS, Aurora", "RDS、Aurora", "RDS, Aurora")],
              [L("Key-value / wide NoSQL", "キーバリュー / NoSQL", "Key-value / NoSQL"), L("Shopping carts, sessions, gaming; massive scale, single-digit ms", "カート・セッション・ゲーム、超大規模で 1 桁ミリ秒", "Shopping cart၊ session၊ game - scale အကြီးကြီး၊ single-digit ms"), L("DynamoDB", "DynamoDB", "DynamoDB")],
              [L("Document (JSON)", "ドキュメント（JSON）", "Document (JSON)"), L("Catalogs, content, MongoDB workloads", "カタログ・コンテンツ・MongoDB ワークロード", "Catalog၊ content၊ MongoDB workload"), L("DocumentDB (or DynamoDB)", "DocumentDB（または DynamoDB）", "DocumentDB (သို့) DynamoDB")],
              [L("In-memory", "インメモリ", "In-memory"), L("Caching, leaderboards, session store; microseconds", "キャッシュ・ランキング・セッション、マイクロ秒", "Caching၊ leaderboard၊ session store - microsecond"), L("ElastiCache, MemoryDB, DAX", "ElastiCache、MemoryDB、DAX", "ElastiCache, MemoryDB, DAX")],
              [L("Graph", "グラフ", "Graph"), L("Social networks, fraud rings, recommendations", "SNS の関係・不正の連鎖・レコメンド", "Social network၊ fraud ring၊ recommendation"), L("Neptune", "Neptune", "Neptune")],
              [L("Wide-column (Cassandra)", "ワイドカラム（Cassandra）", "Wide-column (Cassandra)"), L("Existing Cassandra apps using CQL", "CQL を使う既存の Cassandra アプリ", "CQL သုံးနေတဲ့ Cassandra app ဟောင်းတွေ"), L("Keyspaces", "Keyspaces", "Keyspaces")],
              [L("Time-series", "時系列", "Time-series"), L("IoT sensor data, metrics over time", "IoT センサーデータ・時系列メトリクス", "IoT sensor data၊ အချိန်အလိုက် metric"), L("Timestream", "Timestream", "Timestream")],
              [L("Data warehouse (OLAP)", "データウェアハウス（OLAP）", "Data warehouse (OLAP)"), L("BI dashboards, analytics on TB-PB of data", "BI ダッシュボード、TB〜PB 規模の分析", "BI dashboard၊ TB-PB data analytics"), L("Redshift", "Redshift", "Redshift")],
            ] },
          { type: 'callout', tone: 'memory', text: L(
            "Exam keyword map: **joins / SQL / ACID** -> RDS or Aurora; **key-value, millions of requests/s, serverless** -> DynamoDB; **MongoDB** -> DocumentDB; **Cassandra** -> Keyspaces; **relationships / social graph** -> Neptune; **IoT time-stamped** -> Timestream; **analytics / BI / columnar** -> Redshift; **microsecond / cache** -> ElastiCache or DAX.",
            "試験のキーワード対応：**JOIN / SQL / ACID** → RDS か Aurora、**キーバリュー・毎秒数百万リクエスト・サーバーレス** → DynamoDB、**MongoDB** → DocumentDB、**Cassandra** → Keyspaces、**関係性 / ソーシャルグラフ** → Neptune、**IoT のタイムスタンプ付きデータ** → Timestream、**分析 / BI / 列指向** → Redshift、**マイクロ秒 / キャッシュ** → ElastiCache か DAX。",
            "Exam keyword မှတ်နည်း - **join / SQL / ACID** -> RDS သို့ Aurora၊ **key-value၊ တစ်စက္ကန့် request သန်းချီ၊ serverless** -> DynamoDB၊ **MongoDB** -> DocumentDB၊ **Cassandra** -> Keyspaces၊ **relationship / social graph** -> Neptune၊ **IoT timestamp data** -> Timestream၊ **analytics / BI / columnar** -> Redshift၊ **microsecond / cache** -> ElastiCache သို့ DAX။"
          ) },
        ],
      },
      {
        id: "self-managed-vs-managed",
        title: L("Self-managed on EC2 vs managed databases", "EC2 上の自己管理 vs マネージドデータベース", "EC2 ပေါ်မှာ ကိုယ်တိုင် manage vs Managed database"),
        blocks: [
          { type: 'p', text: L(
            "Today you may run PostgreSQL in a Docker container on EC2. That works, but you own everything above the hypervisor: OS patches, PostgreSQL upgrades, backups, replication, failover scripts, disk growth, monitoring and encryption. It is like owning a car: total control, but you change the oil yourself. **Amazon RDS** is more like a car lease with maintenance included: AWS handles the hardware, OS, engine patching, automated backups and failover, while you focus on schema design, queries, indexes and who can connect.",
            "現在、EC2 上の Docker コンテナで PostgreSQL を動かしているかもしれません。それでも動きますが、ハイパーバイザーより上のすべて、つまり OS パッチ、PostgreSQL のアップグレード、バックアップ、レプリケーション、フェイルオーバーのスクリプト、ディスク拡張、監視、暗号化はすべて自分の責任です。車を所有するのと同じで、完全に自由に扱えますが、オイル交換も自分で行います。**Amazon RDS** はメンテナンス込みのカーリースのようなもので、ハードウェア・OS・エンジンのパッチ・自動バックアップ・フェイルオーバーは AWS が担当し、利用者はスキーマ設計、クエリ、インデックス、接続を許可する相手に集中できます。",
            "အခု ခင်ဗျားက EC2 ပေါ်က Docker container ထဲမှာ PostgreSQL run နေတယ်ဆိုပါစို့။ အလုပ်တော့ဖြစ်တယ်၊ ဒါပေမဲ့ hypervisor အပေါ်က အရာအားလုံး - OS patch၊ PostgreSQL upgrade၊ backup၊ replication၊ failover script၊ disk ချဲ့တာ၊ monitoring၊ encryption - အကုန် ကိုယ့်တာဝန်ပါ။ ကားကိုယ်ပိုင်ရှိတာနဲ့တူတယ် - စိတ်ကြိုက်ထိန်းလို့ရပေမဲ့ အင်ဂျင်ဝိုင်လည်း ကိုယ်တိုင်လဲရတယ်။ **Amazon RDS** ကတော့ maintenance ပါတဲ့ ကားငှားတာနဲ့ တူတယ် - hardware၊ OS၊ engine patch၊ automated backup၊ failover ကို AWS က လုပ်ပေးပြီး ခင်ဗျားက schema design၊ query၊ index၊ ဘယ်သူ connect လုပ်ခွင့်ရှိလဲ ဆိုတာတွေကိုပဲ အာရုံစိုက်ရတယ်။"
          ) },
          { type: 'table',
            head: [L("Task", "作業", "Task"), L("DB on EC2", "EC2 上の DB", "EC2 ပေါ်က DB"), L("RDS / Aurora", "RDS / Aurora", "RDS / Aurora"), L("DynamoDB", "DynamoDB", "DynamoDB")],
            rows: [
              [L("Hardware, OS patching", "ハードウェア・OS パッチ", "Hardware၊ OS patch"), L("You (OS)", "利用者（OS）", "ကိုယ်တိုင် (OS)"), L("AWS", "AWS", "AWS"), L("AWS", "AWS", "AWS")],
              [L("Engine install & minor upgrades", "エンジン導入・マイナーアップグレード", "Engine install နဲ့ minor upgrade"), L("You", "利用者", "ကိုယ်တိုင်"), L("AWS (you choose the window)", "AWS（時間帯は利用者が指定）", "AWS (window ကို ကိုယ်ရွေး)"), L("AWS (no engine to see)", "AWS（エンジンは見えない）", "AWS (engine မမြင်ရ)")],
              [L("Backups, HA, failover", "バックアップ・HA・フェイルオーバー", "Backup၊ HA၊ failover"), L("You build it", "自分で構築", "ကိုယ်တိုင်တည်ဆောက်"), L("AWS features, you enable", "AWS の機能、有効化は利用者", "AWS feature၊ enable က ကိုယ်"), L("Built in (3 AZs)", "組み込み（3 AZ）", "Built-in (AZ ၃ ခု)")],
              [L("Schema, queries, indexes", "スキーマ・クエリ・インデックス", "Schema၊ query၊ index"), L("You", "利用者", "ကိုယ်တိုင်"), L("You", "利用者", "ကိုယ်တိုင်"), L("You (keys, GSIs)", "利用者（キー、GSI）", "ကိုယ်တိုင် (key၊ GSI)")],
              [L("Network access, IAM, encryption choice", "ネットワーク・IAM・暗号化の設定", "Network access၊ IAM၊ encryption ရွေးချယ်မှု"), L("You", "利用者", "ကိုယ်တိုင်"), L("You", "利用者", "ကိုယ်တိုင်"), L("You", "利用者", "ကိုယ်တိုင်")],
            ] },
          { type: 'callout', tone: 'tip', text: L(
            "Choose EC2 only when you truly need what RDS does not allow: OS-level access, an unsupported engine or version, or special plugins. For Oracle and SQL Server that need OS access, **RDS Custom** is a middle ground. Note that you cannot SSH into a normal RDS instance.",
            "RDS では許可されないこと、つまり OS レベルのアクセス、未サポートのエンジンやバージョン、特殊なプラグインが本当に必要な場合だけ EC2 を選びましょう。OS アクセスが必要な Oracle と SQL Server には **RDS Custom** という中間の選択肢があります。通常の RDS インスタンスには SSH できない点に注意してください。",
            "RDS က ခွင့်မပြုတဲ့အရာ - OS-level access၊ support မလုပ်တဲ့ engine/version၊ plugin အထူး - တကယ်လိုမှ EC2 ကို ရွေးပါ။ OS access လိုတဲ့ Oracle နဲ့ SQL Server အတွက် **RDS Custom** ဆိုတဲ့ အလယ်အလတ် ရွေးချယ်စရာ ရှိတယ်။ ရိုးရိုး RDS instance ကို SSH ဝင်လို့ မရဘူးဆိုတာ မှတ်ထားပါ။"
          ) },
        ],
      },
      {
        id: "rds-basics",
        title: L("Amazon RDS: engines, backups, snapshots, encryption", "Amazon RDS：エンジン、バックアップ、スナップショット、暗号化", "Amazon RDS - engine၊ backup၊ snapshot၊ encryption"),
        blocks: [
          { type: 'p', text: L(
            "**Amazon RDS** runs managed relational databases with the engines **MySQL, PostgreSQL, MariaDB, Oracle, Microsoft SQL Server and IBM Db2**, plus **Aurora** (covered later). You pick an instance class (CPU/RAM) and storage (gp3, io1/io2), place it in a **DB subnet group** inside your VPC (normally private subnets), and control access with **security groups**: for example, allow port 5432 only from the app servers' security group.",
            "**Amazon RDS** はマネージドなリレーショナルデータベースで、エンジンは **MySQL、PostgreSQL、MariaDB、Oracle、Microsoft SQL Server、IBM Db2**、さらに **Aurora**（後述）があります。インスタンスクラス（CPU／メモリ）とストレージ（gp3、io1/io2）を選び、VPC 内の **DB サブネットグループ**（通常はプライベートサブネット）に配置し、**セキュリティグループ**でアクセスを制御します。例えば、ポート 5432 をアプリサーバーのセキュリティグループからのみ許可します。",
            "**Amazon RDS** က managed relational database ဖြစ်ပြီး engine တွေက **MySQL၊ PostgreSQL၊ MariaDB၊ Oracle၊ Microsoft SQL Server၊ IBM Db2** နဲ့ **Aurora** (နောက်မှပြောမယ်) ပါ။ Instance class (CPU/RAM) နဲ့ storage (gp3၊ io1/io2) ကို ရွေးပြီး VPC ထဲက **DB subnet group** (ပုံမှန် private subnet) မှာ ထားတယ်၊ access ကို **security group** နဲ့ ထိန်းတယ်။ ဥပမာ port 5432 ကို app server တွေရဲ့ security group ကပဲ ဝင်ခွင့်ပေးတယ်။"
          ) },
          { type: 'list', items: [
            L("**Automated backups**: daily snapshot + transaction logs, retention **1 to 35 days** (0 disables them). They enable **point-in-time recovery (PITR)** to any second in the window, typically up to about the last 5 minutes.",
              "**自動バックアップ**：毎日のスナップショットとトランザクションログで、保持期間は **1〜35 日**（0 で無効）。保持期間内の任意の秒への**ポイントインタイムリカバリ（PITR）**が可能で、通常は直近約 5 分前まで戻せます。",
              "**Automated backup** - နေ့စဉ် snapshot နဲ့ transaction log၊ retention **၁ ရက်ကနေ ၃၅ ရက်** (0 ဆို ပိတ်)။ ဒါကြောင့် window အတွင်း ဘယ်စက္ကန့်ကိုမဆို **point-in-time recovery (PITR)** လုပ်လို့ရတယ်၊ ပုံမှန် နောက်ဆုံး ၅ မိနစ်လောက်အထိ။"),
            L("**Manual snapshots**: taken when you choose, kept until you delete them, even after the DB is deleted. Use them for long-term retention or before risky changes; they can be copied to other Regions or shared with other accounts.",
              "**手動スナップショット**：任意のタイミングで取得し、DB を削除した後も自分で削除するまで保持されます。長期保管やリスクのある変更前に使い、他リージョンへのコピーや他アカウントとの共有もできます。",
              "**Manual snapshot** - ကိုယ်လိုချင်တဲ့အချိန် ယူတာဖြစ်ပြီး DB ဖျက်ပြီးတောင် ကိုယ်တိုင်မဖျက်မချင်း ကျန်နေတယ်။ ကာလရှည်သိမ်းဖို့ ဒါမှမဟုတ် risk ရှိတဲ့ပြောင်းလဲမှုမတိုင်ခင် သုံးတယ်၊ Region တခြားကို copy ကူးတာ၊ account တခြားကို share တာ လုပ်လို့ရတယ်။"),
            L("A restore (from PITR or snapshot) always creates a **new DB instance** with a new endpoint; it never overwrites the existing one.",
              "リストア（PITR でもスナップショットでも）は必ず新しいエンドポイントを持つ**新しい DB インスタンス**を作成し、既存のインスタンスを上書きすることはありません。",
              "Restore (PITR ဖြစ်ဖြစ် snapshot ဖြစ်ဖြစ်) လုပ်ရင် endpoint အသစ်နဲ့ **DB instance အသစ်** ကို အမြဲဖန်တီးတယ်၊ ရှိပြီးသားကို overwrite မလုပ်ဘူး။"),
            L("**Encryption at rest** uses AWS KMS and covers storage, automated backups, snapshots and read replicas. TLS protects data in transit.",
              "**保存時の暗号化**は AWS KMS を使い、ストレージ・自動バックアップ・スナップショット・リードレプリカが対象です。転送中のデータは TLS で保護します。",
              "**Encryption at rest** က AWS KMS ကို သုံးပြီး storage၊ automated backup၊ snapshot၊ read replica အကုန် ပါတယ်။ Data in transit ကို TLS နဲ့ ကာကွယ်တယ်။"),
            L("**Storage auto scaling** grows storage automatically when free space runs low, up to a maximum you set.",
              "**ストレージの自動スケーリング**は空き容量が少なくなると、設定した上限まで自動的にストレージを拡張します。",
              "**Storage auto scaling** က free space နည်းလာရင် ကိုယ်သတ်မှတ်ထားတဲ့ maximum အထိ storage ကို အလိုအလျောက် ချဲ့ပေးတယ်။"),
          ] },
          { type: 'callout', tone: 'warn', text: L(
            "Encryption at rest must be chosen **when the DB is created**. You cannot simply switch it on later. To encrypt an existing unencrypted database: take a snapshot -> **copy the snapshot with encryption enabled** -> restore a new instance from the encrypted copy -> point the app to it.",
            "保存時の暗号化は **DB 作成時**に選択する必要があり、後から単純にオンにすることはできません。暗号化されていない既存 DB を暗号化するには、スナップショットを取得 → **暗号化を有効にしてスナップショットをコピー** → 暗号化されたコピーから新しいインスタンスを復元 → アプリの接続先を切り替える、という手順を取ります。",
            "Encryption at rest ကို **DB ဖန်တီးတဲ့အချိန်မှာ** ရွေးရမယ်၊ နောက်မှ ခလုတ်ဖွင့်သလို ဖွင့်လို့မရဘူး။ Encrypt မလုပ်ထားတဲ့ DB ဟောင်းကို encrypt လုပ်ချင်ရင် - snapshot ယူ -> **encryption ဖွင့်ပြီး snapshot ကို copy ကူး** -> encrypted copy ကနေ instance အသစ် restore -> app ကို အဲ့ဒီဘက် ပြောင်းချိတ်။"
          ) },
          { type: 'code', lang: 'bash', code:
`# Create an encrypted, Multi-AZ PostgreSQL instance with 7-day backups
aws rds create-db-instance \\
  --db-instance-identifier shop-db \\
  --engine postgres \\
  --db-instance-class db.t4g.medium \\
  --allocated-storage 50 --storage-type gp3 \\
  --master-username appadmin \\
  --manage-master-user-password \\
  --multi-az \\
  --storage-encrypted \\
  --backup-retention-period 7 \\
  --db-subnet-group-name private-db-subnets \\
  --vpc-security-group-ids sg-0abc123db \\
  --no-publicly-accessible`,
            caption: L("--manage-master-user-password stores the admin password in AWS Secrets Manager instead of typing it on the command line.", "--manage-master-user-password を使うと、管理者パスワードをコマンドラインに書かずに AWS Secrets Manager に保存できます。", "--manage-master-user-password သုံးရင် admin password ကို command line မှာ မရိုက်ဘဲ AWS Secrets Manager ထဲ သိမ်းပေးတယ်။") },
        ],
      },
      {
        id: "multi-az-vs-read-replicas",
        title: L("Multi-AZ vs Read Replicas: the classic exam trap", "Multi-AZ とリードレプリカ：定番の試験のひっかけ", "Multi-AZ vs Read Replica - exam ထဲက ထောင်ချောက်"),
        blocks: [
          { type: 'p', text: L(
            "These two features both create a second copy of your database, so people confuse them. Their **purpose** is different. **Multi-AZ** is an insurance policy: a **standby** in another AZ receives every write **synchronously**. You cannot read from it; it waits. If the primary or its AZ fails, RDS flips the DNS endpoint to the standby automatically, usually in **60-120 seconds**, and the app reconnects to the same hostname. **Read Replicas** are extra workers: they copy data **asynchronously**, have **their own endpoints**, and serve read-only queries such as reports, so the primary has more capacity for writes. Because replication is async, a replica may be slightly behind (replica lag).",
            "この 2 つはどちらもデータベースの 2 つ目のコピーを作るので混同されがちですが、**目的**が違います。**Multi-AZ** は保険です。別の AZ にある**スタンバイ**がすべての書き込みを**同期的に**受け取ります。スタンバイからは読み取りできず、待機しているだけです。プライマリやその AZ に障害が起きると、RDS が DNS エンドポイントを自動でスタンバイに切り替え（通常 **60〜120 秒**）、アプリは同じホスト名に再接続します。**リードレプリカ**は追加の作業員です。データを**非同期で**コピーし、**独自のエンドポイント**を持ち、レポートなどの読み取り専用クエリを処理するので、プライマリは書き込みに余力を回せます。非同期のため、レプリカは少し遅れることがあります（レプリカラグ）。",
            "ဒီ feature နှစ်ခုလုံးက database ရဲ့ copy နောက်တစ်ခု ဖန်တီးတာမို့ လူတွေ ရောထွေးတတ်တယ်။ ဒါပေမဲ့ **ရည်ရွယ်ချက်** မတူဘူး။ **Multi-AZ** က အာမခံလိုပဲ - တခြား AZ ထဲက **standby** က write တိုင်းကို **synchronous** လက်ခံတယ်။ အဲ့ဒီကနေ read လို့မရ၊ စောင့်နေရုံပဲ။ Primary ဒါမှမဟုတ် သူ့ AZ ပျက်ရင် RDS က DNS endpoint ကို standby ဘက် အလိုအလျောက် လှည့်ပေးတယ် (ပုံမှန် **စက္ကန့် ၆၀-၁၂၀**)၊ app က hostname အဟောင်းကိုပဲ ပြန် connect လုပ်တယ်။ **Read Replica** ကတော့ အလုပ်သမား အပိုတွေ - data ကို **asynchronous** copy ကူးတယ်၊ **ကိုယ်ပိုင် endpoint** ရှိတယ်၊ report လို read-only query တွေကို ဖြေပေးလို့ primary မှာ write အတွက် အားပိုရှိတယ်။ Async ဖြစ်လို့ replica က နည်းနည်း နောက်ကျနေနိုင်တယ် (replica lag)။"
          ) },
          { type: 'diagram', text:
`  MULTI-AZ (high availability)       READ REPLICAS (read scaling)
  ----------------------------       ----------------------------
        app (one endpoint)            writes        reads
              |                         |          /     \\
     +--------v-------+            +----v----+  +---v--+ +--v---+
     |  Primary AZ-a  |            | Primary |  | RR 1 | | RR 2 |
     +--------+-------+            +----+----+  +--^---+ +--^---+
              | sync                    |   async  |        |
     +--------v-------+                 +----------+--------+
     | Standby AZ-b   |
     | (no reads)     |            each replica = own endpoint
     +----------------+            can be cross-Region, promotable
   failover = DNS flip`,
            caption: L("Multi-AZ protects against failure; Read Replicas add read capacity.", "Multi-AZ は障害から守り、リードレプリカは読み取り能力を増やします。", "Multi-AZ က ပျက်စီးမှုကနေ ကာကွယ်တယ်၊ Read Replica က read capacity ကို တိုးပေးတယ်။") },
          { type: 'table',
            head: [L("Aspect", "項目", "အချက်"), L("Multi-AZ (instance)", "Multi-AZ（インスタンス）", "Multi-AZ (instance)"), L("Read Replica", "リードレプリカ", "Read Replica")],
            rows: [
              [L("Goal", "目的", "ရည်ရွယ်ချက်"), L("High availability, disaster survival", "高可用性・障害時の継続", "High availability၊ ပျက်စီးရင် ဆက်ရှင်သန်"), L("Scale reads, offload reporting", "読み取りのスケール、レポートの分離", "Read scale လုပ်၊ report ကို ခွဲထုတ်")],
              [L("Replication", "レプリケーション", "Replication"), L("Synchronous", "同期", "Synchronous"), L("Asynchronous (lag possible)", "非同期（ラグあり得る）", "Asynchronous (lag ဖြစ်နိုင်)")],
              [L("Readable?", "読み取り可能か", "Read လို့ရလား"), L("No (standby only)", "不可（待機のみ）", "မရ (standby သက်သက်)"), L("Yes, own endpoint", "可、独自エンドポイント", "ရ၊ ကိုယ်ပိုင် endpoint")],
              [L("Location", "配置", "နေရာ"), L("Another AZ, same Region", "同一リージョンの別 AZ", "Region တူ၊ AZ မတူ"), L("Same AZ, other AZ or other Region", "同一 AZ・別 AZ・別リージョン", "AZ တူ၊ AZ ခြား၊ Region ခြား")],
              [L("Failover", "フェイルオーバー", "Failover"), L("Automatic", "自動", "အလိုအလျောက်"), L("Manual promotion to standalone DB", "手動で単独 DB に昇格", "Standalone DB အဖြစ် manual promote")],
              [L("How many", "数", "အရေအတွက်"), L("One standby", "スタンバイ 1 台", "Standby တစ်ခု"), L("Up to 15 (MySQL, MariaDB, PostgreSQL)", "最大 15（MySQL、MariaDB、PostgreSQL）", "အများဆုံး ၁၅ (MySQL၊ MariaDB၊ PostgreSQL)")],
            ] },
          { type: 'code', lang: 'bash', code:
`# Add a read replica in another Region for reporting / DR
aws rds create-db-instance-read-replica \\
  --db-instance-identifier shop-db-replica-osaka \\
  --source-db-instance-identifier arn:aws:rds:ap-northeast-1:111122223333:db:shop-db \\
  --db-instance-class db.t4g.medium \\
  --region ap-northeast-3

# Later, in a disaster, promote it to a standalone writable DB
aws rds promote-read-replica \\
  --db-instance-identifier shop-db-replica-osaka --region ap-northeast-3`,
            caption: L("A cross-Region replica of an encrypted source needs a KMS key in the destination Region (--kms-key-id).", "暗号化されたソースのクロスリージョンレプリカには、宛先リージョンの KMS キー（--kms-key-id）が必要です。", "Encrypted source ရဲ့ cross-Region replica အတွက် destination Region မှာ KMS key (--kms-key-id) လိုတယ်။") },
          { type: 'p', text: L(
            "There is also a newer **Multi-AZ DB cluster** deployment (MySQL and PostgreSQL): one writer plus **two readable standbys** in three AZs, with faster failover (typically under 35 seconds). It gives HA and some read capacity at once, but the classic exam answer is still: HA -> Multi-AZ, read scaling -> Read Replicas.",
            "より新しい **Multi-AZ DB クラスター**構成（MySQL と PostgreSQL）もあります。3 つの AZ に 1 つのライターと**読み取り可能な 2 つのスタンバイ**を置き、フェイルオーバーがより速い（通常 35 秒未満）構成です。HA と一定の読み取り能力を同時に得られますが、試験の定番の答えは変わらず「HA → Multi-AZ、読み取りスケール → リードレプリカ」です。",
            "နောက်ထပ် အသစ်ဖြစ်တဲ့ **Multi-AZ DB cluster** deployment (MySQL နဲ့ PostgreSQL) လည်း ရှိတယ် - AZ ၃ ခုမှာ writer တစ်ခုနဲ့ **read လို့ရတဲ့ standby နှစ်ခု**၊ failover ပိုမြန်တယ် (ပုံမှန် စက္ကန့် ၃၅ အောက်)။ HA နဲ့ read capacity တစ်စိတ်တစ်ပိုင်းကို တပြိုင်နက် ရတယ်၊ ဒါပေမဲ့ exam ရဲ့ classic အဖြေကတော့ HA -> Multi-AZ၊ read scaling -> Read Replica ပဲ။"
          ) },
          { type: 'callout', tone: 'exam', text: L(
            "Trap patterns: 'the database must survive an AZ failure with automatic failover' -> **Multi-AZ**. 'Reporting queries slow down the production DB' -> **Read Replica** (point reports at the replica endpoint). 'Read Replicas improve availability' is a distractor: they are not automatic failover targets. A Read Replica can itself be Multi-AZ, and a cross-Region replica is a cheap DR option for RDS.",
            "ひっかけのパターン：「AZ 障害でも自動フェイルオーバーで継続する必要がある」→ **Multi-AZ**。「レポートのクエリが本番 DB を遅くしている」→ **リードレプリカ**（レポートをレプリカのエンドポイントに向ける）。「リードレプリカで可用性が上がる」は誤りの選択肢で、自動フェイルオーバー先にはなりません。リードレプリカ自体を Multi-AZ にすることもでき、クロスリージョンレプリカは RDS の安価な DR 手段です。",
            "ထောင်ချောက် pattern - 'AZ ပျက်ရင်တောင် automatic failover နဲ့ ဆက်အလုပ်လုပ်ရမယ်' -> **Multi-AZ**။ 'Report query တွေကြောင့် production DB နှေးနေတယ်' -> **Read Replica** (report ကို replica endpoint ဘက် ညွှန်)။ 'Read Replica က availability ကို တိုးတယ်' ဆိုတာ distractor - automatic failover target မဟုတ်ဘူး။ Read Replica ကိုယ်တိုင်ကိုလည်း Multi-AZ လုပ်လို့ရတယ်၊ cross-Region replica က RDS အတွက် ဈေးသက်သာတဲ့ DR နည်းလမ်းပါ။"
          ) },
          { type: 'callout', tone: 'memory', text: L(
            "**Multi-AZ = Many-Availability (sync, standby, failover). Read Replica = Reads (async, endpoints, scale).** Sync keeps you Safe; Async lets you Scale.",
            "**Multi-AZ ＝ 可用性（同期・スタンバイ・フェイルオーバー）、Read Replica ＝ 読み取り（非同期・エンドポイント・スケール）。** 同期は安全（Safe）、非同期はスケール（Scale）と覚えましょう。",
            "**Multi-AZ = Availability (sync၊ standby၊ failover)။ Read Replica = Read (async၊ endpoint၊ scale)။** Sync က Safe ဖြစ်စေတယ်၊ Async က Scale ဖြစ်စေတယ်လို့ မှတ်ပါ။"
          ) },
        ],
      },
      {
        id: "rds-proxy-and-aurora",
        title: L("RDS Proxy and Amazon Aurora", "RDS Proxy と Amazon Aurora", "RDS Proxy နဲ့ Amazon Aurora"),
        blocks: [
          { type: 'p', text: L(
            "**RDS Proxy** is a fully managed connection pooler that sits between the app and RDS/Aurora. Thousands of short-lived connections, typical of **AWS Lambda**, can exhaust a database's connection limit; the proxy keeps a warm pool and shares it. It also reduces failover time (clients stay connected to the proxy while it switches to the new primary), can enforce **IAM authentication**, and reads DB credentials from **Secrets Manager**. It is reachable only from inside the VPC.",
            "**RDS Proxy** はアプリと RDS/Aurora の間に置くフルマネージドのコネクションプーラーです。**AWS Lambda** によくある短命な大量の接続は、データベースの接続上限を使い切ってしまうことがあります。プロキシは温まった接続プールを保持して共有します。さらにフェイルオーバー時間を短縮し（プロキシが新しいプライマリに切り替える間もクライアントはプロキシに接続したまま）、**IAM 認証**を強制でき、DB の認証情報を **Secrets Manager** から読み取ります。VPC 内からのみアクセスできます。",
            "**RDS Proxy** က app နဲ့ RDS/Aurora ကြားမှာထားတဲ့ fully managed connection pooler ပါ။ **AWS Lambda** လို သက်တမ်းတို connection ထောင်ချီက database ရဲ့ connection limit ကို ကုန်သွားစေနိုင်တယ်၊ proxy က ပူနွေးနေတဲ့ pool ကို ထိန်းထားပြီး မျှသုံးပေးတယ်။ Failover time ကိုလည်း လျှော့ပေးတယ် (proxy က primary အသစ်ကို ပြောင်းနေချိန် client တွေက proxy နဲ့ ချိတ်ထားဆဲ)၊ **IAM authentication** ကို အတင်းသုံးခိုင်းလို့ရတယ်၊ DB credential ကို **Secrets Manager** ကနေ ဖတ်တယ်။ VPC အတွင်းကပဲ ဝင်လို့ရတယ်။"
          ) },
          { type: 'p', text: L(
            "**Amazon Aurora** is AWS's cloud-native relational engine, compatible with **MySQL and PostgreSQL**, so your existing PostgreSQL app and drivers work. The magic is the storage layer: data is split into small segments and stored as **6 copies across 3 AZs**. Writes need 4 of 6 copies and reads need 3 of 6, so Aurora tolerates losing a whole AZ for writes. Storage is shared by all instances in the cluster and **grows automatically** in 10 GiB steps; you never pre-provision disk.",
            "**Amazon Aurora** は AWS のクラウドネイティブなリレーショナルエンジンで、**MySQL と PostgreSQL** に互換性があるため、既存の PostgreSQL アプリやドライバーがそのまま使えます。特長はストレージ層です。データは小さなセグメントに分割され、**3 つの AZ にわたって 6 つのコピー**として保存されます。書き込みは 6 つ中 4 つ、読み取りは 6 つ中 3 つのコピーが必要なので、1 つの AZ 全体を失っても書き込みを継続できます。ストレージはクラスター内の全インスタンスで共有され、10 GiB 単位で**自動的に拡張**されるため、ディスクを事前に確保する必要はありません。",
            "**Amazon Aurora** က AWS ရဲ့ cloud-native relational engine ဖြစ်ပြီး **MySQL နဲ့ PostgreSQL** compatible ဖြစ်လို့ ရှိပြီးသား PostgreSQL app နဲ့ driver တွေ အလုပ်လုပ်တယ်။ ထူးခြားချက်က storage layer ပါ - data ကို segment အသေးလေးတွေ ခွဲပြီး **AZ ၃ ခုမှာ copy ၆ ခု** သိမ်းတယ်။ Write အတွက် ၆ ခုထဲက ၄ ခု၊ read အတွက် ၆ ခုထဲက ၃ ခု လိုလို့ AZ တစ်ခုလုံး ပျောက်သွားလည်း write ဆက်လုပ်နိုင်တယ်။ Storage ကို cluster ထဲက instance အားလုံး မျှသုံးပြီး 10 GiB စီ **အလိုအလျောက် ကြီးလာ**လို့ disk ကို ကြိုမယူထားရဘူး။"
          ) },
          { type: 'list', items: [
            L("**Aurora Replicas**: up to **15** readers sharing the same storage, so replica lag is usually very low. They are also **automatic failover targets** (typically around 30 seconds). Use the **reader endpoint** to load-balance reads and the **cluster (writer) endpoint** for writes.",
              "**Aurora レプリカ**：同じストレージを共有する最大 **15** 台のリーダーで、レプリカラグは通常とても小さいです。**自動フェイルオーバー先**にもなります（通常 30 秒前後）。読み取りの負荷分散には**リーダーエンドポイント**、書き込みには**クラスター（ライター）エンドポイント**を使います。",
              "**Aurora Replica** - storage တစ်ခုတည်းကို မျှသုံးတဲ့ reader **၁၅** ခုအထိ၊ ဒါကြောင့် replica lag အရမ်းနည်းတယ်။ **Automatic failover target** လည်း ဖြစ်တယ် (ပုံမှန် စက္ကန့် ၃၀ ဝန်းကျင်)။ Read load-balance အတွက် **reader endpoint**၊ write အတွက် **cluster (writer) endpoint** ကို သုံးပါ။"),
            L("**Aurora Serverless v2**: capacity scales automatically in fine-grained **ACUs** (Aurora Capacity Units) within a min/max you set. Great for spiky or unpredictable traffic, dev/test, and multi-tenant SaaS.",
              "**Aurora Serverless v2**：設定した最小・最大の範囲内で、細かい単位の **ACU**（Aurora Capacity Unit）で容量が自動スケールします。急増する・予測できないトラフィック、開発／テスト、マルチテナント SaaS に最適です。",
              "**Aurora Serverless v2** - ကိုယ်သတ်မှတ်ထားတဲ့ min/max အတွင်း **ACU** (Aurora Capacity Unit) သေးသေးလေးတွေနဲ့ capacity အလိုအလျောက် scale လုပ်တယ်။ Traffic ရုတ်တရက်တက်တာ၊ ကြိုမခန့်မှန်းနိုင်တာ၊ dev/test၊ multi-tenant SaaS အတွက် ကောင်းတယ်။"),
            L("**Aurora Global Database**: one primary Region plus read-only secondary Regions using storage-level replication with typically **under 1 second** lag. In a Regional disaster, a secondary can be promoted in about a minute (low RPO and RTO). Also gives local-latency reads worldwide.",
              "**Aurora Global Database**：1 つのプライマリリージョンと読み取り専用のセカンダリリージョンで構成され、ストレージレベルのレプリケーションでラグは通常 **1 秒未満**です。リージョン障害時はセカンダリを約 1 分で昇格でき（RPO・RTO が小さい）、世界中で低レイテンシーの読み取りも実現します。",
              "**Aurora Global Database** - primary Region တစ်ခုနဲ့ read-only secondary Region တွေ၊ storage-level replication နဲ့ lag ပုံမှန် **၁ စက္ကန့်အောက်**။ Region တစ်ခုလုံး ပျက်ရင် secondary ကို တစ်မိနစ်လောက်နဲ့ promote လုပ်နိုင်တယ် (RPO/RTO နည်း)။ ကမ္ဘာအနှံ့ local latency နဲ့ read လို့ရတယ်။"),
            L("Other Aurora extras: **Backtrack** (rewind an Aurora MySQL cluster in place without restoring), fast **cloning**, and the **I/O-Optimized** storage option for I/O-heavy workloads.",
              "その他の Aurora の機能：**バックトラック**（復元せずに Aurora MySQL クラスターをその場で巻き戻す）、高速な**クローン**、I/O の多いワークロード向けの **I/O-Optimized** ストレージオプション。",
              "Aurora ရဲ့ တခြား feature - **Backtrack** (restore မလုပ်ဘဲ Aurora MySQL cluster ကို နေရာမှာတင် နောက်ပြန်ရစ်)၊ မြန်တဲ့ **cloning**၊ I/O များတဲ့ workload အတွက် **I/O-Optimized** storage option။"),
          ] },
          { type: 'callout', tone: 'memory', text: L(
            "Aurora numbers: **6 copies, 3 AZs, 15 replicas, ~30 s failover, <1 s global lag**. Compare RDS Multi-AZ: 1 standby, 60-120 s failover.",
            "Aurora の数字：**コピー 6・AZ 3・レプリカ 15・フェイルオーバー約 30 秒・グローバルラグ 1 秒未満**。RDS Multi-AZ はスタンバイ 1 台、フェイルオーバー 60〜120 秒と比較して覚えましょう。",
            "Aurora ဂဏန်းတွေ - **copy ၆၊ AZ ၃၊ replica ၁၅၊ failover ~၃၀ စက္ကန့်၊ global lag ၁ စက္ကန့်အောက်**။ RDS Multi-AZ နဲ့ ယှဉ်ပါ - standby ၁ ခု၊ failover စက္ကန့် ၆၀-၁၂၀။"
          ) },
          { type: 'callout', tone: 'exam', text: L(
            "'Lambda functions open too many database connections' -> **RDS Proxy**. 'Relational DB with the highest availability and up to 15 low-lag replicas' -> **Aurora**. 'Global relational app needs sub-second cross-Region replication and fast Regional DR' -> **Aurora Global Database**. 'Unpredictable relational workload, avoid capacity planning' -> **Aurora Serverless v2**.",
            "「Lambda 関数がデータベース接続を開きすぎる」→ **RDS Proxy**。「最も高い可用性と、ラグの小さい最大 15 台のレプリカを持つリレーショナル DB」→ **Aurora**。「グローバルなリレーショナルアプリで 1 秒未満のクロスリージョンレプリケーションと迅速なリージョン DR が必要」→ **Aurora Global Database**。「予測できないリレーショナルワークロードで容量計画を避けたい」→ **Aurora Serverless v2**。",
            "'Lambda function တွေက database connection အများကြီး ဖွင့်နေတယ်' -> **RDS Proxy**။ 'Availability အမြင့်ဆုံးနဲ့ lag နည်းတဲ့ replica ၁၅ ခုအထိ ရှိတဲ့ relational DB' -> **Aurora**။ 'Global relational app မှာ ၁ စက္ကန့်အောက် cross-Region replication နဲ့ Region DR မြန်မြန်လို' -> **Aurora Global Database**။ 'ကြိုမခန့်မှန်းနိုင်တဲ့ relational workload၊ capacity planning မလုပ်ချင်' -> **Aurora Serverless v2**။"
          ) },
        ],
      },
      {
        id: "dynamodb-core",
        title: L("DynamoDB: keys, capacity and indexes", "DynamoDB：キー、キャパシティ、インデックス", "DynamoDB - key၊ capacity နဲ့ index"),
        blocks: [
          { type: 'p', text: L(
            "**Amazon DynamoDB** is a serverless, fully managed **key-value and document** NoSQL database. There are no servers or engine versions to manage; data is automatically replicated across **3 AZs**, and it delivers single-digit millisecond latency at any scale. A table holds **items** (rows, each up to **400 KB**) made of attributes, and items in the same table can have different attributes. Think of it as a giant, super-fast dictionary: you must know the key to look things up efficiently.",
            "**Amazon DynamoDB** はサーバーレスでフルマネージドな**キーバリュー型・ドキュメント型**の NoSQL データベースです。管理するサーバーやエンジンのバージョンはなく、データは自動的に **3 つの AZ** に複製され、どんな規模でも 1 桁ミリ秒のレイテンシーを提供します。テーブルは属性で構成される**項目（アイテム）**（行に相当、各最大 **400 KB**）を持ち、同じテーブル内でも項目ごとに属性が異なっていて構いません。巨大で超高速な辞書のようなもので、効率よく検索するにはキーを知っている必要があります。",
            "**Amazon DynamoDB** က serverless၊ fully managed **key-value နဲ့ document** NoSQL database ပါ။ Manage လုပ်ရမယ့် server၊ engine version မရှိဘူး၊ data ကို **AZ ၃ ခု**မှာ အလိုအလျောက် replicate လုပ်ပြီး scale ဘယ်လောက်ပဲဖြစ်ဖြစ် single-digit millisecond latency ပေးတယ်။ Table ထဲမှာ attribute တွေနဲ့ဖွဲ့ထားတဲ့ **item** (row တစ်ခုချင်း အများဆုံး **400 KB**) တွေရှိပြီး table တစ်ခုတည်းထဲမှာ item တစ်ခုနဲ့တစ်ခု attribute မတူလည်း ရတယ်။ အကြီးကြီး၊ အရမ်းမြန်တဲ့ dictionary လိုပဲ - ထိထိရောက်ရောက်ရှာဖို့ key ကို သိရမယ်။"
          ) },
          { type: 'list', items: [
            L("**Partition key** (required): hashed to decide which partition stores the item. Choose a high-cardinality value such as `userId` so traffic spreads evenly; a low-cardinality key like `country` creates **hot partitions**.",
              "**パーティションキー**（必須）：ハッシュ化され、項目を保存するパーティションを決めます。トラフィックが均等に分散するよう `userId` のようなカーディナリティの高い値を選びます。`country` のような値の種類が少ないキーは**ホットパーティション**の原因になります。",
              "**Partition key** (မဖြစ်မနေ) - hash လုပ်ပြီး item ကို ဘယ် partition မှာ သိမ်းမလဲ ဆုံးဖြတ်တယ်။ Traffic ညီညီဖြန့်အောင် `userId` လို တန်ဖိုးမျိုးစုံရှိတဲ့ key ကို ရွေးပါ၊ `country` လို တန်ဖိုးနည်းတဲ့ key က **hot partition** ဖြစ်စေတယ်။"),
            L("**Sort key** (optional): together with the partition key forms a composite primary key, and items with the same partition key are stored sorted by it. This enables range queries such as 'orders of user U1 between two dates'.",
              "**ソートキー**（任意）：パーティションキーと組み合わせて複合プライマリキーになり、同じパーティションキーの項目はソートキー順に保存されます。「ユーザー U1 の 2 つの日付間の注文」のような範囲クエリが可能になります。",
              "**Sort key** (မထည့်လည်းရ) - partition key နဲ့ပေါင်းပြီး composite primary key ဖြစ်တယ်၊ partition key တူတဲ့ item တွေကို sort key အလိုက် စီပြီး သိမ်းတယ်။ 'User U1 ရဲ့ ရက်စွဲနှစ်ခုကြား order တွေ' လို range query လုပ်လို့ရတယ်။"),
            L("**Query** uses the key and is efficient; **Scan** reads the whole table and is slow and expensive. Design keys around your access patterns first.",
              "**Query** はキーを使うため効率的で、**Scan** はテーブル全体を読むため遅くコストもかかります。まずアクセスパターンに合わせてキーを設計しましょう。",
              "**Query** က key ကိုသုံးလို့ ထိရောက်တယ်၊ **Scan** က table တစ်ခုလုံးကို ဖတ်လို့ နှေးပြီး ဈေးကြီးတယ်။ Access pattern ကို အရင်စဉ်းစားပြီး key ကို design လုပ်ပါ။"),
            L("**On-demand** capacity: pay per request, no planning, scales instantly; ideal for new or unpredictable workloads. **Provisioned** capacity: you set read/write capacity units (RCU/WCU), optionally with auto scaling; cheaper for steady, predictable traffic and can use reserved capacity.",
              "**オンデマンド**キャパシティ：リクエストごとの課金で計画不要、即座にスケールし、新規や予測できないワークロードに最適です。**プロビジョンド**キャパシティ：読み取り／書き込みキャパシティユニット（RCU/WCU）を指定し、必要に応じて自動スケーリングを併用します。安定して予測可能なトラフィックではより安く、リザーブドキャパシティも使えます。",
              "**On-demand** capacity - request အလိုက်ပေး၊ planning မလို၊ ချက်ချင်း scale၊ workload အသစ် ဒါမှမဟုတ် ကြိုမခန့်မှန်းနိုင်တာအတွက် အကောင်းဆုံး။ **Provisioned** capacity - read/write capacity unit (RCU/WCU) ကို ကိုယ်သတ်မှတ်၊ auto scaling တွဲလို့ရ၊ တည်ငြိမ်ပြီး ခန့်မှန်းလို့ရတဲ့ traffic အတွက် ပိုသက်သာပြီး reserved capacity လည်း သုံးလို့ရတယ်။"),
          ] },
          { type: 'table',
            head: [L("Aspect", "項目", "အချက်"), L("Global Secondary Index (GSI)", "グローバルセカンダリインデックス（GSI）", "Global Secondary Index (GSI)"), L("Local Secondary Index (LSI)", "ローカルセカンダリインデックス（LSI）", "Local Secondary Index (LSI)")],
            rows: [
              [L("Keys", "キー", "Key"), L("Different partition key and optional sort key", "別のパーティションキーと任意のソートキー", "Partition key မတူ၊ sort key ထည့်လည်းရ"), L("Same partition key, different sort key", "同じパーティションキー、別のソートキー", "Partition key တူ၊ sort key မတူ")],
              [L("When to create", "作成タイミング", "ဘယ်အချိန် ဖန်တီး"), L("Any time", "いつでも", "အချိန်မရွေး"), L("Only at table creation", "テーブル作成時のみ", "Table ဖန်တီးချိန်မှာပဲ")],
              [L("Consistency", "整合性", "Consistency"), L("Eventually consistent reads only", "結果整合性の読み取りのみ", "Eventually consistent read ပဲ"), L("Strong or eventual", "強い整合性または結果整合性", "Strong သို့ eventual")],
              [L("Capacity", "キャパシティ", "Capacity"), L("Its own throughput", "独自のスループット", "ကိုယ်ပိုင် throughput"), L("Shares the table's", "テーブルと共有", "Table နဲ့ မျှသုံး")],
              [L("Example", "例", "ဥပမာ"), L("Find orders by `status` across all users", "全ユーザーの注文を `status` で検索", "User အားလုံးရဲ့ order ကို `status` နဲ့ရှာ"), L("A user's orders sorted by `total` instead of date", "ユーザーの注文を日付ではなく `total` 順で取得", "User ရဲ့ order ကို ရက်စွဲအစား `total` နဲ့စီ")],
            ] },
          { type: 'code', lang: 'bash', code:
`# Table: Orders  PK = userId, SK = orderDate, on-demand billing
aws dynamodb create-table \\
  --table-name Orders \\
  --attribute-definitions AttributeName=userId,AttributeType=S \\
                          AttributeName=orderDate,AttributeType=S \\
  --key-schema AttributeName=userId,KeyType=HASH \\
               AttributeName=orderDate,KeyType=RANGE \\
  --billing-mode PAY_PER_REQUEST

aws dynamodb put-item --table-name Orders --item '{
  "userId":   {"S": "U1"},
  "orderDate":{"S": "2026-10-01"},
  "total":    {"N": "4800"},
  "status":   {"S": "SHIPPED"}
}'

# All October orders for user U1 (uses the keys, no scan)
aws dynamodb query --table-name Orders \\
  --key-condition-expression "userId = :u AND begins_with(orderDate, :m)" \\
  --expression-attribute-values '{":u":{"S":"U1"},":m":{"S":"2026-10"}}'`,
            caption: L("HASH = partition key, RANGE = sort key. PAY_PER_REQUEST = on-demand mode.", "HASH はパーティションキー、RANGE はソートキー、PAY_PER_REQUEST はオンデマンドモードです。", "HASH = partition key၊ RANGE = sort key၊ PAY_PER_REQUEST = on-demand mode။") },
          { type: 'callout', tone: 'memory', text: L(
            "**LSI = Locked at creation, Local (same partition key).** GSI = Go anywhere, anytime. Capacity math: 1 WCU = one 1 KB write/s; 1 RCU = one strongly consistent 4 KB read/s (or two eventually consistent).",
            "**LSI ＝ 作成時に固定（Locked）、同じパーティションキー（Local）。** GSI はいつでもどこでも作成可能。キャパシティの計算：1 WCU ＝ 1 KB の書き込みを毎秒 1 回、1 RCU ＝ 4 KB の強い整合性の読み取りを毎秒 1 回（結果整合性なら 2 回）。",
            "**LSI = ဖန်တီးချိန်မှာ Lock၊ Local (partition key တူ)။** GSI = ဘယ်အချိန်မဆို ဖန်တီးလို့ရ။ Capacity တွက်နည်း - 1 WCU = တစ်စက္ကန့် 1 KB write တစ်ခါ၊ 1 RCU = တစ်စက္ကန့် 4 KB strongly consistent read တစ်ခါ (eventually consistent ဆို နှစ်ခါ)။"
          ) },
        ],
      },
      {
        id: "dynamodb-features-and-caching",
        title: L("DynamoDB features, DAX and ElastiCache", "DynamoDB の機能、DAX、ElastiCache", "DynamoDB feature၊ DAX နဲ့ ElastiCache"),
        blocks: [
          { type: 'list', items: [
            L("**DynamoDB Streams**: an ordered log of item changes (insert/modify/delete) kept for 24 hours. Trigger **Lambda** to send an email when an order is created, or update a search index.",
              "**DynamoDB Streams**：項目の変更（追加・更新・削除）を順序付きで記録し、24 時間保持します。注文作成時にメールを送ったり検索インデックスを更新したりするために **Lambda** を起動できます。",
              "**DynamoDB Streams** - item ပြောင်းလဲမှု (insert/modify/delete) တွေကို အစဉ်လိုက်မှတ်ပြီး ၂၄ နာရီ သိမ်းထားတယ်။ Order အသစ်ဝင်ရင် email ပို့ဖို့၊ search index update လုပ်ဖို့ **Lambda** ကို trigger လုပ်လို့ရတယ်။"),
            L("**Global tables**: multi-Region, **multi-active** replication; every Region can read and write, with typical replication in about a second. Use for global apps and Regional resilience.",
              "**グローバルテーブル**：複数リージョンで**マルチアクティブ**なレプリケーションを行い、どのリージョンでも読み書きでき、通常約 1 秒で複製されます。グローバルアプリやリージョン障害への耐性に使います。",
              "**Global tables** - multi-Region၊ **multi-active** replication၊ Region တိုင်းက read/write လုပ်နိုင်ပြီး ပုံမှန် တစ်စက္ကန့်လောက်နဲ့ replicate ဖြစ်တယ်။ Global app နဲ့ Region ပျက်ရင် ခံနိုင်ရည်အတွက် သုံးတယ်။"),
            L("**TTL (Time to Live)**: store an expiry epoch timestamp in an attribute and DynamoDB deletes expired items automatically at no extra cost (typically within a few days). Perfect for sessions and temporary tokens.",
              "**TTL（Time to Live）**：属性に有効期限のエポック秒を保存すると、DynamoDB が期限切れの項目を追加料金なしで自動削除します（通常は数日以内）。セッションや一時トークンに最適です。",
              "**TTL (Time to Live)** - attribute တစ်ခုမှာ သက်တမ်းကုန်ချိန် epoch timestamp ထည့်ထားရင် DynamoDB က သက်တမ်းကုန်တဲ့ item တွေကို အပိုငွေမကုန်ဘဲ အလိုအလျောက် ဖျက်ပေးတယ် (ပုံမှန် ရက်အနည်းငယ်အတွင်း)။ Session နဲ့ ယာယီ token အတွက် ကောင်းတယ်။"),
            L("**Backups**: **PITR** restores to any second in the last 35 days (configurable); **on-demand backups** are kept until deleted. Restores create a new table. You can also export a table to S3 for analytics.",
              "**バックアップ**：**PITR** は直近 35 日間（設定可能）の任意の秒に復元でき、**オンデマンドバックアップ**は削除するまで保持されます。復元すると新しいテーブルが作られます。分析用にテーブルを S3 へエクスポートすることもできます。",
              "**Backup** - **PITR** က နောက်ဆုံး ၃၅ ရက် (ပြင်လို့ရ) အတွင်း ဘယ်စက္ကန့်ကိုမဆို restore လုပ်နိုင်တယ်၊ **on-demand backup** က မဖျက်မချင်း ကျန်တယ်။ Restore လုပ်ရင် table အသစ် ဖြစ်တယ်။ Analytics အတွက် table ကို S3 ကို export လည်း လုပ်လို့ရတယ်။"),
            L("**DAX (DynamoDB Accelerator)**: an in-memory cache built for DynamoDB that cuts read latency from milliseconds to **microseconds** with almost no code change (DynamoDB-compatible API). For read-heavy, repeated reads; it does not help write-heavy workloads.",
              "**DAX（DynamoDB Accelerator）**：DynamoDB 専用のインメモリキャッシュで、ほぼコード変更なしに（DynamoDB 互換 API）読み取りレイテンシーをミリ秒から**マイクロ秒**に短縮します。読み取りが多く同じデータを繰り返し読む場合向けで、書き込み中心のワークロードには効果がありません。",
              "**DAX (DynamoDB Accelerator)** - DynamoDB အတွက် သီးသန့်လုပ်ထားတဲ့ in-memory cache၊ code မပြင်သလောက်နဲ့ (DynamoDB-compatible API) read latency ကို millisecond ကနေ **microsecond** ထိ လျှော့ပေးတယ်။ Read များပြီး ထပ်ခါထပ်ခါဖတ်တဲ့ workload အတွက်ပါ၊ write များတဲ့ workload ကို မကူညီဘူး။"),
          ] },
          { type: 'p', text: L(
            "**Amazon ElastiCache** is a managed in-memory cache in front of any database (RDS, Aurora, or even an API). Engines: **Valkey** and **Redis OSS** (rich data structures such as sorted sets for leaderboards, replication with Multi-AZ automatic failover, backups/persistence, pub/sub) and **Memcached** (simple, multi-threaded key-value cache, sharding only, no replication or persistence). A **Serverless** option removes node sizing. Caching works like keeping the most-asked answers on a sticky note on your desk instead of walking to the library each time. For a **durable** Redis/Valkey-compatible primary database (not just a cache), AWS offers **MemoryDB**.",
            "**Amazon ElastiCache** は任意のデータベース（RDS、Aurora、さらには API）の前に置くマネージドなインメモリキャッシュです。エンジンは **Valkey** と **Redis OSS**（ランキング用のソート済みセットなどの豊富なデータ構造、Multi-AZ 自動フェイルオーバー付きのレプリケーション、バックアップ／永続化、Pub/Sub）と **Memcached**（シンプルでマルチスレッドのキーバリューキャッシュ、シャーディングのみでレプリケーションや永続化なし）です。**Serverless** オプションを使えばノードのサイズ選定が不要です。キャッシュは、よく聞かれる答えを毎回図書館に行かずに机の付箋にメモしておくようなものです。キャッシュではなく**耐久性のある** Redis/Valkey 互換のプライマリデータベースが必要なら **MemoryDB** があります。",
            "**Amazon ElastiCache** က ဘယ် database (RDS၊ Aurora၊ API တောင်) ရှေ့မှာမဆို ထားလို့ရတဲ့ managed in-memory cache ပါ။ Engine တွေက **Valkey** နဲ့ **Redis OSS** (leaderboard အတွက် sorted set လို data structure စုံ၊ Multi-AZ automatic failover ပါတဲ့ replication၊ backup/persistence၊ pub/sub) နဲ့ **Memcached** (ရိုးရှင်း၊ multi-threaded key-value cache၊ sharding ပဲရ၊ replication/persistence မရှိ)။ **Serverless** option သုံးရင် node size ရွေးစရာမလိုဘူး။ Caching ဆိုတာ အမေးများတဲ့ အဖြေတွေကို စာကြည့်တိုက် ခဏခဏမသွားဘဲ စားပွဲပေါ်က sticky note မှာ ရေးထားသလိုပါ။ Cache သက်သက်မဟုတ်ဘဲ **durable** ဖြစ်တဲ့ Redis/Valkey-compatible primary database လိုရင် **MemoryDB** ရှိတယ်။"
          ) },
          { type: 'diagram', text:
`  LAZY LOADING (cache-aside)        WRITE-THROUGH
  --------------------------        -------------
  app --1 GET--> cache              app --1 write--> DB
   |   hit? return                   |
   |   miss:                         +--2 write--> cache
   +--2 SELECT--> DB
   +--3 SET (with TTL)--> cache     reads: always from cache
  + only requested data cached      + cache never stale
  - first read slow, may be stale   - extra write cost, unused data`,
            caption: L("Most real systems combine both and add a TTL to every key.", "実際のシステムの多くは両方を組み合わせ、すべてのキーに TTL を設定します。", "လက်တွေ့ system အများစုက နှစ်ခုလုံးကို ပေါင်းသုံးပြီး key တိုင်းမှာ TTL ထည့်တယ်။") },
          { type: 'table',
            head: [L("Aspect", "項目", "အချက်"), L("Valkey / Redis OSS", "Valkey / Redis OSS", "Valkey / Redis OSS"), L("Memcached", "Memcached", "Memcached")],
            rows: [
              [L("Data types", "データ型", "Data type"), L("Strings, hashes, lists, sets, sorted sets", "文字列・ハッシュ・リスト・セット・ソート済みセット", "String၊ hash၊ list၊ set၊ sorted set"), L("Simple strings / blobs", "単純な文字列 / バイナリ", "ရိုးရိုး string / blob")],
              [L("HA / replication", "HA / レプリケーション", "HA / replication"), L("Yes, Multi-AZ auto failover", "あり、Multi-AZ 自動フェイルオーバー", "ရှိ၊ Multi-AZ auto failover"), L("No", "なし", "မရှိ")],
              [L("Backup / persistence", "バックアップ / 永続化", "Backup / persistence"), L("Yes", "あり", "ရှိ"), L("No", "なし", "မရှိ")],
              [L("Typical use", "代表的な用途", "အသုံးများတဲ့နေရာ"), L("Sessions, leaderboards, queues, caching", "セッション・ランキング・キュー・キャッシュ", "Session၊ leaderboard၊ queue၊ caching"), L("Simple, multi-threaded object cache", "シンプルでマルチスレッドのオブジェクトキャッシュ", "ရိုးရှင်းတဲ့ multi-threaded object cache")],
            ] },
          { type: 'callout', tone: 'exam', text: L(
            "'Microsecond reads for a DynamoDB table with minimal code changes' -> **DAX** (not ElastiCache). 'Reduce read load on RDS / cache query results' -> **ElastiCache**. 'Need HA, persistence, sorted sets or leaderboards' -> **Valkey/Redis OSS**, not Memcached. 'Delete old sessions automatically from DynamoDB' -> **TTL**. 'React to every new item' -> **Streams + Lambda**.",
            "「最小限のコード変更で DynamoDB テーブルをマイクロ秒で読み取りたい」→ **DAX**（ElastiCache ではない）。「RDS の読み取り負荷を減らす / クエリ結果をキャッシュする」→ **ElastiCache**。「HA・永続化・ソート済みセット・ランキングが必要」→ Memcached ではなく **Valkey/Redis OSS**。「DynamoDB から古いセッションを自動削除」→ **TTL**。「新しい項目ごとに処理する」→ **Streams ＋ Lambda**。",
            "'Code နည်းနည်းပဲပြင်ပြီး DynamoDB table ကို microsecond read လို' -> **DAX** (ElastiCache မဟုတ်)။ 'RDS ရဲ့ read load လျှော့ / query result ကို cache' -> **ElastiCache**။ 'HA၊ persistence၊ sorted set၊ leaderboard လို' -> Memcached မဟုတ်ဘဲ **Valkey/Redis OSS**။ 'DynamoDB ထဲက session ဟောင်းတွေ အလိုအလျောက်ဖျက်' -> **TTL**။ 'Item အသစ်တိုင်းကို တုံ့ပြန်' -> **Streams + Lambda**။"
          ) },
        ],
      },
      {
        id: "purpose-built-and-analytics",
        title: L("Purpose-built databases and analytics", "目的別データベースと分析サービス", "Purpose-built database နဲ့ analytics"),
        blocks: [
          { type: 'list', items: [
            L("**Amazon DocumentDB (with MongoDB compatibility)**: managed JSON document database; storage design similar to Aurora. Choose it to move a MongoDB app without rewriting.",
              "**Amazon DocumentDB（MongoDB 互換）**：マネージドな JSON ドキュメントデータベースで、ストレージ設計は Aurora に似ています。MongoDB アプリを書き換えずに移行したいときに選びます。",
              "**Amazon DocumentDB (MongoDB compatible)** - managed JSON document database၊ storage design က Aurora နဲ့ ဆင်တယ်။ MongoDB app ကို ပြန်မရေးဘဲ ရွှေ့ချင်ရင် ရွေးပါ။"),
            L("**Amazon Neptune**: managed **graph** database (Gremlin, openCypher, SPARQL). Best when relationships are the data: 'friends of friends who bought X', fraud rings, knowledge graphs.",
              "**Amazon Neptune**：マネージドな**グラフ**データベース（Gremlin、openCypher、SPARQL）。「X を買った友達の友達」、不正の連鎖、ナレッジグラフなど、関係性そのものがデータである場合に最適です。",
              "**Amazon Neptune** - managed **graph** database (Gremlin၊ openCypher၊ SPARQL)။ 'X ကိုဝယ်ခဲ့တဲ့ သူငယ်ချင်းရဲ့ သူငယ်ချင်း'၊ fraud ring၊ knowledge graph လို relationship ကိုယ်တိုင်က data ဖြစ်တဲ့အခါ အကောင်းဆုံး။"),
            L("**Amazon Keyspaces (for Apache Cassandra)**: serverless, Cassandra-compatible wide-column database using **CQL**.",
              "**Amazon Keyspaces（Apache Cassandra 向け）**：**CQL** を使うサーバーレスで Cassandra 互換のワイドカラムデータベースです。",
              "**Amazon Keyspaces (Apache Cassandra)** - **CQL** သုံးတဲ့ serverless၊ Cassandra-compatible wide-column database။"),
            L("**Amazon Timestream**: time-series database for IoT and operational metrics. AWS now offers **Timestream for InfluxDB** for new workloads, while exam questions simply map 'time-series' to Timestream.",
              "**Amazon Timestream**：IoT や運用メトリクス向けの時系列データベースです。現在 AWS は新規ワークロード向けに **Timestream for InfluxDB** を提供しており、試験では単に「時系列」を Timestream に対応付ければ十分です。",
              "**Amazon Timestream** - IoT နဲ့ operational metric အတွက် time-series database။ AWS က workload အသစ်တွေအတွက် **Timestream for InfluxDB** ကို ပေးနေပြီး exam မှာတော့ 'time-series' ဆိုရင် Timestream လို့ ချိတ်ရုံပါပဲ။"),
            L("**Amazon QLDB** (ledger database) has been **discontinued** by AWS; for immutable audit trails, AWS suggests options such as Aurora PostgreSQL with audit logging.",
              "**Amazon QLDB**（台帳データベース）は AWS により**提供終了**しました。改ざんできない監査証跡には、監査ログを有効にした Aurora PostgreSQL などが推奨されています。",
              "**Amazon QLDB** (ledger database) ကို AWS က **ရပ်ဆိုင်းလိုက်ပြီ**။ ပြင်လို့မရတဲ့ audit trail အတွက် audit logging ဖွင့်ထားတဲ့ Aurora PostgreSQL လို option တွေကို AWS က အကြံပြုတယ်။"),
          ] },
          { type: 'p', text: L(
            "**OLTP vs OLAP**: your app's PostgreSQL handles many small row-level transactions (OLTP). When the business asks 'total sales by region per month for 5 years', scanning billions of rows in a row store is slow. **Amazon Redshift** is a columnar, massively parallel (MPP) **data warehouse** built for these OLAP queries. It reads only the needed columns, compresses them heavily, and is available provisioned or as **Redshift Serverless**. **Redshift Spectrum** queries data directly in S3. Do not use Redshift as the backend for a web app's transactions.",
            "**OLTP と OLAP**：アプリの PostgreSQL は多数の小さな行単位のトランザクション（OLTP）を処理します。業務部門から「5 年分の月別・地域別売上合計」を求められると、行指向ストアで数十億行をスキャンするのは遅くなります。**Amazon Redshift** はこうした OLAP クエリ向けに作られた列指向・超並列（MPP）の**データウェアハウス**です。必要な列だけを読み、強く圧縮し、プロビジョンド型と **Redshift Serverless** があります。**Redshift Spectrum** を使えば S3 上のデータを直接クエリできます。Web アプリのトランザクションのバックエンドとして Redshift を使ってはいけません。",
            "**OLTP vs OLAP** - ခင်ဗျား app ရဲ့ PostgreSQL က row-level transaction သေးသေးလေး အများကြီးကို ကိုင်တွယ်တယ် (OLTP)။ Business ဘက်က '၅ နှစ်စာ region အလိုက် လစဉ် sales စုစုပေါင်း' မေးလာရင် row store မှာ row ဘီလီယံချီ scan လုပ်ရတာ နှေးတယ်။ **Amazon Redshift** က ဒီလို OLAP query အတွက် လုပ်ထားတဲ့ columnar၊ massively parallel (MPP) **data warehouse** ပါ။ လိုတဲ့ column ကိုပဲဖတ်၊ အများကြီး compress လုပ်ပြီး provisioned နဲ့ **Redshift Serverless** နှစ်မျိုးရှိတယ်။ **Redshift Spectrum** နဲ့ S3 ထဲက data ကို တိုက်ရိုက် query လုပ်လို့ရတယ်။ Web app transaction ရဲ့ backend အဖြစ် Redshift ကို မသုံးပါနဲ့။"
          ) },
          { type: 'p', text: L(
            "For a lighter data lake approach: **Amazon Athena** runs serverless SQL directly on files in S3 (CSV, JSON, Parquet) and you pay per data scanned, so storing data as compressed, partitioned Parquet saves money. **AWS Glue** provides serverless **ETL** jobs and the **Glue Data Catalog**, whose **crawlers** discover schemas so Athena and Redshift Spectrum know the table structure.",
            "より軽量なデータレイクのアプローチとして、**Amazon Athena** は S3 上のファイル（CSV、JSON、Parquet）にサーバーレスで直接 SQL を実行し、スキャンしたデータ量に応じて課金されるため、圧縮・パーティション化した Parquet で保存するとコストを削減できます。**AWS Glue** はサーバーレスの **ETL** ジョブと **Glue Data Catalog** を提供し、**クローラー**がスキーマを検出することで Athena や Redshift Spectrum がテーブル構造を把握できます。",
            "ပိုပေါ့ပါးတဲ့ data lake နည်းလမ်းအတွက် - **Amazon Athena** က S3 ထဲက file (CSV၊ JSON၊ Parquet) တွေပေါ် serverless SQL ကို တိုက်ရိုက် run ပြီး scan လုပ်တဲ့ data ပမာဏအလိုက် ငွေပေးရလို့ compress လုပ်၊ partition ခွဲထားတဲ့ Parquet နဲ့သိမ်းရင် ပိုက်ဆံသက်သာတယ်။ **AWS Glue** က serverless **ETL** job နဲ့ **Glue Data Catalog** ကို ပေးပြီး **crawler** တွေက schema ကို ရှာဖွေပေးလို့ Athena နဲ့ Redshift Spectrum က table structure ကို သိတယ်။"
          ) },
          { type: 'callout', tone: 'exam', text: L(
            "'Ad hoc SQL on logs in S3, no infrastructure' -> **Athena**. 'Complex BI queries over petabytes, columnar' -> **Redshift**. 'Discover schema / ETL' -> **Glue**. 'Graph relationships' -> **Neptune**. 'MongoDB-compatible' -> **DocumentDB**. 'Cassandra / CQL' -> **Keyspaces**.",
            "「S3 のログにインフラなしでアドホック SQL」→ **Athena**。「ペタバイト規模の複雑な BI クエリ、列指向」→ **Redshift**。「スキーマ検出 / ETL」→ **Glue**。「グラフの関係性」→ **Neptune**。「MongoDB 互換」→ **DocumentDB**。「Cassandra / CQL」→ **Keyspaces**。",
            "'S3 ထဲက log တွေကို infrastructure မထားဘဲ ad hoc SQL' -> **Athena**။ 'Petabyte ချီ BI query ရှုပ်ရှုပ်၊ columnar' -> **Redshift**။ 'Schema ရှာ / ETL' -> **Glue**။ 'Graph relationship' -> **Neptune**။ 'MongoDB-compatible' -> **DocumentDB**။ 'Cassandra / CQL' -> **Keyspaces**။"
          ) },
        ],
      },
      {
        id: "migration-dms-lab",
        title: L("Migrating with DMS, plus a hands-on lab", "DMS による移行とハンズオンラボ", "DMS နဲ့ migration လုပ်ခြင်းနဲ့ hands-on lab"),
        blocks: [
          { type: 'p', text: L(
            "**AWS Database Migration Service (DMS)** moves data from a source to a target database while the **source stays online**. It runs on a replication instance (or DMS Serverless), performs a **full load**, then keeps the target in sync with **change data capture (CDC)** until you cut over. **Homogeneous** migrations (PostgreSQL -> RDS for PostgreSQL) need no schema conversion. **Heterogeneous** migrations (Oracle -> Aurora PostgreSQL, SQL Server -> Aurora MySQL) first convert the schema, stored procedures and code with **DMS Schema Conversion** or the **AWS Schema Conversion Tool (SCT)**, then use DMS to move the data.",
            "**AWS Database Migration Service（DMS）**は、**ソースをオンラインのまま**ソースからターゲットのデータベースへデータを移行します。レプリケーションインスタンス（または DMS Serverless）上で動き、**フルロード**を行った後、切り替えるまで**変更データキャプチャ（CDC）**でターゲットを同期し続けます。**同種間**の移行（PostgreSQL → RDS for PostgreSQL）ではスキーマ変換は不要です。**異種間**の移行（Oracle → Aurora PostgreSQL、SQL Server → Aurora MySQL）では、まず **DMS Schema Conversion** または **AWS Schema Conversion Tool（SCT）**でスキーマ・ストアドプロシージャ・コードを変換し、その後 DMS でデータを移します。",
            "**AWS Database Migration Service (DMS)** က **source ကို online ဆက်ထားရင်း** source database ကနေ target database ကို data ရွှေ့ပေးတယ်။ Replication instance (သို့) DMS Serverless ပေါ်မှာ run ပြီး **full load** လုပ်၊ ပြီးရင် cut over မလုပ်မချင်း **change data capture (CDC)** နဲ့ target ကို sync ထားတယ်။ **Homogeneous** migration (PostgreSQL -> RDS for PostgreSQL) မှာ schema conversion မလိုဘူး။ **Heterogeneous** migration (Oracle -> Aurora PostgreSQL၊ SQL Server -> Aurora MySQL) မှာတော့ schema၊ stored procedure၊ code ကို **DMS Schema Conversion** ဒါမှမဟုတ် **AWS Schema Conversion Tool (SCT)** နဲ့ အရင်ပြောင်းပြီးမှ DMS နဲ့ data ရွှေ့တယ်။"
          ) },
          { type: 'callout', tone: 'memory', text: L(
            "**SCT converts the schema, DMS moves the data.** Same engine -> DMS only. Different engine -> SCT/Schema Conversion first, then DMS. 'Minimal downtime' -> DMS with CDC.",
            "**SCT はスキーマを変換し、DMS はデータを移す。** 同じエンジン → DMS のみ。異なるエンジン → 先に SCT／Schema Conversion、次に DMS。「ダウンタイム最小」→ CDC 付きの DMS。",
            "**SCT က schema ကိုပြောင်း၊ DMS က data ကိုရွှေ့။** Engine တူ -> DMS ပဲ။ Engine မတူ -> SCT/Schema Conversion အရင်၊ ပြီးမှ DMS။ 'Downtime အနည်းဆုံး' -> CDC ပါတဲ့ DMS။"
          ) },
          { type: 'steps', items: [
            L("In the RDS console, create a **DB subnet group** with two private subnets in different AZs, and a security group allowing port 5432 only from your EC2 app's security group.",
              "RDS コンソールで、異なる AZ にある 2 つのプライベートサブネットを含む **DB サブネットグループ**と、EC2 アプリのセキュリティグループからのポート 5432 のみを許可するセキュリティグループを作成します。",
              "RDS console မှာ AZ မတူတဲ့ private subnet နှစ်ခုပါတဲ့ **DB subnet group** နဲ့ EC2 app ရဲ့ security group ကပဲ port 5432 ဝင်ခွင့်ပေးတဲ့ security group ကို ဖန်တီးပါ။"),
            L("Create an RDS for PostgreSQL instance (same major version as your Docker image) with **encryption enabled**, **Multi-AZ**, 7-day backup retention and Secrets Manager-managed password (see the CLI example above).",
              "Docker イメージと同じメジャーバージョンで、**暗号化有効**、**Multi-AZ**、7 日間のバックアップ保持、Secrets Manager 管理のパスワードを設定した RDS for PostgreSQL インスタンスを作成します（上記の CLI 例を参照）。",
              "Docker image နဲ့ major version တူတဲ့ RDS for PostgreSQL instance ကို **encryption ဖွင့်**၊ **Multi-AZ**၊ backup retention ၇ ရက်၊ Secrets Manager က manage လုပ်တဲ့ password နဲ့ ဖန်တီးပါ (အပေါ်က CLI ဥပမာ ကြည့်ပါ)။"),
            L("From the EC2 host, dump the container database with `pg_dump` and restore it into RDS with `pg_restore` (for larger or always-on databases, use DMS full load + CDC instead).",
              "EC2 ホストからコンテナのデータベースを `pg_dump` でダンプし、`pg_restore` で RDS に復元します（大規模または常時稼働の DB では代わりに DMS のフルロード＋CDC を使います）。",
              "EC2 host ကနေ container database ကို `pg_dump` နဲ့ dump လုပ်ပြီး `pg_restore` နဲ့ RDS ထဲ restore လုပ်ပါ (database ကြီးရင် ဒါမှမဟုတ် အမြဲ run နေရရင် DMS full load + CDC ကို သုံးပါ)။"),
            L("Change the app's connection string to the RDS endpoint, test, then stop the old container.",
              "アプリの接続文字列を RDS のエンドポイントに変更してテストし、その後古いコンテナを停止します。",
              "App ရဲ့ connection string ကို RDS endpoint ကို ပြောင်းပြီး test လုပ်၊ ပြီးရင် container ဟောင်းကို ရပ်ပါ။"),
            L("Run `aws rds reboot-db-instance --db-instance-identifier shop-db --force-failover` and watch the app reconnect to the same endpoint after the Multi-AZ failover.",
              "`aws rds reboot-db-instance --db-instance-identifier shop-db --force-failover` を実行し、Multi-AZ のフェイルオーバー後にアプリが同じエンドポイントに再接続する様子を確認します。",
              "`aws rds reboot-db-instance --db-instance-identifier shop-db --force-failover` ကို run ပြီး Multi-AZ failover ပြီးနောက် app က endpoint တူတူကို ပြန် connect လုပ်တာ ကြည့်ပါ။"),
            L("Create a read replica, point a reporting query at its endpoint, then test PITR by restoring to a time 10 minutes ago and confirm a **new** instance appears. Delete the lab resources afterwards to avoid charges.",
              "リードレプリカを作成してレポート用クエリをそのエンドポイントに向け、続いて 10 分前の時点への PITR を試し、**新しい**インスタンスが作成されることを確認します。最後に課金を避けるためラボのリソースを削除します。",
              "Read replica တစ်ခု ဖန်တီးပြီး report query ကို အဲ့ဒီ endpoint ဘက် ညွှန်ပါ၊ ပြီးရင် ၁၀ မိနစ်အရင်ကို PITR restore လုပ်ပြီး instance **အသစ်** ပေါ်လာတာ အတည်ပြုပါ။ ပြီးရင် ငွေမကုန်အောင် lab resource တွေကို ဖျက်ပါ။"),
          ] },
          { type: 'callout', tone: 'tip', text: L(
            "Quick decision flow for any exam scenario: SQL + joins? -> RDS (Aurora if it needs top availability or scale). Key lookups at huge scale? -> DynamoDB. Need microseconds? -> add DAX or ElastiCache. Analytics? -> Redshift or Athena. Moving an existing DB? -> DMS (+ SCT if engines differ).",
            "試験シナリオ用のすばやい判断フロー：SQL と JOIN が必要？→ RDS（最高の可用性や規模が必要なら Aurora）。超大規模なキー検索？→ DynamoDB。マイクロ秒が必要？→ DAX か ElastiCache を追加。分析？→ Redshift か Athena。既存 DB の移行？→ DMS（エンジンが異なれば ＋SCT）。",
            "Exam scenario အတွက် မြန်မြန်ဆုံးဖြတ်နည်း - SQL + join လို? -> RDS (availability/scale အမြင့်ဆုံးလိုရင် Aurora)။ Scale ကြီးကြီးနဲ့ key lookup? -> DynamoDB။ Microsecond လို? -> DAX သို့ ElastiCache ထည့်။ Analytics? -> Redshift သို့ Athena။ DB ဟောင်းကို ရွှေ့? -> DMS (engine မတူရင် + SCT)။"
          ) },
        ],
      },
    ],
    summary: [
      L("Pick databases by data model and access pattern: RDS/Aurora for relational OLTP, DynamoDB for key-value at scale, Redshift for OLAP, and DocumentDB, Neptune, Keyspaces or Timestream for specialised models.",
        "データモデルとアクセスパターンでデータベースを選びます。リレーショナル OLTP には RDS/Aurora、大規模なキーバリューには DynamoDB、OLAP には Redshift、特殊なモデルには DocumentDB・Neptune・Keyspaces・Timestream を使います。",
        "Database ကို data model နဲ့ access pattern အလိုက် ရွေးပါ - relational OLTP အတွက် RDS/Aurora၊ scale ကြီးတဲ့ key-value အတွက် DynamoDB၊ OLAP အတွက် Redshift၊ အထူး model တွေအတွက် DocumentDB၊ Neptune၊ Keyspaces၊ Timestream။"),
      L("Managed databases shift patching, backups and failover to AWS; you still own schema, queries, network access and encryption choices.",
        "マネージドデータベースではパッチ適用・バックアップ・フェイルオーバーが AWS の責任になりますが、スキーマ、クエリ、ネットワークアクセス、暗号化の選択は引き続き利用者の責任です。",
        "Managed database မှာ patch၊ backup၊ failover က AWS တာဝန်ဖြစ်သွားပေမဲ့ schema၊ query၊ network access၊ encryption ရွေးချယ်မှုက ကိုယ့်တာဝန်ပဲ။"),
      L("Multi-AZ = synchronous standby for automatic failover (HA); Read Replicas = asynchronous, readable copies for scaling reads and cross-Region DR.",
        "Multi-AZ は自動フェイルオーバーのための同期スタンバイ（HA）、リードレプリカは読み取りのスケールとクロスリージョン DR のための非同期で読み取り可能なコピーです。",
        "Multi-AZ = automatic failover အတွက် synchronous standby (HA)၊ Read Replica = read scale နဲ့ cross-Region DR အတွက် asynchronous၊ read လို့ရတဲ့ copy။"),
      L("RDS automated backups (1-35 days) enable PITR; snapshots last until deleted; restores create a new instance; encryption must be enabled at creation (or via encrypted snapshot copy).",
        "RDS の自動バックアップ（1〜35 日）で PITR が可能、スナップショットは削除するまで残り、復元すると新しいインスタンスが作られ、暗号化は作成時に有効化する（または暗号化したスナップショットのコピーを使う）必要があります。",
        "RDS automated backup (၁-၃၅ ရက်) က PITR ကို ဖြစ်စေတယ်၊ snapshot က မဖျက်မချင်းကျန်တယ်၊ restore က instance အသစ်ဖြစ်တယ်၊ encryption ကို ဖန်တီးချိန်မှာ ဖွင့်ရမယ် (သို့) encrypted snapshot copy နဲ့ လုပ်ရမယ်။"),
      L("RDS Proxy pools connections for Lambda-heavy apps and speeds failover; Aurora stores 6 copies across 3 AZs, supports 15 replicas, Serverless v2 and Global Database.",
        "RDS Proxy は Lambda を多用するアプリの接続をプールしフェイルオーバーを速くします。Aurora は 3 AZ に 6 つのコピーを保存し、15 台のレプリカ、Serverless v2、Global Database をサポートします。",
        "RDS Proxy က Lambda များတဲ့ app အတွက် connection ကို pool လုပ်ပြီး failover ကို မြန်စေတယ်၊ Aurora က AZ ၃ ခုမှာ copy ၆ ခုသိမ်းပြီး replica ၁၅ ခု၊ Serverless v2၊ Global Database ကို support လုပ်တယ်။"),
      L("DynamoDB: choose a high-cardinality partition key, on-demand for unpredictable traffic, GSI any time vs LSI only at creation, plus Streams, global tables, TTL and PITR.",
        "DynamoDB では、カーディナリティの高いパーティションキーを選び、予測できないトラフィックにはオンデマンドを使います。GSI はいつでも、LSI は作成時のみ作成でき、Streams・グローバルテーブル・TTL・PITR も活用します。",
        "DynamoDB - တန်ဖိုးမျိုးစုံရှိတဲ့ partition key ရွေး၊ ကြိုမခန့်မှန်းနိုင်တဲ့ traffic အတွက် on-demand၊ GSI က အချိန်မရွေး၊ LSI က ဖန်တီးချိန်မှာပဲ၊ ပြီးတော့ Streams၊ global tables၊ TTL၊ PITR။"),
      L("Use DAX for microsecond DynamoDB reads and ElastiCache (Valkey/Redis OSS for HA and rich types, Memcached for simple caching) in front of other databases, with lazy loading or write-through plus TTL.",
        "DynamoDB のマイクロ秒読み取りには DAX を、その他のデータベースの前には ElastiCache（HA と豊富なデータ型なら Valkey/Redis OSS、シンプルなキャッシュなら Memcached）を使い、遅延読み込みかライトスルーに TTL を組み合わせます。",
        "DynamoDB microsecond read အတွက် DAX၊ တခြား database ရှေ့မှာ ElastiCache (HA နဲ့ data type စုံလိုရင် Valkey/Redis OSS၊ ရိုးရိုး caching ဆို Memcached) ကိုသုံးပြီး lazy loading သို့ write-through ကို TTL နဲ့ တွဲပါ။"),
      L("Athena queries S3 with SQL, Glue catalogs and transforms data, and DMS migrates databases with minimal downtime (with SCT/Schema Conversion for different engines).",
        "Athena は S3 を SQL でクエリし、Glue はデータをカタログ化・変換し、DMS はダウンタイムを最小にしてデータベースを移行します（異なるエンジン間では SCT／Schema Conversion を併用）。",
        "Athena က S3 ကို SQL နဲ့ query လုပ်တယ်၊ Glue က data ကို catalog လုပ်ပြီး transform လုပ်တယ်၊ DMS က downtime အနည်းဆုံးနဲ့ database ကို migrate လုပ်တယ် (engine မတူရင် SCT/Schema Conversion တွဲ)။"),
    ],
  },
  questions: [
    {
      difficulty: 'EASY',
      exams: ['CLF-C02'],
      prompt: L("A company wants to move its on-premises MySQL database to AWS. It wants AWS to handle OS patching, automated backups and hardware maintenance, and the application must keep using MySQL. Which service should it use?",
        "ある企業はオンプレミスの MySQL データベースを AWS に移行したいと考えています。OS のパッチ適用・自動バックアップ・ハードウェア保守は AWS に任せたく、アプリは引き続き MySQL を使う必要があります。どのサービスを使うべきですか？",
        "Company တစ်ခုက on-premises MySQL database ကို AWS ကို ရွှေ့ချင်တယ်။ OS patch၊ automated backup၊ hardware maintenance ကို AWS က လုပ်ပေးစေချင်ပြီး application က MySQL ကိုပဲ ဆက်သုံးရမယ်။ ဘယ် service ကို သုံးသင့်လဲ?"),
      options: ['Amazon DynamoDB', 'Amazon RDS for MySQL', 'Amazon Redshift', 'MySQL installed on an Amazon EC2 instance'],
      correct: [1],
      explanation: L("Amazon RDS for MySQL is a managed relational service: AWS patches the OS and engine, runs automated backups and replaces hardware, while the app keeps using MySQL. MySQL on EC2 would also keep MySQL, but the customer would remain responsible for patching and backups, which is exactly what they want to avoid.",
        "Amazon RDS for MySQL はマネージドなリレーショナルサービスで、AWS が OS とエンジンのパッチ適用、自動バックアップ、ハードウェアの交換を行い、アプリは MySQL を使い続けられます。EC2 上の MySQL でも MySQL は使えますが、パッチやバックアップは利用者の責任のままで、まさに避けたいことです。",
        "Amazon RDS for MySQL က managed relational service ဖြစ်လို့ OS နဲ့ engine patch၊ automated backup၊ hardware လဲတာကို AWS က လုပ်ပေးပြီး app က MySQL ကို ဆက်သုံးနိုင်တယ်။ EC2 ပေါ်က MySQL လည်း MySQL ပဲဖြစ်ပေမဲ့ patch နဲ့ backup က customer တာဝန် ဆက်ဖြစ်နေမှာမို့ သူတို့ ရှောင်ချင်တာနဲ့ မကိုက်ဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['CLF-C02', 'SAA-C03'],
      prompt: L("Which AWS service is a serverless key-value and document database that delivers single-digit millisecond performance at any scale?",
        "どんな規模でも 1 桁ミリ秒の性能を提供する、サーバーレスのキーバリュー型・ドキュメント型データベースはどの AWS サービスですか？",
        "Scale ဘယ်လောက်ပဲဖြစ်ဖြစ် single-digit millisecond performance ပေးတဲ့ serverless key-value နဲ့ document database က ဘယ် AWS service လဲ?"),
      options: ['Amazon Neptune', 'Amazon Aurora', 'Amazon ElastiCache', 'Amazon DynamoDB'],
      correct: [3],
      explanation: L("DynamoDB is a fully managed, serverless NoSQL key-value and document database with single-digit millisecond latency. ElastiCache is also fast, but it is an in-memory cache that you size (or run serverless) in front of another data store, not the classic answer for a serverless primary key-value database.",
        "DynamoDB はフルマネージドかつサーバーレスの NoSQL キーバリュー／ドキュメントデータベースで、1 桁ミリ秒のレイテンシーを提供します。ElastiCache も高速ですが、別のデータストアの前に置くインメモリキャッシュであり、サーバーレスなプライマリのキーバリュー DB という定番の答えではありません。",
        "DynamoDB က fully managed၊ serverless NoSQL key-value/document database ဖြစ်ပြီး single-digit millisecond latency ပေးတယ်။ ElastiCache လည်း မြန်ပေမဲ့ တခြား data store ရှေ့မှာထားတဲ့ in-memory cache ဖြစ်လို့ serverless primary key-value DB ရဲ့ classic အဖြေ မဟုတ်ဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['CLF-C02'],
      prompt: L("A retail company wants to run complex analytical SQL queries across several years of sales data for business intelligence dashboards. Which service is designed for this?",
        "ある小売企業は BI ダッシュボードのため、数年分の売上データに対して複雑な分析 SQL クエリを実行したいと考えています。この用途向けに設計されたサービスはどれですか？",
        "Retail company တစ်ခုက BI dashboard အတွက် နှစ်အတော်များများစာ sales data ပေါ်မှာ analytics SQL query ရှုပ်ရှုပ်တွေ run ချင်တယ်။ ဒီအတွက် design လုပ်ထားတဲ့ service က ဘယ်ဟာလဲ?"),
      options: ['Amazon Redshift', 'Amazon RDS for PostgreSQL', 'Amazon DynamoDB', 'Amazon DocumentDB'],
      correct: [0],
      explanation: L("Redshift is a columnar, massively parallel data warehouse built for OLAP queries over large datasets. RDS for PostgreSQL is a row-oriented OLTP database; it can run SQL but is not optimised for scanning and aggregating years of data at warehouse scale.",
        "Redshift は大規模データに対する OLAP クエリ向けに作られた、列指向で超並列のデータウェアハウスです。RDS for PostgreSQL は行指向の OLTP データベースで、SQL は実行できますが、ウェアハウス規模で数年分のデータをスキャン・集計するようには最適化されていません。",
        "Redshift က data အများကြီးပေါ် OLAP query အတွက် လုပ်ထားတဲ့ columnar၊ massively parallel data warehouse ပါ။ RDS for PostgreSQL က row-oriented OLTP database ဖြစ်လို့ SQL run လို့ရပေမဲ့ warehouse scale နဲ့ နှစ်ချီ data ကို scan/aggregate လုပ်ဖို့ optimize မလုပ်ထားဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['CLF-C02'],
      prompt: L("A social media startup needs to store users and their friend relationships and quickly answer queries such as 'friends of friends who like this page'. Which database service fits BEST?",
        "あるソーシャルメディアのスタートアップは、ユーザーと友達関係を保存し、「このページを気に入っている友達の友達」のようなクエリに素早く答える必要があります。最も適したデータベースサービスはどれですか？",
        "Social media startup တစ်ခုက user တွေနဲ့ သူတို့ရဲ့ friend relationship တွေကို သိမ်းပြီး 'ဒီ page ကို ကြိုက်တဲ့ သူငယ်ချင်းရဲ့ သူငယ်ချင်း' လို query ကို မြန်မြန်ဖြေရမယ်။ ဘယ် database service က အကိုက်ဆုံးလဲ?"),
      options: ['Amazon Keyspaces', 'Amazon Timestream', 'Amazon Neptune', 'Amazon DocumentDB'],
      correct: [2],
      explanation: L("Neptune is a managed graph database optimised for traversing highly connected relationships. DocumentDB stores JSON documents well, but multi-hop relationship queries are exactly what a graph database is built for.",
        "Neptune は高度につながった関係をたどることに最適化されたマネージドなグラフデータベースです。DocumentDB は JSON ドキュメントの保存には向いていますが、複数段階の関係性クエリこそグラフデータベースが得意とする処理です。",
        "Neptune က အပြန်အလှန်ချိတ်ဆက်နေတဲ့ relationship တွေကို လိုက်ရှာဖို့ optimize လုပ်ထားတဲ့ managed graph database ပါ။ DocumentDB က JSON document သိမ်းဖို့ကောင်းပေမဲ့ hop အများကြီးပါတဲ့ relationship query ကတော့ graph database အတွက် လုပ်ထားတာပါ။"),
    },
    {
      difficulty: 'EASY',
      exams: ['CLF-C02', 'SAA-C03'],
      prompt: L("Under the shared responsibility model, which task is the customer's responsibility when using Amazon RDS?",
        "責任共有モデルにおいて、Amazon RDS を使う場合に利用者の責任となる作業はどれですか？",
        "Shared responsibility model အရ Amazon RDS သုံးတဲ့အခါ customer ရဲ့ တာဝန်က ဘယ်ဟာလဲ?"),
      options: ['Patching the operating system of the DB host', 'Replacing failed storage hardware', 'Configuring the security groups that allow access to the DB instance', 'Installing the database engine software'],
      correct: [2],
      explanation: L("With RDS, AWS manages the host OS, engine installation and hardware, but the customer controls network access (security groups, subnets), users, encryption choices and schema. Patching the OS would be the customer's job only when running the database on EC2.",
        "RDS ではホスト OS、エンジンのインストール、ハードウェアは AWS が管理しますが、ネットワークアクセス（セキュリティグループ、サブネット）、ユーザー、暗号化の選択、スキーマは利用者が管理します。OS のパッチ適用が利用者の作業になるのは、EC2 上でデータベースを動かす場合だけです。",
        "RDS မှာ host OS၊ engine install၊ hardware ကို AWS က manage လုပ်ပြီး network access (security group၊ subnet)၊ user၊ encryption ရွေးချယ်မှု၊ schema ကိုတော့ customer က ထိန်းတယ်။ OS patch က customer အလုပ်ဖြစ်တာ EC2 ပေါ်မှာ database run တဲ့အခါမှပါ။"),
    },
    {
      difficulty: 'EASY',
      exams: ['CLF-C02', 'SAA-C03'],
      prompt: L("A team stores application logs as files in Amazon S3 and wants to run ad hoc SQL queries on them without provisioning or managing any servers. Which service should they use?",
        "あるチームはアプリケーションログをファイルとして Amazon S3 に保存しており、サーバーを用意・管理せずにアドホックな SQL クエリを実行したいと考えています。どのサービスを使うべきですか？",
        "Team တစ်ခုက application log တွေကို Amazon S3 ထဲ file အဖြစ် သိမ်းထားပြီး server တစ်လုံးမှ မဆောက်/မ manage ဘဲ ad hoc SQL query run ချင်တယ်။ ဘယ် service သုံးသင့်လဲ?"),
      options: ['AWS Glue DataBrew', 'Amazon Athena', 'Amazon RDS for MySQL', 'Amazon Redshift provisioned cluster'],
      correct: [1],
      explanation: L("Athena is serverless and queries data in place in S3 using standard SQL, charging per data scanned. A provisioned Redshift cluster can also query data (including S3 via Spectrum), but it requires managing a cluster, which the team wants to avoid.",
        "Athena はサーバーレスで、標準 SQL を使って S3 上のデータをその場でクエリし、スキャンしたデータ量に応じて課金されます。プロビジョンド型の Redshift クラスターも（Spectrum 経由で S3 も含めて）クエリできますが、クラスターの管理が必要になり、チームが避けたいことです。",
        "Athena က serverless ဖြစ်ပြီး S3 ထဲက data ကို နေရာမရွှေ့ဘဲ standard SQL နဲ့ query လုပ်တယ်၊ scan လုပ်တဲ့ data အလိုက် ငွေပေးရတယ်။ Provisioned Redshift cluster လည်း (Spectrum နဲ့ S3 အပါအဝင်) query လုပ်နိုင်ပေမဲ့ cluster ကို manage လုပ်ရမှာမို့ team က ရှောင်ချင်တာပါ။"),
    },
    {
      difficulty: 'EASY',
      exams: ['CLF-C02', 'SAA-C03'],
      prompt: L("Which TWO engines can Amazon ElastiCache run? (Select TWO)",
        "Amazon ElastiCache で実行できるエンジンはどれですか？（2 つ選択）",
        "Amazon ElastiCache က ဘယ် engine နှစ်ခုကို run နိုင်လဲ? (Select TWO)"),
      options: ['Memcached', 'Valkey', 'Apache Cassandra', 'MongoDB'],
      correct: [0, 1],
      explanation: L("ElastiCache supports Valkey, Redis OSS and Memcached. Cassandra workloads go to Amazon Keyspaces and MongoDB workloads go to Amazon DocumentDB; those are databases, not ElastiCache engines.",
        "ElastiCache は Valkey、Redis OSS、Memcached をサポートします。Cassandra のワークロードは Amazon Keyspaces、MongoDB のワークロードは Amazon DocumentDB が担当し、これらは ElastiCache のエンジンではありません。",
        "ElastiCache က Valkey၊ Redis OSS၊ Memcached ကို support လုပ်တယ်။ Cassandra workload က Amazon Keyspaces၊ MongoDB workload က Amazon DocumentDB ကို သွားရတာမို့ ElastiCache engine မဟုတ်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("An e-commerce site runs on Amazon RDS for MySQL. Every evening, heavy reporting queries make the checkout pages slow. The company wants to fix this with the least application change. What should a solutions architect do?",
        "ある EC サイトは Amazon RDS for MySQL で稼働しています。毎晩、重いレポートクエリによって決済ページが遅くなります。アプリの変更を最小限にして解決したい場合、ソリューションアーキテクトは何をすべきですか？",
        "E-commerce site တစ်ခုက Amazon RDS for MySQL ပေါ်မှာ run နေတယ်။ ညတိုင်း report query လေးလေးတွေကြောင့် checkout page နှေးနေတယ်။ Application ကို အနည်းဆုံးပြင်ပြီး ဖြေရှင်းချင်ရင် solutions architect က ဘာလုပ်သင့်လဲ?"),
      options: ['Enable Multi-AZ and send the reports to the standby', 'Create a read replica and point the reporting tool at the replica endpoint', 'Increase the automated backup retention period', 'Migrate the database to Amazon DynamoDB'],
      correct: [1],
      explanation: L("A read replica has its own endpoint and offloads read-only reporting queries from the primary, which only requires changing the reporting tool's connection string. A Multi-AZ instance standby cannot serve reads at all; it exists only for failover.",
        "リードレプリカは独自のエンドポイントを持ち、読み取り専用のレポートクエリをプライマリから切り離せます。必要なのはレポートツールの接続先の変更だけです。Multi-AZ インスタンスのスタンバイは読み取りを一切処理できず、フェイルオーバー専用です。",
        "Read replica မှာ ကိုယ်ပိုင် endpoint ရှိလို့ read-only report query တွေကို primary ကနေ ခွဲထုတ်ပေးတယ်၊ report tool ရဲ့ connection string ကိုပဲ ပြောင်းရုံပါ။ Multi-AZ instance ရဲ့ standby က read လုံးဝမဖြေနိုင်ဘူး၊ failover အတွက်ပဲ ရှိတာပါ။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03', 'CLF-C02'],
      prompt: L("A production Amazon RDS for PostgreSQL database must keep running if an Availability Zone fails, with automatic failover and no change to the connection string. Which solution meets this requirement?",
        "本番の Amazon RDS for PostgreSQL データベースは、アベイラビリティーゾーンに障害が発生しても、自動フェイルオーバーかつ接続文字列を変えずに稼働し続ける必要があります。この要件を満たすソリューションはどれですか？",
        "Production Amazon RDS for PostgreSQL database က Availability Zone တစ်ခု ပျက်ရင်တောင် automatic failover နဲ့ connection string မပြောင်းဘဲ ဆက် run ရမယ်။ ဘယ် solution က ဒီ requirement နဲ့ ကိုက်လဲ?"),
      options: ['Take hourly manual snapshots', 'Create a read replica in another AZ', 'Place RDS Proxy in front of the instance', 'Convert the instance to a Multi-AZ deployment'],
      correct: [3],
      explanation: L("Multi-AZ keeps a synchronous standby in another AZ and automatically flips the same DNS endpoint to it on failure. A read replica in another AZ is asynchronous and must be promoted manually, which gives it a new role and does not provide automatic failover for the primary endpoint.",
        "Multi-AZ は別の AZ に同期スタンバイを保持し、障害時に同じ DNS エンドポイントを自動的にスタンバイへ切り替えます。別 AZ のリードレプリカは非同期で、手動で昇格する必要があり、プライマリのエンドポイントに対する自動フェイルオーバーにはなりません。",
        "Multi-AZ က တခြား AZ မှာ synchronous standby ထားပြီး ပျက်ရင် DNS endpoint တူတူကို standby ဘက် အလိုအလျောက် လှည့်ပေးတယ်။ တခြား AZ က read replica က asynchronous ဖြစ်ပြီး manual promote လုပ်ရလို့ primary endpoint အတွက် automatic failover မပေးဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("A serverless application uses thousands of concurrent AWS Lambda invocations that connect to an Amazon Aurora PostgreSQL cluster. The database frequently reports 'too many connections' errors. What is the MOST effective solution?",
        "あるサーバーレスアプリケーションでは、数千の同時 AWS Lambda 呼び出しが Amazon Aurora PostgreSQL クラスターに接続しています。データベースでは「接続数が多すぎる」エラーが頻発しています。最も効果的な解決策はどれですか？",
        "Serverless application တစ်ခုမှာ တပြိုင်နက် AWS Lambda invocation ထောင်ချီက Amazon Aurora PostgreSQL cluster ကို connect လုပ်နေတယ်။ Database က 'too many connections' error ခဏခဏ ပြနေတယ်။ အထိရောက်ဆုံး solution က ဘာလဲ?"),
      options: ['Add an Amazon ElastiCache for Memcached cluster', 'Increase the Lambda function memory size', 'Put Amazon RDS Proxy between Lambda and the database', 'Add more Aurora Replicas to the cluster'],
      correct: [2],
      explanation: L("RDS Proxy pools and reuses database connections, so many short-lived Lambda invocations share a small number of connections; it also integrates with Secrets Manager and IAM. Adding Aurora Replicas adds read capacity, but each Lambda still opens its own connections, so the connection storm continues.",
        "RDS Proxy はデータベース接続をプールして再利用するため、多数の短命な Lambda 呼び出しが少数の接続を共有できます。Secrets Manager や IAM とも連携します。Aurora レプリカを追加すると読み取り能力は増えますが、各 Lambda は相変わらず独自に接続を開くため、接続の殺到は続きます。",
        "RDS Proxy က database connection တွေကို pool လုပ်ပြီး ပြန်သုံးလို့ သက်တမ်းတို Lambda invocation အများကြီးက connection အနည်းငယ်ကို မျှသုံးနိုင်တယ်၊ Secrets Manager နဲ့ IAM နဲ့လည်း ချိတ်တယ်။ Aurora Replica ထပ်ထည့်ရင် read capacity တိုးပေမဲ့ Lambda တစ်ခုချင်းက connection ကိုယ်ပိုင် ဖွင့်နေဆဲမို့ connection ပြဿနာ မပြေဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("A security audit finds that an existing Amazon RDS for MySQL instance was created without encryption at rest. The company must encrypt it. What should a solutions architect do?",
        "セキュリティ監査で、既存の Amazon RDS for MySQL インスタンスが保存時の暗号化なしで作成されていたことが判明しました。企業はこれを暗号化する必要があります。ソリューションアーキテクトは何をすべきですか？",
        "Security audit မှာ ရှိပြီးသား Amazon RDS for MySQL instance ကို encryption at rest မပါဘဲ ဖန်တီးထားတာ တွေ့တယ်။ Company က encrypt လုပ်ရမယ်။ Solutions architect က ဘာလုပ်သင့်လဲ?"),
      options: ['Modify the DB instance and turn on storage encryption', 'Take a snapshot, copy it with encryption enabled using a KMS key, and restore a new instance from the encrypted copy', 'Create an encrypted read replica and promote it', 'Enforce SSL/TLS connections with a parameter group'],
      correct: [1],
      explanation: L("Encryption at rest can only be set when an RDS instance is created, so the supported path is snapshot -> encrypted snapshot copy -> restore, then switch the application endpoint. You cannot create an encrypted read replica from an unencrypted source, and TLS only protects data in transit.",
        "RDS インスタンスの保存時の暗号化は作成時にしか設定できないため、サポートされる方法はスナップショット → 暗号化したスナップショットのコピー → 復元、その後アプリのエンドポイントの切り替えです。暗号化されていないソースから暗号化されたリードレプリカは作成できず、TLS は転送中のデータしか保護しません。",
        "RDS instance ရဲ့ encryption at rest ကို ဖန်တီးချိန်မှာပဲ သတ်မှတ်လို့ရလို့ မှန်ကန်တဲ့နည်းက snapshot -> encrypted snapshot copy -> restore ပြီး application endpoint ပြောင်းတာပါ။ Encrypt မလုပ်ထားတဲ့ source ကနေ encrypted read replica မဖန်တီးနိုင်ဘူး၊ TLS က data in transit ကိုပဲ ကာကွယ်တယ်။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03', 'CLF-C02'],
      prompt: L("A startup is launching a new mobile game backed by Amazon DynamoDB. Traffic is completely unpredictable and the team does not want to do any capacity planning. Which configuration should they choose?",
        "あるスタートアップは Amazon DynamoDB をバックエンドにした新しいモバイルゲームをリリースします。トラフィックはまったく予測できず、チームはキャパシティ計画を一切したくありません。どの設定を選ぶべきですか？",
        "Startup တစ်ခုက Amazon DynamoDB ကို backend အဖြစ်သုံးတဲ့ mobile game အသစ် launch လုပ်မယ်။ Traffic ကို လုံးဝ ကြိုမခန့်မှန်းနိုင်ပြီး team က capacity planning ဘာမှ မလုပ်ချင်ဘူး။ ဘယ် configuration ကို ရွေးသင့်လဲ?"),
      options: ['On-demand capacity mode', 'Provisioned capacity with reserved capacity purchased', 'Provisioned capacity with a fixed number of RCUs and WCUs', 'Provisioned capacity with DynamoDB Accelerator (DAX)'],
      correct: [0],
      explanation: L("On-demand mode charges per request and scales automatically without any capacity settings, which suits new and unpredictable workloads. Provisioned capacity with reserved capacity is cheaper for steady, predictable traffic, but it requires estimating RCUs/WCUs in advance.",
        "オンデマンドモードはリクエストごとに課金され、キャパシティ設定なしで自動的にスケールするため、新規で予測できないワークロードに適しています。リザーブドキャパシティ付きのプロビジョンドは安定した予測可能なトラフィックではより安価ですが、RCU/WCU を事前に見積もる必要があります。",
        "On-demand mode က request အလိုက် ငွေကောက်ပြီး capacity setting မလိုဘဲ အလိုအလျောက် scale လုပ်လို့ workload အသစ်နဲ့ ကြိုမခန့်မှန်းနိုင်တာအတွက် ကိုက်တယ်။ Reserved capacity ပါတဲ့ provisioned က တည်ငြိမ်တဲ့ traffic အတွက် ပိုသက်သာပေမဲ့ RCU/WCU ကို ကြိုခန့်မှန်းရတယ်။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("A product catalog stored in Amazon DynamoDB receives millions of repeated reads for the same popular items. The company needs microsecond read latency with minimal application code changes. Which solution should be used?",
        "Amazon DynamoDB に保存された商品カタログでは、人気商品に対して同じ読み取りが数百万回繰り返されます。アプリのコード変更を最小限にしてマイクロ秒の読み取りレイテンシーが必要です。どのソリューションを使うべきですか？",
        "Amazon DynamoDB ထဲက product catalog မှာ လူကြိုက်များတဲ့ item တူတူကို read သန်းချီ ထပ်ခါထပ်ခါ ဝင်နေတယ်။ Application code ကို အနည်းဆုံးပြင်ပြီး microsecond read latency လိုတယ်။ ဘယ် solution သုံးသင့်လဲ?"),
      options: ['Amazon ElastiCache for Memcached with custom caching logic', 'DynamoDB global tables', 'DynamoDB Accelerator (DAX)', 'Increase the table read capacity units'],
      correct: [2],
      explanation: L("DAX is an in-memory cache purpose-built for DynamoDB with a compatible API, so you mostly swap the client and get microsecond reads. ElastiCache can also cache data, but you must write your own cache-aside logic, which is more code change; more RCUs keep latency in milliseconds.",
        "DAX は DynamoDB 専用のインメモリキャッシュで API 互換があるため、ほぼクライアントを差し替えるだけでマイクロ秒の読み取りが得られます。ElastiCache でもキャッシュできますが、キャッシュアサイドのロジックを自分で書く必要があり、コード変更が多くなります。RCU を増やしてもレイテンシーはミリ秒のままです。",
        "DAX က DynamoDB အတွက် သီးသန့်လုပ်ထားတဲ့ API compatible in-memory cache ဖြစ်လို့ client ကို လဲရုံနဲ့ microsecond read ရတယ်။ ElastiCache နဲ့လည်း cache လုပ်လို့ရပေမဲ့ cache-aside logic ကို ကိုယ်တိုင်ရေးရလို့ code ပိုပြင်ရတယ်၊ RCU တိုးရင်လည်း latency က millisecond ပဲ ရှိနေမယ်။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("An application stores user sessions in Amazon DynamoDB. Sessions should be removed automatically 24 hours after creation, and a welcome email must be sent whenever a new user item is written. Which TWO features should be used? (Select TWO)",
        "あるアプリケーションはユーザーセッションを Amazon DynamoDB に保存しています。セッションは作成から 24 時間後に自動削除し、新しいユーザー項目が書き込まれるたびにウェルカムメールを送る必要があります。どの 2 つの機能を使うべきですか？（2 つ選択）",
        "Application တစ်ခုက user session တွေကို Amazon DynamoDB ထဲ သိမ်းတယ်။ Session တွေကို ဖန်တီးပြီး ၂၄ နာရီမှာ အလိုအလျောက် ဖျက်ရမယ်၊ user item အသစ်ရေးတိုင်း welcome email ပို့ရမယ်။ ဘယ် feature နှစ်ခု သုံးသင့်လဲ? (Select TWO)"),
      options: ['A nightly Scan that deletes old items', 'Time to Live (TTL) on an expiry timestamp attribute', 'A local secondary index on the creation time', 'DynamoDB Streams with an AWS Lambda trigger', 'Point-in-time recovery (PITR)'],
      correct: [1, 3],
      explanation: L("TTL deletes items after the epoch timestamp in a chosen attribute at no extra cost, and Streams capture each new item so a Lambda function can send the email. A nightly Scan would work but consumes read capacity and costs more than built-in TTL; PITR is for recovery, not processing.",
        "TTL は指定した属性のエポック秒を過ぎた項目を追加料金なしで削除し、Streams は新しい項目を記録するので Lambda 関数がメールを送れます。夜間の Scan でも動作しますが、読み取りキャパシティを消費し組み込みの TTL より高くつきます。PITR は復旧用で、処理には使いません。",
        "TTL က ရွေးထားတဲ့ attribute ထဲက epoch timestamp ကျော်တဲ့ item တွေကို အပိုငွေမကုန်ဘဲ ဖျက်ပေးပြီး Streams က item အသစ်တိုင်းကို ဖမ်းလို့ Lambda function က email ပို့နိုင်တယ်။ ညစဉ် Scan လည်း ဖြစ်နိုင်ပေမဲ့ read capacity စားပြီး built-in TTL ထက် ဈေးကြီးတယ်၊ PITR က recovery အတွက်ပဲ။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03', 'CLF-C02'],
      prompt: L("A company wants to migrate an on-premises Oracle database to Amazon Aurora PostgreSQL with minimal downtime. Which TWO services should be used? (Select TWO)",
        "ある企業はオンプレミスの Oracle データベースを、ダウンタイムを最小限にして Amazon Aurora PostgreSQL に移行したいと考えています。どの 2 つのサービスを使うべきですか？（2 つ選択）",
        "Company တစ်ခုက on-premises Oracle database ကို downtime အနည်းဆုံးနဲ့ Amazon Aurora PostgreSQL ကို migrate လုပ်ချင်တယ်။ ဘယ် service နှစ်ခု သုံးသင့်လဲ? (Select TWO)"),
      options: ['AWS DataSync', 'AWS Schema Conversion Tool (SCT)', 'AWS Snowball Edge', 'AWS Database Migration Service (DMS)', 'AWS Backup'],
      correct: [1, 3],
      explanation: L("Oracle to PostgreSQL is a heterogeneous migration, so SCT (or DMS Schema Conversion) converts the schema and code, and DMS moves the data with change data capture while the source stays online. DataSync copies files between storage systems; it does not understand database transactions or schemas.",
        "Oracle から PostgreSQL への移行は異種間移行なので、SCT（または DMS Schema Conversion）でスキーマとコードを変換し、DMS がソースをオンラインのまま変更データキャプチャでデータを移します。DataSync はストレージ間でファイルをコピーするサービスで、データベースのトランザクションやスキーマは扱いません。",
        "Oracle ကနေ PostgreSQL က heterogeneous migration ဖြစ်လို့ SCT (သို့) DMS Schema Conversion က schema နဲ့ code ကို ပြောင်းပြီး DMS က source online ဆက်ရှိနေရင်း change data capture နဲ့ data ကို ရွှေ့တယ်။ DataSync က storage ကြား file copy ကူးတာဖြစ်လို့ database transaction နဲ့ schema ကို နားမလည်ဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("A global financial application uses a relational database in ap-northeast-1. It needs read access with low latency in Europe and the US, cross-Region replication lag of about one second, and the ability to recover in another Region within about a minute if the primary Region fails. Which solution meets these requirements?",
        "あるグローバルな金融アプリケーションは ap-northeast-1 でリレーショナルデータベースを使っています。欧州と米国での低レイテンシーの読み取り、約 1 秒のクロスリージョンレプリケーションラグ、プライマリリージョンに障害が起きた際に約 1 分で別リージョンで復旧できることが必要です。要件を満たすソリューションはどれですか？",
        "Global financial application တစ်ခုက ap-northeast-1 မှာ relational database သုံးတယ်။ Europe နဲ့ US မှာ latency နည်းနည်းနဲ့ read လို၊ cross-Region replication lag က တစ်စက္ကန့်လောက်ပဲ ရှိရမယ်၊ primary Region ပျက်ရင် တခြား Region မှာ တစ်မိနစ်လောက်အတွင်း ပြန်ကောင်းရမယ်။ ဘယ် solution က ကိုက်လဲ?"),
      options: ['Amazon RDS for PostgreSQL with cross-Region read replicas', 'Amazon Aurora Global Database', 'Amazon DynamoDB global tables', 'Amazon RDS Multi-AZ DB cluster'],
      correct: [1],
      explanation: L("Aurora Global Database replicates at the storage layer with typical lag under one second and lets you promote a secondary Region in about a minute. DynamoDB global tables are multi-Region but not relational, and RDS cross-Region read replicas use engine-level async replication with typically higher lag and a slower manual promotion.",
        "Aurora Global Database はストレージ層でレプリケーションを行い、ラグは通常 1 秒未満で、セカンダリリージョンを約 1 分で昇格できます。DynamoDB グローバルテーブルはマルチリージョンですがリレーショナルではなく、RDS のクロスリージョンリードレプリカはエンジンレベルの非同期レプリケーションで、通常ラグが大きく手動昇格も遅くなります。",
        "Aurora Global Database က storage layer မှာ replicate လုပ်လို့ lag ပုံမှန် ၁ စက္ကန့်အောက်ရှိပြီး secondary Region ကို တစ်မိနစ်လောက်နဲ့ promote လုပ်နိုင်တယ်။ DynamoDB global tables က multi-Region ဖြစ်ပေမဲ့ relational မဟုတ်ဘူး၊ RDS cross-Region read replica က engine-level async replication ဖြစ်လို့ lag ပိုများပြီး manual promote လည်း ပိုနှေးတယ်။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("A ride-sharing app stores trip state in a NoSQL key-value store. Users in Tokyo and Frankfurt must be able to write locally with low latency, and the data must stay available even if an entire AWS Region becomes unavailable. Which solution is MOST appropriate?",
        "あるライドシェアアプリは、乗車状態を NoSQL のキーバリューストアに保存しています。東京とフランクフルトのユーザーがそれぞれ低レイテンシーでローカルに書き込めること、さらに AWS リージョン全体が利用できなくなってもデータが利用可能であることが必要です。最も適切なソリューションはどれですか？",
        "Ride-sharing app တစ်ခုက trip state ကို NoSQL key-value store ထဲ သိမ်းတယ်။ Tokyo နဲ့ Frankfurt က user တွေက latency နည်းနည်းနဲ့ local မှာ write နိုင်ရမယ်၊ AWS Region တစ်ခုလုံး မရတော့ရင်တောင် data ဆက်သုံးလို့ရရမယ်။ အသင့်တော်ဆုံး solution က ဘာလဲ?"),
      options: ['Amazon DynamoDB global tables', 'Amazon Aurora Global Database', 'Amazon DynamoDB with DAX in each Region', 'Amazon RDS with cross-Region read replicas'],
      correct: [0],
      explanation: L("DynamoDB global tables are multi-active: every replica Region accepts reads and writes and replicates changes to the others, so each user writes locally and the app survives a Regional outage. Aurora Global Database has a single writer Region, so Frankfurt users would still send writes to Tokyo (write forwarding does not make it multi-writer).",
        "DynamoDB グローバルテーブルはマルチアクティブで、すべてのレプリカリージョンが読み書きを受け付けて変更を相互に複製するため、各ユーザーはローカルに書き込め、リージョン障害にも耐えられます。Aurora Global Database はライターリージョンが 1 つだけなので、フランクフルトのユーザーの書き込みは東京に送られます（書き込み転送でもマルチライターにはなりません）。",
        "DynamoDB global tables က multi-active ဖြစ်လို့ replica Region တိုင်းက read/write လက်ခံပြီး တစ်ခုနဲ့တစ်ခု replicate လုပ်တယ်၊ ဒါကြောင့် user တိုင်း local မှာ write နိုင်ပြီး Region ပျက်ရင်လည်း app ဆက်ရှင်တယ်။ Aurora Global Database မှာ writer Region တစ်ခုပဲရှိလို့ Frankfurt user တွေရဲ့ write က Tokyo ကို သွားရဆဲ (write forwarding နဲ့လည်း multi-writer မဖြစ်ဘူး)။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("A DynamoDB table named Orders already holds production data. Its partition key is customerId and its sort key is orderDate. The business now needs to efficiently retrieve all orders with a given status across all customers. What should the solutions architect do?",
        "Orders という DynamoDB テーブルにはすでに本番データがあります。パーティションキーは customerId、ソートキーは orderDate です。業務上、全顧客を対象に特定のステータスの注文を効率よく取得する必要が出てきました。ソリューションアーキテクトは何をすべきですか？",
        "Orders ဆိုတဲ့ DynamoDB table မှာ production data ရှိပြီးသား။ Partition key က customerId၊ sort key က orderDate။ အခု business က customer အားလုံးထဲက status တစ်ခုခုရှိတဲ့ order တွေကို ထိထိရောက်ရောက် ယူချင်တယ်။ Solutions architect က ဘာလုပ်သင့်လဲ?"),
      options: ['Add a local secondary index with status as the sort key', 'Run a Scan with a FilterExpression on status', 'Recreate the table with status as the sort key', 'Add a global secondary index with status as the partition key'],
      correct: [3],
      explanation: L("A GSI can be added to an existing table and can use a completely different partition key, so querying by status across all customers becomes an efficient Query. An LSI must keep customerId as its partition key (so it cannot search across customers) and can only be created with the table; a Scan reads everything and is slow and costly.",
        "GSI は既存のテーブルに追加でき、まったく別のパーティションキーを使えるため、全顧客を対象にしたステータスでの検索が効率的な Query になります。LSI はパーティションキーが customerId のままなので顧客をまたいだ検索ができず、テーブル作成時にしか作れません。Scan はすべてを読むため遅く高コストです。",
        "GSI ကို ရှိပြီးသား table မှာ ထည့်လို့ရပြီး partition key လုံးဝမတူတာ သုံးလို့ရလို့ customer အားလုံးထဲက status နဲ့ရှာတာ ထိရောက်တဲ့ Query ဖြစ်သွားတယ်။ LSI က partition key ကို customerId အတိုင်း ထားရလို့ customer အကုန်ဖြတ်ပြီး မရှာနိုင်ဘူး၊ table ဖန်တီးချိန်မှာပဲ ဖန်တီးလို့ရတယ်၊ Scan က အကုန်ဖတ်လို့ နှေးပြီး ဈေးကြီးတယ်။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("Which TWO statements about Amazon Aurora are correct? (Select TWO)",
        "Amazon Aurora について正しい記述はどれですか？（2 つ選択）",
        "Amazon Aurora နဲ့ပတ်သက်ပြီး ဘယ်စာကြောင်းနှစ်ခု မှန်လဲ? (Select TWO)"),
      options: ['You must pre-provision the maximum storage size when creating the cluster', 'Each Aurora Replica keeps its own separate copy of the data volume', 'The cluster volume stores six copies of data across three Availability Zones', 'An Aurora cluster supports at most five read replicas', 'Aurora Replicas can serve as automatic failover targets for the writer'],
      correct: [2, 4],
      explanation: L("Aurora's shared cluster volume keeps six copies across three AZs, and Aurora Replicas (up to 15) read from that same volume and can be promoted automatically on failover. Storage grows automatically, so nothing is pre-provisioned, and replicas do not keep separate volumes, which is why their lag is so low.",
        "Aurora の共有クラスターボリュームは 3 つの AZ にわたって 6 つのコピーを保持し、Aurora レプリカ（最大 15 台）は同じボリュームから読み取り、フェイルオーバー時に自動昇格できます。ストレージは自動で拡張されるため事前確保は不要で、レプリカは個別のボリュームを持たないためラグが非常に小さいのです。",
        "Aurora ရဲ့ shared cluster volume က AZ ၃ ခုမှာ copy ၆ ခု သိမ်းထားပြီး Aurora Replica (၁၅ ခုအထိ) တွေက volume တူတူကနေ ဖတ်ပြီး failover ဖြစ်ရင် အလိုအလျောက် promote ဖြစ်နိုင်တယ်။ Storage က အလိုအလျောက် ကြီးလာလို့ ကြိုမယူရဘူး၊ replica တွေမှာ သီးခြား volume မရှိလို့ lag အရမ်းနည်းတာပါ။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("A gaming company needs a real-time leaderboard that ranks millions of players by score. The cache layer must support automatic failover across Availability Zones and survive node restarts without losing all data. Which solution should be used?",
        "あるゲーム会社は、数百万人のプレイヤーをスコアでランク付けするリアルタイムのランキングを必要としています。キャッシュ層はアベイラビリティーゾーン間の自動フェイルオーバーに対応し、ノードの再起動ですべてのデータを失わないことが必要です。どのソリューションを使うべきですか？",
        "Gaming company တစ်ခုက player သန်းချီကို score အလိုက် အဆင့်စီတဲ့ real-time leaderboard လိုတယ်။ Cache layer က Availability Zone ကြား automatic failover ရပြီး node restart ဖြစ်ရင်လည်း data အကုန်မပျောက်ရဘူး။ ဘယ် solution သုံးသင့်လဲ?"),
      options: ['Amazon ElastiCache for Memcached with multiple nodes', 'DynamoDB Accelerator (DAX)', 'Amazon Redshift with materialized views', 'Amazon ElastiCache for Valkey with a Multi-AZ replication group'],
      correct: [3],
      explanation: L("Valkey (like Redis OSS) offers sorted sets that are ideal for leaderboards, plus replication with Multi-AZ automatic failover and backups/persistence. Memcached is multi-threaded and simple, but it has no replication, no persistence and no sorted sets, so a node failure loses its data.",
        "Valkey（Redis OSS と同様）はランキングに最適なソート済みセットを持ち、Multi-AZ 自動フェイルオーバー付きのレプリケーションとバックアップ／永続化も提供します。Memcached はマルチスレッドでシンプルですが、レプリケーション・永続化・ソート済みセットがなく、ノード障害でデータを失います。",
        "Valkey (Redis OSS လိုပဲ) မှာ leaderboard အတွက် အကောင်းဆုံး sorted set ရှိပြီး Multi-AZ automatic failover ပါတဲ့ replication နဲ့ backup/persistence လည်း ရှိတယ်။ Memcached က multi-threaded ရိုးရှင်းပေမဲ့ replication၊ persistence၊ sorted set မရှိလို့ node ပျက်ရင် data ပျောက်တယ်။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("An application caches product prices from Amazon RDS in ElastiCache. After a price change, customers must never see an outdated price from the cache, and reads must stay fast. The team accepts slightly slower writes. Which caching strategy should be used?",
        "あるアプリケーションは Amazon RDS の商品価格を ElastiCache にキャッシュしています。価格変更後、顧客がキャッシュから古い価格を見ることは決してあってはならず、読み取りは高速なままにする必要があります。チームは書き込みが少し遅くなることを許容しています。どのキャッシュ戦略を使うべきですか？",
        "Application တစ်ခုက Amazon RDS ထဲက product price တွေကို ElastiCache မှာ cache လုပ်ထားတယ်။ Price ပြောင်းပြီးရင် customer က cache ထဲက ဈေးဟောင်းကို ဘယ်တော့မှ မမြင်ရဘူး၊ read ကလည်း မြန်နေရမယ်။ Write နည်းနည်းနှေးတာကို team က လက်ခံတယ်။ ဘယ် caching strategy သုံးသင့်လဲ?"),
      options: ['Write-through: update the cache every time the database is written', 'Lazy loading with a 24-hour TTL', 'Lazy loading with no TTL', 'Remove the cache and add RDS read replicas'],
      correct: [0],
      explanation: L("Write-through updates the cache together with the database on every write, so cached data is never stale, at the cost of extra write work. Lazy loading only refreshes the cache on a miss, so with a 24-hour TTL (or no TTL) customers can see an old price until the key expires.",
        "ライトスルーは書き込みのたびにデータベースと一緒にキャッシュも更新するため、キャッシュのデータが古くなることはありません。その代わり書き込みの負荷が増えます。遅延読み込みはキャッシュミス時にしかキャッシュを更新しないため、24 時間の TTL（または TTL なし）では、キーが期限切れになるまで顧客が古い価格を見る可能性があります。",
        "Write-through က write တိုင်းမှာ database နဲ့အတူ cache ကိုပါ update လုပ်လို့ cache data ဘယ်တော့မှ ဟောင်းမနေဘူး၊ အစားအနေနဲ့ write အလုပ် ပိုများတယ်။ Lazy loading က cache miss ဖြစ်မှပဲ cache ကို update လုပ်လို့ TTL ၂၄ နာရီ (သို့) TTL မရှိရင် key သက်တမ်းမကုန်မချင်း customer က ဈေးဟောင်း မြင်နိုင်တယ်။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("A production Amazon RDS for PostgreSQL database must be recoverable to any point in time within the last 14 days, must keep a monthly backup for 1 year for compliance, and must remain available if an Availability Zone fails. Which THREE actions meet these requirements? (Select THREE)",
        "本番の Amazon RDS for PostgreSQL データベースは、直近 14 日間の任意の時点に復旧でき、コンプライアンスのため月次バックアップを 1 年間保持し、アベイラビリティーゾーンに障害が起きても利用可能である必要があります。要件を満たす 3 つのアクションはどれですか？（3 つ選択）",
        "Production Amazon RDS for PostgreSQL database ကို နောက်ဆုံး ၁၄ ရက်အတွင်း ဘယ်အချိန်ကိုမဆို recover လုပ်နိုင်ရမယ်၊ compliance အတွက် လစဉ် backup ကို ၁ နှစ် သိမ်းရမယ်၊ Availability Zone ပျက်ရင်လည်း ဆက်သုံးလို့ရရမယ်။ ဘယ် action သုံးခုက ကိုက်လဲ? (Select THREE)"),
      options: ['Set the automated backup retention period to 365 days', 'Set the automated backup retention period to 14 days', 'Create a read replica in the same Availability Zone', 'Enable a Multi-AZ deployment', 'Take monthly manual snapshots (or use an AWS Backup plan) retained for 1 year'],
      correct: [1, 3, 4],
      explanation: L("Automated backups with 14-day retention provide PITR for the last 14 days, Multi-AZ gives automatic failover across AZs, and manual snapshots or an AWS Backup plan keep monthly copies for a year. Automated backup retention cannot exceed 35 days, so 365 days is invalid, and a same-AZ read replica does not protect against an AZ failure.",
        "保持期間 14 日の自動バックアップで直近 14 日の PITR が可能になり、Multi-AZ で AZ 間の自動フェイルオーバーが得られ、手動スナップショットか AWS Backup プランで月次のコピーを 1 年間保持できます。自動バックアップの保持期間は 35 日が上限なので 365 日は設定できず、同一 AZ のリードレプリカは AZ 障害から守れません。",
        "Retention ၁၄ ရက်ရှိတဲ့ automated backup က နောက်ဆုံး ၁၄ ရက်အတွက် PITR ပေးတယ်၊ Multi-AZ က AZ ကြား automatic failover ပေးတယ်၊ manual snapshot (သို့) AWS Backup plan က လစဉ် copy ကို တစ်နှစ် သိမ်းထားပေးတယ်။ Automated backup retention က ရက် ၃၅ ထက် မကျော်နိုင်လို့ ၃၆၅ ရက်က မဖြစ်နိုင်ဘူး၊ AZ တူ read replica က AZ ပျက်တာကနေ မကာကွယ်ဘူး။"),
    },
  ],
  flashcards: [
    { term: 'Multi-AZ (RDS)',
      definition: L("A deployment option that keeps a synchronous standby in another AZ and fails over automatically to it using the same endpoint.", "別の AZ に同期スタンバイを保持し、同じエンドポイントのまま自動的にフェイルオーバーするデプロイオプションです。", "တခြား AZ မှာ synchronous standby ထားပြီး endpoint တူတူနဲ့ အလိုအလျောက် failover လုပ်ပေးတဲ့ deployment option ပါ။"),
      example: L("When AZ-a has a power failure, shop-db moves to the standby in AZ-b in about one to two minutes.", "AZ-a で電源障害が起きると、shop-db は約 1〜2 分で AZ-b のスタンバイに切り替わります。", "AZ-a မှာ မီးပြတ်ရင် shop-db က AZ-b က standby ကို တစ်မိနစ်နှစ်မိနစ်လောက်နဲ့ ပြောင်းသွားတယ်။") },
    { term: 'Read Replica',
      definition: L("An asynchronously updated, read-only copy of a database with its own endpoint, used to scale reads; it can be in another Region and promoted manually.", "非同期で更新される読み取り専用のデータベースのコピーで独自のエンドポイントを持ち、読み取りのスケールに使います。別リージョンにも置け、手動で昇格できます。", "Asynchronous update ဖြစ်တဲ့ ကိုယ်ပိုင် endpoint ပါ read-only database copy ပါ၊ read scale အတွက်သုံးပြီး တခြား Region မှာထားလို့ရ၊ manual promote လုပ်လို့ရတယ်။"),
      example: L("The BI tool connects to shop-db-replica so heavy reports do not slow checkout.", "BI ツールを shop-db-replica に接続し、重いレポートで決済が遅くならないようにします。", "BI tool ကို shop-db-replica နဲ့ချိတ်လို့ report လေးလေးတွေကြောင့် checkout မနှေးတော့ဘူး။") },
    { term: 'Point-in-time recovery (PITR)',
      definition: L("Restoring a database to any second within the backup retention window, creating a new instance or table.", "バックアップ保持期間内の任意の秒の状態にデータベースを復元する機能で、新しいインスタンスまたはテーブルが作られます。", "Backup retention window အတွင်း ဘယ်စက္ကန့်ကိုမဆို database ကို restore လုပ်တာဖြစ်ပြီး instance (သို့) table အသစ် ဖြစ်လာတယ်။"),
      example: L("A bad DELETE ran at 14:05, so the team restores to 14:04 and switches the app to the new instance.", "14:05 に誤った DELETE が実行されたので、14:04 の時点に復元し、アプリを新しいインスタンスに切り替えます。", "14:05 မှာ DELETE မှားရိုက်မိလို့ 14:04 ကို restore လုပ်ပြီး app ကို instance အသစ်ဘက် ပြောင်းတယ်။") },
    { term: 'RDS Proxy',
      definition: L("A managed connection pooler for RDS and Aurora that reduces connection overload, speeds failover and supports IAM and Secrets Manager.", "RDS と Aurora 向けのマネージドなコネクションプーラーで、接続の過負荷を減らし、フェイルオーバーを速くし、IAM と Secrets Manager に対応します。", "RDS နဲ့ Aurora အတွက် managed connection pooler ပါ၊ connection ပိုလျှံတာကို လျှော့၊ failover ကို မြန်စေပြီး IAM နဲ့ Secrets Manager ကို support လုပ်တယ်။"),
      example: L("5,000 concurrent Lambda invocations share about 100 pooled connections to Aurora.", "5,000 の同時 Lambda 呼び出しが、Aurora へのプールされた約 100 の接続を共有します。", "တပြိုင်နက် Lambda invocation ၅,၀၀၀ က Aurora ဆီ pooled connection ၁၀၀ လောက်ကို မျှသုံးတယ်။") },
    { term: 'Aurora cluster volume',
      definition: L("Aurora's shared, auto-growing storage that keeps six copies of data across three AZs and is used by the writer and all replicas.", "Aurora の共有かつ自動拡張するストレージで、3 つの AZ に 6 つのデータのコピーを保持し、ライターとすべてのレプリカが使用します。", "Aurora ရဲ့ မျှသုံးတဲ့၊ အလိုအလျောက်ကြီးလာတဲ့ storage ပါ၊ AZ ၃ ခုမှာ data copy ၆ ခု သိမ်းပြီး writer နဲ့ replica အားလုံး သုံးတယ်။"),
      example: L("Even if an entire AZ goes down, four of the six copies remain, so writes continue.", "AZ 全体が停止しても 6 つ中 4 つのコピーが残るため、書き込みは継続します。", "AZ တစ်ခုလုံး ပျက်သွားလည်း copy ၆ ခုထဲက ၄ ခု ကျန်လို့ write ဆက်လုပ်နိုင်တယ်။") },
    { term: 'Aurora Serverless v2',
      definition: L("An Aurora capacity option that scales compute automatically in fine-grained Aurora Capacity Units between a minimum and maximum you set.", "設定した最小値と最大値の間で、細かい Aurora Capacity Unit 単位でコンピューティングを自動スケールする Aurora の容量オプションです。", "ကိုယ်သတ်မှတ်တဲ့ minimum နဲ့ maximum ကြားမှာ Aurora Capacity Unit သေးသေးလေးတွေနဲ့ compute ကို အလိုအလျောက် scale လုပ်တဲ့ Aurora capacity option ပါ။"),
      example: L("A SaaS app idles at night and spikes at 9 a.m.; capacity follows the load without manual resizing.", "夜間は暇で朝 9 時に急増する SaaS アプリでも、手動でサイズ変更せずに容量が負荷に追従します。", "ညဘက် အားပြီး မနက် ၉ နာရီ ရုတ်တရက်တက်တဲ့ SaaS app မှာ manual resize မလုပ်ဘဲ capacity က load နောက်လိုက်တယ်။") },
    { term: 'DynamoDB partition key',
      definition: L("The attribute DynamoDB hashes to decide where an item is stored; it should have many distinct values to spread traffic evenly.", "項目の保存場所を決めるために DynamoDB がハッシュ化する属性で、トラフィックを均等に分散するため多くの異なる値を持つべきです。", "Item ကို ဘယ်မှာသိမ်းမလဲ ဆုံးဖြတ်ဖို့ DynamoDB က hash လုပ်တဲ့ attribute ပါ၊ traffic ညီညီဖြန့်ဖို့ တန်ဖိုးမျိုးစုံ ရှိသင့်တယ်။"),
      example: L("Use userId rather than country, otherwise all Japanese users hit one hot partition.", "country ではなく userId を使います。そうしないと日本のユーザー全員が 1 つのホットパーティションに集中します。", "country အစား userId ကိုသုံးပါ၊ မဟုတ်ရင် ဂျပန် user အားလုံး hot partition တစ်ခုတည်းကို ဝိုင်းသွားမယ်။") },
    { term: 'Global Secondary Index (GSI)',
      definition: L("A DynamoDB index with a different partition key (and optional sort key) that can be added at any time and supports eventually consistent reads.", "別のパーティションキー（と任意のソートキー）を持つ DynamoDB のインデックスで、いつでも追加でき、結果整合性の読み取りをサポートします。", "Partition key မတူ (sort key ထည့်လည်းရ) တဲ့ DynamoDB index ပါ၊ အချိန်မရွေး ထည့်လို့ရပြီး eventually consistent read ကို support လုပ်တယ်။"),
      example: L("Add a GSI on status to list all PENDING orders across every customer.", "status に GSI を追加して、全顧客の PENDING の注文を一覧表示します。", "Status ပေါ်မှာ GSI ထည့်ပြီး customer အားလုံးရဲ့ PENDING order တွေကို စာရင်းထုတ်တယ်။") },
    { term: 'DynamoDB on-demand mode',
      definition: L("A capacity mode billed per read and write request that scales instantly without capacity planning.", "読み取り・書き込みリクエストごとに課金され、キャパシティ計画なしで即座にスケールするキャパシティモードです。", "Read/write request တစ်ခုချင်းအလိုက် ငွေကောက်ပြီး capacity planning မလိုဘဲ ချက်ချင်း scale လုပ်တဲ့ capacity mode ပါ။"),
      example: L("A new campaign site with unknown traffic uses on-demand, then switches to provisioned once traffic is stable.", "トラフィックが不明な新しいキャンペーンサイトはオンデマンドで始め、安定したらプロビジョンドに切り替えます。", "Traffic မသိသေးတဲ့ campaign site အသစ်က on-demand နဲ့စပြီး traffic တည်ငြိမ်လာရင် provisioned ကို ပြောင်းတယ်။") },
    { term: 'DAX',
      definition: L("DynamoDB Accelerator: a fully managed, API-compatible in-memory cache for DynamoDB that delivers microsecond read latency.", "DynamoDB Accelerator：DynamoDB 用のフルマネージドで API 互換のインメモリキャッシュで、マイクロ秒の読み取りレイテンシーを実現します。", "DynamoDB Accelerator - DynamoDB အတွက် fully managed၊ API-compatible in-memory cache ဖြစ်ပြီး microsecond read latency ပေးတယ်။"),
      example: L("A flash-sale product page reads the same item thousands of times per second through DAX.", "タイムセールの商品ページは、DAX 経由で同じ項目を毎秒数千回読み取ります。", "Flash-sale product page က item တူတူကို DAX ကနေ တစ်စက္ကန့် ထောင်ချီ ဖတ်တယ်။") },
    { term: 'Lazy loading (cache-aside)',
      definition: L("A caching pattern where the app reads from the cache first and, on a miss, loads from the database and writes the result to the cache.", "アプリがまずキャッシュを読み、ミスした場合にデータベースから読み込んで結果をキャッシュに書き込むキャッシュパターンです。", "App က cache ကို အရင်ဖတ်ပြီး miss ဖြစ်ရင် database ကနေယူပြီး result ကို cache ထဲ ရေးထည့်တဲ့ caching pattern ပါ။"),
      example: L("The first visit to a product page queries RDS; the next 10,000 visits hit ElastiCache until the TTL expires.", "商品ページへの最初のアクセスは RDS をクエリし、続く 1 万回のアクセスは TTL が切れるまで ElastiCache から返されます。", "Product page ကို ပထမဆုံးဝင်တာက RDS ကို query လုပ်တယ်၊ နောက်ထပ် ၁၀,၀၀၀ ကြိမ်က TTL မကုန်မချင်း ElastiCache ကနေ ရတယ်။") },
    { term: 'AWS DMS',
      definition: L("AWS Database Migration Service: migrates data between databases with a full load plus ongoing change data capture while the source stays online.", "AWS Database Migration Service：ソースをオンラインのまま、フルロードと継続的な変更データキャプチャでデータベース間のデータを移行するサービスです。", "AWS Database Migration Service - source ကို online ထားရင်း full load နဲ့ ဆက်တိုက် change data capture နဲ့ database ကြား data ကို migrate လုပ်ပေးတယ်။"),
      example: L("Move PostgreSQL from Docker on EC2 to RDS, keep CDC running, then cut over in a short maintenance window.", "EC2 上の Docker の PostgreSQL を RDS に移し、CDC を動かし続けてから短いメンテナンス時間で切り替えます。", "EC2 ပေါ် Docker ထဲက PostgreSQL ကို RDS ကို ရွှေ့၊ CDC ဆက် run ထားပြီး maintenance window တိုတိုမှာ cut over လုပ်တယ်။") },
  ],
};
