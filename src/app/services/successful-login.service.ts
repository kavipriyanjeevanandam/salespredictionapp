import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SuccessfulLoginService {
  constructor() {}

  // Service to constantly check whether the user logged in before accessing each page
  setLoginStatus(status: string): void {
    sessionStorage.setItem('login', status);
  }
  getLoginStatus(): string | null {
    return sessionStorage.getItem('login');
  }
}
