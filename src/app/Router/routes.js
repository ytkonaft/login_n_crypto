import { HomePage, Auth } from 'ui/views';
import { MainLayout, AuthLayout } from 'ui/layouts/';

const routes = [
  {
    path: '/auth/:type?',
    component: Auth,
    layout: AuthLayout
  },
  {
    path: '/',
    component: HomePage,
    layout: MainLayout
  }
];

export default routes;
