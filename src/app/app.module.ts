import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';
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
import { SkillsComponent } from './skills/skills.component';

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoadingComponent,
    MenuComponent,
    SocialComponent,
    ExperienceComponent,
    ContactComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    FusionChartsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'experience', component: ExperienceComponent},
      { path: 'projects', component: ProjectsComponent},
      { path: 'contact', component: ContactComponent}

      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
