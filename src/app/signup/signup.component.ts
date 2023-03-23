import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'services/login.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupData={
    name:"",
    email:"",
    password:""
  };
  constructor(private loginService: LoginService, private router: Router){

  }

  onSubmit(){
    if(this.signupData.name && this.signupData.email && this.signupData.password){
      this.loginService.doRegister(this.signupData).subscribe(
        (response:any)=>{
          // console.warn(response);
          
          if(response.userName && response.password){
            this.loginService.doLogin(response).subscribe(
              (result:any)=>{
                this.loginService.loginUser(result.token);
                this.router.navigateByUrl("");
              },
              error=>{
                console.log(error);
              }
              
            )
            // console.log(response);

          }
          else{
            console.log("User already exist, please login");
          }

        },
        error=>{
          console.log(error);
        }
      )

    }

  }

}
