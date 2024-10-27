import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthenticatorService } from './authenticator.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticatorService);
  const router = inject(Router);

  console.log('User connected status:', authService.isConnected());

  if (!authService.isConnected()) {
    router.navigate(['/home']);
    return false;
  }
  
  return true;
};

