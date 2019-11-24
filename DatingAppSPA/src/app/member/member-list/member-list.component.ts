import { Component, OnInit } from "@angular/core";
import { UserService } from "../../_services/user.service";
import { User } from "../../_models/user";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-member-list",
  templateUrl: "./member-list.component.html",
  styleUrls: ["./member-list.component.css"]
})
export class MemberListComponent implements OnInit {
  constructor(private userService: UserService,private route:ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.users = data['users'];
    });
    //this.getUsers();    
  }

  users: User[];

  getUsers() {
    this.userService.getUsers().subscribe(arg => (this.users = arg));
  }
}
