import Home from "../src/pages/Home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Footer from "./components/Footer/Footer";
import "./App.scss";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products/:id",
        element: <Products />
      },
      {
        path: "/product/:id",
        element: <Product />
      }
    ]
  }
]);
export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
