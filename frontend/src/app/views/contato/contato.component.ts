declare const emailjs: any;
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../shared/footer/footer.component';
import { Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent],
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
  website = ''; // honeypot - campo invisível, só bot preenche

  enviando = false;
  erro = '';

  private readonly INTERVALO_MIN_MS = 60_000; // 1 envio por minuto
  private readonly CHAVE_STORAGE = 'ultimoEnvioContatoSiah';

  getWhatsappLink(numero: string): string {
    return 'https://wa.me/55' + numero.replace(/\D/g, '');
  }

  private formularioValido(): boolean {
    this.erro = '';

    // honeypot: se veio preenchido, é bot -> bloqueia
    if (this.website) {
      return false;
    }

    const nome = this.nome.trim();
    const email = this.email.trim();
    const whatsapp = this.whatsapp.trim();

    if (!nome || !email || !whatsapp) {
      this.erro = 'Preencha nome, e-mail e WhatsApp antes de enviar.';
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.erro = 'Informe um e-mail válido.';
      return false;
    }

    return true;
  }

  private dentroDoLimiteDeTempo(): boolean {
    const ultimo = localStorage.getItem(this.CHAVE_STORAGE);
    if (!ultimo) return true;

    const passou = Date.now() - Number(ultimo);
    if (passou < this.INTERVALO_MIN_MS) {
      const restante = Math.ceil((this.INTERVALO_MIN_MS - passou) / 1000);
      this.erro = `Aguarde ${restante}s antes de enviar novamente.`;
      return false;
    }
    return true;
  }

  submit(): void {
    if (this.enviando) return;

    // honeypot preenchido: finge sucesso, não envia de verdade
    if (this.website) {
      this.resetForm();
      return;
    }

    if (!this.formularioValido()) return;
    if (!this.dentroDoLimiteDeTempo()) return;

    this.enviando = true;

    emailjs.send(
      'service_2859acd',
      'template_6v6545p',
      {
        nome: this.nome.trim(),
        email: this.email.trim(),
        whatsapp: this.whatsapp.trim(),
        empresa: this.empresa,
        interesse: this.interesse,
        mensagem: this.mensagem,
      },
      'TvuyFtTFoc6pz6KGh'
    ).then(() => {
      localStorage.setItem(this.CHAVE_STORAGE, String(Date.now()));
      alert('Obrigado! Entraremos em contato em breve.');
      this.resetForm();
    }).catch((err: unknown) => {
      console.error(err);
      alert('Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.');
    }).finally(() => {
      this.enviando = false;
    });
  }

  private resetForm(): void {
    this.nome = '';
    this.email = '';
    this.whatsapp = '';
    this.empresa = '';
    this.interesse = '';
    this.mensagem = '';
    this.website = '';
    this.erro = '';
  }

  ngAfterViewInit(): void {
    const o = new IntersectionObserver(e => {
      e.forEach(x => { if (x.isIntersecting) x.target.classList.add('visible'); });
    }, { threshold: .1 });
    document.querySelectorAll('.reveal').forEach(el => o.observe(el));
  }
}