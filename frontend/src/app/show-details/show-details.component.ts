import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css'],
})
export class ShowDetailsComponent {
  userID: number;
  user!: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.userID = 0;
  }

  ngOnInit(): void {
    this.userID = this.route.snapshot.params['userID'];

    this.user = new User();
    this.userService.getUserById(this.userID).subscribe((data) => {
      this.user = data;
    });
  }
}
