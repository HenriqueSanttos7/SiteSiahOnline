import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <a href="https://wa.me/5592981826512" target="_blank" class="wpp-float">
      <i class="fab fa-whatsapp"></i>
    </a>
  `
})
export class AppComponent {}
