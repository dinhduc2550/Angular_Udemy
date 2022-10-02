import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import {RecipesService} from "./recipes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipesService]
})
export class RecipesComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // this.recipeService.recipesSelected.subscribe(
    //   (recipe:Recipe)=>{
    //     this.selectedRecipe = recipe
    //   }
    // )
  }

}
