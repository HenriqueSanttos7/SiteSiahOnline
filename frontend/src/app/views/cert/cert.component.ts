import { FooterComponent } from '../../shared/footer/footer.component';
import { Component, AfterViewInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { EmailCtaComponent } from '../../shared/email-cta/email-cta.component';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';


@Component({
  selector: 'app-cert',
  standalone: true,
  imports: [NgFor, FooterComponent, EmailCtaComponent],
  templateUrl: './cert.component.html',
  styleUrls: ['./cert.component.scss']
})
export class CertComponent implements AfterViewInit {

  tipos = [
    { icon: 'fas fa-cloud', label: 'e-CPF A1', desc: 'Arquivo digital, validade 1 ano' },
    { icon: 'fas fa-usb', label: 'e-CPF A3', desc: 'Token ou cartão, até 3 anos' },
    { icon: 'fas fa-building', label: 'e-CNPJ A1', desc: 'Para emissão de NF-e, 1 ano' },
    { icon: 'fas fa-id-card', label: 'e-CNPJ A3', desc: 'Token ou cartão, até 3 anos' },
  ];

  ngAfterViewInit(): void {
    new Swiper('.tipos-swiper', {
      modules: [Pagination],
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.tipos-swiper .swiper-pagination',
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