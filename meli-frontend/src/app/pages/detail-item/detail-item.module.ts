import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailItemComponent } from './detail-item.component';
import { DetailItemRoutingModule } from './detail-item-routing.module';
import { ComponentModule } from 'src/app/components/component.module';



@NgModule({
  declarations: [
    DetailItemComponent,
  ],
  imports: [
    CommonModule,
    DetailItemRoutingModule,
    ComponentModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class DetailItemModule { }
