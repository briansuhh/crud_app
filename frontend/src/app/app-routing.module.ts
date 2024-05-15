import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
  { path: 'show-all-users', component: UserListComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'updating-by-id/:userID', component: UpdateUserComponent },
  { path: 'details-of-user/:userID', component: ShowDetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: AdminLoginComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
