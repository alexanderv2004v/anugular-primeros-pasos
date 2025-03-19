import { DBZService } from '../services/dbz.service';
import { Character } from './../inteerfaces/character.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html'
})

export class MainPageComponent {

  constructor(private dbzService: DBZService) { }

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleCharacter(id: string): void {

    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(Character: Character): void {
    this.dbzService.addCharacter(Character);

  }

}
