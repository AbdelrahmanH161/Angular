import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { MainComponent } from '../main/main.component';
import { CartchiledComponent } from '../cartchiled/cartchiled.component';
import { LoginComponent } from '../login/login.component';
import { RigisterComponent } from '../rigister/rigister.component';
import { AuthGuard } from '../auth.guard';
import { ProfileComponent } from '../profile/profile.component';


let routes: Routes = [
  {path:'',component:MainComponent,
    children:[
        {path :"",redirectTo:"/product",pathMatch:"full"},
        {path:"product",component:ProductsComponent},
        {path:"cart",component:CartchiledComponent,canActivate: [AuthGuard]},
        {path:"login",component:LoginComponent},
        {path:"signUp",component:RigisterComponent},
        {path:"profil",component:ProfileComponent,canActivate: [AuthGuard]},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
