import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreapeliculaComponent } from './creapelicula.component';

describe('CreapeliculaComponent', () => {
  let component: CreapeliculaComponent;
  let fixture: ComponentFixture<CreapeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreapeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreapeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
