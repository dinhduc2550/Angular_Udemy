import {Component, ContentChild, ElementRef, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //tuy chinh nhan file css
})
export class ServerElementComponent implements OnInit{
  @Input('srvElement') element!: { type: string; name: string; content: string };
@ContentChild('contentParagraph') paraGraph!:ElementRef
  constructor() { }

  ngOnInit(): void {
  console.log('Text Content of Paragraph: '+this.paraGraph.nativeElement.textContent)
  }

}
