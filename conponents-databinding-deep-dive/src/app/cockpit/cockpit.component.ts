import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
  // newServerContent = '';

  //lay du lieu tu input, tuong tac voi cac content truyen vao
  @ViewChild('serverContentInput1',{static:true}) serverContentInput!:ElementRef;

  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();

  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({serverName:nameInput.value,serverContent:this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({serverName:nameInput.value,serverContent:this.serverContentInput.nativeElement.value});

  }
}
