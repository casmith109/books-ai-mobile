import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home.tab').then((m) => m.HomeTab),
      },
      {
        path: 'books',
        loadComponent: () => import('./books.tab').then((m) => m.BooksTab),
      },
      {
        path: 'settings',
        loadComponent: () => import('./settings.tab').then((m) => m.SettingsTab)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
