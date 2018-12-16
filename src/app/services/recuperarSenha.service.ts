import { Injectable } from "@angular/core";
import { RecuperarHttp } from "../http/recuperar.http";

@Injectable()

export class RecuperarSenhaService {

    constructor(public http: RecuperarHttp) {}

    // recoveryPass(data,token) {
    //     this.header = this.headers.set('Authorization', `Bearer ${token}`);
    //     this.http.post(data, {headers: this.header}).subscribe(data => {
        // this.notificationService.notify('Usuário cadastrado com sucesso !', false);
    //     this.notificationService.notify(data.message, false);
    //     console.log(data);
    //     this.clearForm();
    //   },
    //     response => {
    //       // this.notificationService.notify('Erro ao cadastrar, verifique os campos !', false);
    //       this.notificationService.notify(response.message, false);
    //     }
    //   );
    // }

}