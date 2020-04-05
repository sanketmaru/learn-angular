# Angular Material

Angular Material is a design system which gives set of ready components to be used in your web application.

This package comes packaged with Angular Schematics package to make your application use material.

Using the command line below will install Angular Material

`ng add @angular/material`

The Angular Material `ng add schematic` helps you setup an Angular CLI project that uses Material. Running ng add will:

* Ensure project dependencies are placed in package.json
* Enable the BrowserAnimationsModule your app module
* Add either a prebuilt theme or a custom theme
* Add Roboto fonts to your index.html
* Add the Material Icon font to your index.html
* Add global styles to
    * Remove margins from body
    * Set height: 100% on html and body
    * Make Roboto the default font of your app

In addition to above schematic Angular Material comes with multiple schematics to generate components. 

* navigation - `ng generate @angular/material:navigation sidenav`
* dashboard - `ng generate @angular/material:dashboard dashboard`

More on Angular Material Schematics can be found [here](https://material.angular.io/guide/schematics) 
