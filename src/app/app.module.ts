import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { OverlayMenuComponent } from './overlay-menu/overlay-menu.component';
import { NavbarCloseComponent } from './navbar-close/navbar-close.component';
import { PictureNameComponent } from './picture-name/picture-name.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OverlayMenuComponent,
    NavbarCloseComponent,
    PictureNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
