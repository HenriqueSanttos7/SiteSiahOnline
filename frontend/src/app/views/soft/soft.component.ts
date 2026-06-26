import { FooterComponent } from '../../shared/footer/footer.component';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { EmailCtaComponent } from '../../shared/email-cta/email-cta.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-soft',
  standalone: true,
  imports: [ NgFor, FooterComponent, EmailCtaComponent, RouterLink ],
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.scss']
})
export class SoftComponent implements AfterViewInit {

  @ViewChild('appsTrack') appsTrack!: ElementRef;

  activePage = 0;

  get perPage(): number {
    return window.innerWidth <= 768 ? 1 : 3;
  }

  apps = [
    { img: 'assets/images/soft/pre_vendas.webp', title: 'A7 ERP', sub: 'Varejo e Atacado', slug: 'sistema-a7' },
    { img: 'assets/images/soft/app-web.jpg', title: 'A7 Web', sub: 'Relatórios de qualquer lugar', slug: 'a7-web' },
    { img: 'assets/images/soft/app-prevenda.jpg', title: 'Pré-Venda', sub: 'Vendas Internas', slug: 'pre-venda' },
    { img: 'assets/images/soft/app-pdv.jpg', title: 'PDV Touch', sub: 'Ponto de Venda', slug: 'pdv-touch' },
    { img: 'assets/images/soft/app-expedicao.jpg', title: 'Expedição e Estoque', sub: 'Lançamento', slug: 'expedicao-estoque' },
    { img: 'assets/images/soft/app-navegacao.jpg', title: 'Navegação', sub: 'Lançamento em breve', slug: 'navegacao' },
    { img: 'assets/images/soft/app-forca.jpg', title: 'Força de Vendas', sub: 'Vendas Externas', slug: 'forca-de-venda' },
    { img: 'assets/images/soft/app-ecommerce.jpg', title: 'E-commerce', sub: 'Integrado ao A7', slug: 'e-commerce' },
  ];

  get dots(): number[] {
    return Array.from({ length: Math.ceil(this.apps.length / this.perPage) });
  }

  goToPage(page: number): void {
    this.activePage = page;
    const track = this.appsTrack.nativeElement as HTMLElement;
    const cards = track.querySelectorAll('.app-card');
    const start = page * this.perPage;
    const end = start + this.perPage;
    cards.forEach((card, i) => {
      card.classList.toggle('visible-card', i >= start && i < end);
    });
  }

  ngAfterViewInit(): void {
    this.goToPage(0);

    const o = new IntersectionObserver(e => {
      e.forEach(x => { if (x.isIntersecting) x.target.classList.add('visible'); });
    }, { threshold: .1 });
    document.querySelectorAll('.reveal').forEach(el => o.observe(el));
  }
}