import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }
  getTodo():Observable<Todo[]> {
    //return obervables of todos
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5');

  }
  deleteTodo(el:Todo){
    return this.http.delete<Todo[]>('https://jsonplaceholder.typicode.com/todos/'+el.id,httpOptions);

  }
  addTodo(el:Todo){
    return this.http.post<Todo[]>('https://jsonplaceholder.typicode.com/todos/',el,httpOptions);
  }
  toggleCompleted(todo: Todo) {
    const url = `https://jsonplaceholder.typicode.com/todos/${todo.id}`;
    return this.http.put(url, todo,httpOptions);
  }
}
