import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { HeroesService } from './services/heroes.service';

// Componentes
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    AboutComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING /*aqui se importa las Rutas*/
  ],
  providers: [ /*Aqui van todos los servicios*/
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
