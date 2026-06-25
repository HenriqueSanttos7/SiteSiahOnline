import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  mobileOpen: boolean = false;
  mobOpen: string = '';
  activeDrop: string | null = null;

  segmentos = [
    { label: 'Atacarejo', route: ['/segmentos', 'atacarejo'], class: 'sc1' },
    { label: 'Materiais de Construção', route: ['/segmentos', 'materiais-construcao'], class: 'sc2' },
    { label: 'Distribuidoras', route: ['/segmentos', 'distribuidoras'], class: 'sc3' },
    { label: 'Confecções e Calçados', route: ['/segmentos', 'confeccao-calcados'], class: 'sc4' },
    { label: 'Farmácias e Drogarias', route: ['/segmentos', 'farmacias-drogarias'], class: 'sc7' },
    { label: 'Serviços', route: ['/segmentos', 'servicos'], class: 'sc8' },
    { label: 'Indústrias', route: ['/segmentos', 'industrias'], class: 'sc5' },
    { label: 'Supermercados', route: ['/segmentos', 'supermercados'], class: 'sc6' },
    { label: 'Marinas', route: ['/segmentos', 'marinas'], class: 'sc9' }
  ];

  solucoes = [
    { label: 'SIAH Soft', route: '/siah-soft', class: 'sc1', img: '/assets/images/logo_siahsoft.svg', desc: 'Sistema de Gestão' },
    { label: 'SIAH Cert', route: '/siah-cert', class: 'sc2', img: '/assets/images/logo_siahcert.svg', desc: 'Certificado Digital' },
    { label: 'SIAH Tech', route: '/siah-tech', class: 'sc3', img: '/assets/images/logo_siahtech.svg', desc: 'Assistência Técnica' }
  ];

  sobre = {
    institucional: [
      { label: 'Sobre a SIAH', route: '/sobre' },
      { label: 'Nossa Equipe', route: '/equipe' }
    ],
    parcerias: [
      { label: 'Nossos Clientes', route: '/clientes' }
    ]
  };

  contatos = {
    wppLink: 'https://wa.me/5592981826512',
    wppNumero: '(92) 98182-6512',
    telefone: '(92) 3345-7707',
    siahSoft: '(92) 98182-6512',
    siahTech: '(92) 99394-7451',
    siahCert: '(92) 99391-9956 | (92) 99394-6188',
    horario: 'Seg a Sex — 7:30h às 17:30h'
  };

  toggle(): void { this.mobileOpen = !this.mobileOpen; }
  close(): void { this.mobileOpen = false; this.mobOpen = ''; }
  mobToggle(key: string): void { this.mobOpen = this.mobOpen === key ? '' : key; }

  @HostListener('document:keydown.escape') onEsc(): void { this.close(); }
  
  openDrop(name: string): void {
    this.activeDrop = name;
  }

  closeDrop(): void {
    this.activeDrop = null;
  }
}