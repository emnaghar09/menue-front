import { Dish } from './../models/dish';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DishService {
  private ApiUrl = 'http://127.0.0.1:8001/dish'

  constructor(private httpClient: HttpClient) { }

  getDish():Observable<Dish[]>{
    return this.httpClient.get<Dish[]>(this.ApiUrl).pipe(
      map((response:any)=>response.dish)
    )
  }
  addDish(dish: Dish):Observable<Dish>{
    return this.httpClient.post<Dish>(this.ApiUrl, dish);
  }
}
