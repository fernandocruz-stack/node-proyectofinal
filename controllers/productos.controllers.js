import {
  obtenerProductos,
  buscarProductoPorId,
  guardarProducto,
  actualizarProductoPorId,
  borrarProductoPorId as borrarProductoServicio
} from '../models/productos.models.js';

export async function listarProductos(req, res, next) {
  try {
    const productos = await obtenerProductos();
    res.status(200).json(productos);
  } catch (error) {
    next(error);
  }
}

export async function obtenerProductoPorId(req, res, next) {
  try {
    const id = req.params.id;
    const producto = await buscarProductoPorId(id);

    if (!producto) {
      const error = new Error('Producto no encontrado');
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json(producto);
  } catch (error) {
    next(error);
  }
}

export async function crearProducto(req, res, next) {
  try {
    const nuevoProducto = req.body;

    if (!nuevoProducto.nombre || !nuevoProducto.categoria || !nuevoProducto.precio) {
      const error = new Error('Faltan campos necesarios');
      error.statusCode = 400;
      throw error;
    }

    const productoCreado = await guardarProducto(nuevoProducto);
    res.status(201).json(productoCreado);
  } catch (error) {
    next(error);
  }
}

export async function actualizarProducto(req, res, next) {
  try {
    const id = req.params.id;
    const datosActualizados = req.body;

    if (!datosActualizados.nombre || !datosActualizados.categoria || !datosActualizados.precio) {
      const error = new Error('Faltan campos necesarios');
      error.statusCode = 400;
      throw error;
    }

    const productoActualizado = await actualizarProductoPorId(id, datosActualizados);

    if (!productoActualizado) {
      const error = new Error('Producto no encontrado');
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      mensaje: 'Se ha editado los valores del siguiente producto:',
      producto: productoActualizado
    });
  } catch (error) {
    next(error);
  }
}


export async function borrarProductoPorId(req, res, next) {
  try {
    const id = req.params.id;
    const producto = await borrarProductoServicio(id);

    if (!producto) {
      const error = new Error('Producto no encontrado');
      error.statusCode = 404;
      throw error;
    }

    res.json({ mensaje: "Se ha eliminado el siguiente producto: ", producto });
  } catch (error) {
    next(error);
  }
}
