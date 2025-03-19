import { Injectable } from '@angular/core';
import { Character } from '../inteerfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DBZService {

  public characters: Character[] = [{

    id: uuid(),
    name: "Krillin",
    power: 100

  },
  {
    id: uuid(),
    name: "Goku",
    power: 9500
  },
  {
    id: uuid(),
    name: "Vegeta",
    power: 8000
  }

  ];

  addCharacter(character: Character): void {

    const newCharacter: Character = { id: uuid(), ...character }
    this.characters.push(newCharacter)

  }

  /*  onDeleteCharacter(index: number): void {

      this.characters.splice(index, 1);

    }
      */

  deleteCharacterById(id: string): void {

    this.characters = this.characters.filter(character => character.id !== id);

  }

}
