import { Component } from '@angular/core';
import { User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent {
  userID: number;
  user: User = new User();

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.userID = 0;
  }

  ngOnInit(): void {
    this.userID = this.route.snapshot.params['id'];

    this.userService.getUserById(this.userID).subscribe(
      (data) => {
        this.user = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.userService.updateUser(this.userID, this.user).subscribe(
      (data) => {
        this.goToUserList();
      },
      (error) => console.log(error)
    );
  }

  goToUserList() {
    this.router.navigate(['/show-all-users']);
  }
}