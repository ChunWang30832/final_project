const firebaseConfig = {
    apiKey: "AIzaSyCSjx1wjxeqfIrP56EImI06luFIjFYvf-c",
    authDomain: "ntut-web-e7842.firebaseapp.com",
    projectId: "ntut-web-e7842",
    storageBucket: "ntut-web-e7842.appspot.com",
    messagingSenderId: "640385577381",
    appId: "1:640385577381:web:60241823acb577e859f84c",
    measurementId: "G-H6SP0015E0"
  };

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function signUpWithEmailPassword() {
    var email = document.getElementById("registeremail").value;
    var password = document.getElementById("registerpassword").value;
    console.log(email)
    console.log(password)
    // [START auth_signup_password]
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("success")
        // Signed in 
        var user = userCredential.user;
        window.location.href = "index.html"
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
    // [END auth_signup_password]
  }