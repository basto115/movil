import { Cordova } from '@awesome-cordova-plugins/core';  // O el tipo correcto

declare global {
    interface Window {
      readonly cordova?: any;  // Usar `any` si no tienes el tipo `Cordova` disponible
    }
  }

export {};