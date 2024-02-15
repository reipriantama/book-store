import { Navigate } from 'react-router';

import Base from '../pages/base';
import LandingPage from '../pages/landing/LandingPage';
import AboutPage from '../pages/about/AboutPage';

const routes = [
  {
    path: '',
    element: <Navigate to='/landing-page' />,
  },
  {
    path: 'landing-page',
    element: <Base />,
    children: [
      {
        path: '',
        element: <LandingPage />,
      },
    ],
  },
  {
    path: 'about-page',
    element: <Base />,
    children: [
      {
        path: '',
        element: <AboutPage />,
      },
    ],
  },
];

export { routes };
