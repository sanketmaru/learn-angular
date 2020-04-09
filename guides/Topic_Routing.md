# Angular Routing

## Routing Types

1. **Eager Loaded Routes**

  * These are the modules which are loaded when app component gets loaded and are included in main bundle. 

  * These components needs to be shown up first and your app layout is dependent on them.

2. **Lazy Loaded Routes**

  * These are the modules which app doesn't need to show upfront and gets loaded lazily or on demand.

  * With lazy loading, it reduces main bundle size and increases performance by loading first pages faster.

  * Also, lazy loaded components can be configured to load in background once eager components are loaded. 
    These is known as Preloading strategy in Angular and there several ways to achieve it like
      * Route Preloading
      * Network Preloading
      
##Configure Routing 

1. **Router Outlet**

Its a placeholder which Angular dynamically fills based on current router state.

```javascript
<router-outlet></router-outlet>
```

1. **Root Module Configuration**

Using `forRoot` routes are configured. `forRoot ` is to be used once only for configuring root app level routes.

```javascript

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    // { path: 'todo', component: TodoComponent},
    { path: 'todo', loadChildren: () => import('./todo/todo.module').then(mod => mod.TodoModule)},
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const appRouting = RouterModule.forRoot(routes);

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
})
```

2. **Child level routing**

```javascript
const routes: Routes = [
  {path: '', component: TodoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoLazyRoutingModule { }
```
