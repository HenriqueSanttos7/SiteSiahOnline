import { FooterComponent } from '../../shared/footer/footer.component';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { NgFor } from '@angular/common';
import { EmailCtaComponent } from '../../shared/email-cta/email-cta.component';

@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [NgFor, FooterComponent, EmailCtaComponent],
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements AfterViewInit {

  @ViewChild('servicosTrack') servicosTrack!: ElementRef;

  readonly perPage = 3;
  activePage = 0;

  servicos = [
    { icon: 'fas fa-desktop',       label: 'Manutenção de Computadores', desc: 'Sem precisar formatar!' },
    { icon: 'fas fa-server',         label: 'Servidores e Redes',          desc: 'Configuração e monitoramento' },
    { icon: 'fas fa-print',          label: 'Impressoras e Periféricos',   desc: 'Manutenção completa' },
    { icon: 'fas fa-database',       label: 'Backup em Nuvem',             desc: 'Recuperação rápida de dados' },
    { icon: 'fas fa-shield-alt',     label: 'Remoção de Vírus',            desc: 'Sem formatar o computador' },
    { icon: 'fas fa-headset',        label: 'Suporte Remoto',              desc: 'Atendimento rápido online' },
  ];

  get dots(): number[] {
    return Array.from({ length: Math.ceil(this.servicos.length / this.perPage) });
  }

  goToPage(page: number): void {
    this.activePage = page;
    const track = this.servicosTrack.nativeElement as HTMLElement;
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