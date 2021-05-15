import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PersonasComponent } from './personas/personas.component';
import { BecariosComponent } from './becarios/becarios.component';
import { PagesComponent } from './pages.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BecarioComponent } from './becarios/becario.component';


const routes: Routes = [
    {   path: 'panel', component: PagesComponent,
        children: [
            { path: 'home', component: HomeComponent, pathMatch: 'full', data: { title: 'Home App' } },
            { path: 'personas', component: PersonasComponent, pathMatch: 'full', data: { title: 'Personas App' } },
            { path: 'becarios', component: BecariosComponent, pathMatch: 'full', data: { title: 'Becarios App' } },
            { path: 'becario/:id', component: BecarioComponent, pathMatch: 'full', data: { title: 'Becario Nuevo' } },
            { path: 'perfil', component: PerfilComponent, pathMatch: 'full', data: { title: 'Perfil de usuario' } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
