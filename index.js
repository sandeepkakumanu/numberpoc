let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');
let number = [Math.floor(Math.random() * 100)];
var counter = 0;


btn.addEventListener('click', function () {
    let input = document.getElementById('userInput').value;
    document.getElementById('userInput').value = '';
    if (counter == maxGuesses) {
        alert("Game Over");
        document.getElementById("btn").disabled = true;
    
    }
    if (input == number) {
        output.innerHTML = `You guessed right,your number was ${number}`;
        document.getElementById("btn").disabled = true;
        
    } else if (input < number) {
        output.innerHTML = "you guessed too low!"
    };
    if (input > number) {
        output.innerHTML = "you guessed too high!"
    }
})

document.getElementById('restart').onclick = function () {
    number = Math.floor((Math.random() * 100));
    document.getElementById('out').innerHTML = maxGuessesCount
    document.getElementById("btn").disabled = false;
    document.getElementById("input").value = '';
    document.getElementById("restart").style.display = '';
}