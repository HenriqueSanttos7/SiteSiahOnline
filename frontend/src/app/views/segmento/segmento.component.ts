import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { NgFor } from "@angular/common";
import { FooterComponent } from "../../shared/footer/footer.component";
import { EmailCtaComponent } from "../../shared/email-cta/email-cta.component";

export interface Problema {
  icon: string;
  titulo: string;
  desc: string;
  beneficio: string;
}

export interface AppCard {
  slug: string;
  nome: string;
  icon: string;
  desc: string;
}

export interface Segmento {
  slug: string;
  label: string;
  cor: string;
  corDark: string;
  icon: string;
  apresentacao: {
    titulo: string;
    p1: string;
    p2: string;
    p3: string;
  };
  solucoes: AppCard[];
  problemas: Problema[];
}

@Component({
  selector: "app-segmento",
  standalone: true,
  imports: [NgFor, FooterComponent, EmailCtaComponent, RouterLink],
  templateUrl: "./segmento.component.html",
  styleUrls: ["./segmento.component.scss"],
})
export class SegmentoComponent implements OnInit {
  segmentos: Segmento[] = [
    {
      slug: "atacarejo",
      label: "Atacarejo",
      cor: "#e00202",
      corDark: "#a50404",
      icon: "fas fa-warehouse",
      apresentacao: {
        titulo: "Sistema de gestão para atacarejo: eficiência do atacado com a agilidade do varejo",
        p1: "A SIAH oferece um ecossistema completo para o atacarejo — do ERP ao e-commerce integrado e força de vendas em campo — tudo pensado para quem precisa atender atacado e varejo ao mesmo tempo, com tabelas de preço distintas, alto volume de estoque e conformidade fiscal nas operações com CNPJ.",
        p2: "Na prática, o A7 ERP centraliza estoque, fiscal e financeiro na retaguarda; o E-commerce sincroniza catálogo e preços automaticamente para vendas online; e o app Força de Vendas leva o pedido externo direto ao sistema, sem retrabalho. Tudo conectado, tudo em tempo real.",
        p3: "O resultado é uma operação mais ágil, com menos erros, mais canais de venda ativos e visibilidade total para tomar decisões estratégicas com segurança.",
      },
      solucoes: [
        { slug: "sistema-a7", nome: "A7 ERP", icon: "fas fa-server", desc: "ERP central: estoque, fiscal e financeiro integrados." },
        { slug: "e-commerce", nome: "E-commerce", icon: "fas fa-shopping-bag", desc: "Venda online integrada ao estoque e catálogo do A7." },
        { slug: "forca-de-venda", nome: "Força de Vendas", icon: "fas fa-mobile-alt", desc: "Pedidos externos e cobrança em campo em tempo real." },
        { slug: "a7-web", nome: "A7 Web", icon: "fas fa-chart-bar", desc: "Relatórios gerenciais acessíveis de qualquer lugar." },
      ],
      problemas: [
        { icon: "fas fa-tags", titulo: "Gestão de preços para atacado e varejo ao mesmo tempo", desc: "Manter tabelas de preço distintas para clientes pessoa física e jurídica sem um sistema integrado gera erros e retrabalho. O A7 permite configurar múltiplas tabelas de preço por perfil, canal e volume de compra.", beneficio: "precificação correta para cada tipo de cliente, sem retrabalho e com mais margem." },
        { icon: "fas fa-boxes", titulo: "Controle de grandes volumes de estoque", desc: "Gerenciar um volume elevado de SKUs e movimentações sem automação compromete a operação. O A7 integra entrada via XML, alertas de mínimo e máximo e inventário automatizado.", beneficio: "estoque sempre preciso, menos rupturas e mais eficiência operacional." },
        { icon: "fas fa-shopping-bag", titulo: "Ausência de canal de venda online", desc: "Atacarejos que não vendem online perdem clientes para concorrentes digitais. O E-commerce da SIAH sincroniza catálogo, preços e estoque automaticamente com o A7, sem retrabalho.", beneficio: "novo canal de vendas ativo, estoque sempre correto e mais receita." },
        { icon: "fas fa-file-invoice-dollar", titulo: "Complexidade fiscal nas operações de atacado", desc: "Emissão de NF-e para pessoas jurídicas e controle de ICMS-ST exigem precisão. O módulo fiscal do A7 automatiza os cálculos tributários e a transmissão para a SEFAZ.", beneficio: "conformidade fiscal, menos erros e segurança nas operações com clientes CNPJ." },
      ],
    },
    {
      slug: "varejo-geral",
      label: "Varejo em Geral",
      cor: "#0077cc",
      corDark: "#005fa3",
      icon: "fas fa-store",
      apresentacao: {
        titulo: "Sistema de gestão para o varejo: controle total do caixa ao financeiro",
        p1: "A SIAH oferece para o varejo em geral um ecossistema completo de soluções — o A7 ERP, o PDV Touch na frente de caixa, o Pré-Venda para atendimento interno e o A7 Web para acompanhamento remoto — integrando todas as áreas do negócio em um único lugar.",
        p2: "O A7 centraliza estoque, fiscal e financeiro na retaguarda; o PDV Touch garante uma frente de caixa rápida e estável com emissão de NFC-e e múltiplas formas de pagamento; o Pré-Venda agiliza o atendimento interno; e o A7 Web entrega relatórios e indicadores em tempo real para o gestor de qualquer lugar.",
        p3: "O resultado é uma operação mais ágil, com caixa mais rápido, estoque sempre atualizado, conformidade fiscal garantida e visibilidade total para tomar decisões estratégicas e aumentar a rentabilidade do seu negócio.",
      },
      solucoes: [
        { slug: "sistema-a7", nome: "A7 ERP", icon: "fas fa-server", desc: "ERP central: estoque, fiscal e financeiro integrados." },
        { slug: "pdv-touch", nome: "PDV Touch", icon: "fas fa-desktop", desc: "Frente de caixa touch rápida, moderna e integrada ao A7." },
        { slug: "pre-venda", nome: "Pré-Venda", icon: "fas fa-shopping-cart", desc: "Atendimento interno e consulta de produtos integrados." },
        { slug: "a7-web", nome: "A7 Web", icon: "fas fa-chart-bar", desc: "Relatórios gerenciais acessíveis de qualquer lugar." },
      ],
      problemas: [
        { icon: "fas fa-cash-register", titulo: "Lentidão no atendimento e filas no caixa", desc: "Problemas de lentidão no PDV impactam diretamente a experiência do cliente e aumentam o tempo de espera. O PDV Touch da SIAH é rápido, estável e integrado ao estoque em tempo real, com suporte a múltiplas formas de pagamento e emissão de NFC-e.", beneficio: "atendimento mais ágil, menos filas e maior satisfação do cliente." },
        { icon: "fas fa-boxes", titulo: "Controle de estoque ineficiente", desc: "Contagens manuais e processos demorados geram erros, perdas e rupturas. O A7 automatiza o gerenciamento de estoque com entrada via XML e alertas de mínimo e máximo.", beneficio: "redução de perdas, mais produtividade e estoque sempre atualizado." },
        { icon: "fas fa-file-invoice-dollar", titulo: "Dificuldade com obrigações fiscais", desc: "Emitir NF-e, NFC-e e manter a conformidade fiscal pode ser complexo. O módulo fiscal do A7 automatiza a transmissão para a SEFAZ e calcula os impostos corretamente.", beneficio: "conformidade fiscal, menos erros e mais segurança nas operações." },
        { icon: "fas fa-chart-line", titulo: "Falta de indicadores para decisões estratégicas", desc: "Planilhas manuais dificultam o acompanhamento financeiro. Com o A7 e o A7 Web, você acessa DRE, fluxo de caixa e relatórios gerenciais em tempo real de qualquer lugar.", beneficio: "visão completa do negócio e decisões baseadas em dados reais." },
      ],
    },
    {
      slug: "materiais-construcao",
      label: "Materiais de Construção",
      cor: "#00b37e",
      corDark: "#008f63",
      icon: "fas fa-hard-hat",
      apresentacao: {
        titulo: "Sistema de gestão para materiais de construção: controle total da sua operação",
        p1: "A SIAH atende lojas de materiais de construção com um conjunto de soluções integradas — o A7 ERP, o app de Expedição e Estoque e o Pré-Venda — cobrindo desde o orçamento ao cliente até a entrega da mercadoria com comprovação digital.",
        p2: "O A7 ERP centraliza vendas, estoque de múltiplos depósitos, fiscal e financeiro; o app Pré-Venda digitaliza orçamentos e os converte em pedido direto no sistema; e o app Expedição controla a separação, agenda entregas e registra comprovantes com foto e assinatura.",
        p3: "O resultado é uma operação mais organizada, com menos erros no processo de venda e entrega, estoque sempre atualizado e gestão financeira integrada para impulsionar os resultados da sua loja.",
      },
      solucoes: [
        { slug: "sistema-a7", nome: "A7 ERP", icon: "fas fa-server", desc: "ERP central: estoque, fiscal e financeiro integrados." },
        { slug: "expedicao-estoque", nome: "Expedição e Estoque", icon: "fas fa-warehouse", desc: "Controle de entregas, separação e comprovantes via app." },
        { slug: "pre-venda", nome: "Pré-Venda", icon: "fas fa-shopping-cart", desc: "Orçamentos e pedidos internos integrados ao estoque." },
        { slug: "a7-web", nome: "A7 Web", icon: "fas fa-chart-bar", desc: "Relatórios gerenciais acessíveis de qualquer lugar." },
      ],
      problemas: [
        { icon: "fas fa-truck-loading", titulo: "Gestão de entregas desorganizada", desc: "Planilhas e controles manuais de entrega dificultam a operação logística. Com o app Expedição da SIAH, você registra pedidos, agenda entregas e comprova a entrega com foto e assinatura digital.", beneficio: "entregas mais rápidas, menor custo logístico e menos retrabalho." },
        { icon: "fas fa-boxes", titulo: "Controle de estoque em múltiplos depósitos", desc: "Gerenciar estoques em diferentes locais é complexo sem um sistema integrado. O A7 permite controlar múltiplos depósitos com transferências e inventário automatizado.", beneficio: "estoque sempre atualizado, menos perdas e mais eficiência operacional." },
        { icon: "fas fa-file-contract", titulo: "Pedidos por encomenda e orçamentos manuais", desc: "Orçamentos feitos manualmente geram erros e retrabalho. O app Pré-Venda da SIAH digitaliza o processo e converte automaticamente em pedido de venda integrado ao estoque do A7.", beneficio: "mais produtividade, menos erros e agilidade no fechamento de vendas." },
        { icon: "fas fa-calculator", titulo: "Dificuldade no cálculo de margens e tributação", desc: "O cadastro de produtos e regras fiscais pode ser complexo. O módulo fiscal do A7 automatiza os cálculos tributários garantindo conformidade e segurança.", beneficio: "menos erros, mais produtividade e confiança no recolhimento de impostos." },
      ],
    },
    {
      slug: "distribuidoras",
      label: "Distribuidoras",
      cor: "#7c3aed",
      corDark: "#5b21b6",
      icon: "fas fa-truck",
      apresentacao: {
        titulo: "Sistema de gestão para distribuidoras: do pedido à entrega com controle total",
        p1: "A SIAH oferece para distribuidoras um ecossistema que vai além do ERP — o A7 ERP na retaguarda, o app Força de Vendas para a equipe externa e o app Expedição para o controle logístico, integrando todo o ciclo de pedido, separação e entrega em um único fluxo.",
        p2: "O representante fecha o pedido no app Força de Vendas em campo; o estoque do A7 é atualizado em tempo real; a expedição separa, expede e comprova a entrega com foto, localização e assinatura digital — e o financeiro consolida tudo automaticamente.",
        p3: "Mais agilidade do pedido à entrega, rastreabilidade completa da operação logística e visibilidade total do ciclo de vendas para crescer com eficiência e menos retrabalho.",
      },
      solucoes: [
        { slug: "sistema-a7", nome: "A7 ERP", icon: "fas fa-server", desc: "ERP central: pedidos, fiscal e financeiro integrados." },
        { slug: "forca-de-venda", nome: "Força de Vendas", icon: "fas fa-mobile-alt", desc: "Pedidos externos, rotas e cobrança de títulos em campo." },
        { slug: "expedicao-estoque", nome: "Expedição e Estoque", icon: "fas fa-warehouse", desc: "Separação, expedição e comprovante de entrega digital." },
        { slug: "a7-web", nome: "A7 Web", icon: "fas fa-chart-bar", desc: "Acompanhe indicadores de vendas e estoque remotamente." },
      ],
      problemas: [
        { icon: "fas fa-map-marker-alt", titulo: "Rotas de entrega desorganizadas", desc: "Sem controle de rotas, os representantes perdem tempo e a operação fica cara. O app Força de Vendas da SIAH organiza a carteira de clientes, registra pedidos externos e otimiza a sequência de visitas.", beneficio: "rotas mais eficientes, menos custos logísticos e mais pedidos fechados por dia." },
        { icon: "fas fa-shopping-cart", titulo: "Pedidos externos sem integração ao estoque", desc: "Pedidos anotados em papel ou planilha geram erros e atrasos no faturamento. Com o app Força de Vendas, os pedidos refletem imediatamente no estoque do A7 na retaguarda.", beneficio: "menos erros, faturamento mais rápido e estoque sempre preciso." },
        { icon: "fas fa-camera", titulo: "Entregas sem comprovação formal", desc: "Entregar mercadorias sem comprovante gera disputas com clientes e falta de rastreabilidade. O app Expedição da SIAH registra foto, localização e assinatura digital no ato da entrega.", beneficio: "entregas comprovadas, menos conflitos e operação logística rastreável." },
        { icon: "fas fa-file-invoice-dollar", titulo: "Emissão de NF-e e MDF-e em alto volume", desc: "Distribuidoras têm alto volume de notas fiscais e documentos de transporte. O módulo fiscal do A7 automatiza a emissão de NF-e e MDF-e com transmissão direta para a SEFAZ.", beneficio: "conformidade fiscal, menos erros e agilidade no faturamento de pedidos." },
      ],
    },
    {
      slug: "supermercados",
      label: "Supermercados",
      cor: "#DB2777",
      corDark: "#bb2167",
      icon: "fas fa-shopping-cart",
      apresentacao: {
        titulo: "Sistema de gestão para supermercados: eficiência e lucratividade em cada operação",
        p1: "A SIAH atende supermercados com um conjunto integrado de soluções — o A7 ERP na retaguarda, o PDV Touch na frente de caixa e o A7 Web para acompanhamento remoto — cobrindo do recebimento de mercadorias ao demonstrativo de resultados em um único ecossistema.",
        p2: "O A7 ERP gerencia estoque, fiscal e financeiro; o PDV Touch oferece uma frente de caixa moderna, adaptada para touch screen, com emissão de NFC-e e múltiplas formas de pagamento; e o A7 Web entrega relatórios e indicadores em tempo real para o gestor acompanhar de qualquer lugar.",
        p3: "O resultado é uma operação mais ágil, com caixa mais rápido, estoque sempre preciso e visibilidade total para tomar decisões estratégicas e impulsionar a lucratividade da sua loja.",
      },
      solucoes: [
        { slug: "sistema-a7", nome: "A7 ERP", icon: "fas fa-server", desc: "ERP central: estoque, fiscal e financeiro integrados." },
        { slug: "pdv-touch", nome: "PDV Touch", icon: "fas fa-desktop", desc: "Frente de caixa touch rápida, moderna e integrada ao A7." },
        { slug: "pre-venda", nome: "Pré-Venda", icon: "fas fa-shopping-cart", desc: "Consulta de produtos e atendimento interno integrado." },
        { slug: "a7-web", nome: "A7 Web", icon: "fas fa-chart-bar", desc: "Relatórios e indicadores acessíveis de qualquer lugar." },
      ],
      problemas: [
        { icon: "fas fa-cash-register", titulo: "Filas no checkout e falhas na frente de caixa", desc: "Problemas de lentidão impactam diretamente a experiência do cliente. O PDV Touch da SIAH oferece interface moderna adaptada a touch screen, com múltiplas formas de pagamento e emissão de NFC-e integrada ao A7.", beneficio: "atendimento mais rápido, menor custo e melhor desempenho no caixa." },
        { icon: "fas fa-boxes", titulo: "Controle de estoque e inventário ineficiente", desc: "Contagens manuais geram erros, perdas e rupturas. O A7 automatiza o gerenciamento com entrada via XML e alertas automáticos de estoque mínimo e máximo.", beneficio: "redução de perdas, mais produtividade e conferência automatizada." },
        { icon: "fas fa-calculator", titulo: "Cálculo de margens e tributação complexa", desc: "O cadastro de regras fiscais pode ser um pesadelo. O módulo fiscal do A7 automatiza os cálculos tributários garantindo conformidade e segurança fiscal.", beneficio: "menos erros, mais produtividade e confiança no recolhimento de impostos." },
        { icon: "fas fa-chart-line", titulo: "Falta de indicadores confiáveis para decisões", desc: "Planilhas manuais dificultam o acompanhamento financeiro e operacional. Com o A7 e o A7 Web, você tem DRE, dashboards e relatórios automatizados com dados centralizados.", beneficio: "visão completa do negócio e decisões baseadas em dados reais." },
      ],
    },
    {
      slug: "confeccao-calcados",
      label: "Confecção e Calçados",
      cor: "#f97316",
      corDark: "#c45d0a",
      icon: "fas fa-tshirt",
      apresentacao: {
        titulo: "Sistema de gestão para confecção e calçados: controle de grade, estoque e vendas em um só lugar",
        p1: "A SIAH oferece para o setor de confecção e calçados um ecossistema completo — o A7 ERP com controle de grade por tamanho e cor, o PDV Touch para a frente de caixa e o app Força de Vendas para representantes externos — integrando loja física, venda em campo e gestão de coleções.",
        p2: "O A7 controla a grade completa de cada produto com baixa automática por variação; o PDV Touch agiliza o atendimento no caixa com interface touch e emissão de NFC-e; e o Força de Vendas permite que representantes registrem pedidos de clientes externos diretamente no sistema, sem retrabalho.",
        p3: "O resultado é estoque sempre preciso por grade, caixa mais ágil, compras mais assertivas por coleção e menos encalhamento — com visibilidade total da operação para o gestor.",
      },
      solucoes: [
        { slug: "sistema-a7", nome: "A7 ERP", icon: "fas fa-server", desc: "ERP central com controle de grade, fiscal e financeiro." },
        { slug: "pdv-touch", nome: "PDV Touch", icon: "fas fa-desktop", desc: "Frente de caixa touch ágil integrada ao estoque por grade." },
        { slug: "forca-de-venda", nome: "Força de Vendas", icon: "fas fa-mobile-alt", desc: "Representantes externos integrados ao estoque e faturamento." },
        { slug: "a7-web", nome: "A7 Web", icon: "fas fa-chart-bar", desc: "Acompanhe giro por coleção e variação remotamente." },
      ],
      problemas: [
        { icon: "fas fa-layer-group", titulo: "Controle de grade de produtos sem precisão", desc: "Gerenciar produtos com múltiplas variações de tamanho e cor manualmente gera erros de estoque e vendas perdidas. O A7 controla a grade completa de cada produto com baixa automática por variação.", beneficio: "estoque preciso por grade, menos rupturas e mais vendas concretizadas." },
        { icon: "fas fa-exchange-alt", titulo: "Trocas e devoluções sem rastreabilidade", desc: "Sem um sistema integrado, trocas e devoluções geram inconsistências no estoque e no financeiro. O A7 registra cada movimentação com rastreabilidade completa e atualização automática do estoque.", beneficio: "menos divergências, controle total de trocas e financeiro sempre correto." },
        { icon: "fas fa-cash-register", titulo: "PDV lento para alto volume de atendimentos", desc: "Em períodos de pico, a lentidão no caixa prejudica a experiência do cliente. O PDV Touch da SIAH é rápido, intuitivo e integrado ao estoque por grade e ao fiscal em tempo real.", beneficio: "mais agilidade no caixa, filas menores e clientes mais satisfeitos." },
        { icon: "fas fa-chart-bar", titulo: "Falta de análise de desempenho por coleção", desc: "Sem relatórios integrados, é difícil saber quais peças vendem mais e quais encalham. O A7 oferece relatórios de giro por produto, variação e período para apoiar decisões de compra.", beneficio: "compras mais assertivas, menos encalhamento e margens mais saudáveis." },
      ],
    },
    {
      slug: "farmacias-drogarias",
      label: "Farmácias e Drogarias",
      cor: "#a52a2f",
      corDark: "#852225",
      icon: "fas fa-pills",
      apresentacao: {
        titulo: "Sistema de gestão para farmácias e drogarias: conformidade, controle e agilidade no atendimento",
        p1: "A SIAH oferece para farmácias e drogarias um conjunto de soluções integradas — o A7 ERP com controle de lote, validade e medicamentos controlados, o PDV Touch na frente de caixa e o A7 Web para acompanhamento remoto — garantindo conformidade com a ANVISA e a SEFAZ em toda a operação.",
        p2: "O A7 ERP gerencia o estoque com controle de FEFO (primeiro a vencer, primeiro a sair) e alertas de vencimento; o PDV Touch agiliza o atendimento com emissão de NFC-e e múltiplas formas de pagamento; e o A7 Web entrega relatórios financeiros e de estoque para o gestor acompanhar de qualquer lugar.",
        p3: "O resultado é uma farmácia com rastreabilidade total dos produtos, caixa mais ágil, menos perdas por vencimento e conformidade fiscal garantida — com mais segurança para a operação e para o cliente.",
      },
      solucoes: [
        { slug: "sistema-a7", nome: "A7 ERP", icon: "fas fa-server", desc: "ERP com controle de lote, validade, fiscal e financeiro." },
        { slug: "pdv-touch", nome: "PDV Touch", icon: "fas fa-desktop", desc: "Caixa touch ágil com NFC-e e múltiplas formas de pagamento." },
        { slug: "pre-venda", nome: "Pré-Venda", icon: "fas fa-shopping-cart", desc: "Consulta de produtos e atendimento interno integrado." },
        { slug: "a7-web", nome: "A7 Web", icon: "fas fa-chart-bar", desc: "Relatórios de estoque e financeiro acessíveis remotamente." },
      ],
      problemas: [
        { icon: "fas fa-capsules", titulo: "Controle de medicamentos controlados e psicotrópicos", desc: "Gerenciar medicamentos sujeitos a controle especial exige rastreabilidade e registros precisos. O A7 controla lote, validade e movimentação de cada produto com os registros necessários para conformidade.", beneficio: "conformidade regulatória, rastreabilidade total e menos riscos na operação." },
        { icon: "fas fa-thermometer-half", titulo: "Gestão de validade e lote de medicamentos", desc: "Produtos vencidos nas prateleiras geram perdas e riscos para o cliente. O A7 alerta sobre validades próximas e controla o FEFO (primeiro a vencer, primeiro a sair) automaticamente.", beneficio: "menos perdas por vencimento, mais segurança e estoque sempre confiável." },
        { icon: "fas fa-file-invoice-dollar", titulo: "Complexidade fiscal na tributação de medicamentos", desc: "A tributação de medicamentos envolve regras específicas de ICMS, PIS e COFINS. O módulo fiscal do A7 automatiza os cálculos e garante a conformidade nas emissões de NF-e e NFC-e.", beneficio: "menos erros fiscais, conformidade garantida e segurança nas operações." },
        { icon: "fas fa-cash-register", titulo: "Lentidão no atendimento e filas no caixa", desc: "Farmácias têm alto fluxo de clientes e qualquer lentidão no PDV impacta a experiência. O PDV Touch da SIAH é rápido, integrado ao estoque e aceita múltiplas formas de pagamento.", beneficio: "atendimento mais ágil, menos filas e maior satisfação dos clientes." },
      ],
    },
    {
      slug: "industrias",
      label: "Indústrias",
      cor: "#e11d48",
      corDark: "#b0122f",
      icon: "fas fa-industry",
      apresentacao: {
        titulo: "Sistema de gestão para indústrias: do chão de fábrica ao financeiro em um só sistema",
        p1: "A SIAH oferece para indústrias um ecossistema integrado — o A7 ERP controlando produção, estoque e financeiro, o app Expedição e Estoque para movimentações no galpão e o app Força de Vendas para representantes externos — cobrindo do chão de fábrica ao cliente final.",
        p2: "O A7 registra ordens de produção, controla matéria-prima e produto acabado e apura o custo por ordem; o app Expedição gerencia a separação e expedição de produtos; e o Força de Vendas leva o catálogo e os pedidos dos representantes direto ao sistema, sem retrabalho.",
        p3: "O resultado é uma indústria com mais eficiência operacional, custo de produção visível, estoque sempre equilibrado e conformidade fiscal garantida para crescer com segurança.",
      },
      solucoes: [
        { slug: "sistema-a7", nome: "A7 ERP", icon: "fas fa-server", desc: "ERP central: produção, estoque, fiscal e financeiro." },
        { slug: "expedicao-estoque", nome: "Expedição e Estoque", icon: "fas fa-warehouse", desc: "Controle de insumos, produto acabado e expedição." },
        { slug: "forca-de-venda", nome: "Força de Vendas", icon: "fas fa-mobile-alt", desc: "Representantes externos integrados ao estoque e faturamento." },
        { slug: "a7-web", nome: "A7 Web", icon: "fas fa-chart-bar", desc: "Relatórios de produção e financeiro remotamente." },
      ],
      problemas: [
        { icon: "fas fa-industry", titulo: "Falta de controle sobre o processo de produção", desc: "Sem um sistema integrado, acompanhar ordens de produção e consumo de insumos é manual e sujeito a erros. O A7 registra e controla todo o fluxo produtivo com rastreabilidade por ordem.", beneficio: "mais eficiência, menos perdas de insumos e produção rastreável." },
        { icon: "fas fa-boxes", titulo: "Gestão de estoque de insumos e produto acabado", desc: "Controlar matéria-prima, produtos em processo e produto acabado sem um sistema gera rupturas e excesso. O A7 e o app Expedição integram o estoque à produção em tempo real.", beneficio: "estoque equilibrado, menos rupturas e mais previsibilidade na produção." },
        { icon: "fas fa-dollar-sign", titulo: "Dificuldade no cálculo de custo de produção", desc: "Sem visibilidade dos custos de insumos e mão de obra, precificar corretamente é impossível. O A7 apura o custo de produção por ordem e produto com dados reais da operação.", beneficio: "precificação correta, margens protegidas e competitividade no mercado." },
        { icon: "fas fa-file-invoice-dollar", titulo: "Complexidade fiscal na emissão de NF-e", desc: "Indústrias têm regras fiscais específicas com IPI, ICMS-ST e outros tributos. O módulo fiscal do A7 automatiza os cálculos e garante conformidade com a SEFAZ.", beneficio: "conformidade fiscal, menos autuações e segurança nas operações." },
      ],
    },
    {
      slug: "servicos",
      label: "Serviços",
      cor: "#FFA600",
      corDark: "#d68d04",
      icon: "fas fa-briefcase",
      apresentacao: {
        titulo: "Sistema de gestão para empresas de serviços: controle financeiro e operacional em um só lugar",
        p1: "A SIAH atende empresas de serviços com um conjunto integrado de soluções — o A7 ERP para gestão de ordens de serviço, contratos e financeiro, o app Pré-Venda para orçamentos internos e o app Força de Vendas para equipes externas — cobrindo todo o ciclo do atendimento ao faturamento.",
        p2: "O A7 centraliza as OS, histórico de clientes, faturamento e emissão de NFS-e de forma automatizada; o Pré-Venda agiliza orçamentos no balcão; e o Força de Vendas permite que técnicos e vendedores externos registrem atendimentos e pedidos diretamente no sistema, sem retrabalho.",
        p3: "O resultado é uma operação mais organizada, faturamento mais rápido, conformidade fiscal garantida e visibilidade clara da rentabilidade de cada contrato e serviço prestado.",
      },
      solucoes: [
        { slug: "sistema-a7", nome: "A7 ERP", icon: "fas fa-server", desc: "ERP central: OS, contratos, fiscal e financeiro." },
        { slug: "pre-venda", nome: "Pré-Venda", icon: "fas fa-shopping-cart", desc: "Orçamentos e atendimento interno integrado ao sistema." },
        { slug: "forca-de-venda", nome: "Força de Vendas", icon: "fas fa-mobile-alt", desc: "Equipe externa com acesso a clientes e pedidos em campo." },
        { slug: "a7-web", nome: "A7 Web", icon: "fas fa-chart-bar", desc: "Acompanhe contratos e financeiro de qualquer lugar." },
      ],
      problemas: [
        { icon: "fas fa-file-alt", titulo: "Controle de ordens de serviço manual e desorganizado", desc: "Ordens de serviço em papel ou planilha dificultam o acompanhamento do status de cada atendimento. O A7 digitaliza e centraliza todas as OS com histórico de cliente e serviço prestado.", beneficio: "mais organização, atendimentos rastreáveis e menos retrabalho." },
        { icon: "fas fa-file-invoice-dollar", titulo: "Faturamento e emissão de NFS-e demorados", desc: "Faturar serviços manualmente e emitir notas fiscais de forma desintegrada gera atrasos e erros. O A7 integra o faturamento à emissão de NFS-e de forma automatizada.", beneficio: "faturamento mais rápido, menos erros e conformidade fiscal garantida." },
        { icon: "fas fa-chart-line", titulo: "Falta de controle financeiro sobre contratos", desc: "Sem visibilidade das receitas e despesas por contrato, é difícil saber se o serviço é lucrativo. O A7 oferece DRE, fluxo de caixa e relatórios por cliente e contrato.", beneficio: "visão clara da rentabilidade por serviço e decisões baseadas em dados." },
        { icon: "fas fa-users", titulo: "Gestão de clientes e histórico de atendimento dispersos", desc: "Informações de clientes espalhadas em e-mails e planilhas dificultam o relacionamento. O A7 centraliza o cadastro de clientes com histórico completo de serviços e financeiro.", beneficio: "atendimento mais personalizado, menos retrabalho e mais fidelização." },
      ],
    },
    {
      slug: "marinas",
      label: "Marinas",
      cor: "#003a96",
      corDark: "#042458",
      icon: "fas fa-ship",
      apresentacao: {
        titulo: "Sistema de gestão para empresas fluviais: ordens de serviço, conveniência e operação náutica integradas",
        p1: "A SIAH atende empresas fluviais com três frentes de soluções — o A7 ERP para ordens de serviço e aluguel de vagas, o PDV Touch para a conveniência e o aplicativo Navegação (independente) para as operações a bordo — cobrindo toda a operação da marina em um único ecossistema.",
        p2: "O A7 digitaliza as OS de manutenção e reparo de embarcações, controla contratos de locação de vagas e integra tudo ao financeiro automaticamente; o PDV Touch garante caixa, estoque e fiscal da conveniência em tempo real; e o Navegação cuida de passagens, cargas e vendas a bordo de forma independente.",
        p3: "O resultado é uma empresa com serviços rastreáveis, aluguéis controlados, caixa sempre fechado na conveniência e visão financeira consolidada de todas as frentes do negócio.",
      },
      solucoes: [
        { slug: "sistema-a7", nome: "A7 ERP", icon: "fas fa-server", desc: "ERP central: OS, aluguel de vagas, fiscal e financeiro." },
        { slug: "pdv-touch", nome: "PDV Touch", icon: "fas fa-desktop", desc: "Caixa da conveniência integrado ao estoque e fiscal." },
        { slug: "navegacao", nome: "Navegação", icon: "fas fa-ship", desc: "App independente: passagens, cargas e bar a bordo." },
        { slug: "a7-web", nome: "A7 Web", icon: "fas fa-chart-bar", desc: "Relatórios financeiros consolidados de qualquer lugar." },
      ],
      problemas: [
        { icon: "fas fa-clipboard-list", titulo: "Ordens de serviço de manutenção sem controle", desc: "Gerenciar serviços de manutenção e reparos de embarcações sem um sistema gera cobranças erradas, serviços esquecidos e clientes insatisfeitos. O A7 digitaliza as OS com histórico completo por embarcação e cliente.", beneficio: "serviços rastreáveis, cobranças corretas e mais confiança do cliente na marina." },
        { icon: "fas fa-anchor", titulo: "Aluguel de vagas e espaços sem registro formal", desc: "Controlar o aluguel de vagas, docas e espaços em planilha gera inadimplência e conflitos. O A7 registra contratos de locação, vencimentos e integra automaticamente ao financeiro.", beneficio: "recebimentos no prazo, menos inadimplência e controle total dos espaços locados." },
        { icon: "fas fa-cash-register", titulo: "Conveniência operando sem PDV integrado", desc: "Uma loja ou bar físico na marina sem sistema gera desvios de caixa, estoque descontrolado e perda de receita. O PDV Touch da SIAH integra vendas, estoque e fiscal em tempo real.", beneficio: "caixa sempre fechado, estoque preciso e conformidade fiscal na conveniência." },
        { icon: "fas fa-chart-line", titulo: "Falta de visão financeira consolidada da marina", desc: "Com serviços, aluguéis e conveniência separados, é impossível saber a real rentabilidade do negócio. O A7 consolida todas as receitas e despesas em DRE e relatórios gerenciais integrados.", beneficio: "visão completa do negócio, decisões mais seguras e operação mais lucrativa." },
      ],
    },
  ];

  getAppImg(slug: string): string {
    const imgs: Record<string, string> = {
      "sistema-a7": "assets/images/soft/capa_a7erp.png",
      "pdv-touch": "assets/images/soft/capa_pdvtouch.png",
      "pre-venda": "assets/images/soft/capa_prevenda.png",
      "forca-de-venda": "assets/images/soft/capa_forcadevendas.png",
      "expedicao-estoque": "assets/images/soft/capa_expedicao.png",
      navegacao: "assets/images/soft/capa_dashboard.png",
      "a7-web": "assets/images/soft/capa_a7web.png",
      "e-commerce": "assets/images/soft/capa_ecommerce.png",
    };
    return imgs[slug] ?? "assets/images/soft/pre_vendas.webp";
  }

  segmento!: Segmento;
  outros: Segmento[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get("slug") ?? "";
      this.segmento = this.segmentos.find((s) => s.slug === slug) ?? this.segmentos[0];
      this.outros = this.segmentos.filter((s) => s.slug !== this.segmento.slug);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        const o = new IntersectionObserver(
          (e) => {
            e.forEach((x) => {
              if (x.isIntersecting) x.target.classList.add("visible");
            });
          },
          { threshold: 0.1 },
        );
        document.querySelectorAll(".reveal").forEach((el) => {
          el.classList.remove("visible");
          o.observe(el);
        });
      }, 100);
    });
  }
}
