// Variabili
const emailInputElement = document.getElementById("email-input");
const loginBtn = document.getElementById("login-btn");

// Email consentite
const emailList = ["payeturo7@gmail.com", "ragamisentite@gmail.com", "pasolino@gmail.com", "eccociqua@gmail.com"];

// Click Event login
loginBtn.addEventListener('click', function () {
  
  const emailDaCercare = emailInputElement.value;
  
  let emailDaVerificare = false;

  for (let i = 0; i < emailList.length; i++) {
    if (emailDaCercare === emailList[i]) {
      emailDaVerificare = true;
    } 
  }
    if (emailDaVerificare === true){
      document.getElementById("message").innerHTML = "Accesso consentito"
    } else{ document.getElementById("message").innerHTML = "Accesso rifiutato, riprova con un'altra mail"
  }  
});