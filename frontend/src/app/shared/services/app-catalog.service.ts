import { Injectable } from "@angular/core";

const iconeAndroid = `<img src="assets/images/soft/icon_android.svg">`;
const iconeApple = `<img src="assets/images/soft/icon_apple.svg">`;
const iconeWindows = `<img src="assets/images/soft/icon_windows.svg">`;
const iconeLinux = `<img src="assets/images/soft/icon_linux.svg">`;

export interface AppDetail {
  slug: string;
  categoria: "desktop" | "mobile" | "web";
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  capa: string;
  cor: string;
  tipoLayout: "mobile3D" | "desktop3D";
  funcionalidades: { categoria?: "desktop" | "mobile" | "web"; icon: string; titulo: string; desc: string }[];
}

@Injectable({
  providedIn: "root",
})
export class AppCatalogService {
  private readonly appsCatalog: AppDetail[] = [
    {
      slug: "sistema-a7",
      categoria: "desktop",
      title: "A7 ERP",
      subtitle: "Varejo e Atacado",
      desc: "O ERP completo para gestão do seu negócio. O sistema A7 ERP une gerenciamento de vendas, módulo fiscal, mobile e financeiro em um só lugar. Tudo integrado, tudo em tempo real.",
      img: "assets/images/soft/tela_a7.png",
      capa: "assets/images/soft/capa_a7erp.png",
      cor: "#0097fc",
      tipoLayout: "desktop3D",
      funcionalidades: [
        { categoria: "desktop", icon: "fas fa-file-contract", titulo: `ERP ${iconeWindows}`, desc: "Módulo de gestão empresarial completo." },
        { categoria: "desktop", icon: "fas fa-file-invoice-dollar", titulo: `Fiscal ${iconeWindows}`, desc: "Emissão e gestão de documentos fiscais." },
        { categoria: "desktop", icon: "fas fa-calculator", titulo: `Contábil ${iconeWindows}`, desc: "Gestão e relatórios contábeis da empresa." },
        { categoria: "desktop", icon: "fas fa-cash-register", titulo: `PDV Offline ${iconeWindows} ${iconeLinux}`, desc: "Ponto de venda com funcionamento sem internet." },
        { categoria: "desktop", icon: "fas fa-hand-pointer", titulo: `PDV Touch ${iconeWindows} ${iconeLinux}`, desc: "Ponto de venda otimizado para telas de toque." },
        { categoria: "mobile", icon: "fas fa-mobile-alt", titulo: `Pré venda ${iconeAndroid}`, desc: "Pré-venda ágil para dispositivos móveis (Android)." },
        { categoria: "mobile", icon: "fas fa-shopping-cart", titulo: `Força de Vendas ${iconeAndroid}`, desc: "Ferramenta de vendas externas no A7. (Android)" },
        { categoria: "mobile", icon: "fas fa-boxes", titulo: `Expedição e Estoque ${iconeAndroid}`, desc: "Gestão de estoque e expedição de vendas. (Android)" },
        { categoria: "mobile", icon: "fas fa-tachometer-alt", titulo: `Dashboard ${iconeAndroid} ${iconeApple}`, desc: "Gráficos e indicadores de desempenho e vendas em tempo real. Compatível com Android e iOS." },
        { categoria: "web", icon: "fas fa-store-alt", titulo: `E-commerce ${iconeWindows} ${iconeLinux} ${iconeAndroid} ${iconeApple}`, desc: "Integração completa com vendas em loja virtual, via web." },
        { categoria: "web", icon: "fas fa-globe", titulo: `Web ${iconeWindows} ${iconeLinux} ${iconeAndroid} ${iconeApple}`, desc: "Acesso web para funcionalidades do sistema A7 ERP." },
      ],
    },

    {
      slug: "a7-fiscal",
      categoria: "desktop",
      title: "A7 Fiscal",
      subtitle: "Emissão de Notas Fiscais",
      desc: "O A7 Fiscal é o módulo de emissão de notas fiscais do Sistema A7 ERP. Com ele, você emite notas fiscais eletrônicas (NF-e), notas fiscais de consumidor eletrônicas (NFC-e) e notas fiscais de serviço eletrônicas (NFS-e).",
      img: "assets/images/soft/tela_a7fiscal.png",
      capa: "assets/images/soft/capa_a7fiscal.png",
      cor: "#F88516",
      tipoLayout: "desktop3D",
      funcionalidades: [
        { categoria: "desktop", icon: "fas fa-file-invoice", titulo: `Emissão de NF-e`, desc: "Emita notas fiscais eletrônicas de produtos (NF-e) com integração ao Sistema A7 ERP." },
        { categoria: "desktop", icon: "fas fa-receipt", titulo: `Emissão de NFC-e`, desc: "Emita notas fiscais de consumidor eletrônicas (NFC-e) com integração ao Sistema A7 ERP." },
        { categoria: "desktop", icon: "fas fa-file-alt", titulo: `Emissão de NFS-e`, desc: "Emita notas fiscais de serviço eletrônicas (NFS-e) com integração ao Sistema A7 ERP." },
      ],
    },

    {
      slug: "contabil",
      categoria: "desktop",
      title: "A7 Contábil",
      subtitle: "Gestão Contábil",
      desc: "Módulo para gestão contábil completo, integração com lançamentos, demonstrações e obrigações acessórias.",
      img: "assets/images/soft/tela_a7contabil.png",
      capa: "assets/images/soft/capa_a7contabil.png",
      cor: "#EB2E32",
      tipoLayout: "desktop3D",
      funcionalidades: [
        { categoria: "desktop", icon: "fas fa-calculator", titulo: `Contábil ${iconeWindows}`, desc: "Lançamentos contábeis, balancetes e integração fiscal." },
        { categoria: "desktop", icon: "fas fa-file-alt", titulo: "Demonstrações", desc: "Geração de DRE, Balanço Patrimonial e relatórios contábeis." },
        { categoria: "desktop", icon: "fas fa-file-contract", titulo: "Obrigações Acessórias", desc: "Geração e envio de arquivos exigidos pela legislação." },
      ],
    },

    {
      slug: "granja",
      categoria: "desktop",
      title: "A7 Granja",
      subtitle: "Gestão Agropecuária",
      desc: "Módulo especializado para gestão de granjas e produção avícola, controle de lotes, ração e reprodução.",
      img: "assets/images/soft/tela_a7granja.png",
      capa: "assets/images/soft/capa_a7granja.png",
      cor: "#af7e4e",
      tipoLayout: "desktop3D",
      funcionalidades: [
        { categoria: "desktop", icon: "fas fa-tractor", titulo: `Controle de Lotes ${iconeWindows}`, desc: "Gestão de lotes, lotação, e histórico produtivo." },
        { categoria: "desktop", icon: "fas fa-drumstick-bite", titulo: "Ração e Insumos", desc: "Controle de consumo de ração e insumos por lote." },
        { categoria: "desktop", icon: "fas fa-notes-medical", titulo: "Sanidade", desc: "Registro de procedimentos sanitários e vacinação." },
      ],
    },

    {
      slug: "pdv-offline",
      categoria: "desktop",
      title: "PDV Offline",
      subtitle: "Ponto de Venda Offline",
      desc: "Solução de ponto de venda que opera sem necessidade de conexão, sincronizando dados quando houver conexão disponível.",
      img: "assets/images/soft/tela_pdvoffline.png",
      capa: "assets/images/soft/capa_pdvoffline.png",
      cor: "#00579E",
      tipoLayout: "desktop3D",
      funcionalidades: [
        { categoria: "desktop", icon: "fas fa-cash-register", titulo: `PDV Offline ${iconeWindows} ${iconeLinux}`, desc: "Operação de vendas mesmo sem internet, com sincronização posterior." },
        { categoria: "desktop", icon: "fas fa-credit-card", titulo: "Múltiplas Formas de Pagamento", desc: "PIX, cartão, dinheiro e carteiras digitais integradas." },
        { categoria: "desktop", icon: "fas fa-sync", titulo: "Sincronização Inteligente", desc: "Sincroniza vendas e estoque automaticamente quando conectado." },
      ],
    },

    {
      slug: "pdv-touch",
      categoria: "desktop",
      title: "PDV Touch",
      subtitle: "Ponto de Venda",
      desc: "Frente de caixa integrado ao Sistema A7, design moderno, adaptado para monitores touch screen.",
      img: "assets/images/soft/tela_pdvtouch.png",
      capa: "assets/images/soft/capa_pdvtouch.png",
      cor: "#00579E",
      tipoLayout: "desktop3D",
      funcionalidades: [
        { icon: "fas fa-file-invoice", titulo: "Emissão de NFC-e", desc: "Cupom Fiscal para consumidor final emitido diretamente pelo PDV Touch." },
        { icon: "fas fa-bolt", titulo: "Fácil de Usar", desc: "Rapidez e praticidade ao atender seu cliente com interface touch intuitiva." },
        { icon: "fas fa-palette", titulo: "Personalizável", desc: "Personalize as cores para melhor representar a identidade visual da sua loja." },
        { icon: "fas fa-credit-card", titulo: "Múltiplas Formas de Pagamento", desc: "PIX, cartão, dinheiro, vale e carteiras digitais integrados ao caixa." },
        { icon: "fas fa-sync", titulo: "Integrado ao A7", desc: "Totalmente sincronizado com o Sistema A7, baixando o estoque em tempo real." },
        { icon: "fas fa-desktop", titulo: "Touch Screen", desc: "Design adaptado para monitores touch screen proporcionando agilidade no atendimento." },
      ],
    },

    {
      slug: "dashboard",
      categoria: "mobile",
      title: "Dashboard",
      subtitle: "Indicadores de Desempenho",
      desc: "O Dashboard é um aplicativo integrado ao sistema A7 ERP, que permite acompanhar indicadores de desempenho e gráficos de vendas em tempo real, de qualquer lugar.",
      img: "assets/images/soft/tela_dashboard.png",
      capa: "assets/images/soft/capa_dashboard.png",
      cor: "#0077cc",
      tipoLayout: "desktop3D",
      funcionalidades: [
        { categoria: "mobile", icon: "fas fa-chart-column", titulo: "Gráficos de Vendas", desc: "Visualize o faturamento diário ou mensal com gráficos de barras intuitivos e totais atualizados em tempo real." },
        { categoria: "mobile", icon: "fas fa-arrow-trend-up", titulo: "Estatísticas Detalhadas", desc: "Monitore a quantidade de vendas, o ticket médio, a maior venda e o percentual de crescimento em relação ao mês anterior." },
        { categoria: "mobile", icon: "fas fa-store", titulo: "Gestão Multilojas", desc: "Alterne facilmente entre as filiais da sua empresa e analise os indicadores de cada unidade de forma individual e centralizada." },
        { categoria: "mobile", icon: "fas fa-boxes-stacked", titulo: "Visão Financeira do Estoque", desc: "Acompanhe métricas de valor crucial, como a estimativa e o potencial de lucro bruto do seu estoque atual." },
        { categoria: "mobile", icon: "fas fa-clock", titulo: "Sincronização em Tempo Real", desc: "Todas as informações e métricas financeiras são sincronizadas instantaneamente com o seu Sistema A7 ERP." },
        { categoria: "mobile", icon: "fas fa-mobile-screen", titulo: "Interface Intuitiva", desc: "Design limpo, moderno e focado na leitura rápida dos números mais importantes para a saúde do negócio." },
      ],
    },

    {
      slug: "pre-venda",
      categoria: "mobile",
      title: "Pré-venda",
      subtitle: "Vendas Internas",
      desc: "O aplicativo é integrado ao sistema A7 ERP e sua função é realizar vendas internas, para uma interação mais próxima do cliente, com atualização de dados automática, agilizando o processo de vendas e aumentando a produtividade da equipe.",
      img: "assets/images/soft/tela_prevenda.png",
      capa: "assets/images/soft/capa_prevenda.png",
      cor: "#00a86b",
      tipoLayout: "mobile3D",
      funcionalidades: [
        { icon: "fas fa-barcode", titulo: "Consulta por Código de Barras", desc: "Consulte informações do item mais rápido usando o leitor de código de barras do celular." },
        { icon: "fas fa-user-plus", titulo: "Cadastro de Clientes", desc: "Cadastre o cliente no ato da venda com integration direta ao Sistema A7." },
        { icon: "fas fa-shield-alt", titulo: "Autorização de Vendas", desc: "Autorização de descontos para liberar venda com controle de alçada." },
        { icon: "fas fa-shopping-cart", titulo: "Pré-Vendas", desc: "Crie e consulte pré-vendas de forma rápida e integrada ao estoque." },
        { icon: "fas fa-dollar-sign", titulo: "Contas a Receber", desc: "Consulte o pagamento dos seus clientes e títulos em aberto." },
        { icon: "fas fa-sync", titulo: "Sincronização Automática", desc: "Dados atualizados automaticamente com o Sistema A7 sem necessidade de ação manual." },
      ],
    },
    {
      slug: "forca-de-venda",
      categoria: "mobile",
      title: "Força de Vendas",
      subtitle: "Vendas Externas",
      desc: "O aplicativo é integrado ao Sistema A7 e sua função é realizar vendas externas e cobrança de títulos, com atualização de dados automática.",
      img: "assets/images/soft/tela_forcadevendas.png",
      capa: "assets/images/soft/capa_forcadevendas.png",
      cor: "#e6a800",
      tipoLayout: "mobile3D",
      funcionalidades: [
        { icon: "fas fa-users", titulo: "Carteira de Clientes", desc: "Tenha acesso apenas a seus clientes com gestão da carteira de atendimento." },
        { icon: "fas fa-dollar-sign", titulo: "Recebimento de Títulos", desc: "Receba o valor da parcela do cliente diretamente pelo aplicativo." },
        { icon: "fas fa-chart-line", titulo: "Relatórios de Desempenho", desc: "Vendas x Cliente, vendas diárias e outros relatórios de performance." },
        { icon: "fas fa-shopping-cart", titulo: "Pré-Vendas Externas", desc: "Crie pré-vendas para clientes externos com integração ao estoque do A7." },
        { icon: "fas fa-sync", titulo: "Atualização Automática", desc: "Dados atualizados automaticamente com o Sistema A7 em tempo real." },
        { icon: "fas fa-map-marker-alt", titulo: "Gestão de Rotas", desc: "Organize a rota de visitas e otimize o atendimento externo." },
      ],
    },
    {
      slug: "expedicao-estoque",
      categoria: "mobile",
      title: "Expedição e Estoque",
      subtitle: "Logística e Armazenagem",
      desc: "O aplicativo é integrado ao Sistema A7 e inclui novas rotinas para agilizar os processos nos setores de expedição e estoque.",
      img: "assets/images/soft/tela_expedicao.png",
      capa: "assets/images/soft/capa_expedicao.png",
      cor: "#0077cc",
      tipoLayout: "mobile3D",
      funcionalidades: [
        { icon: "fas fa-camera", titulo: "Comprovante de Entregas", desc: "Imagens, localização e assinaturas como comprovante de entrega integrado ao sistema." },
        { icon: "fas fa-boxes", titulo: "Controle de Estoque", desc: "Consultas, inventários, validade e relatórios de estoque em tempo real." },
        { icon: "fas fa-barcode", titulo: "Endereçamento e Separação", desc: "Endereço de estoque e separação via código de barras para mais agilidade." },
        { icon: "fas fa-truck", titulo: "Expedição", desc: "Coleta, devolução, entrega imediata e transferência entre empresas." },
        { icon: "fas fa-warehouse", titulo: "Kardex", desc: "Armazenagem, separação, inventário e separação checkout integrados." },
        { icon: "fas fa-sync", titulo: "Integrado ao A7", desc: "Todas as movimentações refletem automaticamente no Sistema A7." },
      ],
    },
    {
      slug: "a7-web",
      categoria: "web",
      title: "A7 Web",
      subtitle: "Relatórios de qualquer lugar",
      desc: "A7 Web é a versão online do A7, permite acesso rápido aos principais relatórios gerenciais. Ideal para acompanhar as informações de onde estiver, direto do navegador.",
      img: "assets/images/soft/telas_a7web.png",
      capa: "assets/images/soft/capa_a7web.png",
      cor: "#0077cc",
      tipoLayout: "desktop3D",
      funcionalidades: [
        { icon: "fas fa-chart-bar", titulo: "Acesso aos Relatórios", desc: "Acesse os principais relatórios do Sistema A7 de qualquer lugar, direto do navegador." },
        { icon: "fas fa-cash-register", titulo: "Caixa de Recebimento", desc: "Consulte detalhes sobre os caixas de recebimento e movimentações financeiras." },
        { icon: "fas fa-boxes", titulo: "Acompanhamento do Estoque", desc: "Monitore o estoque para melhores tomadas de decisão sem precisar estar na loja." },
        { icon: "fas fa-mobile-alt", titulo: "Responsivo", desc: "Acesse pelo celular, tablet ou computador com total compatibilidade em qualquer dispositivo." },
        { icon: "fas fa-lock", titulo: "Acesso Seguro", desc: "Login com usuário e senha vinculado ao seu cadastro no Sistema A7." },
        { icon: "fas fa-sync", titulo: "Dados em Tempo Real", desc: "Informações sempre atualizadas e sincronizadas com o Sistema A7 da sua empresa." },
      ],
    },
    {
      slug: "e-commerce",
      categoria: "web",
      title: "E-commerce",
      subtitle: "Loja virtual integrada ao A7 ERP",
      desc: "O e-commerce é integrado ao Sistema A7 ERP, garantindo uma gestão eficiente, centralizada e automatizada de todas as operações online — totalmente responsivo, adaptado para qualquer dispositivo.",
      img: "assets/images/soft/ecommerce.png",
      capa: "assets/images/soft/capa_ecommerce.png",
      cor: "#c0392b",
      tipoLayout: "desktop3D",
      funcionalidades: [
        { icon: "fas fa-shopping-bag", titulo: "Pedidos Online Sincronizados", desc: "Visualização de pedidos, status de pagamento, envio e entrega integrados ao A7." },
        { icon: "fas fa-sync", titulo: "Catálogo de Produtos Atualizado", desc: "Dados dos produtos atualizados de acordo com o Sistema A7 — descrição, preço e disponibilidade." },
        { icon: "fas fa-boxes", titulo: "Integração com Estoque", desc: "Vendas online impactam diretamente no estoque do Sistema A7 em tempo real." },
        { icon: "fas fa-mobile-alt", titulo: "Totalmente Responsivo", desc: "Adaptado para qualquer dispositivo — celular, tablet ou computador." },
        { icon: "fas fa-credit-card", titulo: "Múltiplas Formas de Pagamento", desc: "PIX, cartão de crédito, boleto e outros meios de pagamento online." },
        { icon: "fas fa-store", titulo: "Gestão Centralizada", desc: "Gerencie sua loja física e virtual em um único sistema integrado." },
      ],
    },
  ];

  getAllApps(): AppDetail[] {
    return this.appsCatalog;
  }

  getAppBySlug(slug: string): AppDetail | undefined {
    return this.appsCatalog.find((app) => app.slug === slug);
  }
}
