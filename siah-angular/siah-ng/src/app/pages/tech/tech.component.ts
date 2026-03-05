import { Component, AfterViewInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { FooterComponent, FooterColumn } from '../../core/footer/footer.component';
import { EmailCtaComponent } from '../../shared/email-cta/email-cta.component';
@Component({ selector:'app-tech', standalone:true, imports:[NgFor,FooterComponent,EmailCtaComponent], templateUrl:'./tech.component.html', styleUrls:['./tech.component.scss'] })
export class TechComponent implements AfterViewInit {
  footerColumns: FooterColumn[] = [
    {title:'Serviços',links:[{label:'Manutenção'},{label:'Backup em Nuvem'},{label:'Suporte Remoto'},{label:'Remoção de Vírus'}]},
    {title:'Endereço',links:[{label:'Av. Cláudio Portinho, 365'},{label:'Miranda Mall, Bloco C, Sala 105'},{label:'Manaus — AM'}]},
    {title:'Empresa',links:[{label:'Sobre a SIAH',route:'/sobre'}]},
    {title:'Contato',links:[{label:'(92) 99394-7451',href:'https://wa.me/5592993947451'}]}
  ];
  cards = [{'bg':'linear-gradient(135deg,#111,#333)','icon':'fas fa-bug','title':'Remova Vírus','sub':'Sem precisar formatar!','icolor':'#22c55e'},{'bg':'linear-gradient(135deg,#1a4fa8,#00b4d8)','icon':'fas fa-headset','title':'Problemas de TI?','sub':'Agende uma visita técnica','icolor':'#fff'},{'bg':'linear-gradient(135deg,#00b37e,#00c896)','icon':'fas fa-file-invoice-dollar','title':'Solicite uma Proposta','sub':'Mantenha-se conectado com a tecnologia','icolor':'#fff'},{'bg':'linear-gradient(135deg,#78350f,#d97706)','icon':'fas fa-cloud-upload-alt','title':'Backup em Nuvem','sub':'Proteja o banco de dados da sua empresa','icolor':'#fff'}];
  servicos = [{'icon':'fas fa-desktop','label':'Manutenção de Computadores','desc':'Sem precisar formatar!'},{'icon':'fas fa-server','label':'Servidores e Redes','desc':'Configuração e monitoramento'},{'icon':'fas fa-print','label':'Impressoras e Periféricos','desc':'Manutenção completa'},{'icon':'fas fa-database','label':'Backup em Nuvem','desc':'Recuperação rápida de dados'},{'icon':'fas fa-shield-alt','label':'Remoção de Vírus','desc':'Sem formatar o computador'},{'icon':'fas fa-headset','label':'Suporte Remoto','desc':'Atendimento rápido online'}];
  ngAfterViewInit():void{const o=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible')});},{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>o.observe(el));}
}
