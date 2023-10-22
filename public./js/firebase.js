let firebaseConfig = {
    // Enter your firebase credentials
    apiKey: "AIzaSyBONwO5J6utfJgapGrOPeOhrOsr8GmHimE",
    authDomain: "blogging-website-b09d5.firebaseapp.com",
    projectId: "blogging-website-b09d5",
    storageBucket: "blogging-website-b09d5.appspot.com",
    messagingSenderId: "179428258174",
    appId: "1:179428258174:web:d8261137a10c61f469032f"
};


firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
