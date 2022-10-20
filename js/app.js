// Nome > Cognome > Colore > Console.log > innerHtml = psw

let userName = prompt("Ciao Bomber, qual'è il tuo nome?");
let userSurname = prompt("E il tuo cognome?");
let userColor = prompt("Qual'è il tuo colore preferito?");

console.log(userName, userSurname, userColor);

document.getElementById("pwd-output").innerHTML = `La tua Very nice password è ${userName}${userSurname}${userColor}76`;

// Uguale ma Array

const userArray = [];

userArray.push( prompt("Il tuo nome?") );
userArray.push( prompt("Il tuo cognome?") );
userArray.push( prompt("Il tuo colore preferito?") );

console.log(userArray);

document.getElementById("array-output").innerHTML = `La tua Really nice password è ${userArray[0]}${userArray[1]}${userArray[2]}76`;