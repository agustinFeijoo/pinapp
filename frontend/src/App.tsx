import { Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";


import CrearCliente from "./pages/CrearCliente";
import ListaClientes from "./pages/ListaClientes";
import Kpi from "./pages/Kpi";
import { useState } from "react";

function App() {
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => setRefresh(prev => !prev);

  return (
    <div>
      <h1>Seller Center</h1>

      {/* 🔗 simple navigation */}
      <nav>
        <Link to="/crear">Crear Cliente</Link> |{" "}
        <Link to="/clientes">Lista</Link> |{" "}
        <Link to="/kpi">KPI</Link>
      </nav>

      <Routes>
        <Route
          path="/crear"
          element={<CrearCliente/>}
        />
        <Route
          path="/clientes"
          element={<ListaClientes/>}
        />
        <Route path="/kpi" element={<Kpi />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;