import Home from "../../pages/Home";
import MainLayout from "../../pages/landing_page/Landing_Page";
import Landing from "../../pages/landing_page/landing_1/Landing";

export const publicRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [ 
      { path: "home", element: <Landing /> },
    ],
  },
  {
    path: "/login",
    element: <></>,
  },
];
