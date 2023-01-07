import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  login(username:any, password:any){
    if (username =="test" && password =="test"){
      console.log("login successfull")

      // setting token 
      localStorage.setItem('accessToken', "TOKEN_FROM_SERVICE");
      this.router.navigate(['home'])


    }
    else{
      alert("Invalid user credentials")
    }


  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('accessToken');
    if (token) {
      return true;
    }
    else{
      return false;
    }



  }


  logout(){
  localStorage.removeItem('accessToken');
  }

  constructor(private router: Router) { }
}
