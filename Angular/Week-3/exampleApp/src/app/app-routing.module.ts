import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

//components
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
//create our routes array
const routes: Routes = [
  {path:'', component: AppComponent},
  {path: 'login', component: LoginComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  
  ]
})
export class AppRoutingModule { }
