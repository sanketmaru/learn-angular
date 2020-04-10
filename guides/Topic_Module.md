# Angular Modules

Angular apps are modular and they provide modularity through NgModules.

NgModules are way to encapsulate components, services, directive which represents functionality related to a single domain.

Example - Login Module, User Module.

Though when required some features can be exported and also imported from other modules.

Each and every Angular app has one NgModule(`app.module.ts`) which is root module and is used to bootstrap the application.

```javascript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  exports:      [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

Create your module using command

`ng g m <module-name>`

