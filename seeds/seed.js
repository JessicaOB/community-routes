const connection = require('../config/connection');
const { User , Thought } = require('../models');
connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  await Thought.deleteMany({});

  await User.deleteMany({});

  const users = [
    {
       username: 'Tippy',
       email: 'tippy@test.com'
    },
    {
        username: 'Timmy',
        email: 'timmy@test.com'
     },
    {
        username: 'Tommy',
        email: 'tommy@test.com'
     },
  ];
  const thoughts = [
    {
        thoughtText: "I'm tired.",
        username: 'Tommy'
    },
    {
        thoughtText: "Return of the Jedi is the best Star Wars movie.",
        username: 'Tommy'
    },
    {
        thoughtText: "Why are burpees so hard?",
        username: 'Tommy'
    },
    {
        thoughtText: "Daisies are so friendly and happy.",
        username: 'Timmy'
    },
    {
        thoughtText: "Bean and cheese burritos are my fav. Who's with me?!",
        username: 'Timmy'
    },
    {
        thoughtText: "Creativity is the engine that drives integration.",
        username: 'Tippy'
    },
    {
        thoughtText: "It's been one of those days for like a year. :( ",
        username: 'Tippy'
    },
    {
        thoughtText: "I told my kids I'm older than Google. They don't believe me.",
        username: 'Tippy'
    },
    {
        thoughtText: "I think the world needs a Muppets Beauty and the Beast movie.",
        username: 'Tippy'
    },
  ]

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});