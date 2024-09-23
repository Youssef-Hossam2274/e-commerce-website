import React from "react";
import { UserNavbar } from "../components/UserNavbar";
import { Footer } from "../components/Footer";

const UserLayout = ({ children }) => {
  return (
    <main className="flex flex-col min-h-screen">
      <UserNavbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export default UserLayout;
