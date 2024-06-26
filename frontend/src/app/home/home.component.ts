import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
})
export class HomeComponent {
  constructor(private router: Router) {}
  goToUserList() {
    this.router.navigate(['/show-all-users']);
  }
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/2000/600`);
}
