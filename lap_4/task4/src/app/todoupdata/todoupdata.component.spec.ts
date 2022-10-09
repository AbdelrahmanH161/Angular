import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoupdataComponent } from './todoupdata.component';

describe('TodoupdataComponent', () => {
  let component: TodoupdataComponent;
  let fixture: ComponentFixture<TodoupdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoupdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoupdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
