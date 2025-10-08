import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home-tab',
        loadComponent: () => import('./home.tab').then((m) => m.HomeTab),
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/home/home.routes').then(m => m.routes),
          }
        ]
      },
      {
        path: 'books-tab',
        loadComponent: () => import('./books.tab').then((m) => m.BooksTab),
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/books/books.routes').then(m => m.routes),
          }
        ]
      },
      {
        path: 'settings-tab',
        loadComponent: () => import('./settings.tab').then((m) => m.SettingsTab),
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/settings/settings.routes').then(m => m.routes),
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home-tab/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home-tab/home',
    pathMatch: 'full',
  },
];
