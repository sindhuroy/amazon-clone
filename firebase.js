var firebaseConfig = {
    apiKey: "AIzaSyATmsrQrTQ3U0TZ0EiMZw0R5yKD8VMYPFc",
    authDomain: "clone-10b6f.firebaseapp.com",
    projectId: "clone-10b6f",
    storageBucket: "clone-10b6f.appspot.com",
    messagingSenderId: "769780249971",
    appId: "1:769780249971:web:e8fab1ba670f72527fc106",
    measurementId: "G-JCS9534KLK"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();