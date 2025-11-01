import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { allRoutes } from "./routes";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
      {allRoutes.map(({ path, element, children }, index) => (
        <Route key={index} path={path} element={element}>
          {children &&
            children.map((child, idx) => (
              <Route key={idx} path={child.path} element={child.element} />
            ))}
        </Route>
      ))}


        {/* Redirección para rutas inexistentes */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
