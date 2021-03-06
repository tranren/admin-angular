import {RouterModule, Routes} from '@angular/router';
import {MainComponent, LoginComponent} from './views';
import {childRoutes} from './views/product.router';
const ROUTES: Routes = [
  {path: '', component: MainComponent, children: childRoutes},
  {path: 'login', component: LoginComponent},
  {
    path: '**', redirectTo: 'login'
  }
];

export const appRouting = RouterModule.forRoot(ROUTES);
