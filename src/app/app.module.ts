import { user } from '@FrontEnd/login/form-login/user.model';
import { FooterComponent } from './Admin/layout/footer/footer.component';
import { MainComponent } from './Admin/layout/main/main.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Admin/layout/header/header.component';
import { SidebarComponent } from './Admin/layout/sidebar/sidebar.component';
import { HomeComponent } from './Admin/home/home.component';
import { ROUTES } from './app.routes';
import { NovoTrabalhoComponent } from './Admin/novo-trabalho/novo-trabalho.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PerfilInstituicaoComponent } from './Admin/perfil-instituicao/perfil-instituicao.component';
import { RascunhoComponent } from './Admin/rascunho/rascunho.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { FHeaderComponent } from '@FrontEnd/layout/f-header/f-header.component';
import { FrontEndComponent } from '@FrontEnd/front-end/front-end.component';
import { FMainComponent } from '@FrontEnd/layout/f-main/f-main.component';
import { FFooterComponent } from '@FrontEnd/layout/f-footer/f-footer.component';
import { LoginComponent } from '@FrontEnd/login/login.component';
import { FormLoginComponent } from '@FrontEnd/login/form-login/form-login.component';
import { FormCadastroComponent } from '@FrontEnd/login/form-cadastro/form-cadastro.component';
import { ModalComponent } from './modal/modal.component';
import { SearchComponent } from '@FrontEnd/search/search.component';
import { InputComponent } from './shared/input/input.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { ResultsComponent } from '@FrontEnd/results/results.component';
import { LoginService } from '@FrontEnd/login/form-login/login.service';
import { NewWorkService } from './Admin/novo-trabalho/new-work.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResultsService } from '@FrontEnd/results/results.service';
import { SnackbarComponent } from './shared/messages/snackbar/snackbar.component';
import { SearchFormComponent } from '@FrontEnd/search/search-form/search-form.component';
import { PerfilService } from './Admin/perfil-instituicao/perfil.service';
import { PerfilInstituicaoService } from './Admin/perfil-instituicao/perfil-instituicao.service';
import { NotificationService } from './shared/messages/notification.service';
import { ModalNotificationService } from './shared/messages/modal.service';
import { ModalService } from './modal/modal.service';
import { ActiveService } from './active/active.service';

// modulo de load
import { LoadingModule, ANIMATION_TYPES  } from 'ngx-loading';
import { RascunhoService } from './Admin/rascunho/rascunho.service';
import { ActiveComponent } from './active/active.component';
import { NovaSenhaComponent } from './Admin/nova-senha/nova-senha.component';
import { RecuperarSenhaComponent } from '@FrontEnd/recuperar-senha/recuperar-senha.component';
import { JWTInterceptor } from './interceptors/jwt.interceptor';
import { UserHttp } from './http/user.http';
import { ApiHttp } from './http/api.http';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SidebarComponent,
    HomeComponent,
    NovoTrabalhoComponent,
    PerfilInstituicaoComponent,
    RascunhoComponent,
    AdminComponent,
    FHeaderComponent,
    FrontEndComponent,
    FMainComponent,
    FFooterComponent,
    LoginComponent,
    FormLoginComponent,
    FormCadastroComponent,
    ModalComponent,
    SearchComponent,
    InputComponent,
    ResultsComponent,
    NotFoundComponent,
    SnackbarComponent,
    SearchFormComponent,
    ActiveComponent,
    NovaSenhaComponent,
    RecuperarSenhaComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
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
              AuthGuard,
              LoginService,
              NewWorkService,
              ResultsService,
              PerfilService,
              NotificationService,
              ModalNotificationService,
              PerfilInstituicaoService,
              ModalService,
              RascunhoService,
              ActiveService,
              UserHttp,
              UserService,
              ApiHttp,
              {provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true},
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
