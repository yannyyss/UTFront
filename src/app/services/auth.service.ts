import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:3000/'; // Este cambia cuando ya esté en heroku

  constructor(private http: Http) {}

  signupService(auth) {
    return this.http.post(this.url + 'signup', auth)
    .pipe(map((res: Response) => {
      res.json();
    }));
  }

  loginService(auth){
    return this.http.post(this.url + 'login', auth)
    .pipe(map((res: Response) => {
      res.json();
    }));
  }
}
