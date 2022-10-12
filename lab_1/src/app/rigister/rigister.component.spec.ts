import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigisterComponent } from './rigister.component';

describe('RigisterComponent', () => {
  let component: RigisterComponent;
  let fixture: ComponentFixture<RigisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RigisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RigisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
