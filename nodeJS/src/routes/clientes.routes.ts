// src/routes/clientes.routes.ts
import { Router } from "express";
import * as controller from "../controllers/clientes.controller";

const router = Router();

router.post("/clientes", controller.crear);
router.get("/clientes", controller.listar);
router.get("/clientes/kpi", controller.kpi);

export default router;