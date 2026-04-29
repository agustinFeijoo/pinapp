import { useState } from "react";
import { crearCliente } from "../api/clientesApi";
import { toast } from "react-toastify";

export default function CrearCliente() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    fechaNacimiento: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);

    try {
        debugger;
      await crearCliente(form);

      toast.success("Cliente creado correctamente");

    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Error al crear cliente");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Crear Cliente</h2>

      <form onSubmit={handleSubmit}>
        <input name="nombre" placeholder="Nombre" onChange={handleChange} required={true}/>
        <input name="apellido" placeholder="Apellido" onChange={handleChange} required={true}/>
        <input name="edad" type="number" placeholder="Edad" onChange={handleChange} required={true}/>
        <input name="fechaNacimiento" type="date" onChange={handleChange} required={true}/>

        <button type="submit" disabled={loading}>
          {loading ? "Creando..." : "Crear"}
        </button>
      </form>
    </div>
  );
}