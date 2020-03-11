import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
	todoUrl:string = 'http://dev.vn/api/'

  constructor(private http:HttpClient) { }

  //get todos
  getTodos():Observable<Todo[]> {
  	return this.http.get<Todo[]>(`${this.todoUrl}todo`);
  }

  // toggle complete
  toggleComplete(todo:Todo):Observable<any> {
  	const url = `${this.todoUrl}complete/${todo.id}`;
		return this.http.put<Todo>(url, todo, httpOptions);
  }

  // delete todo
  deleteTodo(todo:Todo):Observable<Todo> {
    const url = `${this.todoUrl}remove/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  // add todo
  addTodo(todo:Todo):Observable<Todo> {
    const url = `${this.todoUrl}add`;
    return this.http.post<Todo>(url, todo, httpOptions);
  }

}
