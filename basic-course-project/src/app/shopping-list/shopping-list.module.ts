import {NgModule} from "@angular/core";
import {ShoppingListComponent} from "./shopping-list.component";
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {ShoppingListRoutingModule} from "./shopping-list-routing.module";
import {LoggingService} from "../logging.service";

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    FormsModule,
    ShoppingListRoutingModule
  ],
  // providers:[LoggingService]
})
export class ShoppingListModule {


}
