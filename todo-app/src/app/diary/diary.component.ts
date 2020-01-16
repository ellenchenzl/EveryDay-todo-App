import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	}

	
   todoArray=[] ;

   todo;

   addTodo(value){    
   if (value !=""){
   		this.todoArray.push(value)  
   		}
   else{
   		alert(" List cannot be Empty!")
   		}
   }

}
