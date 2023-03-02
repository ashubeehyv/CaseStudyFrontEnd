import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private loginService:LoginService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        let newRequest=req;
        let token = this.loginService.getToken();

        // console.warn(req);

        // console.log("Interceptor", token);

        if(token){
            newRequest = newRequest.clone({setHeaders:{Authorization:`Bearer ${token}`}});
            // console.warn(newRequest);
        }
        return next.handle(newRequest);
    }

}