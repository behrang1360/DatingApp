import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    this.getValues();
  }

  constructor(private http: HttpClient) {}

  toggelRegForm: boolean = false;
  Values: any;

  showRegForm() {
    this.toggelRegForm = !this.toggelRegForm;
  }

  cancel(state: boolean) {
    this.toggelRegForm = state;
  }

  getValues() {
    this.http.get("http://localhost:5000/api/values").subscribe(
      Response => {
        this.Values = Response;
      },
      error => {
        console.log(error);
      }
    );
  }
}
