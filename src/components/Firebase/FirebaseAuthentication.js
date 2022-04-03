import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./Firebase.comfig";
export const firebaseInit = () => {
  initializeApp(firebaseConfig);
};
