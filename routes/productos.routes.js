import express from "express";
import { listarProductos,obtenerProductoPorId,crearProducto,actualizarProducto,borrarProductoPorId} from "../controllers/productos.controllers.js";

const router = express.Router();

router.get("/", listarProductos);
router.get("/:id", obtenerProductoPorId);
router.post("/",crearProducto);
router.put("/:id", actualizarProducto);
router.delete("/:id",borrarProductoPorId);


export default router;
