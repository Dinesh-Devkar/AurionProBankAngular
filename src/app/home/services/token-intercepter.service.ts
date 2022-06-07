import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenIntercepterService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token=localStorage.getItem('token');
    console.log("the Token Is : ",token);
    let jwtToken=req.clone({
      setHeaders:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':"Bearer "+token
      }
    })
    return next.handle(jwtToken);
  }
}
