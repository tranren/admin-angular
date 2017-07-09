import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  btns: Object;

  constructor() {

  }

  ngOnInit() {
    this.btns = {
      default: [
        new ButtonConfig('default', 'btn-block btn-default', function () {

        }),
        new ButtonConfig('default', 'btn-block btn-default btn-lg', function () {

        }),
        new ButtonConfig('default', 'btn-block btn-default btn-sm', function () {

        }),
        new ButtonConfig('default', 'btn-block btn-default btn-xs', function () {

        }),
        new ButtonConfig('default', 'btn-block btn-default btn-flat', function () {

        }),
        new ButtonConfig('default', 'btn-block btn-default disabled', function () {

        }),
      ],
      primary: [
        new ButtonConfig('default', 'btn-block btn-primary', function () {

        }),
        new ButtonConfig('default', 'btn-block btn-primary btn-lg', function () {

        }),
        new ButtonConfig('default', 'btn-block btn-primary btn-sm', function () {

        }),
        new ButtonConfig('default', 'btn-block btn-primary btn-xs', function () {

        }),
        new ButtonConfig('default', 'btn-block btn-primary btn-flat', function () {

        }),
        new ButtonConfig('default', 'btn-block btn-primary disabled', function () {

        }),
      ],
      success: [
        new ButtonConfig('default', 'btn-block btn-success', function () {

        }),
        new ButtonConfig('default', 'btn-block btn-success btn-lg', function () {

        }),
        new ButtonConfig('default', 'btn-block btn-success btn-sm', function () {

        }),
        new ButtonConfig('default', 'btn-block btn-success btn-xs', function () {

        }),
        new ButtonConfig('default', 'btn-block btn-success btn-flat', function () {

        }),
        new ButtonConfig('default', 'btn-block btn-success disabled', function () {

        }),
      ],
      info: [
        new ButtonConfig('default', 'btn-block btn-info', function () {

        }),
        new ButtonConfig('default', 'btn-block btn-info btn-lg', function () {

        }),
        new ButtonConfig('default', 'btn-block btn-info btn-sm', function () {

        }),
        new ButtonConfig('default', 'btn-block btn-info btn-xs', function () {

        }),
        new ButtonConfig('default', 'btn-block btn-info btn-flat', function () {

        }),
        new ButtonConfig('default', 'btn-block btn-info disabled', function () {

        }),
      ],
      danger: [
        new ButtonConfig('default', 'btn-block btn-danger', function () {

        }),
        new ButtonConfig('default', 'btn-block btn-danger btn-lg', function () {

        }),
        new ButtonConfig('default', 'btn-block btn-danger btn-sm', function () {

        }),
        new ButtonConfig('default', 'btn-block btn-danger btn-xs', function () {

        }),
        new ButtonConfig('default', 'btn-block btn-danger btn-flat', function () {

        }),
        new ButtonConfig('default', 'btn-block btn-danger disabled', function () {

        }),
      ],
      warning: [
        new ButtonConfig('default', 'btn-block btn-warning', function () {

        }),
        new ButtonConfig('default', 'btn-block btn-warning btn-lg', function () {

        }),
        new ButtonConfig('default', 'btn-block btn-warning btn-sm', function () {

        }),
        new ButtonConfig('default', 'btn-block btn-warning btn-xs', function () {

        }),
        new ButtonConfig('default', 'btn-block btn-warning btn-flat', function () {

        }),
        new ButtonConfig('default', 'btn-block btn-warning disabled', function () {

        }),
      ]
    }
  }

}

export class ButtonConfig {

  constructor(public btnName: string, public btnClass: string, public btnClick: Function) {
  }
}
