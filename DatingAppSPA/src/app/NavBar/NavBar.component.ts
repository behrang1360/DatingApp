import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/AuthService";
@Component({
  selector: "app-NavBar",
  templateUrl: "./NavBar.component.html",
  styleUrls: ["./NavBar.component.css"]
})
export class NavBarComponent implements OnInit {
  model: any = { username: "", password: "" };
  constructor(private authService: AuthService) {}

  loggedIn(): boolean {
    const token = localStorage.getItem("token");
    return !!token;
  }

  logOut() {
    localStorage.removeItem("token");
  }

  ngOnInit() {}

  public login(): void {
    this.authService.login(this.model).subscribe(
      next => {
        console.log("Login successfull");
      },
      error => {
        console.log(error);
      }
    );
  }
}
