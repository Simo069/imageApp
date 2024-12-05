import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifieImageComponent } from './modifie-image.component';

describe('ModifieImageComponent', () => {
  let component: ModifieImageComponent;
  let fixture: ComponentFixture<ModifieImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifieImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifieImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
