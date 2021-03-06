import {
  BrowserModule,
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG
} from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { routesApp } from "./routes";
import { NgxGalleryModule } from "ngx-gallery";
import { BsDatepickerModule } from 'ngx-bootstrap';
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { AuthService } from "./_services/auth.service";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { ErrorInterceptorProvider } from "./_services/error.interceptor";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { MemberListComponent } from "./member/member-list/member-list.component";
import { ListsComponent } from "./lists/lists.component";
import { MessagesComponent } from "./messages/messages.component";
import { RouterModule } from "@angular/router";
import { MemberCardComponent } from "./member/member-card/member-card.component";
import { JwtModule } from "@auth0/angular-jwt";
import { UserDetailComponent } from "./member/user-detail/user-detail.component";
import { TabsModule } from "ngx-bootstrap/tabs";
import { UserDetailResolver } from "./_resolvers/user-detail.resolver";
import { MemberListResolver } from "./_resolvers/member-list.resolver";
import { UserEditComponent } from "./member/user-Edit/user-Edit.component";
import { UserEditResolver } from './_resolvers/user-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes';

const getToken = function() {
  return localStorage.getItem("token");
};

export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    pinch: { enable: false },
    rotate: { enable: false }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    ListsComponent,
    MessagesComponent,
    MemberCardComponent,
    UserDetailComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(routesApp),
    NgxGalleryModule,
  
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken,
        whitelistedDomains: ["localhost:5000"],
        blacklistedRoutes: ["http://localhost:5000/api/auth"]
      }
    })
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    UserDetailResolver,
    MemberListResolver,
    UserDetailResolver,
    UserEditResolver,
    PreventUnsavedChanges,
    { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
