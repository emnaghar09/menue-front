import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
});

constructor (private ingredientService: IngredientService, private router: Router) {
  
}

onSubmit() {
  if (this.ingredientsForm.valid) {
    const ingredient: Ingredient = {
      name: this.ingredientsForm.value.name!
    };
    this.ingredientService.addIngredient(ingredient).subscribe(() => {
      this.router.navigateByUrl('ingredient');

    });
}
}
}
