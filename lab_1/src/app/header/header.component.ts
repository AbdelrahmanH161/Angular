import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserRegister ,UserLogin } from '../model/user';
import { AuthService } from '../service/Auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , OnChanges{
// users:UserRegister
isloged:boolean;
  constructor(private auth:AuthService ,private router:Router ) { 
    this.isloged = this.auth.isLogged()
  }
  ngOnChanges(changes: SimpleChanges): void {

  }


  ngOnInit(): void {
    this.auth.getLoggedStatus().subscribe((res)=>{
      this.isloged = res
    })
  }

  logout(){
    this.auth.logout().subscribe((res)=>{
      if(res.Data){
        this.auth.removeToken()
        this.auth.setLoggedStatus(false);
      }else
      console.log("erorr")
    })
  }
}
