import { Routes } from '@angular/router';
import { AppHome } from './home/home';
import { StrukturPemuda } from './components/struktur-pemuda/struktur-pemuda';
import { AgendaAcara } from './components/agenda-acara/agenda-acara';
import { SosialMedia } from './components/sosial-media/sosial-media';
import { KerjaSama } from './components/kerja-sama/kerja-sama';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },
  { 
    path: 'home', 
    component: AppHome,
    title: 'Home - Muda Mudi Tangsi 18'
  },
  { 
    path: 'struktur-pemuda', 
    component: StrukturPemuda,
    title: 'Struktur Pemuda - Muda Mudi Tangsi 18'
  },
  { 
    path: 'agenda-acara', 
    component: AgendaAcara,
    title: 'Agenda Acara - Muda Mudi Tangsi 18'
  },
  { 
    path: 'sosial-media', 
    component: SosialMedia,
    title: 'Sosial Media - Muda Mudi Tangsi 18'
  },
  { 
    path: 'kerja-sama', 
    component: KerjaSama,
    title: 'Kerja Sama - Muda Mudi Tangsi 18'
  },
  { 
    path: '**', 
    redirectTo: '/home' 
  }
];