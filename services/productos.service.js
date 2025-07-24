//HAY QUE BORRAR ESTO

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
  const productos = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
  return productos;
}

//Funciona explicitamente con el nombre del archivo/id que da firebase o el cargado anteriormente

export async function buscarProductoPorId(id) {
  const docRef = doc(db, "productos", id);
  const producto = await getDoc(docRef);
  if (producto.exists()) {
    return { id: producto.id, ...producto.data() };
  }
  return null;
}

//POST PARA AÑADIR  PATCH NO LO USE


export async function guardarProducto(datos) {
  const productosRef = collection(db, "productos");
  const nuevoDoc = await addDoc(productosRef, datos);
  const nuevoProducto = await getDoc(nuevoDoc);
  return { id: nuevoProducto.id, ...nuevoProducto.data() };
}

//PUT PARA ACTUALIZAR

export async function actualizarProductoPorId(id, datos) {
  const docRef = doc(db, "productos", id);
  const productoExistente = await getDoc(docRef);
  if (!productoExistente.exists()) return null;

  await setDoc(docRef, datos, { merge: true }); // mergea los campos nuevos
  const actualizado = await getDoc(docRef);
  return { id: actualizado.id, ...actualizado.data() };
}




export async function borrarProductoPorId(id) {
  const docRef = doc(db, "productos", id);
  const productoExistente = await getDoc(docRef);
  if (!productoExistente.exists()) return null;

  await deleteDoc(docRef);
  return { id, ...productoExistente.data() };
}
//