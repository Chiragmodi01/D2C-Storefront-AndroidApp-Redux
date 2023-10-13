// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDoBpXAvXjqsEX4KmpkVe4cPsgeaR_prTA',
  authDomain: 'kirana-db.firebaseapp.com',
  databaseURL: 'https://kirana-db-default-rtdb.firebaseio.com',
  projectId: 'kirana-db',
  storageBucket: 'kirana-db.appspot.com',
  messagingSenderId: '1058138375289',
  appId: '1:1058138375289:web:833166ad1ab0c2cb4380a8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseStorage = getStorage(app);
