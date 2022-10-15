import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeadersComponent } from './headers/headers.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ElevatorsComponent } from './elevators/elevators.component';
import { ModernisationComponent } from './modernisation/modernisation.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    HomeComponent,
    AboutComponent,
    ElevatorsComponent,
    ModernisationComponent,
    ServicesComponent,
    ContactusComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
