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

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // ...
        console.log(user);
    } else {
        alert("please sign in first!");
        window.location.href = "index.html";
        // User is signed out
    }
});

function signOut() {
    // [START auth_sign_out]
    firebase.auth().signOut().then(() => {
        window.location.href = "index.html";
    }).catch((error) => {
        alert("error");
      // An error happened.
    });
    // [END auth_sign_out]
  }

function togame() {

    window.location.href = "gameoption.html";
   
  }
function tocom() {

    window.location.href = "comment.html";
   
  }
function toteam() {

    window.location.href = "team.html";
   
  }









