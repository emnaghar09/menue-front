import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IngredientService } from 'src/app/service/ingredient.service';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css'],
})
export class IngredientFormComponent {
  ingredientsForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormArray([new FormControl('', Validators.required), new FormControl('', Validators.required), new FormControl('', Validators.required)]),
  });

  constructor(private ingredientService: IngredientService, private router: Router) {}

  get descriptionControls() {
    return (this.ingredientsForm.get('description') as FormArray).controls;
  }

  addDescription() {
    (this.ingredientsForm.get('description') as FormArray).push(new FormControl('', Validators.required));
  }

  onSubmit() {
    if (this.ingredientsForm.valid) {
      const ingredient: Ingredient = {
        name: this.ingredientsForm.value.name!,
        description: this.ingredientsForm.value.description as []
      };
      this.ingredientService.addIngredient(ingredient).subscribe(() => {
        this.router.navigateByUrl('ingredient');
      });
    }
  }
}
