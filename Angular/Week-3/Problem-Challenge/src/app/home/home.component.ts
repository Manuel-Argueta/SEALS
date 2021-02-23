import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  deliveryDates = [
    {date: "Tuesday 02/22/21", value: 1},
    {date: "Wednesday 02/23/21", value: 2},
    {date: "Thursday 02/24/21", value: 3},
    {date: "Friday 02/25/21", value: 4},
    {date: "Saturday 02/26/21", value: 5},
    {date: "Sunday 02/27/21", value: 6},
    {date: "Monday 02/28/21", value: 7},
  ];
  storeLocations = [
    {location: "Superior 1234 Example Ave.", value: 1},
    {location: "Numero Uno 5678 Example Ave.", value: 2},
    {location: "El Super 9012 Example Ave.", value: 3},
  ];
  selectedDate = '';
  selectedStore = '';
  userDeliveryAdress = "";
  tomatoCount = 0;
  lettuceCount = 0;
  celeryCount = 0;
  onionCount = 0;
  carrotCount = 0;
  increaseLettuceCount(){
    this.lettuceCount += 1
    console.log("clicked")
  }
  increaseTomatoCount(){
    this.tomatoCount += 1
    console.log("clicked")
  }
  increaseOnionCount(){
    this.onionCount += 1
    console.log("clicked")
  }
  increaseCarrotCount(){
    this.carrotCount += 1
    console.log("clicked")
  }
  increaseCeleryCount(){
    this.celeryCount += 1
    console.log("clicked")
  }
  openWindowCustomClass(content: any) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }
    constructor(private router: Router, private modalService: NgbModal) {}
    confirm(): void{
      this.router.navigateByUrl('confirmation');
      alert("You Ordered: \nTomatoes: " +  this.tomatoCount + 
      "\nLettuce: " + this.lettuceCount + 
      "\nCelery: " + this.celeryCount +
      "\nCarrots: " + this.carrotCount +
      "\nOnions: " + this.onionCount +
      "\nDelivery Address: " + this.userDeliveryAdress +
      "\nDelivery Date: " + this.selectedDate +
      "\nStore Location: "+ this.selectedStore);
  }
  ngOnInit(): void {
  }

}
