import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { TermosUsoComponent } from './termos-uso/termos-uso.component';
import { FaqComponent } from './faq/faq.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
