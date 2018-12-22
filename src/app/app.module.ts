import { SearchService } from '@resources/search/search.service';
import { SearchHttp } from '@resources/search/search.http';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { ResultsComponent } from '@pages/results/results.component';
import { SearchComponent } from '@pages/search/search.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ROUTES } from './app.routes';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { NotificationService } from '@shared/messages/notification.service';
import { ModalNotificationService } from '@shared/messages/modal.service';


// modulo de load
import { LoadingModule, ANIMATION_TYPES  } from 'ngx-loading';
import { ApiHttp } from '@resources/api.http';
import { SharedModule } from './shared/shared.module';
import {FrontEndComponent} from '@pages/front-end/front-end.component';
import { SearchFormComponent } from '@pages/search/search-form/search-form.component';
import { ResultsService } from '@resources/results/results.service';
import { ResultsHttp } from '@resources/results/results.http';
import { DownloadHttp } from '@resources/download/download.http';
import { DownloadService } from '@resources/download/download.service';



@NgModule({
  declarations: [
    AppComponent,
    FrontEndComponent,
    ResultsComponent,
    SearchComponent,
    NotFoundComponent,
    SearchFormComponent,
    ModalComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.threeBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff'
  }),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ 
    NotificationService,
    ModalNotificationService,
    ApiHttp,
    SearchHttp,
    SearchService,
    ResultsHttp,
    ResultsService,
    DownloadHttp,
    DownloadService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
