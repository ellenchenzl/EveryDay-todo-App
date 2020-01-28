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
     console.log(typeof todo)
     console.log('todo', todo)
     console.log('todo.length', todo.length)

  		for(let i=0;i<todo.length;i++){
        console.log('in for loop and current i =',i)
  			if (todo == this.todoArray[i]){
          console.log('if (todo == this.todoArray[i]){')
  			  this.todoArray.splice(i,1)
  			}
        console.log('end of i =',i)
  		}
      console.log('End of deleteItem')
   } 
}