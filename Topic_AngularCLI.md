# Angular CLI

Install [CLI](https://cli.angular.io/) on local

# Steps

npm install -g @angular/cli
ng new my-first-app
cd my-first-app
ng serve

Above steps will install latest cli globally and you can check your first real application.

# More Into CLI

What if you want to setup an Angular yourself ?

Setup Requires lot of work like :-

1. Typescript compiler
2. Module system such as Webpack
3. Web Server 
4. Unit test environment


# Basic Commands

1. ng --version
2. ng help // prints on console all the commands
3. npm uninstall -g @angular/cli
   npm cache clean --force
   npm install -g @angular/cli


#  Advanced/Daily Usage Commands

3. ng generate component todo or ng g c todo // Create a todo component
2. ng g m todo // Generate a todo module
3. ng g s todo-service // Generate a todo service
4. ng build // builds your angular app
5. ng serve or ng s --port 4300 // serve your app