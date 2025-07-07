import { Component, signal } from '@angular/core';

type Grade = 'A'|'B'|'C'|'D'|'F';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html'
})
export default class ControlFlow {

  public showContent = signal<boolean>(false);
  public grade = signal<Grade>('A');
  public frameworks = signal<string[]>(['Angular', 'Vue', 'Svelte', 'Qwik', 'React']);
  public frameworks2 = signal<string[]>([]);

  public changeContent(){
    this.showContent.update(value => !value);
  }

}
