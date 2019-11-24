# TP Biere

## Champs:
- Nom de la bière (custom Pipe pour première lettre en majuscule)                 {pipe Titre: OK}
- Type de la bière (select option: blonde, brune, etc...)
- Degré d'alcool (custom pipe pour ajouter le sugne 'degré')
- Format (custom pipe pour ajouter 'cl')
- Prix (Pipe pour ajouter 'Euros')                                                {pipe Euros: OK}
- URL de la photo (ou upload en localStorage)                                     {custom Pipe pour url court: OK}
- Date de création de la fiche (pipe pour formatter la date) - champs automatique {pipe format Date: OK}

## Composants:
- biere
- list-biere

# A UTILISER (OBLIGATOIRE):
- Angular Material
- Reactiv Forms
- Validator
- Custom Validator
- Pipe
- Custon Pipe

# TPAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.18.

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
