// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:3000/portal/reachus/api',
  // apiBaseUrl: 'https://6eae78d9-b888-4f18-8d8f-f152715284fa.mock.pstmn.io',
  loginUrl: 'https://gymkhana.iitb.ac.in/sso/oauth/authorize/?client_id=uIkqcEZdLGkRdIqrSVMLE0Gt3qaS73ClwoQF260A&response_type=code&scope=profile%20ldap%20send_mail'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
