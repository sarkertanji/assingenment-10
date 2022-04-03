import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { firebaseInit } from "../components/Firebase/FirebaseAuthentication";
firebaseInit();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const [Isloadind, setIsloadind] = useState(true);
  // google sign in
  const googleSignin = () => {
    setIsloadind(true);
    return signInWithPopup(auth, googleProvider)
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        setError(errorMessage); // ...
      })
      .finally(() => {
        setIsloadind(false);
      });
  };
  // handle sign in
  const handleEmailSignIn = (email, pass, name) => {
    setIsloadind(true);
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        user.displayName = name.toUpperCase();
        setError("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };

  // handle log in

  const handleLogin = (email, pass) => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        setError("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  // log out

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // setUser(null);
        setError("");
      })
      .catch((error) => {
        // An error happened.
        setError(error.message);
      })
      .finally(() => {
        setIsloadind(false);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        setUser(user);
        setError("");
      } else {
        // User is signed out
        // ...
        setUser({});
      }
      setIsloadind(false);
    });
  }, []);
  return {
    Isloadind,
    user,
    error,
    googleSignin,
    handleEmailSignIn,
    handleLogin,
    logout,
  };
};
export default useFirebase;
