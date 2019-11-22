import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, filter } from "rxjs/operators";
import { Subscription, Observable, observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthService implements OnInit {
  ngOnInit(): void {}

  baseUrl: string = "http://localhost:5000/api/auth/";

  constructor(private http: HttpClient) {}

  model: any = null;

  register(model: any) {
    return this.http.post(this.baseUrl + "register", model);    
   }


  login(model: any) {
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json"
    });

    return this.http
      .post(this.baseUrl + "login", model, { headers: headers })
      .pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            localStorage.setItem("token", user.token);
            this.model = user;
          }
        })
      );
  }
}
