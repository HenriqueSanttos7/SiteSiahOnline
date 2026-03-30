import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-email-cta',
  standalone: true,
  imports: [RouterLink,FormsModule, NgIf],
  templateUrl: './email-cta.component.html',
  styleUrls: ['./email-cta.component.scss']
})
export class EmailCtaComponent {
  @Input() title    = 'Vamos conversar sobre o seu negócio?';
  @Input() subtitle = 'Preencha o formulário e nossa equipe entrará em contato em até 24 horas.';
  @Input() showSelect = true;

  nome = ''; email = ''; whatsapp = ''; interesse = '';

  submit(): void {
    alert('Obrigado! Entraremos em contato em breve.');
    this.nome = ''; this.email = ''; this.whatsapp = ''; this.interesse = '';
  }
}
