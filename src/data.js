export const chars = [
  {
    "id": "washerwoman",
    "name": "Washerwoman",
    "edition": "tb",
    "team": "townsfolk",
    "firstNightReminder":
      "Show the character token of a Townsfolk in play. Point to two players, one of which is that character.",
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
      "Show the character token of an Outsider in play. Point to two players, one of which is that character.",
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
      "Show the character token of a Minion in play. Point to two players, one of which is that character.",
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
      "Show the finger signal (0, 1, 2, …) for the number of pairs of neighbouring evil players.",
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
    "firstNightReminder":
      "Show the finger signal (0, 1, 2) for the number of evil alive neighbours of the Empath.",
    "otherNightReminder":
      "Show the finger signal (0, 1, 2) for the number of evil neighbours.",
    "reminders": [],
    "setup": false,
    "ability":
      "Each night, you learn how many of your 2 alive neighbours are evil.",
  },
  {
    "id": "fortune_teller",
    "name": "Fortune Teller",
    "edition": "tb",
    "team": "townsfolk",
    "firstNightReminder":
      "The Fortune Teller points to two players. Give the head signal (nod yes, shake no) for whether one of those players is the Demon. ",
    "otherNightReminder":
      "The Fortune Teller points to two players. Show the head signal (nod ‘yes’, shake ‘no’) for whether one of those players is the Demon.",
    "reminders": [
      "Red herring",
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
      "If a player was executed today: Show that player’s character token.",
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
      "The previously protected player is no longer protected. The Monk points to a player not themself. Mark that player ‘Protected’.",
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
      "If the Ravenkeeper died tonight: The Ravenkeeper points to a player. Show that player’s character token.",
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
      "The Butler points to a player. Mark that player as ‘Master’.",
    "otherNightReminder":
      "The Butler points to a player. Mark that player as ‘Master’.",
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
      "The Poisoner points to a player. That player is poisoned.",
    "otherNightReminder":
      "The previously poisoned player is no longer poisoned. The Poisoner points to a player. That player is poisoned.",
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
    "firstNightReminder":
      "Show the Grimoire to the Spy for as long as they need.",
    "otherNightReminder":
      "Show the Grimoire to the Spy for as long as they need.",
    "reminders": [],
    "setup": false,
    "ability":
      "Each night, you see the Grimoire. You might register as good & as a Townsfolk or Outsider, even if dead.",
  },
  {
    "id": "scarlet_woman",
    "name": "Scarlet Woman",
    "edition": "tb",
    "team": "minion",
    "firstNightReminder": "",
    "otherNightReminder":
      "If the Scarlet Woman became the Demon today: Show the ‘You are’ card, then the demon token.",
    "reminders": [
      "Demon",
    ],
    "setup": false,
    "ability":
      "If there are 5 or more players alive & the Demon dies, you become the Demon. (Travellers don’t count)",
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
      "The Imp points to a player. That player dies. If the Imp chose themselves: Replace the character of 1 alive minion with a spare Imp token. Show the ‘You are’ card, then the Imp token.",
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
      "The Bureaucrat points to a player. Put the Bureaucrat’s ‘3 votes’ reminder by the chosen player’s character token.",
    "otherNightReminder":
      "The Bureaucrat points to a player. Put the Bureaucrat’s ‘3 votes’ reminder by the chosen player’s character token.",
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
      "The Thief points to a player. Put the Thief’s ‘Negative vote’ reminder by the chosen player’s character token.",
    "otherNightReminder":
      "The Thief points to a player. Put the Thief’s ‘Negative vote’ reminder by the chosen player’s character token.",
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
      "Show the marked character token. Point to the marked player.",
    "otherNightReminder":
      "If the Grandmother’s grandchild was killed by the Demon tonight: The Grandmother dies.",
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
    "firstNightReminder": "Point to the marked player.",
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
    "firstNightReminder": "Point to the 2 marked players.",
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
      "If the closest evil player is in a clockwise direction, point your finger horizontally in that direction. If the closest evil player is in an anti-clockwise direction, point your finger horizontally in that direction. If the two closest evil players are equidistant, point your finger horizontally in either direction.",
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
      "The Sailor points to a living player. Either the Sailor, or the chosen player, is drunk.",
    "otherNightReminder":
      "The previously drunk player is no longer drunk. The Sailor points to a living player. Either the Sailor, or the chosen player, is drunk.",
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
      "The Chambermaid points to two players. Show the number signal (0, 1, 2, …) for how many of those players wake tonight for their ability.",
    "otherNightReminder":
      "The Chambermaid points to two players. Show the number signal (0, 1, 2, …) for how many of those players wake tonight for their ability.",
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
      "The Exorcist points to a player, different from the previous night. If that player is the Demon: Wake the Demon. Show the Exorcist token. Point to the Exorcist. The Demon does not act tonight.",
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
      "The previously protected and drunk players lose those markers. The Innkeeper points to two players. Those players are protected. One is drunk.",
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
      "The Gambler points to a player, and a character on their sheet. If incorrect, the Gambler dies.",
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
      "If the Gossip’s public statement was true: Choose a player not protected from dying tonight. That player dies.",
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
      "The Courtier either shows a ‘no’ head signal, or points to a character on the sheet. If the Courtier used their ability: If that character is in play, that player is drunk.",
    "otherNightReminder":
      "Reduce the remaining number of days the marked player is poisoned. If the Courtier has not yet used their ability: The Courtier either shows a ‘no’ head signal, or points to a character on the sheet. If the Courtier used their ability: If that character is in play, that player is drunk.",
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
      "If the Professor has not used their ability: The Professor either shakes their head no, or points to a player. If that player is a Townsfolk, they are now alive.",
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
    "id": "tea_lady",
    "name": "Tea Lady",
    "edition": "bmr",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [
      "Can not die",
    ],
    "setup": false,
    "ability": "If both your alive neighbours are good, they can’t die.",
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
      "If the Moonchild used their ability to target a player today: If that player is good, they die.",
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
      "If 7 or more players: Show the Lunatic a number of arbitrary ‘Minions’, players equal to the number of Minions in play. Show 3 character tokens of arbitrary good characters. If the token received by the Lunatic is a Demon that would wake tonight: Allow the Lunatic to do the Demon actions. Place their ‘attack’ markers. Wake the Demon. Show the Demon’s real character token. Show them the Lunatic player. If the Lunatic attacked players: Show the real demon each marked player. Remove any Lunatic ‘attack’ markers.",
    "otherNightReminder":
      "Allow the Lunatic to do the actions of the Demon. Place their ‘attack’ markers. If the Lunatic selected players: Wake the Demon. Show the ‘attack’ marker, then point to each marked player. Remove any Lunatic ‘attack’ markers.",
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
    "firstNightReminder": "Show each of the Outsider tokens in play.",
    "otherNightReminder":
      "If an Outsider died today: The Godfather points to a player. That player dies.",
    "reminders": [
      "Died today",
      "Dead",
    ],
    "setup": true,
    "ability":
      "You start knowing which Outsiders are in play. If 1 died today, choose a player tonight: they die. [−1 or +1 Outsider]",
  },
  {
    "id": "devils_advocate",
    "name": "Devil’s Advocate",
    "edition": "bmr",
    "team": "minion",
    "firstNightReminder":
      "The Devil’s Advocate points to a living player. That player survives execution tomorrow.",
    "otherNightReminder":
      "The Devil’s Advocate points to a living player, different from the previous night. That player survives execution tomorrow.",
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
    "otherNightReminder":
      "If the Assassin has not yet used their ability: The Assassin either shows the ‘no’ head signal, or points to a player. That player dies.",
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
      "If no-one died during the day: The Zombuul points to a player. That player dies.",
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
      "The Pukka points to a player. That player is poisoned.",
    "otherNightReminder":
      "The Pukka points to a player. That player is poisoned. The previously poisoned player dies. ",
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
      "One player that the Shabaloth chose the previous night might be resurrected. The Shabaloth points to two players. Those players die.",
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
      "If the Po chose no-one the previous night: The Po points to three players. Otherwise: The Po either shows the ‘no’ head signal, or points to a player. Chosen players die.",
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
      "Show the Apprentice the ‘You are’ card, then a Townsfolk or Minion token. In the Grimoire, replace the Apprentice token with that character token, and put the Apprentice’s ‘Is the Apprentice’ reminder by that character token.",
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
      "Show the hand signal for the number (1, 2, 3, etc.) of places from Demon to closest Minion.",
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
      "The Dreamer points to a player. Show 1 good and 1 evil character token; one of these is correct.",
    "otherNightReminder":
      "The Dreamer points to a player. Show 1 good and 1 evil character token; one of these is correct.",
    "reminders": [],
    "setup": false,
    "ability":
      "Each night, choose a player (not yourself or Travellers): you learn 1 good and 1 evil character, 1 of which is correct.",
  },
  {
    "id": "snake_charmer",
    "name": "Snake Charmer",
    "edition": "snv",
    "team": "townsfolk",
    "firstNightReminder":
      "The Snake Charmer points to a player. If that player is the Demon: swap the Demon and Snake Charmer character and alignments. Wake each player to inform them of their new role and alignment. The new Snake Charmer is poisoned.",
    "otherNightReminder":
      "The Snake Charmer points to a player. If that player is the Demon: swap the Demon and Snake Charmer character and alignments. Wake each player to inform them of their new role and alignment. The new Snake Charmer is poisoned.",
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
      "Show the hand signal for the number (0, 1, 2, etc.) of players whose ability malfunctioned due to other abilities.",
    "otherNightReminder":
      "Show the hand signal for the number (0, 1, 2, etc.) of players whose ability malfunctioned due to other abilities.",
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
    "otherNightReminder":
      "Nod ‘yes’ or shake head ‘no’ for whether the Demon voted today. Place the ‘Demon not voted’ marker (remove ‘Demon voted’, if any).",
    "reminders": [
      "Demon voted",
      "Demon not voted",
    ],
    "setup": false,
    "ability": "Each night*, you learn if a Demon voted today.",
  },
  {
    "id": "town_crier",
    "name": "Town Crier",
    "edition": "snv",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder":
      "Nod ‘yes’ or shake head ‘no’ for whether a Minion nominated today. Place the ‘Minion not nominated’ marker (remove ‘Minion nominated’, if any).",
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
    "otherNightReminder":
      "Show the hand signal for the number (0, 1, 2, etc.) of dead evil players.",
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
      "The Seamstress either shows a ‘no’ head signal, or points to two other players. If the Seamstress chose players , nod ‘yes’ or shake ‘no’ for whether they are of same alignment.",
    "otherNightReminder":
      "If the Seamstress has not yet used their ability: the Seamstress either shows a ‘no’ head signal, or points to two other players. If the Seamstress chose players, nod ‘yes’ or shake ‘no’ for whether they are of same alignment.",
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
      "The Philosopher either shows a ‘no’ head signal, or points to a good character on their sheet. If they chose a character: Swap the out-of-play character token with the Philosopher token and add the ‘Is the Philosopher’ reminder. If the character is in play, place the drunk marker by that player.",
    "otherNightReminder":
      "If the Philosopher has not used their ability: the Philosopher either shows a ‘no’ head signal, or points to a good character on their sheet. If they chose a character: Swap the out-of-play character token with the Philosopher token and add the ‘Is the Philosopher’ reminder. If the character is in play, place the drunk marker by that player.",
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
    "otherNightReminder":
      "If today was the Juggler’s first day: Show the hand signal for the number (0, 1, 2, etc.) of ‘Correct’ markers. Remove markers.",
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
      "If the Sage was killed by a Demon: Point to two players, one of which is that Demon.",
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
    "otherNightReminder": "Choose a player that is drunk.",
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
      "If the Barber died today: Wake the Demon. Show the ‘This character selected you’ card, then Barber token. The Demon either shows a ‘no’ head signal, or points to 2 players. If they chose players: Swap the character tokens. Wake each player. Show ‘You are’, then their new character token.",
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
    "id": "evil_twin",
    "name": "Evil Twin",
    "edition": "snv",
    "team": "minion",
    "firstNightReminder":
      "Wake the Evil Twin and their twin. Confirm that they have acknowledged each other. Point to the Evil Twin. Show their Evil Twin token to the twin player. Point to the twin. Show their character token to the Evil Twin player.",
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
      "The Witch points to a player. If that player nominates tomorrow they die immediately.",
    "otherNightReminder":
      "If there are 4 or more players alive: The Witch points to a player. If that player nominates tomorrow they die immediately.",
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
      "The Cerenovus points to a player, then to a character on their sheet. Wake that player. Show the ‘This character selected you’ card, then the Cerenovus token. Show the selected character token. If the player is not mad about being that character tomorrow, they can be executed.",
    "otherNightReminder":
      "The Cerenovus points to a player, then to a character on their sheet. Wake that player. Show the ‘This character selected you’ card, then the Cerenovus token. Show the selected character token. If the player is not mad about being that character tomorrow, they can be executed.",
    "reminders": [
      "Mad",
    ],
    "setup": false,
    "ability":
      "Each night, choose a player & a good character: they are “mad” they are this character tomorrow, or might be executed.",
  },
  {
    "id": "pit-hag",
    "name": "Pit-Hag",
    "edition": "snv",
    "team": "minion",
    "firstNightReminder": "",
    "otherNightReminder":
      "The Pit-Hag points to a player and a character on the sheet. If this character is not in play, wake that player and show them the ‘You are’ card and the relevant character token. If the character is in play, nothing happens.",
    "reminders": [],
    "setup": false,
    "ability":
      "Each night*, choose a player & a character they become (if not-in-play). If a Demon is made, deaths tonight are arbitrary.",
  },
  {
    "id": "fang_gu",
    "name": "Fang Gu",
    "edition": "snv",
    "team": "demon",
    "firstNightReminder": "",
    "otherNightReminder":
      "The Fang Gu points to a player. That player dies. Or, if that player was an Outsider and there are no other Fang Gu in play: The Fang Gu dies instead of the chosen player. The chosen player is now an evil Fang Gu. Wake the new Fang Gu. Show the ‘You are’ card, then the Fang Gu token. Show the ‘You are’ card, then the thumb-down ‘evil’ hand sign.",
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
      "The Vigormortis points to a player. That player dies. If a Minion, they keep their ability and one of their Townsfolk neighbours is poisoned.",
    "reminders": [
      "Dead",
      "Has ability",
      "Poisoned",
    ],
    "setup": true,
    "ability":
      "Each night*, choose a player: they die. Minions you kill keep their ability & poison 1 Townsfolk neighbour. [−1 Outsider]",
  },
  {
    "id": "ojo",
    "name": "Ojo",
    "edition": "",
    "team": "demon",
    "firstNightReminder": "",
    "otherNightReminder":
      "The Ojo points to a character on the sheet; if in play, that player dies. If it is not in play, the Storyteller chooses who dies instead.",
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
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability":
      "All players know who you are. You can not die during the day. If good voted, you may choose to execute immediately.",
  },
  {
    "id": "no_dashii",
    "name": "No Dashii",
    "edition": "snv",
    "team": "demon",
    "firstNightReminder": "",
    "otherNightReminder": "The No Dashii points to a player. That player dies.",
    "reminders": [
      "Dead",
      "Poisoned",
    ],
    "setup": false,
    "ability":
      "Each night*, choose a player: they die. Your 2 Townsfolk neighbours are poisoned.",
  },
  {
    "id": "vortox",
    "name": "Vortox",
    "edition": "snv",
    "team": "demon",
    "firstNightReminder": "",
    "otherNightReminder": "The Vortox points to a player. That player dies.",
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
      "Choose a player, wake them and tell them which Barista power is affecting them. Treat them accordingly (sober/healthy/true info or activate their ability twice).",
    "otherNightReminder":
      "Choose a player, wake them and tell them which Barista power is affecting them. Treat them accordingly (sober/healthy/true info or activate their ability twice).",
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
      "The Harlot points at any player. Then, put the Harlot to sleep. Wake the chosen player, show them the ‘This character selected you’ token, then the Harlot token. That player either nods their head yes or shakes their head no. If they nodded their head yes, wake the Harlot and show them the chosen player’s character token. Then, you may decide that both players die.",
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
    "id": "bone_collector",
    "name": "Bone Collector",
    "edition": "snv",
    "team": "traveler",
    "firstNightReminder": "",
    "otherNightReminder":
      "The Bone Collector either shakes their head no or points at any dead player. If they pointed at any dead player, put the Bone Collector’s ‘Has Ability’ reminder by the chosen player’s character token. (They may need to be woken tonight to use it.)",
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
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder":
      "Point to 3 players including one evil player, in no particular order.",
    "otherNightReminder": "",
    "reminders": [
      "Seen",
    ],
    "setup": false,
    "ability": "You start knowing 3 players, 1 and only 1 of which is evil.",
  },
  {
    "id": "bounty_hunter",
    "name": "Bounty Hunter",
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder":
      "Point to 1 evil player. Wake the townsfolk who is evil and show them the ‘You are’ card and the thumbs down evil sign.",
    "otherNightReminder":
      "If the known evil player has died, point to another evil player. ",
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
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder": "Show the Pixie 1 in-play Townsfolk character token.",
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
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder":
      "Show the General thumbs up for good winning, thumbs down for evil winning or thumb to the side for neither.",
    "otherNightReminder":
      "Show the General thumbs up for good winning, thumbs down for evil winning or thumb to the side for neither.",
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
      "The Preacher chooses a player. If a Minion is chosen, wake the Minion and show the ‘This character selected you’ card and then the Preacher token.",
    "otherNightReminder":
      "The Preacher chooses a player. If a Minion is chosen, wake the Minion and show the ‘This character selected you’ card and then the Preacher token.",
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
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder":
      "Wake the Demon, show them the ‘This character selected you’ card, show the King token and point to the King player.",
    "otherNightReminder":
      "If the dead equal or outnumber the living, show the King a character token of a living player.",
    "reminders": [],
    "setup": false,
    "ability":
      "Each night, if the dead equal or outnumber the living, you learn 1 alive character. The Demon knows who you are.",
  },
  {
    "id": "balloonist",
    "name": "Balloonist",
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder":
      "Choose a character type. Point to a player whose character is of that type. Place the Balloonist’s Seen reminder next to that character.",
    "otherNightReminder":
      "Choose a player whose character type does not match the type from the previous night. Move the Balloonist’s Seen reminder next to that character.",
    "reminders": [
      "Seen",
    ],
    "setup": true,
    "ability":
      "Each night, you learn a player of a different character type than last night. [+0 or +1 Outsider]",
  },
  {
    "id": "cult_leader",
    "name": "Cult Leader",
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder":
      "If the cult leader changed alignment, show them the thumbs up good signal of the thumbs down evil signal accordingly.",
    "otherNightReminder":
      "If the cult leader changed alignment, show them the thumbs up good signal of the thumbs down evil signal accordingly.",
    "reminders": [],
    "setup": false,
    "ability":
      "Each night, you become the alignment of an alive neighbour. If all good players choose to join your cult, your team wins.",
  },
  {
    "id": "lycanthrope",
    "name": "Lycanthrope",
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder":
      "The Lycanthrope points to a living player: if good, they die and no one else can die tonight.",
    "reminders": [
      "Dead",
    ],
    "setup": false,
    "ability":
      "Each night*, choose a living player: if good, they die, but they are the only player that can die tonight.",
  },
  {
    "id": "amnesiac",
    "name": "Amnesiac",
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder":
      "Decide the Amnesiac’s entire ability. If the Amnesiac’s ability causes them to wake tonight: Wake the Amnesiac and run their ability.",
    "otherNightReminder":
      "If the Amnesiac’s ability causes them to wake tonight: Wake the Amnesiac and run their ability.",
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
      "The Nightwatchman may point to a player. Wake that player, show the ‘This character selected you’ card and the Nightwatchman token, then point to the Nightwatchman player.",
    "otherNightReminder":
      "The Nightwatchman may point to a player. Wake that player, show the ‘This character selected you’ card and the Nightwatchman token, then point to the Nightwatchman player.",
    "reminders": [
      "No ability",
    ],
    "setup": false,
    "ability":
      "Once per game, at night, choose a player: they learn who you are.",
  },
  {
    "id": "engineer",
    "name": "Engineer",
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder":
      "The Engineer shows a ‘no’ head signal, or points to a Demon or points to the relevant number of Minions. If the Engineer chose characters, replace the Demon or Minions with the choices, then wake the relevant players and show them the You are card and the relevant character tokens.",
    "otherNightReminder":
      "The Engineer shows a ‘no’ head signal, or points to a Demon or points to the relevant number of Minions. If the Engineer chose characters, replace the Demon or Minions with the choices, then wake the relevant players and show them the ‘You are’ card and the relevant character tokens.",
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
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder":
      "The Huntsman shakes their head ‘no’ or points to a player. If they point to the Damsel, wake that player, show the ‘You are’ card and a not-in-play character token.",
    "otherNightReminder":
      "The Huntsman shakes their head ‘no’ or points to a player. If they point to the Damsel, wake that player, show the ‘You are’ card and a not-in-play character token.",
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
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder": "Show the Alchemist a not-in-play Minion token.",
    "otherNightReminder": "",
    "reminders": [],
    "remindersGlobal": [
      "Is the Alchemist",
    ],
    "setup": false,
    "ability": "You have a not-in-play Minion ability.",
  },
  {
    "id": "farmer",
    "name": "Farmer",
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder":
      "If a Farmer died tonight, choose another good player and make them the Farmer. Wake this player, show them the ‘You are’ card and the Farmer character token.",
    "reminders": [],
    "setup": false,
    "ability": "If you die at night, an alive good player becomes a Farmer.",
  },
  {
    "id": "magician",
    "name": "Magician",
    "edition": "",
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
    "edition": "",
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
    "id": "poppy_grower",
    "name": "Poppy Grower",
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder": "Do not inform the Demon/Minions who each other are.",
    "otherNightReminder":
      "If the Poppy Grower has died, show the Minions/Demon who each other are.",
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
    "edition": "",
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
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder": "",
    "otherNightReminder":
      "The Cannibal wakes in the night at the time the role they gained would wake. This is a reminder to ensure it is not forgotten.",
    "reminders": [
      "Poisoned",
      "Died today",
    ],
    "setup": false,
    "ability":
      "You have the ability of the recently killed executee. If they are evil, you are poisoned until a good player dies by execution.",
  },
  {
    "id": "high_priestess",
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
    "id": "village_idiot",
    "name": "Village Idiot",
    "edition": "",
    "team": "townsfolk",
    "firstNightReminder":
      "The Village Idiot points to a player; give a thumbs up if that player is good or a thumbs down if that player is evil.",
    "otherNightReminder":
      "The Village Idiot points to a player; give a thumbs up if that player is good or a thumbs down if that player is evil.",
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
    "otherNightReminder": "Announce that the Banshee has died.",
    "reminders": [
      "Has Ability",
    ],
    "ability":
      "If the Demon kills you, all players learn this. From now on, you may nominate twice per day and vote twice per nomination.",
  },
  {
    "id": "snitch",
    "name": "Snitch",
    "edition": "",
    "team": "outsider",
    "firstNightReminder":
      "After Minion info wake each Minion and show them three not-in-play character tokens. These may be the same or different to each other and the ones shown to the Demon.",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability": "Minions start knowing 3 not-in-play characters.",
  },
  {
    "id": "acrobat",
    "name": "Acrobat",
    "edition": "",
    "team": "outsider",
    "firstNightReminder": "",
    "otherNightReminder":
      "If a good living neighbour is drunk or poisoned, the Acrobat player dies.",
    "reminders": [
      "Dead",
    ],
    "setup": false,
    "ability":
      "Each night*, if either good living neighbour is drunk or poisoned, you die.",
  },
  {
    "id": "plague_doctor",
    "name": "Plague Doctor",
    "edition": "",
    "team": "outsider",
    "firstNightReminder": "",
    "otherNightReminder":
      "Use the Minion ability if the Storyteller Ability token is present.  Verify the correct night order for the ability.",
    "reminders": [
      "Storyteller Ability",
    ],
    "setup": false,
    "ability": "If you die, the Storyteller gains a Minion ability.",
  },
  {
    "id": "ogre",
    "name": "Ogre",
    "edition": "",
    "team": "outsider",
    "firstNightReminder":
      "The Ogre points to a player (not themselves) and becomes their alignment.",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability":
      "On your 1st night, choose a player (not yourself): you become their alignment (you don’t know which) even if drunk or poisoned.",
  },
  {
    "id": "puzzlemaster",
    "name": "Puzzlemaster",
    "edition": "",
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
    "edition": "",
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
    "edition": "",
    "team": "outsider",
    "firstNightReminder":
      "Wake all the Minions, show them the ‘This character selected you’ card and the Damsel token.",
    "otherNightReminder":
      "If selected by the Huntsman, wake the Damsel, show ‘You are’ card and a not-in-play Townsfolk token.",
    "reminders": [
      "Guess used",
    ],
    "setup": false,
    "ability":
      "All Minions know you are in play. If a Minion publicly guesses you (once), your team loses.",
  },
  {
    "id": "golem",
    "name": "Golem",
    "edition": "",
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
      "Wake the Minions and Demon. Each player either shakes their head no or points to another character of the same type as their current character. If a second player would end up with the same character as another player, shake your head no and gesture for them to choose again. Change each player to the character they chose.",
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
      "Show the Grimoire to the Widow for as long as they need. The Widow points to a player. That player is poisoned. Wake a good player. Show the ‘These characters are in play’ card, then the Widow character token.",
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
    "edition": "",
    "team": "minion",
    "firstNightReminder":
      "The Fearmonger points to a player. Place the Fear token next to that player and announce that a new player has been selected with the Fearmonger ability.",
    "otherNightReminder":
      "The Fearmonger points to a player. If different from the previous night, place the Fear token next to that player and announce that a new player has been selected with the Fearmonger ability.",
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
    "edition": "",
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
    "edition": "",
    "team": "minion",
    "firstNightReminder": "Show the Mezepheles their secret word.",
    "otherNightReminder":
      "Wake the 1st good player that said the Mezepheles’ secret word and show them the ‘You are’ card and the thumbs down evil signal.",
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
    "edition": "",
    "team": "minion",
    "firstNightReminder":
      "Select one of the good players next to the Demon and place the Is the Marionette reminder token. Wake the Demon and show them the Marionette.",
    "otherNightReminder": "",
    "reminders": [],
    "remindersGlobal": [
      "Is the Marionette",
    ],
    "setup": true,
    "ability":
      "You think you are a good character but you are not. The Demon knows who you are. [You neighbour the Demon]",
  },
  {
    "id": "boomdandy",
    "name": "Boomdandy",
    "edition": "",
    "team": "minion",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability":
      "If you are executed, all but 3 players die. 1 minute later, the player with the most players pointing at them dies.",
  },
  {
    "id": "organ_grinder",
    "name": "Organ Grinder",
    "edition": "",
    "team": "minion",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [
      "About to die",
    ],
    "setup": false,
    "ability":
      "All players keep their eyes closed when voting & the vote tally is secret. Votes for you only count if you vote.",
  },
  {
    "id": "harpy",
    "name": "Harpy",
    "edition": "",
    "team": "minion",
    "firstNightReminder":
      "Wake the Harpy; they point at one player, then another. Wake the 1st player the Harpy pointed to, show them the ‘This character has selected you’ card, show them the Harpy token, then point at the 2nd player the Harpy pointed to.",
    "otherNightReminder":
      "Wake the Harpy; they point at one player, then another. Wake the 1st player the Harpy pointed to, show them the ‘This character has selected you’ card, show them the Harpy token, then point at the 2nd player the Harpy pointed to.",
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
      "Show the ‘These characters are not in play’ card. Show 3 character tokens of good characters not in play.",
    "otherNightReminder":
      "If it is the 3rd night, wake the Summoner. They point to a player and a Demon on the character sheet - that player becomes that Demon.",
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
    "id": "lil_monsta",
    "name": "Lil’ Monsta",
    "edition": "",
    "team": "demon",
    "firstNightReminder":
      "Wake all Minions together, allow them to vote by pointing at who they want to babysit Lil’ Monsta.",
    "otherNightReminder":
      "Wake all Minions together, allow them to vote by pointing at who they want to babysit Lil’ Monsta. Choose a player, that player dies.",
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
    "edition": "",
    "team": "demon",
    "firstNightReminder":
      "The Lleech points to a player. Place the Poisoned reminder token.",
    "otherNightReminder": "The Lleech points to a player. That player dies.",
    "reminders": [
      "Dead",
      "Poisoned",
    ],
    "setup": false,
    "ability":
      "Each night*, choose a player: they die. You start by choosing an alive player: they are poisoned - you die if & only if they die.",
  },
  {
    "id": "al-hadikhia",
    "name": "Al-Hadikhia",
    "edition": "",
    "team": "demon",
    "firstNightReminder": "",
    "otherNightReminder":
      "The Al-Hadikhia chooses 3 players. Announce the first player, wake them to nod yes to live or shake head no to die, kill or resurrect accordingly, then put to sleep and announce the next player. If all 3 are alive after this, all 3 die.",
    "reminders": [
      "1",
      "2",
      "3",
      "Chose death",
      "Chose life",
    ],
    "setup": false,
    "ability":
      "Each night*, choose 3 players (all players learn who): each silently chooses to live or die, but if all live, all die.",
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
      "Once per day, if you publicly guess which players are Minion(s) and which are Demon(s), good wins.",
  },
  {
    "id": "legion",
    "name": "Legion",
    "edition": "",
    "team": "demon",
    "firstNightReminder": "",
    "otherNightReminder": "Choose a player, that player dies.",
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
    "edition": "",
    "team": "demon",
    "firstNightReminder":
      "Place the Leviathan ‘Day 1’ marker. Announce ‘The Leviathan is in play; this is Day 1.’",
    "otherNightReminder": "Change the Leviathan Day reminder for the next day.",
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
      "If more than 1 good player is executed, you win. All players know you are in play. After day 5, evil wins.",
  },
  {
    "id": "riot",
    "name": "Riot",
    "edition": "",
    "team": "demon",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": true,
    "ability":
      "Nominees die, but may nominate again immediately (on day 3, they must). After day 3, evil wins. [All Minions are Riot]",
  },
  {
    "id": "kazali",
    "name": "Kazali",
    "edition": "",
    "team": "demon",
    "firstNightReminder":
      "The Kazali points to a player and a Minion on the character sheet. They do this for as many Minions as should be in play. Change those players’ tokens to the chosen Minion tokens in the Grim. Wake those players, show them the ‘You are’ card, the Minions they have become, and a thumbs down.",
    "otherNightReminder": "The Kazali points to a player. That player dies.",
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
      "Choose a number of players up to the total number of times the Yaggababble said their secret phrase publicly, those players die.",
    "reminders": [
      "Dead",
    ],
    "ability":
      "You start knowing a secret phrase. For each time you said it publicly today, a player might die.",
  },
  {
    "id": "gangster",
    "name": "Gangster",
    "edition": "",
    "team": "traveler",
    "firstNightReminder": "",
    "otherNightReminder": "",
    "reminders": [],
    "setup": false,
    "ability":
      "Once per day, you may choose to kill an alive neighbour, if your other alive neighbour agrees.",
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
    "id": "lord_of_typhon",
    "name": "Lord of Typhon",
    "edition": "",
    "team": "demon",
    "firstNight": 0.1,
    "firstNightReminder":
      "Wake the players on either side of the Demon. Show them the 'You Are' card, the token of the Minion they now are, and a thumbs down to indicate they are evil.",
    "otherNight": 31.1,
    "otherNightReminder":
      "The Lord of Typhon points to a player. That player dies.",
    "reminders": ["Dead"],
    "ability":
      "Each night*, choose a player: they die. [Evil characters are in a line. You are in the middle. +1 Minion. -? To +? Outsiders]",
  },
];

export const sao = {
  "washerwoman": {
    "Name": "Washerwoman",
    "Summary":
      "You start knowing that 1 of 2 players is a particular Townsfolk.",
    "Type": "Townsfolk",
    "Script": "Trouble Brewing",
    "first night": true,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "librarian": {
    "Name": "Librarian",
    "Summary":
      "You start knowing that 1 of 2 players is a particular Outsider. (Or that zero are in play.)",
    "Type": "Townsfolk",
    "Script": "Trouble Brewing",
    "first night": true,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "investigator": {
    "Name": "Investigator",
    "Summary": "You start knowing that 1 of 2 players is a particular Minion.",
    "Type": "Townsfolk",
    "Script": "Trouble Brewing",
    "first night": true,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "chef": {
    "Name": "Chef",
    "Summary": "You start knowing how many pairs of evil players there are.",
    "Type": "Townsfolk",
    "Script": "Trouble Brewing",
    "first night": true,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "empath": {
    "Name": "Empath",
    "Summary":
      "Each night, you learn how many of your 2 alive neighbours are evil.",
    "Type": "Townsfolk",
    "Script": "Trouble Brewing",
    "first night": false,
    "each night": true,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "fortune_teller": {
    "Name": "Fortune Teller",
    "Summary":
      "Each night, choose 2 players: you learn if either is a Demon. There is a good player that registers as a Demon to you.",
    "Type": "Townsfolk",
    "Script": "Trouble Brewing",
    "first night": false,
    "each night": true,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "undertaker": {
    "Name": "Undertaker",
    "Summary":
      "Each night*, you learn which character died by execution today.",
    "Type": "Townsfolk",
    "Script": "Trouble Brewing",
    "first night": false,
    "each night": false,
    "each night*": true,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "monk": {
    "Name": "Monk",
    "Summary":
      "Each night*, choose a player (not yourself): they are safe from the Demon tonight.",
    "Type": "Townsfolk",
    "Script": "Trouble Brewing",
    "first night": false,
    "each night": false,
    "each night*": true,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "slayer": {
    "Name": "Slayer",
    "Summary":
      "Once per game, during the day, publicly choose a player: if they are the Demon, they die.",
    "Type": "Townsfolk",
    "Script": "Trouble Brewing",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": true,
    "once per game": true,
    "on trigger": false,
    "passive": false,
  },
  "soldier": {
    "Name": "Soldier",
    "Summary": "You are safe from the Demon.",
    "Type": "Townsfolk",
    "Script": "Trouble Brewing",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": true,
  },
  "ravenkeeper": {
    "Name": "Ravenkeeper",
    "Summary":
      "If you die at night, you are woken to choose a player: you learn their character.",
    "Type": "Townsfolk",
    "Script": "Trouble Brewing",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": false,
  },
  "virgin": {
    "Name": "Virgin",
    "Summary":
      "The 1st time you are nominated, if the nominator is a Townsfolk, they are executed immediately.",
    "Type": "Townsfolk",
    "Script": "Trouble Brewing",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": false,
  },
  "mayor": {
    "Name": "Mayor",
    "Summary":
      "If only 3 players live & no execution occurs, your team wins. If you die at night, another player might die instead.",
    "Type": "Townsfolk",
    "Script": "Trouble Brewing",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": true,
  },
  "butler": {
    "Name": "Butler",
    "Summary":
      "Each night, choose a player (not yourself): tomorrow, you may only vote if they are voting too.",
    "Type": "Outsider",
    "Script": "Trouble Brewing",
    "first night": false,
    "each night": true,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "saint": {
    "Name": "Saint",
    "Summary": "If you die by execution, your team loses.",
    "Type": "Outsider",
    "Script": "Trouble Brewing",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": false,
  },
  "recluse": {
    "Name": "Recluse",
    "Summary":
      "You might register as evil & as a Minion or Demon, even if dead.",
    "Type": "Outsider",
    "Script": "Trouble Brewing",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": true,
  },
  "drunk": {
    "Name": "Drunk",
    "Summary":
      "You do not know you are the Drunk. You think you are a Townsfolk character, but you are not.",
    "Type": "Outsider",
    "Script": "Trouble Brewing",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": true,
  },
  "poisoner": {
    "Name": "Poisoner",
    "Summary":
      "Each night, choose a player: they are poisoned tonight and tomorrow day.",
    "Type": "Minion",
    "Script": "Trouble Brewing",
    "first night": false,
    "each night": true,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "spy": {
    "Name": "Spy",
    "Summary":
      "Each night, you see the Grimoire. You might register as good & as a Townsfolk or Outsider, even if dead.",
    "Type": "Minion",
    "Script": "Trouble Brewing",
    "first night": false,
    "each night": true,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "baron": {
    "Name": "Baron",
    "Summary": "There are extra Outsiders in play. [+2 Outsiders]",
    "Type": "Minion",
    "Script": "Trouble Brewing",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": true,
  },
  "scarlet_woman": {
    "Name": "Scarlet Woman",
    "Summary":
      "If there are 5 or more players alive & the Demon dies, you become the Demon. (Travellers don’t count.)",
    "Type": "Minion",
    "Script": "Trouble Brewing",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": false,
  },
  "imp": {
    "Name": "Imp",
    "Summary":
      "Each night*, choose a player: they die. If you kill yourself this way, a Minion becomes the Imp.",
    "Type": "Demon",
    "Script": "Trouble Brewing",
    "first night": false,
    "each night": false,
    "each night*": true,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "clockmaker": {
    "Name": "Clockmaker",
    "Summary":
      "You start knowing how many steps from the Demon to its nearest Minion.",
    "Type": "Townsfolk",
    "Script": "Sects & Violets",
    "first night": true,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "dreamer": {
    "Name": "Dreamer",
    "Summary":
      "Each night, choose a player (not yourself or Travellers): you learn 1 good & 1 evil character, 1 of which is correct.",
    "Type": "Townsfolk",
    "Script": "Sects & Violets",
    "first night": false,
    "each night": true,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "snake_charmer": {
    "Name": "Snake Charmer",
    "Summary":
      "Each night, choose an alive player: a chosen Demon swaps characters & alignments with you & is then poisoned.",
    "Type": "Townsfolk",
    "Script": "Sects & Violets",
    "first night": false,
    "each night": true,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "mathematician": {
    "Name": "Mathematician",
    "Summary":
      "Each night, you learn how many players’ abilities worked abnormally (since dawn) due to another character’s ability.",
    "Type": "Townsfolk",
    "Script": "Sects & Violets",
    "first night": false,
    "each night": true,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "flowergirl": {
    "Name": "Flowergirl",
    "Summary": "Each night*, you learn if a Demon voted today.",
    "Type": "Townsfolk",
    "Script": "Sects & Violets",
    "first night": false,
    "each night": false,
    "each night*": true,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "town_crier": {
    "Name": "Town Crier",
    "Summary": "Each night*, you learn if a Minion nominated today.",
    "Type": "Townsfolk",
    "Script": "Sects & Violets",
    "first night": false,
    "each night": false,
    "each night*": true,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "oracle": {
    "Name": "Oracle",
    "Summary": "Each night*, you learn how many dead players are evil.",
    "Type": "Townsfolk",
    "Script": "Sects & Violets",
    "first night": false,
    "each night": false,
    "each night*": true,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "savant": {
    "Name": "Savant",
    "Summary":
      "Each day, you may visit the Storyteller to learn 2 things in private: 1 is true & 1 is false.",
    "Type": "Townsfolk",
    "Script": "Sects & Violets",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": true,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "seamstress": {
    "Name": "Seamstress",
    "Summary":
      "Once per game, at night, choose 2 players (not yourself): you learn if they are the same alignment.",
    "Type": "Townsfolk",
    "Script": "Sects & Violets",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": true,
    "on trigger": false,
    "passive": false,
  },
  "philosopher": {
    "Name": "Philosopher",
    "Summary":
      "Once per game, at night, choose a good character: gain that ability. If this character is in play, they are drunk.",
    "Type": "Townsfolk",
    "Script": "Sects & Violets",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": true,
    "on trigger": false,
    "passive": false,
  },
  "artist": {
    "Name": "Artist",
    "Summary":
      "Once per game, during the day, privately ask the Storyteller any yes/no question.",
    "Type": "Townsfolk",
    "Script": "Sects & Violets",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": true,
    "once per game": true,
    "on trigger": false,
    "passive": false,
  },
  "juggler": {
    "Name": "Juggler",
    "Summary":
      "On your 1st day, publicly guess up to 5 players’ characters. That night, you learn how many you got correct.",
    "Type": "Townsfolk",
    "Script": "Sects & Violets",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": true,
    "once per game": true,
    "on trigger": false,
    "passive": false,
  },
  "sage": {
    "Name": "Sage",
    "Summary": "If the Demon kills you, you learn that it is 1 of 2 players.",
    "Type": "Townsfolk",
    "Script": "Sects & Violets",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": false,
  },
  "mutant": {
    "Name": "Mutant",
    "Summary":
      "If you are ‘mad’ about being an Outsider, you might be executed.",
    "Type": "Outsider",
    "Script": "Sects & Violets",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": false,
  },
  "sweetheart": {
    "Name": "Sweetheart",
    "Summary": "When you die, 1 player is drunk from now on.",
    "Type": "Outsider",
    "Script": "Sects & Violets",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": false,
  },
  "barber": {
    "Name": "Barber",
    "Summary":
      "If you died today or tonight, the Demon may choose 2 players (not another Demon) to swap characters.",
    "Type": "Outsider",
    "Script": "Sects & Violets",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": false,
  },
  "klutz": {
    "Name": "Klutz",
    "Summary":
      "When you learn that you died, publicly choose 1 alive player: if they are evil, your team loses.",
    "Type": "Outsider",
    "Script": "Sects & Violets",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": false,
  },
  "evil_twin": {
    "Name": "Evil Twin",
    "Summary":
      "You & an opposing player know each other. If the good player is executed, evil wins. Good can’t win if you both live.",
    "Type": "Minion",
    "Script": "Sects & Violets",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": true,
  },
  "witch": {
    "Name": "Witch",
    "Summary":
      "Each night, choose a player: if they nominate tomorrow, they die. If just 3 players live, you lose this ability.",
    "Type": "Minion",
    "Script": "Sects & Violets",
    "first night": false,
    "each night": true,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "cerenovus": {
    "Name": "Cerenovus",
    "Summary":
      "Each night, choose a player & a good character: they are ‘mad’ they are this character tomorrow, or might be executed.",
    "Type": "Minion",
    "Script": "Sects & Violets",
    "first night": false,
    "each night": true,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "pit-hag": {
    "Name": "Pit-Hag",
    "Summary":
      "Each night*, choose a player & a character they become (if not in play). If a Demon is made, deaths tonight are arbitrary.",
    "Type": "Minion",
    "Script": "Sects & Violets",
    "first night": false,
    "each night": false,
    "each night*": true,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "fang_gu": {
    "Name": "Fang Gu",
    "Summary":
      "Each night*, choose a player: they die. The 1st Outsider this kills becomes an evil Fang Gu & you die instead. [+1 Outsider]",
    "Type": "Demon",
    "Script": "Sects & Violets",
    "first night": false,
    "each night": false,
    "each night*": true,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "vigormortis": {
    "Name": "Vigormortis",
    "Summary":
      "Each night*, choose a player: they die. Minions you kill keep their ability & poison 1 Townsfolk neighbor. [-1 Outsider]",
    "Type": "Demon",
    "Script": "Sects & Violets",
    "first night": false,
    "each night": false,
    "each night*": true,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "no_dashii": {
    "Name": "No Dashii",
    "Summary":
      "Each night*, choose a player: they die. Your 2 Townsfolk neighbors are poisoned.",
    "Type": "Demon",
    "Script": "Sects & Violets",
    "first night": false,
    "each night": false,
    "each night*": true,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "vortox": {
    "Name": "Vortox",
    "Summary":
      "Each night*, choose a player; they die. Townsfolk abilities yield false info. Each day, if no-one is executed, evil wins.",
    "Type": "Demon",
    "Script": "Sects & Violets",
    "first night": false,
    "each night": false,
    "each night*": true,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "grandmother": {
    "Name": "Grandmother",
    "Summary":
      "You start knowing a good player & their character. If the Demon kills them, you die too.",
    "Type": "Townsfolk",
    "Script": "Bad Moon Rising",
    "first night": true,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "sailor": {
    "Name": "Sailor",
    "Summary":
      "Each night, choose an alive player: either you or they are drunk until dusk. You can’t die.",
    "Type": "Townsfolk",
    "Script": "Bad Moon Rising",
    "first night": false,
    "each night": true,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "chambermaid": {
    "Name": "Chambermaid",
    "Summary":
      "Each night, choose 2 alive players (not yourself): you learn how many woke tonight due to their ability.",
    "Type": "Townsfolk",
    "Script": "Bad Moon Rising",
    "first night": false,
    "each night": true,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "exorcist": {
    "Name": "Exorcist",
    "Summary":
      "Each night*, choose a player (different to last night): the Demon, if chosen, learns who you are then doesn’t wake tonight.",
    "Type": "Townsfolk",
    "Script": "Bad Moon Rising",
    "first night": false,
    "each night": false,
    "each night*": true,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "innkeeper": {
    "Name": "Innkeeper",
    "Summary":
      "Each night*, choose 2 players: they can’t die tonight, but 1 is drunk until dusk.",
    "Type": "Townsfolk",
    "Script": "Bad Moon Rising",
    "first night": false,
    "each night": false,
    "each night*": true,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "gambler": {
    "Name": "Gambler",
    "Summary":
      "Each night*, choose a player & guess their character: if you guess wrong, you die.",
    "Type": "Townsfolk",
    "Script": "Bad Moon Rising",
    "first night": false,
    "each night": false,
    "each night*": true,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "gossip": {
    "Name": "Gossip",
    "Summary":
      "Each day, you may make a public statement. Tonight, if it was true, a player dies.",
    "Type": "Townsfolk",
    "Script": "Bad Moon Rising",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": true,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "courtier": {
    "Name": "Courtier",
    "Summary":
      "Once per game, at night, choose a character: they are drunk for 3 nights & 3 days.",
    "Type": "Townsfolk",
    "Script": "Bad Moon Rising",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": true,
    "on trigger": false,
    "passive": false,
  },
  "professor": {
    "Name": "Professor",
    "Summary":
      "Once per game, at night*, choose a dead player: if they are a Townsfolk, they are resurrected.",
    "Type": "Townsfolk",
    "Script": "Bad Moon Rising",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": true,
    "on trigger": false,
    "passive": false,
  },
  "minstrel": {
    "Name": "Minstrel",
    "Summary":
      "When a Minion dies by execution, all other players (except Travellers) are drunk until dusk tomorrow.",
    "Type": "Townsfolk",
    "Script": "Bad Moon Rising",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": false,
  },
  "tea_lady": {
    "Name": "Tea Lady",
    "Summary": "If both your alive neighbors are good, they can’t die.",
    "Type": "Townsfolk",
    "Script": "Bad Moon Rising",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": true,
  },
  "pacifist": {
    "Name": "Pacifist",
    "Summary": "Executed good players might not die.",
    "Type": "Townsfolk",
    "Script": "Bad Moon Rising",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": true,
  },
  "fool": {
    "Name": "Fool",
    "Summary": "The first time you die, you don’t.",
    "Type": "Townsfolk",
    "Script": "Bad Moon Rising",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": false,
  },
  "goon": {
    "Name": "Goon",
    "Summary":
      "Each night, the 1st player to choose you with their ability is drunk until dusk. You become their alignment.",
    "Type": "Outsider",
    "Script": "Bad Moon Rising",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": false,
  },
  "lunatic": {
    "Name": "Lunatic",
    "Summary":
      "You think you are a Demon, but you are not. The Demon knows who you are & who you choose at night.",
    "Type": "Outsider",
    "Script": "Bad Moon Rising",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": true,
  },
  "tinker": {
    "Name": "Tinker",
    "Summary": "You might die at any time.",
    "Type": "Outsider",
    "Script": "Bad Moon Rising",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": true,
  },
  "moonchild": {
    "Name": "Moonchild",
    "Summary":
      "When you learn that you died, publicly choose 1 alive player. Tonight, if it was a good player, they die.",
    "Type": "Outsider",
    "Script": "Bad Moon Rising",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": false,
  },
  "godfather": {
    "Name": "Godfather",
    "Summary":
      "You start knowing which Outsiders are in play. If 1 died today, choose a player tonight: they die. [-1 or +1 Outsider]",
    "Type": "Minion",
    "Script": "Bad Moon Rising",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": false,
  },
  "devils_advocate": {
    "Name": "Devil’s Advocate",
    "Summary":
      "Each night, choose a living player (different to last night): if executed tomorrow, they don’t die.",
    "Type": "Minion",
    "Script": "Bad Moon Rising",
    "first night": false,
    "each night": true,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "assassin": {
    "Name": "Assassin",
    "Summary":
      "Once per game, at night*, choose a player: they die, even if for some reason they could not.",
    "Type": "Minion",
    "Script": "Bad Moon Rising",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": true,
    "on trigger": false,
    "passive": false,
  },
  "mastermind": {
    "Name": "Mastermind",
    "Summary":
      "If the Demon dies by execution (ending the game), play for 1 more day. If a player is then executed, their team loses.",
    "Type": "Minion",
    "Script": "Bad Moon Rising",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": false,
  },
  "zombuul": {
    "Name": "Zombuul",
    "Summary":
      "Each night*, if no-one died today, choose a player: they die. The 1st time you die, you live but register as dead.",
    "Type": "Demon",
    "Script": "Bad Moon Rising",
    "first night": false,
    "each night": false,
    "each night*": true,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "pukka": {
    "Name": "Pukka",
    "Summary":
      "Each night, choose a player: they are poisoned. The previously poisoned player dies then becomes healthy.",
    "Type": "Demon",
    "Script": "Bad Moon Rising",
    "first night": false,
    "each night": true,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "shabaloth": {
    "Name": "Shabaloth",
    "Summary":
      "Each night*, choose 2 players: they die. A dead player you chose last night might be regurgitated.",
    "Type": "Demon",
    "Script": "Bad Moon Rising",
    "first night": false,
    "each night": false,
    "each night*": true,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "po": {
    "Name": "Po",
    "Summary":
      "Each night*, you may choose a player: they die. If your last choice was no-one, choose 3 players tonight.",
    "Type": "Demon",
    "Script": "Bad Moon Rising",
    "first night": false,
    "each night": false,
    "each night*": true,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "alchemist": {
    "Name": "Alchemist",
    "Summary": "You have a not-in-play Minion ability.",
    "Type": "Townsfolk",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": true,
  },
  "amnesiac": {
    "Name": "Amnesiac",
    "Summary":
      "You do not know what your ability is. Each day, privately guess what it is: you learn how accurate you are.",
    "Type": "Townsfolk",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": true,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "atheist": {
    "Name": "Atheist",
    "Summary":
      "The Storyteller can break the game rules, and if executed, good wins, even if you are dead. [No evil characters]",
    "Type": "Townsfolk",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": true,
  },
  "balloonist": {
    "Name": "Balloonist",
    "Summary":
      "Each night, you learn a player of a different character type than last night. [+0 or +1 Outsider]",
    "Type": "Townsfolk",
    "Script": "Experimental",
    "first night": false,
    "each night": true,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "bounty_hunter": {
    "Name": "Bounty Hunter",
    "Summary":
      "You start knowing 1 evil player. If the player you know dies, you learn another evil player tonight. [1 Townsfolk is evil]",
    "Type": "Townsfolk",
    "Script": "Experimental",
    "first night": true,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "cannibal": {
    "Name": "Cannibal",
    "Summary":
      "You have the ability of the recently killed executee. If they are evil, you are poisoned until a good player dies by execution.",
    "Type": "Townsfolk",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": false,
  },
  "choirboy": {
    "Name": "Choirboy",
    "Summary":
      "If the Demon kills the King, you learn which player is the Demon. [+the King]",
    "Type": "Townsfolk",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": false,
  },
  "cult_leader": {
    "Name": "Cult Leader",
    "Summary":
      "Each night, you become the alignment of an alive neighbour. If all good players choose to join your cult, your team wins.",
    "Type": "Townsfolk",
    "Script": "Experimental",
    "first night": false,
    "each night": true,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "engineer": {
    "Name": "Engineer",
    "Summary":
      "Once per game, at night, choose which Minions or which Demon is in play.",
    "Type": "Townsfolk",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": true,
    "on trigger": false,
    "passive": false,
  },
  "farmer": {
    "Name": "Farmer",
    "Summary": "If you die at night, an alive good player becomes a Farmer.",
    "Type": "Townsfolk",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": false,
  },
  "fisherman": {
    "Name": "Fisherman",
    "Summary":
      "Once per game, during the day, visit the Storyteller for some advice to help your team win.",
    "Type": "Townsfolk",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": true,
    "once per game": true,
    "on trigger": false,
    "passive": false,
  },
  "general": {
    "Name": "General",
    "Summary":
      "Each night, you learn which alignment the Storyteller believes is winning: good, evil, or neither.",
    "Type": "Townsfolk",
    "Script": "Experimental",
    "first night": false,
    "each night": true,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "high_priestess": {
    "Name": "High Priestess",
    "Summary":
      "Each night, learn which player the Storyteller believes you should talk to most.",
    "Type": "Townsfolk",
    "Script": "Experimental",
    "first night": false,
    "each night": true,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "huntsman": {
    "Name": "Huntsman",
    "Summary":
      "Once per game, at night, choose a living player: the Damsel, if chosen, becomes a not-in-play Townsfolk. [+the Damsel]",
    "Type": "Townsfolk",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": true,
    "on trigger": false,
    "passive": false,
  },
  "king": {
    "Name": "King",
    "Summary":
      "Each night, if the dead equal or outnumber the living, you learn 1 alive character. The Demon knows who you are.",
    "Type": "Townsfolk",
    "Script": "Experimental",
    "first night": false,
    "each night": true,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "knight": {
    "Name": "Knight",
    "Summary": "You start knowing 2 players that are not the Demon.",
    "Type": "Townsfolk",
    "Script": "Experimental",
    "first night": true,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "lycanthrope": {
    "Name": "Lycanthrope",
    "Summary":
      "Each night*, choose an alive player: if good, they die, but they are the only player that can die tonight.",
    "Type": "Townsfolk",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": true,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "magician": {
    "Name": "Magician",
    "Summary":
      "The Demon thinks you are a Minion. Minions think you are a Demon.",
    "Type": "Townsfolk",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": true,
  },
  "nightwatchman": {
    "Name": "Nightwatchman",
    "Summary":
      "Once per game, at night, choose a player: they learn who you are.",
    "Type": "Townsfolk",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": true,
    "on trigger": false,
    "passive": false,
  },
  "noble": {
    "Name": "Noble",
    "Summary": "You start knowing 3 players, 1 and only 1 of which is evil.",
    "Type": "Townsfolk",
    "Script": "Experimental",
    "first night": true,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "pixie": {
    "Name": "Pixie",
    "Summary":
      "You start knowing 1 in-play Townsfolk. If you were mad that you were this character, you gain their ability when they die.",
    "Type": "Townsfolk",
    "Script": "Experimental",
    "first night": true,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "poppy_grower": {
    "Name": "Poppy Grower",
    "Summary":
      "Minions & Demons do not know each other. If you die, they learn who each other are that night.",
    "Type": "Townsfolk",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": true,
  },
  "preacher": {
    "Name": "Preacher",
    "Summary":
      "Each night, choose a player: a Minion, if chosen, learns this. All chosen Minions have no ability.",
    "Type": "Townsfolk",
    "Script": "Experimental",
    "first night": false,
    "each night": true,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "shugenja": {
    "Name": "Shugenja",
    "Summary":
      "You start knowing if your closest evil player is clockwise or anti-clockwise. If equidistant, this info is arbitrary.",
    "Type": "Townsfolk",
    "Script": "Experimental",
    "first night": true,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "steward": {
    "Name": "Steward",
    "Summary": "You start knowing 1 good player.",
    "Type": "Townsfolk",
    "Script": "Experimental",
    "first night": true,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "village_idiot": {
    "Name": "Village Idiot",
    "Summary":
      "Each night, choose a player: you learn their alignment. [+0 to +2 Village Idiots. 1 of the extras is drunk]",
    "Type": "Townsfolk",
    "Script": "Experimental",
    "first night": false,
    "each night": true,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "acrobat": {
    "Name": "Acrobat",
    "Summary":
      "Each night*, if either good living neighbour is drunk or poisoned, you die.",
    "Type": "Outsider",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": false,
  },
  "damsel": {
    "Name": "Damsel",
    "Summary":
      "All Minions know you are in play. If a Minion publicly guesses you (once), your team loses.",
    "Type": "Outsider",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": true,
  },
  "golem": {
    "Name": "Golem",
    "Summary":
      "You may only nominate once per game. When you do, if the nominee is not the Demon, they die.",
    "Type": "Outsider",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": true,
  },
  "hatter": {
    "Name": "Hatter",
    "Summary":
      "If you died today or tonight, the Minion & Demon players may choose new Minion & Demon characters to be.",
    "Type": "Outsider",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": false,
  },
  "heretic": {
    "Name": "Heretic",
    "Summary":
      "Whoever wins, loses & whoever loses, wins, even if you are dead.",
    "Type": "Outsider",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": true,
  },
  "plague_doctor": {
    "Name": "Plague Doctor",
    "Summary": "If you die, the Storyteller gains a Minion ability.",
    "Type": "Outsider",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": false,
  },
  "politician": {
    "Name": "Politician",
    "Summary":
      "If you were the player most responsible for your team losing, you change alignment & win, even if dead.",
    "Type": "Outsider",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": false,
  },
  "puzzlemaster": {
    "Name": "Puzzlemaster",
    "Summary":
      "1 player is drunk, even if you die. If you guess (once) who it is, learn the Demon player, but guess wrong & get false info.",
    "Type": "Outsider",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": true,
    "once per game": false,
    "on trigger": false,
    "passive": true,
  },
  "snitch": {
    "Name": "Snitch",
    "Summary": "Minions start knowing 3 not-in-play characters.",
    "Type": "Outsider",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": true,
  },
  "boomdandy": {
    "Name": "Boomdandy",
    "Summary":
      "If you are executed, all but 3 players die. 1 minute later, the player with the most players pointing at them, dies.",
    "Type": "Minion",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": false,
  },
  "fearmonger": {
    "Name": "Fearmonger",
    "Summary":
      "Each night, choose a player: if you nominate & execute them, their team loses. All players know if you choose a new player.",
    "Type": "Minion",
    "Script": "Experimental",
    "first night": false,
    "each night": true,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "goblin": {
    "Name": "Goblin",
    "Summary":
      "If you publicly claim to be the Goblin when nominated & are executed that day, your team wins.",
    "Type": "Minion",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": false,
  },
  "harpy": {
    "Name": "Harpy",
    "Summary":
      "Each night, choose 2 players: tomorrow, the 1st player is mad that the 2nd is evil, or one or both might die.",
    "Type": "Minion",
    "Script": "Experimental",
    "first night": false,
    "each night": true,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "marionette": {
    "Name": "Marionette",
    "Summary":
      "You think you are a good character, but you are not. The Demon knows who you are. [You neighbor the Demon]",
    "Type": "Minion",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": true,
  },
  "mezepheles": {
    "Name": "Mezepheles",
    "Summary":
      "You start knowing a secret word. The 1st good player to say this word becomes evil that night.",
    "Type": "Minion",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": false,
  },
  "organ_grinder": {
    "Name": "Organ Grinder",
    "Summary":
      "All players keep their eyes closed when voting & the vote tally is secret. Votes for you only count if you vote.",
    "Type": "Minion",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": true,
  },
  "psychopath": {
    "Name": "Psychopath",
    "Summary":
      "Each day, before nominations, you may publicly choose a player: they die. If executed, you only die if you lose roshambo.",
    "Type": "Minion",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": true,
    "once per game": false,
    "on trigger": false,
    "passive": true,
  },
  "vizier": {
    "Name": "Vizier",
    "Summary":
      "All players know who you are. You can not die during the day. If good voted, you may choose to execute immediately.",
    "Type": "Minion",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": false,
  },
  "widow": {
    "Name": "Widow",
    "Summary":
      "On your first night, look at the Grimoire & choose a player: they are poisoned. 1 good player knows a Widow is in play.",
    "Type": "Minion",
    "Script": "Experimental",
    "first night": true,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "al-hadikhia": {
    "Name": "Al-Hadikhia",
    "Summary":
      "Each night*, choose 3 players (all players learn who): each silently chooses to live or die, but if all live, all die.",
    "Type": "Demon",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": true,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "kazali": {
    "Name": "Kazali",
    "Summary":
      "Each night*, choose a player: they die. [You choose which players are which Minions. -? to +? Outsiders]",
    "Type": "Demon",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": true,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "legion": {
    "Name": "Legion",
    "Summary":
      "Each night*, a player might die. Executions fail if only evil voted. You register as a Minion too. [Most players are Legion]",
    "Type": "Demon",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": true,
  },
  "leviathan": {
    "Name": "Leviathan",
    "Summary":
      "If more than 1 good player is executed, evil wins. All players know you are in play. After day 5, evil wins.",
    "Type": "Demon",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": true,
  },
  "lil_monsta": {
    "Name": "Lil’ Monsta",
    "Summary":
      "Each night, Minions choose who babysits Lil’ Monsta & “is the Demon”. Each night*, a player might die. [+1 Minion]",
    "Type": "Demon",
    "Script": "Experimental",
    "first night": false,
    "each night": true,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "lleech": {
    "Name": "Lleech",
    "Summary":
      "Each night*, choose a player: they die. You start by choosing an alive player: they are poisoned – you die if (& only if) they die.",
    "Type": "Demon",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": true,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "ojo": {
    "Name": "Ojo",
    "Summary":
      "Each night*, choose a character: they die. If they are not in play, the Storyteller chooses who dies.",
    "Type": "Demon",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": true,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "riot": {
    "Name": "Riot",
    "Summary":
      "Nominees die, but may nominate again immediately (on day 3, they must). After day 3, evil wins. [All Minions are Riot]",
    "Type": "Demon",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": true,
  },
  "yaggababble": {
    "Name": "Yaggababble",
    "Summary":
      "You start knowing a secret phrase. For each time you said it publicly today, a player might die.",
    "Type": "Demon",
    "Script": "Experimental",
    "first night": true,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": false,
  },
  "summoner": {
    "Name": "Summoner",
    "Summary":
      "You get 3 bluffs. On the 3rd night, choose a player: they become an evil Demon of your choice. [No Demon]",
    "Type": "Minion",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": true,
    "on trigger": false,
    "passive": false,
  },
  "banshee": {
    "Name": "Banshee",
    "Summary":
      "If the Demon kills you, all players learn this. From now on, you may nominate twice per day and vote twice per nomination.",
    "Type": "Townsfolk",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": true,
    "passive": false,
  },
  "ogre": {
    "Name": "Ogre",
    "Summary":
      "On your 1st night, choose a player (not yourself): you become their alignment (you don’t know which) even if drunk or poisoned.",
    "Type": "Outsider",
    "Script": "Experimental",
    "first night": true,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": false,
  },
  "alsaahir": {
    "Name": "Alsaahir",
    "Summary":
      "Once per day, if you publicly guess which players are Minion(s) and which are Demon(s), good wins.",
    "Type": "Townsfolk",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": true,
    "once per game": true,
    "on trigger": false,
    "passive": false,
  },
  "zealot": {
    "Name": "Zealot",
    "Summary":
      "If there are 5 or more players alive, you must vote for every nomination.",
    "Type": "Outsider",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": false,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": true,
  },
  "lord_of_typhon": {
    "Name": "Lord of Typhon",
    "Summary":
      "Each night*, choose a player: they die. [Evil characters are in a line. You are in the middle. +1 Minion. -? To +? Outsiders]",
    "Type": "Demon",
    "Script": "Experimental",
    "first night": false,
    "each night": false,
    "each night*": true,
    "day": false,
    "once per game": false,
    "on trigger": false,
    "passive": true,
  },
};

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
    "id": "hells_librarian",
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
      "If it is a night when a Demon attack could end the game, and the Demon is marked “Final night: No Attack,” then the Demon does not act tonight. (Do not wake them.)",
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
      "Wake each player marked “Visitor” or “False Info” one at a time. Show them the Duchess token, then fingers (1, 2, 3) equaling the number of evil players marked “Visitor” or, if you are waking the player marked “False Info,” show them any number of fingers except the number of evil players marked “Visitor.”",
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
    "id": "spirit_of_ivory",
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
    "id": "storm_catcher",
    "firstNight": 1,
    "firstNightReminder":
      'Mark a good player as "Safe". Wake each evil player and show them the marked player.',
    "otherNightReminder": "",
    "reminders": ["Safe"],
    "setup": false,
    "name": "Storm Catcher",
    "team": "fabled",
    "ability":
      "Name a good character. If in play, they can only die by execution, but evil players learn which player it is.",
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
  },
  "Chambermaid": {
    "Mathematician":
      "The Chambermaid learns if the Mathematician wakes tonight or not, even though the Chambermaid wakes first.",
  },
  "Lycanthrope": {
    "Gambler":
      "If the Lycanthrope is alive and the Gambler kills themself at night, no other players can die tonight.",
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
      "If the Marionette thinks that they are the Balloonist, +1 Outsider was added.",
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
    "Minstrel":
      "If the Minstrel makes everyone drunk, the Organ Grinder keeps their ability but the Minstrel keeps their eyes open when voting.",
    "Preacher":
      "If the Preacher removes the Organ Grinder ability, the Organ Grinder keeps their ability but the Preacher keeps their eyes open when voting.",
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
    "Riot": "If the Summoner creates Riot, all Minions also become Riot.",
    "Zombuul":
      "If the Summoner turns a dead player into the Zombuul, the Storyteller treats that player as a Zombuul that has died once.",
  },
  "Vizier": {
    "Alsaahir":
      "If the Vizier is in play, the Alsaahir must also guess which Demon(s) are in play.",
    "Alchemist":
      "If the Alchemist has the Vizier ability, they may only choose to execute immediately if three or more players voted, regardless of those players’ alignment.",
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
    "Mastermind":
      "If the Al-Hadikhia dies by execution, and the Mastermind is alive, the Al-Hadikhia chooses 3 good players tonight: if all 3 choose to live, evil wins. Otherwise, good wins.",
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
      "If the Kazali chooses the Goon to become a Minion, remaining Minion choices are decided by the Storyteller.",
    "Huntsman":
      "If the Kazali chooses the Damsel to become a Minion, and a Huntsman is in play, a good player becomes the Damsel.",
    "Marionette":
      "If the Kazali chooses to create a Marionette, they must choose one of their neighbors.",
    "Soldier":
      "If the Kazali turns the Soldier into a Minion, the Soldier chooses which not-in-play Minion to become.",
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
      "If Leviathan is in play, and the Banshee dies by execution, all players learn that the Banshee has died, and the Banshee gains their ability.",
    "Farmer":
      "If Leviathan is in play & a Farmer dies by execution, a good player becomes a Farmer that night.",
    "Hatter":
      "If the Hatter dies on or after day 5, the Demon cannot choose Leviathan.",
    "Innkeeper":
      "If Leviathan nominates and executes a player the Innkeeper chose, that player does not die.",
    "Mayor":
      "If Leviathan is in play & no execution occurs on day 5, good wins.",
    "Monk":
      "If Leviathan nominates and executes the player the Monk chose, that player does not die.",
    "Pit-Hag": "After day 5, the Pit-Hag cannot choose Leviathan.",
    "Ravenkeeper":
      "If Leviathan is in play & the Ravenkeeper dies by execution, they wake that night to use their ability. They are drunk if their nominator was good.",
    "Sage":
      "If Leviathan is in play & the Sage dies by execution, they wake that night to use their ability. They are drunk if their nominator was good.",
    "Soldier":
      "If Leviathan nominates and executes the Soldier, the Soldier does not die.",
  },
  "Lil’ Monsta": {
    "Hatter":
      "If a Demon chooses Lil’ Monsta, they also choose a Minion to become and babysit Lil’ Monsta tonight.",
    "Magician":
      "Each night, the Magician chooses a Minion: if that Minion & Lil’ Monsta are alive, that Minion babysits Lil’ Monsta.",
    "Organ Grinder":
      "Votes for the Organ Grinder count if the Organ Grinder is babysitting Lil’ Monsta.",
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
  "Riot": {
    "Banshee":
      "If Riot nominates and kills the Banshee, all players learn that the Banshee has died, and the Banshee may nominate two players immediately.",
    "Butler": "The Butler can not nominate their master.",
    "Cannibal":
      "Players that die by nomination register as being executed to the Cannibal.",
    "Clockmaker": "Riot registers as a Minion to the Clockmaker.",
    "Damsel": "Riot registers as a Minion to the Damsel.",
    "Devil’s Advocate":
      "Players that die by nomination register as being executed to the Devil’s Advocate.",
    "Engineer":
      "Riot and the Engineer can not both be in play at the start of the game. If the Engineer creates Riot, the evil players become Riot.",
    "Exorcist": "Only 1 jinxed character can be in play.",
    "Farmer":
      "If a Riot player nominates and kills a Farmer, the Farmer uses their ability tonight.",
    "Flowergirl": "Only 1 jinxed character can be in play.",
    "Golem": "If the Golem nominates Riot, the Riot player does not die.",
    "Grandmother":
      "If a Riot player nominates and kills the Grandchild, the Grandmother dies too.",
    "Hatter":
      "If the Hatter dies, Riot is in play and a Riot chooses a different Demon, a normal evil team is created from the Riot players. If the Hatter dies and the Demon chooses Riot, Minions become Riot too.",
    "Innkeeper":
      "If a Riot player nominates an Innkeeper-protected-player, the Innkeeper-protected-player does not die.",
    "Investigator": "Riot registers as a Minion to the Investigator.",
    "King":
      "If a Riot player nominates and kills the King and the Choirboy is alive, the Choirboy uses their ability tonight.",
    "Mayor":
      "If the 3rd day begins with just three players alive, the players may choose (as a group) not to nominate at all. If so (and a Mayor is alive) then the Mayor’s team wins.",
    "Minstrel": "Only 1 jinxed character can be in play.",
    "Monk":
      "If a Riot player nominates and kills the Monk-protected-player, the Monk-protected-player does not die.",
    "Pacifist":
      "Players that die by nomination register as being executed to the Pacifist.",
    "Pit-Hag":
      "If the Pit-Hag creates Riot, all evil players become Riot. If the Pit-Hag creates Riot after day 3, the game continues for one more day.",
    "Preacher": "Riot registers as a Minion to the Preacher.",
    "Ravenkeeper":
      "If a Riot player nominates and kills the Ravenkeeper, the Ravenkeeper uses their ability tonight.",
    "Sage":
      "If a Riot player nominates and kills a Sage, the Sage uses their ability tonight.",
    "Saint":
      "If a good player nominates and kills the Saint, the Saint’s team loses.",
    "Snitch":
      "If the Snitch is in play, each Riot player gets an extra 3 bluffs.",
    "Soldier":
      "If a Riot player nominates the Soldier, the Soldier does not die.",
    "Town Crier": "Riot registers as a Minion to the Town Crier.",
    "Undertaker":
      "Players that die by nomination register as being executed to the Undertaker.",
    "Zealot": "If you are nominated, you must nominate again, even if dead.",
  },
  "Vortox": {
    "Banshee":
      "If the Vortox is in play and the Demon kills the Banshee, the players still learn that the Banshee has died.",
  },
  "Yaggababble": {
    "Exorcist":
      "If the Exorcist chooses the Yaggababble, the Yaggababble ability does not kill tonight.",
  },
};
