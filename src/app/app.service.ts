/**
 * Created by ren on 2017/7/10.
 */
import {Injectable} from '@angular/core';
import {ComponentConfig} from './ui/components.config';
@Injectable()
export class GenerateHtmlService {
  getHtml() {
    const datas = [
      {
        type: 'button'
      }
    ]
    const len = ComponentConfig.length;
    let htmlString = '';
    datas.map(function (data) {
      for (let i = 0; i < len; i++) {
        const item = ComponentConfig[i]
        if (data.type === item.type) {
          htmlString = item.label
          return;
        }
      }
    })
    return htmlString;
  }
}
