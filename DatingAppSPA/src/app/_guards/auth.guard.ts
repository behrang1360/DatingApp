import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { AuthService } from "../_services/auth.service";
import { AlertifyService } from "../services/alertify.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private rout: Router,
    private alertify: AlertifyService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isLoggedIn()) {
      {
        return true;
      }
    } else {
      {
        this.alertify.error("First Loggin ");
        this.rout.navigate(['/home']);
        return false;
      }
    }
  }
}
