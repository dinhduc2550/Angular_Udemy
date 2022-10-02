import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipesService {
  // recipesSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe( "Pu0n", "This is simply a test 1", "https://assets.bonappetit.com/photos/57ae158a53e63daf11a4e1f3/master/pass/grilled-asparagus-with-harissa-646.jpg",
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
    new Recipe( "Food", "This is simply a test 2", "https://media.baamboozle.com/uploads/images/152185/1607591595_198751",
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]),
    new Recipe( "Bánh Đa", "This is simply a test 3", "https://bepvang.org.vn/Userfiles/Upload/images/Download/2017/2/24/268f41e9fdcd49999f327632ed207db1.jpg",
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
    new Recipe( "Tôm chiên", "This is simply a test 4", "https://nhahanghalong.vn/wp-content/uploads/2018/05/549577cf14e2fabca3f3.jpg",
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
    new Recipe( "Bánh cuốn", "This is simply a test 5", "https://beptueu.vn/hinhanh/tintuc/banh-cuon-hinh-anh-mon-an-dac-san-viet-nam.jpg",
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
  ];

  constructor(private shoppingListService: ShoppingListService) {

  }


  getRecipes() {
    //slice la de tao 1 ban sao
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index]
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients)
  }
}
