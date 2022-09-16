import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: ` <p>This is success alert, you</p> `,
  styles: [
    `
      p {
        padding: 20px;
        color: green;
        background-color: mistyrose;
        border: 1px solid red;
        text-align:center;
      }
    `,
  ],
})
export class SuccessAlertComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
