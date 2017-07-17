import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {ComponentBase} from '../component-base';
import {FormControlService} from '../form-control.service'

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [ FormControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: ComponentBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: FormControlService) {
  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
