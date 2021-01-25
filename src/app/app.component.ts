import { Component } from '@angular/core';
import {Task} from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  editMode = false;
  taskName = 'Sugerowane zadanie codzienne: odkurzanie';
  taskDate = '';
  config: { [key: string]: string} = null;

  tasks: Task[] = [
    {
    name: 'Siłownia',
    deadline: '2021-01-02',
    done: false
  },
  {
    name: 'Montownia',
    deadline: '2021-02-12',
    done: false
  },
  {
    name: 'Hołownia',
    deadline: '2021-01-17',
    done: true
  },
  {
    name: 'Nauka Angulara',
    deadline: '2021-01-22',
    done: false
  } 
]

  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'Lista zadań',
        footer: 'Moja osobista angularowa lista zadań POZDRAWIAM',
        date: new Date().toDateString()
      };
    }, 500);
    this.sortTasks();
  }

  clearTasks() {
    this.tasks = [];
  }

  createTask(){
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false,
    };
    this.tasks.push(task);
    this.taskName = '';
    this.taskDate = '';
    this.sortTasks();
  }

  switchEditMode(){
    this.editMode =! this.editMode;
  }

  markTaskAsDone(task: Task){
    task.done = true;
    this.sortTasks();
  }

  deleteTask(task: Task){
    this.tasks = this.tasks.filter(e => e != task);
    this.sortTasks();
  }

  private sortTasks(){
    this.tasks = this.tasks.sort((a: Task, b: Task) => 
    a.done === b.done ? 0 : a.done ? 1 : -1
    );
  }
}
