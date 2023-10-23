import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightCardComponent } from './insight-card.component';

describe('InsightCardComponent', () => {
  let component: InsightCardComponent;
  let fixture: ComponentFixture<InsightCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsightCardComponent]
    });
    fixture = TestBed.createComponent(InsightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
