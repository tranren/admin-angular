/**
 * Created by ren on 2017/7/10.
 */


interface  Component {
  type: string,
  label: any
}

export let ComponentConfig: Component [] = [
  {
    type: 'button',
    label: `<app-button [ngName]="btnName" [ngClasses]="btnClass"
                              [ngClick]="btnClick" [ngDisabled]="btnDisabled"></app-button>`
  }
]


