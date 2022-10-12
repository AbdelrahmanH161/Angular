import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegister } from '../model/user';
import { AuthService } from '../service/Auth.service';

@Component({
  selector: 'app-rigister',
  templateUrl: './rigister.component.html',
  styleUrls: ['./rigister.component.css']
})
export class RigisterComponent implements OnInit {
  userform!: FormGroup;
  constructor(private auth:AuthService ,private router:Router ) {
    this.userform = new FormGroup({
      Name:new FormControl("",[Validators.required]),
      UserName:new FormControl("",[Validators.required]),
      Password:new FormControl("",[Validators.required]),});
      
  }
  ngOnInit(): void {
    
  }
  adduser(){
    // this.users = this.userform
    let users :UserRegister = this.userform.value as UserRegister
    this.auth.register(users).subscribe((response)=>{
      if(response.Data) {
        this.router.navigateByUrl("/login");
        console.log("ssssssss")
      }
      else console.log(response , users) 
    }
    )
  }
  }
