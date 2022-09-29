import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import {RecipesService} from "../../recipes.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;

  onSelectedRecipe() {
    this.recipeService.recipesSelected.emit(this.recipe);

  }
  constructor(private recipeService:RecipesService) {}

  ngOnInit(): void {
  }
}
