import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { MessageService } from './message.service';
import { PoliticasComponent } from './politicas/politicas.component';
import { TermosUsoComponent } from './termos-uso/termos-uso.component';
import { FaqComponent } from './faq/faq.component';


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
    IdeiasFormComponent,
    PoliticasComponent,
    TermosUsoComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
