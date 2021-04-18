import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h1>Hello {{ name }}!</h1>
    <p>
      <input type="checkbox" #strike />Strike
      <input type="checkbox" #yellow />Yellow Background
      <input type="checkbox" #bold />Bold
    </p>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
}
