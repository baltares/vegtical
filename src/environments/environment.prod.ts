import { domain, clientId } from '../../auth_config.json';

export const environment = {
  production: true,
  auth: {
    domain,
    clientId,
    // redirectUri: window.location.origin,
    redirectUri: 'https://baltares.github.io/vegtical/#/home',
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
