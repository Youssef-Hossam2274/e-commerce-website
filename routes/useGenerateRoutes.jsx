import { Outlet, useRoutes } from "react-router-dom";
import UserLayout from "../src/layouts/UserLayout";
import AdminLayout from "../src/layouts/AdminLayout";
import { Login } from "../src/components/Login";
import { Signup } from "../src/components/Signup";
import ProductsPage from "../src/pages/ProductsPage";
import HistoryPage from "../src/components/HistoryPage";

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
          path: "history",
          element: <HistoryPage />,
        },
      ],
    },
  ]);

  return routes;
};

export default useGenerateRoutes;
