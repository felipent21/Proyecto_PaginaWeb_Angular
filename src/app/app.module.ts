import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';

import {GoogleMapsModule} from '@angular/google-maps';



import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AsideComponent } from './Components/aside/aside.component';
import { FooterComponent } from './Components/footer/footer.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { QuienesComponent } from './Components/quienes/quienes.component';
import { ServiciosComponent } from './Components/servicios/servicios.component';
import { TestimoniosComponent } from './Components/testimonios/testimonios.component';
import { ContactanosComponent } from './Components/contactanos/contactanos.component';
import { NoticiasComponent } from './Components/noticias/noticias.component';
import { ClimaComponent } from './Components/clima/clima.component';
import { MundialComponent } from './Components/mundial/mundial.component';



const routes: Routes = [
      {path: 'ini', component: InicioComponent},
      {path: 'qui', component: QuienesComponent},
      {path: 'ser', component: ServiciosComponent},
  {path: 'tes', component: TestimoniosComponent},
  {path: 'con', component: ContactanosComponent},

  {path: 'not', component: NoticiasComponent},
  {path: 'cli', component: ClimaComponent},
  {path: 'mun', component: MundialComponent}
  
  ];





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AsideComponent,
    FooterComponent,
    InicioComponent,
    QuienesComponent,
    ServiciosComponent,
    TestimoniosComponent,
    ContactanosComponent,
    NoticiasComponent,
    ClimaComponent,
    MundialComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    YouTubePlayerModule,
    GoogleMapsModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
