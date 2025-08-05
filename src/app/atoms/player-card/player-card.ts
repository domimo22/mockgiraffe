import { Component, Input } from '@angular/core';
import { Player } from '../../models/player';

@Component({
  selector: 'app-player-card',
  standalone: false,
  templateUrl: './player-card.html',
  styleUrl: './player-card.css'
})
export class PlayerCard {

  constructor() { }

  @Input() player!: Player;
}
