import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  LazyComponent,
  LazyCreateDirectiveComponent,
  LazyCreationComponent,
  LazyModule
} from "./lazy";

const routes: Routes = [
  { path: "lazy", component: LazyComponent },
  { path: "lazy-create", component: LazyCreationComponent },
  { path: "lazy-directive", component: LazyCreateDirectiveComponent },
  { path: "**", redirectTo: "/lazy" }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes), LazyModule],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
