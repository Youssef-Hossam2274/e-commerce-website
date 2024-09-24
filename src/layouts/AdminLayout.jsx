import React, { useEffect } from "react";
import { AdminNavbar } from "../components/AdminNavbar";
import { Footer } from "../components/Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.users);
  const id = localStorage.getItem("id");

  useEffect(() => {
    if (!id || (currentUser && currentUser.role !== "admin")) {
      navigate("/");
    }
  }, [currentUser]);
  return (
    <main className="flex flex-col min-h-screen">
      <AdminNavbar />
      <div className="flex-grow">{children}</div>
      <Footer />
    </main>
  );
};

export default AdminLayout;
