import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemResultListComponent } from './item-result-list/item-result-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

const components = [
  NavBarComponent,
  ItemResultListComponent,
  BreadcrumbComponent
]

@NgModule({
  declarations: [
    components,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [...components],

})
export class ComponentModule { }
