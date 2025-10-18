import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
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
    element: (
      <>
        <Navbar {...navbarProps} />
        <main>
          <Outlet />
        </main>
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
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
