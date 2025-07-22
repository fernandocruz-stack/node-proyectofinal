import { readFile,writeFile } from "fs/promises";
import path from 'path';

const RUTA = "./productos.json";

//OBTENER PRODUCTO 

export async function obtenerProductos() {
  const data = await readFile(RUTA, 'utf-8');
  //console.log(obtenerProductos)
  return JSON.parse(data);
}

//OBTENER PRODUCTO POR SU ID

export async function buscarProductoPorId(id) {
  const productos = await obtenerProductos();
  return productos.find(producto => producto.id == id);
}

//GUARDAR PRODUCTO

export async function guardarProducto(nuevoProducto) {

  const data = await readFile(RUTA, 'utf-8');
  const productos = JSON.parse(data);
  
  let maxId;
  if (productos.length > 0) {

    const ids = productos.map(function(producto) {
      return producto.id;
    });
    maxId = Math.max(...ids);
  } else {
    maxId = 0;
  }
  
  nuevoProducto.id = maxId + 1;

  productos.push(nuevoProducto);
  await writeFile(RUTA, JSON.stringify(productos, null, 2));
  //await writeFile(RUTA, JSON.stringify(productos, null, 1));
  return nuevoProducto;
}

//ACTUALIZAR UN PRODUCTO POR SU ID

export async function actualizarProductoPorId(id, datosActualizados) {
  const data = await readFile(RUTA, 'utf-8');
  const productos = JSON.parse(data);

  const index = productos.findIndex(function(producto) {
    return producto.id === id;
  })
  ;

  if (index === -1) {
    return null;
  }

  productos[index] = {
    id: id,
    nombre: datosActualizados.nombre,
    categoria: datosActualizados.categoria,
    precio: datosActualizados.precio
  };

  await writeFile(RUTA, JSON.stringify(productos, null, 2));
  return productos[index];
}

//BORRAR PRODUCTO

export async function borrarProductoPorId(id) {
  const data = await readFile(RUTA, 'utf-8');
  const productos = JSON.parse(data);

  const index = productos.findIndex(producto => producto.id === id);

  if (index === -1) {
    return null
    ;
  }

  const productoEliminado = productos.splice(index, 1)[0];

  await writeFile(RUTA, JSON.stringify(productos, null, 2));

  return productoEliminado;
}
