import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router'

import {AppComponent} from './app.component';
import {SidebarComponent} from './views/sidebar/sidebar.component';
import {HeaderComponent} from './views/header/header.component';

import {FooterComponent} from './views/footer/footer.component';
import {ControlSidebarComponent} from './views/control-sidebar/control-sidebar.component';
import {ContentPanelComponent} from './views/content-panel/content-panel.component';
import {MainComponent} from './views/main.component';
import {LoginComponent} from './views/login/login.component';

export const ROUTES: Routes = [
  {path: '', component: MainComponent},
  {path: 'login', component: LoginComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    ControlSidebarComponent,
    ContentPanelComponent,
    MainComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
