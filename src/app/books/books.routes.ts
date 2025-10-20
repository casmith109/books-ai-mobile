import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'create-book',
    loadComponent: () => import('./pages/create-book.page').then((m) => m.CreateBookPage),
  },
  {
    path: 'book-list',
    loadComponent: () => import('./pages/book-list.page').then((m) => m.BookListPage),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'book-list',
  }
];
