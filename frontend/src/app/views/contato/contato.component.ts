import { FooterComponent } from '../../shared/footer/footer.component';
import { Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [FormsModule, FooterComponent],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements AfterViewInit {
  nome = '';
  email = '';
  whatsapp = '';
  empresa = '';
  interesse = '';
  mensagem = '';

  getWhatsappLink(numero: string): string {
    return 'https://wa.me/55' + numero.replace(/\D/g, '');
  }

  submit(): void {
    alert('Obrigado! Entraremos em contato em breve.');
    this.nome = '';
    this.email = '';
    this.whatsapp = '';
    this.empresa = '';
    this.interesse = '';
    this.mensagem = '';
  }

  ngAfterViewInit(): void {
    const o = new IntersectionObserver(e => {
      e.forEach(x => { if (x.isIntersecting) x.target.classList.add('visible'); });
    }, { threshold: .1 });
    document.querySelectorAll('.reveal').forEach(el => o.observe(el));
  }
}