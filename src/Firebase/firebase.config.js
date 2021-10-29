console.log(process.env);
const firebaseConfig = {
    apiKey:process.env.REACT_APP_API_KEY,
    authDomain:process.env.REACT_APP_AUTH_DOMAIN,
    projectId:process.env.REACT_APP_PROJECT_ID,
    storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId:process.env.REACT_APP_APP_ID,
};
//console.log(firebaseConfig);
export default firebaseConfig;




// const firebaseConfig = {
//     apiKey: "AIzaSyD_S9z7PRf6iA8kopntEc-xB-CZbiL3_Nk",
//     authDomain: "ema-john-simple-4f58b.firebaseapp.com",
//     projectId: "ema-john-simple-4f58b",
//     storageBucket: "ema-john-simple-4f58b.appspot.com",
//     messagingSenderId: "457693176121",
//     appId: "1:457693176121:web:62bd4060ca238f6a0d88e8"
//   };


//   export default firebaseConfig;