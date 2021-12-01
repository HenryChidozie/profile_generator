
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :)', (name) => {
  rl.question('What\'s an activity you like doing?', (activity) => {
    rl.question('What kind of music do you listen to when doing that activity?', (music) => {
      rl.question('What which meal is your favourite? (eg: dinner, brunch, etc.)', (favMeal) => {
        rl.question('What\'s your favourite thing to eat for that meal?', (favFood) => {
          rl.question('What sport is your absolute favorite? ', (favSport) => {
            rl.question('What\'s your superpower?', (superPower) => {
              rl.question('In a few words, tell us what you are amazing at :(', (hobby) => {
                console.log('\n..............................\n');
                console.log(`${name} loves listening to ${music} while ${activity}, devouring ${favFood} for ${favMeal}, prefers ${favSport} over any other sport, superpower is ${superPower},and is amazing at ${hobby}.`);
                rl.close();
              });
            });
          });
        });
      });
    });
  });
});