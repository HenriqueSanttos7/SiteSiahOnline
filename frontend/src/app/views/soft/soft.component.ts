import { FooterComponent } from '../../shared/footer/footer.component';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { EmailCtaComponent } from '../../shared/email-cta/email-cta.component';

@Component({
  selector: 'app-soft',
  standalone: true,
  imports: [ NgFor, FooterComponent, EmailCtaComponent ],
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.scss']
})
export class SoftComponent implements AfterViewInit {

  @ViewChild('appsTrack') appsTrack!: ElementRef;

  readonly perPage = 3;
  activePage = 0;

   apps = [
    { img: 'assets/images/soft/pre_vendas.webp', title: 'Sistema A7', sub: 'Gestão de Vendas' },
    { img: 'assets/images/soft/app-web.jpg', title: 'A7 Web', sub: 'Relatórios de qualquer lugar' },
    { img: 'assets/images/soft/app-prevenda.jpg', title: 'Pré-Venda', sub: 'Vendas Internas' },
    { img: 'assets/images/soft/app-pdv.jpg', title: 'PDV Touch', sub: 'Ponto de Venda' },
    { img: 'assets/images/soft/app-expedicao.jpg', title: 'Expedição e Estoque', sub: 'Lançamento' },
    { img: 'assets/images/soft/app-navegacao.jpg', title: 'Navegação', sub: 'Lançamento em breve' },
    { img: 'assets/images/soft/app-forca.jpg', title: 'Força de Venda', sub: 'Vendas Externas' },
    { img: 'assets/images/soft/app-ecommerce.jpg', title: 'E-commerce', sub: 'Integrado ao A7' },
  ];

  // Número de páginas baseado em 3 cards por vez
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
    // Mostra a primeira página ao iniciar
    this.goToPage(0);

    const o = new IntersectionObserver(e => {
      e.forEach(x => { if (x.isIntersecting) x.target.classList.add('visible'); });
    }, { threshold: .1 });
    document.querySelectorAll('.reveal').forEach(el => o.observe(el));
  }
}