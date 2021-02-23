import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todoList';
  taskInputed = false;
  taskTitle = '';
  taskDate = '';
  taskDescription = '';
  taskInfo: any[] = []
  allTasks: any[] = [];
  addTask(){
    this.taskInputed = true;
    this.taskInfo.push(this.taskTitle,this.taskDate,this.taskDescription);
  }
}
