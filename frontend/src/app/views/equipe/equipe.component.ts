import { Component, AfterViewInit } from "@angular/core";
import { NgFor } from "@angular/common";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: "app-equipe",
  standalone: true,
  imports: [NgFor, FooterComponent],
  templateUrl: "./equipe.component.html",
  styleUrls: ["./equipe.component.scss"],
})
export class EquipeComponent implements AfterViewInit {
  empresas = [
    {
      nome: "SIAH",
      cor: "var(--azul_soft)",
      departamentos: [
        {
          nome: "Diretoria",
          pessoas: [{ nome: "Herdeson Queiroz", cargo: "Diretor", foto: "/assets/images/equipe/ceo.jpeg" }],
        },
        {
          nome: "Financeiro",
          pessoas: [{ nome: "Luana  Santos", cargo: "Financeiro", foto: "/assets/images/equipe/Luana.png" }],
        },
      ],
    },
    {
      nome: "SIAH Soft",
      cor: "#0077cc",
      departamentos: [
        {
          nome: "Desenvolvimento",
          pessoas: [
            { nome: "Adson Rodrigo", cargo: "Desenvolvedor", foto: "/assets/images/equipe/Adson.png" },
            { nome: "Danilton Silva", cargo: "Desenvolvedor", foto: "/assets/images/equipe/Danilson.png" },
            { nome: "Henrique Santos", cargo: "Desenvolvedor", foto: "/assets/images/equipe/Henrique.png" },
            { nome: "Luiz Henrique", cargo: "Desenvolvedor Pleno", foto: "/assets/images/equipe/Luiz.png" },
            { nome: "Vitória Maria", cargo: "Desenvolvedor", foto: "/assets/images/equipe/Vitoria.png" },
          ],
        },
        {
          nome: "Suporte",
          pessoas: [
            { nome: "Neto Gonçalves", cargo: "Suporte de TI", foto: "/assets/images/equipe/Neto.png" },
            { nome: "Lúcio Portela", cargo: "Suporte de TI", foto: "/assets/images/equipe/Lucio.png" },
            { nome: "Joab Martins", cargo: "Suporte de TI", foto: "/assets/images/equipe/Joab.png" },
            { nome: "José Souza", cargo: "Suporte de TI", foto: "/assets/images/equipe/Jose.png" },
            { nome: "Maria Eduarda", cargo: "Suporte de TI", foto: "/assets/images/equipe/Maria_Ed.png" },
            { nome: "Ageu Oliveira", cargo: "Suporte de TI", foto: "/assets/images/equipe/Ageu.png" },
          ],
        },
        {
          nome: "Comercial",
          pessoas: [
            { nome: "Anderson Silva", cargo: "Representante", foto: "/assets/images/equipe/Anderson.png" },
            { nome: "Daniel Ramos", cargo: "Representante", foto: "/assets/images/equipe/Daniel.png" },
            { nome: "Daniela Brandão", cargo: "Representante", foto: "/assets/images/equipe/Daniela.png" },
            { nome: "Denilson Penha", cargo: "Representante", foto: "/assets/images/equipe/Denilson.png" },
            { nome: "Elizeu Costa", cargo: "Representante", foto: "/assets/images/equipe/Elizeu.png" },
            { nome: "Emerson Andrade", cargo: "Representante", foto: "/assets/images/equipe/Emerson.png" },
          ],
        },
      ],
    },
    {
      nome: "SIAH Cert",
      cor: "#7c3aed",
      departamentos: [
        {
          nome: "Certificação Digital",
          pessoas: [
            { nome: "Elizete Rufino", cargo: "Agente de Registro", foto: "/assets/images/equipe/Elizete.png" },
            { nome: "Maria Guadalupe", cargo: "Agente de Registro", foto: "/assets/images/equipe/Maria.png" },
          ],
        },
      ],
    },
    {
      nome: "SIAH Tech",
      cor: "#00c896",
      departamentos: [
        {
          nome: "Assistência Técnica",
          pessoas: [
            { nome: "Eliel Costa", cargo: "Técnico em TI", foto: "/assets/images/equipe/Eliel.png" },
            { nome: "Landyson Arruda", cargo: "Técnico em TI", foto: "/assets/images/equipe/Landyson.png" },
          ],
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
  }
}
