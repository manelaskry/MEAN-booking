import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private AuthURL = 'http://localhost:8800/api/auth/';
  private readonly TOKEN_KEY = 'userToken';

  constructor(private httpClient: HttpClient) { }

  login(
    username: string,
    password: string
  ): Observable<{ token: string; otherDetails: any }> {
    return this.httpClient
      .post<{ token: string; otherDetails: any }>(this.AuthURL + 'login', {
        username,
        password,
      })
      .pipe(
        tap((response) => {
          console.log('Login response:', response.otherDetails);
          if (response) {
            localStorage.setItem("user",response.otherDetails)
          } else {
            
            console.error('Login response missing token or user info');
          }
        })
      );
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  signup(user: any): Observable<Object> {
    return this.httpClient.post(`${this.AuthURL + 'register'}`, user);
  }

}
