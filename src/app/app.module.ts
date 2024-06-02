import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientComponent } from './component/ingredient/ingredient.component';
import { HttpClientModule } from '@angular/common/http';
import { IngredientFormComponent } from './component/ingredient-form/ingredient-form.component';
import { IngredientListFormComponent } from './component/ingredient-list-form/ingredient-list-form.component';
import { IngredientListComponent } from './component/ingredient-list/ingredient-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    IngredientComponent,
    IngredientFormComponent,
    IngredientListFormComponent,
    IngredientListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
