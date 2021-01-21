import { Component } from '@angular/core';
import {Task} from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
    done: false
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
  }

  clearTasks() {
    this.tasks = [];
  }

  createTask(name, deadline){
    const task: Task = {
      name,
      deadline,
      done: false,
    };
    this.tasks.push(task);
  }
}
