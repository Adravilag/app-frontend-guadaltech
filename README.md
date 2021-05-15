# Guadaltech Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.9.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Documentación

## Propuesta
La SPA (o Aplicación de una Simple Página) tendrá un diseño para trabajar con dos servicios esenciales, dichos servicios estarán diseñados para los becarios y personas que trabajan en GuadalTech. He hecho elección de Node.js para trabajar en la parte backend y Angular para la parte frontend, ya que ambas tecnologías son los que más conocimientos tengo para realizar la propuesta de la aplicación.

## Objetivos Principales
Como objetivo del desarrollo de la aplicación, será necesario garantizar los siguientes puntos:
* Hacer una página en la que muestre un listado de los becarios que trabajan en GuadalTech
* Crear un **API REST** con Node.js y para ello crear la entidad Personas, dichas personas trabajan para GuadalTech y tendrá los siguientes atributos: _nombre_ (string), _apellidos_(string), _email_  (string), _password_  (string), _role_ (string), _img_ (string); los campos como email, password y role tendrán sentido en el futuro si dentro del plazo se consigue lograr hacer los dos servicios en su debido tiempo, con la posibilidad de autentificar los usuarios y poder gestionar tanto los becarios como las personas registradas. Además, toda la información se almacenará a una base de datos no relacional (MongoDB)
* Hacer una aplicación con Angular con la posibilidad de listar los becarios y personas.

# Objetivos Secundarios
* CRUD completo tanto para Personas y Becarios
* Buscar Personas y Becarios por buscador
* Lograr que la aplicación de Angular sea lo más óptima posible, necesidad de no volver a reutilizar el mismo código
* Sistema de Login/Registro
* Sistema de Identificación por Token y acceso a páginas por roles
* Pruebas unitarias y de integración
