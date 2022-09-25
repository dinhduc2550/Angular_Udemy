import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('eventStart') onStarted = new EventEmitter<number>()
  // @Output('eventStop') onStopped = new EventEmitter<{type:string,value:number}>()

  refInterval!: number ;
  lastNumber:number = 0;

  constructor() { }
  ngOnInit(): void {
  }

  onClickStart() {
    // this.onStarted.emit({num:1});
    this.refInterval = setInterval(() =>{
      this.onStarted.emit(++this.lastNumber);
    }, 1000);
  }

  onClickStop(){
    clearInterval(this.refInterval);
  }

}
