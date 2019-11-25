import { Component, OnInit, ViewChild, HostListener } from "@angular/core";
import { RouterLinkActive, ActivatedRoute } from "@angular/router";
import { User } from "src/app/_models/user";
import { AlertifyService } from "src/app/services/alertify.service";
import { NgForm } from "@angular/forms";
import { UserService } from "src/app/_services/user.service";
import { AuthService } from "src/app/_services/auth.service";

@Component({
  selector: "app-user-Edit",
  templateUrl: "./user-Edit.component.html",
  styleUrls: ["./user-Edit.component.css"]
})
export class UserEditComponent implements OnInit {
  user: User;

  @ViewChild("editForm", { static: true }) editForm: NgForm;
  @HostListener("window:beforeunload", ["$event"])
  unloadNotification($event: any) {
    if (this.editForm.dirty) $event.returnValue = true;
  }

  constructor(
    private route: ActivatedRoute,
    private alertify: AlertifyService,
    private userService: UserService,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data["user"];
    });
  }
  updateUser() {
    this.userService
      .updateUser(+this.authService.decodeToken.nameid, this.user)
      .subscribe(
        () => {
          this.editForm.reset(this.user);
          this.alertify.message("Successfuly saved");
        },
        error => {
          this.alertify.error(error);
        }
      );
  }
}
