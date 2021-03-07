import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
//Use a Service
import {ApiDataService} from '../Shared/Services/api-data.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'exampleApp';
  fName = 'Manuel';
  lName = "Argueta";
  age = '';
  toDos = ['Wake Up','Shower','Eat','School','Code'];
  public movies:any = [];
  public selectedMovie:any = [];
  public inputGroup!: FormGroup;
  selectedMovieID = '';
  imageShow = false;
  displayImage(){
    if (this.imageShow == false){
    this.imageShow = true;
    } else if (this.imageShow == true){
      this.imageShow = false;
    }
  }
  constructor(private router: Router, public _apiService: ApiDataService, public fb: FormBuilder){
  }


  login(){
    this.router.navigateByUrl('/login');
  } 
  ngOnInit(){
    this.listenForMovieData();
    this.initForm();
  }

  listenForMovieData(){
    this._apiService.getAllMovies();
    this._apiService.listOfMoviesObs
    .subscribe(data => {
      this.movies = data;
    });
    console.log(this.movies);
  }

  initForm(){
    this.inputGroup = this.fb.group({
      title: [null, Validators.required]
    });
  }

  onFormSubmit(){
    let movieName = this.inputGroup.value.title;
    for (let i = 0; i < 20; i++){
      if (movieName === this.movies[i].title){
        this.selectedMovieID = this.movies[i].id;
      }
    }

    let postData = {
      id: this.selectedMovieID
    }
    
    this._apiService.pullOneMovie(postData)
    .subscribe((data: any) =>{
      this.selectedMovie = data;
      console.log(this.selectedMovie);
    });

  }
}

