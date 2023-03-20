import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostnumberComponent } from './postnumber.component';

describe('PostnumberComponent', () => {
  let component: PostnumberComponent;
  let fixture: ComponentFixture<PostnumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostnumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
