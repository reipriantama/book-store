import { Navigate } from 'react-router';
import LandingPage from '../pages/landing/LandingPage';

const routes = [
  {
    path: '',
    element: <Navigate to='/landing' />,
  },
  {
    path: 'landing',
    element: <LandingPage />,
  },
];

export { routes };
