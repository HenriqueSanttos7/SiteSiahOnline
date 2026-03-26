import { FooterComponent } from '../../shared/footer/footer.component';
import { Component, AfterViewInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { EmailCtaComponent } from '../../shared/email-cta/email-cta.component';

@Component({ selector:'app-cert', standalone:true, imports:[NgFor,FooterComponent,EmailCtaComponent], templateUrl:'./cert.component.html', styleUrls:['./cert.component.scss'] })
export class CertComponent implements AfterViewInit {
  cards = [
    { img:'assets/images/cert/card-1.jpg', title:'Adquira Já!',          sub:'Certificado Digital' },
    { img:'assets/images/cert/card-2.jpg', title:'Conte com a gente!',   sub:'Solicite já' },
    { img:'assets/images/cert/card-3.jpg', title:'Chama no zap!',        sub:'(92) 99394-6188' },
    { img:'assets/images/cert/card-4.jpg', title:'Certificado Digital?', sub:'Entre em contato conosco' },
  ];
  tipos = [
    {icon:'fas fa-cloud',   label:'e-CPF A1',   desc:'Arquivo digital, validade 1 ano'},
    {icon:'fas fa-usb',     label:'e-CPF A3',   desc:'Token ou cartão, até 3 anos'},
    {icon:'fas fa-building',label:'e-CNPJ A1',  desc:'Para emissão de NF-e, 1 ano'},
    {icon:'fas fa-id-card', label:'e-CNPJ A3',  desc:'Token ou cartão, até 3 anos'},
  ];
  ngAfterViewInit():void{const o=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible');});},{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>o.observe(el));}
}
