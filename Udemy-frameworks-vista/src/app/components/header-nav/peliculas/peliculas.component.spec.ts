import { ComponentFixture, TestBed } from '@angular/core/testing';
import { peliculasComponent } from './peliculas.component';

describe('Pagina2Component', () => {
  let component: peliculasComponent;
  let fixture: ComponentFixture<peliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [peliculasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(peliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
