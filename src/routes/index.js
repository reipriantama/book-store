import { Navigate } from 'react-router';

import Base from '../pages/base';
import LandingPage from '../pages/landing/LandingPage';
import AboutPage from '../pages/aboutPage/AboutPage';
import StorePage from '../pages/storePage/StorePage';
import SingleProduct from '../pages/singleProduct/singleProduct';
import ContactPage from '../pages/contactPage/ContactPage';
import BlogPage from '../pages/blogPage/BlogPage';
import BlogSinglePage from '../pages/blogSinglePage/BlogSinglePage';

const routes = [
  {
    path: '',
    element: <Navigate to='/home-page' />,
  },
  {
    path: 'home-page',
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
  {
    path: 'store-page',
    element: <Base />,
    children: [
      {
        path: '',
        element: <StorePage />,
      },
    ],
  },
  {
    path: 'detail-product-page',
    element: <Base />,
    children: [
      {
        path: '',
        element: <SingleProduct />,
      },
    ],
  },
  {
    path: 'contact-page',
    element: <Base />,
    children: [
      {
        path: '',
        element: <ContactPage />,
      },
    ],
  },
  {
    path: 'blog-page',
    element: <Base />,
    children: [
      {
        path: '',
        element: <BlogPage />,
      },
    ],
  },
  {
    path: 'blog-single-page',
    element: <Base />,
    children: [
      {
        path: '',
        element: <BlogSinglePage />,
      },
    ],
  },
];

export { routes };
