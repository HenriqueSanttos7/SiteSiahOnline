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
        { nome: 'Lojas Baiano',
          desc: 'Empresa que atua no Comércio Atacadista e Varejista do Estado do Amazonas, com mais de 40 anos de história na região.',
          logo: '/assets/images/clientes/lojas_baiano.svg' },

        { nome: 'Lojas Mirai', 
          desc: 'Comercialização de produtos eletrônicos, eletrodomésticos e importados. Sediada em Manaus, famosa por trazer a cultura e produtos orientais para a cidade.', 
          logo: '/assets/images/clientes/mirai.svg' },

        { nome: 'Livraria Lira',
          desc: 'A Livraria Lira atua principalmente no ramo de comércio varejista de livros, papelaria e materiais escolares.',
          logo: '/assets/images/clientes/livraria_lira.svg' },
          
        { nome: 'Pool Eletrica',
          desc: 'A Pool Elétrica é uma loja especializada no comércio de materiais elétricos, ferramentas, máquinas e equipamentos.',
          logo: '/assets/images/clientes/pool_eletrica.svg' },
      ]
    },
    {
      nome: 'Materiais de Construção',
      cor: '#00b37e',
      desc: 'Lojas de materiais de construção que otimizaram sua gestão com o Sistema A7.',
      clientes: [
        { nome: 'Grupo Tintão', 
          desc: 'Rede de lojas de varejo focada em materiais de construção, reforma, acabamento e utilidades para o lar. A rede opera com múltiplas unidades físicas na região de Manaus', 
          logo: '/assets/images/clientes/tintao.svg' },

        { nome: 'Castelinho Materiais de Construção', 
          desc: 'O Castelinho Material de Construção é uma das maiores redes de lojas de material para construção, reforma e acabamento da cidade de Manaus (AM)', 
          logo: '/assets/images/clientes/castelinho.svg' },

        { nome: 'Norte Lajes', 
          desc: 'A Norte Lajes é uma empresa especializada na fabricação e comercialização de lajes, mão de obra especializada e acompanhamento profissional.', 
          logo: '/assets/images/clientes/norte_lajes.svg' },

        { nome: 'ConstruMaxx', 
          desc: 'A ConstruMaxx é uma empresa de engenharia e construção civil sediada em Manaus (AM), especializada em construções, reformas residenciais e comerciais.', 
          logo: '/assets/images/clientes/constru_maxx.svg' },
      ]
    },
    {
      nome: 'Farmácias e Drogarias',
      cor: '#f97316',
      desc: 'Farmácias e drogarias atendidos pela SIAH.',
      clientes: [
        { nome: 'Dona Rita',
          desc: 'A Dona Rita é uma padaria, café e mercearia tradicional localizada no bairro Flores, em Manaus. Ponto de conveniência para compras rápidas e refeições informais.',
          logo: '/assets/images/clientes/dona_rita.svg' },

        { nome: 'Baluarte',
          desc: 'É uma indústria e distribuidora de embalagens e produtos para o segmento de delivery (como sacos de papel kraft, caixas para pizza e embalagens personalizadas). ',
          logo: '/assets/images/clientes/baluarte.svg' },
        
        { nome: 'Lorena Panificadora e Supermercado',
          desc: 'Atuando de forma integrada nos setores de panificação e varejo alimentício, a empresa gerencia desde o controle rigoroso de matérias-primas e produção diária até a frente de caixa (PDV)',
          logo: '/assets/images/clientes/lorena.svg' },

        { nome: 'Fino Sabor Amazônia',
          desc: 'O Fino Sabor Amazônia é especializada em culinária regional e produtos amazônicos, otimiza o controle de estoque de safras, a rastreabilidade de insumos e a agilidade no atendimento de mesa e balcão.',
          logo: '/assets/images/clientes/fino_sabor.svg' }
      ]
    },
    {
      nome: 'Importadoras',
      cor: '#7c3aed',
      desc: 'Empresas importadoras que utilizam o A7 para controle de estoque e fiscal.',
      clientes: [
        { nome: 'Importadora São Luiz',
          desc: 'A Importadora São Luiz é Referência para o Comércio Musical.',
          logo: '/assets/images/clientes/saoluiz.png' },

        { nome: 'Importadora Luanjo',
          desc: 'A Importadora Luanjo é uma empresa tradicional sediada em Manaus, com mais de 50 anos de atuação, especializada nos ramos de construção civil e setor náutico.',
          logo: '/assets/images/clientes/imp_luanjo.png' },
      ]
    },

    {
      nome: 'Marinas',
      cor: '#013272',
      desc: 'Marinas e clubes náuticos que confiam no Sistema A7 para gestão de suas operações.',
      clientes: [
        { nome: 'Marina do Davi', 
          desc: 'A Marina do Davi é uma marina localizada em Manaus, especializada em serviços de ancoragem, manutenção e suporte para embarcações de lazer e comerciais.', 
          logo: '/assets/images/clientes/marina_davi.png' },
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