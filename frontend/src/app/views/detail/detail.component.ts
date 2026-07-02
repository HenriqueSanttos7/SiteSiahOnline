import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { NgFor, NgIf, NgClass } from "@angular/common";
import { FooterComponent } from "../../shared/footer/footer.component";
import { EmailCtaComponent } from "../../shared/email-cta/email-cta.component";
import { AppCatalogService, AppDetail } from "../../shared/services/app-catalog.service";

@Component({
  selector: "app-detail",
  standalone: true,
  imports: [NgFor, NgIf, NgClass, RouterLink, FooterComponent, EmailCtaComponent],
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
})
export class DetailComponent implements OnInit, AfterViewInit {

  app!: AppDetail;
  desktopModulos: any[] = [];
  mobileModulos: any[] = [];
  webModulos: any[] = [];
  temCategorias: boolean = false;

  get appsDesktop(): AppDetail[] { return this.catalogService.getAllApps().filter(a => a.categoria === 'desktop'); }
  get appsMobile():  AppDetail[] { return this.catalogService.getAllApps().filter(a => a.categoria === 'mobile');  }
  get appsWeb():     AppDetail[] { return this.catalogService.getAllApps().filter(a => a.categoria === 'web');     }

  constructor(
    private route: ActivatedRoute,
    private catalogService: AppCatalogService
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get("slug") ?? "";
      const foundApp = this.catalogService.getAppBySlug(slug);
      this.app = foundApp ?? this.catalogService.getAllApps()[0];

      this.desktopModulos = this.app.funcionalidades.filter((f) => f.categoria === "desktop");
      this.mobileModulos  = this.app.funcionalidades.filter((f) => f.categoria === "mobile");
      this.webModulos     = this.app.funcionalidades.filter((f) => f.categoria === "web");
      this.temCategorias  = this.app.funcionalidades.some((f) => !!f.categoria);

      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => this.initReveal(), 300);
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.initReveal(), 300);
  }

  initReveal(): void {
    const o = new IntersectionObserver(
      (e) => { e.forEach((x) => { if (x.isIntersecting) x.target.classList.add("visible"); }); },
      { threshold: 0.1 },
    );
    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.remove("visible");
      o.observe(el);
    });
  }
}