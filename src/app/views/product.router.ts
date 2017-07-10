import {Routes} from '@angular/router';
import {TestComponent} from './product/test/test.component';
import {ButtonsComponent} from './component_preview/buttons/buttons.component'

export const childRoutes: Routes = [
  {path: 'test', component: TestComponent},
  {path: 'buttons', component: ButtonsComponent}
]
