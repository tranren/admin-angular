import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {MainComponent, LoginComponent} from './views'
import HomeComponent from './views/home'
import {AppComponent} from './app.component';
import {appRouting} from './app.router';
import {ButtonComponent} from './ui/button/button.component';
import {ButtonsComponent} from './views/component_preview/buttons/buttons.component';
import {GenerateHtmlService} from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    LoginComponent,
    ButtonComponent,
    ButtonsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouting
  ],
  providers: [GenerateHtmlService],
  bootstrap: [AppComponent],
  entryComponents: [
    ButtonComponent
  ]
})
export class AppModule {
}
