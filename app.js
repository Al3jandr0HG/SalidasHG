// Importar las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// Configuración de Firebase (usa tus credenciales)
const firebaseConfig = {
  apiKey: "AIzaSyBYqzIDYNVLS9dDQqjgunAM_-t8Ey5Um7Q",
  authDomain: "salidashg.firebaseapp.com",
  projectId: "salidashg",
  storageBucket: "salidashg.firebasestorage.app",
  messagingSenderId: "726817312927",
  appId: "1:726817312927:web:995fcd0414034d44b0d2aa",
  measurementId: "G-F7ELZELP0L"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener la base de datos de Firebase
const database = getDatabase(app);

// Función para guardar datos
function guardarCita(cliente, albaran, transporte, horarioCarga) {
  // Referencia para la base de datos
  const citaRef = ref(database, 'citas/' + cliente);
  set(citaRef, {
    cliente: cliente,
    albaran: albaran,
    transporte: transporte,
    horarioCarga: horarioCarga
  })
  .then(() => {
    console.log("Cita guardada correctamente");
  })
  .catch((error) => {
    console.error("Error al guardar la cita: ", error);
  });
}