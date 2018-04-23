import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStrategyComponent } from './search-strategy.component';

describe('DasboardComponent', () => {
  let component: SearchStrategyComponent;
  let fixture: ComponentFixture<SearchStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchStrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
