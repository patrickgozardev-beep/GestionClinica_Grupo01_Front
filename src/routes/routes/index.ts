import { publicRoutes } from './publicRoutes';
import { adminRoutes } from './adminRoutes';
//import { doctorRoutes } from './doctorRoutes';

export const allRoutes = [
  ...publicRoutes,
  ...adminRoutes,
  //...doctorRoutes,
];
