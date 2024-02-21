import Base from '../pages/base';
import LandingPage from '../pages/landing/LandingPage';
import AboutPage from '../pages/aboutPage/AboutPage';
import StorePage from '../pages/storePage/StorePage';
import ContactPage from '../pages/contactPage/ContactPage';
import BlogPage from '../pages/blogPage/BlogPage';
import DetailBlogPage from '../pages/detailBlogPage/DetailBlogPage';
import DetailProduct from '../pages/detailProductPage/DetailProduct';

const routes = [
  {
    path: '',
    element: <Base />,
    children: [
      {
        path: '',
        element: <LandingPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'store',
        element: <StorePage />,
      },
      {
        path: 'detail-product',
        element: <DetailProduct />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'blog',
        element: <BlogPage />,
      },
      {
        path: 'detail-blog',
        element: <DetailBlogPage />,
      },
    ],
  },
];

export { routes };
