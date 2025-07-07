import { booleanAttribute, Component, input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  template: `
    <h1 class="text-3xl mb-5">{{title()}} - {{withShadow()}}</h1>
  `
})
export class Title {

  public title = input.required<string>();
  public withShadow = input(false, {transform: booleanAttribute});

}
