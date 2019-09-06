import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userLogoPath: string = './../../assets/avaDef.png';
  userName: string = 'Anonimus';
  loginAction: string = 'Login';


  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.authChanged.subscribe(
      (logged: boolean) => {
        if (logged) {
          let user = this.loginService.getUser();
          this.userName = user.name;
          this.userLogoPath = user.photoUrl;
          this.loginAction = 'Logout';
        } else {
          this.userName = 'Anonimus';
          this.userLogoPath = './../../assets/avaDef.png';
          this.loginAction = 'Login';
        }
      }
    );
  }

  onLogin() {
    if (!this.loginService.getIsLogined()) {
      this.loginService.signInWithGoogle() 
    } else   
      this.loginService.signOut();
      
  }

}
