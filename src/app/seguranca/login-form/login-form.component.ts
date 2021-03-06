import { Title } from '@angular/platform-browser';
import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Login');
  }

  login(email: string, senha: string) {
    this.authService.login(email, senha).then(() => {
      this.router.navigate(['/lancamentos']);
    });
  }

}
