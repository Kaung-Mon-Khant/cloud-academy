import { L, type SeedTopic } from './types.js';

export const azureTopics: SeedTopic[] = [
  {
    slug: 'azure-fundamentals',
    icon: 'Cloud',
    name: L('Cloud Fundamentals', 'クラウドの基礎', 'Cloud အခြေခံ'),
    description: L(
      'Service models, shared responsibility, regions, zones and the resource hierarchy.',
      'サービスモデル、責任共有、リージョン、ゾーン、リソース階層。',
      'Service model၊ Shared responsibility၊ Region၊ Zone နဲ့ Resource hierarchy။',
    ),
    questions: [
      {
        difficulty: 'EASY',
        prompt: L(
          'Which service model gives you full control of the operating system?',
          'OS を完全に管理できるサービスモデルはどれですか？',
          'OS ကို အပြည့်အဝ ကိုယ်တိုင် စီမံရတဲ့ service model က ဘယ်ဟာလဲ?',
        ),
        options: ['IaaS', 'PaaS', 'SaaS', 'Serverless'],
        correct: [0],
        explanation: L(
          'With IaaS (e.g. Virtual Machines) you manage the OS, patches and apps. Azure manages the physical hardware.',
          'IaaS（例: 仮想マシン）では OS・パッチ・アプリを利用者が管理し、物理ハードウェアは Azure が管理します。',
          'IaaS (ဥပမာ VM) မှာ OS၊ patch၊ app ကို ကိုယ်တိုင် စီမံရပြီး hardware ကို Azure က စီမံတယ်။',
        ),
      },
      {
        difficulty: 'EASY',
        prompt: L(
          'In the shared responsibility model, what is ALWAYS the customer’s responsibility?',
          '責任共有モデルで、常に利用者の責任となるものはどれですか？',
          'Shared responsibility model မှာ ဘယ်အရာက အမြဲ customer ရဲ့ တာဝန်လဲ?',
        ),
        options: ['Physical datacenter security', 'Data and accounts/identities', 'Hypervisor patching', 'Network cabling'],
        correct: [1],
        explanation: L(
          'Regardless of IaaS, PaaS or SaaS, your data, accounts and identities are always your responsibility.',
          'IaaS・PaaS・SaaS に関係なく、データ・アカウント・ID は常に利用者の責任です。',
          'IaaS၊ PaaS၊ SaaS ဘာသုံးသုံး Data၊ Account၊ Identity က အမြဲ customer တာဝန်ပါ။',
        ),
      },
      {
        difficulty: 'MEDIUM',
        prompt: L(
          'What is the minimum number of availability zones in a zone-enabled Azure region?',
          'ゾーン対応リージョンの可用性ゾーンは最低いくつですか？',
          'Zone ပါတဲ့ Azure region တစ်ခုမှာ Availability Zone အနည်းဆုံး ဘယ်နှခု ရှိလဲ?',
        ),
        options: ['1', '2', '3', '5'],
        correct: [2],
        explanation: L(
          'Zone-enabled regions have at least three physically separate zones, each with independent power, cooling and networking.',
          'ゾーン対応リージョンには、電源・冷却・ネットワークが独立したゾーンが最低 3 つあります。',
          'Zone ပါတဲ့ region မှာ မီး၊ အအေးခံ၊ network သီးခြားစီရှိတဲ့ zone အနည်းဆုံး ၃ ခု ရှိတယ်။',
        ),
      },
      {
        difficulty: 'MEDIUM',
        prompt: L(
          'At which level should you separate resources to get separate invoices for Production and Development?',
          '本番と開発で請求を分けたい場合、どの単位で分けるべきですか？',
          'Production နဲ့ Development ဘေလ်ကို ခွဲချင်ရင် ဘယ် level မှာ ခွဲသင့်လဲ?',
        ),
        options: ['Resource group', 'Subscription', 'Tag', 'Availability set'],
        correct: [1],
        explanation: L(
          'A subscription is the billing boundary. Tags help with cost reporting, but invoices are per subscription.',
          'サブスクリプションは課金の境界です。タグはコスト分析に役立ちますが、請求はサブスクリプション単位です。',
          'Subscription က billing နယ်နိမိတ်ပါ။ Tag က cost ခွဲကြည့်ဖို့ပဲ၊ ဘေလ်က subscription အလိုက်ထွက်တယ်။',
        ),
      },
      {
        difficulty: 'HARD',
        prompt: L(
          'Which statements about resource groups are true? (Select all that apply)',
          'リソースグループについて正しいものをすべて選んでください。',
          'Resource Group အကြောင်း မှန်တာတွေ အကုန်ရွေးပါ။',
        ),
        options: [
          'A resource can belong to only one resource group',
          'Deleting a resource group deletes all resources in it',
          'Resources in a group must be in the same region',
          'A subscription can contain up to 980 resource groups',
        ],
        correct: [0, 1, 3],
        explanation: L(
          'Resources in one group can live in different regions; the group only stores metadata in its own region. The limit is 980 groups per subscription.',
          'グループ内のリソースは別リージョンでも構いません。上限はサブスクリプションあたり 980 個です。',
          'RG ထဲက resource တွေ region မတူလည်း ရတယ်။ Subscription တစ်ခုမှာ RG ၉၈၀ ခုအထိ ဆောက်လို့ရတယ်။',
        ),
      },
    ],
    flashcards: [
      { term: 'IaaS', definition: L('Infrastructure as a Service — you manage OS and apps, Azure manages hardware.', 'IaaS — OS とアプリは利用者、ハードウェアは Azure が管理。', 'OS နဲ့ app ကို ကိုယ်တိုင်၊ hardware ကို Azure က စီမံတဲ့ model။'), example: L('Virtual Machines') },
      { term: 'PaaS', definition: L('Platform as a Service — you manage only code and data.', 'PaaS — 利用者はコードとデータのみ管理。', 'Code နဲ့ data ပဲ ကိုယ်စီမံရတဲ့ model။'), example: L('App Service, Azure SQL Database') },
      { term: 'Region', definition: L('A set of datacenters in one geographic location.', '特定の地域にあるデータセンターの集まり。', 'ပထဝီဝင်နေရာတစ်ခုက datacenter အစုအဝေး။'), example: L('Japan East (Tokyo)') },
      { term: 'Availability Zone', definition: L('Physically separate datacenters inside a region. One VM lives in exactly one zone.', 'リージョン内の物理的に独立したデータセンター群。VM は 1 つのゾーンに配置。', 'Region ထဲက သီးခြား datacenter အုပ်စု။ VM တစ်လုံးက zone တစ်ခုထဲမှာပဲ နေတယ်။') },
      { term: 'Subscription', definition: L('Boundary for billing, quotas, access and policy. Every resource belongs to one.', '課金・クォータ・アクセス・ポリシーの境界。', 'Billing၊ quota၊ access၊ policy ရဲ့ နယ်နိမိတ်။') },
      { term: 'Resource Group', definition: L('Logical folder for related resources. Deleting it deletes everything inside.', '関連リソースをまとめる論理フォルダー。削除すると中身も削除。', 'ဆက်စပ် resource တွေ စုတဲ့ folder။ ဖျက်ရင် အထဲက အကုန်ပျက်တယ်။') },
    ],
  },
  {
    slug: 'azure-compute',
    icon: 'Server',
    name: L('Virtual Machines', '仮想マシン', 'Virtual Machine'),
    description: L(
      'VM sizes, disks, states and billing, availability sets and scale sets.',
      'VM サイズ、ディスク、状態と課金、可用性セットとスケールセット。',
      'VM size၊ disk၊ state နဲ့ ငွေကုန်ပုံ၊ Availability Set နဲ့ Scale Set။',
    ),
    questions: [
      {
        difficulty: 'EASY',
        prompt: L(
          'You run "sudo shutdown -h now" inside a VM. What happens to compute billing?',
          'VM 内で「sudo shutdown -h now」を実行しました。コンピューティング課金はどうなりますか？',
          'VM ထဲမှာ "sudo shutdown -h now" run လိုက်ရင် compute ငွေ ဘာဖြစ်လဲ?',
        ),
        options: ['It stops immediately', 'It continues — the VM is Stopped but still allocated', 'It is refunded for the month', 'Only disks stop being billed'],
        correct: [1],
        explanation: L(
          'An OS shutdown leaves the VM in "Stopped" state with hardware still allocated. Use Portal Stop or "az vm deallocate" to stop compute billing.',
          'OS からのシャットダウンでは「停止済み」でもハードウェアは割り当てられたままです。課金を止めるには「割り当て解除」が必要です。',
          'OS shutdown က hardware ကို ဆက်ယူထားလို့ ငွေဆက်ကုန်တယ်။ Portal Stop (deallocate) လုပ်မှ ရပ်တယ်။',
        ),
      },
      {
        difficulty: 'EASY',
        prompt: L(
          'Which VM family is the cheapest choice for a learning lab?',
          '学習用ラボに最も安い VM ファミリーはどれですか？',
          'Lab လေ့လာဖို့ အသက်သာဆုံး VM family က ဘယ်ဟာလဲ?',
        ),
        options: ['B-series', 'E-series', 'M-series', 'N-series'],
        correct: [0],
        explanation: L(
          'B-series (burstable) VMs accumulate CPU credits and are ideal for low-traffic dev/test workloads.',
          'B シリーズ（バースト可能）は CPU クレジットを貯める仕組みで、開発・テストに最適です。',
          'B-series က CPU credit စုသုံးတဲ့ burstable VM ဖြစ်လို့ dev/test အတွက် အကောင်းဆုံး။',
        ),
      },
      {
        difficulty: 'MEDIUM',
        prompt: L(
          'After deallocating and starting a VM, which data may be lost?',
          'VM を割り当て解除して再起動した後、失われる可能性があるデータはどれですか？',
          'VM ကို deallocate လုပ်ပြီး ပြန် Start လုပ်ရင် ဘယ် data ပျောက်နိုင်လဲ?',
        ),
        options: ['OS disk', 'Data disk', 'Temporary disk', 'Snapshot'],
        correct: [2],
        explanation: L(
          'The temporary disk lives on the physical host. When the VM moves to a new host, its contents are gone. Managed disks are kept.',
          '一時ディスクは物理ホスト上にあるため、別ホストに移ると内容は消えます。マネージドディスクは保持されます。',
          'Temp disk က host ပေါ်မှာရှိလို့ host ပြောင်းရင် ပျောက်တယ်။ Managed disk တွေ ကျန်တယ်။',
        ),
      },
      {
        difficulty: 'MEDIUM',
        prompt: L(
          'What does the name Standard_D4as_v5 tell you? (Select all that apply)',
          'Standard_D4as_v5 という名前から分かることをすべて選んでください。',
          'Standard_D4as_v5 နာမည်က ဘာတွေ ပြောလဲ? (မှန်တာ အကုန်ရွေး)',
        ),
        options: ['General purpose (D) family', '4 vCPUs', 'AMD processor', 'Includes a GPU'],
        correct: [0, 1, 2],
        explanation: L(
          'D = general purpose, 4 = vCPUs, a = AMD, s = premium storage capable, v5 = generation. GPU sizes are the N family.',
          'D = 汎用、4 = vCPU 数、a = AMD、s = Premium Storage 対応、v5 = 世代。GPU は N ファミリーです。',
          'D = General၊ 4 = vCPU၊ a = AMD၊ s = Premium SSD ရ၊ v5 = generation။ GPU က N family။',
        ),
      },
      {
        difficulty: 'HARD',
        prompt: L(
          'You need 99.99% VM SLA. What is the minimum design?',
          'VM で 99.99% の SLA が必要です。最小構成はどれですか？',
          'VM SLA 99.99% လိုရင် အနည်းဆုံး ဘယ်လို design လုပ်ရမလဲ?',
        ),
        options: ['1 VM with Premium SSD', '2 VMs in one availability set', '2 or more VMs across 2 or more availability zones', '1 VM with Ultra Disk'],
        correct: [2],
        explanation: L(
          'Single VM (premium disks) = 99.9%, availability set = 99.95%, two or more VMs across zones = 99.99%.',
          '単一 VM = 99.9%、可用性セット = 99.95%、複数ゾーンに 2 台以上 = 99.99%。',
          'VM ၁ လုံး 99.9%၊ Availability Set 99.95%၊ Zone ၂ ခုကျော်မှာ VM ၂ လုံးကျော် 99.99%။',
        ),
      },
    ],
    flashcards: [
      { term: 'Stopped (deallocated)', definition: L('Hardware released. Compute billing stops; disks are still billed.', 'ハードウェア解放。コンピューティング課金は停止、ディスクは課金継続。', 'Hardware ပြန်ပေး၊ Compute ငွေရပ်၊ Disk ငွေကျန်။'), example: L('Portal Stop · az vm deallocate') },
      { term: 'Temporary Disk', definition: L('Local disk on the host. Lost on deallocate or redeploy.', 'ホスト上のローカルディスク。割り当て解除で消える。', 'Host ပေါ်က ယာယီ disk။ Deallocate လုပ်ရင် ပျောက်။'), example: L('/mnt on Linux, D: on Windows') },
      { term: 'VM Scale Set', definition: L('Group of identical VMs with autoscale and automatic repair.', '自動スケールと自動修復を備えた同一 VM のグループ。', 'Autoscale နဲ့ auto-repair ပါတဲ့ တူညီ VM အုပ်စု။') },
      { term: 'Availability Set', definition: L('Spreads VMs across fault and update domains inside one datacenter (99.95%).', '1 つのデータセンター内で障害/更新ドメインに分散（99.95%）。', 'Datacenter တစ်ခုထဲ rack/update အုပ်စု ခွဲထား (99.95%)။') },
      { term: 'Auto-shutdown', definition: L('Deallocates the VM every day at a set time to save cost.', '毎日決まった時刻に VM を割り当て解除してコスト削減。', 'နေ့တိုင်း သတ်မှတ်ချိန်မှာ deallocate လုပ်ပေး။') },
      { term: 'Redeploy', definition: L('Moves the VM to a new host to fix host-level issues.', 'ホスト起因の問題を解決するため VM を新しいホストへ移動。', 'Host ပြဿနာဖြေဖို့ VM ကို host အသစ်ဆီ ရွှေ့။') },
    ],
  },
  {
    slug: 'azure-networking',
    icon: 'Network',
    name: L('Networking', 'ネットワーク', 'Networking'),
    description: L(
      'VNets, subnets, CIDR, NSGs, peering, load balancing and secure access.',
      'VNet、サブネット、CIDR、NSG、ピアリング、負荷分散、安全な接続。',
      'VNet၊ Subnet၊ CIDR၊ NSG၊ Peering၊ Load balancing နဲ့ လုံခြုံစွာ ဝင်နည်း။',
    ),
    questions: [
      {
        difficulty: 'EASY',
        prompt: L(
          'How many IP addresses does Azure reserve in every subnet?',
          'Azure は各サブネットで IP アドレスをいくつ予約しますか？',
          'Azure က subnet တိုင်းမှာ IP ဘယ်နှခု ယူထားလဲ?',
        ),
        options: ['0', '3', '5', '10'],
        correct: [2],
        explanation: L(
          'Azure reserves the first four and the last address of each subnet, so a /24 has 251 usable addresses.',
          '各サブネットの先頭 4 つと最後の 1 つが予約されるため、/24 で使えるのは 251 個です。',
          'ပထမ ၄ ခုနဲ့ နောက်ဆုံး ၁ ခု ယူထားလို့ /24 မှာ သုံးလို့ရတာ 251 ခု။',
        ),
      },
      {
        difficulty: 'EASY',
        prompt: L(
          'You want to allow SSH only from your own computer. What is the best NSG rule source?',
          '自分の PC からのみ SSH を許可したい。NSG ルールのソースとして最適なのは？',
          'ကိုယ့်ကွန်ပျူတာကပဲ SSH ဝင်ခွင့်ပေးချင်ရင် NSG rule ရဲ့ Source ကို ဘာထားမလဲ?',
        ),
        options: ['Any', 'My IP address (/32)', 'VirtualNetwork', 'Internet'],
        correct: [1],
        explanation: L(
          'Restrict port 22 to your public IP (/32). "Any" exposes SSH to brute-force attacks from the whole internet.',
          'ポート 22 は自分のパブリック IP (/32) に限定します。「Any」はインターネット全体に公開されます。',
          'Port 22 ကို ကိုယ့် IP (/32) ပဲ ခွင့်ပြု။ Any ဆို ကမ္ဘာတစ်ခုလုံးက attack လုပ်နိုင်တယ်။',
        ),
      },
      {
        difficulty: 'MEDIUM',
        prompt: L(
          'Which service balances HTTP traffic by URL path and includes a Web Application Firewall?',
          'URL パスで HTTP を振り分け、WAF を備えるサービスはどれですか？',
          'URL path နဲ့ HTTP traffic ခွဲပြီး WAF ပါတဲ့ service က ဘာလဲ?',
        ),
        options: ['Azure Load Balancer', 'Application Gateway', 'Traffic Manager', 'NAT Gateway'],
        correct: [1],
        explanation: L(
          'Application Gateway is a Layer 7 load balancer with URL routing, SSL termination and WAF. Azure Load Balancer works at Layer 4.',
          'Application Gateway は URL ルーティング・SSL 終端・WAF を持つ L7 ロードバランサーです。',
          'Application Gateway က Layer 7 (URL routing၊ SSL၊ WAF)။ Load Balancer က Layer 4။',
        ),
      },
      {
        difficulty: 'MEDIUM',
        prompt: L(
          'What is the required name and minimum size of the subnet for Azure Bastion?',
          'Azure Bastion 用サブネットの必須名と最小サイズは？',
          'Azure Bastion subnet ရဲ့ မဖြစ်မနေ နာမည်နဲ့ အနည်းဆုံး size က ဘာလဲ?',
        ),
        options: ['BastionSubnet /28', 'AzureBastionSubnet /26', 'GatewaySubnet /27', 'AzureFirewallSubnet /26'],
        correct: [1],
        explanation: L(
          'Bastion requires a subnet named exactly AzureBastionSubnet with a /26 or larger prefix.',
          'Bastion には AzureBastionSubnet という名前で /26 以上のサブネットが必要です。',
          'Bastion အတွက် AzureBastionSubnet နာမည်နဲ့ /26 (သို့ ပိုကြီး) လိုတယ်။',
        ),
      },
      {
        difficulty: 'HARD',
        prompt: L(
          'VNet A is 10.0.0.0/16 and VNet B is 10.0.0.0/16. What happens when you try to peer them?',
          'VNet A と B がどちらも 10.0.0.0/16 です。ピアリングするとどうなりますか？',
          'VNet A နဲ့ B နှစ်ခုလုံး 10.0.0.0/16 ဖြစ်နေရင် Peering လုပ်ရင် ဘာဖြစ်မလဲ?',
        ),
        options: ['It works normally', 'It fails because address spaces overlap', 'Azure renumbers VNet B automatically', 'Only one-way traffic is allowed'],
        correct: [1],
        explanation: L(
          'Peered VNets must have non-overlapping address spaces. Plan IP ranges before building networks.',
          'ピアリングするには、アドレス空間が重複してはいけません。事前に IP 計画が必要です。',
          'Peering လုပ်ဖို့ IP range မထပ်ရ။ Network မဆောက်ခင် IP plan လုပ်ထားရမယ်။',
        ),
      },
    ],
    flashcards: [
      { term: 'VNet', definition: L('Your private network in Azure.', 'Azure 内のプライベートネットワーク。', 'Azure ထဲက ကိုယ်ပိုင် private network။'), example: L('10.0.0.0/16') },
      { term: 'CIDR', definition: L('IP range notation. Larger suffix = fewer IPs (/16 = 65,536, /24 = 256).', 'IP 範囲の表記。数字が大きいほど IP は少ない。', 'IP range ရေးနည်း။ နံပါတ်ကြီးလေ IP နည်းလေ။') },
      { term: 'NSG', definition: L('Stateful allow/deny port rules on a subnet or NIC. Lower priority number wins.', 'サブネット/NIC に適用するステートフルな許可/拒否ルール。', 'Subnet/NIC မှာ ချိတ်တဲ့ port ဖွင့်/ပိတ် rule။'), example: L('Allow 22 from My IP') },
      { term: 'Azure Bastion', definition: L('Paid service for browser-based RDP/SSH without a public IP on the VM.', 'VM にパブリック IP 不要でブラウザから RDP/SSH できる有料サービス。', 'VM မှာ public IP မထားဘဲ browser ကနေ SSH/RDP ဝင်ဖို့ paid service။') },
      { term: 'VNet Peering', definition: L('Private connection between two VNets. Address spaces must not overlap.', '2 つの VNet をプライベート接続。アドレス重複不可。', 'VNet ၂ ခု private ချိတ်။ IP range မထပ်ရ။') },
      { term: 'Private Endpoint', definition: L('Reach a PaaS service through a private IP inside your VNet.', 'VNet 内のプライベート IP で PaaS に接続。', 'PaaS ကို VNet ထဲက private IP နဲ့ ဝင်။'), example: L('Azure SQL without public access') },
    ],
  },
  {
    slug: 'azure-storage',
    icon: 'HardDrive',
    name: L('Storage & Disks', 'ストレージとディスク', 'Storage နဲ့ Disk'),
    description: L(
      'Managed disks, disk types, caching, redundancy, snapshots and backup.',
      'マネージドディスク、種類、キャッシュ、冗長性、スナップショット、バックアップ。',
      'Managed disk၊ disk type၊ caching၊ redundancy၊ snapshot နဲ့ backup။',
    ),
    questions: [
      {
        difficulty: 'EASY',
        prompt: L(
          'Which redundancy option keeps copies in three availability zones?',
          '3 つの可用性ゾーンにコピーを保持する冗長性はどれですか？',
          'Copy ကို Zone ၃ ခုမှာ ခွဲသိမ်းတဲ့ redundancy က ဘာလဲ?',
        ),
        options: ['LRS', 'ZRS', 'GRS', 'RA-GRS'],
        correct: [1],
        explanation: L(
          'ZRS (zone-redundant storage) spreads three copies across zones. LRS keeps three copies in one datacenter.',
          'ZRS は 3 つのゾーンにコピーを分散します。LRS は 1 つのデータセンター内です。',
          'ZRS က zone ၃ ခုမှာ ခွဲသိမ်း၊ LRS က datacenter တစ်ခုထဲမှာ ၃ ခု။',
        ),
      },
      {
        difficulty: 'MEDIUM',
        prompt: L(
          'Which redundancy options can you choose for a VM managed disk? (Select all that apply)',
          'VM のマネージドディスクで選べる冗長性をすべて選んでください。',
          'VM Managed Disk မှာ ရွေးလို့ရတဲ့ redundancy တွေ အကုန်ရွေးပါ။',
        ),
        options: ['LRS', 'ZRS', 'GRS', 'GZRS'],
        correct: [0, 1],
        explanation: L(
          'Managed disks support LRS and ZRS. For cross-region protection use Azure Backup or Azure Site Recovery.',
          'マネージドディスクは LRS と ZRS のみ。リージョン間保護には Backup や Site Recovery を使います。',
          'Managed disk မှာ LRS နဲ့ ZRS ပဲရ။ Region ကျော်ကာကွယ်ချင်ရင် Backup/Site Recovery သုံး။',
        ),
      },
      {
        difficulty: 'MEDIUM',
        prompt: L(
          'What host caching setting is recommended for database DATA files?',
          'データベースのデータファイルに推奨されるホストキャッシュは？',
          'Database data file အတွက် အကြံပြုတဲ့ host caching က ဘာလဲ?',
        ),
        options: ['None', 'ReadOnly', 'ReadWrite', 'WriteOnly'],
        correct: [1],
        explanation: L(
          'ReadOnly speeds up reads while writes go straight to the disk. Use None for log files and ReadWrite for the OS disk.',
          'ReadOnly は読み取りを高速化し、書き込みは直接ディスクへ。ログは None、OS ディスクは ReadWrite。',
          'ReadOnly က ဖတ်တာမြန်ပြီး ရေးတာ disk ထဲ တိုက်ရိုက်။ Log = None၊ OS disk = ReadWrite။',
        ),
      },
      {
        difficulty: 'EASY',
        prompt: L(
          'Which disk type is the best balance of cost and reliability for a production VM?',
          '本番 VM でコストと信頼性のバランスが最も良いディスクは？',
          'Production VM အတွက် ဈေးနဲ့ ယုံကြည်စိတ်ချရမှု အမျှတဆုံး disk က ဘာလဲ?',
        ),
        options: ['Standard HDD', 'Standard SSD', 'Premium SSD', 'Ultra Disk'],
        correct: [2],
        explanation: L(
          'Premium SSD gives consistent performance and is required for the 99.9% single-VM SLA. Ultra Disk is for tier-1 databases.',
          'Premium SSD は安定した性能で、単一 VM 99.9% SLA の条件です。Ultra は最上位 DB 向け。',
          'Premium SSD က performance တည်ငြိမ်ပြီး VM ၁ လုံး SLA 99.9% အတွက် လိုတယ်။',
        ),
      },
      {
        difficulty: 'HARD',
        prompt: L(
          'With GRS, how is data copied to the secondary region?',
          'GRS ではセカンダリリージョンへどのようにコピーされますか？',
          'GRS မှာ secondary region ဆီ data ကို ဘယ်လို copy ကူးလဲ?',
        ),
        options: ['Synchronously, zero data loss', 'Asynchronously', 'Only once per day', 'Only after a manual failover'],
        correct: [1],
        explanation: L(
          'GRS replicates asynchronously, so the most recent writes can be missing after a regional outage.',
          'GRS は非同期レプリケーションのため、障害時に直近の書き込みが失われる可能性があります。',
          'GRS က async copy လို့ region ပျက်ရင် နောက်ဆုံး data နည်းနည်း မရောက်သေးတာ ဖြစ်နိုင်တယ်။',
        ),
      },
    ],
    flashcards: [
      { term: 'LRS', definition: L('Three copies inside one datacenter. Cheapest.', '1 つのデータセンター内に 3 コピー。最安。', 'Datacenter တစ်ခုထဲ copy ၃ ခု။ အသက်သာဆုံး။') },
      { term: 'ZRS', definition: L('Copies spread across three availability zones.', '3 つの可用性ゾーンに分散コピー。', 'Zone ၃ ခုမှာ copy ခွဲသိမ်း။') },
      { term: 'GRS', definition: L('Three local copies plus three in the paired region (async).', 'ローカル 3 コピー＋ペアリージョンに 3 コピー（非同期）。', 'Local ၃ ခု + paired region ၃ ခု (async)။') },
      { term: 'Host Caching', definition: L('Disk cache on the VM host: None, ReadOnly or ReadWrite.', 'VM ホスト上のディスクキャッシュ: None / ReadOnly / ReadWrite。', 'Host ပေါ်က disk cache — None / ReadOnly / ReadWrite။') },
      { term: 'Snapshot', definition: L('Point-in-time copy of a managed disk. No downtime.', 'マネージドディスクの特定時点のコピー。停止不要。', 'Disk ရဲ့ အဲဒီအချိန်က copy။ VM မရပ်ဘဲ ယူရ။') },
      { term: 'Azure Backup', definition: L('Scheduled backups to a Recovery Services vault with restore points.', 'Recovery Services コンテナーへの定期バックアップ。', 'Recovery Services vault ထဲ အချိန်ဇယားနဲ့ backup။') },
    ],
  },
  {
    slug: 'azure-identity',
    icon: 'ShieldCheck',
    name: L('Identity & Security', 'ID とセキュリティ', 'Identity နဲ့ Security'),
    description: L(
      'Entra ID, RBAC, managed identities, Key Vault, JIT and Defender.',
      'Entra ID、RBAC、マネージド ID、Key Vault、JIT、Defender。',
      'Entra ID၊ RBAC၊ Managed Identity၊ Key Vault၊ JIT နဲ့ Defender။',
    ),
    questions: [
      {
        difficulty: 'EASY',
        prompt: L(
          'What is the new name of Azure Active Directory?',
          'Azure Active Directory の新しい名前は？',
          'Azure Active Directory ရဲ့ နာမည်အသစ်က ဘာလဲ?',
        ),
        options: ['Azure Identity Hub', 'Microsoft Entra ID', 'Azure Directory Services', 'Microsoft Defender ID'],
        correct: [1],
        explanation: L('Azure AD was renamed to Microsoft Entra ID.', 'Azure AD は Microsoft Entra ID に名称変更されました。', 'Azure AD ကို Microsoft Entra ID လို့ နာမည်ပြောင်းခဲ့တယ်။'),
      },
      {
        difficulty: 'MEDIUM',
        prompt: L(
          'An app on a VM must read secrets from Key Vault without storing any password. What should you use?',
          'VM 上のアプリがパスワードを保存せずに Key Vault のシークレットを読む方法は？',
          'VM ပေါ်က app က password မသိမ်းဘဲ Key Vault ကို ဖတ်ချင်ရင် ဘာသုံးမလဲ?',
        ),
        options: ['Shared access signature', 'Managed identity', 'SSH key', 'Storage account key'],
        correct: [1],
        explanation: L(
          'A managed identity gives the VM its own Entra ID identity, so no secrets are stored in code or config.',
          'マネージド ID は VM に独自の ID を与えるため、コードや設定にシークレットを置く必要がありません。',
          'Managed Identity က VM ကို ကိုယ်ပိုင် identity ပေးလို့ code ထဲ secret မထည့်ရ။',
        ),
      },
      {
        difficulty: 'MEDIUM',
        prompt: L(
          'Which built-in role can create and manage resources but cannot grant access to others?',
          'リソースの作成・管理はできるが、他者へのアクセス付与はできない組み込みロールは？',
          'Resource ဆောက်/ပြင်လို့ရပေမယ့် တခြားသူကို access မပေးနိုင်တဲ့ role က ဘာလဲ?',
        ),
        options: ['Owner', 'Contributor', 'Reader', 'User Access Administrator'],
        correct: [1],
        explanation: L(
          'Contributor has full management rights except role assignments. Owner can also assign roles.',
          'Contributor はロール割り当て以外のすべてが可能です。Owner はロール付与も可能です。',
          'Contributor က role ပေးတာကလွဲရင် အကုန်လုပ်ရ။ Owner က role ပါ ပေးလို့ရတယ်။',
        ),
      },
      {
        difficulty: 'HARD',
        prompt: L(
          'Just-in-time (JIT) VM access is not visible in your portal. What is the most likely reason?',
          'ポータルに Just-in-time VM アクセスが表示されません。最も可能性が高い理由は？',
          'Portal မှာ JIT VM access ကို ရှာမတွေ့ရင် အဖြစ်နိုင်ဆုံး အကြောင်းရင်းက?',
        ),
        options: ['The VM has no public IP', 'Defender for Servers Plan 2 is not enabled', 'The VM uses Linux', 'The region does not support zones'],
        correct: [1],
        explanation: L(
          'JIT is part of Microsoft Defender for Cloud and requires Defender for Servers Plan 2 on the subscription.',
          'JIT は Defender for Cloud の機能で、Defender for Servers プラン 2 が必要です。',
          'JIT က Defender for Cloud ရဲ့ feature ဖြစ်ပြီး Defender for Servers Plan 2 လိုတယ်။',
        ),
      },
      {
        difficulty: 'EASY',
        prompt: L(
          'Where should you store database passwords and TLS certificates?',
          'DB パスワードや TLS 証明書を保管すべき場所は？',
          'DB password နဲ့ TLS certificate တွေကို ဘယ်မှာ သိမ်းသင့်လဲ?',
        ),
        options: ['In the Git repository', 'In VM environment variables', 'Azure Key Vault', 'In resource tags'],
        correct: [2],
        explanation: L(
          'Key Vault securely stores secrets, keys and certificates with access control and audit logs.',
          'Key Vault はアクセス制御と監査ログ付きでシークレット・キー・証明書を安全に保管します。',
          'Key Vault က access control နဲ့ audit log ပါပြီး secret၊ key၊ certificate ကို လုံခြုံစွာ သိမ်းတယ်။',
        ),
      },
    ],
    flashcards: [
      { term: 'Microsoft Entra ID', definition: L('Cloud identity directory (formerly Azure AD).', 'クラウドの ID ディレクトリ（旧 Azure AD）。', 'Cloud identity directory (Azure AD အဟောင်း)။') },
      { term: 'Azure RBAC', definition: L('Role-based access control; permissions are inherited downward.', 'ロールベースのアクセス制御。権限は下位へ継承。', 'Role အလိုက် ခွင့်ပြုချက်၊ အောက်ကို inherit။'), example: L('Owner · Contributor · Reader') },
      { term: 'Managed Identity', definition: L('Identity for an Azure resource to access other services without secrets.', 'シークレットなしで他サービスにアクセスするためのリソース ID。', 'Secret မပါဘဲ တခြား service ဆီ ဝင်ဖို့ resource identity။') },
      { term: 'Key Vault', definition: L('Secure store for secrets, keys and certificates.', 'シークレット・キー・証明書の安全な保管庫。', 'Secret၊ key၊ certificate သိမ်းတဲ့ safe။') },
      { term: 'Just-in-Time Access', definition: L('Opens management ports only for a limited time (Defender for Servers Plan 2).', '管理ポートを一定時間だけ開放（Defender for Servers P2）。', 'Port ကို လိုတဲ့အချိန်ပဲ ခဏဖွင့်။') },
      { term: 'Azure Policy', definition: L('Enforces rules on resources, e.g. allowed regions.', 'リソースにルールを強制（例: 許可リージョン）。', 'Resource တွေကို စည်းမျဉ်း အတင်းလိုက်နာစေ။') },
    ],
  },
  {
    slug: 'azure-operations',
    icon: 'Activity',
    name: L('Cost & Operations', 'コストと運用', 'Cost နဲ့ Operations'),
    description: L(
      'Cost management, pricing models, monitoring, updates and infrastructure as code.',
      'コスト管理、料金モデル、監視、更新、IaC。',
      'Cost management၊ pricing model၊ monitoring၊ update နဲ့ IaC။',
    ),
    questions: [
      {
        difficulty: 'EASY',
        prompt: L(
          'A budget in Cost Management reaches 100%. What happens?',
          'Cost Management の予算が 100% に達するとどうなりますか？',
          'Cost Management budget 100% ရောက်ရင် ဘာဖြစ်လဲ?',
        ),
        options: ['All resources are stopped', 'An alert is sent; resources keep running', 'The subscription is deleted', 'Billing pauses automatically'],
        correct: [1],
        explanation: L(
          'Budgets only send alerts (or trigger action groups). They do not stop resources by themselves.',
          '予算はアラートを送るだけで、リソースを自動停止しません。',
          'Budget က alert ပို့ရုံပဲ၊ resource တွေကို အလိုလို မရပ်ဘူး။',
        ),
      },
      {
        difficulty: 'MEDIUM',
        prompt: L(
          'Which pricing option offers the biggest discount for interruptible batch jobs?',
          '中断可能なバッチ処理で最も割引が大きい料金オプションは？',
          'ရပ်သွားလည်း ကိစ္စမရှိတဲ့ batch job အတွက် ဈေးအလျှော့ဆုံး option က?',
        ),
        options: ['Pay-as-you-go', 'Reserved Instance', 'Spot VM', 'Azure Hybrid Benefit'],
        correct: [2],
        explanation: L(
          'Spot VMs use spare capacity at up to ~90% discount but can be evicted with a 30-second notice.',
          'Spot VM は余剰容量を大幅割引で使えますが、30 秒前通知で削除される場合があります。',
          'Spot VM က ဈေးအများကြီး လျှော့ပေမယ့် ၃၀ စက္ကန့် သတိပေးပြီး evict ခံရနိုင်တယ်။',
        ),
      },
      {
        difficulty: 'MEDIUM',
        prompt: L(
          'Which service schedules OS patches for many VMs in a maintenance window?',
          '多数の VM の OS パッチをメンテナンス時間帯にスケジュールするサービスは？',
          'VM အများကြီးရဲ့ OS patch ကို maintenance window နဲ့ schedule လုပ်တဲ့ service က?',
        ),
        options: ['Azure Monitor', 'Azure Update Manager', 'Azure Advisor', 'Azure Automation State Configuration'],
        correct: [1],
        explanation: L(
          'Azure Update Manager assesses and installs updates using maintenance configurations.',
          'Azure Update Manager はメンテナンス構成を使って更新を評価・適用します。',
          'Azure Update Manager က maintenance configuration နဲ့ patch စစ်/ထည့်ပေးတယ်။',
        ),
      },
      {
        difficulty: 'EASY',
        prompt: L(
          'Which layer do the Portal, Azure CLI and Terraform all go through?',
          'ポータル、Azure CLI、Terraform が共通して経由するレイヤーは？',
          'Portal၊ CLI၊ Terraform အကုန်လုံး ဖြတ်သွားရတဲ့ layer က ဘာလဲ?',
        ),
        options: ['Azure Resource Manager', 'Azure Front Door', 'Azure Arc', 'Azure Monitor'],
        correct: [0],
        explanation: L(
          'Azure Resource Manager (ARM) authenticates, checks RBAC and policy, then deploys resources.',
          'ARM が認証・RBAC・ポリシーを確認してからリソースをデプロイします。',
          'ARM က login၊ RBAC၊ policy စစ်ပြီးမှ resource ဆောက်တယ်။',
        ),
      },
      {
        difficulty: 'HARD',
        prompt: L(
          'Which practices reduce lab cost? (Select all that apply)',
          'ラボのコスト削減に役立つものをすべて選んでください。',
          'Lab ငွေကုန်သက်သာစေတာတွေ အကုန်ရွေးပါ။',
        ),
        options: ['Enable auto-shutdown', 'Delete the resource group after the lab', 'Enable DDoS Network Protection', 'Use B-series VMs with Standard SSD'],
        correct: [0, 1, 3],
        explanation: L(
          'DDoS Network Protection is an expensive paid plan and is not needed for a lab.',
          'DDoS Network Protection は高額な有料プランで、ラボには不要です。',
          'DDoS Network Protection က ဈေးအရမ်းကြီးလို့ lab မှာ မလိုဘူး။',
        ),
      },
    ],
    flashcards: [
      { term: 'Cost Management Budget', definition: L('Sends alerts at spending thresholds. Does not stop resources.', '支出のしきい値でアラート。リソースは停止しない。', 'သတ်မှတ်ငွေရောက်ရင် alert။ Resource မရပ်။') },
      { term: 'Spot VM', definition: L('Spare capacity at a large discount; may be evicted.', '余剰容量を大幅割引で利用。削除される可能性あり。', 'ဈေးပေါ ပေမယ့် evict ခံရနိုင်။') },
      { term: 'Reserved Instance', definition: L('1- or 3-year commitment for a big discount.', '1 年/3 年の予約で大幅割引。', '၁/၃ နှစ် ကတိနဲ့ ဈေးလျှော့။') },
      { term: 'Azure Monitor', definition: L('Metrics, logs and alerts for Azure resources.', 'Azure リソースのメトリック・ログ・アラート。', 'Metric၊ log၊ alert platform။') },
      { term: 'Azure Update Manager', definition: L('Assesses and schedules OS patches for VMs.', 'VM の OS パッチを評価・スケジュール。', 'VM patch စစ်ပြီး schedule ချ။') },
      { term: 'Bicep', definition: L('Azure-native infrastructure-as-code language.', 'Azure ネイティブの IaC 言語。', 'Azure ရဲ့ IaC language။') },
    ],
  },
];
