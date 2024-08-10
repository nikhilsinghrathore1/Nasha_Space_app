$(".message a").click(function() {
  $(".register-form").toggle("slow");
});

$(".message a").click(function() {
  $(".login-form").toggle("slow");
});






import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
const firebaseConfig = {


  apiKey: "AIzaSyAOB3-FC0mM-wd8aV4AfojQLzpDLt2Sets",
  authDomain: "okbro-5846a.firebaseapp.com",
  databaseURL: "https://okbro-5846a-default-rtdb.firebaseio.com",
  projectId: "okbro-5846a",
  storageBucket: "okbro-5846a.appspot.com",
  messagingSenderId: "664853087673",
  appId: "1:664853087673:web:d31bb15f71bf8028d2a268",
  measurementId: "G-D107FDVCVC"
};
const app = initializeApp(firebaseConfig);

import {
  getDatabase,
  ref,
  set,
  child,
  get,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
const db = getDatabase();
const name = document.getElementById("name");
const adhar = document.getElementById("adharnumber");
const pass = document.getElementById("password");
var createbtn = document.getElementById("createbtn");
var loginbtn = document.getElementById("loginbtn");
const adhar2 = document.getElementById("adharlogin");
const pass2 = document.getElementById("passlogin");



function Registeruser() {
  const dbref = ref(db);
  if (auntenticate()) {
      get(child(dbref, "UsersList/" + adhar.value)).then((snapshot) => {
          if (snapshot.exists()) { alert("Already Exist"); } else {
              set(child(dbref, "UsersList/" + adhar.value), {
                  name: name.value,
                  password: pass.value,
                  adhar: adhar.value


              }).then(() => { gotologin(); }).catch((error) => { alert("error: " + error); })
          }
      });
  } else {

  }
}


function auntenticate() {

  if (adhar.value.toString().length == 12 && pass.value != "") {
      return true;

  } else {
      alert("Kindly enter the adhar number or password correctly");
  }

}


function gotologin() {
  alert("Registered Succesfully")
  window.location = "login.html";
}









function loginuser() {
  const dbref = ref(db);
  if (auntenticate2()) {
      get(child(dbref, "UsersList/" + adhar2.value)).then((snapshot) => {
          if (snapshot.exists()) {
              if (snapshot.exists()) {
                  let pass = snapshot.val().password;
                  console.log("Input pass:" + pass2.value);
                  console.log("Fetch pass:" + pass);
                  if (pass == pass2.value) {
                      gotologin2();
                  } else {
                      alert("Check Password");
                  }
              } else {
                  alert("Check Adhar Number");
              }
          } else {

              alert("Not registered");
          }
      });
  }
}

function auntenticate2() {

  if (adhar2.value.toString().length == 12 && pass2.value != "") {
      return true;

  } else {
      alert("Kindly enter the adhar number or password correctly");
  }

}



function gotologin2() {

  window.location = "dashboard.html";


}
createbtn.addEventListener('click', Registeruser);
loginbtn.addEventListener('click', loginuser);