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
  mobileOpen = false;
  toggle(): void { this.mobileOpen = !this.mobileOpen; }
  close(): void  { this.mobileOpen = false; }
  @HostListener('document:keydown.escape') onEsc(): void { this.close(); }
}
