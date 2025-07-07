import { Component } from '@angular/core';
import { Title } from '../../../shared/title/title';

@Component({
  selector: 'app-view-transition',
  imports: [Title],
  template: `
    <app-title title="View Transition 2"/>

    <section class="flex justify-end">
      <img srcset="https://picsum.photos/id/237/200/300" alt="Picsum"
        width="200" height="300" style="view-transition-name: hero1" />

      <div class="fixed bottom-16 right-10 bg-purple-500 w-30 h-30 rounded" style="view-transition-name: hero2"></div>

    </section>
  `
})
export default class ViewTransition2 {

}
