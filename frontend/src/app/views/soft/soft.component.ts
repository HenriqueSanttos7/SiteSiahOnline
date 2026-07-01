import { FooterComponent } from '../../shared/footer/footer.component';
import { Component, AfterViewInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { EmailCtaComponent } from '../../shared/email-cta/email-cta.component';
import { RouterLink } from '@angular/router';

interface AppCard {
  img: string;
  title: string;
  sub: string;
  slug: string;
  categoria: 'desktop' | 'mobile' | 'web';
}

@Component({
  selector: 'app-soft',
  standalone: true,
  imports: [NgFor, FooterComponent, EmailCtaComponent, RouterLink],
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.scss']
})
export class SoftComponent implements AfterViewInit {

  apps: AppCard[] = [
    // Desktop
    { img: 'assets/images/soft/capa_a7erp.png',    title: 'A7 ERP',              sub: 'Varejo e Atacado',          slug: 'sistema-a7',        categoria: 'desktop' },
    { img: 'assets/images/soft/capa_a7fiscal.png',         title: 'A7 Fiscal',           sub: 'Emissão de Notas Fiscais',  slug: 'a7-fiscal',         categoria: 'desktop' },
    { img: 'assets/images/soft/capa_a7contabil.png',         title: 'A7 Contábil',           sub: 'Gestão Contábil',  slug: 'a7-contabil',         categoria: 'desktop' },
    { img: 'assets/images/soft/capa_pdvtouch.png',         title: 'PDV Touch',           sub: 'Ponto de Venda',            slug: 'pdv-touch',         categoria: 'desktop' },
    { img: 'assets/images/soft/capa_pdvoff.png',         title: 'PDV Off-line',        sub: 'Ponto de Venda',            slug: 'pdv-offline',       categoria: 'desktop' },
    

    // Mobile
    { img: 'assets/images/soft/capa_dashboard.png',   title: 'Dashboard',          sub: 'Indicadores de Vendas',     slug: 'dashboard',         categoria: 'mobile'  },
    { img: 'assets/images/soft/capa_prevenda.png',    title: 'Pré-Venda',           sub: 'Vendas Internas',           slug: 'pre-venda',         categoria: 'mobile'  },
    { img: 'assets/images/soft/capa_forcadevendas.png',       title: 'Força de Vendas',     sub: 'Vendas Externas',           slug: 'forca-de-venda',    categoria: 'mobile'  },
    { img: 'assets/images/soft/capa_expedicao.png',   title: 'Expedição e Estoque', sub: 'Logística e Armazenagem',   slug: 'expedicao-estoque', categoria: 'mobile'  },

    // Web
    { img: 'assets/images/soft/capa_a7web.png',         title: 'Web',              sub: 'Relatórios de qualquer lugar', slug: 'a7-web',         categoria: 'web'     },
    { img: 'assets/images/soft/capa_ecommerce.png',       title: 'E-commerce',          sub: 'Integrado ao A7 ERP',       slug: 'e-commerce',        categoria: 'web'     },
  ];

  get appsDesktop(): AppCard[] { return this.apps.filter(a => a.categoria === 'desktop'); }
  get appsMobile():  AppCard[] { return this.apps.filter(a => a.categoria === 'mobile');  }
  get appsWeb():     AppCard[] { return this.apps.filter(a => a.categoria === 'web');     }

  ngAfterViewInit(): void {
    const o = new IntersectionObserver(e => {
      e.forEach(x => { if (x.isIntersecting) x.target.classList.add('visible'); });
    }, { threshold: .1 });
    document.querySelectorAll('.reveal').forEach(el => o.observe(el));
  }
}
