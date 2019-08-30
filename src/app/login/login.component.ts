import { Component, OnInit } from '@angular/core';
import { Auth0Service } from '../services/auth0/auth0.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth0: Auth0Service,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth0.parseHash((error, auth0Data) => {
      if (error) {
        console.error(error)
      }

      if (auth0Data) {
        this.router.navigateByUrl('/home');
      }
    });
  }

  public ingresar() {
    this.auth0.login(window.location.href);
  }
}
