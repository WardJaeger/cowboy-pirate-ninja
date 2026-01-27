const TYPES = {
  cowboy: {
    name: "Cowboy",
    description: "Yeehaw! You are the king of the plains. You are loyal and always keep to your word. You prefer to go it alone, which gives you a lot of time to drink whisky and to think about your life. You might not be too bright, but you have a great mind for ambushes and tactics. You use a gun when you fight, and you never go without your trusty horse Ranger.",
    song: "resources/cowboy.mp3",
    picture: "resources/cowboy.jpg",
  },
  pirate: {
    name: "Pirate",
    description: "Yarr, ye scalliwag! You are lord of the waves. You have a carefree attitude toward life and the rules. You always work with your crewmates to sail the high seas, but don't think that makes you any less of a scoundrel. You go into a battle without a plan, cannons blazing. You dual-wield a pistol and a cutlass, but if you had a third hand it would be holding a bottle of rum. You favor a diversified offshore investment strategy, usually involving a shovel and a highly questionable map... or you just spend it all at once.",
    song: "resources/pirate.mp3",
    picture: "resources/pirate.jpeg",
  },
  ninja: {
    name: "Ninja",
    description: "Whoosh! You are master of stealth from the skies. You are disciplined and you don't let anything get in the way of your plans. Sometimes that means working with a team, but other times you take advice from your shadow. You are incredibly intelligent and practical, and you are always obsessively over-planning your next move. Swinging from above and wielding a massive katana, people don't know you are coming until you are gone.",
    song: "resources/ninja.mp3",
    picture: "resources/ninja.jpg",
  },
  rocket: {
    name: "Rocket Man",
    description: "Lift off! You have shuffled off this terrestrial coil, and now you fly around the stars. It's a depressing job though, because you don't get to see your wife during the work week. But at least you have a cool space suit and a futuristic laser gun.",
    song: "resources/rocket.mp3",
    picture: "resources/rocket.jpg",
    priority: 1,
    minimumScore: 10, // max is 11
  },
  motorcycle: {
    name: "Motorcycle Man",
    description: "Vroom! You love the thrill of riding across state lines with the whole biker club. There's nothing that you and your motorcycle can't accomplish, if you full-throttle it. Drinking and driving is a must, and petty theft probably isn't beneath you either.",
    song: "resources/motorcycle.mp3",
    picture: "resources/motorcycle.jpg",
    priority: 1,
    minimumScore: 14, // max is 16
  },
  indian: {
    name: "Indian",
    description: "Whoop whoop! Cowboys beware, for you lead a fearless tribe of woodland warriors. Your darts are precise enough to make a hawk jealous, and you strategize like a master tactician. You may be small, but your team is legendary.",
    song: "resources/indian.mp3",
    picture: "resources/indian.webp",
    priority: 1,
    minimumScore: 13, // max is 14
  },
  creep: {
    name: "Creep",
    description: "Hey girl... You're emo, in a bad way. You always worry about what others think about you. But that won't stop you from being weird and stalking people. Maybe someday you'll find a place where you belong. Hopefully not near me.",
    song: "resources/creep-clean.mp3",
    picture: "resources/creep.jpg",
    priority: 1,
    minimumScore: 12, // max is 12
  },
  monk: {
    name: "Monk",
    description: "Ding dong! Time for prayers. You do not worry yourself about worldy concerns like fighting and weapons and stuff, because you are a pacifist. You are noble and honorable, seeking out the best path through life and to get to heaven. You brew a mad beer.",
    song: "resources/monk.mp3",
    picture: "resources/monk.jpg",
    priority: 1,
    minimumScore: 14, // max is 16
  },
  business: {
    name: "Business Man",
    description: "Cha-ching! It's all about the money for you. You're a special kind of pacifist, who isn't afraid to make others do his dirty work. You play people like pawns, expertly moving them on the chess board of success. You are coniving and rotten to the core, despite your \"principles\". Other people better watch their backs around you.",
    song: "resources/business.mp3",
    picture: "resources/business.jpg",
    priority: 1,
    minimumScore: 14, // max is 16
  },
  princess: {
    name: "Pretty Princess",
    description: "You are such a pretty princess. You like dresses and tiaras and the color pink and Disney Channel.",
    song: "resources/princess.mp3",
    picture: "resources/princess.webp",
    priority: 2,
    minimumScore: 1, // must reach this score
    pinkify: true,
  },
  teapot: {
    name: "Teapot",
    description: "You're a little teapot, / Short and stout. / Here is your handle. / Here is your spout. / When you get all steamed up, / Hear you shout, / \"Tip me over and pour me out!\"",
    song: "resources/teapot.mp3",
    picture: "resources/teapot.jpg",
    priority: 2,
    minimumScore: 2, // must reach this score
    pinkify: true,
  }
}
