import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { TermosUsoComponent } from './termos-uso/termos-uso.component';
import { FaqComponent } from './faq/faq.component';
import { ListaIdeiasComponent } from './lista-ideias/lista-ideias.component';
import { UserGuard } from './user.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'politicas',
    component: PoliticasComponent
  },
  {
    path: 'termos-uso',
    component: TermosUsoComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'lista-ideias',
    component: ListaIdeiasComponent,
    canActivate: [UserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
