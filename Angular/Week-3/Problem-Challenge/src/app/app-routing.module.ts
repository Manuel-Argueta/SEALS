import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
//components
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import {AboutComponent } from './about/about.component';
//create our routes array
const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'confirmation', component: ConfirmationComponent},
  {path: 'about', component: AboutComponent},

  {path:'**', redirectTo: 'register' }
];

export const appRoutingModule = RouterModule.forRoot(routes);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
  ]
})
export class AppRoutingModule { }
