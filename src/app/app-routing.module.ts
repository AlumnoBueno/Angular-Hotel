import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { HabitacionesComponent } from './componentes/habitaciones/habitaciones.component';

const routes: Routes = [
  { path: 'login',component: LoginComponent},
  { path: 'menu',component: MenuComponent},
  { path: 'registro',component: RegistroComponent},
  { path: 'habitaciones',component: HabitacionesComponent},
  {path: '', redirectTo:'/menu',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
