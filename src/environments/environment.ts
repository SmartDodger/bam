// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBK-49aPSKBoXCgF3NlGbwwi3jz7hyk8UA',
    authDomain: 'bestalienmind.firebaseapp.com',
    databaseURL: 'https://bestalienmind.firebaseio.com',
    projectId: 'bestalienmind',
    storageBucket: 'bestalienmind.appspot.com',
    messagingSenderId: '871780810355'
  }
};
