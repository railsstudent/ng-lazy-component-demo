import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PriceService {
  getPrice() {
    console.log("get price");
    return of(20 + Math.random() * 10);
  }
}
