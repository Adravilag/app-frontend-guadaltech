import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PersonasComponent } from '../pages/personas/personas.component';
import { BecariosComponent } from '../pages/becarios/becarios.component';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { ResponsablesPipe } from '../pipes/responsables.pipe';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BecarioComponent } from './becarios/becario.component';
import { PersonaComponent } from './personas/persona.component';


@NgModule({
  declarations: [PersonasComponent, BecariosComponent, HomeComponent, ResponsablesPipe, BecarioComponent, PersonaComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
