import { Component, OnInit } from '@angular/core';
import { SuccessfulLoginService } from '../services/successful-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-powerbiresult',
  templateUrl: './powerbiresult.component.html',
  styleUrls: ['./powerbiresult.component.css'],
})
export class PowerbiresultComponent implements OnInit {
  constructor(
    private successfulLogin: SuccessfulLoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.successfulLogin.getLoginStatus() == 'notDone') {
      this.router.navigate(['/login']);
    }
  }
}
