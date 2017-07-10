import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  btnName: string;
  btnClass: string;
  btnClick: Function;
  btnDisabled: boolean;
  previewConfig: Config;

  constructor() {
  }

  ngOnInit() {
    this.btnName = 'button';
    this.btnClass = 'btn-default';
    this.btnClick = function () {
      alert('this is a button');
    };
    this.btnDisabled = false;

    this.previewConfig = new Config(false, 'btn-default', false);
  }

  _onChange(e) {
    this.previewConfig.isBlock = e.target.checked;
    this.btnClass = (this.previewConfig.isBlock ? 'btn-block' : '') + ' ' + this.previewConfig.btnclass;
  }

  _btnRadio(btnClass) {
    this.btnClass = btnClass + ' ' + (this.previewConfig.isBlock ? 'btn-block' : '');
  }

  _btnDisabled(e) {
    this.btnDisabled = e.target.checked;
  }
}

export class Config {

  constructor(public isBlock: boolean, public btnclass: string, public btnDisabled: boolean) {
  }
}
