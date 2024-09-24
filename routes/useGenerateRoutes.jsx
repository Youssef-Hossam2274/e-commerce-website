import { Outlet, useRoutes } from "react-router-dom";
import UserLayout from "../src/layouts/UserLayout";
import AdminLayout from "../src/layouts/AdminLayout";
import { Login } from "../src/pages/Login";
import { Signup } from "../src/pages/Signup";
import ProductsPage from "../src/pages/ProductsPage";
import AdminUsersPage from "../src/pages/AdminUsersPage";
import AdminProductsPage from "../src/pages/AdminProductsPage";
import DashboardPage from "../src/pages/DashboardPage";
import UserProfile from "../src/pages/UserProfile";
import Home from "../src/pages/Home";

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
      children: [
        {
          index: true,
          element: <DashboardPage />,
        },
        {
          path: "users",
          element: <AdminUsersPage />,
        },
        {
          path: "products",
          element: <AdminProductsPage />,
        },
      ],
    },
  ]);

  return routes;
};

export default useGenerateRoutes;
