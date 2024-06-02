import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientListComponent } from './component/ingredient-list/ingredient-list.component';
import { IngredientListFormComponent } from './component/ingredient-list-form/ingredient-list-form.component';
import { IngredientComponent } from './component/ingredient/ingredient.component';
import { IngredientFormComponent } from './component/ingredient-form/ingredient-form.component';

const routes: Routes = [
  {path: 'ingredientList', component:IngredientListComponent},
  {path: 'addIngredientList', component:IngredientListFormComponent},
  {path: 'ingredient', component:IngredientComponent},
  {path: 'addIngredient', component:IngredientFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
