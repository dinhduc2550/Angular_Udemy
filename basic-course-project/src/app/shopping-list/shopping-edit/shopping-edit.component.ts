import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild('f') slForm!:NgForm
  subscription!:Subscription
  editMode = false
  editedItemIndex!:number
  editedItem!:Ingredient
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
   this.subscription = this.shoppingListService.startedEditing.subscribe(
     (index:number)=>{
       this.editedItemIndex = index
       this.editMode = true
       this.editedItem = this.shoppingListService.getIngredient(index)
       this.slForm.setValue({
         name:this.editedItem.name,
         amount: this.editedItem.amount
       })
     }
   )
  }

  onSubmitItem(form:NgForm){
    const value = form.value
    const newIngredient = new Ingredient(value.name,value.amount)
    // this.ingredientAdded.emit(newIngredient);
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editedItemIndex,newIngredient)
    }else
    this.shoppingListService.pushIngredient(newIngredient)
    this.editMode = false
    form.reset()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  onClear() {
    this.slForm.reset()
    this.editMode = false
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex)
    this.onClear()
  }
}
