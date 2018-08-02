import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  user = null;
  auth = {}; // aquí guardas la información del usuario

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  handleLogin(form) {
     this.authService.loginService(form.value)
       .subscribe(user => {
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['menu']);
    });
   }
  ngOnInit() {
  }
}
