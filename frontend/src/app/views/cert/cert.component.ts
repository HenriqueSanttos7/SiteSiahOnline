import { FooterComponent } from '../../shared/footer/footer.component';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { NgFor } from '@angular/common';
import { EmailCtaComponent } from '../../shared/email-cta/email-cta.component';

@Component({
  selector: 'app-cert',
  standalone: true,
  imports: [NgFor, FooterComponent, EmailCtaComponent],
  templateUrl: './cert.component.html',
  styleUrls: ['./cert.component.scss']
})
export class CertComponent implements AfterViewInit {

  @ViewChild('tiposTrack') tiposTrack!: ElementRef;

  readonly perPage = 3;
  activePage = 0;

  tipos = [
    { icon: 'fas fa-cloud',    label: 'e-CPF A1',   desc: 'Arquivo digital, validade 1 ano' },
    { icon: 'fas fa-usb',      label: 'e-CPF A3',   desc: 'Token ou cartão, até 3 anos' },
    { icon: 'fas fa-building', label: 'e-CNPJ A1',  desc: 'Para emissão de NF-e, 1 ano' },
    { icon: 'fas fa-id-card',  label: 'e-CNPJ A3',  desc: 'Token ou cartão, até 3 anos' },
  ];

  get dots(): number[] {
    return Array.from({ length: Math.ceil(this.tipos.length / this.perPage) });
  }

  goToPage(page: number): void {
    this.activePage = page;
    const track = this.tiposTrack.nativeElement as HTMLElement;
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