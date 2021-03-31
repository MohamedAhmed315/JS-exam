
// what am I game

// console.log("Do you fly?");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   

  readline.question('Do you fly? ', answer => {
    if (answer === "yes") {
        readline.question('Are you wild? ', answer2 => {
            if (answer2 === "yes") {
                console.log("-->You are Eagle<--");
            }
        })
    }
    readline.close();
  });
