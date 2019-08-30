import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';
import { environment } from '@app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Auth0Service {

  public auth0 = new auth0.WebAuth({
    clientID: environment.auth0.clientID,
    domain: environment.auth0.domain,
    responseType: environment.auth0.responseType,
    scope: environment.auth0.scope
  });

  constructor() { }

  public login(redirectUri): void {
    this.auth0.authorize({
      redirectUri: redirectUri,
    });
  }

  public parseHash(callback) {
    return this.auth0.parseHash(callback);
  }

  public logout() {
    this.auth0.logout({
      returnTo: environment.returnUrl,
      clientID: environment.auth0.clientID
    });
  }
}
