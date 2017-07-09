import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {MainComponent, LoginComponent} from './views'
import HomeComponent from './views/home'
import {AppComponent} from './app.component';
import {appRouting} from './app.router';
import {TestComponent} from './views/product/test/test.component';
import {ButtonComponent} from './ui/button/button.component';
import { ButtonsComponent } from './views/component_preview/buttons/buttons.component';
import { GeneratorComponent } from './generator/generator.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    LoginComponent,
    TestComponent,
    ButtonComponent,
    ButtonsComponent,
    GeneratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
