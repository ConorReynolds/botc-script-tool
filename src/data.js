export const chars = [
  {
    "id": "washerwoman",
    "name": "Washerwoman",
    "edition": "tb",
    "team": "townsfolk",
    "firstNightReminder":
      "Show the character token of an in-play Townsfolk. Point to 2 players, one of which is that character.",
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
      "Show the character token of an in-play Outsider. Point to 2 players, one of which is that character. If there are no Outsiders, show a zero.",
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
      "Show the character token of an in-play Minion. Point to 2 players, one of which is that character.",
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
    "firstNightReminder":
      "Show the number of pairs of neighboring evil players.",
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
    "firstNightReminder": "Show the number of evil alive neighbors.",
    "otherNightReminder": "Show the number of evil alive neighbors.",
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
      "The Fortune Teller chooses 2 players. Nod if either is the Demon (or the Red Herring).",
    "otherNightReminder":
      "The Fortune Teller chooses 2 players. Nod if either is the Demon (or the Red Herring).",
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
    "otherNightReminder":
      "The Monk chooses a player (not themself). Mark them ‘Protected’.",
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
    "firstNightReminder":
      "The Butler chooses a player (not themself). Mark them ‘Master’.",
    "otherNightReminder":
      "The Butler chooses a player (not themself). Mark them ‘Master’.",
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
    "firstNightReminder":
      "The Poisoner chooses a player. Mark them ‘Poisoned’.",
    "otherNightReminder":
      "The Poisoner chooses a player. Mark them ‘Poisoned’.",
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
      "If the Scarlet Woman became the Demon today, show the ‘You are’ & Demon token.",
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
      "The Imp chooses a player. That player dies. If the Imp chose themself: Put the Imp to sleep. Replace the character of 1 alive Minion with a spare Imp token. Wake the new Imp, show the ‘You are’ token, then the Imp token.",
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
    "firstNightReminder":
      "The Bureaucrat chooses a player (not themself). Mark them ‘3 votes’.",
    "otherNightReminder":
      "The Bureaucrat chooses a player (not themself). Mark them ‘3 votes’.",
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
    "firstNightReminder":
      "The Thief chooses a player (not themself). Mark them ‘Negative vote’.",
    "otherNightReminder":
      "The Thief chooses a player (not themself). Mark them ‘Negative vote’.",
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
      "You must use a vote token to vote. Dead players may choose to give you theirs. If so, you learn their alignment. You are sober & healthy.",
  },
  {
    "id": "grandmother",
    "name": "Grandmother",
    "edition": "bmr",
    "team": "townsfolk",
    "firstNightReminder":
      "Point to a good player & show their character token.",
    "otherNightReminder":
      "If the grandchild was killed by the Demon tonight, the Grandmother dies too.",
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
    "firstNightReminder": "Point to a good player.",
    "otherNightReminder": "",
    "reminders": [
      "Known",
    ],
    "setup": false,
    "ability": "You start knowing 1 good player.",
  },
  {
    "id": "knight",
    "name": "Knight",
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder": "Point to 2 players who are not the Demon.",
    "otherNightReminder": "",
    "reminders": [
      "Known",
    ],
    "setup": false,
    "ability": "You start knowing 2 players that are not the Demon.",
  },
  {
    "id": "shugenja",
    "name": "Shugenja",
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder":
      "If the closest evil player is clockwise or anticlockwise, point in that direction. If the two closest evil players are equidistant, point in either direction.",
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
    "firstNightReminder":
      "The Sailor chooses a living player. Mark them or the Sailor ‘Drunk’.",
    "otherNightReminder":
      "The Sailor chooses a living player. Mark them or the Sailor ‘Drunk’.",
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
      "The Chambermaid chooses 2 alive players. Show how many woke tonight for their ability.",
    "otherNightReminder":
      "The Chambermaid chooses 2 alive players. Show how many woke tonight for their ability.",
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
      "The Exorcist chooses a different player from last night. Mark them ‘Chosen’. If that player is the Demon: Wake the Demon. Show the ‘This character selected you’ & Exorcist tokens. Point to the Exorcist. The Demon does not act tonight.",
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
      "The Innkeeper chooses 2 players. Mark both ‘Protected’ and one ‘Drunk’.",
    "reminders": [
      "Protected",
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
      "The Gambler chooses a player & a character. If the player is not that character, mark them ‘Dead’.",
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
      "If the Gossip’s public statement was true, mark a player ‘Dead’.",
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
      "The Courtier may choose a character. If they do & a player is the chosen character, mark them ‘Drunk 1’.",
    "otherNightReminder":
      "If there are drunk reminders, update them. The Courtier may choose a character. If they do & a player is the chosen character, mark them ‘Drunk 1’.",
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
      "The Professor may choose a dead player. If that player is a Townsfolk, mark them ‘Alive’.",
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
      "Everyone drunk",
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
    "otherNightReminder": "The Tinker might die.",
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
      "If the Moonchild chose a good player today, that player dies.",
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
      "If there are 7 or more players:<ul><li>Show the ‘These are your Minions’ token & point to any players.</li><li>Show the ‘These characters are not in play’ token & 3 good character tokens.</li><li>Put the Lunatic to sleep & wake the Demon. If they saw the Lunatic token, show the ‘You are’ token and the Demon token.</li><li>Show the ‘This player is’ token & the Lunatic token, then point to the Lunatic.</li></ul>Later in the night, if applicable, simulate the Demon acting. Put the Lunatic to sleep & wake the Demon. Show the Lunatic token, then point to whoever the Lunatic chose.",
    "otherNightReminder":
      "Simulate the Demon acting. Put the Lunatic to sleep & wake the Demon. Show the Lunatic token, then point to whoever the Lunatic chose.",
    "reminders": [
      "Attack 1",
      "Attack 2",
      "Attack 3",
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
    "firstNightReminder": "Show the tokens of all in-play Outsiders.",
    "otherNightReminder":
      "If an Outsider died today, the Godfather chooses a player. That player dies.",
    "reminders": [
      "Died today",
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
      "The Devil’s Advocate chooses a living player. That player survives execution tomorrow.",
    "otherNightReminder":
      "The Devil’s Advocate chooses a different living player from last night. That player survives execution tomorrow.",
    "reminders": [
      "Survives execution",
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
    "otherNightReminder": "The Assassin may choose a player. That player dies.",
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
      "If no-one died during the day, the Zombuul chooses a player. That player dies.",
    "reminders": [
      "Died today",
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
    "firstNightReminder":
      "The Pukka chooses a player. That player is poisoned.",
    "otherNightReminder":
      "The Pukka chooses a player. That player is poisoned. The previously poisoned player dies, then becomes healthy.",
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
      "A player that the Shabaloth chose last night might be resurrected. The Shabaloth chooses 2 players. Those players die.",
    "reminders": [
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
      "The Po may choose a player. If they chose no-one last night, they must choose 3 players. Chosen players die.",
    "reminders": [
      "Dead",
      "3 attacks",
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
      "Show the Apprentice the ‘You are’ token, then a Townsfolk or Minion token. Replace the Apprentice token with that character token, and put the Apprentice’s ‘Is the Apprentice’ reminder by that character token.",
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
      "No ability",
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
      "Nominate good",
      "Nominate evil",
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
    "firstNightReminder":
      "Show the number of steps from the Demon to the closest Minion.",
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
      "The Dreamer chooses a player. Show 1 good & 1 evil character token, one of which is their character.",
    "otherNightReminder":
      "The Dreamer chooses a player. Show 1 good & 1 evil character token, one of which is their character.",
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
      "The Snake Charmer chooses an alive player. If they chose the Demon: <ul><li>Show the ‘You are’ & Demon tokens and inform them of their new alignment. Put them to sleep.</li><li>Swap the Demon and Snake Charmer character tokens. The new Snake Charmer is poisoned.</li><li>Wake the old Demon, show the ‘You are’ & Snake Charmer tokens and inform them of their new alignment.</li></ul>",
    "otherNightReminder":
      "The Snake Charmer chooses an alive player. If they chose the Demon: <ul><li>Show the ‘You are’ & Demon tokens and inform them of their new alignment. Put them to sleep.</li><li>Swap the Demon and Snake Charmer character tokens. The new Snake Charmer is poisoned.</li><li>Wake the old Demon, show the ‘You are’ & Snake Charmer tokens and inform them of their new alignment.</li></ul>",
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
    "firstNightReminder":
      "Show the number of players whose ability malfunctioned due to other abilities.",
    "otherNightReminder":
      "Show the number of players whose ability malfunctioned due to other abilities.",
    "reminders": [
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
    "otherNightReminder": "Indicate whether the Demon voted today.",
    "reminders": [
      "Demon voted",
      "Demon not voted",
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
    "otherNightReminder": "Indicate whether a Minion nominated today.",
    "reminders": [
      "Minions not nominated",
      "Minion nominated",
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
    "otherNightReminder": "Show the number of dead evil players.",
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
      "The Seamstress may choose 2 players. Indicate whether they are the same alignment.",
    "otherNightReminder":
      "The Seamstress may choose 2 players. Indicate whether they are the same alignment.",
    "reminders": [
      "No ability",
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
      "The Philosopher may choose a good character.<ul><li>If not in play, swap their character token with the chosen character and place the ‘Is the Philosopher’ reminder.</li><li>If in play, mark a player who is the chosen character ‘Drunk’.</li></ul>",
    "otherNightReminder":
      "The Philosopher may choose a good character.<ul><li>If not in play, swap their character token with the chosen character and place the ‘Is the Philosopher’ reminder.</li><li>If in play, mark a player who is the chosen character ‘Drunk’.</li></ul>",
    "reminders": [
      "Drunk",
      "Is the Philosopher",
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
      "No ability",
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
    "otherNightReminder": "Show the number of correct guesses.",
    "reminders": [
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
      "When the Sweetheat dies, choose a player to be drunk.",
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
      "If the Barber died today or tonight, show the Demon the ‘This character selected you’ & Barber tokens. If they chose players, swap their character tokens. Wake each player individually. Show the ‘You are’ token & their new character token.",
    "reminders": [
      "Haircuts tonight",
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
      "Wake both twins and confirm eye contact. Show the good twin’s token to the Evil Twin & the Evil Twin’s token to the good twin.",
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
    "firstNightReminder":
      "The Witch chooses a player. If that player nominates tomorrow they die immediately.",
    "otherNightReminder":
      "If more than 3 players live, the Witch chooses a player. If that player nominates tomorrow they die immediately.",
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
      "The Cerenovus chooses a player & character. Put the Cerenovus to sleep & wake the chosen player. Show the ‘This character selected you’ & Cerenovus tokens, then show the selected character token.",
    "otherNightReminder":
      "The Cerenovus chooses a player & character. Put the Cerenovus to sleep & wake the chosen player. Show the ‘This character selected you’ & Cerenovus tokens, then show the selected character token.",
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
      "The Pit-Hag chooses a player & character. If this character is not in play: Put the Pit-Hag to sleep. Wake the chosen player, show them the ‘You are’ token & their new character token.",
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
      "The Fang Gu chooses a player. That player dies. If they chose an Outsider (once): <ul><li>Put the Fang Gu to sleep. Replace the Outsider with a spare Fang Gu token.</li><li>Wake the chosen player. Show the ‘You are’ & Fang Gu tokens, then give a thumbs-down.",
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
      "The Vigormortis chooses a player. That player dies. If they are a Minion, poison a neighboring Townsfolk.",
    "reminders": [
      "Dead",
      "Has ability",
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
    "otherNightReminder":
      "The Ojo chooses a character. If in play, a player of the chosen character dies. If not, choose a player to die.",
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
    "otherNightReminder": "The No Dashii chooses a player. That player dies.",
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
    "otherNightReminder": "The Vortox chooses a player. That player dies.",
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
      "The Harlot chooses a player. Put the Harlot to sleep & wake the chosen player. Show them the ‘This character selected you’ & Harlot tokens. If they nod, put them to sleep, wake the Harlot & show them the chosen player’s character token. Decide if both players die.",
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
      "The Bone Collector may choose a dead player. Put the Bone Collector’s ‘Has Ability’ reminder by the chosen player’s character token.",
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
    "firstNightReminder": "Point to 3 players, exactly 1 of which is evil.",
    "otherNightReminder": "",
    "reminders": [
      "Seen",
    ],
    "setup": false,
    "ability": "You start knowing 3 players, 1 and only 1 of which is evil.",
  },
  {
    "id": "bountyhunter",
    "name": "Bounty Hunter",
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder":
      "Point to 1 evil player. Wake the evil Townsfolk, show them the ‘You are’ token & give a thumbs-down.",
    "otherNightReminder":
      "If the known player died, point to another evil player.",
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
    "firstNightReminder": "Show the Pixie 1 in-play Townsfolk.",
    "otherNightReminder": "",
    "reminders": [
      "Mad",
      "Has ability",
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
    "firstNightReminder":
      "Give the General a thumbs-up, thumbs-down, or thumb-to-the-side as appropriate.",
    "otherNightReminder":
      "Give the General a thumbs-up, thumbs-down, or thumb-to-the-side as appropriate.",
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
      "The Preacher chooses a player. If a Minion is chosen, put the Preacher to sleep, wake the chosen Minion and show the ‘This character selected you’ & Preacher tokens.",
    "otherNightReminder":
      "The Preacher chooses a player. If a Minion is chosen, put the Preacher to sleep, wake the chosen Minion and show the ‘This character selected you’ & Preacher tokens.",
    "reminders": [
      "At a sermon",
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
      "Wake the Demon, show the ‘This character selected you’ & the King tokens, then point to the King player.",
    "otherNightReminder":
      "If the dead equal or outnumber the living, show the King a character token of a living player.",
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
    "firstNightReminder":
      "Choose a character type. Point to a player whose character is that type. Mark them ‘Seen’.",
    "otherNightReminder":
      "Point to a player with a different character type to last night’s player. Mark them ‘Seen’.",
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
    "firstNightReminder": "Choose a good player. Mark them ‘Faux Paw’.",
    "otherNightReminder":
      "The Lycanthrope chooses an alive player. If good, they die & the Demon doesn’t kill tonight (they still wake).",
    "reminders": [
      "Dead",
      "Faux Paw",
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
    "firstNightReminder": "Decide the Amnesiac’s ability. Run that ability.",
    "otherNightReminder": "Run the Amnesiac’s ability.",
    "reminders": [
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
      "The Nightwatchman may choose a player. Put the Nightwatchman to sleep & wake the chosen player. Show the ‘This character selected you’ & Nightwatchman tokens, then point to the Nightwatchman player.",
    "otherNightReminder":
      "The Nightwatchman may choose a player. Put the Nightwatchman to sleep & wake the chosen player. Show the ‘This character selected you’ & Nightwatchman tokens, then point to the Nightwatchman player.",
    "reminders": [
      "No ability",
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
      "The Engineer may choose a Demon or some Minions. Replace the Demon or Minions with their choices. Put the Engineer to sleep, then wake the relevant players individually. Show the ‘You are’ & relevant character tokens.",
    "otherNightReminder":
      "The Engineer may choose a Demon or some Minions. Replace the Demon or Minions with their choices. Put the Engineer to sleep, then wake the relevant players individually. Show the ‘You are’ & relevant character tokens.",
    "reminders": [
      "No ability",
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
      "Once per game, during the day, visit the Storyteller for some advice to help you win.",
  },
  {
    "id": "huntsman",
    "name": "Huntsman",
    "edition": "kickstarter",
    "team": "townsfolk",
    "firstNightReminder":
      "The Huntsman may choose a living player. If they choose the Damsel:<ul><li>Put the Huntsman to sleep. Wake the Damsel and show the ‘You are’ token & a not-in-play Townsfolk token. Put them to sleep.</li><li>Swap the Damsel’s character token with the not-in-play Townsfolk token.</li></ul>",
    "otherNightReminder":
      "The Huntsman may choose a living player. If they choose the Damsel:<ul><li>Put the Huntsman to sleep. Wake the Damsel and show the ‘You are’ token & a not-in-play Townsfolk token. Put them to sleep.</li><li>Swap the Damsel’s character token with the not-in-play Townsfolk token.</li></ul>",
    "reminders": [
      "No ability",
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
    "firstNightReminder": "Show the Alchemist a Minion token.",
    "otherNightReminder": "",
    "reminders": [],
    "remindersGlobal": [
      "Is the Alchemist",
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
      "If a Farmer died tonight, choose another alive good player. Wake them, show the ‘You are’ & Farmer token.",
    "reminders": [],
    "setup": false,
    "ability": "When you die at night, an alive good player becomes a Farmer.",
  },
  {
    "id": "magician",
    "name": "Magician",
    "edition": "kickstarter",
    "team": "townsfolk",
    "firstNightReminder": "",
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
      "If the King was killed by the Demon, wake the Choirboy and point to the Demon player.",
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
      "Evil wakes",
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
      "If the Demon killed the Banshee, immediately announce that the Banshee died.",
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
      "After Minion info, wake each Minion individually, show the ‘These characters are not in play’ token & 3 not-in-play good character tokens.",
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
    "otherNightReminder":
      "The Acrobat chooses a player. If they are drunk or poisoned, or become drunk or poisoned later tonight, the Acrobat dies.",
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
    "firstNightReminder":
      "The Ogre chooses a player (not themself) and becomes their alignment.",
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
      "Wake all the Minions, show them the ‘This character selected you’ & Damsel tokens.",
    "otherNightReminder": "",
    "reminders": [
      "Guess used",
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
      "Show the Grimoire for as long as the Widow needs. The Widow chooses a player. They are poisoned. Put the Widow to sleep. Wake a good player, show the ‘This character selected you’ & the Widow token.",
    "otherNightReminder": "",
    "reminders": [
      "Poisoned",
    ],
    "remindersGlobal": [
      "Knows",
    ],
    "setup": false,
    "ability":
      "On your 1st night, look at the Grimoire and choose a player: they are poisoned. 1 good player knows a Widow is in play.",
  },
  {
    "id": "fearmonger",
    "name": "Fearmonger",
    "edition": "kickstarter",
    "team": "minion",
    "firstNightReminder":
      "The Fearmonger chooses a player. Announce that ‘the Fearmonger has chosen a player’.",
    "otherNightReminder":
      "The Fearmonger chooses a player. If not previously marked ‘Fear’, announce that ‘the Fearmonger has chosen a player’.",
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
      "Wake the player marked ‘Turns evil’, show them the ‘You are’ token & give a thumbs-down.",
    "reminders": [
      "Turns evil",
      "No ability",
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
      "Wake the Demon, point to the Marionette player & show the ‘This player is’ & Marionette tokens.",
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
      "About to die",
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
      "The Harpy chooses 2 players. Wake the 1st chosen player, show the ‘This character selected you’ & Harpy tokens, then point at the 2nd chosen player.",
    "otherNightReminder":
      "The Harpy chooses 2 players. Wake the 1st chosen player, show the ‘This character selected you’ & Harpy tokens, then point at the 2nd chosen player.",
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
      "Show the ‘These characters are not in play’ token & 3 not-in-play good character tokens.",
    "otherNightReminder":
      "If it is night 3, the Summoner chooses a player and a Demon. Put the Summoner to sleep. Wake the chosen player, show the ‘You are’ & chosen Demon tokens, then give a thumbs-down. Replace the chosen player’s token with the chosen Demon token.",
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
      "Wake all Minions and allow them to choose a babysitter for Lil’ Monsta.",
    "otherNightReminder":
      "Wake all Minions and allow them to choose a babysitter for Lil’ Monsta. Choose if a player dies.",
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
    "firstNightReminder": "The Lleech chooses a player. Mark them ‘Poisoned’.",
    "otherNightReminder": "The Lleech chooses a player. That player dies.",
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
      "The Al-Hadikhia may choose 3 players. Mark them, in order, ‘1’, ‘2’, ‘3’. For each chosen player, in order, say ‘The Al-Hadikhia has chosen’, the player’s name, then ‘Do you choose to live?’ They nod or shake. Add or remove shrouds as appropriate. If all 3 live at the end of this process, all 3 die.",
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
    "otherNightReminder": "Choose if a player dies.",
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
      "Mark the Leviathan ‘Day 1’. Announce that ‘The Leviathan is in play.’",
    "otherNightReminder":
      "Update the Leviathan reminder. Optionally, announce that ‘The Leviathan is in play’ and say which day it is.",
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
      "If it is night 3, wake the Minions. Show them the ‘You are’ & Riot tokens.",
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
      "The Kazali chooses their Minions. Wake the new Minions individually, show the ‘You are’ token, their new character token, and give a thumbs-down.",
    "otherNightReminder": "The Kazali chooses a player. That player dies.",
    "reminders": [
      "Dead",
    ],
    "setup": true,
    "ability":
      'Each night*, choose a player: they die. [You choose which players are which Minions. <span style="whitespace:nowrap">-?</span> to <span style="whitespace:nowrap">+?</span> Outsiders]',
  },
  {
    "id": "yaggababble",
    "name": "Yaggababble",
    "edition": "",
    "team": "demon",
    "firstNightReminder": "Show the Yaggababble their secret phrase.",
    "otherNightReminder":
      "For each time the Yaggababble said their phrase publicly today (that did not already cause a death), choose if a player dies.",
    "reminders": [
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
      "Replace the character tokens of the Lord of Typhon’s neighbors with Minion tokens. Wake them individually, show the ‘You are’ token, their new character token, and give a thumbs-down.",
    "otherNight": 31.1,
    "otherNightReminder":
      "The Lord of Typhon chooses a player. That player dies.",
    "reminders": ["Dead"],
    "ability":
      'Each night*, choose a player: they die. [Evil characters are in a line. You are in the middle. +1 Minion. <span style="whitespace:nowrap">-?</span> to <span style="whitespace:nowrap">+?</span> Outsiders]',
  },
  {
    "id": "boffin",
    "name": "Boffin",
    "edition": "",
    "team": "minion",
    "firstNight": 0.3,
    "firstNightReminder":
      "Wake the Demon & Boffin either together or individually. Show the not-in-play good character token.",
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
      "Mark the Xann ‘Night 1’. If X is 1, add the ‘X’ reminder.",
    "otherNightReminder":
      "Change the Xaan’s night reminder to the relevant night. If it is night X, add the ‘X’ reminder.",
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
    "firstNightReminder": "Run the Wizard ability if applicable.",
    "otherNight": 14.1,
    "otherNightReminder": "Run the Wizard ability if applicable.",
    "reminders": ["?"],
    "ability":
      "Once per game, choose to make a wish. If granted, it might have a price & leave a clue as to its nature.",
  },
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
    "firstNightReminder": "",
    "otherNight": 1,
    "otherNightReminder":
      "If a Demon attack could end the game, and the Demon is marked ‘Final night: No Attack’, then the Demon does not act tonight.",
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
      "Wake each player marked ‘Visitor’ or ‘False Info’ individually. Show the Duchess token. Give true information to those marked ‘Visitor’ and false info to the player marked ‘False Info’.",
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
      "Mark a good player ‘Safe’. Wake all evil players and point to the marked player.",
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
];

export const jinxes = {
  "Cannibal": {
    "Juggler":
      "If the Juggler guesses on their first day and dies by execution, tonight the living Cannibal learns how many guesses the Juggler got correct.",
    "Butler":
      "If the Cannibal gains the Butler ability, the Cannibal learns this.",
    "Zealot":
      "If the Cannibal gains the Zealot ability, the Cannibal learns this.",
    "Poppy Grower":
      "If the Cannibal eats the Poppy Grower, then dies or loses the Poppy Grower ability, the Demon and Minions learn each other that night.",
  },
  "Chambermaid": {
    "Mathematician":
      "The Chambermaid learns if the Mathematician wakes tonight or not, even though the Chambermaid wakes first.",
  },
  "Philosopher": {
    "Bounty Hunter":
      "If the Philosopher gains the Bounty Hunter ability, a Townsfolk might turn evil.",
  },
  "Lunatic": {
    "Mathematician":
      "The Mathematician learns if the Lunatic attacks a different player(s) than the real Demon attacked.",
  },
  "Ogre": {
    "Recluse":
      "If the Recluse registers as evil to the Ogre, the Ogre learns that they are evil.",
  },
  "Baron": {
    "Heretic": "The Baron might only add 1 Outsider, not 2.",
    "Plague Doctor":
      "If the Storyteller gains the Baron ability, up to two players become not-in-play Outsiders.",
  },
  "Boffin": {
    "Alchemist":
      "If the Alchemist has the Boffin ability, the Alchemist does not learn what ability the Demon has.",
    "Cult Leader":
      "If the Demon has the Cult Leader ability, they can’t turn good due to this ability.",
    "Drunk":
      "If the Demon would have the Drunk ability, the Boffin chooses a Townsfolk player to have this ability instead.",
    "Goon":
      "If the Demon has the Goon ability, they can’t turn good due to this ability.",
    "Heretic": "The Demon cannot have the Heretic ability.",
    "Ogre": "The Demon cannot have the Ogre ability.",
    "Politician": "The Demon cannot have the Politician ability.",
    "Village Idiot":
      "If there is a spare token, the Boffin can give the Demon the Village Idiot ability.",
  },
  "Boomdandy": {
    "Plague Doctor":
      "If the Plague Doctor is executed and the Storyteller would gain the Boomdandy ability, the Boomdandy ability triggers immediately.",
  },
  "Cerenovus": {
    "Goblin":
      "The Cerenovus may choose to make a player mad that they are the Goblin.",
  },
  "Evil Twin": {
    "Plague Doctor":
      "The Storyteller cannot gain the Evil Twin ability if the Plague Doctor dies.",
  },
  "Fearmonger": {
    "Plague Doctor":
      "If the Plague Doctor dies, a living Minion gains the Fearmonger ability in addition to their own ability, and learns this.",
  },
  "Goblin": {
    "Plague Doctor":
      "If the Plague Doctor dies, a living Minion gains the Goblin ability in addition to their own ability, and learns this.",
  },
  "Godfather": {
    "Heretic": "Only 1 jinxed character can be in play.",
  },
  "Marionette": {
    "Balloonist":
      "If the Marionette thinks that they are the Balloonist, +1 Outsider might have been added.",
    "Damsel": "The Marionette does not learn that a Damsel is in play.",
    "Huntsman":
      "If the Marionette thinks that they are the Huntsman, the Damsel was added.",
    "Lil’ Monsta":
      "The Marionette neighbors a Minion, not the Demon. The Marionette is not woken to choose who takes the Lil’ Monsta token, and does not learn they are the Marionette if they have the Lil’ Monsta token.",
    "Plague Doctor":
      "If the Demon has a neighbor who is alive and a Townsfolk or Outsider when the Plague Doctor dies, that player becomes an evil Marionette. If there is already an extra evil player, this does not happen.",
    "Poppy Grower":
      "When the Poppy Grower dies, the Demon learns the Marionette but the Marionette learns nothing.",
    "Snitch":
      "The Marionette does not learn 3 not in-play characters. The Demon learns an extra 3 instead.",
  },
  "Organ Grinder": {
    "Butler":
      "If the Organ Grinder is causing eyes closed voting, the Butler may raise their hand to vote but their vote is only counted if their master voted too.",
  },
  "Pit-Hag": {
    "Cult Leader":
      "If the Pit-Hag turns an evil player into the Cult Leader, they can’t turn good due to their own ability.",
    "Damsel":
      "If a Pit-Hag creates a Damsel, the Storyteller chooses which player it is.",
    "Goon":
      "If the Pit-Hag turns an evil player into the Goon, they can’t turn good due to their own ability.",
    "Heretic": "A Pit-Hag can not create a Heretic.",
    "Ogre":
      "If the Pit-Hag turns an evil player into the Ogre, they can’t turn good due to their own ability.",
    "Politician":
      "If the Pit-Hag turns an evil player into the Politician, they can’t turn good due to their own ability.",
    "Village Idiot":
      "If there is a spare token, the Pit-Hag can create an extra Village Idiot. If so, the drunk Village Idiot might change.",
  },
  "Scarlet Woman": {
    "Plague Doctor":
      "If the Plague Doctor dies, a living Minion gains the Scarlet Woman ability in addition to their own ability, and learns this.",
  },
  "Spy": {
    "Alchemist": "The Alchemist can not have the Spy ability.",
    "Damsel": "If the Spy is (or has been) in play, the Damsel is poisoned.",
    "Heretic": "Only 1 jinxed character can be in play.",
    "Magician":
      "When the Spy sees the Grimoire, the Demon and Magician’s character tokens are removed.",
    "Ogre": "The Spy registers as evil to the Ogre.",
    "Plague Doctor":
      "If the Plague Doctor dies, a living Minion gains the Spy ability in addition to their own ability, and learns this.",
    "Poppy Grower":
      "If the Poppy Grower is in play, the Spy does not see the Grimoire until the Poppy Grower dies.",
  },
  "Summoner": {
    "Alchemist":
      "If there is an Alchemist-Summoner in play, the game starts with a Demon in play, as normal. If the Alchemist-Summoner chooses a player, they make that player a Demon but do not change their alignment.",
    "Clockmaker":
      "If the Summoner is in play, the Clockmaker does not receive their information until a Demon is created.",
    "Courtier":
      "If the Summoner is drunk on the 3rd night, the Summoner chooses which Demon, but the Storyteller chooses which player.",
    "Engineer":
      "If the Engineer removes a Summoner from play before that Summoner uses their ability, the Summoner uses their ability immediately.",
    "Hatter":
      "The Summoner cannot create an in-play Demon. If the Summoner creates a not-in-play Demon, deaths tonight are arbitrary.",
    "Kazali":
      "The Summoner cannot create an in-play Demon. If the Summoner creates a not-in-play Demon, deaths tonight are arbitrary.",
    "Legion":
      "If the Summoner creates Legion, most players (including all evil players) become evil Legion.",
    "Lord of Typhon":
      "If the Summoner creates a Lord of Typhon, the Lord of Typhon must neighbor a Minion. The other neighbor becomes a not-in-play evil Minion.",
    "Marionette":
      "The Marionette neighbors the Summoner. The Summoner knows who the Marionette is.",
    "Pit-Hag":
      "The Summoner cannot create an in-play Demon. If the Summoner creates a not-in-play Demon, deaths tonight are arbitrary.",
    "Poppy Grower":
      "If the Poppy Grower is alive when the Summoner acts, the Summoner chooses which Demon, but the Storyteller chooses which player.",
    "Preacher":
      "If the Preacher chose the Summoner on or before the 3rd night, the Summoner chooses which Demon, but the Storyteller chooses which player.",
    "Pukka":
      "The Summoner may choose a player to become the Pukka on the 2nd night.",
    "Zombuul":
      "If the Summoner turns a dead player into the Zombuul, the Storyteller treats that player as a Zombuul that has died once.",
  },
  "Vizier": {
    "Alsaahir":
      "If the Vizier is in play, the Alsaahir must also guess which Demon(s) are in play.",
    "Courtier":
      "If the Vizier loses their ability, they learn this. If the Vizier is executed while they have their ability, their team wins.",
    "Fearmonger":
      "The Vizier wakes with the Fearmonger, learns who they choose and cannot choose to immediately execute that player.",
    "Investigator":
      "If the Investigator learns that the Vizier is in play, the existence of the Vizier is not announced by the Storyteller.",
    "Magician":
      "If the Vizier and Magician are both in play, the Demon does not learn the Minions.",
    "Politician": "The Politician might register as evil to the Vizier.",
    "Preacher":
      "If the Vizier loses their ability, they learn this. If the Vizier is executed while they have their ability, their team wins.",
    "Zealot": "The Zealot might register as evil to the Vizier.",
  },
  "Widow": {
    "Alchemist": "The Alchemist can not have the Widow ability.",
    "Damsel": "If the Widow is (or has been) in play, the Damsel is poisoned.",
    "Heretic": "Only 1 jinxed character can be in play.",
    "Magician":
      "When the Widow sees the Grimoire, the Demon and Magician’s character tokens are removed.",
    "Poppy Grower":
      "If the Poppy Grower is in play, the Widow does not see the Grimoire until the Poppy Grower dies.",
  },
  "Al-Hadikhia": {
    "Scarlet Woman":
      "If there are two living Al-Hadikhias, the Scarlet Woman Al-Hadikhia becomes the Scarlet Woman again.",
  },
  "Fang Gu": {
    "Scarlet Woman":
      "If the Fang Gu chooses an Outsider and dies, the Scarlet Woman does not become the Fang Gu.",
  },
  "Kazali": {
    "Bounty Hunter":
      "An evil Townsfolk is only created if the Bounty Hunter is still in play after the Kazali acts.",
    "Choirboy":
      "The Kazali can not choose the King to become a Minion if a Choirboy is in play.",
    "Goon":
      "The Kazali can choose that the Goon player is one of their evil Minions.",
    "Huntsman":
      "If the Kazali chooses the Damsel to become a Minion, and a Huntsman is in play, a good player becomes the Damsel.",
    "Marionette":
      "If the Kazali chooses to create a Marionette, they must choose one of their neighbors.",
    "Soldier":
      "The Kazali can choose that the Soldier player is one of their evil Minions.",
  },
  "Legion": {
    "Engineer":
      "Legion and the Engineer can not both be in play at the start of the game. If the Engineer creates Legion, most players (including all evil players) become evil Legion.",
    "Hatter":
      "If the Hatter dies and Legion is in play, nothing happens. If the Hatter dies and an evil player chooses Legion, all current evil players become Legion.",
    "Minstrel":
      "If Legion died by execution today, Legion keeps their ability, but the Minstrel might learn they are Legion.",
    "Preacher":
      "If the Preacher chooses Legion, Legion keeps their ability, but the Preacher might learn they are Legion.",
    "Zealot": "The Zealot might register as evil to Legion’s ability.",
  },
  "Leviathan": {
    "Banshee":
      "Each night*, the Leviathan chooses an alive good player (different to previous nights): a chosen Banshee dies & gains their ability.",
    "Exorcist":
      "Evil does not win when more than 1 good player has been executed, if the Exorcist is alive and has ever successfully chosen the Leviathan.",
    "Farmer":
      "Each night*, the Leviathan chooses an alive good player (different to previous nights): a chosen Farmer uses their ability but does not die.",
    "Grandmother":
      "If Leviathan is in play and the Grandchild dies by execution, evil wins.",
    "Hatter":
      "If the Hatter dies on or after day 5, the Demon cannot choose Leviathan.",
    "Innkeeper":
      "If the Leviathan is in play, the Innkeeper-protected-players are safe from all evil abilities.",
    "King":
      "If the Leviathan is in play, and at least 1 player is dead, the King learns an alive character each night.",
    "Mayor":
      "If Leviathan is in play & no execution occurs on day 5, good wins.",
    "Monk":
      "If the Leviathan is in play, the Monk-protected-player is safe from all evil abilities.",
    "Pit-Hag": "After day 5, the Pit-Hag cannot choose Leviathan.",
    "Ravenkeeper":
      "Each night*, the Leviathan chooses an alive player (different to previous nights): a chosen Ravenkeeper uses their ability but does not die.",
    "Sage":
      "Each night*, the Leviathan chooses an alive good player (different to previous nights): a chosen Sage uses their ability but does not die.",
    "Soldier":
      "If the Leviathan is in play, the Soldier is safe from all evil abilities.",
  },
  "Lil’ Monsta": {
    "Hatter":
      "If a Demon chooses Lil’ Monsta, they also choose a Minion to become and babysit Lil’ Monsta tonight.",
    "Magician":
      "Each night, the Magician chooses a Minion: if that Minion & Lil’ Monsta are alive, that Minion babysits Lil’ Monsta.",
    "Poppy Grower":
      "If the Poppy Grower is in play, Minions don’t wake together. They are woken one by one, until one of them chooses to take the Lil’ Monsta token.",
    "Scarlet Woman":
      "If there are 5 or more players alive and the player holding the Lil’ Monsta token dies, the Scarlet Woman is given the Lil’ Monsta token tonight.",
    "Vizier":
      "The Vizier can die by execution if they are babysitting Lil’ Monsta.",
  },
  "Lleech": {
    "Heretic":
      "If the Lleech has poisoned the Heretic then the Lleech dies, the Heretic remains poisoned.",
    "Mastermind":
      "If the Mastermind is alive and the Lleech’s host dies by execution, the Lleech lives but loses their ability.",
    "Slayer": "If the Slayer slays the Lleech’s host, the host dies.",
  },
  "Psychopath": {
    "Golem":
      "If the Psychopath is mad as the Golem, the Psychopath has the Golem ability instead.",
  },
  "Riot": {
    "Banshee":
      "Each night*, Riot chooses an alive good player (different to previous nights): a chosen Banshee dies & gains their ability.",
    "Exorcist":
      "If the Exorcist chooses Riot on the 3rd night, Minions do not become Riot.",
    "Farmer":
      "Each night*, Riot chooses an alive good player (different to previous nights): a chosen Farmer uses their ability but does not die.",
    "Grandmother":
      "If Riot is in play and the Grandchild dies during the day, the Grandmother dies too.",
    "Innkeeper":
      "If Riot is in play, the Innkeeper-protected player is safe from all evil abilities.",
    "King":
      "If Riot is in play, and at least 1 player is dead, the King learns an alive character each night.",
    "Mayor":
      "The Mayor may choose to stop nominations. If they do so when only 1 Riot is alive, good wins. Otherwise, evil wins.",
    "Monk":
      "If Riot is in play, the Monk-protected player is safe from all evil abilities.",
    "Ravenkeeper":
      "Each night*, Riot chooses an alive good player (different to previous nights): a chosen Ravenkeeper uses their ability but does not die.",
    "Sage":
      "Each night*, Riot chooses an alive good player (different to previous nights): a chosen Sage uses their ability but does not die.",
    "Soldier":
      "If Riot is in play, the Soldier is safe from all evil abilities.",
    "Town Crier": "Riot registers as a Minion to the Town Crier.",
  },
  "Vortox": {
    "Banshee":
      "If the Vortox is in play and the Demon kills the Banshee, the players still learn that the Banshee has died.",
  },
  "Yaggababble": {
    "Exorcist":
      "If the Exorcist chooses the Yaggababble, the Yaggababble ability does not kill tonight.",
  },
  "Demon Atheist": {
    "Pit-Hag": "The Pit-Hag’s ability cannot create a Demon Atheist.",
    "Engineer": "The Engineer’s ability cannot create a Demon Atheist.",
  },
};
