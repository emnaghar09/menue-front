import { Injectable } from '@angular/core';
import { IngredientList } from './../models/ingredient-list';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class IngredientListService {

  private ApiUrl = 'http://127.0.0.1:8001/ingredientList'

  constructor(private httpClient: HttpClient) { }

  getIngredientList():Observable<IngredientList[]>{
    return this.httpClient.get<IngredientList[]>(this.ApiUrl).pipe(
      map((response:any)=>response.ingredientList)
    )
  }

  addIngredientList(ingredientList: IngredientList):Observable<IngredientList>{
    return this.httpClient.post<IngredientList>(this.ApiUrl, ingredientList);
  }
}

