import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private readonly apiUrl = 'http://localhost:3000'; // Remplace par ton URL d'API
  private readonly tokenKey = 'authToken';
  private readonly isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private readonly http: HttpClient, private readonly router: Router) {}

  login( email: string, password: string ): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, {email,password}).pipe(
      tap((response) => {
        this.storeToken(response.token);
        this.isAuthenticatedSubject.next(true);
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private storeToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }
}
