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
  image = 'https://repository-images.githubusercontent.com/24195339/87018c00-694b-11e9-8b5f-c34826306d36';
  constructor() { }

  ngOnInit(): void {
  }

  addTasks(task: string): void {
    this.tasks.push(task);
    console.table('tasks', this.tasks);
  }

}
