// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth, signOut } from "firebase/auth";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import { toast } from 'react-toastify'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqzi9v29Lgui8fgWeo4O4dA2xyKHiojWA",
  authDomain: "authentication-428b0.firebaseapp.com",
  projectId: "authentication-428b0",
  storageBucket: "authentication-428b0.appspot.com",
  messagingSenderId: "330188313127",
  appId: "1:330188313127:web:5a93c4ff9c399a55aff402",
  measurementId: "G-0DQS095L3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name, email, password) => {
    try {
       const res = await createUserWithEmailAndPassword(auth, email, password);
       const user = res.user;
       await addDoc(collection(db, "user"), {
         uid: user.uid,
         name: name,
         authProvider: "local",
         email,
       });
       return true;
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            toast.error("Email đã được sử dụng");
        }else {
            toast.error(error.code.split('/')[1].split('-').join(" ")); // Hiển thị thông báo lỗi với message từ error
        }
        console.error(error);
    }
};

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error(error);
        toast.error("Vui lòng kiểm tra lại!"); // Hiển thị thông báo lỗi với message từ error
    }
};

const logout = () => {
    signOut(auth)
};

export { auth, db, login, logout, signup };
