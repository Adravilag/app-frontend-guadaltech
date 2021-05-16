# Guadaltech Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Documentación

## Propuesta
La SPA (o Aplicación de una Simple Página) tendrá un diseño para trabajar con dos servicios esenciales, dichos servicios estarán diseñados para los becarios y personas que trabajan en GuadalTech. He hecho elección de Node.js para trabajar en la parte backend y Angular para la parte frontend, ya que ambas tecnologías son los que más conocimientos tengo para realizar la propuesta de la aplicación.

## Objetivos Principales
Como objetivo del desarrollo de la aplicación, será necesario garantizar los siguientes puntos:
* Hacer una página en la que muestre un listado de los becarios que trabajan en GuadalTech
* Crear un **API REST** con Node.js y para ello crear la entidad Personas, dichas personas trabajan para GuadalTech y tendrá los siguientes atributos: _nombre_ (string), _apellidos_(string), _email_  (string), ~_password_  (string)~, ~_role_ (string)~, ~_img_ (string)~, horario (string), puesto (string) y salario (number); los campos como email, password y role tendrían sentido en el futuro si dentro del plazo se consigue lograr hacer los dos servicios en su debido tiempo, con la posibilidad de autentificar los usuarios y poder gestionar tanto los becarios como las personas registradas. Además, toda la información se almacenará a una base de datos no relacional (MongoDB)
* Hacer una aplicación con Angular con la posibilidad de listar los becarios y personas.

## Objetivos Secundarios
* CRUD completo tanto para Personas y Becarios
* ~Buscar Personas y Becarios por buscador~
* Lograr que la aplicación de Angular sea lo más óptima posible, necesidad de no volver a reutilizar el mismo código
* ~Sistema de Login/Registro~
* ~Sistema de Identificación por Token y acceso a páginas por roles~
* Paginación en listados de los datos obtenidos de _Becarios_ y _Personas_ tanto en Node.JS como en Angular
* ~Pruebas unitarias y de integración~

## Objetivos Completados
* Diseño sencillo y elegante
* Listado de Becarios y Personas funcionando a partir de la API REST creado para Personas
* CRUD para Becarios y Personas (con la excepción de crear una nueva Persona, ya que lo ideal sería crear una persona a partir de una página de registro y no en el panel)
* Paginación en listados de los datos obtenidos de _Becarios_ y _Personas_ tanto en Node.JS como en Angular

## Modelos de datos
El modelo de **Becario** consta con los siguientes atributos:
* **nombre**: string
* **apellidos**: string
* **puesto**: string
* **horario**: string
* **responsables**: string[]

El modelo de **Persona** consta con los siguientes atributos:
* **nombre**: string
* **apellidos**: string
* **email**: string
* **puesto**: string
* **horario**: string
* **salario**: number

# Guía de uso
En el navegador de la aplicación podrás acceder a distintas rutas para mostrar el listado de Personas y Becarios.
* En Personas, podrás ver un listado de todas las personas disponibles en una tabla paginada (máximo de 10) con toda la información con la posibilidad de actualizar los datos y eliminar la persona elegida sin necesidad de cargar una nueva página. Se ha tenido en cuenta realizarlo de esta manera por el propósito de hacer un panel para poder manipular los datos a partir de una persona con los privilegios de administración. Además de dar una otra perspectiva del que se podrá apreciar con el listado de Becarios.
* En Becarios, la información no es editable pero sí es posible editar el becario seleccionado a partir del icono de editar, en la columna de Acciones. Por otra parte, en la columna responsables, podrás acceder al perfil de la persona responsable asignado para dicho becario. Al igual que Personas también tiene la acción de eliminar el Becario desde la fila correspondiente de la tabla.

En el momento de edicar el becario, se tiene en cuenta las siguientes **validaciones**:

* **Nombre**: Debe tener entre 2 y 15 caracteres.
* **Apellidos**: Debe tener entre 2 y 30 caracteres.
* **Puesto**: Es obligatorio
* **Horario**: Es obligatorio
* **Responsables**: Es obligatorio y debe tener asignado como máximo 5.
