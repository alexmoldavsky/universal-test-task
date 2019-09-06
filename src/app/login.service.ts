import { Injectable, EventEmitter } from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser  } from "angularx-social-login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLogined: boolean = false;
  private user: SocialUser;

  authChanged = new EventEmitter<boolean>();

  constructor(private authService: AuthService) { 

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.isLogined = (user != null);
      this.authChanged.emit(this.isLogined);
    });

  }

  getIsLogined(): boolean {
    return this.isLogined;
  }

  getUser() {
    return this.user;
  }
 
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

 
  signOut(): void {
    this.authService.signOut();
  }
}
