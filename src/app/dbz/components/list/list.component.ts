import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Character } from '../../inteerfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{

    name: "Trunks",
    power: 10

  }]

  //onDeleteId
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    console.log(id);
    if (!id) return;
    this.onDelete.emit(id);

  }
}
