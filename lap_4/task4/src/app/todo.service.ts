import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Itodo, Itodoadd } from './model/todo';
import { APIResponse } from './model/Apiveiw';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http:HttpClient) { }
  getAll(): Observable<APIResponse> {
    return this.http.get<APIResponse>("https://api.mohamed-sadek.com/Task/Get")
  }
  Deleteone(ID:number): Observable<APIResponse> {
    return this.http.delete<APIResponse>("https://api.mohamed-sadek.com/Task/Delete?id="+ID)
  }
  create(Title:Itodoadd): Observable<APIResponse>{
    return this.http.post<APIResponse>("https://api.mohamed-sadek.com/Task/POST",Title)
  }

}
