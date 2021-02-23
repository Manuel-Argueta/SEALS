import { Component } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exampleApp';
  fName = 'Manuel';
  lName = "Argueta";
  age = '';
  toDos = ['Wake Up','Shower','Eat','School','Code'];
  imageShow = false;
  displayImage(){
    if (this.imageShow == false){
    this.imageShow = true;
    }else if (this.imageShow == true){
      this.imageShow = false;
    }
  }
  constructor(private router: Router){
  }
  login(){
    this.router.navigateByUrl('/login');
  } 
}

