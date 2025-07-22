import express from "express";
import cors from "cors";
import productosRouter from "./routes/productos.routes.js";

console.log("123");

console.log("Express funciona");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/productos", productosRouter);

app.get("/", (req, res) => {
  res.send("Funca");
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando http://localhost:${PORT}`);
});

