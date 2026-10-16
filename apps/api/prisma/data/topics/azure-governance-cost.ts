import { L, type SeedTopic } from '../types.js';

export const topic: SeedTopic = {
  slug: 'azure-governance-cost',
  icon: 'Wallet',
  level: 'FOUNDATIONAL',
  exams: ['AZ-900', 'AZ-104'],
  name: L("Cost Management & Governance", "コスト管理とガバナンス", "Cost စီမံခန့်ခွဲမှုနဲ့ Governance"),
  description: L(
    "What drives Azure cost and how to estimate, track and cut it, plus the governance toolbox: tags, Azure Policy, resource locks, management groups, Microsoft Purview, Service Trust Portal and SLAs.",
    "Azure のコストを左右する要因と、その見積もり・追跡・削減方法、そしてガバナンスのツール（タグ、Azure Policy、リソースロック、管理グループ、Microsoft Purview、Service Trust Portal、SLA）を学びます。",
    "Azure cost ကို ဘာတွေက သက်ရောက်လဲ၊ ဘယ်လို ခန့်မှန်း၊ စောင့်ကြည့်၊ လျှော့ချမလဲ၊ ပြီးတော့ governance tool တွေ (tag၊ Azure Policy၊ resource lock၊ management group၊ Microsoft Purview၊ Service Trust Portal၊ SLA) ကို လေ့လာမယ်။",
  ),
  lesson: {
    minutes: 20,
    objectives: [
      L("List the factors that affect Azure cost and choose between the Pricing Calculator and the TCO Calculator.",
        "Azure のコストに影響する要因を挙げ、料金計算ツールと TCO 計算ツールを使い分けられる。",
        "Azure cost ကို သက်ရောက်တဲ့ အချက်တွေကို ပြောနိုင်ပြီး Pricing Calculator နဲ့ TCO Calculator ကို ခွဲသုံးနိုင်မယ်။"),
      L("Track spending with Cost Management cost analysis, budgets and alerts, and reduce it with reservations, savings plans, Spot VMs and Azure Hybrid Benefit.",
        "Cost Management のコスト分析・予算・アラートで支出を追跡し、予約・節約プラン・Spot VM・Azure ハイブリッド特典で削減できる。",
        "Cost Management ရဲ့ cost analysis၊ budget၊ alert တွေနဲ့ အသုံးစရိတ်ကို စောင့်ကြည့်ပြီး reservation၊ savings plan၊ Spot VM၊ Azure Hybrid Benefit နဲ့ လျှော့ချနိုင်မယ်။"),
      L("Use tags correctly, knowing that they are not inherited automatically.",
        "タグが自動的に継承されないことを理解した上で、正しく使える。",
        "Tag တွေ အလိုအလျောက် inherit မဖြစ်ဘူးဆိုတာ သိပြီး မှန်မှန်ကန်ကန် သုံးနိုင်မယ်။"),
      L("Design Azure Policy definitions, initiatives and effects, and apply them at the right scope.",
        "Azure Policy の定義・イニシアチブ・効果を設計し、適切なスコープに割り当てられる。",
        "Azure Policy definition၊ initiative၊ effect တွေကို ဒီဇိုင်းဆွဲပြီး မှန်ကန်တဲ့ scope မှာ assign လုပ်နိုင်မယ်။"),
      L("Protect resources with CanNotDelete and ReadOnly locks and explain how locks differ from RBAC.",
        "CanNotDelete と ReadOnly ロックでリソースを保護し、ロックと RBAC の違いを説明できる。",
        "CanNotDelete နဲ့ ReadOnly lock တွေနဲ့ resource ကို ကာကွယ်နိုင်ပြီး lock နဲ့ RBAC ကွာခြားချက်ကို ရှင်းပြနိုင်မယ်။"),
      L("Calculate a composite SLA and know where to find compliance information (Service Trust Portal, Microsoft Purview).",
        "複合 SLA を計算でき、コンプライアンス情報の入手先（Service Trust Portal、Microsoft Purview）を把握している。",
        "Composite SLA ကို တွက်နိုင်ပြီး compliance information ကို ဘယ်မှာရှာရမလဲ (Service Trust Portal၊ Microsoft Purview) သိမယ်။"),
    ],
    sections: [
      {
        id: "cost-factors",
        title: L("What drives your Azure bill", "Azure の請求額を左右する要因", "Azure bill ကို ဘာတွေက ဆုံးဖြတ်လဲ"),
        blocks: [
          { type: 'p', text: L(
            "Think of your Azure bill like an electricity bill: you pay for **what** you switch on, **how long** it runs and **where** you live. A large VM left running all weekend costs money even if nobody uses it. Understanding the cost factors is the first step to controlling spend.",
            "Azure の請求は電気代に似ています。**何を**つけたか、**どれだけ長く**動かしたか、**どこに**住んでいるかで支払いが決まります。週末中つけっぱなしの大きな VM は、誰も使っていなくても費用がかかります。コスト要因を理解することが支出管理の第一歩です。",
            "Azure bill ကို မီးဖိုးနဲ့ နှိုင်းကြည့်ပါ- **ဘာ** ဖွင့်ထားလဲ၊ **ဘယ်လောက်ကြာ** run လဲ၊ **ဘယ်မှာ** နေလဲ ဆိုတာအပေါ် မူတည်ပြီး ပေးရတယ်။ စနေ၊ တနင်္ဂနွေ တစ်ပတ်လုံး ဖွင့်ထားတဲ့ VM ကြီးက ဘယ်သူမှ မသုံးလည်း ပိုက်ဆံကုန်တယ်။ Cost factor တွေကို နားလည်တာက spend ကို ထိန်းဖို့ ပထမခြေလှမ်းပါ။"
          ) },
          { type: 'list', items: [
            L("**Resource type and size**: a GPU VM costs far more than a small B-series VM; Premium SSD costs more than Standard HDD.",
              "**リソースの種類とサイズ**：GPU VM は小さな B シリーズ VM よりはるかに高く、Premium SSD は Standard HDD より高価です。",
              "**Resource type နဲ့ size**: GPU VM က B-series VM သေးသေးထက် အများကြီး ဈေးကြီးတယ်၊ Premium SSD က Standard HDD ထက် ဈေးကြီးတယ်။"),
            L("**Consumption**: hours running, transactions, storage capacity. Stopped (deallocated) VMs stop compute charges, but their disks are still billed.",
              "**使用量**：稼働時間、トランザクション数、ストレージ容量。停止（割り当て解除）した VM はコンピューティング料金が止まりますが、ディスクは引き続き課金されます。",
              "**Consumption**: run တဲ့နာရီ၊ transaction၊ storage ပမာဏ။ Stop (deallocate) လုပ်ထားတဲ့ VM က compute charge ရပ်ပေမယ့် disk အတွက်တော့ ဆက်ပေးရတယ်။"),
            L("**Maintenance**: forgotten resources (orphaned disks, unused public IPs, old snapshots) keep costing money. Clean up regularly.",
              "**メンテナンス**：放置されたリソース（孤立ディスク、未使用のパブリック IP、古いスナップショット）は課金され続けます。定期的に整理しましょう。",
              "**Maintenance**: မေ့ထားတဲ့ resource တွေ (orphaned disk၊ မသုံးတဲ့ public IP၊ snapshot အဟောင်း) က ငွေဆက်ကုန်နေတယ်။ ပုံမှန် ရှင်းပါ။"),
            L("**Geography**: the same service can cost different amounts in different regions, because of local power, labour and tax costs.",
              "**地域**：同じサービスでもリージョンによって料金が異なります。電力・人件費・税金などが地域ごとに違うためです。",
              "**Geography**: service တူတူပဲ region မတူရင် ဈေးကွာနိုင်တယ်၊ ဒေသအလိုက် လျှပ်စစ်၊ လုပ်အား၊ အခွန် စရိတ် မတူလို့ပါ။"),
            L("**Network traffic (bandwidth)**: data coming **into** Azure (ingress) is generally free; data going **out** (egress) and data between regions is generally charged.",
              "**ネットワークトラフィック（帯域幅）**：Azure **へ入る**データ（イングレス）は一般に無料、Azure **から出る**データ（エグレス）やリージョン間のデータは一般に有料です。",
              "**Network traffic (bandwidth)**: Azure **ထဲဝင်** တဲ့ data (ingress) က ယေဘုယျအားဖြင့် အခမဲ့၊ **အပြင်ထွက်** တဲ့ data (egress) နဲ့ region အချင်းချင်းကြား data ကတော့ ယေဘုယျအားဖြင့် ငွေကျတယ်။"),
            L("**Subscription type and Marketplace**: a free account or dev/test subscription has different rates or credits; third-party Marketplace products add the vendor's own charges.",
              "**サブスクリプションの種類と Marketplace**：無料アカウントや Dev/Test サブスクリプションは料金やクレジットが異なり、Marketplace のサードパーティ製品はベンダー独自の料金が加わります。",
              "**Subscription type နဲ့ Marketplace**: free account (သို့) dev/test subscription မှာ rate/credit မတူဘူး၊ Marketplace က third-party product တွေမှာ vendor ရဲ့ ကိုယ်ပိုင် charge ထပ်ပေါင်းတယ်။"),
          ] },
          { type: 'callout', tone: 'exam', text: L(
            "Remember the direction of traffic: **inbound (ingress) data transfer is generally free, outbound (egress) is charged**. Also: a VM that is merely **stopped from inside the OS** keeps its compute allocation and can still be billed; you must **stop (deallocate)** it in Azure to stop compute charges.",
            "トラフィックの向きを覚えましょう：**受信（イングレス）は一般に無料、送信（エグレス）は有料**です。また、**OS 内からシャットダウンしただけ**の VM はコンピューティングが割り当てられたままで課金される場合があります。コンピューティング料金を止めるには Azure で**停止（割り当て解除）**する必要があります。",
            "Traffic ဦးတည်ရာကို မှတ်ပါ- **inbound (ingress) data transfer က ယေဘုယျအားဖြင့် အခမဲ့၊ outbound (egress) က ငွေကျ**တယ်။ ထို့အပြင် **OS ထဲကနေ shutdown လုပ်ရုံ** ဆိုရင် VM က compute allocation ကို ဆက်ယူထားပြီး ငွေဆက်ကျနိုင်တယ်၊ compute charge ရပ်ချင်ရင် Azure ဘက်ကနေ **stop (deallocate)** လုပ်ရမယ်။"
          ) },
        ],
      },
      {
        id: "estimating-costs",
        title: L("Estimating costs: Pricing Calculator vs TCO Calculator", "コストの見積もり：料金計算ツールと TCO 計算ツール", "Cost ခန့်မှန်းခြင်း- Pricing Calculator နဲ့ TCO Calculator"),
        blocks: [
          { type: 'p', text: L(
            "Microsoft gives two free web calculators. They answer different questions, and the exam checks that you know which is which.",
            "Microsoft は 2 つの無料 Web 計算ツールを提供しています。それぞれ答える質問が異なり、試験ではどちらを使うべきかが問われます。",
            "Microsoft က အခမဲ့ web calculator ၂ ခု ပေးထားတယ်။ မေးခွန်းမတူတာကို ဖြေပေးတာဖြစ်ပြီး ဘယ်ဟာက ဘာအတွက်လဲ exam မှာ စစ်တယ်။"
          ) },
          { type: 'table',
            head: [L("Aspect", "項目", "အချက်"), L("Pricing Calculator", "料金計算ツール（Pricing Calculator）", "Pricing Calculator (ဈေးနှုန်းတွက်စက်)"), L("TCO Calculator", "TCO 計算ツール（TCO Calculator）", "TCO Calculator (စုစုပေါင်းကုန်ကျစရိတ်တွက်စက်)")],
            rows: [
              [L("Question it answers", "答える質問", "ဖြေပေးတဲ့ မေးခွန်း"), L("How much will these Azure services cost per month?", "これらの Azure サービスは月にいくらかかるか？", "ဒီ Azure service တွေ တစ်လ ဘယ်လောက်ကျမလဲ?"), L("How much will I save by moving from on-premises to Azure?", "オンプレミスから Azure に移行するといくら節約できるか？", "On-premises ကနေ Azure ပြောင်းရင် ဘယ်လောက် သက်သာမလဲ?")],
              [L("Input", "入力", "ထည့်ရတာ"), L("Azure services, region, tier, hours, quantity", "Azure サービス、リージョン、レベル、時間、数量", "Azure service၊ region၊ tier၊ နာရီ၊ အရေအတွက်"), L("Current servers, databases, storage, networking, plus assumptions like power and IT labour", "現在のサーバー、DB、ストレージ、ネットワーク、および電力や IT 人件費などの前提", "လက်ရှိ server၊ database၊ storage၊ networking နဲ့ လျှပ်စစ်၊ IT လုပ်အားခ စတဲ့ assumption")],
              [L("Output", "出力", "ရလဒ်"), L("Estimated monthly cost of a new solution", "新しいソリューションの月額見積もり", "Solution အသစ်ရဲ့ ခန့်မှန်း လစဉ်ကုန်ကျစရိတ်"), L("Multi-year cost comparison report (on-prem vs Azure)", "数年間のコスト比較レポート（オンプレミス対 Azure）", "နှစ်အများအတွက် cost နှိုင်းယှဉ် report (on-prem vs Azure)")],
              [L("Typical user", "主な利用者", "အဓိကသုံးသူ"), L("Architect designing a new workload", "新しいワークロードを設計するアーキテクト", "Workload အသစ် ဒီဇိုင်းဆွဲနေတဲ့ architect"), L("Manager building a business case for migration", "移行のビジネスケースを作るマネージャー", "Migration အတွက် business case ရေးနေတဲ့ manager")],
            ] },
          { type: 'callout', tone: 'memory', text: L(
            "**TCO = “The Comparison with On-prem”.** If the question mentions your current datacenter, power or IT staff costs, it is TCO. If it only lists Azure services, it is the Pricing Calculator.",
            "**TCO＝「The Comparison with On-prem（オンプレミスとの比較）」**と覚えましょう。現在のデータセンター、電力、IT 要員のコストが出てきたら TCO、Azure サービスだけなら料金計算ツールです。",
            "**TCO = 「The Comparison with On-prem (on-prem နဲ့ နှိုင်းယှဉ်တာ)」** လို့ မှတ်ပါ။ မေးခွန်းမှာ လက်ရှိ datacenter၊ လျှပ်စစ်၊ IT ဝန်ထမ်းစရိတ် ပါရင် TCO၊ Azure service တွေပဲ ပါရင် Pricing Calculator ပါ။"
          ) },
        ],
      },
      {
        id: "cost-management",
        title: L("Tracking spend: Cost Management, budgets, alerts and Advisor", "支出の追跡：Cost Management・予算・アラート・Advisor", "Spend စောင့်ကြည့်ခြင်း- Cost Management၊ budget၊ alert နဲ့ Advisor"),
        blocks: [
          { type: 'p', text: L(
            "**Microsoft Cost Management + Billing** is built into the Azure portal. **Cost analysis** lets you slice actual and forecast spend by subscription, resource group, service, region or tag. **Budgets** set a spending target for a scope (management group, subscription, resource group) and trigger **alerts** when actual or forecast cost crosses thresholds such as 50%, 80% and 100%.",
            "**Microsoft Cost Management + Billing** は Azure portal に組み込まれています。**コスト分析**では、実績と予測の支出をサブスクリプション、Resource Group、サービス、リージョン、タグ別に分析できます。**予算**はスコープ（管理グループ、サブスクリプション、Resource Group）に支出目標を設定し、実績または予測コストが 50%・80%・100% などのしきい値を超えると**アラート**を送ります。",
            "**Microsoft Cost Management + Billing** က Azure portal ထဲမှာ ပါပြီးသားပါ။ **Cost analysis** နဲ့ လက်ရှိ spend နဲ့ forecast ကို subscription၊ resource group၊ service၊ region၊ tag အလိုက် ခွဲကြည့်နိုင်တယ်။ **Budget** က scope တစ်ခု (management group၊ subscription၊ resource group) အတွက် spend ပန်းတိုင် သတ်မှတ်ပြီး actual (သို့) forecast cost က 50%၊ 80%၊ 100% စတဲ့ threshold ကျော်ရင် **alert** ပို့ပေးတယ်။"
          ) },
          { type: 'list', items: [
            L("**Budget alerts**: email notifications, or an **action group** that can call automation (for example a runbook or Logic App that shuts down dev VMs).",
              "**予算アラート**：メール通知、または自動化（開発用 VM を停止する Runbook や Logic App など）を呼び出せる**アクショングループ**。",
              "**Budget alert**: email အသိပေးချက်၊ (သို့) automation ခေါ်လို့ရတဲ့ **action group** (ဥပမာ dev VM တွေကို ပိတ်ပေးတဲ့ runbook သို့ Logic App)။"),
            L("**Credit alerts**: notify when Azure credit (for example from an enterprise agreement) is being consumed.",
              "**クレジットアラート**：Azure クレジット（エンタープライズ契約など）の消費状況を通知します。",
              "**Credit alert**: Azure credit (ဥပမာ enterprise agreement က) ကုန်လာတာကို အသိပေးတယ်။"),
            L("**Department spending quota alerts**: notify when a department reaches a fixed spending quota (Enterprise Agreement).",
              "**部門支出クォータアラート**：部門が設定された支出上限に達したときに通知します（エンタープライズ契約）。",
              "**Department spending quota alert**: department တစ်ခုက သတ်မှတ်ထားတဲ့ spend quota ကို ရောက်ရင် အသိပေးတယ် (Enterprise Agreement)။"),
            L("**Azure Advisor (Cost)**: free, personalized recommendations such as resizing or shutting down under-used VMs, deleting idle resources and buying reservations. Advisor also covers Reliability, Security, Performance and Operational Excellence.",
              "**Azure Advisor（コスト）**：使用率の低い VM のサイズ変更や停止、アイドル状態のリソース削除、予約購入などの無料の個別推奨事項。Advisor は信頼性・セキュリティ・パフォーマンス・オペレーショナルエクセレンスも扱います。",
              "**Azure Advisor (Cost)**: သိပ်မသုံးတဲ့ VM ကို size လျှော့/ပိတ်ဖို့၊ idle resource ဖျက်ဖို့၊ reservation ဝယ်ဖို့ စတဲ့ အခမဲ့ personalized recommendation တွေ ပေးတယ်။ Advisor က Reliability၊ Security၊ Performance၊ Operational Excellence ကိုပါ ကြည့်ပေးတယ်။"),
          ] },
          { type: 'callout', tone: 'warn', text: L(
            "A budget **does not stop or delete resources by itself**. It only alerts. If you want automatic action, connect the budget alert to an action group that runs automation.",
            "予算は**それ自体でリソースを停止・削除しません**。アラートを送るだけです。自動的に対処したい場合は、予算アラートを自動化を実行するアクショングループに接続します。",
            "Budget က **resource တွေကို ကိုယ်တိုင် မရပ်၊ မဖျက်ဘူး**။ Alert ပဲ ပို့တယ်။ အလိုအလျောက် လုပ်ချင်ရင် budget alert ကို automation run တဲ့ action group နဲ့ ချိတ်ရမယ်။"
          ) },
          { type: 'callout', tone: 'exam', text: L(
            "“Be notified when spending reaches X” → **budget + alert** in Cost Management. “Recommendations to reduce cost” → **Azure Advisor**. “Estimate before deploying” → **Pricing Calculator**. Don't pick Azure Policy for spending notifications: Policy controls resource configuration, not money.",
            "「支出が X に達したら通知」→ Cost Management の**予算＋アラート**。「コスト削減の推奨事項」→ **Azure Advisor**。「デプロイ前の見積もり」→ **料金計算ツール**。支出通知に Azure Policy を選ばないこと：Policy はリソースの構成を制御するもので、お金ではありません。",
            "「Spend က X ရောက်ရင် အသိပေး」 → Cost Management က **budget + alert**။ 「Cost လျှော့ဖို့ recommendation」 → **Azure Advisor**။ 「Deploy မလုပ်ခင် ခန့်မှန်း」 → **Pricing Calculator**။ Spend အသိပေးဖို့ Azure Policy ကို မရွေးပါနဲ့- Policy က resource configuration ကို ထိန်းတာ၊ ပိုက်ဆံကို မဟုတ်ဘူး။"
          ) },
        ],
      },
      {
        id: "saving-money",
        title: L("Paying less: reservations, savings plan, Spot, Hybrid Benefit, Dev/Test", "コスト削減：予約・節約プラン・Spot・ハイブリッド特典・Dev/Test", "ငွေသက်သာအောင်- reservation၊ savings plan၊ Spot၊ Hybrid Benefit၊ Dev/Test"),
        blocks: [
          { type: 'p', text: L(
            "Pay-as-you-go is like paying the full train fare every day. If you ride every day, a commuter pass (reservation) is cheaper. If you can wait for a cheap last-minute seat that might be cancelled, that is Spot. Pick the option that matches how predictable and how interruptible the workload is.",
            "従量課金は毎日電車の正規運賃を払うようなものです。毎日乗るなら定期券（予約）の方が安くなります。キャンセルされるかもしれない格安の直前席で良いなら、それが Spot です。ワークロードの予測しやすさと中断の許容度に合わせて選びましょう。",
            "Pay-as-you-go ဆိုတာ နေ့တိုင်း ရထားခ အပြည့်ပေးတာနဲ့ တူတယ်။ နေ့တိုင်းစီးရင် လစဉ်လက်မှတ် (reservation) က ပိုသက်သာတယ်။ ပယ်ဖျက်ခံရနိုင်တဲ့ နောက်ဆုံးမိနစ် ဈေးပေါထိုင်ခုံကို လက်ခံနိုင်ရင် အဲဒါ Spot ပါ။ Workload က ဘယ်လောက် ကြိုခန့်မှန်းနိုင်လဲ၊ ရပ်တန့်ခံနိုင်လဲ အပေါ်မူတည်ပြီး ရွေးပါ။"
          ) },
          { type: 'table',
            head: [L("Option", "オプション", "ရွေးချယ်စရာ"), L("How it works", "仕組み", "ဘယ်လိုအလုပ်လုပ်လဲ"), L("Best for", "最適な用途", "အသင့်တော်ဆုံး")],
            rows: [
              [L("Azure Reservations", "Azure Reservations（予約）", "Azure Reservations (ကြိုတင်ဝယ်ယူမှု)"), L("Commit to a specific resource type/size and region for 1 or 3 years; Microsoft advertises savings of up to about 72% vs pay-as-you-go", "特定のリソース種類・サイズ・リージョンを 1 年または 3 年確約。従量課金比で最大約 72% の割引と案内されています", "Resource type/size နဲ့ region တစ်ခုကို ၁ နှစ် (သို့) ၃ နှစ် ကတိပြု၊ pay-as-you-go ထက် အများဆုံး ~72% ထိ သက်သာနိုင်တယ်လို့ Microsoft က ဖော်ပြတယ်"), L("Steady 24/7 workloads that won't change size", "サイズが変わらない 24 時間 365 日の安定ワークロード", "Size မပြောင်းတဲ့ 24/7 တည်ငြိမ် workload")],
              [L("Azure savings plan for compute", "Azure savings plan for compute（節約プラン）", "Azure savings plan for compute (ငွေချွေတာ plan)"), L("Commit to a fixed hourly spend on compute for 1 or 3 years; applies flexibly across VM sizes, regions and some services", "1 年または 3 年、コンピューティングに一定の時間単価支出を確約。VM サイズ・リージョン・一部サービスに柔軟に適用", "Compute အတွက် တစ်နာရီ spend ပမာဏကို ၁/၃ နှစ် ကတိပြု၊ VM size၊ region၊ service တချို့ကြား flexible ဖြစ်ဖြစ် apply လုပ်"), L("Steady spend, but sizes or regions change over time", "支出は安定しているが、サイズやリージョンが変わる", "Spend တည်ငြိမ်ပေမယ့် size/region ပြောင်းနိုင်တဲ့အခါ")],
              [L("Spot VMs", "Spot VM（スポット仮想マシン）", "Spot VM (အပိုကျန် capacity သုံး VM)"), L("Use spare capacity at a deep discount; Azure can evict the VM when it needs capacity back", "余剰容量を大幅割引で利用。Azure が容量を必要とすると VM が削除（エビクション）される", "အပိုကျန်တဲ့ capacity ကို ဈေးအရမ်းလျှော့ပြီးသုံး၊ Azure က capacity ပြန်လိုရင် VM ကို evict လုပ်နိုင်"), L("Interruptible batch jobs, rendering, dev/test", "中断可能なバッチ、レンダリング、開発/テスト", "ရပ်လို့ရတဲ့ batch job၊ rendering၊ dev/test")],
              [L("Azure Hybrid Benefit", "Azure ハイブリッド特典", "Azure Hybrid Benefit (license ပြန်သုံးခြင်း)"), L("Reuse existing Windows Server / SQL Server licenses with Software Assurance (or subscriptions) in Azure", "ソフトウェアアシュアランス付き（またはサブスクリプション）の既存 Windows Server / SQL Server ライセンスを Azure で再利用", "Software Assurance ပါတဲ့ (သို့ subscription) Windows Server / SQL Server license အဟောင်းကို Azure မှာ ပြန်သုံး"), L("Companies that already own Microsoft licenses", "Microsoft ライセンスを既に保有している企業", "Microsoft license ရှိပြီးသား company တွေ")],
              [L("Dev/Test pricing", "Dev/Test 価格", "Dev/Test pricing (စမ်းသပ်ရေး ဈေးနှုန်း)"), L("Discounted rates on Dev/Test subscriptions for Visual Studio subscribers; not for production", "Visual Studio サブスクライバー向け Dev/Test サブスクリプションの割引料金。本番利用は不可", "Visual Studio subscriber တွေအတွက် Dev/Test subscription မှာ လျှော့ဈေး၊ production အတွက် မရ"), L("Non-production environments", "非本番環境", "Production မဟုတ်တဲ့ environment")],
            ] },
          { type: 'callout', tone: 'memory', text: L(
            "**R-S-S-H: Reserve the steady, Save with flexibility, Spot the interruptible, Hybrid if you hold licenses.** Combine them: a reserved VM can also use Azure Hybrid Benefit.",
            "**R-S-S-H：安定なら Reserve（予約）、柔軟さなら Save（節約プラン）、中断可能なら Spot、ライセンス保有なら Hybrid**。組み合わせも可能で、予約 VM に Azure ハイブリッド特典を併用できます。",
            "**R-S-S-H: တည်ငြိမ်ရင် Reserve၊ flexible လိုရင် Save (savings plan)၊ ရပ်လို့ရရင် Spot၊ license ရှိရင် Hybrid** လို့ မှတ်ပါ။ ပေါင်းသုံးလို့လည်းရတယ်- reserved VM မှာ Azure Hybrid Benefit ကိုပါ သုံးနိုင်တယ်။"
          ) },
        ],
      },
      {
        id: "tags",
        title: L("Tags: labels for cost and organization", "タグ：コストと整理のためのラベル", "Tag- cost နဲ့ စီစဉ်ဖို့ label များ"),
        blocks: [
          { type: 'p', text: L(
            "A **tag** is a name/value pair such as `env=prod` or `costCenter=1234` attached to a subscription, resource group or resource. Tags do not change how a resource works; they are labels that let you filter Cost analysis, automate (“shut down every VM tagged `autoShutdown=true`”) and find owners. A resource supports up to **50** tag name/value pairs.",
            "**タグ**は `env=prod` や `costCenter=1234` のような名前と値のペアで、サブスクリプション、Resource Group、リソースに付けます。タグはリソースの動作を変えません。コスト分析の絞り込み、自動化（「`autoShutdown=true` タグの VM をすべて停止」）、所有者の特定に使うラベルです。1 つのリソースには最大 **50** 個の名前と値のペアを付けられます。",
            "**Tag** ဆိုတာ `env=prod`၊ `costCenter=1234` လို name/value pair ဖြစ်ပြီး subscription၊ resource group၊ resource မှာ တပ်လို့ရတယ်။ Tag က resource ရဲ့ အလုပ်လုပ်ပုံကို မပြောင်းဘူး၊ Cost analysis မှာ filter လုပ်ဖို့၊ automation (「`autoShutdown=true` tag ပါတဲ့ VM အကုန်ပိတ်」) လုပ်ဖို့၊ owner ရှာဖို့ သုံးတဲ့ label ပါ။ Resource တစ်ခုမှာ tag name/value pair **50** ခုထိ တပ်နိုင်တယ်။"
          ) },
          { type: 'callout', tone: 'warn', text: L(
            "**Tags are NOT inherited automatically.** A tag on a resource group or subscription is not copied to the resources inside. To get inheritance, use Azure Policy (for example the built-in “Inherit a tag from the resource group if missing” with the Modify effect). Cost Management also has a tag inheritance setting, but it only applies tags to **billing/usage data**, not to the resources themselves.",
            "**タグは自動的に継承されません。** Resource Group やサブスクリプションのタグは中のリソースにコピーされません。継承させるには Azure Policy（例：Modify 効果を持つ組み込みポリシー「Inherit a tag from the resource group if missing」）を使います。Cost Management にもタグ継承の設定がありますが、それは**課金・使用量データ**にタグを適用するだけで、リソース自体には付きません。",
            "**Tag တွေက အလိုအလျောက် inherit မဖြစ်ဘူး။** Resource group (သို့) subscription က tag ကို ထဲက resource တွေဆီ copy မကူးဘူး။ Inherit ဖြစ်စေချင်ရင် Azure Policy (ဥပမာ Modify effect ပါတဲ့ built-in 「Inherit a tag from the resource group if missing」) ကို သုံးရမယ်။ Cost Management မှာလည်း tag inheritance setting ရှိပေမယ့် **billing/usage data** ကိုပဲ tag တပ်ပေးတာ၊ resource ကိုယ်တိုင်ကို မတပ်ဘူး။"
          ) },
          { type: 'list', items: [
            L("Tag **names are case-insensitive** for operations, but tag **values are case-sensitive**. Agree on a naming standard (for example always lowercase `env`).",
              "タグの**名前は大文字小文字を区別しません**が、**値は区別します**。命名規則（例：常に小文字の `env`）を決めておきましょう。",
              "Tag **name** က စာလုံးအကြီးအသေး မခွဲဘူး၊ ဒါပေမယ့် tag **value** ကတော့ ခွဲတယ်။ Naming standard (ဥပမာ အမြဲ lowercase `env`) သတ်မှတ်ထားပါ။"),
            L("To **require** a tag on new resources, use a Policy with the **Deny** effect (“Require a tag on resources”). To **add** a missing tag, use **Modify**.",
              "新しいリソースにタグを**必須**にするには **Deny** 効果のポリシー（「Require a tag on resources」）、不足しているタグを**追加**するには **Modify** を使います。",
              "Resource အသစ်မှာ tag ကို **မဖြစ်မနေ** ထည့်ခိုင်းချင်ရင် **Deny** effect ပါတဲ့ Policy (「Require a tag on resources」)၊ မပါတဲ့ tag ကို **ထည့်ပေး** ချင်ရင် **Modify** ကို သုံးပါ။"),
          ] },
          { type: 'code', lang: 'bash', code:
`# Tag a resource group (replaces its tag set)
az group update --name rg-shop-prod --tags env=prod costCenter=1234

# Merge a tag onto an existing VM without removing its other tags
vmId=$(az vm show -g rg-shop-prod -n vm-web01 --query id -o tsv)
az tag update --resource-id $vmId --operation Merge --tags costCenter=1234

# Find resources by tag
az resource list --tag env=prod -o table`,
            caption: L("Azure CLI: adding and querying tags", "Azure CLI：タグの追加と検索", "Azure CLI- tag ထည့်ခြင်းနဲ့ ရှာခြင်း") },
          { type: 'callout', tone: 'exam', text: L(
            "If an answer choice says a resource \u201Cautomatically inherits\u201D its resource group's tags, it is **wrong**. Tags organize and report; they do not enforce anything. To enforce tagging, the answer is **Azure Policy**. Tags also do not create separate invoices: that is the job of **subscriptions**.",
            "選択肢に「リソースは Resource Group のタグを自動的に継承する」とあれば**誤り**です。タグは整理とレポートのためのもので、何も強制しません。タグ付けを強制するなら答えは **Azure Policy** です。また、タグで請求書は分かれません。それは**サブスクリプション**の役割です。",
            "အဖြေထဲမှာ resource က resource group ရဲ့ tag ကို 「အလိုအလျောက် inherit」 ဖြစ်တယ်လို့ ပါရင် **မှား** ပါတယ်။ Tag က စီစဉ်ဖို့နဲ့ report ဖို့ပဲ၊ ဘာမှ enforce မလုပ်ဘူး။ Tagging ကို enforce လုပ်ချင်ရင် အဖြေက **Azure Policy** ပါ။ Tag နဲ့ invoice လည်း မခွဲနိုင်ဘူး၊ အဲဒါ **subscription** ရဲ့ အလုပ်ပါ။"
          ) },
        ],
      },
      {
        id: "azure-policy",
        title: L("Azure Policy: guardrails that enforce your rules", "Azure Policy：ルールを強制するガードレール", "Azure Policy- စည်းမျဉ်းတွေကို enforce လုပ်တဲ့ guardrail"),
        blocks: [
          { type: 'p', text: L(
            "**RBAC** decides **who** can do something. **Azure Policy** decides **what** is allowed, regardless of who does it. Example: even an Owner should not be able to create a VM in Brazil if company rules say data must stay in Japan. Policy evaluates resources when they are created or changed, and also scans existing resources regularly to report compliance.",
            "**RBAC** は**誰が**操作できるかを決め、**Azure Policy** は誰が操作するかに関係なく**何が**許可されるかを決めます。例：会社の規則でデータを日本に置く必要があるなら、Owner であってもブラジルに VM を作成できるべきではありません。Policy はリソースの作成・変更時に評価され、既存のリソースも定期的にスキャンしてコンプライアンスを報告します。",
            "**RBAC** က **ဘယ်သူ** လုပ်ခွင့်ရှိလဲ ဆုံးဖြတ်တယ်။ **Azure Policy** ကတော့ ဘယ်သူလုပ်လုပ် **ဘာ** ကို ခွင့်ပြုလဲ ဆုံးဖြတ်တယ်။ ဥပမာ- company စည်းမျဉ်းအရ data ကို Japan မှာပဲ ထားရမယ်ဆိုရင် Owner တောင်မှ Brazil မှာ VM မဆောက်နိုင်သင့်ဘူး။ Policy က resource ဆောက်/ပြင်တဲ့အခါ စစ်ပြီး ရှိပြီးသား resource တွေကိုလည်း ပုံမှန် scan လုပ်ကာ compliance ကို report လုပ်တယ်။"
          ) },
          { type: 'list', items: [
            L("**Policy definition**: a single rule written in JSON (conditions + effect). Hundreds of built-in definitions exist, such as “Allowed locations” and “Allowed virtual machine size SKUs”.",
              "**ポリシー定義**：JSON で書かれた単一のルール（条件＋効果）。「Allowed locations」や「Allowed virtual machine size SKUs」など、数百の組み込み定義があります。",
              "**Policy definition**: JSON နဲ့ရေးထားတဲ့ စည်းမျဉ်းတစ်ခု (condition + effect)။ 「Allowed locations」၊ 「Allowed virtual machine size SKUs」 လို built-in definition ရာနဲ့ချီ ရှိတယ်။"),
            L("**Initiative (policy set definition)**: a group of definitions assigned together toward one goal, for example a regulatory compliance standard or “our company baseline”.",
              "**イニシアチブ（ポリシーセット定義）**：1 つの目標のためにまとめて割り当てる定義のグループ。例：規制コンプライアンス標準や「自社のベースライン」。",
              "**Initiative (policy set definition)**: ရည်မှန်းချက်တစ်ခုအတွက် definition တွေကို စုပြီး တစ်ခါတည်း assign လုပ်တာ၊ ဥပမာ regulatory compliance standard (သို့) 「ကိုယ့် company baseline」။"),
            L("**Assignment**: applying a definition or initiative to a **scope**: management group, subscription or resource group. Child scopes inherit it, and you can add **exclusions** (for example skip the sandbox resource group).",
              "**割り当て**：定義やイニシアチブを**スコープ**（管理グループ、サブスクリプション、Resource Group）に適用すること。子スコープに継承され、**除外**（例：サンドボックスの Resource Group を対象外にする）も設定できます。",
              "**Assignment**: definition (သို့) initiative ကို **scope** (management group၊ subscription၊ resource group) တစ်ခုမှာ apply လုပ်တာ။ Child scope တွေ inherit ဖြစ်ပြီး **exclusion** (ဥပမာ sandbox resource group ကို ချန်) ထည့်လို့ရတယ်။"),
          ] },
          { type: 'table',
            head: [L("Effect", "効果", "Effect (အကျိုးသက်ရောက်မှု)"), L("What it does", "動作", "ဘာလုပ်လဲ"), L("Example", "例", "ဥပမာ")],
            rows: [
              [L("Deny", "Deny（拒否）", "Deny (ငြင်းပယ်)"), L("Blocks the create/update request", "作成・更新リクエストをブロック", "Create/update request ကို ပိတ်ပင်"), L("Block VMs outside Japan East/West", "Japan East/West 以外の VM をブロック", "Japan East/West အပြင်က VM ကို ပိတ်")],
              [L("Audit", "Audit（監査）", "Audit (စစ်ဆေးမှတ်တမ်း)"), L("Allows it but marks it non-compliant", "許可するが非準拠として記録", "ခွင့်ပြုပေမယ့် non-compliant လို့ မှတ်"), L("Report storage accounts without HTTPS-only", "HTTPS のみが無効なストレージアカウントを報告", "HTTPS-only မဖွင့်ထားတဲ့ storage account ကို report")],
              [L("Append", "Append（追加）", "Append (ထပ်ဖြည့်)"), L("Adds extra fields to the request", "リクエストにフィールドを追加", "Request ထဲကို field ထပ်ထည့်"), L("Add an IP rule to a storage firewall", "ストレージのファイアウォールに IP ルールを追加", "Storage firewall မှာ IP rule ထည့်")],
              [L("Modify", "Modify（変更）", "Modify (ပြင်ဆင်)"), L("Adds, replaces or removes tags/properties; can remediate existing resources", "タグやプロパティを追加・置換・削除。既存リソースも修復可能", "Tag/property ကို ထည့်/အစားထိုး/ဖယ်၊ ရှိပြီးသား resource ကိုလည်း remediate လုပ်နိုင်"), L("Inherit `costCenter` from the resource group", "Resource Group から `costCenter` を継承", "Resource group ကနေ `costCenter` ကို inherit")],
              [L("DeployIfNotExists", "DeployIfNotExists（なければデプロイ）", "DeployIfNotExists (မရှိရင် deploy)"), L("Deploys a related resource if it is missing", "関連リソースがなければデプロイ", "ဆက်စပ် resource မရှိရင် deploy လုပ်"), L("Enable diagnostic settings on every VM", "すべての VM で診断設定を有効化", "VM တိုင်းမှာ diagnostic setting ဖွင့်")],
              [L("AuditIfNotExists", "AuditIfNotExists（なければ監査）", "AuditIfNotExists (မရှိရင် audit)"), L("Flags a resource if a related resource is missing", "関連リソースがなければ非準拠として報告", "ဆက်စပ် resource မရှိရင် non-compliant လို့ ပြ"), L("Report VMs without an antimalware extension", "マルウェア対策拡張機能のない VM を報告", "Antimalware extension မပါတဲ့ VM ကို report")],
              [L("Disabled", "Disabled（無効）", "Disabled (ပိတ်ထား)"), L("Turns the policy off without deleting it", "削除せずにポリシーを無効化", "Policy ကို မဖျက်ဘဲ ပိတ်ထား"), L("Temporarily pause a rule during migration", "移行中にルールを一時停止", "Migration အတွင်း rule ကို ခဏရပ်")],
            ] },
          { type: 'code', lang: 'bash', code:
`# Assign the built-in "Inherit a tag from the resource group if missing" policy
defId=$(az policy definition list \\
  --query "[?displayName=='Inherit a tag from the resource group if missing'].name" -o tsv)

az policy assignment create --name inherit-costcenter \\
  --policy $defId \\
  --scope /subscriptions/<sub-id>/resourceGroups/rg-shop-prod \\
  --params '{"tagName": {"value": "costCenter"}}' \\
  --mi-system-assigned --location japaneast \\
  --role "Tag Contributor" \\
  --identity-scope /subscriptions/<sub-id>/resourceGroups/rg-shop-prod

# Fix resources that already existed before the assignment
az policy remediation create --name fix-costcenter \\
  --policy-assignment inherit-costcenter --resource-group rg-shop-prod`,
            caption: L("Modify and DeployIfNotExists need a managed identity to change resources", "Modify と DeployIfNotExists がリソースを変更するにはマネージド ID が必要です", "Modify နဲ့ DeployIfNotExists က resource ကို ပြင်ဖို့ managed identity လိုတယ်") },
          { type: 'callout', tone: 'exam', text: L(
            "Key traps: (1) A new **Deny** policy does **not** delete existing non-compliant resources; they are only reported as non-compliant. (2) To fix existing resources you need a **remediation task** with **Modify** or **DeployIfNotExists**. (3) **Initiative** = group of policies. (4) Policy = “what”, RBAC = “who”.",
            "重要な引っかけ：(1) 新しい **Deny** ポリシーは既存の非準拠リソースを削除**しません**。非準拠として報告されるだけです。(2) 既存リソースを修正するには **Modify** または **DeployIfNotExists** の**修復タスク**が必要です。(3) **イニシアチブ**＝ポリシーのグループ。(4) Policy＝「何を」、RBAC＝「誰が」。",
            "အရေးကြီး ထောင်ချောက်တွေ- (၁) **Deny** policy အသစ်က ရှိပြီးသား non-compliant resource တွေကို **မဖျက်ဘူး**၊ non-compliant လို့ report ပဲလုပ်တယ်။ (၂) ရှိပြီးသား resource တွေကို ပြင်ချင်ရင် **Modify** (သို့) **DeployIfNotExists** နဲ့ **remediation task** လိုတယ်။ (၃) **Initiative** = policy အစု။ (၄) Policy = 「ဘာ」၊ RBAC = 「ဘယ်သူ」။"
          ) },
        ],
      },
      {
        id: "resource-locks",
        title: L("Resource locks: protection from accidents", "リソースロック：事故からの保護", "Resource lock- မတော်တဆမှုကနေ ကာကွယ်ခြင်း"),
        blocks: [
          { type: 'p', text: L(
            "RBAC answers “may this person delete?”, but sometimes the person **should** have rights and still must not delete by mistake, like an admin cleaning up resource groups late at night. A **resource lock** is a safety catch that blocks the action for **everyone, including Owners**, until the lock is removed.",
            "RBAC は「この人は削除できるか」に答えますが、権限を持つべき人でも誤って削除してはいけない場合があります。たとえば深夜に Resource Group を整理している管理者です。**リソースロック**は、ロックが外されるまで **Owner を含む全員**の操作をブロックする安全装置です。",
            "RBAC က 「ဒီလူ ဖျက်ခွင့်ရှိလား」 ကို ဖြေတယ်။ ဒါပေမယ့် တခါတလေ ခွင့်ရှိသင့်တဲ့သူကတောင် မတော်တဆ မဖျက်မိစေချင်ဘူး၊ ဥပမာ ညနက်ပိုင်း resource group တွေ ရှင်းနေတဲ့ admin။ **Resource lock** ဆိုတာ lock ကို မဖြုတ်မချင်း **Owner အပါအဝင် လူတိုင်း** ရဲ့ action ကို ပိတ်ပေးတဲ့ safety catch ပါ။"
          ) },
          { type: 'table',
            head: [L("Lock type", "ロックの種類", "Lock အမျိုးအစား"), L("Read", "読み取り", "ဖတ်ခြင်း (Read)"), L("Modify", "変更", "ပြင်ခြင်း (Modify)"), L("Delete", "削除", "ဖျက်ခြင်း (Delete)")],
            rows: [
              [L("CanNotDelete (“Delete” in the Portal)", "CanNotDelete（Portal では「削除」）", "CanNotDelete (Portal မှာ 「Delete」)"), L("Allowed", "可", "ရ"), L("Allowed", "可", "ရ"), L("Blocked", "不可", "မရ")],
              [L("ReadOnly (“Read-only” in the Portal)", "ReadOnly（Portal では「読み取り専用」）", "ReadOnly (Portal မှာ 「Read-only」)"), L("Allowed", "可", "ရ"), L("Blocked", "不可", "မရ"), L("Blocked", "不可", "မရ")],
            ] },
          { type: 'list', items: [
            L("Locks can be applied at subscription, resource group or resource level and are **inherited** by everything below. If several locks apply, the **most restrictive** one wins.",
              "ロックはサブスクリプション、Resource Group、リソースの各レベルに適用でき、下位のすべてに**継承**されます。複数のロックがある場合は**最も制限の厳しい**ものが優先されます。",
              "Lock ကို subscription၊ resource group၊ resource level တွေမှာ တပ်လို့ရပြီး အောက်က အရာအားလုံး **inherit** ဖြစ်တယ်။ Lock အများရှိရင် **အတင်းကျပ်ဆုံး** lock က အနိုင်ရတယ်။"),
            L("To delete a locked resource you must **remove the lock first**. Only users with `Microsoft.Authorization/locks/*` permission (for example Owner or User Access Administrator) can manage locks.",
              "ロックされたリソースを削除するには、**まずロックを外す**必要があります。ロックを管理できるのは `Microsoft.Authorization/locks/*` 権限を持つユーザー（例：Owner や User Access Administrator）だけです。",
              "Lock တပ်ထားတဲ့ resource ကို ဖျက်ချင်ရင် **lock ကို အရင်ဖြုတ်** ရမယ်။ `Microsoft.Authorization/locks/*` permission ရှိတဲ့ user (ဥပမာ Owner သို့ User Access Administrator) ပဲ lock ကို စီမံနိုင်တယ်။"),
            L("Locks protect the **management (control) plane**. ReadOnly can have side effects: for example it blocks listing storage account keys (a POST operation), which can break tools that need the keys.",
              "ロックが保護するのは**管理（コントロール）プレーン**です。ReadOnly には副作用があり、たとえばストレージアカウントのキー一覧取得（POST 操作）がブロックされ、キーを必要とするツールが動かなくなることがあります。",
              "Lock က **management (control) plane** ကို ကာကွယ်တာပါ။ ReadOnly မှာ ဘေးထွက်ဆိုးကျိုး ရှိနိုင်တယ်- ဥပမာ storage account key ကို list လုပ်တာ (POST operation) ကို ပိတ်လို့ key လိုတဲ့ tool တွေ အလုပ်မလုပ်တော့နိုင်ဘူး။"),
          ] },
          { type: 'code', lang: 'bash', code:
`# Protect a production resource group from deletion
az lock create --name lock-no-delete --lock-type CanNotDelete \\
  --resource-group rg-shop-prod --notes "Production - do not delete"

az lock list --resource-group rg-shop-prod -o table

# Must remove the lock before the group can be deleted
az lock delete --name lock-no-delete --resource-group rg-shop-prod`,
            caption: L("Azure CLI: create, list and remove a lock", "Azure CLI：ロックの作成・一覧・削除", "Azure CLI- lock ဆောက်၊ list လုပ်၊ ဖြုတ်") },
          { type: 'callout', tone: 'memory', text: L(
            "**“Locks beat Owners.”** RBAC is the key to the door; a lock is the chain on the door. Even with the key, you must take off the chain first.",
            "**「ロックは Owner に勝つ」**。RBAC はドアの鍵、ロックはドアチェーンです。鍵を持っていても、まずチェーンを外す必要があります。",
            "**「Lock က Owner ကို နိုင်တယ်」** လို့ မှတ်ပါ။ RBAC က တံခါးသော့၊ lock က တံခါးချိတ်ကြိုး။ သော့ရှိလည်း ချိတ်ကြိုးကို အရင်ဖြုတ်ရတယ်။"
          ) },
        ],
      },
      {
        id: "governance-at-scale",
        title: L("Governance at scale with management groups, plus a mini-lab", "管理グループによる大規模ガバナンスとミニラボ", "Management group နဲ့ scale ကြီး governance နဲ့ mini-lab"),
        blocks: [
          { type: 'p', text: L(
            "In a real company you rarely govern one subscription. You place subscriptions under **management groups** and assign policies and RBAC at the highest sensible level, so every current and future subscription inherits the same guardrails. Then you add more specific rules lower in the tree.",
            "実際の企業では、1 つのサブスクリプションだけを管理することはまれです。サブスクリプションを**管理グループ**の下に置き、適切な最上位レベルでポリシーと RBAC を割り当てることで、現在と将来のすべてのサブスクリプションが同じガードレールを継承します。その後、階層の下位でより具体的なルールを追加します。",
            "လက်တွေ့ company မှာ subscription တစ်ခုတည်းကို govern လုပ်တာ ရှားတယ်။ Subscription တွေကို **management group** အောက်ထည့်ပြီး သင့်တော်တဲ့ အမြင့်ဆုံး level မှာ policy နဲ့ RBAC ကို assign လုပ်လို့ လက်ရှိနဲ့ နောင်လာမယ့် subscription အားလုံး guardrail တူတူကို inherit ဖြစ်တယ်။ ပြီးမှ tree ရဲ့ အောက်ပိုင်းမှာ ပိုတိကျတဲ့ rule တွေ ထပ်ထည့်တယ်။"
          ) },
          { type: 'diagram', text:
`Root MG ......... Policy: Allowed locations = Japan East/West
 |
 +-- MG: Production .. Initiative: company baseline (deny/audit)
 |    |                Policy: Require tag costCenter (deny)
 |    +-- Sub: Prod-Web ... Lock: CanNotDelete on rg-web-prod
 |    +-- Sub: Prod-Data
 |
 +-- MG: Sandbox ..... Budget + alert per subscription
      +-- Sub: Sandbox-01   (Spot VMs, auto-shutdown)`,
            caption: L("Broad rules high in the tree, specific rules lower down", "広いルールは上位に、具体的なルールは下位に", "ကျယ်ပြန့်တဲ့ rule ကို အပေါ်မှာ၊ တိကျတဲ့ rule ကို အောက်မှာ") },
          { type: 'steps', items: [
            L("In the Portal, open **Policy > Definitions**, search for **Allowed locations**, and select **Assign**.",
              "Portal で **Policy > 定義**を開き、**Allowed locations** を検索して**割り当て**を選びます。",
              "Portal မှာ **Policy > Definitions** ကိုဖွင့်ပြီး **Allowed locations** ကို ရှာကာ **Assign** ကို ရွေးပါ။"),
            L("Set the **scope** to your test resource group, and in **Parameters** choose only **Japan East** and **Japan West**. Create the assignment.",
              "**スコープ**をテスト用 Resource Group に設定し、**パラメーター**で **Japan East** と **Japan West** のみを選んで割り当てを作成します。",
              "**Scope** ကို test resource group အဖြစ် သတ်မှတ်ပြီး **Parameters** မှာ **Japan East** နဲ့ **Japan West** ကိုပဲ ရွေးကာ assignment ကို ဆောက်ပါ။"),
            L("After a few minutes, try to create a storage account in **East US** in that group. The deployment fails with a **RequestDisallowedByPolicy** error.",
              "数分後、そのグループの **East US** にストレージアカウントを作成してみます。**RequestDisallowedByPolicy** エラーでデプロイが失敗します。",
              "မိနစ်အနည်းငယ်ကြာရင် အဲဒီ group မှာ **East US** region နဲ့ storage account ဆောက်ကြည့်ပါ။ **RequestDisallowedByPolicy** error နဲ့ deployment fail ဖြစ်မယ်။"),
            L("Add a **CanNotDelete** lock to the group (**Settings > Locks**), then try to delete the group and observe the error. Remove the lock afterwards.",
              "グループに **CanNotDelete** ロックを追加（**設定 > ロック**）し、グループを削除しようとしてエラーを確認します。最後にロックを外します。",
              "Group မှာ **CanNotDelete** lock (**Settings > Locks**) ထည့်ပြီး group ကို ဖျက်ကြည့်ကာ error ကို ကြည့်ပါ။ ပြီးရင် lock ကို ပြန်ဖြုတ်ပါ။"),
            L("Open **Cost Management > Budgets**, create a monthly budget for the group with alerts at 80% and 100% to your email.",
              "**Cost Management > 予算**を開き、グループの月次予算を作成して 80% と 100% でメールにアラートが届くよう設定します。",
              "**Cost Management > Budgets** ကိုဖွင့်ပြီး group အတွက် လစဉ် budget ဆောက်ကာ 80% နဲ့ 100% မှာ ကိုယ့် email ကို alert ပို့အောင် သတ်မှတ်ပါ။"),
            L("Clean up: delete the policy assignment and the resource group so nothing keeps costing money.",
              "後片付け：ポリシー割り当てと Resource Group を削除し、課金が続かないようにします。",
              "ရှင်းလင်းခြင်း- policy assignment နဲ့ resource group ကို ဖျက်ပြီး ငွေဆက်မကုန်အောင် လုပ်ပါ။"),
          ] },
          { type: 'callout', tone: 'tip', text: L(
            "Azure Blueprints has been retired. For repeatable, governed environments today, combine management groups, Azure Policy initiatives, RBAC and infrastructure as code (Bicep, Template Specs, Deployment Stacks).",
            "Azure Blueprints は廃止されました。現在、統制された環境を再現性高く作るには、管理グループ、Azure Policy のイニシアチブ、RBAC、Infrastructure as Code（Bicep、Template Specs、Deployment Stacks）を組み合わせます。",
            "Azure Blueprints ကို retire လုပ်လိုက်ပြီ။ အခုချိန်မှာ ထပ်ခါထပ်ခါ ဆောက်လို့ရပြီး govern လုပ်ထားတဲ့ environment အတွက် management group၊ Azure Policy initiative၊ RBAC နဲ့ infrastructure as code (Bicep၊ Template Specs၊ Deployment Stacks) ကို ပေါင်းသုံးပါ။"
          ) },
        ],
      },
      {
        id: "compliance-and-sla",
        title: L("Compliance, Microsoft Purview, Service Trust Portal and SLAs", "コンプライアンス・Microsoft Purview・Service Trust Portal・SLA", "Compliance၊ Microsoft Purview၊ Service Trust Portal နဲ့ SLA"),
        blocks: [
          { type: 'list', items: [
            L("**Microsoft Purview**: a family of data governance, risk and compliance solutions. It can scan and classify data across Azure, on-premises and other clouds (data map and catalog), and provides compliance tools such as data loss prevention and information protection.",
              "**Microsoft Purview**：データガバナンス、リスク、コンプライアンスのソリューション群。Azure・オンプレミス・他クラウドのデータをスキャン・分類（データマップとカタログ）し、データ損失防止や情報保護などのコンプライアンスツールを提供します。",
              "**Microsoft Purview**: data governance၊ risk၊ compliance solution အစုပါ။ Azure၊ on-premises၊ တခြား cloud က data တွေကို scan လုပ်ပြီး classify လုပ်ပေးတယ် (data map နဲ့ catalog)၊ data loss prevention၊ information protection လို compliance tool တွေလည်း ပေးတယ်။"),
            L("**Service Trust Portal**: Microsoft's site for audit reports and compliance documents (for example ISO 27001 and SOC reports) about how Microsoft cloud services meet standards. Auditors and compliance officers use it.",
              "**Service Trust Portal**：Microsoft のクラウドサービスが基準をどう満たしているかについての監査レポートやコンプライアンス文書（例：ISO 27001 や SOC レポート）を提供するサイトです。監査人やコンプライアンス担当者が使います。",
              "**Service Trust Portal**: Microsoft cloud service တွေ standard နဲ့ ဘယ်လိုကိုက်ညီလဲ ဆိုတဲ့ audit report နဲ့ compliance document (ဥပမာ ISO 27001၊ SOC report) တွေ ရှိတဲ့ Microsoft site ပါ။ Auditor နဲ့ compliance officer တွေ သုံးတယ်။"),
            L("**SLA (Service Level Agreement)**: Microsoft's formal commitment for uptime/connectivity of a service, expressed as a percentage. If it is missed, you can claim **service credits** (a partial refund), not full compensation. **Preview** services and most free tiers have no financially backed SLA.",
              "**SLA（サービスレベル契約）**：サービスの稼働時間・接続性について Microsoft が正式に約束するもので、パーセンテージで表されます。未達の場合は**サービスクレジット**（一部返金）を請求でき、全額補償ではありません。**プレビュー**サービスやほとんどの無料レベルには、金銭的に保証された SLA はありません。",
              "**SLA (Service Level Agreement)**: service တစ်ခုရဲ့ uptime/connectivity အတွက် Microsoft ရဲ့ တရားဝင် ကတိပါ၊ ရာခိုင်နှုန်းနဲ့ ဖော်ပြတယ်။ မပြည့်မီရင် **service credit** (တစ်စိတ်တစ်ပိုင်း ပြန်အမ်းငွေ) တောင်းနိုင်တယ်၊ အပြည့်အဝ လျော်ကြေး မဟုတ်ဘူး။ **Preview** service နဲ့ free tier အများစုမှာ ငွေကြေးအာမခံတဲ့ SLA မရှိဘူး။"),
          ] },
          { type: 'p', text: L(
            "**Composite SLA**: when an app depends on several services **in series** (all must work), multiply their SLAs. Example: a web app at 99.95% that needs a database at 99.99% gives 0.9995 × 0.9999 = 0.99940 ≈ **99.94%**, which is **lower** than either service alone. Each dependency adds risk. To raise availability, add redundancy **in parallel** (for example a second region): the chance both fail is (1 − A) × (1 − B), so availability = 1 − (1 − A)(1 − B).",
            "**複合 SLA**：アプリが複数のサービスに**直列**で依存する（すべてが動作する必要がある）場合、それぞれの SLA を掛け合わせます。例：99.95% の Web アプリが 99.99% のデータベースを必要とする場合、0.9995 × 0.9999 = 0.99940 ≈ **99.94%** となり、どちらのサービス単体よりも**低く**なります。依存関係が増えるほどリスクが増します。可用性を上げるには**並列**の冗長性（例：2 つ目のリージョン）を加えます。両方が停止する確率は (1 − A) × (1 − B) なので、可用性＝1 − (1 − A)(1 − B) です。",
            "**Composite SLA**: app တစ်ခုက service အများကို **series** (အကုန် အလုပ်လုပ်ရမယ်) နဲ့ မှီခိုရင် SLA တွေကို မြှောက်ရတယ်။ ဥပမာ 99.95% ရှိတဲ့ web app က 99.99% database ကို လိုရင် 0.9995 × 0.9999 = 0.99940 ≈ **99.94%** ရတယ်၊ service တစ်ခုချင်းစီထက် **နိမ့်** တယ်။ Dependency များလေ risk များလေပါ။ Availability မြှင့်ချင်ရင် **parallel** redundancy (ဥပမာ ဒုတိယ region) ထည့်ပါ- နှစ်ခုလုံး ပျက်နိုင်ခြေက (1 − A) × (1 − B) ဖြစ်လို့ availability = 1 − (1 − A)(1 − B) ပါ။"
          ) },
          { type: 'diagram', text:
`Series (all required)       Parallel (either one is enough)
User -> Web -> DB            User -> Region A  --+
      99.95%  99.99%                   Region B  --+-> OK
SLA = 0.9995 x 0.9999        SLA = 1 - (1 - A) x (1 - B)
    = 99.94% (lower)             = higher than A or B alone`,
            caption: L("Series lowers the SLA; parallel redundancy raises it", "直列は SLA を下げ、並列の冗長化は SLA を上げる", "Series က SLA ကို လျှော့၊ parallel redundancy က SLA ကို မြှင့်") },
          { type: 'callout', tone: 'exam', text: L(
            "Rules to remember: composite SLA = **multiply** (result is lower); SLAs typically **rise** with redundancy such as multiple instances or availability zones (for VMs, deploying two or more instances across zones carries a higher SLA than a single VM); **preview = no SLA**; a missed SLA gives **service credits**. Compliance PDFs → **Service Trust Portal**; discover and classify your own data → **Microsoft Purview**.",
            "覚えるべきルール：複合 SLA＝**掛け算**（結果は低くなる）。複数インスタンスや可用性ゾーンなどの冗長化で SLA は通常**上がります**（VM では、ゾーンをまたいで 2 台以上配置すると単一 VM より高い SLA になります）。**プレビュー＝SLA なし**。SLA 未達なら**サービスクレジット**。コンプライアンス資料 → **Service Trust Portal**、自社データの検出と分類 → **Microsoft Purview**。",
            "မှတ်ရမယ့် rule တွေ- composite SLA = **မြှောက်** (ရလဒ် နိမ့်)၊ instance အများ (သို့) availability zone လို redundancy ထည့်ရင် SLA ပုံမှန်အားဖြင့် **တက်** တယ် (VM ဆိုရင် zone တွေကြား instance ၂ ခု နဲ့အထက် ထားတာက VM တစ်လုံးတည်းထက် SLA မြင့်တယ်)၊ **preview = SLA မရှိ**၊ SLA မပြည့်ရင် **service credit**။ Compliance PDF → **Service Trust Portal**၊ ကိုယ့် data ကို ရှာပြီး classify → **Microsoft Purview**။"
          ) },
        ],
      },
    ],
    summary: [
      L("Cost depends on resource type, consumption, region, egress bandwidth, subscription type and leftover resources; ingress is generally free.",
        "コストはリソースの種類、使用量、リージョン、送信帯域幅、サブスクリプションの種類、放置リソースで決まります。受信は一般に無料です。",
        "Cost က resource type၊ consumption၊ region၊ egress bandwidth၊ subscription type၊ ကျန်နေတဲ့ resource တွေအပေါ် မူတည်တယ်၊ ingress က ယေဘုယျအားဖြင့် အခမဲ့။"),
      L("Pricing Calculator estimates new Azure costs; TCO Calculator compares on-premises with Azure.",
        "料金計算ツールは新しい Azure のコストを見積もり、TCO 計算ツールはオンプレミスと Azure を比較します。",
        "Pricing Calculator က Azure cost အသစ်ကို ခန့်မှန်း၊ TCO Calculator က on-premises နဲ့ Azure ကို နှိုင်းယှဉ်တယ်။"),
      L("Cost Management shows spend and forecasts; budgets only alert unless linked to automation; Advisor recommends savings.",
        "Cost Management は支出と予測を表示し、予算は自動化と連携しない限りアラートのみ。Advisor は節約策を推奨します。",
        "Cost Management က spend နဲ့ forecast ပြတယ်၊ budget က automation နဲ့ မချိတ်ရင် alert ပဲပို့တယ်၊ Advisor က ငွေသက်သာနည်း အကြံပေးတယ်။"),
      L("Reservations and savings plans reward commitment, Spot rewards interruptibility, Hybrid Benefit reuses licenses.",
        "予約と節約プランは確約に、Spot は中断の許容に割引を与え、ハイブリッド特典はライセンスを再利用します。",
        "Reservation နဲ့ savings plan က ကတိပြုမှုအတွက်၊ Spot က ရပ်တန့်ခံနိုင်မှုအတွက် လျှော့ဈေးပေးပြီး Hybrid Benefit က license ပြန်သုံးတယ်။"),
      L("Tags are not inherited automatically; use Azure Policy (Modify) to inherit and (Deny) to require them.",
        "タグは自動継承されません。継承には Azure Policy（Modify）、必須化には（Deny）を使います。",
        "Tag တွေ အလိုအလျောက် inherit မဖြစ်ဘူး၊ inherit ဖို့ Azure Policy (Modify)၊ မဖြစ်မနေထည့်ခိုင်းဖို့ (Deny) သုံးပါ။"),
      L("Azure Policy controls what is allowed (definitions, initiatives, effects); RBAC controls who; remediation fixes existing resources.",
        "Azure Policy は何が許可されるか（定義・イニシアチブ・効果）を、RBAC は誰ができるかを制御し、修復タスクが既存リソースを直します。",
        "Azure Policy က ဘာခွင့်ပြုလဲ (definition၊ initiative၊ effect)၊ RBAC က ဘယ်သူလဲ ကို ထိန်းပြီး remediation က ရှိပြီးသား resource ကို ပြင်တယ်။"),
      L("CanNotDelete and ReadOnly locks are inherited, apply even to Owners and must be removed before deletion.",
        "CanNotDelete と ReadOnly ロックは継承され、Owner にも適用され、削除前に外す必要があります。",
        "CanNotDelete နဲ့ ReadOnly lock တွေက inherit ဖြစ်တယ်၊ Owner ကိုပါ သက်ရောက်ပြီး မဖျက်ခင် ဖြုတ်ရတယ်။"),
      L("Composite SLA = product of SLAs in series; Service Trust Portal holds audit reports; Purview governs your data.",
        "複合 SLA＝直列 SLA の積。Service Trust Portal には監査レポートがあり、Purview は自社データをガバナンスします。",
        "Composite SLA = series SLA တွေရဲ့ မြှောက်လဒ်၊ Service Trust Portal မှာ audit report ရှိ၊ Purview က ကိုယ့် data ကို govern လုပ်တယ်။"),
    ],
  },
  questions: [
    {
      difficulty: 'EASY',
      exams: ['AZ-900'],
      prompt: L("Before deploying, an architect wants to estimate the monthly cost of three VMs, a SQL database and storage in Japan East. What should the architect use?",
        "デプロイ前に、アーキテクトが Japan East の VM 3 台、SQL データベース、ストレージの月額コストを見積もりたいと考えています。何を使うべきですか？",
        "Deploy မလုပ်ခင် architect က Japan East မှာ VM ၃ လုံး၊ SQL database နဲ့ storage ရဲ့ လစဉ် cost ကို ခန့်မှန်းချင်တယ်။ ဘာကိုသုံးသင့်လဲ?"),
      options: ['TCO Calculator', 'Pricing Calculator', 'Azure Advisor', 'Cost analysis in Cost Management'],
      correct: [1],
      explanation: L("The Pricing Calculator estimates the cost of Azure services you plan to deploy. The TCO Calculator compares on-premises costs with Azure, and Cost analysis only shows spend for resources that already exist.",
        "料金計算ツールは、これからデプロイする Azure サービスのコストを見積もります。TCO 計算ツールはオンプレミスと Azure のコストを比較するもので、コスト分析は既存リソースの支出のみを表示します。",
        "Pricing Calculator က deploy လုပ်မယ့် Azure service တွေရဲ့ cost ကို ခန့်မှန်းပေးတယ်။ TCO Calculator က on-premises နဲ့ Azure cost ကို နှိုင်းယှဉ်တာဖြစ်ပြီး Cost analysis က ရှိပြီးသား resource တွေရဲ့ spend ကိုပဲ ပြတယ်။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900'],
      prompt: L("A CFO wants a report comparing the cost of keeping the company's datacenter (servers, power, IT staff) with moving those workloads to Azure over three years. Which tool should you use?",
        "CFO が、自社データセンター（サーバー、電力、IT 要員）を維持する場合と 3 年間でワークロードを Azure に移行する場合のコスト比較レポートを求めています。どのツールを使うべきですか？",
        "CFO က company datacenter (server၊ လျှပ်စစ်၊ IT ဝန်ထမ်း) ဆက်ထားတာနဲ့ workload တွေကို Azure ပြောင်းတာကို ၃ နှစ်စာ cost နှိုင်းယှဉ်တဲ့ report လိုချင်တယ်။ ဘယ် tool ကိုသုံးသင့်လဲ?"),
      options: ['Pricing Calculator', 'Azure Advisor', 'TCO Calculator', 'Azure Monitor'],
      correct: [2],
      explanation: L("The TCO (Total Cost of Ownership) Calculator compares on-premises infrastructure costs, including power and labour, with Azure. The Pricing Calculator only estimates Azure service costs and has no on-premises comparison.",
        "TCO（総保有コスト）計算ツールは、電力や人件費を含むオンプレミスのインフラコストと Azure を比較します。料金計算ツールは Azure サービスのコストのみを見積もり、オンプレミスとの比較はできません。",
        "TCO (Total Cost of Ownership) Calculator က လျှပ်စစ်၊ လုပ်အားခ အပါအဝင် on-premises infrastructure cost ကို Azure နဲ့ နှိုင်းယှဉ်ပေးတယ်။ Pricing Calculator က Azure service cost ကိုပဲ ခန့်မှန်းပြီး on-premises နဲ့ မနှိုင်းယှဉ်ဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("Administrators must be able to change settings of resources in a production resource group, but nobody should be able to delete them by accident. What should you apply?",
        "管理者は本番用 Resource Group のリソース設定を変更できる必要がありますが、誰も誤って削除できないようにしたいです。何を適用すべきですか？",
        "Admin တွေက production resource group ထဲက resource setting တွေကို ပြင်နိုင်ရမယ်၊ ဒါပေမယ့် ဘယ်သူမှ မတော်တဆ မဖျက်နိုင်ရဘူး။ ဘာကို apply လုပ်သင့်လဲ?"),
      options: ['A CanNotDelete lock', 'A ReadOnly lock', 'A tag named delete=false', 'An Azure Advisor recommendation'],
      correct: [0],
      explanation: L("A CanNotDelete lock allows reading and modifying but blocks deletion. A ReadOnly lock would also block the configuration changes the administrators need to make.",
        "CanNotDelete ロックは読み取りと変更を許可し、削除のみをブロックします。ReadOnly ロックでは管理者が必要とする設定変更もブロックされてしまいます。",
        "CanNotDelete lock က ဖတ်တာ၊ ပြင်တာကို ခွင့်ပြုပြီး ဖျက်တာကိုပဲ ပိတ်တယ်။ ReadOnly lock ဆိုရင် admin တွေ လုပ်ရမယ့် configuration ပြင်တာကိုပါ ပိတ်သွားမယ်။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900'],
      prompt: L("An auditor asks for Microsoft's ISO 27001 and SOC audit reports for Azure. Where can you download them?",
        "監査人が Azure に関する Microsoft の ISO 27001 および SOC 監査レポートを求めています。どこからダウンロードできますか？",
        "Auditor က Azure အတွက် Microsoft ရဲ့ ISO 27001 နဲ့ SOC audit report တွေကို တောင်းတယ်။ ဘယ်ကနေ download လုပ်လို့ရလဲ?"),
      options: ['Microsoft Purview', 'Azure Advisor', 'Service Trust Portal', 'Microsoft Defender for Cloud'],
      correct: [2],
      explanation: L("The Service Trust Portal publishes Microsoft's independent audit reports and compliance documents. Microsoft Purview governs and classifies your own data; it is not where Microsoft's audit reports are published.",
        "Service Trust Portal では、Microsoft の第三者監査レポートやコンプライアンス文書が公開されています。Microsoft Purview は自社データのガバナンスと分類を行うもので、Microsoft の監査レポートの公開場所ではありません。",
        "Service Trust Portal မှာ Microsoft ရဲ့ independent audit report နဲ့ compliance document တွေ ထုတ်ပြန်ထားတယ်။ Microsoft Purview က ကိုယ့် data ကို govern/classify လုပ်တာပါ၊ Microsoft audit report တင်တဲ့နေရာ မဟုတ်ဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900'],
      prompt: L("The finance team wants to see costs grouped by department, such as costCenter=Sales or costCenter=HR, across many resource groups. What should you add to the resources?",
        "経理チームは、多数の Resource Group にまたがるコストを costCenter=Sales や costCenter=HR のように部門別に見たいと考えています。リソースに何を追加すべきですか？",
        "Finance team က resource group အများကြီးထဲက cost တွေကို costCenter=Sales၊ costCenter=HR လို department အလိုက် ခွဲကြည့်ချင်တယ်။ Resource တွေမှာ ဘာထည့်သင့်လဲ?"),
      options: ['Tags', 'Resource locks', 'Policy initiatives', 'Availability zones'],
      correct: [0],
      explanation: L("Tags are name/value labels that Cost analysis can group and filter by, across any resource group or subscription. Locks only protect resources from deletion or change; they carry no cost-reporting information.",
        "タグは名前と値のラベルで、コスト分析ではどの Resource Group やサブスクリプションにまたがってもタグでグループ化・絞り込みができます。ロックは削除や変更からリソースを守るだけで、コストレポート用の情報は持ちません。",
        "Tag တွေက name/value label ဖြစ်ပြီး Cost analysis က resource group/subscription ဘယ်လောက်ပဲ ကွဲကွဲ tag နဲ့ group/filter လုပ်နိုင်တယ်။ Lock က resource ကို ဖျက်/ပြင်တာကနေ ကာကွယ်ရုံပဲ၊ cost report အတွက် information မပါဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900'],
      prompt: L("Which factors directly affect the cost of an Azure solution? (Select TWO)",
        "Azure ソリューションのコストに直接影響する要因はどれですか？（2 つ選択）",
        "Azure solution ရဲ့ cost ကို တိုက်ရိုက် သက်ရောက်တဲ့ အချက်တွေက ဘာတွေလဲ? (၂ ခု ရွေးပါ)"),
      options: ['The region where the resources are deployed', 'Outbound data transfer (egress) from Azure', 'The number of tags on each resource', 'The number of resource groups in the subscription'],
      correct: [0, 1],
      explanation: L("Prices differ by region, and outbound data transfer is billed. Tags and resource groups are free organizational features, so adding more of them does not change the bill.",
        "料金はリージョンによって異なり、送信データ転送は課金されます。タグと Resource Group は無料の整理機能なので、数を増やしても請求額は変わりません。",
        "Region အလိုက် ဈေးကွာပြီး outbound data transfer က ငွေကျတယ်။ Tag နဲ့ resource group က အခမဲ့ organizing feature တွေဖြစ်လို့ ပိုထည့်လည်း bill မပြောင်းဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("A project manager wants an email when the project's subscription reaches 80% of its 500,000 JPY monthly target. What should you configure?",
        "プロジェクトマネージャーは、プロジェクトのサブスクリプションが月間目標 50 万円の 80% に達したときにメールを受け取りたいと考えています。何を構成すべきですか？",
        "Project manager က project subscription ရဲ့ လစဉ်ပန်းတိုင် ယန်း ၅ သိန်းရဲ့ 80% ရောက်ရင် email ရချင်တယ်။ ဘာကို configure လုပ်သင့်လဲ?"),
      options: ['An Azure Policy assignment with the Audit effect', 'A budget with an alert condition in Cost Management', 'A ReadOnly lock on the subscription', 'An Azure Advisor cost recommendation'],
      correct: [1],
      explanation: L("Budgets in Cost Management send alerts when actual or forecast spend crosses thresholds such as 80%. Azure Policy evaluates resource configuration, not spending, so it cannot alert on cost.",
        "Cost Management の予算は、実績または予測の支出が 80% などのしきい値を超えるとアラートを送ります。Azure Policy はリソースの構成を評価するもので支出ではないため、コストのアラートはできません。",
        "Cost Management က budget က actual (သို့) forecast spend က 80% လို threshold ကျော်ရင် alert ပို့တယ်။ Azure Policy က resource configuration ကို စစ်တာ၊ spend ကို မဟုတ်လို့ cost အတွက် alert မပေးနိုင်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("A resource group has the tag costCenter=1234. A new VM is created in that resource group with no tags specified and no policies assigned. What happens?",
        "Resource Group に costCenter=1234 というタグがあります。タグを指定せず、ポリシーも割り当てられていない状態で、その Resource Group に新しい VM を作成しました。どうなりますか？",
        "Resource group မှာ costCenter=1234 tag ရှိတယ်။ Tag မထည့်ဘဲ policy လည်း assign မလုပ်ထားတဲ့အခြေအနေမှာ အဲဒီ resource group ထဲ VM အသစ်ဆောက်လိုက်တယ်။ ဘာဖြစ်မလဲ?"),
      options: ['The VM automatically inherits the tag', 'The VM inherits the tag only if it is in the same region as the resource group', 'The tag is copied to the VM within 24 hours', 'The VM does not get the tag unless it is applied directly or by Azure Policy'],
      correct: [3],
      explanation: L("Tags are not inherited from resource groups or subscriptions. You must tag the VM yourself or use an Azure Policy such as “Inherit a tag from the resource group if missing” (Modify effect). There is no automatic delayed copy.",
        "タグは Resource Group やサブスクリプションから継承されません。VM に自分でタグを付けるか、「Inherit a tag from the resource group if missing」（Modify 効果）などの Azure Policy を使う必要があります。時間差で自動コピーされることもありません。",
        "Tag တွေက resource group (သို့) subscription ကနေ inherit မဖြစ်ဘူး။ VM ကို ကိုယ်တိုင် tag တပ်ရမယ် (သို့) 「Inherit a tag from the resource group if missing」 (Modify effect) လို Azure Policy ကို သုံးရမယ်။ အချိန်ကြာမှ အလိုအလျောက် copy ကူးတာလည်း မရှိဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("Company rules state that resources may only be created in Japan East and Japan West. Any attempt to create resources elsewhere must be blocked. What should you use?",
        "社内規則で、リソースは Japan East と Japan West にのみ作成できると定められています。それ以外の場所での作成はブロックする必要があります。何を使うべきですか？",
        "Company စည်းမျဉ်းအရ resource တွေကို Japan East နဲ့ Japan West မှာပဲ ဆောက်ခွင့်ရှိတယ်။ တခြားနေရာမှာ ဆောက်ဖို့ ကြိုးစားရင် ပိတ်ရမယ်။ ဘာကိုသုံးသင့်လဲ?"),
      options: ['Azure Policy with the Allowed locations definition', 'A custom RBAC role', 'A CanNotDelete resource lock', 'Tags with a location value'],
      correct: [0],
      explanation: L("The built-in Allowed locations policy uses the Deny effect to block deployments to other regions, for everyone. RBAC controls who can create resources, but it cannot restrict which region a permitted user deploys to.",
        "組み込みの Allowed locations ポリシーは Deny 効果で他リージョンへのデプロイを全員に対してブロックします。RBAC は誰がリソースを作成できるかを制御しますが、許可されたユーザーがどのリージョンにデプロイするかは制限できません。",
        "Built-in Allowed locations policy က Deny effect နဲ့ တခြား region ဆီ deploy လုပ်တာကို လူတိုင်းအတွက် ပိတ်တယ်။ RBAC က ဘယ်သူ resource ဆောက်နိုင်လဲ ထိန်းပေမယ့် ခွင့်ရတဲ့ user က ဘယ် region မှာ deploy လုပ်လဲ ဆိုတာကို မကန့်သတ်နိုင်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-900'],
      prompt: L("A line-of-business application runs 24/7 on the same VM size in the same region and will continue for at least three years. Which option gives the biggest discount?",
        "業務アプリケーションが同じリージョンの同じ VM サイズで 24 時間 365 日稼働しており、少なくとも 3 年間は続きます。最も大きな割引を得られるのはどれですか？",
        "Business application တစ်ခုက region တူ၊ VM size တူနဲ့ 24/7 run နေပြီး အနည်းဆုံး ၃ နှစ် ဆက် run မယ်။ ဘယ် option က လျှော့ဈေး အများဆုံး ပေးလဲ?"),
      options: ['Pay-as-you-go pricing', 'Azure Spot Virtual Machines', 'A 3-year Azure Reserved VM Instance', 'Dev/Test pricing'],
      correct: [2],
      explanation: L("A 3-year reservation gives the deepest commitment discount for a steady, unchanging workload. Spot VMs are cheaper per hour but can be evicted at any time, which is unacceptable for an always-on business app; Dev/Test pricing is not allowed for production.",
        "3 年間の予約は、安定して変化しないワークロードに対して最も大きな確約割引を提供します。Spot VM は時間単価が安いものの、いつでも削除される可能性があり常時稼働の業務アプリには不適切です。Dev/Test 価格は本番では使えません。",
        "၃ နှစ် reservation က တည်ငြိမ်ပြီး မပြောင်းတဲ့ workload အတွက် commitment discount အများဆုံး ပေးတယ်။ Spot VM က တစ်နာရီဈေး ပိုသက်သာပေမယ့် ဘယ်အချိန်မဆို evict ခံရနိုင်လို့ အမြဲ run ရမယ့် business app အတွက် မသင့်ဘူး၊ Dev/Test pricing ကို production မှာ သုံးခွင့်မရှိဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-900'],
      prompt: L("A media company renders video frames overnight. Jobs can be stopped and restarted at any time without harm. It wants the lowest possible compute cost. What should it use?",
        "あるメディア企業は夜間にビデオフレームをレンダリングしています。ジョブはいつ停止・再開しても問題ありません。コンピューティングコストを可能な限り下げたいと考えています。何を使うべきですか？",
        "Media company တစ်ခုက ညဘက်မှာ video frame တွေ render လုပ်တယ်။ Job တွေကို ဘယ်အချိန် ရပ်ပြီး ပြန်စလည်း ပြဿနာမရှိဘူး။ Compute cost အနည်းဆုံး လိုချင်တယ်။ ဘာကိုသုံးသင့်လဲ?"),
      options: ['Azure Reserved VM Instances', 'Azure savings plan for compute', 'Azure Dedicated Host', 'Azure Spot Virtual Machines'],
      correct: [3],
      explanation: L("Spot VMs use spare Azure capacity at a deep discount and are ideal for interruptible work like rendering. Reservations require a 1- or 3-year commitment that does not fit a nightly, interruptible job as well.",
        "Spot VM は Azure の余剰容量を大幅な割引で使えるため、レンダリングのような中断可能な作業に最適です。予約は 1 年または 3 年の確約が必要で、夜間だけの中断可能なジョブにはあまり適しません。",
        "Spot VM က Azure ရဲ့ အပိုကျန် capacity ကို ဈေးအရမ်းလျှော့ပြီး သုံးတာဖြစ်လို့ rendering လို ရပ်လို့ရတဲ့ အလုပ်အတွက် အကောင်းဆုံးပါ။ Reservation က ၁ နှစ် (သို့) ၃ နှစ် ကတိပြုရလို့ ညဘက်ပဲ run ပြီး ရပ်လို့ရတဲ့ job နဲ့ သိပ်မကိုက်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("Which of the following are valid Azure Policy effects? (Select THREE)",
        "次のうち、有効な Azure Policy の効果はどれですか？（3 つ選択）",
        "အောက်ပါတွေထဲက ဘယ်ဟာတွေက မှန်ကန်တဲ့ Azure Policy effect တွေလဲ? (၃ ခု ရွေးပါ)"),
      options: ['Deny', 'Audit', 'DeployIfNotExists', 'CanNotDelete', 'ReadOnly'],
      correct: [0, 1, 2],
      explanation: L("Deny, Audit and DeployIfNotExists are Azure Policy effects (others include Modify, Append, AuditIfNotExists and Disabled). CanNotDelete and ReadOnly are resource lock types, not policy effects.",
        "Deny、Audit、DeployIfNotExists は Azure Policy の効果です（他に Modify、Append、AuditIfNotExists、Disabled など）。CanNotDelete と ReadOnly はリソースロックの種類であり、ポリシーの効果ではありません。",
        "Deny၊ Audit၊ DeployIfNotExists က Azure Policy effect တွေပါ (Modify၊ Append၊ AuditIfNotExists၊ Disabled လည်း ရှိတယ်)။ CanNotDelete နဲ့ ReadOnly က resource lock အမျိုးအစားတွေပါ၊ policy effect မဟုတ်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-900'],
      prompt: L("A web app on App Service has an SLA of 99.95% and depends on Azure SQL Database with an SLA of 99.99%. Both must be available for the app to work. What is the composite SLA?",
        "App Service 上の Web アプリの SLA は 99.95% で、SLA が 99.99% の Azure SQL Database に依存しています。アプリが動作するには両方が利用可能である必要があります。複合 SLA はいくつですか？",
        "App Service ပေါ်က web app ရဲ့ SLA က 99.95% ဖြစ်ပြီး SLA 99.99% ရှိတဲ့ Azure SQL Database ကို မှီခိုတယ်။ App အလုပ်လုပ်ဖို့ နှစ်ခုလုံး ရှိရမယ်။ Composite SLA က ဘယ်လောက်လဲ?"),
      options: ['99.99%', '99.95%', '99.94%', '99.97%'],
      correct: [2],
      explanation: L("For dependent services in series, multiply: 0.9995 × 0.9999 ≈ 0.9994, or 99.94%. Choosing 99.95% (the lower of the two) is the common mistake: every extra dependency lowers the combined availability further.",
        "直列の依存サービスは掛け算します：0.9995 × 0.9999 ≈ 0.9994、つまり 99.94% です。よくある間違いは低い方の 99.95% を選ぶことです。依存関係が増えるたびに全体の可用性はさらに下がります。",
        "Series နဲ့ မှီခိုတဲ့ service တွေကို မြှောက်ရတယ်- 0.9995 × 0.9999 ≈ 0.9994၊ ဆိုလိုတာ 99.94% ပါ။ နိမ့်တဲ့ 99.95% ကို ရွေးတာက အဖြစ်များတဲ့ အမှားပါ- dependency တစ်ခုတိုးတိုင်း စုစုပေါင်း availability ထပ်ကျတယ်။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("A user with the Owner role on a subscription tries to delete a VM and receives an error. The user's role assignment is correct. What is the most likely cause?",
        "サブスクリプションの Owner ロールを持つユーザーが VM を削除しようとしてエラーになりました。ユーザーのロール割り当ては正しく設定されています。最も可能性の高い原因は何ですか？",
        "Subscription မှာ Owner role ရှိတဲ့ user က VM ကို ဖျက်ဖို့ကြိုးစားတော့ error တက်တယ်။ User ရဲ့ role assignment က မှန်ပါတယ်။ အဖြစ်နိုင်ဆုံး အကြောင်းရင်းက ဘာလဲ?"),
      options: ['The Owner role does not include delete permissions', 'A CanNotDelete lock is applied to the VM’s resource group', 'An Azure Policy with the Audit effect is assigned', 'The subscription has exceeded its budget'],
      correct: [1],
      explanation: L("Locks apply to all users, including Owners, and a lock on a resource group is inherited by its resources. Owner does include delete rights, an Audit policy only reports, and exceeding a budget only sends alerts.",
        "ロックは Owner を含むすべてのユーザーに適用され、Resource Group のロックは中のリソースに継承されます。Owner には削除権限があり、Audit ポリシーは報告のみ、予算超過はアラートを送るだけです。",
        "Lock က Owner အပါအဝင် user အားလုံးကို သက်ရောက်ပြီး resource group က lock ကို ထဲက resource တွေ inherit ဖြစ်တယ်။ Owner မှာ ဖျက်ခွင့် ပါတယ်၊ Audit policy က report ပဲလုပ်ပြီး budget ကျော်တာက alert ပဲ ပို့တယ်။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("A ReadOnly lock is applied to resource group rg-app. Which statements are true? (Select TWO)",
        "Resource Group rg-app に ReadOnly ロックが適用されています。正しい記述はどれですか？（2 つ選択）",
        "Resource group rg-app မှာ ReadOnly lock တပ်ထားတယ်။ မှန်တဲ့ statement တွေက ဘာတွေလဲ? (၂ ခု ရွေးပါ)"),
      options: ['Users can still add new resources to rg-app', 'An administrator cannot resize an existing VM in rg-app', 'The lock also applies to users with the Owner role', 'The lock protects only the resource group object, not the resources inside it'],
      correct: [1, 2],
      explanation: L("ReadOnly blocks all changes and deletions, including resizing a VM, and it applies to everyone, Owners included. It is inherited by the resources in the group, and adding new resources to the group is also blocked.",
        "ReadOnly は VM のサイズ変更を含むすべての変更と削除をブロックし、Owner を含む全員に適用されます。グループ内のリソースに継承され、グループへの新しいリソースの追加もブロックされます。",
        "ReadOnly က VM size ပြောင်းတာ အပါအဝင် ပြင်တာ၊ ဖျက်တာ အားလုံးကို ပိတ်ပြီး Owner အပါအဝင် လူတိုင်းကို သက်ရောက်တယ်။ Group ထဲက resource တွေ inherit ဖြစ်ပြီး group ထဲ resource အသစ်ထည့်တာလည်း ပိတ်ထားတယ်။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("You must make every resource in a resource group carry the resource group's Environment tag, including resources that already exist and are missing it. What should you do?",
        "Resource Group 内のすべてのリソースに、Resource Group の Environment タグを付ける必要があります。既に存在しタグがないリソースも対象です。どうすべきですか？",
        "Resource group ထဲက resource အားလုံး (ရှိပြီးသားဖြစ်ပြီး tag မပါတဲ့ resource တွေ အပါအဝင်) မှာ resource group ရဲ့ Environment tag ပါရမယ်။ ဘာလုပ်သင့်လဲ?"),
      options: ['Assign a policy with the Audit effect', 'Assign a policy with the Deny effect', 'Apply a ReadOnly lock to the resource group', 'Assign a policy with the Modify effect and run a remediation task'],
      correct: [3],
      explanation: L("A Modify policy (such as “Inherit a tag from the resource group if missing”) adds the tag to new resources, and a remediation task applies it to existing ones using a managed identity. Deny would only block new untagged resources and never fix existing ones; Audit only reports.",
        "Modify ポリシー（「Inherit a tag from the resource group if missing」など）は新しいリソースにタグを追加し、修復タスクがマネージド ID を使って既存リソースにも適用します。Deny はタグのない新規リソースをブロックするだけで既存リソースは直せず、Audit は報告のみです。",
        "Modify policy (「Inherit a tag from the resource group if missing」 လို) က resource အသစ်တွေကို tag ထည့်ပေးပြီး remediation task က managed identity သုံးကာ ရှိပြီးသား resource တွေကိုပါ ထည့်ပေးတယ်။ Deny က tag မပါတဲ့ resource အသစ်ကို ပိတ်ရုံပဲ၊ ရှိပြီးသားကို မပြင်ဘူး၊ Audit က report ပဲလုပ်တယ်။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-900'],
      prompt: L("A company is moving 50 Windows Server VMs to Azure. It already owns Windows Server licenses with active Software Assurance, and the VMs will run continuously for three years. Which TWO options together reduce cost the most? (Select TWO)",
        "ある企業が 50 台の Windows Server VM を Azure に移行します。有効なソフトウェアアシュアランス付きの Windows Server ライセンスを既に保有しており、VM は 3 年間継続して稼働します。組み合わせて最もコストを削減できる 2 つはどれですか？（2 つ選択）",
        "Company တစ်ခုက Windows Server VM ၅၀ ကို Azure ပြောင်းမယ်။ Active Software Assurance ပါတဲ့ Windows Server license ရှိပြီးသားဖြစ်ပြီး VM တွေ ၃ နှစ် ဆက်တိုက် run မယ်။ ပေါင်းသုံးရင် cost အများဆုံး လျှော့ပေးမယ့် ၂ ခုက ဘာလဲ? (၂ ခု ရွေးပါ)"),
      options: ['Azure Hybrid Benefit', 'Azure Reservations', 'Azure Spot Virtual Machines', 'Larger VM sizes'],
      correct: [0, 1],
      explanation: L("Azure Hybrid Benefit removes the Windows license cost by reusing existing licenses, and a 3-year reservation discounts the compute; the two can be combined. Spot VMs can be evicted, so they are unsuitable for servers that must run continuously.",
        "Azure ハイブリッド特典は既存ライセンスの再利用で Windows ライセンス費用をなくし、3 年予約はコンピューティングを割り引きます。両者は併用できます。Spot VM は削除される可能性があるため、常時稼働が必要なサーバーには不向きです。",
        "Azure Hybrid Benefit က license အဟောင်းကို ပြန်သုံးလို့ Windows license စရိတ် မကုန်တော့ဘူး၊ ၃ နှစ် reservation က compute ကို လျှော့ပေးတယ်၊ နှစ်ခုကို ပေါင်းသုံးလို့ရတယ်။ Spot VM က evict ခံရနိုင်လို့ ဆက်တိုက် run ရမယ့် server တွေအတွက် မသင့်ဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("Your security team has selected 25 policy definitions that together form the company's compliance baseline. They want to assign and track them as a single unit at a management group. What should you create?",
        "セキュリティチームは、会社のコンプライアンスベースラインとなる 25 個のポリシー定義を選びました。管理グループで 1 つの単位として割り当て・追跡したいと考えています。何を作成すべきですか？",
        "Security team က company compliance baseline ဖြစ်တဲ့ policy definition ၂၅ ခုကို ရွေးထားတယ်။ Management group မှာ unit တစ်ခုတည်းအဖြစ် assign လုပ်ပြီး track လုပ်ချင်တယ်။ ဘာကို ဆောက်သင့်လဲ?"),
      options: ['A nested management group', 'A policy exemption', 'A policy initiative (policy set definition)', 'A resource lock'],
      correct: [2],
      explanation: L("An initiative groups multiple policy definitions so they can be assigned, and their compliance tracked, as one unit. A nested management group organizes subscriptions but does not bundle policies; an exemption removes a scope from a policy rather than grouping them.",
        "イニシアチブは複数のポリシー定義をまとめ、1 つの単位として割り当て・コンプライアンス追跡ができるようにします。入れ子の管理グループはサブスクリプションを整理するものでポリシーをまとめるものではなく、除外（exemption）はポリシーからスコープを外すものです。",
        "Initiative က policy definition အများကို စုပြီး unit တစ်ခုတည်းအဖြစ် assign လုပ်ကာ compliance ကို track လုပ်နိုင်အောင် လုပ်ပေးတယ်။ Nested management group က subscription တွေကို စီစဉ်တာ၊ policy ကို မစုဘူး၊ exemption က policy ကနေ scope တစ်ခုကို ချန်ထားတာပါ။"),
    },
  ],
  flashcards: [
    { term: 'Pricing Calculator',
      definition: L("A free web tool that estimates the monthly cost of Azure services you plan to deploy.", "これからデプロイする Azure サービスの月額コストを見積もる無料の Web ツールです。", "Deploy လုပ်မယ့် Azure service တွေရဲ့ လစဉ် cost ကို ခန့်မှန်းပေးတဲ့ အခမဲ့ web tool ပါ။"),
      example: L("Estimate two D-series VMs plus a SQL database in Japan East before a project kickoff.", "プロジェクト開始前に、Japan East の D シリーズ VM 2 台と SQL データベースの費用を見積もります。", "Project မစခင် Japan East မှာ D-series VM ၂ လုံးနဲ့ SQL database ရဲ့ cost ကို ခန့်မှန်းတာ။") },
    { term: 'TCO Calculator',
      definition: L("A tool that compares the total cost of running workloads on-premises with running them in Azure.", "オンプレミスでワークロードを運用する総コストと Azure で運用する場合を比較するツールです。", "On-premises မှာ workload run တဲ့ စုစုပေါင်း cost ကို Azure မှာ run တာနဲ့ နှိုင်းယှဉ်ပေးတဲ့ tool ပါ။"),
      example: L("Show management a 3-year saving from closing the Osaka server room and moving to Azure.", "大阪のサーバールームを閉鎖し Azure に移行した場合の 3 年間の削減額を経営陣に示します。", "Osaka server room ကို ပိတ်ပြီး Azure ပြောင်းရင် ၃ နှစ်မှာ ဘယ်လောက်သက်သာမလဲ management ကို ပြတာ။") },
    { term: 'Budget (Cost Management)',
      definition: L("A spending target for a scope that sends alerts at thresholds; it does not stop resources by itself.", "スコープに対する支出目標で、しきい値でアラートを送ります。それ自体ではリソースを停止しません。", "Scope တစ်ခုအတွက် spend ပန်းတိုင်ဖြစ်ပြီး threshold ရောက်ရင် alert ပို့တယ်၊ resource ကို ကိုယ်တိုင် မရပ်ဘူး။"),
      example: L("A dev subscription budget emails the team lead at 80% and triggers an action group at 100% to stop VMs.", "開発用サブスクリプションの予算が 80% でチームリーダーにメールし、100% でアクショングループを起動して VM を停止します。", "Dev subscription budget က 80% မှာ team lead ကို email ပို့ပြီး 100% မှာ VM ရပ်ဖို့ action group ကို trigger လုပ်တယ်။") },
    { term: 'Tag',
      definition: L("A name/value label on a subscription, resource group or resource; not inherited automatically.", "サブスクリプション、Resource Group、リソースに付ける名前と値のラベル。自動的には継承されません。", "Subscription၊ resource group၊ resource မှာ တပ်တဲ့ name/value label ပါ၊ အလိုအလျောက် inherit မဖြစ်ဘူး။"),
      example: L("Tag resources with costCenter=Sales so Cost analysis can show the Sales department's spend.", "リソースに costCenter=Sales を付け、コスト分析で営業部の支出を表示できるようにします。", "Resource တွေကို costCenter=Sales tag တပ်ထားလို့ Cost analysis မှာ Sales department ရဲ့ spend ကို ပြနိုင်တယ်။") },
    { term: 'Azure Policy',
      definition: L("A service that enforces rules on resource configuration (what is allowed) and reports compliance.", "リソース構成のルール（何が許可されるか）を強制し、コンプライアンスを報告するサービスです。", "Resource configuration ပေါ်မှာ rule (ဘာခွင့်ပြုလဲ) ကို enforce လုပ်ပြီး compliance ကို report လုပ်တဲ့ service ပါ။"),
      example: L("Deny any VM size larger than D4s_v5 in development subscriptions.", "開発用サブスクリプションで D4s_v5 より大きい VM サイズを拒否します。", "Development subscription တွေမှာ D4s_v5 ထက်ကြီးတဲ့ VM size ကို Deny လုပ်တာ။") },
    { term: 'Policy initiative',
      definition: L("A collection of policy definitions grouped and assigned together toward one goal.", "1 つの目標に向けてまとめて割り当てるポリシー定義の集合です。", "ရည်မှန်းချက်တစ်ခုအတွက် စုပြီး တစ်ခါတည်း assign လုပ်တဲ့ policy definition အစုပါ။"),
      example: L("Assign an ISO 27001 initiative to the Production management group and track one compliance score.", "ISO 27001 のイニシアチブを Production 管理グループに割り当て、1 つのコンプライアンススコアで追跡します。", "ISO 27001 initiative ကို Production management group မှာ assign လုပ်ပြီး compliance score တစ်ခုတည်းနဲ့ track လုပ်တာ။") },
    { term: 'Resource lock',
      definition: L("A CanNotDelete or ReadOnly setting that blocks deletion or changes for all users, including Owners, and is inherited.", "Owner を含むすべてのユーザーの削除や変更をブロックする CanNotDelete または ReadOnly の設定で、継承されます。", "Owner အပါအဝင် user အားလုံးရဲ့ ဖျက်တာ (သို့) ပြင်တာကို ပိတ်တဲ့ CanNotDelete (သို့) ReadOnly setting ဖြစ်ပြီး inherit ဖြစ်တယ်။"),
      example: L("Put a CanNotDelete lock on the resource group holding the production database.", "本番データベースを含む Resource Group に CanNotDelete ロックを付けます。", "Production database ရှိတဲ့ resource group မှာ CanNotDelete lock တပ်တာ။") },
    { term: 'Service Trust Portal',
      definition: L("Microsoft's portal for audit reports, certifications and compliance documents about its cloud services.", "Microsoft のクラウドサービスに関する監査レポート、認証、コンプライアンス文書を提供するポータルです。", "Microsoft cloud service တွေနဲ့ ဆိုင်တဲ့ audit report၊ certification၊ compliance document တွေ ရှိတဲ့ portal ပါ။"),
      example: L("Download the latest SOC 2 report for Azure to answer a customer's security questionnaire.", "顧客のセキュリティ質問票に回答するため、Azure の最新 SOC 2 レポートをダウンロードします。", "Customer ရဲ့ security questionnaire ကို ဖြေဖို့ Azure ရဲ့ နောက်ဆုံး SOC 2 report ကို download လုပ်တာ။") },
    { term: 'Composite SLA',
      definition: L("The combined SLA of services that depend on each other, calculated by multiplying their individual SLAs.", "互いに依存するサービスを組み合わせた SLA で、個々の SLA を掛け合わせて計算します。", "အချင်းချင်း မှီခိုတဲ့ service တွေရဲ့ ပေါင်းစပ် SLA ဖြစ်ပြီး SLA တစ်ခုချင်းကို မြှောက်ပြီး တွက်တယ်။"),
      example: L("99.95% web app × 99.99% database ≈ 99.94% for the whole solution.", "99.95% の Web アプリ × 99.99% のデータベース ≈ ソリューション全体で 99.94%。", "99.95% web app × 99.99% database ≈ solution တစ်ခုလုံးအတွက် 99.94%။") },
    { term: 'Azure Reservations',
      definition: L("A 1- or 3-year commitment to a specific resource type and region in exchange for a large discount over pay-as-you-go.", "特定のリソース種類とリージョンを 1 年または 3 年確約する代わりに、従量課金より大きな割引を受ける仕組みです。", "Resource type နဲ့ region တစ်ခုကို ၁ နှစ် (သို့) ၃ နှစ် ကတိပြုပြီး pay-as-you-go ထက် လျှော့ဈေး အများကြီးရတဲ့ စနစ်ပါ။"),
      example: L("Reserve the always-on database VMs for 3 years and keep autoscaled web VMs on pay-as-you-go.", "常時稼働のデータベース VM は 3 年予約し、autoscale する Web VM は従量課金のままにします。", "အမြဲ run တဲ့ database VM တွေကို ၃ နှစ် reserve လုပ်ပြီး autoscale web VM တွေကို pay-as-you-go နဲ့ ဆက်ထားတာ။") },
  ],
};
