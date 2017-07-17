/**
 * Created by ren on 2017-07-17.
 */
import {ComponentBase} from './component-base';

export class InputComponent extends ComponentBase<string> {
  controlType = 'input';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
