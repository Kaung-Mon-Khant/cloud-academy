import { L, type SeedTopic } from '../types.js';

export const topic: SeedTopic = {
  slug: 'aws-storage',
  icon: 'HardDrive',
  level: 'ASSOCIATE',
  exams: ['CLF-C02', 'SAA-C03'],
  name: L("AWS Storage: S3, EBS, EFS, FSx & Hybrid", "AWS ストレージ：S3・EBS・EFS・FSx とハイブリッド", "AWS Storage - S3၊ EBS၊ EFS၊ FSx နဲ့ Hybrid"),
  description: L(
    "Object, block and file storage on AWS: S3 storage classes, lifecycle, versioning, replication, encryption and access control; EBS vs instance store; EFS vs FSx; and hybrid/migration services such as Storage Gateway, Snow Family, DataSync and AWS Backup.",
    "AWS のオブジェクト・ブロック・ファイルストレージを学びます。S3 のストレージクラス、ライフサイクル、バージョニング、レプリケーション、暗号化とアクセス制御、EBS とインスタンスストアの違い、EFS と FSx の違い、さらに Storage Gateway・Snow Family・DataSync・AWS Backup などのハイブリッド／移行サービスを扱います。",
    "AWS ပေါ်က object၊ block၊ file storage တွေကို လေ့လာမယ်။ S3 storage class၊ lifecycle၊ versioning၊ replication၊ encryption နဲ့ access control၊ EBS နဲ့ instance store ကွာခြားချက်၊ EFS နဲ့ FSx ကွာခြားချက်၊ Storage Gateway၊ Snow Family၊ DataSync၊ AWS Backup လို hybrid/migration service တွေ ပါမယ်။",
  ),
  lesson: {
    minutes: 21,
    objectives: [
      L("Explain how S3 stores data (buckets, objects, keys) and its durability, availability and consistency model.",
        "S3 がデータを保存する仕組み（バケット・オブジェクト・キー）と、耐久性・可用性・整合性モデルを説明できる。",
        "S3 က data ကို ဘယ်လိုသိမ်းလဲ (bucket၊ object၊ key) နဲ့ durability၊ availability၊ consistency model ကို ရှင်းပြနိုင်မယ်။"),
      L("Choose the right S3 storage class and automate transitions with lifecycle rules.",
        "適切な S3 ストレージクラスを選び、ライフサイクルルールで移行を自動化できる。",
        "သင့်တော်တဲ့ S3 storage class ကို ရွေးပြီး lifecycle rule နဲ့ class ပြောင်းတာကို automate လုပ်နိုင်မယ်။"),
      L("Protect S3 data with versioning, replication, Object Lock, encryption and Block Public Access.",
        "バージョニング、レプリケーション、Object Lock、暗号化、ブロックパブリックアクセスで S3 のデータを保護できる。",
        "Versioning၊ replication၊ Object Lock၊ encryption၊ Block Public Access တို့နဲ့ S3 data ကို ကာကွယ်နိုင်မယ်။"),
      L("Compare EBS, instance store, EFS and the FSx family and pick one for a given workload.",
        "EBS・インスタンスストア・EFS・FSx ファミリーを比較し、ワークロードに合うものを選べる。",
        "EBS၊ instance store၊ EFS၊ FSx family ကို နှိုင်းယှဉ်ပြီး workload အလိုက် ရွေးနိုင်မယ်။"),
      L("Select the right hybrid or migration service: Storage Gateway, Snow Family, DataSync or AWS Backup.",
        "Storage Gateway・Snow Family・DataSync・AWS Backup から適切なハイブリッド／移行サービスを選べる。",
        "Storage Gateway၊ Snow Family၊ DataSync၊ AWS Backup ထဲက သင့်တော်တဲ့ hybrid/migration service ကို ရွေးနိုင်မယ်။"),
    ],
    sections: [
      {
        id: "storage-types-s3-basics",
        title: L("Three kinds of storage, and S3 fundamentals", "3 種類のストレージと S3 の基礎", "Storage အမျိုးအစား ၃ မျိုးနဲ့ S3 အခြေခံ"),
        blocks: [
          { type: 'p', text: L(
            "AWS offers three storage shapes. **Block storage** (EBS) is like a raw hard disk attached to one server: the OS formats it and writes blocks. **File storage** (EFS, FSx) is like a shared network drive: many servers mount the same folders at once. **Object storage** (S3) is like a huge valet parking service: you hand over a whole file (the object), get a ticket (the key), and ask for it back later over HTTPS. You cannot edit part of an object; you upload a new version of the whole thing.",
            "AWS には 3 つのストレージ形態があります。**ブロックストレージ**（EBS）は 1 台のサーバーに接続された生のハードディスクのようなもので、OS がフォーマットしてブロック単位で書き込みます。**ファイルストレージ**（EFS、FSx）は共有ネットワークドライブのようなもので、多数のサーバーが同じフォルダを同時にマウントします。**オブジェクトストレージ**（S3）は巨大なバレーパーキングのようなもので、ファイル全体（オブジェクト）を預けてチケット（キー）を受け取り、後から HTTPS で取り出します。オブジェクトの一部だけを編集することはできず、全体を新しいバージョンとしてアップロードします。",
            "AWS မှာ storage ပုံစံ ၃ မျိုးရှိတယ်။ **Block storage** (EBS) က server တစ်လုံးမှာ တပ်ထားတဲ့ hard disk အလွတ်လိုပဲ၊ OS က format လုပ်ပြီး block လိုက် ရေးတယ်။ **File storage** (EFS၊ FSx) က share လုပ်ထားတဲ့ network drive လိုပဲ၊ server အများကြီးက folder တစ်ခုတည်းကို တပြိုင်နက် mount လုပ်နိုင်တယ်။ **Object storage** (S3) က ကားအပ်ထားတဲ့ valet parking ကြီးလိုပဲ၊ file တစ်ခုလုံး (object) ကို အပ်ပြီး လက်မှတ် (key) ယူထား၊ နောက်မှ HTTPS နဲ့ ပြန်တောင်းတယ်။ Object ရဲ့ တစ်စိတ်တစ်ပိုင်းကို ပြင်လို့မရဘူး၊ တစ်ခုလုံးကို version အသစ်အနေနဲ့ ပြန် upload လုပ်ရတယ်။"
          ) },
          { type: 'p', text: L(
            "In S3 you create a **bucket** in a Region and put **objects** in it. Each object has a **key** (its full name, e.g. `reports/2026/q1.pdf`), the data, and metadata. Folders are only a console illusion: the `/` is just part of the key. Bucket names are **globally unique** across all AWS accounts, even though the bucket lives in one Region. A single object can be up to **5 TB**; a single PUT can upload up to 5 GB, so larger objects need multipart upload.",
            "S3 ではリージョン内に**バケット**を作成し、そこに**オブジェクト**を格納します。各オブジェクトは**キー**（例：`reports/2026/q1.pdf` のような完全な名前）、データ、メタデータを持ちます。フォルダはコンソール上の見せ方にすぎず、`/` はキーの一部です。バケットは 1 つのリージョンに存在しますが、バケット名はすべての AWS アカウントで**グローバルに一意**でなければなりません。1 オブジェクトの最大サイズは **5 TB** で、1 回の PUT でアップロードできるのは 5 GB までのため、それ以上はマルチパートアップロードが必要です。",
            "S3 မှာ Region တစ်ခုထဲမှာ **bucket** ဆောက်ပြီး **object** တွေ ထည့်တယ်။ Object တစ်ခုစီမှာ **key** (နာမည်အပြည့်၊ ဥပမာ `reports/2026/q1.pdf`)၊ data နဲ့ metadata ပါတယ်။ Folder ဆိုတာ console မှာ ပြတဲ့ ပုံစံသက်သက်ပါ၊ `/` က key ရဲ့ အစိတ်အပိုင်းပဲ။ Bucket က Region တစ်ခုထဲမှာ ရှိပေမဲ့ bucket နာမည်က AWS account အားလုံးမှာ **global unique** ဖြစ်ရတယ်။ Object တစ်ခု အများဆုံး **5 TB** ထိ ရတယ်။ PUT တစ်ခါမှာ 5 GB ထိပဲ upload လုပ်လို့ရလို့ အဲ့ထက်ကြီးရင် multipart upload သုံးရတယ်။"
          ) },
          { type: 'diagram', text:
`Region: ap-northeast-1 (Tokyo)
+--------------------------------------------------+
| Bucket: acme-media-prod   (name unique globally) |
|                                                  |
|  Key                          Object (data+meta) |
|  ---------------------------  -----------------  |
|  logo.png                     12 KB              |
|  reports/2026/q1.pdf          2 MB               |
|  videos/launch.mp4            3 GB  (multipart)  |
+--------------------------------------------------+
  Data stored across >= 3 AZs (most classes)
  -> 99.999999999% (11 nines) durability`,
            caption: L("A bucket is a flat namespace of keys; the slash only looks like a folder.", "バケットはキーのフラットな名前空間で、スラッシュはフォルダのように見えるだけです。", "Bucket ဆိုတာ key တွေရဲ့ flat namespace ပါ၊ slash က folder လို ပုံစံပဲ ပေါ်တာ။") },
          { type: 'p', text: L(
            "S3 is designed for **99.999999999% (11 nines) durability**: store 10 million objects and you might statistically lose one every 10,000 years. Durability (will the data survive?) is different from **availability** (can I read it right now?): S3 Standard is designed for 99.99% availability. Since December 2020 S3 provides **strong read-after-write consistency** for all PUTs, overwrites and deletes, at no extra cost, so a read right after a write always returns the latest data.",
            "S3 は **99.999999999%（イレブンナイン）の耐久性**を持つよう設計されています。1,000 万個のオブジェクトを保存しても、統計的には 1 万年に 1 個失う程度です。耐久性（データが失われないか）と**可用性**（今すぐ読めるか）は別物で、S3 Standard の可用性は 99.99% を想定しています。また 2020 年 12 月以降、S3 はすべての PUT・上書き・削除に対して**強い書き込み後読み取り整合性**を追加料金なしで提供しており、書き込み直後の読み取りは常に最新データを返します。",
            "S3 ကို **99.999999999% (11 nines) durability** ရအောင် design လုပ်ထားတယ်။ Object သန်း ၁၀ သိမ်းထားရင် စာရင်းအင်းအရ နှစ် ၁၀,၀၀၀ မှာ တစ်ခုလောက်ပဲ ပျောက်နိုင်တယ်။ Durability (data မပျောက်ဘူးလား) နဲ့ **availability** (အခုချက်ချင်း ဖတ်လို့ရလား) မတူဘူး၊ S3 Standard ရဲ့ availability က 99.99% ပါ။ 2020 ဒီဇင်ဘာကစပြီး S3 က PUT၊ overwrite၊ delete အားလုံးအတွက် **strong read-after-write consistency** ကို အခမဲ့ ပေးတယ်၊ ရေးပြီးချက်ချင်း ဖတ်ရင် data အသစ်ကို အမြဲရမယ်။"
          ) },
          { type: 'callout', tone: 'memory', text: L(
            "**Block = hard disk (EBS), File = shared folder (EFS/FSx), Object = valet parking with a ticket (S3).** If the question says 'mount by many Linux servers', think EFS; 'boot volume', think EBS; 'unlimited, accessed over HTTP', think S3.",
            "**ブロック＝ハードディスク（EBS）、ファイル＝共有フォルダ（EFS/FSx）、オブジェクト＝チケット付きバレーパーキング（S3）**。問題文に「多数の Linux サーバーからマウント」とあれば EFS、「ブートボリューム」なら EBS、「容量無制限で HTTP 経由」なら S3 を考えます。",
            "**Block = hard disk (EBS)၊ File = share folder (EFS/FSx)၊ Object = လက်မှတ်နဲ့ valet parking (S3)** လို့ မှတ်ထားပါ။ မေးခွန်းမှာ 'Linux server အများကြီးက mount' ဆိုရင် EFS၊ 'boot volume' ဆိုရင် EBS၊ 'အကန့်အသတ်မရှိ၊ HTTP နဲ့ access' ဆိုရင် S3 လို့ တွေးပါ။"
          ) },
        ],
      },
      {
        id: "s3-storage-classes",
        title: L("S3 storage classes: pay for how often you read", "S3 ストレージクラス：アクセス頻度で支払う", "S3 storage class - ဘယ်လောက်မကြာခဏ ဖတ်လဲပေါ် မူတည်ပြီး ပေးရတယ်"),
        blocks: [
          { type: 'p', text: L(
            "All S3 classes share the same 11 nines durability. What changes is **storage price vs retrieval cost and speed**. Think of a supermarket: fresh items stay on the front shelf (Standard), slower items go to the back room (Standard-IA), and seasonal stock goes to a distant warehouse that takes hours to reach (Glacier Flexible Retrieval, Deep Archive). Cheaper storage classes add **retrieval fees** and **minimum storage durations**, so moving data too early can cost more.",
            "すべての S3 クラスはイレブンナインの耐久性を共有しています。違うのは**保存料金と取り出しコスト・速度のバランス**です。スーパーマーケットを想像してください。よく売れる商品は店頭の棚（Standard）、売れ行きの遅い商品はバックヤード（Standard-IA）、季節商品は取りに行くのに何時間もかかる遠くの倉庫（Glacier Flexible Retrieval、Deep Archive）に置きます。安いクラスほど**取り出し料金**と**最低保存期間**があるため、早すぎる移動はかえって高くつくことがあります。",
            "S3 class အားလုံးမှာ 11 nines durability တူတူပါပဲ။ ကွာတာက **သိမ်းစရိတ် နဲ့ ပြန်ထုတ်စရိတ်/မြန်နှုန်း** ပါ။ Supermarket ကို စဉ်းစားကြည့်ပါ၊ အရောင်းရဆုံးပစ္စည်းက ရှေ့စင် (Standard)၊ ရောင်းနှေးတဲ့ပစ္စည်းက နောက်ဘက်အခန်း (Standard-IA)၊ ရာသီပစ္စည်းကတော့ သွားယူဖို့ နာရီချီကြာတဲ့ ဝေးတဲ့ဂိုဒေါင် (Glacier Flexible Retrieval၊ Deep Archive) မှာ ထားတယ်။ ဈေးပေါတဲ့ class တွေမှာ **retrieval fee** နဲ့ **minimum storage duration** ရှိလို့ စောစောရွှေ့ရင် ပိုကုန်နိုင်တယ်။"
          ) },
          { type: 'table',
            head: [L("Class", "クラス", "Class အမျိုးအစား"), L("Best for", "最適な用途", "သင့်တော်တဲ့ အသုံး"), L("Retrieval", "取り出し", "ပြန်ထုတ်ချိန်"), L("Min. duration / AZs", "最低保存期間／AZ", "အနည်းဆုံး သိမ်းရက် / AZ")],
            rows: [
              [L("S3 Standard", "S3 Standard（標準）", "S3 Standard (ပုံမှန်)"), L("Frequently accessed data, websites, apps", "頻繁にアクセスするデータ、Web サイト、アプリ", "မကြာခဏ access လုပ်တဲ့ data၊ website၊ app"), L("Milliseconds, no retrieval fee", "ミリ秒、取り出し料金なし", "Millisecond၊ retrieval fee မရှိ"), L("None / >= 3 AZs", "なし／3 AZ 以上", "မရှိ / AZ ၃ ခုနှင့်အထက်")],
              [L("S3 Intelligent-Tiering", "S3 Intelligent-Tiering（自動階層化）", "S3 Intelligent-Tiering (အလိုအလျောက် tier ခွဲ)"), L("Unknown or changing access patterns", "アクセスパターンが不明・変動する", "Access pattern မသိ/ပြောင်းလဲနေတဲ့ data"), L("Milliseconds (optional archive tiers slower); small monitoring fee, no retrieval fee", "ミリ秒（任意のアーカイブ層は遅い）、少額の監視料金、取り出し料金なし", "Millisecond (optional archive tier တွေက နှေး)၊ monitoring fee နည်းနည်း၊ retrieval fee မရှိ"), L("None / >= 3 AZs", "なし／3 AZ 以上", "မရှိ / AZ ၃ ခုနှင့်အထက်")],
              [L("S3 Standard-IA", "S3 Standard-IA（低頻度アクセス）", "S3 Standard-IA (ခဏခဏ မသုံး)"), L("Infrequent but fast access, e.g. backups read monthly", "頻度は低いが即時アクセスが必要（例：月 1 回読むバックアップ）", "ခဏခဏ မဖတ်ပေမဲ့ လိုရင် ချက်ချင်းလိုတဲ့ data (ဥပမာ လစဉ် ဖတ်တဲ့ backup)"), L("Milliseconds, per-GB retrieval fee", "ミリ秒、GB 単位の取り出し料金", "Millisecond၊ GB အလိုက် retrieval fee"), L("30 days / >= 3 AZs", "30 日／3 AZ 以上", "၃၀ ရက် / AZ ၃ ခုနှင့်အထက်")],
              [L("S3 One Zone-IA", "S3 One Zone-IA（単一 AZ・低頻度）", "S3 One Zone-IA (AZ တစ်ခုတည်း)"), L("Re-creatable infrequent data, e.g. thumbnails, secondary copies", "再作成可能な低頻度データ（サムネイル、二次コピーなど）", "ပြန်ဖန်တီးလို့ရတဲ့ data (thumbnail၊ secondary copy စသည်)"), L("Milliseconds, retrieval fee; 99.5% availability", "ミリ秒、取り出し料金あり、可用性 99.5%", "Millisecond၊ retrieval fee ရှိ၊ availability 99.5%"), L("30 days / 1 AZ only", "30 日／1 AZ のみ", "၃၀ ရက် / AZ ၁ ခုတည်း")],
              [L("S3 Glacier Instant Retrieval", "S3 Glacier Instant Retrieval（即時取り出し）", "S3 Glacier Instant Retrieval (ချက်ချင်းပြန်ရ)"), L("Archive read about once a quarter but needed instantly, e.g. medical images", "四半期に 1 回程度だが即時に必要なアーカイブ（医療画像など）", "သုံးလ တစ်ခါလောက်ပဲ ဖတ်ပေမဲ့ ချက်ချင်းလိုတဲ့ archive (ဥပမာ ဆေးရုံ image)"), L("Milliseconds, higher retrieval fee", "ミリ秒、取り出し料金は高め", "Millisecond၊ retrieval fee ပိုများ"), L("90 days / >= 3 AZs", "90 日／3 AZ 以上", "၉၀ ရက် / AZ ၃ ခုနှင့်အထက်")],
              [L("S3 Glacier Flexible Retrieval", "S3 Glacier Flexible Retrieval（柔軟な取り出し）", "S3 Glacier Flexible Retrieval (မိနစ်မှ နာရီအထိ)"), L("Archives read once or twice a year", "年に 1〜2 回読むアーカイブ", "တစ်နှစ်မှာ ၁-၂ ခါပဲ ဖတ်တဲ့ archive"), L("Expedited 1-5 min, Standard 3-5 h, Bulk 5-12 h", "迅速 1〜5 分、標準 3〜5 時間、大容量 5〜12 時間", "Expedited ၁-၅ မိနစ်၊ Standard ၃-၅ နာရီ၊ Bulk ၅-၁၂ နာရီ"), L("90 days / >= 3 AZs", "90 日／3 AZ 以上", "၉၀ ရက် / AZ ၃ ခုနှင့်အထက်")],
              [L("S3 Glacier Deep Archive", "S3 Glacier Deep Archive（長期アーカイブ）", "S3 Glacier Deep Archive (ရေရှည် archive)"), L("Lowest cost; compliance data kept 7-10 years, tape replacement", "最安。7〜10 年保管するコンプライアンスデータ、テープの代替", "အပေါဆုံး၊ ၇-၁၀ နှစ် သိမ်းရတဲ့ compliance data၊ tape အစားထိုး"), L("Standard within 12 h, Bulk within 48 h", "標準 12 時間以内、大容量 48 時間以内", "Standard ၁၂ နာရီအတွင်း၊ Bulk ၄၈ နာရီအတွင်း"), L("180 days / >= 3 AZs", "180 日／3 AZ 以上", "၁၈၀ ရက် / AZ ၃ ခုနှင့်အထက်")],
            ] },
          { type: 'p', text: L(
            "**Intelligent-Tiering** is the 'I do not know' answer: S3 watches each object and moves it between frequent and infrequent access tiers automatically, with no retrieval fees, for a small per-object monitoring fee (objects smaller than 128 KB are not monitored and stay in the frequent tier). There is also **S3 Express One Zone**, a high-performance single-AZ class with single-digit millisecond latency that uses special directory buckets; it targets ML training and analytics that read the same data many times.",
            "**Intelligent-Tiering** は「アクセス頻度が分からない」ときの答えです。S3 が各オブジェクトを監視し、少額のオブジェクト単位の監視料金と引き換えに、取り出し料金なしで高頻度層と低頻度層の間を自動で移動します（128 KB 未満のオブジェクトは監視対象外で高頻度層に残ります）。また **S3 Express One Zone** という、ディレクトリバケットを使う 1 AZ の高性能クラスもあり、1 桁ミリ秒のレイテンシで同じデータを何度も読む ML 学習や分析向けです。",
            "**Intelligent-Tiering** က 'ဘယ်လောက် access လုပ်မလဲ မသိဘူး' ဆိုတဲ့အခါ အဖြေပါ။ S3 က object တစ်ခုချင်းကို စောင့်ကြည့်ပြီး frequent tier နဲ့ infrequent tier ကြား အလိုအလျောက် ရွှေ့ပေးတယ်၊ retrieval fee မရှိဘဲ object အလိုက် monitoring fee နည်းနည်းပဲ ပေးရတယ် (128 KB အောက် object တွေကို monitor မလုပ်ဘဲ frequent tier မှာပဲ ထားတယ်)။ **S3 Express One Zone** ဆိုတဲ့ AZ တစ်ခုတည်းသုံးတဲ့ high-performance class လည်း ရှိတယ်၊ directory bucket သုံးပြီး single-digit millisecond latency ရတယ်၊ data တစ်ခုတည်းကို ခဏခဏ ဖတ်တဲ့ ML training/analytics အတွက်ပါ။"
          ) },
          { type: 'callout', tone: 'memory', text: L(
            "Minimum durations go **30 - 30 - 90 - 90 - 180**: Standard-IA, One Zone-IA, Glacier Instant, Glacier Flexible, Deep Archive. Deep Archive retrieval: **12 h standard, 48 h bulk**. 'Expedited' (minutes) exists only for Glacier Flexible Retrieval.",
            "最低保存期間は **30・30・90・90・180 日**（Standard-IA、One Zone-IA、Glacier Instant、Glacier Flexible、Deep Archive）と覚えます。Deep Archive の取り出しは**標準 12 時間、大容量 48 時間**。分単位の「迅速（Expedited）」は Glacier Flexible Retrieval だけです。",
            "Minimum duration ကို **30 - 30 - 90 - 90 - 180** လို့ မှတ်ပါ (Standard-IA၊ One Zone-IA၊ Glacier Instant၊ Glacier Flexible၊ Deep Archive)။ Deep Archive ပြန်ထုတ်ချိန်က **Standard ၁၂ နာရီ၊ Bulk ၄၈ နာရီ**။ မိနစ်ပိုင်းနဲ့ရတဲ့ 'Expedited' က Glacier Flexible Retrieval မှာပဲ ရှိတယ်။"
          ) },
          { type: 'callout', tone: 'exam', text: L(
            "Keyword mapping: 'unpredictable access' -> **Intelligent-Tiering**; 'infrequent, but must be available immediately' -> **Standard-IA** (or **Glacier Instant Retrieval** if accessed only quarterly); 'can be re-created, lowest cost for infrequent' -> **One Zone-IA**; 'retrieve within 12/48 hours, lowest cost' -> **Deep Archive**. If resilience to an AZ loss is required, One Zone-IA is wrong.",
            "キーワード対応：「アクセスが予測できない」→ **Intelligent-Tiering**、「低頻度だがすぐに使える必要がある」→ **Standard-IA**（四半期に 1 回程度なら **Glacier Instant Retrieval**）、「再作成可能で低頻度、最安」→ **One Zone-IA**、「12／48 時間以内の取り出しで最安」→ **Deep Archive**。AZ 障害への耐性が必要なら One Zone-IA は不正解です。",
            "Keyword ချိတ်ပုံ - 'access pattern ကြိုမသိ' -> **Intelligent-Tiering**၊ 'ခဏခဏ မသုံးပေမဲ့ ချက်ချင်းရရမယ်' -> **Standard-IA** (သုံးလတစ်ခါဆိုရင် **Glacier Instant Retrieval**)၊ 'ပြန်ဖန်တီးလို့ရ၊ အပေါဆုံး infrequent' -> **One Zone-IA**၊ '၁၂/၄၈ နာရီအတွင်း ပြန်ရရင်ရပြီ၊ အပေါဆုံး' -> **Deep Archive**။ AZ တစ်ခု ပျက်ရင်လည်း data မပျောက်ရဘူးဆိုရင် One Zone-IA က အဖြေမှားပါ။"
          ) },
        ],
      },
      {
        id: "lifecycle-versioning-replication",
        title: L("Lifecycle rules, versioning and replication", "ライフサイクルルール、バージョニング、レプリケーション", "Lifecycle rule၊ Versioning နဲ့ Replication"),
        blocks: [
          { type: 'p', text: L(
            "A **lifecycle configuration** is a set of rules that S3 applies automatically. **Transition actions** move objects to a cheaper class after N days; **expiration actions** delete objects (or old versions) after N days. Rules can target a prefix (e.g. `logs/`) or object tags. Example: application logs are hot for a week, sometimes read for a month, and must be kept for 7 years for audit, so you transition them to Standard-IA at 30 days, to Deep Archive at 365 days and expire them after about 7 years. Note that S3 requires objects to stay at least 30 days in Standard before a lifecycle transition to Standard-IA or One Zone-IA.",
            "**ライフサイクル設定**とは S3 が自動的に適用するルールの集まりです。**移行アクション**は N 日後にオブジェクトをより安いクラスへ移し、**有効期限アクション**は N 日後にオブジェクト（または古いバージョン）を削除します。ルールはプレフィックス（例：`logs/`）やオブジェクトタグで対象を絞れます。例えば、アプリのログは 1 週間は頻繁に使い、1 か月は時々参照し、監査のため 7 年保管する必要がある場合、30 日で Standard-IA、365 日で Deep Archive に移行し、約 7 年で削除します。なお、ライフサイクルで Standard-IA や One Zone-IA に移行するには、Standard に最低 30 日置く必要があります。",
            "**Lifecycle configuration** ဆိုတာ S3 က အလိုအလျောက် လုပ်ပေးတဲ့ rule အစုပါ။ **Transition action** က ရက် N ရက်ပြီးရင် object ကို ဈေးပိုပေါတဲ့ class ကို ရွှေ့တယ်၊ **Expiration action** က ရက် N ရက်ပြီးရင် object (သို့) version ဟောင်းတွေကို ဖျက်တယ်။ Rule ကို prefix (ဥပမာ `logs/`) ဒါမှမဟုတ် object tag နဲ့ ရွေးလို့ရတယ်။ ဥပမာ application log တွေကို တစ်ပတ်ကြာ ခဏခဏသုံး၊ တစ်လလောက် တစ်ခါတလေဖတ်၊ audit အတွက် ၇ နှစ်သိမ်းရမယ်ဆိုရင် ရက် ၃၀ မှာ Standard-IA၊ ရက် ၃၆၅ မှာ Deep Archive ကို ရွှေ့ပြီး ၇ နှစ်လောက်မှာ ဖျက်မယ်။ Lifecycle နဲ့ Standard-IA/One Zone-IA ကို ရွှေ့ဖို့ Standard မှာ အနည်းဆုံး ရက် ၃၀ ရှိရမယ်ဆိုတာ သတိထားပါ။"
          ) },
          { type: 'code', lang: 'json', code:
`{
  "Rules": [
    {
      "ID": "logs-tiering",
      "Filter": { "Prefix": "logs/" },
      "Status": "Enabled",
      "Transitions": [
        { "Days": 30,  "StorageClass": "STANDARD_IA" },
        { "Days": 365, "StorageClass": "DEEP_ARCHIVE" }
      ],
      "Expiration": { "Days": 2555 },
      "NoncurrentVersionExpiration": { "NoncurrentDays": 60 }
    }
  ]
}`,
            caption: L("Save as lifecycle.json and apply with: aws s3api put-bucket-lifecycle-configuration --bucket my-bucket --lifecycle-configuration file://lifecycle.json", "lifecycle.json として保存し、aws s3api put-bucket-lifecycle-configuration --bucket my-bucket --lifecycle-configuration file://lifecycle.json で適用します。", "lifecycle.json အဖြစ် သိမ်းပြီး aws s3api put-bucket-lifecycle-configuration --bucket my-bucket --lifecycle-configuration file://lifecycle.json နဲ့ apply လုပ်ပါ။") },
          { type: 'p', text: L(
            "**Versioning** keeps every version of an object. Overwriting creates a new version; deleting without a version ID only adds a **delete marker**, so you can 'undelete' by removing the marker. A bucket is unversioned, versioning-enabled, or versioning-suspended; once enabled it can never go back to unversioned, only suspended. **MFA Delete** adds a second factor for permanently deleting versions or changing the versioning state; only the **root user** can enable it, and only through the CLI/API. Remember that every version is billed, so pair versioning with a `NoncurrentVersionExpiration` rule.",
            "**バージョニング**はオブジェクトのすべてのバージョンを保持します。上書きすると新しいバージョンが作られ、バージョン ID を指定せずに削除すると**削除マーカー**が追加されるだけなので、マーカーを消せば「復元」できます。バケットの状態は「未設定」「有効」「停止」のいずれかで、一度有効にすると未設定には戻せず、停止のみ可能です。**MFA Delete** はバージョンの完全削除やバージョニング状態の変更に 2 要素目を要求します。有効化できるのは**ルートユーザー**のみで、CLI/API からしか設定できません。すべてのバージョンが課金対象なので、`NoncurrentVersionExpiration` ルールと組み合わせましょう。",
            "**Versioning** က object ရဲ့ version တိုင်းကို သိမ်းထားတယ်။ Overwrite လုပ်ရင် version အသစ်ဖြစ်တယ်၊ version ID မပါဘဲ ဖျက်ရင် **delete marker** တစ်ခုပဲ ထပ်ထည့်တာမို့ marker ကို ဖယ်လိုက်ရင် ပြန်ရတယ်။ Bucket က unversioned၊ versioning-enabled၊ versioning-suspended ထဲက တစ်ခုဖြစ်တယ်၊ enable လုပ်ပြီးရင် unversioned ကို ဘယ်တော့မှ ပြန်မရ၊ suspend ပဲ လုပ်လို့ရတယ်။ **MFA Delete** က version ကို အပြီးဖျက်တာ၊ versioning state ပြောင်းတာအတွက် second factor လိုအောင် လုပ်တယ်၊ **root user** တစ်ယောက်ပဲ CLI/API ကနေ enable လုပ်လို့ရတယ်။ Version တိုင်းအတွက် ငွေကျလို့ `NoncurrentVersionExpiration` rule နဲ့ တွဲသုံးပါ။"
          ) },
          { type: 'code', lang: 'bash', code:
`# Enable versioning on a bucket
aws s3api put-bucket-versioning \\
  --bucket acme-media-prod \\
  --versioning-configuration Status=Enabled

# Check the state and list versions of one key
aws s3api get-bucket-versioning --bucket acme-media-prod
aws s3api list-object-versions --bucket acme-media-prod --prefix logo.png`,
            caption: L("Versioning is a prerequisite for replication and Object Lock.", "バージョニングはレプリケーションと Object Lock の前提条件です。", "Versioning က replication နဲ့ Object Lock အတွက် မဖြစ်မနေ လိုတယ်။") },
          { type: 'p', text: L(
            "**Replication** copies new objects asynchronously to another bucket: **Cross-Region Replication (CRR)** for disaster recovery, compliance or lower latency for users in another Region; **Same-Region Replication (SRR)** for log aggregation or copying production data into a test account. Both require **versioning on source and destination**, an IAM role for S3, and can replicate across accounts. Only objects written **after** the rule is enabled are copied; use **S3 Batch Replication** for existing objects. Delete markers are not replicated unless you enable it, and **S3 Replication Time Control (RTC)** gives an SLA of 99.99% of objects replicated within 15 minutes.",
            "**レプリケーション**は新しいオブジェクトを別のバケットへ非同期でコピーします。**クロスリージョンレプリケーション（CRR）**は災害対策、コンプライアンス、別リージョンのユーザーへの低レイテンシのため、**同一リージョンレプリケーション（SRR）**はログ集約や本番データをテスト用アカウントへコピーするために使います。どちらも**送信元と送信先の両方でバージョニング**と S3 用の IAM ロールが必要で、アカウントをまたいだ複製も可能です。コピーされるのはルール有効化**後**に書き込まれたオブジェクトのみで、既存オブジェクトには **S3 Batch Replication** を使います。削除マーカーは有効にしない限り複製されず、**S3 Replication Time Control（RTC）**を使うと 99.99% のオブジェクトを 15 分以内に複製する SLA が得られます。",
            "**Replication** က object အသစ်တွေကို တခြား bucket ဆီ asynchronous ကူးပေးတယ်။ **Cross-Region Replication (CRR)** ကို disaster recovery၊ compliance၊ တခြား Region က user တွေအတွက် latency လျှော့ဖို့ သုံးတယ်။ **Same-Region Replication (SRR)** ကို log စုဖို့၊ production data ကို test account ဆီကူးဖို့ သုံးတယ်။ နှစ်ခုလုံးမှာ **source ရော destination ရော versioning** နဲ့ S3 အတွက် IAM role လိုတယ်၊ account ကျော်ပြီးလည်း ကူးလို့ရတယ်။ Rule enable လုပ်ပြီး **နောက်မှ** ရေးတဲ့ object တွေကိုပဲ ကူးတယ်၊ ရှိပြီးသား object တွေအတွက် **S3 Batch Replication** သုံးရတယ်။ Delete marker ကို enable မလုပ်ရင် မကူးဘူး၊ **S3 Replication Time Control (RTC)** သုံးရင် object 99.99% ကို ၁၅ မိနစ်အတွင်း ကူးပေးမယ့် SLA ရတယ်။"
          ) },
          { type: 'callout', tone: 'exam', text: L(
            "Classic traps: (1) 'Replication is configured but old objects are missing' -> replication is not retroactive; use **S3 Batch Replication**. (2) 'Protect against accidental deletion' -> **versioning** (+ MFA Delete). (3) 'Reduce cost of old versions' -> lifecycle **noncurrent version** actions.",
            "定番のひっかけ：(1)「レプリケーションを設定したが古いオブジェクトがない」→ レプリケーションは過去に遡らないので **S3 Batch Replication** を使う。(2)「誤削除から保護したい」→ **バージョニング**（＋MFA Delete）。(3)「古いバージョンのコストを下げたい」→ ライフサイクルの**非現行バージョン**アクション。",
            "ထောင်ချောက် မေးခွန်းတွေ - (1) 'Replication set ထားပေမဲ့ object ဟောင်းတွေ မပါဘူး' -> replication က နောက်ကြောင်းပြန် မကူးဘူး၊ **S3 Batch Replication** သုံး။ (2) 'မတော်တဆ ဖျက်မိတာကနေ ကာကွယ်ချင်' -> **versioning** (+ MFA Delete)။ (3) 'Version ဟောင်းတွေရဲ့ ကုန်ကျစရိတ် လျှော့ချင်' -> lifecycle ရဲ့ **noncurrent version** action။"
          ) },
        ],
      },
      {
        id: "s3-security",
        title: L("S3 security: encryption and access control", "S3 のセキュリティ：暗号化とアクセス制御", "S3 security - Encryption နဲ့ Access control"),
        blocks: [
          { type: 'p', text: L(
            "Since January 2023 every new object is encrypted at rest by default with **SSE-S3**. You choose a stronger option when the requirement demands it. The question to ask is always: **who manages the key, and who needs to audit its use?**",
            "2023 年 1 月以降、すべての新しいオブジェクトはデフォルトで **SSE-S3** により保存時に暗号化されます。要件に応じてより強いオプションを選びます。常に考えるべき問いは「**誰が鍵を管理し、誰が鍵の使用を監査する必要があるか**」です。",
            "2023 ဇန်နဝါရီကစပြီး object အသစ်တိုင်းကို default အနေနဲ့ **SSE-S3** နဲ့ encrypt လုပ်ထားတယ်။ Requirement အရ ပိုခိုင်မာတဲ့ option ကို ရွေးရမယ်။ အမြဲမေးရမယ့်မေးခွန်းက **key ကို ဘယ်သူစီမံမလဲ၊ key သုံးတာကို ဘယ်သူ audit လုပ်ဖို့ လိုလဲ** ဆိုတာပါ။"
          ) },
          { type: 'table',
            head: [L("Option", "方式", "ရွေးချယ်စရာ"), L("Who manages the key", "鍵の管理者", "Key ကို ဘယ်သူစီမံလဲ"), L("Choose it when", "選ぶ場面", "ဘယ်အချိန် ရွေးမလဲ")],
            rows: [
              [L("SSE-S3", "SSE-S3（S3 管理キー）", "SSE-S3 (S3 စီမံတဲ့ key)"), L("AWS (S3-managed AES-256 keys)", "AWS（S3 管理の AES-256 鍵）", "AWS (S3 စီမံတဲ့ AES-256 key)"), L("Default; no key management needed", "デフォルト。鍵管理が不要", "Default၊ key စီမံစရာမလို")],
              [L("SSE-KMS", "SSE-KMS（KMS キー）", "SSE-KMS (KMS key သုံး)"), L("AWS KMS key (AWS managed or customer managed)", "AWS KMS 鍵（AWS 管理またはカスタマー管理）", "AWS KMS key (AWS managed သို့ customer managed)"), L("Need key policies, rotation control and a CloudTrail audit trail of key use; enable S3 Bucket Keys to cut KMS request costs", "鍵ポリシー、ローテーション制御、CloudTrail による鍵使用の監査が必要なとき。S3 バケットキーで KMS リクエストコストを削減", "Key policy၊ rotation ထိန်းချုပ်မှု၊ CloudTrail နဲ့ key သုံးမှု audit လိုတဲ့အခါ၊ S3 Bucket Key enable လုပ်ရင် KMS request ကုန်ကျစရိတ် လျော့တယ်")],
              [L("DSSE-KMS", "DSSE-KMS（2 層暗号化）", "DSSE-KMS (၂ ထပ် encryption)"), L("AWS KMS, two layers of encryption", "AWS KMS、2 層の暗号化", "AWS KMS၊ encryption အလွှာ ၂ ထပ်"), L("Compliance explicitly requires dual-layer encryption", "コンプライアンスで 2 層暗号化が明示的に必要なとき", "Compliance က dual-layer encryption ကို တိုက်ရိုက်တောင်းတဲ့အခါ")],
              [L("SSE-C", "SSE-C（利用者提供キー）", "SSE-C (customer ပေးတဲ့ key)"), L("Customer supplies the key with every request (HTTPS required); AWS never stores it", "利用者がリクエストごとに鍵を渡す（HTTPS 必須）。AWS は鍵を保存しない", "Customer က request တိုင်းမှာ key ပေးရ (HTTPS မဖြစ်မနေ)၊ AWS က key ကို မသိမ်းဘူး"), L("Keys must stay outside AWS but S3 does the encryption (AWS is moving to disable SSE-C by default on new buckets)", "鍵を AWS 外で管理しつつ暗号化は S3 に任せたいとき（AWS は新規バケットで SSE-C をデフォルト無効にする方向）", "Key ကို AWS အပြင်မှာ ထားချင်ပေမဲ့ encrypt ကို S3 ကလုပ်စေချင်တဲ့အခါ (bucket အသစ်တွေမှာ SSE-C ကို default ပိတ်ဖို့ AWS က ပြောင်းနေတယ်)")],
              [L("Client-side encryption", "クライアントサイド暗号化", "Client-side encryption (upload မတင်ခင် encrypt)"), L("Customer, entirely; data is encrypted before upload", "完全に利用者。アップロード前に暗号化", "Customer လုံးဝ၊ upload မတင်ခင် encrypt လုပ်ပြီးသား"), L("AWS must never see plaintext", "AWS に平文を一切見せてはならないとき", "AWS က plaintext ကို လုံးဝ မမြင်ရဘူး ဆိုတဲ့အခါ")],
            ] },
          { type: 'p', text: L(
            "Access control works in layers. **Block Public Access** (on by default for new buckets, can be set at account level) overrides everything that would make data public. **IAM policies** say what a user or role may do; **bucket policies** (resource-based JSON on the bucket) are the main tool for cross-account access, forcing HTTPS (`aws:SecureTransport`) or restricting to a VPC endpoint. **ACLs** are legacy: new buckets use the Object Ownership setting **Bucket owner enforced**, which disables ACLs. An explicit **Deny** anywhere always wins.",
            "アクセス制御は階層的に働きます。**ブロックパブリックアクセス**（新規バケットではデフォルト有効、アカウント単位でも設定可）は、データを公開にしてしまう設定をすべて上書きします。**IAM ポリシー**はユーザーやロールが何をできるかを定め、**バケットポリシー**（バケットに付けるリソースベースの JSON）はクロスアカウントアクセス、HTTPS の強制（`aws:SecureTransport`）、VPC エンドポイントへの限定などの主要な手段です。**ACL** はレガシーで、新規バケットはオブジェクト所有権の設定が**バケット所有者の強制**となり ACL は無効です。どこかに明示的な **Deny** があれば必ずそれが優先されます。",
            "Access control က အလွှာလိုက် အလုပ်လုပ်တယ်။ **Block Public Access** (bucket အသစ်မှာ default ဖွင့်ထား၊ account level မှာလည်း set လို့ရ) က data ကို public ဖြစ်စေမယ့် setting အားလုံးကို override လုပ်တယ်။ **IAM policy** က user/role တစ်ခု ဘာလုပ်ခွင့်ရှိလဲ သတ်မှတ်တယ်၊ **bucket policy** (bucket ပေါ်က resource-based JSON) ကတော့ cross-account access၊ HTTPS အတင်းသုံးခိုင်းတာ (`aws:SecureTransport`)၊ VPC endpoint ကနေပဲ ခွင့်ပြုတာ စတာတွေအတွက် အဓိကသုံးတယ်။ **ACL** က legacy ပါ၊ bucket အသစ်တွေက Object Ownership ကို **Bucket owner enforced** ထားလို့ ACL ပိတ်ထားတယ်။ ဘယ်နေရာမှာပဲ explicit **Deny** ရှိရင် Deny က အမြဲနိုင်တယ်။"
          ) },
          { type: 'p', text: L(
            "A **presigned URL** lets someone without AWS credentials download or upload one specific object for a limited time, using the permissions of whoever signed it. Typical use: your app lets a logged-in user download their invoice PDF from a private bucket for 15 minutes. For many objects behind a website, use CloudFront signed URLs or cookies instead.",
            "**署名付き URL（presigned URL）** を使うと、AWS 認証情報を持たない人でも、署名した人の権限で特定のオブジェクトを期間限定でダウンロード／アップロードできます。典型例は、ログイン済みユーザーがプライベートバケットにある自分の請求書 PDF を 15 分間だけダウンロードできるようにするケースです。Web サイト配下の多数のオブジェクトには CloudFront の署名付き URL や Cookie を使います。",
            "**Presigned URL** က AWS credential မရှိတဲ့သူကို object တစ်ခုကို အချိန်အကန့်အသတ်နဲ့ download/upload လုပ်ခွင့်ပေးတယ်၊ sign လုပ်တဲ့သူရဲ့ permission ကို သုံးတယ်။ ဥပမာ login ဝင်ထားတဲ့ user ကို private bucket ထဲက သူ့ invoice PDF ကို ၁၅ မိနစ်ပဲ download လုပ်ခွင့်ပေးတာမျိုး။ Website နောက်က object အများကြီးအတွက်ဆိုရင် CloudFront signed URL/cookie ကို သုံးပါ။"
          ) },
          { type: 'code', lang: 'bash', code:
`# Create a download link valid for 15 minutes (900 seconds)
aws s3 presign s3://acme-invoices/2026/inv-1042.pdf --expires-in 900

# Make sure no bucket in the account can become public
aws s3control put-public-access-block --account-id 111122223333 \\
  --public-access-block-configuration \\
  BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true`,
            caption: L("Presigned URLs and account-level Block Public Access.", "署名付き URL とアカウントレベルのブロックパブリックアクセス。", "Presigned URL နဲ့ account level Block Public Access။") },
          { type: 'callout', tone: 'warn', text: L(
            "A presigned URL can never grant more than the signer has, and it stops working early if the signer's temporary credentials (e.g. an IAM role session) expire first. If users report 'expired' links before the expiry time, check the signing credentials.",
            "署名付き URL は署名者が持つ以上の権限を与えることはできず、署名者の一時認証情報（IAM ロールのセッションなど）が先に失効すると、その時点で使えなくなります。有効期限前に「期限切れ」と報告された場合は、署名に使った認証情報を確認しましょう。",
            "Presigned URL က sign လုပ်သူမှာ ရှိတာထက် ပိုတဲ့ permission ကို ဘယ်တော့မှ မပေးနိုင်ဘူး၊ sign လုပ်သူရဲ့ temporary credential (ဥပမာ IAM role session) အရင်သက်တမ်းကုန်ရင် URL လည်း စောစောအလုပ်မလုပ်တော့ဘူး။ သတ်မှတ်ချိန်မတိုင်ခင် 'expired' ဖြစ်တယ်လို့ user ပြောရင် sign လုပ်တဲ့ credential ကို စစ်ပါ။"
          ) },
        ],
      },
      {
        id: "s3-features",
        title: L("Static websites, CloudFront OAC, Object Lock and performance features", "静的 Web サイト、CloudFront OAC、Object Lock と性能機能", "Static website၊ CloudFront OAC၊ Object Lock နဲ့ performance feature များ"),
        blocks: [
          { type: 'p', text: L(
            "S3 can host a **static website** (HTML, CSS, JS, images) directly through a website endpoint, but that endpoint is **HTTP only** and requires the bucket to be public. The production pattern is to keep the bucket **private** and put **Amazon CloudFront** in front of it with **Origin Access Control (OAC)**. CloudFront serves HTTPS with your certificate from ACM, caches content at edge locations close to users (great for a Tokyo company with customers in Yangon and Singapore), and only CloudFront is allowed to read the bucket. OAC replaces the older Origin Access Identity (OAI) and supports SSE-KMS.",
            "S3 は Web サイトエンドポイントを通じて**静的 Web サイト**（HTML、CSS、JS、画像）を直接ホストできますが、このエンドポイントは **HTTP のみ**で、バケットを公開する必要があります。本番での定石は、バケットを**プライベート**に保ち、その前段に **Origin Access Control（OAC）** を設定した **Amazon CloudFront** を置く構成です。CloudFront は ACM の証明書で HTTPS を提供し、ユーザーに近いエッジロケーションでコンテンツをキャッシュし（ヤンゴンやシンガポールに顧客がいる東京の会社に最適）、バケットを読めるのは CloudFront だけになります。OAC は旧来の Origin Access Identity（OAI）の後継で、SSE-KMS にも対応しています。",
            "S3 က website endpoint ကနေ **static website** (HTML၊ CSS၊ JS၊ image) ကို တိုက်ရိုက် host လုပ်နိုင်တယ်၊ ဒါပေမဲ့ အဲ့ endpoint က **HTTP ပဲ** ရပြီး bucket ကို public ဖွင့်ရတယ်။ Production မှာ သုံးတဲ့ပုံစံက bucket ကို **private** ထားပြီး ရှေ့မှာ **Origin Access Control (OAC)** နဲ့ **Amazon CloudFront** ကို ထားတာပါ။ CloudFront က ACM certificate နဲ့ HTTPS ပေးတယ်၊ user နဲ့နီးတဲ့ edge location မှာ cache လုပ်တယ် (ရန်ကုန်၊ စင်ကာပူမှာ customer ရှိတဲ့ တိုကျိုကုမ္ပဏီအတွက် အရမ်းကောင်း)၊ bucket ကို CloudFront တစ်ခုတည်းပဲ ဖတ်ခွင့်ရှိတယ်။ OAC က Origin Access Identity (OAI) အဟောင်းကို အစားထိုးတာဖြစ်ပြီး SSE-KMS ကိုလည်း support လုပ်တယ်။"
          ) },
          { type: 'diagram', text:
`  Users (Tokyo, Yangon, Singapore)
        |  HTTPS (ACM certificate)
        v
 +-------------------+   cache hit -> served from edge
 | CloudFront edge   |
 +-------------------+
        |  cache miss, signed request (OAC, SigV4)
        v
 +-------------------+   Bucket policy allows ONLY this
 | S3 bucket         |   distribution (aws:SourceArn)
 | (private, BPA on) |   Direct S3 URL -> 403 Access Denied
 +-------------------+`,
            caption: L("Private bucket + CloudFront OAC: the standard secure static-site pattern.", "プライベートバケット＋CloudFront OAC：安全な静的サイトの標準構成。", "Private bucket + CloudFront OAC - လုံခြုံတဲ့ static site ရဲ့ standard ပုံစံ။") },
          { type: 'p', text: L(
            "**S3 Object Lock** stores objects in **WORM** (write once, read many) mode and requires versioning. In **Governance mode**, users with a special permission (`s3:BypassGovernanceRetention`) can still delete or shorten retention; in **Compliance mode**, nobody, not even the root user, can delete the version until the retention period ends. A **legal hold** blocks deletion with no end date until removed. Use Compliance mode for regulations such as SEC 17a-4 style financial records; use **S3 Glacier Vault Lock** for the same idea on Glacier vaults.",
            "**S3 Object Lock** はオブジェクトを **WORM**（Write Once Read Many）で保存する機能で、バージョニングが必要です。**ガバナンスモード**では特別な権限（`s3:BypassGovernanceRetention`）を持つユーザーなら削除や保持期間の短縮ができますが、**コンプライアンスモード**では保持期間が終わるまでルートユーザーを含め誰も削除できません。**リーガルホールド**は解除されるまで期限なしで削除を防ぎます。SEC 17a-4 のような金融記録の規制にはコンプライアンスモードを使い、Glacier ボールトで同じことを行うには **S3 Glacier Vault Lock** を使います。",
            "**S3 Object Lock** က object တွေကို **WORM** (တစ်ခါရေး၊ အကြိမ်ကြိမ်ဖတ်) mode နဲ့ သိမ်းတယ်၊ versioning လိုတယ်။ **Governance mode** မှာ အထူး permission (`s3:BypassGovernanceRetention`) ရှိတဲ့ user က ဖျက်တာ/retention တိုတာ လုပ်နိုင်သေးတယ်။ **Compliance mode** မှာတော့ retention ကာလ မကုန်မချင်း root user အပါအဝင် ဘယ်သူမှ မဖျက်နိုင်ဘူး။ **Legal hold** က ဖယ်မပစ်မချင်း သက်တမ်းမရှိဘဲ ဖျက်တာကို တားတယ်။ SEC 17a-4 လို ငွေကြေးမှတ်တမ်း regulation တွေအတွက် Compliance mode သုံးပါ၊ Glacier vault မှာ အလားတူလုပ်ချင်ရင် **S3 Glacier Vault Lock** သုံးပါ။"
          ) },
          { type: 'list', items: [
            L("**Multipart upload**: splits a large file into parts uploaded in parallel and retried individually. Recommended above about 100 MB, required above 5 GB. Add a lifecycle rule to abort incomplete multipart uploads so orphaned parts do not cost money.",
              "**マルチパートアップロード**：大きなファイルをパートに分割して並列にアップロードし、失敗したパートだけ再送します。約 100 MB 超で推奨、5 GB 超では必須です。不完全なマルチパートアップロードを中止するライフサイクルルールを追加し、残ったパートに課金されないようにします。",
              "**Multipart upload** - file ကြီးကို part လေးတွေခွဲပြီး parallel upload လုပ်တယ်၊ fail ဖြစ်တဲ့ part ကိုပဲ ပြန်ပို့တယ်။ 100 MB လောက်ထက်ကြီးရင် အကြံပြု၊ 5 GB ထက်ကြီးရင် မဖြစ်မနေ။ မပြီးဆုံးတဲ့ multipart upload တွေကို abort လုပ်တဲ့ lifecycle rule ထည့်ထားရင် ကျန်နေတဲ့ part တွေအတွက် ငွေမကုန်ဘူး။"),
            L("**S3 Transfer Acceleration**: uploads go to the nearest CloudFront edge location, then travel over the AWS backbone to the bucket. Use it when users far from the bucket's Region upload large files; it is charged per GB and only applies when it is actually faster.",
              "**S3 Transfer Acceleration**：アップロードを最寄りの CloudFront エッジロケーションに送り、AWS のバックボーン経由でバケットへ転送します。バケットのリージョンから遠いユーザーが大きなファイルをアップロードする場合に使い、GB 単位で課金され、実際に速くなった場合のみ適用されます。",
              "**S3 Transfer Acceleration** - upload ကို အနီးဆုံး CloudFront edge location ဆီပို့ပြီး AWS backbone ပေါ်ကနေ bucket ဆီ ပို့တယ်။ Bucket Region နဲ့ ဝေးတဲ့ user တွေက file ကြီးတွေ upload လုပ်တဲ့အခါ သုံးတယ်၊ GB အလိုက် ငွေကျပြီး တကယ်ပိုမြန်မှပဲ ကျတယ်။"),
            L("**Event notifications**: on events such as `s3:ObjectCreated:*`, S3 can invoke **Lambda**, send to **SQS** or **SNS**, or forward to **Amazon EventBridge** for advanced filtering and many targets. Example: a new photo upload triggers Lambda to create a thumbnail.",
              "**イベント通知**：`s3:ObjectCreated:*` などのイベントで、S3 は **Lambda** の呼び出し、**SQS** や **SNS** への送信、または高度なフィルタリングと多数のターゲットのために **Amazon EventBridge** への転送ができます。例：写真のアップロードで Lambda が起動しサムネイルを作成します。",
              "**Event notification** - `s3:ObjectCreated:*` လို event ဖြစ်ရင် S3 က **Lambda** ကို ခေါ်တာ၊ **SQS**/**SNS** ကို ပို့တာ၊ filter ကောင်းကောင်းနဲ့ target အများကြီးအတွက် **Amazon EventBridge** ဆီ ပို့တာ လုပ်နိုင်တယ်။ ဥပမာ ဓာတ်ပုံအသစ် upload လုပ်ရင် Lambda က thumbnail ဖန်တီးတယ်။"),
            L("**Performance**: S3 scales automatically to at least 3,500 PUT and 5,500 GET requests per second **per prefix**, so spreading keys over several prefixes multiplies throughput. Byte-range fetches parallelize large downloads.",
              "**性能**：S3 は**プレフィックスごと**に少なくとも毎秒 3,500 PUT、5,500 GET まで自動でスケールするため、キーを複数のプレフィックスに分散するとスループットが倍増します。バイト範囲取得で大きなダウンロードを並列化できます。",
              "**Performance** - S3 က **prefix တစ်ခုစီ** မှာ တစ်စက္ကန့် PUT အနည်းဆုံး 3,500၊ GET 5,500 ထိ အလိုအလျောက် scale လုပ်တယ်၊ key တွေကို prefix အများကြီးမှာ ခွဲထားရင် throughput ပိုရတယ်။ Byte-range fetch နဲ့ download ကြီးတွေကို parallel လုပ်နိုင်တယ်။"),
          ] },
          { type: 'callout', tone: 'exam', text: L(
            "'Static website must use HTTPS and the bucket must not be public' -> **CloudFront + OAC**, not the S3 website endpoint. 'Records must not be deleted by anyone, including root, for 7 years' -> **Object Lock in Compliance mode**. 'Global users upload large files slowly to one bucket' -> **Transfer Acceleration** (plus multipart upload).",
            "「静的サイトは HTTPS 必須でバケットを公開してはならない」→ S3 Web サイトエンドポイントではなく **CloudFront＋OAC**。「ルートを含め誰も 7 年間削除できないこと」→ **コンプライアンスモードの Object Lock**。「世界中のユーザーが 1 つのバケットへの大容量アップロードで遅い」→ **Transfer Acceleration**（＋マルチパートアップロード）。",
            "'Static website က HTTPS ဖြစ်ရမယ်၊ bucket ကို public မဖွင့်ရဘူး' -> S3 website endpoint မဟုတ်ဘဲ **CloudFront + OAC**။ 'Root အပါအဝင် ဘယ်သူမှ ၇ နှစ်အတွင်း မဖျက်နိုင်ရဘူး' -> **Compliance mode Object Lock**။ 'ကမ္ဘာအနှံ့က user တွေ bucket တစ်ခုဆီ file ကြီး upload တာ နှေးတယ်' -> **Transfer Acceleration** (+ multipart upload)။"
          ) },
        ],
      },
      {
        id: "ebs-instance-store",
        title: L("EBS volumes vs instance store", "EBS ボリュームとインスタンスストア", "EBS volume နဲ့ Instance store"),
        blocks: [
          { type: 'p', text: L(
            "**Amazon EBS** is network-attached block storage for EC2, like a USB disk you can unplug from one instance and plug into another, but only **within the same Availability Zone**. Data persists independently of the instance's life, and EBS automatically replicates the volume inside its AZ. **Instance store** is a disk physically inside the host server: extremely fast and included in the instance price, but **ephemeral**. Its data survives a reboot, but is lost when the instance stops, hibernates, terminates, or the underlying hardware fails.",
            "**Amazon EBS** は EC2 用のネットワーク接続ブロックストレージで、あるインスタンスから外して別のインスタンスに付け替えられる USB ディスクのようなものですが、**同じアベイラビリティーゾーン内**に限られます。データはインスタンスのライフサイクルとは独立して保持され、EBS はボリュームを AZ 内で自動的に複製します。**インスタンスストア**はホストサーバー内に物理的にあるディスクで、非常に高速かつインスタンス料金に含まれますが、**揮発性**です。再起動ではデータが残りますが、停止・休止・終了、または基盤ハードウェアの障害で失われます。",
            "**Amazon EBS** က EC2 အတွက် network နဲ့ချိတ်ထားတဲ့ block storage ပါ၊ instance တစ်ခုကနေ ဖြုတ်ပြီး တခြား instance မှာ ပြန်တပ်လို့ရတဲ့ USB disk လိုပဲ၊ ဒါပေမဲ့ **AZ တစ်ခုတည်းအတွင်း** ပဲ ရတယ်။ Data က instance သက်တမ်းနဲ့ မဆိုင်ဘဲ ကျန်နေပြီး EBS က volume ကို AZ အတွင်း အလိုအလျောက် replicate လုပ်တယ်။ **Instance store** ကတော့ host server ထဲမှာ တကယ်တပ်ထားတဲ့ disk ပါ၊ အရမ်းမြန်ပြီး instance ဈေးထဲ ပါပြီးသား၊ ဒါပေမဲ့ **ephemeral (ယာယီ)** ပါ။ Reboot လုပ်ရင် data ကျန်တယ်၊ stop၊ hibernate၊ terminate လုပ်ရင် ဒါမှမဟုတ် hardware ပျက်ရင် data ပျောက်တယ်။"
          ) },
          { type: 'table',
            head: [L("Volume type", "ボリュームタイプ", "Volume အမျိုးအစား"), L("Media / key trait", "媒体／特徴", "Media / အဓိကလက္ခဏာ"), L("Typical workload", "代表的なワークロード", "သုံးလေ့ရှိတဲ့ workload")],
            rows: [
              [L("gp3 (General Purpose SSD)", "gp3（汎用 SSD）", "gp3 (အထွေထွေသုံး SSD)"), L("SSD; baseline 3,000 IOPS and 125 MB/s at any size; IOPS and throughput provisioned independently", "SSD。サイズに関係なくベースライン 3,000 IOPS・125 MB/s、IOPS とスループットを個別に設定可能", "SSD၊ size မရွေး baseline 3,000 IOPS နဲ့ 125 MB/s၊ IOPS နဲ့ throughput ကို သီးသန့် provision လုပ်လို့ရ"), L("Default choice: boot volumes, dev/test, most apps", "既定の選択：ブートボリューム、開発／テスト、大半のアプリ", "Default ရွေးချယ်မှု - boot volume၊ dev/test၊ app အများစု")],
              [L("gp2 (previous generation)", "gp2（旧世代）", "gp2 (generation ဟောင်း)"), L("SSD; IOPS grow with size (3 IOPS per GiB), burst credits", "SSD。IOPS はサイズに比例（GiB あたり 3 IOPS）、バーストクレジット", "SSD၊ IOPS က size နဲ့အတူ တိုး (GiB တစ်ခုကို 3 IOPS)၊ burst credit"), L("Legacy; migrate to gp3 for lower cost", "レガシー。gp3 へ移行してコスト削減", "Legacy၊ ကုန်ကျစရိတ်လျှော့ဖို့ gp3 ကို ပြောင်း")],
              [L("io2 Block Express / io1 (Provisioned IOPS SSD)", "io2 Block Express／io1（プロビジョンド IOPS SSD）", "io2 Block Express / io1 (IOPS ကြိုသတ်မှတ်တဲ့ SSD)"), L("SSD; highest, consistent IOPS with sub-millisecond latency; supports Multi-Attach", "SSD。最高クラスで安定した IOPS、ミリ秒未満のレイテンシ、Multi-Attach 対応", "SSD၊ အမြင့်ဆုံးနဲ့ တည်ငြိမ်တဲ့ IOPS၊ millisecond အောက် latency၊ Multi-Attach ရ"), L("Critical databases: Oracle, SQL Server, SAP HANA", "重要データベース：Oracle、SQL Server、SAP HANA", "အရေးကြီး database - Oracle၊ SQL Server၊ SAP HANA")],
              [L("st1 (Throughput Optimized HDD)", "st1（スループット最適化 HDD）", "st1 (throughput အတွက် HDD)"), L("HDD; high MB/s for large sequential reads; cannot be a boot volume", "HDD。大きな連続読み取りで高 MB/s、ブートボリューム不可", "HDD၊ ဆက်တိုက်ဖတ်တဲ့ data ကြီးတွေအတွက် MB/s မြင့်၊ boot volume မလုပ်ရ"), L("Big data, data warehouses, log processing", "ビッグデータ、データウェアハウス、ログ処理", "Big data၊ data warehouse၊ log processing")],
              [L("sc1 (Cold HDD)", "sc1（コールド HDD）", "sc1 (cold data အတွက် HDD)"), L("HDD; lowest cost per GB; cannot be a boot volume", "HDD。GB 単価が最安、ブートボリューム不可", "HDD၊ GB အလိုက် အပေါဆုံး၊ boot volume မလုပ်ရ"), L("Infrequently accessed large data", "アクセス頻度の低い大容量データ", "ခဏခဏ မသုံးတဲ့ data ကြီးတွေ")],
              [L("Instance store", "インスタンスストア", "Instance store (ယာယီ disk)"), L("Physically attached NVMe/SSD; very high IOPS; ephemeral", "物理的に接続された NVMe/SSD。非常に高い IOPS、揮発性", "တကယ်တပ်ထားတဲ့ NVMe/SSD၊ IOPS အရမ်းမြင့်၊ ephemeral"), L("Caches, buffers, scratch data, replicated clusters (e.g. Cassandra nodes)", "キャッシュ、バッファ、一時データ、複製済みクラスター（Cassandra ノードなど）", "Cache၊ buffer၊ scratch data၊ replicate လုပ်ထားပြီးသား cluster (ဥပမာ Cassandra node)")],
            ] },
          { type: 'p', text: L(
            "**Snapshots** are point-in-time, **incremental** backups of a volume stored durably in S3 (managed by AWS, regional). You can copy snapshots to another Region for DR, share them with other accounts, and automate them with **Amazon Data Lifecycle Manager** or AWS Backup. **Encryption** uses KMS and covers data at rest, in transit between instance and volume, and all snapshots; you can turn on **encryption by default** per Region. You cannot encrypt an existing unencrypted volume in place: create a snapshot, **copy it with encryption enabled**, then create a new volume from the encrypted copy.",
            "**スナップショット**はボリュームのある時点の**増分**バックアップで、S3 に耐久性高く保存されます（AWS 管理、リージョン単位）。DR のために別リージョンへコピーしたり、他のアカウントと共有したり、**Amazon Data Lifecycle Manager** や AWS Backup で自動化できます。**暗号化**は KMS を使い、保存データ、インスタンスとボリューム間の転送データ、すべてのスナップショットを対象とします。リージョンごとに**デフォルト暗号化**を有効にできます。既存の暗号化されていないボリュームをその場で暗号化することはできないため、スナップショットを作成し、**暗号化を有効にしてコピー**し、暗号化されたコピーから新しいボリュームを作成します。",
            "**Snapshot** က volume ရဲ့ အချိန်တစ်ခုမှာ ယူထားတဲ့ **incremental** backup ပါ၊ S3 မှာ ခိုင်ခိုင်မာမာ သိမ်းထားတယ် (AWS စီမံ၊ regional)။ DR အတွက် တခြား Region ကို copy ကူးတာ၊ တခြား account နဲ့ share တာ၊ **Amazon Data Lifecycle Manager** သို့ AWS Backup နဲ့ automate လုပ်တာ လုပ်နိုင်တယ်။ **Encryption** က KMS သုံးပြီး at-rest data၊ instance နဲ့ volume ကြား သွားနေတဲ့ data၊ snapshot အားလုံးကို ကာကွယ်တယ်၊ Region အလိုက် **encryption by default** ဖွင့်ထားလို့ရတယ်။ Encrypt မလုပ်ထားတဲ့ volume ကို နေရာမှာတင် encrypt လုပ်လို့မရဘူး - snapshot ယူ၊ **encryption ဖွင့်ပြီး copy ကူး**၊ encrypt ထားတဲ့ copy ကနေ volume အသစ် ဆောက်ရတယ်။"
          ) },
          { type: 'p', text: L(
            "**EBS Multi-Attach** lets one **io1/io2** volume attach to up to 16 Nitro-based instances in the **same AZ**. The application must manage concurrent writes with a cluster-aware file system; it is not a replacement for a shared file system like EFS.",
            "**EBS Multi-Attach** を使うと、1 つの **io1/io2** ボリュームを**同じ AZ** 内の最大 16 台の Nitro ベースインスタンスに接続できます。同時書き込みはクラスター対応ファイルシステムでアプリ側が管理する必要があり、EFS のような共有ファイルシステムの代わりにはなりません。",
            "**EBS Multi-Attach** က **io1/io2** volume တစ်ခုကို **AZ တစ်ခုတည်း** ထဲက Nitro-based instance အများဆုံး ၁၆ လုံးမှာ တပ်ခွင့်ပေးတယ်။ တပြိုင်နက်ရေးတာကို cluster-aware file system နဲ့ application ကပဲ စီမံရမယ်၊ EFS လို shared file system အစားထိုးလို့ မရဘူး။"
          ) },
          { type: 'callout', tone: 'exam', text: L(
            "'Highest possible IOPS for temporary data, loss is acceptable' -> **instance store**. 'Move an EBS volume to another AZ' -> snapshot, then create a volume from it in the target AZ. 'Encrypt an existing unencrypted volume' -> snapshot -> encrypted copy -> new volume. 'Boot volume on HDD' is never correct (st1/sc1 cannot boot).",
            "「一時データ向けに最高の IOPS、消えても構わない」→ **インスタンスストア**。「EBS ボリュームを別 AZ に移す」→ スナップショットを作成し、移動先 AZ でそこからボリュームを作成。「既存の暗号化されていないボリュームを暗号化」→ スナップショット→暗号化コピー→新ボリューム。「HDD のブートボリューム」は常に誤り（st1/sc1 は起動不可）。",
            "'ယာယီ data အတွက် IOPS အမြင့်ဆုံး၊ ပျောက်လည်း ကိစ္စမရှိ' -> **instance store**။ 'EBS volume ကို တခြား AZ ရွှေ့ချင်' -> snapshot ယူပြီး target AZ မှာ အဲ့ snapshot ကနေ volume ဆောက်။ 'Encrypt မလုပ်ထားတဲ့ volume ကို encrypt လုပ်ချင်' -> snapshot -> encrypted copy -> volume အသစ်။ 'HDD ပေါ်မှာ boot volume' ဆိုတာ ဘယ်တော့မှ မမှန်ဘူး (st1/sc1 boot မရ)။"
          ) },
        ],
      },
      {
        id: "efs-fsx",
        title: L("Shared file systems: EFS and the FSx family", "共有ファイルシステム：EFS と FSx ファミリー", "Shared file system - EFS နဲ့ FSx family"),
        blocks: [
          { type: 'p', text: L(
            "When many servers need the **same files at the same time**, use a managed file system. **Amazon EFS** is a serverless, elastic **NFS** file system for **Linux**: it grows and shrinks automatically, you pay for what you store, and thousands of EC2 instances, containers (ECS/EKS) and Lambda functions across multiple AZs can mount it through mount targets in each AZ. Lifecycle management moves cold files to the EFS Infrequent Access and Archive classes. Example: a WordPress fleet behind a load balancer shares one `wp-content/uploads` directory on EFS.",
            "多数のサーバーが**同じファイルに同時に**アクセスする必要がある場合は、マネージドなファイルシステムを使います。**Amazon EFS** は **Linux** 向けのサーバーレスで伸縮自在な **NFS** ファイルシステムです。容量は自動で増減し、保存した分だけ支払い、複数 AZ にまたがる数千台の EC2 インスタンス、コンテナ（ECS/EKS）、Lambda 関数が各 AZ のマウントターゲット経由でマウントできます。ライフサイクル管理により、使われないファイルを EFS 低頻度アクセスやアーカイブクラスに移せます。例：ロードバランサー配下の WordPress 群が EFS 上の `wp-content/uploads` ディレクトリを共有します。",
            "Server အများကြီးက **file တွေကို တပြိုင်နက် တူတူ** သုံးဖို့ လိုရင် managed file system သုံးပါ။ **Amazon EFS** က **Linux** အတွက် serverless၊ elastic ဖြစ်တဲ့ **NFS** file system ပါ။ အလိုအလျောက် ကြီး/သေး ဖြစ်တယ်၊ သိမ်းသလောက်ပဲ ပေးရတယ်၊ AZ အများကြီးက EC2 instance၊ container (ECS/EKS)၊ Lambda function ထောင်ချီက AZ တစ်ခုစီက mount target ကနေ mount လုပ်နိုင်တယ်။ Lifecycle management က မသုံးတော့တဲ့ file တွေကို EFS Infrequent Access နဲ့ Archive class ကို ရွှေ့ပေးတယ်။ ဥပမာ load balancer နောက်က WordPress server အစုက EFS ပေါ်က `wp-content/uploads` directory တစ်ခုတည်းကို share သုံးတာ။"
          ) },
          { type: 'table',
            head: [L("Service", "サービス", "Service အမည်"), L("Protocol / clients", "プロトコル／クライアント", "Protocol / သုံးနိုင်တဲ့ client"), L("Pick it when", "選ぶ場面", "ဘယ်အချိန် ရွေးမလဲ")],
            rows: [
              [L("Amazon EFS", "Amazon EFS（Linux 共有）", "Amazon EFS (Linux အတွက် share)"), L("NFSv4, Linux (POSIX)", "NFSv4、Linux（POSIX 準拠）", "NFSv4၊ Linux (POSIX)"), L("Shared, elastic storage for Linux apps, containers, Lambda; multi-AZ", "Linux アプリ・コンテナ・Lambda 向けの共有・伸縮ストレージ、マルチ AZ", "Linux app၊ container၊ Lambda အတွက် share သုံးတဲ့ elastic storage၊ multi-AZ")],
              [L("FSx for Windows File Server", "FSx for Windows File Server（Windows 向け）", "FSx for Windows File Server (Windows အတွက်)"), L("SMB, NTFS, Active Directory, DFS", "SMB、NTFS、Active Directory、DFS に対応", "SMB၊ NTFS၊ Active Directory၊ DFS"), L("Windows workloads, home directories, SharePoint, .NET apps needing AD permissions", "Windows ワークロード、ホームディレクトリ、SharePoint、AD 権限が必要な .NET アプリ", "Windows workload၊ home directory၊ SharePoint၊ AD permission လိုတဲ့ .NET app")],
              [L("FSx for Lustre", "FSx for Lustre（HPC 向け）", "FSx for Lustre (HPC အတွက်)"), L("Lustre, Linux, hundreds of GB/s", "Lustre、Linux、数百 GB/s", "Lustre၊ Linux၊ GB/s ရာချီ"), L("HPC, ML training, video rendering, financial modeling; can link to an S3 bucket", "HPC、ML 学習、動画レンダリング、金融モデリング。S3 バケットと連携可能", "HPC၊ ML training၊ video rendering၊ financial modeling၊ S3 bucket နဲ့ ချိတ်လို့ရ")],
              [L("FSx for NetApp ONTAP", "FSx for NetApp ONTAP（マルチプロトコル）", "FSx for NetApp ONTAP (protocol အများကြီး)"), L("NFS, SMB and iSCSI; Linux, Windows, macOS", "NFS・SMB・iSCSI、Linux・Windows・macOS", "NFS၊ SMB၊ iSCSI၊ Linux၊ Windows၊ macOS"), L("Lift-and-shift of on-prem NetApp, multi-protocol access, snapshots, cloning, dedup", "オンプレミス NetApp の移行、マルチプロトコル、スナップショット、クローン、重複排除", "On-prem NetApp ကို lift-and-shift၊ multi-protocol၊ snapshot၊ cloning၊ dedup")],
              [L("FSx for OpenZFS", "FSx for OpenZFS（ZFS 移行）", "FSx for OpenZFS (ZFS ရွှေ့ဖို့)"), L("NFS, Linux/macOS/Windows", "NFS、Linux/macOS/Windows に対応", "NFS၊ Linux/macOS/Windows"), L("Moving existing ZFS file servers with low latency", "既存の ZFS ファイルサーバーを低レイテンシで移行", "ရှိပြီးသား ZFS file server ကို latency နည်းနည်းနဲ့ ရွှေ့")],
            ] },
          { type: 'callout', tone: 'memory', text: L(
            "**EFS = Elastic Linux NFS. FSx = 'File Server eXpert' for a specific world**: Windows (SMB + AD), Lustre (HPC speed, think 'Lustre = lightning'), NetApp ONTAP (multi-protocol, existing NetApp), OpenZFS (existing ZFS). Windows instances cannot mount EFS.",
            "**EFS＝伸縮自在な Linux 用 NFS。FSx＝特定の世界の「ファイルサーバーの専門家」**：Windows（SMB＋AD）、Lustre（HPC の速さ、「Lustre＝稲妻」と覚える）、NetApp ONTAP（マルチプロトコル、既存 NetApp）、OpenZFS（既存 ZFS）。Windows インスタンスは EFS をマウントできません。",
            "**EFS = Elastic Linux NFS၊ FSx = သီးသန့်ကမ္ဘာတစ်ခုအတွက် 'File Server ကျွမ်းကျင်သူ'** လို့ မှတ်ပါ - Windows (SMB + AD)၊ Lustre (HPC မြန်နှုန်း၊ 'Lustre = လျှပ်စီး' လို့ မှတ်)၊ NetApp ONTAP (multi-protocol၊ NetApp ရှိပြီးသား)၊ OpenZFS (ZFS ရှိပြီးသား)။ Windows instance က EFS ကို mount လုပ်လို့ မရဘူး။"
          ) },
        ],
      },
      {
        id: "hybrid-migration-backup",
        title: L("Hybrid and migration: Storage Gateway, Snow Family, DataSync, AWS Backup", "ハイブリッドと移行：Storage Gateway、Snow Family、DataSync、AWS Backup", "Hybrid နဲ့ Migration - Storage Gateway၊ Snow Family၊ DataSync၊ AWS Backup"),
        blocks: [
          { type: 'p', text: L(
            "**AWS Storage Gateway** is a VM or hardware appliance in your datacenter that lets on-premises applications use cloud storage through familiar protocols, with a local cache for hot data. It is the answer when servers **stay on-premises** but storage should extend into AWS.",
            "**AWS Storage Gateway** はデータセンターに置く VM またはハードウェアアプライアンスで、オンプレミスのアプリケーションが使い慣れたプロトコルでクラウドストレージを利用できるようにし、よく使うデータはローカルキャッシュに保持します。サーバーは**オンプレミスに残す**が、ストレージは AWS に拡張したい場合の答えです。",
            "**AWS Storage Gateway** က ကိုယ့် datacenter ထဲမှာ ထားတဲ့ VM သို့ hardware appliance ပါ၊ on-premises application တွေကို သုံးနေကျ protocol နဲ့ cloud storage ကို သုံးခွင့်ပေးတယ်၊ ခဏခဏသုံးတဲ့ data ကို local cache မှာ ထားတယ်။ Server တွေက **on-premises မှာပဲ ဆက်ရှိမယ်**၊ storage ကိုတော့ AWS ထိ ချဲ့ချင်တယ်ဆိုရင် ဒါက အဖြေပါ။"
          ) },
          { type: 'diagram', text:
`ON-PREMISES                               AWS REGION
App servers  protocol   Gateway (cache)      Lands in
-----------  ---------  ----------------     -------------------
File server  NFS/SMB -> S3 File Gateway  ==> S3 objects
DB / VMs     iSCSI   -> Volume Gateway   ==> S3 + EBS snapshots
Backup app   iSCSI   -> Tape Gateway     ==> S3 Glacier / Deep
             (VTL)                             Archive (tapes)
             ==> = encrypted (TLS) over internet or Direct Connect`,
            caption: L("The three Storage Gateway types and where the data lands in AWS.", "3 種類の Storage Gateway と AWS 側でのデータの保存先。", "Storage Gateway အမျိုးအစား ၃ ခုနဲ့ AWS ဘက်မှာ data ဘယ်ရောက်လဲ။") },
          { type: 'list', items: [
            L("**S3 File Gateway**: NFS/SMB file shares; each file becomes an S3 object, so you can apply lifecycle rules and analytics to it. (Amazon FSx File Gateway is no longer offered to new customers.)",
              "**S3 File Gateway**：NFS/SMB ファイル共有。各ファイルが S3 オブジェクトになるため、ライフサイクルルールや分析を適用できます（Amazon FSx File Gateway は新規顧客への提供を終了しています）。",
              "**S3 File Gateway** - NFS/SMB file share၊ file တစ်ခုစီက S3 object ဖြစ်သွားလို့ lifecycle rule နဲ့ analytics သုံးလို့ရတယ် (Amazon FSx File Gateway ကို customer အသစ်တွေကို မပေးတော့ဘူး)။"),
            L("**Volume Gateway**: iSCSI block volumes. **Cached mode** keeps the primary data in S3 with a local cache; **stored mode** keeps the full dataset on-premises and backs it up asynchronously to AWS as EBS snapshots.",
              "**Volume Gateway**：iSCSI ブロックボリューム。**キャッシュ型**はプライマリデータを S3 に置きローカルにキャッシュし、**保管型**は全データをオンプレミスに置き、EBS スナップショットとして AWS に非同期バックアップします。",
              "**Volume Gateway** - iSCSI block volume။ **Cached mode** က primary data ကို S3 မှာထားပြီး local cache သုံးတယ်၊ **Stored mode** က data အားလုံးကို on-premises မှာထားပြီး EBS snapshot အဖြစ် AWS ဆီ asynchronous backup လုပ်တယ်။"),
            L("**Tape Gateway**: a virtual tape library (VTL) for existing backup software (Veeam, NetBackup...). Virtual tapes go to S3 and are archived to Glacier Flexible Retrieval or Deep Archive, replacing physical tapes.",
              "**Tape Gateway**：既存のバックアップソフト（Veeam、NetBackup など）向けの仮想テープライブラリ（VTL）。仮想テープは S3 に保存され、Glacier Flexible Retrieval や Deep Archive にアーカイブされ、物理テープを置き換えます。",
              "**Tape Gateway** - ရှိပြီးသား backup software (Veeam၊ NetBackup...) အတွက် virtual tape library (VTL)။ Virtual tape တွေကို S3 မှာ သိမ်းပြီး Glacier Flexible Retrieval သို့ Deep Archive ကို archive လုပ်တယ်၊ physical tape ကို အစားထိုးတယ်။"),
          ] },
          { type: 'table',
            head: [L("Service", "サービス", "Service အမည်"), L("What it does", "役割", "ဘာလုပ်လဲ"), L("Exam trigger words", "試験のキーワード", "Exam မှာ တွေ့ရမယ့် keyword")],
            rows: [
              [L("AWS DataSync", "AWS DataSync（オンライン転送）", "AWS DataSync (online ကူးပြောင်း)"), L("Online, agent-based, scheduled and verified copying from NFS/SMB/HDFS/object storage to S3, EFS or FSx (also between AWS services)", "NFS/SMB/HDFS/オブジェクトストレージから S3・EFS・FSx へ、エージェントを使ったオンラインかつスケジュール可能で検証付きのコピー（AWS サービス間も可）", "NFS/SMB/HDFS/object storage ကနေ S3၊ EFS၊ FSx ဆီ agent သုံးပြီး online၊ schedule လုပ်လို့ရ၊ verify လုပ်ပေးတဲ့ copy (AWS service ကြားလည်းရ)"), L("'migrate file shares over the network', 'automate and accelerate transfer', 'preserve metadata'", "「ネットワーク経由でファイル共有を移行」「転送の自動化と高速化」「メタデータを保持」", "'Network ကနေ file share ရွှေ့'၊ 'Transfer ကို automate/မြန်'၊ 'Metadata ထိန်း'")],
              [L("AWS Snow Family (Snowball Edge)", "AWS Snow Family（Snowball Edge、オフライン転送）", "AWS Snow Family (Snowball Edge၊ offline transfer)"), L("Rugged physical devices shipped to you for offline transfer of terabytes to petabytes and for edge computing", "テラバイト〜ペタバイトのオフライン転送やエッジコンピューティングのために発送される頑丈な物理デバイス", "TB မှ PB အထိ offline transfer နဲ့ edge computing အတွက် ပို့ပေးတဲ့ ခိုင်ခံ့တဲ့ physical device"), L("'limited or no bandwidth', 'would take weeks over the network', 'remote site with no connectivity'", "「帯域が限られる／ない」「ネットワークだと数週間かかる」「接続のない遠隔地」", "'Bandwidth နည်း/မရှိ'၊ 'Network နဲ့ဆို ရက်သတ္တပတ်များစွာ ကြာမယ်'၊ 'Connection မရှိတဲ့ ဝေးလံတဲ့နေရာ'")],
              [L("AWS Storage Gateway", "AWS Storage Gateway（ハイブリッド）", "AWS Storage Gateway (hybrid ချိတ်ဆက်)"), L("Ongoing hybrid access to cloud storage from on-premises", "オンプレミスからクラウドストレージへの継続的なハイブリッドアクセス", "On-premises ကနေ cloud storage ကို ဆက်တိုက်သုံးတဲ့ hybrid access"), L("'keep using on-prem apps', 'replace tapes', 'low-latency local cache'", "「オンプレミスのアプリを使い続ける」「テープの置き換え」「低レイテンシのローカルキャッシュ」", "'On-prem app ဆက်သုံး'၊ 'Tape အစားထိုး'၊ 'Latency နည်းတဲ့ local cache'")],
              [L("AWS Backup", "AWS Backup（一元バックアップ）", "AWS Backup (တစ်နေရာတည်းက backup)"), L("Central, policy-based backup plans across EC2/EBS, RDS, Aurora, DynamoDB, EFS, FSx, S3 and more; vaults, Vault Lock, cross-Region and cross-account copies", "EC2/EBS・RDS・Aurora・DynamoDB・EFS・FSx・S3 などを横断する一元的なポリシーベースのバックアッププラン。ボールト、Vault Lock、リージョン間・アカウント間コピー", "EC2/EBS၊ RDS၊ Aurora၊ DynamoDB၊ EFS၊ FSx၊ S3 စတာတွေအတွက် တစ်နေရာတည်းက policy-based backup plan၊ vault၊ Vault Lock၊ cross-Region/cross-account copy"), L("'centralize and automate backups across services and accounts', 'immutable backups'", "「サービスやアカウントをまたいでバックアップを一元化・自動化」「変更不可のバックアップ」", "'Service/account အားလုံးက backup ကို တစ်နေရာတည်းက automate'၊ 'ပြင်မရတဲ့ backup'")],
            ] },
          { type: 'p', text: L(
            "A quick rule for moving data: divide the data size by your real bandwidth. 100 TB over a 100 Mbps link takes roughly 3 months, so a **Snowball Edge** shipment wins; 5 TB over a 1 Gbps link takes under a day, so **DataSync** wins. Note that AWS has retired Snowmobile and Snowcone and narrowed the Snow lineup, steering new projects toward online transfer, but the offline-transfer scenario still appears on exams.",
            "データ移行の簡単な目安：データ量を実効帯域で割ります。100 TB を 100 Mbps 回線で送ると約 3 か月かかるため **Snowball Edge** の配送が有利で、5 TB を 1 Gbps 回線なら 1 日未満なので **DataSync** が有利です。なお AWS は Snowmobile と Snowcone を廃止して Snow の製品ラインを絞り、新規案件をオンライン転送へ誘導していますが、オフライン転送のシナリオは今も試験に出ます。",
            "Data ရွှေ့ဖို့ လွယ်တဲ့နည်း - data size ကို တကယ်ရတဲ့ bandwidth နဲ့ စားကြည့်ပါ။ 100 TB ကို 100 Mbps line နဲ့ပို့ရင် ၃ လလောက်ကြာလို့ **Snowball Edge** ပို့တာ ပိုကောင်းတယ်၊ 5 TB ကို 1 Gbps line နဲ့ဆို တစ်ရက်မပြည့်လို့ **DataSync** က ပိုကောင်းတယ်။ AWS က Snowmobile နဲ့ Snowcone ကို ရပ်လိုက်ပြီး Snow lineup ကို ကျဉ်းလိုက်တယ်၊ project အသစ်တွေကို online transfer ဘက် ဦးတည်စေတယ်၊ ဒါပေမဲ့ offline transfer scenario က exam မှာ ထွက်နေဆဲပါ။"
          ) },
          { type: 'callout', tone: 'exam', text: L(
            "Distinguish **one-time migration** (DataSync online, Snowball Edge offline) from **ongoing hybrid use** (Storage Gateway). 'Replace the tape library without changing backup software' -> **Tape Gateway**. 'One place to define backup retention for RDS, EFS and EBS across accounts' -> **AWS Backup** with AWS Organizations.",
            "**一度きりの移行**（オンラインなら DataSync、オフラインなら Snowball Edge）と**継続的なハイブリッド利用**（Storage Gateway）を区別しましょう。「バックアップソフトを変えずにテープライブラリを置き換える」→ **Tape Gateway**。「アカウントをまたいで RDS・EFS・EBS のバックアップ保持を 1 か所で定義」→ AWS Organizations と連携した **AWS Backup**。",
            "**တစ်ခါတည်း migration** (online ဆို DataSync၊ offline ဆို Snowball Edge) နဲ့ **ဆက်တိုက် hybrid သုံးတာ** (Storage Gateway) ကို ခွဲခြားပါ။ 'Backup software မပြောင်းဘဲ tape library ကို အစားထိုး' -> **Tape Gateway**။ 'Account အားလုံးက RDS၊ EFS၊ EBS backup retention ကို တစ်နေရာတည်းက သတ်မှတ်' -> AWS Organizations နဲ့ **AWS Backup**။"
          ) },
        ],
      },
      {
        id: "hands-on-lab",
        title: L("Hands-on lab: a versioned, tiered S3 bucket", "ハンズオン：バージョニングと階層化を設定した S3 バケット", "Hands-on lab - Versioning နဲ့ tiering ပါတဲ့ S3 bucket"),
        blocks: [
          { type: 'steps', items: [
            L("Create a bucket in Tokyo with a globally unique name: `aws s3 mb s3://<yourname>-lab-2026 --region ap-northeast-1`. Confirm in the console that Block Public Access is on and ACLs are disabled.",
              "グローバルに一意な名前で東京にバケットを作成します：`aws s3 mb s3://<yourname>-lab-2026 --region ap-northeast-1`。コンソールでブロックパブリックアクセスが有効、ACL が無効であることを確認します。",
              "Global unique နာမည်နဲ့ Tokyo မှာ bucket ဆောက်ပါ - `aws s3 mb s3://<yourname>-lab-2026 --region ap-northeast-1`။ Console မှာ Block Public Access ဖွင့်ထားတာ၊ ACL ပိတ်ထားတာ စစ်ပါ။"),
            L("Enable versioning with `aws s3api put-bucket-versioning` (see the earlier section).",
              "`aws s3api put-bucket-versioning` でバージョニングを有効にします（前のセクション参照）。",
              "`aws s3api put-bucket-versioning` နဲ့ versioning ဖွင့်ပါ (အရင် section ကို ကြည့်ပါ)။"),
            L("Upload a file twice with different content, then run `aws s3api list-object-versions` to see two version IDs.",
              "内容を変えて同じファイルを 2 回アップロードし、`aws s3api list-object-versions` で 2 つのバージョン ID を確認します。",
              "Content မတူအောင်ပြင်ပြီး file တစ်ခုတည်းကို ၂ ခါ upload လုပ်ပါ၊ `aws s3api list-object-versions` နဲ့ version ID ၂ ခု ကြည့်ပါ။"),
            L("Delete the object with `aws s3 rm`, list versions again and notice the **delete marker**. Delete the marker by version ID to restore the file.",
              "`aws s3 rm` でオブジェクトを削除し、再度バージョン一覧を表示して**削除マーカー**を確認します。マーカーをバージョン ID 指定で削除するとファイルが復元されます。",
              "`aws s3 rm` နဲ့ object ကို ဖျက်ပြီး version တွေ ပြန်ကြည့်ပါ၊ **delete marker** ကို တွေ့ရမယ်။ Marker ကို version ID နဲ့ ဖျက်လိုက်ရင် file ပြန်ရလာမယ်။"),
            L("Apply the lifecycle JSON from earlier, then sync a local folder with `aws s3 sync` and check the storage class of each object with `aws s3api head-object`.",
              "前述のライフサイクル JSON を適用し、`aws s3 sync` でローカルフォルダを同期して、`aws s3api head-object` で各オブジェクトのストレージクラスを確認します。",
              "အရင်က lifecycle JSON ကို apply လုပ်ပြီး `aws s3 sync` နဲ့ local folder ကို sync လုပ်ပါ၊ `aws s3api head-object` နဲ့ object တစ်ခုစီရဲ့ storage class ကို စစ်ပါ။"),
            L("Clean up: delete all versions and markers (console: Empty bucket), then `aws s3 rb s3://<yourname>-lab-2026`.",
              "後片付け：すべてのバージョンとマーカーを削除し（コンソールの「空にする」）、`aws s3 rb s3://<yourname>-lab-2026` を実行します。",
              "ရှင်းလင်းခြင်း - version နဲ့ marker အားလုံးကို ဖျက်ပါ (console မှာ Empty bucket)၊ ပြီးရင် `aws s3 rb s3://<yourname>-lab-2026`။"),
          ] },
          { type: 'code', lang: 'bash', code:
`# Copy one file, choosing the storage class at upload time
aws s3 cp ./report.pdf s3://alice-lab-2026/reports/ --storage-class STANDARD_IA

# Mirror a local folder (only changed files are uploaded)
aws s3 sync ./site s3://alice-lab-2026/site --delete

# Inspect an object: storage class, version ID, encryption
aws s3api head-object --bucket alice-lab-2026 --key reports/report.pdf

# Remove the marker to undelete (use the VersionId of the marker)
aws s3api delete-object --bucket alice-lab-2026 \\
  --key reports/report.pdf --version-id <delete-marker-version-id>`,
            caption: L("High-level `aws s3` commands for files, `aws s3api` for full API control.", "ファイル操作には高水準の `aws s3`、API を細かく制御するには `aws s3api` を使います。", "File ကိုင်ဖို့ high-level `aws s3`၊ API အပြည့်ထိန်းဖို့ `aws s3api` ကို သုံးပါ။") },
          { type: 'callout', tone: 'tip', text: L(
            "`aws s3 sync --delete` also deletes destination objects missing locally. On a versioned bucket this only adds delete markers, which is one more reason to enable versioning before automating syncs.",
            "`aws s3 sync --delete` はローカルにないオブジェクトを宛先から削除します。バージョニングされたバケットでは削除マーカーが付くだけなので、同期を自動化する前にバージョニングを有効にしておく理由がここにもあります。",
            "`aws s3 sync --delete` က local မှာ မရှိတဲ့ object တွေကို destination ကနေ ဖျက်တယ်။ Versioning ဖွင့်ထားတဲ့ bucket မှာဆို delete marker ပဲ ထည့်တာမို့ sync ကို automate မလုပ်ခင် versioning ဖွင့်ထားသင့်တဲ့ အကြောင်းရင်းတစ်ခုပါ။"
          ) },
        ],
      },
    ],
    summary: [
      L("S3 is object storage: globally unique bucket names, objects up to 5 TB, 11 nines durability and strong read-after-write consistency.",
        "S3 はオブジェクトストレージで、バケット名はグローバルに一意、オブジェクトは最大 5 TB、イレブンナインの耐久性と強い書き込み後読み取り整合性を持ちます。",
        "S3 က object storage ပါ - bucket နာမည် global unique၊ object 5 TB ထိ၊ 11 nines durability နဲ့ strong read-after-write consistency။"),
      L("Pick storage classes by access frequency and retrieval time; watch minimum durations (30/30/90/90/180 days) and retrieval fees.",
        "ストレージクラスはアクセス頻度と取り出し時間で選び、最低保存期間（30/30/90/90/180 日）と取り出し料金に注意します。",
        "Storage class ကို access ကြိမ်နှုန်းနဲ့ retrieval time နဲ့ ရွေးပါ၊ minimum duration (30/30/90/90/180 ရက်) နဲ့ retrieval fee ကို သတိထားပါ။"),
      L("Lifecycle rules automate transitions and expirations; versioning (+ MFA Delete) protects against mistakes and is required for replication and Object Lock.",
        "ライフサイクルルールで移行と削除を自動化し、バージョニング（＋MFA Delete）は誤操作から保護し、レプリケーションと Object Lock の前提条件です。",
        "Lifecycle rule က transition နဲ့ expiration ကို automate လုပ်တယ်၊ versioning (+ MFA Delete) က အမှားကနေ ကာကွယ်ပြီး replication နဲ့ Object Lock အတွက် လိုတယ်။"),
      L("SSE-S3 is the default; choose SSE-KMS for key control and auditing, client-side when AWS must never see plaintext.",
        "SSE-S3 がデフォルト。鍵の制御と監査が必要なら SSE-KMS、AWS に平文を見せてはならないならクライアントサイド暗号化を選びます。",
        "SSE-S3 က default၊ key ထိန်းချုပ်မှုနဲ့ audit လိုရင် SSE-KMS၊ AWS က plaintext လုံးဝမမြင်ရဘူးဆိုရင် client-side ကို ရွေးပါ။"),
      L("Keep buckets private with Block Public Access; serve websites via CloudFront + OAC; share single objects with presigned URLs.",
        "ブロックパブリックアクセスでバケットをプライベートに保ち、Web サイトは CloudFront＋OAC で配信し、個別のオブジェクトは署名付き URL で共有します。",
        "Block Public Access နဲ့ bucket ကို private ထားပါ၊ website ကို CloudFront + OAC နဲ့ ပေးပါ၊ object တစ်ခုချင်းကို presigned URL နဲ့ share ပါ။"),
      L("EBS is persistent, AZ-scoped block storage (gp3 default, io2 for critical DBs); instance store is fastest but ephemeral.",
        "EBS は永続的で AZ 単位のブロックストレージ（既定は gp3、重要 DB には io2）、インスタンスストアは最速ですが揮発性です。",
        "EBS က persistent ဖြစ်ပြီး AZ အတွင်းပဲရတဲ့ block storage (default gp3၊ အရေးကြီး DB ဆို io2)၊ instance store က အမြန်ဆုံးပေမဲ့ ephemeral။"),
      L("EFS = shared Linux NFS; FSx = Windows (SMB/AD), Lustre (HPC), NetApp ONTAP (multi-protocol), OpenZFS.",
        "EFS＝共有 Linux NFS、FSx＝Windows（SMB/AD）、Lustre（HPC）、NetApp ONTAP（マルチプロトコル）、OpenZFS。",
        "EFS = share သုံးတဲ့ Linux NFS၊ FSx = Windows (SMB/AD)၊ Lustre (HPC)၊ NetApp ONTAP (multi-protocol)၊ OpenZFS။"),
      L("Storage Gateway for ongoing hybrid access, DataSync for online migration, Snowball Edge for offline bulk transfer, AWS Backup for central backup policy.",
        "継続的なハイブリッド利用には Storage Gateway、オンライン移行には DataSync、オフラインの大量転送には Snowball Edge、一元的なバックアップポリシーには AWS Backup。",
        "ဆက်တိုက် hybrid သုံးဖို့ Storage Gateway၊ online migration အတွက် DataSync၊ offline data အများကြီးအတွက် Snowball Edge၊ backup policy တစ်နေရာတည်းက စီမံဖို့ AWS Backup။"),
    ],
  },
  questions: [
    {
      difficulty: 'EASY',
      exams: ['CLF-C02'],
      prompt: L("What durability is Amazon S3 Standard designed to provide for objects over a given year?",
        "Amazon S3 Standard は、1 年間のオブジェクトの耐久性としてどの値を提供するよう設計されていますか？",
        "Amazon S3 Standard က object တွေအတွက် တစ်နှစ်အတွင်း ဘယ်လောက် durability ပေးဖို့ design လုပ်ထားလဲ?"),
      options: ['99.99%', '99.999999999%', '99.9%', '99.5%'],
      correct: [1],
      explanation: L("S3 is designed for 99.999999999% (11 nines) durability by storing data redundantly across multiple AZs. 99.99% is the designed availability of S3 Standard, a different metric (can you read it now) that is often confused with durability.",
        "S3 は複数の AZ にデータを冗長に保存することで 99.999999999%（イレブンナイン）の耐久性を実現するよう設計されています。99.99% は S3 Standard の可用性（今読めるかどうか）の設計値で、耐久性とよく混同される別の指標です。",
        "S3 က AZ အများကြီးမှာ data ကို ထပ်ပွားသိမ်းလို့ 99.999999999% (11 nines) durability ရအောင် design လုပ်ထားတယ်။ 99.99% က S3 Standard ရဲ့ availability (အခု ဖတ်လို့ရလား) ဖြစ်ပြီး durability နဲ့ မကြာခဏ ရောထွေးတတ်တဲ့ တခြား metric ပါ။"),
    },
    {
      difficulty: 'EASY',
      exams: ['CLF-C02', 'SAA-C03'],
      prompt: L("A company must keep audit records for 10 years. The records are almost never read, and a retrieval time of up to 48 hours is acceptable. Which storage class is the MOST cost-effective?",
        "ある企業は監査記録を 10 年間保管する必要があります。記録はほとんど読まれず、最大 48 時間の取り出し時間は許容されます。最もコスト効率の高いストレージクラスはどれですか？",
        "Company တစ်ခုက audit record တွေကို ၁၀ နှစ် သိမ်းရမယ်။ ဘယ်တော့မှ မဖတ်သလောက်ဖြစ်ပြီး ပြန်ထုတ်ချိန် ၄၈ နာရီထိ လက်ခံနိုင်တယ်။ အကုန်ကျစရိတ် အသက်သာဆုံး storage class က ဘယ်ဟာလဲ?"),
      options: ['S3 Standard-IA', 'S3 Glacier Instant Retrieval', 'S3 Intelligent-Tiering', 'S3 Glacier Deep Archive'],
      correct: [3],
      explanation: L("S3 Glacier Deep Archive is the lowest-cost class, with retrieval within 12 hours (standard) or 48 hours (bulk), which fits rarely read long-term records. Glacier Instant Retrieval returns data in milliseconds, but you pay a higher storage price for speed you do not need.",
        "S3 Glacier Deep Archive は最も安価なクラスで、取り出しは標準で 12 時間以内、大容量で 48 時間以内のため、ほとんど読まれない長期記録に適しています。Glacier Instant Retrieval はミリ秒で取り出せますが、不要な速さのために高い保存料金を払うことになります。",
        "S3 Glacier Deep Archive က အပေါဆုံး class ဖြစ်ပြီး standard ဆို ၁၂ နာရီ၊ bulk ဆို ၄၈ နာရီအတွင်း ပြန်ရတယ်၊ မဖတ်သလောက်ဖြစ်တဲ့ ရေရှည် record တွေနဲ့ ကိုက်တယ်။ Glacier Instant Retrieval က millisecond နဲ့ ပြန်ရပေမဲ့ မလိုအပ်တဲ့ မြန်နှုန်းအတွက် storage ဈေးပိုပေးရတယ်။"),
    },
    {
      difficulty: 'EASY',
      exams: ['CLF-C02', 'SAA-C03'],
      prompt: L("A fleet of Linux EC2 instances in three Availability Zones must read and write the same set of files concurrently. Which service should be used?",
        "3 つのアベイラビリティーゾーンにある Linux EC2 インスタンス群が、同じファイル群を同時に読み書きする必要があります。どのサービスを使うべきですか？",
        "AZ ၃ ခုမှာရှိတဲ့ Linux EC2 instance အစုက file တွေကို တပြိုင်နက် တူတူ ဖတ်/ရေး လုပ်ရမယ်။ ဘယ် service ကို သုံးသင့်လဲ?"),
      options: ['Amazon EFS', 'Amazon EBS gp3', 'Instance store', 'Amazon S3 Glacier Flexible Retrieval'],
      correct: [0],
      explanation: L("Amazon EFS is a managed NFS file system that many Linux instances in multiple AZs can mount at the same time. An EBS gp3 volume attaches to one instance in a single AZ (Multi-Attach is only for io1/io2 in one AZ), so it cannot serve a multi-AZ fleet.",
        "Amazon EFS は、複数 AZ の多数の Linux インスタンスが同時にマウントできるマネージド NFS ファイルシステムです。EBS gp3 ボリュームは単一 AZ の 1 台のインスタンスに接続するもの（Multi-Attach は 1 AZ 内の io1/io2 のみ）なので、マルチ AZ のインスタンス群には使えません。",
        "Amazon EFS က AZ အများကြီးက Linux instance တွေ တပြိုင်နက် mount လုပ်နိုင်တဲ့ managed NFS file system ပါ။ EBS gp3 volume က AZ တစ်ခုထဲက instance တစ်လုံးမှာပဲ တပ်တာ (Multi-Attach က AZ တစ်ခုထဲမှာ io1/io2 အတွက်ပဲ) ဖြစ်လို့ multi-AZ instance အစုအတွက် မသုံးနိုင်ဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['CLF-C02', 'SAA-C03'],
      prompt: L("Users sometimes overwrite or delete important files in an S3 bucket by mistake. Which feature lets the company recover previous versions?",
        "ユーザーが S3 バケット内の重要なファイルを誤って上書き・削除することがあります。以前のバージョンを復元できる機能はどれですか？",
        "User တွေက S3 bucket ထဲက အရေးကြီး file တွေကို မတော်တဆ overwrite/delete လုပ်မိတတ်တယ်။ Version ဟောင်းတွေကို ပြန်ယူနိုင်တဲ့ feature က ဘယ်ဟာလဲ?"),
      options: ['S3 Transfer Acceleration', 'S3 Intelligent-Tiering', 'S3 Versioning', 'S3 event notifications'],
      correct: [2],
      explanation: L("S3 Versioning keeps every version of an object; an overwrite creates a new version and a delete adds a delete marker that can be removed. Intelligent-Tiering only changes storage tiers to save cost and keeps a single copy of the current object.",
        "S3 バージョニングはオブジェクトのすべてのバージョンを保持し、上書きでは新しいバージョンが作られ、削除では取り消し可能な削除マーカーが追加されます。Intelligent-Tiering はコスト削減のために階層を変えるだけで、現行オブジェクトのコピーは 1 つのままです。",
        "S3 Versioning က object ရဲ့ version တိုင်းကို သိမ်းထားတယ်၊ overwrite လုပ်ရင် version အသစ်ဖြစ်ပြီး delete လုပ်ရင် ပြန်ဖယ်လို့ရတဲ့ delete marker ထည့်တယ်။ Intelligent-Tiering က ကုန်ကျစရိတ်သက်သာဖို့ tier ပြောင်းပေးတာပဲ၊ လက်ရှိ object copy တစ်ခုပဲ ရှိတယ်။"),
    },
    {
      difficulty: 'EASY',
      exams: ['CLF-C02', 'SAA-C03'],
      prompt: L("A research site has 80 TB of data and only a slow, unreliable internet connection. It needs to move the data to Amazon S3 within a few weeks. Which service is the best fit?",
        "ある研究拠点には 80 TB のデータがあり、低速で不安定なインターネット回線しかありません。数週間以内にデータを Amazon S3 へ移す必要があります。最適なサービスはどれですか？",
        "Research site တစ်ခုမှာ data 80 TB ရှိပြီး internet က နှေးပြီး မတည်ငြိမ်ဘူး။ ရက်သတ္တပတ်အနည်းငယ်အတွင်း Amazon S3 ဆီ ရွှေ့ရမယ်။ အသင့်တော်ဆုံး service က ဘယ်ဟာလဲ?"),
      options: ['AWS DataSync', 'AWS Snowball Edge', 'S3 Transfer Acceleration', 'Amazon S3 File Gateway'],
      correct: [1],
      explanation: L("Snowball Edge is a physical device shipped to the site, loaded locally and shipped back, so it avoids the slow network entirely. DataSync is excellent for online transfers, but it still depends on the poor connection and would be too slow and unreliable here.",
        "Snowball Edge は拠点に送られてくる物理デバイスで、ローカルでデータを書き込んで返送するため、低速なネットワークを完全に回避できます。DataSync はオンライン転送には優れていますが、貧弱な回線に依存するため、この場合は遅く不安定すぎます。",
        "Snowball Edge က site ဆီ ပို့ပေးတဲ့ physical device ပါ၊ local မှာ data ထည့်ပြီး ပြန်ပို့လို့ နှေးတဲ့ network ကို လုံးဝ ရှောင်နိုင်တယ်။ DataSync က online transfer အတွက် ကောင်းပေမဲ့ ညံ့တဲ့ connection ပေါ်မှာ မူတည်နေလို့ ဒီမှာ အရမ်းနှေးပြီး မယုံကြည်ရဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['CLF-C02', 'SAA-C03'],
      prompt: L("Which statement about EC2 instance store volumes is correct?",
        "EC2 インスタンスストアボリュームについて正しい説明はどれですか？",
        "EC2 instance store volume အကြောင်း မှန်တဲ့ အဆိုက ဘယ်ဟာလဲ?"),
      options: ['Data is lost when the instance is stopped or terminated', 'Data is automatically replicated to another Availability Zone', 'Volumes can be detached and attached to another instance', 'Snapshots are taken automatically every day'],
      correct: [0],
      explanation: L("Instance store is physically attached to the host and is ephemeral: data survives a reboot but is lost on stop, hibernate, terminate or hardware failure. Detaching and re-attaching to another instance is an EBS capability, not an instance store one.",
        "インスタンスストアはホストに物理的に接続された揮発性ストレージで、再起動ではデータが残りますが、停止・休止・終了・ハードウェア障害で失われます。デタッチして別のインスタンスに再接続できるのは EBS の機能であり、インスタンスストアではできません。",
        "Instance store က host မှာ တကယ်တပ်ထားတဲ့ ephemeral storage ပါ၊ reboot ဆို data ကျန်ပေမဲ့ stop၊ hibernate၊ terminate၊ hardware ပျက်ရင် ပျောက်တယ်။ ဖြုတ်ပြီး တခြား instance မှာ တပ်တာက EBS ရဲ့ စွမ်းရည်ပါ၊ instance store မှာ မရဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['CLF-C02', 'SAA-C03'],
      prompt: L("Which TWO statements about Amazon S3 are correct? (Select TWO)",
        "Amazon S3 について正しい説明はどれですか？（2 つ選択）",
        "Amazon S3 အကြောင်း မှန်တဲ့ အဆို ၂ ခုက ဘယ်ဟာတွေလဲ? (၂ ခု ရွေးပါ)"),
      options: ['Bucket names must be unique across all AWS accounts', 'A single object can be up to 5 TB in size', 'An S3 bucket can be used as an EC2 boot volume', 'Each bucket automatically spans all AWS Regions'],
      correct: [0, 1],
      explanation: L("Bucket names share a global namespace, and individual objects can be up to 5 TB (use multipart upload above 5 GB). S3 is object storage accessed over HTTP APIs, so it cannot be a boot volume, and a bucket is created in one Region, not all of them.",
        "バケット名はグローバルな名前空間を共有し、個々のオブジェクトは最大 5 TB です（5 GB 超はマルチパートアップロード）。S3 は HTTP API でアクセスするオブジェクトストレージなのでブートボリュームにはできず、バケットはすべてではなく 1 つのリージョンに作成されます。",
        "Bucket နာမည်တွေက global namespace တစ်ခုတည်းကို မျှသုံးတယ်၊ object တစ်ခု 5 TB ထိ ရတယ် (5 GB ကျော်ရင် multipart upload)။ S3 က HTTP API နဲ့သုံးတဲ့ object storage ဖြစ်လို့ boot volume မလုပ်နိုင်ဘူး၊ bucket ကို Region အားလုံးမှာမဟုတ်ဘဲ Region တစ်ခုထဲမှာ ဆောက်တယ်။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("A media company stores millions of objects whose access patterns are unknown and change over time. It wants to reduce storage cost automatically without retrieval fees or operational effort. Which storage class should it use?",
        "あるメディア企業は、アクセスパターンが不明で時間とともに変化する数百万のオブジェクトを保存しています。取り出し料金や運用負荷なしに自動でストレージコストを下げたいと考えています。どのストレージクラスを使うべきですか？",
        "Media company တစ်ခုက access pattern မသိပြီး အချိန်နဲ့အမျှ ပြောင်းနေတဲ့ object သန်းချီ သိမ်းထားတယ်။ Retrieval fee မရှိ၊ operation အလုပ်မရှိဘဲ storage cost ကို အလိုအလျောက် လျှော့ချင်တယ်။ ဘယ် storage class သုံးသင့်လဲ?"),
      options: ['S3 Standard-IA with a lifecycle rule', 'S3 One Zone-IA', 'S3 Intelligent-Tiering', 'S3 Glacier Flexible Retrieval'],
      correct: [2],
      explanation: L("Intelligent-Tiering monitors each object and moves it between access tiers automatically, with no retrieval fees, for a small monitoring charge, which is ideal for unknown or changing patterns. A fixed lifecycle rule to Standard-IA guesses the pattern in advance and adds retrieval fees whenever moved objects become popular again.",
        "Intelligent-Tiering は各オブジェクトを監視して自動でアクセス階層間を移動し、少額の監視料金のみで取り出し料金がかからないため、不明または変化するパターンに最適です。Standard-IA への固定的なライフサイクルルールはパターンを事前に推測するもので、移動後に再びよく使われると取り出し料金が発生します。",
        "Intelligent-Tiering က object တစ်ခုချင်းကို စောင့်ကြည့်ပြီး access tier ကြား အလိုအလျောက် ရွှေ့ပေးတယ်၊ monitoring fee နည်းနည်းပဲ ပေးရပြီး retrieval fee မရှိလို့ မသိ/ပြောင်းလဲနေတဲ့ pattern အတွက် အကောင်းဆုံးပါ။ Standard-IA ကို ရွှေ့တဲ့ fixed lifecycle rule က pattern ကို ကြိုခန့်မှန်းတာဖြစ်ပြီး ရွှေ့ပြီးမှ ပြန်သုံးများလာရင် retrieval fee ကျတယ်။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("A company hosts a static website in S3. Security requires HTTPS with a custom domain, and the bucket must not be publicly accessible. What should a solutions architect do?",
        "ある企業は S3 で静的 Web サイトをホストしています。セキュリティ要件として独自ドメインでの HTTPS が必要で、バケットはパブリックアクセス不可でなければなりません。ソリューションアーキテクトは何をすべきですか？",
        "Company တစ်ခုက S3 မှာ static website host လုပ်ထားတယ်။ Security အရ custom domain နဲ့ HTTPS လိုပြီး bucket ကို public access မပေးရဘူး။ Solutions architect က ဘာလုပ်သင့်လဲ?"),
      options: ['Enable the S3 website endpoint and attach an ACM certificate to the bucket', 'Make the bucket public and enable S3 Transfer Acceleration', 'Use presigned URLs for every page of the website', 'Create a CloudFront distribution with Origin Access Control and a bucket policy that allows only that distribution'],
      correct: [3],
      explanation: L("CloudFront provides HTTPS with an ACM certificate and caches at the edge, while OAC lets only that distribution read the private bucket. The S3 website endpoint supports HTTP only and requires public access, and ACM certificates cannot be attached to a bucket.",
        "CloudFront は ACM 証明書で HTTPS を提供しエッジでキャッシュし、OAC によってそのディストリビューションだけがプライベートバケットを読めるようになります。S3 Web サイトエンドポイントは HTTP のみでパブリックアクセスが必要であり、ACM 証明書をバケットに付けることもできません。",
        "CloudFront က ACM certificate နဲ့ HTTPS ပေးပြီး edge မှာ cache လုပ်တယ်၊ OAC က အဲ့ distribution ကိုပဲ private bucket ဖတ်ခွင့်ပေးတယ်။ S3 website endpoint က HTTP ပဲရပြီး public access လိုတယ်၊ ACM certificate ကိုလည်း bucket မှာ တပ်လို့မရဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("A team configured Cross-Region Replication on a bucket that already contained 2 million objects. New uploads are replicated, but the existing objects are missing in the destination. What is the simplest way to copy them?",
        "あるチームは、すでに 200 万個のオブジェクトがあるバケットにクロスリージョンレプリケーションを設定しました。新しいアップロードは複製されますが、既存オブジェクトが送信先にありません。それらをコピーする最も簡単な方法は何ですか？",
        "Team တစ်ခုက object ၂ သန်း ရှိပြီးသား bucket မှာ Cross-Region Replication set လုပ်လိုက်တယ်။ Upload အသစ်တွေ replicate ဖြစ်ပေမဲ့ ရှိပြီးသား object တွေ destination မှာ မရှိဘူး။ အဲ့ဒါတွေကို ကူးဖို့ အလွယ်ဆုံးနည်းက ဘာလဲ?"),
      options: ['Disable and re-enable versioning on the source bucket', 'Run S3 Batch Replication for the existing objects', 'Enable S3 Replication Time Control', 'Change the destination storage class to S3 Standard'],
      correct: [1],
      explanation: L("Replication rules apply only to objects written after the rule is created; S3 Batch Replication is the managed way to replicate existing objects. Replication Time Control adds a 15-minute SLA for new objects but does not backfill old ones, and versioning cannot be disabled once enabled (only suspended).",
        "レプリケーションルールはルール作成後に書き込まれたオブジェクトにのみ適用され、既存オブジェクトを複製するマネージドな方法が S3 Batch Replication です。Replication Time Control は新規オブジェクトに 15 分の SLA を付けるだけで過去分は補完せず、バージョニングは一度有効にすると無効化できません（停止のみ）。",
        "Replication rule က rule ဆောက်ပြီးမှ ရေးတဲ့ object တွေကိုပဲ သက်ရောက်တယ်၊ ရှိပြီးသား object တွေကို replicate လုပ်ဖို့ managed နည်းက S3 Batch Replication ပါ။ Replication Time Control က object အသစ်တွေအတွက် ၁၅ မိနစ် SLA ပေးတာပဲ၊ အဟောင်းတွေကို မဖြည့်ပေးဘူး၊ versioning ကိုလည်း enable ပြီးရင် disable မလုပ်နိုင်ဘူး (suspend ပဲရ)။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['CLF-C02', 'SAA-C03'],
      prompt: L("A company is moving Windows-based applications to AWS. They need shared file storage that uses the SMB protocol and integrates with Microsoft Active Directory for NTFS permissions. Which service meets these requirements?",
        "ある企業が Windows ベースのアプリケーションを AWS に移行します。SMB プロトコルを使い、NTFS 権限のために Microsoft Active Directory と統合できる共有ファイルストレージが必要です。要件を満たすサービスはどれですか？",
        "Company တစ်ခုက Windows-based application တွေကို AWS ဆီ ရွှေ့မယ်။ SMB protocol သုံးပြီး NTFS permission အတွက် Microsoft Active Directory နဲ့ ချိတ်နိုင်တဲ့ shared file storage လိုတယ်။ ဘယ် service က ကိုက်လဲ?"),
      options: ['Amazon FSx for Windows File Server', 'Amazon EFS', 'Amazon FSx for Lustre', 'Amazon EBS Multi-Attach'],
      correct: [0],
      explanation: L("FSx for Windows File Server is a fully managed Windows file server with SMB, NTFS ACLs, Active Directory and DFS support. Amazon EFS is NFS for Linux clients and is not supported on Windows instances.",
        "FSx for Windows File Server は、SMB、NTFS ACL、Active Directory、DFS に対応したフルマネージドな Windows ファイルサーバーです。Amazon EFS は Linux クライアント向けの NFS で、Windows インスタンスではサポートされていません。",
        "FSx for Windows File Server က SMB၊ NTFS ACL၊ Active Directory၊ DFS ကို support လုပ်တဲ့ fully managed Windows file server ပါ။ Amazon EFS က Linux client အတွက် NFS ဖြစ်ပြီး Windows instance မှာ support မလုပ်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("A company backs up on-premises servers with existing backup software to a physical tape library. It wants to stop managing physical tapes without changing its backup software. Which solution should it use?",
        "ある企業は、既存のバックアップソフトでオンプレミスのサーバーを物理テープライブラリにバックアップしています。バックアップソフトを変えずに物理テープの管理をやめたいと考えています。どのソリューションを使うべきですか？",
        "Company တစ်ခုက ရှိပြီးသား backup software နဲ့ on-premises server တွေကို physical tape library ဆီ backup လုပ်တယ်။ Backup software မပြောင်းဘဲ physical tape စီမံတာကို ရပ်ချင်တယ်။ ဘယ် solution သုံးသင့်လဲ?"),
      options: ['AWS DataSync to Amazon EFS', 'Volume Gateway in stored mode', 'Tape Gateway archiving to S3 Glacier Deep Archive', 'AWS Snowball Edge every month'],
      correct: [2],
      explanation: L("Tape Gateway presents a virtual tape library over iSCSI, so existing backup software keeps working while tapes are stored in S3 and archived to Glacier or Deep Archive. Volume Gateway presents block volumes, not a tape library, so the backup software would have to be reconfigured.",
        "Tape Gateway は iSCSI 経由で仮想テープライブラリを提供するため、既存のバックアップソフトはそのまま動き、テープは S3 に保存されて Glacier や Deep Archive にアーカイブされます。Volume Gateway はテープライブラリではなくブロックボリュームを提供するため、バックアップソフトの再設定が必要になります。",
        "Tape Gateway က iSCSI ကနေ virtual tape library ပေးလို့ ရှိပြီးသား backup software ဆက်အလုပ်လုပ်ပြီး tape တွေကို S3 မှာသိမ်းကာ Glacier/Deep Archive ကို archive လုပ်တယ်။ Volume Gateway က tape library မဟုတ်ဘဲ block volume ပေးတာမို့ backup software ကို ပြန် configure လုပ်ရမယ်။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("A solutions architect is setting up S3 Cross-Region Replication between two buckets. Which TWO are required? (Select TWO)",
        "ソリューションアーキテクトが 2 つのバケット間で S3 クロスリージョンレプリケーションを設定しています。必要なものはどれですか？（2 つ選択）",
        "Solutions architect က bucket ၂ ခုကြား S3 Cross-Region Replication set လုပ်နေတယ်။ မဖြစ်မနေ လိုတဲ့ ၂ ခုက ဘာတွေလဲ? (၂ ခု ရွေးပါ)"),
      options: ['Versioning enabled on both the source and destination buckets', 'Both buckets use the same storage class', 'An IAM role that grants S3 permission to replicate objects', 'Both buckets belong to the same AWS account', 'S3 Transfer Acceleration enabled on the destination'],
      correct: [0, 2],
      explanation: L("Replication requires versioning on both buckets and an IAM role that S3 assumes to read from the source and write to the destination. Buckets can be in different accounts and can use different storage classes; you can even choose a cheaper class for the replica.",
        "レプリケーションには両方のバケットでのバージョニングと、S3 が送信元から読み送信先へ書き込むために引き受ける IAM ロールが必要です。バケットは別アカウントでもよく、ストレージクラスも異なってよく、レプリカに安いクラスを選ぶこともできます。",
        "Replication အတွက် bucket ၂ ခုလုံးမှာ versioning နဲ့ source ကဖတ်ပြီး destination ကိုရေးဖို့ S3 assume လုပ်မယ့် IAM role လိုတယ်။ Bucket တွေက account မတူလည်းရ၊ storage class မတူလည်းရတယ်၊ replica အတွက် ဈေးပေါတဲ့ class တောင် ရွေးလို့ရတယ်။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("Customers around the world upload video files of several GB to a single S3 bucket in us-east-1, and uploads are slow and often fail midway. Which TWO actions improve upload speed and reliability? (Select TWO)",
        "世界中の顧客が数 GB の動画ファイルを us-east-1 の 1 つの S3 バケットにアップロードしており、アップロードが遅く途中でよく失敗します。アップロードの速度と信頼性を改善するアクションはどれですか？（2 つ選択）",
        "ကမ္ဘာအနှံ့က customer တွေက GB အနည်းငယ်ရှိတဲ့ video file တွေကို us-east-1 က S3 bucket တစ်ခုဆီ upload လုပ်တယ်၊ နှေးပြီး တစ်ဝက်မှာ မကြာခဏ fail ဖြစ်တယ်။ မြန်နှုန်းနဲ့ ယုံကြည်စိတ်ချရမှု တိုးစေမယ့် ၂ ခုက ဘာတွေလဲ? (၂ ခု ရွေးပါ)"),
      options: ['Enable S3 Transfer Acceleration on the bucket', 'Serve the uploads with CloudFront signed cookies', 'Use multipart upload in the client application', 'Change the bucket to S3 One Zone-IA', 'Enable S3 Object Lock'],
      correct: [0, 2],
      explanation: L("Transfer Acceleration routes uploads through the nearest edge location and the AWS backbone, and multipart upload sends parts in parallel and retries only failed parts. One Zone-IA changes storage cost and resilience, not network performance; signed cookies control access, not speed.",
        "Transfer Acceleration は最寄りのエッジロケーションと AWS バックボーンを経由してアップロードし、マルチパートアップロードはパートを並列に送信して失敗したパートだけ再送します。One Zone-IA は保存コストと耐障害性を変えるだけでネットワーク性能は変わらず、署名付き Cookie はアクセス制御であって速度とは無関係です。",
        "Transfer Acceleration က upload ကို အနီးဆုံး edge location နဲ့ AWS backbone ကနေ ပို့တယ်၊ multipart upload က part တွေကို parallel ပို့ပြီး fail တဲ့ part ကိုပဲ ပြန်ပို့တယ်။ One Zone-IA က storage cost နဲ့ resilience ကိုပဲ ပြောင်းတာ network performance မဟုတ်ဘူး၊ signed cookie က access ထိန်းတာပဲ မြန်နှုန်းနဲ့ မဆိုင်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['SAA-C03'],
      prompt: L("An EC2 instance uses an unencrypted EBS data volume. Company policy now requires encryption at rest for all volumes. How can the data be encrypted?",
        "EC2 インスタンスが暗号化されていない EBS データボリュームを使用しています。社内ポリシーで、すべてのボリュームに保存時の暗号化が必要になりました。どのようにデータを暗号化できますか？",
        "EC2 instance တစ်ခုက encrypt မလုပ်ထားတဲ့ EBS data volume သုံးနေတယ်။ အခု company policy အရ volume အားလုံးကို encryption at rest လုပ်ရမယ်။ Data ကို ဘယ်လို encrypt လုပ်မလဲ?"),
      options: ['Enable encryption directly on the existing volume in the console', 'Enable EBS encryption by default; existing volumes are encrypted automatically', 'Move the volume to an instance store volume', 'Create a snapshot, copy it with encryption enabled, create a new volume from the copy and swap it in'],
      correct: [3],
      explanation: L("An existing unencrypted volume cannot be encrypted in place; the supported path is snapshot, encrypted copy, new volume, then attach it in place of the old one. Encryption by default only affects volumes created after it is turned on, not existing ones.",
        "既存の暗号化されていないボリュームをその場で暗号化することはできず、スナップショット→暗号化コピー→新しいボリューム作成→古いボリュームと入れ替え、という手順になります。デフォルト暗号化は有効化後に作成されるボリュームにのみ適用され、既存のものには影響しません。",
        "Encrypt မလုပ်ထားတဲ့ volume ကို နေရာမှာတင် encrypt လုပ်လို့မရဘူး၊ snapshot -> encrypted copy -> volume အသစ် -> အဟောင်းနေရာမှာ attach ဆိုတဲ့ လမ်းကြောင်းပဲ ရှိတယ်။ Encryption by default က ဖွင့်ပြီးမှ ဆောက်တဲ့ volume တွေကိုပဲ သက်ရောက်ပြီး ရှိပြီးသား volume တွေကို မပြောင်းဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("A financial services company must store trade records in S3 so that no user, including the root user, can delete or overwrite them for 7 years. Which configuration meets this requirement?",
        "ある金融サービス企業は、ルートユーザーを含むどのユーザーも 7 年間は削除・上書きできないように、取引記録を S3 に保存する必要があります。この要件を満たす設定はどれですか？",
        "Financial services company တစ်ခုက trade record တွေကို root user အပါအဝင် ဘယ် user မှ ၇ နှစ်အတွင်း မဖျက်/overwrite မလုပ်နိုင်အောင် S3 မှာ သိမ်းရမယ်။ ဘယ် configuration က ကိုက်လဲ?"),
      options: ['S3 Object Lock in Governance mode with a 7-year retention period', 'S3 Object Lock in Compliance mode with a 7-year retention period', 'Versioning with MFA Delete enabled', 'A bucket policy that denies s3:DeleteObject to all IAM users'],
      correct: [1],
      explanation: L("Compliance mode prevents anyone, including root, from deleting a locked version or shortening its retention until the period ends. Governance mode can be bypassed by principals with s3:BypassGovernanceRetention, and MFA Delete or a bucket policy can be changed by the root user.",
        "コンプライアンスモードでは、保持期間が終わるまでルートを含む誰もロックされたバージョンを削除したり保持期間を短縮したりできません。ガバナンスモードは s3:BypassGovernanceRetention を持つプリンシパルが回避でき、MFA Delete やバケットポリシーはルートユーザーが変更できます。",
        "Compliance mode မှာ retention ကာလ မကုန်မချင်း root အပါအဝင် ဘယ်သူမှ lock ထားတဲ့ version ကို မဖျက်နိုင်၊ retention ကို မတိုနိုင်ဘူး။ Governance mode ကို s3:BypassGovernanceRetention ရှိတဲ့ principal က ကျော်နိုင်တယ်၊ MFA Delete နဲ့ bucket policy ကိုလည်း root user က ပြောင်းနိုင်တယ်။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("An application writes thousands of small objects per second to a bucket encrypted with SSE-KMS using a customer managed key. The team sees KMS throttling errors and high KMS request costs. What is the MOST effective fix while keeping KMS-based encryption?",
        "あるアプリケーションが、カスタマー管理キーを使う SSE-KMS で暗号化されたバケットに毎秒数千個の小さなオブジェクトを書き込んでいます。チームは KMS のスロットリングエラーと高い KMS リクエストコストに直面しています。KMS ベースの暗号化を維持しつつ最も効果的な対処はどれですか？",
        "Application တစ်ခုက customer managed key သုံးတဲ့ SSE-KMS bucket ဆီ တစ်စက္ကန့် object သေးသေး ထောင်ချီ ရေးနေတယ်။ Team က KMS throttling error နဲ့ KMS request cost မြင့်တာ တွေ့နေတယ်။ KMS-based encryption ကို ဆက်ထားရင်း အထိရောက်ဆုံး ဖြေရှင်းနည်းက ဘာလဲ?"),
      options: ['Enable S3 Bucket Keys for the bucket', 'Switch to SSE-C so that KMS is not called', 'Enable S3 Transfer Acceleration', 'Create a separate KMS key for every object prefix'],
      correct: [0],
      explanation: L("S3 Bucket Keys let S3 use a short-lived bucket-level key derived from the KMS key, cutting the number of KMS requests (and their cost and throttling) dramatically while still using SSE-KMS. SSE-C removes KMS entirely, which breaks the requirement and moves key management to the customer.",
        "S3 バケットキーを使うと、S3 は KMS キーから派生した短期間のバケットレベルのキーを使用するため、SSE-KMS のまま KMS リクエスト数（とそのコストやスロットリング）を大幅に削減できます。SSE-C は KMS を完全にやめるため要件を満たさず、鍵管理も利用者側に移ります。",
        "S3 Bucket Key က KMS key ကနေ ထုတ်ထားတဲ့ သက်တမ်းတိုတဲ့ bucket-level key ကို S3 သုံးစေလို့ SSE-KMS ကို ဆက်သုံးရင်း KMS request အရေအတွက် (cost နဲ့ throttling) ကို အများကြီး လျှော့ပေးတယ်။ SSE-C က KMS ကို လုံးဝ ဖယ်လိုက်တာမို့ requirement နဲ့ မကိုက်ဘဲ key စီမံတာကို customer ဘက် ရွှေ့သွားတယ်။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("A hospital stores medical images that are accessed about once per quarter, but when a doctor requests one it must be returned in milliseconds. The images must survive the loss of an Availability Zone. Which storage class is the MOST cost-effective?",
        "ある病院は四半期に 1 回程度アクセスされる医療画像を保存していますが、医師が要求したときはミリ秒で返す必要があります。画像はアベイラビリティーゾーンの喪失にも耐えなければなりません。最もコスト効率の高いストレージクラスはどれですか？",
        "ဆေးရုံတစ်ခုက သုံးလ တစ်ခါလောက်ပဲ access လုပ်တဲ့ medical image တွေ သိမ်းထားတယ်၊ ဒါပေမဲ့ ဆရာဝန်တောင်းရင် millisecond နဲ့ ပြန်ပေးရမယ်။ AZ တစ်ခု ပျက်လည်း image တွေ မပျောက်ရဘူး။ အကုန်ကျစရိတ် အသက်သာဆုံး storage class က ဘယ်ဟာလဲ?"),
      options: ['S3 One Zone-IA', 'S3 Glacier Flexible Retrieval with Expedited retrieval', 'S3 Glacier Instant Retrieval', 'S3 Standard'],
      correct: [2],
      explanation: L("Glacier Instant Retrieval gives millisecond access at a lower storage price than Standard-IA for data read about once a quarter, and it stores data across multiple AZs. One Zone-IA keeps data in a single AZ, and Expedited retrieval from Glacier Flexible Retrieval takes minutes, not milliseconds.",
        "Glacier Instant Retrieval は四半期に 1 回程度読むデータ向けに、Standard-IA より安い保存料金でミリ秒アクセスを提供し、複数 AZ にデータを保存します。One Zone-IA は単一 AZ にしか保存せず、Glacier Flexible Retrieval の迅速取り出しはミリ秒ではなく分単位かかります。",
        "Glacier Instant Retrieval က သုံးလတစ်ခါလောက်ဖတ်တဲ့ data အတွက် Standard-IA ထက် storage ဈေးပေါပြီး millisecond နဲ့ access ရတယ်၊ AZ အများကြီးမှာလည်း သိမ်းတယ်။ One Zone-IA က AZ တစ်ခုတည်းမှာပဲ သိမ်းတယ်၊ Glacier Flexible Retrieval ရဲ့ Expedited retrieval က millisecond မဟုတ်ဘဲ မိနစ်ပိုင်း ကြာတယ်။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("A machine learning team trains models on a 50 TB dataset stored in S3. Training jobs on hundreds of EC2 instances need a POSIX file system with sub-millisecond latency and hundreds of GB/s of throughput, and results should be written back to S3. Which solution is BEST?",
        "ある機械学習チームは、S3 に保存された 50 TB のデータセットでモデルを学習しています。数百台の EC2 インスタンス上の学習ジョブには、ミリ秒未満のレイテンシと数百 GB/s のスループットを持つ POSIX ファイルシステムが必要で、結果は S3 に書き戻す必要があります。最適なソリューションはどれですか？",
        "ML team တစ်ခုက S3 မှာသိမ်းထားတဲ့ 50 TB dataset နဲ့ model train လုပ်တယ်။ EC2 instance ရာချီပေါ်က training job တွေက millisecond အောက် latency နဲ့ GB/s ရာချီ throughput ရှိတဲ့ POSIX file system လိုပြီး result ကို S3 ဆီ ပြန်ရေးရမယ်။ အကောင်းဆုံး solution က ဘာလဲ?"),
      options: ['Amazon EFS with Elastic throughput', 'S3 File Gateway on an EC2 instance', 'Amazon FSx for Windows File Server', 'Amazon FSx for Lustre linked to the S3 bucket'],
      correct: [3],
      explanation: L("FSx for Lustre is built for HPC and ML: it delivers sub-millisecond latency and very high aggregate throughput, and a data repository association with S3 lazy-loads the dataset and exports results back. EFS is a good general shared file system, but it is not designed for this level of parallel HPC throughput.",
        "FSx for Lustre は HPC や ML 向けに設計されており、ミリ秒未満のレイテンシと非常に高い合計スループットを提供し、S3 とのデータリポジトリ関連付けでデータセットを遅延ロードし、結果を S3 にエクスポートできます。EFS は汎用の共有ファイルシステムとしては優秀ですが、このレベルの並列 HPC スループット向けではありません。",
        "FSx for Lustre က HPC နဲ့ ML အတွက် ဖန်တီးထားတာပါ၊ millisecond အောက် latency နဲ့ throughput အရမ်းမြင့်တယ်၊ S3 နဲ့ data repository association လုပ်ရင် dataset ကို လိုမှ load လုပ်ပြီး result ကို S3 ဆီ ပြန် export လုပ်နိုင်တယ်။ EFS က general shared file system အနေနဲ့ ကောင်းပေမဲ့ ဒီလောက် parallel HPC throughput အတွက် design မလုပ်ထားဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("Which THREE statements about S3 lifecycle rules and storage classes are correct? (Select THREE)",
        "S3 のライフサイクルルールとストレージクラスについて正しい説明はどれですか？（3 つ選択）",
        "S3 lifecycle rule နဲ့ storage class အကြောင်း မှန်တဲ့ အဆို ၃ ခုက ဘယ်ဟာတွေလဲ? (၃ ခု ရွေးပါ)"),
      options: ['Objects must be stored for at least 30 days before a lifecycle rule can transition them from S3 Standard to S3 Standard-IA', 'S3 Glacier Deep Archive has a 180-day minimum storage duration charge', 'S3 One Zone-IA stores data in at least three Availability Zones', 'Expedited retrieval is available for S3 Glacier Deep Archive', 'S3 Intelligent-Tiering does not charge retrieval fees'],
      correct: [0, 1, 4],
      explanation: L("Lifecycle transitions to Standard-IA or One Zone-IA require objects to be at least 30 days old, Deep Archive bills a 180-day minimum, and Intelligent-Tiering charges a monitoring fee but no retrieval fees. One Zone-IA uses a single AZ, and Expedited retrieval exists only for Glacier Flexible Retrieval, not Deep Archive.",
        "Standard-IA や One Zone-IA へのライフサイクル移行には作成から 30 日以上が必要で、Deep Archive は最低 180 日分が課金され、Intelligent-Tiering は監視料金はかかりますが取り出し料金はかかりません。One Zone-IA は単一 AZ を使い、迅速取り出しは Deep Archive ではなく Glacier Flexible Retrieval のみにあります。",
        "Standard-IA/One Zone-IA ကို lifecycle နဲ့ ရွှေ့ဖို့ object က ရက် ၃၀ အနည်းဆုံး ရှိရမယ်၊ Deep Archive က အနည်းဆုံး ရက် ၁၈၀ စာ ငွေကောက်တယ်၊ Intelligent-Tiering က monitoring fee ရှိပေမဲ့ retrieval fee မရှိဘူး။ One Zone-IA က AZ တစ်ခုတည်း သုံးတယ်၊ Expedited retrieval က Deep Archive မှာမဟုတ်ဘဲ Glacier Flexible Retrieval မှာပဲ ရှိတယ်။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("A company must migrate 200 TB from an on-premises NFS server to Amazon EFS within one week over an existing 10 Gbps AWS Direct Connect link. File metadata must be preserved, transfers must be verified, and incremental syncs must run until cutover. Which service is the BEST fit?",
        "ある企業は、既存の 10 Gbps AWS Direct Connect 回線を使い、オンプレミスの NFS サーバーから Amazon EFS へ 200 TB を 1 週間以内に移行する必要があります。ファイルのメタデータを保持し、転送を検証し、切り替えまで増分同期を実行する必要があります。最適なサービスはどれですか？",
        "Company တစ်ခုက ရှိပြီးသား 10 Gbps AWS Direct Connect line ကနေ on-premises NFS server ထဲက 200 TB ကို တစ်ပတ်အတွင်း Amazon EFS ဆီ ရွှေ့ရမယ်။ File metadata ကို ထိန်းရမယ်၊ transfer ကို verify လုပ်ရမယ်၊ cutover မတိုင်ခင်ထိ incremental sync လုပ်ရမယ်။ အသင့်တော်ဆုံး service က ဘယ်ဟာလဲ?"),
      options: ['AWS Snowball Edge Storage Optimized devices', 'AWS DataSync with an agent on premises', 'S3 Transfer Acceleration followed by an S3-to-EFS copy script', 'Volume Gateway in cached mode'],
      correct: [1],
      explanation: L("At 10 Gbps, 200 TB takes roughly two days, so an online transfer fits the week; DataSync copies NFS to EFS directly, preserves metadata, verifies data and schedules incremental runs. Snowball Edge adds shipping time and does not provide repeated incremental syncs until cutover.",
        "10 Gbps なら 200 TB は約 2 日で転送できるため、オンライン転送で 1 週間に収まります。DataSync は NFS から EFS へ直接コピーし、メタデータを保持し、データを検証し、増分実行をスケジュールできます。Snowball Edge は配送時間がかかり、切り替えまで繰り返し増分同期することもできません。",
        "10 Gbps ဆိုရင် 200 TB ကို ၂ ရက်လောက်နဲ့ ပို့နိုင်လို့ online transfer နဲ့ တစ်ပတ်အတွင်း ပြီးနိုင်တယ်၊ DataSync က NFS ကနေ EFS ဆီ တိုက်ရိုက် ကူးပြီး metadata ထိန်း၊ data verify လုပ်၊ incremental run တွေကို schedule လုပ်ပေးတယ်။ Snowball Edge က ပို့ဆောင်ချိန် ပိုကြာပြီး cutover မတိုင်ခင် incremental sync ထပ်ခါထပ်ခါ မလုပ်ပေးနိုင်ဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['SAA-C03'],
      prompt: L("A bucket stores confidential reports. Requirements: requests must use HTTPS, and objects may be read only through a specific S3 gateway VPC endpoint. Which TWO actions meet these requirements? (Select TWO)",
        "あるバケットには機密レポートが保存されています。要件：リクエストは HTTPS を使うこと、オブジェクトは特定の S3 ゲートウェイ VPC エンドポイント経由でのみ読み取れること。これらの要件を満たすアクションはどれですか？（2 つ選択）",
        "Bucket တစ်ခုမှာ လျှို့ဝှက် report တွေ သိမ်းထားတယ်။ Requirement - request တွေက HTTPS ဖြစ်ရမယ်၊ object တွေကို သတ်မှတ်ထားတဲ့ S3 gateway VPC endpoint ကနေပဲ ဖတ်ခွင့်ရှိရမယ်။ ကိုက်ညီတဲ့ ၂ ခုက ဘာတွေလဲ? (၂ ခု ရွေးပါ)"),
      options: ['Enable ACLs and grant read access to the VPC', 'Add a bucket policy that denies requests when aws:SecureTransport is false', 'Enable S3 Transfer Acceleration', 'Add a bucket policy that denies s3:GetObject unless aws:SourceVpce equals the endpoint ID', 'Encrypt objects with SSE-C'],
      correct: [1, 3],
      explanation: L("Bucket policy conditions enforce both rules: deny when aws:SecureTransport is false forces HTTPS, and deny unless aws:SourceVpce matches restricts reads to that endpoint. ACLs cannot reference a VPC and are disabled by default, and SSE-C is about who holds the encryption key, not about network path.",
        "バケットポリシーの条件で両方を強制できます。aws:SecureTransport が false なら拒否して HTTPS を強制し、aws:SourceVpce が一致しなければ拒否して読み取りをそのエンドポイントに限定します。ACL は VPC を参照できずデフォルトで無効であり、SSE-C は誰が暗号鍵を持つかの話でネットワーク経路とは無関係です。",
        "Bucket policy condition နဲ့ rule ၂ ခုလုံးကို အတင်းလုပ်ခိုင်းနိုင်တယ် - aws:SecureTransport false ဆို deny လုပ်ရင် HTTPS အတင်းသုံးရမယ်၊ aws:SourceVpce မကိုက်ရင် deny လုပ်ရင် အဲ့ endpoint ကနေပဲ ဖတ်ရမယ်။ ACL က VPC ကို ရည်ညွှန်းလို့မရဘဲ default ပိတ်ထားတယ်၊ SSE-C က encryption key ဘယ်သူကိုင်လဲ ဆိုတာပဲ network လမ်းကြောင်းနဲ့ မဆိုင်ဘူး။"),
    },
  ],
  flashcards: [
    { term: 'S3 object key',
      definition: L("The full unique name of an object inside a bucket, including any prefixes such as folder-like paths.", "バケット内でオブジェクトを一意に識別する完全な名前で、フォルダのようなプレフィックスも含みます。", "Bucket ထဲမှာ object ကို unique ဖြစ်စေတဲ့ နာမည်အပြည့်ပါ၊ folder လိုပုံစံ prefix တွေလည်း ပါတယ်။"),
      example: L("In s3://acme-media/reports/2026/q1.pdf the key is reports/2026/q1.pdf.", "s3://acme-media/reports/2026/q1.pdf のキーは reports/2026/q1.pdf です。", "s3://acme-media/reports/2026/q1.pdf မှာ key က reports/2026/q1.pdf ပါ။") },
    { term: 'S3 Intelligent-Tiering',
      definition: L("A storage class that automatically moves objects between access tiers based on usage, with a small monitoring fee and no retrieval fees.", "使用状況に応じてオブジェクトを自動的にアクセス階層間で移動するストレージクラスで、少額の監視料金のみで取り出し料金はかかりません。", "အသုံးပြုမှုအလိုက် object တွေကို access tier ကြား အလိုအလျောက် ရွှေ့ပေးတဲ့ storage class ပါ၊ monitoring fee နည်းနည်းပဲ ကျပြီး retrieval fee မရှိဘူး။"),
      example: L("A data lake whose popular files change every month uses Intelligent-Tiering instead of guessing lifecycle days.", "人気のファイルが毎月変わるデータレイクでは、ライフサイクルの日数を推測する代わりに Intelligent-Tiering を使います。", "လူကြိုက်များတဲ့ file တွေ လတိုင်းပြောင်းနေတဲ့ data lake မှာ lifecycle ရက်ကို ခန့်မှန်းမယ့်အစား Intelligent-Tiering သုံးတယ်။") },
    { term: 'Lifecycle configuration',
      definition: L("Rules that automatically transition objects to cheaper storage classes or expire them after a set number of days.", "設定した日数の経過後に、オブジェクトを安いストレージクラスへ自動移行したり削除したりするルールです。", "သတ်မှတ်ရက်ပြည့်ရင် object တွေကို ဈေးပေါတဲ့ storage class ကို အလိုအလျောက် ရွှေ့တာ ဒါမှမဟုတ် ဖျက်တာ လုပ်တဲ့ rule တွေပါ။"),
      example: L("Move logs/ to Standard-IA after 30 days, to Deep Archive after 365 days, delete after 7 years.", "logs/ を 30 日後に Standard-IA、365 日後に Deep Archive へ移し、7 年後に削除します。", "logs/ ကို ရက် ၃၀ မှာ Standard-IA၊ ရက် ၃၆၅ မှာ Deep Archive ကို ရွှေ့ပြီး ၇ နှစ်မှာ ဖျက်တယ်။") },
    { term: 'Delete marker',
      definition: L("A placeholder that S3 creates when you delete an object in a versioned bucket without specifying a version ID; removing it restores the object.", "バージョニングされたバケットでバージョン ID を指定せずに削除したときに S3 が作るプレースホルダーで、これを削除するとオブジェクトが復元されます。", "Versioning ဖွင့်ထားတဲ့ bucket မှာ version ID မပါဘဲ ဖျက်ရင် S3 က ဖန်တီးတဲ့ placeholder ပါ၊ အဲ့ဒါကို ဖယ်လိုက်ရင် object ပြန်ရတယ်။"),
      example: L("An intern runs aws s3 rm on a report; the admin deletes the marker and the report is back.", "インターンがレポートに aws s3 rm を実行しても、管理者が削除マーカーを消せばレポートは元に戻ります。", "Intern က report ကို aws s3 rm လုပ်မိလည်း admin က delete marker ကို ဖျက်လိုက်ရင် report ပြန်ပေါ်လာတယ်။") },
    { term: 'S3 Object Lock',
      definition: L("A WORM feature that prevents object versions from being deleted or overwritten for a retention period (Governance or Compliance mode) or under a legal hold.", "保持期間中（ガバナンスまたはコンプライアンスモード）やリーガルホールド中に、オブジェクトのバージョンの削除・上書きを防ぐ WORM 機能です。", "Retention ကာလ (Governance သို့ Compliance mode) သို့ legal hold အတွင်း object version တွေကို ဖျက်/overwrite မလုပ်နိုင်အောင် ကာကွယ်တဲ့ WORM feature ပါ။"),
      example: L("A bank locks trade confirmations in Compliance mode for 7 years so even root cannot delete them.", "銀行は取引確認書をコンプライアンスモードで 7 年間ロックし、ルートでも削除できないようにします。", "ဘဏ်တစ်ခုက trade confirmation တွေကို Compliance mode နဲ့ ၇ နှစ် lock လုပ်ထားလို့ root တောင် မဖျက်နိုင်ဘူး။") },
    { term: 'SSE-KMS',
      definition: L("Server-side encryption of S3 objects with AWS KMS keys, giving key policies, rotation control and CloudTrail auditing of key usage.", "AWS KMS キーを使う S3 オブジェクトのサーバー側暗号化で、鍵ポリシー、ローテーション制御、CloudTrail による鍵使用の監査が可能です。", "AWS KMS key နဲ့ S3 object တွေကို server-side encrypt လုပ်တာပါ၊ key policy၊ rotation ထိန်းချုပ်မှု၊ CloudTrail နဲ့ key သုံးမှု audit ရတယ်။"),
      example: L("Auditors want a log of who decrypted payroll files, so the bucket uses SSE-KMS with a customer managed key.", "監査人が誰が給与ファイルを復号したかの記録を求めるため、バケットはカスタマー管理キーの SSE-KMS を使います。", "Payroll file တွေကို ဘယ်သူ decrypt လုပ်လဲ log ကို auditor က လိုချင်လို့ bucket က customer managed key နဲ့ SSE-KMS သုံးတယ်။") },
    { term: 'Presigned URL',
      definition: L("A time-limited URL signed with someone's credentials that lets anyone holding it download or upload a specific S3 object.", "誰かの認証情報で署名された期限付き URL で、それを持つ人は特定の S3 オブジェクトをダウンロード／アップロードできます。", "တစ်ယောက်ယောက်ရဲ့ credential နဲ့ sign လုပ်ထားတဲ့ အချိန်အကန့်အသတ်ရှိ URL ပါ၊ URL ရှိသူက S3 object တစ်ခုကို download/upload လုပ်နိုင်တယ်။"),
      example: L("An e-commerce app gives a customer a 10-minute link to download their receipt from a private bucket.", "EC アプリが顧客に、プライベートバケットから領収書をダウンロードできる 10 分間有効なリンクを渡します。", "E-commerce app က customer ကို private bucket ထဲက သူ့ receipt ကို download လုပ်ဖို့ ၁၀ မိနစ် link ပေးတယ်။") },
    { term: 'Instance store',
      definition: L("Temporary block storage physically attached to the EC2 host, offering very high IOPS; data is lost when the instance stops or terminates.", "EC2 ホストに物理的に接続された一時的なブロックストレージで、非常に高い IOPS を提供しますが、インスタンスの停止や終了でデータが失われます。", "EC2 host မှာ တကယ်တပ်ထားတဲ့ ယာယီ block storage ပါ၊ IOPS အရမ်းမြင့်ပေမဲ့ instance stop/terminate လုပ်ရင် data ပျောက်တယ်။"),
      example: L("A video transcoding job uses instance store as scratch space and writes final files to S3.", "動画変換ジョブはインスタンスストアを一時領域として使い、完成したファイルを S3 に書き込みます。", "Video transcoding job က instance store ကို scratch space အဖြစ်သုံးပြီး ပြီးသွားတဲ့ file တွေကို S3 ဆီ ရေးတယ်။") },
    { term: 'Amazon FSx for Lustre',
      definition: L("A managed high-performance parallel file system for HPC and ML workloads, with sub-millisecond latency and native S3 integration.", "HPC や ML ワークロード向けのマネージドな高性能並列ファイルシステムで、ミリ秒未満のレイテンシとネイティブな S3 連携を備えます。", "HPC နဲ့ ML workload အတွက် managed high-performance parallel file system ပါ၊ millisecond အောက် latency နဲ့ S3 integration ပါတယ်။"),
      example: L("A genomics lab links FSx for Lustre to an S3 bucket so 500 compute nodes can process sequences in parallel.", "ゲノム研究所は FSx for Lustre を S3 バケットに関連付け、500 台の計算ノードで配列を並列処理します。", "Genomics lab တစ်ခုက FSx for Lustre ကို S3 bucket နဲ့ချိတ်ပြီး compute node ၅၀၀ နဲ့ sequence တွေကို parallel process လုပ်တယ်။") },
    { term: 'AWS Storage Gateway',
      definition: L("A hybrid service that lets on-premises applications use AWS storage through file (NFS/SMB), volume (iSCSI) or virtual tape interfaces with a local cache.", "オンプレミスのアプリケーションが、ローカルキャッシュ付きでファイル（NFS/SMB）、ボリューム（iSCSI）、仮想テープのインターフェースを通じて AWS ストレージを使えるハイブリッドサービスです。", "On-premises application တွေကို local cache နဲ့အတူ file (NFS/SMB)၊ volume (iSCSI)၊ virtual tape interface ကနေ AWS storage သုံးခွင့်ပေးတဲ့ hybrid service ပါ။"),
      example: L("A factory keeps its file server workflow but stores files in S3 through an S3 File Gateway.", "工場は既存のファイルサーバーの運用を続けながら、S3 File Gateway を通じてファイルを S3 に保存します。", "စက်ရုံတစ်ခုက file server workflow ကို ဆက်သုံးရင်း S3 File Gateway ကနေ file တွေကို S3 မှာ သိမ်းတယ်။") },
  ],
};
