import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerbiresultComponent } from './powerbiresult.component';

describe('PowerbiresultComponent', () => {
  let component: PowerbiresultComponent;
  let fixture: ComponentFixture<PowerbiresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerbiresultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerbiresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
