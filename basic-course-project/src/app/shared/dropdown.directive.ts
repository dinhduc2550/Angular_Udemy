import {Directive, ElementRef, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector:'[appDropdown]'
})
export class DropdownDirective{
  @HostBinding('class.open') isOpen = false;
  // @HostListener('click') toggleOpen1(){
  //   this.isOpen = !this.isOpen;
  // }

  //dropdown close when click anywhere
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}
