import { Component, Output } from '@angular/core';
import { LoginService } from 'services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  credentials={
    userName:"",
    password:""
  };

  constructor(private loginService:LoginService){
  }

  onSubmit(){
    if(this.credentials.userName && this.credentials.password){

      this.loginService.doLogin(this.credentials)
        .subscribe(
          (response:any)=>{
            this.loginService.loginUser(response.token);
            window.location.href="/";
            
          },
          error=>{
            console.log(error);
            
          }
          
        )

      // console.warn(this.credentials);
    }
    else{
      console.log("Fields are not valid!!");
    }
  }

}
