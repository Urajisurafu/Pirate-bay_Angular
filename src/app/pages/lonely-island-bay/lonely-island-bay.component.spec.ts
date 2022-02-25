import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LonelyIslandBayComponent } from './lonely-island-bay.component';

describe('LonelyIslandBayComponent', () => {
  let component: LonelyIslandBayComponent;
  let fixture: ComponentFixture<LonelyIslandBayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LonelyIslandBayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LonelyIslandBayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
