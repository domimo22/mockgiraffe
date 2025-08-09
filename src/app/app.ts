import { Component, Input, signal } from '@angular/core';
import { Player } from './models/player';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('mockgiraffe');

  @Input() numPicks: number = 10;

  @Input() players: Player[] = [
    new Player(
      'Nathan Quinn',
      17,
      29,
      54,
      new Date(2007, 8, 29),
      'Center',
      'Quebec Remparts',
      2
    ),
    new Player(
      'Dom Imondi',
      17,
      29,
      54,
      new Date(2007, 8, 29),
      'Weeehooo',
      'Wahoo',
      1
    ),
  ];

  teams: Player[] = [];

  getConnectedLists(includeListA: boolean): string[] {
    const ids = [];
    //include ListA in the connected lists if specified
    if (includeListA) {
      ids.push('listA');
    }

    for (let i = 1; i <= this.numPicks; i++) {
      ids.push(`pick${i}`);
    }

    return ids;
  }
}
