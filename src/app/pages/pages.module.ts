import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PersonasComponent } from '../pages/personas/personas.component';
import { BecariosComponent } from '../pages/becarios/becarios.component';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [PersonasComponent, BecariosComponent, HomeComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    HttpClientModule
  ]
})
export class PagesModule { }
