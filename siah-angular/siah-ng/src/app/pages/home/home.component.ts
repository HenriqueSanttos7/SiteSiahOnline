import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { FooterComponent, FooterColumn } from '../../core/footer/footer.component';
import { EmailCtaComponent } from '../../shared/email-cta/email-cta.component';

@Component({ selector:'app-home', standalone:true,
  imports:[RouterLink, NgFor, FooterComponent, EmailCtaComponent],
  templateUrl:'./home.component.html', styleUrls:['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  segments = [
    {icon:'fas fa-store',label:'Varejo em Geral',cls:'sc1'},
    {icon:'fas fa-hard-hat',label:'Materiais de Construção',cls:'sc2'},
    {icon:'fas fa-boxes-stacked',label:'Importadoras',cls:'sc3'},
    {icon:'fas fa-utensils',label:'Food Service',cls:'sc4'},
    {icon:'fas fa-industry',label:'Pequenas Indústrias',cls:'sc5'},
    {icon:'fas fa-shopping-cart',label:'Supermercados',cls:'sc6'},
  ];
  clients = ['Grupo Tintão','Mirai','Grupo Baiano','Panif. Cynthia','Amaz. Eletromec.','Grupo Pool','Import. São Luiz','Livraria Lira','Import. Luanjo'];
  footerColumns: FooterColumn[] = [
    {title:'Soluções',links:[{label:'SIAH Soft',route:'/siah-soft'},{label:'SIAH Cert',route:'/siah-cert'},{label:'SIAH Tech',route:'/siah-tech'}]},
    {title:'Segmentos',links:[{label:'Varejo em Geral'},{label:'Materiais de Construção'},{label:'Importadoras'},{label:'Food Service'}]},
    {title:'Suporte',links:[{label:'Suporte para clientes',sub:'atendimento@siahonline.com.br'},{label:'Fale conosco',route:'/contato'}]},
    {title:'Vendas',links:[{label:'Agendar demonstração',route:'/contato'},{label:'(92) 98182-6512',href:'https://wa.me/5592981826512'}]}
  ];
  ngAfterViewInit():void{const o=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible')});},{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>o.observe(el));}
}
