import { L, type SeedTopic } from '../types.js';

export const topic: SeedTopic = {
  slug: 'azure-networking',
  icon: 'Network',
  level: 'ASSOCIATE',
  exams: ['AZ-900', 'AZ-104'],
  name: L("Azure Networking", "Azure ネットワーク", "Azure Networking (ကွန်ရက်)"),
  description: L(
    "Design and secure Azure networks: VNets and CIDR math, subnets, public and private IPs, NSGs and ASGs, route tables, peering, VPN Gateway vs ExpressRoute, DNS, Bastion, Private Link, load balancers, NAT Gateway, Network Watcher, Azure Firewall and DDoS Protection.",
    "Azure ネットワークの設計とセキュリティを学びます。VNet と CIDR 計算、サブネット、パブリック／プライベート IP、NSG と ASG、ルートテーブル、ピアリング、VPN Gateway と ExpressRoute の違い、DNS、Bastion、Private Link、各種ロードバランサー、NAT Gateway、Network Watcher、Azure Firewall、DDoS Protection を扱います。",
    "Azure network ကို design လုပ်ပြီး လုံခြုံအောင် ထိန်းနည်း လေ့လာမယ်။ VNet နဲ့ CIDR တွက်နည်း၊ subnet၊ public/private IP၊ NSG နဲ့ ASG၊ route table၊ peering၊ VPN Gateway နဲ့ ExpressRoute ကွာခြားချက်၊ DNS၊ Bastion၊ Private Link၊ load balancer အမျိုးမျိုး၊ NAT Gateway၊ Network Watcher၊ Azure Firewall နဲ့ DDoS Protection တို့ ပါဝင်ပါတယ်။",
  ),
  lesson: {
    minutes: 24,
    objectives: [
      L("Plan a VNet address space with CIDR and calculate usable IPs per subnet, remembering the 5 reserved addresses.",
        "CIDR で VNet のアドレス空間を設計し、予約される 5 つのアドレスを考慮してサブネットごとの使用可能 IP 数を計算できる。",
        "CIDR နဲ့ VNet address space ကို စီစဉ်ပြီး reserved IP ၅ ခုကို ထည့်တွက်ကာ subnet တစ်ခုချင်းစီမှာ သုံးလို့ရတဲ့ IP အရေအတွက်ကို တွက်နိုင်မယ်။"),
      L("Write and troubleshoot NSG rules using priority, default rules, service tags and application security groups.",
        "優先度、既定の規則、サービスタグ、アプリケーションセキュリティグループを使って NSG 規則を作成し、トラブルシューティングできる。",
        "Priority၊ default rule၊ service tag၊ application security group တွေကိုသုံးပြီး NSG rule ရေးနိုင်၊ ပြဿနာရှာနိုင်မယ်။"),
      L("Control traffic paths with user-defined routes and connect VNets with peering, including gateway transit in a hub-spoke design.",
        "ユーザー定義ルートでトラフィック経路を制御し、ハブ＆スポーク構成でのゲートウェイ転送を含めてピアリングで VNet を接続できる。",
        "User-defined route နဲ့ traffic လမ်းကြောင်းကို ထိန်းနိုင်ပြီး hub-spoke design ထဲက gateway transit အပါအဝင် peering နဲ့ VNet တွေ ချိတ်နိုင်မယ်။"),
      L("Choose between VPN Gateway (S2S/P2S) and ExpressRoute for hybrid connectivity.",
        "ハイブリッド接続として VPN Gateway（S2S／P2S）と ExpressRoute を使い分けられる。",
        "Hybrid connectivity အတွက် VPN Gateway (S2S/P2S) နဲ့ ExpressRoute ကြားမှာ မှန်မှန်ကန်ကန် ရွေးနိုင်မယ်။"),
      L("Explain service endpoints vs private endpoints, private DNS zones and Azure Bastion for private access.",
        "プライベートアクセスのためのサービスエンドポイントとプライベートエンドポイントの違い、プライベート DNS ゾーン、Azure Bastion を説明できる。",
        "Private access အတွက် service endpoint နဲ့ private endpoint ကွာခြားချက်၊ private DNS zone၊ Azure Bastion ကို ရှင်းပြနိုင်မယ်။"),
      L("Pick the right load balancing service: Load Balancer, Application Gateway, Front Door or Traffic Manager.",
        "Load Balancer、Application Gateway、Front Door、Traffic Manager から適切な負荷分散サービスを選択できる。",
        "Load Balancer၊ Application Gateway၊ Front Door၊ Traffic Manager ထဲက သင့်တော်တဲ့ load balancing service ကို ရွေးနိုင်မယ်။"),
      L("Use Network Watcher tools (IP flow verify, next hop, connection troubleshoot) to diagnose connectivity problems.",
        "Network Watcher のツール（IP flow verify、Next hop、Connection troubleshoot）で接続性の問題を診断できる。",
        "Network Watcher tool တွေ (IP flow verify၊ Next hop၊ Connection troubleshoot) နဲ့ connectivity ပြဿနာတွေကို ရှာဖွေနိုင်မယ်။"),
    ],
    sections: [
      {
        id: "vnet-basics",
        title: L("Virtual networks: your private office building in Azure", "仮想ネットワーク：Azure の中のプライベートなオフィスビル", "Virtual Network: Azure ထဲက ကိုယ်ပိုင် ရုံးအဆောက်အအုံ"),
        blocks: [
          { type: 'p', text: L(
            "An **Azure Virtual Network (VNet)** is your own isolated private network inside Azure. Imagine an **office building**: the building (VNet) has a street address range, each **floor** is a **subnet**, every desk has an internal phone extension (**private IP**), and a **security guard** at each floor or door (the **NSG**) checks who may come in. Resources such as VMs, AKS nodes and private endpoints are placed into subnets and can talk to each other privately by default.",
            "**Azure Virtual Network（VNet）**は、Azure 内に作る自分専用の分離されたプライベートネットワークです。**オフィスビル**を想像してください。ビル（VNet）には番地の範囲があり、各**フロア**が**サブネット**、各席の内線番号が**プライベート IP**、そして各フロアや扉にいる**警備員**が **NSG** で、誰が入れるかを確認します。VM、AKS ノード、プライベートエンドポイントなどのリソースはサブネットに配置され、既定で互いにプライベートに通信できます。",
            "**Azure Virtual Network (VNet)** ဆိုတာ Azure ထဲမှာ ကိုယ်ပိုင်၊ သီးသန့်ခွဲထားတဲ့ private network ပါ။ **ရုံးအဆောက်အအုံ** တစ်ခုလို့ မြင်ကြည့်ပါ။ အဆောက်အအုံ (VNet) မှာ လိပ်စာ range ရှိတယ်၊ **အထပ်** တစ်ထပ်ချင်းက **subnet**၊ စားပွဲတစ်ခုချင်းရဲ့ အတွင်းဖုန်းနံပါတ်က **private IP**၊ အထပ်တိုင်း တံခါးတိုင်းမှာ ဘယ်သူဝင်ခွင့်ရှိလဲ စစ်တဲ့ **လုံခြုံရေးအစောင့်** က **NSG** ပါ။ VM၊ AKS node၊ private endpoint စတဲ့ resource တွေကို subnet ထဲ ထည့်ပြီး default အနေနဲ့ အချင်းချင်း private ချိတ်ဆက်ပြောဆိုနိုင်ပါတယ်။"
          ) },
          { type: 'list', items: [
            L("A VNet belongs to **one region** and **one subscription**, but its subnets span all availability zones in that region.",
              "VNet は**1 つのリージョン**と**1 つのサブスクリプション**に属しますが、サブネットはそのリージョンのすべての可用性ゾーンにまたがります。",
              "VNet တစ်ခုဟာ **region တစ်ခု**၊ **subscription တစ်ခု** ထဲမှာပဲ ရှိတယ်။ ဒါပေမဲ့ subnet တွေက အဲဒီ region ထဲက availability zone အားလုံးကို ဖြတ်ကျော်နိုင်တယ်။"),
            L("The **address space** is one or more CIDR blocks, normally from the RFC 1918 private ranges: `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`.",
              "**アドレス空間**は 1 つ以上の CIDR ブロックで、通常は RFC 1918 のプライベート範囲 `10.0.0.0/8`、`172.16.0.0/12`、`192.168.0.0/16` から選びます。",
              "**Address space** ဆိုတာ CIDR block တစ်ခု သို့မဟုတ် အများ ဖြစ်ပြီး ပုံမှန်အားဖြင့် RFC 1918 private range တွေဖြစ်တဲ့ `10.0.0.0/8`၊ `172.16.0.0/12`၊ `192.168.0.0/16` ထဲက ယူသုံးတယ်။"),
            L("Address spaces of VNets you want to connect (peering or VPN to on-premises) **must not overlap**. Plan IP ranges for the whole company before building.",
              "接続する予定の VNet 同士（ピアリングやオンプレミスへの VPN）のアドレス空間は**重複してはいけません**。構築前に会社全体の IP 範囲を計画しましょう。",
              "ချိတ်ဆက်မယ့် VNet တွေ (peering ဒါမှမဟုတ် on-premises ကို VPN) ရဲ့ address space တွေ **ထပ်လို့ မရပါ**။ မဆောက်ခင် ကုမ္ပဏီတစ်ခုလုံးအတွက် IP range ကို ကြိုစီစဉ်ပါ။"),
            L("Creating a VNet itself is free; you pay for things like gateways, peering data transfer, public IPs and firewalls.",
              "VNet の作成自体は無料です。ゲートウェイ、ピアリングのデータ転送、パブリック IP、ファイアウォールなどに料金がかかります。",
              "VNet ဆောက်တာကိုယ်တိုင်က အခမဲ့ပါ။ Gateway၊ peering data transfer၊ public IP၊ firewall စတာတွေအတွက် ပိုက်ဆံပေးရတယ်။"),
          ] },
          { type: 'callout', tone: 'memory', text: L(
            "**Building = VNet, Floor = Subnet, Desk extension = Private IP, Guard = NSG, Elevator map = Route table.** If you get lost in a question, translate it into the building story.",
            "**ビル = VNet、フロア = サブネット、内線番号 = プライベート IP、警備員 = NSG、エレベーター案内図 = ルートテーブル。** 問題で迷ったら、このビルの話に置き換えてみましょう。",
            "**အဆောက်အအုံ = VNet၊ အထပ် = Subnet၊ အတွင်းဖုန်းနံပါတ် = Private IP၊ အစောင့် = NSG၊ ဓာတ်လှေကား လမ်းညွှန်မြေပုံ = Route table။** မေးခွန်းမှာ ရှုပ်သွားရင် ဒီအဆောက်အအုံ ပုံပြင်နဲ့ ပြန်တွေးကြည့်ပါ။"
          ) },
        ],
      },
      {
        id: "cidr-subnets",
        title: L("CIDR math, subnets and the 5 reserved IPs", "CIDR 計算、サブネット、予約される 5 つの IP", "CIDR တွက်နည်း၊ Subnet နဲ့ Reserved IP ၅ ခု"),
        blocks: [
          { type: 'p', text: L(
            "CIDR notation `/n` says how many of the 32 bits are the network part. The remaining `32 - n` bits are for hosts, so a block has `2^(32-n)` addresses. **Worked example:** a VNet `10.0.0.0/16` has 2^16 = **65,536** addresses. Split it into `/24` subnets and you get 2^(24-16) = **256 subnets** (`10.0.0.0/24`, `10.0.1.0/24` ... `10.0.255.0/24`), each with 2^8 = 256 addresses. Azure reserves **5** in every subnet, so each `/24` has **251 usable** IPs.",
            "CIDR 表記の `/n` は、32 ビットのうち何ビットがネットワーク部かを示します。残りの `32 - n` ビットがホスト用なので、ブロックのアドレス数は `2^(32-n)` です。**計算例：** VNet `10.0.0.0/16` には 2^16 = **65,536** 個のアドレスがあります。これを `/24` に分割すると 2^(24-16) = **256 個のサブネット**（`10.0.0.0/24`、`10.0.1.0/24` … `10.0.255.0/24`）ができ、それぞれ 2^8 = 256 アドレスです。Azure は各サブネットで **5 つ**を予約するため、`/24` で**使用可能なのは 251 個**です。",
            "CIDR notation ထဲက `/n` က 32 bit ထဲမှာ ဘယ်နှ bit က network အပိုင်းလဲ ပြတာပါ။ ကျန်တဲ့ `32 - n` bit က host တွေအတွက်မို့ block တစ်ခုမှာ `2^(32-n)` address ရှိတယ်။ **ဥပမာ တွက်ကြည့်ရအောင်:** VNet `10.0.0.0/16` မှာ 2^16 = **65,536** address ရှိတယ်။ `/24` subnet တွေ ခွဲရင် 2^(24-16) = **subnet 256 ခု** (`10.0.0.0/24`၊ `10.0.1.0/24` … `10.0.255.0/24`) ရမယ်၊ တစ်ခုစီမှာ 2^8 = 256 address ပါတယ်။ Azure က subnet တိုင်းမှာ **၅ ခု** reserve ယူထားလို့ `/24` တစ်ခုမှာ **251 ခုပဲ သုံးလို့ရ** ပါတယ်။"
          ) },
          { type: 'table',
            head: [L("Reserved address (10.0.1.0/24)", "予約アドレス（10.0.1.0/24）", "Reserve ထားတဲ့ address (10.0.1.0/24)"), L("Purpose", "用途", "ရည်ရွယ်ချက်")],
            rows: [
              [L("10.0.1.0 (first)", "10.0.1.0（先頭）", "10.0.1.0 (ပထမ)"), L("Network address", "ネットワークアドレス", "Network address (network ကို ကိုယ်စားပြု)")],
              [L("10.0.1.1 (second)", "10.0.1.1（2 番目）", "10.0.1.1 (ဒုတိယ)"), L("Default gateway reserved by Azure", "Azure が予約する既定ゲートウェイ", "Azure က reserve လုပ်ထားတဲ့ default gateway")],
              [L("10.0.1.2 and 10.0.1.3", "10.0.1.2 と 10.0.1.3", "10.0.1.2 နဲ့ 10.0.1.3"), L("Map Azure DNS IPs into the VNet space", "Azure DNS の IP を VNet 空間にマッピング", "Azure DNS IP တွေကို VNet space ထဲ map လုပ်ဖို့")],
              [L("10.0.1.255 (last)", "10.0.1.255（最後）", "10.0.1.255 (နောက်ဆုံး)"), L("Broadcast address (reserved even though VNets do not use broadcast)", "ブロードキャストアドレス（VNet はブロードキャストを使わないが予約される）", "Broadcast address (VNet က broadcast မသုံးပေမဲ့ reserve ထားတယ်)")],
            ] },
          { type: 'table',
            head: [L("Prefix", "プレフィックス", "Prefix အရွယ်"), L("Total IPs", "総 IP 数", "IP စုစုပေါင်း"), L("Usable in Azure", "Azure で使用可能", "Azure မှာ သုံးလို့ရတာ")],
            rows: [
              [L("/29 (smallest allowed)", "/29（最小）", "/29 (အသေးဆုံး)"), L("8 addresses", "8 個", "8 ခု"), L("3 usable", "3 個", "3 ခု")],
              [L("/28", "/28（小規模）", "/28 (သေး)"), L("16 addresses", "16 個", "16 ခု"), L("11 usable", "11 個", "11 ခု")],
              [L("/27 (GatewaySubnet)", "/27（GatewaySubnet 推奨）", "/27 (GatewaySubnet အတွက်)"), L("32 addresses", "32 個", "32 ခု"), L("27 usable", "27 個", "27 ခု")],
              [L("/26 (AzureBastionSubnet)", "/26（AzureBastionSubnet 推奨）", "/26 (AzureBastionSubnet အတွက်)"), L("64 addresses", "64 個", "64 ခု"), L("59 usable", "59 個", "59 ခု")],
              [L("/24 (typical)", "/24（一般的）", "/24 (အသုံးများ)"), L("256 addresses", "256 個", "256 ခု"), L("251 usable", "251 個", "251 ခု")],
            ] },
          { type: 'p', text: L(
            "Some Azure services require a subnet with an **exact name**. If the name is wrong, the deployment fails: **GatewaySubnet** for VPN/ExpressRoute gateways (`/27` or larger recommended), **AzureBastionSubnet** for Bastion (`/26` or larger), **AzureFirewallSubnet** for Azure Firewall (`/26`). Do not put VMs in these subnets.",
            "一部の Azure サービスは**決まった名前**のサブネットを必要とし、名前が違うとデプロイに失敗します。VPN／ExpressRoute ゲートウェイには **GatewaySubnet**（`/27` 以上推奨）、Bastion には **AzureBastionSubnet**（`/26` 以上）、Azure Firewall には **AzureFirewallSubnet**（`/26`）です。これらのサブネットに VM を置いてはいけません。",
            "Azure service တချို့က subnet ကို **နာမည် အတိအကျ** ပေးမှ ရတယ်။ နာမည်မှားရင် deploy မအောင်မြင်ဘူး။ VPN/ExpressRoute gateway အတွက် **GatewaySubnet** (`/27` နဲ့ အထက် အကြံပြု)၊ Bastion အတွက် **AzureBastionSubnet** (`/26` နဲ့ အထက်)၊ Azure Firewall အတွက် **AzureFirewallSubnet** (`/26`)။ ဒီ subnet တွေထဲမှာ VM မထည့်ရပါ။"
          ) },
          { type: 'code', lang: 'bash', code: `# VNet 10.0.0.0/16 with a first subnet
az network vnet create \\
  --resource-group rg-net-lab \\
  --name vnet-app \\
  --location japaneast \\
  --address-prefixes 10.0.0.0/16 \\
  --subnet-name snet-web \\
  --subnet-prefixes 10.0.1.0/24

# Add a second subnet
az network vnet subnet create \\
  --resource-group rg-net-lab \\
  --vnet-name vnet-app \\
  --name snet-db \\
  --address-prefixes 10.0.2.0/24`,
            caption: L("Create a VNet and two subnets with Azure CLI.", "Azure CLI で VNet と 2 つのサブネットを作成します。", "Azure CLI နဲ့ VNet တစ်ခုနဲ့ subnet နှစ်ခု ဆောက်နည်း။") },
          { type: 'callout', tone: 'exam', text: L(
            "Exam formula: **usable IPs = 2^(32 - prefix) - 5**. A question asking how many VMs fit in a `/28` wants **11**, not 16 and not 14 (14 is the on-premises answer that removes only 2 addresses).",
            "試験用の公式：**使用可能 IP = 2^(32 - プレフィックス) - 5**。`/28` に VM が何台入るかと聞かれたら答えは **11** です。16 でも 14 でもありません（14 は 2 つだけ引くオンプレミスの答えです）。",
            "စာမေးပွဲ ဖော်မြူလာ: **သုံးလို့ရတဲ့ IP = 2^(32 - prefix) - 5**။ `/28` ထဲမှာ VM ဘယ်နှလုံး ထည့်လို့ရလဲ မေးရင် အဖြေက **11** ပါ။ 16 လည်းမဟုတ်၊ 14 လည်းမဟုတ်ပါ (14 က ၂ ခုပဲ နှုတ်တဲ့ on-premises အဖြေပါ)။"
          ) },
        ],
      },
      {
        id: "ip-addresses",
        title: L("Public vs private IPs, SKUs and outbound internet (NAT Gateway)", "パブリック IP とプライベート IP、SKU、送信インターネット接続（NAT Gateway）", "Public နဲ့ Private IP၊ SKU နဲ့ Outbound Internet (NAT Gateway)"),
        blocks: [
          { type: 'p', text: L(
            "A **private IP** comes from the subnet range and is used inside the VNet, peered VNets and on-premises over VPN/ExpressRoute. It can be **dynamic** (default, assigned by Azure DHCP and kept while the NIC exists) or **static** (you choose the address). A **public IP** is a separate resource you attach to a NIC, load balancer, gateway, Bastion or NAT Gateway so it is reachable from or can reach the internet.",
            "**プライベート IP** はサブネットの範囲から割り当てられ、VNet 内、ピアリングされた VNet、VPN／ExpressRoute 経由のオンプレミスで使われます。**動的**（既定。Azure DHCP が割り当て、NIC が存在する間は保持）または**静的**（自分でアドレスを指定）にできます。**パブリック IP** は独立したリソースで、NIC、ロードバランサー、ゲートウェイ、Bastion、NAT Gateway に関連付けてインターネットとの通信を可能にします。",
            "**Private IP** က subnet range ထဲက ရပြီး VNet ထဲ၊ peer လုပ်ထားတဲ့ VNet တွေ၊ VPN/ExpressRoute ကနေ on-premises မှာ သုံးတယ်။ **Dynamic** (default၊ Azure DHCP က ပေးပြီး NIC ရှိနေသရွေ့ မပြောင်းဘူး) ဒါမှမဟုတ် **Static** (ကိုယ်တိုင် address ရွေးတယ်) ဖြစ်နိုင်တယ်။ **Public IP** ကတော့ သီးခြား resource တစ်ခုဖြစ်ပြီး NIC၊ load balancer၊ gateway၊ Bastion၊ NAT Gateway တွေနဲ့ ချိတ်ပြီး internet နဲ့ ဆက်သွယ်ဖို့ သုံးတယ်။"
          ) },
          { type: 'table',
            head: [L("Feature", "機能", "လုပ်ဆောင်ချက်"), L("Basic SKU (retired)", "Basic SKU（廃止）", "Basic SKU (ရပ်ဆိုင်းပြီး)"), L("Standard SKU", "Standard SKU（標準）", "Standard SKU (လက်ရှိ)")],
            rows: [
              [L("Status", "状態", "အခြေအနေ"), L("Retired on 30 September 2025; migrate existing ones", "2025 年 9 月 30 日に廃止。既存分は移行が必要", "2025 စက်တင်ဘာ 30 မှာ ရပ်ဆိုင်းပြီ၊ ရှိပြီးသားတွေ migrate လုပ်ရမယ်"), L("The default and recommended SKU", "既定かつ推奨の SKU", "Default နဲ့ အကြံပြု SKU")],
              [L("Allocation", "割り当て", "IP ချထားပုံ"), L("Static or dynamic", "静的または動的", "Static ဒါမှမဟုတ် Dynamic"), L("Always static", "常に静的", "အမြဲ Static")],
              [L("Inbound by default", "既定の受信", "Default inbound အခြေအနေ"), L("Open unless an NSG blocks it", "NSG でブロックしない限り開いている", "NSG က မပိတ်ရင် ဖွင့်ထားတယ်"), L("Secure by default: closed until an NSG allows it", "既定でセキュア：NSG が許可するまで閉じている", "Default မှာ လုံခြုံတယ်: NSG က ခွင့်မပြုမချင်း ပိတ်ထားတယ်")],
              [L("Availability zones", "可用性ゾーン", "Availability zone ထောက်ပံ့မှု"), L("Not supported", "非対応", "မရဘူး"), L("Zonal or zone-redundant", "ゾーン固定またはゾーン冗長", "Zonal ဒါမှမဟုတ် Zone-redundant")],
            ] },
          { type: 'p', text: L(
            "**Outbound internet:** historically, VMs without a public IP still got implicit **default outbound access**. Microsoft is retiring this for new VNets (new subnets become private by default from 2026), so design explicit outbound instead. The recommended way is **NAT Gateway**: attach it to a subnet with one or more static public IPs, and all outbound connections from that subnet use those IPs. It is **outbound only**: nobody on the internet can start a connection inward through it. This is perfect when a partner must allow-list your fixed IP.",
            "**送信インターネット接続：** これまでパブリック IP のない VM でも暗黙の**既定の送信アクセス**がありました。Microsoft は新しい VNet でこれを廃止しつつあり（2026 年以降、新しいサブネットは既定でプライベート）、明示的な送信経路の設計が必要です。推奨は **NAT Gateway** で、1 つ以上の静的パブリック IP とともにサブネットへ関連付けると、そのサブネットからの送信接続はすべてその IP を使います。**送信専用**なので、インターネット側から内側への接続は開始できません。取引先に固定 IP を許可リスト登録してもらう場合に最適です。",
            "**Outbound internet:** အရင်က public IP မရှိတဲ့ VM တွေလည်း သွယ်ဝိုက်တဲ့ **default outbound access** ရခဲ့တယ်။ Microsoft က VNet အသစ်တွေအတွက် ဒါကို ဖြုတ်နေပြီ (2026 ကစပြီး subnet အသစ်တွေ default မှာ private ဖြစ်မယ်)၊ ဒါကြောင့် outbound လမ်းကြောင်းကို သေချာ design လုပ်ရမယ်။ အကြံပြုနည်းက **NAT Gateway** ပါ။ Static public IP တစ်ခု ဒါမှမဟုတ် အများနဲ့ subnet ကို ချိတ်လိုက်ရင် အဲဒီ subnet ကထွက်တဲ့ connection အားလုံး အဲဒီ IP တွေကို သုံးတယ်။ **Outbound သီးသန့်** ဖြစ်လို့ internet ဘက်ကနေ အထဲကို connection စလို့ မရဘူး။ Partner က ကိုယ့် fixed IP ကို allow-list လုပ်ပေးရမယ့်အခါ အကောင်းဆုံးပါ။"
          ) },
          { type: 'callout', tone: 'warn', text: L(
            "Old blog posts and practice tests still mention Basic public IPs and the Basic Load Balancer. Both were retired on 30 September 2025. In new answers, choose **Standard**.",
            "古いブログや模擬試験にはまだ Basic パブリック IP や Basic Load Balancer が登場しますが、どちらも 2025 年 9 月 30 日に廃止されました。新しい設計では **Standard** を選びましょう。",
            "Blog အဟောင်းတွေ၊ practice test အဟောင်းတွေမှာ Basic public IP နဲ့ Basic Load Balancer ကို အခုထိ တွေ့နိုင်တယ်။ နှစ်ခုလုံး 2025 စက်တင်ဘာ 30 မှာ ရပ်ဆိုင်းပြီးပါပြီ။ အသစ် ရွေးရင် **Standard** ကို ရွေးပါ။"
          ) },
        ],
      },
      {
        id: "nsg",
        title: L("Network security groups: the security guard at the door", "ネットワークセキュリティグループ：扉の警備員", "Network Security Group: တံခါးဝက လုံခြုံရေးအစောင့်"),
        blocks: [
          { type: 'p', text: L(
            "An **NSG** is a list of allow/deny rules that filter traffic by **5-tuple**: source, source port, destination, destination port and protocol. Each rule has a **priority from 100 to 4096**. Azure checks rules from the **lowest number first**, and the **first match wins**; processing stops there. NSGs are **stateful**: if inbound SSH is allowed, the reply traffic is allowed automatically without an outbound rule.",
            "**NSG** は、**5 タプル**（送信元、送信元ポート、宛先、宛先ポート、プロトコル）でトラフィックをフィルタリングする許可／拒否規則の一覧です。各規則には **100〜4096 の優先度**があり、Azure は**数字が小さいものから**評価し、**最初に一致した規則が適用**されてそこで処理が終わります。NSG は**ステートフル**なので、受信 SSH を許可すれば、その応答は送信規則なしで自動的に許可されます。",
            "**NSG** ဆိုတာ **5-tuple** (source၊ source port၊ destination၊ destination port၊ protocol) နဲ့ traffic ကို စစ်တဲ့ allow/deny rule စာရင်းပါ။ Rule တစ်ခုစီမှာ **priority 100 ကနေ 4096** ရှိတယ်။ Azure က **နံပါတ်အငယ်ဆုံးကနေ** စစ်ပြီး **ပထမဆုံး ကိုက်တဲ့ rule က အနိုင်ရ** တယ်၊ အဲဒီမှာ ရပ်လိုက်တယ်။ NSG က **stateful** ဖြစ်လို့ inbound SSH ကို ခွင့်ပြုထားရင် ပြန်ထွက်တဲ့ reply traffic ကို outbound rule မလိုဘဲ အလိုအလျောက် ခွင့်ပြုတယ်။"
          ) },
          { type: 'table',
            head: [L("Default rule", "既定の規則", "Default rule အမည်"), L("Priority", "優先度", "Priority နံပါတ်"), L("Effect", "効果", "အကျိုးသက်ရောက်မှု")],
            rows: [
              [L("AllowVNetInBound (inbound)", "AllowVNetInBound（受信）", "AllowVNetInBound (ဝင်)"), L("65000 (default)", "65000（既定）", "65000 (မူလ)"), L("Allow traffic from the VirtualNetwork tag (VNet, peered VNets, on-premises via gateway)", "VirtualNetwork タグ（VNet、ピアリング先、ゲートウェイ経由のオンプレミス）からの通信を許可", "VirtualNetwork tag (VNet၊ peered VNet၊ gateway ကနေ on-premises) က traffic ကို ခွင့်ပြု")],
              [L("AllowAzureLoadBalancerInBound (inbound)", "AllowAzureLoadBalancerInBound（受信）", "AllowAzureLoadBalancerInBound (ဝင်)"), L("65001 (default)", "65001（既定）", "65001 (မူလ)"), L("Allow health probes from the Azure load balancer", "Azure ロードバランサーの正常性プローブを許可", "Azure load balancer ရဲ့ health probe ကို ခွင့်ပြု")],
              [L("DenyAllInBound (inbound)", "DenyAllInBound（受信）", "DenyAllInBound (ဝင်)"), L("65500 (last)", "65500（最後）", "65500 (နောက်ဆုံး)"), L("Deny everything else inbound, including the internet", "インターネットを含むその他の受信をすべて拒否", "Internet အပါအဝင် ကျန်တဲ့ inbound အားလုံးကို ပိတ်")],
              [L("AllowVNetOutBound / AllowInternetOutBound (outbound)", "AllowVNetOutBound / AllowInternetOutBound（送信）", "AllowVNetOutBound / AllowInternetOutBound (ထွက်)"), L("65000 / 65001 (default)", "65000 / 65001（既定）", "65000 / 65001 (မူလ)"), L("Allow outbound to the VNet and to the internet", "VNet とインターネットへの送信を許可", "VNet နဲ့ internet ကို outbound ခွင့်ပြု")],
              [L("DenyAllOutBound (outbound)", "DenyAllOutBound（送信）", "DenyAllOutBound (ထွက်)"), L("65500 (last)", "65500（最後）", "65500 (နောက်ဆုံး)"), L("Deny all other outbound", "その他の送信をすべて拒否", "ကျန်တဲ့ outbound အားလုံး ပိတ်")],
            ] },
          { type: 'list', items: [
            L("**Service tags** are Microsoft-managed groups of IP prefixes, such as `Internet`, `VirtualNetwork`, `AzureLoadBalancer`, `Storage`, `Sql` or `AzureMonitor`. Use them instead of typing IP lists that change.",
              "**サービスタグ**は Microsoft が管理する IP プレフィックスのグループです（`Internet`、`VirtualNetwork`、`AzureLoadBalancer`、`Storage`、`Sql`、`AzureMonitor` など）。変化する IP 一覧を手入力する代わりに使います。",
              "**Service tag** တွေက Microsoft စီမံတဲ့ IP prefix အုပ်စုတွေပါ (`Internet`၊ `VirtualNetwork`၊ `AzureLoadBalancer`၊ `Storage`၊ `Sql`၊ `AzureMonitor` စသဖြင့်)။ ပြောင်းလဲနေတဲ့ IP စာရင်းကို ကိုယ်တိုင်ရိုက်မယ့်အစား ဒါကိုသုံးပါ။"),
            L("**Application security groups (ASGs)** let you group VM NICs by role (for example `asg-web`, `asg-db`) and write rules like `asg-web -> asg-db : 1433`. No IP addresses to maintain; NICs in an ASG must be in the same VNet.",
              "**アプリケーションセキュリティグループ（ASG）**は VM の NIC を役割ごと（例：`asg-web`、`asg-db`）にまとめ、`asg-web -> asg-db : 1433` のような規則を書けます。IP アドレスを管理する必要がなく、ASG 内の NIC は同じ VNet にある必要があります。",
              "**Application security group (ASG)** တွေက VM NIC တွေကို role အလိုက် (ဥပမာ `asg-web`၊ `asg-db`) အုပ်စုဖွဲ့ပြီး `asg-web -> asg-db : 1433` လို rule ရေးလို့ရစေတယ်။ IP address တွေ ထိန်းစရာမလိုဘူး။ ASG ထဲက NIC တွေ VNet တစ်ခုတည်းမှာ ရှိရမယ်။"),
            L("An NSG can be associated with a **subnet**, a **NIC**, or both. Each subnet or NIC can have **at most one** NSG, but one NSG can be reused on many subnets/NICs in the same region.",
              "NSG は**サブネット**、**NIC**、またはその両方に関連付けられます。各サブネット／NIC に関連付けられる NSG は**最大 1 つ**ですが、1 つの NSG を同じリージョンの複数のサブネット／NIC で再利用できます。",
              "NSG ကို **subnet**၊ **NIC** ဒါမှမဟုတ် နှစ်ခုလုံးနဲ့ ချိတ်လို့ရတယ်။ Subnet/NIC တစ်ခုမှာ NSG **တစ်ခုပဲ** ချိတ်လို့ရပေမဲ့ NSG တစ်ခုကို region တူတဲ့ subnet/NIC အများကြီးမှာ ပြန်သုံးလို့ရတယ်။"),
          ] },
          { type: 'diagram', text: `INBOUND  (Internet -> VM)
  packet --> [ Subnet NSG ] --allow--> [ NIC NSG ] --allow--> VM
                  |                         |
                deny -> DROP              deny -> DROP

OUTBOUND (VM -> Internet)
  VM --> [ NIC NSG ] --allow--> [ Subnet NSG ] --allow--> destination
              |                       |
            deny -> DROP            deny -> DROP

Inside each NSG: priority 100 ... 4096, then defaults 65000-65500
First matching rule wins. Traffic must be ALLOWED by BOTH NSGs.`,
            caption: L("NSG evaluation path: inbound checks the subnet NSG first, outbound checks the NIC NSG first.",
              "NSG の評価順序：受信はサブネット NSG が先、送信は NIC NSG が先です。",
              "NSG စစ်ဆေးတဲ့ လမ်းကြောင်း: inbound က subnet NSG အရင်၊ outbound က NIC NSG အရင်။") },
          { type: 'code', lang: 'bash', code: `az network nsg create -g rg-net-lab -n nsg-web

# Allow SSH only from one admin IP (priority 100 beats default rules)
az network nsg rule create -g rg-net-lab --nsg-name nsg-web \\
  --name Allow-SSH-MyIP --priority 100 --direction Inbound --access Allow \\
  --protocol Tcp --source-address-prefixes 203.0.113.10/32 \\
  --source-port-ranges '*' --destination-port-ranges 22

# Associate the NSG with the subnet
az network vnet subnet update -g rg-net-lab --vnet-name vnet-app \\
  --name snet-web --network-security-group nsg-web

# See the combined (effective) rules applied to a NIC
az network nic list-effective-nsg -g rg-net-lab -n vm-web01-nic`,
            caption: L("Create an NSG, add a rule, associate it and inspect effective rules.", "NSG を作成し、規則を追加して関連付け、有効な規則を確認します。", "NSG ဆောက်၊ rule ထည့်၊ ချိတ်ပြီး effective rule တွေ စစ်ကြည့်နည်း။") },
          { type: 'callout', tone: 'exam', text: L(
            "Priority puzzles are very common. Example: rule 200 Deny TCP 3389 from Any, rule 100 Allow TCP 3389 from 198.51.100.0/24. A client at 198.51.100.7 is **allowed** (100 is evaluated first). A client at 203.0.113.5 is **denied** by rule 200. With both a subnet NSG and a NIC NSG, the traffic must be allowed by **both**. Use **effective security rules** or **IP flow verify** to prove the result.",
            "優先度の問題は非常によく出ます。例：規則 200 は Any からの TCP 3389 を拒否、規則 100 は 198.51.100.0/24 からの TCP 3389 を許可。198.51.100.7 のクライアントは**許可**（100 が先に評価）され、203.0.113.5 は規則 200 で**拒否**されます。サブネット NSG と NIC NSG の両方がある場合は、**両方**で許可される必要があります。結果の確認には**有効なセキュリティ規則**や **IP flow verify** を使います。",
            "Priority ပုစ္ဆာတွေ အရမ်းထွက်တယ်။ ဥပမာ: rule 200 က Any ကလာတဲ့ TCP 3389 ကို Deny၊ rule 100 က 198.51.100.0/24 ကလာတဲ့ TCP 3389 ကို Allow။ 198.51.100.7 က client ကို **ခွင့်ပြု** တယ် (100 ကို အရင်စစ်လို့)။ 203.0.113.5 ကတော့ rule 200 ကြောင့် **ပိတ်ခံရ** တယ်။ Subnet NSG နဲ့ NIC NSG နှစ်ခုလုံး ရှိရင် **နှစ်ခုလုံးက** ခွင့်ပြုမှ ဖြတ်လို့ရတယ်။ အဖြေကို သေချာစေဖို့ **effective security rules** ဒါမှမဟုတ် **IP flow verify** ကို သုံးပါ။"
          ) },
          { type: 'callout', tone: 'memory', text: L(
            "**Lower number = higher priority. First match = final answer.** Inbound: **S**ubnet then **N**IC (\"SN\" = coming in from the Street to the Nest). Outbound: the reverse.",
            "**数字が小さいほど優先度が高い。最初の一致が最終判断。** 受信は **S**ubnet → **N**IC（「通り（Street）から巣（Nest）へ入る」で SN）。送信はその逆です。",
            "**နံပါတ်ငယ် = priority မြင့်။ ပထမဆုံးကိုက်တာ = နောက်ဆုံးအဖြေ။** Inbound က **S**ubnet ပြီးမှ **N**IC (\"SN\" = လမ်းမ Street ကနေ အသိုက် Nest ထဲ ဝင်လာတယ်)။ Outbound က ပြောင်းပြန်။"
          ) },
        ],
      },
      {
        id: "routing",
        title: L("Routing: system routes, user-defined routes and Azure Firewall", "ルーティング：システムルート、ユーザー定義ルート、Azure Firewall", "Routing: System route၊ User-defined route နဲ့ Azure Firewall"),
        blocks: [
          { type: 'p', text: L(
            "Azure automatically creates **system routes** so that subnets in a VNet can reach each other, the internet works outbound, and peered or gateway-connected networks are reachable. To change the path, create a **route table** with **user-defined routes (UDRs)** and associate it with a subnet. The classic case is **forced tunneling**: send `0.0.0.0/0` to an **Azure Firewall** or a third-party **network virtual appliance (NVA)** so that all outbound traffic is inspected.",
            "Azure は**システムルート**を自動的に作成し、VNet 内のサブネット間通信、インターネットへの送信、ピアリング先やゲートウェイ接続先への到達を可能にします。経路を変えるには、**ユーザー定義ルート（UDR）**を含む**ルートテーブル**を作成してサブネットに関連付けます。代表例は**強制トンネリング**で、`0.0.0.0/0` を **Azure Firewall** やサードパーティの**ネットワーク仮想アプライアンス（NVA）**に向け、すべての送信トラフィックを検査します。",
            "Azure က **system route** တွေကို အလိုအလျောက် ဆောက်ပေးလို့ VNet ထဲက subnet တွေ အချင်းချင်း ရောက်တယ်၊ internet ကို outbound သွားလို့ရတယ်၊ peered ဒါမှမဟုတ် gateway နဲ့ချိတ်ထားတဲ့ network တွေကို ရောက်တယ်။ လမ်းကြောင်းပြောင်းချင်ရင် **user-defined route (UDR)** ပါတဲ့ **route table** ဆောက်ပြီး subnet နဲ့ ချိတ်ရတယ်။ ထင်ရှားတဲ့ ဥပမာက **forced tunneling** ပါ။ `0.0.0.0/0` ကို **Azure Firewall** ဒါမှမဟုတ် third-party **network virtual appliance (NVA)** ဆီ ပို့ပြီး outbound traffic အားလုံးကို စစ်တယ်။"
          ) },
          { type: 'list', items: [
            L("Next hop types: **Virtual appliance** (give its private IP), **Virtual network gateway**, **Virtual network**, **Internet**, and **None** (drops the traffic).",
              "ネクストホップの種類：**仮想アプライアンス**（プライベート IP を指定）、**仮想ネットワークゲートウェイ**、**仮想ネットワーク**、**インターネット**、**なし**（トラフィックを破棄）。",
              "Next hop အမျိုးအစားတွေ: **Virtual appliance** (သူ့ private IP ပေးရ)၊ **Virtual network gateway**၊ **Virtual network**၊ **Internet**၊ **None** (traffic ကို ပစ်ချ)။"),
            L("Route selection uses **longest prefix match** first. If prefixes are equal, a UDR beats a BGP route, which beats a system route.",
              "経路選択はまず**最長プレフィックス一致**です。プレフィックスが同じ場合は UDR、BGP ルート、システムルートの順に優先されます。",
              "Route ရွေးတဲ့အခါ **longest prefix match** ကို အရင်ကြည့်တယ်။ Prefix တူရင် UDR က BGP route ထက် အနိုင်ရပြီး BGP က system route ထက် အနိုင်ရတယ်။"),
            L("A route table is associated with **subnets** (not NICs), and must be in the same region and subscription as the VNet. When using an NVA VM, enable **IP forwarding** on its NIC.",
              "ルートテーブルは（NIC ではなく）**サブネット**に関連付け、VNet と同じリージョン・サブスクリプションに置く必要があります。NVA の VM を使う場合は、その NIC で **IP 転送**を有効にします。",
              "Route table ကို (NIC မဟုတ်ဘဲ) **subnet** နဲ့ ချိတ်ရပြီး VNet နဲ့ region၊ subscription တူရမယ်။ NVA VM သုံးရင် သူ့ NIC မှာ **IP forwarding** ဖွင့်ပေးရမယ်။"),
            L("**Azure Firewall** is a managed, stateful firewall service (Basic, Standard, Premium) with network and application (FQDN) rules, threat intelligence and, in Premium, TLS inspection and IDPS. NSG = guard at each floor; Azure Firewall = the central security gate of the whole campus.",
              "**Azure Firewall** はマネージドなステートフルファイアウォール（Basic、Standard、Premium）で、ネットワーク規則とアプリケーション（FQDN）規則、脅威インテリジェンス、Premium では TLS 検査と IDPS を提供します。NSG は各フロアの警備員、Azure Firewall はキャンパス全体の中央セキュリティゲートです。",
              "**Azure Firewall** က managed၊ stateful firewall service (Basic၊ Standard၊ Premium) ဖြစ်ပြီး network rule၊ application (FQDN) rule၊ threat intelligence ပါတယ်၊ Premium မှာ TLS inspection နဲ့ IDPS ပါတယ်။ NSG = အထပ်တိုင်းက အစောင့်၊ Azure Firewall = campus တစ်ခုလုံးရဲ့ ဗဟို လုံခြုံရေးဂိတ်။"),
          ] },
          { type: 'code', lang: 'bash', code: `az network route-table create -g rg-net-lab -n rt-spoke

# Send all internet-bound traffic to the firewall private IP
az network route-table route create -g rg-net-lab --route-table-name rt-spoke \\
  --name default-to-fw --address-prefix 0.0.0.0/0 \\
  --next-hop-type VirtualAppliance --next-hop-ip-address 10.100.1.4

az network vnet subnet update -g rg-net-lab --vnet-name vnet-app \\
  --name snet-web --route-table rt-spoke`,
            caption: L("Forced tunneling with a UDR to Azure Firewall.", "UDR で Azure Firewall へ強制トンネリングします。", "UDR သုံးပြီး Azure Firewall ဆီ forced tunneling လုပ်နည်း။") },
        ],
      },
      {
        id: "peering",
        title: L("VNet peering and hub-spoke design", "VNet ピアリングとハブ＆スポーク設計", "VNet Peering နဲ့ Hub-Spoke Design"),
        blocks: [
          { type: 'p', text: L(
            "**VNet peering** connects two VNets over the Microsoft backbone with low latency and private IPs; no gateway or public internet is involved. **Regional peering** connects VNets in the same region, **global peering** connects VNets in different regions. Peering works across subscriptions and even across Microsoft Entra tenants, but address spaces **must not overlap**. Data transfer across peering is charged on both sides.",
            "**VNet ピアリング**は、Microsoft バックボーン経由で 2 つの VNet を低遅延かつプライベート IP で接続します。ゲートウェイやパブリックインターネットは使いません。同じリージョン内は**リージョナルピアリング**、異なるリージョン間は**グローバルピアリング**です。サブスクリプションや Microsoft Entra テナントをまたいでも構成できますが、アドレス空間は**重複してはいけません**。ピアリング経由のデータ転送には双方で料金がかかります。",
            "**VNet peering** က VNet နှစ်ခုကို Microsoft backbone ပေါ်ကနေ latency နည်းနည်း၊ private IP နဲ့ ချိတ်ပေးတယ်။ Gateway လည်းမလို၊ public internet လည်း မဖြတ်ဘူး။ Region တူရင် **regional peering**၊ region မတူရင် **global peering**။ Subscription မတူ၊ Microsoft Entra tenant မတူလည်း လုပ်လို့ရပေမဲ့ address space တွေ **ထပ်လို့ မရဘူး**။ Peering ဖြတ်တဲ့ data transfer ကို နှစ်ဖက်လုံးမှာ ပိုက်ဆံကောက်တယ်။"
          ) },
          { type: 'p', text: L(
            "Peering is **non-transitive**. If Spoke1 peers with Hub and Spoke2 peers with Hub, Spoke1 **cannot** reach Spoke2 automatically. Like friendships: your friend's friend is not automatically your friend. To let spokes talk, peer them directly, or route through an NVA/Azure Firewall in the hub with UDRs. To share one VPN/ExpressRoute gateway, enable **Allow gateway transit** on the hub side and **Use remote gateways** on each spoke side.",
            "ピアリングは**推移的ではありません**。Spoke1 と Hub、Spoke2 と Hub がそれぞれピアリングしていても、Spoke1 から Spoke2 へは自動的に**通信できません**。友人関係と同じで、友人の友人が自動的に友人になるわけではありません。スポーク同士を通信させるには直接ピアリングするか、UDR でハブの NVA／Azure Firewall を経由させます。1 つの VPN／ExpressRoute ゲートウェイを共有するには、ハブ側で **Allow gateway transit**、各スポーク側で **Use remote gateways** を有効にします。",
            "Peering က **non-transitive** ပါ။ Spoke1 က Hub နဲ့ peer၊ Spoke2 က Hub နဲ့ peer ထားပေမဲ့ Spoke1 က Spoke2 ကို အလိုအလျောက် **မရောက်ဘူး**။ သူငယ်ချင်းလိုပါပဲ၊ ကိုယ့်သူငယ်ချင်းရဲ့ သူငယ်ချင်းက ကိုယ့်သူငယ်ချင်း အလိုလို မဖြစ်ဘူး။ Spoke တွေ အချင်းချင်း ပြောစေချင်ရင် တိုက်ရိုက် peer လုပ်ပါ၊ ဒါမှမဟုတ် UDR နဲ့ hub ထဲက NVA/Azure Firewall ကို ဖြတ်ခိုင်းပါ။ VPN/ExpressRoute gateway တစ်ခုတည်းကို မျှသုံးချင်ရင် hub ဘက်မှာ **Allow gateway transit**၊ spoke တစ်ခုစီဘက်မှာ **Use remote gateways** ကို ဖွင့်ပါ။"
          ) },
          { type: 'diagram', text: `                 On-premises (Tokyo office)
                         |
                  S2S VPN / ExpressRoute
                         |
              +----------------------+
              |   HUB VNet 10.100/16 |
              |  GatewaySubnet       |
              |  AzureFirewallSubnet |
              +----------------------+
         peering  /               \\  peering
   (use remote   /                 \\  (use remote
    gateways)   /                   \\  gateways)
   +----------------+       +----------------+
   | SPOKE1 10.1/16 |  X X  | SPOKE2 10.2/16 |
   +----------------+       +----------------+
     No direct path: peering is NOT transitive.
     Spoke-to-spoke = direct peering OR via hub firewall + UDR.`,
            caption: L("Hub-spoke: spokes share the hub gateway through gateway transit.", "ハブ＆スポーク：スポークはゲートウェイ転送でハブのゲートウェイを共有します。", "Hub-spoke: spoke တွေက gateway transit နဲ့ hub gateway ကို မျှသုံးတယ်။") },
          { type: 'code', lang: 'bash', code: `# Hub side: share the gateway
az network vnet peering create -g rg-net-lab -n hub-to-spoke1 \\
  --vnet-name vnet-hub --remote-vnet vnet-spoke1 \\
  --allow-vnet-access --allow-forwarded-traffic --allow-gateway-transit

# Spoke side: use the hub gateway
az network vnet peering create -g rg-net-lab -n spoke1-to-hub \\
  --vnet-name vnet-spoke1 --remote-vnet vnet-hub \\
  --allow-vnet-access --allow-forwarded-traffic --use-remote-gateways`,
            caption: L("Peering must be created in both directions; the CLI needs one command per side.", "ピアリングは双方向に作成する必要があり、CLI では片側ごとに 1 コマンドです。", "Peering ကို နှစ်ဘက်လုံး ဆောက်ရတယ်၊ CLI မှာ ဘက်တစ်ဘက်အတွက် command တစ်ခုစီ။") },
          { type: 'callout', tone: 'exam', text: L(
            "Keywords: \"Spoke A cannot reach Spoke B\" = **non-transitive peering**. \"Spokes must use the hub VPN gateway\" = **Allow gateway transit** (hub) + **Use remote gateways** (spoke). \"Peering fails to create\" = check for **overlapping address spaces**.",
            "キーワード：「Spoke A から Spoke B に届かない」= **ピアリングは非推移的**。「スポークがハブの VPN ゲートウェイを使う」= **Allow gateway transit**（ハブ）＋ **Use remote gateways**（スポーク）。「ピアリングを作成できない」= **アドレス空間の重複**を確認。",
            "Keyword တွေ: \"Spoke A က Spoke B ကို မရောက်ဘူး\" = **non-transitive peering**။ \"Spoke တွေက hub VPN gateway ကို သုံးရမယ်\" = **Allow gateway transit** (hub) + **Use remote gateways** (spoke)။ \"Peering ဆောက်လို့ မရဘူး\" = **address space ထပ်နေလား** စစ်ပါ။"
          ) },
        ],
      },
      {
        id: "hybrid",
        title: L("Hybrid connectivity: VPN Gateway vs ExpressRoute", "ハイブリッド接続：VPN Gateway と ExpressRoute", "Hybrid Connectivity: VPN Gateway နဲ့ ExpressRoute"),
        blocks: [
          { type: 'p', text: L(
            "A **VPN Gateway** builds an encrypted IPsec/IKE tunnel **over the public internet**. Think of it as an armored car driving on public roads. **Site-to-Site (S2S)** connects a whole office through its VPN device (represented in Azure by a **local network gateway**). **Point-to-Site (P2S)** connects individual laptops, for example engineers working from home, using OpenVPN, IKEv2 or SSTP. **VNet-to-VNet** connects VNets with a tunnel, although peering is usually simpler. The gateway lives in **GatewaySubnet** and takes time to deploy (often 30+ minutes).",
            "**VPN Gateway** は**パブリックインターネット上**に暗号化された IPsec/IKE トンネルを構築します。公道を走る装甲車のイメージです。**サイト間（S2S）**はオフィス全体を VPN デバイス経由で接続し、そのデバイスは Azure 上で**ローカルネットワークゲートウェイ**として表されます。**ポイント対サイト（P2S）**は在宅勤務のエンジニアなど個々の PC を OpenVPN、IKEv2、SSTP で接続します。**VNet 間**接続はトンネルで VNet 同士をつなぎますが、通常はピアリングの方が簡単です。ゲートウェイは **GatewaySubnet** に配置され、デプロイには時間がかかります（30 分以上かかることも多い）。",
            "**VPN Gateway** က **public internet ပေါ်ကနေ** encrypt လုပ်ထားတဲ့ IPsec/IKE tunnel ဆောက်တယ်။ လမ်းမကြီးပေါ်မှာ မောင်းတဲ့ သံချပ်ကာကား လို့ မြင်ကြည့်ပါ။ **Site-to-Site (S2S)** က ရုံးတစ်ခုလုံးကို VPN device ကနေ ချိတ်တယ် (အဲဒီ device ကို Azure ထဲမှာ **local network gateway** နဲ့ ကိုယ်စားပြုတယ်)။ **Point-to-Site (P2S)** က အိမ်ကနေ အလုပ်လုပ်တဲ့ engineer လို laptop တစ်လုံးချင်းကို OpenVPN၊ IKEv2၊ SSTP နဲ့ ချိတ်တယ်။ **VNet-to-VNet** က tunnel နဲ့ VNet တွေကို ချိတ်တာဖြစ်ပေမဲ့ များသောအားဖြင့် peering က ပိုလွယ်တယ်။ Gateway က **GatewaySubnet** ထဲမှာ နေပြီး deploy လုပ်ရတာ ကြာတယ် (မိနစ် 30 ကျော်တတ်တယ်)။"
          ) },
          { type: 'p', text: L(
            "**ExpressRoute** is a **private, dedicated connection** from your datacenter to Microsoft through a connectivity provider (for example at an Equinix facility in Tokyo). It **does not traverse the public internet**, so it offers predictable latency, higher bandwidth and an SLA. It is like a private railway line built only for your company. Traffic over ExpressRoute is **not encrypted by default**; add IPsec over ExpressRoute or MACsec (ExpressRoute Direct) if required. A common design uses S2S VPN as a **backup** for ExpressRoute.",
            "**ExpressRoute** は、接続プロバイダー（例：東京の Equinix 施設）を経由してデータセンターと Microsoft を結ぶ**プライベートな専用接続**です。**パブリックインターネットを経由しない**ため、安定した遅延、高い帯域幅、SLA が得られます。自社専用に敷かれた鉄道路線のようなものです。ExpressRoute 上の通信は**既定では暗号化されない**ため、必要なら IPsec over ExpressRoute や MACsec（ExpressRoute Direct）を追加します。S2S VPN を ExpressRoute の**バックアップ**にする構成が一般的です。",
            "**ExpressRoute** က connectivity provider (ဥပမာ Tokyo က Equinix facility) ကနေတဆင့် ကိုယ့် datacenter နဲ့ Microsoft ကို ချိတ်တဲ့ **private၊ dedicated connection** ပါ။ **Public internet ကို မဖြတ်တဲ့အတွက်** latency တည်ငြိမ်တယ်၊ bandwidth ပိုများတယ်၊ SLA ရှိတယ်။ ကိုယ့်ကုမ္ပဏီအတွက်ပဲ ဆောက်ထားတဲ့ ကိုယ်ပိုင် ရထားလမ်း လိုပါပဲ။ ExpressRoute ပေါ်က traffic က **default မှာ encrypt မလုပ်ထားဘူး**၊ လိုရင် IPsec over ExpressRoute ဒါမှမဟုတ် MACsec (ExpressRoute Direct) ထပ်ထည့်ရတယ်။ S2S VPN ကို ExpressRoute ရဲ့ **backup** အဖြစ်ထားတဲ့ design က အသုံးများတယ်။"
          ) },
          { type: 'table',
            head: [L("Aspect", "観点", "အချက်"), L("VPN Gateway", "VPN Gateway（インターネット経由）", "VPN Gateway (internet ကနေ)"), L("ExpressRoute", "ExpressRoute（専用回線）", "ExpressRoute (သီးသန့်လိုင်း)")],
            rows: [
              [L("Path", "経路", "လမ်းကြောင်း"), L("Encrypted tunnel over the public internet", "パブリックインターネット上の暗号化トンネル", "Public internet ပေါ်က encrypted tunnel"), L("Private circuit via a provider, no public internet", "プロバイダー経由の専用回線、インターネット非経由", "Provider ကနေ private circuit၊ public internet မဖြတ်")],
              [L("Encryption", "暗号化", "Encryption (စာဝှက်)"), L("Always (IPsec/IKE, or TLS for some P2S)", "常に暗号化（IPsec/IKE、一部 P2S は TLS）", "အမြဲ (IPsec/IKE၊ P2S တချို့က TLS)"), L("Not by default; add IPsec or MACsec", "既定ではなし。IPsec や MACsec を追加", "Default မှာ မပါ၊ IPsec ဒါမှမဟုတ် MACsec ထည့်ရ")],
              [L("Bandwidth and latency", "帯域と遅延", "Bandwidth နဲ့ latency"), L("Lower bandwidth, variable latency", "帯域は低め、遅延は変動", "Bandwidth နည်း၊ latency မတည်ငြိမ်"), L("High bandwidth (up to 100 Gbps with Direct), predictable latency", "高帯域（Direct で最大 100 Gbps）、安定した遅延", "Bandwidth များ (Direct နဲ့ 100 Gbps အထိ)၊ latency တည်ငြိမ်")],
              [L("Setup time and cost", "構築期間とコスト", "Setup အချိန်နဲ့ ကုန်ကျစရိတ်"), L("Hours, lower cost", "数時間、低コスト", "နာရီပိုင်း၊ စရိတ်နည်း"), L("Weeks (provider order), higher cost", "数週間（プロバイダー手配）、高コスト", "ရက်သတ္တပတ်ပိုင်း (provider မှာ မှာရ)၊ စရိတ်များ")],
              [L("Typical use", "典型的な用途", "သုံးလေ့ရှိတာ"), L("Small offices, remote users (P2S), backup link", "小規模拠点、リモートユーザー（P2S）、バックアップ回線", "ရုံးသေး၊ remote user (P2S)၊ backup link"), L("Large migrations, compliance, mission-critical hybrid", "大規模移行、コンプライアンス、ミッションクリティカルなハイブリッド", "Migration ကြီး၊ compliance၊ mission-critical hybrid")],
            ] },
          { type: 'callout', tone: 'memory', text: L(
            "**VPN = Very Public Network road (armored car on the highway). ExpressRoute = Exclusive private railway.** If the question says \"must not traverse the internet\", the answer is ExpressRoute.",
            "**VPN = 公道を走る装甲車、ExpressRoute = 専用の鉄道。** 問題に「インターネットを経由してはならない」とあれば答えは ExpressRoute です。",
            "**VPN = လမ်းမကြီးပေါ်က သံချပ်ကာကား၊ ExpressRoute = ကိုယ်ပိုင် ရထားလမ်း။** မေးခွန်းမှာ \"internet ကို မဖြတ်ရ\" လို့ ပါရင် အဖြေက ExpressRoute ပါ။"
          ) },
        ],
      },
      {
        id: "private-access",
        title: L("Private access: service endpoints, private endpoints, DNS and Bastion", "プライベートアクセス：サービスエンドポイント、プライベートエンドポイント、DNS、Bastion", "Private Access: Service Endpoint၊ Private Endpoint၊ DNS နဲ့ Bastion"),
        blocks: [
          { type: 'p', text: L(
            "PaaS services like Storage and Azure SQL have public endpoints. Two features keep traffic private. A **service endpoint** is enabled on a subnet and extends the subnet identity to the service, so the service firewall can say \"allow only snet-web\". Traffic stays on the Microsoft backbone, but the service is still reached on its **public IP**. A **private endpoint** (powered by **Private Link**) puts a **NIC with a private IP from your subnet** in front of one specific resource, such as one storage account. It is like giving the bank a branch desk inside your own building.",
            "Storage や Azure SQL などの PaaS にはパブリックエンドポイントがあります。通信をプライベートに保つ機能が 2 つあります。**サービスエンドポイント**はサブネットで有効化し、サブネットの ID をサービスに伝えるため、サービスのファイアウォールで「snet-web のみ許可」と指定できます。通信は Microsoft バックボーン上に留まりますが、接続先はサービスの**パブリック IP**のままです。**プライベートエンドポイント**（**Private Link** による）は、特定の 1 つのリソース（例：1 つのストレージアカウント）の前に**自分のサブネットのプライベート IP を持つ NIC**を置きます。自社ビルの中に銀行の窓口を置いてもらうようなものです。",
            "Storage၊ Azure SQL လို PaaS service တွေမှာ public endpoint ရှိတယ်။ Traffic ကို private ထားဖို့ feature နှစ်ခု ရှိတယ်။ **Service endpoint** ကို subnet မှာ ဖွင့်ရပြီး subnet ရဲ့ identity ကို service ဆီ ပို့ပေးလို့ service firewall က \"snet-web ကိုပဲ ခွင့်ပြု\" လို့ သတ်မှတ်နိုင်တယ်။ Traffic က Microsoft backbone ပေါ်မှာပဲ နေပေမဲ့ service ကို **public IP** နဲ့ပဲ ဆက်သွယ်တုန်းပါ။ **Private endpoint** (**Private Link** နဲ့ အလုပ်လုပ်တယ်) ကတော့ storage account တစ်ခုလို resource တစ်ခုတည်းရဲ့ ရှေ့မှာ **ကိုယ့် subnet ထဲက private IP ပါတဲ့ NIC** ကို ထားပေးတယ်။ ကိုယ့်အဆောက်အအုံထဲမှာ ဘဏ်ကောင်တာ ခွဲဖွင့်ခိုင်းသလိုပါပဲ။"
          ) },
          { type: 'table',
            head: [L("Aspect", "観点", "အချက်"), L("Service endpoint", "サービスエンドポイント", "Service endpoint (subnet အလိုက်)"), L("Private endpoint (Private Link)", "プライベートエンドポイント（Private Link）", "Private endpoint (Private Link) (resource အလိုက်)")],
            rows: [
              [L("Destination IP", "宛先 IP", "ဆက်သွယ်ရမယ့် IP"), L("Service public IP", "サービスのパブリック IP", "Service ရဲ့ public IP"), L("Private IP in your VNet", "VNet 内のプライベート IP", "ကိုယ့် VNet ထဲက private IP")],
              [L("Scope", "範囲", "အကျယ်အဝန်း (Scope)"), L("Whole service type per subnet (e.g. all of Storage)", "サブネット単位でサービス種別全体（例：Storage 全体）", "Subnet အလိုက် service အမျိုးအစား တစ်ခုလုံး (ဥပမာ Storage အားလုံး)"), L("One specific resource", "特定の 1 リソース", "Resource တစ်ခုတည်း")],
              [L("Reachable from on-premises", "オンプレミスから利用", "On-premises ကနေ ရောက်လား"), L("No", "不可", "မရ"), L("Yes, over VPN/ExpressRoute and peering", "可能（VPN／ExpressRoute、ピアリング経由）", "ရ (VPN/ExpressRoute၊ peering ကနေ)")],
              [L("DNS changes", "DNS の変更", "DNS ပြောင်းရလား"), L("None", "不要", "မလို"), L("Needs a private DNS zone, e.g. privatelink.blob.core.windows.net", "プライベート DNS ゾーンが必要（例：privatelink.blob.core.windows.net）", "Private DNS zone လိုတယ် (ဥပမာ privatelink.blob.core.windows.net)")],
              [L("Cost", "コスト", "ကုန်ကျစရိတ်"), L("Free", "無料", "အခမဲ့"), L("Charged per endpoint and data processed", "エンドポイント単位と処理データ量で課金", "Endpoint အလိုက်နဲ့ data ပမာဏအလိုက် ကောက်")],
            ] },
          { type: 'p', text: L(
            "**Azure DNS** hosts **public DNS zones** (records for your internet domain, such as `contoso.com`) and **private DNS zones** that resolve names only inside linked VNets. A private zone link can enable **auto-registration**, so VMs automatically get A records. Private endpoints rely on private zones so `mystorage.blob.core.windows.net` resolves to the private IP. Azure DNS hosts zones; it is not a domain registrar.",
            "**Azure DNS** は**パブリック DNS ゾーン**（`contoso.com` などインターネット向けドメインのレコード）と、リンクした VNet 内でのみ名前解決する**プライベート DNS ゾーン**をホストします。プライベートゾーンのリンクで**自動登録**を有効にすると、VM の A レコードが自動作成されます。プライベートエンドポイントはプライベートゾーンを使って `mystorage.blob.core.windows.net` をプライベート IP に解決します。Azure DNS はゾーンをホストするサービスで、ドメインレジストラーではありません。",
            "**Azure DNS** က **public DNS zone** (`contoso.com` လို internet domain ရဲ့ record တွေ) နဲ့ link လုပ်ထားတဲ့ VNet ထဲမှာပဲ name resolve လုပ်ပေးတဲ့ **private DNS zone** တွေကို host လုပ်ပေးတယ်။ Private zone link မှာ **auto-registration** ဖွင့်ရင် VM တွေရဲ့ A record တွေ အလိုအလျောက် ဝင်တယ်။ Private endpoint က private zone ကိုသုံးပြီး `mystorage.blob.core.windows.net` ကို private IP အဖြစ် resolve လုပ်တယ်။ Azure DNS က zone ကို host လုပ်တာပါ၊ domain ဝယ်တဲ့ registrar မဟုတ်ဘူး။"
          ) },
          { type: 'p', text: L(
            "**Azure Bastion** gives secure RDP/SSH to VMs directly from the Azure portal (or native client on higher SKUs) over **TLS port 443**. Your VMs need **no public IP**, and you do not open 3389/22 to the internet. Deploy it into a subnet named **AzureBastionSubnet** (`/26` or larger). It is the reception desk that escorts visitors to the right floor so nobody needs a private door from the street.",
            "**Azure Bastion** は、Azure ポータル（上位 SKU ではネイティブクライアントも可）から **TLS ポート 443** 経由で VM へ安全に RDP/SSH 接続できるサービスです。VM に**パブリック IP は不要**で、3389/22 をインターネットに開ける必要もありません。**AzureBastionSubnet**（`/26` 以上）という名前のサブネットにデプロイします。来訪者を正しいフロアへ案内する受付のような存在で、通りから各部屋への専用扉は必要ありません。",
            "**Azure Bastion** က Azure portal ကနေ (SKU မြင့်ရင် native client နဲ့လည်း) **TLS port 443** ကနေ VM တွေကို လုံခြုံစွာ RDP/SSH ဝင်ခွင့်ပေးတယ်။ VM တွေမှာ **public IP မလို** ဘူး၊ 3389/22 ကို internet ဆီ ဖွင့်စရာ မလိုဘူး။ **AzureBastionSubnet** (`/26` နဲ့ အထက်) လို့ နာမည်ပေးထားတဲ့ subnet ထဲ deploy လုပ်ရတယ်။ ဧည့်သည်ကို မှန်ကန်တဲ့ အထပ်ဆီ လိုက်ပို့ပေးတဲ့ reception လိုပါပဲ၊ လမ်းမကနေ အခန်းတိုင်းကို တံခါးသီးသန့် ဖောက်စရာ မလိုဘူး။"
          ) },
          { type: 'callout', tone: 'exam', text: L(
            "\"Access storage **from on-premises** over ExpressRoute using a private IP\" or \"disable public network access completely\" = **private endpoint**. \"Cheapest way to restrict a storage account to one subnet\" = **service endpoint**. \"RDP without a public IP on the VM\" = **Azure Bastion**.",
            "「ExpressRoute 経由で**オンプレミスから**プライベート IP でストレージにアクセス」や「パブリックネットワークアクセスを完全に無効化」= **プライベートエンドポイント**。「ストレージアカウントを 1 つのサブネットに制限する最も安価な方法」= **サービスエンドポイント**。「VM にパブリック IP なしで RDP」= **Azure Bastion**。",
            "\"ExpressRoute ကနေ **on-premises က** private IP နဲ့ storage ကို ဝင်ရမယ်\" ဒါမှမဟုတ် \"public network access ကို လုံးဝ ပိတ်ရမယ်\" = **private endpoint**။ \"Storage account ကို subnet တစ်ခုတည်းကိုပဲ ခွင့်ပြုဖို့ အသက်သာဆုံးနည်း\" = **service endpoint**။ \"VM မှာ public IP မပါဘဲ RDP\" = **Azure Bastion**။"
          ) },
        ],
      },
      {
        id: "load-balancing",
        title: L("Load balancing: choosing the right service", "負荷分散：適切なサービスの選び方", "Load Balancing: မှန်ကန်တဲ့ service ရွေးနည်း"),
        blocks: [
          { type: 'p', text: L(
            "Azure has four main load balancing services. Ask two questions: **Is the traffic HTTP(S) or any TCP/UDP?** and **Is it regional or global?** Layer 4 services see only IPs and ports; Layer 7 services read the HTTP request (URL path, host header, cookies) and can terminate TLS and run a **Web Application Firewall (WAF)**.",
            "Azure には主に 4 つの負荷分散サービスがあります。**トラフィックは HTTP(S) か、任意の TCP/UDP か？**、**リージョナルかグローバルか？** の 2 点を考えます。レイヤー 4 のサービスは IP とポートしか見ませんが、レイヤー 7 のサービスは HTTP リクエスト（URL パス、ホストヘッダー、Cookie）を読み、TLS 終端や **Web Application Firewall（WAF）**も実行できます。",
            "Azure မှာ အဓိက load balancing service ၄ ခု ရှိတယ်။ မေးခွန်း ၂ ခု မေးပါ: **Traffic က HTTP(S) လား၊ ဘယ် TCP/UDP မဆိုလား?** နဲ့ **Regional လား၊ Global လား?** Layer 4 service တွေက IP နဲ့ port ကိုပဲ မြင်တယ်။ Layer 7 service တွေက HTTP request (URL path၊ host header၊ cookie) ကို ဖတ်နိုင်ပြီး TLS terminate လုပ်တာ၊ **Web Application Firewall (WAF)** run တာ လုပ်နိုင်တယ်။"
          ) },
          { type: 'table',
            head: [L("Service", "サービス", "Service အမည်"), L("Layer / scope", "レイヤー／範囲", "Layer / အကျယ်အဝန်း"), L("Key features", "主な機能", "အဓိက feature"), L("Choose it when...", "選ぶ場面", "ဘယ်အချိန် ရွေးမလဲ")],
            rows: [
              [L("Azure Load Balancer (Standard)", "Azure Load Balancer（Standard、L4 リージョナル）", "Azure Load Balancer (Standard၊ L4)"), L("L4 (TCP/UDP), regional", "L4（TCP/UDP）、リージョナル", "L4 (TCP/UDP)၊ regional"), L("Public or internal, health probes, HA ports, zone-redundant, very high throughput", "パブリック／内部、正常性プローブ、HA ポート、ゾーン冗長、高スループット", "Public/internal၊ health probe၊ HA port၊ zone-redundant၊ throughput အရမ်းမြင့်"), L("Non-HTTP traffic or an internal tier, e.g. SQL VMs or an NVA pair", "HTTP 以外の通信や内部層（SQL VM、NVA ペアなど）", "HTTP မဟုတ်တဲ့ traffic ဒါမှမဟုတ် internal tier (SQL VM၊ NVA အတွဲ စသဖြင့်)")],
              [L("Application Gateway", "Application Gateway（L7 リージョナル）", "Application Gateway (L7 ဒေသတွင်း)"), L("L7 (HTTP/S), regional", "L7（HTTP/S）、リージョナル", "L7 (HTTP/S)၊ regional"), L("Path-based and host-based routing, TLS termination, cookie affinity, WAF", "パスベース／ホストベースのルーティング、TLS 終端、Cookie アフィニティ、WAF", "Path-based နဲ့ host-based routing၊ TLS termination၊ cookie affinity၊ WAF"), L("A web app in one region needs /images and /api sent to different pools, plus WAF", "1 リージョンの Web アプリで /images と /api を別プールへ振り分け、WAF も必要", "Region တစ်ခုထဲက web app မှာ /images နဲ့ /api ကို pool မတူအောင် ခွဲပို့ပြီး WAF လည်း လိုတယ်")],
              [L("Azure Front Door", "Azure Front Door（L7 グローバル）", "Azure Front Door (L7 ကမ္ဘာလုံးဆိုင်ရာ)"), L("L7 (HTTP/S), global", "L7（HTTP/S）、グローバル", "L7 (HTTP/S)၊ global"), L("Anycast edge, CDN caching, global failover, WAF, path routing", "エニーキャストエッジ、CDN キャッシュ、グローバルフェイルオーバー、WAF、パスルーティング", "Anycast edge၊ CDN caching၊ global failover၊ WAF၊ path routing"), L("A global web app needs the fastest edge for users worldwide and instant regional failover", "世界中のユーザーに最速のエッジと即時のリージョン切り替えが必要なグローバル Web アプリ", "ကမ္ဘာအနှံ့ user တွေအတွက် အမြန်ဆုံး edge နဲ့ region failover ချက်ချင်းလိုတဲ့ global web app")],
              [L("Traffic Manager", "Traffic Manager（DNS グローバル）", "Traffic Manager (DNS ကမ္ဘာလုံးဆိုင်ရာ)"), L("DNS-based, global", "DNS ベース、グローバル", "DNS-based၊ global"), L("Priority, weighted, performance, geographic, multivalue, subnet routing; any protocol", "優先度、重み付け、パフォーマンス、地理的、複数値、サブネットのルーティング。任意のプロトコル", "Priority၊ weighted၊ performance၊ geographic၊ multivalue၊ subnet routing၊ ဘယ် protocol မဆို"), L("Global distribution of non-HTTP endpoints, or DNS-level failover between regions", "HTTP 以外のエンドポイントのグローバル分散や、リージョン間の DNS レベルのフェイルオーバー", "HTTP မဟုတ်တဲ့ endpoint တွေကို global ခွဲဝေတာ ဒါမှမဟုတ် region ကြား DNS level failover")],
            ] },
          { type: 'callout', tone: 'memory', text: L(
            "**Regional + HTTP = Application Gateway. Global + HTTP = Front Door. Regional + any TCP/UDP = Load Balancer. Global + DNS = Traffic Manager.** Traffic Manager never touches the packets; it only answers DNS queries.",
            "**リージョナル＋HTTP = Application Gateway、グローバル＋HTTP = Front Door、リージョナル＋任意の TCP/UDP = Load Balancer、グローバル＋DNS = Traffic Manager。** Traffic Manager はパケットに触れず、DNS クエリに答えるだけです。",
            "**Regional + HTTP = Application Gateway၊ Global + HTTP = Front Door၊ Regional + ဘယ် TCP/UDP မဆို = Load Balancer၊ Global + DNS = Traffic Manager။** Traffic Manager က packet ကို မထိဘူး၊ DNS query ကိုပဲ ဖြေပေးတာပါ။"
          ) },
        ],
      },
      {
        id: "watcher-ddos-lab",
        title: L("Network Watcher, DDoS Protection and a hands-on lab", "Network Watcher、DDoS Protection、ハンズオンラボ", "Network Watcher၊ DDoS Protection နဲ့ လက်တွေ့ Lab"),
        blocks: [
          { type: 'list', items: [
            L("**IP flow verify**: tests whether a packet (direction, protocol, local/remote IP and port) to or from a VM is allowed or denied, and **names the NSG rule** responsible.",
              "**IP flow verify**：VM との間のパケット（方向、プロトコル、ローカル／リモートの IP とポート）が許可か拒否かを確認し、原因となった **NSG 規則名**を示します。",
              "**IP flow verify**: VM ဆီ ဝင်/ထွက်တဲ့ packet (direction၊ protocol၊ local/remote IP နဲ့ port) ကို ခွင့်ပြုလား ပိတ်လား စစ်ပြီး တာဝန်ရှိတဲ့ **NSG rule နာမည်** ကို ပြတယ်။"),
            L("**Next hop**: shows where traffic from a VM to a destination IP goes (Internet, VirtualAppliance, VNet gateway, None) and which route table caused it. Perfect for UDR mistakes.",
              "**Next hop**：VM から宛先 IP への通信がどこへ向かうか（Internet、VirtualAppliance、VNet ゲートウェイ、None）と、原因のルートテーブルを表示します。UDR のミス調査に最適です。",
              "**Next hop**: VM ကနေ destination IP ဆီ traffic ဘယ်ကို သွားလဲ (Internet၊ VirtualAppliance၊ VNet gateway၊ None) နဲ့ ဘယ် route table ကြောင့်လဲ ပြတယ်။ UDR အမှားရှာဖို့ အကောင်းဆုံး။"),
            L("**Connection troubleshoot**: tests end-to-end connectivity from a VM to a VM, FQDN or URL and reports latency and the hop where it fails.",
              "**Connection troubleshoot**：VM から VM、FQDN、URL へのエンドツーエンド接続をテストし、遅延と失敗したホップを報告します。",
              "**Connection troubleshoot**: VM ကနေ VM၊ FQDN၊ URL ဆီ end-to-end connectivity ကို စမ်းပြီး latency နဲ့ ဘယ် hop မှာ ပျက်လဲ ပြတယ်။"),
            L("Also: **effective security rules**, **packet capture**, **topology** and **VNet flow logs** (the successor to NSG flow logs). Network Watcher is enabled automatically per region.",
              "その他：**有効なセキュリティ規則**、**パケットキャプチャ**、**トポロジ**、**VNet フローログ**（NSG フローログの後継）。Network Watcher はリージョンごとに自動で有効化されます。",
              "နောက်ထပ်: **effective security rules**၊ **packet capture**၊ **topology**၊ **VNet flow logs** (NSG flow logs ကို အစားထိုးတာ)။ Network Watcher ကို region အလိုက် အလိုအလျောက် ဖွင့်ပေးထားတယ်။"),
          ] },
          { type: 'p', text: L(
            "**DDoS Protection**: every Azure resource gets free **infrastructure (default) protection**. For tuned protection with attack metrics, alerts, rapid response support and cost protection, enable **DDoS Network Protection** (per VNet, through a protection plan) or **DDoS IP Protection** (per public IP). DDoS Protection handles volumetric L3/L4 floods; pair it with a **WAF** for L7 attacks such as SQL injection.",
            "**DDoS Protection**：すべての Azure リソースに無料の**インフラストラクチャ（既定）保護**があります。攻撃メトリクス、アラート、迅速な対応支援、コスト保護を含む調整済みの保護が必要なら、**DDoS Network Protection**（保護プラン経由で VNet 単位）または **DDoS IP Protection**（パブリック IP 単位）を有効にします。DDoS Protection は L3/L4 の大量攻撃に対応し、SQL インジェクションのような L7 攻撃には **WAF** を組み合わせます。",
            "**DDoS Protection**: Azure resource တိုင်းမှာ အခမဲ့ **infrastructure (default) protection** ပါတယ်။ Attack metric၊ alert၊ rapid response support၊ cost protection ပါတဲ့ အဆင့်မြင့် ကာကွယ်မှု လိုရင် **DDoS Network Protection** (protection plan နဲ့ VNet အလိုက်) ဒါမှမဟုတ် **DDoS IP Protection** (public IP အလိုက်) ကို ဖွင့်ပါ။ DDoS Protection က L3/L4 volumetric flood တွေကို ကာတယ်၊ SQL injection လို L7 attack တွေအတွက် **WAF** နဲ့ တွဲသုံးပါ။"
          ) },
          { type: 'steps', items: [
            L("Create a resource group `rg-net-lab` in Japan East.", "Japan East にリソースグループ `rg-net-lab` を作成します。", "Japan East မှာ resource group `rg-net-lab` ဆောက်ပါ။"),
            L("Create VNet `vnet-app` with address space `10.0.0.0/16`, plus subnets `snet-web` (`10.0.1.0/24`) and `snet-db` (`10.0.2.0/24`). Note that each has 251 usable IPs.",
              "アドレス空間 `10.0.0.0/16` の VNet `vnet-app` と、サブネット `snet-web`（`10.0.1.0/24`）、`snet-db`（`10.0.2.0/24`）を作成します。それぞれ使用可能 IP は 251 個です。",
              "Address space `10.0.0.0/16` ပါတဲ့ VNet `vnet-app` နဲ့ subnet `snet-web` (`10.0.1.0/24`)၊ `snet-db` (`10.0.2.0/24`) ဆောက်ပါ။ တစ်ခုစီမှာ သုံးလို့ရတဲ့ IP 251 ခု ရှိတယ်ဆိုတာ မှတ်ထားပါ။"),
            L("Find your public IP (for example `curl ifconfig.me`) and create NSG `nsg-web`.", "自分のパブリック IP を調べ（例：`curl ifconfig.me`）、NSG `nsg-web` を作成します。", "ကိုယ့် public IP ကို ရှာပြီး (ဥပမာ `curl ifconfig.me`) NSG `nsg-web` ဆောက်ပါ။"),
            L("Add inbound rule `Allow-SSH-MyIP`: priority 100, TCP, source = your IP `/32`, destination port 22, Allow. In the portal you can choose **My IP address** as the source.",
              "受信規則 `Allow-SSH-MyIP` を追加します：優先度 100、TCP、送信元 = 自分の IP `/32`、宛先ポート 22、許可。ポータルでは送信元に **My IP address** を選べます。",
              "Inbound rule `Allow-SSH-MyIP` ထည့်ပါ: priority 100၊ TCP၊ source = ကိုယ့် IP `/32`၊ destination port 22၊ Allow။ Portal မှာ source ကို **My IP address** လို့ ရွေးလို့ရတယ်။"),
            L("Associate `nsg-web` with `snet-web`, then deploy a small Linux VM with a Standard public IP into `snet-web`.", "`nsg-web` を `snet-web` に関連付け、Standard パブリック IP を持つ小さな Linux VM を `snet-web` にデプロイします。", "`nsg-web` ကို `snet-web` နဲ့ ချိတ်ပြီး Standard public IP ပါတဲ့ Linux VM သေးသေးလေး တစ်လုံးကို `snet-web` ထဲ deploy လုပ်ပါ။"),
            L("SSH from your PC: it works. Try from another network (e.g. phone hotspot): it times out because `DenyAllInBound` (65500) catches it.", "自分の PC から SSH すると成功します。別のネットワーク（例：スマホのテザリング）から試すと、`DenyAllInBound`（65500）に一致してタイムアウトします。", "ကိုယ့် PC ကနေ SSH ဝင်ရင် ရတယ်။ တခြား network (ဥပမာ ဖုန်း hotspot) ကနေ စမ်းရင် `DenyAllInBound` (65500) ကြောင့် timeout ဖြစ်မယ်။"),
            L("Open Network Watcher **IP flow verify** for the VM, test inbound TCP 22 from a random IP, and confirm it reports `DenyAllInBound`. Delete the resource group when done.", "Network Watcher の **IP flow verify** で、ランダムな IP からの受信 TCP 22 をテストし、`DenyAllInBound` と表示されることを確認します。終わったらリソースグループを削除します。", "Network Watcher ရဲ့ **IP flow verify** မှာ random IP ကနေ inbound TCP 22 ကို စမ်းပြီး `DenyAllInBound` ပြတာကို အတည်ပြုပါ။ ပြီးရင် resource group ကို ဖျက်ပါ။"),
          ] },
          { type: 'code', lang: 'bash', code: `az network watcher test-ip-flow -g rg-net-lab --vm vm-web01 \\
  --direction Inbound --protocol TCP \\
  --local 10.0.1.4:22 --remote 198.51.100.50:50000

az network watcher show-next-hop -g rg-net-lab --vm vm-web01 \\
  --source-ip 10.0.1.4 --dest-ip 8.8.8.8`,
            caption: L("IP flow verify and next hop from the CLI.", "CLI で IP flow verify と Next hop を実行します。", "CLI ကနေ IP flow verify နဲ့ Next hop စစ်နည်း။") },
          { type: 'callout', tone: 'exam', text: L(
            "\"Which NSG rule blocks the traffic?\" = **IP flow verify**. \"Is traffic going to the firewall or straight to the internet?\" = **Next hop**. \"Test connectivity to a URL and see latency\" = **Connection troubleshoot**.",
            "「どの NSG 規則が通信をブロックしているか？」= **IP flow verify**。「通信はファイアウォールへ行くか、直接インターネットへ行くか？」= **Next hop**。「URL への接続をテストして遅延を確認」= **Connection troubleshoot**。",
            "\"ဘယ် NSG rule က traffic ကို ပိတ်နေလဲ?\" = **IP flow verify**။ \"Traffic က firewall ဆီ သွားလား၊ internet ကို တိုက်ရိုက် သွားလား?\" = **Next hop**။ \"URL ဆီ connectivity စမ်းပြီး latency ကြည့်\" = **Connection troubleshoot**။"
          ) },
        ],
      },
    ],
    summary: [
      L("A VNet is a regional, isolated private network; plan non-overlapping RFC 1918 address spaces before you build.",
        "VNet はリージョン単位の分離されたプライベートネットワークです。構築前に重複しない RFC 1918 のアドレス空間を計画します。",
        "VNet က region အလိုက် သီးသန့် private network ပါ။ မဆောက်ခင် မထပ်တဲ့ RFC 1918 address space ကို စီစဉ်ပါ။"),
      L("Usable IPs per subnet = 2^(32 - prefix) - 5; a /24 gives 251, a /29 is the smallest subnet with 3 usable IPs.",
        "サブネットの使用可能 IP = 2^(32 - プレフィックス) - 5。/24 は 251 個、最小の /29 は 3 個です。",
        "Subnet တစ်ခုမှာ သုံးလို့ရတဲ့ IP = 2^(32 - prefix) - 5။ /24 က 251 ခု၊ အသေးဆုံး /29 က 3 ခု။"),
      L("Special subnets need exact names: GatewaySubnet, AzureBastionSubnet, AzureFirewallSubnet.",
        "特殊なサブネットには正確な名前が必要です：GatewaySubnet、AzureBastionSubnet、AzureFirewallSubnet。",
        "အထူး subnet တွေမှာ နာမည်အတိအကျ လိုတယ်: GatewaySubnet၊ AzureBastionSubnet၊ AzureFirewallSubnet။"),
      L("NSG rules run from the lowest priority number and stop at the first match; inbound traffic must pass the subnet NSG and then the NIC NSG.",
        "NSG 規則は優先度の数字が小さい順に評価され、最初の一致で止まります。受信はサブネット NSG、次に NIC NSG を通過する必要があります。",
        "NSG rule တွေကို priority နံပါတ်ငယ်ဆုံးကနေ စစ်ပြီး ပထမဆုံးကိုက်တာမှာ ရပ်တယ်။ Inbound traffic က subnet NSG ပြီးမှ NIC NSG ကို ဖြတ်ရတယ်။"),
      L("UDRs on route tables override system routes, e.g. 0.0.0.0/0 to Azure Firewall for forced tunneling.",
        "ルートテーブルの UDR はシステムルートを上書きします（例：強制トンネリングで 0.0.0.0/0 を Azure Firewall へ）。",
        "Route table ထဲက UDR တွေက system route ကို override လုပ်တယ် (ဥပမာ forced tunneling အတွက် 0.0.0.0/0 ကို Azure Firewall ဆီ)။"),
      L("Peering is non-transitive; use gateway transit to share a hub gateway and a hub firewall for spoke-to-spoke traffic.",
        "ピアリングは非推移的です。ハブのゲートウェイ共有にはゲートウェイ転送を、スポーク間通信にはハブのファイアウォールを使います。",
        "Peering က non-transitive ပါ။ Hub gateway မျှသုံးဖို့ gateway transit ကို၊ spoke အချင်းချင်း traffic အတွက် hub firewall ကို သုံးပါ။"),
      L("VPN Gateway = encrypted tunnel over the internet (S2S, P2S); ExpressRoute = private circuit that bypasses the internet.",
        "VPN Gateway = インターネット上の暗号化トンネル（S2S、P2S）、ExpressRoute = インターネットを経由しない専用回線。",
        "VPN Gateway = internet ပေါ်က encrypted tunnel (S2S၊ P2S)၊ ExpressRoute = internet ကို မဖြတ်တဲ့ private circuit။"),
      L("Pick load balancers by layer and scope: Load Balancer (L4 regional), Application Gateway (L7 regional + WAF), Front Door (L7 global), Traffic Manager (DNS global).",
        "ロードバランサーはレイヤーと範囲で選びます：Load Balancer（L4 リージョナル）、Application Gateway（L7 リージョナル＋WAF）、Front Door（L7 グローバル）、Traffic Manager（DNS グローバル）。",
        "Load balancer ကို layer နဲ့ scope နဲ့ ရွေးပါ: Load Balancer (L4 regional)၊ Application Gateway (L7 regional + WAF)၊ Front Door (L7 global)၊ Traffic Manager (DNS global)။"),
    ],
  },
  questions: [
    {
      difficulty: 'EASY',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("You are deploying a site-to-site VPN gateway into an existing VNet. What must the dedicated subnet for the gateway be named?",
        "既存の VNet にサイト間 VPN ゲートウェイをデプロイします。ゲートウェイ専用のサブネットにはどの名前を付ける必要がありますか？",
        "ရှိပြီးသား VNet ထဲကို site-to-site VPN gateway deploy လုပ်မယ်။ Gateway အတွက် သီးသန့် subnet ကို ဘယ်လို နာမည်ပေးရမလဲ?"),
      options: ['AzureBastionSubnet', 'GatewaySubnet', 'VpnGatewaySubnet', 'AzureFirewallSubnet'],
      correct: [1],
      explanation: L("VPN and ExpressRoute gateways must be deployed into a subnet named exactly GatewaySubnet (/27 or larger is recommended). AzureBastionSubnet and AzureFirewallSubnet are reserved names for Bastion and Azure Firewall, and VpnGatewaySubnet is not recognized by Azure.",
        "VPN ゲートウェイと ExpressRoute ゲートウェイは、正確に GatewaySubnet という名前のサブネットにデプロイする必要があります（/27 以上を推奨）。AzureBastionSubnet と AzureFirewallSubnet は Bastion と Azure Firewall 用の名前で、VpnGatewaySubnet は Azure に認識されません。",
        "VPN gateway နဲ့ ExpressRoute gateway တွေကို GatewaySubnet လို့ နာမည်အတိအကျပေးထားတဲ့ subnet ထဲမှာပဲ deploy လုပ်ရတယ် (/27 နဲ့ အထက် အကြံပြု)။ AzureBastionSubnet နဲ့ AzureFirewallSubnet က Bastion နဲ့ Azure Firewall အတွက် နာမည်တွေဖြစ်ပြီး VpnGatewaySubnet ကို Azure က မသိဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("How many IP addresses does Azure reserve in every subnet?",
        "Azure はすべてのサブネットでいくつの IP アドレスを予約しますか？",
        "Azure က subnet တိုင်းမှာ IP address ဘယ်နှခု reserve လုပ်ထားလဲ?"),
      options: ['2', '3', '4', '5'],
      correct: [3],
      explanation: L("Azure reserves 5 addresses: the network address, the default gateway (.1), two addresses for Azure DNS mapping (.2 and .3) and the broadcast address. The answer 2 is the traditional on-premises rule (network + broadcast) and is a common trap.",
        "Azure は 5 つのアドレスを予約します：ネットワークアドレス、既定ゲートウェイ（.1）、Azure DNS のマッピング用の 2 つ（.2 と .3）、ブロードキャストアドレスです。2 は従来のオンプレミスのルール（ネットワーク＋ブロードキャスト）で、よくある引っかけです。",
        "Azure က address ၅ ခု reserve လုပ်တယ်: network address၊ default gateway (.1)၊ Azure DNS mapping အတွက် ၂ ခု (.2 နဲ့ .3)၊ broadcast address။ 2 ဆိုတာ ရိုးရာ on-premises စည်းမျဉ်း (network + broadcast) ဖြစ်ပြီး မကြာခဏ မှားတတ်တဲ့ ထောင်ချောက်ပါ။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("Administrators must connect to Windows VMs over RDP from the Azure portal. The VMs must not have public IP addresses and port 3389 must not be exposed to the internet. Which service should you use?",
        "管理者は Azure ポータルから Windows VM に RDP で接続する必要があります。VM にはパブリック IP を付けず、ポート 3389 をインターネットに公開してはいけません。どのサービスを使うべきですか？",
        "Administrator တွေက Azure portal ကနေ Windows VM တွေကို RDP နဲ့ ဝင်ရမယ်။ VM တွေမှာ public IP မရှိရဘူး၊ port 3389 ကို internet ဆီ မဖွင့်ရဘူး။ ဘယ် service ကို သုံးသင့်လဲ?"),
      options: ['Azure Bastion', 'VPN Gateway point-to-site', 'NAT Gateway', 'Azure Load Balancer inbound NAT rule'],
      correct: [0],
      explanation: L("Azure Bastion provides RDP/SSH in the browser over TLS 443, so VMs need no public IP. A P2S VPN also avoids public IPs but requires VPN client setup and is not portal-based. NAT Gateway is outbound only, and an inbound NAT rule would expose RDP publicly.",
        "Azure Bastion はブラウザー上で TLS 443 経由の RDP/SSH を提供するため、VM にパブリック IP は不要です。P2S VPN もパブリック IP を避けられますが、VPN クライアントの設定が必要でポータルからの接続ではありません。NAT Gateway は送信専用で、受信 NAT 規則では RDP がパブリックに公開されます。",
        "Azure Bastion က browser ထဲကနေ TLS 443 နဲ့ RDP/SSH ပေးလို့ VM မှာ public IP မလိုဘူး။ P2S VPN ကလည်း public IP မလိုပေမဲ့ VPN client setup လုပ်ရပြီး portal ကနေ ဝင်တာ မဟုတ်ဘူး။ NAT Gateway က outbound သီးသန့်ဖြစ်ပြီး inbound NAT rule ဆိုရင် RDP ကို public ဖွင့်လိုက်သလို ဖြစ်တယ်။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("A company needs a connection between its Tokyo datacenter and Azure that does not traverse the public internet and offers predictable latency. What should it use?",
        "ある企業は、東京のデータセンターと Azure の間に、パブリックインターネットを経由せず遅延が安定した接続を必要としています。何を使うべきですか？",
        "Company တစ်ခုက Tokyo datacenter နဲ့ Azure ကြားမှာ public internet ကို မဖြတ်ဘဲ latency တည်ငြိမ်တဲ့ connection လိုတယ်။ ဘာကို သုံးသင့်လဲ?"),
      options: ['Site-to-site VPN', 'Point-to-site VPN', 'ExpressRoute', 'Global VNet peering'],
      correct: [2],
      explanation: L("ExpressRoute is a private circuit through a connectivity provider and does not use the public internet. Site-to-site and point-to-site VPNs are encrypted tunnels over the internet, so latency is less predictable. VNet peering connects Azure VNets, not on-premises sites.",
        "ExpressRoute は接続プロバイダー経由の専用回線で、パブリックインターネットを使いません。サイト間 VPN とポイント対サイト VPN はインターネット上の暗号化トンネルなので、遅延は安定しにくいです。VNet ピアリングは Azure の VNet 同士をつなぐもので、オンプレミス拠点には使えません。",
        "ExpressRoute က connectivity provider ကနေတဆင့် private circuit ဖြစ်ပြီး public internet ကို မသုံးဘူး။ Site-to-site နဲ့ point-to-site VPN တွေက internet ပေါ်က encrypted tunnel ဖြစ်လို့ latency မတည်ငြိမ်ဘူး။ VNet peering က Azure VNet တွေကို ချိတ်တာဖြစ်ပြီး on-premises site အတွက် မဟုတ်ဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("An NSG contains several inbound rules. In what order does Azure evaluate them?",
        "NSG に複数の受信規則があります。Azure はどの順序で評価しますか？",
        "NSG ထဲမှာ inbound rule အများကြီး ရှိတယ်။ Azure က ဘယ်အစီအစဉ်နဲ့ စစ်လဲ?"),
      options: ['From the lowest priority number to the highest, stopping at the first match', 'From the highest priority number to the lowest, stopping at the first match', 'All deny rules first, then all allow rules', 'In the order the rules were created'],
      correct: [0],
      explanation: L("Rules are processed by priority number, lowest first (100 before 4096), and processing stops at the first match. There is no deny-first logic: an Allow at priority 100 wins over a Deny at priority 200. Creation order does not matter.",
        "規則は優先度の数字が小さい順（4096 より 100 が先）に処理され、最初に一致した時点で処理が止まります。拒否優先のロジックはなく、優先度 100 の許可は優先度 200 の拒否に勝ちます。作成順は関係ありません。",
        "Rule တွေကို priority နံပါတ်ငယ်တာကနေ (4096 မတိုင်ခင် 100) စစ်ပြီး ပထမဆုံး ကိုက်တာမှာ ရပ်တယ်။ Deny ကို အရင်စစ်တဲ့ logic မရှိဘူး၊ priority 100 က Allow က priority 200 က Deny ကို အနိုင်ရတယ်။ ဆောက်ခဲ့တဲ့ အစီအစဉ်က အရေးမကြီးဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("A global e-commerce website needs a single HTTPS entry point at the Microsoft edge, with caching, a Web Application Firewall and fast failover between regions. Which service fits best?",
        "グローバルな EC サイトで、Microsoft エッジに単一の HTTPS 入口を置き、キャッシュ、Web Application Firewall、リージョン間の高速フェイルオーバーを実現したいです。最適なサービスはどれですか？",
        "Global e-commerce website တစ်ခုမှာ Microsoft edge ပေါ်မှာ HTTPS entry point တစ်ခုတည်း၊ caching၊ Web Application Firewall နဲ့ region ကြား failover မြန်မြန် လိုတယ်။ ဘယ် service က အသင့်တော်ဆုံးလဲ?"),
      options: ['Azure Load Balancer', 'Azure Application Gateway', 'Azure Traffic Manager', 'Azure Front Door'],
      correct: [3],
      explanation: L("Azure Front Door is a global Layer 7 service at the Microsoft edge with caching, WAF and instant regional failover. Application Gateway also offers WAF but is regional. Traffic Manager is global but only DNS-based, with no caching or WAF.",
        "Azure Front Door は Microsoft エッジ上のグローバルなレイヤー 7 サービスで、キャッシュ、WAF、即時のリージョン切り替えを備えます。Application Gateway も WAF を提供しますがリージョナルです。Traffic Manager はグローバルですが DNS ベースのみで、キャッシュや WAF はありません。",
        "Azure Front Door က Microsoft edge ပေါ်က global Layer 7 service ဖြစ်ပြီး caching၊ WAF၊ region failover ချက်ချင်း ပါတယ်။ Application Gateway မှာလည်း WAF ပါပေမဲ့ regional ပါ။ Traffic Manager က global ဖြစ်ပေမဲ့ DNS-based သက်သက်ဖြစ်ပြီး caching နဲ့ WAF မပါဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("Which address ranges are RFC 1918 private ranges that are commonly used for VNet address spaces? (Select TWO)",
        "VNet のアドレス空間によく使われる RFC 1918 のプライベート範囲はどれですか？（2 つ選択）",
        "VNet address space အတွက် အသုံးများတဲ့ RFC 1918 private range တွေက ဘယ်ဟာတွေလဲ? (Select TWO)"),
      options: ['10.0.0.0/8', '172.16.0.0/12', '100.64.0.0/10', '169.254.0.0/16'],
      correct: [0, 1],
      explanation: L("RFC 1918 defines 10.0.0.0/8, 172.16.0.0/12 and 192.168.0.0/16. 100.64.0.0/10 is the shared address space for carrier-grade NAT, and 169.254.0.0/16 is link-local (Azure uses 169.254.169.254 for instance metadata), so neither is a standard choice.",
        "RFC 1918 で定義されているのは 10.0.0.0/8、172.16.0.0/12、192.168.0.0/16 です。100.64.0.0/10 はキャリアグレード NAT 用の共有アドレス空間、169.254.0.0/16 はリンクローカル（Azure はインスタンスメタデータに 169.254.169.254 を使用）なので、どちらも標準的な選択ではありません。",
        "RFC 1918 က 10.0.0.0/8၊ 172.16.0.0/12၊ 192.168.0.0/16 ကို သတ်မှတ်ထားတယ်။ 100.64.0.0/10 က carrier-grade NAT အတွက် shared address space၊ 169.254.0.0/16 က link-local ဖြစ်တယ် (Azure က instance metadata အတွက် 169.254.169.254 ကို သုံးတယ်)၊ ဒါကြောင့် ဘယ်ဟာမှ ပုံမှန် ရွေးချယ်စရာ မဟုတ်ဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-104'],
      prompt: L("You want NSG rules such as web tier to database tier on port 1433 without maintaining lists of VM IP addresses. What should you use as the source and destination?",
        "VM の IP アドレス一覧を管理せずに、Web 層からデータベース層へのポート 1433 のような NSG 規則を書きたいです。送信元と宛先に何を使うべきですか？",
        "VM IP address စာရင်းတွေ မထိန်းဘဲ web tier ကနေ database tier ကို port 1433 လို NSG rule ရေးချင်တယ်။ Source နဲ့ destination အဖြစ် ဘာကို သုံးသင့်လဲ?"),
      options: ['Service tags', 'Application security groups', 'Availability sets', 'Route tables'],
      correct: [1],
      explanation: L("Application security groups group NICs by role (for example asg-web and asg-db) and can be used as source and destination in NSG rules. Service tags represent Microsoft-managed IP ranges such as Storage or Internet, not your own VMs.",
        "アプリケーションセキュリティグループは NIC を役割ごと（例：asg-web、asg-db）にまとめ、NSG 規則の送信元・宛先に使えます。サービスタグは Storage や Internet など Microsoft が管理する IP 範囲を表すもので、自分の VM を表すものではありません。",
        "Application security group တွေက NIC တွေကို role အလိုက် (ဥပမာ asg-web၊ asg-db) အုပ်စုဖွဲ့ပြီး NSG rule မှာ source/destination အဖြစ် သုံးလို့ရတယ်။ Service tag ကတော့ Storage၊ Internet လို Microsoft စီမံတဲ့ IP range တွေကို ကိုယ်စားပြုတာပါ၊ ကိုယ့် VM တွေ မဟုတ်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("You create a subnet with the prefix 10.20.5.0/27. What is the maximum number of VM network interfaces that can receive an IP address from this subnet?",
        "プレフィックス 10.20.5.0/27 のサブネットを作成します。このサブネットから IP アドレスを受け取れる VM ネットワークインターフェイスは最大いくつですか？",
        "Prefix 10.20.5.0/27 ပါတဲ့ subnet တစ်ခု ဆောက်တယ်။ ဒီ subnet ကနေ IP address ရနိုင်တဲ့ VM network interface အများဆုံး ဘယ်နှခုလဲ?"),
      options: ['32', '30', '27', '29'],
      correct: [2],
      explanation: L("A /27 has 2^(32-27) = 32 addresses. Azure reserves 5, leaving 27 usable. 30 is the on-premises answer (minus network and broadcast only), and 32 ignores reservations completely.",
        "/27 には 2^(32-27) = 32 個のアドレスがあります。Azure が 5 個予約するので使用可能なのは 27 個です。30 はオンプレミスの答え（ネットワークとブロードキャストのみ除外）、32 は予約を完全に無視しています。",
        "/27 မှာ 2^(32-27) = 32 address ရှိတယ်။ Azure က ၅ ခု reserve လုပ်လို့ 27 ခု သုံးလို့ရတယ်။ 30 က on-premises အဖြေ (network နဲ့ broadcast ပဲ နှုတ်တာ)၊ 32 က reserve ကို လုံးဝ မတွက်ထားဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("A VNet uses the address space 10.0.0.0/16. You divide it entirely into /24 subnets. How many subnets do you get, and how many usable IP addresses does each one have?",
        "VNet のアドレス空間は 10.0.0.0/16 です。これをすべて /24 のサブネットに分割します。サブネットはいくつでき、それぞれの使用可能な IP アドレスはいくつですか？",
        "VNet ရဲ့ address space က 10.0.0.0/16 ပါ။ အားလုံးကို /24 subnet တွေ ခွဲလိုက်တယ်။ Subnet ဘယ်နှခု ရမလဲ၊ တစ်ခုစီမှာ သုံးလို့ရတဲ့ IP ဘယ်နှခု ရှိမလဲ?"),
      options: ['256 subnets with 254 usable IPs each', '256 subnets with 251 usable IPs each', '16 subnets with 4,091 usable IPs each', '65,536 subnets with 251 usable IPs each'],
      correct: [1],
      explanation: L("Going from /16 to /24 borrows 8 bits, so there are 2^8 = 256 subnets. Each /24 has 256 addresses minus the 5 Azure reserves = 251. 254 is the on-premises calculation, and 65,536 is the number of addresses in the VNet, not the number of subnets.",
        "/16 から /24 にすると 8 ビット借りるので、2^8 = 256 個のサブネットになります。各 /24 は 256 アドレスから Azure の予約 5 個を引いて 251 個です。254 はオンプレミスの計算で、65,536 は VNet 全体のアドレス数でありサブネット数ではありません。",
        "/16 ကနေ /24 ကို ပြောင်းရင် bit ၈ ခု ချေးယူလို့ subnet 2^8 = 256 ခု ရတယ်။ /24 တစ်ခုစီမှာ address 256 ထဲက Azure reserve ၅ ခု နှုတ်ရင် 251 ခု။ 254 က on-premises တွက်နည်းဖြစ်ပြီး 65,536 က VNet ထဲက address အရေအတွက်ပါ၊ subnet အရေအတွက် မဟုတ်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("An NSG on a subnet has these custom inbound rules: priority 100 Allow TCP 22 from 203.0.113.0/24; priority 150 Deny TCP 22 from Any; priority 200 Allow TCP 22 from Any. A user at 198.51.100.4 tries to SSH to a VM in the subnet. What happens?",
        "サブネットの NSG に次のカスタム受信規則があります：優先度 100 は 203.0.113.0/24 からの TCP 22 を許可、優先度 150 は Any からの TCP 22 を拒否、優先度 200 は Any からの TCP 22 を許可。198.51.100.4 のユーザーがサブネット内の VM に SSH しようとすると、どうなりますか？",
        "Subnet ပေါ်က NSG မှာ ဒီ custom inbound rule တွေ ရှိတယ်: priority 100 က 203.0.113.0/24 က TCP 22 ကို Allow၊ priority 150 က Any က TCP 22 ကို Deny၊ priority 200 က Any က TCP 22 ကို Allow။ 198.51.100.4 က user တစ်ယောက် subnet ထဲက VM ကို SSH ဝင်ဖို့ ကြိုးစားတယ်။ ဘာဖြစ်မလဲ?"),
      options: ['It is allowed by rule 200', 'It is denied by rule 150', 'It is allowed by rule 100', 'It is denied by DenyAllInBound (65500)'],
      correct: [1],
      explanation: L("Rule 100 does not match because 198.51.100.4 is outside 203.0.113.0/24. The next rule, 150, matches (Any source, TCP 22) and denies, so evaluation stops there. Rule 200 is never reached even though it would allow the traffic.",
        "198.51.100.4 は 203.0.113.0/24 の範囲外なので規則 100 には一致しません。次の規則 150 が一致（送信元 Any、TCP 22）して拒否し、評価はそこで終わります。規則 200 は許可する内容ですが、評価されることはありません。",
        "198.51.100.4 က 203.0.113.0/24 အပြင်ဘက်မှာ ရှိလို့ rule 100 နဲ့ မကိုက်ဘူး။ နောက် rule 150 က ကိုက်တယ် (source Any၊ TCP 22) ပြီး Deny လုပ်လို့ အဲဒီမှာ ရပ်သွားတယ်။ Rule 200 က ခွင့်ပြုမယ့် rule ဖြစ်ပေမဲ့ ဘယ်တော့မှ မရောက်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("In a hub-spoke topology, Spoke1 and Spoke2 are each peered only with the hub. VMs in Spoke1 cannot reach VMs in Spoke2. Which actions enable this communication? (Select TWO)",
        "ハブ＆スポーク構成で、Spoke1 と Spoke2 はそれぞれハブとだけピアリングしています。Spoke1 の VM から Spoke2 の VM に到達できません。この通信を可能にする操作はどれですか？（2 つ選択）",
        "Hub-spoke topology မှာ Spoke1 နဲ့ Spoke2 တို့ဟာ hub နဲ့ပဲ peer လုပ်ထားတယ်။ Spoke1 က VM တွေ Spoke2 က VM တွေကို မရောက်ဘူး။ ဒီ communication ရအောင် ဘာတွေ လုပ်ရမလဲ? (Select TWO)"),
      options: ['Create a direct peering between Spoke1 and Spoke2', 'Deploy Azure Firewall in the hub and add UDRs in both spokes that point to it', 'Enable Allow gateway transit on the Spoke1 peering', 'Enable a service endpoint on both spoke subnets', 'Enable auto-registration on a private DNS zone'],
      correct: [0, 1],
      explanation: L("Peering is non-transitive, so traffic must either use a direct spoke-to-spoke peering or be routed through an appliance in the hub (Azure Firewall or NVA) with UDRs and forwarded traffic allowed. Gateway transit only shares a VPN/ExpressRoute gateway, and service endpoints and DNS do not create routes between VNets.",
        "ピアリングは非推移的なので、スポーク同士を直接ピアリングするか、UDR と転送トラフィックの許可を使ってハブのアプライアンス（Azure Firewall や NVA）経由でルーティングする必要があります。ゲートウェイ転送は VPN／ExpressRoute ゲートウェイを共有するだけで、サービスエンドポイントや DNS は VNet 間の経路を作りません。",
        "Peering က non-transitive ဖြစ်လို့ spoke အချင်းချင်း တိုက်ရိုက် peer လုပ်ရမယ်၊ ဒါမှမဟုတ် UDR နဲ့ forwarded traffic ခွင့်ပြုပြီး hub ထဲက appliance (Azure Firewall ဒါမှမဟုတ် NVA) ကို ဖြတ်ပြီး route လုပ်ရမယ်။ Gateway transit က VPN/ExpressRoute gateway ကို မျှသုံးတာပဲ၊ service endpoint နဲ့ DNS က VNet ကြား route မဆောက်ပေးဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("Servers in your on-premises datacenter must access an Azure Storage account over ExpressRoute private peering using a private IP address. Public network access on the storage account will be disabled. What should you configure?",
        "オンプレミスのデータセンターのサーバーが、ExpressRoute プライベートピアリング経由でプライベート IP アドレスを使って Azure Storage アカウントにアクセスする必要があります。ストレージアカウントのパブリックネットワークアクセスは無効にします。何を構成すべきですか？",
        "On-premises datacenter က server တွေဟာ ExpressRoute private peering ကနေ private IP address နဲ့ Azure Storage account ကို ဝင်ရမယ်။ Storage account ရဲ့ public network access ကို ပိတ်ထားမယ်။ ဘာကို configure လုပ်သင့်လဲ?"),
      options: ['A service endpoint for Microsoft.Storage', 'A NAT Gateway on the subnet', 'A private endpoint for the storage account', 'A storage firewall rule for the on-premises public IP'],
      correct: [2],
      explanation: L("A private endpoint gives the storage account a private IP in your VNet, reachable from on-premises over ExpressRoute or VPN, and works with public access disabled. A service endpoint only works for traffic from the enabled Azure subnet and still targets the public endpoint, so it cannot serve on-premises clients privately.",
        "プライベートエンドポイントは VNet 内のプライベート IP をストレージアカウントに与え、ExpressRoute や VPN 経由でオンプレミスから到達でき、パブリックアクセスを無効にしても機能します。サービスエンドポイントは有効化した Azure サブネットからの通信にのみ有効で、宛先はパブリックエンドポイントのままなので、オンプレミスのクライアントにプライベートには使えません。",
        "Private endpoint က storage account ကို ကိုယ့် VNet ထဲက private IP ပေးလို့ ExpressRoute ဒါမှမဟုတ် VPN ကနေ on-premises က ရောက်နိုင်ပြီး public access ပိတ်ထားလည်း အလုပ်လုပ်တယ်။ Service endpoint က ဖွင့်ထားတဲ့ Azure subnet က traffic အတွက်ပဲ ရပြီး public endpoint ကိုပဲ သွားတုန်းမို့ on-premises client တွေအတွက် private မရဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("A web application runs on VMs with only private IPs in one Azure region. You need a load balancer deployed inside the VNet that sends /api/* and /images/* to different backend pools, terminates TLS and protects against SQL injection. What should you deploy?",
        "Web アプリケーションが 1 つの Azure リージョンで、プライベート IP のみの VM 上で動いています。VNet 内にデプロイし、/api/* と /images/* を別のバックエンドプールへ送り、TLS を終端し、SQL インジェクションから保護するロードバランサーが必要です。何をデプロイすべきですか？",
        "Web application တစ်ခုဟာ Azure region တစ်ခုထဲမှာ private IP သာပါတဲ့ VM တွေပေါ်မှာ run နေတယ်။ VNet ထဲမှာ deploy လုပ်ပြီး /api/* နဲ့ /images/* ကို backend pool မတူအောင် ပို့ပေး၊ TLS terminate လုပ်ပေး၊ SQL injection ကို ကာကွယ်ပေးမယ့် load balancer လိုတယ်။ ဘာကို deploy လုပ်သင့်လဲ?"),
      options: ['Azure Load Balancer Standard', 'Azure Traffic Manager', 'Azure Front Door', 'Azure Application Gateway with WAF'],
      correct: [3],
      explanation: L("Application Gateway is a regional Layer 7 load balancer deployed into a subnet of your VNet, with path-based routing, TLS termination and WAF. Azure Load Balancer is Layer 4 and cannot read URL paths. Front Door is a global edge service, not deployed inside the VNet.",
        "Application Gateway は VNet のサブネットにデプロイされるリージョナルなレイヤー 7 ロードバランサーで、パスベースのルーティング、TLS 終端、WAF を備えます。Azure Load Balancer はレイヤー 4 で URL パスを読めません。Front Door はグローバルなエッジサービスで、VNet 内にはデプロイされません。",
        "Application Gateway က ကိုယ့် VNet ရဲ့ subnet ထဲမှာ deploy လုပ်တဲ့ regional Layer 7 load balancer ဖြစ်ပြီး path-based routing၊ TLS termination၊ WAF ပါတယ်။ Azure Load Balancer က Layer 4 ဖြစ်လို့ URL path ကို မဖတ်နိုင်ဘူး။ Front Door က global edge service ဖြစ်ပြီး VNet ထဲမှာ deploy မလုပ်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("VMs in a subnet have no public IPs. A partner API only accepts calls from a fixed, allow-listed public IP address. No inbound connections from the internet may be possible. What should you add to the subnet?",
        "サブネット内の VM にはパブリック IP がありません。取引先の API は、許可リストに登録した固定パブリック IP からの呼び出しのみ受け付けます。インターネットからの受信接続は一切できないようにする必要があります。サブネットに何を追加すべきですか？",
        "Subnet ထဲက VM တွေမှာ public IP မရှိဘူး။ Partner API က allow-list ထဲထည့်ထားတဲ့ fixed public IP ကလာတဲ့ call တွေကိုပဲ လက်ခံတယ်။ Internet ကနေ inbound connection လုံးဝ မဖြစ်စေရဘူး။ Subnet မှာ ဘာထည့်သင့်လဲ?"),
      options: ['A NAT Gateway with a static public IP', 'Azure Bastion', 'A private endpoint', 'An internal load balancer'],
      correct: [0],
      explanation: L("NAT Gateway provides outbound-only SNAT for the whole subnet through one or more static Standard public IPs, which the partner can allow-list, and it never accepts unsolicited inbound connections. Bastion is for admin RDP/SSH, and an internal load balancer has no public IP at all.",
        "NAT Gateway は 1 つ以上の静的 Standard パブリック IP を通じてサブネット全体に送信専用の SNAT を提供し、取引先はその IP を許可リストに登録できます。要求されていない受信接続は受け付けません。Bastion は管理者の RDP/SSH 用で、内部ロードバランサーにはパブリック IP がありません。",
        "NAT Gateway က static Standard public IP တစ်ခု ဒါမှမဟုတ် အများကနေ subnet တစ်ခုလုံးအတွက် outbound-only SNAT ပေးတယ်၊ partner က အဲဒီ IP ကို allow-list လုပ်နိုင်တယ်၊ မတောင်းဆိုတဲ့ inbound connection ကို လက်မခံဘူး။ Bastion က admin RDP/SSH အတွက်ဖြစ်ပြီး internal load balancer မှာ public IP လုံးဝ မရှိဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("A hub VNet contains a VPN gateway to the Tokyo office. Spoke VNets must reach the office through this gateway without deploying their own gateways. Which peering settings must you enable? (Select TWO)",
        "ハブ VNet に東京オフィスへの VPN ゲートウェイがあります。スポーク VNet は独自のゲートウェイを持たずに、このゲートウェイ経由でオフィスに到達する必要があります。どのピアリング設定を有効にする必要がありますか？（2 つ選択）",
        "Hub VNet ထဲမှာ Tokyo ရုံးကို ချိတ်ထားတဲ့ VPN gateway ရှိတယ်။ Spoke VNet တွေက ကိုယ်ပိုင် gateway မဆောက်ဘဲ ဒီ gateway ကနေ ရုံးကို ရောက်ရမယ်။ ဘယ် peering setting တွေ ဖွင့်ရမလဲ? (Select TWO)"),
      options: ['Allow gateway transit on the hub-to-spoke peering', 'Use remote gateways on the spoke-to-hub peering', 'Use remote gateways on the hub-to-spoke peering', 'Deploy a local network gateway in each spoke', 'Enable IP forwarding on the VPN gateway'],
      correct: [0, 1],
      explanation: L("The hub (which owns the gateway) allows gateway transit, and each spoke uses remote gateways. Setting Use remote gateways on the hub side is backwards, and a local network gateway represents the on-premises site, which already exists in the hub.",
        "ゲートウェイを持つハブ側で Allow gateway transit を、各スポーク側で Use remote gateways を有効にします。ハブ側で Use remote gateways を設定するのは逆で、ローカルネットワークゲートウェイはオンプレミス拠点を表すもので、既にハブに存在します。",
        "Gateway ပိုင်တဲ့ hub ဘက်က Allow gateway transit ဖွင့်ပြီး spoke တစ်ခုစီက Use remote gateways ကို ဖွင့်ရတယ်။ Hub ဘက်မှာ Use remote gateways ဖွင့်တာ ပြောင်းပြန်ဖြစ်နေတယ်၊ local network gateway က on-premises site ကို ကိုယ်စားပြုတာဖြစ်ပြီး hub ထဲမှာ ရှိပြီးသားပါ။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("Users report they cannot RDP to VM1. You need to quickly identify whether an NSG denies inbound TCP 3389 from a specific client IP, and which rule does it. Which Network Watcher tool should you use?",
        "ユーザーから VM1 に RDP できないと報告がありました。特定のクライアント IP からの受信 TCP 3389 を NSG が拒否しているか、どの規則が原因かを素早く特定する必要があります。どの Network Watcher ツールを使うべきですか？",
        "User တွေက VM1 ကို RDP မဝင်နိုင်ဘူးလို့ ပြောတယ်။ Client IP တစ်ခုကလာတဲ့ inbound TCP 3389 ကို NSG က ပိတ်နေလား၊ ဘယ် rule က ပိတ်လဲ ဆိုတာ မြန်မြန် သိဖို့ လိုတယ်။ ဘယ် Network Watcher tool ကို သုံးသင့်လဲ?"),
      options: ['Next hop', 'Connection monitor', 'IP flow verify', 'Packet capture'],
      correct: [2],
      explanation: L("IP flow verify tests a specific 5-tuple against the effective NSG rules and returns Allow or Deny together with the rule name. Next hop shows routing decisions, not NSG decisions, and packet capture records traffic but does not tell you which rule matched.",
        "IP flow verify は特定の 5 タプルを有効な NSG 規則に照らしてテストし、許可／拒否と規則名を返します。Next hop はルーティングの判断を示すもので NSG の判断ではなく、パケットキャプチャは通信を記録しますが、どの規則に一致したかは教えてくれません。",
        "IP flow verify က 5-tuple တစ်ခုကို effective NSG rule တွေနဲ့ စမ်းပြီး Allow/Deny နဲ့ rule နာမည်ကို ပြန်ပေးတယ်။ Next hop က routing ဆုံးဖြတ်ချက်ကို ပြတာပါ၊ NSG ဆုံးဖြတ်ချက် မဟုတ်ဘူး။ Packet capture က traffic ကို မှတ်တမ်းတင်ပေမဲ့ ဘယ် rule နဲ့ ကိုက်လဲ မပြောဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("VM1 is in subnet snet-web. The subnet NSG has an inbound rule at priority 200 that allows TCP 443 from the Internet service tag. VM1's NIC also has an NSG with only the default rules. Internet users cannot reach HTTPS on VM1. What is the cause?",
        "VM1 はサブネット snet-web にあります。サブネットの NSG には、Internet サービスタグからの TCP 443 を許可する優先度 200 の受信規則があります。VM1 の NIC にも既定の規則のみの NSG があります。インターネットのユーザーは VM1 の HTTPS に到達できません。原因は何ですか？",
        "VM1 က subnet snet-web ထဲမှာ ရှိတယ်။ Subnet NSG မှာ Internet service tag ကလာတဲ့ TCP 443 ကို ခွင့်ပြုတဲ့ priority 200 inbound rule ရှိတယ်။ VM1 ရဲ့ NIC မှာလည်း default rule တွေပဲပါတဲ့ NSG တစ်ခု ရှိတယ်။ Internet user တွေ VM1 ရဲ့ HTTPS ကို မရောက်ဘူး။ အကြောင်းရင်းက ဘာလဲ?"),
      options: ['The subnet rule must use priority 100 to override the defaults', 'The NIC NSG default DenyAllInBound rule blocks the traffic, because inbound traffic must be allowed by both NSGs', 'NSGs are stateless, so an outbound rule for the reply traffic is missing', 'The Internet service tag does not include client IP addresses'],
      correct: [1],
      explanation: L("Inbound traffic is evaluated by the subnet NSG and then by the NIC NSG, and both must allow it. The NIC NSG has only default rules, so DenyAllInBound (65500) drops HTTPS from the internet. Priority 200 already beats the 65000-range defaults, and NSGs are stateful, so no outbound reply rule is needed. Fix it by adding an allow rule to the NIC NSG or removing that NSG.",
        "受信トラフィックはサブネット NSG、次に NIC NSG で評価され、両方で許可される必要があります。NIC NSG は既定の規則のみなので、DenyAllInBound（65500）がインターネットからの HTTPS を破棄します。優先度 200 は既に 65000 番台の既定規則より優先され、NSG はステートフルなので応答用の送信規則も不要です。NIC NSG に許可規則を追加するか、その NSG を外して修正します。",
        "Inbound traffic ကို subnet NSG ပြီးမှ NIC NSG က စစ်တယ်၊ နှစ်ခုလုံးက ခွင့်ပြုရမယ်။ NIC NSG မှာ default rule တွေပဲ ရှိလို့ DenyAllInBound (65500) က internet ကလာတဲ့ HTTPS ကို ပစ်ချတယ်။ Priority 200 က 65000 ဝန်းကျင် default rule တွေထက် ဦးစားပေးပြီးသား၊ NSG က stateful ဖြစ်လို့ reply အတွက် outbound rule မလိုဘူး။ NIC NSG မှာ allow rule ထည့်ပါ ဒါမှမဟုတ် အဲဒီ NSG ကို ဖြုတ်ပါ။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("A route table on snet-app sends 0.0.0.0/0 to Azure Firewall (next hop VirtualAppliance). A service endpoint for Microsoft.Storage is also enabled on snet-app. Next hop shows VirtualAppliance for 8.8.8.8, but VirtualNetworkServiceEndpoint for a storage account IP in the same region. Why?",
        "snet-app のルートテーブルは 0.0.0.0/0 を Azure Firewall（ネクストホップ VirtualAppliance）に送ります。snet-app では Microsoft.Storage のサービスエンドポイントも有効です。Next hop は 8.8.8.8 に対して VirtualAppliance を、同じリージョンのストレージアカウントの IP に対しては VirtualNetworkServiceEndpoint を表示します。なぜですか？",
        "snet-app ပေါ်က route table က 0.0.0.0/0 ကို Azure Firewall (next hop VirtualAppliance) ဆီ ပို့တယ်။ snet-app မှာ Microsoft.Storage service endpoint ကိုလည်း ဖွင့်ထားတယ်။ Next hop က 8.8.8.8 အတွက် VirtualAppliance ပြပေမဲ့ region တူ storage account IP အတွက် VirtualNetworkServiceEndpoint ပြတယ်။ ဘာကြောင့်လဲ?"),
      options: ['The service endpoint adds system routes for the more specific storage prefixes, and longest prefix match selects them over 0.0.0.0/0', 'User-defined routes never apply to traffic destined for Azure public IP addresses', 'Azure Firewall automatically returns storage traffic to the service endpoint', 'BGP routes from the VPN gateway always override user-defined routes'],
      correct: [0],
      explanation: L("Enabling a service endpoint adds system routes for the service prefixes with next hop VirtualNetworkServiceEndpoint. These prefixes are more specific than 0.0.0.0/0, so longest prefix match picks them first. UDRs do apply to Azure public IPs in general, and with equal prefixes a UDR would beat BGP, not the other way round.",
        "サービスエンドポイントを有効にすると、ネクストホップ VirtualNetworkServiceEndpoint を持つサービスプレフィックスのシステムルートが追加されます。これらは 0.0.0.0/0 より具体的なので、最長プレフィックス一致で優先されます。UDR は一般的に Azure のパブリック IP にも適用され、同じプレフィックスなら BGP より UDR が優先されます（逆ではありません）。",
        "Service endpoint ဖွင့်လိုက်ရင် next hop VirtualNetworkServiceEndpoint ပါတဲ့ service prefix system route တွေ ထပ်ဝင်လာတယ်။ အဲဒီ prefix တွေက 0.0.0.0/0 ထက် ပိုတိကျလို့ longest prefix match က သူတို့ကို အရင်ရွေးတယ်။ UDR တွေက ယေဘုယျအားဖြင့် Azure public IP တွေမှာလည်း သက်ရောက်တယ်၊ prefix တူရင် UDR က BGP ကို အနိုင်ရတာပါ၊ ပြောင်းပြန် မဟုတ်ဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("Which statements about a Standard SKU public IP address are true? (Select THREE)",
        "Standard SKU のパブリック IP アドレスについて正しい記述はどれですか？（3 つ選択）",
        "Standard SKU public IP address နဲ့ ပတ်သက်ပြီး ဘယ်အချက်တွေ မှန်လဲ? (Select THREE)"),
      options: ['It is always statically allocated', 'It is closed to inbound traffic unless an NSG allows it', 'It supports dynamic allocation', 'It is open to inbound traffic by default', 'It can be deployed as zone-redundant'],
      correct: [0, 1, 4],
      explanation: L("Standard public IPs are always static, secure by default (inbound is blocked until an NSG allows it) and can be zonal or zone-redundant. Dynamic allocation and open-by-default inbound were characteristics of the Basic SKU, which was retired on 30 September 2025.",
        "Standard パブリック IP は常に静的で、既定でセキュア（NSG が許可するまで受信はブロック）であり、ゾーン固定またはゾーン冗長にできます。動的割り当てと既定で受信が開いている点は、2025 年 9 月 30 日に廃止された Basic SKU の特徴です。",
        "Standard public IP တွေက အမြဲ static၊ default မှာ လုံခြုံတယ် (NSG က ခွင့်မပြုမချင်း inbound ကို ပိတ်ထား)၊ zonal ဒါမှမဟုတ် zone-redundant ဖြစ်နိုင်တယ်။ Dynamic allocation နဲ့ default မှာ inbound ဖွင့်ထားတာတွေက 2025 စက်တင်ဘာ 30 မှာ ရပ်ဆိုင်းခဲ့တဲ့ Basic SKU ရဲ့ လက္ခဏာတွေပါ။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("You must design a VNet with four subnets. Each subnet must support at least 50 VMs. What is the smallest VNet address space that meets the requirement?",
        "4 つのサブネットを持つ VNet を設計します。各サブネットは少なくとも 50 台の VM をサポートする必要があります。要件を満たす最小の VNet アドレス空間はどれですか？",
        "Subnet ၄ ခုပါတဲ့ VNet တစ်ခု design လုပ်ရမယ်။ Subnet တစ်ခုစီမှာ VM အနည်းဆုံး 50 လုံး ထည့်နိုင်ရမယ်။ လိုအပ်ချက်ကို ပြည့်မီတဲ့ အသေးဆုံး VNet address space က ဘာလဲ?"),
      options: ['/26', '/25', '/23', '/24'],
      correct: [3],
      explanation: L("A /26 has 64 addresses minus 5 reserved = 59 usable, which fits 50 VMs, while a /27 gives only 27. Four /26 subnets need 4 x 64 = 256 addresses, which is exactly a /24. A /25 holds only two /26 subnets, and a /23 works but is not the smallest.",
        "/26 は 64 アドレスから予約 5 個を引いて 59 個使用可能で 50 台の VM が入りますが、/27 では 27 個しかありません。/26 を 4 つ作るには 4 × 64 = 256 アドレスが必要で、ちょうど /24 です。/25 には /26 が 2 つしか入らず、/23 でも可能ですが最小ではありません。",
        "/26 မှာ address 64 ထဲက reserve ၅ ခု နှုတ်ရင် 59 ခု သုံးလို့ရလို့ VM 50 လုံး ဆံ့တယ်၊ /27 က 27 ခုပဲ ရတယ်။ /26 subnet ၄ ခုအတွက် 4 x 64 = 256 address လိုတယ်၊ ဒါက /24 နဲ့ အတိအကျ ညီတယ်။ /25 ထဲမှာ /26 နှစ်ခုပဲ ဆံ့ပြီး /23 လည်း ရပေမဲ့ အသေးဆုံး မဟုတ်ဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("You plan to peer VNet-A (10.1.0.0/16, Japan East, subscription Sub1) with VNet-B (10.1.128.0/17, West Europe, subscription Sub2). What will happen?",
        "VNet-A（10.1.0.0/16、Japan East、サブスクリプション Sub1）と VNet-B（10.1.128.0/17、West Europe、サブスクリプション Sub2）をピアリングする予定です。どうなりますか？",
        "VNet-A (10.1.0.0/16၊ Japan East၊ subscription Sub1) နဲ့ VNet-B (10.1.128.0/17၊ West Europe၊ subscription Sub2) ကို peer လုပ်ဖို့ စီစဉ်တယ်။ ဘာဖြစ်မလဲ?"),
      options: ['Peering fails because VNet peering is not supported across regions', 'Peering fails because VNet peering is not supported across subscriptions', 'Peering fails because the address spaces overlap', 'Peering succeeds but requires a VPN gateway in both VNets'],
      correct: [2],
      explanation: L("10.1.128.0/17 is inside 10.1.0.0/16, so the address spaces overlap and peering cannot be created. Global peering across regions and peering across subscriptions are both supported, and peering never requires VPN gateways. Re-address VNet-B to fix it.",
        "10.1.128.0/17 は 10.1.0.0/16 の内側にあるためアドレス空間が重複し、ピアリングは作成できません。リージョン間のグローバルピアリングもサブスクリプション間のピアリングもサポートされており、ピアリングに VPN ゲートウェイは不要です。VNet-B のアドレスを変更して解決します。",
        "10.1.128.0/17 က 10.1.0.0/16 ထဲမှာ ပါနေလို့ address space ထပ်နေပြီး peering ဆောက်လို့ မရဘူး။ Region မတူတဲ့ global peering ရော subscription မတူတဲ့ peering ရော support လုပ်တယ်၊ peering မှာ VPN gateway မလိုဘူး။ VNet-B ရဲ့ address ကို ပြောင်းပြီး ဖြေရှင်းပါ။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("A company connects to Azure with ExpressRoute private peering. The security team now requires that traffic between on-premises and Azure is encrypted, and the network team requires connectivity to continue if the circuit fails. Which actions should you take? (Select TWO)",
        "ある企業は ExpressRoute プライベートピアリングで Azure に接続しています。セキュリティチームはオンプレミスと Azure 間の通信の暗号化を、ネットワークチームは回線障害時にも接続を継続することを求めています。どの操作を行うべきですか？（2 つ選択）",
        "Company တစ်ခုက ExpressRoute private peering နဲ့ Azure ကို ချိတ်ထားတယ်။ Security team က on-premises နဲ့ Azure ကြား traffic ကို encrypt လုပ်ရမယ်လို့ တောင်းဆိုတယ်၊ network team က circuit ပျက်ရင်လည်း connectivity ဆက်ရှိနေရမယ်လို့ တောင်းဆိုတယ်။ ဘာတွေ လုပ်သင့်လဲ? (Select TWO)"),
      options: ['Configure IPsec over ExpressRoute, or MACsec on ExpressRoute Direct', 'Deploy a site-to-site VPN as a backup path', 'Rely on the built-in encryption of ExpressRoute private peering', 'Use Azure Traffic Manager to fail over between circuits', 'Enable DDoS IP Protection on the circuit'],
      correct: [0, 1],
      explanation: L("ExpressRoute is private but not encrypted by default, so add IPsec over ExpressRoute (or MACsec when using ExpressRoute Direct). A site-to-site VPN is the standard backup path if the circuit fails. Traffic Manager works on DNS for application endpoints and cannot fail over private circuits.",
        "ExpressRoute はプライベートですが既定では暗号化されないため、IPsec over ExpressRoute（ExpressRoute Direct なら MACsec）を追加します。回線障害時のバックアップ経路にはサイト間 VPN が標準です。Traffic Manager はアプリのエンドポイントに対して DNS で動作し、専用回線のフェイルオーバーはできません。",
        "ExpressRoute က private ဖြစ်ပေမဲ့ default မှာ encrypt မလုပ်ထားလို့ IPsec over ExpressRoute (ExpressRoute Direct သုံးရင် MACsec) ထည့်ရမယ်။ Circuit ပျက်ရင် backup လမ်းကြောင်းအတွက် site-to-site VPN က standard ပါ။ Traffic Manager က application endpoint တွေအတွက် DNS နဲ့ အလုပ်လုပ်တာဖြစ်ပြီး private circuit တွေကို failover မလုပ်နိုင်ဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("A multiplayer game uses UDP servers deployed in Japan East and West US. Players must be directed by DNS to the region with the lowest latency, and traffic must be spread across several VMs within each region. Which services should you combine? (Select TWO)",
        "マルチプレイヤーゲームが Japan East と West US に UDP サーバーをデプロイしています。プレイヤーは DNS によって最も遅延の少ないリージョンへ誘導され、各リージョン内では複数の VM に通信を分散する必要があります。どのサービスを組み合わせるべきですか？（2 つ選択）",
        "Multiplayer game တစ်ခုက Japan East နဲ့ West US မှာ UDP server တွေ deploy လုပ်ထားတယ်။ Player တွေကို DNS နဲ့ latency အနည်းဆုံး region ဆီ ပို့ရမယ်၊ region တစ်ခုစီထဲမှာ VM အများကြီးကို traffic ခွဲဝေပေးရမယ်။ ဘယ် service တွေကို ပေါင်းသုံးသင့်လဲ? (Select TWO)"),
      options: ['Azure Traffic Manager with Performance routing', 'Azure Load Balancer Standard in each region', 'Azure Application Gateway in each region', 'Azure Front Door', 'Azure NAT Gateway'],
      correct: [0, 1],
      explanation: L("Traffic Manager with the Performance routing method answers DNS queries with the closest-latency region and works for any protocol. Inside each region, Standard Load Balancer distributes UDP at Layer 4. Application Gateway and Front Door are HTTP(S)-only Layer 7 services, so they cannot handle UDP game traffic.",
        "Performance ルーティング方式の Traffic Manager は、最も遅延の少ないリージョンで DNS クエリに応答し、任意のプロトコルに対応します。各リージョン内では Standard Load Balancer がレイヤー 4 で UDP を分散します。Application Gateway と Front Door は HTTP(S) 専用のレイヤー 7 サービスなので、UDP のゲーム通信は扱えません。",
        "Performance routing method သုံးတဲ့ Traffic Manager က latency အနီးဆုံး region နဲ့ DNS query ကို ဖြေပေးပြီး ဘယ် protocol မဆို အလုပ်လုပ်တယ်။ Region တစ်ခုစီထဲမှာ Standard Load Balancer က Layer 4 မှာ UDP ကို ခွဲဝေတယ်။ Application Gateway နဲ့ Front Door က HTTP(S) သီးသန့် Layer 7 service တွေဖြစ်လို့ UDP game traffic ကို မကိုင်နိုင်ဘူး။"),
    },
  ],
  flashcards: [
    {
      term: "Virtual Network (VNet)",
      definition: L("An isolated private network in one Azure region and subscription, defined by one or more CIDR address spaces.",
        "1 つの Azure リージョンとサブスクリプション内にある分離されたプライベートネットワークで、1 つ以上の CIDR アドレス空間で定義されます。",
        "Azure region တစ်ခု၊ subscription တစ်ခုထဲမှာ ရှိတဲ့ သီးသန့် private network ဖြစ်ပြီး CIDR address space တစ်ခု ဒါမှမဟုတ် အများနဲ့ သတ်မှတ်တယ်။"),
      example: L("vnet-app in Japan East with 10.0.0.0/16, split into snet-web and snet-db.",
        "Japan East の vnet-app（10.0.0.0/16）を snet-web と snet-db に分割。",
        "Japan East က vnet-app (10.0.0.0/16) ကို snet-web နဲ့ snet-db ခွဲထားတယ်။"),
    },
    {
      term: "Azure reserved IPs",
      definition: L("The 5 addresses Azure keeps in every subnet: network, default gateway, two for Azure DNS, and broadcast. Usable = 2^(32 - prefix) - 5.",
        "Azure が各サブネットで確保する 5 つのアドレス（ネットワーク、既定ゲートウェイ、Azure DNS 用 2 つ、ブロードキャスト）。使用可能数 = 2^(32 - プレフィックス) - 5。",
        "Azure က subnet တိုင်းမှာ ယူထားတဲ့ address ၅ ခု (network၊ default gateway၊ Azure DNS အတွက် ၂ ခု၊ broadcast)။ သုံးလို့ရတာ = 2^(32 - prefix) - 5။"),
      example: L("10.0.1.0/24 has 256 addresses but only 251 usable (.4 to .254).",
        "10.0.1.0/24 は 256 アドレスですが、使用可能なのは 251 個（.4〜.254）です。",
        "10.0.1.0/24 မှာ address 256 ရှိပေမဲ့ 251 ခု (.4 ကနေ .254) ပဲ သုံးလို့ရတယ်။"),
    },
    {
      term: "GatewaySubnet",
      definition: L("The exact subnet name required for VPN and ExpressRoute gateways; /27 or larger is recommended and no other resources should be placed in it.",
        "VPN と ExpressRoute ゲートウェイに必須の正確なサブネット名。/27 以上を推奨し、他のリソースは置きません。",
        "VPN နဲ့ ExpressRoute gateway တွေအတွက် မဖြစ်မနေ သုံးရတဲ့ subnet နာမည်အတိအကျ။ /27 နဲ့ အထက် အကြံပြုပြီး တခြား resource မထည့်ရဘူး။"),
      example: L("Hub VNet: GatewaySubnet 10.100.0.0/27 hosts the S2S VPN gateway to the Tokyo office.",
        "ハブ VNet の GatewaySubnet 10.100.0.0/27 に東京オフィスへの S2S VPN ゲートウェイを配置。",
        "Hub VNet ရဲ့ GatewaySubnet 10.100.0.0/27 မှာ Tokyo ရုံးကို ချိတ်တဲ့ S2S VPN gateway ရှိတယ်။"),
    },
    {
      term: "Network Security Group (NSG)",
      definition: L("A stateful set of allow/deny rules (priority 100-4096, lowest first, first match wins) associated with a subnet or NIC.",
        "サブネットまたは NIC に関連付けるステートフルな許可／拒否規則の集合（優先度 100〜4096、小さい順、最初の一致が適用）。",
        "Subnet ဒါမှမဟုတ် NIC နဲ့ ချိတ်တဲ့ stateful allow/deny rule အစု (priority 100-4096၊ ငယ်တာအရင်၊ ပထမကိုက်တာ အနိုင်ရ)။"),
      example: L("Priority 100 Allow TCP 22 from 203.0.113.10/32; everything else falls to DenyAllInBound 65500.",
        "優先度 100 で 203.0.113.10/32 からの TCP 22 を許可。それ以外は DenyAllInBound 65500 で拒否。",
        "Priority 100 နဲ့ 203.0.113.10/32 က TCP 22 ကို Allow၊ ကျန်တာအားလုံး DenyAllInBound 65500 ကို ရောက်ပြီး ပိတ်ခံရတယ်။"),
    },
    {
      term: "Application Security Group (ASG)",
      definition: L("A logical group of VM NICs used as source or destination in NSG rules, so you write rules by role instead of IP address.",
        "NSG 規則の送信元・宛先として使う VM NIC の論理グループ。IP アドレスではなく役割で規則を書けます。",
        "NSG rule မှာ source/destination အဖြစ် သုံးတဲ့ VM NIC တွေရဲ့ logical group။ IP address အစား role နဲ့ rule ရေးလို့ရတယ်။"),
      example: L("Allow asg-web to asg-db on TCP 1433; new web VMs only need to join asg-web.",
        "asg-web から asg-db への TCP 1433 を許可。新しい Web VM は asg-web に追加するだけです。",
        "asg-web ကနေ asg-db ကို TCP 1433 Allow၊ web VM အသစ်တွေကို asg-web ထဲ ထည့်ရုံပဲ။"),
    },
    {
      term: "Service tag",
      definition: L("A Microsoft-managed name for a group of IP prefixes (for example Internet, VirtualNetwork, Storage, Sql) used in NSG and firewall rules.",
        "NSG やファイアウォール規則で使う、Microsoft が管理する IP プレフィックスのグループ名（Internet、VirtualNetwork、Storage、Sql など）。",
        "NSG နဲ့ firewall rule တွေမှာ သုံးတဲ့ Microsoft စီမံ IP prefix အုပ်စု နာမည် (Internet၊ VirtualNetwork၊ Storage၊ Sql စသဖြင့်)။"),
      example: L("Outbound rule: allow destination Storage.JapanEast on TCP 443.",
        "送信規則：宛先 Storage.JapanEast への TCP 443 を許可。",
        "Outbound rule: destination Storage.JapanEast ကို TCP 443 Allow။"),
    },
    {
      term: "User-defined route (UDR)",
      definition: L("A custom route in a route table, associated with a subnet, that overrides system routes, for example to send traffic to a firewall.",
        "サブネットに関連付けるルートテーブル内のカスタムルートで、システムルートを上書きします（例：ファイアウォールへ送る）。",
        "Subnet နဲ့ ချိတ်ထားတဲ့ route table ထဲက custom route ဖြစ်ပြီး system route ကို override လုပ်တယ် (ဥပမာ firewall ဆီ ပို့ဖို့)။"),
      example: L("0.0.0.0/0 -> VirtualAppliance 10.100.1.4 (Azure Firewall) for forced tunneling.",
        "強制トンネリング用に 0.0.0.0/0 -> VirtualAppliance 10.100.1.4（Azure Firewall）。",
        "Forced tunneling အတွက် 0.0.0.0/0 -> VirtualAppliance 10.100.1.4 (Azure Firewall)။"),
    },
    {
      term: "VNet peering",
      definition: L("A private, low-latency connection between two VNets over the Microsoft backbone; non-transitive and requires non-overlapping address spaces.",
        "Microsoft バックボーン経由で 2 つの VNet を結ぶ低遅延のプライベート接続。非推移的で、アドレス空間の重複は不可です。",
        "Microsoft backbone ပေါ်ကနေ VNet နှစ်ခုကို ချိတ်တဲ့ latency နည်းတဲ့ private connection။ Non-transitive ဖြစ်ပြီး address space မထပ်ရဘူး။"),
      example: L("Hub peers with Spoke1 and Spoke2, but Spoke1 cannot reach Spoke2 without extra peering or a hub firewall.",
        "ハブは Spoke1 と Spoke2 とピアリングしていますが、追加のピアリングかハブのファイアウォールがなければ Spoke1 から Spoke2 へは届きません。",
        "Hub က Spoke1 နဲ့ Spoke2 နဲ့ peer ထားပေမဲ့ peering ထပ်မလုပ် ဒါမှမဟုတ် hub firewall မရှိရင် Spoke1 က Spoke2 ကို မရောက်ဘူး။"),
    },
    {
      term: "ExpressRoute",
      definition: L("A private, dedicated circuit between on-premises and Microsoft through a connectivity provider that does not use the public internet; not encrypted by default.",
        "接続プロバイダー経由でオンプレミスと Microsoft を結ぶ専用回線で、パブリックインターネットを使いません。既定では暗号化されません。",
        "Connectivity provider ကနေ on-premises နဲ့ Microsoft ကို ချိတ်တဲ့ private dedicated circuit ဖြစ်ပြီး public internet မသုံးဘူး။ Default မှာ encrypt မလုပ်ထားဘူး။"),
      example: L("A bank links its Tokyo datacenter to Azure via a provider at an Equinix site, with an S2S VPN as backup.",
        "銀行が Equinix 拠点のプロバイダー経由で東京のデータセンターを Azure に接続し、S2S VPN をバックアップにします。",
        "ဘဏ်တစ်ခုက Equinix site က provider ကနေ Tokyo datacenter ကို Azure နဲ့ ချိတ်ပြီး S2S VPN ကို backup ထားတယ်။"),
    },
    {
      term: "Private endpoint",
      definition: L("A NIC with a private IP in your subnet that connects privately to one specific PaaS resource through Azure Private Link; needs private DNS.",
        "Azure Private Link を通じて特定の 1 つの PaaS リソースにプライベート接続する、サブネット内のプライベート IP を持つ NIC。プライベート DNS が必要です。",
        "Azure Private Link ကနေ PaaS resource တစ်ခုတည်းကို private ချိတ်ပေးတဲ့ ကိုယ့် subnet ထဲက private IP ပါတဲ့ NIC။ Private DNS လိုတယ်။"),
      example: L("mystorage.blob.core.windows.net resolves to 10.0.3.5 via privatelink.blob.core.windows.net.",
        "mystorage.blob.core.windows.net が privatelink.blob.core.windows.net 経由で 10.0.3.5 に解決されます。",
        "mystorage.blob.core.windows.net က privatelink.blob.core.windows.net ကနေ 10.0.3.5 အဖြစ် resolve ဖြစ်တယ်။"),
    },
    {
      term: "NAT Gateway",
      definition: L("A managed outbound-only SNAT service attached to subnets, giving all outbound traffic one or more static public IPs.",
        "サブネットに関連付けるマネージドな送信専用 SNAT サービスで、すべての送信トラフィックに 1 つ以上の静的パブリック IP を与えます。",
        "Subnet နဲ့ ချိတ်တဲ့ managed outbound-only SNAT service ဖြစ်ပြီး outbound traffic အားလုံးကို static public IP တစ်ခု ဒါမှမဟုတ် အများ ပေးတယ်။"),
      example: L("A partner allow-lists 20.x.x.x, the NAT Gateway IP, for API calls from private VMs.",
        "取引先がプライベート VM からの API 呼び出し用に NAT Gateway の IP 20.x.x.x を許可リストに登録します。",
        "Private VM တွေက API call တွေအတွက် partner က NAT Gateway IP 20.x.x.x ကို allow-list လုပ်ထားတယ်။"),
    },
    {
      term: "IP flow verify",
      definition: L("A Network Watcher tool that checks whether a specific packet to or from a VM is allowed or denied and names the NSG rule responsible.",
        "VM との間の特定のパケットが許可か拒否かを確認し、原因の NSG 規則名を示す Network Watcher のツール。",
        "VM ဆီ ဝင်/ထွက်တဲ့ packet တစ်ခု ခွင့်ပြုလား ပိတ်လား စစ်ပြီး တာဝန်ရှိတဲ့ NSG rule နာမည်ကို ပြတဲ့ Network Watcher tool။"),
      example: L("Inbound TCP 3389 from 198.51.100.7 to 10.0.1.4 returns Deny by DenyAllInBound.",
        "198.51.100.7 から 10.0.1.4 への受信 TCP 3389 は DenyAllInBound により拒否と表示されます。",
        "198.51.100.7 ကနေ 10.0.1.4 ကို inbound TCP 3389 က DenyAllInBound ကြောင့် Deny လို့ ပြတယ်။"),
    },
  ],
};
