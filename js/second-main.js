const yourDice = Math.floor((Math.random()*6)+1);
const pcDice = Math.floor((Math.random()*6)+1);

const runBtn = document.getElementById("run-btn");

runBtn.addEventListener('click', function () {

  document.getElementById("your-numbers").innerHTML = yourDice;
  document.getElementById("pc-numbers").innerHTML = pcDice;
  
  if (yourDice > pcDice){
    document.getElementById("message").innerHTML = "Hai Vinto!";
  } else if (yourDice == pcDice) {
    document.getElementById("message").innerHTML = "Hai Pareggiato!";
  } else {
    document.getElementById("message").innerHTML = "Hai Perso!";
  }
});
