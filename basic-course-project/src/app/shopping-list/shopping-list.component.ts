import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
  ingredients: Ingredient[] = [
    new Ingredient('Thịt lợn', 10),
    new Ingredient('Apple', 23),
    new Ingredient('Tomatoes', 10),
  ];
  constructor() {}

  ngOnInit(): void {}
}
