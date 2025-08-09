import { Component, input, Input } from '@angular/core';
import { Team } from '../../models/team';

@Component({
  selector: 'app-team-board',
  standalone: false,
  templateUrl: './team-board.html',
  styleUrl: './team-board.css'
})
export class TeamBoard {
  @Input() connectedLists: string[] = [];
  @Input() teams: Team[] = [new Team("Vancouver Canucks"), new Team("Toronto Maple Leafs")];
}
