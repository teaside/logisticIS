import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService
  ) {}

  ngOnInit() {}
  openCarsPage() {
    this.router.navigate(['cars'], { relativeTo: this.route });
  }
  changeAuthStatus(status: string) {
    if (status === 'login') {
      this.auth.login();
    } else {
      this.auth.logout();
    }
  }
}
