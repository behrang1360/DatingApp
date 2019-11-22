import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../services/AuthService";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  @Input() valuesFormHome: any;
  @Output() cancelFromReg = new EventEmitter();
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  model: any = { username: "", password: "" };

  register() {
    this.authService.register(this.model).subscribe(
      () => {
        console.log("register was successful");
      },
      error => {
        console.log(error);
      }
    );
  }

  cancel() {
    console.log("cancel");
    this.cancelFromReg.emit(false);
  }
}
