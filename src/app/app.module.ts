import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { HabitacionesComponent } from './componentes/habitaciones/habitaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    MenuComponent,
    RegistroComponent,
    LoginComponent,
    HabitacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
