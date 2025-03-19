import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  styleUrl: './hero.component.css',
  template: `
<h1>{{name}}</h1>

<dl>

  <td>Nombre</td>
  <dd> {{name}}</dd>

  <td>Edad</td>
  <dd> {{age}}</dd>

  <td>Metodo</td>
  <dd> {{getHeroDescriptiion()}}</dd>

  <td>Capitalizado</td>
  <dd> {{capitalizeName}}</dd>
</dl>

  <button *ngIf="name !== 'Alexander'" class="btn btn-primary mx-2" (click)="changeHero()">Cambiar nombre</button>

  <button *ngIf="age !== 45" class="btn btn-primary" (click)="changeAge()">Cambiar edad</button>

  <button class="btn btn-primary mx-2" (click)="resetForm()">Reset</button>
  <hr>`
})
export class HeroComponent {

  public name: string = 'iroman'
  public age: number = 38

  changeHero(): void {
    this.name = 'Alexander';
  }

  changeAge(): void {
    this.age = 45;
  }

  resetForm(): void {
    this.name = 'iroman';
    this.age = 38;
  }


  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescriptiion(): string {
    return `${this.name} - ${this.age}`;
  }

}
