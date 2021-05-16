import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';


const routes: Routes = [
    { path: '', redirectTo: '/panel', pathMatch: 'full' },
    { path: '**', component: NopagefoundComponent, redirectTo:''},
];

@NgModule({
    imports: [RouterModule.forRoot(routes), PagesRoutingModule],
    exports: [RouterModule]
})
export class AppRoutingModule {}
