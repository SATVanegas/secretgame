let secretNumber = 0;
let tries = 1;
let BeforeNumbers = [];
let limit = parseInt(prompt('Enter the limit of the game'));
textGame();
secretNumber = generateSecretNumber();
console.log(secretNumber);
function assingTextToElemnet(element, text) { 
    let elementHTML = document.querySelector(element);
    elementHTML.textContent = text;
}


function userVerification() {
    let userNumber = parseInt(document.getElementById('userNumber').value);
    document.getElementById('reiniciar').removeAttribute('disabled');
    console.log(secretNumber);
    if (userNumber === secretNumber) {
        assingTextToElemnet('h1', 'You Win');
        assingTextToElemnet('p', ` Number of tries: ${tries} ${(tries === 1) ? 'try' : 'tries'}`);
        secretNumber = generateSecretNumber();
    }else if (userNumber > secretNumber) {
        assingTextToElemnet('p', 'Too High');
    }else {
        assingTextToElemnet('p', 'Too Low');
    }
    tries++;
    clearInput();
}


function generateSecretNumber() {
    let numberGenerate = Math.floor(Math.random() * limit) + 1;
    console.log(numberGenerate);
    console.log(BeforeNumbers);

    if (BeforeNumbers.includes(numberGenerate)) {
        return generateSecretNumber();
    }else {
        BeforeNumbers.push(numberGenerate);
        return numberGenerate;
    }

}

function clearInput() {
    document.getElementById('userNumber').value = '';
}

function textGame (){
    assingTextToElemnet('p', `enter a number between 1 and ${limit}`);
    assingTextToElemnet('h1', 'Secret Game');
}

function resetGame() {
    limit = parseInt(prompt('Enter the limit of the game'));
    secretNumber = generateSecretNumber();
    console.log(secretNumber);
    tries = 1;
    clearInput();
    textGame();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    
}