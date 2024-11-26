import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  avatar = "";
  isRegister = false;
  constructor(private fb: NonNullableFormBuilder, private readonly router: Router) { 
    router.events.subscribe(() => {
      if (router.url.includes('login')) {
        this.isRegister = false;
      } else {
        this.isRegister = true;
      }
    });
  }

  validateForm = this.fb.group({
    avatar: this.fb.control(''),
    username: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
    remember: this.fb.control(true)
  });

  submitForm(): void {
    console.log('submit', this.validateForm.value);
  }

  
}
