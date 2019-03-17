import { TemplatePortal } from "@angular/cdk/portal";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild
} from "@angular/core";
import { Observable } from "rxjs";
import { filter, take } from "rxjs/operators";
import { HeaderPortalService, VisibilityService } from "../../services";

@Component({
  selector: "lazy-creation",
  templateUrl: "./lazy-creation.component.html",
  styles: [
    `
      .header {
        color: #8e2eb8;
        /*        box-shadow: 10px 12px 8px 2px rgba(142, 46, 184, 0.5);*/
        border: 3px dotted #8e2eb8;
        padding: 1rem;
        margin: 0.5rem 0.5rem 0.5rem 0;
      }

      .main-line {
        font-size: 2rem;
        text-decoration: underline;
        text-shadow: 10px 5px 2px rgba(150, 150, 150, 1);
        margin-bottom: 0;
      }

      .sub-line {
        font-size: 1.2rem;
        text-shadow: 4px 4px 2px rgba(150, 150, 150, 1);

        font-style: italic;
        margin-bottom: 0;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyCreationComponent implements OnInit {
  @ViewChild("wrapper")
  private wrapper: ElementRef;

  @ViewChild("header")
  portal: TemplateRef<any>;

  createComponent$: Observable<boolean>;

  constructor(
    private visibilityService: VisibilityService,
    private headerPortalService: HeaderPortalService
  ) {}

  ngOnInit() {
    this.createComponent$ = this.visibilityService
      .elementInSight(this.wrapper)
      .pipe(
        filter(visible => visible),
        take(1)
      );

    this.headerPortalService.setPortal(
      new TemplatePortal(this.portal, undefined, {})
    );
  }
}
