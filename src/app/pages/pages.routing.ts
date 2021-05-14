import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PersonasComponent } from './personas/personas.component';
import { BecariosComponent } from './becarios/becarios.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'personas', component: PersonasComponent },
    { path: 'becarios', component: BecariosComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
