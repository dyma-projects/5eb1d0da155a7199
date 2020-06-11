import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  OnInit
} from "@angular/core";

@Directive({ selector: "[colorChange]" })
export class ColorDirective implements OnInit {
  public colorValue = "orange";

  public MyColors = {
    ArrowUp: "blue",
    ArrowRight: "red",
    ArrowDown: "yellow",
    ArrowLeft: "orange",
  };

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  @HostListener("window:keyup", ["$event"]) windowClick($event) {
    const myKey: string = $event.key;

    Object.entries(this.MyColors).forEach((x) => {
      x[0] === myKey ? (this.colorValue = x[1]) : null;
    });
    this.renderer.setStyle(this.el.nativeElement, "color", this.colorValue);
  }
}
