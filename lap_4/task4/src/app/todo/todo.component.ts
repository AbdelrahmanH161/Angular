import { Component, OnInit } from '@angular/core';
import { Itodo } from '../model/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo?:Itodo[];
  constructor(private TodoService:TodoService) { }

  ngOnInit(): void {
    this.FetchData();}
  FetchData(){
    this.TodoService.getAll().subscribe(
      (res)=>{
        console.log(res.Data);
        this.todo=res.Data;
      }
    )
  }

  Delete(ID:number){
    this.TodoService.Deleteone(ID).subscribe(
      (value)=>{
        console.log(ID)
        console.log(value)
        this.FetchData()
  })
}
}
