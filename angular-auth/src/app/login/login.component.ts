import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login_status: any;


  constructor(private _AuthserviceService: AuthserviceService) {}

  loginForm = new FormGroup({
    userName: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });

  loginAction(): void {
    console.warn(this.loginForm.value);
    this.login_status = this._AuthserviceService.login(this.loginForm.get("userName")!.value , this.loginForm.get("password")!.value);
  }
  

  ngOnInit(): void {
  }

}
