import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  firstName = '';
  lastName = '';
  userEmail = '';
  userPhone = '';
  currentUser: any[] = [];
    constructor(private router: Router) {}
    goToHome(): void{
      this.currentUser.push(this.firstName, this.lastName, this.userEmail, this.userPhone);
      this.router.navigateByUrl('home');
      console.log(this.firstName, this.lastName, this.userEmail, this.userPhone);
      alert("Account Created!\nYour Name: " + this.firstName+ ' ' + this.lastName + 
      "\nYour EMAIL: " + this.userEmail + "\nYour Phone Number: " + this.userPhone);
  }
  ngOnInit(): void {
  }

}
