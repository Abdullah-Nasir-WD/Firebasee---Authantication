import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

import { auth } from "./firebaseconfig.js"

const form = document.querySelector("#form")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const div = document.querySelector("#container")

form.addEventListener("submit" , (event)=>{
    event.preventDefault();

    signInWithEmailAndPassword(auth, email.value, password.value , div)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        window.location = "index.html"
    })
    .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
        // div.innerHTML = errorMessage  
    });
})


const googleBtn = document.querySelector("#googleBtn")


googleBtn.addEventListener( "click" , () => {
  console.log('google called');



  signInWithPopup(auth, provider)
  .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      window.location = "index.html";
  }).catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
  });


})