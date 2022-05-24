import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list.component';
import { ComponentModule } from 'src/app/components/component.module';
import { ItemListRoutingModule } from './item-list-routing.module';



@NgModule({
  declarations: [
    ItemListComponent
  ],
  imports: [
    CommonModule,
    ItemListRoutingModule,
    ComponentModule
  ]
})
export class ItemListModule { }
