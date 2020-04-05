import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoComponent } from './todo.component';
import { TodoLazyRoutingModule } from './todo-lazy-routing.module';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    TodoLazyRoutingModule
  ]
})
export class TodoModule { }
