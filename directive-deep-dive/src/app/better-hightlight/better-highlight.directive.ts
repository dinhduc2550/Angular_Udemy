import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{


  constructor(private elRef:ElementRef,private renderer: Renderer2) { }
  ngOnInit() {

  }

  @HostListener('mouseenter') mouseOver(evenData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }
  @HostListener('mouseleave') mouseLeave(evenData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
  }
}