// Variabili
const emailInputElement = document.getElementById("email-input");
const loginBtn = document.getElementById("login-btn");

// Email consentite
const emailList = ["payeturo7@gmail.com", "ragamisentite@gmail.com", "pasolino@gmail.com", "eccociqua@gmail.com"];

// Click Event login
loginBtn.addEventListener('click', function () {
  
  const emailDaCercare = emailInputElement.value;
  
  for (let i = 0; i < emailList.length; i++) {

    if (emailDaCercare === emailList[i]) {
      console.log("Accesso consentito");
    }
    else if (emailDaCercare !== emailList[i]) { //perche non va?
      console.log("Accesso rifiutato, riprova");
    }
  }

});
