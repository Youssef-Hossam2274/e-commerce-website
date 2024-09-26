import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../components/admin/AdminNavbar";


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
    
    <div>
      <AdminNavbar />
      {children}
      <footer>admin footer</footer>
    </div>
  );
};

export default AdminLayout;
