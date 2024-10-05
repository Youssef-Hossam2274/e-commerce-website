import React from 'react'
import {
  Navbar,
  Typography
} from "@material-tailwind/react";
import { GiEntryDoor } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar className="mx-auto max-w-screen-3xl px-4 py-2 lg:px-8 lg:py-4 bg-black ">
      <div className="container mx-auto flex flex-wrap items-center justify-between text-white">
        <Typography
          as="p"
          className="mr-4 py-1.5 font-medium"
        >
          Admin Dashboard
        </Typography>
        <div className=" items-center gap-x-2 lg:flex text-4xl">
          <Link onClick={()=>{
            navigate(-1);
          }}>
            <GiEntryDoor />
          </Link> 
        </div>
      </div>
      
    </Navbar>
    </div>
  )
}

export default AdminNavbar
