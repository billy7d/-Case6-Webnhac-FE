import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSingerComponent } from './add-singer.component';

describe('AddSingerComponent', () => {
  let component: AddSingerComponent;
  let fixture: ComponentFixture<AddSingerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSingerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
