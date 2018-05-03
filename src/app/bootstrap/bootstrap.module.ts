import { TranslateModule } from '@ngx-translate/core';
import { ContactComponent } from './contact/contact.component';
import { BootstrapRoutingModule } from './bootstrap-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { SkillsComponent } from './skills/skills.component';
import { ProgressbarModule } from 'ngx-bootstrap';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BootstrapComponent } from './bootstrap.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { GoTopButtonModule } from '../Shared/go-top-button/app-go-top-button.module';



@NgModule({
  imports: [
    CommonModule,
    BootstrapRoutingModule,
    NgbModule.forRoot(),
    ScrollToModule.forRoot(),
    NgxPageScrollModule,
    ProgressbarModule.forRoot(),
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoTopButtonModule
  ],
  declarations: [
    BootstrapComponent,
    HomeComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    PortfolioComponent,
    ContactComponent
  ]
})
export class BootstrapModule { }
