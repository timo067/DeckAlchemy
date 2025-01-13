import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarGameComponent } from './similar-game.component';

describe('SimilarGameComponent', () => {
  let component: SimilarGameComponent;
  let fixture: ComponentFixture<SimilarGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimilarGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimilarGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
