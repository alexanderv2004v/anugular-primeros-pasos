import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <hr>
  <h3>Contador: {{counter}}</h3>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  <hr>


  `
})

export class CounterComponent {
  public counter: number = 8

  increaseBy(valor: number): void {
    this.counter = this.counter + valor;
  }

  reset(): void {
    this.counter = 8;
  }
}
