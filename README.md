# Studentsadmin

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## How to deploy this app on heroku

# step one go to package.jon and add dependencies

"@angular/compiler-cli": "^6.0.3",
    "@angular-devkit/build-angular": "~0.6.8",
    "typescript": "~2.7.2",
    "@angular/cli": "~6.0.8",
    
# step two add
"name": "studentsadmin",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "node server.js", == this line should replace
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "postinstall": "ng build --prod" == this line should add 

# step three add file server.js

Run 'npm install -s express'

# step four

push file to heroku
and open it.
