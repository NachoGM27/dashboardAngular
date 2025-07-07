import { Component, computed, signal } from '@angular/core';
import { Title } from '../../../shared/title/title';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-change-detection',
  imports: [Title, JsonPipe],
  template: `
    <app-title [title]="currentFramework()" />
    <pre>{{frameworkAsSignal() | json}}</pre>
    <pre>{{frameworkAsproperty | json}}</pre>
  `
})
export default class ChangeDetection {

  public currentFramework = computed(() => `Change detection - ${this.frameworkAsSignal().name}`)

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });
  public frameworkAsproperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  constructor() {
    setTimeout(() => {
      //! Si se actualiza una señal se actualiza la property normal, no hacerlo asi
      //this.frameworkAsproperty.name = 'React';
      this.frameworkAsSignal.update(value => ({...value, name: 'React'}));

      console.log('Hecho');
    },3000);
  }

}
