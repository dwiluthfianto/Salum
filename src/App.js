import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Carts from "./pages/Carts";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Product from "./pages/Product";
import Products from "./pages/Products";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/store",
    element: <Layout />,
    children: [
      {
        path: "/store",
        element: <Home />,
      },
      {
        path: "/store/cart",
        element: <Carts />,
      },
      {
        path: "/store/product",
        element: <Product />,
      },
      {
        path: "/store/products",
        element: <Products />,
      },
    ],
  },
  {
    path: "/",
    element: <Landing />,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
