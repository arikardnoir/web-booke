import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '@environments/environment';

@Component({
  selector: 'viewer',
  templateUrl: './viewer.html',
  styleUrls: ['./viewer.css']
})
export class viewerComponent implements OnInit {

  pdfSrc: string = '';
  page: number = 1;
  public url = environment.api;
  public urlPath;

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(
      params => {
        console.log(params)
        this.urlPath = `${this.url}/work/view/${params['initials']}/${params['file']}`
      }
    );

  }

  onFileSeleted(event) {
    let img: any = document.querySelector('#file');
    console.log(event)

    if(typeof (FileReader) !== 'undefined') {
      let read = new FileReader();

      read.onload = (e:any) => {
        this.pdfSrc = e.target.result;
      }

      read.readAsArrayBuffer(event.srcElement.files[0]);
    }
  }

}
