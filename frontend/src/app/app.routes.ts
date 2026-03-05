import { Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { SiahSoftComponent } from './views/siah-soft/siah-soft.component';
import { SiahTechComponent } from './views/siah-tech/siah-tech.component';
import { SiahCertComponent } from './views/siah-cert/siah-cert.component';
import { ContactComponent } from './views/contact/contact.component';

export const routes: Routes = [
  //rota pública
  { path: '', component: HomeComponent },

  //rotas privadas
  { path: 'about', component: AboutComponent },
  { path: 'siah-soft', component: SiahSoftComponent },
  { path: 'siah-tech', component: SiahTechComponent },
  { path: 'siah-cert', component: SiahCertComponent },
  { path: 'contact', component: ContactComponent }
];
