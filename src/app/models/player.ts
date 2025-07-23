export class Player {
    name: string;
    goals: number;
    assists: number;
    games_played: number;
    birthdate: Date;
    position: string;
    team: string;

    constructor(name: string, goals: number, assists: number, games_played: number, birthdate: Date, position: string, team: string) {
        this.goals = goals;
        this.assists = assists;
        this.games_played = games_played;
        this.birthdate = birthdate;
        this.name = name;
        this.position = position;
        this.team = team;
    }
}
