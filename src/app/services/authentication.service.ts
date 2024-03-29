import { AppComponent } from './../app.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';



export class Login{
  constructor(
       public user:string,
       public passwd:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(
    private httpClient:HttpClient,) {      }

    public login(Login) { 
    
      alert(JSON.stringify(Login))
      return this.httpClient.post<Login>("http://localhost:8095/employees/logincheck", Login).pipe(
       map(
         userData => {    
          sessionStorage.setItem('username',Login.user);       
          return userData;          
         
          
         }
       )
    );
  }
   
    
    isUserLoggedIn() {
      let user = sessionStorage.getItem('username')
      console.log(!(user === null))
      return !(user === null)
    }
  
    logOut() {
      sessionStorage.removeItem('username')
    }
  }

    
  

  