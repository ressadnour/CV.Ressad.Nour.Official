import { CommonModule } from '@angular/common';
import {
  ConnectionBackend,
  Http,
  HttpModule,
  RequestOptions,
  XHRBackend
  } from '@angular/http';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialComponent } from './material.component';
import { MaterialRoutingModule } from './material-routing.module';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { TranslateModule } from '@ngx-translate/core';
import { ExperienceComponent } from './experience/experience.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialLibraryModule } from '../material.library';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { AppModule } from '../app.module';
import { GoTopButtonModule } from '../Shared/go-top-button/app-go-top-button.module';



@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FlexLayoutModule,
    MaterialRoutingModule,
    NgbModule.forRoot(),
    ScrollToModule.forRoot(),
    NgxPageScrollModule,
    FormsModule,
    MaterialLibraryModule,
    TranslateModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoTopButtonModule
  ],
  declarations: [
    MaterialComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    PortfolioComponent,
    ContactComponent,
    HomeComponent
  ],
  exports: [],
  providers: [],
})
export class MaterialModule { }





