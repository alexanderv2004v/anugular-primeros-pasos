import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesName: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor', 'Spiderman'];

  public deleteHero?: string;

  removeLastHeros(): void {
    this.deleteHero = this.heroesName.pop();
  }


}
