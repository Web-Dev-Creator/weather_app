// import { getDatabase, ref, set } from "firebase/database";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
// import { } from "./firebase";
import { app } from "./firebase";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "./pages/Signup";
import SigninPage from "./pages/Signin";
import {WeatherCard, BackgroundLayout, MiniCard } from "./Components/WeatherIndex";

// const db = getDatabase(app);

const auth = getAuth(app);

function App() {
  /* const putData = () => {
     set(ref(db, 'users/raj'),
       {
         id: 1,
         name: "Raj Kashyap",
         age: 24
       });
   }; */

  const signupUser = () => {
    createUserWithEmailAndPassword(auth, "Raj@gmail.com", "raj@123").then((value) => console.log(value));
  };

  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Yes, you Are Logged In
        setUser(user);
      } else {
        // User is Logged Out
        console.log("You Are Logged Out");
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <>
        <h1>Hello Weather App Users</h1>
        <button onClick={signupUser}>Create User</button> 
        <SignupPage />
        <Router>
          <SigninPage />
          <SignupPage />
          <Routes>
            <WeatherCard />
            <BackgroundLayout />
            <MiniCard />
            <Route path="Signup" component={<SignupPage />} />
          </Routes>
        </Router>
      </>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello {user.email}</h2>
        <button onClick={() => signOut(auth)}>Logged Out</button>
      </header>
    </div>
  );
}

export default App;
