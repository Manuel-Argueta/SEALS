import { Component, OnInit } from '@angular/core';
import {JournalApiService} from '../../Shared/Services/journal-api.service';


@Component({
  selector: 'app-all-journals',
  templateUrl: './all-journals.component.html',
  styleUrls: ['./all-journals.component.css']
})
export class AllJournalsComponent implements OnInit{

  journals:any = [];

  constructor(public _apiService: JournalApiService){

  }
  
  ngOnInit(): void {
    this.getAllJournals(); 
  }
  
  getAllJournals(){
    this._apiService.getAllJournals();
    this._apiService.listOfJournalsObs
    .subscribe(data => {
      this.journals = data;
      console.log(this.journals);
    });
  }
  
}
