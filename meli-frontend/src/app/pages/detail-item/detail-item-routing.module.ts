import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailItemComponent } from './detail-item.component';


const routes: Routes = [
  {
    path: '',
    component: DetailItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailItemRoutingModule { }
