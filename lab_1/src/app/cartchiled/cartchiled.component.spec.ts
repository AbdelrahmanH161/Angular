import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartchiledComponent } from './cartchiled.component';

describe('CartchiledComponent', () => {
  let component: CartchiledComponent;
  let fixture: ComponentFixture<CartchiledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartchiledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartchiledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
