/**
 * Created by ren on 2017-07-17.
 */
import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {ComponentBase} from './component-base';

@Injectable()
export class FormControlService {
  constructor() {
  }

  toFormGroup(questions: ComponentBase<any>[]) {
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
