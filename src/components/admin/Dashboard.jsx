import React from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";


const Dashboard = () => {
    const navigate = useNavigate();

    const {products} = useSelector((store) => store.products);
    const {users} = useSelector((store) => store.users);
  return (
    //redesign
    <div>
      <div className="text-white text-center felx felx-col md:flex-row">
        <div className="bg-[#9DB2BF]">
          <h1>Products</h1>
          <p>Number of Products: {products.length}</p>
          <Button variant="outlined" onClick={()=>navigate("products")}>View Products</Button>
        </div>
        <div className="bg-[#9DB2BF]">
          <h1>Users</h1>
          <p>Number of Users: {users.length}</p>
          <Button variant="outlined" onClick={()=> navigate("users")}>View Users</Button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
