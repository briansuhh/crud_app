import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { DomSanitizer } from '@angular/platform-browser';

import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrackinglogListComponent } from './trackinglog-list/trackinglog-list.component';
import { AddTrackinglogComponent } from './add-trackinglog/add-trackinglog.component';
import { UpdateTrackinglogComponent } from './update-trackinglog/update-trackinglog.component';
import { TrackinglogDetailsComponent } from './trackinglog-details/trackinglog-details.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { UpdateDriverComponent } from './update-driver/update-driver.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';

const svgIcons = ['car'];

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,

    UserListComponent,
    AddUserComponent,
    UpdateUserComponent,
    UserDetailsComponent,

    TrackinglogListComponent,
    AddTrackinglogComponent,
    UpdateTrackinglogComponent,
    TrackinglogDetailsComponent,
    DriverListComponent,
    AddDriverComponent,
    UpdateDriverComponent,
    DriverDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    HomeComponent,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    svgIcons.forEach((iconName) => {
      matIconRegistry.addSvgIcon(
        iconName,
        domSanitizer.bypassSecurityTrustResourceUrl(
          `assets/icons/${iconName}.svg`
        )
      );
    });
  }
}
