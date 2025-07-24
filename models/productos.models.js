import { db } from "../firebase/firebase.config.js";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  setDoc,
} from 'firebase/firestore';

//Funciona
export async function obtenerProductos() {
  const productosRef = collection(db, "productos");
  const snapshot = await getDocs(productosRef);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
}

// Buscar producto por ID Funciona
export async function buscarProductoPorId(id) {
  const docRef = doc(db, "productos", id);
  const producto = await getDoc(docRef);
  return producto.exists() ? { id: producto.id, ...producto.data() } : null;
}

// Guardar nuevo producto Funciona
export async function guardarProducto(datos) {
  const productosRef = collection(db, "productos");
  const nuevoDoc = await addDoc(productosRef, datos);
  const nuevoProducto = await getDoc(nuevoDoc);
  return { id: nuevoProducto.id, ...nuevoProducto.data() };
}

// Actualizar producto por ID Funciona CON PUT
export async function actualizarProductoPorId(id, datos) {
  const docRef = doc(db, "productos", id);
  const productoExistente = await getDoc(docRef);
  if (!productoExistente.exists()) return null;

  await setDoc(docRef, datos, { merge: true });
  const actualizado = await getDoc(docRef);
  return { id: actualizado.id, ...actualizado.data() };
}

// Borrar producto por ID Funciona
export async function borrarProductoPorId(id) {
  const docRef = doc(db, "productos", id);
  const productoExistente = await getDoc(docRef);
  if (!productoExistente.exists()) return null;

  await deleteDoc(docRef);
  return { id, ...productoExistente.data() };
}
