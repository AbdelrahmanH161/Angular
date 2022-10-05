import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { user } from '../model/users';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
users:user[]=[]
  userform!: FormGroup;
  constructor() { 
    this.userform = new FormGroup(
      {
        username: new FormControl("", [Validators.required, Validators.minLength(5)]),
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [Validators.required]),
        cpassword: new FormControl("", [Validators.required]),
        phone: new FormControl("", [Validators.required,Validators.minLength(11)]),
      })
  }
  con:number =0;
  adduser(){
    let us:user={
      id:this.con,
      username:this.userform.value['username'],
      password:this.userform.value['password'],
      cpassword:this.userform.value['username'],
      email:this.userform.value['email'],
      phone:this.userform.value['phone'],
    }
    this.users.push(us);
    console.log(this.users);
  }
  ngOnInit(): void {
  }

}
