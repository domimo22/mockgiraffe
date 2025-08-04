import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragZone } from './drag-zone';

describe('DragZone', () => {
  let component: DragZone;
  let fixture: ComponentFixture<DragZone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DragZone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragZone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
