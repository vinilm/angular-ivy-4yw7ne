import { Component, Input } from "@angular/core";
import { NgModel } from "@angular/forms";

@Component({
  selector: "hello",
  template: `
    <div [ngClass]="{ bold: isBold, strike: isStrike, highlight: isHighlight }">
      <h1>Hello {{ name }}!</h1>
      <p>
        <input type="checkbox" [(ngModel)]="isBold" />Bold
        <input type="checkbox" [(ngModel)]="isStrike" />Strike
        <input type="checkbox" [(ngModel)]="isHighlight" />Highlight
      </p>
    </div>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
      .bold {
        font-weight: bold;
      }
      .highlight {
        background-color: cyan;
      }
      .strike {
        text-decoration: line-through;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
  isBold = false;
  isStrike = false;
  isHighlight = false;
}
