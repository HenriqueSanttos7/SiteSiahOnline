import { FooterComponent } from '../../shared/footer/footer.component';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { EmailCtaComponent } from '../../shared/email-cta/email-cta.component';

@Component({
  selector: 'app-soft',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    FooterComponent,
    EmailCtaComponent
  ],
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.scss']
})
export class SoftComponent implements AfterViewInit {

  @ViewChild('appsTrack') appsTrack!: ElementRef;

  seg12 = [
    { icon: 'fas fa-store', label: 'Varejo em Geral' },
    { icon: 'fas fa-warehouse', label: 'Atacarejo' },
    { icon: 'fas fa-tshirt', label: 'Confecções e Calçados' },
    { icon: 'fas fa-truck', label: 'Distribuidoras' },
    { icon: 'fas fa-pills', label: 'Drogarias' },
    { icon: 'fas fa-anchor', label: 'Marinas' },
    { icon: 'fas fa-hard-hat', label: 'Materiais de Construção' },
    { icon: 'fas fa-bread-slice', label: 'Padarias' },
    { icon: 'fas fa-industry', label: 'Pequenas Indústrias' },
    { icon: 'fas fa-gas-pump', label: 'Postos e Conveniências' },
    { icon: 'fas fa-utensils', label: 'Restaurantes' },
    { icon: 'fas fa-shopping-cart', label: 'Supermercados' },
  ];

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

  activeApp = 0;

  get cardWidth(): number {
    const viewport = document.querySelector('.apps-viewport') as HTMLElement;
    if (!viewport) return 0;
    const gap = 32;
    return (viewport.offsetWidth - gap * 2) / 3;
  }

  goToApp(index: number): void {
    this.activeApp = index;
    const track = this.appsTrack.nativeElement as HTMLElement;
    const gap = 32;
    const cw = this.cardWidth;
    track.style.transform = `translateX(-${index * (cw + gap)}px)`;
  }

  ngAfterViewInit(): void {
    // Aplica largura real nos cards após render
    const cw = this.cardWidth;
    if (cw > 0) {
      const cards = this.appsTrack.nativeElement.querySelectorAll('.app-card') as NodeListOf<HTMLElement>;
      cards.forEach(c => { c.style.flex = `0 0 ${cw}px`; c.style.width = `${cw}px`; });
    }

    const o = new IntersectionObserver(e => {
      e.forEach(x => { if (x.isIntersecting) x.target.classList.add('visible'); });
    }, { threshold: .1 });
    document.querySelectorAll('.reveal').forEach(el => o.observe(el));
  }
}