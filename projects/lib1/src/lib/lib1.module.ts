import { NgModule } from "@angular/core";
import { Lib1Component } from "./lib1.component";
import { Lib2Module } from "lib2";

@NgModule({
  imports: [Lib2Module],
  declarations: [Lib1Component],
  exports: [Lib1Component]
})
export class Lib1Module {}
