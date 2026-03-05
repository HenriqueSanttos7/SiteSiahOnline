import { Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent, FooterColumn } from '../../core/footer/footer.component';
@Component({ selector:'app-contato', standalone:true, imports:[FormsModule,FooterComponent], templateUrl:'./contato.component.html', styleUrls:['./contato.component.scss'] })
export class ContatoComponent implements AfterViewInit {
  footerColumns: FooterColumn[] = [
    {title:'Soluções',links:[{label:'SIAH Soft',route:'/siah-soft'},{label:'SIAH Cert',route:'/siah-cert'},{label:'SIAH Tech',route:'/siah-tech'}]},
    {title:'Empresa',links:[{label:'Sobre a SIAH',route:'/sobre'}]},
    {title:'Contato Geral',links:[{label:'(92) 98182-6512',href:'https://wa.me/5592981826512'},{label:'contato@siahonline.com.br'}]},
    {title:'Atendimento',links:[{label:'Seg a Sex — 8h às 18h'},{label:'SIAH Tech: (92) 99394-7451',href:'https://wa.me/5592993947451'},{label:'SIAH Cert: (92) 99394-6188',href:'https://wa.me/5592993946188'}]}
  ];
  nome=''; email=''; whatsapp=''; empresa=''; interesse=''; mensagem='';
  submit():void{ alert('Obrigado! Entraremos em contato em breve.'); this.nome='';this.email='';this.whatsapp='';this.empresa='';this.interesse='';this.mensagem=''; }
  ngAfterViewInit():void{const o=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible')});},{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>o.observe(el));}
}
