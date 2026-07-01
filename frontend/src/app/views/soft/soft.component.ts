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
    { img: 'assets/images/soft/pre_vendas.webp',    title: 'A7 ERP',              sub: 'Varejo e Atacado',          slug: 'sistema-a7',        categoria: 'desktop' },
    { img: 'assets/images/soft/app-pdv.jpg',         title: 'PDV Touch',           sub: 'Ponto de Venda',            slug: 'pdv-touch',         categoria: 'desktop' },

    // Mobile
    { img: 'assets/images/soft/app-prevenda.jpg',    title: 'Pré-Venda',           sub: 'Vendas Internas',           slug: 'pre-venda',         categoria: 'mobile'  },
    { img: 'assets/images/soft/app-forca.jpg',       title: 'Força de Vendas',     sub: 'Vendas Externas',           slug: 'forca-de-venda',    categoria: 'mobile'  },
    { img: 'assets/images/soft/app-expedicao.jpg',   title: 'Expedição e Estoque', sub: 'Logística e Armazenagem',   slug: 'expedicao-estoque', categoria: 'mobile'  },
    { img: 'assets/images/soft/app-navegacao.jpg',   title: 'Dashboard',           sub: 'Lançamento em breve',       slug: 'navegacao',         categoria: 'mobile'  },

    // Web
    { img: 'assets/images/soft/app-web.jpg',         title: 'Web',              sub: 'Relatórios de qualquer lugar', slug: 'a7-web',         categoria: 'web'     },
    { img: 'assets/images/soft/ecommerce.png',       title: 'E-commerce',          sub: 'Integrado ao A7 ERP',       slug: 'e-commerce',        categoria: 'web'     },
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
