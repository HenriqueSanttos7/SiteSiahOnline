import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FooterComponent } from '../../shared/footer/footer.component';
import { EmailCtaComponent } from '../../shared/email-cta/email-cta.component';

export interface AppDetail {
  slug: string;
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  cor: string;
  corDark: string;
  funcionalidades: { categoria?: 'desktop' | 'mobile' | 'web'; icon: string; titulo: string; desc: string }[];
}

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [NgFor, RouterLink, FooterComponent, EmailCtaComponent],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, AfterViewInit {

  @ViewChild('appsTrack') appsTrack!: ElementRef;

  readonly perPage = 3;
  activePage = 0;

  get temCategorias(): boolean {
    return this.app?.funcionalidades.some(f => f.categoria) ?? false;
  }

  filtrarPorCategoria(categoria: 'desktop' | 'mobile' | 'web') {
    return this.app?.funcionalidades.filter(f => f.categoria === categoria) ?? [];
  }

  apps: AppDetail[] = [
    {
      slug: 'sistema-a7',
      title: 'A7 ERP',
      subtitle: 'Varejo e Atacado',
      desc: 'O ERP completo para gestão do seu negócio. O sistema A7 ERP une gerenciamento de vendas, módulo fiscal, mobile e financeiro em um só lugar. Tudo integrado, tudo em tempo real.',
      img: 'assets/images/soft/pre_vendas.webp',
      cor: '#0077cc',
      corDark: '#005fa3',
      funcionalidades: [
        { categoria: 'desktop', icon: 'fas fa-file-contract', titulo: 'ERP', desc: 'Módulo de gestão empresarial completo.' },
        { categoria: 'desktop', icon: 'fas fa-file-invoice-dollar', titulo: 'Fiscal', desc: 'Emissão e gestão de documentos fiscais.' },
        { categoria: 'desktop', icon: 'fas fa-calculator', titulo: 'Contábil', desc: 'Gestão e relatórios contábeis da empresa.' },
        { categoria: 'desktop', icon: 'fas fa-cash-register', titulo: 'PDV Offline', desc: 'Ponto de venda com funcionamento sem internet.' },
        { categoria: 'desktop', icon: 'fas fa-hand-pointer', titulo: 'PDV Touch', desc: 'Ponto de venda otimizado para telas de toque.' },
        { categoria: 'mobile', icon: 'fas fa-mobile-alt', titulo: 'A7 Pré Venda', desc: 'Pré-venda ágil para dispositivos móveis (Android).' },
        { categoria: 'mobile', icon: 'fas fa-shopping-cart', titulo: 'A7 Força de Vendas', desc: 'Ferramenta de vendas externas no A7. (Android)' },
        { categoria: 'mobile', icon: 'fas fa-boxes', titulo: 'A7 Expedição e Estoque', desc: 'Gestão de estoque e expedição de vendas. (Android)' },
        { categoria: 'web', icon: 'fas fa-chart-line', titulo: 'A7 Dashboard', desc: 'Gráficos e indicadores de desempenho e vendas em tempo real. <i class="fab fa-android" style="margin-left: 5px; color: #a4c639;"></i> <i class="fab fa-apple" style="margin-left: 2px; color: #555555;"></i>' },
        { categoria: 'web', icon: 'fas fa-store-alt', titulo: 'E-commerce', desc: 'Integração completa com vendas em loja virtual, via web.' },
        { categoria: 'web', icon: 'fas fa-globe', titulo: 'A7 Web', desc: 'Acesso web para funcionalidades do sistema A7 ERP.' }
      ]
    },
    {
      slug: 'a7-web',
      title: 'A7 Web',
      subtitle: 'Acesse seus Relatórios',
      desc: 'A7 Web é a versão online do A7, permite acesso rápido aos principais relatórios gerenciais. Ideal para acompanhar as informações de onde estiver, direto do navegador.',
      img: 'assets/images/soft/app-web.jpg',
      cor: '#0077cc',
      corDark: '#005fa3',
      funcionalidades: [
        { icon: 'fas fa-chart-bar', titulo: 'Acesso aos Relatórios', desc: 'Acesse os principais relatórios do Sistema A7 de qualquer lugar, direto do navegador.' },
        { icon: 'fas fa-cash-register', titulo: 'Caixa de Recebimento', desc: 'Consulte detalhes sobre os caixas de recebimento e movimentações financeiras.' },
        { icon: 'fas fa-boxes', titulo: 'Acompanhamento do Estoque', desc: 'Monitore o estoque para melhores tomadas de decisão sem precisar estar na loja.' },
        { icon: 'fas fa-mobile-alt', titulo: 'Responsivo', desc: 'Acesse pelo celular, tablet ou computador com total compatibilidade em qualquer dispositivo.' },
        { icon: 'fas fa-lock', titulo: 'Acesso Seguro', desc: 'Login com usuário e senha vinculado ao seu cadastro no Sistema A7.' },
        { icon: 'fas fa-sync', titulo: 'Dados em Tempo Real', desc: 'Informações sempre atualizadas e sincronizadas com o Sistema A7 da sua empresa.' },
      ]
    },
    {
      slug: 'pre-venda',
      title: 'Pré-Venda',
      subtitle: 'Vendas Internas',
      desc: 'O aplicativo é integrado ao Sistema A7 e sua função é realizar vendas internas, para uma interação mais próxima do cliente.',
      img: 'assets/images/soft/app-prevenda.jpg',
      cor: '#00a86b',
      corDark: '#007a4d',
      funcionalidades: [
        { icon: 'fas fa-barcode', titulo: 'Consulta por Código de Barras', desc: 'Consulte informações do item mais rápido usando o leitor de código de barras do celular.' },
        { icon: 'fas fa-user-plus', titulo: 'Cadastro de Clientes', desc: 'Cadastre o cliente no ato da venda com integração direta ao Sistema A7.' },
        { icon: 'fas fa-shield-alt', titulo: 'Autorização de Vendas', desc: 'Autorização de descontos para liberar venda com controle de alçada.' },
        { icon: 'fas fa-shopping-cart', titulo: 'Pré-Vendas', desc: 'Crie e consulte pré-vendas de forma rápida e integrada ao estoque.' },
        { icon: 'fas fa-dollar-sign', titulo: 'Contas a Receber', desc: 'Consulte o pagamento dos seus clientes e títulos em aberto.' },
        { icon: 'fas fa-sync', titulo: 'Sincronização Automática', desc: 'Dados atualizados automaticamente com o Sistema A7 sem necessidade de ação manual.' },
      ]
    },
    {
      slug: 'pdv-touch',
      title: 'PDV Touch',
      subtitle: 'Ponto de Venda',
      desc: 'Frente de caixa integrado ao Sistema A7, design moderno, adaptado para monitores touch screen.',
      img: 'assets/images/soft/app-pdv.jpg',
      cor: '#2d8c2d',
      corDark: '#1f6b1f',
      funcionalidades: [
        { icon: 'fas fa-file-invoice', titulo: 'Emissão de NFC-e', desc: 'Cupom Fiscal para consumidor final emitido diretamente pelo PDV Touch.' },
        { icon: 'fas fa-bolt', titulo: 'Fácil de Usar', desc: 'Rapidez e praticidade ao atender seu cliente com interface touch intuitiva.' },
        { icon: 'fas fa-palette', titulo: 'Personalizável', desc: 'Personalize as cores para melhor representar a identidade visual da sua loja.' },
        { icon: 'fas fa-credit-card', titulo: 'Múltiplas Formas de Pagamento', desc: 'PIX, cartão, dinheiro, vale e carteiras digitais integrados ao caixa.' },
        { icon: 'fas fa-sync', titulo: 'Integrado ao A7', desc: 'Totalmente sincronizado com o Sistema A7, baixando o estoque em tempo real.' },
        { icon: 'fas fa-desktop', titulo: 'Touch Screen', desc: 'Design adaptado para monitores touch screen proporcionando agilidade no atendimento.' },
      ]
    },
    {
      slug: 'expedicao-estoque',
      title: 'Expedição e Estoque',
      subtitle: 'Lançamento',
      desc: 'O aplicativo é integrado ao Sistema A7 e inclui novas rotinas para agilizar os processos nos setores de expedição e estoque.',
      img: 'assets/images/soft/app-expedicao.jpg',
      cor: '#0077cc',
      corDark: '#005fa3',
      funcionalidades: [
        { icon: 'fas fa-camera', titulo: 'Comprovante de Entregas', desc: 'Imagens, localização e assinaturas como comprovante de entrega integrado ao sistema.' },
        { icon: 'fas fa-boxes', titulo: 'Controle de Estoque', desc: 'Consultas, inventários, validade e relatórios de estoque em tempo real.' },
        { icon: 'fas fa-barcode', titulo: 'Endereçamento e Separação', desc: 'Endereço de estoque e separação via código de barras para mais agilidade.' },
        { icon: 'fas fa-truck', titulo: 'Expedição', desc: 'Coleta, devolução, entrega imediata e transferência entre empresas.' },
        { icon: 'fas fa-warehouse', titulo: 'Kardex', desc: 'Armazenagem, separação, inventário e separação checkout integrados.' },
        { icon: 'fas fa-sync', titulo: 'Integrado ao A7', desc: 'Todas as movimentações refletem automaticamente no Sistema A7.' },
      ]
    },
    {
      slug: 'navegacao',
      title: 'Navegação',
      subtitle: 'Lançamento em breve',
      desc: 'O aplicativo é desenvolvido para atender as demandas em uma viagem de embarcação, desde passagem, carga ou encomenda e também bares e restaurantes.',
      img: 'assets/images/soft/app-navegacao.jpg',
      cor: '#c0392b',
      corDark: '#96281b',
      funcionalidades: [
        { icon: 'fas fa-ticket-alt', titulo: 'Emissão de Passagens', desc: 'Emissão e impressão imediata de passagens para viagens de embarcação.' },
        { icon: 'fas fa-boxes', titulo: 'Controle de Encomendas e Cargas', desc: 'Dados do emitente e destinatário, comprovação de entrega integrada.' },
        { icon: 'fas fa-utensils', titulo: 'Vendas de Lanches', desc: 'Caixa e comanda em um único lugar para bares e restaurantes a bordo.' },
        { icon: 'fas fa-ship', titulo: 'Gestão de Embarcações', desc: 'Controle completo de viagens, rotas e disponibilidade de cada embarcação.' },
        { icon: 'fas fa-mobile-alt', titulo: 'App Mobile', desc: 'Interface totalmente mobile, adaptada para uso em embarcações.' },
        { icon: 'fas fa-sync', titulo: 'Integrado ao A7', desc: 'Sincronização com o Sistema A7 para gestão centralizada das operações.' },
      ]
    },
    {
      slug: 'forca-de-venda',
      title: 'Força de Vendas',
      subtitle: 'Vendas Externas',
      desc: 'O aplicativo é integrado ao Sistema A7 e sua função é realizar vendas externas e cobrança de títulos, com atualização de dados automática.',
      img: 'assets/images/soft/app-forca.jpg',
      cor: '#e6a800',
      corDark: '#b38200',
      funcionalidades: [
        { icon: 'fas fa-users', titulo: 'Carteira de Clientes', desc: 'Tenha acesso apenas a seus clientes com gestão da carteira de atendimento.' },
        { icon: 'fas fa-dollar-sign', titulo: 'Recebimento de Títulos', desc: 'Receba o valor da parcela do cliente diretamente pelo aplicativo.' },
        { icon: 'fas fa-chart-line', titulo: 'Relatórios de Desempenho', desc: 'Vendas x Cliente, vendas diárias e outros relatórios de performance.' },
        { icon: 'fas fa-shopping-cart', titulo: 'Pré-Vendas Externas', desc: 'Crie pré-vendas para clientes externos com integração ao estoque do A7.' },
        { icon: 'fas fa-sync', titulo: 'Atualização Automática', desc: 'Dados atualizados automaticamente com o Sistema A7 em tempo real.' },
        { icon: 'fas fa-map-marker-alt', titulo: 'Gestão de Rotas', desc: 'Organize a rota de visitas e otimize o atendimento externo.' },
      ]
    },
    {
      slug: 'e-commerce',
      title: 'E-commerce',
      subtitle: 'Integrado ao A7',
      desc: 'O e-commerce é integrado ao Sistema A7, garantindo uma gestão eficiente, centralizada e automatizada de todas as operações online — totalmente responsivo, adaptado para qualquer dispositivo.',
      img: 'assets/images/soft/app-ecommerce.jpg',
      cor: '#c0392b',
      corDark: '#96281b',
      funcionalidades: [
        { icon: 'fas fa-shopping-bag', titulo: 'Pedidos Online Sincronizados', desc: 'Visualização de pedidos, status de pagamento, envio e entrega integrados ao A7.' },
        { icon: 'fas fa-sync', titulo: 'Catálogo de Produtos Atualizado', desc: 'Dados dos produtos atualizados de acordo com o Sistema A7 — descrição, preço e disponibilidade.' },
        { icon: 'fas fa-boxes', titulo: 'Integração com Estoque', desc: 'Vendas online impactam diretamente no estoque do Sistema A7 em tempo real.' },
        { icon: 'fas fa-mobile-alt', titulo: 'Totalmente Responsivo', desc: 'Adaptado para qualquer dispositivo — celular, tablet ou computador.' },
        { icon: 'fas fa-credit-card', titulo: 'Múltiplas Formas de Pagamento', desc: 'PIX, cartão de crédito, boleto e outros meios de pagamento online.' },
        { icon: 'fas fa-store', titulo: 'Gestão Centralizada', desc: 'Gerencie sua loja física e virtual em um único sistema integrado.' },
      ]
    },
  ];

  app!: AppDetail;

  get dots(): number[] {
    return Array.from({ length: Math.ceil(this.apps.length / this.perPage) });
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') ?? '';
      this.app = this.apps.find(a => a.slug === slug) ?? this.apps[0];
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => this.initReveal(), 250);
    });
  }

  ngAfterViewInit(): void {
    this.goToPage(0);
    this.initReveal();
  }

  initReveal(): void {
    const o = new IntersectionObserver(e => {
      e.forEach(x => { if (x.isIntersecting) x.target.classList.add('visible'); });
    }, { threshold: .1 });
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.remove('visible');
      o.observe(el);
    });
  }

  goToPage(page: number): void {
    this.activePage = page;
    if (!this.appsTrack) return;
    const track = this.appsTrack.nativeElement as HTMLElement;
    const cards = track.querySelectorAll('.app-nav-card');
    const start = page * this.perPage;
    const end = start + this.perPage;
    cards.forEach((card, i) => {
      card.classList.toggle('visible-card', i >= start && i < end);
    });
  }
}