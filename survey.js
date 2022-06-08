const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are okay too', (answer1) => {
  rl.question('If you could only do ONE activity for the rest of your life what would it be?', (answer2) => {
    rl.question('What music do you listen to while doing that?', (answer3) => {
      rl.question('Which meal is your favorite? (eg: Dinner, Breakfast, Lunch, etc.', (answer4) => {
        rl.question('What\'s your favorite this to eat at that meal?', (answer5) => {
          rl.question('Which sports team do you root for above all other?', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you\'re amazing at.', (answer7) => {
              console.log(`Thank you for your valuable feedback: ${answer1}`);
              rl.close(console.log(`${answer1} loves listening to ${answer3} while doing ${answer2}. When given the opportunity ${answer1} will always choose ${answer5} when offered at ${answer4}, but don\'t ask them to route for any other team before cheering for the ${answer6}. Finally ${answer1} is amazing at ${answer7}.`));
            });
          });
        });
      });
    });
  });
  

  
});

