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

  goToUser() {
    console.log(this.EnteredID);
    this.router.navigate(['details-of-user', this.EnteredID]);
  }

  getUsers() {
    this.userService.getUsersList().subscribe((data) => {
      this.users = data;
    });
  }

  updateUser(id: number) {
    this.router.navigate(['updating-by-id', id]);
  }

  deleteUser(id: number) {
    if (confirm('Are you sure to delete User ID: ' + id)) {
      this.userService.deleteUser(id).subscribe((data) => {
        console.log(data);
        this.getUsers();
      });
    }
  }

  detailsOfUser(id: number) {
    this.router.navigate(['details-of-user', id]);
  }
}
