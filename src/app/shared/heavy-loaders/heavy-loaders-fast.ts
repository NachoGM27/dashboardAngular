import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full', cssClass()]">
      <ng-content />
    </section>
  `
})
export class HeavyLoadersFast {

  public cssClass = input.required<string>();

}
