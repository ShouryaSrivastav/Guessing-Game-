const max = prompt("Enter The Range:");

const random = Math.floor(Math.random()*max) + 1;

let guess = prompt("Enter Your Guess:");

while(true){
if(guess == "quit"){
console.log("You Quit");
break;
}

if(guess == random){
console.log("Amazing Your Guess Was Correct = ", random);
break;
}

else if(guess < random){
guess = prompt("Hint: You Entered Too Small Number. Try Again");
}
  
else{ guess = prompt("Hint: You Entered Too Large Number. Try Again");
}
}
