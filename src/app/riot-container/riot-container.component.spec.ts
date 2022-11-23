import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiotContainerComponent } from './riot-container.component';

describe('RiotContainerComponent', () => {
  let component: RiotContainerComponent;
  let fixture: ComponentFixture<RiotContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiotContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiotContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
