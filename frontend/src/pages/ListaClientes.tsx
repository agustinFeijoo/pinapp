// src/pages/ListaClientes.tsx
import { useEffect, useState } from "react";
import { listarClientes } from "../api/clientesApi";

export default function ListaClientes() {
  const [clientes, setClientes] = useState<any[]>([]);
  const [error, setError] = useState("");

  const fetchClientes = () => {
    listarClientes()
      .then(res => setClientes(res.data))
      .catch(err => setError(err?.response?.data?.message || "Error"));
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Clientes</h2>

      <table border={1}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Fecha Nacimiento</th>
            <th>Fallecimiento</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((c) => (
            <tr key={c.id}>
              <td>{c.nombre}</td>
              <td>{c.apellido}</td>
              <td>{c.edad}</td>
              <td>{c.fechaNacimiento}</td>
              <td>{c.fechaProbableFallecimiento}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}