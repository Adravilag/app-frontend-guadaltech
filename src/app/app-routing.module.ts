import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PersonasComponent } from './pages/personas/personas.component';
import { BecariosComponent } from './pages/becarios/becarios.component';
import { PagesComponent } from './pages/pages.component';
import { NotPageFoundComponent } from './pages/not-page-found/not-page-found.component';


const routes: Routes = [
    { path: '', component: PagesComponent },
    { path: 'personas', component: PersonasComponent, pathMatch: 'full' },
    { path: 'becarios', component: BecariosComponent, pathMatch: 'full' },
    { path: '**', component: NotPageFoundComponent, redirectTo:''},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
