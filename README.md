# Angular 4 app - with nested jquery-ui sortable

[![N|Solid](http://codingperfection.com/static/poweredBy.png)](http://codingperfection.com)

[See demo](http://codingperfection.com/static/angular/001/)

[Read tutorial](http://codingperfection.com/angular-4-nested-sortable-list-using-jquery-ui/)

Jquery-ui sortable allows nested sortables, this is simple angular 4 implementation.
To use it put:
 - "jquery-sortable.directive.ts"  in your project.
 - include it in module declarations.
 - load jquery and jquery ui

 
After that it is simply using selector jquerySortable on parent element and instructing which array to sort. 

### example:
```sh
<div jquerySortable [sortable]="dataToSort" (onSort)="onSort($event)">
    <div *ngFor="let category of dataToSort">
</div>
```

You can also nest the sortable elements on infite number of levels. 
[See html template](./src/app/app.component.html)

