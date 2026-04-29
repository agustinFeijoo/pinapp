// src/controllers/clientes.controller.ts
import { Request, Response, NextFunction } from "express";
import * as service from "../services/clientes.service";

export const crear = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await service.crearCliente(req.body);
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};

export const listar = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await service.listarClientes();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const kpi = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await service.obtenerKpi();
    res.json(data);
  } catch (err) {
    next(err);
  }
};