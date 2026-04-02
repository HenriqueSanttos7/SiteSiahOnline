import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  mobileOpen: boolean = false;
  mobOpen: string = '';

  toggle(): void { this.mobileOpen = !this.mobileOpen; }
  close(): void  { this.mobileOpen = false; this.mobOpen = ''; }
  mobToggle(key: string): void { this.mobOpen = this.mobOpen === key ? '' : key; }

  @HostListener('document:keydown.escape') onEsc(): void { this.close(); }
}