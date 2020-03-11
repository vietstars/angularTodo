import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'todo list';

  constructor(){
  	this.title = 'Ben';
  	this.changeTitle('Thai Huy Binh');
  }

  changeTitle(title:string):void{
  	this.title = title;
  }
}
