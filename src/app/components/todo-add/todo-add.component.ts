import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

	@Output addTodo: EventEmitter<any> = new EventEmitter();
	title:string;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
  	const todo = {
  		title: this.title,
  		completed: false
  	}

  	this.addTodo.emit(todo);
  }
}
