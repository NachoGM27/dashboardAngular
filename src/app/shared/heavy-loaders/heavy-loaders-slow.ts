import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  imports: [CommonModule],
  template: `<section [ngClass]="['w-full h-[600px]', cssClass()]">Hola mundo</section>`
})
export class HeavyLoadersSlow {

  public cssClass = input.required<string>();

  constructor(){
    const start = Date.now();
    //! Codigo bloqueante, NO USAR!!!!
    while(Date.now() - start < 3000){

    }
  }

}
