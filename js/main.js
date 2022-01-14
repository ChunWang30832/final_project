// // Add your Firebase Project Config here...
// const firebaseConfig = {
//     apiKey: "AIzaSyCSjx1wjxeqfIrP56EImI06luFIjFYvf-c",
//     authDomain: "ntut-web-e7842.firebaseapp.com",
//     projectId: "ntut-web-e7842",
//     storageBucket: "ntut-web-e7842.appspot.com",
//     messagingSenderId: "640385577381",
//     appId: "1:640385577381:web:60241823acb577e859f84c",
//   };

// const app = firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

// const user = db.collection('userlist');
// const tbody=document.querySelector('tbody'); 
// (async () => {
//   const userDocList = await user.get();
//   userDocList.forEach((element) => {
//         const {city,country,gender,name,phone,picture}=element.data();
//         const tableRow = `
//         <tr>
//             <th>
//                 <img src="${picture}" class ="rounded-circle" style="width:25px;height:25px;"></img>
//             </th>
//             <td>${name}</td>
//             <td>${gender}</td>
//             <td>${country}</td>
//             <td>${city}</td>
//             <td>${phone}</td>
//         </tr>`;
//         tbody.innerHTML=tbody.innerHTML+tableRow;
//     });
//  })();
