"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerKpi = exports.listarClientes = exports.crearCliente = void 0;
// src/services/clientes.service.ts
const axios_1 = __importDefault(require("axios"));
const API_URL = "http://localhost:8080/api/clientes";
const crearCliente = async (data) => {
    const response = await axios_1.default.post(API_URL, data);
    return response.data;
};
exports.crearCliente = crearCliente;
const listarClientes = async () => {
    const response = await axios_1.default.get(API_URL);
    return response.data;
};
exports.listarClientes = listarClientes;
const obtenerKpi = async () => {
    const response = await axios_1.default.get(`${API_URL}/kpi`);
    return response.data;
};
exports.obtenerKpi = obtenerKpi;
