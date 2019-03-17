import { TemplatePortal } from "@angular/cdk/portal";
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  TemplateRef,
  ViewChild
} from "@angular/core";
import { HeaderPortalService } from "src/app/services";

@Component({
  selector: "lazy-create-visible-with",
  templateUrl: "./lazy-creation-directive.component.html",
  styles: [
    `
      .header {
        color: #dc6fcb;
        box-shadow: 10px 10px 15px -1px rgba(255, 0, 0, 0.6);
        border: 2px dashed #dc6fcb;
        padding: 1rem;
        margin: 0.5rem 0.5rem 0.5rem 0;
      }

      .main-line {
        font-size: 2rem;
        text-decoration: underline;
        margin-bottom: 0;
      }

      .sub-line {
        font-size: 1.2rem;
        font-style: italic;
        margin-bottom: 0;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyCreateDirectiveComponent implements OnInit {
  @ViewChild("header")
  portal: TemplateRef<any>;

  constructor(private headerPortalService: HeaderPortalService) {}

  ngOnInit() {
    this.headerPortalService.setPortal(
      new TemplatePortal(this.portal, undefined, {})
    );
  }
}
