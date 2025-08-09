import { Component, Input } from '@angular/core';
import { Team } from '../../models/team';
import {
  CdkDragDrop,
  CdkDragEnter,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Player } from '../../models/player';

@Component({
  selector: 'app-team-card',
  standalone: false,
  templateUrl: './team-card.html',
  styleUrl: './team-card.css',
})
export class TeamCard {
  @Input() teams: Player[] = [];
  notOccupied: boolean = true;

  canEnter = () => {
    return () => this.teams.length === 0;
  };

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

  trackByFn(index: number, item: Player) {
    return item.id;
  }
}
