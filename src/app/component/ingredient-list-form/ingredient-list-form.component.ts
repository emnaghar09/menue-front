import { Component } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DishService } from './../../service/dish.service';
import { Dish } from './../../models/dish';
import { IngredientListService } from './../../service/ingredient-list.service';
import { IngredientList } from 'src/app/models/ingredient-list';

@Component({
  selector: 'app-ingredient-list-form',
  templateUrl: './ingredient-list-form.component.html',
  styleUrls: ['./ingredient-list-form.component.css']
})
export class IngredientListFormComponent {
  dishForm = new FormGroup({
    id: new FormControl(null, Validators.required),
    time: new FormControl(null, Validators.required),
    difficulty: new FormControl(null, Validators.required),
    rating: new FormControl(null, Validators.required),
    title: new FormControl('', Validators.required),
    ingredientListForm: new FormGroup({
      id: new FormControl(null, Validators.required),
      quantity: new FormControl(null, Validators.required),
      ingredient: new FormControl('', Validators.required)
    })
  });

  constructor(
    private ingredientListService: IngredientListService, 
    private fb: FormBuilder, 
    private dishService: DishService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.dishForm.valid) {
      const dish: Dish = {
        id: this.dishForm.value.id!,
        time: this.dishForm.value.time!,
        difficulty: this.dishForm.value.difficulty!,
        rating: this.dishForm.value.rating!,
        title: this.dishForm.value.title!,
      };

      this.dishService.addDish(dish).subscribe(() => {
        console.log('Dish added successfully');
      });

      const ingredientListFormGroup = this.dishForm.get('ingredientListForm') as FormGroup;
      if (ingredientListFormGroup.valid) {
        const ingredientList: IngredientList = {
          id: ingredientListFormGroup.value.id!,
          quantity: ingredientListFormGroup.value.quantity!,
          dish: dish, 
          ingredient: ingredientListFormGroup.value.ingredient!
        };

        this.ingredientListService.addIngredientList(ingredientList).subscribe(() => {
          console.log('Ingredient list added successfully');
        });
      }
    }
  }
}
