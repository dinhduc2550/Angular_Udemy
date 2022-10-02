// import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";
import {Subject} from "rxjs";
import {Ingredient} from "../shared/ingredient.model";

export class ShoppingListService{
  // ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientsChanged = new Subject<Ingredient[]>()
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
    this.ingredientsChanged.next(this.ingredients.slice())
  }
  addIngredients(ingredients:Ingredient[]){
    // for (let ingredient of ingredients){
    //   this.pushIngredient(ingredient)
    // }
    //c2
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.next(this.ingredients.slice())
  }
}
