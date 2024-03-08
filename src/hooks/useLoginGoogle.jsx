import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const useLoginGoogle = () => {
  const navigate = useNavigate();
  // Configuración de Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyC3CFgrzfvca-9bskstwaOuYJodZIDooIE",
    authDomain: "e-co-a3ff3.firebaseapp.com",
    projectId: "e-co-a3ff3",
    storageBucket: "e-co-a3ff3.appspot.com",
    messagingSenderId: "718297108231",
    appId: "1:718297108231:web:d19aa8889972a7a83e7fa2",
  };

  // Inicialización de Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  // Función para iniciar sesión con Google
  const signInWithGoogle = async () => {
    console.log("llego aji");
    try {
      const user = await signInWithPopup(auth, provider);
      console.log("todo salio nice");
      localStorage.setItem("USER", JSON.stringify(user));
      console.log(user);
      navigate("/resgistro");
    } catch (error) {
      console.error("Error al iniciar sesión con Google", error);
    }
  };

  return {
    signInWithGoogle,
  };
};

export default useLoginGoogle;
