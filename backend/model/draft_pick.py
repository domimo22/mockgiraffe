
class DraftPick:
    """
    A draft pick is a selection in an NHL draft selection from a team at a certain draft position
    """

    def __init__(self, team, position, player=None):
        """
        Initialize a new draft pick instance.

        :param team: The NHL team awarded the draft pick.
        :param position: The numeric position in the draft round from 1-32.
        :param player: The player selected with the draft pick. Default is None.
        """
        self.team = team
        self.position = position
        self.player = player

    def make_pick(self, player):
        """
        Makes a draft pick. Given a player, assigns the player to the pick
        """
        self.player = player

    def undo_pick(self):
        """
        Undoes a draft pick. 
        """
        self.player = None

    def assign_pick(self, team):
        """
        Assigns a team to a draft pick. 
        """
        self.team = team

    def undo_assign_pick(self):
        """
        Assigns a team to a draft pick. 
        """
        self.team = None

