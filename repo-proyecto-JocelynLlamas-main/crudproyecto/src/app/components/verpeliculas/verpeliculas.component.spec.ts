import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerpeliculasComponent } from './verpeliculas.component';

describe('VerpeliculasComponent', () => {
  let component: VerpeliculasComponent;
  let fixture: ComponentFixture<VerpeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerpeliculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerpeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
