import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

import { TrackinglogListComponent } from './trackinglog-list/trackinglog-list.component';
import { AddTrackinglogComponent } from './add-trackinglog/add-trackinglog.component';
import { UpdateTrackinglogComponent } from './update-trackinglog/update-trackinglog.component';
import { TrackinglogDetailsComponent } from './trackinglog-details/trackinglog-details.component';

import { DriverListComponent } from './driver-list/driver-list.component';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { UpdateDriverComponent } from './update-driver/update-driver.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: AdminLoginComponent },
  { path: 'show-all-users', component: UserListComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'update-user/:userID', component: UpdateUserComponent },
  { path: 'user-details/:userID', component: UserDetailsComponent },

  { path: 'show-all-trackinglogs', component: TrackinglogListComponent },
  { path: 'add-trackinglog', component: AddTrackinglogComponent },
  { path: 'update-trackinglog/:trackingID', component: UpdateTrackinglogComponent },
  { path: 'trackinglog-details/:trackingID', component: TrackinglogDetailsComponent },

  { path: 'show-all-drivers', component: DriverListComponent },
  { path: 'add-driver', component: AddDriverComponent },
  { path: 'update-driver/:driverID', component: UpdateDriverComponent },
  { path: 'driver-details/:driverID', component: DriverDetailsComponent },

  
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
