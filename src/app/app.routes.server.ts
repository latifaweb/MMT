import { Routes } from '@angular/router';
import { RenderMode, ServerRoute } from '@angular/ssr';
import { AppHome } from './home/home';
import { LinktreeComponent } from './linktree/linktree';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  }
];