const QUESTIONS = [
  {
    text: "Where do you get your power from?",
    answers: [
      { text: "earth", scores: { cowboy: 2, indian: 2, rocket: -Infinity } },
      { text: "water", scores: { pirate: 2 } },
      { text: "air", scores: { ninja: 2 } },
    ]
  },
  {
    text: "How smart are you?",
    answers: [
      { text: "very smart", scores: { ninja: 2, pirate: 1 } },
      { text: "kind of smart", scores: { pirate: 2, ninja: 1, cowboy: 1 } },
      { text: "not smart", scores: { cowboy: 2, pirate: 1 } },
    ]
  },
  {
    text: "How much honor do you have?",
    answers: [
      { text: "very honor", scores: { cowboy: 2, ninja: 1, monk: 2 } },
      { text: "kind of honor", scores: { ninja: 2, cowboy: 1, pirate: 1, motorcycle: 1 } },
      { text: "not honor", scores: { pirate: 2, ninja: 1, business: 2, motorcycle: 2 } },
    ]
  },
  {
    text: "Do you like fighting?",
    answers: [
      { text: "yeah", scores: { monk: -Infinity, business: -Infinity } },
      { text: "no" },
    ]
  },
  {
    text: "What is your body type?",
    answers: [
      { text: "muscular and solid", scores: { cowboy: 2, pirate: 2 } },
      { text: "lean and agile", scores: { pirate: 2, ninja: 2 } },
      { text: "large and round" },
      { text: "short and stout", scores: { teapot: 1 } },
      { text: "tall and mysterious", scores: { cowboy: 2, ninja: 2 } },
    ]
  },
  {
    text: "Do you work well with a team?",
    answers: [
      { text: "the team is everything", scores: { pirate: 2, ninja: 1, motorcycle: 2, indian: 2, monk: 2 } },
      { text: "yes, but sometime you gotta do it alone", scores: { ninja: 2, pirate: 1, indian: 1 } },
      { text: "sometimes,", scores: { cowboy: 2, ninja: 1 } },
      { text: "nope, loner", scores: { cowboy: 2, business: 2, rocket: 1, creep: 2 } },
    ]
  },
  {
    text: "Plunder?",
    answers: [
      { text: "oh yeah", scores: { pirate: 2, business: 2, motorcycle: 1 } },
      { text: "nah" },
    ]
  },
  {
    text: "What color do you like to wear?",
    answers: [
      { text: "black", scores: { ninja: 2, pirate: 1, monk: 2, business: 2, motorcycle: 2, creep: 2 } },
      { text: "brown", scores: { pirate: 2, cowboy: 2, indian: 2, monk: 2 } },
      { text: "shiny", scores: { pirate: 1, rocket: 2 } },
      { text: "something else", scores: { cowboy: 1, indian: 2, monk: 2 } },
      // { text: "ANYTHING but black", scores: {  } },
    ]
  },
  {
    text: "Do you want to be in control?",
    answers: [
      { text: "yes", scores: { creep: 2, business: 2 } },
      { text: "no", scores: { monk: 2 } },
    ]
  },
  {
    text: "Suppose someone wants to hurt your family, how do you stop them?",
    answers: [
      { text: "fight back", scores: { monk: -Infinity, business: -Infinity } },
      { text: "blackmail", scores: { business: 2 } },
      { text: "I couldn't hurt anybody", scores: { monk: 2 } },
    ]
  },
  {
    text: "How much do you brood?",
    answers: [
      { text: "never", scores: { pirate: 2 } },
      { text: "sometimes", scores: { cowboy: 1, ninja: 1, pirate: 1 } },
      { text: "5 days a week", scores: { cowboy: 2, ninja: 2, rocket: 2, creep: 2 } },
      { text: "all the time", scores: { cowboy: 2, ninja: 2, creep: 2 } },
    ]
  },
  {
    text: "How do you use your money?",
    answers: [
      { text: "spending spree", scores: { pirate: 2, cowboy: 1, motorcycle: 1 } },
      { text: "buy a few nice things", scores: { cowboy: 2, ninja: 1, pirate: 1 } },
      { text: "carefully managed savings", scores: { ninja: 2, cowboy: 1 } },
      { text: "many \"offshore investment accounts\"", scores: { pirate: 2, business: 2 } },
    ]
  },
  {
    text: "What weapon do you use when fighting?",
    answers: [
      { text: "sword", scores: { ninja: 2, pirate: 1, monk: -Infinity, business: -Infinity } },
      { text: "gun", scores: { cowboy: 2, pirate: 1, indian: 1, motorcycle: 2, monk: -Infinity, business: -Infinity } },
      { text: "blow dart gun", scores: { indian: 2, monk: -Infinity, business: -Infinity } },
      { text: "other gun", scores: { rocket: 2, monk: -Infinity, business: -Infinity } },
      { text: "sword and gun", scores: { pirate: 2, cowboy: 1, monk: -Infinity, business: -Infinity } },
      { text: "cannon", scores: { pirate: 2, monk: -Infinity, business: -Infinity } },
      { text: "fists", scores: { ninja: 1, monk: -Infinity, business: -Infinity } },
      { text: "I don't fight" },
    ]
  },
  {
    text: "Do you want a perfect soul?",
    answers: [
      { text: "yes", scores: { monk: 2, creep: 2 } },
      { text: "no" },
    ]
  },
  {
    text: "What is your stance on alcohol?",
    answers: [
      { text: "it's good", scores: { cowboy: 2, pirate: 2, motorcycle: 2, monk: 2 } },
      { text: "it throws me off my game", scores: { ninja: 2 } },
    ]
  },
  {
    text: "How good is your tactics?",
    answers: [
      { text: "it's good", scores: { cowboy: 2, ninja: 2, business: 2, indian: 2 } },
      { text: "I'm not so good at planning", scores: { pirate: 2 } },
    ]
  },
  {
    text: "There's an enemy right in front of you, what do you do?",
    answers: [
      { text: "charge ahead", scores: { pirate: 2, cowboy: 2, indian: 1, motorcycle: 2, monk: -Infinity, business: -Infinity } },
      { text: "plan an ambush", scores: { ninja: 2, cowboy: 2, indian: 2, monk: -Infinity, business: -Infinity } },
      { text: "I don't fight" },
    ]
  },
  {
    text: "You walk into the steed shop, what are you buying?",
    answers: [
      { text: "horse", scores: { cowboy: 2, indian: 2 } },
      { text: "metal horse", scores: { cowboy: 2, motorcycle: 2 } },
      { text: "water ship", scores: { pirate: 2 } },
      { text: "space ship", scores: { pirate: 2, rocket: 2 } },
      { text: "rope", scores: { ninja: 2, pirate: 1 } },
    ]
  },
  {
    text: "Do you belong on earth?",
    answers: [
      { text: "I think so" },
      { text: "I don't belong here", scores: { monk: 2, rocket: 2, creep: 2 } },
    ]
  },
  {
    text: "Are you a girl?",
    answers: [
      { text: "yes", scores: { princess: 1, teapot: 1 } },
      { text: "no" },
    ]
  },
];
