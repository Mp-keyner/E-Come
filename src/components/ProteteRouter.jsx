import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProteteRouter = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [dataLocal, setDataLocal] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simula un retraso, ya que localStorage es síncrono
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const data = JSON.parse(localStorage.getItem("user")) || {};
        setDataLocal(data);
      } catch (error) {
        console.error("Error al obtener datos locales:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  if (dataLocal.email?.length > 0) {
    console.log(dataLocal, "ke");
    return <>{children}</>;
  }

  return <Navigate to="/" />;
};

export default ProteteRouter;
