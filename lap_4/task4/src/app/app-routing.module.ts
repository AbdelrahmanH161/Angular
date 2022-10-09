import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { TodoComponent } from './todo/todo.component';
import { TodocreateComponent } from './todocreate/todocreate.component';
import { TodoupdataComponent } from './todoupdata/todoupdata.component';


let routes: Routes = [
  {path:'',component:MainlayoutComponent,
    children:[
        {path :"",redirectTo:"/todo",pathMatch:"full"},
        {path:"todo",component:TodoComponent},
        {path:"create",component:TodocreateComponent},
        {path:"updata",component:TodoupdataComponent}
    ]}
    ,
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
