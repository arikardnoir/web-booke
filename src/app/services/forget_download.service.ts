import { ForgetDownloadHttp } from './../http/forget_download.http';
import { Injectable } from "@angular/core";

@Injectable()
export class ForgetDownloadService {
    constructor(private forgetpasswordHttp: ForgetDownloadHttp) {}

//     private urlForgetPass = 'http://localhost/Booke/api-booke/public/api/account/forgetpass';
//   private urlDownloadFile = 'http://localhost/Booke/api-booke/public/api/v2/workout/file/';

  forget_pass(email) {
    return this.forgetpasswordHttp.forgetpass(email);
  }

  downloadFile(fileName) {
    return this.forgetpasswordHttp.download(fileName);
  }

}