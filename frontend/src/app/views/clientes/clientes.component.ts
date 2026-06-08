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
        { nome: 'Lojas Baiano', desc: 'Empresa que atua no Comércio Atacadista e Varejista do Estado do Amazonas.', logo: '/assets/images/clientes/baiano.svg' },
        { nome: 'Lojas Mirai', desc: 'Comercialização de produtos eletrônicos, eletrodomésticos e importados.', logo: '/assets/images/clientes/mirai.svg' },
        { nome: 'Livraria Lira', desc: 'A Livraria Lira atua principalmente no ramo de comércio varejista de livros, papelaria e materiais escolares.', logo: '/assets/images/clientes/lira.svg' },
        { nome: 'Pool Eletrica', desc: 'A Pool Elétrica é uma loja especializada no comércio varejista e atacadista de materiais elétricos, ferramentas, máquinas e equipamentos.', logo: '/assets/images/clientes/pool.svg' },
      ]
    },
    // {
    //   nome: 'Supermercados',
    //   cor: '#0099e5',
    //   desc: 'Supermercados e redes de varejo alimentar que confiam no Sistema A7.',
    //   clientes: [
    //     { nome: 'Nome do Cliente', desc: 'Descrição breve do cliente e segmento de atuação.', logo: 'assets/images/clientes/cliente.png' },
    //     { nome: 'Nome do Cliente', desc: 'Descrição breve do cliente e segmento de atuação.', logo: 'assets/images/clientes/cliente.png' },
    //   ]
    // },
    {
      nome: 'Materiais de Construção',
      cor: '#00b37e',
      desc: 'Lojas de materiais de construção que otimizaram sua gestão com o Sistema A7.',
      clientes: [
        { nome: 'Grupo Tintão', desc: 'Maior Home Center do Norte do País!', logo: '/assets/images/clientes/tintao.svg' },
        { nome: 'Castelinho Materiais de Construção', desc: 'A maior marca de materiais de construção de Manaus!', logo: '/assets/images/clientes/castelinho.png' },

      ]
    },
    {
      nome: 'Food Service',
      cor: '#f97316',
      desc: 'Restaurantes, padarias e estabelecimentos de food service atendidos pela SIAH.',
      clientes: [
        { nome: 'Panificadora Cintia', desc: 'A Panificadora Cíntia é uma das padarias mais tradicionais de Manaus, com mais de 45 anos de história.', logo: '/assets/images/clientes/cynthia.png' },
      ]
    },
    {
      nome: 'Importadoras',
      cor: '#7c3aed',
      desc: 'Empresas importadoras que utilizam o A7 para controle de estoque e fiscal.',
      clientes: [
        { nome: 'Importadora São Luiz', desc: 'A Importadora São Luiz é Referência para o Comércio Musical.', logo: '/assets/images/clientes/saoluiz.png' },
        { nome: 'Importadora Luanjo', desc: 'A Importadora Luanjo é uma empresa tradicional sediada em Manaus, com mais de 50 anos de atuação, especializada nos ramos de construção civil e setor náutico.', logo: '/assets/images/clientes/luanjo.svg' },
      ]
    },
    {
      nome: 'Indústrias',
      cor: '#e11d48',
      desc: 'Pequenas e médias indústrias que modernizaram sua gestão com as soluções da SIAH.',
      clientes: [
        { nome: 'Ponto da Camisa & Malharia', desc: 'É uma empresa especializada em personalização de camisetas, uniformes, brindes e peças exclusivas. Atua há anos entregando qualidade, criatividade e um atendimento próximo para clientes de todo o Brasil.', logo: 'assets/images/clientes/pontodacamisa.png' },
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