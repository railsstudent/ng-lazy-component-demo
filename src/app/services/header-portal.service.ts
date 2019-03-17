import { Portal } from "@angular/cdk/portal";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HeaderPortalService {
  private portal$ = new BehaviorSubject<Portal<any>>(undefined);

  setPortal(portal: Portal<any>) {
    this.portal$.next(portal);
  }

  get portal() {
    return this.portal$.asObservable();
  }
}
