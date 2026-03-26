import { FooterComponent } from '../../shared/footer/footer.component';
import { Component, AfterViewInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { EmailCtaComponent } from '../../shared/email-cta/email-cta.component';

@Component({ selector:'app-tech', standalone:true, imports:[NgFor,FooterComponent,EmailCtaComponent], templateUrl:'./tech.component.html', styleUrls:['./tech.component.scss'] })
export class TechComponent implements AfterViewInit {
  cards = [
    { img:'assets/images/tech/card-1.jpg', title:'Remova Vírus',          sub:'Mantenha sua máquina protegida — sem precisar formatar!' },
    { img:'assets/images/tech/card-2.jpg', title:'Problemas de TI?',      sub:'Agende uma visita técnica — (92) 99394-7451' },
    { img:'assets/images/tech/card-3.jpg', title:'Solicite uma Proposta', sub:'Mantenha-se conectado com a tecnologia' },
    { img:'assets/images/tech/card-4.jpg', title:'Backup em Nuvem',       sub:'Proteja o banco de dados da sua empresa' },
  ];
  servicos = [
    {icon:'fas fa-desktop',   label:'Manutenção de Computadores', desc:'Sem precisar formatar!'},
    {icon:'fas fa-server',    label:'Servidores e Redes',          desc:'Configuração e monitoramento'},
    {icon:'fas fa-print',     label:'Impressoras e Periféricos',   desc:'Manutenção completa'},
    {icon:'fas fa-database',  label:'Backup em Nuvem',             desc:'Recuperação rápida de dados'},
    {icon:'fas fa-shield-alt',label:'Remoção de Vírus',            desc:'Sem formatar o computador'},
    {icon:'fas fa-headset',   label:'Suporte Remoto',              desc:'Atendimento rápido online'},
  ];
  ngAfterViewInit():void{const o=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible');});},{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>o.observe(el));}
}
