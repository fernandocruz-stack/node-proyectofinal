import { db } from './data.js';
import { collection, getDocs } from 'firebase/firestore';

const test = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'productos'));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} =>`, doc.data());
    });
  } catch (error) {
    console.error("Error al conectar con Firestore:", error);
  }
};

test();
