import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PriceModule } from "../price";
import { ShareModule } from "../share";
import { LazyComponent } from "./lazy-comp/lazy.component";
import { LazyCreateDirectiveComponent } from "./lazy-creation-directive/lazy-creation-directive.component";
import { LazyCreationComponent } from "./lazy-creation/lazy-creation.component";

@NgModule({
  imports: [CommonModule, PriceModule, ShareModule],
  declarations: [
    LazyComponent,
    LazyCreationComponent,
    LazyCreateDirectiveComponent
  ],
  exports: [LazyComponent, LazyCreationComponent, LazyCreateDirectiveComponent]
})
export class LazyModule {}
