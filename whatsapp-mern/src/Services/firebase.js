import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJgERQ3HyvTVNMlSquQd6R4zAsuPFEx_Y",
  authDomain: "whatsapp-mern-56921.firebaseapp.com",
  databaseURL: "https://whatsapp-mern-56921.firebaseio.com",
  projectId: "whatsapp-mern-56921",
  storageBucket: "whatsapp-mern-56921.appspot.com",
  messagingSenderId: "323953690688",
  appId: "1:323953690688:web:df37276ba681a61cecf7a5",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
