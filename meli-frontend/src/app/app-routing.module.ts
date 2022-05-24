import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  }, {
    path: 'items',
    loadChildren: () => import('./pages/item-list/item-list.module').then(m => m.ItemListModule),
  }, {
    path: 'items/:id',
    loadChildren: () => import('./pages/detail-item/detail-item.module').then(m => m.DetailItemModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
