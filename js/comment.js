// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSjx1wjxeqfIrP56EImI06luFIjFYvf-c",
    authDomain: "ntut-web-e7842.firebaseapp.com",
    projectId: "ntut-web-e7842",
    storageBucket: "ntut-web-e7842.appspot.com",
    messagingSenderId: "640385577381",
    appId: "1:640385577381:web:60241823acb577e859f84c",
    measurementId: "G-H6SP0015E0"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Start your scripts here...

const creatTodoButton = document.querySelector('button');

creatTodoButton.addEventListener('click', addTodo);

db 
    .collection("commentboard")
    .get()
    .then(doclist => {
        doclist.forEach(element => {
            const user = element.data();
            const col = `<li class="list-group-item">
                            <span class="box bg-${user.color}"></span>
                            ${user.title}
                        </li> `
            $("#listGroup").append(col);
        });
    })

async function addTodo(event) {
    event.preventDefault();
    
    const title = document.getElementById("createTodoTitle").value;
    const color = document.getElementById("createTodoColor").value;
    await db.collection('commentboard').add({
        title,
        color
    })
    console.log("test");
    window.location.reload(); 
}

function backtomenu() {

    window.location.href = "menu.html";
   
  }
