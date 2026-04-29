// src/app.ts
import express from "express";
import cors from "cors";
import clientesRoutes from "./routes/clientes.routes";
import { errorHandler } from "./middlewares/error.middleware";

const app = express();
app.use(cors());
/* en prod
app.use(cors({
  origin: "http://localhost:3000", // React (CRA)
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));
*/

app.use(express.json());

app.use("/bff", clientesRoutes);

// middleware de errores SIEMPRE al final
app.use(errorHandler);

app.listen(3000, () => {
  console.log("BFF running on http://localhost:3000");
});