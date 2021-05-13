import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonasComponent } from '../pages/personas/personas.component';
import { BecariosComponent } from '../pages/becarios/becarios.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [PersonasComponent, BecariosComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
