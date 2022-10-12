import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { UserLogin, UserRegister ,APIResponse} from '../model/user';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  logged:BehaviorSubject<boolean>
  constructor(private http: HttpClient) {
    this.logged = new BehaviorSubject<boolean>(this.isLogged())
    this.setLoggedStatus(this.isLogged())
  }

  setLoggedStatus(status: boolean) {
    this.logged.next(status)
  }

  getLoggedStatus() {
    return this.logged.asObservable()
  }

  login(user: UserLogin) {
    return this.http.post<APIResponse<string>>(`https://api.mohamed-sadek.com/User/Login`, user)
  }

  register(user: UserRegister) {
    // console.log(user)
    return this.http.post<APIResponse<boolean>>(`https://api.mohamed-sadek.com/User/POST`, user)
  }

  logout() {
    return this.http.post<APIResponse<boolean>>(`https://api.mohamed-sadek.com/User/logout`,{})
  }

  isLogged(): boolean {
    if (localStorage.getItem("token") == null) return false
    else return true
  }

  setToken(token: string) {
    localStorage.setItem("token", token)
  }

  getToken(): string | null {
    return localStorage.getItem("token")
  }

  removeToken() {
    localStorage.removeItem("token")
  }

}
