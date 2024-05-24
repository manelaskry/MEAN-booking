import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());
  private AuthURL = 'http://localhost:8800/api/auth/';
  private readonly TOKEN_KEY = 'userToken';

  constructor(private httpClient: HttpClient) { }

  login(
    username: string,
    password: string
  ): Observable<{ token: string; userId: string }> {
    return this.httpClient
      .post<{ token: string; userId: string }>(this.AuthURL + 'login', {
        username,
        password,
      }, { withCredentials: true })
      .pipe(
        tap((response) => {
          console.log('Login response:', response.userId);
          if (response) {
            localStorage.setItem(this.TOKEN_KEY,response.userId)
            this.loggedIn.next(true);
          } else {
            
            console.error('Login response missing token or user info');
          }
        })
      );
     
  }
  private hasToken(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }


  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  
  isLoggedIn(): boolean {
    const token = this.getToken();
    
    return !!token;
  }

  signup(user: any): Observable<Object> {
    return this.httpClient.post(`${this.AuthURL + 'register'}`, user);
  }
  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    window.location.reload();

  }

}
