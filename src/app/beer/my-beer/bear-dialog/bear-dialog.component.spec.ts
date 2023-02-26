import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BearDialogComponent } from './bear-dialog.component';

describe('BearDialogComponent', () => {
  let component: BearDialogComponent;
  let fixture: ComponentFixture<BearDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BearDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BearDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
