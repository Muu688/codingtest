// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false
// };
export const environment = {
  firebase: {
    apiKey: "AIzaSyA3VH1aMmv5rwZdonbCkmh34VWELR0JS1c",
    authDomain: "codetest-jvb.firebaseapp.com",
    //databaseURL: "YOUR_DATABASE_URL",
    projectId: "codetest-jvb",
    storageBucket: "codetest-jvb.appspot.com",
    messagingSenderId: "491058804153",
    appId: "1:491058804153:web:9d9ce1167c01dbee143268"
  },
  production: false,
  apiurl: "http://localhost:3000/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
// https://angular-templates.io/tutorials/about/firebase-authentication-with-angular