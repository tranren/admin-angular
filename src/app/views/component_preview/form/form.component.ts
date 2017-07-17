import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {ComponentBase} from '../../../modules/component-base'
import {InputComponent} from '../../../modules/input'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  questions: ComponentBase<any>[] = [
    new InputComponent({
      key: 'firstName',
      label: 'First name',
      value: 'Bombasto',
      required: true,
      order: 1
    }),
    new InputComponent({
      key: 'secondName',
      label: 'second name',
      value: 'Bombasto',
      required: true,
      order: 1
    })
  ];
  form: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
