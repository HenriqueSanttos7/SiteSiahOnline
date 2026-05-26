# SIAH Angular 19

## Instalação e execução

```bash
npm install
ng serve
```

Acesse http://localhost:4200

## Estrutura

```
src/app/
├── shared/
│   ├── navbar/        # NavbarComponent
│   ├── footer/        # FooterComponent (recebe @Input columns)
│   └── email-cta/     # EmailCtaComponent (recebe @Input title/subtitle/showSelect)
├── views/
│   ├── home/
│   ├── soft/
│   ├── cert/
│   ├── tech/
│   ├── sobre/
│   └── contato/
├── app.component.ts   # root com <app-navbar> + <router-outlet>
├── app.routes.ts      # lazy loading em todas as rotas
└── app.config.ts
src/styles/
└── globals.scss       # variáveis CSS, classes compartilhadas, reveal animation
```

## Rotas

| Rota | View |
|------|------|
| `/` | HomeComponent |
| `/siah-soft` | SoftComponent |
| `/siah-cert` | CertComponent |
| `/siah-tech` | TechComponent |
| `/sobre` | SobreComponent |
| `/contato` | ContatoComponent |
