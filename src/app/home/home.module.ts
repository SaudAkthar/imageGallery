import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CustomMaterialModule } from '../core/custom-material.module';

import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';
import { HomeDetailComponent } from './detail/home-detail.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CustomMaterialModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    HomeDetailComponent
  ]
})
export class HomeModule { }
