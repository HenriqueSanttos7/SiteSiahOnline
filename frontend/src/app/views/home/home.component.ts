import { FooterComponent } from '../../shared/footer/footer.component';
import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { EmailCtaComponent } from '../../shared/email-cta/email-cta.component';

@Component({
  selector: 'app-home', standalone: true,
  imports: [RouterLink, NgFor, FooterComponent, EmailCtaComponent],
  templateUrl: './home.component.html', styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  segments = [
    { icon: 'fas fa-store', label: 'Varejo em Geral', cls: 'sc1', slug: 'varejo' },
    { icon: 'fas fa-hard-hat', label: 'Materiais de Construção', cls: 'sc2', slug: 'materiais-construcao' },
    { icon: 'fas fa-prescription-bottle', label: 'Farmácias e Drogarias', cls: 'sc5', slug: 'farmacias-drogarias' },
    { icon: 'fas fa-boxes-stacked', label: 'Importadoras', cls: 'sc3', slug: 'importadoras' },
    { icon: 'fas fa-utensils', label: 'Empresas de Serviços', cls: 'sc4', slug: 'serviços' },
    { icon: 'fas fa-industry', label: 'Pequenas e Médias Indústrias', cls: 'sc5', slug: 'pequenas-industrias' },
    { icon: 'fas fa-shopping-cart', label: 'Supermercados', cls: 'sc6', slug: 'supermercados' },
    { icon: 'fas fa-ship', label: 'Marinas', cls: 'sc1', slug: 'marinas' },
  ];
  clients = [
    { nome: 'Grupo Tintão', img: 'tintao.svg' },
    { nome: 'Mirai', img: 'mirai.svg' },
    { nome: 'Grupo Baiano', img: 'baiano.svg' },
    { nome: 'Panif. Cynthia', img: 'cynthia.png' },
    // { nome:'Amaz. Eletromec.',img:'eletromec.png' },
    { nome: 'Grupo Pool', img: 'pool.svg' },
    // { nome:'Import. São Luiz',img:'saoluiz.png' },
    { nome: 'Livraria Lira', img: 'lira.svg' },
    // { nome:'Import. Luanjo',  img:'luanjo.svg' },
  ];
  ngAfterViewInit(): void { const o = new IntersectionObserver(e => { e.forEach(x => { if (x.isIntersecting) x.target.classList.add('visible'); }); }, { threshold: .1 }); document.querySelectorAll('.reveal').forEach(el => o.observe(el)); }
}
