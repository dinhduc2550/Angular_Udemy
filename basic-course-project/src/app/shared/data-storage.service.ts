import {Injectable} from "@angular/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Recipe} from "../recipes/recipe.model";
import {RecipesService} from "../recipes/recipes.service";

@Injectable({providedIn:'root'})
export class DataStorageService{
  constructor(private http: HttpClient,private recipesService:RecipesService) {

  }
  storeRecipes(){
    const recipes = this.recipesService.getRecipes()
     this.http.put('https://ng-course-recipe-book-55d4f-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json',
      recipes).subscribe(response=>{
        console.log(response)
     })
  }
  fetchRecipes(){
    this.http.get<Recipe[]>('https://ng-course-recipe-book-55d4f-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json')
      .subscribe(recipes=>{
      this.recipesService.setRecipes(recipes)
    })
  }
}
