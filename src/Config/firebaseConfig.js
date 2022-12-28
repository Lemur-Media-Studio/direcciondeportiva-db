import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
  
const firebaseConfig = {
  apiKey: "AIzaSyBgVb_aS-kLYP_r4H2yeIVrp1jm10tQPFA",
  authDomain: "ecomm-ed0bd.firebaseapp.com",
  projectId: "ecomm-ed0bd",
  storageBucket: "ecomm-ed0bd.appspot.com",
  messagingSenderId: "60761764131",
  appId: "1:60761764131:web:7f1f912e73b44703789c96",
  measurementId: "G-RZ4K0VBPXK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase