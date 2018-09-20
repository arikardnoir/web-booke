import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { MainComponent } from "./layout/main/main.component";
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { HomeComponent } from "./home/home.component";
import { NovoTrabalhoComponent } from "./novo-trabalho/novo-trabalho.component";
import { PerfilInstituicaoComponent } from "./perfil-instituicao/perfil-instituicao.component";
import { RascunhoComponent } from "./rascunho/rascunho.component";
import { AdminComponent } from "./admin/admin.component";
import { NovaSenhaComponent } from "./nova-senha/nova-senha.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { AdminCoreModule } from "./admin.core.module";

import { AuthGuard } from "../guards/auth.guard";
import { NewWorkService } from "../services/new_work.service";
import { PerfilService } from "../services/perfil.I.service";
import { RascunhoService } from "../services/rascunho.service";
import { WorkHttp } from "../http/work.http";
import { PerfilHttp } from "../http/perfil.http";
import { RascunhoHttp } from "../http/rascunho.http";
import { NovaSenhaService } from "../services/nova_senha.service";
import { NovaSenhaHttp } from "../http/nova_senha.http";
import { ApiHttp } from "../http/api.http";
import { HttpClientModule } from "@angular/common/http";

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JWTInterceptor } from "../interceptors/jwt.interceptor";


const ROUTES: Routes = [
    {path: '', component: AdminComponent, canActivate: [AuthGuard], children:
        [
            //{path: 'admin', redirectTo: 'admin', pathMatch: 'full'},
            {path: 'novo-trabalho', component: NovoTrabalhoComponent},
            {path: 'nova-senha', component: NovaSenhaComponent},
            {path: 'perfil', component: PerfilInstituicaoComponent},
            {path: 'rascunhos', component: RascunhoComponent}
        ]
    }
] 

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        MainComponent,
        SidebarComponent,
        HomeComponent,
        NovoTrabalhoComponent,
        PerfilInstituicaoComponent,
        RascunhoComponent,
        AdminComponent,
        NovaSenhaComponent
    ],
    imports: [
        HttpClientModule,
        RouterModule, RouterModule.forChild(ROUTES),
        SharedModule,
        //AdminCoreModule
    ],
    providers: [
        AuthGuard,
        NewWorkService,
        WorkHttp,
        PerfilHttp,
        PerfilService,
        RascunhoService,
        RascunhoHttp,
        NovaSenhaService,
        NovaSenhaHttp,
        ApiHttp,
        {provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true},
    ]
})
export class AdminModule {}