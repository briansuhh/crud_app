import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  users: User[];
  EnteredID!: number;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.users = [];
  }

  ngOnInit(): void {
    this.getUsers();
  }

  addUser() {
    this.router.navigate(['add-user']);
  }

  goToUser() {
    console.log(this.EnteredID);
    this.router.navigate(['user-details', this.EnteredID]);
  }

  getUsers() {
    this.userService.getUsersList().subscribe((data) => {
      this.users = data;
    });
  }

  updateUser(userID: number) {
    this.router.navigate(['update-user', userID]);
  }

  deleteUser(userID: number) {
    if (confirm('Are you sure to delete User ID: ' + userID)) {
      this.userService.deleteUser(userID).subscribe((data) => {
        console.log(data);
        this.getUsers();
      });
    }
  }

  detailsOfUser(userID: number) {
    this.router.navigate(['user-details', userID]);
  }
}
