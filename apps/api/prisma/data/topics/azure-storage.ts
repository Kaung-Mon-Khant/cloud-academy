import { L, type SeedTopic } from '../types.js';

export const topic: SeedTopic = {
  slug: 'azure-storage',
  icon: 'HardDrive',
  level: 'ASSOCIATE',
  exams: ['AZ-900', 'AZ-104'],
  name: L("Azure Storage", "Azure Storage（ストレージ）", "Azure Storage (သိုလှောင်မှု)"),
  description: L(
    "Storage accounts, redundancy (LRS to RA-GZRS), Blob/Files/Queue/Table and disks, access tiers and lifecycle rules, data protection, SAS and RBAC, network security, encryption and data-movement tools.",
    "ストレージアカウント、冗長性（LRS〜RA-GZRS）、Blob/Files/Queue/Table とディスク、アクセス層とライフサイクルルール、データ保護、SAS と RBAC、ネットワークセキュリティ、暗号化、データ移行ツールを学びます。",
    "Storage account၊ redundancy (LRS မှ RA-GZRS ထိ)၊ Blob/Files/Queue/Table နဲ့ disk၊ access tier နဲ့ lifecycle rule၊ data protection၊ SAS နဲ့ RBAC၊ network security၊ encryption နဲ့ data ရွှေ့တဲ့ tool တွေကို လေ့လာမယ်။",
  ),
  lesson: {
    minutes: 21,
    objectives: [
      L("Choose the right storage account type and redundancy option for a given durability, availability and budget requirement.",
        "耐久性・可用性・予算の要件に合わせて、適切なストレージアカウントの種類と冗長性オプションを選択できる。",
        "Durability၊ availability၊ budget လိုအပ်ချက်အလိုက် သင့်တော်တဲ့ storage account type နဲ့ redundancy ကို ရွေးနိုင်မယ်။"),
      L("Match Blob, Files, Queue, Table and managed disks to real workloads, and pick the correct blob type.",
        "Blob・Files・Queue・Table・マネージドディスクを実際のワークロードに対応付け、正しい BLOB の種類を選べる。",
        "Blob၊ Files၊ Queue၊ Table၊ managed disk တွေကို လက်တွေ့ workload နဲ့ တွဲပြီး မှန်ကန်တဲ့ blob type ကို ရွေးနိုင်မယ်။"),
      L("Reduce cost with Hot, Cool, Cold and Archive tiers and lifecycle management rules.",
        "Hot・Cool・Cold・Archive 層とライフサイクル管理ルールでコストを削減できる。",
        "Hot၊ Cool၊ Cold၊ Archive tier နဲ့ lifecycle management rule တွေနဲ့ cost လျှော့နိုင်မယ်။"),
      L("Protect data with soft delete, versioning and immutability policies.",
        "論理的な削除（soft delete）、バージョン管理、不変ポリシーでデータを保護できる。",
        "Soft delete၊ versioning၊ immutability policy တွေနဲ့ data ကို ကာကွယ်နိုင်မယ်။"),
      L("Secure access with SAS, stored access policies, Entra ID data roles, network rules, private endpoints and encryption.",
        "SAS、保存されたアクセスポリシー、Entra ID のデータロール、ネットワークルール、プライベートエンドポイント、暗号化でアクセスを保護できる。",
        "SAS၊ stored access policy၊ Entra ID data role၊ network rule၊ private endpoint နဲ့ encryption တွေနဲ့ access ကို လုံခြုံအောင် လုပ်နိုင်မယ်။"),
      L("Move data with Storage Explorer, AzCopy, Azure File Sync and Data Box.",
        "Storage Explorer・AzCopy・Azure File Sync・Data Box でデータを移動できる。",
        "Storage Explorer၊ AzCopy၊ Azure File Sync၊ Data Box တွေနဲ့ data ရွှေ့နိုင်မယ်။"),
    ],
    sections: [
      {
        id: "storage-accounts",
        title: L("Storage accounts: the container for all your data", "ストレージアカウント：すべてのデータの入れ物", "Storage account- data အားလုံးကို ထည့်ထားတဲ့ အိမ်"),
        blocks: [
          { type: 'p', text: L(
            "A **storage account** is a uniquely named namespace in Azure that holds your blobs, file shares, queues and tables. Think of it as a building with one street address: inside are different rooms (services), but every visitor reaches them through the same address, such as `https://mystorage.blob.core.windows.net`. Settings you choose at the account level (performance, redundancy, network rules, encryption) apply to everything inside.",
            "**ストレージアカウント**は、BLOB・ファイル共有・キュー・テーブルを格納する、Azure 内で一意の名前を持つ名前空間です。1 つの住所を持つ建物をイメージしてください。中には異なる部屋（サービス）がありますが、訪問者は `https://mystorage.blob.core.windows.net` のような同じ住所からアクセスします。アカウント単位で選ぶ設定（パフォーマンス・冗長性・ネットワークルール・暗号化）は中のすべてに適用されます。",
            "**Storage account** ဆိုတာ blob၊ file share၊ queue၊ table တွေကို သိမ်းထားတဲ့ Azure ထဲက နာမည်မထပ်တဲ့ namespace တစ်ခုပါ။ လိပ်စာတစ်ခုတည်းရှိတဲ့ အဆောက်အအုံလို့ မြင်ကြည့်ပါ- အထဲမှာ အခန်း (service) အမျိုးမျိုးရှိပေမယ့် `https://mystorage.blob.core.windows.net` လို လိပ်စာတစ်ခုတည်းကနေ ဝင်ရတယ်။ Account level မှာ ရွေးတဲ့ setting (performance၊ redundancy၊ network rule၊ encryption) တွေက အထဲက အရာအားလုံးကို သက်ရောက်တယ်။"
          ) },
          { type: 'table',
            head: [L("Account type", "アカウントの種類", "Account အမျိုးအစား"), L("Services", "サービス", "Service များ"), L("Redundancy", "冗長性", "Redundancy (အရန်ကူးထားမှု)"), L("Typical use", "主な用途", "အသုံးများတဲ့နေရာ")],
            rows: [
              [L("Standard general-purpose v2", "Standard 汎用 v2", "Standard general-purpose v2 (အထွေထွေသုံး)"), L("Blob (incl. Data Lake Gen2), Files, Queue, Table", "Blob（Data Lake Gen2 含む）、Files、Queue、Table", "Blob (Data Lake Gen2 အပါ)၊ Files၊ Queue၊ Table"), L("LRS, ZRS, GRS, RA-GRS, GZRS, RA-GZRS", "LRS・ZRS・GRS・RA-GRS・GZRS・RA-GZRS", "LRS၊ ZRS၊ GRS၊ RA-GRS၊ GZRS၊ RA-GZRS"), L("Default choice for most workloads", "ほとんどのワークロードの標準選択", "Workload အများစုအတွက် default ရွေးချယ်မှု")],
              [L("Premium block blobs", "Premium ブロック BLOB", "Premium block blob (SSD အမြန်)"), L("Block and append blobs only", "ブロック BLOB と追加 BLOB のみ", "Block blob နဲ့ append blob သာ"), L("LRS, ZRS", "LRS・ZRS", "LRS၊ ZRS"), L("Low-latency, high-transaction apps, IoT, analytics", "低遅延・高トランザクションのアプリ、IoT、分析", "Latency နည်းပြီး transaction များတဲ့ app၊ IoT၊ analytics")],
              [L("Premium file shares", "Premium ファイル共有", "Premium file share (SSD အမြန်)"), L("Azure Files only (SMB and NFS)", "Azure Files のみ（SMB と NFS）", "Azure Files သာ (SMB နဲ့ NFS)"), L("LRS, ZRS", "LRS・ZRS", "LRS၊ ZRS"), L("Enterprise file shares, NFS workloads", "エンタープライズのファイル共有、NFS ワークロード", "Enterprise file share၊ NFS workload")],
              [L("Premium page blobs", "Premium ページ BLOB", "Premium page blob (SSD အမြန်)"), L("Page blobs only", "ページ BLOB のみ", "Page blob သာ"), L("LRS only", "LRS のみ", "LRS သာ"), L("Unmanaged VM disks (legacy), random read/write", "非管理 VM ディスク（レガシー）、ランダム読み書き", "Unmanaged VM disk (အဟောင်း)၊ random read/write")],
            ] },
          { type: 'list', items: [
            L("**Naming rules**: 3 to 24 characters, **lowercase letters and numbers only** (no hyphens, no uppercase), and **globally unique** across all of Azure because the name becomes part of a public DNS name.",
              "**命名規則**：3〜24 文字、**英小文字と数字のみ**（ハイフンや大文字は不可）、名前は公開 DNS 名の一部になるため Azure 全体で**グローバルに一意**である必要があります。",
              "**Naming rule**: စာလုံး ၃ လုံးမှ ၂၄ လုံးထိ၊ **lowercase စာလုံးနဲ့ ဂဏန်းသာ** (hyphen၊ uppercase မရ)၊ နာမည်က public DNS name ထဲ ပါသွားလို့ Azure တစ်ခုလုံးမှာ **globally unique** ဖြစ်ရမယ်။"),
            L("**Performance** (Standard = HDD-backed, Premium = SSD-backed) is fixed at creation. To switch, you create a new account and copy the data.",
              "**パフォーマンス**（Standard = HDD ベース、Premium = SSD ベース）は作成時に決まり、変更するには新しいアカウントを作ってデータをコピーします。",
              "**Performance** (Standard = HDD၊ Premium = SSD) ကို ဖန်တီးချိန်မှာ သတ်မှတ်ပြီး ပြောင်းချင်ရင် account အသစ်ဆောက်ပြီး data copy လုပ်ရတယ်။"),
            L("Enabling **hierarchical namespace** on a GPv2 account turns Blob storage into **Azure Data Lake Storage Gen2** with real folders and POSIX-style ACLs for big-data analytics.",
              "GPv2 アカウントで**階層型名前空間**を有効にすると、Blob ストレージが本物のフォルダーと POSIX 形式の ACL を持つ **Azure Data Lake Storage Gen2** になり、ビッグデータ分析に使えます。",
              "GPv2 account မှာ **hierarchical namespace** ဖွင့်လိုက်ရင် Blob storage က တကယ့် folder နဲ့ POSIX-style ACL ပါတဲ့ **Azure Data Lake Storage Gen2** ဖြစ်သွားပြီး big data analytics အတွက် သုံးလို့ရတယ်။"),
          ] },
          { type: 'code', lang: 'bash', code:
`# Create a resource group and a Standard GPv2 account with ZRS
az group create --name rg-storage-lab --location japaneast

az storage account create \\
  --name stkmklab2026 \\
  --resource-group rg-storage-lab \\
  --location japaneast \\
  --kind StorageV2 \\
  --sku Standard_ZRS \\
  --min-tls-version TLS1_2 \\
  --allow-blob-public-access false`,
            caption: L("The SKU name combines performance and redundancy, e.g. Standard_ZRS or Premium_LRS", "SKU 名はパフォーマンスと冗長性の組み合わせです（例：Standard_ZRS、Premium_LRS）", "SKU name က performance နဲ့ redundancy ကို ပေါင်းထားတာပါ (ဥပမာ Standard_ZRS၊ Premium_LRS)") },
          { type: 'callout', tone: 'exam', text: L(
            "If a question needs **Blob + Files + Queue + Table** in one account, or needs **GRS/GZRS**, the answer is **Standard general-purpose v2**. Premium accounts support only LRS/ZRS and only one service family.",
            "1 つのアカウントで **Blob + Files + Queue + Table** が必要、または **GRS/GZRS** が必要な問題なら、答えは **Standard 汎用 v2** です。Premium アカウントは LRS/ZRS のみで、1 種類のサービスしか使えません。",
            "Account တစ်ခုထဲမှာ **Blob + Files + Queue + Table** လိုတယ်၊ ဒါမှမဟုတ် **GRS/GZRS** လိုတယ်ဆိုရင် အဖြေက **Standard general-purpose v2** ပါ။ Premium account တွေက LRS/ZRS ပဲရပြီး service အမျိုးအစားတစ်ခုပဲ သုံးလို့ရတယ်။"
          ) },
        ],
      },
      {
        id: "redundancy",
        title: L("Redundancy: how many copies, and where", "冗長性：コピーをいくつ、どこに置くか", "Redundancy- copy ဘယ်နှစ်ခု၊ ဘယ်မှာ ထားမလဲ"),
        blocks: [
          { type: 'p', text: L(
            "Azure always keeps **at least three copies** of your data. The redundancy option decides **where** those copies live. A simple analogy: LRS is three photocopies in one office drawer; ZRS is one copy in each of three buildings in the same city; GRS adds another three copies in an office in a different city hundreds of kilometres away.",
            "Azure は常にデータの**コピーを最低 3 つ**保持します。冗長性オプションは、それらのコピーを**どこに**置くかを決めます。たとえると、LRS は 1 つのオフィスの引き出しに 3 部のコピー、ZRS は同じ都市の 3 つのビルに 1 部ずつ、GRS はさらに数百 km 離れた別の都市のオフィスに 3 部を追加するイメージです。",
            "Azure က data ကို အမြဲ **အနည်းဆုံး copy ၃ ခု** ထားပါတယ်။ Redundancy option က အဲဒီ copy တွေကို **ဘယ်မှာ** ထားမလဲ ဆုံးဖြတ်တယ်။ ဥပမာ- LRS က ရုံးတစ်ခုရဲ့ အံဆွဲထဲမှာ မိတ္တူ ၃ စောင်၊ ZRS က မြို့တစ်မြို့ထဲက အဆောက်အအုံ ၃ ခုမှာ တစ်စောင်စီ၊ GRS က ကီလိုမီတာ ရာနဲ့ချီဝေးတဲ့ တခြားမြို့က ရုံးမှာ နောက်ထပ် ၃ စောင် ထပ်ထားတာပါ။"
          ) },
          { type: 'diagram', text:
`PRIMARY REGION (Japan East)            SECONDARY (Japan West)
+-------------------------------+      +-----------------------+
| LRS : [DC1: c c c]            |      |                       |
| ZRS : [Z1: c] [Z2: c] [Z3: c] |      |                       |
| GRS : [DC1: c c c]  ---async--+----->| [DC: c c c]  (LRS)    |
| GZRS: [Z1:c][Z2:c][Z3:c] -----+----->| [DC: c c c]  (LRS)    |
+-------------------------------+      +-----------------------+
 sync writes inside the primary       RA- prefix = you can READ
                                      the secondary any time`,
            caption: L("LRS/ZRS stay in one region; GRS/GZRS asynchronously copy to the paired region", "LRS/ZRS は 1 リージョン内、GRS/GZRS はペアリージョンへ非同期にコピー", "LRS/ZRS က region တစ်ခုထဲမှာပဲ၊ GRS/GZRS က paired region ဆီ asynchronous copy လုပ်တယ်") },
          { type: 'table',
            head: [L("Option", "オプション", "ရွေးချယ်မှု"), L("Copies and placement", "コピー数と配置", "Copy အရေအတွက်နဲ့ နေရာ"), L("Survives", "耐えられる障害", "ခံနိုင်တဲ့ ပျက်စီးမှု"), L("Read from secondary?", "セカンダリ読み取り", "Secondary ကနေ ဖတ်လို့ရလား")],
            rows: [
              [L("LRS", "LRS（ローカル冗長）", "LRS (datacenter တစ်ခုတည်း)"), L("3 copies in one datacenter", "1 つのデータセンターに 3 コピー", "Datacenter တစ်ခုထဲမှာ copy ၃ ခု"), L("Disk/rack failure", "ディスク・ラック障害", "Disk/rack ပျက်တာ"), L("No", "不可", "မရ")],
              [L("ZRS", "ZRS（ゾーン冗長）", "ZRS (zone အလိုက်)"), L("3 copies across 3 availability zones", "3 つの可用性ゾーンに 3 コピー", "Availability zone ၃ ခုမှာ copy ၃ ခု"), L("Whole datacenter/zone failure", "データセンター・ゾーン全体の障害", "Datacenter/zone တစ်ခုလုံး ပျက်တာ"), L("No", "不可", "မရ")],
              [L("GRS", "GRS（geo 冗長）", "GRS (region နှစ်ခု)"), L("LRS in primary + LRS in paired region (6 copies)", "プライマリで LRS + ペアリージョンで LRS（6 コピー）", "Primary မှာ LRS + paired region မှာ LRS (copy ၆ ခု)"), L("Regional disaster (after failover)", "リージョン災害（フェールオーバー後）", "Region တစ်ခုလုံး ဘေးအန္တရာယ် (failover ပြီးမှ)"), L("No", "不可", "မရ")],
              [L("RA-GRS", "RA-GRS（読み取りアクセス geo 冗長）", "RA-GRS (secondary ဖတ်လို့ရ)"), L("Same as GRS", "GRS と同じ", "GRS နဲ့ အတူတူ"), L("Regional disaster", "リージョン災害", "Region ဘေးအန္တရာယ်"), L("Yes, via `-secondary` endpoint", "可（`-secondary` エンドポイント経由）", "ရ (`-secondary` endpoint ကနေ)")],
              [L("GZRS", "GZRS（geo ゾーン冗長）", "GZRS (zone + region နှစ်ခု)"), L("ZRS in primary + LRS in paired region", "プライマリで ZRS + ペアリージョンで LRS", "Primary မှာ ZRS + paired region မှာ LRS"), L("Zone failure AND regional disaster", "ゾーン障害とリージョン災害の両方", "Zone ပျက်တာရော region ဘေးအန္တရာယ်ရော"), L("No", "不可", "မရ")],
              [L("RA-GZRS", "RA-GZRS（読み取りアクセス geo ゾーン冗長）", "RA-GZRS (zone + secondary ဖတ်လို့ရ)"), L("Same as GZRS", "GZRS と同じ", "GZRS နဲ့ အတူတူ"), L("Maximum protection", "最大の保護", "အမြင့်ဆုံး ကာကွယ်မှု"), L("Yes", "可", "ရ")],
            ] },
          { type: 'p', text: L(
            "**Failover**: with GRS/GZRS the secondary is normally not writable. If the primary region has a serious outage, you can start a **customer-managed failover** so the secondary becomes the new primary. Because geo-replication is **asynchronous**, writes made after the **Last Sync Time** may be lost. After an unplanned failover the account becomes **LRS** in the new primary region, so you must re-enable geo-redundancy afterwards. Microsoft can also perform a Microsoft-managed failover in extreme regional disasters.",
            "**フェールオーバー**：GRS/GZRS のセカンダリは通常書き込みできません。プライマリリージョンで重大な障害が起きた場合、**顧客管理のフェールオーバー**を開始してセカンダリを新しいプライマリにできます。geo レプリケーションは**非同期**なので、**最終同期時刻（Last Sync Time）**以降の書き込みは失われる可能性があります。計画外フェールオーバー後、アカウントは新しいプライマリリージョンで **LRS** になるため、後で geo 冗長を再設定する必要があります。極端なリージョン災害時には Microsoft 管理のフェールオーバーが行われることもあります。",
            "**Failover**: GRS/GZRS မှာ secondary ကို ပုံမှန်အားဖြင့် write လုပ်လို့ မရဘူး။ Primary region မှာ ပြင်းထန်တဲ့ outage ဖြစ်ရင် **customer-managed failover** စလိုက်ပြီး secondary ကို primary အသစ် ဖြစ်စေနိုင်တယ်။ Geo-replication က **asynchronous** ဖြစ်လို့ **Last Sync Time** နောက်ပိုင်း write ထားတဲ့ data ပျောက်နိုင်တယ်။ Unplanned failover ပြီးရင် account က primary အသစ်မှာ **LRS** ဖြစ်သွားလို့ geo-redundancy ကို ပြန်ဖွင့်ပေးရမယ်။ အလွန်ကြီးတဲ့ region ဘေးအန္တရာယ်မှာတော့ Microsoft-managed failover လုပ်နိုင်တယ်။"
          ) },
          { type: 'callout', tone: 'memory', text: L(
            "Read the letters: **L**ocal, **Z**one, **G**eo, **RA** = **R**ead **A**ccess. **GZRS = G + ZRS**: zones at home, plus a copy abroad. Need to read during an outage without failing over? You need the **RA-** prefix.",
            "文字で覚えましょう：**L**ocal、**Z**one、**G**eo、**RA** = **R**ead **A**ccess。**GZRS = G + ZRS**：国内はゾーン分散、さらに海外（別リージョン）にもコピー。フェールオーバーせずに障害中も読み取りたいなら **RA-** が必要です。",
            "စာလုံးနဲ့ မှတ်ပါ- **L**ocal၊ **Z**one၊ **G**eo၊ **RA** = **R**ead **A**ccess။ **GZRS = G + ZRS**- ကိုယ့် region ထဲမှာ zone ခွဲထား၊ ဝေးတဲ့ region မှာလည်း copy ထား။ Failover မလုပ်ဘဲ outage အချိန် ဖတ်ချင်ရင် **RA-** လိုတယ်။"
          ) },
        ],
      },
      {
        id: "services-and-blob-types",
        title: L("Storage services, managed disks and blob types", "ストレージサービス、マネージドディスク、BLOB の種類", "Storage service များ၊ managed disk နဲ့ blob type များ"),
        blocks: [
          { type: 'table',
            head: [L("Service", "サービス", "ဝန်ဆောင်မှု (Service)"), L("What it stores", "格納するもの", "ဘာသိမ်းလဲ"), L("Real-world example", "実例", "လက်တွေ့ဥပမာ")],
            rows: [
              [L("Blob storage", "Blob ストレージ", "Blob storage (object သိုလှောင်)"), L("Unstructured objects (images, video, backups, logs) in containers", "コンテナー内の非構造化オブジェクト（画像・動画・バックアップ・ログ）", "Container ထဲက unstructured object (ပုံ၊ video၊ backup၊ log)"), L("Product photos for an e-commerce site", "EC サイトの商品画像", "E-commerce site ရဲ့ ပစ္စည်းဓာတ်ပုံ")],
              [L("Azure Files", "Azure Files（ファイル共有）", "Azure Files (file share မျှသုံး)"), L("Fully managed file shares over SMB (port 445) or NFS", "SMB（ポート 445）または NFS のフルマネージドファイル共有", "SMB (port 445) သို့ NFS နဲ့ fully managed file share"), L("Replace an on-premises `\\\\fileserver\\share`", "オンプレミスの `\\\\fileserver\\share` を置き換える", "On-premises `\\\\fileserver\\share` ကို အစားထိုး")],
              [L("Queue storage", "Queue ストレージ", "Queue storage (message တန်းစီ)"), L("Messages up to 64 KB for asynchronous processing", "非同期処理用の最大 64 KB のメッセージ", "Asynchronous processing အတွက် 64 KB ထိ message"), L("Web front end queues image-resize jobs for a worker", "Web フロントエンドが画像リサイズ処理をワーカー用にキューに入れる", "Web front end က image-resize job ကို worker အတွက် queue ထဲ ထည့်")],
              [L("Table storage", "Table ストレージ", "Table storage (NoSQL ဇယား)"), L("Schemaless NoSQL key/attribute entities", "スキーマレスな NoSQL のキー/属性エンティティ", "Schema မလိုတဲ့ NoSQL key/attribute entity"), L("User profiles or device settings", "ユーザープロファイルやデバイス設定", "User profile သို့ device setting")],
              [L("Managed disks", "マネージドディスク", "Managed disk (VM အတွက် disk)"), L("Block-level volumes for VMs (Ultra, Premium SSD v2, Premium SSD, Standard SSD, Standard HDD)", "VM 用のブロックレベルボリューム（Ultra、Premium SSD v2、Premium SSD、Standard SSD、Standard HDD）", "VM အတွက် block-level volume (Ultra၊ Premium SSD v2၊ Premium SSD၊ Standard SSD၊ Standard HDD)"), L("OS and data disks of a SQL Server VM", "SQL Server VM の OS ディスクとデータディスク", "SQL Server VM ရဲ့ OS disk နဲ့ data disk")],
            ] },
          { type: 'p', text: L(
            "**Managed disks** are a separate Azure resource: Azure manages the underlying storage account for you, so you just pick a size and disk type. Disks can be backed up with snapshots, and they support LRS or ZRS (ZRS for Premium SSD and Standard SSD).",
            "**マネージドディスク**は独立した Azure リソースで、基盤となるストレージアカウントは Azure が管理するため、サイズとディスクの種類を選ぶだけです。スナップショットでバックアップでき、LRS または ZRS（Premium SSD と Standard SSD で ZRS 可）をサポートします。",
            "**Managed disk** က သီးခြား Azure resource ပါ- နောက်ကွယ်က storage account ကို Azure က စီမံပေးလို့ ကိုယ်က size နဲ့ disk type ပဲ ရွေးရုံပါ။ Snapshot နဲ့ backup လုပ်လို့ရပြီး LRS သို့ ZRS (Premium SSD နဲ့ Standard SSD မှာ ZRS ရ) ကို support လုပ်တယ်။"
          ) },
          { type: 'list', items: [
            L("**Block blobs**: made of blocks uploaded separately and committed; best for files, documents, media and backups. The default and most common type.",
              "**ブロック BLOB**：個別にアップロードしてコミットするブロックで構成され、ファイル・文書・メディア・バックアップに最適です。既定で最も一般的な種類です。",
              "**Block blob**: block တွေကို သီးခြားစီ upload ပြီး commit လုပ်တာ၊ file၊ document၊ media၊ backup အတွက် အကောင်းဆုံး။ Default ဖြစ်ပြီး အသုံးအများဆုံး type ပါ။"),
            L("**Append blobs**: optimized for **append-only** writes; you can add to the end but not modify existing blocks. Perfect for logging.",
              "**追加 BLOB（Append blob）**：**追記専用**の書き込みに最適化されており、末尾への追加はできますが既存ブロックは変更できません。ログに最適です。",
              "**Append blob**: **နောက်ဆုံးမှာပဲ ထပ်ထည့်** တဲ့ write အတွက် optimize လုပ်ထားတယ်၊ ရှိပြီးသား block ကို မပြင်နိုင်ဘူး။ Logging အတွက် အကောင်းဆုံး။"),
            L("**Page blobs**: collections of 512-byte pages for **random read/write**; they back VHD files for VM disks.",
              "**ページ BLOB**：**ランダム読み書き**用の 512 バイトのページの集合で、VM ディスクの VHD ファイルに使われます。",
              "**Page blob**: **random read/write** အတွက် 512-byte page တွေ စုထားတာ၊ VM disk ရဲ့ VHD file အတွက် သုံးတယ်။"),
          ] },
          { type: 'callout', tone: 'exam', text: L(
            "Blob type is chosen at upload and **cannot be changed later**. Access tiers (Hot/Cool/Cold/Archive) apply **only to block blobs**. A question about \"VM disk VHD\" points to page blobs; \"application log file that only grows\" points to append blobs.",
            "BLOB の種類はアップロード時に決まり、**後から変更できません**。アクセス層（Hot/Cool/Cold/Archive）は**ブロック BLOB のみ**に適用されます。「VM ディスクの VHD」ならページ BLOB、「増え続けるアプリのログファイル」なら追加 BLOB です。",
            "Blob type ကို upload ချိန်မှာ ရွေးပြီး **နောက်မှ ပြောင်းလို့မရဘူး**။ Access tier (Hot/Cool/Cold/Archive) က **block blob မှာပဲ** သက်ဆိုင်တယ်။ \"VM disk VHD\" ဆိုရင် page blob၊ \"ကြီးလာနေတဲ့ application log file\" ဆိုရင် append blob ပါ။"
          ) },
        ],
      },
      {
        id: "access-tiers-lifecycle",
        title: L("Access tiers and lifecycle management: pay for how often you read", "アクセス層とライフサイクル管理：読む頻度に応じて支払う", "Access tier နဲ့ lifecycle management- ဘယ်လောက်မကြာခဏ ဖတ်လဲပေါ်မူတည်ပြီး ပေး"),
        blocks: [
          { type: 'p', text: L(
            "Not all data is equally \"hot\". Think of a home: the fridge (Hot) holds food you eat daily, the cupboard (Cool) holds things used monthly, the storeroom (Cold) holds seasonal items, and a rented warehouse outside the city (Archive) holds boxes you almost never open; getting a box back takes hours. The colder the tier, the **cheaper the storage** but the **more expensive the access**, and the longer the **minimum retention**.",
            "すべてのデータが同じように「ホット」なわけではありません。家にたとえると、冷蔵庫（Hot）には毎日食べるもの、戸棚（Cool）には月に一度使うもの、物置（Cold）には季節物、郊外の貸し倉庫（Archive）にはほとんど開けない箱を置き、箱を取り出すには数時間かかります。層が冷たいほど**保存コストは安く**、**アクセスコストは高く**、**最小保持期間**は長くなります。",
            "Data အားလုံးက တူညီစွာ \"hot\" မဖြစ်ပါဘူး။ အိမ်နဲ့ ဥပမာပေးရရင်- ရေခဲသေတ္တာ (Hot) ထဲမှာ နေ့တိုင်းစားတဲ့ အစားအစာ၊ ဗီရို (Cool) ထဲမှာ လစဉ်သုံးတဲ့ ပစ္စည်း၊ ဂိုဒေါင်ခန်း (Cold) ထဲမှာ ရာသီအလိုက်ပစ္စည်း၊ မြို့ပြင်က ငှားထားတဲ့ ဂိုဒေါင် (Archive) ထဲမှာ မဖွင့်သလောက်ရှိတဲ့ သေတ္တာတွေ ထားတယ်၊ ပြန်ယူရင် နာရီနဲ့ချီ ကြာတယ်။ Tier အေးလေ **storage စျေးသက်သာ** လေ၊ ဒါပေမယ့် **access စျေးကြီး** ပြီး **minimum retention** ပိုရှည်လေပါ။"
          ) },
          { type: 'table',
            head: [L("Tier", "層", "Tier (အဆင့်)"), L("Minimum retention", "最小保持期間", "အနည်းဆုံး သိမ်းရမယ့်ကာလ"), L("Availability", "可用性", "ရရှိနိုင်မှု (Availability)"), L("Use for", "用途", "သုံးသင့်တဲ့နေရာ")],
            rows: [
              [L("Hot", "Hot（ホット）", "Hot (ပူ)"), L("None", "なし", "မရှိ"), L("Online, millisecond access", "オンライン、ミリ秒アクセス", "Online၊ millisecond access"), L("Active website content, frequently read data", "稼働中の Web コンテンツ、頻繁に読むデータ", "Active website content၊ မကြာခဏ ဖတ်တဲ့ data")],
              [L("Cool", "Cool（クール）", "Cool (အေး)"), L("30 days", "30 日", "၃၀ ရက်"), L("Online", "オンライン", "Online (ချက်ချင်းရ)"), L("Short-term backups, data read monthly", "短期バックアップ、月に一度読むデータ", "Short-term backup၊ လစဉ်ဖတ်တဲ့ data")],
              [L("Cold", "Cold（コールド）", "Cold (ပိုအေး)"), L("90 days", "90 日", "၉၀ ရက်"), L("Online", "オンライン", "Online (ချက်ချင်းရ)"), L("Rarely read data that must still be instant", "めったに読まないが即時アクセスが必要なデータ", "ရှားရှားပါးပါးဖတ်ပေမယ့် ချက်ချင်းရရမယ့် data")],
              [L("Archive", "Archive（アーカイブ）", "Archive (မော်ကွန်း)"), L("180 days", "180 日", "၁၈၀ ရက်"), L("**Offline**: must rehydrate first (hours)", "**オフライン**：先にリハイドレートが必要（数時間）", "**Offline**: အရင် rehydrate လုပ်ရ (နာရီနဲ့ချီ)"), L("Compliance records, long-term backups", "コンプライアンス記録、長期バックアップ", "Compliance record၊ ရေရှည် backup")],
            ] },
          { type: 'list', items: [
            L("**Early deletion**: deleting or moving a blob out of Cool/Cold/Archive before its minimum period incurs a prorated charge for the remaining days. Example: a blob deleted after 60 days in Archive is charged for the remaining 120 days.",
              "**早期削除**：最小期間より前に Cool/Cold/Archive から BLOB を削除・移動すると、残り日数分が日割りで課金されます。例：Archive で 60 日後に削除した BLOB は残り 120 日分が課金されます。",
              "**Early deletion**: Cool/Cold/Archive ထဲက blob ကို minimum ကာလ မပြည့်ခင် ဖျက်/ရွှေ့ရင် ကျန်တဲ့ရက်အတွက် အချိုးကျ ကျသင့်တယ်။ ဥပမာ- Archive ထဲမှာ ၆၀ ရက်နေပြီး ဖျက်တဲ့ blob ကို ကျန် ၁၂၀ ရက်အတွက် ကျသင့်တယ်။"),
            L("**Rehydration** from Archive: change the tier to Hot/Cool/Cold or copy the blob to an online tier. **Standard priority** can take up to 15 hours; **High priority** can finish in under 1 hour for objects under 10 GB, at a higher cost.",
              "Archive からの**リハイドレート**：層を Hot/Cool/Cold に変更するか、BLOB をオンライン層にコピーします。**標準優先度**は最大 15 時間、**高優先度**は 10 GB 未満のオブジェクトなら 1 時間未満で完了できますが、コストは高くなります。",
              "Archive ကနေ **rehydration**: tier ကို Hot/Cool/Cold ပြောင်းတာ ဒါမှမဟုတ် blob ကို online tier ဆီ copy လုပ်တာ။ **Standard priority** က ၁၅ နာရီထိ ကြာနိုင်တယ်၊ **High priority** က 10 GB အောက် object ဆိုရင် ၁ နာရီအောက်မှာ ပြီးနိုင်ပေမယ့် စျေးပိုကြီးတယ်။"),
            L("The account has a **default access tier** (Hot by default) that blobs inherit. **Archive can only be set per blob**, never as the account default.",
              "アカウントには BLOB が継承する**既定のアクセス層**（既定は Hot）があります。**Archive は BLOB ごとにしか設定できず**、アカウントの既定にはできません。",
              "Account မှာ blob တွေ အမွေဆက်ခံတဲ့ **default access tier** (default က Hot) ရှိတယ်။ **Archive ကို blob တစ်ခုချင်းစီမှာပဲ သတ်မှတ်လို့ရပြီး** account default မလုပ်နိုင်ဘူး။"),
          ] },
          { type: 'p', text: L(
            "**Lifecycle management** automates tier changes and deletion with JSON rules evaluated about once a day (new or changed policies can take up to 24 hours to take effect). Rules filter by blob type and prefix, and act on days since modification, creation or last access (last access requires **access time tracking** to be enabled).",
            "**ライフサイクル管理**は、1 日 1 回程度評価される JSON ルールで層の変更や削除を自動化します（新規・変更したポリシーの反映には最大 24 時間かかることがあります）。ルールは BLOB の種類とプレフィックスで絞り込み、変更・作成・最終アクセスからの日数で動作します（最終アクセスには**アクセス時間の追跡**の有効化が必要）。",
            "**Lifecycle management** က တစ်ရက်တစ်ခါလောက် စစ်ဆေးတဲ့ JSON rule တွေနဲ့ tier ပြောင်းတာ၊ ဖျက်တာကို automate လုပ်ပေးတယ် (policy အသစ်/ပြင်ထားတာ သက်ရောက်ဖို့ ၂၄ နာရီထိ ကြာနိုင်)။ Rule တွေက blob type နဲ့ prefix နဲ့ filter လုပ်ပြီး modify/create/last access လုပ်တဲ့နေ့ကစပြီး ရက်အရေအတွက်နဲ့ အလုပ်လုပ်တယ် (last access အတွက် **access time tracking** ဖွင့်ထားရမယ်)။"
          ) },
          { type: 'code', lang: 'json', code:
`{
  "rules": [
    {
      "name": "logs-to-cold-then-delete",
      "enabled": true,
      "type": "Lifecycle",
      "definition": {
        "filters": { "blobTypes": ["blockBlob"], "prefixMatch": ["logs/"] },
        "actions": {
          "baseBlob": {
            "tierToCool":    { "daysAfterModificationGreaterThan": 30 },
            "tierToArchive": { "daysAfterModificationGreaterThan": 180 },
            "delete":        { "daysAfterModificationGreaterThan": 2555 }
          }
        }
      }
    }
  ]
}`,
            caption: L("Move logs to Cool after 30 days, Archive after 180, delete after about 7 years", "ログを 30 日後に Cool、180 日後に Archive に移動し、約 7 年後に削除", "Log တွေကို ၃၀ ရက်ကြာရင် Cool၊ ၁၈၀ ရက်ကြာရင် Archive ရွှေ့ပြီး ၇ နှစ်လောက်ကြာရင် ဖျက်") },
          { type: 'callout', tone: 'memory', text: L(
            "**30 - 90 - 180**: Cool 30, Cold 90, Archive 180 days. Each step colder roughly doubles or triples the minimum stay. Archive is the only **offline** tier.",
            "**30 - 90 - 180**：Cool 30 日、Cold 90 日、Archive 180 日。冷たくなるほど最小保持期間が長くなります。オフライン層は Archive だけです。",
            "**30 - 90 - 180**: Cool ၃၀၊ Cold ၉၀၊ Archive ၁၈၀ ရက်။ Tier အေးလေ minimum ကာလ ရှည်လေ။ **Offline** tier က Archive တစ်ခုတည်းပါ။"
          ) },
        ],
      },
      {
        id: "data-protection",
        title: L("Data protection: soft delete, versioning and immutability", "データ保護：論理的な削除・バージョン管理・不変性", "Data protection- soft delete၊ versioning နဲ့ immutability"),
        blocks: [
          { type: 'p', text: L(
            "Redundancy protects against **hardware and datacenter failures**, but it happily replicates your mistakes: if someone deletes a blob, all six GRS copies are deleted too. Data protection features protect against **human error, bad scripts and ransomware**.",
            "冗長性は**ハードウェアやデータセンターの障害**からは守りますが、誤操作もそのまま複製します。誰かが BLOB を削除すると、GRS の 6 つのコピーもすべて削除されます。データ保護機能は**人的ミス、不具合のあるスクリプト、ランサムウェア**から守ります。",
            "Redundancy က **hardware နဲ့ datacenter ပျက်တာ** ကို ကာကွယ်ပေမယ့် ကိုယ့်အမှားကိုလည်း copy ကူးပေးတယ်- တစ်ယောက်ယောက်က blob ကို ဖျက်လိုက်ရင် GRS copy ၆ ခုလုံး ပျက်သွားတယ်။ Data protection feature တွေက **လူ့အမှား၊ မှားနေတဲ့ script၊ ransomware** တွေကို ကာကွယ်ပေးတယ်။"
          ) },
          { type: 'table',
            head: [L("Feature", "機能", "Feature (လုပ်ဆောင်ချက်)"), L("Protects against", "防ぐもの", "ကာကွယ်ပေးတာ"), L("Key detail", "ポイント", "အဓိကအချက်")],
            rows: [
              [L("Blob soft delete", "BLOB の論理的な削除", "Blob soft delete (ဖျက်ပြီးသား ပြန်ယူ)"), L("Accidental deletion/overwrite of blobs", "BLOB の誤削除・上書き", "Blob ကို မတော်တဆ ဖျက်/overwrite လုပ်တာ"), L("Retention 1 to 365 days; undelete within that window", "保持期間 1〜365 日、その間なら復元可能", "Retention ၁ ရက်မှ ၃၆၅ ရက်၊ အဲဒီကာလအတွင်း undelete လုပ်လို့ရ")],
              [L("Container soft delete", "コンテナーの論理的な削除", "Container soft delete (container ပြန်ယူ)"), L("Deleting a whole container", "コンテナー全体の削除", "Container တစ်ခုလုံး ဖျက်တာ"), L("Restores the container and its blobs", "コンテナーと BLOB を復元", "Container နဲ့ အထဲက blob တွေ ပြန်ယူ")],
              [L("File share soft delete", "ファイル共有の論理的な削除", "File share soft delete (share ပြန်ယူ)"), L("Deleting an Azure file share", "Azure ファイル共有の削除", "Azure file share ဖျက်တာ"), L("Enabled by default on new accounts", "新規アカウントでは既定で有効", "Account အသစ်တွေမှာ default ဖွင့်ထား")],
              [L("Blob versioning", "BLOB のバージョン管理", "Blob versioning (version အဟောင်းများ)"), L("Overwrites and changes", "上書きや変更", "Overwrite နဲ့ ပြောင်းလဲမှု"), L("Every write creates a previous version you can promote", "書き込みごとに以前のバージョンが作られ、昇格して戻せる", "Write တိုင်း version အဟောင်း ဖန်တီးပြီး ပြန် promote လုပ်လို့ရ")],
              [L("Point-in-time restore", "ポイントインタイムリストア", "Point-in-time restore (အချိန်တစ်ခုသို့ ပြန်)"), L("Large-scale corruption", "大規模な破損", "အကြီးအကျယ် ပျက်စီးမှု"), L("Block blobs; needs versioning, change feed and soft delete", "ブロック BLOB 対象、バージョン管理・変更フィード・論理的な削除が必要", "Block blob အတွက်၊ versioning၊ change feed၊ soft delete လို")],
              [L("Immutability (WORM)", "不変性（WORM）", "Immutability (WORM- ပြင်/ဖျက်မရ)"), L("Any modification or deletion, even by admins", "管理者を含むあらゆる変更・削除", "Admin ပါ မည်သူမဆို ပြင်/ဖျက်တာ"), L("Time-based retention or legal hold", "時間ベースの保持またはリーガルホールド", "Time-based retention သို့ legal hold")],
            ] },
          { type: 'p', text: L(
            "**Immutable storage** makes blobs **WORM** (Write Once, Read Many). A **time-based retention policy** keeps data unchangeable for a set number of days; once the policy is **locked**, nobody (not even a subscription Owner) can shorten it or delete the data until it expires. A **legal hold** keeps data immutable until the hold tag is removed, useful during an investigation with no known end date. Financial regulators (for example SEC 17a-4) commonly require this.",
            "**不変ストレージ**は BLOB を **WORM**（Write Once, Read Many）にします。**時間ベースの保持ポリシー**は指定日数のあいだデータを変更不可にし、ポリシーを**ロック**すると期限まで誰も（サブスクリプションの所有者でさえ）期間を短縮したりデータを削除したりできません。**リーガルホールド**はタグを外すまでデータを不変に保ち、終了日が未定の調査中に役立ちます。金融規制（例：SEC 17a-4）でよく求められます。",
            "**Immutable storage** က blob ကို **WORM** (Write Once, Read Many) ဖြစ်စေတယ်။ **Time-based retention policy** က သတ်မှတ်ရက်အတွင်း data ကို ပြင်မရအောင် ထားပြီး policy ကို **lock** လုပ်ပြီးရင် သက်တမ်းမကုန်မချင်း ဘယ်သူမှ (subscription Owner တောင်) ကာလကို မလျှော့နိုင်၊ data ကို မဖျက်နိုင်တော့ဘူး။ **Legal hold** က tag မဖြုတ်မချင်း immutable ထားပေးလို့ ဘယ်တော့ပြီးမလဲ မသိတဲ့ စုံစမ်းစစ်ဆေးမှုအတွက် အသုံးဝင်တယ်။ ငွေကြေးဆိုင်ရာ စည်းမျဉ်း (ဥပမာ SEC 17a-4) တွေက မကြာခဏ တောင်းတယ်။"
          ) },
          { type: 'callout', tone: 'warn', text: L(
            "Soft delete does not stop someone from deleting the **storage account itself**. Add a **CanNotDelete resource lock** on the account to protect it at the management-plane level.",
            "論理的な削除は**ストレージアカウント自体**の削除は防げません。アカウントに **CanNotDelete リソースロック**を付けて、管理プレーンのレベルで保護しましょう。",
            "Soft delete က **storage account ကိုယ်တိုင်** ဖျက်တာကို မတားနိုင်ဘူး။ Management plane level မှာ ကာကွယ်ဖို့ account ပေါ်မှာ **CanNotDelete resource lock** ထည့်ပါ။"
          ) },
          { type: 'callout', tone: 'exam', text: L(
            "Scenario keywords: \"recover a deleted blob\" = **soft delete**; \"restore yesterday's content of an overwritten file\" = **versioning**; \"no one can modify or delete for 7 years\" = **locked time-based retention policy**; \"keep until the lawsuit ends\" = **legal hold**.",
            "シナリオのキーワード：「削除した BLOB を復元」= **論理的な削除**、「上書きしたファイルを昨日の内容に戻す」= **バージョン管理**、「7 年間誰も変更・削除できない」= **ロックされた時間ベースの保持ポリシー**、「訴訟が終わるまで保持」= **リーガルホールド**。",
            "Scenario keyword တွေ- \"ဖျက်ထားတဲ့ blob ပြန်ယူ\" = **soft delete**၊ \"overwrite ဖြစ်သွားတဲ့ file ကို မနေ့က content ပြန်ယူ\" = **versioning**၊ \"၇ နှစ်ကြာ ဘယ်သူမှ မပြင်/မဖျက်နိုင်\" = **lock လုပ်ထားတဲ့ time-based retention policy**၊ \"အမှုမပြီးမချင်း ထိန်းထား\" = **legal hold**။"
          ) },
        ],
      },
      {
        id: "access-control",
        title: L("Authorizing access: keys, SAS, RBAC and anonymous access", "アクセスの承認：キー・SAS・RBAC・匿名アクセス", "Access ခွင့်ပြုခြင်း- key၊ SAS၊ RBAC နဲ့ anonymous access"),
        blocks: [
          { type: 'p', text: L(
            "There are four ways to authorize a request to your data. Compare them to a hotel: the **account key** is the master key that opens every room; a **SAS** is a time-limited key card for specific rooms; **Entra ID RBAC** is the front desk checking your ID and your booking; **anonymous access** is the open lobby anyone can walk into.",
            "データへのリクエストを承認する方法は 4 つあります。ホテルにたとえると、**アカウントキー**はすべての部屋を開けるマスターキー、**SAS** は特定の部屋だけ開く期限付きカードキー、**Entra ID RBAC** は身分証と予約を確認するフロント、**匿名アクセス**は誰でも入れるロビーです。",
            "Data ဆီ request ကို ခွင့်ပြုဖို့ နည်းလမ်း ၄ မျိုးရှိတယ်။ ဟိုတယ်နဲ့ နှိုင်းယှဉ်ရရင်- **account key** က အခန်းအားလုံးဖွင့်တဲ့ master key၊ **SAS** က သတ်မှတ်အခန်းအတွက်ပဲ အချိန်ကန့်သတ်ထားတဲ့ key card၊ **Entra ID RBAC** က ID နဲ့ booking စစ်တဲ့ front desk၊ **anonymous access** က ဘယ်သူမဆို ဝင်လို့ရတဲ့ lobby ပါ။"
          ) },
          { type: 'list', items: [
            L("**Account access keys**: two 512-bit keys (key1, key2) give **full access** to everything. Store them in Key Vault and rotate them; having two keys lets you rotate without downtime. You can **disable Shared Key authorization** to force Entra ID.",
              "**アカウントアクセスキー**：2 つの 512 ビットのキー（key1、key2）で**すべてにフルアクセス**できます。Key Vault に保管してローテーションしましょう。キーが 2 つあるのでダウンタイムなしでローテーションできます。**共有キー承認を無効化**して Entra ID を強制することもできます。",
              "**Account access key**: 512-bit key ၂ ခု (key1၊ key2) က အရာအားလုံးကို **full access** ပေးတယ်။ Key Vault ထဲသိမ်းပြီး rotate လုပ်ပါ- key ၂ ခုရှိလို့ downtime မရှိဘဲ rotate လုပ်နိုင်တယ်။ Entra ID ကို မဖြစ်မနေသုံးစေဖို့ **Shared Key authorization ကို disable** လုပ်နိုင်တယ်။"),
            L("**Shared access signature (SAS)**: a signed URL token that limits **permissions** (read, write, list...), **resources**, **start/expiry time**, allowed **IP range** and **protocol** (HTTPS only).",
              "**共有アクセス署名（SAS）**：**権限**（読み取り・書き込み・一覧など）、**リソース**、**開始/有効期限**、許可する **IP 範囲**、**プロトコル**（HTTPS のみ）を制限する署名付き URL トークンです。",
              "**Shared access signature (SAS)**: **permission** (read၊ write၊ list...)၊ **resource**၊ **start/expiry time**၊ ခွင့်ပြုတဲ့ **IP range** နဲ့ **protocol** (HTTPS သာ) ကို ကန့်သတ်တဲ့ sign လုပ်ထားတဲ့ URL token ပါ။"),
            L("**Microsoft Entra ID + RBAC**: the recommended option. Use **data-plane roles** such as **Storage Blob Data Reader/Contributor/Owner**, **Storage Queue Data Contributor** or **Storage File Data SMB Share Contributor**, ideally assigned to managed identities.",
              "**Microsoft Entra ID + RBAC**：推奨される方法です。**Storage Blob Data Reader/Contributor/Owner**、**Storage Queue Data Contributor**、**Storage File Data SMB Share Contributor** などの**データプレーンロール**を、できればマネージド ID に割り当てます。",
              "**Microsoft Entra ID + RBAC**: အကြံပြုထားတဲ့ နည်းလမ်း။ **Storage Blob Data Reader/Contributor/Owner**၊ **Storage Queue Data Contributor**၊ **Storage File Data SMB Share Contributor** လို **data-plane role** တွေကို managed identity ကို assign လုပ်တာ အကောင်းဆုံး။"),
            L("**Anonymous (public) read access**: works only if the account setting **Allow Blob anonymous access** is on AND the container access level is **Blob** (read blobs) or **Container** (read and list). It is off by default on new accounts.",
              "**匿名（パブリック）読み取りアクセス**：アカウント設定の**BLOB 匿名アクセスを許可**がオンで、かつコンテナーのアクセスレベルが **Blob**（BLOB の読み取り）または **Container**（読み取りと一覧）の場合のみ機能します。新規アカウントでは既定でオフです。",
              "**Anonymous (public) read access**: account setting **Allow Blob anonymous access** ဖွင့်ထားပြီး container access level က **Blob** (blob ဖတ်) သို့ **Container** (ဖတ် + list) ဖြစ်မှသာ အလုပ်လုပ်တယ်။ Account အသစ်တွေမှာ default ပိတ်ထားတယ်။"),
          ] },
          { type: 'table',
            head: [L("SAS type", "SAS の種類", "SAS အမျိုးအစား"), L("Signed with", "署名に使うもの", "ဘာနဲ့ sign လုပ်လဲ"), L("Scope", "範囲", "Scope (သက်ရောက်နယ်)"), L("Notes", "補足", "မှတ်ချက်")],
            rows: [
              [L("User delegation SAS", "ユーザー委任 SAS", "User delegation SAS (Entra နဲ့ sign)"), L("Entra ID credentials (user delegation key)", "Entra ID の資格情報（ユーザー委任キー）", "Entra ID credential (user delegation key) နဲ့"), L("Blob storage (and Data Lake Gen2) only", "Blob ストレージ（と Data Lake Gen2）のみ", "Blob storage (နဲ့ Data Lake Gen2) သာ"), L("Most secure; Microsoft recommended", "最も安全、Microsoft 推奨", "အလုံခြုံဆုံး၊ Microsoft အကြံပြု")],
              [L("Service SAS", "サービス SAS", "Service SAS (service တစ်ခု)"), L("Account key", "アカウントキー", "Account key နဲ့"), L("One service (Blob, Queue, Table or Files)", "1 つのサービス（Blob・Queue・Table・Files）", "Service တစ်ခု (Blob၊ Queue၊ Table သို့ Files)"), L("Can be linked to a stored access policy", "保存されたアクセスポリシーと関連付け可能", "Stored access policy နဲ့ ချိတ်လို့ရ")],
              [L("Account SAS", "アカウント SAS", "Account SAS (service အများ)"), L("Account key", "アカウントキー", "Account key နဲ့"), L("One or more services, incl. service-level operations", "1 つ以上のサービス、サービスレベルの操作を含む", "Service တစ်ခု သို့ အများ၊ service-level operation အပါ"), L("Widest scope; cannot use a stored access policy", "最も広い範囲、保存されたアクセスポリシーは使えない", "Scope အကျယ်ဆုံး၊ stored access policy မသုံးနိုင်")],
            ] },
          { type: 'p', text: L(
            "A **stored access policy** is defined on a container, file share, queue or table (up to **5** per object) and holds the start time, expiry and permissions. A service SAS that references it can be **revoked instantly** by editing or deleting the policy. Without it, the only way to revoke a key-signed ad-hoc SAS is to **rotate the account key** that signed it, which breaks every other SAS and app using that key.",
            "**保存されたアクセスポリシー**はコンテナー・ファイル共有・キュー・テーブルに定義し（1 つにつき最大 **5** 個）、開始時刻・有効期限・権限を保持します。これを参照するサービス SAS は、ポリシーを編集・削除するだけで**即座に取り消せます**。ポリシーがない場合、キーで署名したアドホック SAS を取り消す唯一の方法は署名した**アカウントキーのローテーション**で、そのキーを使う他の SAS やアプリもすべて動かなくなります。",
            "**Stored access policy** ကို container၊ file share၊ queue သို့ table ပေါ်မှာ သတ်မှတ်ပြီး (တစ်ခုကို **၅** ခုထိ) start time၊ expiry နဲ့ permission တွေ ထိန်းထားတယ်။ အဲဒါကို ညွှန်းထားတဲ့ service SAS ကို policy ပြင်/ဖျက်ရုံနဲ့ **ချက်ချင်း revoke** လုပ်နိုင်တယ်။ Policy မရှိရင် key နဲ့ sign လုပ်ထားတဲ့ ad-hoc SAS ကို revoke လုပ်ဖို့ တစ်ခုတည်းသောနည်းက sign လုပ်ခဲ့တဲ့ **account key ကို rotate** လုပ်တာဖြစ်ပြီး အဲဒီ key သုံးတဲ့ တခြား SAS နဲ့ app အားလုံး ပျက်သွားမယ်။"
          ) },
          { type: 'code', lang: 'bash', code:
`# Grant yourself a data-plane role (control-plane Owner is NOT enough)
az role assignment create \\
  --assignee "user@contoso.com" \\
  --role "Storage Blob Data Contributor" \\
  --scope "/subscriptions/<sub-id>/resourceGroups/rg-storage-lab/providers/Microsoft.Storage/storageAccounts/stkmklab2026"

# Create a short-lived, read-only user delegation SAS (max 7 days)
az storage blob generate-sas \\
  --account-name stkmklab2026 --container-name reports --name q3.pdf \\
  --permissions r --expiry 2026-12-31T00:00Z \\
  --auth-mode login --as-user --https-only`,
            caption: L("`--as-user` with `--auth-mode login` produces a user delegation SAS", "`--auth-mode login` と `--as-user` でユーザー委任 SAS が作成されます", "`--auth-mode login` နဲ့ `--as-user` က user delegation SAS ကို ထုတ်ပေးတယ်") },
          { type: 'callout', tone: 'exam', text: L(
            "Classic trap: a user with the **Owner** or **Contributor** role cannot read blobs with Entra ID in the portal (\"You do not have permissions to list the data\") until they get a **Storage Blob Data** role. Control-plane roles manage the account; data-plane roles access the data.",
            "定番のひっかけ：**Owner** や **Contributor** ロールのユーザーでも、**Storage Blob Data** ロールを付与されるまでは Entra ID でポータルから BLOB を読めません（「データを一覧表示するアクセス許可がありません」）。コントロールプレーンのロールはアカウントを管理し、データプレーンのロールはデータにアクセスします。",
            "အမြဲထွက်တတ်တဲ့ ထောင်ချောက်- **Owner** သို့ **Contributor** role ရှိတဲ့ user တောင် **Storage Blob Data** role မရမချင်း portal မှာ Entra ID နဲ့ blob ကို မဖတ်နိုင်ဘူး (\"You do not have permissions to list the data\")။ Control-plane role က account ကို စီမံတယ်၊ data-plane role က data ကို access လုပ်တယ်။"
          ) },
        ],
      },
      {
        id: "network-encryption",
        title: L("Network security and encryption", "ネットワークセキュリティと暗号化", "Network security နဲ့ encryption"),
        blocks: [
          { type: 'p', text: L(
            "By default a storage account accepts connections from **all networks** on its public endpoint (requests still need valid authorization). The storage **firewall** lets you restrict that: allow **selected virtual networks and IP addresses** only, or **disable public network access** completely and use private endpoints.",
            "既定では、ストレージアカウントはパブリックエンドポイントで**すべてのネットワーク**からの接続を受け付けます（ただしリクエストには有効な承認が必要です）。ストレージの**ファイアウォール**でこれを制限でき、**選択した仮想ネットワークと IP アドレス**のみ許可するか、**パブリックネットワークアクセスを完全に無効化**してプライベートエンドポイントを使います。",
            "Default အားဖြင့် storage account က public endpoint မှာ **network အားလုံး** ကနေ connection လက်ခံတယ် (request တွေမှာ authorization မှန်ဖို့တော့ လိုသေးတယ်)။ Storage **firewall** နဲ့ ကန့်သတ်နိုင်တယ်- **ရွေးထားတဲ့ virtual network နဲ့ IP address** တွေကိုပဲ ခွင့်ပြု၊ ဒါမှမဟုတ် **public network access ကို လုံးဝပိတ်** ပြီး private endpoint သုံး။"
          ) },
          { type: 'diagram', text:
`              Internet (blocked except allowed public IPs)
                         |
                         v
            +-------------------------+
            | Storage account firewall|
            +-------------------------+
             ^                       ^
 Service endpoint                Private endpoint
 (subnet -> public IP of         (NIC with private IP
  storage, Azure backbone)        10.1.2.5 in your VNet)
             |                       |
   VNet A / subnet-app       VNet B / subnet-pe <--- on-prem via
                                                    VPN/ExpressRoute`,
            caption: L("Service endpoints keep the public endpoint; private endpoints give a private IP", "サービスエンドポイントはパブリックエンドポイントを使い続け、プライベートエンドポイントはプライベート IP を割り当てる", "Service endpoint က public endpoint ကို ဆက်သုံး၊ private endpoint က private IP ပေးတယ်") },
          { type: 'table',
            head: [L("Feature", "機能", "Feature (လုပ်ဆောင်ချက်)"), L("Service endpoint", "サービスエンドポイント", "Service endpoint (public IP ကိုပဲ)"), L("Private endpoint", "プライベートエンドポイント", "Private endpoint (private IP ရ)")],
            rows: [
              [L("Destination address", "接続先アドレス", "ချိတ်ဆက်တဲ့ address"), L("Storage public IP, via the Azure backbone", "ストレージのパブリック IP（Azure バックボーン経由）", "Storage public IP (Azure backbone ကနေ)"), L("Private IP from your subnet", "自分のサブネットのプライベート IP", "ကိုယ့် subnet ထဲက private IP")],
              [L("Reachable from on-premises", "オンプレミスからの到達", "On-premises ကနေ ရောက်လား"), L("No (only from the enabled subnet)", "不可（有効化したサブネットからのみ）", "မရ (ဖွင့်ထားတဲ့ subnet ကနေသာ)"), L("Yes, over VPN/ExpressRoute", "可（VPN/ExpressRoute 経由）", "ရ (VPN/ExpressRoute ကနေ)")],
              [L("DNS changes", "DNS の変更", "DNS ပြောင်းလဲမှု"), L("None", "不要", "မလို"), L("Private DNS zone, e.g. `privatelink.blob.core.windows.net`", "プライベート DNS ゾーン（例：`privatelink.blob.core.windows.net`）", "Private DNS zone (ဥပမာ `privatelink.blob.core.windows.net`)")],
              [L("Cost", "コスト", "ကုန်ကျစရိတ်"), L("Free", "無料", "အခမဲ့"), L("Charged per endpoint and data processed", "エンドポイントと処理データ量で課金", "Endpoint နဲ့ data ပမာဏအလိုက် ကျသင့်")],
            ] },
          { type: 'list', items: [
            L("IP network rules accept **public** IP addresses or CIDR ranges only; private ranges such as 10.0.0.0/8 cannot be used there.",
              "IP ネットワークルールで指定できるのは**パブリック** IP アドレスまたは CIDR 範囲のみで、10.0.0.0/8 などのプライベート範囲は使えません。",
              "IP network rule မှာ **public** IP address သို့ CIDR range ပဲ ထည့်လို့ရပြီး 10.0.0.0/8 လို private range တွေ မထည့်နိုင်ဘူး။"),
            L("A private endpoint is created **per sub-resource**: an app using both blob and file needs two private endpoints.",
              "プライベートエンドポイントは**サブリソースごと**に作成します。blob と file の両方を使うアプリには 2 つ必要です。",
              "Private endpoint ကို **sub-resource တစ်ခုစီအတွက်** ဖန်တီးရတယ်- blob ရော file ရော သုံးတဲ့ app မှာ private endpoint ၂ ခု လိုတယ်။"),
            L("The exception **Allow trusted Microsoft services** lets services such as Azure Backup or Azure Monitor reach a firewalled account.",
              "例外設定の**信頼された Microsoft サービスを許可**により、Azure Backup や Azure Monitor などのサービスがファイアウォール付きのアカウントにアクセスできます。",
              "**Allow trusted Microsoft services** exception က Azure Backup၊ Azure Monitor လို service တွေကို firewall ထားတဲ့ account ဆီ ရောက်နိုင်စေတယ်။"),
          ] },
          { type: 'p', text: L(
            "**Encryption at rest** (Storage Service Encryption, SSE) is **always on** with 256-bit AES and cannot be disabled. By default Azure uses **Microsoft-managed keys**. For compliance you can use **customer-managed keys (CMK)** stored in **Azure Key Vault** or Managed HSM: the account uses a managed identity to access the key, and the vault must have **soft delete and purge protection** enabled. You can also enable **infrastructure encryption** for a second layer, and require **TLS 1.2** for data in transit.",
            "**保存時の暗号化**（Storage Service Encryption、SSE）は 256 ビット AES で**常に有効**で、無効にできません。既定では **Microsoft マネージドキー**を使います。コンプライアンスのために **Azure Key Vault** や Managed HSM に格納した**カスタマーマネージドキー（CMK）**も使えます。アカウントはマネージド ID でキーにアクセスし、Key Vault では**論理的な削除と消去保護**を有効にする必要があります。さらに 2 層目として**インフラストラクチャ暗号化**を有効にでき、転送中のデータには **TLS 1.2** を必須にできます。",
            "**Encryption at rest** (Storage Service Encryption၊ SSE) က 256-bit AES နဲ့ **အမြဲဖွင့်ထား** ပြီး ပိတ်လို့မရဘူး။ Default အနေနဲ့ **Microsoft-managed key** သုံးတယ်။ Compliance အတွက် **Azure Key Vault** သို့ Managed HSM ထဲ သိမ်းထားတဲ့ **customer-managed key (CMK)** သုံးနိုင်တယ်- account က managed identity နဲ့ key ကို access လုပ်ပြီး vault မှာ **soft delete နဲ့ purge protection** ဖွင့်ထားရမယ်။ ဒုတိယအလွှာအဖြစ် **infrastructure encryption** ဖွင့်နိုင်ပြီး transit data အတွက် **TLS 1.2** ကို မဖြစ်မနေ သတ်မှတ်နိုင်တယ်။"
          ) },
          { type: 'callout', tone: 'exam', text: L(
            "\"Data must never traverse the public internet and on-premises servers must reach it privately\" = **private endpoint**. \"We must control and rotate the encryption key ourselves\" = **customer-managed key in Key Vault**. You never need to \"enable\" encryption at rest; it is already on.",
            "「データが公開インターネットを通らず、オンプレミスのサーバーからもプライベートに接続する」= **プライベートエンドポイント**。「暗号化キーを自分たちで管理・ローテーションする」= **Key Vault のカスタマーマネージドキー**。保存時の暗号化は最初から有効なので「有効化」は不要です。",
            "\"Data က public internet ကို ဘယ်တော့မှ မဖြတ်ရ၊ on-premises server ကနေ private ချိတ်ရမယ်\" = **private endpoint**။ \"Encryption key ကို ကိုယ်တိုင်ထိန်းပြီး rotate လုပ်ရမယ်\" = **Key Vault ထဲက customer-managed key**။ Encryption at rest ကို \"ဖွင့်\" စရာမလိုဘူး၊ အစကတည်းက ဖွင့်ထားပြီးသား။"
          ) },
        ],
      },
      {
        id: "data-movement",
        title: L("Moving data: Storage Explorer, AzCopy, File Sync and Data Box", "データの移動：Storage Explorer・AzCopy・File Sync・Data Box", "Data ရွှေ့ခြင်း- Storage Explorer၊ AzCopy၊ File Sync နဲ့ Data Box"),
        blocks: [
          { type: 'table',
            head: [L("Tool", "ツール", "Tool (ကိရိယာ)"), L("What it is", "概要", "ဘာလဲ"), L("Choose it when", "選ぶ場面", "ဘယ်အချိန် ရွေးမလဲ")],
            rows: [
              [L("Azure Storage Explorer", "Azure Storage Explorer（GUI ツール）", "Azure Storage Explorer (GUI နဲ့ သုံး)"), L("Free desktop GUI for Windows, macOS and Linux (uses AzCopy internally)", "Windows・macOS・Linux 向けの無料デスクトップ GUI（内部で AzCopy を使用）", "Windows၊ macOS၊ Linux အတွက် အခမဲ့ desktop GUI (အတွင်းမှာ AzCopy သုံး)"), L("Browsing, uploading and managing data by hand", "手動でのデータ閲覧・アップロード・管理", "Data ကို လက်နဲ့ ကြည့်၊ upload၊ စီမံ")],
              [L("AzCopy", "AzCopy（CLI ツール）", "AzCopy (command-line နဲ့ သုံး)"), L("Command-line tool for fast, parallel copy and sync", "高速な並列コピー・同期のためのコマンドラインツール", "မြန်ပြီး parallel copy/sync လုပ်တဲ့ command-line tool"), L("Scripted or large online transfers, account-to-account copy", "スクリプト化した大量のオンライン転送、アカウント間コピー", "Script နဲ့ အများကြီး online ရွှေ့တာ၊ account အချင်းချင်း copy")],
              [L("Azure File Sync", "Azure File Sync（ファイル同期）", "Azure File Sync (file ချိန်ကိုက်)"), L("Syncs Windows file servers with an Azure file share; cloud tiering keeps hot files local", "Windows ファイルサーバーと Azure ファイル共有を同期し、クラウドの階層化でよく使うファイルをローカルに保持", "Windows file server နဲ့ Azure file share ကို sync လုပ်ပြီး cloud tiering က မကြာခဏသုံးတဲ့ file ကို local မှာ ထားပေး"), L("Branch offices need fast local access plus central cloud storage", "支店で高速なローカルアクセスとクラウドでの一元保存の両方が必要", "Branch office တွေမှာ local access မြန်မြန် + cloud မှာ ဗဟိုသိမ်းဆည်းမှု လို")],
              [L("Azure Data Box family", "Azure Data Box ファミリー", "Azure Data Box အမျိုးအစားများ"), L("Microsoft ships you a secure physical device; you fill it and send it back", "Microsoft が安全な物理デバイスを送付し、データを入れて返送する", "Microsoft က လုံခြုံတဲ့ physical device ပို့ပေး၊ data ဖြည့်ပြီး ပြန်ပို့"), L("Tens of TB or more with limited bandwidth (offline transfer)", "帯域が限られた数十 TB 以上のデータ（オフライン転送）", "Bandwidth နည်းပြီး TB ဆယ်ဂဏန်းနဲ့ အထက် (offline transfer)")],
              [L("Azure Migrate", "Azure Migrate（移行ハブ）", "Azure Migrate (ရွှေ့ပြောင်း hub)"), L("Central hub to discover, assess and migrate servers, databases and web apps", "サーバー・データベース・Web アプリの検出・評価・移行のための中央ハブ", "Server၊ database၊ web app တွေကို ရှာ၊ အကဲဖြတ်၊ migrate လုပ်တဲ့ ဗဟို hub"), L("Planning a full datacenter migration", "データセンター全体の移行計画", "Datacenter တစ်ခုလုံး ရွှေ့ဖို့ စီစဉ်")],
            ] },
          { type: 'code', lang: 'bash', code:
`# Sign in with Entra ID (needs a Storage Blob Data role)
azcopy login

# Upload a local folder recursively
azcopy copy "./website" "https://stkmklab2026.blob.core.windows.net/web" --recursive

# Copy between accounts server-to-server using a SAS on the source
azcopy copy "https://stsource.blob.core.windows.net/data?<SAS>" \\
            "https://stkmklab2026.blob.core.windows.net/data" --recursive

# Mirror changes only (like rsync); --delete-destination removes extras
azcopy sync "./website" "https://stkmklab2026.blob.core.windows.net/web" --delete-destination=true`,
            caption: L("AzCopy authenticates with Entra ID (`azcopy login`) or a SAS token appended to the URL", "AzCopy は Entra ID（`azcopy login`）または URL に付けた SAS トークンで認証します", "AzCopy က Entra ID (`azcopy login`) သို့ URL နောက်က SAS token နဲ့ authenticate လုပ်တယ်") },
          { type: 'p', text: L(
            "**Azure File Sync** components: a **Storage Sync Service** resource, a **sync group** containing exactly one **cloud endpoint** (an Azure file share) and one or more **server endpoints** (folders on registered Windows Servers with the sync agent). With **cloud tiering**, rarely used files are replaced by pointers locally, so a 2 TB share can live on a 500 GB branch server.",
            "**Azure File Sync** の構成要素：**ストレージ同期サービス**リソースと、1 つの**クラウドエンドポイント**（Azure ファイル共有）と 1 つ以上の**サーバーエンドポイント**（同期エージェントを入れて登録した Windows Server 上のフォルダー）を含む**同期グループ**です。**クラウドの階層化**により、めったに使わないファイルはローカルではポインターに置き換わるため、2 TB の共有を 500 GB の支店サーバーで運用できます。",
            "**Azure File Sync** အစိတ်အပိုင်းတွေ- **Storage Sync Service** resource၊ **cloud endpoint** တစ်ခုတည်း (Azure file share) နဲ့ **server endpoint** တစ်ခု သို့ အများ (sync agent တင်ပြီး register လုပ်ထားတဲ့ Windows Server ပေါ်က folder) ပါတဲ့ **sync group**။ **Cloud tiering** နဲ့ မသုံးသလောက် file တွေကို local မှာ pointer နဲ့ အစားထိုးလို့ 2 TB share ကို 500 GB branch server မှာ ထားနိုင်တယ်။"
          ) },
          { type: 'steps', items: [
            L("Hands-on lab: in the portal create a **Standard GPv2** account in **Japan East** with **ZRS**, and leave anonymous blob access disabled.",
              "ハンズオン：ポータルで **Japan East** に **ZRS** の **Standard GPv2** アカウントを作成し、BLOB の匿名アクセスは無効のままにします。",
              "Hands-on lab: portal မှာ **Japan East** region၊ **ZRS** နဲ့ **Standard GPv2** account တစ်ခု ဖန်တီးပြီး anonymous blob access ကို ပိတ်ထားပါ။"),
            L("Under **Access control (IAM)**, assign yourself **Storage Blob Data Contributor** on the account, then create a container named `reports`.",
              "**アクセス制御 (IAM)** で自分に **Storage Blob Data Contributor** を割り当て、`reports` という名前のコンテナーを作成します。",
              "**Access control (IAM)** မှာ ကိုယ့်ကိုယ်ကို **Storage Blob Data Contributor** assign လုပ်ပြီး `reports` ဆိုတဲ့ container တစ်ခု ဖန်တီးပါ။"),
            L("Under **Data protection**, enable blob soft delete (7 days) and versioning. Upload a file, overwrite it, then delete it and restore it from the deleted list.",
              "**データ保護**で BLOB の論理的な削除（7 日）とバージョン管理を有効にします。ファイルをアップロードして上書きし、削除してから削除済み一覧から復元します。",
              "**Data protection** မှာ blob soft delete (၇ ရက်) နဲ့ versioning ဖွင့်ပါ။ File တစ်ခု upload၊ overwrite၊ ဖျက်ပြီး deleted list ကနေ ပြန်ယူကြည့်ပါ။"),
            L("Under **Lifecycle management**, add a rule that moves blobs with prefix `reports/` to Cool after 30 days and to Archive after 180 days.",
              "**ライフサイクル管理**で、プレフィックス `reports/` の BLOB を 30 日後に Cool、180 日後に Archive に移動するルールを追加します。",
              "**Lifecycle management** မှာ prefix `reports/` ပါတဲ့ blob တွေကို ၃၀ ရက်ကြာရင် Cool၊ ၁၈၀ ရက်ကြာရင် Archive ရွှေ့တဲ့ rule ထည့်ပါ။"),
            L("Under **Networking**, choose **Enabled from selected virtual networks and IP addresses** and add your current public IP. Test access from another network and observe the 403 error.",
              "**ネットワーク**で**選択した仮想ネットワークと IP アドレスから有効**を選び、現在のパブリック IP を追加します。別のネットワークからアクセスして 403 エラーを確認します。",
              "**Networking** မှာ **Enabled from selected virtual networks and IP addresses** ရွေးပြီး လက်ရှိ public IP ကို ထည့်ပါ။ တခြား network ကနေ access လုပ်ပြီး 403 error ကို ကြည့်ပါ။"),
            L("Upload a folder with `azcopy login` and `azcopy copy`, then delete the resource group to stop charges.",
              "`azcopy login` と `azcopy copy` でフォルダーをアップロードし、最後に Resource Group を削除して課金を止めます。",
              "`azcopy login` နဲ့ `azcopy copy` သုံးပြီး folder တစ်ခု upload လုပ်ပါ၊ ပြီးရင် charge မဖြစ်အောင် resource group ကို ဖျက်ပါ။"),
          ] },
          { type: 'callout', tone: 'memory', text: L(
            "**Online + big + scripted = AzCopy. Offline + huge + slow network = Data Box. Keep on-prem file server + cloud = File Sync. Click around = Storage Explorer.**",
            "**オンライン＋大量＋スクリプト = AzCopy。オフライン＋超大量＋回線が遅い = Data Box。オンプレのファイルサーバーを残しつつクラウドも使う = File Sync。GUI で操作 = Storage Explorer。**",
            "**Online + အများကြီး + script = AzCopy။ Offline + အလွန်များ + network နှေး = Data Box။ On-prem file server ထားပြီး cloud လည်းသုံး = File Sync။ GUI နဲ့ နှိပ်သုံး = Storage Explorer။**"
          ) },
        ],
      },
      {
        id: "databases-on-azure",
        title: L("Databases on Azure (AZ-900 overview)", "Azure のデータベース（AZ-900 概要）", "Azure ပေါ်က database များ (AZ-900 အကျဉ်း)"),
        blocks: [
          { type: 'p', text: L(
            "Storage accounts hold files and objects; when you need queries, transactions and indexes, you use a managed database. AZ-900 expects you to recognize the main options and when each fits.",
            "ストレージアカウントはファイルやオブジェクトを格納します。クエリ・トランザクション・インデックスが必要ならマネージドデータベースを使います。AZ-900 では主な選択肢とその適した場面を見分けられることが求められます。",
            "Storage account က file နဲ့ object တွေ သိမ်းတယ်၊ query၊ transaction၊ index လိုရင်တော့ managed database သုံးရတယ်။ AZ-900 မှာ အဓိက option တွေနဲ့ ဘယ်အချိန် ဘာသုံးရမလဲ သိဖို့ လိုတယ်။"
          ) },
          { type: 'list', items: [
            L("**Azure SQL Database**: fully managed (PaaS) relational database based on SQL Server; Microsoft handles patching, backups and high availability.",
              "**Azure SQL Database**：SQL Server ベースのフルマネージド（PaaS）リレーショナルデータベースで、パッチ・バックアップ・高可用性は Microsoft が担当します。",
              "**Azure SQL Database**: SQL Server အခြေခံ fully managed (PaaS) relational database၊ patching၊ backup၊ high availability ကို Microsoft က လုပ်ပေးတယ်။"),
            L("**Azure SQL Managed Instance**: near-100% compatibility with on-premises SQL Server (SQL Agent, cross-database queries) for lift-and-shift, still PaaS.",
              "**Azure SQL Managed Instance**：オンプレミスの SQL Server とほぼ 100% 互換（SQL Agent、データベース間クエリなど）で、リフト＆シフト向けの PaaS です。",
              "**Azure SQL Managed Instance**: on-premises SQL Server နဲ့ 100% နီးပါး ကိုက်ညီ (SQL Agent၊ cross-database query) လို့ lift-and-shift အတွက် သင့်တော်ပြီး PaaS ပါပဲ။"),
            L("**SQL Server on Azure VMs**: IaaS; full OS and instance control when you need features or versions PaaS does not offer.",
              "**Azure VM 上の SQL Server**：IaaS で、PaaS にない機能やバージョンが必要なときに OS とインスタンスを完全に制御できます。",
              "**SQL Server on Azure VM**: IaaS၊ PaaS မှာ မရတဲ့ feature/version လိုရင် OS နဲ့ instance ကို အပြည့်ထိန်းနိုင်တယ်။"),
            L("**Azure Cosmos DB**: globally distributed **NoSQL** database with single-digit millisecond latency, multiple APIs (NoSQL, MongoDB, Cassandra, Gremlin, Table) and multi-region writes.",
              "**Azure Cosmos DB**：1 桁ミリ秒の遅延で動くグローバル分散 **NoSQL** データベースで、複数の API（NoSQL・MongoDB・Cassandra・Gremlin・Table）とマルチリージョン書き込みに対応します。",
              "**Azure Cosmos DB**: single-digit millisecond latency နဲ့ globally distributed **NoSQL** database၊ API အမျိုးမျိုး (NoSQL၊ MongoDB၊ Cassandra၊ Gremlin၊ Table) နဲ့ multi-region write ရတယ်။"),
            L("**Azure Database for PostgreSQL / MySQL**: managed open-source relational engines (Flexible Server).",
              "**Azure Database for PostgreSQL / MySQL**：マネージドなオープンソースのリレーショナルエンジン（フレキシブルサーバー）です。",
              "**Azure Database for PostgreSQL / MySQL**: managed open-source relational engine (Flexible Server) တွေပါ။"),
          ] },
          { type: 'callout', tone: 'tip', text: L(
            "Table storage vs Cosmos DB for Table: both store key/attribute entities, but Cosmos DB adds global distribution, guaranteed low latency and automatic indexing. Start with Table storage for cheap, simple data; move to Cosmos DB when you need global scale.",
            "Table ストレージと Cosmos DB for Table：どちらもキー/属性エンティティを格納しますが、Cosmos DB はグローバル分散、保証された低遅延、自動インデックスを追加します。安価でシンプルなデータは Table ストレージから始め、グローバル規模が必要になったら Cosmos DB に移行しましょう。",
            "Table storage နဲ့ Cosmos DB for Table- နှစ်ခုလုံး key/attribute entity သိမ်းပေမယ့် Cosmos DB က global distribution၊ အာမခံထားတဲ့ low latency၊ automatic indexing ထပ်ပေးတယ်။ စျေးသက်သာပြီး ရိုးရှင်းတဲ့ data ဆို Table storage နဲ့ စပါ၊ global scale လိုလာရင် Cosmos DB ပြောင်းပါ။"
          ) },
        ],
      },
    ],
    summary: [
      L("Standard GPv2 is the default account type and the only one with all services and all six redundancy options; names are 3-24 lowercase letters and numbers, globally unique.",
        "Standard GPv2 が既定のアカウントの種類で、全サービスと 6 つすべての冗長性オプションを持つ唯一の種類です。名前は 3〜24 文字の英小文字と数字で、グローバルに一意です。",
        "Standard GPv2 က default account type ဖြစ်ပြီး service အားလုံးနဲ့ redundancy ၆ မျိုးလုံး ရတဲ့ တစ်ခုတည်းသော type ပါ။ နာမည်က lowercase စာလုံး/ဂဏန်း ၃-၂၄ လုံး၊ globally unique။"),
      L("LRS = one datacenter, ZRS = three zones, GRS/GZRS add an asynchronous copy in the paired region; RA- lets you read the secondary. Failover can lose data after the Last Sync Time.",
        "LRS = 1 データセンター、ZRS = 3 ゾーン、GRS/GZRS はペアリージョンに非同期コピーを追加し、RA- はセカンダリの読み取りを可能にします。フェールオーバーでは最終同期時刻以降のデータが失われる可能性があります。",
        "LRS = datacenter တစ်ခု၊ ZRS = zone ၃ ခု၊ GRS/GZRS က paired region မှာ asynchronous copy ထပ်ထား၊ RA- က secondary ကို ဖတ်ခွင့်ပေးတယ်။ Failover လုပ်ရင် Last Sync Time နောက်က data ပျောက်နိုင်တယ်။"),
      L("Block blobs for files and media, append blobs for logs, page blobs for VHDs; tiers apply to block blobs only.",
        "ファイルやメディアにはブロック BLOB、ログには追加 BLOB、VHD にはページ BLOB。層はブロック BLOB のみに適用されます。",
        "File နဲ့ media အတွက် block blob၊ log အတွက် append blob၊ VHD အတွက် page blob၊ tier တွေက block blob မှာပဲ သက်ဆိုင်တယ်။"),
      L("Minimum retention is Cool 30, Cold 90, Archive 180 days; Archive is offline and needs rehydration (up to 15 hours standard). Lifecycle rules automate tiering and deletion.",
        "最小保持期間は Cool 30 日、Cold 90 日、Archive 180 日。Archive はオフラインでリハイドレートが必要です（標準で最大 15 時間）。ライフサイクルルールで層の移動と削除を自動化します。",
        "Minimum retention က Cool ၃၀၊ Cold ၉၀၊ Archive ၁၈၀ ရက်။ Archive က offline ဖြစ်လို့ rehydrate လုပ်ရ (standard ဆို ၁၅ နာရီထိ)။ Lifecycle rule က tier ပြောင်းတာနဲ့ ဖျက်တာကို automate လုပ်တယ်။"),
      L("Soft delete and versioning fix human mistakes; locked time-based retention and legal holds give WORM immutability.",
        "論理的な削除とバージョン管理は人的ミスを救い、ロックされた時間ベースの保持とリーガルホールドは WORM の不変性を提供します。",
        "Soft delete နဲ့ versioning က လူ့အမှားကို ပြင်ပေးတယ်၊ lock လုပ်ထားတဲ့ time-based retention နဲ့ legal hold က WORM immutability ပေးတယ်။"),
      L("Prefer Entra ID data roles and user delegation SAS; use stored access policies so service SAS tokens can be revoked without rotating keys.",
        "Entra ID のデータロールとユーザー委任 SAS を優先し、キーをローテーションせずにサービス SAS を取り消せるよう保存されたアクセスポリシーを使います。",
        "Entra ID data role နဲ့ user delegation SAS ကို ဦးစားပေးပါ၊ key မ rotate ဘဲ service SAS ကို revoke လုပ်နိုင်ဖို့ stored access policy သုံးပါ။"),
      L("Firewall rules, service endpoints and private endpoints control network paths; encryption at rest is always on, with optional customer-managed keys in Key Vault.",
        "ファイアウォールルール、サービスエンドポイント、プライベートエンドポイントでネットワーク経路を制御します。保存時の暗号化は常に有効で、Key Vault のカスタマーマネージドキーも選べます。",
        "Firewall rule၊ service endpoint၊ private endpoint တွေက network လမ်းကြောင်းကို ထိန်းတယ်၊ encryption at rest က အမြဲဖွင့်ထားပြီး Key Vault ထဲက customer-managed key ကို ရွေးသုံးနိုင်တယ်။"),
      L("AzCopy for scripted online copies, Storage Explorer for GUI work, Azure File Sync for hybrid file servers, Data Box for offline bulk transfers.",
        "スクリプトでのオンラインコピーには AzCopy、GUI 操作には Storage Explorer、ハイブリッドのファイルサーバーには Azure File Sync、オフラインの大量転送には Data Box を使います。",
        "Script နဲ့ online copy အတွက် AzCopy၊ GUI အတွက် Storage Explorer၊ hybrid file server အတွက် Azure File Sync၊ offline နဲ့ အများကြီးရွှေ့ဖို့ Data Box။"),
    ],
  },
  questions: [
    {
      difficulty: 'EASY',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("Which name is valid for a new Azure storage account?",
        "新しい Azure ストレージアカウントの名前として有効なものはどれですか？",
        "Azure storage account အသစ်အတွက် မှန်ကန်တဲ့ နာမည်က ဘယ်ဟာလဲ?"),
      options: ['Contoso-Data01', 'contosodata01', 'ContosoData01', 'cd'],
      correct: [1],
      explanation: L("Storage account names must be 3-24 characters of lowercase letters and numbers only, and globally unique. Hyphens and uppercase letters are not allowed, and `cd` is shorter than 3 characters.",
        "ストレージアカウント名は英小文字と数字のみの 3〜24 文字で、グローバルに一意である必要があります。ハイフンや大文字は使えず、`cd` は 3 文字未満です。",
        "Storage account name က lowercase စာလုံးနဲ့ ဂဏန်းသာ ၃-၂၄ လုံးဖြစ်ပြီး globally unique ဖြစ်ရမယ်။ Hyphen နဲ့ uppercase မရဘူး၊ `cd` က ၃ လုံးအောက် ဖြစ်နေတယ်။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("Which redundancy option stores three copies of your data across three availability zones in the primary region only?",
        "プライマリリージョン内の 3 つの可用性ゾーンにデータの 3 つのコピーを保存し、他のリージョンには複製しない冗長性オプションはどれですか？",
        "Primary region ထဲက availability zone ၃ ခုမှာပဲ data copy ၃ ခု သိမ်းတဲ့ redundancy option က ဘယ်ဟာလဲ?"),
      options: ['LRS', 'GRS', 'ZRS', 'RA-GRS'],
      correct: [2],
      explanation: L("ZRS synchronously writes three copies to three zones in one region, so it survives a zone outage. LRS keeps all three copies in a single datacenter, and GRS/RA-GRS add a copy in a second region.",
        "ZRS は 1 リージョン内の 3 つのゾーンに 3 つのコピーを同期的に書き込むため、ゾーン障害に耐えられます。LRS は 3 つのコピーすべてを 1 つのデータセンターに保持し、GRS/RA-GRS は別リージョンにもコピーを追加します。",
        "ZRS က region တစ်ခုထဲက zone ၃ ခုမှာ copy ၃ ခုကို synchronous write လုပ်လို့ zone outage ကို ခံနိုင်တယ်။ LRS က copy ၃ ခုလုံးကို datacenter တစ်ခုထဲမှာ ထားပြီး GRS/RA-GRS က ဒုတိယ region မှာ copy ထပ်ထားတယ်။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("What is the minimum storage duration for blobs in the Archive access tier before an early deletion charge no longer applies?",
        "Archive アクセス層の BLOB で、早期削除料金がかからなくなるまでの最小保存期間はどれですか？",
        "Archive access tier ထဲက blob အတွက် early deletion charge မကျတော့ဖို့ အနည်းဆုံး သိမ်းရမယ့် ကာလက ဘယ်လောက်လဲ?"),
      options: ['180 days', '30 days', '90 days', '365 days'],
      correct: [0],
      explanation: L("Archive has a 180-day minimum. Cool is 30 days and Cold is 90 days; Hot has no minimum.",
        "Archive の最小期間は 180 日です。Cool は 30 日、Cold は 90 日で、Hot には最小期間がありません。",
        "Archive ရဲ့ minimum က ၁၈၀ ရက်ပါ။ Cool က ၃၀ ရက်၊ Cold က ၉၀ ရက်၊ Hot မှာ minimum မရှိဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("A web front end must hand off image-processing jobs to a background worker so the two can scale independently. Which storage service fits best?",
        "Web フロントエンドが画像処理ジョブをバックグラウンドワーカーに渡し、両者を独立してスケールさせたいと考えています。最適なストレージサービスはどれですか？",
        "Web front end က image-processing job တွေကို background worker ဆီ လွှဲပေးပြီး နှစ်ခုလုံး သီးခြား scale လုပ်နိုင်ရမယ်။ ဘယ် storage service အသင့်တော်ဆုံးလဲ?"),
      options: ['Table storage', 'Queue storage', 'Azure Files', 'Blob storage'],
      correct: [1],
      explanation: L("Queue storage holds messages (up to 64 KB each) that producers add and consumers process asynchronously, decoupling the tiers. Blob storage would hold the images themselves but does not provide message queuing.",
        "Queue ストレージは、生産者が追加し消費者が非同期に処理するメッセージ（各最大 64 KB）を保持し、層を疎結合にします。Blob ストレージは画像自体を保存できますが、メッセージキューの機能はありません。",
        "Queue storage က producer ထည့်ပြီး consumer က asynchronous လုပ်ဆောင်တဲ့ message (တစ်ခု 64 KB ထိ) တွေကို သိမ်းပြီး tier တွေကို decouple လုပ်ပေးတယ်။ Blob storage က ပုံတွေကို သိမ်းနိုင်ပေမယ့် message queue မပေးဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("Employees currently map a network drive to an on-premises SMB file server. You want a fully managed replacement in Azure that they can still map as a drive. What should you use?",
        "社員は現在、オンプレミスの SMB ファイルサーバーをネットワークドライブとして割り当てています。ドライブとして引き続き割り当てられる、Azure のフルマネージドの代替は何ですか？",
        "ဝန်ထမ်းတွေက on-premises SMB file server ကို network drive အဖြစ် map လုပ်သုံးနေတယ်။ Drive အဖြစ် ဆက် map လုပ်နိုင်တဲ့ Azure ထဲက fully managed အစားထိုးက ဘာလဲ?"),
      options: ['Blob storage', 'Queue storage', 'Table storage', 'Azure Files'],
      correct: [3],
      explanation: L("Azure Files provides managed SMB (and NFS) file shares that Windows, Linux and macOS can mount as drives. Blob storage is object storage accessed over HTTPS and is not mounted as an SMB drive.",
        "Azure Files は、Windows・Linux・macOS がドライブとしてマウントできるマネージド SMB（および NFS）ファイル共有を提供します。Blob ストレージは HTTPS でアクセスするオブジェクトストレージで、SMB ドライブとしてはマウントしません。",
        "Azure Files က Windows၊ Linux၊ macOS တွေက drive အဖြစ် mount လုပ်နိုင်တဲ့ managed SMB (နဲ့ NFS) file share ပေးတယ်။ Blob storage က HTTPS နဲ့ access လုပ်တဲ့ object storage ဖြစ်လို့ SMB drive အဖြစ် မ mount ဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("An administrator needs a command-line tool to copy 3 TB of files from a server to Blob storage in a scheduled script. Which tool should be used?",
        "管理者が、スケジュールされたスクリプトでサーバーから Blob ストレージへ 3 TB のファイルをコピーするコマンドラインツールを必要としています。どのツールを使うべきですか？",
        "Administrator တစ်ယောက်က schedule လုပ်ထားတဲ့ script ထဲမှာ server ကနေ Blob storage ဆီ 3 TB file copy လုပ်ဖို့ command-line tool လိုတယ်။ ဘယ် tool သုံးသင့်လဲ?"),
      options: ['Azure Data Box', 'Azure Storage Explorer', 'AzCopy', 'Azure Migrate'],
      correct: [2],
      explanation: L("AzCopy is the command-line utility for fast, parallel copy and sync to and from Azure Storage, ideal for scripts. Storage Explorer is a GUI, and Data Box is an offline physical device for when the network is too slow.",
        "AzCopy は Azure Storage との高速な並列コピー・同期のためのコマンドラインユーティリティで、スクリプトに最適です。Storage Explorer は GUI で、Data Box はネットワークが遅すぎる場合のオフラインの物理デバイスです。",
        "AzCopy က Azure Storage နဲ့ မြန်မြန် parallel copy/sync လုပ်တဲ့ command-line utility ဖြစ်လို့ script အတွက် အကောင်းဆုံး။ Storage Explorer က GUI ဖြစ်ပြီး Data Box က network အရမ်းနှေးတဲ့အခါ သုံးတဲ့ offline physical device ပါ။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900'],
      prompt: L("A gaming company needs a globally distributed NoSQL database with single-digit millisecond latency and support for the MongoDB API. Which service should it choose?",
        "ゲーム会社が、1 桁ミリ秒の遅延で MongoDB API をサポートするグローバル分散 NoSQL データベースを必要としています。どのサービスを選ぶべきですか？",
        "Gaming company တစ်ခုက single-digit millisecond latency နဲ့ MongoDB API ကို support လုပ်တဲ့ globally distributed NoSQL database လိုတယ်။ ဘယ် service ရွေးသင့်လဲ?"),
      options: ['Azure Cosmos DB', 'Azure SQL Database', 'Azure Database for MySQL', 'Azure SQL Managed Instance'],
      correct: [0],
      explanation: L("Azure Cosmos DB is a globally distributed NoSQL database with multiple APIs, including MongoDB, and low-latency guarantees. Azure SQL Database and SQL Managed Instance are relational SQL Server engines.",
        "Azure Cosmos DB は MongoDB を含む複数の API と低遅延の保証を持つグローバル分散 NoSQL データベースです。Azure SQL Database と SQL Managed Instance はリレーショナルな SQL Server エンジンです。",
        "Azure Cosmos DB က MongoDB အပါအဝင် API အမျိုးမျိုးနဲ့ low latency အာမခံချက်ပါတဲ့ globally distributed NoSQL database ပါ။ Azure SQL Database နဲ့ SQL Managed Instance က relational SQL Server engine တွေပါ။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("An application writes audit events by continuously adding new entries to the end of a single file in Blob storage. Existing entries are never modified. Which blob type should be used?",
        "アプリケーションは、Blob ストレージ内の 1 つのファイルの末尾に新しいエントリを継続的に追加して監査イベントを書き込みます。既存のエントリは変更しません。どの BLOB の種類を使うべきですか？",
        "Application တစ်ခုက Blob storage ထဲက file တစ်ခုတည်းရဲ့ နောက်ဆုံးမှာ entry အသစ်တွေ ဆက်တိုက်ထည့်ပြီး audit event ရေးတယ်။ ရှိပြီးသား entry ကို ဘယ်တော့မှ မပြင်ဘူး။ ဘယ် blob type သုံးသင့်လဲ?"),
      options: ['Block blob', 'Page blob', 'Append blob', 'Archive blob'],
      correct: [2],
      explanation: L("Append blobs are optimized for append-only operations such as logging. Page blobs are for random read/write (VHDs), and \"Archive\" is an access tier, not a blob type.",
        "追加 BLOB はログのような追記専用の操作に最適化されています。ページ BLOB はランダム読み書き（VHD）用で、「Archive」はアクセス層であり BLOB の種類ではありません。",
        "Append blob က logging လို နောက်ကပဲ ထပ်ထည့်တဲ့ operation အတွက် optimize လုပ်ထားတယ်။ Page blob က random read/write (VHD) အတွက်ဖြစ်ပြီး \"Archive\" က access tier ဖြစ်လို့ blob type မဟုတ်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("Your app must keep running if one availability zone fails, and must be able to read data from a second region during a regional outage without waiting for a failover. Which redundancy option meets the requirements?",
        "アプリは 1 つの可用性ゾーンが停止しても稼働を続け、リージョン障害時にはフェールオーバーを待たずに 2 つ目のリージョンからデータを読み取れる必要があります。要件を満たす冗長性オプションはどれですか？",
        "Availability zone တစ်ခုပျက်ရင်လည်း app ဆက်အလုပ်လုပ်ရမယ်၊ region outage ဖြစ်ရင် failover မစောင့်ဘဲ ဒုတိယ region ကနေ data ဖတ်နိုင်ရမယ်။ ဘယ် redundancy option က ကိုက်ညီလဲ?"),
      options: ['GZRS', 'RA-GRS', 'ZRS', 'RA-GZRS'],
      correct: [3],
      explanation: L("RA-GZRS uses ZRS in the primary region (zone resilience) plus a readable copy in the paired region. GZRS has no read access to the secondary until failover, and RA-GRS uses LRS in the primary, so a zone failure can affect it.",
        "RA-GZRS はプライマリリージョンで ZRS（ゾーン障害への耐性）を使い、さらにペアリージョンに読み取り可能なコピーを持ちます。GZRS はフェールオーバーまでセカンダリを読めず、RA-GRS はプライマリが LRS なのでゾーン障害の影響を受ける可能性があります。",
        "RA-GZRS က primary region မှာ ZRS (zone ပျက်ရင် ခံနိုင်) သုံးပြီး paired region မှာ ဖတ်လို့ရတဲ့ copy ပါတယ်။ GZRS က failover မလုပ်မချင်း secondary ကို မဖတ်နိုင်ဘူး၊ RA-GRS က primary မှာ LRS ဖြစ်လို့ zone ပျက်ရင် ထိခိုက်နိုင်တယ်။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("You plan to create a Premium block blob storage account. Which redundancy options can you choose? (Select TWO)",
        "Premium ブロック BLOB ストレージアカウントを作成する予定です。選択できる冗長性オプションはどれですか？（2 つ選択）",
        "Premium block blob storage account တစ်ခု ဖန်တီးမယ်။ ဘယ် redundancy option တွေ ရွေးလို့ရလဲ? (၂ ခု ရွေးပါ)"),
      options: ['LRS', 'GRS', 'ZRS', 'GZRS'],
      correct: [0, 2],
      explanation: L("Premium block blob and Premium file share accounts support only LRS and ZRS. Geo-redundant options (GRS, GZRS and their RA- versions) require a Standard general-purpose v2 account.",
        "Premium ブロック BLOB と Premium ファイル共有のアカウントは LRS と ZRS のみをサポートします。geo 冗長オプション（GRS・GZRS とその RA- 版）には Standard 汎用 v2 アカウントが必要です。",
        "Premium block blob နဲ့ Premium file share account တွေက LRS နဲ့ ZRS ကိုပဲ support လုပ်တယ်။ Geo-redundant option (GRS၊ GZRS နဲ့ RA- version) တွေအတွက် Standard general-purpose v2 account လိုတယ်။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("A user who has the Owner role on a storage account opens a container in the Azure portal using Microsoft Entra authentication and receives \"You do not have permissions to list the data\". Shared Key access is disabled. Which role should you assign so the user can read blobs?",
        "ストレージアカウントの Owner ロールを持つユーザーが、Microsoft Entra 認証で Azure ポータルからコンテナーを開くと「データを一覧表示するアクセス許可がありません」と表示されます。共有キーアクセスは無効です。BLOB を読めるようにするにはどのロールを割り当てるべきですか？",
        "Storage account ပေါ်မှာ Owner role ရှိတဲ့ user တစ်ယောက်က Microsoft Entra authentication နဲ့ Azure portal မှာ container ဖွင့်တော့ \"You do not have permissions to list the data\" ပြတယ်။ Shared Key access ကို disable လုပ်ထားတယ်။ Blob ဖတ်နိုင်ဖို့ ဘယ် role assign လုပ်သင့်လဲ?"),
      options: ['Contributor', 'Storage Blob Data Reader', 'Storage Account Contributor', 'User Access Administrator'],
      correct: [1],
      explanation: L("Owner, Contributor and Storage Account Contributor are control-plane roles: they manage the account but do not grant Entra ID access to blob data. A data-plane role such as Storage Blob Data Reader is required. With Shared Key disabled, the portal cannot fall back to account keys.",
        "Owner・Contributor・Storage Account Contributor はコントロールプレーンのロールで、アカウントを管理できますが BLOB データへの Entra ID アクセスは付与しません。Storage Blob Data Reader などのデータプレーンのロールが必要です。共有キーが無効なので、ポータルはアカウントキーに切り替えることもできません。",
        "Owner၊ Contributor၊ Storage Account Contributor တွေက control-plane role တွေပါ- account ကို စီမံနိုင်ပေမယ့် blob data ကို Entra ID နဲ့ access ခွင့် မပေးဘူး။ Storage Blob Data Reader လို data-plane role လိုတယ်။ Shared Key ပိတ်ထားလို့ portal က account key ကို ပြောင်းသုံးလို့လည်း မရဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("You will give several partners service SAS tokens for a container. You must be able to revoke one partner's access immediately without affecting the other partners or applications. What should you do?",
        "複数のパートナーにコンテナーのサービス SAS トークンを発行します。他のパートナーやアプリに影響を与えずに、特定パートナーのアクセスを即座に取り消せる必要があります。どうすべきですか？",
        "Partner အများအပြားကို container အတွက် service SAS token ပေးမယ်။ တခြား partner နဲ့ app တွေကို မထိခိုက်ဘဲ partner တစ်ယောက်ရဲ့ access ကို ချက်ချင်း revoke လုပ်နိုင်ရမယ်။ ဘာလုပ်သင့်လဲ?"),
      options: ['Create an account SAS for each partner', 'Link each partner\'s service SAS to its own stored access policy', 'Regenerate the account keys when a partner must be removed', 'Enable anonymous access on the container'],
      correct: [1],
      explanation: L("A stored access policy on the container controls the SAS that references it; deleting or changing that policy revokes only that partner. Regenerating the account key revokes every SAS signed with it and breaks other apps, and account SAS tokens cannot use stored access policies.",
        "コンテナーの保存されたアクセスポリシーは、それを参照する SAS を制御します。そのポリシーを削除・変更すれば、そのパートナーだけを取り消せます。アカウントキーを再生成すると、そのキーで署名したすべての SAS が無効になり他のアプリも壊れます。また、アカウント SAS は保存されたアクセスポリシーを使えません。",
        "Container ပေါ်က stored access policy က အဲဒါကို ညွှန်းတဲ့ SAS ကို ထိန်းတယ်- အဲဒီ policy ကို ဖျက်/ပြင်ရင် အဲဒီ partner တစ်ယောက်ပဲ revoke ဖြစ်တယ်။ Account key ကို regenerate လုပ်ရင် အဲဒီ key နဲ့ sign လုပ်ထားတဲ့ SAS အားလုံး ပျက်ပြီး တခြား app တွေပါ ပျက်တယ်၊ account SAS ကလည်း stored access policy မသုံးနိုင်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("Which actions can an Azure Storage lifecycle management rule perform on base block blobs? (Select THREE)",
        "Azure Storage のライフサイクル管理ルールがベースのブロック BLOB に対して実行できるアクションはどれですか？（3 つ選択）",
        "Azure Storage lifecycle management rule က base block blob တွေပေါ်မှာ ဘယ် action တွေ လုပ်နိုင်လဲ? (၃ ခု ရွေးပါ)"),
      options: ['Move blobs to the Cool tier', 'Delete blobs', 'Convert page blobs to block blobs', 'Move blobs to the Archive tier', 'Change the account replication from LRS to GRS'],
      correct: [0, 1, 3],
      explanation: L("Lifecycle rules can tier blobs (to Cool, Cold or Archive) and delete them based on age or last access. They cannot change a blob type, which is fixed at creation, and they cannot change account-level settings such as redundancy.",
        "ライフサイクルルールは、経過日数や最終アクセスに基づいて BLOB の層を移動（Cool・Cold・Archive）したり削除したりできます。作成時に決まる BLOB の種類は変更できず、冗長性などのアカウントレベルの設定も変更できません。",
        "Lifecycle rule တွေက ရက်အရေအတွက် သို့ last access ပေါ်မူတည်ပြီး blob ကို tier ပြောင်း (Cool၊ Cold၊ Archive) နိုင်၊ ဖျက်နိုင်တယ်။ ဖန်တီးချိန်မှာ သတ်မှတ်ပြီးသား blob type ကို မပြောင်းနိုင်သလို redundancy လို account-level setting ကိုလည်း မပြောင်းနိုင်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("Servers in your Tokyo office connect to Azure over ExpressRoute private peering. They must access a storage account using a private IP address, and public network access to the account must be disabled. What should you configure?",
        "東京オフィスのサーバーは ExpressRoute のプライベートピアリングで Azure に接続しています。プライベート IP アドレスでストレージアカウントにアクセスし、アカウントへのパブリックネットワークアクセスは無効にする必要があります。何を構成すべきですか？",
        "Tokyo office က server တွေက ExpressRoute private peering နဲ့ Azure ကို ချိတ်ထားတယ်။ Private IP address နဲ့ storage account ကို access လုပ်ရမယ်၊ account ရဲ့ public network access ကို ပိတ်ထားရမယ်။ ဘာကို configure လုပ်သင့်လဲ?"),
      options: ['A private endpoint in a VNet connected to the ExpressRoute circuit', 'A Microsoft.Storage service endpoint on the GatewaySubnet', 'An IP network rule that allows the office\'s private range 10.20.0.0/16', 'The Allow trusted Microsoft services exception'],
      correct: [0],
      explanation: L("A private endpoint gives the storage account a private IP in your VNet, which on-premises clients reach over ExpressRoute or VPN, and it works with public access disabled. Service endpoints only work for traffic from the enabled Azure subnet and still target the public endpoint, and IP rules cannot contain private address ranges.",
        "プライベートエンドポイントは VNet 内のプライベート IP をストレージアカウントに割り当て、オンプレミスのクライアントは ExpressRoute や VPN 経由で到達でき、パブリックアクセスを無効にしても機能します。サービスエンドポイントは有効化した Azure サブネットからの通信にのみ効き、パブリックエンドポイントを使い続けます。また IP ルールにはプライベートアドレス範囲を指定できません。",
        "Private endpoint က storage account ကို ကိုယ့် VNet ထဲက private IP ပေးပြီး on-premises client တွေက ExpressRoute သို့ VPN ကနေ ရောက်နိုင်တယ်၊ public access ပိတ်ထားလည်း အလုပ်လုပ်တယ်။ Service endpoint က ဖွင့်ထားတဲ့ Azure subnet ကလာတဲ့ traffic အတွက်ပဲ အလုပ်လုပ်ပြီး public endpoint ကိုပဲ သုံးနေဆဲ၊ IP rule မှာလည်း private address range မထည့်နိုင်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("Five branch offices each run a Windows file server. You want a central copy of all files in Azure while each branch keeps fast local access to its frequently used files and limited local disk space is used. What should you deploy?",
        "5 つの支店はそれぞれ Windows ファイルサーバーを運用しています。すべてのファイルの一元コピーを Azure に置きつつ、各支店ではよく使うファイルへの高速なローカルアクセスを維持し、ローカルディスクの使用量を抑えたいと考えています。何を展開すべきですか？",
        "Branch office ၅ ခုစီမှာ Windows file server တစ်ခုစီ run နေတယ်။ File အားလုံးကို Azure မှာ ဗဟို copy ထားချင်ပြီး branch တစ်ခုစီက မကြာခဏသုံးတဲ့ file တွေကို local မှာ မြန်မြန် access ရပြီး local disk နည်းနည်းပဲ သုံးချင်တယ်။ ဘာ deploy လုပ်သင့်လဲ?"),
      options: ['Azure Data Box', 'AzCopy sync on a nightly schedule', 'Azure Storage Explorer', 'Azure File Sync with cloud tiering'],
      correct: [3],
      explanation: L("Azure File Sync keeps Windows file servers in sync with an Azure file share, and cloud tiering keeps only hot files on local disk while cold files remain in Azure. AzCopy sync is one-way copying without caching, and Data Box is for one-time offline transfers.",
        "Azure File Sync は Windows ファイルサーバーと Azure ファイル共有を同期し、クラウドの階層化によってよく使うファイルだけをローカルディスクに残し、それ以外は Azure に置きます。AzCopy sync はキャッシュ機能のない一方向コピーで、Data Box は 1 回限りのオフライン転送用です。",
        "Azure File Sync က Windows file server တွေကို Azure file share နဲ့ sync လုပ်ပေးပြီး cloud tiering က မကြာခဏသုံးတဲ့ file ကိုပဲ local disk မှာထားကာ ကျန်တာကို Azure မှာ ထားတယ်။ AzCopy sync က caching မပါတဲ့ တစ်လမ်းသွား copy ဖြစ်ပြီး Data Box က တစ်ကြိမ်တည်း offline ရွှေ့ဖို့ပါ။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("A 2 GB blob in the Archive tier is needed by an auditor within the next hour. What should you do?",
        "Archive 層にある 2 GB の BLOB を、監査担当者が 1 時間以内に必要としています。どうすべきですか？",
        "Archive tier ထဲက 2 GB blob တစ်ခုကို auditor က နောက်တစ်နာရီအတွင်း လိုချင်တယ်။ ဘာလုပ်သင့်လဲ?"),
      options: ['Change the blob tier to Hot with High rehydration priority', 'Change the blob tier to Cool with Standard rehydration priority', 'Enable blob soft delete and undelete the blob', 'Create a lifecycle management rule that moves the blob to Hot'],
      correct: [0],
      explanation: L("High priority rehydration can complete in under one hour for objects smaller than 10 GB. Standard priority can take up to 15 hours. Soft delete is unrelated, and lifecycle rules run about once a day and do not rehydrate from Archive on demand.",
        "高優先度のリハイドレートは 10 GB 未満のオブジェクトなら 1 時間未満で完了できます。標準優先度は最大 15 時間かかります。論理的な削除は無関係で、ライフサイクルルールは 1 日 1 回程度の実行であり、Archive からのオンデマンドなリハイドレートには使えません。",
        "High priority rehydration က 10 GB အောက် object ဆိုရင် တစ်နာရီအောက်မှာ ပြီးနိုင်တယ်။ Standard priority က ၁၅ နာရီထိ ကြာနိုင်တယ်။ Soft delete က မသက်ဆိုင်ဘူး၊ lifecycle rule က တစ်ရက်တစ်ခါလောက်ပဲ run ပြီး Archive ကနေ ချက်ချင်း rehydrate မလုပ်ပေးဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("A block blob was moved to the Archive tier and then deleted 45 days later. What happens to billing?",
        "ブロック BLOB を Archive 層に移動し、45 日後に削除しました。課金はどうなりますか？",
        "Block blob တစ်ခုကို Archive tier ရွှေ့ပြီး ၄၅ ရက်ကြာတော့ ဖျက်လိုက်တယ်။ Billing ဘယ်လိုဖြစ်မလဲ?"),
      options: ['There is no additional charge', 'An early deletion charge equal to 135 days of Archive storage is applied', 'The full 180 days are charged again in addition to the 45 days', 'The 45 days are recalculated at the Hot tier price'],
      correct: [1],
      explanation: L("Archive has a 180-day minimum. Deleting after 45 days incurs a prorated early deletion charge for the remaining 135 days (180 - 45). You are not charged twice for the full period, and the price is not recalculated at another tier.",
        "Archive の最小期間は 180 日です。45 日後に削除すると、残りの 135 日（180 - 45）分の早期削除料金が日割りで発生します。全期間が二重に課金されることも、別の層の価格で再計算されることもありません。",
        "Archive ရဲ့ minimum က ၁၈၀ ရက်ပါ။ ၄၅ ရက်မှာ ဖျက်ရင် ကျန်တဲ့ ၁၃၅ ရက် (180 - 45) အတွက် အချိုးကျ early deletion charge ကျတယ်။ ကာလအပြည့် နှစ်ခါ မကျသလို တခြား tier စျေးနဲ့လည်း ပြန်မတွက်ဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("Regulations require that trade records in a container cannot be modified or deleted by anyone, including subscription Owners, for 7 years, and that the retention period itself cannot be shortened. Which TWO actions should you perform? (Select TWO)",
        "規制により、コンテナー内の取引記録はサブスクリプションの Owner を含め誰も 7 年間変更・削除できず、保持期間そのものも短縮できないことが求められています。実行すべき 2 つの操作はどれですか？（2 つ選択）",
        "စည်းမျဉ်းအရ container ထဲက trade record တွေကို subscription Owner အပါအဝင် ဘယ်သူမှ ၇ နှစ်ကြာ မပြင်/မဖျက်နိုင်ရဘူး၊ retention ကာလကိုယ်တိုင်ကိုလည်း မလျှော့နိုင်ရဘူး။ ဘယ် action ၂ ခု လုပ်သင့်လဲ? (၂ ခု ရွေးပါ)"),
      options: ['Configure a time-based retention policy of 7 years on the container', 'Lock the time-based retention policy', 'Enable blob soft delete with a 365-day retention', 'Apply a ReadOnly resource lock to the storage account', 'Enable blob versioning'],
      correct: [0, 1],
      explanation: L("A time-based retention policy makes blobs WORM, and locking it prevents anyone from deleting the policy or shortening the interval. Soft delete and versioning allow recovery but not true immutability, and a ReadOnly resource lock affects management operations, not data-plane writes and deletes.",
        "時間ベースの保持ポリシーは BLOB を WORM にし、ロックするとポリシーの削除や期間の短縮が誰にもできなくなります。論理的な削除とバージョン管理は復元を可能にしますが真の不変性ではありません。ReadOnly リソースロックは管理操作に作用し、データプレーンの書き込みや削除は防げません。",
        "Time-based retention policy က blob ကို WORM ဖြစ်စေပြီး lock လုပ်လိုက်ရင် policy ကို ဖျက်တာ၊ ကာလကို လျှော့တာ ဘယ်သူမှ မလုပ်နိုင်တော့ဘူး။ Soft delete နဲ့ versioning က ပြန်ယူခွင့်ပေးပေမယ့် တကယ့် immutability မဟုတ်ဘူး၊ ReadOnly resource lock က management operation ကိုပဲ သက်ရောက်ပြီး data-plane write/delete ကို မတားဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("Your GRS storage account's primary region suffers a prolonged outage and you initiate a customer-managed (unplanned) failover. Which statements are true? (Select TWO)",
        "GRS ストレージアカウントのプライマリリージョンで長時間の障害が発生し、顧客管理の（計画外）フェールオーバーを開始しました。正しい記述はどれですか？（2 つ選択）",
        "GRS storage account ရဲ့ primary region မှာ ကြာရှည် outage ဖြစ်လို့ customer-managed (unplanned) failover စလိုက်တယ်။ ဘယ်အချက်တွေ မှန်လဲ? (၂ ခု ရွေးပါ)"),
      options: ['Writes made after the Last Sync Time may be lost', 'After failover the account is LRS in the new primary until you reconfigure geo-redundancy', 'The account keeps GRS automatically with the original region as the new secondary', 'Failover is supported only for Premium storage accounts'],
      correct: [0, 1],
      explanation: L("Geo-replication is asynchronous, so data written after the Last Sync Time might not have reached the secondary. After an unplanned failover the account becomes LRS in the new primary region, and you must re-enable GRS. Premium accounts do not support geo-redundancy at all.",
        "geo レプリケーションは非同期なので、最終同期時刻以降に書き込まれたデータはセカンダリに届いていない可能性があります。計画外フェールオーバー後、アカウントは新しいプライマリリージョンで LRS になり、GRS を再度有効にする必要があります。Premium アカウントはそもそも geo 冗長をサポートしません。",
        "Geo-replication က asynchronous ဖြစ်လို့ Last Sync Time နောက်မှာ ရေးတဲ့ data က secondary ကို မရောက်သေးနိုင်ဘူး။ Unplanned failover ပြီးရင် account က primary region အသစ်မှာ LRS ဖြစ်သွားလို့ GRS ကို ပြန်ဖွင့်ရမယ်။ Premium account တွေက geo-redundancy ကို လုံးဝ support မလုပ်ဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("You need one storage account that hosts blobs, Azure file shares and queues with GZRS. On-premises servers must reach both the blob and file services privately over ExpressRoute. Which TWO actions should you take? (Select TWO)",
        "BLOB・Azure ファイル共有・キューを GZRS でホストする 1 つのストレージアカウントが必要です。オンプレミスのサーバーは ExpressRoute 経由で blob と file の両サービスにプライベートに接続する必要があります。実行すべき 2 つの操作はどれですか？（2 つ選択）",
        "Blob၊ Azure file share၊ queue တွေကို GZRS နဲ့ ထားမယ့် storage account တစ်ခု လိုတယ်။ On-premises server တွေက ExpressRoute ကနေ blob နဲ့ file service နှစ်ခုလုံးကို private ချိတ်ရမယ်။ ဘယ် action ၂ ခု လုပ်သင့်လဲ? (၂ ခု ရွေးပါ)"),
      options: ['Create a Standard general-purpose v2 account', 'Create a Premium file shares account', 'Create one private endpoint for the blob sub-resource and another for the file sub-resource', 'Enable a service endpoint on the GatewaySubnet', 'Create a single private endpoint that covers all storage services'],
      correct: [0, 2],
      explanation: L("Only Standard GPv2 supports blobs, files and queues together with GZRS. Private endpoints are created per sub-resource (blob, file, queue...), so two are needed. Premium file shares accounts support only Azure Files with LRS/ZRS, and service endpoints do not serve on-premises clients.",
        "BLOB・ファイル・キューを GZRS と一緒にサポートするのは Standard GPv2 だけです。プライベートエンドポイントはサブリソース（blob・file・queue など）ごとに作成するため 2 つ必要です。Premium ファイル共有アカウントは Azure Files のみで LRS/ZRS しか使えず、サービスエンドポイントはオンプレミスのクライアントには使えません。",
        "Blob၊ file၊ queue တွေကို GZRS နဲ့အတူ support လုပ်တာ Standard GPv2 တစ်ခုတည်းပါ။ Private endpoint ကို sub-resource (blob၊ file၊ queue...) တစ်ခုစီအတွက် ဖန်တီးရလို့ ၂ ခု လိုတယ်။ Premium file shares account က Azure Files သာ LRS/ZRS နဲ့ ရပြီး service endpoint က on-premises client တွေအတွက် အလုပ်မလုပ်ဘူး။"),
    },
  ],
  flashcards: [
    { term: 'GZRS',
      definition: L("Geo-zone-redundant storage: ZRS across three zones in the primary region plus an asynchronous LRS copy in the paired region.", "geo ゾーン冗長ストレージ：プライマリリージョンの 3 ゾーンで ZRS、さらにペアリージョンに非同期の LRS コピーを持ちます。", "Geo-zone-redundant storage- primary region ရဲ့ zone ၃ ခုမှာ ZRS နဲ့ paired region မှာ asynchronous LRS copy ပါတာ။"),
      example: L("A payments platform in Japan East survives both a zone outage and a full regional disaster.", "Japan East の決済基盤が、ゾーン障害とリージョン全体の災害の両方に耐えます。", "Japan East က payment platform တစ်ခုက zone outage ရော region တစ်ခုလုံး ဘေးအန္တရာယ်ရော ခံနိုင်တယ်။") },
    { term: 'RA-GRS',
      definition: L("Geo-redundant storage with read access to the secondary region through the `-secondary` endpoint at any time.", "`-secondary` エンドポイントを通じて、いつでもセカンダリリージョンを読み取れる geo 冗長ストレージです。", "`-secondary` endpoint ကနေ secondary region ကို ဘယ်အချိန်မဆို ဖတ်လို့ရတဲ့ geo-redundant storage ပါ။"),
      example: L("A news site serves images from `mysite-secondary.blob.core.windows.net` while the primary region is down.", "プライマリリージョンの停止中、ニュースサイトが `mysite-secondary.blob.core.windows.net` から画像を配信します。", "Primary region ပျက်နေချိန် news site က `mysite-secondary.blob.core.windows.net` ကနေ ပုံတွေ ပြပေးတယ်။") },
    { term: 'Archive tier',
      definition: L("The cheapest, offline blob tier with a 180-day minimum; blobs must be rehydrated (hours) before they can be read.", "最も安価なオフラインの BLOB 層で、最小期間は 180 日です。読み取る前にリハイドレート（数時間）が必要です。", "စျေးအသက်သာဆုံး offline blob tier ဖြစ်ပြီး minimum ၁၈၀ ရက်၊ မဖတ်ခင် rehydrate (နာရီနဲ့ချီ) လုပ်ရတယ်။"),
      example: L("Seven-year-old tax documents that are opened only during a rare audit.", "まれな監査のときにしか開かない 7 年前の税務書類。", "ရှားရှားပါးပါး audit လုပ်မှပဲ ဖွင့်တဲ့ ၇ နှစ်က အခွန်စာရွက်စာတမ်းတွေ။") },
    { term: 'Lifecycle management policy',
      definition: L("JSON rules on a storage account that automatically tier or delete blobs based on age or last access.", "経過日数や最終アクセスに基づいて BLOB の層を自動で移動・削除する、ストレージアカウントの JSON ルールです。", "ရက်အရေအတွက် သို့ last access ပေါ်မူတည်ပြီး blob ကို အလိုအလျောက် tier ပြောင်း/ဖျက်တဲ့ storage account ပေါ်က JSON rule ပါ။"),
      example: L("`logs/` blobs move to Cool after 30 days, Archive after 180 days, and are deleted after 7 years.", "`logs/` の BLOB を 30 日後に Cool、180 日後に Archive に移し、7 年後に削除します。", "`logs/` blob တွေကို ၃၀ ရက်မှာ Cool၊ ၁၈၀ ရက်မှာ Archive ရွှေ့ပြီး ၇ နှစ်မှာ ဖျက်တယ်။") },
    { term: 'Blob soft delete',
      definition: L("Keeps deleted or overwritten blobs for a retention period of 1 to 365 days so they can be restored.", "削除・上書きされた BLOB を 1〜365 日の保持期間だけ残し、復元できるようにします。", "ဖျက်လိုက်တဲ့/overwrite ဖြစ်သွားတဲ့ blob တွေကို ၁ ရက်မှ ၃၆၅ ရက်အထိ ထိန်းထားပြီး ပြန်ယူခွင့်ပေးတယ်။"),
      example: L("A developer deletes `invoice-2026.pdf` by mistake and undeletes it the next morning.", "開発者が誤って `invoice-2026.pdf` を削除し、翌朝に復元します。", "Developer တစ်ယောက်က `invoice-2026.pdf` ကို မှားဖျက်ပြီး နောက်နေ့မနက် undelete လုပ်တယ်။") },
    { term: 'Immutable storage (WORM)',
      definition: L("Time-based retention or legal hold policies that prevent any modification or deletion of blobs, even by administrators.", "管理者を含め、BLOB の変更や削除を一切できなくする時間ベースの保持またはリーガルホールドのポリシーです。", "Admin ပါ ဘယ်သူမှ blob ကို မပြင်/မဖျက်နိုင်အောင် တားတဲ့ time-based retention သို့ legal hold policy ပါ။"),
      example: L("A securities firm locks a 7-year retention policy on its trade-records container.", "証券会社が取引記録コンテナーに 7 年の保持ポリシーを設定してロックします。", "Securities company တစ်ခုက trade-record container ပေါ်မှာ ၇ နှစ် retention policy ကို lock လုပ်တယ်။") },
    { term: 'User delegation SAS',
      definition: L("A SAS signed with Microsoft Entra credentials instead of the account key; available for Blob storage and the most secure SAS type.", "アカウントキーではなく Microsoft Entra の資格情報で署名する SAS で、Blob ストレージで使え、最も安全な SAS の種類です。", "Account key အစား Microsoft Entra credential နဲ့ sign လုပ်တဲ့ SAS ဖြစ်ပြီး Blob storage မှာ သုံးလို့ရ၊ အလုံခြုံဆုံး SAS type ပါ။"),
      example: L("An app with a managed identity issues a 1-hour read-only link to a report blob.", "マネージド ID を持つアプリが、レポート BLOB への 1 時間有効な読み取り専用リンクを発行します。", "Managed identity ပါတဲ့ app က report blob အတွက် ၁ နာရီ read-only link ထုတ်ပေးတယ်။") },
    { term: 'Stored access policy',
      definition: L("A policy on a container, share, queue or table (max 5) that defines SAS permissions and expiry and allows instant revocation of linked service SAS tokens.", "コンテナー・共有・キュー・テーブルに設定するポリシー（最大 5 個）で、SAS の権限と有効期限を定義し、関連付けたサービス SAS を即座に取り消せます。", "Container၊ share၊ queue သို့ table ပေါ်က policy (အများဆုံး ၅ ခု) ဖြစ်ပြီး SAS permission နဲ့ expiry ကို သတ်မှတ်ကာ ချိတ်ထားတဲ့ service SAS ကို ချက်ချင်း revoke လုပ်ခွင့်ပေးတယ်။"),
      example: L("Delete the `partner-a` policy and Partner A's SAS stops working while Partner B's still works.", "`partner-a` ポリシーを削除すると、パートナー A の SAS は使えなくなり、パートナー B の SAS は引き続き使えます。", "`partner-a` policy ကို ဖျက်လိုက်ရင် Partner A ရဲ့ SAS အလုပ်မလုပ်တော့ပေမယ့် Partner B ရဲ့ SAS ဆက်အလုပ်လုပ်တယ်။") },
    { term: 'Private endpoint',
      definition: L("A network interface with a private IP from your VNet that connects privately to one storage sub-resource (blob, file, queue, table...).", "VNet のプライベート IP を持つネットワークインターフェイスで、1 つのストレージサブリソース（blob・file・queue・table など）にプライベート接続します。", "ကိုယ့် VNet ထဲက private IP ပါတဲ့ network interface ဖြစ်ပြီး storage sub-resource တစ်ခု (blob၊ file၊ queue၊ table...) ကို private ချိတ်ပေးတယ်။"),
      example: L("`stkmklab2026.blob.core.windows.net` resolves to 10.1.2.5 for on-premises users over ExpressRoute.", "ExpressRoute 経由のオンプレミスユーザーには `stkmklab2026.blob.core.windows.net` が 10.1.2.5 に名前解決されます。", "ExpressRoute ကနေ on-premises user တွေအတွက် `stkmklab2026.blob.core.windows.net` က 10.1.2.5 ကို resolve ဖြစ်တယ်။") },
    { term: 'Azure File Sync',
      definition: L("A service that syncs Windows file servers with an Azure file share, with cloud tiering to keep only hot files on local disks.", "Windows ファイルサーバーを Azure ファイル共有と同期するサービスで、クラウドの階層化によりよく使うファイルだけをローカルディスクに保持します。", "Windows file server ကို Azure file share နဲ့ sync လုပ်ပေးတဲ့ service ဖြစ်ပြီး cloud tiering နဲ့ မကြာခဏသုံးတဲ့ file ကိုပဲ local disk မှာ ထားတယ်။"),
      example: L("Osaka and Fukuoka branch servers share the same files, backed by one Azure file share.", "大阪と福岡の支店サーバーが、1 つの Azure ファイル共有を基盤に同じファイルを共有します。", "Osaka နဲ့ Fukuoka branch server တွေက Azure file share တစ်ခုတည်းကို အခြေခံပြီး file တွေ မျှသုံးတယ်။") },
  ],
};
