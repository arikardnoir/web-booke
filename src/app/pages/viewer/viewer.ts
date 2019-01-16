import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'viewer',
  templateUrl: './viewer.html',
  styleUrls: ['./viewer.css']
})
export class viewerComponent implements OnInit {

  pdfSrc: string = '';
  page: number = 1;

  constructor() { }

  ngOnInit() {
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
