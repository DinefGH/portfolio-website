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
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { LinesComponent } from './lines/lines.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioHeadlineComponent } from './portfolio-headline/portfolio-headline.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OverlayMenuComponent,
    NavbarCloseComponent,
    PictureNameComponent,
    SocialIconsComponent,
    LinesComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioHeadlineComponent
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
