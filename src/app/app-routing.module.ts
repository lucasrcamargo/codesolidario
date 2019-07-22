import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { IdeiasFormComponent } from './ideias-form/ideias-form.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '#ideias',
    component: IdeiasFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
