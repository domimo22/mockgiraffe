import { Component, Input } from '@angular/core';
import { Player } from '../../models/player';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-player-board',
  standalone: false,
  templateUrl: './player-board.html',
  styleUrl: './player-board.css'
})
export class PlayerBoard {
  @Input() players: Player[] = [];

  @Input() connectedLists: string[] = [];

  trackByFn(index: number, item: Player) {
    return item.id;
  }

  drop(event: CdkDragDrop<Player[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
