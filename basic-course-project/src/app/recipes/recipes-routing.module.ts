import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes.component";
import {AuthGuard} from "../auth/auth.guard";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipesResolverService} from "./recipes-resolver.service";
const routes:Routes = [
  {
    path: '',
    component: RecipesComponent,
    canActivate:[AuthGuard],
    children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent},
      //neu de new(hard code) sau path id thi route se
      //nhan nham new la value cua id
      {path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService]},
      {path: ':id/edit', component: RecipeEditComponent,resolve: [RecipesResolverService]}
    ]
  },
]
@NgModule({
  imports:[RouterModule.forChild(routes)]
  ,exports:[RouterModule]
})
export class RecipesRoutingModule{

}
