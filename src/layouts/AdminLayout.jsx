import React, { useEffect } from "react";
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
    
    <main>
      <header>admin header</header>
      {children}
      <footer>admin footer</footer>
    </main>
  );
};

export default AdminLayout;
