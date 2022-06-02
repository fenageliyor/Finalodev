import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthinterceptorService implements HttpInterceptor {
  private accessPointUrl = 'https://localhost:44399/api/sorular';
  private quizUrl = 'https://localhost:44399/api/sinavlar';
  private accountUrl = 'https://localhost:44399/api/hesabim';
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const token = window.localStorage.getItem('token');
    const authRequest = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    console.log(req);
    return next.handle(authRequest);
  }
}
