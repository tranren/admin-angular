import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef, AfterContentInit
} from '@angular/core';
import {GenerateHtmlService} from '../../../app.service';
import {ButtonComponent} from '../../../ui/button/button.component'
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})


export class ButtonsComponent implements OnInit, AfterContentInit {
  @ViewChild('test', {read: ViewContainerRef}) test: ViewContainerRef;
  btnName: string;
  btnClass: string;
  btnClick: Function;
  btnDisabled: boolean;
  previewConfig: Config;
  data: string;

  constructor(private _generateHtmlService: GenerateHtmlService, private cfr: ComponentFactoryResolver) {
    this.data = `<button>sasa</button>`// _generateHtmlService.getHtml()
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

  ngAfterContentInit() {
    this.addComponent()
  }

  addComponent() {
    const com = this.cfr.resolveComponentFactory(ButtonComponent)
    this.test.createComponent(com)
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
