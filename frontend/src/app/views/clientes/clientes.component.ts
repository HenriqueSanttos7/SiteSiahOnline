import { Component, AfterViewInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [NgFor, RouterLink, FooterComponent],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements AfterViewInit {

  segmentos = [
    {
      nome: 'Varejo em Geral',
      cor: '#0099e5',
      desc: 'Empresas de varejo que utilizam o Sistema A7 para gestão completa de suas operações.',
      clientes: [
        { nome: 'Nome do Cliente', desc: 'Descrição breve do cliente e segmento de atuação.', logo: 'assets/images/clientes/cliente.png' },
        { nome: 'Nome do Cliente', desc: 'Descrição breve do cliente e segmento de atuação.', logo: 'assets/images/clientes/cliente.png' },
        { nome: 'Nome do Cliente', desc: 'Descrição breve do cliente e segmento de atuação.', logo: 'assets/images/clientes/cliente.png' },
        { nome: 'Nome do Cliente', desc: 'Descrição breve do cliente e segmento de atuação.', logo: 'assets/images/clientes/cliente.png' },
      ]
    },
    {
      nome: 'Supermercados',
      cor: '#0099e5',
      desc: 'Supermercados e redes de varejo alimentar que confiam no Sistema A7.',
      clientes: [
        { nome: 'Nome do Cliente', desc: 'Descrição breve do cliente e segmento de atuação.', logo: 'assets/images/clientes/cliente.png' },
        { nome: 'Nome do Cliente', desc: 'Descrição breve do cliente e segmento de atuação.', logo: 'assets/images/clientes/cliente.png' },
      ]
    },
    {
      nome: 'Materiais de Construção',
      cor: '#00b37e',
      desc: 'Lojas de materiais de construção que otimizaram sua gestão com o Sistema A7.',
      clientes: [
        { nome: 'Nome do Cliente', desc: 'Descrição breve do cliente e segmento de atuação.', logo: 'assets/images/clientes/cliente.png' },
        { nome: 'Nome do Cliente', desc: 'Descrição breve do cliente e segmento de atuação.', logo: 'assets/images/clientes/cliente.png' },
      ]
    },
    {
      nome: 'Food Service',
      cor: '#f97316',
      desc: 'Restaurantes, padarias e estabelecimentos de food service atendidos pela SIAH.',
      clientes: [
        { nome: 'Nome do Cliente', desc: 'Descrição breve do cliente e segmento de atuação.', logo: 'assets/images/clientes/cliente.png' },
        { nome: 'Nome do Cliente', desc: 'Descrição breve do cliente e segmento de atuação.', logo: 'assets/images/clientes/cliente.png' },
      ]
    },
    {
      nome: 'Importadoras',
      cor: '#7c3aed',
      desc: 'Empresas importadoras que utilizam o A7 para controle de estoque e fiscal.',
      clientes: [
        { nome: 'Nome do Cliente', desc: 'Descrição breve do cliente e segmento de atuação.', logo: 'assets/images/clientes/cliente.png' },
        { nome: 'Nome do Cliente', desc: 'Descrição breve do cliente e segmento de atuação.', logo: 'assets/images/clientes/cliente.png' },
      ]
    },
    {
      nome: 'Pequenas Indústrias',
      cor: '#e11d48',
      desc: 'Pequenas indústrias que modernizaram sua gestão com as soluções da SIAH.',
      clientes: [
        { nome: 'Nome do Cliente', desc: 'Descrição breve do cliente e segmento de atuação.', logo: 'assets/images/clientes/cliente.png' },
        { nome: 'Nome do Cliente', desc: 'Descrição breve do cliente e segmento de atuação.', logo: 'assets/images/clientes/cliente.png' },
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