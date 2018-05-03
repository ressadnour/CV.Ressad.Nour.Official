import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material';
import { BlogComponent } from './blog.component';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialRoutingModule } from '../material/material-routing.module';
import { MaterialLibraryModule } from '../material.library';
import { GoTopButtonModule } from '../Shared/go-top-button/app-go-top-button.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPageScrollModule } from 'ngx-page-scroll';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    TranslateModule,
    FlexLayoutModule,
    NgbModule.forRoot(),
    ScrollToModule.forRoot(),
    NgxPageScrollModule,
    MaterialLibraryModule,
    FormsModule,
    ReactiveFormsModule,
    BlogRoutingModule,
    HttpClientModule,
    GoTopButtonModule
      ],
  declarations: [
    HomeComponent,
    BlogComponent
],
exports: []
})
export class BlogModule { }
