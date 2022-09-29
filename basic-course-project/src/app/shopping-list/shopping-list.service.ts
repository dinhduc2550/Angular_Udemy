import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService{
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Thịt lợn', 10),
    new Ingredient('Apple', 23),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredient(){
    return this.ingredients.slice()
  }
  pushIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }
  addIngredients(ingredients:Ingredient[]){
    // for (let ingredient of ingredients){
    //   this.pushIngredient(ingredient)
    // }
    //c2
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }
}
