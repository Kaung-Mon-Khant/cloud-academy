import { L, type SeedTopic } from '../types.js';

export const topic: SeedTopic = {
  slug: 'azure-iac',
  icon: 'FileCode2',
  level: 'ASSOCIATE',
  exams: ['AZ-900', 'AZ-104'],
  name: L("Azure Management Tools & Infrastructure as Code", "Azure 管理ツールと Infrastructure as Code", "Azure Management Tool နဲ့ Infrastructure as Code"),
  description: L(
    "Portal, Cloud Shell, Azure CLI and PowerShell, Azure Resource Manager, ARM templates and Bicep, deployment modes and scopes, what-if, template specs, Azure Arc, Terraform and CI/CD deployment basics.",
    "Portal、Cloud Shell、Azure CLI と PowerShell、Azure Resource Manager、ARM テンプレートと Bicep、デプロイモードとスコープ、what-if、テンプレートスペック、Azure Arc、Terraform、CI/CD デプロイの基本を学びます。",
    "Portal၊ Cloud Shell၊ Azure CLI နဲ့ PowerShell၊ Azure Resource Manager၊ ARM template နဲ့ Bicep၊ deployment mode နဲ့ scope၊ what-if၊ template spec၊ Azure Arc၊ Terraform နဲ့ CI/CD deployment အခြေခံကို လေ့လာမယ်။",
  ),
  lesson: {
    minutes: 19,
    objectives: [
      L("Choose the right management tool (Portal, Cloud Shell, Azure CLI, Azure PowerShell, REST) for a task.",
        "作業に適した管理ツール（Portal、Cloud Shell、Azure CLI、Azure PowerShell、REST）を選べる。",
        "အလုပ်တစ်ခုအတွက် သင့်တော်တဲ့ management tool (Portal၊ Cloud Shell၊ Azure CLI၊ Azure PowerShell၊ REST) ကို ရွေးနိုင်မယ်။"),
      L("Explain how Azure Resource Manager makes declarative, idempotent deployments possible.",
        "Azure Resource Manager が宣言型で冪等なデプロイをどのように実現するか説明できる。",
        "Azure Resource Manager က declarative၊ idempotent deployment ကို ဘယ်လိုဖြစ်စေလဲ ရှင်းပြနိုင်မယ်။"),
      L("Read and write ARM templates and Bicep files, and deploy them at the correct scope and mode.",
        "ARM テンプレートと Bicep ファイルを読み書きし、正しいスコープとモードでデプロイできる。",
        "ARM template နဲ့ Bicep file ကို ဖတ်/ရေးပြီး မှန်ကန်တဲ့ scope နဲ့ mode နဲ့ deploy လုပ်နိုင်မယ်။"),
      L("Use what-if, template specs, export and decompile safely in real projects.",
        "what-if、テンプレートスペック、エクスポート、逆コンパイルを実際のプロジェクトで安全に使える。",
        "What-if၊ template spec၊ export နဲ့ decompile ကို လက်တွေ့ project မှာ ဘေးကင်းစွာ သုံးနိုင်မယ်။"),
      L("Describe Azure Arc, compare Bicep with Terraform, and outline a CI/CD deployment pipeline.",
        "Azure Arc を説明し、Bicep と Terraform を比較し、CI/CD デプロイパイプラインの概要を説明できる。",
        "Azure Arc ကို ရှင်းပြ၊ Bicep နဲ့ Terraform ကို နှိုင်းယှဉ်ပြီး CI/CD deployment pipeline ကို အကြမ်းဖော်ပြနိုင်မယ်။"),
    ],
    sections: [
      {
        id: "management-tools",
        title: L("Five ways to talk to Azure", "Azure を操作する 5 つの方法", "Azure နဲ့ ဆက်သွယ်တဲ့ နည်းလမ်း ၅ ခု"),
        blocks: [
          { type: 'p', text: L(
            "Every tool you use to manage Azure ends up calling the same **Azure Resource Manager REST API**. The difference is how you, the human, express what you want. The **Azure portal** is a web GUI: perfect for learning, exploring and one-off tasks. The **Azure CLI** (`az ...`) and **Azure PowerShell** (`New-AzVM ...`, the `Az` module) are command-line tools for scripting and automation; both run on Windows, macOS and Linux. **Azure Cloud Shell** is a browser-based shell, already authenticated, with both CLI and PowerShell pre-installed, so you can manage Azure from any PC or even the mobile app without installing anything.",
            "Azure を管理するどのツールも、最終的には同じ **Azure Resource Manager REST API** を呼び出します。違いは、人間がやりたいことをどう表現するかです。**Azure portal** は Web GUI で、学習・調査・単発の作業に最適です。**Azure CLI**（`az ...`）と **Azure PowerShell**（`New-AzVM ...`、`Az` モジュール）はスクリプトと自動化のためのコマンドラインツールで、どちらも Windows・macOS・Linux で動きます。**Azure Cloud Shell** はブラウザーベースのシェルで、認証済みかつ CLI と PowerShell の両方がインストール済みのため、何もインストールせずにどの PC やモバイルアプリからでも Azure を管理できます。",
            "Azure ကို စီမံတဲ့ tool မှန်သမျှက နောက်ဆုံးမှာ **Azure Resource Manager REST API** တစ်ခုတည်းကိုပဲ ခေါ်တာပါ။ ကွာတာက လူက ဘာလိုချင်လဲ ဘယ်လိုဖော်ပြလဲ ဆိုတာပါ။ **Azure portal** က web GUI ဖြစ်ပြီး လေ့လာဖို့၊ ရှာဖွေဖို့၊ တစ်ခါတည်းလုပ်မယ့်အလုပ်အတွက် အကောင်းဆုံး။ **Azure CLI** (`az ...`) နဲ့ **Azure PowerShell** (`New-AzVM ...`၊ `Az` module) က script နဲ့ automation အတွက် command-line tool တွေဖြစ်ပြီး Windows၊ macOS၊ Linux မှာ run လို့ရတယ်။ **Azure Cloud Shell** က browser ထဲက shell ဖြစ်ပြီး login ဝင်ပြီးသား၊ CLI နဲ့ PowerShell နှစ်ခုလုံး install ပြီးသားမို့ ဘာမှမ install ဘဲ ဘယ် PC ကနေမဆို mobile app ကနေတောင် Azure ကို စီမံနိုင်တယ်။"
          ) },
          { type: 'table',
            head: [L("Tool", "ツール", "Tool အမည်"), L("Style", "スタイル", "ပုံစံ"), L("Best for", "最適な用途", "သင့်တော်တာ")],
            rows: [
              [L("Azure portal", "Azure portal（Web 画面）", "Azure portal (web စာမျက်နှာ)"), L("GUI, point and click", "GUI、クリック操作", "GUI၊ click နှိပ်ပြီးသုံး"), L("Learning, dashboards, one-off changes", "学習、ダッシュボード、単発の変更", "လေ့လာ၊ dashboard၊ တစ်ခါတည်းပြင်")],
              [L("Azure Cloud Shell", "Azure Cloud Shell（ブラウザー）", "Azure Cloud Shell (browser ထဲ)"), L("Bash or PowerShell in the browser", "ブラウザー内の Bash または PowerShell", "Browser ထဲက Bash ဒါမှမဟုတ် PowerShell"), L("Quick scripts from any device, no install", "インストール不要、どの端末からでも手早くスクリプト", "Install မလို၊ ဘယ် device ကမဆို script မြန်မြန်")],
              [L("Azure CLI", "Azure CLI（コマンド）", "Azure CLI (command ရိုက်သုံး)"), L("`az group create`, text/JSON output", "`az group create`、テキスト/JSON 出力", "`az group create`၊ text/JSON output"), L("Bash scripts, Linux admins, pipelines", "Bash スクリプト、Linux 管理者、パイプライン", "Bash script၊ Linux admin၊ pipeline")],
              [L("Azure PowerShell", "Azure PowerShell（コマンドレット）", "Azure PowerShell (cmdlet ရိုက်သုံး)"), L("`New-AzResourceGroup`, .NET objects", "`New-AzResourceGroup`、.NET オブジェクト", "`New-AzResourceGroup`၊ .NET object"), L("Windows admins, object pipelines", "Windows 管理者、オブジェクトのパイプライン処理", "Windows admin၊ object pipeline")],
              [L("REST API / SDKs", "REST API / SDK（プログラム）", "REST API / SDK များ"), L("HTTPS calls from code", "コードからの HTTPS 呼び出し", "Code ကနေ HTTPS ခေါ်"), L("Custom apps and tools", "独自のアプリやツール", "ကိုယ်ပိုင် app နဲ့ tool")],
            ] },
          { type: 'code', lang: 'bash', code:
`# Azure CLI
az login
az group create --name rg-demo --location japaneast
az vm list --resource-group rg-demo --output table`,
            caption: L("The same task in Azure CLI...", "同じ作業を Azure CLI で...", "အလုပ်တူကို Azure CLI နဲ့...") },
          { type: 'code', lang: 'powershell', code:
`# Azure PowerShell (Az module)
Connect-AzAccount
New-AzResourceGroup -Name rg-demo -Location japaneast
Get-AzVM -ResourceGroupName rg-demo | Format-Table Name, Location`,
            caption: L("...and in Azure PowerShell", "...そして Azure PowerShell で", "...Azure PowerShell နဲ့") },
          { type: 'callout', tone: 'memory', text: L(
            "CLI commands are **lowercase noun-verb**: `az vm create`. PowerShell cmdlets are **Verb-AzNoun**: `New-AzVM`, `Get-AzVM`, `Remove-AzVM`. If you see a hyphen and **Az** in the middle, it is PowerShell.",
            "CLI のコマンドは**小文字の名詞→動詞**：`az vm create`。PowerShell のコマンドレットは**動詞-Az名詞**：`New-AzVM`、`Get-AzVM`、`Remove-AzVM`。ハイフンと真ん中の **Az** があれば PowerShell です。",
            "CLI command တွေက **စာလုံးအသေး noun-verb**- `az vm create`။ PowerShell cmdlet တွေက **Verb-AzNoun**- `New-AzVM`၊ `Get-AzVM`၊ `Remove-AzVM`။ Hyphen နဲ့ အလယ်မှာ **Az** တွေ့ရင် PowerShell ပါ။"
          ) },
        ],
      },
      {
        id: "azure-resource-manager",
        title: L("Azure Resource Manager: the single front door", "Azure Resource Manager：唯一の玄関口", "Azure Resource Manager - တစ်ခုတည်းသော ဝင်ပေါက်"),
        blocks: [
          { type: 'p', text: L(
            "**Azure Resource Manager (ARM)** is the deployment and management service of Azure. Every request, from any tool, goes through ARM, which authenticates you with Entra ID, checks **RBAC**, evaluates **Azure Policy** and **locks**, and then forwards the request to the right **resource provider** (for example `Microsoft.Compute` for VMs). Because there is one front door, behavior is consistent: a lock or a policy applies whether you click in the portal or run a pipeline.",
            "**Azure Resource Manager（ARM）**は Azure のデプロイと管理のサービスです。どのツールからの要求も ARM を通過し、ARM は Entra ID で認証し、**RBAC** を確認し、**Azure Policy** と**ロック**を評価してから、適切な**リソースプロバイダー**（例：VM なら `Microsoft.Compute`）に要求を転送します。玄関口が 1 つなので動作が一貫しており、ポータルでクリックしてもパイプラインで実行しても、ロックやポリシーが同じように適用されます。",
            "**Azure Resource Manager (ARM)** က Azure ရဲ့ deployment နဲ့ management service ပါ။ ဘယ် tool က request မဆို ARM ကို ဖြတ်ရတယ်၊ ARM က Entra ID နဲ့ authenticate လုပ်၊ **RBAC** စစ်၊ **Azure Policy** နဲ့ **lock** ကို စစ်ပြီးမှ သင့်တော်တဲ့ **resource provider** (ဥပမာ VM အတွက် `Microsoft.Compute`) ဆီ ပို့တယ်။ ဝင်ပေါက်တစ်ခုတည်းမို့ အပြုအမူ တသမတ်တည်းဖြစ်တယ်- portal မှာ click လုပ်လုပ်၊ pipeline နဲ့ run လုပ်လုပ် lock နဲ့ policy က အတူတူ သက်ရောက်တယ်။"
          ) },
          { type: 'diagram', text:
` Portal   Cloud Shell   Azure CLI   PowerShell   REST/SDK   Pipelines
    \\          |            |            |           |          /
     +---------+------------+------------+-----------+---------+
                               |
                 +---------------------------+
                 |  Azure Resource Manager   |
                 |  auth (Entra ID) + RBAC   |
                 |  Azure Policy + locks     |
                 +---------------------------+
                      |          |          |
          Microsoft.Compute  .Storage  .Network  (resource providers)
                      |          |          |
                     VMs      Storage     VNets`,
            caption: L("All tools share one management layer", "すべてのツールが 1 つの管理レイヤーを共有", "Tool အားလုံးက management layer တစ်ခုတည်းကို မျှသုံးတယ်") },
          { type: 'p', text: L(
            "**Infrastructure as Code (IaC)** means describing infrastructure in files that live in Git. There are two styles. **Imperative** = a recipe of steps: \"create a VNet, then create a subnet, then create a VM\"; if you run it twice it may fail or create duplicates. **Declarative** = the desired end state: \"there should be one VNet with this subnet and one VM\"; ARM works out what to create or change. ARM templates and Bicep are declarative and **idempotent**: deploy the same file ten times and you get the same result, with no duplicates.",
            "**Infrastructure as Code（IaC）**とは、Git で管理するファイルにインフラを記述することです。2 つのスタイルがあります。**命令型**＝手順のレシピ：「VNet を作り、次にサブネットを作り、次に VM を作る」。2 回実行すると失敗したり重複したりする可能性があります。**宣言型**＝望ましい最終状態：「このサブネットを持つ VNet が 1 つと VM が 1 つあるべき」。何を作成・変更するかは ARM が判断します。ARM テンプレートと Bicep は宣言型で**冪等**です。同じファイルを 10 回デプロイしても結果は同じで、重複は生じません。",
            "**Infrastructure as Code (IaC)** ဆိုတာ infrastructure ကို Git ထဲက file တွေမှာ ရေးဖော်ပြတာပါ။ ပုံစံ ၂ မျိုးရှိတယ်။ **Imperative** = အဆင့်လိုက် ချက်နည်း- \"VNet ဆောက်၊ ပြီးရင် subnet ဆောက်၊ ပြီးရင် VM ဆောက်\"၊ ၂ ခါ run ရင် fail ဖြစ်နိုင်တယ် ဒါမှမဟုတ် ထပ်နေနိုင်တယ်။ **Declarative** = လိုချင်တဲ့ နောက်ဆုံးအခြေအနေ- \"ဒီ subnet ပါတဲ့ VNet တစ်ခုနဲ့ VM တစ်လုံး ရှိရမယ်\"၊ ဘာဆောက်/ပြင်ရမလဲ ARM က တွက်ပေးတယ်။ ARM template နဲ့ Bicep က declarative ဖြစ်ပြီး **idempotent** ဖြစ်တယ်- file တူကို ၁၀ ခါ deploy လုပ်လည်း ရလဒ်တူတယ်၊ ထပ်မနေဘူး။"
          ) },
          { type: 'callout', tone: 'exam', text: L(
            "AZ-900 keywords: **\"consistent, repeatable deployments\"**, **\"declarative\"**, **\"deploy as a group\"** → ARM / ARM templates / Bicep. **\"Manage from a browser without installing tools\"** → Cloud Shell. Remember that ARM itself is free; you pay only for the resources you deploy.",
            "AZ-900 のキーワード：**「一貫性があり繰り返し可能なデプロイ」**、**「宣言型」**、**「グループとしてデプロイ」**→ ARM / ARM テンプレート / Bicep。**「ツールをインストールせずにブラウザーから管理」**→ Cloud Shell。ARM 自体は無料で、デプロイしたリソースの分だけ支払うことも覚えておきましょう。",
            "AZ-900 keyword- **\"consistent, repeatable deployment\"**၊ **\"declarative\"**၊ **\"group အလိုက် deploy\"** → ARM / ARM template / Bicep။ **\"Tool မ install ဘဲ browser ကနေ စီမံ\"** → Cloud Shell။ ARM ကိုယ်တိုင်က free ဖြစ်ပြီး deploy လုပ်တဲ့ resource အတွက်ပဲ ပေးရတာ မှတ်ထားပါ။"
          ) },
        ],
      },
      {
        id: "arm-templates",
        title: L("ARM templates: the JSON blueprint", "ARM テンプレート：JSON の設計図", "ARM template - JSON ပုံစံ blueprint"),
        blocks: [
          { type: 'p', text: L(
            "An **ARM template** is a JSON file that ARM understands natively. Like an architect's blueprint with blanks for the customer's choices, it has a fixed structure: **parameters** (values supplied at deploy time, such as environment name), **variables** (values computed inside the template to avoid repetition), **resources** (what to deploy, each with `type`, `apiVersion`, `name`, `location`, `properties`), and **outputs** (values returned after deployment, such as an endpoint URL). Optional sections include **functions** (user-defined).",
            "**ARM テンプレート**は ARM がネイティブに理解する JSON ファイルです。顧客の選択肢を空欄にした建築設計図のように、決まった構造があります：**parameters**（環境名などデプロイ時に渡す値）、**variables**（繰り返しを避けるためテンプレート内で計算する値）、**resources**（デプロイ対象。それぞれ `type`、`apiVersion`、`name`、`location`、`properties` を持つ）、**outputs**（エンドポイント URL などデプロイ後に返す値）。オプションのセクションとして **functions**（ユーザー定義関数）もあります。",
            "**ARM template** က ARM က တိုက်ရိုက်နားလည်တဲ့ JSON file ပါ။ Customer ရွေးဖို့ ကွက်လပ်ချန်ထားတဲ့ ဗိသုကာ blueprint လိုပဲ ဖွဲ့စည်းပုံ သတ်မှတ်ထားတယ်- **parameters** (environment name လို deploy လုပ်ချိန် ထည့်ပေးတဲ့ value)၊ **variables** (ထပ်ခါမရေးရအောင် template ထဲမှာ တွက်ထားတဲ့ value)၊ **resources** (deploy လုပ်မယ့်အရာ၊ တစ်ခုချင်းမှာ `type`၊ `apiVersion`၊ `name`၊ `location`၊ `properties` ပါ)၊ **outputs** (endpoint URL လို deploy ပြီးမှ ပြန်ပေးတဲ့ value)။ Optional အနေနဲ့ **functions** (user-defined) လည်းရှိတယ်။"
          ) },
          { type: 'code', lang: 'json', code:
`{
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "parameters": {
    "env": { "type": "string", "allowedValues": ["dev", "prod"] },
    "location": { "type": "string", "defaultValue": "[resourceGroup().location]" }
  },
  "variables": {
    "storageName": "[concat('st', parameters('env'), uniqueString(resourceGroup().id))]"
  },
  "resources": [
    {
      "type": "Microsoft.Storage/storageAccounts",
      "apiVersion": "2023-05-01",
      "name": "[variables('storageName')]",
      "location": "[parameters('location')]",
      "sku": { "name": "Standard_LRS" },
      "kind": "StorageV2",
      "properties": { "minimumTlsVersion": "TLS1_2" }
    }
  ],
  "outputs": {
    "blobEndpoint": {
      "type": "string",
      "value": "[reference(variables('storageName')).primaryEndpoints.blob]"
    }
  }
}`,
            caption: L("A complete ARM template: parameters, variables, resources, outputs", "完全な ARM テンプレート：parameters、variables、resources、outputs", "ARM template အပြည့်အစုံ- parameters၊ variables၊ resources၊ outputs") },
          { type: 'list', items: [
            L("Expressions in square brackets `[...]` are evaluated by ARM at deploy time: `parameters()`, `variables()`, `resourceGroup()`, `uniqueString()`, `reference()`.", "角かっこ `[...]` 内の式はデプロイ時に ARM が評価します：`parameters()`、`variables()`、`resourceGroup()`、`uniqueString()`、`reference()`。", "Square bracket `[...]` ထဲက expression တွေကို deploy လုပ်ချိန် ARM က တွက်တယ်- `parameters()`၊ `variables()`၊ `resourceGroup()`၊ `uniqueString()`၊ `reference()`။"),
            L("ARM figures out order from `dependsOn` and `reference()`, and deploys independent resources **in parallel**.", "ARM は `dependsOn` と `reference()` から順序を判断し、依存関係のないリソースは**並列**でデプロイします。", "ARM က `dependsOn` နဲ့ `reference()` ကနေ အစီအစဉ်ကို တွက်ပြီး မှီခိုမှုမရှိတဲ့ resource တွေကို **တပြိုင်နက်** deploy လုပ်တယ်။"),
            L("A separate **parameter file** (`main.parameters.json`) lets one template serve dev, test and prod.", "別の**パラメーターファイル**（`main.parameters.json`）を使うと、1 つのテンプレートで dev・test・prod に対応できます。", "သီးခြား **parameter file** (`main.parameters.json`) သုံးရင် template တစ်ခုတည်းနဲ့ dev၊ test၊ prod အားလုံးအတွက် သုံးလို့ရတယ်။"),
            L("Never put secrets as plain default values; use `secureString` parameters and a **Key Vault reference** in the parameter file.", "シークレットを平文の既定値にしてはいけません。`secureString` パラメーターと、パラメーターファイル内の **Key Vault 参照**を使います。", "Secret ကို plain default value အဖြစ် ဘယ်တော့မှ မထည့်ပါနဲ့၊ `secureString` parameter နဲ့ parameter file ထဲမှာ **Key Vault reference** ကို သုံးပါ။"),
          ] },
          { type: 'callout', tone: 'memory', text: L(
            "Template sections in order: **\"Please Visit Rural Ohio\"** = **P**arameters (input), **V**ariables (helper), **R**esources (the work), **O**utputs (result). Input → helper → work → result.",
            "テンプレートのセクション順：**「Please Visit Rural Ohio」**＝**P**arameters（入力）、**V**ariables（補助）、**R**esources（本体）、**O**utputs（結果）。入力→補助→本体→結果。",
            "Template section အစီအစဉ်- **\"Please Visit Rural Ohio\"** = **P**arameters (input)၊ **V**ariables (helper)၊ **R**esources (အလုပ်အစစ်)၊ **O**utputs (ရလဒ်)။ Input → helper → အလုပ် → ရလဒ်။"
          ) },
        ],
      },
      {
        id: "modes-and-scopes",
        title: L("Deployment modes and deployment scopes", "デプロイモードとデプロイスコープ", "Deployment mode နဲ့ deployment scope"),
        blocks: [
          { type: 'p', text: L(
            "For resource group deployments there are two **modes**. **Incremental** (the default) adds or updates the resources in the template and **leaves everything else in the resource group untouched**. **Complete** makes the resource group look **exactly** like the template: resources that exist in the group but are not in the template are **deleted**. Complete mode is powerful for keeping environments clean, and dangerous if someone deploys a template that only contains one resource.",
            "Resource Group へのデプロイには 2 つの**モード**があります。**増分（Incremental）**（既定）はテンプレート内のリソースを追加・更新し、**Resource Group 内のその他のものには触れません**。**完全（Complete）**は Resource Group をテンプレートと**完全に同じ**状態にし、グループに存在するがテンプレートにないリソースは**削除**されます。完全モードは環境をきれいに保つのに強力ですが、リソースを 1 つしか含まないテンプレートを誰かがデプロイすると危険です。",
            "Resource group deployment အတွက် **mode** ၂ မျိုးရှိတယ်။ **Incremental** (default) က template ထဲက resource တွေကို ထည့်/update လုပ်ပြီး **resource group ထဲက ကျန်တာတွေကို မထိဘူး**။ **Complete** က resource group ကို template နဲ့ **အတိအကျ** တူအောင်လုပ်တယ်- group ထဲမှာရှိပြီး template ထဲမပါတဲ့ resource တွေကို **ဖျက်ပစ်တယ်**။ Complete mode က environment သန့်ရှင်းအောင် ထိန်းဖို့ အစွမ်းထက်ပေမဲ့ resource တစ်ခုပဲပါတဲ့ template ကို တစ်ယောက်ယောက်က deploy လုပ်ရင် အန္တရာယ်ကြီးတယ်။"
          ) },
          { type: 'table',
            head: [L("Scope", "スコープ", "Scope (အဆင့်)"), L("Azure CLI command", "Azure CLI コマンド", "Azure CLI command (အမိန့်)"), L("Typical content", "典型的な内容", "ပုံမှန်ပါတဲ့အရာ")],
            rows: [
              [L("Resource group", "Resource Group（リソースグループ）", "Resource group အဆင့်"), L("`az deployment group create`", "`az deployment group create` を使用", "`az deployment group create` ကိုသုံး"), L("VMs, storage, VNets, web apps", "VM、ストレージ、VNet、Web アプリ", "VM၊ storage၊ VNet၊ web app")],
              [L("Subscription", "サブスクリプション", "Subscription အဆင့်"), L("`az deployment sub create`", "`az deployment sub create` を使用", "`az deployment sub create` ကိုသုံး"), L("Resource groups, policy and role assignments, budgets", "Resource Group、ポリシーとロールの割り当て、予算", "Resource group၊ policy နဲ့ role assignment၊ budget")],
              [L("Management group", "管理グループ", "Management group အဆင့်"), L("`az deployment mg create`", "`az deployment mg create` を使用", "`az deployment mg create` ကိုသုံး"), L("Policy definitions and assignments across subscriptions", "複数サブスクリプションにまたがるポリシー定義と割り当て", "Subscription အများကြီးအတွက် policy definition နဲ့ assignment")],
              [L("Tenant", "テナント", "Tenant အဆင့်"), L("`az deployment tenant create`", "`az deployment tenant create` を使用", "`az deployment tenant create` ကိုသုံး"), L("Management groups themselves", "管理グループ自体", "Management group ကိုယ်တိုင်")],
            ] },
          { type: 'code', lang: 'bash', code:
`# Resource group scope, incremental (default)
az deployment group create -g rg-app-dev \\
  --template-file main.json --parameters env=dev

# Complete mode: deletes resources in rg-app-dev that are NOT in the template
az deployment group create -g rg-app-dev \\
  --template-file main.json --parameters env=dev --mode Complete

# Subscription scope needs a location to store deployment metadata
az deployment sub create --location japaneast --template-file sub.bicep`,
            caption: L("Mode and scope on the command line", "コマンドラインでのモードとスコープ", "Command line မှာ mode နဲ့ scope") },
          { type: 'callout', tone: 'warn', text: L(
            "Complete mode exists only for **resource group** deployments. Before using it, always run **what-if** and make sure the template contains every resource the group should keep. Resources protected by a **CanNotDelete lock** will cause the delete to fail rather than disappear.",
            "完全モードは **Resource Group** のデプロイにのみ存在します。使う前に必ず **what-if** を実行し、グループに残すべきリソースがすべてテンプレートに含まれていることを確認してください。**CanNotDelete ロック**で保護されたリソースは消えずに、削除が失敗します。",
            "Complete mode က **resource group** deployment မှာပဲ ရှိတယ်။ မသုံးခင် **what-if** ကို အမြဲ run ပြီး group ထဲမှာ ထားရမယ့် resource အားလုံး template ထဲပါမပါ သေချာစစ်ပါ။ **CanNotDelete lock** နဲ့ ကာကွယ်ထားတဲ့ resource တွေက ပျောက်မသွားဘဲ delete က fail ဖြစ်မယ်။"
          ) },
        ],
      },
      {
        id: "bicep",
        title: L("Bicep: ARM templates for humans", "Bicep：人間のための ARM テンプレート", "Bicep - လူတွေအတွက် ARM template"),
        blocks: [
          { type: 'p', text: L(
            "JSON templates work, but they are noisy: brackets, `concat()`, and long `dependsOn` lists. **Bicep** is Microsoft's domain-specific language for the same thing. A Bicep file is **transpiled into an ARM JSON template** before deployment, so it supports every resource type and API version on day one, needs no state file, and is fully supported by Microsoft. Think of Bicep as TypeScript and ARM JSON as the compiled JavaScript.",
            "JSON テンプレートは動きますが、角かっこ、`concat()`、長い `dependsOn` の一覧などで読みにくくなります。**Bicep** は同じことを行うための Microsoft のドメイン固有言語です。Bicep ファイルはデプロイ前に **ARM JSON テンプレートにトランスパイル**されるため、すべてのリソースの種類と API バージョンを初日からサポートし、状態ファイルは不要で、Microsoft が完全にサポートしています。Bicep は TypeScript、ARM JSON はコンパイル後の JavaScript と考えてください。",
            "JSON template က အလုပ်လုပ်ပေမဲ့ bracket၊ `concat()`၊ `dependsOn` စာရင်းရှည်တွေနဲ့ ဖတ်ရခက်တယ်။ **Bicep** က အဲဒီအလုပ်အတွက် Microsoft ရဲ့ domain-specific language ပါ။ Bicep file ကို deploy မလုပ်ခင် **ARM JSON template အဖြစ် transpile** လုပ်လို့ resource type နဲ့ API version အားလုံးကို ချက်ချင်း support လုပ်တယ်၊ state file မလိုဘူး၊ Microsoft က အပြည့်အဝ support ပေးတယ်။ Bicep ကို TypeScript၊ ARM JSON ကို compile ပြီးသား JavaScript လို့ မြင်ကြည့်ပါ။"
          ) },
          { type: 'code', lang: 'bicep', code:
`@allowed([ 'dev', 'prod' ])
param env string
param location string = resourceGroup().location

var storageName = 'st\${env}\${uniqueString(resourceGroup().id)}'

resource stg 'Microsoft.Storage/storageAccounts@2023-05-01' = {
  name: storageName
  location: location
  sku: { name: env == 'prod' ? 'Standard_ZRS' : 'Standard_LRS' }
  kind: 'StorageV2'
  properties: { minimumTlsVersion: 'TLS1_2' }
}

// Reuse another file as a module, deployed into a different resource group
module net 'modules/vnet.bicep' = {
  name: 'vnet-deploy'
  scope: resourceGroup('rg-network-\${env}')
  params: { location: location, addressPrefix: '10.20.0.0/16' }
}

output blobEndpoint string = stg.properties.primaryEndpoints.blob`,
            caption: L("The same storage account in Bicep, plus a module", "同じストレージアカウントを Bicep で記述し、モジュールを追加", "အဲဒီ storage account ကိုပဲ Bicep နဲ့ရေးပြီး module တစ်ခုထည့်") },
          { type: 'list', items: [
            L("**Implicit dependencies**: referencing `stg.properties` makes ARM deploy `stg` first; `dependsOn` is rarely needed.", "**暗黙の依存関係**：`stg.properties` を参照すると ARM は先に `stg` をデプロイするため、`dependsOn` はほとんど不要です。", "**Implicit dependency**- `stg.properties` ကို reference လုပ်ရင် ARM က `stg` ကို အရင် deploy လုပ်လို့ `dependsOn` ကို မလိုသလောက်ပဲ။"),
            L("**Modules** split big deployments into reusable files and can target another scope with `scope:`.", "**モジュール**は大きなデプロイを再利用可能なファイルに分割し、`scope:` で別のスコープを対象にできます。", "**Module** က deployment ကြီးတွေကို ပြန်သုံးလို့ရတဲ့ file တွေအဖြစ် ခွဲပေးပြီး `scope:` နဲ့ တခြား scope ကို target လုပ်နိုင်တယ်။"),
            L("`targetScope = 'subscription'` at the top changes the file's scope (default is resource group).", "先頭の `targetScope = 'subscription'` でファイルのスコープが変わります（既定は Resource Group）。", "ထိပ်ဆုံးက `targetScope = 'subscription'` က file ရဲ့ scope ကို ပြောင်းတယ် (default က resource group)။"),
            L("`az bicep build` creates the JSON, and `az bicep decompile` converts existing JSON into Bicep (best effort; review the result).", "`az bicep build` で JSON を生成し、`az bicep decompile` で既存の JSON を Bicep に変換します（ベストエフォートなので結果を確認）。", "`az bicep build` က JSON ထုတ်ပေးပြီး `az bicep decompile` က ရှိပြီးသား JSON ကို Bicep ပြောင်းပေးတယ် (best effort ဖြစ်လို့ ရလဒ်ကို ပြန်စစ်ပါ)။"),
          ] },
          { type: 'callout', tone: 'exam', text: L(
            "Exam patterns: \"Which language is declarative, Azure-native and compiles to ARM JSON?\" → **Bicep**. \"Convert an existing JSON template to Bicep\" → `az bicep decompile`. \"Deploy main.bicep to a resource group\" → `az deployment group create --template-file main.bicep` (CLI compiles it for you). Trap: Bicep does **not** keep a state file; that is Terraform.",
            "出題パターン：「宣言型で Azure ネイティブ、ARM JSON にコンパイルされる言語は？」→ **Bicep**。「既存の JSON テンプレートを Bicep に変換」→ `az bicep decompile`。「main.bicep を Resource Group にデプロイ」→ `az deployment group create --template-file main.bicep`（CLI が自動でコンパイル）。罠：Bicep は状態ファイルを**持ちません**。それは Terraform です。",
            "Exam pattern- \"Declarative ဖြစ်၊ Azure-native ဖြစ်ပြီး ARM JSON ကို compile ဖြစ်တဲ့ language?\" → **Bicep**။ \"ရှိပြီးသား JSON template ကို Bicep ပြောင်း\" → `az bicep decompile`။ \"main.bicep ကို resource group ထဲ deploy\" → `az deployment group create --template-file main.bicep` (CLI က compile လုပ်ပေးတယ်)။ ထောင်ချောက်- Bicep မှာ state file **မရှိဘူး**၊ အဲဒါ Terraform ပါ။"
          ) },
        ],
      },
      {
        id: "whatif-specs-export",
        title: L("What-if, template specs, exporting and decompiling", "what-if、テンプレートスペック、エクスポート、逆コンパイル", "What-if၊ template spec၊ export နဲ့ decompile"),
        blocks: [
          { type: 'p', text: L(
            "**What-if** is the \"preview before you press the button\" of Azure. It compares the template with what currently exists and lists changes as **Create**, **Delete**, **Modify**, **NoChange** or **Ignore**, without changing anything. Use it in every pull request and before every Complete-mode deployment. In the CLI you can also deploy with `--confirm-with-what-if` to see the preview and approve it interactively; in PowerShell use `-WhatIf` (preview only) or `-Confirm`.",
            "**what-if** は Azure の「ボタンを押す前のプレビュー」です。テンプレートと現在の状態を比較し、何も変更せずに変更点を **Create**、**Delete**、**Modify**、**NoChange**、**Ignore** として一覧表示します。すべてのプルリクエストと、完全モードのデプロイ前には必ず使いましょう。CLI では `--confirm-with-what-if` を付けてデプロイすると、プレビューを確認して対話的に承認できます。PowerShell では `-WhatIf`（プレビューのみ）または `-Confirm` を使います。",
            "**What-if** က Azure ရဲ့ \"button မနှိပ်ခင် preview\" ပါ။ Template နဲ့ လက်ရှိရှိနေတာကို နှိုင်းယှဉ်ပြီး ဘာမှမပြောင်းဘဲ ပြောင်းလဲမှုတွေကို **Create**၊ **Delete**၊ **Modify**၊ **NoChange**၊ **Ignore** အဖြစ် ပြတယ်။ Pull request တိုင်းမှာ၊ Complete-mode deployment မလုပ်ခင်တိုင်း သုံးပါ။ CLI မှာ `--confirm-with-what-if` နဲ့ deploy ရင် preview ကြည့်ပြီး interactive approve လုပ်နိုင်တယ်၊ PowerShell မှာ `-WhatIf` (preview ပဲ) ဒါမှမဟုတ် `-Confirm` သုံးပါ။"
          ) },
          { type: 'code', lang: 'bash', code:
`# Preview only
az deployment group what-if -g rg-app-prod --template-file main.bicep --parameters env=prod

# Publish a reusable, versioned template spec, then deploy it by ID
az ts create -g rg-templates -n storage-standard -v 1.0 -l japaneast --template-file main.bicep
SPEC_ID=$(az ts show -g rg-templates -n storage-standard -v 1.0 --query id -o tsv)
az deployment group create -g rg-app-dev --template-spec $SPEC_ID --parameters env=dev

# Export what already exists, then convert to Bicep
az group export -n rg-legacy > legacy.json
az bicep decompile --file legacy.json`,
            caption: L("What-if, template specs and export in practice", "what-if、テンプレートスペック、エクスポートの実践", "What-if၊ template spec နဲ့ export ကို လက်တွေ့သုံးပုံ") },
          { type: 'p', text: L(
            "A **template spec** stores a template **as an Azure resource** (`Microsoft.Resources/templateSpecs`) with **versions**. Share it with **RBAC** (Reader on the spec lets teams deploy it), so a platform team can publish an approved \"standard storage account\" or \"landing zone VNet\" without emailing files or exposing a storage URL with a SAS token. **Exporting** a template (portal: resource group > **Export template**, or `az group export`) is great for learning and as a starting point, but the result is not production-ready: values are hard-coded, some resource types or properties cannot be exported, and data inside resources (blobs, database rows) is never included.",
            "**テンプレートスペック**はテンプレートを**バージョン付きの Azure リソース**（`Microsoft.Resources/templateSpecs`）として保存します。**RBAC** で共有でき（スペックの Reader があればデプロイ可能）、プラットフォームチームは承認済みの「標準ストレージアカウント」や「ランディングゾーン VNet」を、ファイルをメールで送ったり SAS トークン付きのストレージ URL を公開したりせずに配布できます。テンプレートの**エクスポート**（ポータル：Resource Group >**テンプレートのエクスポート**、または `az group export`）は学習や出発点として便利ですが、結果はそのまま本番には使えません。値がハードコードされ、エクスポートできないリソースの種類やプロパティがあり、リソース内のデータ（BLOB、データベースの行）は含まれません。",
            "**Template spec** က template ကို **version ပါတဲ့ Azure resource** (`Microsoft.Resources/templateSpecs`) အဖြစ် သိမ်းတယ်။ **RBAC** နဲ့ share လို့ရလို့ (spec မှာ Reader ရရင် deploy လို့ရ) platform team က approve လုပ်ထားတဲ့ \"standard storage account\" ဒါမှမဟုတ် \"landing zone VNet\" ကို file email ပို့စရာမလို၊ SAS token ပါတဲ့ storage URL ဖွင့်ပေးစရာမလိုဘဲ ဖြန့်ပေးနိုင်တယ်။ Template **export** လုပ်တာ (portal- resource group > **Export template**၊ ဒါမှမဟုတ် `az group export`) က လေ့လာဖို့နဲ့ စမှတ်အဖြစ် ကောင်းပေမဲ့ production မှာ တန်းသုံးလို့မရဘူး- value တွေ hard-code ဖြစ်နေတယ်၊ export မရတဲ့ resource type/property တွေရှိတယ်၊ resource ထဲက data (blob၊ database row) ကတော့ ဘယ်တော့မှ မပါဘူး။"
          ) },
          { type: 'callout', tone: 'tip', text: L(
            "Want resources that are managed **as one unit** and protected from accidental deletion? Look at **deployment stacks** (`az stack group create`): they track the resources a template created, can delete resources that are removed from the template, and can apply **deny settings**.",
            "リソースを**1 つの単位として**管理し、誤削除から保護したいですか？**デプロイスタック**（`az stack group create`）を検討しましょう。テンプレートが作成したリソースを追跡し、テンプレートから外したリソースを削除でき、**拒否設定**を適用できます。",
            "Resource တွေကို **unit တစ်ခုတည်းအဖြစ်** စီမံပြီး မတော်တဆ ဖျက်တာက ကာကွယ်ချင်လား? **Deployment stack** (`az stack group create`) ကို ကြည့်ပါ- template က ဖန်တီးထားတဲ့ resource တွေကို ခြေရာခံ၊ template ထဲက ဖယ်လိုက်တဲ့ resource ကို ဖျက်နိုင်ပြီး **deny setting** လည်း ထည့်နိုင်တယ်။"
          ) },
        ],
      },
      {
        id: "arc-terraform",
        title: L("Azure Arc and Terraform: beyond Azure-only", "Azure Arc と Terraform：Azure の外へ", "Azure Arc နဲ့ Terraform - Azure အပြင်ဘက်"),
        blocks: [
          { type: 'p', text: L(
            "**Azure Arc** extends Azure Resource Manager to resources **outside Azure**: physical or virtual servers on-premises, VMs in AWS or Google Cloud, any CNCF-conformant **Kubernetes** cluster, and data services such as SQL Server. After you install the Arc agent, the server appears as an Azure resource (`Microsoft.HybridCompute/machines`) in a resource group. Now you can use **tags, RBAC, Azure Policy (machine configuration), Defender for Cloud, Azure Monitor and Update Manager** on it, just like a native VM. The server does not move; only its management does.",
            "**Azure Arc** は Azure Resource Manager を **Azure の外**にあるリソースへ拡張します：オンプレミスの物理/仮想サーバー、AWS や Google Cloud の VM、CNCF 準拠の **Kubernetes** クラスター、SQL Server などのデータサービスです。Arc エージェントをインストールすると、サーバーは Resource Group 内の Azure リソース（`Microsoft.HybridCompute/machines`）として表示されます。これで、ネイティブの VM と同じように**タグ、RBAC、Azure Policy（マシン構成）、Defender for Cloud、Azure Monitor、Update Manager** を使えます。サーバー自体は移動せず、管理だけが移ります。",
            "**Azure Arc** က Azure Resource Manager ကို **Azure အပြင်ဘက်** resource တွေဆီ ချဲ့ပေးတယ်- on-prem physical/virtual server၊ AWS ဒါမှမဟုတ် Google Cloud ထဲက VM၊ CNCF-conformant **Kubernetes** cluster မှန်သမျှ၊ SQL Server လို data service တွေ။ Arc agent install ပြီးရင် server က resource group ထဲမှာ Azure resource (`Microsoft.HybridCompute/machines`) အဖြစ် ပေါ်လာတယ်။ အဲဒီအခါ native VM လိုပဲ **tag၊ RBAC၊ Azure Policy (machine configuration)၊ Defender for Cloud၊ Azure Monitor၊ Update Manager** တွေ သုံးလို့ရပြီ။ Server ကိုယ်တိုင် မရွှေ့ဘူး၊ management ပဲ ရွှေ့လာတာ။"
          ) },
          { type: 'p', text: L(
            "**Terraform** (by HashiCorp) is a popular open-source-style IaC tool that uses **HCL** and **providers**, such as `azurerm`, for Azure and many other platforms. It is also declarative, but it keeps a **state file** that records what it deployed; for teams, the state is usually stored remotely (for example in an Azure Storage blob with locking). Choose Terraform when you manage several clouds or SaaS products with one workflow; choose Bicep when you are Azure-focused and want no state to manage and immediate support for new Azure features.",
            "**Terraform**（HashiCorp 製）は **HCL** と、Azure 用の `azurerm` などの**プロバイダー**を使う人気の IaC ツールで、Azure 以外の多くのプラットフォームにも対応します。これも宣言型ですが、何をデプロイしたかを記録する**状態ファイル**を保持します。チームでは通常、状態をリモート（例：ロック付きの Azure Storage BLOB）に保存します。複数のクラウドや SaaS を 1 つのワークフローで管理するなら Terraform、Azure 中心で状態管理が不要かつ新機能にすぐ対応したいなら Bicep を選びます。",
            "**Terraform** (HashiCorp) က **HCL** နဲ့ Azure အတွက် `azurerm` လို **provider** တွေကို သုံးတဲ့ လူကြိုက်များတဲ့ IaC tool ဖြစ်ပြီး Azure အပြင် platform အများကြီးကို support လုပ်တယ်။ Declarative ပဲ ဖြစ်ပေမဲ့ ဘာ deploy လုပ်ထားလဲ မှတ်ထားတဲ့ **state file** ကို သိမ်းထားတယ်၊ team အလိုက်သုံးရင် state ကို remote (ဥပမာ locking ပါတဲ့ Azure Storage blob) မှာ ထားလေ့ရှိတယ်။ Cloud အများကြီး၊ SaaS တွေကို workflow တစ်ခုတည်းနဲ့ စီမံချင်ရင် Terraform၊ Azure ပဲ အဓိကဖြစ်ပြီး state မစီမံချင်၊ Azure feature အသစ်ကို ချက်ချင်းသုံးချင်ရင် Bicep ရွေးပါ။"
          ) },
          { type: 'table',
            head: [L("Aspect", "観点", "အချက်"), L("ARM JSON", "ARM JSON（テンプレート）", "ARM JSON (template ပုံစံ)"), L("Bicep", "Bicep（専用言語）", "Bicep (DSL ဘာသာ)"), L("Terraform", "Terraform（HCL 言語）", "Terraform (HCL ဘာသာ)")],
            rows: [
              [L("Language", "言語", "ဘာသာစကား"), L("JSON, verbose", "JSON、冗長", "JSON၊ စာရှည်"), L("Concise DSL", "簡潔な DSL", "တိုတောင်းတဲ့ DSL"), L("HCL", "HCL 言語", "HCL ဘာသာ")],
              [L("Clouds", "対象クラウド", "သုံးနိုင်တဲ့ Cloud"), L("Azure only", "Azure のみ", "Azure ပဲ"), L("Azure only", "Azure のみ", "Azure ပဲ"), L("Multicloud and SaaS", "マルチクラウドと SaaS", "Multicloud နဲ့ SaaS")],
              [L("State", "状態管理", "State စီမံပုံ"), L("No state file (ARM is the source of truth)", "状態ファイルなし（ARM が正）", "State file မရှိ (ARM က အမှန်တရား)"), L("No state file", "状態ファイルなし", "State file မရှိ"), L("State file you must store and protect", "保存・保護が必要な状態ファイル", "သိမ်းပြီး ကာကွယ်ရမယ့် state file")],
              [L("Preview changes", "変更のプレビュー", "ပြောင်းလဲမှု preview"), L("what-if", "what-if を使用", "what-if သုံး"), L("what-if", "what-if を使用", "what-if သုံး"), L("`terraform plan`", "`terraform plan` を使用", "`terraform plan` သုံး")],
            ] },
          { type: 'callout', tone: 'exam', text: L(
            "AZ-900: \"Manage on-premises and multicloud servers and Kubernetes from Azure, apply Azure Policy to them\" → **Azure Arc**. Don't confuse with **Azure Stack Hub/HCI** (Azure hardware or services running in your datacenter) or **Azure Lighthouse** (managing other customers' tenants).",
            "AZ-900：「オンプレミスやマルチクラウドのサーバーと Kubernetes を Azure から管理し、Azure Policy を適用する」→ **Azure Arc**。**Azure Stack Hub/HCI**（自社データセンターで動く Azure のハードウェアやサービス）や **Azure Lighthouse**（他の顧客テナントの管理）と混同しないようにしましょう。",
            "AZ-900- \"On-prem နဲ့ multicloud server၊ Kubernetes ကို Azure ကနေ စီမံပြီး Azure Policy သုံး\" → **Azure Arc**။ **Azure Stack Hub/HCI** (ကိုယ့် datacenter ထဲမှာ run တဲ့ Azure hardware/service) နဲ့ **Azure Lighthouse** (တခြား customer tenant ကို စီမံတာ) နဲ့ မရောပါနဲ့။"
          ) },
        ],
      },
      {
        id: "cicd",
        title: L("CI/CD: deploying infrastructure from Git", "CI/CD：Git からインフラをデプロイする", "CI/CD - Git ကနေ infrastructure ကို deploy"),
        blocks: [
          { type: 'p', text: L(
            "IaC pays off fully when a pipeline deploys it. A typical flow with **GitHub Actions** or **Azure Pipelines**: a pull request triggers **lint/build** (`az bicep build`) and **what-if** so reviewers see the exact change; after approval and merge, the pipeline deploys to dev, then to prod behind a manual approval gate. The pipeline signs in as a **service principal** or **managed identity**, ideally through **workload identity federation (OIDC)** so no client secret is stored, and it gets only the RBAC role it needs (for example Contributor on the target resource group, not Owner on the tenant).",
            "IaC はパイプラインでデプロイしてこそ真価を発揮します。**GitHub Actions** や **Azure Pipelines** の典型的な流れ：プルリクエストで **lint/build**（`az bicep build`）と **what-if** が実行され、レビュー担当者は正確な変更内容を確認できます。承認・マージ後、パイプラインは dev にデプロイし、手動承認ゲートを経て prod にデプロイします。パイプラインは**サービスプリンシパル**または**マネージド ID** としてサインインし、可能なら**ワークロード ID フェデレーション（OIDC）**を使ってクライアントシークレットを保存しません。また必要な RBAC ロールだけ（例：テナントの Owner ではなく対象 Resource Group の Contributor）を付与します。",
            "IaC က pipeline နဲ့ deploy လုပ်မှ တန်ဖိုးအပြည့်ရတယ်။ **GitHub Actions** ဒါမှမဟုတ် **Azure Pipelines** နဲ့ ပုံမှန် flow- pull request က **lint/build** (`az bicep build`) နဲ့ **what-if** ကို run ပြီး reviewer တွေက ပြောင်းလဲမှုအတိအကျကို မြင်ရတယ်၊ approve လုပ်ပြီး merge ပြီးရင် pipeline က dev ကို deploy၊ manual approval gate ဖြတ်ပြီးမှ prod ကို deploy လုပ်တယ်။ Pipeline က **service principal** ဒါမှမဟုတ် **managed identity** အဖြစ် sign in ဝင်ပြီး client secret မသိမ်းရအောင် **workload identity federation (OIDC)** သုံးတာ အကောင်းဆုံး၊ လိုတဲ့ RBAC role ပဲ ပေးပါ (ဥပမာ tenant မှာ Owner မဟုတ်ဘဲ target resource group မှာ Contributor)။"
          ) },
          { type: 'code', lang: 'yaml', code:
`# .github/workflows/infra.yml (simplified)
name: deploy-infra
on:
  push:
    branches: [ main ]
permissions:
  id-token: write   # required for OIDC federation
  contents: read
jobs:
  deploy-dev:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: azure/login@v2
        with:
          client-id: \${{ secrets.AZURE_CLIENT_ID }}
          tenant-id: \${{ secrets.AZURE_TENANT_ID }}
          subscription-id: \${{ secrets.AZURE_SUBSCRIPTION_ID }}
      - run: az bicep build --file infra/main.bicep
      - run: az deployment group what-if -g rg-app-dev -f infra/main.bicep -p env=dev
      - run: az deployment group create -g rg-app-dev -f infra/main.bicep -p env=dev`,
            caption: L("GitHub Actions with OIDC: IDs only, no client secret", "OIDC を使う GitHub Actions：ID のみでクライアントシークレットなし", "OIDC နဲ့ GitHub Actions - ID ပဲ၊ client secret မပါ") },
          { type: 'callout', tone: 'memory', text: L(
            "Pipeline rhythm: **Build → Preview → Approve → Deploy** (\"**B**e **P**atient, **A**lways **D**eploy safely\").",
            "パイプラインのリズム：**Build → Preview → Approve → Deploy**（「**B**e **P**atient, **A**lways **D**eploy safely」＝焦らず、常に安全にデプロイ）。",
            "Pipeline စည်းချက်- **Build → Preview → Approve → Deploy** (\"**B**e **P**atient, **A**lways **D**eploy safely\" = စိတ်ရှည်ရှည်နဲ့ အမြဲဘေးကင်းအောင် deploy)။"
          ) },
          { type: 'callout', tone: 'warn', text: L(
            "Avoid **configuration drift**: if people change production in the portal, the next pipeline run may silently revert their change, or Complete mode may delete their resource. Agree that the Git repository is the single source of truth and use Azure Policy or locks to discourage manual changes.",
            "**構成のずれ（ドリフト）**を避けましょう。ポータルで本番を手動変更すると、次のパイプライン実行で変更が気づかぬうちに元に戻ったり、完全モードでリソースが削除されたりします。Git リポジトリを唯一の正とすることを合意し、Azure Policy やロックで手動変更を抑止しましょう。",
            "**Configuration drift** ကို ရှောင်ပါ- လူတွေက portal မှာ production ကို ပြင်ရင် နောက် pipeline run က အဲဒီပြင်ထားတာကို တိတ်တိတ်လေး ပြန်ပြောင်းနိုင်တယ်၊ ဒါမှမဟုတ် Complete mode က resource ကို ဖျက်နိုင်တယ်။ Git repository ကို တစ်ခုတည်းသော source of truth အဖြစ် သဘောတူပြီး manual ပြင်တာကို Azure Policy ဒါမှမဟုတ် lock နဲ့ ကာကွယ်ပါ။"
          ) },
        ],
      },
      {
        id: "hands-on-lab",
        title: L("Hands-on mini-lab: your first Bicep deployment", "ハンズオンミニラボ：初めての Bicep デプロイ", "လက်တွေ့ mini-lab - ပထမဆုံး Bicep deployment"),
        blocks: [
          { type: 'steps', items: [
            L("Open **Cloud Shell** (Bash). Run `az bicep version` to confirm Bicep is available, then `az group create -n rg-lab-iac -l japaneast`.", "**Cloud Shell**（Bash）を開き、`az bicep version` で Bicep が使えることを確認してから `az group create -n rg-lab-iac -l japaneast` を実行します。", "**Cloud Shell** (Bash) ဖွင့်ပြီး `az bicep version` နဲ့ Bicep ရှိမရှိ စစ်၊ ပြီးရင် `az group create -n rg-lab-iac -l japaneast` ကို run ပါ။"),
            L("Run `code main.bicep` and paste the storage account part of the Bicep example from this lesson (without the module).", "`code main.bicep` を実行し、このレッスンの Bicep 例のストレージアカウント部分（モジュールを除く）を貼り付けます。", "`code main.bicep` run ပြီး ဒီ lesson က Bicep ဥပမာထဲက storage account အပိုင်း (module မပါ) ကို paste လုပ်ပါ။"),
            L("Preview: `az deployment group what-if -g rg-lab-iac -f main.bicep -p env=dev`. You should see one **Create**.", "プレビュー：`az deployment group what-if -g rg-lab-iac -f main.bicep -p env=dev`。**Create** が 1 つ表示されるはずです。", "Preview- `az deployment group what-if -g rg-lab-iac -f main.bicep -p env=dev`။ **Create** တစ်ခု မြင်ရမယ်။"),
            L("Deploy: `az deployment group create -g rg-lab-iac -f main.bicep -p env=dev` and note the `blobEndpoint` output.", "デプロイ：`az deployment group create -g rg-lab-iac -f main.bicep -p env=dev` を実行し、出力の `blobEndpoint` を確認します。", "Deploy- `az deployment group create -g rg-lab-iac -f main.bicep -p env=dev` run ပြီး output ထဲက `blobEndpoint` ကို မှတ်ပါ။"),
            L("Run the same deploy command again: nothing new is created (idempotent). Run what-if again: you get **NoChange**.", "同じデプロイコマンドを再実行しても新しいものは作られません（冪等）。what-if を再実行すると **NoChange** になります。", "Deploy command တူကို ထပ် run ကြည့်ပါ- အသစ်ဘာမှ မဖြစ်ဘူး (idempotent)။ What-if ထပ် run ရင် **NoChange** ရမယ်။"),
            L("Change `minimumTlsVersion` or the SKU logic, run what-if and observe a **Modify**. In the portal, create a public IP in the same group manually, then run what-if with `--mode Complete` and see it listed as **Delete**. Do not deploy it.", "`minimumTlsVersion` や SKU のロジックを変更して what-if を実行し、**Modify** を確認します。ポータルで同じグループに手動でパブリック IP を作成し、`--mode Complete` 付きで what-if を実行すると **Delete** として表示されます。デプロイはしないでください。", "`minimumTlsVersion` ဒါမှမဟုတ် SKU logic ကို ပြောင်းပြီး what-if run ရင် **Modify** ကို မြင်ရမယ်။ Portal မှာ အဲဒီ group ထဲ public IP ကို manual ဖန်တီးပြီး `--mode Complete` နဲ့ what-if run ရင် **Delete** အဖြစ် ပြမယ်။ Deploy မလုပ်ပါနဲ့။"),
            L("Run `az bicep build --file main.bicep` and open `main.json` to see the generated ARM template. Clean up with `az group delete -n rg-lab-iac --yes`.", "`az bicep build --file main.bicep` を実行して `main.json` を開き、生成された ARM テンプレートを確認します。`az group delete -n rg-lab-iac --yes` で後片付けします。", "`az bicep build --file main.bicep` run ပြီး `main.json` ကိုဖွင့်ကာ ထွက်လာတဲ့ ARM template ကို ကြည့်ပါ။ `az group delete -n rg-lab-iac --yes` နဲ့ ရှင်းပါ။"),
          ] },
          { type: 'callout', tone: 'tip', text: L(
            "Install the **Bicep extension for VS Code** on your own PC: it gives IntelliSense for every resource type and API version, red squiggles for mistakes, and a visualizer for dependencies.",
            "自分の PC に **VS Code の Bicep 拡張機能**をインストールしましょう。すべてのリソースの種類と API バージョンの IntelliSense、間違いの赤い波線、依存関係のビジュアライザーが使えます。",
            "ကိုယ့် PC မှာ **VS Code အတွက် Bicep extension** ကို install လုပ်ပါ- resource type နဲ့ API version အားလုံးအတွက် IntelliSense၊ အမှားတွေကို အနီရောင်မျဉ်းနဲ့ပြတာ၊ dependency visualizer တွေ ရမယ်။"
          ) },
        ],
      },
    ],
    summary: [
      L("Portal, Cloud Shell, Azure CLI, Azure PowerShell and SDKs all call the same Azure Resource Manager API.",
        "Portal、Cloud Shell、Azure CLI、Azure PowerShell、SDK はすべて同じ Azure Resource Manager API を呼び出します。",
        "Portal၊ Cloud Shell၊ Azure CLI၊ Azure PowerShell နဲ့ SDK အားလုံးက Azure Resource Manager API တစ်ခုတည်းကို ခေါ်တယ်။"),
      L("ARM authenticates, checks RBAC, Policy and locks, then calls resource providers; templates are declarative and idempotent.",
        "ARM は認証し、RBAC・Policy・ロックを確認してからリソースプロバイダーを呼び出します。テンプレートは宣言型で冪等です。",
        "ARM က authenticate လုပ်၊ RBAC၊ Policy၊ lock စစ်ပြီးမှ resource provider ကို ခေါ်တယ်၊ template တွေက declarative နဲ့ idempotent ဖြစ်တယ်။"),
      L("ARM templates have parameters, variables, resources and outputs; Bicep is a concise language that compiles to ARM JSON with no state file.",
        "ARM テンプレートは parameters・variables・resources・outputs を持ち、Bicep は状態ファイルなしで ARM JSON にコンパイルされる簡潔な言語です。",
        "ARM template မှာ parameters၊ variables၊ resources၊ outputs ပါပြီး Bicep က state file မလိုဘဲ ARM JSON ကို compile ဖြစ်တဲ့ တိုတောင်းတဲ့ language ပါ။"),
      L("Incremental mode (default) leaves extra resources alone; Complete mode deletes resources not in the template and exists only at resource group scope.",
        "増分モード（既定）は余分なリソースをそのままにし、完全モードはテンプレートにないリソースを削除し、Resource Group スコープにのみ存在します。",
        "Incremental mode (default) က ပိုနေတဲ့ resource တွေကို မထိဘူး၊ Complete mode က template ထဲမပါတာကို ဖျက်ပြီး resource group scope မှာပဲ ရှိတယ်။"),
      L("Deployments target resource group, subscription, management group or tenant scope with matching az deployment commands.",
        "デプロイは対応する az deployment コマンドで、Resource Group・サブスクリプション・管理グループ・テナントのスコープを対象にします。",
        "Deployment တွေက az deployment command တွေနဲ့ resource group၊ subscription၊ management group၊ tenant scope ကို target လုပ်တယ်။"),
      L("Use what-if before deploying, template specs to share versioned templates with RBAC, and treat exported templates as a starting point only.",
        "デプロイ前には what-if を使い、バージョン付きテンプレートの RBAC による共有にはテンプレートスペックを使い、エクスポートしたテンプレートは出発点としてのみ扱います。",
        "Deploy မလုပ်ခင် what-if သုံး၊ version ပါတဲ့ template ကို RBAC နဲ့ share ဖို့ template spec သုံး၊ export လုပ်ထားတဲ့ template ကို စမှတ်အဖြစ်ပဲ သဘောထားပါ။"),
      L("Azure Arc projects on-premises and multicloud resources into ARM; Terraform is a multicloud alternative with a state file.",
        "Azure Arc はオンプレミスやマルチクラウドのリソースを ARM に投影し、Terraform は状態ファイルを持つマルチクラウド向けの選択肢です。",
        "Azure Arc က on-prem နဲ့ multicloud resource တွေကို ARM ထဲ ပြပေးတယ်၊ Terraform က state file ပါတဲ့ multicloud ရွေးချယ်စရာပါ။"),
      L("CI/CD pipelines should build, preview, approve and deploy, signing in with OIDC federation and least-privilege RBAC.",
        "CI/CD パイプラインはビルド・プレビュー・承認・デプロイの順で進め、OIDC フェデレーションと最小権限の RBAC でサインインします。",
        "CI/CD pipeline က build၊ preview၊ approve၊ deploy အစဉ်လိုက်သွားပြီး OIDC federation နဲ့ least-privilege RBAC နဲ့ sign in ဝင်သင့်တယ်။"),
    ],
  },
  questions: [
    {
      difficulty: 'EASY',
      exams: ['AZ-900'],
      prompt: L("An administrator must run Azure CLI and Azure PowerShell commands from a borrowed laptop without installing any software. Which tool should they use?",
        "管理者は、借りたノート PC からソフトウェアをインストールせずに Azure CLI と Azure PowerShell のコマンドを実行する必要があります。どのツールを使うべきですか？",
        "Admin တစ်ယောက်က ငှားထားတဲ့ laptop ကနေ software ဘာမှမ install ဘဲ Azure CLI နဲ့ Azure PowerShell command တွေ run ရမယ်။ ဘယ် tool သုံးသင့်လဲ?"),
      options: ['Azure Bastion', 'Azure Cloud Shell', 'Azure Arc', 'Azure DevTest Labs'],
      correct: [1],
      explanation: L("Azure Cloud Shell is a browser-based, already authenticated shell with both Azure CLI and Azure PowerShell pre-installed. Azure Bastion provides browser-based RDP/SSH to your VMs, not a management shell for Azure itself.",
        "Azure Cloud Shell はブラウザーベースで認証済みのシェルで、Azure CLI と Azure PowerShell の両方がプリインストールされています。Azure Bastion はブラウザー経由で VM に RDP/SSH 接続するサービスで、Azure 自体を管理するシェルではありません。",
        "Azure Cloud Shell က browser ထဲက login ဝင်ပြီးသား shell ဖြစ်ပြီး Azure CLI နဲ့ Azure PowerShell နှစ်ခုလုံး install ပြီးသားပါ။ Azure Bastion က browser ကနေ VM ကို RDP/SSH ချိတ်ပေးတာဖြစ်ပြီး Azure ကိုယ်တိုင်ကို စီမံတဲ့ shell မဟုတ်ဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900'],
      prompt: L("A company wants to manage its on-premises Windows and Linux servers and its AWS VMs from the Azure portal, applying tags and Azure Policy to them. Which service should it use?",
        "ある企業は、オンプレミスの Windows/Linux サーバーと AWS の VM を Azure portal から管理し、タグと Azure Policy を適用したいと考えています。どのサービスを使うべきですか？",
        "Company တစ်ခုက on-prem Windows/Linux server နဲ့ AWS VM တွေကို Azure portal ကနေ စီမံပြီး tag နဲ့ Azure Policy သုံးချင်တယ်။ ဘယ် service သုံးသင့်လဲ?"),
      options: ['Azure Arc', 'Azure Stack Edge', 'Azure Migrate', 'Azure Lighthouse'],
      correct: [0],
      explanation: L("Azure Arc projects servers, Kubernetes clusters and data services outside Azure into Azure Resource Manager so you can use tags, RBAC, Policy and monitoring. Azure Migrate moves workloads into Azure rather than managing them where they are, and Lighthouse is for managing other tenants.",
        "Azure Arc は Azure 外のサーバー、Kubernetes クラスター、データサービスを Azure Resource Manager に投影し、タグ・RBAC・Policy・監視を使えるようにします。Azure Migrate はワークロードを現在の場所で管理するのではなく Azure へ移行するもので、Lighthouse は他のテナントの管理用です。",
        "Azure Arc က Azure အပြင်က server၊ Kubernetes cluster၊ data service တွေကို Azure Resource Manager ထဲ ပြပေးလို့ tag၊ RBAC၊ Policy၊ monitoring သုံးလို့ရတယ်။ Azure Migrate က workload ကို ရှိတဲ့နေရာမှာ စီမံတာမဟုတ်ဘဲ Azure ထဲ ရွှေ့တာဖြစ်ပြီး Lighthouse က တခြား tenant စီမံဖို့ပါ။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900'],
      prompt: L("What does it mean that ARM template deployments are idempotent?",
        "ARM テンプレートのデプロイが冪等であるとはどういう意味ですか？",
        "ARM template deployment တွေ idempotent ဖြစ်တယ်ဆိုတာ ဘာကိုဆိုလိုလဲ?"),
      options: ['Each deployment creates a new copy of every resource', 'A template can be deployed only once per subscription', 'Deploying the same template repeatedly produces the same end state', 'Templates must list each step in the exact order to run'],
      correct: [2],
      explanation: L("Idempotent means you can deploy the same template many times and always get the same result, without duplicates. Listing steps in order describes an imperative script, which is the opposite of the declarative ARM model.",
        "冪等とは、同じテンプレートを何度デプロイしても重複なく常に同じ結果になることです。手順を順番に並べるのは命令型スクリプトの特徴で、宣言型の ARM モデルとは逆です。",
        "Idempotent ဆိုတာ template တူကို ဘယ်နှခါ deploy လုပ်လုပ် ထပ်မနေဘဲ ရလဒ်အမြဲတူတာပါ။ အဆင့်တွေကို အစဉ်လိုက်ရေးတာက imperative script ရဲ့ လက္ခဏာဖြစ်ပြီး declarative ARM model နဲ့ ဆန့်ကျင်ဘက်ပါ။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("Before deployment, a Bicep file is converted into which format?",
        "Bicep ファイルはデプロイ前にどの形式に変換されますか？",
        "Bicep file ကို deploy မလုပ်ခင် ဘယ် format ကို ပြောင်းလဲလဲ?"),
      options: ['Terraform HCL', 'A PowerShell script', 'An ARM template in JSON', 'A YAML pipeline'],
      correct: [2],
      explanation: L("Bicep transpiles into a standard ARM JSON template, which Azure Resource Manager then deploys. HCL is Terraform's language and has nothing to do with Bicep compilation.",
        "Bicep は標準の ARM JSON テンプレートにトランスパイルされ、それを Azure Resource Manager がデプロイします。HCL は Terraform の言語で、Bicep のコンパイルとは関係ありません。",
        "Bicep က standard ARM JSON template အဖြစ် transpile ဖြစ်ပြီး Azure Resource Manager က deploy လုပ်တယ်။ HCL က Terraform ရဲ့ language ဖြစ်ပြီး Bicep compile နဲ့ မဆိုင်ဘူး။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-104'],
      prompt: L("Which section of an ARM template returns values, such as a storage endpoint URL, after the deployment completes?",
        "デプロイ完了後にストレージのエンドポイント URL などの値を返す ARM テンプレートのセクションはどれですか？",
        "Deployment ပြီးတဲ့အခါ storage endpoint URL လို value တွေကို ပြန်ပေးတဲ့ ARM template section က ဘယ်ဟာလဲ?"),
      options: ['parameters', 'variables', 'resources', 'outputs'],
      correct: [3],
      explanation: L("The outputs section returns values from the deployment for scripts or other templates to use. Parameters are inputs supplied at deploy time, the opposite direction.",
        "outputs セクションは、スクリプトや他のテンプレートが使えるようにデプロイから値を返します。parameters はデプロイ時に渡す入力で、逆方向です。",
        "Outputs section က deployment ကနေ value တွေကို script ဒါမှမဟုတ် တခြား template သုံးဖို့ ပြန်ပေးတယ်။ Parameters က deploy လုပ်ချိန် ထည့်ပေးတဲ့ input ဖြစ်ပြီး ဦးတည်ချက် ပြောင်းပြန်ပါ။"),
    },
    {
      difficulty: 'EASY',
      exams: ['AZ-900'],
      prompt: L("Which TWO tools let you manage Azure resources from a command line on Windows, macOS or Linux? (Select TWO)",
        "Windows・macOS・Linux のコマンドラインから Azure リソースを管理できる 2 つのツールはどれですか？（2 つ選択）",
        "Windows၊ macOS၊ Linux ရဲ့ command line ကနေ Azure resource တွေကို စီမံနိုင်တဲ့ tool ၂ ခုက ဘယ်ဟာလဲ? (၂ ခုရွေးပါ)"),
      options: ['Azure Advisor', 'Azure CLI', 'Azure Service Health', 'Azure PowerShell'],
      correct: [1, 3],
      explanation: L("Azure CLI (az) and Azure PowerShell (the Az module) are cross-platform command-line tools. Azure Advisor gives recommendations and Service Health reports platform incidents; neither is a command-line management tool.",
        "Azure CLI（az）と Azure PowerShell（Az モジュール）はクロスプラットフォームのコマンドラインツールです。Azure Advisor は推奨事項を提供し、Service Health はプラットフォームの障害を報告するもので、どちらもコマンドライン管理ツールではありません。",
        "Azure CLI (az) နဲ့ Azure PowerShell (Az module) က platform အားလုံးမှာ run လို့ရတဲ့ command-line tool တွေပါ။ Azure Advisor က recommendation ပေးပြီး Service Health က platform incident ကို ပြတာဖြစ်လို့ command-line management tool မဟုတ်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("Before deploying an updated Bicep file to production, you must see which resources will be created, modified or deleted, without making any changes. Which command should you run?",
        "更新した Bicep ファイルを本番にデプロイする前に、何も変更せずに作成・変更・削除されるリソースを確認する必要があります。どのコマンドを実行すべきですか？",
        "Update လုပ်ထားတဲ့ Bicep file ကို production ကို deploy မလုပ်ခင် ဘာမှမပြောင်းဘဲ ဘယ် resource တွေ create၊ modify၊ delete ဖြစ်မလဲ ကြည့်ရမယ်။ ဘယ် command run သင့်လဲ?"),
      options: ['az deployment group validate', 'az group export', 'az bicep decompile', 'az deployment group what-if'],
      correct: [3],
      explanation: L("what-if compares the template with the current state and lists Create, Modify, Delete and NoChange without deploying. validate only checks that the template is syntactically correct and would be accepted; it does not show the resource-level changes.",
        "what-if はテンプレートと現在の状態を比較し、デプロイせずに Create・Modify・Delete・NoChange を一覧表示します。validate はテンプレートの構文が正しく受け付けられるかを確認するだけで、リソース単位の変更は表示しません。",
        "What-if က template နဲ့ လက်ရှိအခြေအနေကို နှိုင်းယှဉ်ပြီး deploy မလုပ်ဘဲ Create၊ Modify၊ Delete၊ NoChange ကို ပြတယ်။ Validate က template syntax မှန်မမှန်၊ လက်ခံမခံ စစ်ရုံပဲ၊ resource အလိုက် ပြောင်းလဲမှုကို မပြဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("Resource group RG1 contains VM1 and storage1. You deploy a template that defines only storage1 to RG1 using Complete mode. What is the result?",
        "Resource Group RG1 には VM1 と storage1 があります。storage1 だけを定義したテンプレートを完全モードで RG1 にデプロイします。結果はどうなりますか？",
        "Resource group RG1 ထဲမှာ VM1 နဲ့ storage1 ရှိတယ်။ storage1 ပဲပါတဲ့ template ကို Complete mode နဲ့ RG1 ကို deploy လုပ်တယ်။ ရလဒ်က ဘာလဲ?"),
      options: ['VM1 is deleted and storage1 is kept or updated', 'Both VM1 and storage1 are kept unchanged', 'The deployment fails because VM1 is missing from the template', 'VM1 is kept but deallocated'],
      correct: [0],
      explanation: L("Complete mode makes the resource group match the template, so resources not defined in it, such as VM1, are deleted. Keeping both unchanged is the behavior of Incremental mode, the default.",
        "完全モードは Resource Group をテンプレートと一致させるため、テンプレートに定義されていない VM1 のようなリソースは削除されます。両方をそのまま残すのは既定の増分モードの動作です。",
        "Complete mode က resource group ကို template နဲ့ တူအောင်လုပ်လို့ template ထဲမပါတဲ့ VM1 လို resource ကို ဖျက်ပစ်တယ်။ နှစ်ခုလုံး မပြောင်းဘဲထားတာက default ဖြစ်တဲ့ Incremental mode ရဲ့ အပြုအမူပါ။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("A platform team wants to publish approved, versioned templates that other teams can deploy, with access controlled by Azure RBAC and without sharing files by email or SAS URLs. What should they use?",
        "プラットフォームチームは、他のチームがデプロイできる承認済みのバージョン付きテンプレートを、Azure RBAC でアクセス制御し、メールや SAS URL でファイルを共有せずに公開したいと考えています。何を使うべきですか？",
        "Platform team က approve လုပ်ပြီး version ပါတဲ့ template တွေကို တခြား team တွေ deploy လုပ်နိုင်အောင် Azure RBAC နဲ့ access ထိန်းပြီး email ဒါမှမဟုတ် SAS URL နဲ့ file မ share ဘဲ publish ချင်တယ်။ ဘာသုံးသင့်လဲ?"),
      options: ['A public GitHub repository', 'A storage account with a SAS URL', 'Template specs', 'Azure Managed Applications'],
      correct: [2],
      explanation: L("Template specs store templates as versioned Azure resources and are shared with RBAC. A storage account with a SAS URL is exactly the file-sharing approach they want to avoid, and Managed Applications are for publishing solutions to customers, often through the Marketplace.",
        "テンプレートスペックはテンプレートをバージョン付きの Azure リソースとして保存し、RBAC で共有します。SAS URL 付きストレージアカウントはまさに避けたいファイル共有の方法であり、Managed Applications は主に Marketplace を通じて顧客にソリューションを公開するためのものです。",
        "Template spec က template ကို version ပါတဲ့ Azure resource အဖြစ်သိမ်းပြီး RBAC နဲ့ share တယ်။ SAS URL ပါတဲ့ storage account က ရှောင်ချင်တဲ့ file-sharing နည်းလမ်းကိုယ်တိုင်ပဲ၊ Managed Applications က Marketplace ကနေ customer တွေဆီ solution publish လုပ်ဖို့ပါ။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("You have an existing ARM JSON template and want to maintain it in Bicep from now on. Which command converts it?",
        "既存の ARM JSON テンプレートを今後は Bicep で管理したいと考えています。変換するコマンドはどれですか？",
        "ရှိပြီးသား ARM JSON template ကို နောက်ပိုင်း Bicep နဲ့ ထိန်းသိမ်းချင်တယ်။ ဘယ် command နဲ့ ပြောင်းရမလဲ?"),
      options: ['az bicep build', 'az bicep decompile', 'az bicep publish', 'az ts create'],
      correct: [1],
      explanation: L("az bicep decompile converts ARM JSON into a Bicep file (best effort, so review the result). az bicep build goes the other way, compiling Bicep into JSON.",
        "az bicep decompile は ARM JSON を Bicep ファイルに変換します（ベストエフォートなので結果を確認します）。az bicep build は逆方向で、Bicep を JSON にコンパイルします。",
        "az bicep decompile က ARM JSON ကို Bicep file အဖြစ် ပြောင်းပေးတယ် (best effort ဖြစ်လို့ ရလဒ်ကို ပြန်စစ်ပါ)။ az bicep build က ပြောင်းပြန်ဖြစ်ပြီး Bicep ကို JSON အဖြစ် compile လုပ်တယ်။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("A Bicep file declares targetScope = 'subscription' and creates two resource groups and a policy assignment. Which Azure CLI command deploys it?",
        "Bicep ファイルで targetScope = 'subscription' を宣言し、2 つの Resource Group とポリシー割り当てを作成します。どの Azure CLI コマンドでデプロイしますか？",
        "Bicep file မှာ targetScope = 'subscription' လို့ ကြေညာပြီး resource group ၂ ခုနဲ့ policy assignment တစ်ခု ဖန်တီးတယ်။ ဘယ် Azure CLI command နဲ့ deploy လုပ်ရမလဲ?"),
      options: ['az deployment group create', 'az group create', 'az deployment mg create', 'az deployment sub create'],
      correct: [3],
      explanation: L("Subscription-scope templates are deployed with az deployment sub create, which also needs --location for the deployment metadata. az deployment group create targets an existing resource group, so it cannot create resource groups at subscription level.",
        "サブスクリプションスコープのテンプレートは az deployment sub create でデプロイし、デプロイのメタデータ用に --location も必要です。az deployment group create は既存の Resource Group を対象とするため、サブスクリプションレベルで Resource Group を作成できません。",
        "Subscription-scope template ကို az deployment sub create နဲ့ deploy လုပ်ပြီး deployment metadata အတွက် --location လည်း လိုတယ်။ az deployment group create က ရှိပြီးသား resource group ကို target လုပ်လို့ subscription level မှာ resource group မဖန်တီးနိုင်ဘူး။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-104'],
      prompt: L("Which TWO statements about Incremental deployment mode are true? (Select TWO)",
        "増分デプロイモードについて正しい 2 つの記述はどれですか？（2 つ選択）",
        "Incremental deployment mode နဲ့ပတ်သက်ပြီး မှန်တဲ့ statement ၂ ခုက ဘယ်ဟာလဲ? (၂ ခုရွေးပါ)"),
      options: ['It is the default mode for resource group deployments', 'Resources in the resource group that are not in the template are deleted', 'Resources in the resource group that are not in the template are left unchanged', 'It can be used only at tenant scope'],
      correct: [0, 2],
      explanation: L("Incremental is the default and only adds or updates resources defined in the template, leaving other resources untouched. Deleting resources not in the template is the behavior of Complete mode.",
        "増分は既定のモードで、テンプレートに定義されたリソースのみを追加・更新し、その他のリソースには触れません。テンプレートにないリソースを削除するのは完全モードの動作です。",
        "Incremental က default mode ဖြစ်ပြီး template ထဲက resource တွေကိုပဲ ထည့်/update လုပ်ကာ ကျန်တာတွေကို မထိဘူး။ Template ထဲမပါတဲ့ resource ကို ဖျက်တာက Complete mode ရဲ့ အပြုအမူပါ။"),
    },
    {
      difficulty: 'MEDIUM',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("Which infrastructure-as-code tool keeps a state file that records the resources it manages and supports many cloud providers?",
        "管理するリソースを記録する状態ファイルを保持し、多数のクラウドプロバイダーに対応する IaC ツールはどれですか？",
        "ကိုယ်စီမံတဲ့ resource တွေကို မှတ်ထားတဲ့ state file ကို သိမ်းထားပြီး cloud provider အများကြီးကို support လုပ်တဲ့ IaC tool က ဘယ်ဟာလဲ?"),
      options: ['Bicep', 'ARM templates', 'Terraform', 'Azure CLI'],
      correct: [2],
      explanation: L("Terraform tracks deployed resources in a state file and uses providers for Azure, AWS, Google Cloud and SaaS. Bicep and ARM templates are Azure-only and rely on Azure Resource Manager itself as the source of truth, with no state file.",
        "Terraform はデプロイしたリソースを状態ファイルで追跡し、Azure・AWS・Google Cloud・SaaS 用のプロバイダーを使います。Bicep と ARM テンプレートは Azure 専用で、状態ファイルを持たず Azure Resource Manager 自体を正とします。",
        "Terraform က deploy လုပ်ထားတဲ့ resource ကို state file နဲ့ ခြေရာခံပြီး Azure၊ AWS၊ Google Cloud၊ SaaS အတွက် provider တွေ သုံးတယ်။ Bicep နဲ့ ARM template က Azure အတွက်ပဲဖြစ်ပြီး state file မရှိဘဲ Azure Resource Manager ကိုယ်တိုင်ကို source of truth အဖြစ် သုံးတယ်။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("You export a template from an existing resource group in the portal to recreate the environment in another region. Which statement is correct?",
        "別のリージョンで環境を再作成するため、ポータルで既存の Resource Group からテンプレートをエクスポートします。正しい記述はどれですか？",
        "တခြား region မှာ environment ကို ပြန်ဆောက်ဖို့ portal မှာ ရှိပြီးသား resource group ကနေ template ကို export လုပ်တယ်။ မှန်တဲ့ statement က ဘယ်ဟာလဲ?"),
      options: ['The exported template is guaranteed to redeploy without changes', 'The exported template usually needs cleanup because values are hard-coded and some resources or properties are not exported', 'The export includes data stored in the resources, such as blobs and database rows', 'Exporting automatically creates a versioned template spec'],
      correct: [1],
      explanation: L("Exported templates are a starting point: names, locations and IDs are hard-coded, and some resource types or properties cannot be exported, so you parameterize and test them. Export captures configuration only, never data such as blobs or database rows.",
        "エクスポートされたテンプレートは出発点です。名前・場所・ID がハードコードされ、エクスポートできないリソースの種類やプロパティもあるため、パラメーター化してテストします。エクスポートが取得するのは構成のみで、BLOB やデータベースの行などのデータは含まれません。",
        "Export လုပ်ထားတဲ့ template က စမှတ်ပဲ ဖြစ်တယ်- name၊ location၊ ID တွေ hard-code ဖြစ်နေပြီး export မရတဲ့ resource type/property တွေရှိလို့ parameter ပြောင်းပြီး test လုပ်ရတယ်။ Export က configuration ကိုပဲ ယူတယ်၊ blob ဒါမှမဟုတ် database row လို data ကို ဘယ်တော့မှ မယူဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("A GitHub Actions workflow deploys Bicep files to one resource group. Security requires that no long-lived secret is stored in GitHub and that the pipeline has least privilege. Which TWO actions should you take? (Select TWO)",
        "GitHub Actions のワークフローで Bicep ファイルを 1 つの Resource Group にデプロイします。セキュリティ要件として、GitHub に長期間有効なシークレットを保存せず、パイプラインは最小権限である必要があります。どの 2 つの操作を行うべきですか？（2 つ選択）",
        "GitHub Actions workflow က Bicep file တွေကို resource group တစ်ခုထဲ deploy လုပ်တယ်။ Security requirement အရ GitHub ထဲမှာ သက်တမ်းရှည် secret မသိမ်းရဘဲ pipeline က least privilege ဖြစ်ရမယ်။ ဘယ် action ၂ ခု လုပ်သင့်လဲ? (၂ ခုရွေးပါ)"),
      options: ['Configure workload identity federation (OIDC) for a service principal or user-assigned managed identity', 'Store a Global Administrator password in a repository secret', 'Assign the identity Contributor on the target resource group only', 'Assign the identity Owner at the tenant root management group'],
      correct: [0, 2],
      explanation: L("OIDC federation lets GitHub exchange a short-lived token for Azure access, so no client secret is stored, and Contributor scoped to the target resource group is enough to deploy resources there. Owner at the tenant root grants far more than needed, breaking least privilege.",
        "OIDC フェデレーションにより GitHub は短期間のトークンを Azure へのアクセスに交換できるため、クライアントシークレットを保存する必要がありません。対象 Resource Group に限定した Contributor があればそこにリソースをデプロイできます。テナントルートの Owner は必要以上の権限を与え、最小権限に反します。",
        "OIDC federation က GitHub ကို သက်တမ်းတို token နဲ့ Azure access လဲယူခွင့်ပေးလို့ client secret သိမ်းစရာမလိုဘူး၊ target resource group မှာပဲ Contributor ပေးရင် အဲဒီမှာ resource deploy လုပ်ဖို့ လုံလောက်တယ်။ Tenant root မှာ Owner ပေးတာက လိုတာထက် အများကြီးပိုပေးလို့ least privilege ကို ချိုးဖောက်တယ်။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("Your main.bicep deploys to resource group rg-app. You must also deploy a VNet defined in vnet.bicep into resource group rg-network as part of the same deployment. What should you use?",
        "main.bicep は Resource Group rg-app にデプロイします。同じデプロイの一部として、vnet.bicep に定義された VNet を Resource Group rg-network にもデプロイする必要があります。何を使うべきですか？",
        "main.bicep က resource group rg-app ကို deploy လုပ်တယ်။ Deployment တစ်ခုတည်းထဲမှာပဲ vnet.bicep ထဲက VNet ကို resource group rg-network ထဲ deploy လုပ်ရမယ်။ ဘာသုံးသင့်လဲ?"),
      options: ["A module that references vnet.bicep with scope set to resourceGroup('rg-network')", 'A variable named targetResourceGroup set to rg-network', 'The existing keyword pointing to rg-network', 'An output that returns the rg-network ID'],
      correct: [0],
      explanation: L("Bicep modules can target a different scope with the scope property, so main.bicep can deploy vnet.bicep into rg-network. The existing keyword only references a resource that already exists; it does not deploy anything.",
        "Bicep モジュールは scope プロパティで別のスコープを対象にできるため、main.bicep から vnet.bicep を rg-network にデプロイできます。existing キーワードは既存のリソースを参照するだけで、何もデプロイしません。",
        "Bicep module က scope property နဲ့ တခြား scope ကို target လုပ်နိုင်လို့ main.bicep ကနေ vnet.bicep ကို rg-network ထဲ deploy လုပ်နိုင်တယ်။ existing keyword က ရှိပြီးသား resource ကို reference လုပ်ရုံပဲ၊ ဘာမှ deploy မလုပ်ဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-104'],
      prompt: L("An engineer deploys with Azure CLI and wants to review the what-if result and then explicitly confirm before any change is applied, in a single command. Which parameter should they add to az deployment group create?",
        "エンジニアは Azure CLI でデプロイする際、1 つのコマンドで what-if の結果を確認し、変更が適用される前に明示的に承認したいと考えています。az deployment group create にどのパラメーターを追加すべきですか？",
        "Engineer တစ်ယောက်က Azure CLI နဲ့ deploy လုပ်တဲ့အခါ command တစ်ခုတည်းနဲ့ what-if ရလဒ်ကို ကြည့်ပြီး ပြောင်းလဲမှု မလုပ်ခင် သေချာ confirm လုပ်ချင်တယ်။ az deployment group create မှာ ဘယ် parameter ထည့်သင့်လဲ?"),
      options: ['--mode Complete', '--confirm-with-what-if', '--no-wait', '--rollback-on-error'],
      correct: [1],
      explanation: L("--confirm-with-what-if (-c) runs what-if first and prompts for confirmation before deploying. --rollback-on-error redeploys the last successful deployment after a failure; it does not preview anything.",
        "--confirm-with-what-if（-c）は最初に what-if を実行し、デプロイ前に確認を求めます。--rollback-on-error は失敗時に最後に成功したデプロイを再デプロイするもので、何もプレビューしません。",
        "--confirm-with-what-if (-c) က what-if ကို အရင် run ပြီး deploy မလုပ်ခင် confirm တောင်းတယ်။ --rollback-on-error က fail ဖြစ်ရင် နောက်ဆုံးအောင်မြင်ခဲ့တဲ့ deployment ကို ပြန် deploy လုပ်တာဖြစ်ပြီး ဘာမှ preview မပြဘူး။"),
    },
    {
      difficulty: 'HARD',
      exams: ['AZ-900', 'AZ-104'],
      prompt: L("After onboarding an on-premises Linux server to Azure Arc, which TWO capabilities become available? (Select TWO)",
        "オンプレミスの Linux サーバーを Azure Arc にオンボードした後、利用可能になる 2 つの機能はどれですか？（2 つ選択）",
        "On-prem Linux server ကို Azure Arc ထဲ onboard လုပ်ပြီးရင် ဘယ်စွမ်းရည် ၂ ခု သုံးလို့ရလာမလဲ? (၂ ခုရွေးပါ)"),
      options: ['The physical server is moved into an Azure datacenter', 'Azure Policy machine configuration can audit settings inside the server', 'The server receives the Azure VM SLA', 'The server can be managed with Azure RBAC and tags as an Azure resource'],
      correct: [1, 3],
      explanation: L("Arc projects the server into ARM as a resource, so you can apply RBAC, tags and Azure Policy (including machine configuration). The server stays where it is and its availability remains your responsibility; it does not become an Azure VM with an Azure SLA.",
        "Arc はサーバーをリソースとして ARM に投影するため、RBAC・タグ・Azure Policy（マシン構成を含む）を適用できます。サーバーは元の場所に残り、可用性は引き続き利用者の責任で、Azure SLA 付きの Azure VM になるわけではありません。",
        "Arc က server ကို ARM ထဲ resource အဖြစ် ပြပေးလို့ RBAC၊ tag၊ Azure Policy (machine configuration အပါအဝင်) သုံးလို့ရတယ်။ Server က နေရာမပြောင်းဘဲ availability က ကိုယ့်တာဝန်ပဲ ဆက်ဖြစ်တယ်၊ Azure SLA ပါတဲ့ Azure VM ဖြစ်မသွားဘူး။"),
    },
  ],
  flashcards: [
    { term: 'Azure Resource Manager (ARM)',
      definition: L("Azure's deployment and management layer. Every tool's request passes through it for authentication, RBAC, Policy and lock checks before reaching resource providers.", "Azure のデプロイと管理のレイヤーです。すべてのツールの要求は、リソースプロバイダーに届く前に認証・RBAC・Policy・ロックの確認のためにここを通過します。", "Azure ရဲ့ deployment နဲ့ management layer ပါ။ Tool တိုင်းရဲ့ request က resource provider ဆီမရောက်ခင် authentication၊ RBAC၊ Policy၊ lock စစ်ဖို့ ဒီကို ဖြတ်ရတယ်။"),
      example: L("A CanNotDelete lock blocks deletion both in the portal and in a pipeline, because both go through ARM.", "CanNotDelete ロックは、どちらも ARM を通るため、ポータルでもパイプラインでも削除をブロックします。", "Portal ရော pipeline ရော ARM ကို ဖြတ်လို့ CanNotDelete lock က နှစ်နေရာလုံးမှာ ဖျက်တာကို တားတယ်။") },
    { term: 'Azure Cloud Shell',
      definition: L("An authenticated, browser-based Bash or PowerShell shell with Azure CLI, Azure PowerShell and common tools pre-installed.", "Azure CLI、Azure PowerShell、一般的なツールがプリインストールされた、認証済みのブラウザーベースの Bash / PowerShell シェルです。", "Azure CLI၊ Azure PowerShell နဲ့ အသုံးများတဲ့ tool တွေ install ပြီးသား၊ login ဝင်ပြီးသား browser ထဲက Bash ဒါမှမဟုတ် PowerShell shell ပါ။"),
      example: L("From a hotel PC you open shell.azure.com and restart a VM with az vm restart.", "ホテルの PC から shell.azure.com を開き、az vm restart で VM を再起動します。", "Hotel PC ကနေ shell.azure.com ဖွင့်ပြီး az vm restart နဲ့ VM ကို restart လုပ်တယ်။") },
    { term: 'Declarative vs imperative',
      definition: L("Declarative code describes the desired end state (ARM, Bicep, Terraform); imperative code lists the steps to execute (scripts).", "宣言型コードは望ましい最終状態を記述し（ARM、Bicep、Terraform）、命令型コードは実行手順を列挙します（スクリプト）。", "Declarative code က လိုချင်တဲ့ နောက်ဆုံးအခြေအနေကို ဖော်ပြတယ် (ARM၊ Bicep၊ Terraform)၊ imperative code က run ရမယ့် အဆင့်တွေကို စာရင်းပြုတယ် (script)။"),
      example: L("\"One VNet named vnet-hub must exist\" is declarative; \"run az network vnet create\" is imperative.", "「vnet-hub という VNet が 1 つ存在すること」は宣言型、「az network vnet create を実行する」は命令型です。", "\"vnet-hub ဆိုတဲ့ VNet တစ်ခု ရှိရမယ်\" က declarative၊ \"az network vnet create ကို run\" က imperative။") },
    { term: 'ARM template',
      definition: L("A JSON file with $schema, contentVersion, parameters, variables, resources and outputs that ARM deploys declaratively.", "$schema、contentVersion、parameters、variables、resources、outputs を持ち、ARM が宣言的にデプロイする JSON ファイルです。", "$schema၊ contentVersion၊ parameters၊ variables၊ resources၊ outputs ပါပြီး ARM က declarative ပုံစံနဲ့ deploy လုပ်တဲ့ JSON file ပါ။"),
      example: L("One template plus dev and prod parameter files creates identical environments with different sizes.", "1 つのテンプレートと dev・prod のパラメーターファイルで、サイズの異なる同一構成の環境を作成します。", "Template တစ်ခုနဲ့ dev၊ prod parameter file တွေသုံးပြီး size မတူတဲ့ တူညီတဲ့ environment တွေ ဖန်တီးတယ်။") },
    { term: 'Bicep',
      definition: L("Microsoft's concise, declarative language for Azure that transpiles to ARM JSON; no state file, day-one support for new resource types.", "ARM JSON にトランスパイルされる、Azure 向けの Microsoft の簡潔な宣言型言語です。状態ファイル不要で、新しいリソースの種類に初日から対応します。", "ARM JSON ကို transpile ဖြစ်တဲ့ Azure အတွက် Microsoft ရဲ့ တိုတောင်းတဲ့ declarative language ပါ၊ state file မလိုဘဲ resource type အသစ်တွေကို ချက်ချင်း support လုပ်တယ်။"),
      example: L("az deployment group create -g rg-app -f main.bicep compiles and deploys in one step.", "az deployment group create -g rg-app -f main.bicep で、コンパイルとデプロイを 1 ステップで行います。", "az deployment group create -g rg-app -f main.bicep က compile နဲ့ deploy ကို တစ်ဆင့်တည်းနဲ့ လုပ်တယ်။") },
    { term: 'Complete deployment mode',
      definition: L("Resource group deployment mode that deletes resources not defined in the template; the default Incremental mode leaves them alone.", "テンプレートに定義されていないリソースを削除する Resource Group のデプロイモードです。既定の増分モードではそれらはそのまま残ります。", "Template ထဲမှာ မပါတဲ့ resource တွေကို ဖျက်ပစ်တဲ့ resource group deployment mode ပါ၊ default Incremental mode ကတော့ အဲဒါတွေကို မထိဘူး။"),
      example: L("--mode Complete removed a test VM someone created manually in rg-prod.", "--mode Complete により、誰かが rg-prod に手動で作成したテスト VM が削除されました。", "--mode Complete က တစ်ယောက်ယောက် rg-prod ထဲ manual ဖန်တီးထားတဲ့ test VM ကို ဖျက်ပစ်လိုက်တယ်။") },
    { term: 'What-if',
      definition: L("A preview operation that shows Create, Delete, Modify, NoChange and Ignore results for a deployment without changing anything.", "何も変更せずに、デプロイの Create・Delete・Modify・NoChange・Ignore の結果を表示するプレビュー操作です。", "ဘာမှမပြောင်းဘဲ deployment ရဲ့ Create၊ Delete၊ Modify၊ NoChange၊ Ignore ရလဒ်ကို ပြပေးတဲ့ preview operation ပါ။"),
      example: L("A pull request check posts the what-if output so reviewers see that one NSG rule will be modified.", "プルリクエストのチェックが what-if の出力を投稿し、レビュー担当者は NSG ルールが 1 つ変更されることを確認できます。", "Pull request check က what-if output ကို post လုပ်လို့ reviewer တွေက NSG rule တစ်ခု modify ဖြစ်မယ်ဆိုတာ မြင်ရတယ်။") },
    { term: 'Template spec',
      definition: L("A template stored as a versioned Azure resource and shared through RBAC, so teams can deploy approved templates.", "バージョン付きの Azure リソースとして保存され、RBAC で共有されるテンプレートで、チームは承認済みテンプレートをデプロイできます。", "Version ပါတဲ့ Azure resource အဖြစ် သိမ်းပြီး RBAC နဲ့ share တဲ့ template ဖြစ်လို့ team တွေက approve လုပ်ထားတဲ့ template ကို deploy လုပ်နိုင်တယ်။"),
      example: L("storage-standard v1.2 is published once; app teams with Reader on it deploy it by ID.", "storage-standard v1.2 を一度公開すると、Reader 権限を持つアプリチームは ID を指定してデプロイできます。", "storage-standard v1.2 ကို တစ်ခါ publish လုပ်ပြီးရင် အဲဒီမှာ Reader ရတဲ့ app team တွေက ID နဲ့ deploy လုပ်တယ်။") },
    { term: 'Azure Arc',
      definition: L("Extends Azure Resource Manager to servers, Kubernetes clusters and data services running on-premises or in other clouds, so they can be governed like Azure resources.", "Azure Resource Manager をオンプレミスや他クラウドで動くサーバー、Kubernetes クラスター、データサービスに拡張し、Azure リソースと同様に統制できるようにします。", "Azure Resource Manager ကို on-prem ဒါမှမဟုတ် တခြား cloud မှာ run တဲ့ server၊ Kubernetes cluster၊ data service တွေဆီ ချဲ့ပေးလို့ Azure resource လိုပဲ ထိန်းချုပ်နိုင်တယ်။"),
      example: L("Factory servers in Osaka appear in a resource group and are patched with Azure Update Manager.", "大阪の工場のサーバーが Resource Group に表示され、Azure Update Manager でパッチが適用されます。", "Osaka စက်ရုံက server တွေ resource group ထဲမှာ ပေါ်လာပြီး Azure Update Manager နဲ့ patch လုပ်တယ်။") },
    { term: 'Workload identity federation',
      definition: L("Lets an external workload such as GitHub Actions exchange its own short-lived OIDC token for an Entra ID token, so no client secret is stored.", "GitHub Actions などの外部ワークロードが自分の短期間の OIDC トークンを Entra ID トークンに交換できる仕組みで、クライアントシークレットを保存する必要がありません。", "GitHub Actions လို ပြင်ပ workload က သူ့ရဲ့ သက်တမ်းတို OIDC token ကို Entra ID token နဲ့ လဲယူနိုင်တဲ့ နည်းလမ်းဖြစ်လို့ client secret သိမ်းစရာမလိုဘူး။"),
      example: L("The workflow uses azure/login with client-id, tenant-id and subscription-id only, and no password.", "ワークフローは azure/login で client-id、tenant-id、subscription-id だけを使い、パスワードは使いません。", "Workflow က azure/login မှာ client-id၊ tenant-id၊ subscription-id ပဲသုံးပြီး password မသုံးဘူး။") },
  ],
};
