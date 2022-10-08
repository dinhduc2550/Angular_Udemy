import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Recipe} from "./recipe.model";
import {Observable} from "rxjs";
import {DataStorageService} from "../shared/data-storage.service";
import {RecipesService} from "./recipes.service";

@Injectable({providedIn:'root'})
export class RecipesResolverService implements Resolve<Recipe[]>{
  constructor(private dataStorage:DataStorageService,private recipesService:RecipesService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
   {
     const recipes = this.recipesService.getRecipes()
     if(recipes.length === 0){
       return this.dataStorage.fetchRecipes()
     }else{
       return recipes
     }
  }

}
