import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/components/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('./features/menu/components/menu/menu.component').then((m) => m.MenuComponent),
  },
  {
    path: 'caracteris/:id',
    loadComponent: () =>
      import('./features/caracteris/caracteris.component').then((m) => m.CaracterisComponent),
  },
  {
    path: 'caracterlista',
    loadComponent: () =>
      import('./features/caracterlista/caracterlista.component').then((m) => m.CaracterListaComponent),
  },
  {
    path: 'caracterlistaall',
    loadComponent: () =>
      import('./features/caracterlistaall/caracterlistaall.component').then((m) => m.CaracterlistaallComponent),
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];
