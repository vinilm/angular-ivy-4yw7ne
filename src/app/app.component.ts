import { Component, Injectable, VERSION } from "@angular/core";
import { interval } from "rxjs";
import { root } from "rxjs/internal/util/root";
import { map } from "rxjs/operators";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  clock$;

  constructor() {
    this.clock$ = interval(1000).pipe(map(() => new Date()));
  }
}

@Injectable({
  providedIn: root
})
export class TextService {
  public content = ["Hello World", "Sample Sentence"];
}
