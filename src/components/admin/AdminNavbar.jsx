import React from 'react'
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { GiEntryDoor } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
  const navigate = useNavigate();
  

  
  return (
    <div>
      <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
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
