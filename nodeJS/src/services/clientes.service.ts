// src/services/clientes.service.ts
import axios from "axios";

const API_URL = process.env.MS_A_URL || "https://ms-a-748216969053.us-central1.run.app";

export const crearCliente = async (data: any) => {
  const response = await axios.post(`${API_URL}/api/clientes`, data);
  return response.data;
};

export const listarClientes = async () => {
  const response = await axios.get(`${API_URL}/api/clientes`);
  return response.data;
};

export const obtenerKpi = async () => {
  const response = await axios.get(`${API_URL}/api/clientes/kpi`);
  return response.data;
};