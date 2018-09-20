import { Routes } from '@angular/router';

//import { PerfilInstituicaoComponent } from './Admin/perfil-instituicao/perfil-instituicao.component';
// import { NovoTrabalhoComponent } from './Admin/novo-trabalho/novo-trabalho.component';
// import { HomeComponent } from './Admin/home/home.component';
// import { RascunhoComponent } from './Admin/rascunho/rascunho.component';
// import { AdminComponent } from './Admin/admin/admin.component';
import { FrontEndComponent } from './FrontEnd/front-end/front-end.component';
import { LoginComponent } from './FrontEnd/login/login.component';
import { FormLoginComponent } from './FrontEnd/login/form-login/form-login.component';
import { FormCadastroComponent } from './FrontEnd/login/form-cadastro/form-cadastro.component';
import { SearchComponent } from './FrontEnd/search/search.component';
import { ResultsComponent } from './FrontEnd/results/results.component';
import { ActiveComponent } from './active/active.component';
import { RecuperarSenhaComponent } from './FrontEnd/recuperar-senha/recuperar-senha.component';
//import { NovaSenhaComponent } from './Admin/nova-senha/nova-senha.component';

// guards
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';

export const ROUTES: Routes = [
    {path: '', component: FrontEndComponent,
        children: [
            {path: '', redirectTo: 'search', pathMatch: 'full'},
            {path: 'search', component: SearchComponent},
            {path: 'resultados/:search', component: ResultsComponent},
            {path: 'login', component: LoginComponent, children:
                [ {path: '', redirectTo: 'entrar', pathMatch: 'full'},
                {path: 'entrar', component: FormLoginComponent},
                {path: 'recuperar/:token', component: RecuperarSenhaComponent},
                {path: 'cadastrar', component: FormCadastroComponent}
            ]
        }

        ]
    },
    {path: 'admin', loadChildren: './Admin/admin.module#AdminModule'},
    {path: 'active/:param', component: ActiveComponent},
    
    // {path: 'admin', component: AdminComponent, canActivate: [AuthGuard], children:
    //     [
    //         {path: 'admin', redirectTo: 'admin', pathMatch: 'full'},
    //         {path: 'novo-trabalho', component: NovoTrabalhoComponent},
    //         {path: 'nova-senha', component: NovaSenhaComponent},
    //         {path: 'perfil', component: PerfilInstituicaoComponent},
    //         {path: 'rascunhos', component: RascunhoComponent}
    //     ]
    // },
    {path: '**', component: NotFoundComponent}
];
