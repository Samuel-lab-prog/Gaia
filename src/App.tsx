import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import hamburgerIcon from "./assets/hamburgerIcon.svg";

const navbarProps = {
  brandName: "Gaia",
  links: [
    { label: "Início", to: "/" },
    { label: "História", to: "/about" },
    { label: "Membros", to: "/members" },
    { label: "Eventos", to: "/events" },
    { label: "Contato", to: "/contact" },
  ],
  dropdownIconSrc: hamburgerIcon
};

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: (
      <>
        <Navbar {...navbarProps} />
        <main className="">
          <Outlet />
        </main>
      </>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
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
