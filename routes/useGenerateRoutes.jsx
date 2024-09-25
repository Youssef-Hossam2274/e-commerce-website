import { Outlet, useRoutes } from "react-router-dom";
import UserLayout from "../src/layouts/UserLayout";
import AdminLayout from "../src/layouts/AdminLayout";
import { Login } from "../src/pages/Login";
import { Signup } from "../src/pages/Signup";
import ProductsPage from "../src/pages/ProductsPage";
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
          path: "users",
          element: <main>Users</main>

        },
        {
          index: true,
          element: <h1>INDEX</h1>
        }
      ],
    },
  ]);

  return routes;
};

export default useGenerateRoutes;
