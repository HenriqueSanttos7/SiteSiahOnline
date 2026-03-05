import { Component, AfterViewInit } from '@angular/core';
import { FooterComponent, FooterColumn } from '../../core/footer/footer.component';
@Component({ selector:'app-sobre', standalone:true, imports:[FooterComponent], templateUrl:'./sobre.component.html', styleUrls:['./sobre.component.scss'] })
export class SobreComponent implements AfterViewInit {
  footerColumns: FooterColumn[] = [
    {title:'Soluções',links:[{label:'SIAH Soft',route:'/siah-soft'},{label:'SIAH Cert',route:'/siah-cert'},{label:'SIAH Tech',route:'/siah-tech'}]},
    {title:'Empresa',links:[{label:'Nossa história'},{label:'Nossos valores'},{label:'Missão e Visão'}]},
    {title:'Contato',links:[{label:'(92) 98182-6512',href:'https://wa.me/5592981826512'},{label:'contato@siahonline.com.br'}]},
    {title:'Vendas',links:[{label:'Agendar demonstração',route:'/contato'}]}
  ];
  ngAfterViewInit():void{const o=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible')});},{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>o.observe(el));}
}
