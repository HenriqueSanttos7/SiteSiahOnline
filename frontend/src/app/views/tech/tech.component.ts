import { FooterComponent } from '../../shared/footer/footer.component';
import { Component, AfterViewInit} from '@angular/core';
import { NgFor } from '@angular/common';
import { EmailCtaComponent } from '../../shared/email-cta/email-cta.component';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';


@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [NgFor, FooterComponent, EmailCtaComponent],
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements AfterViewInit {

  servicos = [
    { icon: 'fas fa-desktop', label: 'Manutenção de Computadores', desc: 'Sem precisar formatar!' },
    { icon: 'fas fa-server', label: 'Servidores e Redes', desc: 'Configuração e monitoramento' },
    { icon: 'fas fa-print', label: 'Impressoras e Periféricos', desc: 'Manutenção completa' },
    { icon: 'fas fa-database', label: 'Backup em Nuvem', desc: 'Recuperação rápida de dados' },
    { icon: 'fas fa-shield-alt', label: 'Remoção de Vírus', desc: 'Sem formatar o computador' },
    { icon: 'fas fa-headset', label: 'Suporte Remoto', desc: 'Atendimento rápido online' },
  ];

  ngAfterViewInit(): void {
    new Swiper('.servicos-swiper', {
      modules: [Pagination],
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.servicos-swiper .swiper-pagination',
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