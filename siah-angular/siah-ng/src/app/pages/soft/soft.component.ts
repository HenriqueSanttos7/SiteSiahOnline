import { Component, AfterViewInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { FooterComponent, FooterColumn } from '../../core/footer/footer.component';
import { EmailCtaComponent } from '../../shared/email-cta/email-cta.component';
@Component({ selector:'app-soft', standalone:true, imports:[NgFor,FooterComponent,EmailCtaComponent], templateUrl:'./soft.component.html', styleUrls:['./soft.component.scss'] })
export class SoftComponent implements AfterViewInit {
  footerColumns: FooterColumn[] = [
    {title:'Sistema A7',links:[{label:'Gestão de Vendas'},{label:'Módulo Fiscal'},{label:'Financeiro'},{label:'Estoque'}]},
    {title:'Aplicações',links:[{label:'A7 Web'},{label:'PDV Touch'},{label:'Força de Venda'},{label:'E-commerce'}]},
    {title:'Empresa',links:[{label:'Sobre a SIAH',route:'/sobre'},{label:'Contato',route:'/contato'}]},
    {title:'Contato',links:[{label:'(92) 99394-7451',href:'https://wa.me/5592993947451'},{label:'(92) 98182-6512',href:'https://wa.me/5592981826512'}]}
  ];
  seg12 = [{'icon':'fas fa-store','label':'Varejo em Geral'},{'icon':'fas fa-warehouse','label':'Atacarejo'},{'icon':'fas fa-tshirt','label':'Confecções e Calçados'},{'icon':'fas fa-truck','label':'Distribuidoras'},{'icon':'fas fa-pills','label':'Drogarias'},{'icon':'fas fa-anchor','label':'Marinas'},{'icon':'fas fa-hard-hat','label':'Materiais de Construção'},{'icon':'fas fa-bread-slice','label':'Padarias'},{'icon':'fas fa-industry','label':'Pequenas Indústrias'},{'icon':'fas fa-gas-pump','label':'Postos e Conveniências'},{'icon':'fas fa-utensils','label':'Restaurantes'},{'icon':'fas fa-shopping-cart','label':'Supermercados'}];
  apps = [{'bg':'linear-gradient(135deg,#0077cc,#00b4d8)','text':'A7','icon':'','title':'Sistema A7','sub':'Gestão de Vendas'},{'bg':'linear-gradient(135deg,#1a4fa8,#00b4d8)','text':'','icon':'fas fa-desktop','title':'A7 Web','sub':'Relatórios de qualquer lugar'},{'bg':'linear-gradient(135deg,#00b37e,#00c896)','text':'','icon':'fas fa-mobile-alt','title':'Pré-Venda','sub':'Vendas Internas'},{'bg':'linear-gradient(135deg,#0077cc,#00b4d8)','text':'','icon':'fas fa-cash-register','title':'PDV Touch','sub':'Ponto de Venda'},{'bg':'linear-gradient(135deg,#1e3a5f,#0d2b6b)','text':'','icon':'fas fa-boxes-stacked','title':'Expedição e Estoque','sub':'Lançamento'},{'bg':'linear-gradient(135deg,#b91c1c,#ef4444)','text':'','icon':'fas fa-map-marked-alt','title':'Navegação','sub':'Lançamento em breve'},{'bg':'linear-gradient(135deg,#d97706,#f59e0b)','text':'','icon':'fas fa-briefcase','title':'Força de Venda','sub':'Vendas Externas'},{'bg':'linear-gradient(135deg,#7c3aed,#a855f7)','text':'','icon':'fas fa-globe','title':'E-commerce','sub':'Integrado ao A7'}];
  ngAfterViewInit():void{const o=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible')});},{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>o.observe(el));}
}
