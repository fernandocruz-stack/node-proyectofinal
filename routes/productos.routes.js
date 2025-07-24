import express from "express";
import {
  listarProductos,
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  borrarProductoPorId
} from "../controllers/productos.controllers.js";
import { authentication } from "../middlewares/auth.authentication.js";

const router = express.Router();


router.get("/", authentication, listarProductos);
router.get("/:id", authentication, obtenerProductoPorId);
router.post("/", authentication, crearProducto);
router.put("/:id", authentication, actualizarProducto);
router.delete("/:id", authentication, borrarProductoPorId);




export default router;
