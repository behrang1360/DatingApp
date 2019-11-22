import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./NavBar/NavBar.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { ErrorInterceptor } from "./services/errorInterceptor";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [ErrorInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule {}
