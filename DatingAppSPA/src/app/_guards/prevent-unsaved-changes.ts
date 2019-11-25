import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { UserEditComponent } from "../member/user-Edit/user-Edit.component";

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<UserEditComponent> {
  canDeactivate(component: UserEditComponent) {
    if (component.editForm.dirty) return confirm("Are you sure to leave");
    else return true;
  }
}
