import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAiz8berhEQh6bvAJUGNV-iTi0RV9ZhHeY",
    authDomain: "ecommerce-pc-components.firebaseapp.com",
    projectId: "ecommerce-pc-components",
    storageBucket: "ecommerce-pc-components.appspot.com",
    messagingSenderId: "159346350413",
    appId: "1:159346350413:web:1c5ae18c4f6d67b831ff04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFireStoreApp = () => {
    return app
}