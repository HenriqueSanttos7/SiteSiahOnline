import { Component, AfterViewInit } from "@angular/core";
import { NgFor } from "@angular/common";
import { RouterLink } from "@angular/router";
import { FooterComponent } from "../../shared/footer/footer.component";
import Swiper from "swiper";
import { Pagination } from "swiper/modules";


@Component({
  selector: "app-clientes",
  standalone: true,
  imports: [NgFor, RouterLink, FooterComponent],
  templateUrl: "./clientes.component.html",
  styleUrls: ["./clientes.component.scss"],
})
export class ClientesComponent implements AfterViewInit {
  segmentos = [
    {
      nome: "Varejo em Geral",
      cor: "#0077cc",
      desc: "Empresas de varejo que utilizam o A7 ERP para gestão completa de suas operações.",
      clientes: [
        {
          nome: "Lojas Baiano",
          desc: "Empresa que atua no Comércio Atacadista e Varejista do Estado do Amazonas, com mais de 40 anos de história na região.",
          logo: "/assets/images/clientes/lojas_baiano.svg",
        },
        {
          nome: "Lojas Mirai",
          desc: "Comercialização de produtos eletrônicos, eletrodomésticos e importados. Sediada em Manaus, famosa por trazer a cultura e produtos orientais para a cidade.",
          logo: "/assets/images/clientes/mirai.svg",
        },

        {
          nome: "Livraria Lira",
          desc: "A Livraria Lira atua principalmente no ramo de comércio varejista de livros, papelaria e materiais escolares.",
          logo: "/assets/images/clientes/livraria_lira.svg",
        },

        {
          nome: "Panificadora Lorena",
          desc: "Complexo comercial que reúne padaria, açougue e mercadinho em Manaus, oferecendo itens de conveniência essenciais e culinária regional.",
          logo: "/assets/images/clientes/lorena.svg",
        },
      ],
    },
    {
      nome: "Materiais de Construção",
      cor: "#00b37e",
      desc: "Lojas de materiais de construção que otimizaram sua gestão com o A7 ERP.",
      clientes: [
        {
          nome: "Grupo Tintão",
          desc: "Rede de lojas de varejo focada em materiais de construção, reforma, acabamento e utilidades para o lar. A rede opera com múltiplas unidades físicas na região de Manaus",
          logo: "/assets/images/clientes/tintao.svg",
        },

        {
          nome: "Castelinho Materiais de Construção",
          desc: "O Castelinho Material de Construção é uma das maiores redes de lojas de material para construção, reforma e acabamento da cidade de Manaus (AM)",
          logo: "/assets/images/clientes/castelinho.svg",
        },

        {
          nome: "Pool Eletrica",
          desc: "A Pool Elétrica é uma loja especializada no comércio de materiais elétricos, ferramentas, máquinas e equipamentos.",
          logo: "/assets/images/clientes/pool_eletrica.svg",
        },

        {
          nome: "Importadora Luanjo",
          desc: "A Importadora Luanjo é uma das empresas mais tradicionais de Manaus, com mais de 50 anos de atuação no mercado.",
          logo: "/assets/images/clientes/imp_luanjo.webp",
        },

        {
          nome: "Norte Lajes",
          desc: "A Norte Lajes é uma empresa especializada na fabricação e comercialização de lajes, mão de obra especializada e acompanhamento profissional.",
          logo: "/assets/images/clientes/norte_lajes.svg",
        },

        {
          nome: "ConstruMaxx",
          desc: "A ConstruMaxx é uma empresa de engenharia e construção civil sediada em Manaus (AM), especializada em construções, reformas residenciais e comerciais.",
          logo: "/assets/images/clientes/constru_maxx.svg",
        },
      ],
    },
    {
      nome: "Distribuidoras",
      cor: "#7c3aed",
      desc: "Empresas importadoras que utilizam o A7 para controle de estoque e fiscal.",
      clientes: [
        {
          nome: "Oriente",
          desc: "A Oriente Atacado (Distribuidora Oriente) é uma das mais tradicionais empresas do comércio atacadista de estivas e produtos alimentícios em geral de Manaus, atuando há mais de 20 anos no abastecimento do mercado amazonense.",
          logo: "/assets/images/clientes/oriente.svg",
        },

        {
          nome: "Agl Distribuidora",
          desc: "A AGL Distribuidora é uma das principais referências logísticas e comerciais no setor de alimentos e laticínios da Região Norte, destacando-se como a distribuidora oficial e exclusiva das marcas Frutap e Frutilac na região.",
          logo: "/assets/images/clientes/agl_distribuidora.svg",
        },
      ],
    },
    {
      nome: "Confecção e Calçados",
      cor: "#f97316",
      desc: "Empresas de Confecção e Calçados que utilizam o A7 para controle de estoque, fiscal e PDV.",
      clientes: [
        {
          nome: "World Tennis",
          desc: "A maior rede de lojas especializadas em tênis do Brasil!",
          logo: "/assets/images/clientes/world_tennis.svg",
        },

        {
          nome: "Chora pra vender fiado",
          desc: "Chora Pra Vender Fiado é uma rede de lojas de confecções em Manaus focada em moda feminina e masculina popular.",
          logo: "/assets/images/clientes/chora_pra_vender.png",
        },
        {
          nome: "Ponto da Camisa",
          desc: "O Ponto da Camisa e Malharia é a maior empresa da Região Norte no segmento de malhas, camisas personalizadas e estamparia. ",
          logo: "/assets/images/clientes/ponto_da_camisa.svg",
        },
      ],
    },
    {
      nome: "Farmácias e Drogarias",
      cor: "#a52a2f",
      desc: "Farmácias e drogarias atendidos pela SIAH.",
      clientes: [
        {
          nome: "J Coelho Farmácia",
          desc: "A Drogarias Coelho é uma farmácia focada na saúde e bem-estar dos moradores da zona norte de Manaus.",
          logo: "/assets/images/clientes/farmacia_jcoelho.svg",
        },

        {
          nome: "TS Pharma",
          desc: "O Fino Sabor Amazônia é especializada em culinária regional e produtos amazônicos, otimiza o controle de estoque de safras, a rastreabilidade de insumos e a agilidade no atendimento de mesa e balcão.",
          logo: "/assets/images/clientes/farmacia_novotempo.png",
        },
      ],
    },
    {
      nome: "Serviços",
      cor: "#FFA600",
      desc: "Empresas de Serviços que utilizam o A7 para controle de estoque e fiscal.",
      clientes: [
        {
          nome: "AM Soluções Industriais",
          desc: "A AM Soluções Industriais é uma empresa especializada em sistemas hidráulicos, usinagem e fabricação de componentes.",
          logo: "/assets/images/clientes/am_solucoes.png",
        },

        {
          nome: "North Service",
          desc: "A North Service Engenharia e Comércio é uma empresa especializada no fornecimento de soluções técnicas, prestação de serviços de engenharia e comércio de materiais, focada no atendimento a contratos corporativos e ao setor público na região Norte.",
          logo: "/assets/images/clientes/north_service.svg",
        },

        {
          nome: "Amazonas Eletromec",
          desc: "A Importadora Luanjo é uma empresa tradicional sediada em Manaus, com mais de 50 anos de atuação, especializada nos ramos de construção civil e setor náutico.",
          logo: "/assets/images/clientes/amazonas_eletromec.svg",
        },
      ],
    },
    {
      nome: "Indústrias",
      cor: "#e11d48",
      desc: "Indústrias que utilizam o A7 para controle de estoque e fiscal.",
      clientes: [
        {
          nome: "Baluarte",
          desc: "A Baluarte Alimentos e Embalagens é uma fabricante e distribuidora atacadista localizada em Manaus, Amazonas.",
          logo: "/assets/images/clientes/baluarte.svg",
        },
        {
          nome: "Romano Pães",
          desc: "A Romano Pães é uma renomada fábrica de pães artesanais e produtos premium sediada em Manaus, Amazonas.",
          logo: "/assets/images/clientes/romano_paes.svg",
        },
      ],
    },
    {
      nome: "Supermercados",
      cor: "#DB2777",
      desc: "Supermercados que utilizam o A7 para controle de estoque, fiscal e PDV.",
      clientes: [
        {
          nome: "Supermercado Bahia",
          desc: "Tradicional empresa do comércio varejista de alimentos localizada em Manaus, atuando há anos no abastecimento e atendimento direto à comunidade da Zona Leste.",
          logo: "/assets/images/clientes/bahia.svg",
        },
        {
          nome: "Karita",
          desc: "Empresa do setor de atacado e varejo de alimentos em Manaus, especializada no fornecimento de frios, panificação e insumos para comércios locais e lanchonetes.",
          logo: "/assets/images/clientes/karita.svg",
        },
      ],
    },
    {
      nome: "Fluviais",
      cor: "#003a96",
      desc: "Marinas e clubes náuticos que confiam no A7 ERP para gestão de suas operações.",
      clientes: [
        {
          nome: "Marina Tauá",
          desc: "A Marina Tauá é uma tradicional marina e náutica localizada na região da Ponta Negra, em Manaus, especializada na guarda e manutenção de barcos, lanchas e jet-skis.",
          logo: "/assets/images/clientes/marina_taua.svg",
        },
      ],
    },
  ];

  ngAfterViewInit(): void {
    const o = new IntersectionObserver(
      (e) => {
        e.forEach((x) => {
          if (x.isIntersecting) x.target.classList.add("visible");
        });
      },
      { threshold: 0.1 },
    );
    document.querySelectorAll(".reveal").forEach((el) => o.observe(el));

    const initSwipers = () => {
      document.querySelectorAll<HTMLElement>(".parceiros-swiper").forEach((el) => {
        new Swiper(el, {
          modules: [Pagination],
          slidesPerView: 1,
          spaceBetween: 20,
          observer: true,
          observeParents: true,
          pagination: {
            el: el.querySelector<HTMLElement>(".swiper-pagination"),
            clickable: true,
          },
          breakpoints: {
            576: { slidesPerView: 2 },
            992: { slidesPerView: 4 },
          },
        });
      });
    };

    if (document.readyState === "complete") {
      initSwipers();
    } else {
      window.addEventListener("load", initSwipers, { once: true });
    }
  }
}
