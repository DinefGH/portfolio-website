import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { ProjectComponent } from './project/project.component';
import { Project1Component } from './project1/project1.component';
import { Project2Component } from './project2/project2.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ImprintComponent } from './imprint/imprint.component';
import { IndexComponent } from './index/index.component';
import { IndexOverviewComponent } from './index-overview/index-overview.component';
import { ImprintSiteComponent } from './imprint-site/imprint-site.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    OverlayMenuComponent,
    NavbarCloseComponent,
    PictureNameComponent,
    SocialIconsComponent,
    LinesComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioHeadlineComponent,
    ProjectComponent,
    Project1Component,
    Project2Component,
    ContactComponent,
    ImprintComponent,
    IndexComponent,
    IndexOverviewComponent,
    ImprintSiteComponent,
    ScrollTopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
