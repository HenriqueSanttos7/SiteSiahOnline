import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./views/home/home.component').then(m => m.HomeComponent) },
  { path: 'siah-soft', loadComponent: () => import('./views/soft/soft.component').then(m => m.SoftComponent) },
  { path: 'siah-cert', loadComponent: () => import('./views/cert/cert.component').then(m => m.CertComponent) },
  { path: 'siah-tech', loadComponent: () => import('./views/tech/tech.component').then(m => m.TechComponent) },
  { path: 'sobre', loadComponent: () => import('./views/sobre/sobre.component').then(m => m.SobreComponent) },
  { path: 'contato', loadComponent: () => import('./views/contato/contato.component').then(m => m.ContatoComponent) },
  { path: 'segmentos/:slug', loadComponent: () => import('./views/segmento/segmento.component').then(m => m.SegmentoComponent)},
  { path: '**', redirectTo: '' }
];
