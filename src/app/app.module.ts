import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ROUTES } from './app.routes';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FHeaderComponent } from '@FrontEnd/layout/f-header/f-header.component';
import { FrontEndComponent } from '@FrontEnd/front-end/front-end.component';
import { FMainComponent } from '@FrontEnd/layout/f-main/f-main.component';
import { FFooterComponent } from '@FrontEnd/layout/f-footer/f-footer.component';
import { LoginComponent } from '@FrontEnd/login/login.component';
import { FormLoginComponent } from '@FrontEnd/login/form-login/form-login.component';
import { FormCadastroComponent } from '@FrontEnd/login/form-cadastro/form-cadastro.component';
import { ModalComponent } from './modal/modal.component';
import { SearchComponent } from '@FrontEnd/search/search.component';
import { ResultsComponent } from '@FrontEnd/results/results.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResultsService } from './services/results.service';
import { SearchFormComponent } from '@FrontEnd/search/search-form/search-form.component';
import { NotificationService } from './shared/messages/notification.service';
import { ModalNotificationService } from './shared/messages/modal.service';
import { ActiveService } from './active/active.service';

// modulo de load
import { LoadingModule, ANIMATION_TYPES  } from 'ngx-loading';
import { ActiveComponent } from './active/active.component';
import { RecuperarSenhaComponent } from '@FrontEnd/recuperar-senha/recuperar-senha.component';
import { JWTInterceptor } from './interceptors/jwt.interceptor';
import { UserHttp } from './http/user.http';
import { ApiHttp } from './http/api.http';
import { UserService } from './services/user.service';
import { LoginHttp } from './http/login.http';
import { LoginService } from './services/login.service';
import { SearchHttp } from './http/search.http';
import { SearchService } from './services/search.service';
import { ResultsHttp } from './http/results.http';
import { SharedModule } from './shared/shared.module';
import { ForgetDownloadHttp } from './http/forget_download.http';
import { ForgetDownloadService } from './services/forget_download.service';
import { ApplicationErrorHandler } from './app.error-handler';
import { LogoutHttp } from './http/logout.http';
import { LogoutService } from './services/logout.service';

@NgModule({
  declarations: [
    AppComponent,
    FHeaderComponent,
    FrontEndComponent,
    FMainComponent,
    FFooterComponent,
    LoginComponent,
    FormLoginComponent,
    FormCadastroComponent,
    ModalComponent,
    SearchComponent,
    ResultsComponent,
    NotFoundComponent,
    SearchFormComponent,
    ActiveComponent,
    RecuperarSenhaComponent
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
              ResultsService,
              NotificationService,
              ModalNotificationService,
              ActiveService,
              UserHttp,
              UserService,
              ApiHttp,
              LoginHttp,
              LoginService,
              SearchHttp,
              SearchService,
              ResultsHttp,
              ForgetDownloadHttp,
              ForgetDownloadService,
              {provide: ErrorHandler, useClass: ApplicationErrorHandler},
              {provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true},
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
