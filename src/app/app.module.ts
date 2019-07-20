import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { BannerComponent } from './banner/banner.component';
import { InnerBannerComponent } from './inner-banner/inner-banner.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EquipeComponent } from './equipe/equipe.component';
import { MenuComponent } from './menu/menu.component';
import { IdeiasFormComponent } from './ideias-form/ideias-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatoComponent,
    BannerComponent,
    InnerBannerComponent,
    LoginFormComponent,
    RegisterFormComponent,
    PortfolioComponent,
    EquipeComponent,
    MenuComponent,
    IdeiasFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
