import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCagGVJwlgtI-tydHzXPHn2omLeEJBIvHA",
    authDomain: "netflixclone-c44cf.firebaseapp.com",
    projectId: "netflixclone-c44cf",
    storageBucket: "netflixclone-c44cf.appspot.com",
    messagingSenderId: "586355363417",
    appId: "1:586355363417:web:54a58e490544c991512b48"
};

    const app=initializeApp(firebaseConfig);
    const auth=getAuth();
    const db=getFirestore();

export {app,auth,db};
