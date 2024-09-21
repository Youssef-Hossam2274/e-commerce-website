import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <main>
      <header>admin header</header>
      {children}
      <footer>admin footer</footer>
    </main>
  );
};

export default AdminLayout;
