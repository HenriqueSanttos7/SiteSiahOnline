import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./shared/navbar/navbar.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <a href="https://wa.me/5592981826512" target="_blank" class="wpp-float">
      <i class="fab fa-whatsapp"></i>
    </a>

    <button type="button" class="btn-topo" aria-label="Voltar ao topo" (click)="subirAoTopo()">
      <i class="fas fa-arrow-up"></i>
    </button>
  `,
})
export class AppComponent {
  subirAoTopo(): void {
    const inicio = window.scrollY;
    const duracao = 1000;
    const inicioTempo = performance.now();

    const easeOutQuart = (progresso: number): number => 1 - Math.pow(1 - progresso, 4);

    const animarRolagem = (tempoAtual: number): void => {
      const tempoDecorrido = tempoAtual - inicioTempo;
      const progresso = Math.min(tempoDecorrido / duracao, 1);
      const suavizacao = easeOutQuart(progresso);

      window.scrollTo(0, inicio * (1 - suavizacao));

      if (progresso < 1) {
        requestAnimationFrame(animarRolagem);
      }
    };

    requestAnimationFrame(animarRolagem);
  }
}
