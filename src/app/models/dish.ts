import { IngredientList } from './ingredient-list';

export interface Dish {
    id: number;
    time: string | null; // Assuming time is stored as a string in 'HH:mm:ss' format
    difficulty: number | null;
    rating: number | null;
    title: string;
  }
  