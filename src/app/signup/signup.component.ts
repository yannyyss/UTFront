import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AuthService]
})
export class SignupComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  handleSignUp(form) {
    console.log(form.value);
    this.authService.signupService(form.value)
    .subscribe(user => console.log(user));
    this.router.navigate(['menu']);
  }
  ngOnInit() {
  }

}
