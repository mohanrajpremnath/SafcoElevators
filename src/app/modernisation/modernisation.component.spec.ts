import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernisationComponent } from './modernisation.component';

describe('ModernisationComponent', () => {
  let component: ModernisationComponent;
  let fixture: ComponentFixture<ModernisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModernisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModernisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
