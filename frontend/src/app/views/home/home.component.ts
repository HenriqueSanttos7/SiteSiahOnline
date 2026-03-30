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
    { icon: 'fas fa-store', label: 'Varejo em Geral', cls: 'sc1' },
    { icon: 'fas fa-hard-hat', label: 'Materiais de Construção', cls: 'sc2' },
    { icon: 'fas fa-boxes-stacked', label: 'Importadoras', cls: 'sc3' },
    { icon: 'fas fa-utensils', label: 'Food Service', cls: 'sc4' },
    { icon: 'fas fa-industry', label: 'Pequenas Indústrias', cls: 'sc5' },
    { icon: 'fas fa-shopping-cart', label: 'Supermercados', cls: 'sc6' },
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
