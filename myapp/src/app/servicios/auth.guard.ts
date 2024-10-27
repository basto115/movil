import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthenticatorService } from './authenticator.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticatorService);
  const router = inject(Router);

  if (authService.isConnected()) {
    return true;
  } else {
    router.navigate(['/home']);
    return false;
  }
};
