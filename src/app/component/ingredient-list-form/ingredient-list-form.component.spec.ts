import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientListFormComponent } from './ingredient-list-form.component';

describe('IngredientListFormComponent', () => {
  let component: IngredientListFormComponent;
  let fixture: ComponentFixture<IngredientListFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngredientListFormComponent]
    });
    fixture = TestBed.createComponent(IngredientListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
