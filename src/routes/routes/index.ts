import { publicRoutes } from './publicRoutes';
import { adminRoutes } from './adminRoutes';
//import { doctorRoutes } from './doctorRoutes';

// Combina todas las rutas en un solo array
export const allRoutes = [
  ...publicRoutes,
  ...adminRoutes,
  //...doctorRoutes,
];
