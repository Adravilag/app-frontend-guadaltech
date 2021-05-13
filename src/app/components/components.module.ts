import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';


@NgModule({
  declarations: [ FooterComponent, NavbarComponent ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent, NavbarComponent
  ]
})
export class ComponentsModule { }
