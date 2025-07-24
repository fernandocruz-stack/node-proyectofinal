import express from "express";
import cors from "cors";
import productosRouter from "./routes/productos.routes.js";
import authRouter from "./routes/auth.routes.js"
import { manejoDeErrores } from './middlewares/manejoDeErrores.js';


console.log("Express funciona");

const app = express();
const PORT = 3000;
 
app.use(cors());
app.use(express.json());
app.use('/auth', authRouter); 
app.use("/api/productos", productosRouter);
app.use(manejoDeErrores);

//No quiero sacar esto por si rompe algo
app.get("/", (req, res) => {
  res.send("Funca");
});

// Manejo rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

// Manejo global de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || 'Error interno del servidor'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando http://localhost:${PORT}`);
});

