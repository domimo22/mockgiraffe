
class DraftRound:
    """
    A draft round is one of seven rounds in an NHL draft, made up of 32 draft picks.
    """

    def __init__(self, round, picks=[]*32):
        """
        Initialize a new draft round instance.

        :param round: The numeric round of the draft between 1-7.
        :param picks: A list of 32 draft picks.
        """
        self.round = round
        self.picks = picks