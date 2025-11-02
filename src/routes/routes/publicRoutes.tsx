import Home from "../../pages/Home";
import MainLayout from "../../pages/landing_page/Landing_Page";
import RegisterUser from "../../pages/landing_page/contact_us/RegisterUser";
import Landing from "../../pages/landing_page/landing_1/Landing";
import Landing2 from "../../pages/landing_page/landing_2/Landing2";

export const publicRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [ 
      { path: "home", element: <Landing /> },
      { path: "about", element: <Landing2 /> },
      { path: "appointment", element: <RegisterUser /> },
      
    ],
  },
  {
    path: "/login",
    element: <></>,
  },
];
