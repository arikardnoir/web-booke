import { DataCadastro } from '@FrontEnd/login/data-cadastro.model';
import { Injectable } from '@angular/core';
import { map, filter, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { UserHttp } from './../http/user.http';

@Injectable()
// @Injectable({
//     providedIn: 'root'
// })

export class UserService {

    constructor(public _userHttp: UserHttp) { }
    data: DataCadastro;

    post(data) {
        return this._userHttp.post(data);
    }

    // .subscribe(data => {
    //     // this.notificationService.notify('Usuário cadastrado com sucesso !', false);
    //     // this.notificationService.notify(data, false);
    //     alert('Cadastro feito com sucesso');
    //     this.clearForm();
    //   },
    //     response => {
    //       // this.notificationService.notify('Erro ao cadastrar, verifique os campos !', false);
    //       // this.notificationService.notify(response.message, false);
    //     }
    //   );
}

