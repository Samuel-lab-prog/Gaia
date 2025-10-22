import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import MembersPage from './pages/MembersPage';
import MemberDetails from './pages/MemberDetails';
import ShowsPage from './pages/ShowsPage';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import AnimatedOutlet from './components/AnimatedOutlet';
import hamburgerIcon from './assets/hamburgerIcon.svg';

const navbarProps = {
  brandName: 'Gaia',
  links: [
    { label: 'Início', to: '/' },
    { label: 'História', to: '/about' },
    { label: 'Membros', to: '/members' },
    { label: 'Shows', to: '/shows' },
  ],
  dropdownIconSrc: hamburgerIcon,
};

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: (
      <>
        <Navbar {...navbarProps} />
        <ScrollToTop />
        <AnimatedOutlet />
      </>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/members',
        element: <MembersPage />,
      },
      {
        path: '/members/:memberName',
        element: <MemberDetails />,
      },
      {
        path: '/shows',
        element: <ShowsPage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
