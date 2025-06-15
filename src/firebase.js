import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCOj98f2eqEgrYVZxDnBlrYuNU_J-dn_lI",
    authDomain: "weather-app-auth-ffccf.firebaseapp.com",
    projectId: "weather-app-auth-ffccf",
    storageBucket: "weather-app-auth-ffccf.appspot.com",
    messagingSenderId: "386576301825",
    appId: "1:386576301825:web:24133c6bf195c63aa9a500",
    databaseURL: "https://weather-app-auth-ffccf-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);