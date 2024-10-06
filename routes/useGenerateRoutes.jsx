import { Outlet, useRoutes } from "react-router-dom";
import UserLayout from "../src/layouts/UserLayout";
import AdminLayout from "../src/layouts/AdminLayout";
import { Login } from "../src/pages/Login";
import { Signup } from "../src/pages/Signup";
import ProductsPage from "../src/pages/ProductsPage";
import UserProfile from "../src/pages/UserProfile";
import Home from "../src/pages/Home";
import Cart from "../src/pages/Cart";

const useGenerateRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <UserLayout>
          <Outlet />
        </UserLayout>
      ),
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "shop",
          element: <ProductsPage />,
        },
        {
          path: "profile",
          element: <UserProfile />,
        },
        {
          path: "shopping-cart",
          element: <Cart />,
        },
        {
          path: "",
          element: <Home />,
        },
      ],
    },
    {
      path: "admin",
      element: (
        <AdminLayout>
          <Outlet />
        </AdminLayout>
      ),
      children: [],
    },
  ]);

  return routes;
};

export default useGenerateRoutes;
