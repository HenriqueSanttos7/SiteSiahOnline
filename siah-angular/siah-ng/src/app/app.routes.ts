import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'siah-soft', loadComponent: () => import('./pages/soft/soft.component').then(m => m.SoftComponent) },
  { path: 'siah-cert', loadComponent: () => import('./pages/cert/cert.component').then(m => m.CertComponent) },
  { path: 'siah-tech', loadComponent: () => import('./pages/tech/tech.component').then(m => m.TechComponent) },
  { path: 'sobre', loadComponent: () => import('./pages/sobre/sobre.component').then(m => m.SobreComponent) },
  { path: 'contato', loadComponent: () => import('./pages/contato/contato.component').then(m => m.ContatoComponent) },
  { path: '**', redirectTo: '' }
];
