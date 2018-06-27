import { Component, OnInit } from "@angular/core";

@Component({
  selector: "lib-lib1",
  template: `
    <p>
      lib1 works!
    </p>
    <lib-lib2></lib-lib2>
  `,
  styles: []
})
export class Lib1Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
