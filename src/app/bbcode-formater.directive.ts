import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBbcodeFormater]'
})
export class BbcodeFormaterDirective {
  private selectedString: string;

  constructor(private el: ElementRef) {

   }

  // @HostListener('mousedown') onMousedown(){
  //   let value = this.el.nativeElement;
  //   console.log(value);
  // }

  @HostListener('mouseup') onMouseup(){
    this.selectedString = window.getSelection().toString() || ''; 
    console.log(this.selectedString);

  }

}
