import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipesService} from "../recipes.service";
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private recipeService:RecipesService) { }
  id!:number;
  editMode = false;
  recipeForm!:FormGroup
  ngOnInit(): void {
    this.route.params.subscribe(
      (params)=>{
        this.id = +params['id'];
        this.editMode = params['id']!=null;
        this.initForm()
        console.log(this.editMode)
      }
    )
  }
  private initForm(){
    let recipeName = ''
    let recipesImagePath = ''
    let recipesDescription = ''
    let recipeIngredients = new FormArray([])
    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id)
      recipeName = recipe.name
      recipesImagePath = recipe.imagePath
      recipesDescription = recipe.description
      if(recipe['ingredients']){
        for (let ingredient of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name':new FormControl(ingredient.name,Validators.required),
              'amount':new FormControl(ingredient.amount,[Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name':new FormControl(recipeName,Validators.required),
      'imagePath': new FormControl(recipesImagePath,Validators.required),
      'description': new FormControl(recipesDescription,Validators.required),
      'ingredients': recipeIngredients
    })
  }

  onSubmit() {
    const newRecipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients']
      );
    if(this.editMode){
      this.recipeService.updateRecipe(this.id,newRecipe)
    }else {
      this.recipeService.addRecipe(newRecipe)
    }
    this.onCancel()
  }
  get controls(){
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name':new FormControl(null,Validators.required ),
        'amount':new FormControl(null,[Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }

  onCancel() {
    this.router.navigate(['../'],{relativeTo:this.route})
  }

  onDeleteIngredient(i: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(i)


  }
}
