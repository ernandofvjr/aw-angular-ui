import { ErrorHandlerService } from './../services/error-handler.service';
import { LogoutService } from './../services/logout.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private logoutService: LogoutService,
              private errorHandle: ErrorHandlerService, private router: Router) { }

  exibindoMenu = false;

  ngOnInit() {
  }

  logout() {
    this.logoutService.logout().then(() => {
      this.router.navigate(['/login']);
    });
    // .catch (erro => {
    //   this.errorHandle.handleDefaultError(erro);
    // });
  }

  // criarNovoAcessToken() {
  //   this.authService.obterNovoAccessToken();
  // }

}
