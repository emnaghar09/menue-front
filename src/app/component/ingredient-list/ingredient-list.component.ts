import { IngredientListService } from './../../service/ingredient-list.service';
import { IngredientList } from './../../models/ingredient-list';
import { Component } from '@angular/core';


@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent {
ingredientList:IngredientList[] =[];

constructor(private ingredientListService:IngredientListService){}

ngOnInit() {
  this.getIngredientList();
}

getIngredientList():void{
this.ingredientListService.getIngredientList().subscribe((data: IngredientList[]) => {
  this.ingredientList = data;
 })
}
}
