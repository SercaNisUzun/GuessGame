let max = parseInt(prompt("Enter the maximum number!"));
while (!max) {
    max = parseInt(prompt("Enter the maximum number!"));
}

const targetNum = Math.floor(Math.random() * max) + 1;


let guess = prompt("Enter your first guess! (Type 'Q' for quit)");
let trycount = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === "q") break;
    guess = parseInt(guess);
    if (guess > targetNum) {
        guess = prompt ("Too High! Enter a New Guess:");
        trycount ++;
    } else if (guess < targetNum) {
        guess = prompt ("Too Low! Enter a New Guess:");
        trycount ++;
    } else {
        guess = prompt("Invalid guess! Please enter a number or press 'q' for quit!");
    }
}

if (guess === "q") {
    console.log("OK! You Quit!")
} else {
    console.log("CONGRATS ! YOU WIN !")
    console.log (`You try ${trycount} times !`)
}