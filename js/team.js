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
        // alert("please sign in first!");
        // window.location.href = "index.html";
        // User is signed out
    }
});

var ref = db.collection('team').doc('number');
var ref2 = db.collection('team').doc('number2');
var ref3 = db.collection('team').doc('number3');
var ref4 = db.collection('team').doc('number4');
var check = db.collection('team').doc('check');

var t11=0;
var t22=0;
var t33=0;
var t44=0;
var ch;

var t1b = document.getElementById("t1n");
var t2b = document.getElementById("t2n");
var t3b = document.getElementById("t3n");
var t4b = document.getElementById("t4n");




ref.get().then(doc => {
    t11=doc.data().n;
    t1b.innerText=String(t11);
   });
   
ref2.get().then(doc => {

t22=doc.data().n;
t2b.innerText=String(t22);

});
ref3.get().then(doc => {

t33=doc.data().n;
t3b.innerText=String(t33);

});
ref4.get().then(doc => {

t44=doc.data().n;
t4b.innerText=String(t44);
});

check.get().then(doc => {

    ch=doc.data().c;

    });





async function team1() {

    await check.get().then(doc => {

        ch=doc.data().c;
    
        });

    if(ch){
        console.log("t1++");
    t11+=1;
    await ref.set({
        n:t11
        
    });
    t1b.innerText=String(t11);
    alert("成功加入隊伍!")
    window.location.href = "menu.html";
    }
    else{
        alert("現在關閉報名了");
    }
    
  }
async function team2() {

    await check.get().then(doc => {

        ch=doc.data().c;
    
        });

    if(ch){
    t22+=1;
    await ref2.set({
        n:t22
        
    });
    t2b.innerText=String(t22);
    alert("成功加入隊伍!")
    window.location.href = "menu.html";
}
else{
    alert("現在關閉報名了");
}
  }
async function team3() {

    await check.get().then(doc => {

        ch=doc.data().c;
    
        });

    if(ch){
    t33+=1;
    await ref3.set({
        n:t33
        
    });
    t3b.innerText=String(t33);
    alert("成功加入隊伍!")

    window.location.href = "menu.html";
}
else{
    alert("現在關閉報名了");
}
    
  }
async function team4() {

    await check.get().then(doc => {

        ch=doc.data().c;
    
        });

    if(ch){
        t44+=1;
        await ref4.set({
            n:t44
            
        });
        t4b.innerText=String(t44);
        alert("成功加入隊伍!")
        window.location.href = "menu.html";
    }
    else{
        alert("現在關閉報名了");
    }

  }

function backtomenu() {

    window.location.href = "menu.html";
   
  }






