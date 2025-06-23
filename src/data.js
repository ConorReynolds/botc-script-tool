export const chars = [
  {
    "id": "washerwoman",
    "name": "Washerwoman",
    "edition": "tb",
    "team": "townsfolk",
    "firstNightReminder":
      "Show the Townsfolk character token. Point to both the *TOWNSFOLK* and *WRONG* players.",
    "otherNightReminder": "",
    "reminders": [
      "Townsfolk",
      "Wrong",
    ],
    "setup": false,
    "ability":
      "You start knowing that 1 of 2 players is a particular Townsfolk.",
  },
  {
    "id": "librarian",
    "name": "Librarian",
    "edition": "tb",
    "team": "townsfolk",
    "firstNightReminder":
      "Show the Outsider character token. Point to both the *OUTSIDER* and *WRONG* players.",
    "otherNightReminder": "",
    "reminders": [
      "Outsider",
      "Wrong",
    ],
    "setup": false,
    "ability":
      "You start knowing that 1 of 2 players is a particular Outsider. (Or that zero are in play.)",
  },
  {
    "id": "investigator",
    "name": "Investigator",
    "edition": "tb",
    "team": "townsfolk",
    "firstNightReminder":
      "Show the Minion character token. Point to both the *MINION* and *WRONG* players.",
    "otherNightReminder": "",
    "reminders": [
      "Minion",
      "Wrong",
    ],
    "setup": false,
    "ability": "You start knowing that 1 of 2 players is a particular Minion.",
  },
  {
    "id": "chef",
    "name": "Chef",
    "edition": "tb",
    "team": "townsfolk",
    "firstNightReminder": "Give a finger signal.",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability": "You start knowing how many pairs of evil players there are.",
  },
  {
    "id": "empath",
    "name": "Empath",
    "edition": "tb",
    "team": "townsfolk",
    "firstNightReminder": "Give a finger signal.",
    "otherNightReminder": "Give a finger signal.",
    "reminders": [],
    "setup": false,
    "ability":
      "Each night, you learn how many of your 2 alive neighbors are evil.",
  },
  {
    "id": "fortuneteller",
    "name": "Fortune Teller",
    "edition": "tb",
    "team": "townsfolk",
    "firstNightReminder":
      "The Fortune Teller chooses 2 players. Nod if either is the Demon (or the *RED HERRING*).",
    "otherNightReminder":
      "The Fortune Teller chooses 2 players. Nod if either is the Demon (or the *RED HERRING*).",
    "reminders": [
      "Red Herring",
    ],
    "setup": false,
    "ability":
      "Each night, choose 2 players: you learn if either is a Demon. There is a good player that registers as a Demon to you.",
  },
  {
    "id": "undertaker",
    "name": "Undertaker",
    "edition": "tb",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder":
      "If a player was executed today, show their character token.",
    "reminders": [
      "Executed",
    ],
    "setup": false,
    "ability":
      "Each night*, you learn which character died by execution today.",
  },
  {
    "id": "monk",
    "name": "Monk",
    "edition": "tb",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder": "The Monk chooses a player. :reminder:",
    "reminders": [
      "Protected",
    ],
    "setup": false,
    "ability":
      "Each night*, choose a player (not yourself): they are safe from the Demon tonight.",
  },
  {
    "id": "ravenkeeper",
    "name": "Ravenkeeper",
    "edition": "tb",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder":
      "If the Ravenkeeper died tonight, the Ravenkeeper chooses a player. Show that player’s character token.",
    "reminders": [],
    "setup": false,
    "ability":
      "If you die at night, you are woken to choose a player: you learn their character.",
  },
  {
    "id": "virgin",
    "name": "Virgin",
    "edition": "tb",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [
      "No ability",
    ],
    "setup": false,
    "ability":
      "The 1st time you are nominated, if the nominator is a Townsfolk, they are executed immediately.",
  },
  {
    "id": "slayer",
    "name": "Slayer",
    "edition": "tb",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [
      "No ability",
    ],
    "setup": false,
    "ability":
      "Once per game, during the day, publicly choose a player: if they are the Demon, they die.",
  },
  {
    "id": "soldier",
    "name": "Soldier",
    "edition": "tb",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability": "You are safe from the Demon.",
  },
  {
    "id": "mayor",
    "name": "Mayor",
    "edition": "tb",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability":
      "If only 3 players live & no execution occurs, your team wins. If you die at night, another player might die instead.",
  },
  {
    "id": "butler",
    "name": "Butler",
    "edition": "tb",
    "team": "outsider",
    "firstNightReminder": "The Butler chooses a player. :reminder:",
    "otherNightReminder": "The Butler chooses a player. :reminder:",
    "reminders": [
      "Master",
    ],
    "setup": false,
    "ability":
      "Each night, choose a player (not yourself): tomorrow, you may only vote if they are voting too.",
  },
  {
    "id": "drunk",
    "name": "Drunk",
    "edition": "tb",
    "team": "outsider",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "remindersGlobal": [
      "Drunk",
    ],
    "setup": true,
    "ability":
      "You do not know you are the Drunk. You think you are a Townsfolk character, but you are not.",
  },
  {
    "id": "recluse",
    "name": "Recluse",
    "edition": "tb",
    "team": "outsider",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability":
      "You might register as evil & as a Minion or Demon, even if dead.",
  },
  {
    "id": "saint",
    "name": "Saint",
    "edition": "tb",
    "team": "outsider",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability": "If you die by execution, your team loses.",
  },
  {
    "id": "poisoner",
    "name": "Poisoner",
    "edition": "tb",
    "team": "minion",
    "firstNightReminder": "The Poisoner chooses a player. :reminder:",
    "otherNightReminder": "The Poisoner chooses a player. :reminder:",
    "reminders": [
      "Poisoned",
    ],
    "setup": false,
    "ability":
      "Each night, choose a player: they are poisoned tonight and tomorrow day.",
  },
  {
    "id": "spy",
    "name": "Spy",
    "edition": "tb",
    "team": "minion",
    "firstNightReminder": "Show the Grimoire for as long as the Spy needs.",
    "otherNightReminder": "Show the Grimoire for as long as the Spy needs.",
    "reminders": [],
    "setup": false,
    "ability":
      "Each night, you see the Grimoire. You might register as good & as a Townsfolk or Outsider, even if dead.",
  },
  {
    "id": "scarletwoman",
    "name": "Scarlet Woman",
    "edition": "tb",
    "team": "minion",
    "firstNightReminder": "",
    "otherNightReminder":
      "If the Scarlet Woman became the Demon today, show the *YOU ARE* & Demon token.",
    "reminders": [
      "Demon",
    ],
    "setup": false,
    "ability":
      "If there are 5 or more players alive & the Demon dies, you become the Demon. (Travellers don’t count.)",
  },
  {
    "id": "baron",
    "name": "Baron",
    "edition": "tb",
    "team": "minion",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": true,
    "ability": "There are extra Outsiders in play. [+2 Outsiders]",
  },
  {
    "id": "imp",
    "name": "Imp",
    "edition": "tb",
    "team": "demon",
    "firstNightReminder": "",
    "otherNightReminder":
      "The Imp chooses a player. :reminder: If the Imp chose themselves: Replace 1 alive Minion token with a spare Imp token. Put the old Imp to sleep. Wake the new Imp. Show the *YOU ARE* token, then show the Imp token.",
    "reminders": [
      "Dead",
    ],
    "setup": false,
    "ability":
      "Each night*, choose a player: they die. If you kill yourself this way, a Minion becomes the Imp.",
  },
  {
    "id": "bureaucrat",
    "name": "Bureaucrat",
    "edition": "tb",
    "team": "traveler",
    "firstNightReminder": "The Bureaucrat chooses a player. :reminder:",
    "otherNightReminder": "The Bureaucrat chooses a player. :reminder:",
    "reminders": [
      "3 votes",
    ],
    "setup": false,
    "ability":
      "Each night, choose a player (not yourself): their vote counts as 3 votes tomorrow.",
  },
  {
    "id": "thief",
    "name": "Thief",
    "edition": "tb",
    "team": "traveler",
    "firstNightReminder": "The Thief chooses a player. :reminder:",
    "otherNightReminder": "The Thief chooses a player. :reminder:",
    "reminders": [
      "Negative vote",
    ],
    "setup": false,
    "ability":
      "Each night, choose a player (not yourself): their vote counts negatively tomorrow.",
  },
  {
    "id": "gunslinger",
    "name": "Gunslinger",
    "edition": "tb",
    "team": "traveler",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability":
      "Each day, after the 1st vote has been tallied, you may choose a player that voted: they die.",
  },
  {
    "id": "scapegoat",
    "name": "Scapegoat",
    "edition": "tb",
    "team": "traveler",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability":
      "If a player of your alignment is executed, you might be executed instead.",
  },
  {
    "id": "beggar",
    "name": "Beggar",
    "edition": "tb",
    "team": "traveler",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability":
      "You must use a vote token to vote. If a dead player gives you theirs, you learn their alignment. You are sober and healthy.",
  },
  {
    "id": "grandmother",
    "name": "Grandmother",
    "edition": "bmr",
    "team": "townsfolk",
    "firstNightReminder":
      "Point to the *GRANDCHILD* player & show their character token.",
    "otherNightReminder":
      "If the *GRANDCHILD* was killed by the Demon, the Grandmother dies too. :reminder:",
    "reminders": [
      "Grandchild",
      "Dead",
    ],
    "setup": false,
    "ability":
      "You start knowing a good player & their character. If the Demon kills them, you die too.",
  },
  {
    "id": "steward",
    "name": "Steward",
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder": "Point to the good player marked *KNOW*.",
    "otherNightReminder": "",
    "reminders": [
      "Know",
    ],
    "setup": false,
    "ability": "You start knowing 1 good player.",
  },
  {
    "id": "knight",
    "name": "Knight",
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder": "Point to the two non-Demon players marked *KNOW*.",
    "otherNightReminder": "",
    "reminders": [
      "Know",
      "Know",
    ],
    "setup": false,
    "ability": "You start knowing 2 players that are not the Demon.",
  },
  {
    "id": "shugenja",
    "name": "Shugenja",
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder": "Point clockwise or anticlockwise around the circle.",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability":
      "You start knowing if your closest evil player is clockwise or anti-clockwise. If equidistant, this info is arbitrary.",
  },
  {
    "id": "sailor",
    "name": "Sailor",
    "edition": "bmr",
    "team": "townsfolk",
    "firstNightReminder": "The Sailor chooses a living player. :reminder:",
    "otherNightReminder": "The Sailor chooses a living player. :reminder:",
    "reminders": [
      "Drunk",
    ],
    "setup": false,
    "ability":
      "Each night, choose an alive player: either you or they are drunk until dusk. You can’t die.",
  },
  {
    "id": "chambermaid",
    "name": "Chambermaid",
    "edition": "bmr",
    "team": "townsfolk",
    "firstNightReminder":
      "The Chambermaid chooses 2 living players. Give a finger signal.",
    "otherNightReminder":
      "The Chambermaid chooses 2 living players. Give a finger signal.",
    "reminders": [],
    "setup": false,
    "ability":
      "Each night, choose 2 alive players (not yourself): you learn how many woke tonight due to their ability.",
  },
  {
    "id": "exorcist",
    "name": "Exorcist",
    "edition": "bmr",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder":
      "The Exorcist chooses a player. :reminder: Put the Exorcist to sleep. If the Exorcist chose the Demon: Wake the Demon. Show the *THIS CHARACTER SELECTED YOU* & Exorcist tokens. Point to the Exorcist.",
    "reminders": [
      "Chosen",
    ],
    "setup": false,
    "ability":
      "Each night*, choose a player (different to last night): the Demon, if chosen, learns who you are then doesn’t wake tonight.",
  },
  {
    "id": "innkeeper",
    "name": "Innkeeper",
    "edition": "bmr",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder":
      "The Innkeeper chooses 2 players. :reminder: :reminder: :reminder:",
    "reminders": [
      "Safe",
      "Safe",
      "Drunk",
    ],
    "setup": false,
    "ability":
      "Each night*, choose 2 players: they can’t die tonight, but 1 is drunk until dusk.",
  },
  {
    "id": "gambler",
    "name": "Gambler",
    "edition": "bmr",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder":
      "The Gambler chooses a player & a character. :reminder:",
    "reminders": [
      "Dead",
    ],
    "setup": false,
    "ability":
      "Each night*, choose a player & guess their character: if you guess wrong, you die.",
  },
  {
    "id": "gossip",
    "name": "Gossip",
    "edition": "bmr",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder":
      "If the Gossip is due to kill a player, they die. :reminder:",
    "reminders": [
      "Dead",
    ],
    "setup": false,
    "ability":
      "Each day, you may make a public statement. Tonight, if it was true, a player dies.",
  },
  {
    "id": "courtier",
    "name": "Courtier",
    "edition": "bmr",
    "team": "townsfolk",
    "firstNightReminder":
      "The Courtier might choose a character. :reminder: :reminder:",
    "otherNightReminder":
      "The Courtier might choose a character. :reminder: :reminder:",
    "reminders": [
      "Drunk 3",
      "Drunk 2",
      "Drunk 1",
      "No ability",
    ],
    "setup": false,
    "ability":
      "Once per game, at night, choose a character: they are drunk for 3 nights & 3 days.",
  },
  {
    "id": "professor",
    "name": "Professor",
    "edition": "bmr",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder":
      "The Professor might choose a dead player. :reminder: :reminder:",
    "reminders": [
      "Alive",
      "No ability",
    ],
    "setup": false,
    "ability":
      "Once per game, at night*, choose a dead player: if they are a Townsfolk, they are resurrected.",
  },
  {
    "id": "minstrel",
    "name": "Minstrel",
    "edition": "bmr",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [
      "Everyone Is Drunk",
    ],
    "setup": false,
    "ability":
      "When a Minion dies by execution, all other players (except Travellers) are drunk until dusk tomorrow.",
  },
  {
    "id": "tealady",
    "name": "Tea Lady",
    "edition": "bmr",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [
      "Can not die",
    ],
    "setup": false,
    "ability": "If both your alive neighbors are good, they can’t die.",
  },
  {
    "id": "pacifist",
    "name": "Pacifist",
    "edition": "bmr",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability": "Executed good players might not die.",
  },
  {
    "id": "fool",
    "name": "Fool",
    "edition": "bmr",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [
      "No ability",
    ],
    "setup": false,
    "ability": "The first time you die, you don’t.",
  },
  {
    "id": "tinker",
    "name": "Tinker",
    "edition": "bmr",
    "team": "outsider",
    "firstNightReminder": "",
    "otherNightReminder": "The Tinker might die. :reminder:",
    "reminders": [
      "Dead",
    ],
    "setup": false,
    "ability": "You might die at any time.",
  },
  {
    "id": "moonchild",
    "name": "Moonchild",
    "edition": "bmr",
    "team": "outsider",
    "firstNightReminder": "",
    "otherNightReminder":
      "If the Moonchild is due to kill a good player, they die. :reminder:",
    "reminders": [
      "Dead",
    ],
    "setup": false,
    "ability":
      "When you learn that you died, publicly choose 1 alive player. Tonight, if it was a good player, they die.",
  },
  {
    "id": "goon",
    "name": "Goon",
    "edition": "bmr",
    "team": "outsider",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [
      "Drunk",
    ],
    "setup": false,
    "ability":
      "Each night, the 1st player to choose you with their ability is drunk until dusk. You become their alignment.",
  },
  {
    "id": "lunatic",
    "name": "Lunatic",
    "edition": "bmr",
    "team": "outsider",
    "firstNightReminder":
      "If there are 7 or more players, wake the Lunatic:\n\tShow the *THESE ARE YOUR MINIONS* token. Point to any players.\n\tShow the *THESE CHARACTERS ARE NOT IN PLAY* token. Show 3 good character tokens. Put the Lunatic to sleep.\n\tWake the Demon. If they saw the Lunatic token, show the *YOU ARE* token and the Demon token. Show the *THIS PLAYER IS* token and the Lunatic token, then point to the Lunatic.\nLater in the night, if applicable, simulate the Demon acting. Put the Lunatic to sleep. Wake the Demon. Show the Lunatic token & point to them, then their target(s).",
    "otherNightReminder":
      "Do whatever needs to be done to simulate the Demon acting. Put the Lunatic to sleep. Wake the Demon. Show the Lunatic token & point to them, then their target(s).",
    "reminders": [
      "Chosen",
      "Chosen",
      "Chosen",
    ],
    "setup": false,
    "ability":
      "You think you are a Demon, but you are not. The Demon knows who you are & who you choose at night.",
  },
  {
    "id": "godfather",
    "name": "Godfather",
    "edition": "bmr",
    "team": "minion",
    "firstNightReminder": "Show the character tokens of all in-play Outsiders.",
    "otherNightReminder":
      "If an Outsider died today, the Godfather chooses a player. :reminder:",
    "reminders": [
      "Died Today",
      "Dead",
    ],
    "setup": true,
    "ability":
      "You start knowing which Outsiders are in play. If 1 died today, choose a player tonight: they die. [−1 or +1 Outsider]",
  },
  {
    "id": "devilsadvocate",
    "name": "Devil’s Advocate",
    "edition": "bmr",
    "team": "minion",
    "firstNightReminder":
      "The Devil's Advocate chooses a living player. :reminder:",
    "otherNightReminder":
      "The Devil's Advocate chooses a living player. :reminder:",
    "reminders": [
      "Survives Execution",
    ],
    "setup": false,
    "ability":
      "Each night, choose a living player (different to last night): if executed tomorrow, they don’t die.",
  },
  {
    "id": "assassin",
    "name": "Assassin",
    "edition": "bmr",
    "team": "minion",
    "firstNightReminder": "",
    "otherNightReminder":
      "The Assassin might choose a player. :reminder: :reminder:",
    "reminders": [
      "Dead",
      "No ability",
    ],
    "setup": false,
    "ability":
      "Once per game, at night*, choose a player: they die, even if for some reason they could not.",
  },
  {
    "id": "mastermind",
    "name": "Mastermind",
    "edition": "bmr",
    "team": "minion",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability":
      "If the Demon dies by execution (ending the game), play for 1 more day. If a player is then executed, their team loses.",
  },
  {
    "id": "zombuul",
    "name": "Zombuul",
    "edition": "bmr",
    "team": "demon",
    "firstNightReminder": "",
    "otherNightReminder":
      "If no-one died today, the Zombuul chooses a player. :reminder:",
    "reminders": [
      "Died Today",
      "Dead",
    ],
    "setup": false,
    "ability":
      "Each night*, if no-one died today, choose a player: they die. The 1st time you die, you live but register as dead.",
  },
  {
    "id": "pukka",
    "name": "Pukka",
    "edition": "bmr",
    "team": "demon",
    "firstNightReminder": "The Pukka chooses a player. :reminder:",
    "otherNightReminder":
      "The Pukka chooses a player. :reminder: The previously poisoned player dies then becomes healthy. :reminder:",
    "reminders": [
      "Poisoned",
      "Dead",
    ],
    "setup": false,
    "ability":
      "Each night, choose a player: they are poisoned. The previously poisoned player dies then becomes healthy.",
  },
  {
    "id": "shabaloth",
    "name": "Shabaloth",
    "edition": "bmr",
    "team": "demon",
    "firstNightReminder": "",
    "otherNightReminder":
      "A previously chosen player might be resurrected. :reminder: The Shabaloth chooses 2 players. :reminder: :reminder:",
    "reminders": [
      "Dead",
      "Dead",
      "Alive",
    ],
    "setup": false,
    "ability":
      "Each night*, choose 2 players: they die. A dead player you chose last night might be regurgitated.",
  },
  {
    "id": "po",
    "name": "Po",
    "edition": "bmr",
    "team": "demon",
    "firstNightReminder": "",
    "otherNightReminder":
      "The Po may choose a player OR chooses 3 players if they chose no-one last night. :reminder: or :reminder: :reminder: :reminder:",
    "reminders": [
      "Dead",
      "Dead",
      "Dead",
      "3 Attacks",
    ],
    "setup": false,
    "ability":
      "Each night*, you may choose a player: they die. If your last choice was no-one, choose 3 players tonight.",
  },
  {
    "id": "apprentice",
    "name": "Apprentice",
    "edition": "bmr",
    "team": "traveler",
    "firstNightReminder":
      "Show the Apprentice the *YOU ARE* token, then a Townsfolk or Minion token. Replace the Apprentice token with that character token, and put the Apprentice’s *IS THE APPRENTICE* reminder by that character token.",
    "otherNightReminder": "",
    "reminders": [
      "Is the Apprentice",
    ],
    "setup": false,
    "ability":
      "On your 1st night, you gain a Townsfolk ability (if good), or a Minion ability (if evil).",
  },
  {
    "id": "matron",
    "name": "Matron",
    "edition": "bmr",
    "team": "traveler",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability":
      "Each day, you may choose up to 3 sets of 2 players to swap seats. Players may not leave their seats to talk in private.",
  },
  {
    "id": "judge",
    "name": "Judge",
    "edition": "bmr",
    "team": "traveler",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [
      "No Ability",
    ],
    "setup": false,
    "ability":
      "Once per game, if another player nominated, you may choose to force the current execution to pass or fail.",
  },
  {
    "id": "bishop",
    "name": "Bishop",
    "edition": "bmr",
    "team": "traveler",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [
      "Nominate Good",
      "Nominate Evil",
    ],
    "setup": false,
    "ability":
      "Only the Storyteller can nominate. At least 1 opposite player must be nominated each day.",
  },
  {
    "id": "voudon",
    "name": "Voudon",
    "edition": "bmr",
    "team": "traveler",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability":
      "Only you and the dead can vote. They don’t need a vote token to do so. A 50% majority is not required.",
  },
  {
    "id": "clockmaker",
    "name": "Clockmaker",
    "edition": "snv",
    "team": "townsfolk",
    "firstNightReminder": "Give a finger signal.",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability":
      "You start knowing how many steps from the Demon to its nearest Minion.",
  },
  {
    "id": "dreamer",
    "name": "Dreamer",
    "edition": "snv",
    "team": "townsfolk",
    "firstNightReminder":
      "The Dreamer chooses a player. Show 1 good & 1 evil character token, 1 of which is their character.",
    "otherNightReminder":
      "The Dreamer chooses a player. Show 1 good & 1 evil character token, 1 of which is their character.",
    "reminders": [],
    "setup": false,
    "ability":
      "Each night, choose a player (not yourself or Travellers): you learn 1 good and 1 evil character, 1 of which is correct.",
  },
  {
    "id": "snakecharmer",
    "name": "Snake Charmer",
    "edition": "snv",
    "team": "townsfolk",
    "firstNightReminder":
      "The Snake Charmer chooses a player. If they chose the Demon:\n\tShow the *YOU ARE* & Demon tokens. Give a thumbs down. Swap the Snake Charmer & Demon tokens. Put the old Snake Charmer to sleep.\n\tWake the old Demon. Show the *YOU ARE* and Snake Charmer tokens & give a thumbs up. :reminder:",
    "otherNightReminder":
      "The Snake Charmer chooses a player. If they chose the Demon:\n\tShow the *YOU ARE* & Demon tokens. Give a thumbs down. Swap the Snake Charmer & Demon tokens. Put the old Snake Charmer to sleep.\n\tWake the old Demon. Show the *YOU ARE* and Snake Charmer tokens & give a thumbs up. :reminder:",
    "reminders": [
      "Poisoned",
    ],
    "setup": false,
    "ability":
      "Each night, choose an alive player: a chosen Demon swaps characters & alignments with you & is then poisoned.",
  },
  {
    "id": "mathematician",
    "name": "Mathematician",
    "edition": "snv",
    "team": "townsfolk",
    "firstNightReminder": "Give a finger signal.",
    "otherNightReminder": "Give a finger signal.",
    "reminders": [
      "Abnormal",
      "Abnormal",
      "Abnormal",
      "Abnormal",
      "Abnormal",
    ],
    "setup": false,
    "ability":
      "Each night, you learn how many players’ abilities worked abnormally (since dawn) due to another character’s ability.",
  },
  {
    "id": "flowergirl",
    "name": "Flowergirl",
    "edition": "snv",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder": "Either nod or shake your head.",
    "reminders": [
      "Demon Voted",
      "Demon Not Voted",
    ],
    "setup": false,
    "ability": "Each night*, you learn if a Demon voted today.",
  },
  {
    "id": "towncrier",
    "name": "Town Crier",
    "edition": "snv",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder": "Either nod or shake your head.",
    "reminders": [
      "Minions Not Nominated",
      "Minion Nominated",
    ],
    "setup": false,
    "ability": "Each night*, you learn if a Minion nominated today.",
  },
  {
    "id": "oracle",
    "name": "Oracle",
    "edition": "snv",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder": "Give a finger signal.",
    "reminders": [],
    "setup": false,
    "ability": "Each night*, you learn how many dead players are evil.",
  },
  {
    "id": "savant",
    "name": "Savant",
    "edition": "snv",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability":
      "Each day, you may visit the Storyteller to learn 2 things in private: 1 is true & 1 is false.",
  },
  {
    "id": "seamstress",
    "name": "Seamstress",
    "edition": "snv",
    "team": "townsfolk",
    "firstNightReminder":
      "The Seamstress might choose 2 players. Nod or shake your head. :reminder:",
    "otherNightReminder":
      "The Seamstress might choose 2 players. Nod or shake your head. :reminder:",
    "reminders": [
      "No Ability",
    ],
    "setup": false,
    "ability":
      "Once per game, at night, choose 2 players (not yourself): you learn if they are the same alignment.",
  },
  {
    "id": "philosopher",
    "name": "Philosopher",
    "edition": "snv",
    "team": "townsfolk",
    "firstNightReminder":
      "The Philosopher might choose a character. If necessary, swap their character token. :reminder:",
    "otherNightReminder":
      "The Philosopher might choose a character. If necessary, swap their character token. :reminder:",
    "reminders": [
      "Drunk",
    ],
    "remindersGlobal": [
      "Is The Philosopher",
    ],
    "setup": false,
    "ability":
      "Once per game, at night, choose a good character: gain that ability. If this character is in play, they are drunk.",
  },
  {
    "id": "artist",
    "name": "Artist",
    "edition": "snv",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [
      "No Ability",
    ],
    "setup": false,
    "ability":
      "Once per game, during the day, privately ask the Storyteller any yes/no question.",
  },
  {
    "id": "juggler",
    "name": "Juggler",
    "edition": "snv",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder": "Give a finger signal.",
    "reminders": [
      "Correct",
      "Correct",
      "Correct",
      "Correct",
      "Correct",
    ],
    "setup": false,
    "ability":
      "On your 1st day, publicly guess up to 5 players’ characters. That night, you learn how many you got correct.",
  },
  {
    "id": "sage",
    "name": "Sage",
    "edition": "snv",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder":
      "If the Demon killed the Sage, wake the Sage and point to 2 players, 1 of which is the Demon.",
    "reminders": [],
    "setup": false,
    "ability": "If the Demon kills you, you learn that it is 1 of 2 players.",
  },
  {
    "id": "mutant",
    "name": "Mutant",
    "edition": "snv",
    "team": "outsider",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability":
      "If you are “mad” about being an Outsider, you might be executed.",
  },
  {
    "id": "sweetheart",
    "name": "Sweetheart",
    "edition": "snv",
    "team": "outsider",
    "firstNightReminder": "",
    "otherNightReminder":
      "If the Sweetheart died, a player became drunk immediately. If you haven’t done this yet, do so now. :reminder:",
    "reminders": [
      "Drunk",
    ],
    "setup": false,
    "ability": "When you die, 1 player is drunk from now on.",
  },
  {
    "id": "barber",
    "name": "Barber",
    "edition": "snv",
    "team": "outsider",
    "firstNightReminder": "",
    "otherNightReminder":
      "If the Barber died today or tonight, show the Demon the *THIS CHARACTER SELECTED YOU* & Barber tokens. If they chose players, swap their character tokens. Wake each player in turn. Show the *YOU ARE* token & their new character token.",
    "reminders": [
      "Haircuts Tonight",
    ],
    "setup": false,
    "ability":
      "If you died today or tonight, the Demon may choose 2 players (not another Demon) to swap characters.",
  },
  {
    "id": "klutz",
    "name": "Klutz",
    "edition": "snv",
    "team": "outsider",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability":
      "When you learn that you died, publicly choose 1 alive player: if they are evil, your team loses.",
  },
  {
    "id": "eviltwin",
    "name": "Evil Twin",
    "edition": "snv",
    "team": "minion",
    "firstNightReminder":
      "Wake both twins. Allow eye contact. Show the good twin’s character token to the Evil Twin & vice versa.",
    "otherNightReminder": "",
    "reminders": [
      "Twin",
    ],
    "setup": false,
    "ability":
      "You & an opposing player know each other. If the good player is executed, evil wins. Good can’t win if you both live.",
  },
  {
    "id": "witch",
    "name": "Witch",
    "edition": "snv",
    "team": "minion",
    "firstNightReminder": "The Witch chooses a player. :reminder:",
    "otherNightReminder": "The Witch chooses a player. :reminder:",
    "reminders": [
      "Cursed",
    ],
    "setup": false,
    "ability":
      "Each night, choose a player: if they nominate tomorrow, they die. If just 3 players live, you lose this ability.",
  },
  {
    "id": "cerenovus",
    "name": "Cerenovus",
    "edition": "snv",
    "team": "minion",
    "firstNightReminder":
      "The Cerenovus chooses a player & a character. :reminder: Put the Cerenovus to sleep. Wake the target. Show the *THIS CHARACTER SELECTED YOU* token, the Cerenovus token, then the madness-character token.",
    "otherNightReminder":
      "The Cerenovus chooses a player & a character. :reminder: Put the Cerenovus to sleep. Wake the target. Show the *THIS CHARACTER SELECTED YOU* token, the Cerenovus token, then the madness-character token.",
    "reminders": [
      "Mad",
    ],
    "setup": false,
    "ability":
      "Each night, choose a player & a good character: they are “mad” they are this character tomorrow, or might be executed.",
  },
  {
    "id": "pithag",
    "name": "Pit-Hag",
    "edition": "snv",
    "team": "minion",
    "firstNightReminder": "",
    "otherNightReminder":
      "The Pit-Hag chooses a player & a character. If they chose a character that is not in play: Put the Pit-Hag to sleep. Wake the target. Show the *YOU ARE* token & their new character token.",
    "reminders": [],
    "setup": false,
    "ability":
      "Each night*, choose a player & a character they become (if not-in-play). If a Demon is made, deaths tonight are arbitrary.",
  },
  {
    "id": "fanggu",
    "name": "Fang Gu",
    "edition": "snv",
    "team": "demon",
    "firstNightReminder": "",
    "otherNightReminder":
      "The Fang Gu chooses a player. :reminder: If they chose an Outsider (once only): Replace the Outsider token with the spare Fang Gu token. Put the Fang Gu to sleep. Wake the target. Show the *YOU ARE* and Fang Gu tokens & give a thumbs-down. :reminder:",
    "reminders": [
      "Dead",
      "Once",
    ],
    "setup": true,
    "ability":
      "Each night*, choose a player: they die. The 1st Outsider this kills becomes an evil Fang Gu & you die instead. [+1 Outsider]",
  },
  {
    "id": "vigormortis",
    "name": "Vigormortis",
    "edition": "snv",
    "team": "demon",
    "firstNightReminder": "",
    "otherNightReminder":
      "The Vigormortis chooses a player. :reminder: If that player is a Minion, poison a neighboring Townsfolk. :reminder: :reminder:",
    "reminders": [
      "Dead",
      "Has Ability",
      "Has Ability",
      "Has Ability",
      "Poisoned",
      "Poisoned",
      "Poisoned",
    ],
    "setup": true,
    "ability":
      "Each night*, choose a player: they die. Minions you kill keep their ability & poison 1 Townsfolk neighbor. [−1 Outsider]",
  },
  {
    "id": "ojo",
    "name": "Ojo",
    "edition": "",
    "team": "demon",
    "firstNightReminder": "",
    "otherNightReminder": "The Ojo chooses a character. :reminder:",
    "reminders": [
      "Dead",
    ],
    "setup": false,
    "ability":
      "Each night*, choose a character: they die. If they are not in play, the Storyteller chooses who dies.",
  },
  {
    "id": "vizier",
    "name": "Vizier",
    "edition": "",
    "team": "minion",
    "firstNightReminder": "Announce the Vizier player.",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability":
      "All players know you are the Vizier. You can not die during the day. If good voted, you may choose to execute immediately.",
  },
  {
    "id": "nodashii",
    "name": "No Dashii",
    "edition": "snv",
    "team": "demon",
    "firstNightReminder": "",
    "otherNightReminder": "The No Dashii chooses a player. :reminder:",
    "reminders": [
      "Dead",
      "Poisoned",
    ],
    "setup": false,
    "ability":
      "Each night*, choose a player: they die. Your 2 Townsfolk neighbors are poisoned.",
  },
  {
    "id": "vortox",
    "name": "Vortox",
    "edition": "snv",
    "team": "demon",
    "firstNightReminder": "",
    "otherNightReminder": "The Vortox chooses a player. :reminder:",
    "reminders": [
      "Dead",
    ],
    "setup": false,
    "ability":
      "Each night*, choose a player: they die. Townsfolk abilities yield false info. Each day, if no-one is executed, evil wins.",
  },
  {
    "id": "barista",
    "name": "Barista",
    "edition": "snv",
    "team": "traveler",
    "firstNightReminder":
      "Choose a player. Wake them and tell them which Barista power affects them.",
    "otherNightReminder":
      "Choose a player. Wake them and tell them which Barista power affects them.",
    "reminders": [
      "Sober & Healthy",
      "Ability twice",
    ],
    "setup": false,
    "ability":
      "Each night, until dusk, 1) a player becomes sober, healthy and gets true info, or 2) their ability works twice. They learn which.",
  },
  {
    "id": "harlot",
    "name": "Harlot",
    "edition": "snv",
    "team": "traveler",
    "firstNightReminder": "",
    "otherNightReminder":
      "The Harlot chooses a player. Put the Harlot to sleep & wake the chosen player. Show them the *THIS CHARACTER SELECTED YOU* & Harlot tokens. If they nod, put them to sleep, wake the Harlot & show them the chosen player’s character token. Decide if both players die.",
    "reminders": [
      "Dead",
    ],
    "setup": false,
    "ability":
      "Each night*, choose a living player: if they agree, you learn their character, but you both might die.",
  },
  {
    "id": "butcher",
    "name": "Butcher",
    "edition": "snv",
    "team": "traveler",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability": "Each day, after the 1st execution, you may nominate again.",
  },
  {
    "id": "bonecollector",
    "name": "Bone Collector",
    "edition": "snv",
    "team": "traveler",
    "firstNightReminder": "",
    "otherNightReminder":
      "The Bone Collector may choose a dead player. Put the Bone Collector’s *HAS ABILITY* reminder by the chosen player’s character token.",
    "reminders": [
      "No ability",
      "Has ability",
    ],
    "setup": false,
    "ability":
      "Once per game, at night, choose a dead player: they regain their ability until dusk.",
  },
  {
    "id": "deviant",
    "name": "Deviant",
    "edition": "snv",
    "team": "traveler",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability": "If you were funny today, you cannot die by exile.",
  },
  {
    "id": "noble",
    "name": "Noble",
    "edition": "kickstarter",
    "team": "townsfolk",
    "firstNightReminder": "Point to all 3 players marked *KNOW*.",
    "otherNightReminder": "",
    "reminders": [
      "Know",
      "Know",
      "Know",
    ],
    "setup": false,
    "ability": "You start knowing 3 players, 1 and only 1 of which is evil.",
  },
  {
    "id": "bountyhunter",
    "name": "Bounty Hunter",
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder": "Point to the *KNOWN* player.",
    "otherNightReminder":
      "If the *KNOWN* player died today or tonight, point to a new *KNOWN* player.",
    "reminders": [
      "Known",
    ],
    "setup": true,
    "ability":
      "You start knowing 1 evil player. If the player you know dies, you learn another evil player tonight. [1 Townsfolk is evil]",
  },
  {
    "id": "pixie",
    "name": "Pixie",
    "edition": "kickstarter",
    "team": "townsfolk",
    "firstNightReminder": "Show the Townsfolk character token marked *MAD*.",
    "otherNightReminder": "",
    "reminders": [
      "Mad",
      "Has Ability",
    ],
    "setup": false,
    "ability":
      "You start knowing 1 in-play Townsfolk. If you were mad that you were this character, you gain their ability when they die.",
  },
  {
    "id": "general",
    "name": "General",
    "edition": "kickstarter",
    "team": "townsfolk",
    "firstNightReminder": "Give a thumb signal.",
    "otherNightReminder": "Give a thumb signal.",
    "reminders": [],
    "setup": false,
    "ability":
      "Each night, you learn which alignment the Storyteller believes is winning: good, evil, or neither.",
  },
  {
    "id": "preacher",
    "name": "Preacher",
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder":
      "The Preacher chooses a player. :reminder: If they chose a Minion: Put the Preacher to sleep. Wake the target. Show the *THIS CHARACTER SELECTED YOU* token and the Preacher token.",
    "otherNightReminder":
      "The Preacher chooses a player. :reminder: If they chose a Minion: Put the Preacher to sleep. Wake the target. Show the *THIS CHARACTER SELECTED YOU* token and the Preacher token.",
    "reminders": [
      "No Ability",
      "No Ability",
      "No Ability",
    ],
    "setup": false,
    "ability":
      "Each night, choose a player: a Minion, if chosen, learns this. All chosen Minions have no ability.",
  },
  {
    "id": "king",
    "name": "King",
    "edition": "kickstarter",
    "team": "townsfolk",
    "firstNightReminder":
      "Wake the Demon. Show the *THIS PLAYER IS* token and the King token, then point to the King.",
    "otherNightReminder":
      "If the dead equal or outnumber the living, show the character token of an alive player.",
    "reminders": [],
    "setup": false,
    "ability":
      "Each night, if the dead equal or outnumber the living, you learn 1 alive character. The Demon knows you are the King.",
  },
  {
    "id": "balloonist",
    "name": "Balloonist",
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder": "Show any player. :reminder:",
    "otherNightReminder":
      "Show a player with a different character type to previously. :reminder:",
    "reminders": [
      "Seen",
    ],
    "setup": true,
    "ability":
      "Each night, you learn a player of a different character type than last night. [+0 or +1 Outsider]",
  },
  {
    "id": "cultleader",
    "name": "Cult Leader",
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder": "Inform the Cult Leader if their alignment changed.",
    "otherNightReminder": "Inform the Cult Leader if their alignment changed.",
    "reminders": [],
    "setup": false,
    "ability":
      "Each night, you become the alignment of an alive neighbor. If all good players choose to join your cult, your team wins.",
  },
  {
    "id": "lycanthrope",
    "name": "Lycanthrope",
    "edition": "kickstarter",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder": "The Lycanthrope chooses a player. :reminder:",
    "reminders": [
      "Faux Paw",
      "Dead",
    ],
    "setup": false,
    "ability":
      "Each night*, choose an alive player. If good, they die & the Demon doesn’t kill tonight. One good player registers as evil.",
  },
  {
    "id": "amnesiac",
    "name": "Amnesiac",
    "edition": "kickstarter",
    "team": "townsfolk",
    "firstNightReminder": "Run the Amnesiac’s ability, if applicable.",
    "otherNightReminder": "Run the Amnesiac’s ability, if applicable.",
    "reminders": [
      "?",
      "?",
      "?",
    ],
    "setup": false,
    "ability":
      "You do not know what your ability is. Each day, privately guess what it is: you learn how accurate you are.",
  },
  {
    "id": "nightwatchman",
    "name": "Nightwatchman",
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder":
      "The Nightwatchman might choose a player :reminder: Put the Nightwatchman to sleep. Wake the target and show the *THIS PLAYER IS* and Nightwatchman tokens and point to the Nightwatchman.",
    "otherNightReminder":
      "The Nightwatchman might choose a player :reminder: Put the Nightwatchman to sleep. Wake the target and show the *THIS PLAYER IS* and Nightwatchman tokens and point to the Nightwatchman.",
    "reminders": [
      "No Ability",
    ],
    "setup": false,
    "ability":
      "Once per game, at night, choose a player: they learn you are the Nightwatchman.",
  },
  {
    "id": "engineer",
    "name": "Engineer",
    "edition": "kickstarter",
    "team": "townsfolk",
    "firstNightReminder":
      "The Engineer may choose Demons or Minions. Replace the Demons or Minions with their choices. Put the Engineer to sleep, then wake the relevant players in turn. Show the *YOU ARE* & relevant character tokens.",
    "otherNightReminder":
      "The Engineer may choose Demons or Minions. Replace the Demons or Minions with their choices. Put the Engineer to sleep, then wake the relevant players in turn. Show the *YOU ARE* & relevant character tokens.",
    "reminders": [
      "No Ability",
    ],
    "setup": false,
    "ability":
      "Once per game, at night, choose which Minions or which Demon is in play.",
  },
  {
    "id": "fisherman",
    "name": "Fisherman",
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [
      "No ability",
    ],
    "setup": false,
    "ability":
      "Once per game, during the day, visit the Storyteller for some advice to help your team win.",
  },
  {
    "id": "huntsman",
    "name": "Huntsman",
    "edition": "kickstarter",
    "team": "townsfolk",
    "firstNightReminder":
      "The Huntsman might choose a player. :reminder: If that player was the Damsel: Put the Huntsman to sleep. Wake the Damsel and show them the *YOU ARE* info token and their new character token.",
    "otherNightReminder":
      "The Huntsman might choose a player. :reminder: If that player was the Damsel: Put the Huntsman to sleep. Wake the Damsel and show them the *YOU ARE* info token and their new character token.",
    "reminders": [
      "No Ability",
    ],
    "setup": true,
    "ability":
      "Once per game, at night, choose a living player: the Damsel, if chosen, becomes a not-in-play Townsfolk. [+the Damsel]",
  },
  {
    "id": "alchemist",
    "name": "Alchemist",
    "edition": "kickstarter",
    "team": "townsfolk",
    "firstNightReminder":
      "Show the *YOU ARE* token and the character token of a Minion.",
    "otherNightReminder": "",
    "reminders": [],
    "remindersGlobal": [
      "Is The Alchemist",
    ],
    "setup": false,
    "ability":
      "You have a Minion ability. When using this, the Storyteller may prompt you to choose differently.",
  },
  {
    "id": "farmer",
    "name": "Farmer",
    "edition": "kickstarter",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder":
      "If the Farmer died tonight, wake an alive good player. Show them the *YOU ARE* info token and a Farmer character token.",
    "reminders": [],
    "setup": false,
    "ability": "When you die at night, an alive good player becomes a Farmer.",
  },
  {
    "id": "magician",
    "name": "Magician",
    "edition": "kickstarter",
    "team": "townsfolk",
    "firstNightReminder":
      "In the Minion info step, show the Demon & Magician as the Demon. In the Demon info step, show the Minions & Magician as the Minions.",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability":
      "The Demon thinks you are a Minion. Minions think you are a Demon.",
  },
  {
    "id": "choirboy",
    "name": "Choirboy",
    "edition": "kickstarter",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder":
      "If the Demon killed the King, point to the Demon player.",
    "reminders": [],
    "setup": true,
    "ability":
      "If the Demon kills the King, you learn which player is the Demon. [+the King]",
  },
  {
    "id": "poppygrower",
    "name": "Poppy Grower",
    "edition": "kickstarter",
    "team": "townsfolk",
    "firstNightReminder":
      "Do not inform the Minions & Demon who each other are.",
    "otherNightReminder":
      "If the Poppy Grower has died, show the Minions & Demon who each other are.",
    "reminders": [
      "Evil Wakes",
    ],
    "setup": false,
    "ability":
      "Minions & Demons do not know each other. If you die, they learn who each other are that night.",
  },
  {
    "id": "atheist",
    "name": "Atheist",
    "edition": "kickstarter",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": true,
    "ability":
      "The Storyteller can break the game rules & if executed, good wins, even if you are dead. [No evil characters]",
  },
  {
    "id": "cannibal",
    "name": "Cannibal",
    "edition": "kickstarter",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder":
      "If the recently killed executee is good, the Cannibal has their ability & may wake tonight. If the executee is evil, simulate any good ability.",
    "reminders": [
      "Poisoned",
      "Lunch",
    ],
    "setup": false,
    "ability":
      "You have the ability of the recently killed executee. If they are evil, you are poisoned until a good player dies by execution.",
  },
  {
    "id": "highpriestess",
    "name": "High Priestess",
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder": "Point to a player.",
    "otherNightReminder": "Point to a player.",
    "reminders": [],
    "setup": false,
    "ability":
      "Each night, learn which player the Storyteller believes you should talk to most.",
  },
  {
    "id": "villageidiot",
    "name": "Village Idiot",
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder":
      "If there is more than 1 Village Idiot, choose 1 to be drunk. The Village Idiot chooses a player. Give a thumbs-up or thumbs-down.",
    "otherNightReminder":
      "The Village Idiot chooses a player. Give a thumbs-up or thumbs-down.",
    "reminders": [
      "Drunk",
    ],
    "setup": true,
    "ability":
      "Each night, choose a player: you learn their alignment. [+0 to +2 Village Idiots. 1 of the extras is drunk]",
  },
  {
    "id": "banshee",
    "name": "Banshee",
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder":
      "If the Demon killed the Banshee, immediately announce that the Banshee died. :reminder:",
    "reminders": [
      "Has Ability",
    ],
    "ability":
      "If the Demon kills you, all players learn this. From now on, you may nominate twice per day and vote twice per nomination.",
  },
  {
    "id": "snitch",
    "name": "Snitch",
    "edition": "kickstarter",
    "team": "outsider",
    "firstNightReminder":
      "After Minion info, wake each Minion in turn, show the *THESE CHARACTERS ARE NOT IN PLAY* token & 3 not-in-play good character tokens.",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability": "Each Minion gets 3 bluffs.",
  },
  {
    "id": "acrobat",
    "name": "Acrobat",
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder": "The Acrobat chooses a player. :reminder:",
    "reminders": [
      "Dead",
    ],
    "setup": false,
    "ability":
      "Each night*, choose a player: if they are or become drunk or poisoned tonight, you die.",
  },
  {
    "id": "plaguedoctor",
    "name": "Plague Doctor",
    "edition": "",
    "team": "outsider",
    "firstNightReminder": "",
    "otherNightReminder":
      "Run the Minion ability at the appropriate point in the night, if applicable.",
    "reminders": [
      "Storyteller Ability",
    ],
    "setup": false,
    "ability": "When you die, the Storyteller gains a Minion ability.",
  },
  {
    "id": "ogre",
    "name": "Ogre",
    "edition": "",
    "team": "outsider",
    "firstNightReminder": "The Ogre points to a player. :reminder:",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability":
      "On your 1st night, choose a player (not yourself): you become their alignment (you don’t know which) even if drunk or poisoned.",
  },
  {
    "id": "puzzlemaster",
    "name": "Puzzlemaster",
    "edition": "kickstarter",
    "team": "outsider",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [
      "Drunk",
      "Guess used",
    ],
    "setup": false,
    "ability":
      "1 player is drunk, even if you die. If you guess (once) who it is, learn the Demon player, but guess wrong & get false info.",
  },
  {
    "id": "heretic",
    "name": "Heretic",
    "edition": "kickstarter",
    "team": "outsider",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability":
      "Whoever wins, loses & whoever loses, wins, even if you are dead.",
  },
  {
    "id": "damsel",
    "name": "Damsel",
    "edition": "kickstarter",
    "team": "outsider",
    "firstNightReminder":
      "Wake all the Minions, show them the *THIS CHARACTER SELECTED YOU* & Damsel tokens.",
    "otherNightReminder": "",
    "reminders": [
      "Guess Used",
    ],
    "setup": false,
    "ability":
      "All Minions know a Damsel is in play. If a Minion publicly guesses you (once), your team loses.",
  },
  {
    "id": "golem",
    "name": "Golem",
    "edition": "kickstarter",
    "team": "outsider",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [
      "Can not nominate",
    ],
    "setup": false,
    "ability":
      "You may only nominate once per game. When you do, if the nominee is not the Demon, they die.",
  },
  {
    "id": "politician",
    "name": "Politician",
    "edition": "",
    "team": "outsider",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability":
      "If you were the player most responsible for your team losing, you change alignment & win, even if dead.",
  },
  {
    "id": "hatter",
    "name": "Hatter",
    "edition": "",
    "team": "outsider",
    "firstNightReminder": "",
    "otherNightReminder":
      "If the Hatter died today or tonight, wake the Minions and Demons and allow them to choose new characters.",
    "reminders": [
      "Tea Party Tonight",
    ],
    "setup": false,
    "ability":
      "If you died today or tonight, the Minion & Demon players may choose new Minion & Demon characters to be.",
  },
  {
    "id": "widow",
    "name": "Widow",
    "edition": "",
    "team": "minion",
    "firstNightReminder":
      "Show the Grimoire for as long as the Widow needs. The Widow chooses a player. :reminder: Put the Widow to sleep. Wake a good player, show the *THIS CHARACTER SELECTED YOU* & Widow tokens.",
    "otherNightReminder": "",
    "reminders": [
      "Poisoned",
    ],
    "remindersGlobal": [
      "Knows",
    ],
    "setup": false,
    "ability":
      "On your 1st night, look at the Grimoire & choose a player: they are poisoned. 1 good player knows a Widow is in play.",
  },
  {
    "id": "fearmonger",
    "name": "Fearmonger",
    "edition": "kickstarter",
    "team": "minion",
    "firstNightReminder":
      "The Fearmonger chooses a player. :reminder: Declare that ‘the Fearmonger has chosen a player’.",
    "otherNightReminder":
      "The Fearmonger chooses a player. :reminder: If they were not previously marked *FEAR*, announce that ‘the Fearmonger has chosen a player’.",
    "reminders": [
      "Fear",
    ],
    "setup": false,
    "ability":
      "Each night, choose a player. If you nominate & execute them, their team loses. All players know if you choose a new player.",
  },
  {
    "id": "psychopath",
    "name": "Psychopath",
    "edition": "kickstarter",
    "team": "minion",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability":
      "Each day, before nominations, you may publicly choose a player: they die. If executed, you only die if you lose roshambo.",
  },
  {
    "id": "goblin",
    "name": "Goblin",
    "edition": "",
    "team": "minion",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [
      "Claimed",
    ],
    "setup": false,
    "ability":
      "If you publicly claim to be the Goblin when nominated & are executed that day, your team wins.",
  },
  {
    "id": "mezepheles",
    "name": "Mezepheles",
    "edition": "kickstarter",
    "team": "minion",
    "firstNightReminder": "Show the Mezepheles their secret word.",
    "otherNightReminder":
      "Wake the player marked *TURNS EVIL*, show them the *YOU ARE* token & give a thumbs-down. :reminder:",
    "reminders": [
      "Turns Evil",
      "No Ability",
    ],
    "setup": false,
    "ability":
      "You start knowing a secret word. The 1st good player to say this word becomes evil that night.",
  },
  {
    "id": "marionette",
    "name": "Marionette",
    "edition": "kickstarter",
    "team": "minion",
    "firstNightReminder":
      "Wake the Demon, point to the Marionette player & show the *THIS PLAYER IS* & Marionette tokens.",
    "otherNightReminder": "",
    "reminders": [],
    "remindersGlobal": [
      "Is the Marionette",
    ],
    "setup": true,
    "ability":
      "You think you are a good character but you are not. The Demon knows who you are. [You neighbor the Demon]",
  },
  {
    "id": "boomdandy",
    "name": "Boomdandy",
    "edition": "kickstarter",
    "team": "minion",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    // This ability is now long enough that this is the least obtrusive fix I
    // can think of. In the future I might annotate longer abilities so that I
    // can apply this style across the board, but it’s probably unnecessary.
    "ability":
      '<span style="letter-spacing:-0.1px">If you are executed, all but 3 players die. After a 10 to 1 countdown, the player with the most players pointing at them, dies.</span>',
  },
  {
    "id": "organgrinder",
    "name": "Organ Grinder",
    "edition": "",
    "team": "minion",
    "firstNightReminder":
      "The Organ Grinder nods to be drunk or shakes to be sober.",
    "otherNightReminder":
      "The Organ Grinder nods to be drunk or shakes to be sober.",
    "reminders": [
      "About To Die",
    ],
    "setup": false,
    "ability":
      "All players keep their eyes closed when voting and the vote tally is secret. Each night, choose if you are drunk or not.",
  },
  {
    "id": "harpy",
    "name": "Harpy",
    "edition": "",
    "team": "minion",
    "firstNightReminder":
      "The Harpy chooses 2 players. :reminder: :reminder: Put the Harpy to sleep. Wake the 1st target, show the *THIS CHARACTER SELECTED YOU* & Harpy tokens, then point to the 2nd target.",
    "otherNightReminder":
      "The Harpy chooses 2 players. :reminder: :reminder: Put the Harpy to sleep. Wake the 1st target, show the *THIS CHARACTER SELECTED YOU* & Harpy tokens, then point at the 2nd target.",
    "reminders": [
      "Mad",
      "2nd",
    ],
    "setup": false,
    "ability":
      "Each night, choose 2 players: tomorrow, the 1st player is mad that the 2nd is evil, or one or both might die.",
  },
  {
    "id": "summoner",
    "name": "Summoner",
    "edition": "",
    "team": "minion",
    "firstNightReminder":
      "Show the *THESE CHARACTERS ARE NOT IN PLAY* token & 3 not-in-play good character tokens.",
    "otherNightReminder":
      "If it is night 3, the Summoner chooses a player and a Demon. Put the Summoner to sleep. Wake the chosen player, show the *YOU ARE* & chosen Demon tokens, then give a thumbs-down. Replace the chosen player’s token with the chosen Demon token.",
    "reminders": [
      "Night 1",
      "Night 2",
      "Night 3",
    ],
    "setup": true,
    "ability":
      "You get 3 bluffs. On the 3rd night, choose a player: they become an evil Demon of your choice. [No Demon]",
  },
  {
    "id": "lilmonsta",
    "name": "Lil’ Monsta",
    "edition": "",
    "team": "demon",
    "firstNightReminder":
      "Wake all Minions and allow them to choose a babysitter for Lil’ Monsta. :reminder:",
    "otherNightReminder":
      "Wake all Minions and allow them to choose a babysitter for Lil’ Monsta. :reminder: Choose if a player dies. :reminder:",
    "reminders": [],
    "remindersGlobal": [
      "Is the Demon",
      "Dead",
    ],
    "setup": true,
    "ability":
      "Each night, Minions choose who babysits Lil’ Monsta & “is the Demon”. Each night*, a player might die. [+1 Minion]",
  },
  {
    "id": "lleech",
    "name": "Lleech",
    "edition": "kickstarter",
    "team": "demon",
    "firstNightReminder": "The Lleech chooses a player. :reminder:",
    "otherNightReminder": "The Lleech chooses a player. :reminder:",
    "reminders": [
      "Dead",
      "Poisoned",
    ],
    "setup": false,
    "ability":
      "Each night*, choose a player: they die. You start by choosing a player: they are poisoned. You die if & only if they are dead.",
  },
  {
    "id": "alhadikhia",
    "name": "Al-Hadikhia",
    "edition": "kickstarter",
    "team": "demon",
    "firstNightReminder": "",
    "otherNightReminder":
      "The Al-Hadikhia may choose 3 players. :reminder: :reminder: :reminder: For each chosen player, in order, say ‘The Al-Hadikhia has chosen’, the player’s name, then ‘do you choose to live?’ They nod or shake. Add or remove shrouds as appropriate. If all 3 live at the end of this process, all 3 die.",
    "reminders": [
      "1",
      "2",
      "3",
    ],
    "setup": false,
    "ability":
      "Each night*, you may choose 3 players (all players learn who): each silently chooses to live or die, but if all live, all die.",
  },
  {
    "id": "alsaahir",
    "name": "Alsaahir",
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability":
      "Each day, if you publicly guess which players are Minion(s) and which are Demon(s), good wins.",
  },
  {
    "id": "legion",
    "name": "Legion",
    "edition": "kickstarter",
    "team": "demon",
    "firstNightReminder": "",
    "otherNightReminder": "Choose if a player dies. :reminder:",
    "reminders": [
      "Dead",
      "About to die",
    ],
    "setup": true,
    "ability":
      "Each night*, a player might die. Executions fail if only evil voted. You register as a Minion too. [Most players are Legion]",
  },
  {
    "id": "leviathan",
    "name": "Leviathan",
    "edition": "kickstarter",
    "team": "demon",
    "firstNightReminder":
      "Mark the Leviathan *DAY 1*. :reminder: Announce that ‘the Leviathan is in play’.",
    "otherNightReminder":
      "Update the Leviathan reminder. :reminder: Optionally, announce that ‘the Leviathan is in play’ and say which day it is.",
    "reminders": [
      "Day 1",
      "Day 2",
      "Day 3",
      "Day 4",
      "Day 5",
      "Good player executed",
    ],
    "setup": false,
    "ability":
      "If more than 1 good player is executed, evil wins. All players know you are in play. After day 5, evil wins.",
  },
  {
    "id": "riot",
    "name": "Riot",
    "edition": "kickstarter",
    "team": "demon",
    "firstNightReminder": "",
    "otherNightReminder":
      "If it is night 3, wake the Minions. Show them the *YOU ARE* & Riot tokens.",
    "reminders": [
      "Night 1",
      "Night 2",
      "Night 3",
    ],
    "setup": true,
    "ability":
      "On day 3, Minions become Riot & nominees die but nominate an alive player immediately. This must happen.",
  },
  {
    "id": "kazali",
    "name": "Kazali",
    "edition": "",
    "team": "demon",
    "firstNightReminder":
      "The Kazali chooses their Minions. Wake the new Minions in turn, show the *YOU ARE* token, their new character token, and give a thumbs-down.",
    "otherNightReminder": "The Kazali chooses a player. :reminder:",
    "reminders": [
      "Dead",
    ],
    "setup": true,
    "ability":
      'Each night*, choose a player: they die. [You choose which players are which Minions. <span style="whitespace:nowrap">−?</span> to <span style="whitespace:nowrap">+?</span> Outsiders]',
  },
  {
    "id": "yaggababble",
    "name": "Yaggababble",
    "edition": "",
    "team": "demon",
    "firstNightReminder": "Show the Yaggababble their secret phrase.",
    "otherNightReminder":
      "For each time the Yaggababble said their phrase publicly today (that did not already cause a death), choose if a player dies. :reminder:",
    "reminders": [
      "Dead",
      "Dead",
      "Dead",
    ],
    "ability":
      "You start knowing a secret phrase. For each time you said it publicly today, a player might die.",
  },
  {
    "id": "gangster",
    "name": "Gangster",
    "edition": "kickstarter",
    "team": "traveler",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability":
      "Once per day, you may choose to kill an alive neighbor, if your other alive neighbor agrees.",
  },
  {
    "id": "zealot",
    "name": "Zealot",
    "edition": "",
    "team": "outsider",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability":
      "If there are 5 or more players alive, you must vote for every nomination.",
  },
  {
    "id": "lordoftyphon",
    "name": "Lord of Typhon",
    "edition": "",
    "team": "demon",
    "firstNight": 0.1,
    "firstNightReminder":
      "Replace the character tokens of the Lord of Typhon’s neighbors with Minion tokens (do this with further neighbours on either side if necessary). Wake them in turn, show the *YOU ARE* token, their new character token, and give a thumbs-down.",
    "otherNight": 31.1,
    "otherNightReminder": "The Lord of Typhon chooses a player. :reminder:",
    "reminders": ["Dead"],
    "ability":
      'Each night*, choose a player: they die. [Evil characters are in a line. You are in the middle. +1 Minion. <span style="whitespace:nowrap">−?</span> to <span style="whitespace:nowrap">+?</span> Outsiders]',
  },
  {
    "id": "boffin",
    "name": "Boffin",
    "edition": "",
    "team": "minion",
    "firstNight": 0.3,
    "firstNightReminder":
      "Wake the Demon & Boffin either together or in turn. Show the *THIS CHARACTER SELECTED YOU* & Boffin tokens, then show the not-in-play good character token.",
    "reminders": [],
    "ability":
      "The Demon (even if drunk or poisoned) has a not-in-play good character’s ability. You both know which.",
  },
  {
    "id": "gnome",
    "name": "Gnome",
    "edition": "",
    "team": "traveler",
    "reminders": ["Amigo"],
    "ability":
      "All players start knowing a player of your alignment. You may choose to kill anyone who nominates them.",
  },
  {
    "id": "xaan",
    "name": "Xaan",
    "edition": "",
    "team": "minion",
    "firstNightReminder":
      "Mark the Xaan *NIGHT 1*. If X is 1, add the *X* reminder. :reminder: :reminder:",
    "otherNightReminder":
      "Change the Xaan’s night reminder to the relevant night. If it is night X, add the *X* reminder. :reminder: :reminder:",
    "reminders": [
      "Night 1",
      "Night 2",
      "Night 3",
      "X",
    ],
    "setup": true,
    "ability":
      "On night X, all Townsfolk are poisoned until dusk. [X Outsiders]",
  },
  {
    "id": "wizard",
    "name": "Wizard",
    "edition": "",
    "team": "minion",
    "firstNight": 28.1,
    "firstNightReminder": "Run the Wizard’s ability if applicable.",
    "otherNight": 14.1,
    "otherNightReminder": "Run the Wizard’s ability if applicable.",
    "reminders": ["?"],
    "ability":
      "Once per game, choose to make a wish. If granted, it might have a price & leave a clue as to its nature.",
  },
  {
    "id": "hermit",
    "name": "Hermit",
    "team": "outsider",
    "edition": "",
    "reminders": ["1", "2", "3"],
    "setup": true,
    "ability": "You have all Outsider abilities. [−0 or −1 Outsiders]",
    "firstNight": 0,
    "otherNight": 0,
    "firstNightReminder":
      "The Hermit has all Outsider abilities and may wake tonight.",
    "otherNightReminder":
      "The Hermit has all Outsider abilities and may wake tonight.",
  },
  {
    "id": "deusexfiasco",
    "name": "Deus ex Fiasco",
    "team": "fabled",
    "edition": "",
    "reminders": ["Whoopsie"],
    "setup": false,
    "ability":
      "At least once per game, the Storyteller will make a mistake, correct it, and publicly admit to it.",
    "firstNight": 0,
    "otherNight": 0,
    "firstNightReminder": "",
    "otherNightReminder": "",
  },
  {
    "id": "princess",
    "name": "Princess",
    "team": "townsfolk",
    "edition": "",
    "reminders": ["Doesn’t Kill"],
    "setup": false,
    "ability":
      "On your 1st day, if you nominated & executed a player, the Demon doesn’t kill tonight.",
    "firstNight": 0,
    "otherNight": 34,
    "firstNightReminder": "",
    "otherNightReminder":
      "If the Princess nominated the player who was executed today, the Demon wakes as normal, but no one dies to the Demon's ability.",
  },
];

export const commonHomebrew = [
  {
    "id": "demonatheist",
    "name": "Demon Atheist",
    "edition": "homebrew",
    "team": "demon",
    "reminders": [],
    "ability":
      "The Storyteller has this ability, can break the game rules & if executed, good wins. [No evil characters]",
    "author": "patters",
  },
  {
    "id": "eachnighthuntsman",
    "name": "Each Night Huntsman",
    "edition": "homebrew",
    "team": "townsfolk",
    "firstNightReminder":
      "The Huntsman may choose a living player. If they choose a Minion, they are poisoned. If they choose the Damsel:\n\tPut the Huntsman to sleep. Wake the Damsel and show the *YOU ARE* token & a not-in-play Townsfolk token. Put them to sleep.\n\tSwap the Damsel’s character token with the not-in-play Townsfolk token.",
    "otherNightReminder":
      "The Huntsman may choose a living player. If they choose a Minion, they are poisoned. If they choose the Damsel:\n\tPut the Huntsman to sleep. Wake the Damsel and show the *YOU ARE* token & a not-in-play Townsfolk token. Put them to sleep.\n\tSwap the Damsel’s character token with the not-in-play Townsfolk token.",
    "modifies": "huntsman",
    "reminders": [],
    "ability":
      '<span style="letter-spacing:-0.4px">Each night, choose a living player: a chosen Damsel becomes a not-in-play Townsfolk. If you choose a Minion, you are poisoned. [+the Damsel]</span>',
    "author": "patters(?)",
  },
  {
    "id": "hiddenpsycho",
    "name": "Hidden Psycho",
    "edition": "homebrew",
    "team": "minion",
    "modifies": "psychopath",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability":
      "Players you nominate might die. If you are mad as the Psychopath & are executed, you only die if you lose roshambo.",
    "author": "Conor Reynolds",
  },
  {
    "id": "activebaron",
    "name": "Active Baron",
    "edition": "homebrew",
    "team": "minion",
    "modifies": "baron",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": true,
    "ability": "There must be extra Outsiders in play. [+2 Outsiders]",
    "author": "unknown (community meme)",
  },
];

export const fabled = [
  {
    "id": "doomsayer",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "name": "Doomsayer",
    "team": "fabled",
    "ability":
      "If 4 or more players live, each living player may publicly choose (once per game) that a player of their own alignment dies.",
  },
  {
    "id": "angel",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": ["Protect", "Something Bad"],
    "setup": false,
    "name": "Angel",
    "team": "fabled",
    "ability":
      "Something bad might happen to whoever is most responsible for the death of a new player.",
  },
  {
    "id": "buddhist",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "name": "Buddhist",
    "team": "fabled",
    "ability":
      "For the first 2 minutes of each day, veteran players may not talk.",
  },
  {
    "id": "hellslibrarian",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": ["Something Bad"],
    "setup": false,
    "name": "Hell’s Librarian",
    "team": "fabled",
    "ability":
      "Something bad might happen to whoever talks when the Storyteller has asked for silence.",
  },
  {
    "id": "revolutionary",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": ["Used"],
    "setup": false,
    "name": "Revolutionary",
    "team": "fabled",
    "ability":
      "2 neighboring players are known to be the same alignment. Once per game, one of them registers falsely.",
  },
  {
    "id": "fiddler",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "name": "Fiddler",
    "team": "fabled",
    "ability":
      "Once per game, the Demon secretly chooses an opposing player: all players choose which of these 2 players win.",
  },
  {
    "id": "toymaker",
    "firstNightReminder":
      "Do the Minion and Demon info steps, even if there are fewer than 7 players.",
    "otherNight": 1,
    "otherNightReminder":
      "If a Demon attack could end the game, and the Demon is marked *FINAL NIGHT: NO ATTACK*, then the Demon does not act tonight.",
    "reminders": ["Final Night: No Attack"],
    "setup": false,
    "name": "Toymaker",
    "team": "fabled",
    "ability":
      "The Demon may choose not to attack & must do this at least once per game. Evil players get normal starting info.",
  },
  {
    "id": "fibbin",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": ["Used"],
    "setup": false,
    "name": "Fibbin",
    "team": "fabled",
    "ability": "Once per game, 1 good player might get false information.",
  },
  {
    "id": "duchess",
    "firstNightReminder": "",
    "otherNight": 1,
    "otherNightReminder":
      "Wake each player marked *VISITOR* or *FALSE INFO* in turn. Show the Duchess token. Give true information to those marked *VISITOR* and false info to the player marked *FALSE INFO*.",
    "reminders": ["Visitor", "False Info"],
    "setup": false,
    "name": "Duchess",
    "team": "fabled",
    "ability":
      "Each day, 3 players may choose to visit you. At night*, each visitor learns how many visitors are evil, but 1 gets false info.",
  },
  {
    "id": "sentinel",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": true,
    "name": "Sentinel",
    "team": "fabled",
    "ability": "There might be 1 extra or 1 fewer Outsider in play.",
  },
  {
    "id": "spiritofivory",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": ["No extra evil"],
    "setup": false,
    "name": "Spirit of Ivory",
    "team": "fabled",
    "ability": "There can’t be more than 1 extra evil player.",
  },
  // {
  //   "id": "djinn",
  //   "firstNight": 0,
  //   "firstNightReminder": "",
  //   "otherNightReminder": "",
  //   "reminders": [],
  //   "setup": false,
  //   "name": "Djinn",
  //   "team": "fabled",
  //   "ability": "Use the Djinn's special rule. All players know what it is.",
  // },
  {
    "id": "stormcatcher",
    "edition": "kickstarter",
    "firstNight": 1,
    "firstNightReminder":
      "Announce the storm-caught good character.\n\tIf in play, mark a player who is that character *SAFE*. Wake evils in turn, show the storm-caught character token, then point to the marked player.\n\tIf not in play, wake evils in turn and show the *THESE CHARACTERS ARE NOT IN PLAY* & storm-caught character tokens.",
    "otherNightReminder": "",
    "reminders": ["Safe"],
    "setup": false,
    "name": "Storm Catcher",
    "team": "fabled",
    "ability":
      "Name a good character. If in play, they can only die by execution, but evil players learn which player it is.",
  },
  {
    "id": "bootlegger",
    "firstNight": 1.2,
    "firstNightReminder":
      "Inform the group of all homebrew characters or rules for this game.",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "name": "Bootlegger",
    "team": "fabled",
    "ability": "This script has homebrew characters or rules.",
  },
  {
    "id": "ferryman",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "name": "Ferryman",
    "team": "fabled",
    "ability": "On the final day, all dead players regain their vote token.",
  },
];

export const jinxes = {
  "cannibal": {
    "juggler":
      "If the Juggler guesses on their first day and dies by execution, tonight the living Cannibal learns how many guesses the Juggler got correct.",
    "butler":
      "If the Cannibal gains the Butler ability, the Cannibal learns this.",
    "zealot":
      "If the Cannibal gains the Zealot ability, the Cannibal learns this.",
    "poppygrower":
      "If the Cannibal eats the Poppy Grower, then dies or loses the Poppy Grower ability, the Demon and Minions learn each other that night.",
    "princess":
      "If the Cannibal nominated & executed the Princess today, the Demon doesn’t kill tonight.",
  },
  "chambermaid": {
    "mathematician":
      "The Chambermaid learns if the Mathematician wakes tonight or not, even though the Chambermaid wakes first.",
  },
  "philosopher": {
    "bountyhunter":
      "If the Philosopher gains the Bounty Hunter ability, a Townsfolk might turn evil.",
  },
  "lunatic": {
    "mathematician":
      "The Mathematician learns if the Lunatic attacks a different player(s) than the real Demon attacked.",
  },
  "ogre": {
    "recluse":
      "If the Recluse registers as evil to the Ogre, the Ogre learns that they are evil.",
  },
  "baron": {
    "heretic": "The Baron might only add 1 Outsider, not 2.",
    "plaguedoctor":
      "If the Storyteller gains the Baron ability, up to two players become not-in-play Outsiders.",
  },
  "boffin": {
    "alchemist":
      "If the Alchemist has the Boffin ability, the Alchemist does not learn what ability the Demon has.",
    "cultleader":
      "If the Demon has the Cult Leader ability, they can’t turn good due to this ability.",
    "drunk":
      "If the Demon would have the Drunk ability, the Boffin chooses a Townsfolk player to have this ability instead.",
    "goon":
      "If the Demon has the Goon ability, they can’t turn good due to this ability.",
    "heretic": "The Demon cannot have the Heretic ability.",
    "ogre": "The Demon cannot have the Ogre ability.",
    "politician": "The Demon cannot have the Politician ability.",
    "villageidiot":
      "If there is a spare token, the Boffin can give the Demon the Village Idiot ability.",
  },
  "boomdandy": {
    "plaguedoctor":
      "If the Plague Doctor is executed and the Storyteller would gain the Boomdandy ability, the Boomdandy ability triggers immediately.",
  },
  "cerenovus": {
    "goblin":
      "The Cerenovus may choose to make a player mad that they are the Goblin.",
  },
  "eviltwin": {
    "plaguedoctor":
      "The Storyteller cannot gain the Evil Twin ability if the Plague Doctor dies.",
  },
  "fearmonger": {
    "plaguedoctor":
      "If the Plague Doctor dies, a living Minion gains the Fearmonger ability in addition to their own ability, and learns this.",
  },
  "goblin": {
    "plaguedoctor":
      "If the Plague Doctor dies, a living Minion gains the Goblin ability in addition to their own ability, and learns this.",
  },
  "godfather": {
    "heretic": "Only 1 jinxed character can be in play.",
  },
  "marionette": {
    "balloonist":
      "If the Marionette thinks that they are the Balloonist, +1 Outsider might have been added.",
    "damsel": "The Marionette does not learn that a Damsel is in play.",
    "huntsman":
      "If the Marionette thinks that they are the Huntsman, the Damsel was added.",
    "lilmonsta":
      "The Marionette neighbors a Minion, not the Demon. The Marionette is not woken to choose who takes the Lil’ Monsta token, and does not learn they are the Marionette if they have the Lil’ Monsta token.",
    "plaguedoctor":
      "If the Demon has a neighbor who is alive and a Townsfolk or Outsider when the Plague Doctor dies, that player becomes an evil Marionette. If there is already an extra evil player, this does not happen.",
    "poppygrower":
      "When the Poppy Grower dies, the Demon learns the Marionette but the Marionette learns nothing.",
    "snitch":
      "The Marionette does not learn 3 not in-play characters. The Demon learns an extra 3 instead.",
  },
  "organgrinder": {
    "butler":
      "If the Organ Grinder is causing eyes closed voting, the Butler may raise their hand to vote but their vote is only counted if their master voted too.",
  },
  "pithag": {
    "cultleader":
      "If the Pit-Hag turns an evil player into the Cult Leader, they can’t turn good due to their own ability.",
    "damsel":
      "If a Pit-Hag creates a Damsel, the Storyteller chooses which player it is.",
    "goon":
      "If the Pit-Hag turns an evil player into the Goon, they can’t turn good due to their own ability.",
    "heretic": "A Pit-Hag can not create a Heretic.",
    "ogre":
      "If the Pit-Hag turns an evil player into the Ogre, they can’t turn good due to their own ability.",
    "politician":
      "If the Pit-Hag turns an evil player into the Politician, they can’t turn good due to their own ability.",
    "villageidiot":
      "If there is a spare token, the Pit-Hag can create an extra Village Idiot. If so, the drunk Village Idiot might change.",
  },
  "scarletwoman": {
    "plaguedoctor":
      "If the Plague Doctor dies, a living Minion gains the Scarlet Woman ability in addition to their own ability, and learns this.",
  },
  "spy": {
    "alchemist":
      "If the Alchemist has the Spy ability, they do not see the Grimoire, and the real Spy cannot register falsely.",
    "damsel": "If the Spy is (or has been) in play, the Damsel is poisoned.",
    "heretic": "Only 1 jinxed character can be in play.",
    "magician":
      "When the Spy sees the Grimoire, the Demon and Magician’s character tokens are removed.",
    "ogre": "The Spy registers as evil to the Ogre.",
    "plaguedoctor":
      "If the Plague Doctor dies, a living Minion gains the Spy ability in addition to their own ability, and learns this.",
    "poppygrower":
      "If the Poppy Grower is in play, the Spy does not see the Grimoire until the Poppy Grower dies.",
  },
  "summoner": {
    "alchemist":
      "If there is an Alchemist-Summoner in play, the game starts with a Demon in play, as normal. If the Alchemist-Summoner chooses a player, they make that player a Demon but do not change their alignment.",
    "clockmaker":
      "If the Summoner is in play, the Clockmaker does not receive their information until a Demon is created.",
    "courtier":
      "If the Summoner is drunk on the 3rd night, the Summoner chooses which Demon, but the Storyteller chooses which player.",
    "engineer":
      "If the Engineer removes a Summoner from play before that Summoner uses their ability, the Summoner uses their ability immediately.",
    "hatter":
      "The Summoner cannot create an in-play Demon. If the Summoner creates a not-in-play Demon, deaths tonight are arbitrary.",
    "kazali":
      "The Summoner cannot create an in-play Demon. If the Summoner creates a not-in-play Demon, deaths tonight are arbitrary.",
    "legion":
      "If the Summoner creates Legion, most players (including all evil players) become evil Legion.",
    "lordoftyphon":
      "If the Summoner creates a Lord of Typhon, the Lord of Typhon must neighbor a Minion. The other neighbor becomes a not-in-play evil Minion.",
    "marionette":
      "The Marionette neighbors the Summoner. The Summoner knows who the Marionette is.",
    "pithag":
      "The Summoner cannot create an in-play Demon. If the Summoner creates a not-in-play Demon, deaths tonight are arbitrary.",
    "poppygrower":
      "If the Poppy Grower is alive when the Summoner acts, the Summoner chooses which Demon, but the Storyteller chooses which player.",
    "preacher":
      "If the Preacher chose the Summoner on or before the 3rd night, the Summoner chooses which Demon, but the Storyteller chooses which player.",
    "pukka":
      "The Summoner may choose a player to become the Pukka on the 2nd night.",
    "zombuul":
      "If the Summoner turns a dead player into the Zombuul, the Storyteller treats that player as a Zombuul that has died once.",
  },
  "vizier": {
    "alsaahir":
      "If the Vizier is in play, the Alsaahir must also guess which Demon(s) are in play.",
    "courtier":
      "If the Vizier loses their ability, they learn this. If the Vizier is executed while they have their ability, their team wins.",
    "fearmonger":
      "The Vizier wakes with the Fearmonger, learns who they choose and cannot choose to immediately execute that player.",
    "investigator":
      "If the Investigator learns that the Vizier is in play, the existence of the Vizier is not announced by the Storyteller.",
    "magician":
      "If the Vizier and Magician are both in play, the Demon does not learn the Minions.",
    "politician": "The Politician might register as evil to the Vizier.",
    "preacher":
      "If the Vizier loses their ability, they learn this. If the Vizier is executed while they have their ability, their team wins.",
    "zealot": "The Zealot might register as evil to the Vizier.",
  },
  "widow": {
    "alchemist":
      "If the Alchemist has the Widow ability, they do not see the Grimoire.",
    "damsel": "If the Widow is (or has been) in play, the Damsel is poisoned.",
    "heretic": "Only 1 jinxed character can be in play.",
    "magician":
      "When the Widow sees the Grimoire, the Demon and Magician’s character tokens are removed.",
    "poppygrower":
      "If the Poppy Grower is in play, the Widow does not see the Grimoire until the Poppy Grower dies.",
  },
  "alhadikhia": {
    "scarletwoman":
      "If there are two living Al-Hadikhias, the Scarlet Woman Al-Hadikhia becomes the Scarlet Woman again.",
    "princess":
      "If the Princess nominated & executed a player on their 1st day, no one dies to the Al-Hadikhia ability tonight.",
  },
  "fanggu": {
    "scarletwoman":
      "If the Fang Gu chooses an Outsider and dies, the Scarlet Woman does not become the Fang Gu.",
  },
  "kazali": {
    "bountyhunter":
      "An evil Townsfolk is only created if the Bounty Hunter is still in play after the Kazali acts.",
    "choirboy":
      "The Kazali can not choose the King to become a Minion if a Choirboy is in play.",
    "goon":
      "The Kazali can choose that the Goon player is one of their evil Minions.",
    "huntsman":
      "If the Kazali chooses the Damsel to become a Minion, and a Huntsman is in play, a good player becomes the Damsel.",
    "marionette":
      "If the Kazali chooses to create a Marionette, they must choose one of their neighbors.",
    "soldier":
      "The Kazali can choose that the Soldier player is one of their evil Minions.",
  },
  "legion": {
    "engineer":
      "Legion and the Engineer can not both be in play at the start of the game. If the Engineer creates Legion, most players (including all evil players) become evil Legion.",
    "hatter":
      "If the Hatter dies and Legion is in play, nothing happens. If the Hatter dies and an evil player chooses Legion, all current evil players become Legion.",
    "minstrel":
      "If Legion died by execution today, Legion keeps their ability, but the Minstrel might learn they are Legion.",
    "preacher":
      "If the Preacher chooses Legion, Legion keeps their ability, but the Preacher might learn they are Legion.",
    "zealot": "The Zealot might register as evil to Legion’s ability.",
  },
  "leviathan": {
    "banshee":
      "Each night*, the Leviathan chooses an alive good player (different to previous nights): a chosen Banshee dies & gains their ability.",
    "exorcist":
      "Evil does not win when more than 1 good player has been executed, if the Exorcist is alive and has ever successfully chosen the Leviathan.",
    "farmer":
      "Each night*, the Leviathan chooses an alive good player (different to previous nights): a chosen Farmer uses their ability but does not die.",
    "grandmother":
      "If Leviathan is in play and the Grandchild dies by execution, evil wins.",
    "hatter":
      "If the Hatter dies on or after day 5, the Demon cannot choose Leviathan.",
    "innkeeper":
      "If the Leviathan is in play, the Innkeeper-protected-players are safe from all evil abilities.",
    "king":
      "If the Leviathan is in play, and at least 1 player is dead, the King learns an alive character each night.",
    "mayor":
      "If Leviathan is in play & no execution occurs on day 5, good wins.",
    "monk":
      "If the Leviathan is in play, the Monk-protected-player is safe from all evil abilities.",
    "pithag": "After day 5, the Pit-Hag cannot choose Leviathan.",
    "ravenkeeper":
      "Each night*, the Leviathan chooses an alive player (different to previous nights): a chosen Ravenkeeper uses their ability but does not die.",
    "sage":
      "Each night*, the Leviathan chooses an alive good player (different to previous nights): a chosen Sage uses their ability but does not die.",
    "soldier":
      "If the Leviathan is in play, the Soldier is safe from all evil abilities.",
  },
  "lilmonsta": {
    "hatter":
      "If a Demon chooses Lil’ Monsta, they also choose a Minion to become and babysit Lil’ Monsta tonight.",
    "magician":
      "Each night, the Magician chooses a Minion: if that Minion & Lil’ Monsta are alive, that Minion babysits Lil’ Monsta.",
    "poppygrower":
      "If the Poppy Grower is in play, Minions don’t wake together. They are woken one by one, until one of them chooses to take the Lil’ Monsta token.",
    "scarletwoman":
      "If there are 5 or more players alive and the player holding the Lil’ Monsta token dies, the Scarlet Woman is given the Lil’ Monsta token tonight.",
    "vizier":
      "The Vizier can die by execution if they are babysitting Lil’ Monsta.",
  },
  "lleech": {
    "heretic":
      "If the Lleech has poisoned the Heretic then the Lleech dies, the Heretic remains poisoned.",
    "mastermind":
      "If the Mastermind is alive and the Lleech’s host dies by execution, the Lleech lives but loses their ability.",
    "slayer": "If the Slayer slays the Lleech’s host, the host dies.",
  },
  "psychopath": {
    "golem":
      "If the Psychopath is mad as the Golem, the Psychopath has the Golem ability instead.",
  },
  "riot": {
    "banshee":
      "Each night*, Riot chooses an alive good player (different to previous nights): a chosen Banshee dies & gains their ability.",
    "exorcist":
      "If the Exorcist chooses Riot on the 3rd night, Minions do not become Riot.",
    "farmer":
      "Each night*, Riot chooses an alive good player (different to previous nights): a chosen Farmer uses their ability but does not die.",
    "grandmother":
      "If Riot is in play and the Grandchild dies during the day, the Grandmother dies too.",
    "innkeeper":
      "If Riot is in play, the Innkeeper-protected player is safe from all evil abilities.",
    "king":
      "If Riot is in play, and at least 1 player is dead, the King learns an alive character each night.",
    "mayor":
      "The Mayor may choose to stop nominations. If they do so when only 1 Riot is alive, good wins. Otherwise, evil wins.",
    "monk":
      "If Riot is in play, the Monk-protected player is safe from all evil abilities.",
    "ravenkeeper":
      "Each night*, Riot chooses an alive good player (different to previous nights): a chosen Ravenkeeper uses their ability but does not die.",
    "sage":
      "Each night*, Riot chooses an alive good player (different to previous nights): a chosen Sage uses their ability but does not die.",
    "soldier":
      "If Riot is in play, the Soldier is safe from all evil abilities.",
    "towncrier": "Riot registers as a Minion to the Town Crier.",
  },
  "vortox": {
    "banshee":
      "If the Vortox is in play and the Demon kills the Banshee, the players still learn that the Banshee has died.",
  },
  "yaggababble": {
    "exorcist":
      "If the Exorcist chooses the Yaggababble, the Yaggababble ability does not kill tonight.",
  },
  "demonatheist": {
    "pithag": "The Pit-Hag’s ability cannot create a Demon Atheist.",
    "engineer": "The Engineer’s ability cannot create a Demon Atheist.",
  },
};
