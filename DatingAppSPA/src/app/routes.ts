import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MessagesComponent } from "./messages/messages.component";
import { MemberListComponent } from "./member/member-list/member-list.component";
import { ListsComponent } from "./lists/lists.component";
import { AuthGuard } from "./_guards/auth.guard";
import { UserDetailComponent } from "./member/user-detail/user-detail.component";
import { UserDetailResolver } from "./_resolvers/user-detail.resolver";
import { MemberListResolver } from "./_resolvers/member-list.resolver";

export const routesApp: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "",
    runGuardsAndResolvers: "always",
    canActivate: [AuthGuard],
    children: [
      { path: "messages", component: MessagesComponent },
      { path: "lists", component: ListsComponent },
      {
        path: "members",
        component: MemberListComponent,
        resolve: { users: MemberListResolver }
      },
      {
        path: "members/:id",
        component: UserDetailComponent,
        resolve: { user: UserDetailResolver }
      }
    ]
  },

  { path: "**", redirectTo: "", pathMatch: "full" }
];
