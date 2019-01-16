import { DownloadHttp } from '@resources/download/download.http';
import { Injectable } from "@angular/core";

@Injectable()
export class DownloadService {
    constructor(private downloadHttp: DownloadHttp) {}

  downloadFile(fileName) {
    console.log(fileName)
    return this.downloadHttp.download(fileName);
  }

}