import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './guard/fake-backend';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { CustomMaterialModule } from './core/custom-material.module';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AuthGuard } from './guard/auth.guard';
import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';
import { GalleryService } from './services/gallery.service';

import { LoginComponent } from './login/login.component';
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HomeModule,
    routing
  ],
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    GalleryService,
    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
