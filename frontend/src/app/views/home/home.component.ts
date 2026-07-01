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
    { icon: 'fas fa-warehouse', label: 'Atacarejo', cls: 'sc10', slug: 'atacarejo' },
    { icon: 'fas fa-shop', label: 'Varejo em Geral', cls: 'sc1', slug: 'varejo-geral' },
    { icon: 'fas fa-hard-hat', label: 'Materiais de Construção', cls: 'sc2', slug: 'materiais-construcao' },
    { icon: 'fas fa-truck', label: 'Distribuidoras', cls: 'sc3', slug: 'distribuidoras' },
    { icon: 'fas fa-tshirt', label: 'Confecção e Calçados', cls: 'sc4', slug: 'confeccao-calcados' },
    { icon: 'fas fa-pills', label: 'Farmácias e Drogarias', cls: 'sc7', slug: 'farmacias-drogarias' },
    { icon: 'fas fa-briefcase', label: 'Serviços', cls: 'sc8', slug: 'servicos' },
    { icon: 'fas fa-industry', label: 'Indústrias', cls: 'sc5', slug: 'industrias' },
    { icon: 'fas fa-shopping-cart', label: 'Supermercados', cls: 'sc6', slug: 'supermercados' },
    { icon: 'fas fa-ship', label: 'Marinas', cls: 'sc9', slug: 'marinas' },
  ];
  clients = [
    { nome: 'Grupo Tintão', img: 'tintao.svg' },
    { nome: 'Mirai', img: 'mirai.svg' },
    { nome: 'Grupo Baiano', img: 'lojas_baiano.svg' },
    // { nome: 'Panif. Cynthia', img: 'cynthia.png' },
    // { nome:'Amaz. Eletromec.',img:'eletromec.png' },
    { nome: 'Grupo Pool', img: 'pool_eletrica.svg' },
    { nome: 'Castelinho', img: 'castelinho.svg' },
    { nome: 'Livraria Lira', img: 'livraria_lira.svg' },
    // { nome:'Import. Luanjo',  img:'luanjo.svg' },
  ];
  ngAfterViewInit(): void { const o = new IntersectionObserver(e => { e.forEach(x => { if (x.isIntersecting) x.target.classList.add('visible'); }); }, { threshold: .1 }); document.querySelectorAll('.reveal').forEach(el => o.observe(el)); }
}
