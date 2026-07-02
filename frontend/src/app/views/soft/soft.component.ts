import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { FooterComponent } from "../../shared/footer/footer.component";
import { EmailCtaComponent } from "../../shared/email-cta/email-cta.component";
import { NgFor } from "@angular/common";

import { AppCatalogService, AppDetail } from "../../shared/services/app-catalog.service"; //

@Component({
  selector: "app-soft",
  standalone: true,
  imports: [NgFor, RouterLink, FooterComponent, EmailCtaComponent],
  templateUrl: "./soft.component.html",
  styleUrls: ["./soft.component.scss"],
})
export class SoftComponent implements OnInit {
  get appsDesktop(): AppDetail[] {
    return this.catalogService.getAllApps().filter((a) => a.categoria === "desktop");
  }
  get appsMobile(): AppDetail[] {
    return this.catalogService.getAllApps().filter((a) => a.categoria === "mobile");
  }
  get appsWeb(): AppDetail[] {
    return this.catalogService.getAllApps().filter((a) => a.categoria === "web");
  }

  constructor(private catalogService: AppCatalogService) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    setTimeout(() => this.initReveal(), 300);
  }
  
  initReveal(): void {
    const o = new IntersectionObserver(
      (e) => {
        e.forEach((x) => {
          if (x.isIntersecting) x.target.classList.add("visible");
        });
      },
      { threshold: 0.1 },
    );
    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.remove("visible");
      o.observe(el);
    });
  }
}
