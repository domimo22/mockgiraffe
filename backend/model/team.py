
class Team:
    """
    A team is an NHL team.
    """

    def __init__(self, name, team_code, logo):
        """
        Initialize a new NHL team instance.

        :param team_code: The three letter team code used as an identifier in the NHL API.
        :param name: The full name of the team.
        :param logo: The team logo.
        """
        self.name = name
        self.team_code = team_code
        self.logo = logo