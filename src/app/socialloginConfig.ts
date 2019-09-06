import {
    AuthServiceConfig,
    GoogleLoginProvider
  } from 'angularx-social-login';
  
  export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig([
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("722668334659-7270s91a3l1lm22vpvi0b95fl8u7lan3.apps.googleusercontent.com")
      }
    ]);
  
    return config;
  }