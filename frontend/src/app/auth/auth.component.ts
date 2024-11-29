import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  isRegister = false;

  constructor(
    private readonly fb: NonNullableFormBuilder,
    private readonly router: Router,
    private readonly authService: AuthService
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isRegister = this.router.url.includes('register');
      });
  }

  validateForm = this.fb.group({
    email: this.fb.control('', [Validators.required]),
    username: this.fb.control('', this.isRegister ? [Validators.required] : []),
    password: this.fb.control('', [Validators.required]),
  });

  submitForm(): void {
    if (this.validateForm.invalid) {
      return;
    }

    if (this.isRegister) {
      const { email, username, password } = this.validateForm.value;
      if (email && username && password) {
        this.authService.register(email, username, password).subscribe({
          next: () => {
            this.router.navigate(['/home']);
          },
          error: (err) => console.error('Erreur de connexion', err),
        });
      }
    } else {
      const { email, password } = this.validateForm.value;
      if (email && password) {
        this.authService.login(email, password).subscribe({
          next: () => {
            this.router.navigate(['/home']);
          },
          error: (err) => console.error('Erreur de connexion', err),
        });
      }
    }
  }
}
