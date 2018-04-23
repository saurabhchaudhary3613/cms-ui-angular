import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewStrategyComponent } from './add-new-strategy.component';

describe('AddNewStrategyComponent', () => {
  let component: AddNewStrategyComponent;
  let fixture: ComponentFixture<AddNewStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewStrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
