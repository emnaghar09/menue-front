import { Dish } from './dish';
import { Ingredient } from './ingredient';

export interface IngredientList {
  id: number;
  dish: Dish | null;
  ingredient: Ingredient | null;
  quantity: number| null;
}
