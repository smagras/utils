
import {HeaderComponent} from './header.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgReduxModule, NgRedux} from 'ng2-redux';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  declarations: [
    HeaderComponent
  ]
})
export class HeaderModule {
  constructor() {}
}
