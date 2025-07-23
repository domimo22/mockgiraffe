import { Component } from '@angular/core';
import { Player } from '../../models/player';

@Component({
  selector: 'app-player-card',
  standalone: false,
  templateUrl: './player-card.html',
  styleUrl: './player-card.css'
})
export class PlayerCard {

  constructor() { }

  player: Player = new Player(
    "Nathan Quinn",
    17,
    29,
    54,
    new Date(2007, 8, 29),
    "Center",
    "Quebec Remparts"
  );
}
