import { Component } from '@angular/core';
import { Player } from '../../models/player';

@Component({
  selector: 'app-drag-zone',
  standalone: false,
  templateUrl: './drag-zone.html',
  styleUrl: './drag-zone.css'
})
export class DragZone {
  players = [new Player(
      "Nathan Quinn",
      17,
      29,
      54,
      new Date(2007, 8, 29),
      "Center",
      "Quebec Remparts"
    )];
}
