import {Routes} from '@angular/router';
import {ButtonsComponent} from './component_preview/buttons/buttons.component'
import {FormComponent} from './component_preview/form/form.component'
export const childRoutes: Routes = [
  {path: 'buttons', component: ButtonsComponent},
  {path: 'form', component: FormComponent}
]
