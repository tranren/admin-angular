import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCompontentComponent } from './dynamic-compontent.component';

describe('DynamicCompontentComponent', () => {
  let component: DynamicCompontentComponent;
  let fixture: ComponentFixture<DynamicCompontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicCompontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCompontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
