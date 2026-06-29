declare const Swiper: any;
import { FooterComponent } from '../../shared/footer/footer.component';
import { Component, AfterViewInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { EmailCtaComponent } from '../../shared/email-cta/email-cta.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-soft',
  standalone: true,
  imports: [NgFor, FooterComponent, EmailCtaComponent, RouterLink],
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.scss']
})
export class SoftComponent implements AfterViewInit {

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

  ngAfterViewInit(): void {
    new Swiper('.apps-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.apps-swiper .swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        576: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      }
    });

    const o = new IntersectionObserver(e => {
      e.forEach(x => { if (x.isIntersecting) x.target.classList.add('visible'); });
    }, { threshold: .1 });
    document.querySelectorAll('.reveal').forEach(el => o.observe(el));
  }
}