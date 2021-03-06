import {Component, OnInit, Input} from '@angular/core';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() ngName: string;
  @Input() ngClasses: string;
  @Input() ngClick: Function;
  @Input() ngDisabled: boolean;

  ngOnInit() {
    /*this.ngBtnName = this.ngName;
     this.ngBtnClass = ngClick;
     this.ngBtnClick = ngClass;*/
  }

  _ngClick() {
    this.ngClick();
  }

}

