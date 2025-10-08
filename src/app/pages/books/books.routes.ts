import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'books',
    loadComponent: () => import('./books.page').then(m => m.BooksPage),
  }
];
