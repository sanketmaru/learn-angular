import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  communityName = 'Pune Developer Community';
  task: string;
  tasks: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  addTasks(task: string): void {
    this.tasks.push(task);
    console.table('tasks', this.tasks);
  }

}
