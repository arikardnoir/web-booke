import { Component, OnInit, Input, ContentChild, AfterContentInit} from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';

@Component({
  selector: 'rt-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {

  input: any;

  @Input() label: string;
  @Input() errorMessage: string;

  @ContentChild(NgModel) model: NgModel;
  @ContentChild(FormControlName) control: FormControlName;

  constructor() { }

  ngOnInit() {
  }

  // esse método será chamado quando o conteudo que for coloca dentro de ng-content for definido
  ngAfterContentInit() {
    this.input = this.model || this.control;
    if (this.input === undefined) {
      throw new Error('Esse component precisa ser usado com ngModel ou FormControlName');
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }

}
