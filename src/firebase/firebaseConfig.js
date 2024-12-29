// import firebase from "firebase/compat/app";
// import "firebase/compat/auth"
// import "firebase/compat/database"
// const firebaseConfig = {

//   authDomain: "strip-subscription-62295.firebaseapp.com",
//   databaseURL: "https://strip-subscription-62295-default-rtdb.firebaseio.com",
//   projectId: "strip-subscription-62295",
//   storageBucket: "strip-subscription-62295.firebasestorage.app",
//   messagingSenderId: "649079625113",
//   appId: "1:649079625113:web:74a6ba38cbdc30240b6f08"
// };

//   if(firebase.apps.length){
//     firebase.initializeApp(firebaseConfig)
//   }

 
// export default firebase
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyCu809o-ZpDUao_Biq0aHKvbyb3gPftD0g",
  authDomain: "strip-subscription-62295.firebaseapp.com",
  databaseURL: "https://strip-subscription-62295-default-rtdb.firebaseio.com",
  projectId: "strip-subscription-62295",
  storageBucket: "strip-subscription-62295.appspot.com",
  messagingSenderId: "649079625113",
  appId: "1:649079625113:web:74a6ba38cbdc30240b6f08",
};

// Initialize Firebase only once
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
