import MainLayout from "../../features/landing_page/DashboardLayout";
import Landing from "../../features/landing_page/landing_1/Landing";
import Landing2 from "../../features/landing_page/landing_2/Landing2";

export const publicRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [ 
      { path: "home", element: <Landing /> },
      { path: "about", element: <Landing2 /> },
      { path: "appointment", element: <></> },
      
    ],
  },
  {
    path: "/login",
    element: <></>,
  },

  // { path: "register", element: <RegisterPage /> },
  // { path: "recover-password", element: <RecoverPassword /> },

];
