import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  constructor(titleService: Title) {
    titleService.setTitle("Lazy Component Demo");
  }
}
