
import { Component } from '@angular/core';
import { IngredientList } from 'src/app/models/ingredient-list';
import { FormArray, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DishService } from './../../service/dish.service';
import { Dish } from './../../models/dish';
import { IngredientListService } from './../../service/ingredient-list.service';


@Component({
  selector: 'app-ingredient-list-form',
  templateUrl: './ingredient-list-form.component.html',
  styleUrls: ['./ingredient-list-form.component.css']
})
export class IngredientListFormComponent {

// dishForm = FormGroup;
dishForm = new FormGroup({
  id: new FormControl(null, Validators.required),
    time: new FormControl(null, Validators.required),
    difficulty:new FormControl(null, Validators.required),
    rating: new FormControl(null, Validators.required),
    title:new FormControl('', Validators.required),
});

  ingredientListForm = new FormGroup({
    id: new FormControl(null, Validators.required),
    quantity: new FormControl(null, Validators.required),
    dish: new FormControl(null, Validators.required),
    ingredient: new FormControl(null, Validators.required)
  });

  constructor( private ingredientListService: IngredientListService, private fb: FormBuilder, private dishService:DishService) {
  }
  ngOnInit(): void {}

  onSubmit() {
    if (this.dishForm.valid) {
      const dish: Dish = {
        id: this.dishForm.value.id!,
        time: this.dishForm.value.time!,
        difficulty:this.dishForm.value.difficulty!,
        rating:this.dishForm.value.rating!,
        title:this.dishForm.value.title!,
      };
      this.dishService.addDish(dish).subscribe(() => {
        console.log('dish added successfully');
      });
  }
  if (this.ingredientListForm.valid) {
    const ingredientList: IngredientList = {
      id: this.ingredientListForm.value.id!,
      quantity: this.ingredientListForm.value.quantity!,
      dish: this.ingredientListForm.value.dish!, 
      ingredient: this.ingredientListForm.value.ingredient!
    };
    this.ingredientListService.addIngredientList(ingredientList).subscribe(() => {
      console.log('dish added successfully');
    });
}
  }
}
