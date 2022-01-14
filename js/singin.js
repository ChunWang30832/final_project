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


function signInWithEmailPassword() {
    var email = document.getElementById("useraccount").value;
    var password = document.getElementById("userpassword").value;
    console.log(email)
    console.log(password)
    
    // [START auth_signin_password]
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        if(email=="admin@gmail.com" && password=="123456"){
            window.location.href = "admin.html"
        }
        else{
            const user = firebase.auth().currentUser;
            console.log(user);
            window.location.href = "menu.html"
        }
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    // [END auth_signin_password]
  }



