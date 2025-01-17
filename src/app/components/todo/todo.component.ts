import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

	todos:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit(): void { 
  	this.todoService.getTodos().subscribe(todos => {
  		this.todos = todos;
  	});
  }

  deleteTodo(todo:Todo){
  	//remove UI
  	this.todos = this.todos.filter(i=>i.id!=todo.id);

  	this.todoService.deleteTodo(todo).subscribe();
  }


  addTodo(todo:Todo){
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }
}
