# Todolist

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.5.

## Development server
1.`npm i g @angular/cli`
2.`ng new angularTodo`


Run `ng serve --o` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

build models/todo
{id,title,completed}

`ng g c components/todo` build todo component first which have todo-item list
on todo-component: 
1. on init get todo list using Httpclient [rest - get] response [<id - title - completed>]
2. init deleteTodo function @autoware deleteTodo service using Httpclient [rest - delete] response <update status>
3. init addTodo function @autoware addTodo service using HttpClient [rest - post] response <id - title - completed>

`ng g c components/todo-item` build todo-item which have id - title - completed
on todo-item: change completed and remove todo by id
1. @input todo list using for update todo item upgrade todo list 
2. init toggleCompleted function @autoware toggleCompleted service using Httpclient [rest - put] response  <id - title - completed>
3. @output deleteTodo() and emit deleteTodo 

`ng g c components/todo-add`
1. ngModel title 
2. @output addTodo() and emit addTodo

`ng g s services/todo`
1. HttpClient, HttpHeaders @angular/common/http
2. Observable @rxjs
3. Rest API resource