
// Variabili
const yourDice = Math.floor((Math.random()*6)+1);
const pcDice = Math.floor((Math.random()*6)+1);

const runBtn = document.getElementById("run-btn");

// Click Event
runBtn.addEventListener('click', function () {

  // Condizioni
  if (yourDice > pcDice){
    document.getElementById("message").innerHTML = "Hai Vinto!";
  } else if (yourDice == pcDice) {
    document.getElementById("message").innerHTML = "Hai Pareggiato!";
  } else {
    document.getElementById("message").innerHTML = "Hai Perso!";
  }

  document.getElementById("your-dice").innerHTML = yourDice;
  document.getElementById("pc-dice").innerHTML = pcDice;
});
