// import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";
import {Subject} from "rxjs";
import {Ingredient} from "../shared/ingredient.model";

export class ShoppingListService{
  // ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientsChanged = new Subject<Ingredient[]>()
  startedEditing = new Subject<number>()
  private ingredients: Ingredient[] = [
    new Ingredient('Thịt lợn', 10),
    new Ingredient('Apple', 23),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients(){
    return this.ingredients.slice()
  }

  getIngredient(index:number){
    return this.ingredients[index]
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
  updateIngredient(index:number,newIngredient:Ingredient){
    this.ingredients[index] = newIngredient
    this.ingredientsChanged.next(this.ingredients.slice())
  }
  deleteIngredient(index:number){
    this.ingredients.splice(index,1)
    this.ingredientsChanged.next(this.ingredients.slice())
  }
}
