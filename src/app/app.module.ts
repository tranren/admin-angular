import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {MainComponent, LoginComponent} from './views'
import HomeComponent from './views/home'
import {AppComponent} from './app.component';
import {appRouting} from './app.router';
import {ButtonComponent} from './ui/button/button.component';
import {ButtonsComponent} from './views/component_preview/buttons/buttons.component';
import {GenerateHtmlService} from './app.service';
import { DynamicFormComponent } from './modules/dynamic-form/dynamic-form.component';
import { DynamicCompontentComponent } from './modules/dynamic-compontent/dynamic-compontent.component';
import { InputComponent } from './ui/input/input.component';
import { FormComponent } from './views/component_preview/form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    LoginComponent,
    ButtonComponent,
    ButtonsComponent,
    DynamicFormComponent,
    DynamicCompontentComponent,
    InputComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
