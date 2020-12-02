import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import {
  AgmCoreModule
} from '@agm/core'; 
import { LoginComponent } from './login/login.component'; 
import { AdminLayoutComponent } from './layouts/admin-layout.component';
import { AddSingerComponent } from './add-singer/add-singer.component';
import { AddPlaylistComponent } from './add-playlist/add-playlist.component';
import { ShowCreatorPlaylistComponent } from './show-creator-playlist/show-creator-playlist.component';
import { RegisterComponent } from './register/register.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    RegisterComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
