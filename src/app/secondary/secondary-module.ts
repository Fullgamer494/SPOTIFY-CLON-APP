import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticChild } from './static-child/static-child';
import { StaticContainer } from './static-container/static-container';
import { FirstChild } from './first-child/first-child';
import { SecondChild } from './second-child/second-child';
import { AppRoutingModule } from "../app-routing-module";



@NgModule({
  declarations: [
    StaticChild,
    StaticContainer,
    FirstChild,
    SecondChild
  ],
  imports: [
    CommonModule,
    AppRoutingModule
],
  exports: [
    StaticChild
  ]
})
export class SecondaryModule { }
