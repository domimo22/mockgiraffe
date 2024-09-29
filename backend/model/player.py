
class Player:
    """
    A player is an NHL draft-eligible.
    """

    def __init__(self, name, position, height, weight, team, draft_year, games_played=0, goals=0, assists=0, penalties=0):
        """
        Initialize a new hockey player instance.

        :param name: The name of the player.
        :param position: The position of the player (e.g., 'Center', 'Winger', 'Defenseman', 'Goalie').
        :param height: The height of the player in inches or cm.
        :param weight: The weight of the player in pounds or kg.
        :param team: The current team of the player.
        :param draft_year: The year the player is eligible for the draft.
        :param goals: The number of goals scored by the player. Default is 0.
        :param games_played: The number of games played in the current season by the player. Default is 0.
        :param assists: The number of assists by the player. Default is 0.
        :param penalties: The penalty minutes accumulated by the player. Default is 0.
        """
        self.name = name
        self.position = position
        self.height = height
        self.weight = weight
        self.team = team
        self.draft_year = draft_year
        self.goals = goals
        self.games_played = games_played
        self.assists = assists
        self.penalties = penalties