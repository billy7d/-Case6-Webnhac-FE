import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowListSongComponent } from './show-list-song.component';

describe('ShowListSongComponent', () => {
  let component: ShowListSongComponent;
  let fixture: ComponentFixture<ShowListSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowListSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowListSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
