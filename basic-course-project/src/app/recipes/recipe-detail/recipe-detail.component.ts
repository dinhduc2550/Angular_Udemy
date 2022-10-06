import { Component, OnInit } from '@angular/core';
import {RecipesService} from "../recipes.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe!:Recipe;
  id!:number;
  constructor(private recipeService:RecipesService,
              private router:Router
              ,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id = +params['id'];
      console.log(this.id)
      this.recipe = this.recipeService.getRecipe(this.id);
    })
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditRecipes(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id)
    this.router.navigate(['/recipes'])
  }
}
