import { Component, AfterViewInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-equipe',
  standalone: true,
  imports: [NgFor, FooterComponent],
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements AfterViewInit {

  empresas = [
    {
      nome: 'SIAH',
      cor: '#004aad',
      departamentos: [
        {
          nome: 'Diretoria',
          pessoas: [
            { nome: 'Nome do CEO', cargo: 'CEO — Diretor Executivo', foto: 'assets/images/equipe/ceo.jpg' },
          ]
        },
      ]
    },
    {
      nome: 'SIAHSoft',
      cor: '#0077cc',
      departamentos: [
        {
          nome: 'Desenvolvimento',
          pessoas: [
            { nome: 'Nome do Colaborador', cargo: 'Desenvolvedor Full Stack', foto: 'assets/images/equipe/dev1.jpg' },
            { nome: 'Nome do Colaborador', cargo: 'Desenvolvedor Mobile', foto: 'assets/images/equipe/dev2.jpg' },
          ]
        },
        {
          nome: 'Suporte',
          pessoas: [
            { nome: 'Nome do Colaborador', cargo: 'Analista de Suporte', foto: 'assets/images/equipe/sup1.jpg' },
            { nome: 'Nome do Colaborador', cargo: 'Analista de Suporte', foto: 'assets/images/equipe/sup2.jpg' },
          ]
        },
        {
          nome: 'Comercial',
          pessoas: [
            { nome: 'Nome do Colaborador', cargo: 'Consultor Comercial', foto: 'assets/images/equipe/com1.jpg' },
          ]
        },
      ]
    },
    {
      nome: 'SIAHCert',
      cor: '#7c3aed',
      departamentos: [
        {
          nome: 'Certificação',
          pessoas: [
            { nome: 'Nome do Colaborador', cargo: 'Agente de Registro', foto: 'assets/images/equipe/cert1.jpg' },
            { nome: 'Nome do Colaborador', cargo: 'Agente de Registro', foto: 'assets/images/equipe/cert2.jpg' },
          ]
        },
      ]
    },
    {
      nome: 'SIAHTech',
      cor: '#00c896',
      departamentos: [
        {
          nome: 'Assistência Técnica',
          pessoas: [
            { nome: 'Nome do Colaborador', cargo: 'Técnico em TI', foto: 'assets/images/equipe/tech1.jpg' },
            { nome: 'Nome do Colaborador', cargo: 'Técnico em Redes', foto: 'assets/images/equipe/tech2.jpg' },
          ]
        },
      ]
    },
  ];

  ngAfterViewInit(): void {
    const o = new IntersectionObserver(e => {
      e.forEach(x => { if (x.isIntersecting) x.target.classList.add('visible'); });
    }, { threshold: .1 });
    document.querySelectorAll('.reveal').forEach(el => o.observe(el));
  }
}