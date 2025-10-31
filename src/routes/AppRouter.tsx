import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { allRoutes } from "./routes";
import Home from "../pages/Home";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {allRoutes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}

        {/* Ruta por defecto al Home */}
        <Route path="/" element={<Home />} />

        {/* Redirección para rutas inexistentes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
