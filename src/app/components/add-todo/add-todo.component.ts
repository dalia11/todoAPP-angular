import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  titles: string;
  @Output() addtodo: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  addTodo() {
    const newtodo = {
      title: this.titles,
      completed: false,
    }
    this.addtodo.emit(newtodo)
  }
}
