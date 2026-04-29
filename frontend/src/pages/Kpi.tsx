// src/pages/Kpi.tsx
import { useEffect, useState } from "react";
import { obtenerKpi } from "../api/clientesApi";

export default function Kpi() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    obtenerKpi()
      .then(res => setData(res.data))
      .catch(err => setError(err?.response?.data?.message || "Error"));
  }, []);

  if (error) return <p>{error}</p>;
  if (!data) return <p>Cargando...</p>;

  return (
    <div>
      <h2>KPIs</h2>
      <p>Promedio edad: {data.promedioEdad}</p>
      <p>Desviación estándar: {data.desviacionEstandar}</p>
    </div>
  );
}