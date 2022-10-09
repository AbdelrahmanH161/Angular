import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Itodoadd } from '../model/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todocreate',
  templateUrl: './todocreate.component.html',
  styleUrls: ['./todocreate.component.css']
})
export class TodocreateComponent implements OnInit {
  addtask:FormGroup;
  todoadd?:Itodoadd;
  constructor(private todoserve:TodoService , private router:Router ) { 
    this.addtask= new FormGroup({
      Title:new FormControl(this.todoadd?.Title??"", [Validators.required])
})
  }

  ngOnInit(): void {
  }
  add(){
    this.todoadd = this.addtask.value as Itodoadd
    this.todoserve.create(this.todoadd).subscribe(
      {
        next:(value) =>{
          console.log(value)
          this.router.navigateByUrl("/todo")
        },
        error:(error)=>{
          console.log(error)
        }
      }
    )
  }

}
