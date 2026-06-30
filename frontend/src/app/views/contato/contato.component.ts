declare const emailjs: any;
import { FooterComponent } from '../../shared/footer/footer.component';
import { Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    emailjs.send(
      'service_2859acd',
      'template_6v6545p',
      {
        nome: this.nome,
        email: this.email,
        whatsapp: this.whatsapp,
        empresa: this.empresa,
        interesse: this.interesse,
        mensagem: this.mensagem,
      },
      'TvuyFtTFoc6pz6KGh'
    ).then(() => {
      alert('Obrigado! Entraremos em contato em breve.');
      this.nome = '';
      this.email = '';
      this.whatsapp = '';
      this.empresa = '';
      this.interesse = '';
      this.mensagem = '';
    }).catch((err: unknown) => {
      console.error(err);
      alert('Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.');
    });
  }

  ngAfterViewInit(): void {
    const o = new IntersectionObserver(e => {
      e.forEach(x => { if (x.isIntersecting) x.target.classList.add('visible'); });
    }, { threshold: .1 });
    document.querySelectorAll('.reveal').forEach(el => o.observe(el));
  }
}