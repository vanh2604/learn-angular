import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeusageComponent } from './pipeusage.component';

describe('PipeusageComponent', () => {
  let component: PipeusageComponent;
  let fixture: ComponentFixture<PipeusageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeusageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeusageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
