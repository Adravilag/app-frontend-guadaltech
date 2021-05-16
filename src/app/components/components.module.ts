import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [ FooterComponent, NavbarComponent, LoadingComponent ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent, NavbarComponent, LoadingComponent
  ]
})
export class ComponentsModule { }
