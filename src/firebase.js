import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB5n_uYGS52zO4pS9_Po2_O1S4y1WqDfSA",
  authDomain: "hospital-doctor-website-demo.firebaseapp.com",
  projectId: "hospital-doctor-website-demo",
  storageBucket: "hospital-doctor-website-demo.appspot.com",
  messagingSenderId: "617804908156",
  appId: "1:617804908156:web:be3347590010d507d12bf9",
};

const app = initializeApp(firebaseConfig);

export default app;
