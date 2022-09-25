import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrOddNumber: number[] = [];
  arrEvenNumber: number[] = [];

  onStart(num: number) {
    // num % 2 == 0 ? this.arrEvenNumber.push(num) : this.arrOddNumber.push(num)
    if (num % 2 === 0) {
      this.arrEvenNumber.push(num)
    } else {
      this.arrOddNumber.push(num)
    }
    console.log(num)
  }

  onStop(num: { num: number }) {

  }
}
