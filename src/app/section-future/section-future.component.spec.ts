import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFutureComponent } from './section-future.component';

describe('SectionFutureComponent', () => {
  let component: SectionFutureComponent;
  let fixture: ComponentFixture<SectionFutureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionFutureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
