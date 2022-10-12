import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../Auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth :AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      const res = request.clone({
      headers: request.headers.set('token', this.auth.getToken() ?? "")
      
    }
    
    )
    console.log(request)
    return next.handle(res);
  }
}
