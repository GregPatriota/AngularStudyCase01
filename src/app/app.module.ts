import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';

import { FormsModule } from '@angular/forms'
import { NgStyleComponent } from './ng-style/ng-style.component'

import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatInputModule } from '@angular/material/input'
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgIfElseComponent } from './ng-if-else/ng-if-else.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    NgClassComponent,
    NgIfElseComponent,
    NgForComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
