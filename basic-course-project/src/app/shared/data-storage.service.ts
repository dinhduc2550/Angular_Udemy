import {Injectable} from "@angular/core";
import {HttpClient, HttpClientModule, HttpParams} from "@angular/common/http";
import {Recipe} from "../recipes/recipe.model";
import {RecipesService} from "../recipes/recipes.service";
import {exhaust, exhaustMap, map, take, tap} from "rxjs";
import {AuthService} from "../auth/auth.service";

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private recipesService: RecipesService, private authService: AuthService) {

  }

  storeRecipes() {
    const recipes = this.recipesService.getRecipes()
    this.http.put('https://ng-course-recipe-book-55d4f-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json',
      recipes).subscribe(response => {
      console.log(response)
    })
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>('https://ng-course-recipe-book-55d4f-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json').pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
        });
      }),
      tap(recipes => {
        this.recipesService.setRecipes(recipes)
      })
    )
  }
}
