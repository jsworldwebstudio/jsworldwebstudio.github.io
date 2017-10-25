import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunPageComponent } from './fun-page.component';

describe('FunPageComponent', () => {
  let component: FunPageComponent;
  let fixture: ComponentFixture<FunPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
