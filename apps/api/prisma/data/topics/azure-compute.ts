import { L, type SeedTopic } from '../types.js';

export const topic: SeedTopic = {
  slug: 'azure-compute',
  icon: 'Server',
  level: 'ASSOCIATE',
  exams: ['AZ-900', 'AZ-104'],
  name: L("Azure Compute: VMs, Scale Sets, App Service, Containers & Functions", "Azure コンピューティング：VM・スケールセット・App Service・コンテナー・Functions", "Azure Compute- VM၊ Scale Set၊ App Service၊ Container နဲ့ Functions"),
  description: L(
    "Virtual Machines in depth (sizes, disks, states and billing, extensions, secure access), availability sets and zones, VM Scale Sets, App Service, containers (ACI, Container Apps, AKS, ACR), Azure Functions and how to choose the right compute service.",
    "Virtual Machines の詳細（サイズ、ディスク、状態と課金、拡張機能、安全な接続）、可用性セットとゾーン、VM Scale Sets、App Service、コンテナー（ACI・Container Apps・AKS・ACR）、Azure Functions、そして適切なコンピューティングサービスの選び方を学びます。",
    "Virtual Machine ကို အသေးစိတ် (size၊ disk၊ state နဲ့ billing၊ extension၊ လုံခြုံတဲ့ connection)၊ Availability Set နဲ့ Zone၊ VM Scale Set၊ App Service၊ Container (ACI၊ Container Apps၊ AKS၊ ACR)၊ Azure Functions နဲ့ ဘယ် compute service ကို ရွေးရမလဲ ဆိုတာ လေ့လာမယ်။",
  ),
  lesson: {
    minutes: 25,
    objectives: [
      L("Read a VM size name such as `D4s_v5`, pick the right series, and choose between managed disk types and host caching options.",
        "`D4s_v5` のような VM サイズ名を読み解き、適切なシリーズを選び、マネージドディスクの種類とホストキャッシュを選択できる。",
        "`D4s_v5` လို VM size နာမည်ကို ဖတ်တတ်ပြီး သင့်တော်တဲ့ series၊ managed disk အမျိုးအစားနဲ့ host caching ကို ရွေးနိုင်မယ်။"),
      L("Explain VM power states and billing, especially **Stopped** vs **Stopped (deallocated)**, and resize a VM safely.",
        "VM の電源状態と課金、特に **Stopped** と **Stopped (deallocated)** の違いを説明し、VM を安全にサイズ変更できる。",
        "VM power state နဲ့ billing ကို ရှင်းပြနိုင်မယ်၊ အထူးသဖြင့် **Stopped** နဲ့ **Stopped (deallocated)** ကွာခြားချက်ကို သိပြီး VM ကို လုံခြုံစွာ resize လုပ်နိုင်မယ်။"),
      L("Connect to and troubleshoot VMs securely with Bastion, Just-In-Time access, extensions, boot diagnostics and serial console.",
        "Bastion、Just-In-Time アクセス、拡張機能、ブート診断、シリアルコンソールを使って VM に安全に接続しトラブルシュートできる。",
        "Bastion၊ Just-In-Time access၊ extension၊ boot diagnostics၊ serial console တွေနဲ့ VM ကို လုံခြုံစွာ ချိတ်ဆက်ပြီး troubleshoot လုပ်နိုင်မယ်။"),
      L("Design for availability with availability sets (fault/update domains) and availability zones, and state the SLA for each.",
        "可用性セット（障害ドメイン・更新ドメイン）と可用性ゾーンで可用性を設計し、それぞれの SLA を説明できる。",
        "Availability Set (fault/update domain) နဲ့ Availability Zone သုံးပြီး availability ကို design လုပ်နိုင်ပြီး တစ်ခုချင်းစီရဲ့ SLA ကို ပြောနိုင်မယ်။"),
      L("Configure VM Scale Sets with autoscale rules and scale-in policies, and App Service with tiers, slots and scaling.",
        "VM Scale Sets の自動スケールルールとスケールインポリシー、App Service の価格レベル・スロット・スケーリングを構成できる。",
        "VM Scale Set ကို autoscale rule နဲ့ scale-in policy တွေနဲ့ configure လုပ်နိုင်ပြီး App Service ကို tier၊ slot၊ scaling တွေနဲ့ စီမံနိုင်မယ်။"),
      L("Choose between VMs, App Service, ACI, Container Apps, AKS and Azure Functions for a given scenario.",
        "シナリオに応じて VM、App Service、ACI、Container Apps、AKS、Azure Functions を使い分けられる。",
        "Scenario တစ်ခုအတွက် VM၊ App Service၊ ACI၊ Container Apps၊ AKS၊ Azure Functions ထဲက ဘယ်ဟာ သင့်တော်လဲ ရွေးနိုင်မယ်။"),
    ],
    sections: [
      {
        id: "vm-basics",
        title: L("Virtual Machines: sizes, series and images", "Virtual Machines：サイズ、シリーズ、イメージ", "Virtual Machine- size၊ series နဲ့ image"),
        blocks: [
          { type: 'p', text: L(
            "An **Azure Virtual Machine (VM)** is IaaS: Microsoft gives you virtual hardware (vCPU, memory, disks, network card) and you own everything from the operating system upward: patching, antivirus, software, firewall inside the OS. Think of renting an **empty apartment**: the building, water and electricity are the landlord's job, but furniture, locks on your cupboards and cleaning are yours. When you create a VM you choose six things: **region**, **image** (OS), **size** (CPU/RAM), **disks**, **network** (VNet, subnet, NSG, public IP or not) and **authentication** (SSH key or password).",
            "**Azure Virtual Machine（VM）** は IaaS です。Microsoft が仮想ハードウェア（vCPU、メモリ、ディスク、NIC）を提供し、OS より上（パッチ適用、ウイルス対策、ソフトウェア、OS 内のファイアウォール）はすべて利用者の責任です。**家具なしの賃貸マンション**を想像してください。建物・水道・電気は大家さんの仕事ですが、家具や戸棚の鍵、掃除は自分の仕事です。VM 作成時には、**リージョン**、**イメージ**（OS）、**サイズ**（CPU/メモリ）、**ディスク**、**ネットワーク**（VNet、サブネット、NSG、パブリック IP の有無）、**認証**（SSH キーまたはパスワード）の 6 つを選びます。",
            "**Azure Virtual Machine (VM)** ဆိုတာ IaaS ပါ။ Microsoft က virtual hardware (vCPU၊ memory၊ disk၊ network card) ကို ပေးပြီး OS ကစပြီး အပေါ်ပိုင်းအားလုံး (patch တင်တာ၊ antivirus၊ software၊ OS ထဲက firewall) ကို ကိုယ်တိုင် တာဝန်ယူရတယ်။ **ပရိဘောဂမပါတဲ့ အခန်းငှား** တာနဲ့ တူတယ်။ အဆောက်အအုံ၊ ရေ၊ မီး က အိမ်ရှင်တာဝန်၊ ပရိဘောဂ၊ ဗီရိုသော့၊ သန့်ရှင်းရေး က ကိုယ့်တာဝန်ပါ။ VM ဆောက်တဲ့အခါ **region**၊ **image** (OS)၊ **size** (CPU/RAM)၊ **disk**၊ **network** (VNet၊ subnet၊ NSG၊ public IP ပါမပါ)၊ **authentication** (SSH key သို့မဟုတ် password) ဆိုတဲ့ ၆ ခုကို ရွေးရတယ်။"
          ) },
          { type: 'p', text: L(
            "VM size names look cryptic but follow a pattern: **family + vCPU count + feature letters + version**. In `Standard_D4s_v5`, **D** is the general-purpose family, **4** is the number of vCPUs, **s** means it supports Premium SSD storage, and **v5** is the hardware generation. Other common letters: **a** = AMD CPU, **p** = ARM CPU, **d** = includes a local temp disk, **m** = more memory, **l** = less memory (cheaper). So `E8ads_v5` is a memory-optimized, 8 vCPU, AMD, local-disk, Premium-capable, v5 VM.",
            "VM サイズ名は暗号のように見えますが、**ファミリ + vCPU 数 + 機能文字 + バージョン**というルールがあります。`Standard_D4s_v5` では、**D** は汎用ファミリ、**4** は vCPU 数、**s** は Premium SSD 対応、**v5** はハードウェア世代です。その他の主な文字：**a** = AMD CPU、**p** = ARM CPU、**d** = ローカル一時ディスクあり、**m** = メモリ多め、**l** = メモリ少なめ（安価）。つまり `E8ads_v5` は、メモリ最適化・8 vCPU・AMD・ローカルディスクあり・Premium 対応・v5 の VM です。",
            "VM size နာမည်တွေက ရှုပ်သလိုထင်ရပေမယ့် **family + vCPU အရေအတွက် + feature စာလုံး + version** ဆိုတဲ့ ပုံစံရှိတယ်။ `Standard_D4s_v5` မှာ **D** က general-purpose family၊ **4** က vCPU ၄ ခု၊ **s** က Premium SSD သုံးလို့ရတယ်၊ **v5** က hardware generation ပါ။ တခြား အသုံးများတဲ့ စာလုံးတွေ- **a** = AMD CPU၊ **p** = ARM CPU၊ **d** = local temp disk ပါတယ်၊ **m** = memory ပိုများ၊ **l** = memory နည်း (ဈေးသက်သာ)။ ဒါကြောင့် `E8ads_v5` ဆိုတာ memory-optimized၊ vCPU 8 ခု၊ AMD၊ local disk ပါ၊ Premium သုံးလို့ရတဲ့ v5 VM ပါ။"
          ) },
          { type: 'diagram', text:
`  Standard_ D  4  s  _v5
            |  |  |   |
            |  |  |   +-- Version: hardware generation (v5)
            |  |  +------ Feature: s = Premium SSD capable
            |  +--------- vCPU count: 4
            +------------ Family: D = general purpose`,
            caption: L("How to read a VM size name", "VM サイズ名の読み方", "VM size နာမည်ကို ဖတ်နည်း") },
          { type: 'table',
            head: [L("Series", "シリーズ", "Series အမျိုးအစား"), L("Optimized for", "最適化の対象", "ဘာအတွက် အကောင်းဆုံးလဲ"), L("Typical workload", "代表的なワークロード", "ပုံမှန် workload")],
            rows: [
              [L("B", "B シリーズ", "B series အမျိုးအစား"), L("Burstable (earns CPU credits when idle)", "バースト可能（アイドル時に CPU クレジットを貯める）", "Burstable (idle ဖြစ်ချိန် CPU credit စုတယ်)"), L("Dev/test, small web servers, labs", "開発/テスト、小規模 Web サーバー、ラボ", "Dev/test၊ web server အသေး၊ lab")],
              [L("D", "D シリーズ", "D series အမျိုးအစား"), L("General purpose (balanced CPU:RAM)", "汎用（CPU とメモリのバランス）", "General purpose (CPU နဲ့ RAM မျှတ)"), L("Most business apps, app servers", "一般的な業務アプリ、アプリサーバー", "Business app အများစု၊ app server")],
              [L("E", "E シリーズ", "E series အမျိုးအစား"), L("Memory optimized", "メモリ最適化", "Memory optimized (memory အများ)"), L("Relational databases, caches", "リレーショナル DB、キャッシュ", "Relational database၊ cache")],
              [L("F", "F シリーズ", "F series အမျိုးအစား"), L("Compute optimized (high CPU:RAM)", "コンピューティング最適化（CPU 比率が高い）", "Compute optimized (CPU အချိုးများ)"), L("Batch processing, game servers", "バッチ処理、ゲームサーバー", "Batch processing၊ game server")],
              [L("L", "L シリーズ", "L series အမျိုးအစား"), L("Storage optimized (fast local NVMe)", "ストレージ最適化（高速ローカル NVMe）", "Storage optimized (မြန်တဲ့ local NVMe)"), L("NoSQL, big data, data warehousing", "NoSQL、ビッグデータ、DWH", "NoSQL၊ big data၊ data warehouse")],
              [L("M", "M シリーズ", "M series အမျိုးအစား"), L("Very large memory", "超大容量メモリ", "Memory အလွန်ကြီး"), L("SAP HANA", "SAP HANA などの大規模 DB", "SAP HANA လို database အကြီးစား")],
              [L("N / H", "N / H シリーズ", "N / H series အမျိုးအစား"), L("GPU (N) and HPC (H)", "GPU（N）と HPC（H）", "GPU (N) နဲ့ HPC (H)"), L("AI training, rendering, simulations", "AI 学習、レンダリング、シミュレーション", "AI training၊ rendering၊ simulation")],
            ] },
          { type: 'p', text: L(
            "The **image** is the template for the OS disk. You can use a **Marketplace** image (Ubuntu, Windows Server, RHEL, or vendor appliances), your own **managed image**, or an image version stored in an **Azure Compute Gallery** (the enterprise option: versioning and replication of 'golden images' to many regions). New VMs use **Generation 2** images and **Trusted launch** (Secure Boot + vTPM) by default.",
            "**イメージ**は OS ディスクのテンプレートです。**Marketplace** イメージ（Ubuntu、Windows Server、RHEL、ベンダーアプライアンスなど）、独自の**マネージドイメージ**、または **Azure Compute Gallery** に保存したイメージバージョン（バージョン管理と複数リージョンへの「ゴールデンイメージ」複製ができる企業向けの選択肢）を使えます。新しい VM は既定で **Generation 2** イメージと **Trusted launch**（セキュアブート + vTPM）を使用します。",
            "**Image** ဆိုတာ OS disk ရဲ့ template ပါ။ **Marketplace** image (Ubuntu၊ Windows Server၊ RHEL၊ vendor appliance)၊ ကိုယ်ပိုင် **managed image**၊ ဒါမှမဟုတ် **Azure Compute Gallery** ထဲက image version (version စီမံတာ၊ 'golden image' ကို region အများကြီးဆီ replicate လုပ်တာ ရတဲ့ enterprise ရွေးချယ်မှု) ကို သုံးနိုင်တယ်။ VM အသစ်တွေက default အနေနဲ့ **Generation 2** image နဲ့ **Trusted launch** (Secure Boot + vTPM) ကို သုံးတယ်။"
          ) },
          { type: 'callout', tone: 'tip', text: L(
            "Ways to pay less for VMs: **Reserved Instances** or **Savings plan** (commit 1 or 3 years for steady workloads), **Spot VMs** (deep discount, but Azure can evict them at any time: only for interruptible jobs), **Azure Hybrid Benefit** (reuse existing Windows Server/SQL Server licenses), and simply **deallocating** VMs when nobody uses them.",
            "VM コストを下げる方法：**Reserved Instances** または **Savings plan**（安定したワークロード向けに 1 年/3 年のコミット）、**Spot VMs**（大幅割引ですが Azure がいつでも削除する可能性があるため中断可能なジョブ専用）、**Azure Hybrid Benefit**（既存の Windows Server/SQL Server ライセンスの再利用）、そして使わないときに VM を**割り当て解除**することです。",
            "VM ကုန်ကျစရိတ် လျှော့ဖို့ နည်းလမ်းတွေ- **Reserved Instances** ဒါမှမဟုတ် **Savings plan** (တည်ငြိမ်တဲ့ workload အတွက် ၁ နှစ်/၃ နှစ် commit)၊ **Spot VMs** (ဈေးအရမ်းလျှော့ပေမယ့် Azure က အချိန်မရွေး evict လုပ်နိုင်လို့ ရပ်သွားလည်း ရတဲ့ job အတွက်ပဲ)၊ **Azure Hybrid Benefit** (ရှိပြီးသား Windows Server/SQL Server license ကို ပြန်သုံး)၊ နောက်ပြီး မသုံးတဲ့အချိန် VM ကို **deallocate** လုပ်ထားတာပါ။"
          ) },
        ],
      },
      {
        id: "vm-disks",
        title: L("VM disks: OS, data, temp and managed disk types", "VM ディスク：OS・データ・一時ディスクとマネージドディスクの種類", "VM disk- OS၊ data၊ temp နဲ့ managed disk အမျိုးအစားများ"),
        blocks: [
          { type: 'p', text: L(
            "A VM has three kinds of disks. Imagine an office desk: the **OS disk** is the computer's built-in drive with Windows or Linux on it, **data disks** are filing cabinets you add for business documents, and the **temp disk** is a whiteboard: fast and handy, but wiped clean when the cleaner comes. OS and data disks are **managed disks**: durable block storage (stored as three copies by Azure) that survives reboots and deallocation.",
            "VM には 3 種類のディスクがあります。オフィスの机にたとえると、**OS ディスク**は Windows や Linux が入った PC 内蔵ドライブ、**データディスク**は業務書類用に追加するキャビネット、**一時ディスク**はホワイトボードです。速くて便利ですが、清掃が来ると消されてしまいます。OS ディスクとデータディスクは**マネージドディスク**で、再起動や割り当て解除後も残る耐久性のあるブロックストレージです（Azure が 3 つのコピーを保持します）。",
            "VM မှာ disk အမျိုးအစား ၃ မျိုးရှိတယ်။ ရုံးစားပွဲနဲ့ ဥပမာပေးရရင် **OS disk** က Windows/Linux ထည့်ထားတဲ့ ကွန်ပျူတာထဲက drive၊ **data disk** က လုပ်ငန်းစာရွက်စာတမ်းအတွက် ထပ်ထည့်တဲ့ ဖိုင်ဗီရို၊ **temp disk** က whiteboard ပါ။ မြန်ပြီး အသုံးဝင်ပေမယ့် သန့်ရှင်းရေးသမား လာရင် ဖျက်ပစ်ခံရတယ်။ OS disk နဲ့ data disk တွေက **managed disk** ဖြစ်ပြီး reboot လုပ်လည်း၊ deallocate လုပ်လည်း မပျောက်တဲ့ ခိုင်မာတဲ့ block storage (Azure က copy ၃ ခု သိမ်းထားတယ်) ပါ။"
          ) },
          { type: 'list', items: [
            L("**OS disk**: holds the boot volume (`C:` on Windows, `/dev/sda` on Linux). Created from the image.",
              "**OS ディスク**：ブートボリューム（Windows は `C:`、Linux は `/dev/sda`）。イメージから作成されます。",
              "**OS disk**- boot volume ကို သိမ်းတယ် (Windows မှာ `C:`၊ Linux မှာ `/dev/sda`)။ Image ကနေ ဆောက်တယ်။"),
            L("**Data disks**: attached for application data and databases. The maximum number depends on the VM size; each gets a LUN and must be initialized and formatted inside the OS.",
              "**データディスク**：アプリデータや DB 用に接続します。最大数は VM サイズで決まり、各ディスクに LUN が割り当てられ、OS 内で初期化・フォーマットが必要です。",
              "**Data disk**- application data နဲ့ database အတွက် attach လုပ်တယ်။ အများဆုံးအရေအတွက်က VM size ပေါ်မူတည်တယ်။ တစ်ခုချင်းစီမှာ LUN ရှိပြီး OS ထဲမှာ initialize/format လုပ်ပေးရတယ်။"),
            L("**Temp disk**: local storage on the physical host (`D:` on Windows, usually mounted at `/mnt` on Linux). Great for page/swap files. Its data is **lost** when the VM is deallocated, redeployed, resized to another host or moved during maintenance. Only sizes with a **d** in the name (e.g. `D4ds_v5`) guarantee one.",
              "**一時ディスク**：物理ホスト上のローカルストレージ（Windows は `D:`、Linux は通常 `/mnt` にマウント）。ページファイルやスワップに最適です。VM の割り当て解除、再デプロイ、別ホストへのサイズ変更、メンテナンスでの移動時にデータは**失われます**。名前に **d** があるサイズ（例：`D4ds_v5`）のみ確実に付いています。",
              "**Temp disk**- physical host ပေါ်က local storage (Windows မှာ `D:`၊ Linux မှာ များသောအားဖြင့် `/mnt`)။ Page file/swap အတွက် ကောင်းတယ်။ VM ကို deallocate၊ redeploy၊ host တခြားကို resize၊ maintenance ကြောင့် ရွှေ့ရင် data **ပျောက်** တယ်။ နာမည်မှာ **d** ပါတဲ့ size (ဥပမာ `D4ds_v5`) တွေမှာပဲ သေချာပါတယ်။"),
          ] },
          { type: 'table',
            head: [L("Disk type", "ディスクの種類", "Disk အမျိုးအစား"), L("Best for", "最適な用途", "ဘာအတွက်လဲ"), L("OS disk?", "OS ディスク可？", "OS disk လုပ်လို့ရလား?"), L("Key point", "ポイント", "အဓိကအချက်")],
            rows: [
              [L("Standard HDD", "Standard HDD ディスク", "Standard HDD disk အမျိုးအစား"), L("Backups, rarely used dev/test", "バックアップ、使用頻度の低い開発/テスト", "Backup၊ သိပ်မသုံးတဲ့ dev/test"), L("Yes", "はい", "ရတယ်"), L("Cheapest, variable latency", "最安、レイテンシが不安定", "အသက်သာဆုံး၊ latency မတည်ငြိမ်")],
              [L("Standard SSD", "Standard SSD ディスク", "Standard SSD disk အမျိုးအစား"), L("Web servers, light production, dev/test", "Web サーバー、軽い本番、開発/テスト", "Web server၊ ပေါ့ပါးတဲ့ production၊ dev/test"), L("Yes", "はい", "ရတယ်"), L("Consistent but modest performance", "安定しているが性能は控えめ", "တည်ငြိမ်ပေမယ့် performance အလယ်အလတ်")],
              [L("Premium SSD", "Premium SSD ディスク", "Premium SSD disk အမျိုးအစား"), L("Production and performance-sensitive apps", "本番環境、性能重視のアプリ", "Production နဲ့ performance အရေးကြီးတဲ့ app"), L("Yes", "はい", "ရတယ်"), L("Performance tied to disk size; needs an 's' size", "性能はディスクサイズに比例、's' サイズが必要", "Performance က disk size နဲ့ ချိတ်ထား၊ 's' size လိုတယ်")],
              [L("Premium SSD v2", "Premium SSD v2 ディスク", "Premium SSD v2 disk အမျိုးအစား"), L("Databases needing tuned IOPS/throughput", "IOPS/スループットを調整したい DB", "IOPS/throughput ချိန်ညှိချင်တဲ့ database"), L("No (data only)", "いいえ（データのみ）", "မရဘူး (data ပဲ)"), L("Set size, IOPS and MB/s independently", "サイズ・IOPS・MB/s を個別に設定", "Size၊ IOPS၊ MB/s ကို သီးခြားစီ သတ်မှတ်လို့ရ")],
              [L("Ultra Disk", "Ultra Disk（超高性能）", "Ultra Disk အမျိုးအစား"), L("SAP HANA, top-tier SQL, transaction-heavy", "SAP HANA、最上位 SQL、トランザクション集中型", "SAP HANA၊ အဆင့်မြင့် SQL၊ transaction များတဲ့ workload"), L("No (data only)", "いいえ（データのみ）", "မရဘူး (data ပဲ)"), L("Sub-millisecond latency, change performance live", "1 ミリ秒未満のレイテンシ、性能をオンラインで変更", "Millisecond အောက် latency၊ run နေရင်း performance ပြောင်းလို့ရ")],
            ] },
          { type: 'p', text: L(
            "**Host caching** uses memory and local SSD on the physical host to speed up disk access. Options are **None**, **ReadOnly** and **ReadWrite**. The OS disk defaults to **ReadWrite**. For database **data files** (read-heavy) use **ReadOnly**; for **log files** (write-heavy, must be durable immediately) use **None**. Premium SSD v2 and Ultra Disk do not support host caching. Changing a disk's type (for example Standard SSD to Premium SSD) normally requires the VM to be **deallocated** first.",
            "**ホストキャッシュ**は物理ホストのメモリとローカル SSD を使ってディスクアクセスを高速化します。選択肢は **None**、**ReadOnly**、**ReadWrite** です。OS ディスクの既定は **ReadWrite** です。DB の**データファイル**（読み取り中心）には **ReadOnly**、**ログファイル**（書き込み中心で即時の永続化が必要）には **None** を使います。Premium SSD v2 と Ultra Disk はホストキャッシュに対応していません。ディスクの種類の変更（例：Standard SSD から Premium SSD）は、通常 VM の**割り当て解除**が先に必要です。",
            "**Host caching** က physical host ရဲ့ memory နဲ့ local SSD ကိုသုံးပြီး disk access ကို မြန်စေတယ်။ ရွေးစရာက **None**၊ **ReadOnly**၊ **ReadWrite** ပါ။ OS disk ရဲ့ default က **ReadWrite** ပါ။ Database **data file** (ဖတ်တာများ) အတွက် **ReadOnly**၊ **log file** (ရေးတာများပြီး ချက်ချင်း သိမ်းရမယ်) အတွက် **None** ကို သုံးပါ။ Premium SSD v2 နဲ့ Ultra Disk က host caching မရဘူး။ Disk type ပြောင်းတာ (ဥပမာ Standard SSD ကနေ Premium SSD) က များသောအားဖြင့် VM ကို အရင် **deallocate** လုပ်ရတယ်။"
          ) },
          { type: 'callout', tone: 'memory', text: L(
            "**T-D-D: Temp disk Disappears on Deallocate.** Never put anything you cannot lose on `D:` or `/mnt`. And remember **'Ultra and v2 can't boot'**: they are data-disk only.",
            "**T-D-D：Temp disk は Deallocate で Disappear（消える）。** 失って困るものは `D:` や `/mnt` に置かないでください。また **「Ultra と v2 はブートできない」**：データディスク専用です。",
            "**T-D-D- Temp disk က Deallocate လုပ်ရင် Disappear (ပျောက်) တယ်။** မပျောက်စေချင်တာကို `D:` ဒါမှမဟုတ် `/mnt` မှာ ဘယ်တော့မှ မထားပါနဲ့။ နောက်ပြီး **'Ultra နဲ့ v2 က boot မရ'** ဆိုတာ မှတ်ထားပါ- data disk အတွက်ပဲ သုံးလို့ရတယ်။"
          ) },
        ],
      },
      {
        id: "vm-states-billing",
        title: L("VM states, billing and resizing", "VM の状態、課金、サイズ変更", "VM state၊ billing နဲ့ resize"),
        blocks: [
          { type: 'p', text: L(
            "This is the most common money mistake for beginners. Shutting down a VM **from inside the OS** (or `az vm stop`) puts it in **Stopped**: the OS is off, but Azure still keeps the CPU and memory **reserved for you on the host**, so you **keep paying for compute**. Only **Stopped (deallocated)** releases the hardware and stops compute billing. It is like a hotel room: leaving the room for the day still costs money; only **checking out** stops the bill. In both states you still pay for **disks** (and any static public IP).",
            "初心者が最もお金で失敗しやすいポイントです。**OS の内部から**シャットダウンする（または `az vm stop`）と **Stopped** 状態になります。OS は停止していますが、Azure は CPU とメモリを**ホスト上で確保したまま**なので、**コンピューティング料金は発生し続けます**。**Stopped (deallocated)** だけがハードウェアを解放し、コンピューティング課金を止めます。ホテルにたとえると、日中部屋を出ても料金はかかり、**チェックアウト**して初めて請求が止まります。どちらの状態でも**ディスク**（および静的パブリック IP）の料金はかかります。",
            "Beginner တွေ ငွေအများဆုံး မှားတတ်တဲ့နေရာပါ။ VM ကို **OS ထဲကနေ** shutdown လုပ်ရင် (သို့မဟုတ် `az vm stop`) **Stopped** ဖြစ်တယ်။ OS ပိတ်သွားပေမယ့် Azure က CPU နဲ့ memory ကို **host ပေါ်မှာ သင့်အတွက် ဆက်သိမ်းထား** လို့ **compute ငွေ ဆက်ပေးရ** တယ်။ **Stopped (deallocated)** ကမှ hardware ကို လွှတ်ပေးပြီး compute billing ကို ရပ်တယ်။ ဟိုတယ်အခန်းနဲ့ တူတယ်- နေ့ခင်း အခန်းထဲက ထွက်သွားရုံနဲ့ ပိုက်ဆံ ဆက်ကျတယ်၊ **check-out** လုပ်မှ ငွေတောင်းခံတာ ရပ်တယ်။ State နှစ်ခုလုံးမှာ **disk** (နဲ့ static public IP) ငွေကတော့ ဆက်ပေးရတယ်။"
          ) },
          { type: 'table',
            head: [L("State", "状態", "State (အခြေအနေ)"), L("How you get there", "その状態になる方法", "ဘယ်လိုရောက်လဲ"), L("Compute billed?", "コンピューティング課金", "Compute ငွေကျလား?"), L("Notes", "備考", "မှတ်ချက်")],
            rows: [
              [L("Running", "Running（実行中）", "Running (run နေဆဲ)"), L("Start or create the VM", "VM を起動または作成", "VM ကို start/create"), L("Yes", "はい", "ကျတယ်"), L("Normal operation", "通常稼働", "ပုံမှန် အလုပ်လုပ်နေ")],
              [L("Stopped", "Stopped（停止済み）", "Stopped (ရပ်ထား)"), L("Shut down inside the OS, or `az vm stop`", "OS 内でシャットダウン、または `az vm stop`", "OS ထဲက shutdown သို့မဟုတ် `az vm stop`"), L("Yes", "はい", "ကျတယ်"), L("Hardware still allocated; IPs kept", "ハードウェアは確保済み、IP は保持", "Hardware ဆက်ယူထား၊ IP မပြောင်း")],
              [L("Stopped (deallocated)", "Stopped (deallocated)（割り当て解除済み）", "Stopped (deallocated) (hardware ပြန်လွှတ်ပြီး)"), L("Portal **Stop** button, or `az vm deallocate`", "ポータルの **停止** ボタン、または `az vm deallocate`", "Portal ရဲ့ **Stop** ခလုတ် သို့မဟုတ် `az vm deallocate`"), L("No", "いいえ", "မကျဘူး"), L("Temp disk wiped; dynamic public IP released", "一時ディスク消去、動的パブリック IP は解放", "Temp disk ပျက်၊ dynamic public IP ပြန်လွှတ်")],
              [L("Deleted", "Deleted（削除済み）", "Deleted (ဖျက်ပြီး)"), L("Delete the VM", "VM を削除", "VM ကို delete"), L("No", "いいえ", "မကျဘူး"), L("Disks, NIC, IP may remain and still cost money", "ディスク・NIC・IP が残り、課金が続く場合あり", "Disk၊ NIC၊ IP ကျန်ခဲ့ပြီး ငွေဆက်ကျနိုင်")],
            ] },
          { type: 'callout', tone: 'exam', text: L(
            "Exam trap: 'A user shut down the VM from Windows, but the bill keeps growing. Why?' Answer: the VM is **Stopped**, not **deallocated**. Also: when a VM is deallocated and started again it may land on a different host, so the **temp disk is empty** and a **dynamic** public IP can change. Use a **Static** (Standard SKU) public IP when the address must stay the same.",
            "試験の罠：「ユーザーが Windows から VM をシャットダウンしたのに請求が増え続ける。なぜ？」答え：VM は **Stopped** であり **deallocated** ではないからです。また、割り当て解除後に再起動すると別ホストに配置されることがあるため、**一時ディスクは空**になり、**動的**パブリック IP は変わる可能性があります。アドレスを固定する必要がある場合は**静的**（Standard SKU）パブリック IP を使います。",
            "Exam ထောင်ချောက်- 'User က Windows ထဲကနေ VM ကို shutdown လုပ်ထားပေမယ့် bill ဆက်တက်နေတယ်၊ ဘာကြောင့်လဲ?' အဖြေ- VM က **Stopped** ဖြစ်နေပြီး **deallocated** မဖြစ်သေးလို့ပါ။ နောက်တစ်ချက်- deallocate လုပ်ပြီး ပြန် start ရင် host အသစ်ပေါ် ရောက်နိုင်လို့ **temp disk ဗလာ** ဖြစ်ပြီး **dynamic** public IP ပြောင်းနိုင်တယ်။ IP မပြောင်းစေချင်ရင် **Static** (Standard SKU) public IP ကို သုံးပါ။"
          ) },
          { type: 'p', text: L(
            "**Resizing** changes the vCPU/RAM of an existing VM (scale **up/down**). It always **restarts** the VM, so plan a maintenance window. If the new size is available on the current hardware cluster you can resize while running. If it is not listed, **deallocate** the VM first; Azure can then place it on any cluster that supports the new size. Moving to a size without Premium support ('s') fails if the VM has Premium disks.",
            "**サイズ変更**は既存 VM の vCPU/メモリを変更します（スケール**アップ/ダウン**）。必ず VM が**再起動**されるため、メンテナンス時間を計画してください。新しいサイズが現在のハードウェアクラスターで利用可能なら稼働中に変更できます。一覧にない場合は、先に VM を**割り当て解除**すると、Azure は新しいサイズに対応した任意のクラスターに配置できます。Premium ディスクを持つ VM を Premium 非対応（'s' なし）のサイズに変更すると失敗します。",
            "**Resize** ဆိုတာ ရှိပြီးသား VM ရဲ့ vCPU/RAM ကို ပြောင်းတာ (scale **up/down**) ပါ။ VM က အမြဲ **restart** ဖြစ်လို့ maintenance အချိန် စီစဉ်ထားပါ။ Size အသစ်က လက်ရှိ hardware cluster မှာ ရှိရင် run နေရင်းတောင် resize လုပ်လို့ရတယ်။ List ထဲမှာ မပါရင် VM ကို အရင် **deallocate** လုပ်ပါ၊ ဒါဆို Azure က size အသစ်ကို ထောက်ပံ့တဲ့ cluster ဘယ်ခုမဆိုမှာ ထားပေးနိုင်တယ်။ Premium disk ပါတဲ့ VM ကို Premium မထောက်ပံ့တဲ့ ('s' မပါ) size ကို ပြောင်းရင် fail ဖြစ်တယ်။"
          ) },
          { type: 'code', lang: 'bash', code:
`# Check the current power state
az vm get-instance-view -g rg-lab -n vm-web01 \\
  --query "instanceView.statuses[1].displayStatus" -o tsv

# 'Stopped' = still billed for compute. Avoid for saving money:
az vm stop -g rg-lab -n vm-web01

# 'Stopped (deallocated)' = compute billing stops
az vm deallocate -g rg-lab -n vm-web01

# Which sizes can this VM move to right now?
az vm list-vm-resize-options -g rg-lab -n vm-web01 -o table

# Resize (the VM restarts)
az vm resize -g rg-lab -n vm-web01 --size Standard_D4s_v5
az vm start -g rg-lab -n vm-web01`,
            caption: L("Power state, deallocation and resizing with Azure CLI", "Azure CLI での電源状態確認、割り当て解除、サイズ変更", "Azure CLI နဲ့ power state စစ်တာ၊ deallocate နဲ့ resize လုပ်တာ") },
          { type: 'callout', tone: 'memory', text: L(
            "**Deallocate = Don't pay** (for compute). **Stop = Still pay.** Portal Stop button deallocates; OS shutdown does not.",
            "**Deallocate = 払わない**（コンピューティング分）。**Stop = まだ払う。** ポータルの停止ボタンは割り当て解除しますが、OS のシャットダウンはしません。",
            "**Deallocate = မပေးရ** (compute အတွက်)။ **Stop = ဆက်ပေးရ။** Portal ရဲ့ Stop ခလုတ်က deallocate လုပ်ပေးတယ်၊ OS shutdown က မလုပ်ပေးဘူး။"
          ) },
        ],
      },
      {
        id: "vm-operations",
        title: L("Operating VMs: extensions, diagnostics, JIT and Bastion", "VM の運用：拡張機能、診断、JIT、Bastion", "VM စီမံခြင်း- extension၊ diagnostics၊ JIT နဲ့ Bastion"),
        blocks: [
          { type: 'p', text: L(
            "**VM extensions** are small agents that Azure installs to automate tasks after deployment, without you logging in. The **Custom Script Extension** downloads and runs a script (for example from Blob Storage or GitHub) to install software or change configuration; other examples are the **Azure Monitor Agent**, antimalware and Desired State Configuration. **Run Command** is similar but for one-off commands, ideal when SSH/RDP is broken or blocked.",
            "**VM 拡張機能**は、デプロイ後のタスクをログインせずに自動化するために Azure がインストールする小さなエージェントです。**Custom Script Extension** は（Blob Storage や GitHub などから）スクリプトをダウンロードして実行し、ソフトウェアのインストールや構成変更を行います。他にも **Azure Monitor Agent**、マルウェア対策、Desired State Configuration などがあります。**Run Command** も似ていますが単発のコマンド向けで、SSH/RDP が壊れている、またはブロックされているときに最適です。",
            "**VM extension** ဆိုတာ deploy ပြီးနောက် login မဝင်ဘဲ task တွေကို automate လုပ်ဖို့ Azure က install လုပ်ပေးတဲ့ agent အသေးလေးတွေပါ။ **Custom Script Extension** က script (ဥပမာ Blob Storage သို့မဟုတ် GitHub ကနေ) ကို download လုပ်ပြီး run ကာ software install၊ configuration ပြောင်းတာ လုပ်ပေးတယ်။ တခြားဥပမာတွေက **Azure Monitor Agent**၊ antimalware၊ Desired State Configuration ပါ။ **Run Command** ကလည်း ဆင်တူပေမယ့် တစ်ခါသုံး command အတွက်ဖြစ်ပြီး SSH/RDP ပျက်နေ/ပိတ်ခံထားရချိန်မှာ အရမ်းအသုံးဝင်တယ်။"
          ) },
          { type: 'code', lang: 'bash', code:
`# Custom Script Extension on a Linux VM: install nginx at deployment time
az vm extension set -g rg-lab --vm-name vm-web01 \\
  --publisher Microsoft.Azure.Extensions --name CustomScript \\
  --settings '{"commandToExecute":"apt-get update && apt-get install -y nginx"}'

# One-off command without SSH (works even if port 22 is closed)
az vm run-command invoke -g rg-lab -n vm-web01 \\
  --command-id RunShellScript --scripts "systemctl status nginx"

# Enable boot diagnostics with a managed storage account
az vm boot-diagnostics enable -g rg-lab -n vm-web01`,
            caption: L("Extensions, Run Command and boot diagnostics", "拡張機能、Run Command、ブート診断", "Extension၊ Run Command နဲ့ boot diagnostics") },
          { type: 'list', items: [
            L("**Boot diagnostics**: captures a screenshot of the VM console and the serial log. Use it when a VM 'is running' in the portal but you cannot connect (blue screen, stuck at boot, broken `fstab`).",
              "**ブート診断**：VM コンソールのスクリーンショットとシリアルログを取得します。ポータルでは「実行中」なのに接続できない場合（ブルースクリーン、起動中に停止、`fstab` の破損など）に使います。",
              "**Boot diagnostics**- VM console ရဲ့ screenshot နဲ့ serial log ကို ဖမ်းထားတယ်။ Portal မှာ 'Running' ပြနေပေမယ့် ချိတ်လို့မရတဲ့အခါ (blue screen၊ boot မှာ ရပ်နေ၊ `fstab` ပျက်) သုံးပါ။"),
            L("**Serial console**: an interactive text console to the VM, independent of the network. Requires **boot diagnostics enabled** and a local user with a **password**. Lifesaver when you broke the NSG, firewall or SSH config.",
              "**シリアルコンソール**：ネットワークに依存しない VM への対話型テキストコンソールです。**ブート診断の有効化**と**パスワード**を持つローカルユーザーが必要です。NSG、ファイアウォール、SSH 設定を壊したときの救世主です。",
              "**Serial console**- network နဲ့ မဆိုင်ဘဲ VM ကို တိုက်ရိုက် ချိတ်တဲ့ text console ပါ။ **Boot diagnostics ဖွင့်ထား** ရပြီး **password** ပါတဲ့ local user လိုတယ်။ NSG၊ firewall၊ SSH config ကို မှားပြင်မိတဲ့အခါ ကယ်တင်ရှင်ပါပဲ။"),
            L("**Redeploy**: moves the VM to a new host when you suspect a host problem (temp disk data is lost).",
              "**再デプロイ**：ホストの問題が疑われるとき、VM を新しいホストに移動します（一時ディスクのデータは失われます）。",
              "**Redeploy**- host ပြဿနာလို့ သံသယရှိရင် VM ကို host အသစ်ကို ရွှေ့တယ် (temp disk data ပျောက်တယ်)။"),
          ] },
          { type: 'p', text: L(
            "Opening RDP (3389) or SSH (22) to the whole internet invites brute-force attacks within minutes. Two better options: **Just-In-Time (JIT) VM access**, a feature of **Microsoft Defender for Cloud** (Defender for Servers Plan 2), keeps management ports **closed by an NSG deny rule** and opens them only on request, only for your IP, only for a limited time (for example 3 hours). **Azure Bastion** is a managed jump host deployed into your VNet: you connect through the Azure portal (HTTPS 443) or native client, and the VM needs **no public IP** at all.",
            "RDP（3389）や SSH（22）をインターネット全体に開放すると、数分でブルートフォース攻撃を受けます。より良い方法は 2 つです。**Just-In-Time（JIT）VM アクセス**は **Microsoft Defender for Cloud**（Defender for Servers Plan 2）の機能で、管理ポートを **NSG の拒否ルールで閉じたまま**にし、要求時にのみ、あなたの IP にだけ、限られた時間（例：3 時間）だけ開きます。**Azure Bastion** は VNet にデプロイするマネージドなジャンプホストで、Azure ポータル（HTTPS 443）またはネイティブクライアントから接続でき、VM には**パブリック IP が一切不要**です。",
            "RDP (3389) သို့မဟုတ် SSH (22) ကို internet တစ်ခုလုံးကို ဖွင့်ထားရင် မိနစ်ပိုင်းအတွင်း brute-force attack ခံရမယ်။ ပိုကောင်းတဲ့ နည်းလမ်း ၂ ခုရှိတယ်- **Just-In-Time (JIT) VM access** က **Microsoft Defender for Cloud** (Defender for Servers Plan 2) ရဲ့ feature ဖြစ်ပြီး management port တွေကို **NSG deny rule နဲ့ ပိတ်ထား** ကာ တောင်းဆိုမှသာ၊ သင့် IP အတွက်ပဲ၊ အချိန်အကန့်အသတ်နဲ့ (ဥပမာ ၃ နာရီ) ဖွင့်ပေးတယ်။ **Azure Bastion** က VNet ထဲမှာ deploy လုပ်တဲ့ managed jump host ပါ- Azure portal (HTTPS 443) ဒါမှမဟုတ် native client ကနေ ချိတ်ပြီး VM မှာ **public IP လုံးဝ မလို** ဘူး။"
          ) },
          { type: 'diagram', text:
`  Admin browser
       |  HTTPS 443 (TLS)
       v
 +------------------- VNet 10.0.0.0/16 ----------------------+
 |  AzureBastionSubnet (/26+)        snet-app 10.0.1.0/24    |
 |  +----------------+   RDP/SSH     +-------------------+   |
 |  | Azure Bastion  | ------------> | VM (private IP)   |   |
 |  +----------------+  private net  | no public IP      |   |
 |                                   +-------------------+   |
 +-----------------------------------------------------------+`,
            caption: L("Azure Bastion: RDP/SSH without exposing the VM", "Azure Bastion：VM を公開せずに RDP/SSH", "Azure Bastion- VM ကို internet မှာ မဖော်ဘဲ RDP/SSH") },
          { type: 'callout', tone: 'exam', text: L(
            "Remember the facts the exam loves: Bastion needs a dedicated subnet named exactly **AzureBastionSubnet** (size **/26 or larger**); Bastion is per VNet (peered VNets can share it with Standard/Premium SKU). JIT is enabled through **Defender for Cloud** and works by editing **NSG** (or Azure Firewall) rules. Serial console needs **boot diagnostics**.",
            "試験頻出の事実：Bastion には **AzureBastionSubnet** という正確な名前の専用サブネット（**/26 以上**）が必要です。Bastion は VNet 単位です（Standard/Premium SKU ならピアリングされた VNet で共有可能）。JIT は **Defender for Cloud** で有効化し、**NSG**（または Azure Firewall）のルールを編集して動作します。シリアルコンソールには**ブート診断**が必要です。",
            "Exam က ကြိုက်တဲ့ အချက်တွေ- Bastion အတွက် နာမည် အတိအကျ **AzureBastionSubnet** ဖြစ်တဲ့ သီးသန့် subnet (**/26 သို့မဟုတ် ပိုကြီး**) လိုတယ်။ Bastion က VNet တစ်ခုချင်းအလိုက်ပါ (Standard/Premium SKU ဆိုရင် peered VNet တွေနဲ့ မျှသုံးလို့ရ)။ JIT ကို **Defender for Cloud** ကနေ ဖွင့်ပြီး **NSG** (သို့မဟုတ် Azure Firewall) rule တွေကို ပြင်ပြီး အလုပ်လုပ်တယ်။ Serial console အတွက် **boot diagnostics** လိုတယ်။"
          ) },
        ],
      },
      {
        id: "lab-linux-vm",
        title: L("Hands-on lab: Linux VM with SSH key, nginx and deallocation", "ハンズオン：SSH キー付き Linux VM、nginx、割り当て解除", "Hands-on lab- SSH key နဲ့ Linux VM၊ nginx နဲ့ deallocate"),
        blocks: [
          { type: 'p', text: L(
            "In this lab you build what a real engineer builds on day one: a small Ubuntu web server that accepts SSH **only from your own IP**, serves a page with nginx, and costs almost nothing when you are done because you **deallocate** it. Use Azure Cloud Shell (Bash) or a local Azure CLI. Cost tip: a `Standard_B2s` VM for one hour costs very little; forgetting it for a month does not.",
            "このラボでは、実務の初日に作るものを構築します。**自分の IP からのみ** SSH を受け付け、nginx でページを配信し、終了後は**割り当て解除**するのでほとんど費用がかからない小さな Ubuntu Web サーバーです。Azure Cloud Shell（Bash）またはローカルの Azure CLI を使ってください。コストのヒント：`Standard_B2s` を 1 時間使ってもわずかですが、1 か月放置するとそうはいきません。",
            "ဒီ lab မှာ တကယ့် engineer တစ်ယောက် ပထမနေ့မှာ ဆောက်တဲ့အရာကို ဆောက်မယ်- SSH ကို **ကိုယ့် IP ကနေပဲ** လက်ခံတဲ့၊ nginx နဲ့ page ပြတဲ့၊ ပြီးရင် **deallocate** လုပ်လို့ ငွေသိပ်မကုန်တဲ့ Ubuntu web server အသေးလေးပါ။ Azure Cloud Shell (Bash) ဒါမှမဟုတ် local Azure CLI ကို သုံးပါ။ Cost tip- `Standard_B2s` ကို ၁ နာရီသုံးရင် နည်းနည်းလေးပဲ ကုန်တယ်၊ တစ်လလုံး မေ့ထားရင်တော့ မဟုတ်တော့ဘူး။"
          ) },
          { type: 'steps', items: [
            L("Create a resource group in Japan East: `az group create -n rg-lab -l japaneast`.",
              "Japan East に Resource Group を作成します：`az group create -n rg-lab -l japaneast`。",
              "Japan East မှာ resource group ဆောက်ပါ- `az group create -n rg-lab -l japaneast`။"),
            L("Find your public IP with `curl -s https://ifconfig.me` and save it in a variable `MYIP`.",
              "`curl -s https://ifconfig.me` で自分のパブリック IP を調べ、変数 `MYIP` に保存します。",
              "`curl -s https://ifconfig.me` နဲ့ ကိုယ့် public IP ကို ရှာပြီး `MYIP` variable ထဲ သိမ်းပါ။"),
            L("Create the VM with an SSH key (no password) using `az vm create ... --generate-ssh-keys`. The CLI creates a VNet, NSG (`vm-web01NSG`) and a Standard static public IP.",
              "`az vm create ... --generate-ssh-keys` で SSH キー（パスワードなし）の VM を作成します。CLI が VNet、NSG（`vm-web01NSG`）、Standard の静的パブリック IP を作成します。",
              "`az vm create ... --generate-ssh-keys` နဲ့ SSH key သုံးတဲ့ (password မပါ) VM ဆောက်ပါ။ CLI က VNet၊ NSG (`vm-web01NSG`) နဲ့ Standard static public IP ကို ဆောက်ပေးတယ်။"),
            L("Restrict the default SSH rule to your IP only by updating `default-allow-ssh` with `--source-address-prefixes $MYIP/32`.",
              "既定の SSH ルール `default-allow-ssh` を `--source-address-prefixes $MYIP/32` で更新し、自分の IP のみに制限します。",
              "Default SSH rule `default-allow-ssh` ကို `--source-address-prefixes $MYIP/32` နဲ့ update လုပ်ပြီး ကိုယ့် IP တစ်ခုတည်းပဲ ခွင့်ပြုပါ။"),
            L("Open port 80 for the website with `az vm open-port --port 80 --priority 1010`.",
              "`az vm open-port --port 80 --priority 1010` で Web サイト用にポート 80 を開きます。",
              "`az vm open-port --port 80 --priority 1010` နဲ့ website အတွက် port 80 ကို ဖွင့်ပါ။"),
            L("SSH in with `ssh azureuser@<public-ip>` and install nginx: `sudo apt-get update && sudo apt-get install -y nginx`.",
              "`ssh azureuser@<public-ip>` で接続し、nginx をインストールします：`sudo apt-get update && sudo apt-get install -y nginx`。",
              "`ssh azureuser@<public-ip>` နဲ့ ဝင်ပြီး nginx install လုပ်ပါ- `sudo apt-get update && sudo apt-get install -y nginx`။"),
            L("Browse to `http://<public-ip>` and confirm the 'Welcome to nginx!' page.",
              "`http://<public-ip>` を開き、「Welcome to nginx!」ページを確認します。",
              "`http://<public-ip>` ကို browser နဲ့ ဖွင့်ပြီး 'Welcome to nginx!' page ပေါ်လာတာ စစ်ပါ။"),
            L("Deallocate the VM and verify the state shows **VM deallocated**. When you are completely done, delete the whole resource group.",
              "VM を割り当て解除し、状態が **VM deallocated** になったことを確認します。完全に終わったら Resource Group ごと削除します。",
              "VM ကို deallocate လုပ်ပြီး state က **VM deallocated** ပြတာ စစ်ပါ။ လုံးဝပြီးသွားရင် resource group တစ်ခုလုံးကို delete လုပ်ပါ။"),
          ] },
          { type: 'code', lang: 'bash', code:
`az group create -n rg-lab -l japaneast
MYIP=$(curl -s https://ifconfig.me)

az vm create -g rg-lab -n vm-web01 \\
  --image Ubuntu2204 --size Standard_B2s \\
  --admin-username azureuser --generate-ssh-keys \\
  --public-ip-sku Standard

# Allow SSH only from my IP
az network nsg rule update -g rg-lab --nsg-name vm-web01NSG \\
  --name default-allow-ssh --source-address-prefixes $MYIP/32

# Allow HTTP for the website
az vm open-port -g rg-lab -n vm-web01 --port 80 --priority 1010

IP=$(az vm show -d -g rg-lab -n vm-web01 --query publicIps -o tsv)
ssh azureuser@$IP 'sudo apt-get update && sudo apt-get install -y nginx'
curl -s http://$IP | head -n 5

# Stop paying for compute
az vm deallocate -g rg-lab -n vm-web01
az vm show -d -g rg-lab -n vm-web01 --query powerState -o tsv

# Clean up everything when finished
az group delete -n rg-lab --yes --no-wait`,
            caption: L("Complete lab script", "ラボ全体のスクリプト", "Lab script အပြည့်အစုံ") },
          { type: 'callout', tone: 'warn', text: L(
            "Your home or office IP in Tokyo may change (for example after a router restart or on a mobile hotspot). If SSH suddenly times out, check `curl -s https://ifconfig.me` again and update the NSG rule. Never 'fix' it by allowing `*` or `0.0.0.0/0` on port 22.",
            "東京の自宅やオフィスの IP は変わることがあります（ルーター再起動後やモバイルホットスポット利用時など）。SSH が突然タイムアウトしたら、もう一度 `curl -s https://ifconfig.me` を確認し NSG ルールを更新してください。ポート 22 に `*` や `0.0.0.0/0` を許可して「解決」してはいけません。",
            "Tokyo က အိမ်/ရုံး IP က ပြောင်းနိုင်တယ် (router restart လုပ်ပြီးနောက်၊ mobile hotspot သုံးရင်)။ SSH ရုတ်တရက် timeout ဖြစ်ရင် `curl -s https://ifconfig.me` ကို ပြန်စစ်ပြီး NSG rule ကို update လုပ်ပါ။ Port 22 ကို `*` ဒါမှမဟုတ် `0.0.0.0/0` ခွင့်ပြုပြီး 'ပြင်' တာမျိုး ဘယ်တော့မှ မလုပ်ပါနဲ့။"
          ) },
        ],
      },
      {
        id: "availability",
        title: L("Availability: availability sets, zones and SLAs", "可用性：可用性セット、ゾーン、SLA", "Availability- Availability Set၊ Zone နဲ့ SLA"),
        blocks: [
          { type: 'p', text: L(
            "A single VM will eventually go down: either through **unplanned** events (a server rack loses power, a network switch fails) or **planned** maintenance (Azure patches the host and must reboot it). The cure is always the same: run **two or more VMs** and spread them so that one event cannot hit all of them. An **availability set** spreads VMs inside one datacenter across **fault domains (FD)** and **update domains (UD)**. A **fault domain** is like one rack with its own power supply and network switch: if it fails, every VM in it fails. An **update domain** is a group of hosts that Azure reboots **together** during maintenance, one UD at a time.",
            "単一の VM はいつか必ず停止します。**計画外**のイベント（サーバーラックの電源喪失、ネットワークスイッチの故障）や**計画済み**メンテナンス（Azure がホストにパッチを適用し再起動する）が原因です。対策はいつも同じで、**2 台以上の VM** を動かし、1 つのイベントで全台が影響を受けないよう分散させることです。**可用性セット**は 1 つのデータセンター内で VM を**障害ドメイン（FD）**と**更新ドメイン（UD）**に分散します。**障害ドメイン**は独自の電源とネットワークスイッチを持つ 1 つのラックのようなもので、故障するとその中の VM はすべて停止します。**更新ドメイン**はメンテナンス時に Azure が**同時に**再起動するホストのグループで、1 回に 1 つの UD ずつ処理されます。",
            "VM တစ်လုံးတည်းဆိုရင် တစ်နေ့နေ့ ကျမှာပါ- **unplanned** event (server rack မီးပျက်၊ network switch ပျက်) ဒါမှမဟုတ် **planned** maintenance (Azure က host ကို patch တင်ပြီး reboot လုပ်ရ) ကြောင့်ပါ။ ဖြေရှင်းနည်းက အမြဲတူတယ်- **VM ၂ လုံး သို့မဟုတ် ပိုများ** run ပြီး event တစ်ခုက အားလုံးကို မထိအောင် ခွဲထားတာပါ။ **Availability Set** က datacenter တစ်ခုအတွင်းမှာ VM တွေကို **fault domain (FD)** နဲ့ **update domain (UD)** တွေကို ခွဲဖြန့်တယ်။ **Fault domain** ဆိုတာ ကိုယ်ပိုင် power supply နဲ့ network switch ပါတဲ့ rack တစ်ခုလိုပါ- ပျက်ရင် အထဲက VM အားလုံး ကျမယ်။ **Update domain** ဆိုတာ maintenance လုပ်ချိန် Azure က **တစ်ပြိုင်နက်** reboot လုပ်တဲ့ host အုပ်စုပါ၊ တစ်ကြိမ်မှာ UD တစ်ခုစီပဲ လုပ်တယ်။"
          ) },
          { type: 'diagram', text:
`  Availability set: 3 fault domains x 5 update domains, 6 VMs

          Fault Domain 0    Fault Domain 1    Fault Domain 2
          (rack/power A)    (rack/power B)    (rack/power C)
        +---------------+ +---------------+ +---------------+
  UD 0  |    VM1        | |               | |               |
  UD 1  |               | |    VM2        | |               |
  UD 2  |               | |               | |    VM3        |
  UD 3  |    VM4        | |               | |               |
  UD 4  |               | |    VM5        | |               |
  UD 0  |               | |               | |    VM6        |
        +---------------+ +---------------+ +---------------+
  Rack B fails  -> VM2, VM5 down; 4 VMs still serve traffic
  UD 0 patched  -> VM1, VM6 reboot; the others keep running`,
            caption: L("Fault domains protect from hardware failure; update domains from planned reboots", "障害ドメインはハードウェア障害から、更新ドメインは計画的な再起動から保護します", "Fault domain က hardware ပျက်တာကနေ၊ update domain က planned reboot ကနေ ကာကွယ်တယ်") },
          { type: 'p', text: L(
            "An availability set has up to **3 fault domains** (depending on the region) and up to **20 update domains** (default 5). It protects against a rack failure but **not** against a whole datacenter failure. **Availability zones** go further: each zone is one or more physically separate datacenters in the same region with independent power, cooling and network. Deploying VMs across **zones 1, 2 and 3** survives the loss of an entire datacenter. A VM is **zonal** (pinned to one zone); services such as zone-redundant Standard Load Balancer or ZRS storage are **zone-redundant** (spread automatically).",
            "可用性セットは最大 **3 つの障害ドメイン**（リージョンにより異なる）と最大 **20 の更新ドメイン**（既定 5）を持ちます。ラック障害からは保護しますが、データセンター全体の障害からは**保護しません**。**可用性ゾーン**はさらに進んでおり、各ゾーンは同じリージョン内の物理的に独立した 1 つ以上のデータセンターで、電源・冷却・ネットワークが独立しています。VM を**ゾーン 1・2・3** に分散してデプロイすれば、データセンター全体の喪失にも耐えられます。VM は**ゾーン**（1 つのゾーンに固定）リソースであり、ゾーン冗長の Standard Load Balancer や ZRS ストレージなどは**ゾーン冗長**（自動的に分散）です。",
            "Availability Set မှာ **fault domain အများဆုံး ၃ ခု** (region ပေါ်မူတည်) နဲ့ **update domain အများဆုံး ၂၀** (default ၅) ရှိတယ်။ Rack ပျက်တာကနေ ကာကွယ်ပေမယ့် datacenter တစ်ခုလုံး ပျက်တာကနေ **မကာကွယ်** နိုင်ဘူး။ **Availability Zone** က ပိုအဆင့်မြင့်တယ်- zone တစ်ခုစီက region တစ်ခုတည်းထဲက သီးခြား datacenter (တစ်ခု သို့မဟုတ် အများ) ဖြစ်ပြီး power၊ cooling၊ network သီးသန့်ရှိတယ်။ VM တွေကို **zone 1၊ 2၊ 3** မှာ ခွဲ deploy လုပ်ရင် datacenter တစ်ခုလုံး ပျောက်သွားလည်း ဆက်ရှင်သန်တယ်။ VM က **zonal** (zone တစ်ခုမှာ ချိတ်ထား) ဖြစ်ပြီး zone-redundant Standard Load Balancer၊ ZRS storage လို service တွေက **zone-redundant** (အလိုအလျောက် ဖြန့်) ပါ။"
          ) },
          { type: 'table',
            head: [L("Deployment", "構成", "Deployment ပုံစံ"), L("VM SLA", "VM の SLA", "VM SLA ရာခိုင်နှုန်း"), L("Protects against", "保護対象", "ဘာကနေ ကာကွယ်လဲ")],
            rows: [
              [L("Single VM, all disks Premium SSD / Premium SSD v2 / Ultra", "単一 VM（全ディスク Premium SSD / Premium SSD v2 / Ultra）", "VM တစ်လုံး၊ disk အားလုံး Premium SSD / Premium SSD v2 / Ultra"), L("99.9%", "99.9%（単一 VM）", "99.9% (VM တစ်လုံး)"), L("Nothing beyond the host itself", "ホスト自体以上の保護なし", "Host ကိုယ်တိုင်ထက် ပိုမကာကွယ်")],
              [L("2+ VMs in an availability set", "可用性セット内の 2 台以上の VM", "Availability Set ထဲက VM ၂ လုံး+"), L("99.95%", "99.95%（可用性セット）", "99.95% (Availability Set) အဆင့်"), L("Rack failure, planned host reboots", "ラック障害、計画的なホスト再起動", "Rack ပျက်၊ planned host reboot")],
              [L("2+ VMs across 2+ availability zones", "2 つ以上のゾーンにまたがる 2 台以上の VM", "Zone ၂ ခု+ မှာ ဖြန့်ထားတဲ့ VM ၂ လုံး+"), L("99.99%", "99.99%（ゾーン）", "99.99% (Zone) အဆင့်"), L("Whole datacenter failure", "データセンター全体の障害", "Datacenter တစ်ခုလုံး ပျက်")],
              [L("Paired region / second region", "ペアリージョン / 2 つ目のリージョン", "Paired region / ဒုတိယ region"), L("Your design (e.g. Azure Site Recovery)", "設計次第（例：Azure Site Recovery）", "ကိုယ့် design ပေါ်မူတည် (ဥပမာ Azure Site Recovery)"), L("Regional disaster", "リージョン規模の災害", "Region တစ်ခုလုံး ဘေးအန္တရာယ်")],
            ] },
          { type: 'callout', tone: 'exam', text: L(
            "Key AZ-104 rules: a VM can be placed in an availability set **only at creation time**; to move an existing VM into a set you must **recreate** it (keep the disks). A VM can be in an availability set **or** an availability zone, **not both**. To spread 2 VMs evenly across 2 fault domains you need the set to have at least 2 FDs. SLAs only apply with **two or more** VMs.",
            "AZ-104 の重要ルール：VM を可用性セットに配置できるのは**作成時のみ**です。既存の VM をセットに移すには**再作成**が必要です（ディスクは残します）。VM は可用性セット**または**可用性ゾーンのどちらかに配置でき、**両方は不可**です。2 台の VM を 2 つの障害ドメインに均等に分散するには、セットに 2 つ以上の FD が必要です。SLA は **2 台以上**の VM でのみ適用されます。",
            "AZ-104 အရေးကြီး rule တွေ- VM ကို Availability Set ထဲ **ဆောက်ချိန်မှာပဲ** ထည့်လို့ရတယ်။ ရှိပြီးသား VM ကို set ထဲ ရွှေ့ချင်ရင် **ပြန်ဆောက်** ရတယ် (disk တွေကို ထားခဲ့ပြီး)။ VM တစ်လုံးက Availability Set **ဒါမှမဟုတ်** Availability Zone တစ်ခုခုထဲမှာပဲ ရှိနိုင်တယ်၊ **နှစ်ခုလုံး မရ** ဘူး။ SLA က VM **၂ လုံး သို့မဟုတ် ပိုများ** ရှိမှ သက်ရောက်တယ်။"
          ) },
          { type: 'callout', tone: 'memory', text: L(
            "**F**ault domain = **F**ailure of hardware (power/rack). **U**pdate domain = **U**pgrade reboots. Availability set = different **racks**; availability zones = different **buildings**. SLA ladder: **9-9-9 → 9-9-9-5 → 9-9-9-9** (one VM → set → zones).",
            "**F**ault domain = ハードウェアの **F**ailure（電源/ラック）。**U**pdate domain = **U**pgrade の再起動。可用性セット = 別々の**ラック**、可用性ゾーン = 別々の**建物**。SLA のはしご：**99.9 → 99.95 → 99.99**（単一 VM → セット → ゾーン）。",
            "**F**ault domain = hardware **F**ailure (power/rack)။ **U**pdate domain = **U**pgrade reboot။ Availability Set = **rack** မတူ၊ Availability Zone = **အဆောက်အအုံ** မတူ။ SLA လှေကား- **99.9 → 99.95 → 99.99** (VM တစ်လုံး → set → zone)။"
          ) },
        ],
      },
      {
        id: "vmss",
        title: L("Virtual Machine Scale Sets and autoscale", "Virtual Machine Scale Sets と自動スケール", "Virtual Machine Scale Set နဲ့ autoscale"),
        blocks: [
          { type: 'p', text: L(
            "A **Virtual Machine Scale Set (VMSS)** manages a group of load-balanced VMs as one resource and can **add or remove instances automatically**. Think of a convenience store that calls in part-time staff when the queue gets long at lunchtime and sends them home in the evening. Instead of you creating VM3, VM4, VM5 by hand, the scale set creates identical instances from the same image and configuration, spreads them across zones or fault domains, and puts them behind a Load Balancer or Application Gateway. A scale set can grow up to **1,000** instances.",
            "**Virtual Machine Scale Set（VMSS）**は、負荷分散された VM のグループを 1 つのリソースとして管理し、**インスタンスを自動的に追加・削除**できます。昼のレジが混むとアルバイトを呼び、夕方には帰すコンビニを想像してください。VM3、VM4、VM5 を手作業で作る代わりに、スケールセットが同じイメージと構成から同一のインスタンスを作成し、ゾーンや障害ドメインに分散させ、Load Balancer や Application Gateway の背後に配置します。スケールセットは最大 **1,000** インスタンスまで拡張できます。",
            "**Virtual Machine Scale Set (VMSS)** က load balance လုပ်ထားတဲ့ VM အုပ်စုကို resource တစ်ခုအနေနဲ့ စီမံပြီး **instance တွေကို အလိုအလျောက် တိုး/လျှော့** နိုင်တယ်။ နေ့လယ်စာချိန် တန်းစီတာ ရှည်လာရင် part-time ဝန်ထမ်း ခေါ်ပြီး ညနေ ပြန်လွှတ်တဲ့ convenience store လိုပါ။ VM3၊ VM4၊ VM5 ကို လက်နဲ့ ဆောက်မယ့်အစား scale set က image နဲ့ configuration တူတဲ့ instance တွေကို ဆောက်ပေး၊ zone/fault domain တွေမှာ ဖြန့်ပေး၊ Load Balancer ဒါမှမဟုတ် Application Gateway နောက်မှာ ထားပေးတယ်။ Scale set တစ်ခုက instance **၁,၀၀၀** အထိ ကြီးနိုင်တယ်။"
          ) },
          { type: 'table',
            head: [L("Orchestration mode", "オーケストレーションモード", "Orchestration mode အမျိုးအစား"), L("How it works", "動作", "ဘယ်လိုအလုပ်လုပ်လဲ"), L("Use when", "使う場面", "ဘယ်အချိန်သုံးလဲ")],
            rows: [
              [L("Flexible (recommended default)", "Flexible（推奨の既定）", "Flexible (default အဖြစ် အကြံပြု)"), L("Instances are standard VMs; you can mix sizes, add existing-style VMs, use full VM APIs; spread across zones/FDs", "インスタンスは標準 VM。サイズ混在、通常の VM API の利用、ゾーン/FD への分散が可能", "Instance တွေက ပုံမှန် VM တွေ၊ size ရောသုံးလို့ရ၊ VM API အပြည့်သုံးလို့ရ၊ zone/FD မှာ ဖြန့်"), L("Most new workloads, including stateful apps and high availability at scale", "ステートフルアプリや大規模な高可用性を含む、ほとんどの新規ワークロード", "Workload အသစ်အများစု၊ stateful app နဲ့ အကြီးစား high availability အပါအဝင်")],
              [L("Uniform", "Uniform（均一）", "Uniform (တူညီ)"), L("Identical instances managed only through the scale set model and VMSS APIs", "同一インスタンスをスケールセットのモデルと VMSS API のみで管理", "တူညီတဲ့ instance တွေကို scale set model နဲ့ VMSS API ကနေပဲ စီမံ"), L("Large stateless fleets (batch, web tier) built the classic way", "従来型の大規模ステートレス構成（バッチ、Web 層）", "ရိုးရာနည်းနဲ့ ဆောက်တဲ့ stateless instance အများကြီး (batch၊ web tier)")],
            ] },
          { type: 'diagram', text:
`  Autoscale profile: min 2, max 10, default 2

  Avg CPU over 10 min
  100% |
   70% |- - - - - - - - -/\\- - - - -  scale OUT +1 (CPU > 70%)
       |         /\\    /  \\
   30% |- - - - /- -\\- /- - -\\- - - -  scale IN  -1 (CPU < 30%)
       |  _____/     \\/      \\______
    0% +-------------------------------------------> time
          [2 VMs]  [3]   [4 VMs]     [3]  [2 VMs]
  Cooldown 5 min after each action to avoid flapping`,
            caption: L("Metric-based autoscale with scale-out and scale-in rules", "スケールアウト/インのルールによるメトリックベースの自動スケール", "Scale-out နဲ့ scale-in rule ပါတဲ့ metric-based autoscale") },
          { type: 'p', text: L(
            "**Autoscale** (Azure Monitor autoscale) uses a profile with **minimum, maximum and default** instance counts plus rules. **Metric-based** rules react to load (average CPU, memory via guest metrics, queue length). **Schedule-based** profiles change capacity at known times (e.g. 10 instances on weekdays 9:00 to 18:00 JST). Always create a **scale-in rule as well as a scale-out rule**, otherwise the set grows and never shrinks. A **cooldown** stops the set from flapping. The **scale-in policy** decides which VM is removed first: **Default** (balance across zones and fault domains, then remove the highest instance ID), **NewestVM** or **OldestVM**. **Instance protection** can exclude a specific VM from scale-in. The **upgrade policy** (**Manual**, **Automatic**, **Rolling**) controls how model changes such as a new image reach existing instances.",
            "**自動スケール**（Azure Monitor autoscale）は、**最小・最大・既定**のインスタンス数とルールを持つプロファイルを使います。**メトリックベース**のルールは負荷（平均 CPU、ゲストメトリックのメモリ、キューの長さ）に反応します。**スケジュールベース**のプロファイルは決まった時刻に容量を変更します（例：平日 9:00〜18:00 JST は 10 インスタンス）。**スケールアウトとあわせて必ずスケールインのルールも作成**してください。そうしないと増えるだけで減りません。**クールダウン**は増減の繰り返しを防ぎます。**スケールインポリシー**は最初に削除する VM を決めます：**Default**（ゾーンと障害ドメインのバランスを取った後、最大のインスタンス ID を削除）、**NewestVM**、**OldestVM**。**インスタンス保護**で特定の VM をスケールインの対象外にできます。**アップグレードポリシー**（**Manual**、**Automatic**、**Rolling**）は、新しいイメージなどのモデル変更を既存インスタンスに反映する方法を制御します。",
            "**Autoscale** (Azure Monitor autoscale) က **minimum၊ maximum၊ default** instance အရေအတွက်နဲ့ rule တွေပါတဲ့ profile ကို သုံးတယ်။ **Metric-based** rule တွေက load (ပျမ်းမျှ CPU၊ guest metric ကနေ memory၊ queue length) ကို တုံ့ပြန်တယ်။ **Schedule-based** profile တွေက သိပြီးသား အချိန်မှာ capacity ပြောင်းတယ် (ဥပမာ ကြားရက် 9:00 ကနေ 18:00 JST မှာ instance 10)။ **Scale-out rule နဲ့အတူ scale-in rule ကိုပါ အမြဲ ဆောက်ပါ**၊ မဟုတ်ရင် တိုးပဲ တိုးပြီး ပြန်မလျော့ဘူး။ **Cooldown** က အတိုးအလျော့ ခဏခဏ မဖြစ်အောင် ကာကွယ်တယ်။ **Scale-in policy** က ဘယ် VM ကို အရင်ဖျက်မလဲ ဆုံးဖြတ်တယ်- **Default** (zone နဲ့ fault domain မျှအောင်လုပ်ပြီး instance ID အကြီးဆုံးကို ဖျက်)၊ **NewestVM**၊ **OldestVM**။ **Instance protection** နဲ့ VM တစ်လုံးကို scale-in ကနေ ချန်ထားလို့ရတယ်။ **Upgrade policy** (**Manual**၊ **Automatic**၊ **Rolling**) က image အသစ်လို model ပြောင်းလဲမှုကို ရှိပြီးသား instance တွေဆီ ဘယ်လို ရောက်စေမလဲ ထိန်းတယ်။"
          ) },
          { type: 'code', lang: 'bash', code:
`# Zone-redundant Flexible scale set behind a load balancer
az vmss create -g rg-lab -n vmss-web \\
  --orchestration-mode Flexible --image Ubuntu2204 \\
  --vm-sku Standard_D2s_v5 --instance-count 2 --zones 1 2 3 \\
  --admin-username azureuser --generate-ssh-keys \\
  --lb-sku Standard --scale-in-policy OldestVM

# Autoscale: min 2, max 10, default 2
az monitor autoscale create -g rg-lab --name as-web \\
  --resource vmss-web \\
  --resource-type Microsoft.Compute/virtualMachineScaleSets \\
  --min-count 2 --max-count 10 --count 2

az monitor autoscale rule create -g rg-lab --autoscale-name as-web \\
  --condition "Percentage CPU > 70 avg 10m" --scale out 1 --cooldown 5
az monitor autoscale rule create -g rg-lab --autoscale-name as-web \\
  --condition "Percentage CPU < 30 avg 10m" --scale in 1 --cooldown 5

# Manual scaling is also possible
az vmss scale -g rg-lab -n vmss-web --new-capacity 4`,
            caption: L("Create a scale set and attach autoscale rules", "スケールセットの作成と自動スケールルールの設定", "Scale set ဆောက်ပြီး autoscale rule တပ်ဆင်ခြင်း") },
          { type: 'callout', tone: 'exam', text: L(
            "Exam patterns: 'The scale set scales out but never scales in' → a **scale-in rule** is missing. 'Keep the newest instances because they have the latest config' → scale-in policy **OldestVM**. 'One instance runs a long job and must not be removed' → **instance protection** (protect from scale-in). Autoscale never goes below the **minimum** or above the **maximum** count.",
            "試験パターン：「スケールアウトはするがスケールインしない」→ **スケールインルール**がない。「最新の構成を持つ新しいインスタンスを残したい」→ スケールインポリシー **OldestVM**。「1 台が長時間ジョブを実行中で削除してはいけない」→ **インスタンス保護**（スケールインから保護）。自動スケールは**最小**を下回らず、**最大**を超えません。",
            "Exam ပုံစံတွေ- 'Scale set က scale out ဖြစ်ပေမယ့် scale in ဘယ်တော့မှ မဖြစ်ဘူး' → **scale-in rule** မရှိလို့။ 'Config အသစ်ဆုံးရှိတဲ့ instance အသစ်တွေကို ထားချင်တယ်' → scale-in policy **OldestVM**။ 'Instance တစ်လုံးက job ရှည် run နေလို့ မဖျက်ရဘူး' → **instance protection** (scale-in ကနေ ကာကွယ်)။ Autoscale က **minimum** အောက် မလျော့၊ **maximum** ထက် မကျော်ဘူး။"
          ) },
        ],
      },
      {
        id: "app-service",
        title: L("Azure App Service: plans, slots and scaling", "Azure App Service：プラン、スロット、スケーリング", "Azure App Service- plan၊ slot နဲ့ scaling"),
        blocks: [
          { type: 'p', text: L(
            "**Azure App Service** is PaaS for web apps and APIs (.NET, Java, Node.js, Python, PHP, or a custom container). You push code; Microsoft patches the OS, runtime and web server. The **App Service plan** is the set of VMs your apps run on: it defines the region, the **tier** (features) and the **instance count**. Several apps can share one plan, like several shops renting space in the same building: they share the rent and the capacity.",
            "**Azure App Service** は Web アプリや API（.NET、Java、Node.js、Python、PHP、カスタムコンテナー）向けの PaaS です。コードをプッシュするだけで、OS・ランタイム・Web サーバーのパッチは Microsoft が適用します。**App Service プラン**はアプリが動く VM の集合で、リージョン、**価格レベル**（機能）、**インスタンス数**を決めます。複数のアプリが 1 つのプランを共有でき、同じビルドにテナントとして入る複数の店舗のように、家賃と容量を共有します。",
            "**Azure App Service** က web app နဲ့ API (.NET၊ Java၊ Node.js၊ Python၊ PHP၊ custom container) အတွက် PaaS ပါ။ Code ကို push လုပ်ရုံပဲ၊ OS၊ runtime၊ web server patch တွေကို Microsoft က လုပ်ပေးတယ်။ **App Service plan** ဆိုတာ app တွေ run တဲ့ VM အစုပါ- region၊ **tier** (feature တွေ) နဲ့ **instance အရေအတွက်** ကို သတ်မှတ်တယ်။ App အများကြီးက plan တစ်ခုကို မျှသုံးနိုင်တယ်၊ အဆောက်အအုံ တစ်ခုထဲမှာ ဆိုင်ခန်းငှားတဲ့ ဆိုင်တွေလိုပဲ အငှားခ နဲ့ capacity ကို မျှကြတယ်။"
          ) },
          { type: 'table',
            head: [L("Tier", "価格レベル", "Tier အဆင့်"), L("Custom domain + TLS", "カスタムドメイン + TLS", "Custom domain + TLS ရလား"), L("Autoscale", "自動スケール", "Autoscale (အလိုအလျောက် scale)"), L("Deployment slots", "デプロイスロット", "Deployment slot ရလား"), L("Typical use", "主な用途", "ပုံမှန်အသုံး")],
            rows: [
              [L("Free (F1) / Shared (D1)", "Free（F1）/ Shared（D1）レベル", "Free (F1) / Shared (D1) tier အဆင့်"), L("No TLS binding", "TLS バインドなし", "TLS binding မရ"), L("No", "なし", "မရ"), L("No", "なし", "မရ"), L("Learning, demos (shared compute)", "学習、デモ（共有コンピューティング）", "လေ့လာရန်၊ demo (shared compute)")],
              [L("Basic (B1-B3)", "Basic（B1〜B3）レベル", "Basic (B1-B3) tier အဆင့်"), L("Yes", "あり", "ရ"), L("Manual only (few instances)", "手動のみ（少数インスタンス）", "Manual ပဲ (instance နည်းနည်း)"), L("No", "なし", "မရ"), L("Low-traffic production, dev/test", "低トラフィックの本番、開発/テスト", "Traffic နည်းတဲ့ production၊ dev/test")],
              [L("Standard (S1-S3)", "Standard（S1〜S3）レベル", "Standard (S1-S3) tier အဆင့်"), L("Yes", "あり", "ရ"), L("Yes", "あり", "ရ"), L("Yes (5)", "あり（5）", "ရ (၅ ခု)"), L("Most production apps", "ほとんどの本番アプリ", "Production app အများစု")],
              [L("Premium (v3/v4)", "Premium（v3/v4）レベル", "Premium (v3/v4) tier အဆင့်"), L("Yes", "あり", "ရ"), L("Yes (more instances)", "あり（より多くのインスタンス）", "ရ (instance ပိုများ)"), L("Yes (20)", "あり（20）", "ရ (၂၀)"), L("High performance, VNet-heavy apps", "高性能、VNet 連携が多いアプリ", "Performance မြင့်၊ VNet သုံးများတဲ့ app")],
              [L("Isolated v2 (App Service Environment)", "Isolated v2（App Service Environment）レベル", "Isolated v2 (App Service Environment) tier အဆင့်"), L("Yes", "あり", "ရ"), L("Yes (largest scale)", "あり（最大規模）", "ရ (အကြီးဆုံး scale)"), L("Yes (20)", "あり（20）", "ရ (၂၀)"), L("Single-tenant, network-isolated, compliance", "シングルテナント、ネットワーク分離、コンプライアンス", "Single-tenant၊ network isolate၊ compliance")],
            ] },
          { type: 'p', text: L(
            "**Deployment slots** are live copies of your app with their own hostnames (e.g. `myapp-staging.azurewebsites.net`). You deploy v2 to **staging**, test it, warm it up, then **swap** it with production: users get the new version with no downtime, and if something breaks you **swap back** in seconds. Settings marked as **deployment slot settings** (sticky), such as a production database connection string, stay with the slot and do not move during the swap. You can also route a percentage of traffic (e.g. 10%) to a slot for testing in production.",
            "**デプロイスロット**は独自のホスト名（例：`myapp-staging.azurewebsites.net`）を持つアプリのライブコピーです。v2 を **staging** にデプロイしてテストとウォームアップを行い、本番と**スワップ**します。ユーザーはダウンタイムなしで新バージョンを利用でき、問題があれば数秒で**元に戻す（スワップバック）**ことができます。本番 DB の接続文字列など、**デプロイスロットの設定**（固定）としてマークした設定はスロットに残り、スワップ時に移動しません。テスト目的でトラフィックの一定割合（例：10%）をスロットに振り分けることもできます。",
            "**Deployment slot** တွေက ကိုယ်ပိုင် hostname (ဥပမာ `myapp-staging.azurewebsites.net`) ပါတဲ့ app ရဲ့ live copy တွေပါ။ v2 ကို **staging** မှာ deploy၊ test၊ warm up လုပ်ပြီး production နဲ့ **swap** လုပ်လိုက်ရင် user တွေက downtime မရှိဘဲ version အသစ်ကို ရတယ်၊ ပြဿနာရှိရင် စက္ကန့်ပိုင်းအတွင်း **swap back** ပြန်လုပ်လို့ရတယ်။ Production database connection string လို **deployment slot setting** (sticky) လို့ မှတ်ထားတဲ့ setting တွေက slot မှာပဲ ကျန်ပြီး swap လုပ်ချိန် မရွှေ့ဘူး။ Production မှာ test ဖို့ traffic ရာခိုင်နှုန်း (ဥပမာ 10%) ကို slot ဆီ လွှဲပေးလို့လည်း ရတယ်။"
          ) },
          { type: 'p', text: L(
            "**Scale up** = move the plan to a bigger tier or size (more CPU/RAM, more features). **Scale out** = add more instances of the same size (manually or with autoscale on Standard and above). For a **custom domain** you prove ownership with DNS records (a `CNAME` for `www`, or an `A` record plus a `TXT` record named `asuid`), then bind a TLS certificate: a free **App Service managed certificate**, a certificate from **Key Vault**, or an uploaded one.",
            "**スケールアップ** = プランをより大きな価格レベルやサイズに変更（CPU/メモリや機能が増える）。**スケールアウト** = 同じサイズのインスタンスを追加（手動、または Standard 以上なら自動スケール）。**カスタムドメイン**では DNS レコード（`www` には `CNAME`、または `A` レコードと `asuid` という名前の `TXT` レコード）で所有権を証明し、TLS 証明書をバインドします。無料の **App Service マネージド証明書**、**Key Vault** の証明書、またはアップロードした証明書を使えます。",
            "**Scale up** = plan ကို tier/size ပိုကြီးတာကို ပြောင်း (CPU/RAM နဲ့ feature ပိုများ)။ **Scale out** = size တူတဲ့ instance တွေ ထပ်တိုး (manual ဒါမှမဟုတ် Standard နဲ့အထက်မှာ autoscale)။ **Custom domain** အတွက် DNS record (`www` အတွက် `CNAME`၊ ဒါမှမဟုတ် `A` record နဲ့ `asuid` နာမည်ရှိ `TXT` record) နဲ့ ပိုင်ဆိုင်မှုကို သက်သေပြပြီး TLS certificate ကို bind လုပ်ရတယ်- အခမဲ့ **App Service managed certificate**၊ **Key Vault** ထဲက certificate၊ ဒါမှမဟုတ် upload လုပ်ထားတဲ့ certificate ကို သုံးနိုင်တယ်။"
          ) },
          { type: 'code', lang: 'bash', code:
`# Plan (Standard S1, Linux) and a Node.js web app
az appservice plan create -g rg-lab -n plan-web --sku S1 --is-linux
az webapp create -g rg-lab -p plan-web -n myapp-kmk01 \\
  --runtime "NODE:20-lts"

# Staging slot, deploy there, then swap to production
az webapp deployment slot create -g rg-lab -n myapp-kmk01 --slot staging
az webapp deploy -g rg-lab -n myapp-kmk01 --slot staging \\
  --src-path app.zip --type zip
az webapp deployment slot swap -g rg-lab -n myapp-kmk01 \\
  --slot staging --target-slot production

# Scale up (bigger tier) vs scale out (more instances)
az appservice plan update -g rg-lab -n plan-web --sku P1V3
az appservice plan update -g rg-lab -n plan-web --number-of-workers 3`,
            caption: L("App Service plan, slots, swap and scaling", "App Service プラン、スロット、スワップ、スケーリング", "App Service plan၊ slot၊ swap နဲ့ scaling") },
          { type: 'callout', tone: 'memory', text: L(
            "**Up = bigger box, Out = more boxes.** Tier ladder for features: **Basic** gets custom TLS, **Standard** gets **S**lots and autoscale (**S** for **S**lots and **S**cale), **Premium** gets more of everything, **Isolated** gets its own network.",
            "**Up = 箱を大きく、Out = 箱を増やす。** 機能の階段：**Basic** でカスタム TLS、**Standard** で **S**lots と自動スケール（**S** は **S**lots と **S**cale）、**Premium** ですべてが増え、**Isolated** で専用ネットワーク。",
            "**Up = သေတ္တာ ပိုကြီး၊ Out = သေတ္တာ ပိုများ။** Feature လှေကား- **Basic** မှာ custom TLS ရ၊ **Standard** မှာ **S**lot နဲ့ autoscale ရ (**S** = **S**lot နဲ့ **S**cale)၊ **Premium** မှာ အားလုံး ပိုများ၊ **Isolated** မှာ ကိုယ်ပိုင် network ရ။"
          ) },
        ],
      },
      {
        id: "containers",
        title: L("Containers: ACI, Container Apps, AKS and ACR", "コンテナー：ACI、Container Apps、AKS、ACR", "Container- ACI၊ Container Apps၊ AKS နဲ့ ACR"),
        blocks: [
          { type: 'p', text: L(
            "A **container** packages an app with its libraries into an image that runs the same on a laptop and in Azure. Compared with a VM it shares the host OS kernel, so it starts in seconds and is much smaller. Analogy: a VM is a **whole house** with its own foundation and plumbing; a container is an **apartment** in a building, sharing the foundation but with its own locked door. Azure gives you several ways to run containers, from 'just run this one container' to 'full Kubernetes platform'.",
            "**コンテナー**は、アプリとライブラリをイメージにまとめ、ノート PC でも Azure でも同じように動かせるようにしたものです。VM と比べてホスト OS のカーネルを共有するため、数秒で起動し、サイズもはるかに小さくなります。たとえると、VM は基礎も配管も独自の**一戸建て**、コンテナーは基礎を共有しつつ自分の鍵付きドアを持つ**マンションの一室**です。Azure には「このコンテナーを 1 つ動かすだけ」から「本格的な Kubernetes プラットフォーム」まで、コンテナーを動かす方法が複数あります。",
            "**Container** ဆိုတာ app နဲ့ library တွေကို image တစ်ခုထဲ ထုပ်ပိုးထားလို့ laptop မှာရော Azure မှာပါ အတူတူ run တဲ့အရာပါ။ VM နဲ့ယှဉ်ရင် host OS kernel ကို မျှသုံးလို့ စက္ကန့်ပိုင်းအတွင်း start ပြီး size လည်း အများကြီး သေးတယ်။ ဥပမာ- VM က ကိုယ်ပိုင် အုတ်မြစ်၊ ရေပိုက်ပါတဲ့ **အိမ်တစ်လုံးလုံး**၊ container က အုတ်မြစ်ကို မျှသုံးပေမယ့် ကိုယ်ပိုင် သော့ခတ်တံခါးပါတဲ့ တိုက်ခန်း **တစ်ခန်း** ပါ။ Azure မှာ 'container တစ်ခုတည်း run ရုံ' ကနေ 'Kubernetes platform အပြည့်' အထိ container run နည်း အမျိုးမျိုးရှိတယ်။"
          ) },
          { type: 'list', items: [
            L("**Azure Container Instances (ACI)**: run a container (or a small **container group** that shares network and storage, like a pod) in seconds, billed per second, no servers or orchestrator. No built-in autoscale. Ideal for batch jobs, build agents and simple tasks.",
              "**Azure Container Instances（ACI）**：コンテナー（またはネットワークとストレージを共有する小さな**コンテナーグループ**、Pod のようなもの）を数秒で実行し、秒単位で課金。サーバーもオーケストレーターも不要です。組み込みの自動スケールはありません。バッチジョブ、ビルドエージェント、簡単なタスクに最適です。",
              "**Azure Container Instances (ACI)**- container (ဒါမှမဟုတ် network နဲ့ storage မျှသုံးတဲ့ pod လို **container group** အသေး) ကို စက္ကန့်ပိုင်းအတွင်း run၊ စက္ကန့်အလိုက် ငွေကျ၊ server နဲ့ orchestrator မလို။ Built-in autoscale မပါဘူး။ Batch job၊ build agent၊ ရိုးရှင်းတဲ့ task တွေအတွက် အကောင်းဆုံး။"),
            L("**Azure Container Apps (ACA)**: serverless platform for microservices and APIs, built on Kubernetes with **KEDA** (event-driven autoscale, including **scale to zero**), **Dapr** and built-in ingress, revisions and traffic splitting. You never touch Kubernetes itself.",
              "**Azure Container Apps（ACA）**：マイクロサービスや API 向けのサーバーレスプラットフォーム。Kubernetes 上に構築され、**KEDA**（**ゼロへのスケール**を含むイベント駆動の自動スケール）、**Dapr**、組み込みのイングレス、リビジョン、トラフィック分割を備えます。Kubernetes 自体を操作する必要はありません。",
              "**Azure Container Apps (ACA)**- microservice နဲ့ API အတွက် serverless platform။ Kubernetes ပေါ်မှာ ဆောက်ထားပြီး **KEDA** (**scale to zero** အပါအဝင် event-driven autoscale)၊ **Dapr**၊ built-in ingress၊ revision၊ traffic splitting တွေ ပါတယ်။ Kubernetes ကိုယ်တိုင်ကို ထိစရာ မလိုဘူး။"),
            L("**Azure Kubernetes Service (AKS)**: managed Kubernetes. Microsoft runs the control plane; you manage **node pools** (VMSS), upgrades, networking and Kubernetes objects. Choose it when you need full Kubernetes API control, custom operators or a platform team.",
              "**Azure Kubernetes Service（AKS）**：マネージド Kubernetes。コントロールプレーンは Microsoft が運用し、**ノードプール**（VMSS）、アップグレード、ネットワーク、Kubernetes オブジェクトは利用者が管理します。Kubernetes API の完全な制御、カスタムオペレーター、プラットフォームチームが必要な場合に選びます。",
              "**Azure Kubernetes Service (AKS)**- managed Kubernetes။ Control plane ကို Microsoft က run ပေးပြီး **node pool** (VMSS)၊ upgrade၊ networking၊ Kubernetes object တွေကို ကိုယ်တိုင် စီမံရတယ်။ Kubernetes API ကို အပြည့်ထိန်းချင်တာ၊ custom operator၊ platform team လိုတဲ့အခါ ရွေးပါ။"),
            L("**Azure Container Registry (ACR)**: private Docker/OCI registry for your images. Tiers **Basic**, **Standard**, **Premium** (Premium adds **geo-replication** and Private Link). `az acr build` builds images in the cloud without local Docker.",
              "**Azure Container Registry（ACR）**：イメージ用のプライベート Docker/OCI レジストリ。**Basic**、**Standard**、**Premium** の 3 つのレベルがあります（Premium は **geo レプリケーション**と Private Link に対応）。`az acr build` でローカルの Docker なしにクラウドでイメージをビルドできます。",
              "**Azure Container Registry (ACR)**- ကိုယ့် image တွေအတွက် private Docker/OCI registry။ Tier က **Basic**၊ **Standard**၊ **Premium** (Premium မှာ **geo-replication** နဲ့ Private Link ပါ)။ `az acr build` နဲ့ local Docker မလိုဘဲ cloud မှာ image build လို့ရတယ်။"),
          ] },
          { type: 'table',
            head: [L("Need", "要件", "လိုအပ်ချက်"), L("Best choice", "最適な選択", "အကောင်းဆုံးရွေးချယ်မှု"), L("Why", "理由", "ဘာကြောင့်လဲ")],
            rows: [
              [L("Run one container for 20 minutes every night", "毎晩 20 分だけコンテナーを 1 つ実行", "ညတိုင်း container တစ်ခုကို ၂၀ မိနစ် run"), L("ACI", "ACI（Container Instances）を使用", "ACI (Container Instances) ကို သုံးပါ"), L("Fastest start, pay per second, nothing to manage", "最速で起動、秒課金、管理不要", "အမြန်ဆုံး start၊ စက္ကန့်အလိုက် ပေး၊ စီမံစရာ မရှိ")],
              [L("Microservices API that scales to zero at night", "夜間にゼロまでスケールするマイクロサービス API", "ညမှာ zero ထိ scale ဆင်းတဲ့ microservice API"), L("Container Apps", "Container Apps を使用", "Container Apps ကို သုံးပါ"), L("Serverless, KEDA autoscale, revisions", "サーバーレス、KEDA 自動スケール、リビジョン", "Serverless၊ KEDA autoscale၊ revision")],
              [L("Platform team needs Helm, custom operators, node control", "プラットフォームチームが Helm、カスタムオペレーター、ノード制御を必要とする", "Platform team က Helm၊ custom operator၊ node control လို"), L("AKS", "AKS（マネージド Kubernetes）", "AKS (managed Kubernetes) ကို သုံးပါ"), L("Full Kubernetes API and ecosystem", "Kubernetes API とエコシステムを完全に利用", "Kubernetes API နဲ့ ecosystem အပြည့်")],
              [L("A web app packaged as one container", "1 つのコンテナーにまとめた Web アプリ", "Container တစ်ခုထဲ ထုပ်ထားတဲ့ web app"), L("App Service (Web App for Containers)", "App Service（Web App for Containers）を使用", "App Service (Web App for Containers) ကို သုံးပါ"), L("Slots, custom domains, TLS, simple scaling", "スロット、カスタムドメイン、TLS、簡単なスケーリング", "Slot၊ custom domain၊ TLS၊ ရိုးရှင်းတဲ့ scaling")],
            ] },
          { type: 'code', lang: 'bash', code:
`# Private registry and a cloud build (no local Docker needed)
az acr create -g rg-lab -n acrkmk01 --sku Basic
az acr build -r acrkmk01 -t hello:v1 .

# Run a public sample container in ACI
az container create -g rg-lab -n aci-hello \\
  --image mcr.microsoft.com/azuredocs/aci-helloworld \\
  --os-type Linux --cpu 1 --memory 1.5 \\
  --ports 80 --dns-name-label aci-hello-kmk01

# Let an AKS cluster pull from ACR (assigns AcrPull to the kubelet identity)
az aks update -g rg-lab -n aks-lab --attach-acr acrkmk01`,
            caption: L("ACR, ACI and AKS basics", "ACR・ACI・AKS の基本", "ACR၊ ACI နဲ့ AKS အခြေခံ") },
          { type: 'callout', tone: 'exam', text: L(
            "Watch the keywords: **'quickly run a container without managing servers or orchestration'** → ACI. **'Serverless microservices, scale to zero, Dapr/KEDA'** → Container Apps. **'Full control of Kubernetes'** → AKS. **'Store and replicate images across regions'** → ACR **Premium**. For AKS to pull from ACR, the cluster identity needs the **AcrPull** role.",
            "キーワードに注目：**「サーバーやオーケストレーションを管理せずにすばやくコンテナーを実行」**→ ACI。**「サーバーレスのマイクロサービス、ゼロへのスケール、Dapr/KEDA」**→ Container Apps。**「Kubernetes の完全な制御」**→ AKS。**「イメージを保存し複数リージョンに複製」**→ ACR **Premium**。AKS が ACR からプルするには、クラスター ID に **AcrPull** ロールが必要です。",
            "Keyword တွေကို သတိထားပါ- **'Server/orchestration မစီမံဘဲ container ကို အမြန် run'** → ACI။ **'Serverless microservice၊ scale to zero၊ Dapr/KEDA'** → Container Apps။ **'Kubernetes ကို အပြည့်ထိန်းချင်'** → AKS။ **'Image တွေကို သိမ်းပြီး region အများကြီးမှာ replicate'** → ACR **Premium**။ AKS က ACR ကနေ pull လုပ်ဖို့ cluster identity မှာ **AcrPull** role လိုတယ်။"
          ) },
        ],
      },
      {
        id: "functions-and-choosing",
        title: L("Azure Functions, Azure Virtual Desktop and choosing compute", "Azure Functions、Azure Virtual Desktop、コンピューティングの選び方", "Azure Functions၊ Azure Virtual Desktop နဲ့ compute ရွေးချယ်ခြင်း"),
        blocks: [
          { type: 'p', text: L(
            "**Azure Functions** is serverless, event-driven code: you write a small function and Azure runs it when something happens. Every function has exactly **one trigger** (what starts it: HTTP request, **Timer** (CRON schedule), new **Blob**, **Queue** message, **Service Bus**, **Event Hubs**, **Event Grid**, **Cosmos DB** change) and optional **bindings** that connect to other services without connection code (input binding reads data; output binding writes data). Example: a photo is uploaded to Blob Storage (trigger) → the function creates a thumbnail and writes it to another container (output binding) and a message to a queue (second output binding). For long, stateful workflows use **Durable Functions**.",
            "**Azure Functions** はサーバーレスのイベント駆動型コードです。小さな関数を書くと、何かが起きたときに Azure が実行します。各関数には必ず **1 つのトリガー**（起動のきっかけ：HTTP 要求、**Timer**（CRON スケジュール）、新しい **Blob**、**Queue** メッセージ、**Service Bus**、**Event Hubs**、**Event Grid**、**Cosmos DB** の変更）があり、任意で接続コードなしに他サービスとつなぐ**バインディング**を持てます（入力バインディングは読み取り、出力バインディングは書き込み）。例：写真が Blob Storage にアップロードされる（トリガー）→ 関数がサムネイルを作成し別のコンテナーに書き込み（出力バインディング）、キューにメッセージを送る（2 つ目の出力バインディング）。長時間でステートフルなワークフローには **Durable Functions** を使います。",
            "**Azure Functions** က serverless၊ event-driven code ပါ- function အသေးလေး ရေးထားရင် တစ်ခုခုဖြစ်တဲ့အခါ Azure က run ပေးတယ်။ Function တိုင်းမှာ **trigger တစ်ခုတည်း** (စတင်စေတဲ့အရာ- HTTP request၊ **Timer** (CRON schedule)၊ **Blob** အသစ်၊ **Queue** message၊ **Service Bus**၊ **Event Hubs**၊ **Event Grid**၊ **Cosmos DB** ပြောင်းလဲမှု) ရှိပြီး connection code မရေးဘဲ တခြား service နဲ့ ချိတ်ပေးတဲ့ **binding** တွေ ထည့်လို့ရတယ် (input binding က data ဖတ်၊ output binding က data ရေး)။ ဥပမာ- ဓာတ်ပုံကို Blob Storage ထဲ upload လုပ် (trigger) → function က thumbnail လုပ်ပြီး တခြား container ထဲ ရေး (output binding) ကာ queue ထဲ message ပို့ (ဒုတိယ output binding)။ အချိန်ကြာပြီး state ရှိတဲ့ workflow အတွက် **Durable Functions** ကို သုံးပါ။"
          ) },
          { type: 'table',
            head: [L("Hosting plan", "ホスティングプラン", "Hosting plan အမျိုးအစား"), L("Scaling and cold start", "スケーリングとコールドスタート", "Scaling နဲ့ cold start"), L("Networking / duration", "ネットワーク / 実行時間", "Networking / ကြာချိန်"), L("Choose when", "選ぶ場面", "ဘယ်အချိန်ရွေးလဲ")],
            rows: [
              [L("Consumption", "Consumption プラン", "Consumption plan အမျိုးအစား"), L("Scale to zero, pay per execution; cold starts", "ゼロへスケール、実行ごとの課金、コールドスタートあり", "Zero ထိ scale၊ execution အလိုက် ပေး၊ cold start ရှိ"), L("No VNet integration; max 10 min per run", "VNet 統合なし、1 回最大 10 分", "VNet integration မရ၊ တစ်ကြိမ် အများဆုံး ၁၀ မိနစ်"), L("Spiky, light event workloads", "変動が大きく軽いイベント処理", "ရုတ်တရက်တက်တဲ့ ပေါ့ပါးသော event workload")],
              [L("Flex Consumption", "Flex Consumption プラン", "Flex Consumption plan အမျိုးအစား"), L("Scale to zero plus optional always-ready instances", "ゼロへスケール + 任意の常時準備インスタンス", "Zero ထိ scale + always-ready instance ထည့်လို့ရ"), L("VNet integration; long runs", "VNet 統合あり、長時間実行可", "VNet integration ရ၊ အချိန်ကြာကြာ run ရ"), L("Recommended serverless option for new apps", "新規アプリ向けの推奨サーバーレス", "App အသစ်အတွက် အကြံပြုတဲ့ serverless")],
              [L("Premium (Elastic Premium)", "Premium（Elastic Premium）プラン", "Premium (Elastic Premium) plan အမျိုးအစား"), L("Pre-warmed instances, no cold start; always at least one instance billed", "事前ウォームアップ済みでコールドスタートなし、常に最低 1 インスタンス課金", "Pre-warmed instance၊ cold start မရှိ၊ အနည်းဆုံး instance ၁ ခု အမြဲ ငွေကျ"), L("VNet integration; unlimited duration", "VNet 統合あり、実行時間無制限", "VNet integration ရ၊ ကြာချိန် အကန့်အသတ်မရှိ"), L("Latency-sensitive, private network access", "レイテンシ重視、プライベートネットワーク接続", "Latency အရေးကြီး၊ private network လို")],
              [L("Dedicated (App Service plan)", "Dedicated（App Service プラン）", "Dedicated (App Service plan) အမျိုးအစား"), L("Runs on your existing plan; manual/autoscale; enable Always On", "既存プラン上で実行、手動/自動スケール、Always On を有効化", "ရှိပြီးသား plan ပေါ်မှာ run၊ manual/autoscale၊ Always On ဖွင့်"), L("Plan features; unlimited duration", "プランの機能に準拠、実行時間無制限", "Plan feature အတိုင်း၊ ကြာချိန် အကန့်အသတ်မရှိ"), L("You already pay for an underused App Service plan", "使い切れていない App Service プランが既にある", "သိပ်မသုံးတဲ့ App Service plan ကို ပေးနေပြီးသား")],
            ] },
          { type: 'p', text: L(
            "**Azure Virtual Desktop (AVD)** delivers Windows desktops and apps from Azure to any device. Session hosts are Azure VMs grouped into **host pools**: **pooled** (many users share multi-session Windows 11/10 Enterprise VMs, cost-efficient) or **personal** (one user per VM). Users get **app groups** through a **workspace**, and **FSLogix** profile containers (usually on Azure Files) keep each user's profile when they land on a different VM. Typical use: secure remote work for call centers, contractors or developers without shipping laptops.",
            "**Azure Virtual Desktop（AVD）**は Azure から任意のデバイスへ Windows デスクトップとアプリを提供します。セッションホストは**ホストプール**にまとめられた Azure VM で、**プール型**（複数ユーザーがマルチセッション Windows 11/10 Enterprise VM を共有、コスト効率が高い）または**個人用**（1 ユーザー 1 VM）があります。ユーザーは**ワークスペース**を通じて**アプリケーショングループ**を利用し、**FSLogix** プロファイルコンテナー（通常は Azure Files 上）により別の VM に接続してもプロファイルが維持されます。主な用途：ノート PC を配布せずに、コールセンター、委託先、開発者に安全なリモートワーク環境を提供することです。",
            "**Azure Virtual Desktop (AVD)** က Windows desktop နဲ့ app တွေကို Azure ကနေ ဘယ် device မဆိုဆီ ပို့ပေးတယ်။ Session host တွေက **host pool** ထဲ စုထားတဲ့ Azure VM တွေပါ- **pooled** (user အများက multi-session Windows 11/10 Enterprise VM ကို မျှသုံး၊ ကုန်ကျစရိတ်သက်သာ) ဒါမှမဟုတ် **personal** (VM တစ်လုံးမှာ user တစ်ယောက်)။ User တွေက **workspace** ကနေ **app group** တွေကို ရတယ်၊ **FSLogix** profile container (များသောအားဖြင့် Azure Files ပေါ်) ကြောင့် VM တခြားကို ရောက်လည်း ကိုယ့် profile မပျောက်ဘူး။ ပုံမှန်အသုံး- laptop မပို့ဘဲ call center၊ contractor၊ developer တွေအတွက် လုံခြုံတဲ့ remote work ပေးတာပါ။"
          ) },
          { type: 'table',
            head: [L("Scenario", "シナリオ", "Scenario (အခြေအနေ)"), L("Choose", "選択", "ရွေးရမယ့် service")],
            rows: [
              [L("Lift-and-shift app needing OS access or a custom agent", "OS へのアクセスやカスタムエージェントが必要なリフト&シフト", "OS access ဒါမှမဟုတ် custom agent လိုတဲ့ lift-and-shift app"), L("Virtual Machines", "Virtual Machines を使用", "Virtual Machines ကို သုံးပါ")],
              [L("Many identical VMs that grow and shrink with load", "負荷に応じて増減する多数の同一 VM", "Load အလိုက် တိုး/လျော့ရမယ့် VM တူတွေ အများကြီး"), L("VM Scale Sets", "VM Scale Sets を使用", "VM Scale Sets ကို သုံးပါ")],
              [L("Web app or REST API, no server management, slots", "サーバー管理不要の Web アプリ/REST API、スロット", "Server မစီမံရတဲ့ web app/REST API၊ slot လို"), L("App Service", "App Service を使用", "App Service ကို သုံးပါ")],
              [L("Short code reacting to events, pay per execution", "イベントに反応する短いコード、実行ごとの課金", "Event ကို တုံ့ပြန်တဲ့ code တို၊ execution အလိုက် ပေး"), L("Azure Functions", "Azure Functions を使用", "Azure Functions ကို သုံးပါ")],
              [L("Containerized microservices without Kubernetes skills", "Kubernetes スキル不要のコンテナー化マイクロサービス", "Kubernetes ကျွမ်းကျင်မှု မလိုတဲ့ containerized microservice"), L("Azure Container Apps", "Azure Container Apps を使用", "Azure Container Apps ကို သုံးပါ")],
              [L("Complex container platform with full Kubernetes control", "Kubernetes を完全に制御する複雑なコンテナー基盤", "Kubernetes ကို အပြည့်ထိန်းတဲ့ ရှုပ်ထွေးသော container platform"), L("AKS", "AKS（マネージド Kubernetes）", "AKS (managed Kubernetes) ကို သုံးပါ")],
              [L("Remote Windows desktops for staff", "社員向けのリモート Windows デスクトップ", "ဝန်ထမ်းတွေအတွက် remote Windows desktop"), L("Azure Virtual Desktop", "Azure Virtual Desktop を使用", "Azure Virtual Desktop ကို သုံးပါ")],
            ] },
          { type: 'callout', tone: 'exam', text: L(
            "Decision rule used by the exam: pick the **most managed** service that still meets the requirements. Need OS control → VM. Need to avoid cold starts or need VNet access for functions → **Premium** (or Flex Consumption). 'Run code on a schedule every 5 minutes with the least cost' → Functions **Timer trigger** on a consumption-based plan.",
            "試験の判断ルール：要件を満たす中で**最もマネージドな**サービスを選びます。OS の制御が必要 → VM。Functions でコールドスタートを避けたい、または VNet アクセスが必要 → **Premium**（または Flex Consumption）。「5 分ごとに最小コストでコードを実行」→ 従量課金系プランの Functions **Timer トリガー**。",
            "Exam ရဲ့ ဆုံးဖြတ်ချက် rule- လိုအပ်ချက်ကို ဖြည့်နိုင်သမျှထဲက **အများဆုံး managed** ဖြစ်တဲ့ service ကို ရွေးပါ။ OS ထိန်းချုပ်ဖို့လို → VM။ Function မှာ cold start ရှောင်ချင်/VNet access လို → **Premium** (သို့မဟုတ် Flex Consumption)။ 'Code ကို ၅ မိနစ်တစ်ခါ ကုန်ကျစရိတ် အနည်းဆုံးနဲ့ run' → consumption-based plan ပေါ်က Functions **Timer trigger**။"
          ) },
        ],
      },
    ],
    summary: [
      L("VM size names follow family + vCPUs + feature letters + version: `D4s_v5` = general purpose, 4 vCPUs, Premium SSD capable, v5.",
        "VM サイズ名はファミリ + vCPU 数 + 機能文字 + バージョン：`D4s_v5` = 汎用、4 vCPU、Premium SSD 対応、v5。",
        "VM size နာမည်က family + vCPU + feature စာလုံး + version ပုံစံ- `D4s_v5` = general purpose၊ vCPU 4၊ Premium SSD ရ၊ v5။"),
      L("OS and data disks are durable managed disks; the temp disk is lost on deallocation or redeploy. Premium SSD v2 and Ultra are data-disk only.",
        "OS ディスクとデータディスクは永続的なマネージドディスク、一時ディスクは割り当て解除や再デプロイで失われます。Premium SSD v2 と Ultra はデータディスク専用です。",
        "OS disk နဲ့ data disk က ခိုင်မာတဲ့ managed disk၊ temp disk က deallocate/redeploy လုပ်ရင် ပျောက်တယ်။ Premium SSD v2 နဲ့ Ultra က data disk အတွက်ပဲ။"),
      L("Only **Stopped (deallocated)** stops compute billing; an OS shutdown leaves the VM **Stopped** and still billed. Disks are always billed.",
        "コンピューティング課金を止めるのは **Stopped (deallocated)** だけです。OS のシャットダウンでは **Stopped** のままで課金が続きます。ディスクは常に課金されます。",
        "Compute billing ကို ရပ်တာ **Stopped (deallocated)** တစ်ခုတည်းပဲ၊ OS shutdown က **Stopped** ဖြစ်ပြီး ငွေဆက်ကျတယ်။ Disk ငွေကတော့ အမြဲကျတယ်။"),
      L("Resizing restarts the VM; if the target size is not available, deallocate first.",
        "サイズ変更すると VM は再起動します。目的のサイズが利用できない場合は先に割り当て解除します。",
        "Resize လုပ်ရင် VM restart ဖြစ်တယ်၊ size အသစ် မရရင် အရင် deallocate လုပ်ပါ။"),
      L("Connect securely with **Bastion** (AzureBastionSubnet, no public IP) or **JIT** (Defender for Cloud, NSG rules); troubleshoot with boot diagnostics, serial console and Run Command.",
        "**Bastion**（AzureBastionSubnet、パブリック IP 不要）または **JIT**（Defender for Cloud、NSG ルール）で安全に接続し、ブート診断・シリアルコンソール・Run Command でトラブルシュートします。",
        "**Bastion** (AzureBastionSubnet၊ public IP မလို) ဒါမှမဟုတ် **JIT** (Defender for Cloud၊ NSG rule) နဲ့ လုံခြုံစွာ ချိတ်ပြီး boot diagnostics၊ serial console၊ Run Command နဲ့ troubleshoot လုပ်ပါ။"),
      L("SLA ladder: single Premium VM 99.9%, availability set 99.95% (fault + update domains), availability zones 99.99%. Availability sets are chosen only at creation.",
        "SLA のはしご：単一 Premium VM 99.9%、可用性セット 99.95%（障害 + 更新ドメイン）、可用性ゾーン 99.99%。可用性セットは作成時にのみ選択できます。",
        "SLA လှေကား- Premium VM တစ်လုံး 99.9%၊ Availability Set 99.95% (fault + update domain)၊ Availability Zone 99.99%။ Availability Set ကို ဆောက်ချိန်မှာပဲ ရွေးလို့ရတယ်။"),
      L("VM Scale Sets (Flexible recommended) autoscale between min and max with scale-out **and** scale-in rules; the scale-in policy picks which VM is removed.",
        "VM Scale Sets（Flexible 推奨）は、スケールアウト**と**スケールインのルールで最小〜最大の範囲で自動スケールし、スケールインポリシーが削除する VM を決めます。",
        "VM Scale Set (Flexible ကို အကြံပြု) က scale-out **နဲ့** scale-in rule တွေနဲ့ min နဲ့ max ကြားမှာ autoscale လုပ်ပြီး scale-in policy က ဘယ် VM ဖျက်မလဲ ရွေးတယ်။"),
      L("Pick the most managed service that fits: App Service (Standard+ for slots/autoscale), Functions (event-driven), ACI (simple containers), Container Apps (serverless microservices), AKS (full Kubernetes), AVD (remote desktops).",
        "要件に合う最もマネージドなサービスを選びます：App Service（スロット/自動スケールは Standard 以上）、Functions（イベント駆動）、ACI（シンプルなコンテナー）、Container Apps（サーバーレスのマイクロサービス）、AKS（完全な Kubernetes）、AVD（リモートデスクトップ）。",
        "လိုအပ်ချက်နဲ့ ကိုက်တဲ့ အများဆုံး managed service ကို ရွေးပါ- App Service (slot/autoscale အတွက် Standard+)၊ Functions (event-driven)၊ ACI (ရိုးရှင်းတဲ့ container)၊ Container Apps (serverless microservice)၊ AKS (Kubernetes အပြည့်)၊ AVD (remote desktop)။"),
    ],
  },
  questions: [
    {
      difficulty: 'EASY',
      exams: ['AZ-900'],
      prompt: L("A company must install a third-party monitoring agent directly into the operating system of its application server. Which Azure compute service gives it full control of the OS?",
        "ある企業は、アプリケーションサーバーの OS にサードパーティの監視エージェントを直接インストールする必要があります。OS を完全に制御できる Azure のコンピューティングサービスはどれですか？",
        "Company တစ်ခုက application server ရဲ့ OS ထဲကို third-party monitoring agent တိုက်ရိုက် install လုပ်ရမယ်။ OS ကို အပြည့်ထိန်းနိုင်တဲ့ Azure compute service က ဘယ်ဟာလဲ?"),
      options: ['Azure App Service', 'Azure Functions', 'Azure Virtual Machines', 'Azure Container Instances'],
      correct: [2],
      explanation: L("Virtual Machines are IaaS, so you manage the OS and can install any agent. App Service is PaaS: Microsoft manages the OS and you cannot install OS-level software there.",
        "Virtual Machines は IaaS なので OS を管理でき、任意のエージェントをインストールできます。App Service は PaaS で OS は Microsoft が管理するため、OS レベルのソフトウェアはインストールできません。",
        "Virtual Machines က IaaS ဖြစ်လို့ OS ကို ကိုယ်တိုင်စီမံပြီး ဘယ် agent မဆို install လုပ်လို့ရတယ်။ App Service က PaaS ဖြစ်ပြီး OS ကို Microsoft က စီမံလို့ OS-level software တင်လို့ မရဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("A developer shut down a test VM from inside Windows, but compute charges continue. Which VM state stops compute billing?",
        "開発者が Windows の内部からテスト VM をシャットダウンしましたが、コンピューティング料金が発生し続けています。コンピューティング課金が止まる VM の状態はどれですか？",
        "Developer တစ်ယောက်က test VM ကို Windows ထဲကနေ shutdown လုပ်ထားပေမယ့် compute ငွေ ဆက်ကျနေတယ်။ Compute billing ရပ်သွားတဲ့ VM state က ဘယ်ဟာလဲ?"),
      options: ['Stopped', 'Stopped (deallocated)', 'Running', 'Starting'],
      correct: [1],
      explanation: L("Only Stopped (deallocated) releases the host hardware and stops compute billing. An OS shutdown leaves the VM in Stopped, where the hardware is still reserved and billed.",
        "Stopped (deallocated) だけがホストのハードウェアを解放し、コンピューティング課金を止めます。OS からのシャットダウンでは Stopped 状態となり、ハードウェアは確保されたまま課金されます。",
        "Stopped (deallocated) ကမှ host hardware ကို လွှတ်ပြီး compute billing ကို ရပ်တယ်။ OS shutdown က VM ကို Stopped အခြေအနေမှာ ထားလို့ hardware ကို ဆက်ယူထားပြီး ငွေဆက်ကျတယ်။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-104'],
      prompt: L("In the VM size name Standard_D4s_v5, what does the number 4 represent?",
        "VM サイズ名 Standard_D4s_v5 の数字 4 は何を表していますか？",
        "VM size နာမည် Standard_D4s_v5 ထဲက ဂဏန်း 4 က ဘာကို ကိုယ်စားပြုလဲ?"),
      options: ['Number of vCPUs', 'Hardware generation', 'Maximum number of data disks', 'Memory in GiB'],
      correct: [0],
      explanation: L("The number after the family letter is the vCPU count. The hardware generation is the suffix v5, not the 4; memory and disk limits are listed in the size specification.",
        "ファミリ文字の後の数字は vCPU 数です。ハードウェア世代は 4 ではなくサフィックスの v5 です。メモリやディスクの上限はサイズの仕様に記載されています。",
        "Family စာလုံးနောက်က ဂဏန်းက vCPU အရေအတွက်ပါ။ Hardware generation က 4 မဟုတ်ဘဲ နောက်ဆုံးက v5 ပါ။ Memory နဲ့ disk limit တွေကတော့ size specification မှာ ပါတယ်။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900'],
      prompt: L("You need to run a small piece of code every time a file is uploaded to Blob Storage, and pay only when the code runs. Which service should you use?",
        "Blob Storage にファイルがアップロードされるたびに小さなコードを実行し、実行時のみ料金を支払いたいと考えています。どのサービスを使うべきですか？",
        "Blob Storage ထဲ file upload လုပ်တိုင်း code အသေးလေး run ချင်ပြီး code run မှသာ ငွေပေးချင်တယ်။ ဘယ် service ကို သုံးသင့်လဲ?"),
      options: ['Azure Virtual Machines', 'Azure Functions', 'Azure Kubernetes Service', 'Azure Virtual Desktop'],
      correct: [1],
      explanation: L("Azure Functions is event-driven serverless compute with a Blob trigger and per-execution billing on consumption-based plans. A VM would run and bill 24/7 even when no files arrive.",
        "Azure Functions はイベント駆動のサーバーレスで、Blob トリガーを持ち、従量課金系プランでは実行ごとに課金されます。VM はファイルが届かなくても 24 時間稼働し課金されます。",
        "Azure Functions က Blob trigger ပါတဲ့ event-driven serverless compute ဖြစ်ပြီး consumption-based plan မှာ execution အလိုက် ငွေကျတယ်။ VM ဆိုရင် file မလာလည်း ၂၄ နာရီ run ပြီး ငွေကျနေမယ်။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-104'],
      prompt: L("Which TWO actions cause data on a VM's temporary disk to be lost? (Select TWO)",
        "VM の一時ディスク上のデータが失われる操作はどれですか？（2 つ選択）",
        "VM ရဲ့ temporary disk ပေါ်က data ပျောက်စေတဲ့ လုပ်ဆောင်ချက် နှစ်ခုက ဘာတွေလဲ? (Select TWO)"),
      options: ['Deallocating the VM', 'Restarting the OS from inside the VM', 'Redeploying the VM', 'Taking a snapshot of the OS disk'],
      correct: [0, 2],
      explanation: L("Deallocation and redeploy can move the VM to a different host, and the temp disk is local to the old host, so its data is gone. A normal OS restart keeps the VM on the same host, so the temp disk usually survives.",
        "割り当て解除と再デプロイでは VM が別のホストに移る可能性があり、一時ディスクは元のホストのローカルにあるためデータは失われます。通常の OS 再起動では同じホストに留まるため、一時ディスクは通常残ります。",
        "Deallocate နဲ့ redeploy က VM ကို host တခြားကို ရွှေ့နိုင်ပြီး temp disk က host အဟောင်းပေါ်က local disk ဖြစ်လို့ data ပျောက်တယ်။ ပုံမှန် OS restart က host တစ်ခုတည်းမှာ ရှိနေလို့ temp disk များသောအားဖြင့် မပျောက်ဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900'],
      prompt: L("A call center wants staff to access a managed Windows desktop from any device without the company shipping laptops. Which Azure service fits best?",
        "コールセンターは、会社がノート PC を配布せずに、スタッフが任意のデバイスから管理された Windows デスクトップにアクセスできるようにしたいと考えています。最適な Azure サービスはどれですか？",
        "Call center တစ်ခုက laptop မပို့ဘဲ ဝန်ထမ်းတွေ ဘယ် device ကနေမဆို စီမံထားတဲ့ Windows desktop ကို သုံးနိုင်စေချင်တယ်။ ဘယ် Azure service က အသင့်တော်ဆုံးလဲ?"),
      options: ['Azure Virtual Desktop', 'Azure Bastion', 'Azure App Service', 'Azure Container Apps'],
      correct: [0],
      explanation: L("Azure Virtual Desktop delivers full Windows desktops and apps to users on any device. Azure Bastion is an admin tool for RDP/SSH to individual VMs, not a desktop service for end users.",
        "Azure Virtual Desktop は任意のデバイスのユーザーに Windows デスクトップとアプリを提供します。Azure Bastion は個々の VM への RDP/SSH 用の管理者ツールで、エンドユーザー向けのデスクトップサービスではありません。",
        "Azure Virtual Desktop က ဘယ် device ပေါ်က user ကိုမဆို Windows desktop နဲ့ app တွေ ပေးတယ်။ Azure Bastion က VM တစ်လုံးချင်းကို RDP/SSH ချိတ်ဖို့ admin tool ဖြစ်ပြီး end user အတွက် desktop service မဟုတ်ဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("Administrators must connect to VMs over RDP and SSH from the Azure portal, and the VMs must not have public IP addresses. What should you deploy?",
        "管理者は Azure ポータルから RDP と SSH で VM に接続する必要があり、VM にはパブリック IP アドレスを付与してはいけません。何をデプロイすべきですか？",
        "Admin တွေက Azure portal ကနေ RDP နဲ့ SSH သုံးပြီး VM ကို ချိတ်ရမယ်၊ VM တွေမှာ public IP မရှိရဘူး။ ဘာကို deploy လုပ်သင့်လဲ?"),
      options: ['Azure Network Watcher', 'Azure Firewall', 'Azure Load Balancer', 'Azure Bastion'],
      correct: [3],
      explanation: L("Azure Bastion provides browser-based RDP/SSH over HTTPS to VMs using their private IPs. A load balancer distributes application traffic; it does not provide secure admin sessions.",
        "Azure Bastion はプライベート IP を使って、HTTPS 経由でブラウザーベースの RDP/SSH を提供します。Load Balancer はアプリのトラフィックを分散するもので、安全な管理セッションは提供しません。",
        "Azure Bastion က private IP ကိုသုံးပြီး HTTPS ကနေ browser-based RDP/SSH ပေးတယ်။ Load Balancer က application traffic ကို ခွဲဝေပေးတာဖြစ်ပြီး လုံခြုံတဲ့ admin session မပေးဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900'],
      prompt: L("Your team needs a private place in Azure to store and version Docker container images. Which service should you use?",
        "チームは Docker コンテナーイメージを保存し、バージョン管理するための Azure 上のプライベートな場所を必要としています。どのサービスを使うべきですか？",
        "Team က Docker container image တွေကို သိမ်းပြီး version စီမံဖို့ Azure ထဲမှာ private နေရာတစ်ခု လိုတယ်။ ဘယ် service ကို သုံးသင့်လဲ?"),
      options: ['Azure Container Instances', 'Azure Kubernetes Service', 'Azure Container Apps', 'Azure Container Registry'],
      correct: [3],
      explanation: L("Azure Container Registry is a private registry for container images. ACI, AKS and Container Apps run containers; they pull images from a registry but do not store them.",
        "Azure Container Registry はコンテナーイメージ用のプライベートレジストリです。ACI、AKS、Container Apps はコンテナーを実行するサービスで、レジストリからイメージをプルしますが保存はしません。",
        "Azure Container Registry က container image အတွက် private registry ပါ။ ACI၊ AKS၊ Container Apps က container run တဲ့ service တွေဖြစ်ပြီး registry ကနေ image ကို pull လုပ်ပေမယ့် သိမ်းမထားဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("You deploy two VMs in the same availability set. What is the VM connectivity SLA?",
        "同じ可用性セットに 2 台の VM をデプロイしました。VM の接続性 SLA はいくつですか？",
        "Availability Set တစ်ခုတည်းထဲမှာ VM ၂ လုံး deploy လုပ်ထားတယ်။ VM connectivity SLA က ဘယ်လောက်လဲ?"),
      options: ['99.9%', '99.99%', '99.5%', '99.95%'],
      correct: [3],
      explanation: L("Two or more VMs in an availability set get 99.95%. 99.99% requires two or more VMs across two or more availability zones, and 99.9% is the single-VM SLA with Premium disks.",
        "可用性セット内の 2 台以上の VM は 99.95% です。99.99% には 2 つ以上の可用性ゾーンにまたがる 2 台以上の VM が必要で、99.9% は Premium ディスクを使う単一 VM の SLA です。",
        "Availability Set ထဲက VM ၂ လုံး+ ဆိုရင် 99.95% ရတယ်။ 99.99% အတွက် zone ၂ ခု+ မှာ ဖြန့်ထားတဲ့ VM ၂ လုံး+ လိုပြီး 99.9% က Premium disk သုံးတဲ့ VM တစ်လုံးတည်းရဲ့ SLA ပါ။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("A web app needs deployment slots and autoscale. You must choose the lowest-cost App Service tier that supports both. Which tier should you choose?",
        "Web アプリにはデプロイスロットと自動スケールが必要です。両方に対応する最も低コストの App Service 価格レベルを選ぶ必要があります。どれを選びますか？",
        "Web app မှာ deployment slot နဲ့ autoscale နှစ်ခုလုံး လိုတယ်။ နှစ်ခုလုံး ထောက်ပံ့တဲ့ ဈေးအသက်သာဆုံး App Service tier ကို ရွေးရမယ်။ ဘယ် tier လဲ?"),
      options: ['Free', 'Basic', 'Standard', 'Premium v3'],
      correct: [2],
      explanation: L("Standard is the first tier with deployment slots (5) and autoscale. Basic supports custom domains/TLS and manual scale-out only, with no slots; Premium v3 works but costs more.",
        "Standard はデプロイスロット（5 個）と自動スケールに対応する最初のレベルです。Basic はカスタムドメイン/TLS と手動スケールアウトのみでスロットはありません。Premium v3 でも可能ですがコストが高くなります。",
        "Deployment slot (၅ ခု) နဲ့ autoscale ပါတဲ့ ပထမဆုံး tier က Standard ပါ။ Basic မှာ custom domain/TLS နဲ့ manual scale-out ပဲရပြီး slot မရှိဘူး။ Premium v3 လည်း ရပေမယ့် ဈေးပိုကြီးတယ်။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("You run `az vm deallocate` on a VM that uses managed disks. Which TWO statements are true while the VM is in the Stopped (deallocated) state? (Select TWO)",
        "マネージドディスクを使う VM に `az vm deallocate` を実行しました。VM が Stopped (deallocated) 状態の間に正しい記述はどれですか？（2 つ選択）",
        "Managed disk သုံးတဲ့ VM ပေါ်မှာ `az vm deallocate` run လိုက်တယ်။ VM က Stopped (deallocated) ဖြစ်နေစဉ် မှန်တဲ့ အဆို နှစ်ခုက ဘာတွေလဲ? (Select TWO)"),
      options: ['Compute charges stop', 'Data on the temporary disk is preserved', 'Managed disk storage charges continue', 'The VM keeps its allocation on the same physical host'],
      correct: [0, 2],
      explanation: L("Deallocation releases the host, so compute billing stops, but managed disks still exist and are still billed. Because the host is released, the temp disk data is not preserved and the VM may start on a different host.",
        "割り当て解除によりホストが解放されるため、コンピューティング課金は止まりますが、マネージドディスクは存在し続け課金されます。ホストが解放されるため一時ディスクのデータは保持されず、VM は別のホストで起動する場合があります。",
        "Deallocate က host ကို လွှတ်ပေးလို့ compute billing ရပ်ပေမယ့် managed disk တွေ ဆက်ရှိပြီး ငွေဆက်ကျတယ်။ Host ကို လွှတ်လိုက်လို့ temp disk data မကျန်ဘဲ VM က host တခြားမှာ start ဖြစ်နိုင်တယ်။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("A VM Scale Set adds instances when average CPU exceeds 75%, but after the traffic peak the instance count never decreases. What should you do?",
        "VM Scale Set は平均 CPU が 75% を超えるとインスタンスを追加しますが、トラフィックのピーク後もインスタンス数が減りません。何をすべきですか？",
        "VM Scale Set က CPU ပျမ်းမျှ 75% ကျော်ရင် instance တိုးပေမယ့် traffic peak ပြီးနောက် instance အရေအတွက် ဘယ်တော့မှ မလျော့ဘူး။ ဘာလုပ်သင့်လဲ?"),
      options: ['Add a scale-in rule, for example CPU below 30%', 'Change the orchestration mode to Uniform', 'Increase the maximum instance count', 'Enable instance protection on all instances'],
      correct: [0],
      explanation: L("Autoscale only scales in if a scale-in rule exists, so add one (e.g. average CPU < 30% over 10 minutes, remove 1). Instance protection would do the opposite and block scale-in.",
        "自動スケールはスケールインのルールがある場合にのみスケールインするため、ルールを追加します（例：10 分間の平均 CPU が 30% 未満で 1 台削除）。インスタンス保護は逆にスケールインをブロックします。",
        "Autoscale က scale-in rule ရှိမှသာ scale in လုပ်လို့ rule တစ်ခု ထည့်ပါ (ဥပမာ ၁၀ မိနစ် ပျမ်းမျှ CPU 30% အောက်ဆို ၁ လုံး လျှော့)။ Instance protection က ဆန့်ကျင်ဘက် scale-in ကို ပိတ်ပစ်မှာပါ။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("A SQL Server VM stores transaction log files on a dedicated Premium SSD data disk. Which host caching setting should you configure for the log disk?",
        "SQL Server VM はトランザクションログファイルを専用の Premium SSD データディスクに保存しています。ログディスクにはどのホストキャッシュ設定を構成すべきですか？",
        "SQL Server VM က transaction log file တွေကို သီးသန့် Premium SSD data disk ပေါ်မှာ သိမ်းတယ်။ Log disk အတွက် ဘယ် host caching setting ကို ထားသင့်လဲ?"),
      options: ['ReadOnly', 'ReadWrite', 'None'],
      correct: [2],
      explanation: L("Log files are write-heavy and sequential, so caching gives no benefit and None is recommended. ReadOnly is the recommendation for the data files disk, where reads dominate.",
        "ログファイルは書き込み中心かつシーケンシャルなのでキャッシュの効果がなく、None が推奨です。ReadOnly は読み取りが多いデータファイル用ディスクの推奨設定です。",
        "Log file တွေက ရေးတာများပြီး sequential ဖြစ်လို့ caching က အကျိုးမရှိ၊ None ကို အကြံပြုတယ်။ ReadOnly ကတော့ ဖတ်တာများတဲ့ data file disk အတွက် အကြံပြုချက်ပါ။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("You need to use the Azure serial console to repair a Linux VM whose SSH configuration is broken. Which TWO prerequisites must be met? (Select TWO)",
        "SSH 構成が壊れた Linux VM を Azure シリアルコンソールで修復する必要があります。満たすべき前提条件はどれですか？（2 つ選択）",
        "SSH configuration ပျက်နေတဲ့ Linux VM ကို Azure serial console နဲ့ ပြင်ရမယ်။ ပြည့်မီရမယ့် prerequisite နှစ်ခုက ဘာတွေလဲ? (Select TWO)"),
      options: ['Boot diagnostics is enabled on the VM', 'A local user account with a password exists', 'The VM has a public IP address', 'Port 22 is open in the NSG', 'Azure Bastion is deployed in the VNet'],
      correct: [0, 1],
      explanation: L("Serial console depends on boot diagnostics and needs a local user with password authentication to log in. It does not use the network path, so a public IP, open port 22 or Bastion are not required.",
        "シリアルコンソールはブート診断に依存し、ログインにはパスワード認証のローカルユーザーが必要です。ネットワーク経路を使わないため、パブリック IP、ポート 22 の開放、Bastion は不要です。",
        "Serial console က boot diagnostics ပေါ်မှာ မူတည်ပြီး login ဝင်ဖို့ password ပါတဲ့ local user လိုတယ်။ Network လမ်းကြောင်းကို မသုံးလို့ public IP၊ port 22 ဖွင့်ထားတာ၊ Bastion တွေ မလိုဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("You are deploying Azure Bastion into an existing VNet. Which subnet configuration is required?",
        "既存の VNet に Azure Bastion をデプロイします。必要なサブネット構成はどれですか？",
        "ရှိပြီးသား VNet ထဲကို Azure Bastion deploy လုပ်မယ်။ ဘယ် subnet configuration လိုအပ်လဲ?"),
      options: ['A subnet named GatewaySubnet with a /27 prefix', 'Any subnet with an NSG that allows port 3389 from the internet', 'A subnet named BastionSubnet with a /29 prefix', 'A subnet named AzureBastionSubnet with a /26 or larger prefix'],
      correct: [3],
      explanation: L("Bastion requires a dedicated subnet named exactly AzureBastionSubnet, sized /26 or larger. GatewaySubnet is reserved for VPN/ExpressRoute gateways, not Bastion.",
        "Bastion には正確に AzureBastionSubnet という名前で /26 以上の専用サブネットが必要です。GatewaySubnet は VPN/ExpressRoute ゲートウェイ用で、Bastion 用ではありません。",
        "Bastion အတွက် နာမည် အတိအကျ AzureBastionSubnet ဖြစ်ပြီး /26 သို့မဟုတ် ပိုကြီးတဲ့ သီးသန့် subnet လိုတယ်။ GatewaySubnet က VPN/ExpressRoute gateway အတွက်ဖြစ်ပြီး Bastion အတွက် မဟုတ်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("A team wants to run containerized microservices that scale to zero when idle and scale on HTTP traffic or queue length. They do not want to manage Kubernetes clusters. Which service should they use?",
        "チームは、アイドル時にゼロまでスケールし、HTTP トラフィックやキューの長さでスケールするコンテナー化マイクロサービスを実行したいと考えています。Kubernetes クラスターは管理したくありません。どのサービスを使うべきですか？",
        "Team က idle ဖြစ်ရင် zero ထိ scale ဆင်းပြီး HTTP traffic ဒါမှမဟုတ် queue length အလိုက် scale လုပ်တဲ့ containerized microservice တွေ run ချင်တယ်။ Kubernetes cluster မစီမံချင်ဘူး။ ဘယ် service သုံးသင့်လဲ?"),
      options: ['Azure Kubernetes Service', 'Azure Container Instances', 'Azure Container Apps', 'Virtual Machine Scale Sets'],
      correct: [2],
      explanation: L("Container Apps is serverless, uses KEDA for event-driven scaling including scale to zero, and hides Kubernetes. AKS would require managing the cluster; ACI has no built-in autoscale.",
        "Container Apps はサーバーレスで、KEDA によるゼロへのスケールを含むイベント駆動のスケーリングを提供し、Kubernetes を隠蔽します。AKS ではクラスター管理が必要で、ACI には組み込みの自動スケールがありません。",
        "Container Apps က serverless ဖြစ်ပြီး KEDA နဲ့ scale to zero အပါအဝင် event-driven scaling ပေးကာ Kubernetes ကို ဖုံးထားတယ်။ AKS ဆိုရင် cluster စီမံရမယ်၊ ACI မှာ built-in autoscale မရှိဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("An event-driven function must connect to a database in a VNet and must not suffer cold-start delays. Which Azure Functions hosting plan meets the requirements?",
        "イベント駆動の関数は VNet 内のデータベースに接続する必要があり、コールドスタートの遅延があってはいけません。要件を満たす Azure Functions のホスティングプランはどれですか？",
        "Event-driven function တစ်ခုက VNet ထဲက database ကို ချိတ်ရမယ်၊ cold start နှောင့်နှေးမှု မရှိရဘူး။ ဒီလိုအပ်ချက်ကို ဖြည့်တဲ့ Azure Functions hosting plan က ဘယ်ဟာလဲ?"),
      options: ['Consumption plan', 'Premium plan', 'Free App Service plan', 'Azure Container Instances'],
      correct: [1],
      explanation: L("The Premium plan keeps pre-warmed instances (no cold start) and supports VNet integration. The classic Consumption plan scales to zero, so it has cold starts and does not support VNet integration.",
        "Premium プランは事前ウォームアップ済みインスタンスを保持し（コールドスタートなし）、VNet 統合に対応します。従来の Consumption プランはゼロまでスケールするためコールドスタートがあり、VNet 統合にも対応していません。",
        "Premium plan က pre-warmed instance တွေ ထားပေးလို့ cold start မရှိဘဲ VNet integration လည်း ရတယ်။ Classic Consumption plan က zero ထိ scale ဆင်းလို့ cold start ရှိပြီး VNet integration လည်း မရဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("A production VM named VM2 was created without an availability set. You must add it to the existing availability set AS1 with minimal data loss. What should you do?",
        "本番 VM の VM2 は可用性セットなしで作成されました。データ損失を最小限にして既存の可用性セット AS1 に追加する必要があります。どうすべきですか？",
        "Production VM ဖြစ်တဲ့ VM2 ကို availability set မပါဘဲ ဆောက်ခဲ့တယ်။ Data ပျောက်ဆုံးမှု အနည်းဆုံးနဲ့ ရှိပြီးသား availability set AS1 ထဲကို ထည့်ရမယ်။ ဘာလုပ်သင့်လဲ?"),
      options: ['Change the availability setting of VM2 in the portal', 'Redeploy VM2 to a new host', 'Delete VM2 but keep its disks, then recreate it from those disks in AS1', 'Resize VM2 to a size that supports availability sets'],
      correct: [2],
      explanation: L("A VM can join an availability set only at creation, so you delete the VM (keeping the managed disks) and create a new VM in AS1 that attaches the existing OS and data disks. Redeploy only moves the VM to another host; it never changes its availability configuration.",
        "VM が可用性セットに参加できるのは作成時のみです。そのため VM を削除（マネージドディスクは保持）し、既存の OS ディスクとデータディスクを接続した新しい VM を AS1 内に作成します。再デプロイは別ホストへの移動だけで、可用性構成は変わりません。",
        "VM က availability set ထဲကို ဆောက်ချိန်မှာပဲ ဝင်လို့ရလို့ VM ကို delete (managed disk တွေ ထားခဲ့) ပြီး ရှိပြီးသား OS/data disk တွေ တပ်ထားတဲ့ VM အသစ်ကို AS1 ထဲမှာ ဆောက်ရတယ်။ Redeploy က host တခြားကို ရွှေ့ရုံပဲဖြစ်ပြီး availability configuration ကို မပြောင်းဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("You need to resize a running VM from Standard_D2s_v5 to Standard_E16s_v5, but E16s_v5 does not appear in the list of available sizes. The size is offered in the region. What should you do first?",
        "稼働中の VM を Standard_D2s_v5 から Standard_E16s_v5 にサイズ変更したいのですが、E16s_v5 が利用可能なサイズの一覧に表示されません。そのサイズはリージョンでは提供されています。最初に何をすべきですか？",
        "Run နေတဲ့ VM ကို Standard_D2s_v5 ကနေ Standard_E16s_v5 ကို resize လုပ်ချင်ပေမယ့် available size list ထဲမှာ E16s_v5 မပေါ်ဘူး။ Region မှာတော့ ဒီ size ရှိတယ်။ ပထမဆုံး ဘာလုပ်သင့်လဲ?"),
      options: ['Deallocate the VM, then resize it', 'Convert the OS disk to Ultra Disk', 'Move the VM to a new resource group', 'Delete and recreate all data disks'],
      correct: [0],
      explanation: L("The list shows only sizes available on the VM's current hardware cluster. After deallocation Azure can place the VM on any cluster that supports the new size. Ultra Disk cannot even be used as an OS disk, and resource groups do not affect hardware placement.",
        "一覧には VM の現在のハードウェアクラスターで利用できるサイズだけが表示されます。割り当て解除すると、Azure は新しいサイズに対応した任意のクラスターに VM を配置できます。Ultra Disk は OS ディスクとして使えず、Resource Group はハードウェアの配置に影響しません。",
        "List မှာ VM ရဲ့ လက်ရှိ hardware cluster ပေါ်မှာ ရနိုင်တဲ့ size တွေပဲ ပြတယ်။ Deallocate လုပ်ပြီးရင် Azure က size အသစ်ကို ထောက်ပံ့တဲ့ cluster ဘယ်ခုမှာမဆို ထားပေးနိုင်တယ်။ Ultra Disk က OS disk အဖြစ် သုံးလို့တောင် မရဘူး၊ resource group က hardware နေရာချထားမှုကို မထိခိုက်ဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("You deploy six VMs to an availability set configured with 3 fault domains and 5 update domains. During planned host maintenance, what is the maximum number of VMs that can be unavailable at the same time?",
        "3 つの障害ドメインと 5 つの更新ドメインで構成された可用性セットに 6 台の VM をデプロイしました。計画済みのホストメンテナンス中に、同時に利用できなくなる VM の最大数はいくつですか？",
        "Fault domain ၃ ခု၊ update domain ၅ ခုနဲ့ configure လုပ်ထားတဲ့ availability set ထဲ VM ၆ လုံး deploy လုပ်ထားတယ်။ Planned host maintenance လုပ်ချိန်မှာ တစ်ပြိုင်နက် အသုံးမပြုနိုင်တဲ့ VM အများဆုံး ဘယ်နှလုံးလဲ?"),
      options: ['1', '2', '3', '6'],
      correct: [1],
      explanation: L("Planned maintenance reboots one update domain at a time. Six VMs spread over five UDs means one UD holds two VMs (VM1 and VM6 in UD 0), so at most 2 are down. Answering 3 confuses update domains with fault domains: even a single fault-domain failure here would take down only 2 VMs (6 VMs over 3 FDs).",
        "計画済みメンテナンスでは一度に 1 つの更新ドメインが再起動されます。6 台を 5 つの UD に分散すると 1 つの UD に 2 台（UD 0 に VM1 と VM6）が入るため、同時に停止するのは最大 2 台です。3 台が同時に停止することはこの構成ではありません。",
        "Planned maintenance က update domain တစ်ခုစီ reboot လုပ်တယ်။ VM ၆ လုံးကို UD ၅ ခုမှာ ဖြန့်ရင် UD တစ်ခုမှာ VM ၂ လုံး (UD 0 မှာ VM1 နဲ့ VM6) ရှိလို့ တစ်ပြိုင်နက် အများဆုံး ၂ လုံး ကျမယ်။ ဒီ configuration မှာ ၃ လုံး တစ်ပြိုင်နက် ကျတာ မဖြစ်နိုင်ဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("A web tier on VMs must survive the loss of an entire datacenter in Japan East and expose a single public endpoint. Which TWO components should you use? (Select TWO)",
        "VM 上の Web 層は Japan East のデータセンター全体の喪失に耐え、単一のパブリックエンドポイントを公開する必要があります。使用すべきコンポーネントはどれですか？（2 つ選択）",
        "VM ပေါ်က web tier က Japan East ရဲ့ datacenter တစ်ခုလုံး ပျောက်သွားလည်း ဆက်ရှင်သန်ရမယ်၊ public endpoint တစ်ခုတည်း ပေးရမယ်။ ဘယ် component နှစ်ခုကို သုံးသင့်လဲ? (Select TWO)"),
      options: ['Two or more VMs spread across two or more availability zones', 'All VMs placed in a single availability set', 'A zone-redundant Standard Load Balancer in front of the VMs', 'One large VM with Premium SSD disks', 'A proximity placement group for all VMs'],
      correct: [0, 2],
      explanation: L("Availability zones are separate datacenters, so zonal VMs in different zones survive a datacenter outage, and a zone-redundant Standard Load Balancer gives one frontend IP that survives a zone failure. An availability set stays inside one datacenter, and a proximity placement group pulls VMs closer together, the opposite of what you need.",
        "可用性ゾーンは別々のデータセンターなので、異なるゾーンの VM はデータセンター障害に耐えます。ゾーン冗長の Standard Load Balancer はゾーン障害にも耐える単一のフロントエンド IP を提供します。可用性セットは 1 つのデータセンター内に留まり、近接配置グループは VM を近くに集めるため、求める構成とは逆です。",
        "Availability Zone တွေက သီးခြား datacenter တွေဖြစ်လို့ zone မတူတဲ့ VM တွေက datacenter ပျက်လည်း ဆက်ရှင်တယ်၊ zone-redundant Standard Load Balancer က zone ပျက်လည်း မပျက်တဲ့ frontend IP တစ်ခုပေးတယ်။ Availability Set က datacenter တစ်ခုအတွင်းပဲ ရှိပြီး proximity placement group က VM တွေကို နီးနီးကပ်ကပ် စုထားတာမို့ လိုချင်တာနဲ့ ဆန့်ကျင်ဘက်ပါ။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("Before swapping the staging slot into production, you must ensure the production slot keeps its own database connection string after the swap. What should you do?",
        "staging スロットを本番にスワップする前に、スワップ後も本番スロットが独自のデータベース接続文字列を保持するようにする必要があります。どうすべきですか？",
        "Staging slot ကို production နဲ့ swap မလုပ်ခင် swap ပြီးနောက်မှာလည်း production slot က ကိုယ်ပိုင် database connection string ကို ဆက်ထားဖို့ သေချာစေရမယ်။ ဘာလုပ်သင့်လဲ?"),
      options: ['Store the connection string only in the staging slot', 'Use swap with preview', 'Enable auto swap on the staging slot', 'Mark the connection string as a deployment slot setting'],
      correct: [3],
      explanation: L("Settings marked as deployment slot settings are sticky: they stay with the slot during a swap. Swap with preview only lets you validate the swap in stages; non-sticky settings would still move with the app.",
        "デプロイスロットの設定としてマークした設定は固定され、スワップ中もスロットに残ります。プレビュー付きスワップは段階的に検証できるだけで、固定されていない設定はアプリとともに移動します。",
        "Deployment slot setting လို့ မှတ်ထားတဲ့ setting တွေက sticky ဖြစ်ပြီး swap လုပ်ချိန် slot မှာပဲ ကျန်တယ်။ Swap with preview က အဆင့်လိုက် စစ်ဆေးခွင့်ပေးရုံပဲ၊ sticky မဟုတ်တဲ့ setting တွေက app နဲ့အတူ ရွှေ့သွားဦးမှာပါ။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("Your security team wants to reduce exposure of RDP on VMs that have public IPs by using Just-In-Time VM access. Which THREE statements are true? (Select THREE)",
        "セキュリティチームは、パブリック IP を持つ VM の RDP の露出を Just-In-Time VM アクセスで減らしたいと考えています。正しい記述はどれですか？（3 つ選択）",
        "Security team က public IP ရှိတဲ့ VM တွေရဲ့ RDP ထိတွေ့မှုကို Just-In-Time VM access နဲ့ လျှော့ချင်တယ်။ မှန်တဲ့ အဆို သုံးခုက ဘာတွေလဲ? (Select THREE)"),
      options: ['JIT is enabled through Microsoft Defender for Cloud', 'Access is opened only for the requested source IP and for a limited time', 'JIT requires Azure Bastion to be deployed', 'JIT works by adding and removing NSG rules', 'JIT permanently removes the public IP from the VM'],
      correct: [0, 1, 3],
      explanation: L("JIT is a Defender for Cloud feature that keeps ports closed with deny rules and temporarily adds allow rules in the NSG for the requester's IP and a set time. It does not need Bastion and does not remove the public IP; Bastion is a separate option that avoids public IPs entirely.",
        "JIT は Defender for Cloud の機能で、拒否ルールでポートを閉じたままにし、要求者の IP と指定時間に限って NSG に一時的な許可ルールを追加します。Bastion は不要で、パブリック IP も削除しません。Bastion はパブリック IP を完全に不要にする別の選択肢です。",
        "JIT က Defender for Cloud feature ဖြစ်ပြီး deny rule နဲ့ port တွေ ပိတ်ထားကာ တောင်းဆိုသူ IP နဲ့ သတ်မှတ်အချိန်အတွက်ပဲ NSG မှာ allow rule ယာယီ ထည့်ပေးတယ်။ Bastion မလိုသလို public IP ကိုလည်း မဖျက်ဘူး၊ Bastion က public IP လုံးဝမလိုအောင် လုပ်တဲ့ သီးခြားရွေးချယ်မှုပါ။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("A Flexible VM Scale Set has instances created over several weeks. Newer instances include the latest configuration, so during scale-in you want the oldest instances removed first. Which setting should you configure?",
        "Flexible の VM Scale Set には数週間にわたって作成されたインスタンスがあります。新しいインスタンスには最新の構成が含まれているため、スケールイン時に最も古いインスタンスから削除したいと考えています。どの設定を構成すべきですか？",
        "Flexible VM Scale Set မှာ အပတ်အတော်ကြာအတွင်း ဆောက်ခဲ့တဲ့ instance တွေ ရှိတယ်။ Instance အသစ်တွေမှာ configuration အသစ်ဆုံး ပါလို့ scale-in လုပ်ချိန် အဟောင်းဆုံးကို အရင်ဖျက်ချင်တယ်။ ဘယ် setting ကို configure လုပ်သင့်လဲ?"),
      options: ['Scale-in policy: OldestVM', 'Scale-in policy: Default', 'Scale-in policy: NewestVM', 'Upgrade policy: Rolling'],
      correct: [0],
      explanation: L("The OldestVM scale-in policy removes the oldest instances first (still balancing across zones). Default removes the highest instance ID after balancing, which does not guarantee age order, and NewestVM does the opposite of the requirement.",
        "OldestVM スケールインポリシーは（ゾーン間のバランスを保ちつつ）最も古いインスタンスから削除します。Default はバランス調整後に最大のインスタンス ID を削除するため古い順は保証されず、NewestVM は要件と逆の動作です。",
        "OldestVM scale-in policy က (zone တွေကြား မျှအောင်ထားရင်း) အဟောင်းဆုံး instance ကို အရင်ဖျက်တယ်။ Default က မျှအောင်လုပ်ပြီး instance ID အကြီးဆုံးကို ဖျက်လို့ အဟောင်းအလိုက် ဖြစ်မယ်လို့ အာမမခံနိုင်ဘူး၊ NewestVM က လိုချင်တာနဲ့ ဆန့်ကျင်ဘက်ပါ။"),
    },
  ],
  flashcards: [
    { term: 'Fault domain',
      definition: L("A group of hardware in an availability set that shares a common power source and network switch, like one rack.", "可用性セット内で共通の電源とネットワークスイッチを共有するハードウェアのグループで、1 つのラックのようなものです。", "Availability Set ထဲမှာ power source နဲ့ network switch တစ်ခုတည်းကို မျှသုံးတဲ့ hardware အုပ်စု၊ rack တစ်ခုလိုပါ။"),
      example: L("If rack B loses power, only the VMs in fault domain 1 go down; VMs in FD 0 and FD 2 keep serving users.", "ラック B の電源が落ちても、停止するのは障害ドメイン 1 の VM だけで、FD 0 と FD 2 の VM はサービスを続けます。", "Rack B မီးပျက်ရင် fault domain 1 ထဲက VM တွေပဲ ကျပြီး FD 0 နဲ့ FD 2 က VM တွေက user တွေကို ဆက်ဝန်ဆောင်မှုပေးတယ်။") },
    { term: 'Update domain',
      definition: L("A group of VMs and hosts that Azure reboots together during planned maintenance; only one update domain is rebooted at a time.", "計画済みメンテナンス中に Azure が同時に再起動する VM とホストのグループです。一度に再起動されるのは 1 つの更新ドメインだけです。", "Planned maintenance လုပ်ချိန် Azure က တစ်ပြိုင်နက် reboot လုပ်တဲ့ VM နဲ့ host အုပ်စုပါ၊ တစ်ကြိမ်မှာ update domain တစ်ခုပဲ reboot လုပ်တယ်။"),
      example: L("With 5 update domains, a host patch reboots UD 0 first, waits, then moves to UD 1, so the app never loses all VMs.", "更新ドメインが 5 つあれば、ホストのパッチ適用は UD 0 を再起動して待機し、次に UD 1 へ進むため、アプリがすべての VM を失うことはありません。", "Update domain ၅ ခုရှိရင် host patch က UD 0 ကို အရင် reboot၊ စောင့်ပြီးမှ UD 1 ကို ဆက်လုပ်လို့ app က VM အားလုံး တစ်ပြိုင်နက် မပျောက်ဘူး။") },
    { term: 'Availability zone',
      definition: L("A physically separate datacenter location within a region with independent power, cooling and networking.", "リージョン内の物理的に独立したデータセンターの場所で、電源・冷却・ネットワークが独立しています。", "Region တစ်ခုအတွင်းက physically သီးခြား datacenter နေရာ၊ power၊ cooling၊ network သီးသန့်ရှိတယ်။"),
      example: L("Placing VM1 in zone 1 and VM2 in zone 2 of Japan East gives a 99.99% SLA and survives a datacenter fire.", "Japan East のゾーン 1 に VM1、ゾーン 2 に VM2 を配置すると 99.99% の SLA となり、データセンター火災にも耐えます。", "Japan East ရဲ့ zone 1 မှာ VM1၊ zone 2 မှာ VM2 ထားရင် 99.99% SLA ရပြီး datacenter မီးလောင်လည်း ဆက်ရှင်တယ်။") },
    { term: 'Stopped (deallocated)',
      definition: L("A VM state in which the hardware is released and compute billing stops; disks are kept and still billed.", "ハードウェアが解放されコンピューティング課金が止まる VM の状態です。ディスクは保持され、引き続き課金されます。", "Hardware ကို လွှတ်ပေးပြီး compute billing ရပ်တဲ့ VM state ပါ၊ disk တွေကတော့ ကျန်ပြီး ငွေဆက်ကျတယ်။"),
      example: L("Run `az vm deallocate` on a lab VM every evening so you pay only for its disk overnight.", "毎晩ラボ用 VM に `az vm deallocate` を実行すれば、夜間はディスク料金だけで済みます。", "ညတိုင်း lab VM ပေါ်မှာ `az vm deallocate` run ထားရင် ညဘက် disk ငွေပဲ ပေးရမယ်။") },
    { term: 'Temporary disk',
      definition: L("Local, non-persistent storage on the physical host (`D:` on Windows, `/mnt` on Linux) whose data can be lost on deallocation, redeploy or maintenance.", "物理ホスト上のローカルで非永続的なストレージ（Windows は `D:`、Linux は `/mnt`）で、割り当て解除・再デプロイ・メンテナンス時にデータが失われる可能性があります。", "Physical host ပေါ်က local၊ မတည်မြဲတဲ့ storage (Windows မှာ `D:`၊ Linux မှာ `/mnt`)၊ deallocate၊ redeploy၊ maintenance လုပ်ရင် data ပျောက်နိုင်တယ်။"),
      example: L("Use it for the Windows page file or SQL tempdb, never for customer files.", "Windows のページファイルや SQL の tempdb に使い、顧客のファイルには絶対に使わないでください。", "Windows page file ဒါမှမဟုတ် SQL tempdb အတွက် သုံးပါ၊ customer file တွေအတွက် ဘယ်တော့မှ မသုံးပါနဲ့။") },
    { term: 'Host caching',
      definition: L("A disk setting (None, ReadOnly, ReadWrite) that uses the host's memory and local SSD to speed up managed disk I/O.", "ホストのメモリとローカル SSD を使ってマネージドディスクの I/O を高速化するディスク設定（None、ReadOnly、ReadWrite）です。", "Host ရဲ့ memory နဲ့ local SSD ကိုသုံးပြီး managed disk I/O ကို မြန်စေတဲ့ disk setting (None၊ ReadOnly၊ ReadWrite) ပါ။"),
      example: L("SQL data files disk = ReadOnly; SQL log files disk = None.", "SQL データファイルのディスク = ReadOnly、SQL ログファイルのディスク = None。", "SQL data file disk = ReadOnly၊ SQL log file disk = None။") },
    { term: 'Virtual Machine Scale Set',
      definition: L("A resource that deploys and manages a group of load-balanced VMs and can add or remove instances automatically with autoscale.", "負荷分散された VM のグループをデプロイ・管理し、自動スケールでインスタンスを自動的に追加・削除できるリソースです。", "Load balance လုပ်ထားတဲ့ VM အုပ်စုကို deploy/စီမံပြီး autoscale နဲ့ instance တွေကို အလိုအလျောက် တိုး/လျှော့ နိုင်တဲ့ resource ပါ။"),
      example: L("An online shop runs 2 instances at night and autoscale grows to 10 during a lunchtime sale.", "オンラインショップは夜間 2 インスタンスで動き、昼のセール中は自動スケールで 10 まで増えます。", "Online shop တစ်ခုက ညမှာ instance 2 နဲ့ run ပြီး နေ့လယ် sale ချိန် autoscale နဲ့ 10 ထိ တိုးတယ်။") },
    { term: 'Scale-in policy',
      definition: L("The VMSS setting that decides which instances are removed first when scaling in: Default, NewestVM or OldestVM.", "スケールイン時に最初に削除するインスタンスを決める VMSS の設定で、Default、NewestVM、OldestVM があります。", "Scale in လုပ်ချိန် ဘယ် instance ကို အရင်ဖျက်မလဲ ဆုံးဖြတ်တဲ့ VMSS setting ပါ- Default၊ NewestVM၊ OldestVM။"),
      example: L("Choose OldestVM so instances built from the newest image survive scale-in.", "OldestVM を選ぶと、最新のイメージから作られたインスタンスがスケールイン後も残ります。", "OldestVM ကို ရွေးရင် image အသစ်ဆုံးနဲ့ ဆောက်ထားတဲ့ instance တွေ scale-in ပြီးနောက်လည်း ကျန်တယ်။") },
    { term: 'Deployment slot',
      definition: L("A live copy of an App Service app with its own hostname that can be swapped with production for zero-downtime releases (Standard tier and above).", "独自のホスト名を持つ App Service アプリのライブコピーで、本番とスワップしてダウンタイムなしでリリースできます（Standard 以上）。", "ကိုယ်ပိုင် hostname ပါတဲ့ App Service app ရဲ့ live copy ဖြစ်ပြီး production နဲ့ swap လုပ်ကာ downtime မရှိဘဲ release လုပ်နိုင်တယ် (Standard tier နဲ့အထက်)။"),
      example: L("Deploy v2 to the staging slot, test it at myapp-staging.azurewebsites.net, then swap; swap back if errors appear.", "v2 を staging スロットにデプロイし、myapp-staging.azurewebsites.net でテストしてからスワップします。エラーが出たらスワップバックします。", "v2 ကို staging slot မှာ deploy လုပ်၊ myapp-staging.azurewebsites.net မှာ test ပြီးမှ swap လုပ်ပါ၊ error ပေါ်ရင် swap back ပြန်လုပ်ပါ။") },
    { term: 'Azure Container Apps',
      definition: L("A serverless container platform built on Kubernetes, KEDA and Dapr that runs microservices and scales to zero without cluster management.", "Kubernetes・KEDA・Dapr 上に構築されたサーバーレスのコンテナープラットフォームで、クラスター管理なしにマイクロサービスを実行しゼロまでスケールします。", "Kubernetes၊ KEDA၊ Dapr ပေါ်မှာ ဆောက်ထားတဲ့ serverless container platform ဖြစ်ပြီး cluster မစီမံဘဲ microservice run ကာ zero ထိ scale ဆင်းနိုင်တယ်။"),
      example: L("An order API scales from 0 to 30 replicas based on Service Bus queue length.", "注文 API が Service Bus のキューの長さに応じて 0 から 30 レプリカまでスケールします。", "Order API က Service Bus queue length အလိုက် replica 0 ကနေ 30 ထိ scale လုပ်တယ်။") },
    { term: 'Azure Bastion',
      definition: L("A managed PaaS jump host in a VNet subnet named AzureBastionSubnet that provides RDP/SSH over HTTPS without public IPs on VMs.", "AzureBastionSubnet という名前の VNet サブネットに置くマネージド PaaS のジャンプホストで、VM にパブリック IP なしで HTTPS 経由の RDP/SSH を提供します。", "AzureBastionSubnet နာမည်ရှိ VNet subnet ထဲက managed PaaS jump host ဖြစ်ပြီး VM မှာ public IP မလိုဘဲ HTTPS ကနေ RDP/SSH ပေးတယ်။"),
      example: L("An admin opens the VM blade, clicks Connect > Bastion, and gets an SSH session in the browser.", "管理者が VM の画面で [接続] > [Bastion] をクリックすると、ブラウザーで SSH セッションが開きます。", "Admin က VM blade မှာ Connect > Bastion ကို နှိပ်လိုက်ရင် browser ထဲမှာ SSH session ရတယ်။") },
    { term: 'Just-In-Time VM access',
      definition: L("A Microsoft Defender for Cloud feature that keeps management ports closed and opens them in the NSG only on approved request, for a specific IP and time window.", "管理ポートを閉じたままにし、承認された要求時にのみ特定の IP と時間枠で NSG に開放する Microsoft Defender for Cloud の機能です。", "Management port တွေကို ပိတ်ထားပြီး ခွင့်ပြုထားတဲ့ request ရှိမှသာ IP နဲ့ အချိန်အကန့်အသတ်နဲ့ NSG မှာ ဖွင့်ပေးတဲ့ Microsoft Defender for Cloud feature ပါ။"),
      example: L("An engineer requests port 3389 for 2 hours from the office IP; afterwards the allow rule is removed automatically.", "エンジニアがオフィスの IP からポート 3389 を 2 時間要求し、終了後に許可ルールは自動的に削除されます。", "Engineer တစ်ယောက်က ရုံး IP ကနေ port 3389 ကို ၂ နာရီ တောင်းတယ်၊ ပြီးရင် allow rule ကို အလိုအလျောက် ဖျက်ပေးတယ်။") },
  ],
};
