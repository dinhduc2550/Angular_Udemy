import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Pu0n", "This is simply a test 1", "https://assets.bonappetit.com/photos/57ae158a53e63daf11a4e1f3/master/pass/grilled-asparagus-with-harissa-646.jpg"),
    new Recipe("Food", "This is simply a test 2", "https://media.baamboozle.com/uploads/images/152185/1607591595_198751"),
    new Recipe("Bánh Đa", "This is simply a test 3", "https://bepvang.org.vn/Userfiles/Upload/images/Download/2017/2/24/268f41e9fdcd49999f327632ed207db1.jpg"),
    new Recipe("Tôm chiên", "This is simply a test 4", "https://nhahanghalong.vn/wp-content/uploads/2018/05/549577cf14e2fabca3f3.jpg"),
    new Recipe("Bánh cuốn", "This is simply a test 5", "https://beptueu.vn/hinhanh/tintuc/banh-cuon-hinh-anh-mon-an-dac-san-viet-nam.jpg"),
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
