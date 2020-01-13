import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

   deleteItem(todo){
  		for(let i=0;i<todo.length;i++){
  			if (todo == this.todoArray[i]){

  			this.todoArray.splice(i,1)	
  			}
  		} 
   } 
}