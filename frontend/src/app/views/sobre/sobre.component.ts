import { FooterComponent } from '../../shared/footer/footer.component';
import { Component, AfterViewInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface Colaborador { nome: string; cargo: string; foto: string; }
export interface Departamento { area: string; color: string; pessoas: Colaborador[]; }

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [NgFor, FooterComponent, RouterLink],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements AfterViewInit {
  [x: string]: any;

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
    { icon: 'fas fa-ship', label: 'Fluviais', cls: 'sc9', slug: 'marinas' },
  ];

  departamentos: Departamento[] = [
    {
      area: 'CEO', color: '#0d2b6b',
      pessoas: [
        { nome: 'Nome do CEO', cargo: 'Chief Executive Officer', foto: 'assets/images/team/ceo.jpg' },
      ]
    },
    {
      area: 'SIAH Soft', color: '#0077cc',
      pessoas: [
        { nome: 'Colaborador', cargo: 'Gerente de Software', foto: 'assets/images/team/soft-1.jpg' },
        { nome: 'Colaborador', cargo: 'Desenvolvedor', foto: 'assets/images/team/soft-2.jpg' },
        { nome: 'Colaborador', cargo: 'Suporte Técnico', foto: 'assets/images/team/soft-3.jpg' },
      ]
    },
    {
      area: 'SIAH Tech', color: '#1a6e1a',
      pessoas: [
        { nome: 'Colaborador', cargo: 'Gerente de TI', foto: 'assets/images/team/tech-1.jpg' },
        { nome: 'Colaborador', cargo: 'Técnico de Suporte', foto: 'assets/images/team/tech-2.jpg' },
        { nome: 'Colaborador', cargo: 'Analista de Redes', foto: 'assets/images/team/tech-3.jpg' },
      ]
    },
    {
      area: 'SIAH Cert', color: '#7c3aed',
      pessoas: [
        { nome: 'Colaborador', cargo: 'Gerente de Certificação', foto: 'assets/images/team/cert-1.jpg' },
        { nome: 'Colaborador', cargo: 'Agente de Certificação', foto: 'assets/images/team/cert-2.jpg' },
      ]
    },
  ];

  mvv = [
    { icon: 'fas fa-bullseye', color: '#0438a8', tag: 'MISSÃO', title: 'Nossa Missão', text: 'Transformar a gestão dos nossos clientes com tecnologia acessível, inovadora e de alta qualidade.' },
    { icon: 'fas fa-eye', color: '#0438a8', tag: 'VISÃO', title: 'Nossa Visão', text: 'Ser a principal referência em tecnologia para empresas do Amazonas e região Norte até 2030.' },
    { icon: 'fas fa-heart', color: '#0438a8', tag: 'VALORES', title: 'Nossos Valores', text: 'Agilidade · Comprometimento · Qualidade · Simplicidade · Coragem · Inovação' },
  ];

  ngAfterViewInit(): void {
    const o = new IntersectionObserver(e => {
      e.forEach(x => { if (x.isIntersecting) x.target.classList.add('visible'); });
    }, { threshold: .1 });
    document.querySelectorAll('.reveal').forEach(el => o.observe(el));
  }
}