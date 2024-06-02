import { Component } from '@angular/core';
import { IngredientService } from 'src/app/service/ingredient.service';
import { Ingredient } from 'src/app/models/ingredient';


@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent {
ingredients: Ingredient[]=[];
constructor (private ingredientService: IngredientService){}
ngOnInit():void {
  this.loadIngredients();
}
loadIngredients():void {
  this.ingredientService.getIngredient().subscribe((data: Ingredient[]) => {
   this.ingredients = data;
   console.log(this.ingredients);
  })
}

}
