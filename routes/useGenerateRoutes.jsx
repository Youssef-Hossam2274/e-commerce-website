import { Outlet, useRoutes } from "react-router-dom";
import UserLayout from "../src/layouts/UserLayout";
import AdminLayout from "../src/layouts/AdminLayout";
import { SignupPage } from "../src/pages/SignupPage";
import ProductsPage from "../src/pages/ProductsPage";
import AdminUsersPage from "../src/pages/AdminUsersPage";
import AdminProductsPage from "../src/pages/AdminProductsPage";
import DashboardPage from "../src/pages/DashboardPage";
import UserProfile from "../src/pages/UserProfile";
import Home from "../src/pages/Home";
import { LoginPage } from "../src/pages/LoginPage";
import ShoppingCartPage from "../src/pages/ShoppingCartPage";

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
          index: true,
          element: <Home />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "signup",
          element: <SignupPage />,
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
          element: <ShoppingCartPage />,
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
