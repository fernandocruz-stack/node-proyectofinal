import { obtenerProductos, buscarProductoPorId,guardarProducto,actualizarProductoPorId,borrarProductoPorId as borrarProductoServicio} from '../services/productos.service.js';

export async function listarProductos(req, res) {
  try {
    const productos = await obtenerProductos();
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener productos' });
  }
}

export async function obtenerProductoPorId(req, res) {
  const id = parseInt(req.params.id);
  const producto = await buscarProductoPorId(id);

  if (producto) {
    res.status(200).json(producto);
  } else {
    res.status(404).json({ message: "Producto no encontrado" });
  }
}

export async function crearProducto(req, res) {
  const nuevoProducto = req.body;
  //Intento de validacion
  if (!nuevoProducto.nombre || !nuevoProducto.categoria || !nuevoProducto.precio) {
    return res.status(400).json({ message: 'Faltan campos necesarios' });
    }
  try {
    const productoCreado = await guardarProducto(nuevoProducto);

    res.status(201).json(productoCreado);
  } catch (error) {
    res.status(500).json({ message: 'Error al guardar el producto' });
  }
}


export async function actualizarProducto(req, res) {
  const id = parseInt(req.params.id);
  const datosActualizados = req.body;

  
  if (!datosActualizados.nombre || !datosActualizados.categoria || !datosActualizados.precio) {
    return res.status(400).json({ message: 'Faltan campos necesarios' });
  }

  try {
    const productoActualizado = await actualizarProductoPorId(id, datosActualizados);

    if (productoActualizado) {
      res.status(200).json(productoActualizado);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }

  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el producto' });
  }
}

export async function borrarProductoPorId(req, res) {
  try {
    const id = parseInt(req.params.id);
    const producto = await borrarProductoServicio(id);

    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json({ mensaje: "Se ha eliminado el siguiente producto: ", producto });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el producto" });
  }
}

