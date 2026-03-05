# SIAH Angular 19

Projeto Angular 19 com componentes standalone, lazy loading e SCSS.

## Como rodar

```bash
npm install
ng serve
```

Acesse http://localhost:4200

## Rotas

| Rota | Página |
|------|--------|
| `/` | Home |
| `/siah-soft` | SIAH Soft |
| `/siah-cert` | SIAH Cert |
| `/siah-tech` | SIAH Tech |
| `/sobre` | Sobre |
| `/contato` | Contatos |

## Estrutura

```
src/app/
├── core/
│   ├── navbar/          # Navbar sticky com dropdowns
│   └── footer/          # Footer dinâmico via @Input
├── shared/
│   └── email-cta/       # CTA de e-mail reutilizável
└── pages/
    ├── home/
    ├── soft/
    ├── cert/
    ├── tech/
    ├── sobre/
    └── contato/
```
