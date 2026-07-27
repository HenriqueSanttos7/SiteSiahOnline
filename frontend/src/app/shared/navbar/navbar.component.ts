import { Component, HostListener } from "@angular/core";
import { RouterLink, Router, NavigationEnd } from "@angular/router";
import { CommonModule } from "@angular/common";
import { filter } from "rxjs/operators";
@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  mobileOpen: boolean = false;
  mobOpen: string = "";
  activeDrop: string | null = null;
  isScrolled: boolean = false;
  forceActive: boolean = false;
  segmentos = {
    varejo: [
      { label: "Atacarejo", route: ["/segmentos", "atacarejo"] },
      { label: "Varejo em Geral", route: ["/segmentos", "varejo-geral"] },
      { label: "Materiais de Construção", route: ["/segmentos", "materiais-construcao"] },
      { label: "Confecções e Calçados", route: ["/segmentos", "confeccao-calcados"] },
      { label: "Farmácias e Drogarias", route: ["/segmentos", "farmacias-drogarias"] },      
    ],
    industriaServicos: [
      { label: "Supermercados", route: ["/segmentos", "supermercados"] },
      { label: "Distribuidoras", route: ["/segmentos", "distribuidoras"] },
      { label: "Serviços", route: ["/segmentos", "servicos"] },
      { label: "Indústrias", route: ["/segmentos", "industrias"] },
      { label: "Fluviais", route: ["/segmentos", "marinas"] },
    ],
  };

  solucoes = [
    { label: "SIAH Soft", route: "/siah-soft", class: "sc1", img: "/assets/images/logo_siahsoft.svg", desc: "Sistema de Gestão ERP" },
    { label: "SIAH Cert", route: "/siah-cert", class: "sc2", img: "/assets/images/logo_siahcert.svg", desc: "Certificado Digital" },
    { label: "SIAH Tech", route: "/siah-tech", class: "sc3", img: "/assets/images/logo_siahtech.svg", desc: "Assistência Técnica" },
  ];

  sobre = {
    institucional: [
      { label: "Sobre a SIAH", route: "/sobre" },
      { label: "Nossa Equipe", route: "/equipe" },
    ],
    parcerias: [{ label: "Nossos Clientes", route: "/clientes" }],
  };

  contatos = {
    wppLink: "https://wa.me/5592981826512",
    wppNumero: "(92) 98182-6512",
    telefone: "(92) 3345-7707",
    siahSoft: "(92) 98182-6512",
    siahTech: "(92) 99394-7451",
    siahCert: "(92) 99391-9956 | (92) 99394-6188",
    horario: "Segunda a Sexta | 7:30h às 17:30h",
  };

  constructor(private router: Router) {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e: any) => {
      this.forceActive = e.urlAfterRedirects.startsWith("/segmentos/");
    });
  }

  @HostListener("window:scroll")
  onScroll(): void {
    this.isScrolled = window.scrollY > 10;
  }

  @HostListener("document:keydown.escape")
  onEsc(): void {
    this.close();
  }

  toggle(): void {
    this.mobileOpen = !this.mobileOpen;
  }
  close(): void {
    this.mobileOpen = false;
    this.mobOpen = "";
  }
  mobToggle(key: string): void {
    this.mobOpen = this.mobOpen === key ? "" : key;
  }
  openDrop(name: string): void {
    this.activeDrop = name;
  }
  closeDrop(): void {
    this.activeDrop = null;
  }
}
