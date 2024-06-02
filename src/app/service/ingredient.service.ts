
import { Ingredient } from '../models/ingredient';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  private ApiUrl = 'http://127.0.0.1:8001/ingredient'

  constructor(private httpClient: HttpClient) { }

  getIngredient():Observable<Ingredient[]>{
    return this.httpClient.get<Ingredient[]>(this.ApiUrl).pipe(
      map((response: any) => response.ingredients)
    );
  }

  addIngredient(ingredient: Ingredient):Observable<Ingredient>{
    return this.httpClient.post<Ingredient>(this.ApiUrl, ingredient);
  }


}
