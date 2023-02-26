import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBearListComponent } from './my-bear-list.component';

describe('MyBearListComponent', () => {
  let component: MyBearListComponent;
  let fixture: ComponentFixture<MyBearListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBearListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBearListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
