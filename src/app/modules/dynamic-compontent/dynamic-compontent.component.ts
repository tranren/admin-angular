import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ComponentBase} from '../component-base';
@Component({
  selector: 'app-dynamic-compontent',
  templateUrl: './dynamic-compontent.component.html',
  styleUrls: ['./dynamic-compontent.component.css']
})
export class DynamicCompontentComponent {
  @Input() question: ComponentBase<any>;
  @Input() form: FormGroup;

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
}
