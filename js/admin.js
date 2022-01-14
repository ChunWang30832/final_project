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


var rerat = db.collection('rat').doc('record');
var id;
var st;
var state = document.getElementById("state");


var ref = db.collection('commentboard').doc();
var st = db.collection('team').doc('check');
st.get().then(doc => {

    st=doc.data().c;
    state.innerText=st;
    console.log(st);
    });



// ref.get().then(doc => {
//     console.log("get old");
//     oldsc= doc.data().sc;
//     oldtotal=doc.data().total;
//     scoreboard.innerText=String(oldsc);
//     count.innerText=String(oldtotal);
//    });


function deleterattotal() {
    rerat.set({
        total:0,
        
    });
    alert("清除勞贖總數成功!");
  }
function deleteratrecord() {
    rerat.set({
        sc:0,
        
    });

    alert("清除勞贖紀錄成功!");
   
  }

function deleteteam() {
    var ref = db.collection('team').doc('number');
    var ref2 = db.collection('team').doc('number2');
    var ref3 = db.collection('team').doc('number3');
    var ref4 = db.collection('team').doc('number4');


    ref.set({
        n:0
        
    });
    ref2.set({
        n:0
        
    });
    ref3.set({
        n:0
        
    });
    ref4.set({
        n:0
        
    });
    alert("清除隊伍!");
   
  }
async function team() {
    var ch = db.collection('team').doc('check');
    var boo;

    await ch.get().then(doc => {

        boo=doc.data().c;
        console.log(boo);
        });
    
if(boo){
    console.log("關閉!");
    await ch.set({
        c:false,
        
    });
    
}
else{
    console.log("開放!");
    await ch.set({
        c:true
    });


}
    


state.innerText=!boo;
  }








