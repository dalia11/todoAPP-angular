import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoServices: TodoService) { } //use any method in it here

  ngOnInit(): void {
    this.todoServices.getTodo()
      .subscribe((data: Todo[]) => this.todos = data);
  }
  deleteTodo(el:Todo){
    this.todos = this.todos.filter(t => t.id != el.id)
    this.todoServices.deleteTodo(el).subscribe()
  }
  addTodo(el:Todo){
    this.todos.push(el);
    this.todoServices.addTodo(el).subscribe()
  }
}
