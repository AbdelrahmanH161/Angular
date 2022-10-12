import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from '../model/user';
import { AuthService } from '../service/Auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform!:FormGroup;
  
  constructor(private auth:AuthService ,private router:Router) { 
    
      this.loginform = new FormGroup({
        UserName:new FormControl("",[Validators.required]),
        Password:new FormControl("",[Validators.required]),
      })
  }

  ngOnInit(): void {

  }

  login(){
    let user:UserLogin = this.loginform.value as UserLogin
    // console.log(user);
    this.auth.login(user).subscribe((response)=>{
      // console.log(response.Message)
      if(response.Success){
        // console.log(response.Data)
        this.auth.setToken(response.Data);
        this.auth.setLoggedStatus(true);
        this.router.navigateByUrl("/product")
      }
      else console.log(response)
    })
  }
}
