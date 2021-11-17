// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { domain, clientId } from '../../auth_config.json';

export const environment = {
  production: false,
  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin,
  },
  firebaseConfig: {
    apiKey: "AIzaSyBfRJsndqO1ESOHu6fRUAEZ8SEnaLQbat4",
    authDomain: "vegticaldb.firebaseapp.com",
    databaseURL: "https://vegticaldb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "vegticaldb",
    storageBucket: "vegticaldb.appspot.com",
    messagingSenderId: "375056728121",
    appId: "1:375056728121:web:fe4be6a0c50c9522170de8",
    measurementId: "G-MFEL4F9JWK"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
