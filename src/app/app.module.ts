import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';

import { FormsModule } from '@angular/forms'
import { NgStyleComponent } from './ng-style/ng-style.component'

import {  MatCardModule} from '@angular/material/card';
import {  MatSelectModule} from '@angular/material/select';
import {  MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
