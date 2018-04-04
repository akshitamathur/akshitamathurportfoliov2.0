import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoadingComponent } from './loading/loading.component';
import { MenuComponent } from './menu/menu.component';
import { SocialComponent } from './social/social.component';
import { ExperienceComponent } from './experience/experience.component';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoadingComponent,
    MenuComponent,
    SocialComponent,
    ExperienceComponent,
    ContactComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'experience', component: ExperienceComponent},
      { path: 'projects', component: ProjectsComponent},
      { path: 'contact', component: ContactComponent}

      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
