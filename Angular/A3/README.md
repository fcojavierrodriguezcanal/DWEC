# A3

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.




# **ngStyle, ngClass y ngTemplate** :sunglasses: 

#### ngStyle:

La directiva de atributo ngStyle actualiza los estilos para un elemento HTML determinado. Establece una o más propiedades de estilo, especificadas como pares clave-valor separados por dos puntos. La clave es un nombre de estilo y el valor es una expresión a evaluar o valor a asignar.

Ejemplo: 

`<h1 [ngStyle]="{'color':'red','background-color':'#ff0','text-align':'center'}">Sitio fuera de servicio</h1>`

#### ngClass:

La directiva de atributo [ngClass] permite establecer una o más clases a un elemento HTML. Una alternativa más útil es definir un objeto literal cuyas claves son nombres de clases y sus valores un valor boolean que indica si se debe activar o no la clase al elemento HTML.

Ejemplo:

##### app.component.css
.clase1 {
    color:red;
    background-color:blue;
}

.clase2 {
    font-size:20px;
    font-family: 'Courier New', Courier, monospace;
}

##### app.component.html
`<p [ngClass]="forma">Prueba de directiva</p>`
`<button (click)="fijar()">Fijar clases</button>`
`<button (click)="eliminar()">Eliminar clases</button>`
#### ngTemplate:
Esta directiva representa, tal y como se intuye en su nombre, una template de Angular. El contenido de esta etiqueta contendrá una parte de una template que luego se puede reutilizar y añadirse a otras templates para formar la template de un componente.

Ejemplo ngTemplate con ngFor:

`<div>`

    ` *ngFor="let order of orders; `
             `let x=list;`
             `let main=main; `
             `trackBy: trackById">``
   `({{x}}) {{order.id}}`
`</div>`

`<ng-template>` 
  ` ngFor let-order [ngForOf]="orders"`
  ` let-x="list" `
   `let-main="main"`
   `[ngForTrackBy]="trackById">`
``<div>({{x}}) {{order.id}}</div>``
``</ng-template>``
