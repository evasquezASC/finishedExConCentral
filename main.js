// const allMessages = document.getElementsByClassName("allMessages")[0];

// //Set database object here
// var db = firebase.database().ref("message");

// /**
//  * Updates the database with the username and message.
//  */
// function updateDB(event) {
//   event.preventDefault();

//   const message = messageElement.value;

//   messageElement.value = "";

//   console.log("message");

//   //Update database here
//   const value = {

//     message: message
//   };
//   db.push(value);
// }

// // Set database "child_added" event listener here
// db.on("child_added", function(dataRow) {
//   const value = dataRow.val();
//   const p = document.createElement("p");
//   p.innerText = `${value.message}`;
//   allMessages.appendChild(p);
// });
// console.log(quotes);
// const defaultAuth = firebase.auth();
// console.log(defaultAuth);

const signUp = document.getElementById("signUp");
const signIn = document.getElementById("signIn");
let accounts = [];

function onClickSU() {
  let user = document.getElementById("su_email");
  let pass = document.getElementById("su_pass");
  let cPass = document.getElementById("su_cPass");
  let mess = document.getElementById("messageSU");

  for (let acc of accounts) {
    if (acc.get() == user) {
      alert("Username is taken");
      return;
    }
  }

  if (pass.value == cPass.value) {
    accounts.push(new Account(user.value, pass.value));
    alert("Sign Up Successful");
  } else if (user.value == " " || pass.value == " " || cPass.value == " ") {
    alert(
      "Your Confirm Password does not match your Password or you need a valid username"
    );
  }
}

function onClickSI() {
  let user = document.getElementById("si_email").value;
  let pass = document.getElementById("si_pass").value;

  if (accounts.length > 0) {
    for (let acc of accounts) {
      if (acc.getUser() == user && acc.getPass() == pass) {
        console.log("Sign In Successful");
        alert("Sign In Successful");
        return;
      }
    }
    alert("Your username or password is incorrect");
  }
}

// signUp.addEventListener("click", onClickSU);
// signIn.addEventListener("click", onClickSI);

class Account {
  constructor(user, pass) {
    this.user = user;
    this.password = pass;
  }

  getUser() {
    return this.user;
  }

  getPass() {
    return this.password;
  }
}
// fetch("http://quotes.rest/qod.ajson")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(myJson);
//   });

function getRandomItem(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
// console.log(getRandomItem(quotes));

function makeElement() {
  const dailyQuotes = document.createElement("p");
  dailyQuotes.innerHTML = `<br/><br/>${getRandomItem(quotes)}`;
  dailyQuotes.style.backgroundColor = "black";
  dailyQuotes.style.color = "white";
  dailyQuotes.style.opacity = "0.6";
  dailyQuotes.style.height = "100%";

  document.getElementById("dailyQuotes").appendChild(dailyQuotes);
}

makeElement();
