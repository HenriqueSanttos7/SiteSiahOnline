import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FooterComponent } from '../../shared/footer/footer.component';
import { EmailCtaComponent } from '../../shared/email-cta/email-cta.component';

export interface Problema {
  icon: string;
  titulo: string;
  desc: string;
  beneficio: string;
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
  problemas: Problema[];
}

@Component({
  selector: 'app-segmento',
  standalone: true,
  imports: [NgFor, FooterComponent, EmailCtaComponent, RouterLink],
  templateUrl: './segmento.component.html',
  styleUrls: ['./segmento.component.scss']
})
export class SegmentoComponent implements OnInit {

  segmentos: Segmento[] = [
    {
      slug: 'varejo',
      label: 'Varejo em Geral',
      cor: '#0099e5',
      corDark: '#0077b3',
      icon: 'fas fa-store',
      apresentacao: {
        titulo: 'Sistema de gestão para varejo: tudo o que você precisa para vender mais e melhor',
        p1: 'O Sistema A7 é um ERP completo para o varejo, desenvolvido para integrar todas as áreas do seu negócio e otimizar cada etapa da operação.',
        p2: 'Com o A7, você tem controle total — do recebimento de mercadorias ao demonstrativo de resultados, passando pela frente de caixa, estoque e financeiro.',
        p3: 'Tudo isso com mais agilidade, controle e rentabilidade, ajudando você a tomar decisões estratégicas e impulsionar os resultados do seu negócio.',
      },
      problemas: [
        { icon: 'fas fa-cash-register', titulo: 'Lentidão no atendimento e filas no caixa', desc: 'Problemas de lentidão no PDV impactam diretamente a experiência do cliente e aumentam o tempo de espera. Com o Sistema A7, sua frente de caixa é rápida, estável e integrada ao estoque em tempo real.', beneficio: 'atendimento mais ágil, menos filas e maior satisfação do cliente.' },
        { icon: 'fas fa-boxes', titulo: 'Controle de estoque ineficiente', desc: 'Contagens manuais e processos demorados geram erros, perdas e rupturas. O A7 automatiza o gerenciamento de estoque com entrada via XML e alertas de mínimo e máximo.', beneficio: 'redução de perdas, mais produtividade e estoque sempre atualizado.' },
        { icon: 'fas fa-file-invoice-dollar', titulo: 'Dificuldade com obrigações fiscais', desc: 'Emitir NF-e, NFC-e e manter a conformidade fiscal pode ser complexo. O módulo fiscal do A7 automatiza a transmissão para a SEFAZ e calcula os impostos corretamente.', beneficio: 'conformidade fiscal, menos erros e mais segurança nas operações.' },
        { icon: 'fas fa-chart-line', titulo: 'Falta de indicadores para decisões estratégicas', desc: 'Planilhas manuais dificultam o acompanhamento financeiro. Com o A7, você acessa DRE, fluxo de caixa e relatórios gerenciais em tempo real.', beneficio: 'visão completa do negócio e decisões baseadas em dados reais.' },
      ]
    },
    {
      slug: 'materiais-construcao',
      label: 'Materiais de Construção',
      cor: '#00b37e',
      corDark: '#008f63',
      icon: 'fas fa-hard-hat',
      apresentacao: {
        titulo: 'Sistema de gestão para materiais de construção: controle total da sua operação',
        p1: 'O Sistema A7 é o ERP ideal para lojas de materiais de construção, integrando vendas, estoque, fiscal e financeiro em um único lugar.',
        p2: 'Com o A7, você gerencia pedidos por encomenda, controla múltiplos depósitos e acompanha a entrega de mercadorias com total eficiência.',
        p3: 'Mais agilidade no atendimento, controle preciso do estoque e gestão financeira integrada para impulsionar os resultados da sua loja.',
      },
      problemas: [
        { icon: 'fas fa-truck-loading', titulo: 'Gestão de entregas desorganizada', desc: 'Planilhas e controles manuais de entrega dificultam a operação logística. Com o A7, você registra pedidos, agenda entregas e acompanha o status em tempo real.', beneficio: 'entregas mais rápidas, menor custo logístico e menos retrabalho.' },
        { icon: 'fas fa-boxes', titulo: 'Controle de estoque em múltiplos depósitos', desc: 'Gerenciar estoques em diferentes locais é complexo sem um sistema integrado. O A7 permite controlar múltiplos depósitos com transferências e inventário automatizado.', beneficio: 'estoque sempre atualizado, menos perdas e mais eficiência operacional.' },
        { icon: 'fas fa-file-contract', titulo: 'Pedidos por encomenda e orçamentos manuais', desc: 'Orçamentos feitos manualmente geram erros e retrabalho. O A7 digitaliza o processo de orçamento e converte automaticamente em pedido de venda.', beneficio: 'mais produtividade, menos erros e agilidade no fechamento de vendas.' },
        { icon: 'fas fa-calculator', titulo: 'Dificuldade no cálculo de margens e tributação', desc: 'O cadastro de produtos e regras fiscais pode ser complexo. O módulo fiscal do A7 automatiza os cálculos tributários garantindo conformidade e segurança.', beneficio: 'menos erros, mais produtividade e confiança no recolhimento de impostos.' },
      ]
    },
    {
      slug: 'importadoras',
      label: 'Importadoras',
      cor: '#7c3aed',
      corDark: '#5b21b6',
      icon: 'fas fa-boxes-stacked',
      apresentacao: {
        titulo: 'Sistema de gestão para importadoras: controle de ponta a ponta da sua operação',
        p1: 'O Sistema A7 é o ERP completo para importadoras, integrando controle de estoque, gestão fiscal, financeiro e frente de vendas em um único sistema.',
        p2: 'Com o A7, você gerencia produtos importados com estrutura mercadológica completa, controla lotes, validades e movimentações com precisão.',
        p3: 'Mais agilidade na operação, conformidade fiscal e visibilidade total do seu negócio para tomar decisões com segurança.',
      },
      problemas: [
        { icon: 'fas fa-box-open', titulo: 'Controle ineficiente de produtos importados', desc: 'Gerenciar produtos com diferentes origens, lotes e validades é complexo. O A7 oferece cadastro completo com estrutura mercadológica e rastreabilidade total.', beneficio: 'controle preciso, menos perdas e rastreabilidade de ponta a ponta.' },
        { icon: 'fas fa-file-invoice-dollar', titulo: 'Complexidade fiscal nas operações de importação', desc: 'A tributação de produtos importados exige atenção especial. O módulo fiscal do A7 automatiza os cálculos e garante conformidade com a legislação vigente.', beneficio: 'menos erros fiscais, mais segurança e conformidade nas operações.' },
        { icon: 'fas fa-chart-bar', titulo: 'Falta de visibilidade sobre margens e resultados', desc: 'Sem relatórios integrados, é difícil acompanhar a rentabilidade de cada produto. O A7 oferece DRE, análise de margens e relatórios gerenciais em tempo real.', beneficio: 'visão clara da rentabilidade e decisões baseadas em dados confiáveis.' },
        { icon: 'fas fa-handshake', titulo: 'Gestão de fornecedores e compras manual', desc: 'Controlar pedidos de compra e relacionamento com fornecedores sem um sistema gera retrabalho. O A7 automatiza o processo de compras com cotação e pedidos integrados ao estoque.', beneficio: 'estoque equilibrado, melhores negociações e menos rupturas.' },
      ]
    },
    {
      slug: 'food-service',
      label: 'Food Service',
      cor: '#f97316',
      corDark: '#c45d0a',
      icon: 'fas fa-utensils',
      apresentacao: {
        titulo: 'Sistema de gestão para food service: agilidade e controle do pedido à entrega',
        p1: 'O Sistema A7 é o ERP ideal para restaurantes, lanchonetes, padarias e estabelecimentos de food service, integrando atendimento, estoque, fiscal e financeiro.',
        p2: 'Com o A7, você gerencia pedidos no salão e delivery, controla o estoque de insumos e emite documentos fiscais de forma rápida e integrada.',
        p3: 'Mais agilidade no atendimento, controle de custos e visibilidade total da operação para aumentar a lucratividade do seu negócio.',
      },
      problemas: [
        { icon: 'fas fa-receipt', titulo: 'Lentidão no atendimento e erros nos pedidos', desc: 'Pedidos anotados manualmente geram erros e atrasos. Com o A7, os pedidos são lançados diretamente no sistema com integração à cozinha e ao caixa.', beneficio: 'atendimento mais rápido, menos erros e maior satisfação do cliente.' },
        { icon: 'fas fa-balance-scale', titulo: 'Controle de insumos e desperdício', desc: 'Sem controle de estoque de insumos, o desperdício corrói a margem. O A7 registra entradas, baixas automáticas por venda e alertas de estoque mínimo.', beneficio: 'menos desperdício, mais controle de custos e margem protegida.' },
        { icon: 'fas fa-file-invoice', titulo: 'Dificuldade na emissão de documentos fiscais', desc: 'Emitir NFC-e e cupom fiscal no food service exige agilidade. O módulo fiscal do A7 garante emissão rápida e conformidade com a legislação.', beneficio: 'conformidade fiscal, agilidade no fechamento e menos retrabalho.' },
        { icon: 'fas fa-chart-pie', titulo: 'Falta de controle financeiro e de custos', desc: 'Sem visibilidade dos custos por produto e turno, é difícil precificar corretamente. O A7 oferece relatórios de CMV, margem de contribuição e DRE integrados.', beneficio: 'precificação correta, margens saudáveis e decisões baseadas em dados.' },
      ]
    },
    {
      slug: 'pequenas-industrias',
      label: 'Pequenas Indústrias',
      cor: '#e11d48',
      corDark: '#b0122f',
      icon: 'fas fa-industry',
      apresentacao: {
        titulo: 'Sistema de gestão para pequenas indústrias: do chão de fábrica ao financeiro',
        p1: 'O Sistema A7 é o ERP completo para pequenas indústrias, integrando produção, estoque de insumos, vendas, fiscal e financeiro em um único sistema.',
        p2: 'Com o A7, você controla ordens de produção, gerencia matéria-prima e produto acabado, e acompanha custos de produção com precisão.',
        p3: 'Mais eficiência operacional, controle de custos e visibilidade total para tomar decisões estratégicas e crescer com segurança.',
      },
      problemas: [
        { icon: 'fas fa-industry', titulo: 'Falta de controle sobre o processo de produção', desc: 'Sem um sistema integrado, acompanhar ordens de produção e consumo de insumos é manual e sujeito a erros. O A7 registra e controla todo o fluxo produtivo.', beneficio: 'mais eficiência, menos perdas de insumos e produção rastreável.' },
        { icon: 'fas fa-boxes', titulo: 'Gestão de estoque de insumos e produto acabado', desc: 'Controlar matéria-prima, produtos em processo e produto acabado sem um sistema gera rupturas e excesso. O A7 integra o estoque à produção em tempo real.', beneficio: 'estoque equilibrado, menos rupturas e mais previsibilidade na produção.' },
        { icon: 'fas fa-dollar-sign', titulo: 'Dificuldade no cálculo de custo de produção', desc: 'Sem visibilidade dos custos de insumos e mão de obra, precificar corretamente é impossível. O A7 apura o custo de produção por ordem e produto.', beneficio: 'precificação correta, margens protegidas e competitividade no mercado.' },
        { icon: 'fas fa-file-invoice-dollar', titulo: 'Complexidade fiscal na emissão de NF-e', desc: 'Indústrias têm regras fiscais específicas com IPI, ICMS-ST e outros tributos. O módulo fiscal do A7 automatiza os cálculos e garante conformidade com a SEFAZ.', beneficio: 'conformidade fiscal, menos autuações e segurança nas operações.' },
      ]
    },
    {
      slug: 'supermercados',
      label: 'Supermercados',
      cor: '#DB2777',
      corDark: '#bb2167',
      icon: 'fas fa-shopping-cart',
      apresentacao: {
        titulo: 'Sistema de gestão para supermercados: eficiência e lucratividade em cada operação',
        p1: 'O Sistema A7 é o ERP completo para supermercados, desenvolvido para integrar todas as áreas do seu negócio e otimizar cada etapa da operação.',
        p2: 'Com o A7, você tem controle total — do recebimento de mercadorias ao demonstrativo de resultados, passando pela frente de caixa, retaguarda e fiscal.',
        p3: 'Tudo isso com mais agilidade, controle e rentabilidade, ajudando você a tomar decisões estratégicas e impulsionar a lucratividade da sua loja.',
      },
      problemas: [
        { icon: 'fas fa-cash-register', titulo: 'Filas no checkout e falhas na frente de caixa', desc: 'Problemas de lentidão impactam diretamente a experiência do cliente. O A7 oferece PDV rápido, estável e com múltiplas formas de pagamento integradas.', beneficio: 'atendimento mais rápido, menor custo e melhor desempenho no caixa.' },
        { icon: 'fas fa-boxes', titulo: 'Controle de estoque e inventário ineficiente', desc: 'Contagens manuais geram erros, perdas e rupturas. O A7 automatiza o gerenciamento com entrada via XML e alertas automáticos de estoque mínimo e máximo.', beneficio: 'redução de perdas, mais produtividade e conferência automatizada.' },
        { icon: 'fas fa-calculator', titulo: 'Cálculo de margens e tributação complexa', desc: 'O cadastro de regras fiscais pode ser um pesadelo. O módulo fiscal do A7 automatiza os cálculos tributários garantindo conformidade e segurança fiscal.', beneficio: 'menos erros, mais produtividade e confiança no recolhimento de impostos.' },
        { icon: 'fas fa-chart-line', titulo: 'Falta de indicadores confiáveis para decisões', desc: 'Planilhas manuais dificultam o acompanhamento financeiro e operacional. Com o A7, você tem DRE, dashboards e relatórios automatizados com dados centralizados.', beneficio: 'visão completa do negócio e decisões baseadas em dados reais.' },
      ]
    },
  ];

  segmento!: Segmento;
  outros: Segmento[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') ?? '';
      this.segmento = this.segmentos.find(s => s.slug === slug) ?? this.segmentos[0];
      this.outros = this.segmentos.filter(s => s.slug !== this.segmento.slug);
      // Scroll ao topo ao trocar segmento
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Re-run reveal
      setTimeout(() => {
        const o = new IntersectionObserver(e => {
          e.forEach(x => { if (x.isIntersecting) x.target.classList.add('visible'); });
        }, { threshold: .1 });
        document.querySelectorAll('.reveal').forEach(el => {
          el.classList.remove('visible');
          o.observe(el);
        });
      }, 100);
    });
  }
}