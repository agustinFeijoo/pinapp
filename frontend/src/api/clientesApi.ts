import axios from "axios";

const API =process.env.REACT_APP_API_URL || "https://nodejs-748216969053.us-central1.run.app";

if (!API) {
  throw new Error("REACT_APP_API_URL is not defined");
}

export const crearCliente = (data: any) => axios.post(`${API}/bff/clientes`, data);
export const listarClientes = () => axios.get(`${API}/bff/clientes`);
export const obtenerKpi = () => axios.get(`${API}/bff/clientes/kpi`);