import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAnuPAFnjkUTaIA_LqYVws9Vltj9RH_Quc",
    authDomain: "teste-4c7aa.firebaseapp.com",
    projectId: "teste-4c7aa",
    storageBucket: "teste-4c7aa.appspot.com",
    messagingSenderId: "792463179632",
    appId: "1:792463179632:web:759d1fdde4ba609126d9b5"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);

  export { db };