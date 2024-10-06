import React, { useState } from 'react'
import { Input } from '@material-tailwind/react';

import { useDispatch} from 'react-redux';

const AddUser = () => {
    const [newUser, setNewUser] = useState(
        {name:"",
             email:"",
             gender: "female",
             role: "user",
             password: ""}
    )
    
    const dispatch = useDispatch();

    const [edited, setEdited] = useState({isEdited: false, message:""});
    
    const handleProduct = (e)=>{
        e.preventDefault();
        
        
    };
  return (
    <div>
      <form onSubmit={(e)=>{handleProduct(e)}} className='bg-white w-96'>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
        <div className='text-red-600'>{edited.message}</div>
        <div className='flex'>

        </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-1">
            <div className="sm:col-span-4">
            <Input 
            label="Username" 
            value={newUser.name}
            onChange={(e)=>setNewUser({...newUser, name:e.target.value})}
/>
            </div>
            <div className="sm:col-span-4">
            <Input 
            label="User Email" 
            value={newUser.email} 
            min={0}
            onChange={(e)=>setNewUser({...newUser, email:e.target.value})}
/>
            </div>
            <div className="sm:col-span-4">
            <Input 
            label="Password" 
            value={newUser.password} 
            onChange={(e)=>setNewUser({...newProduct, password:e.target.value})}
/>
            </div>
            
          </div>
        </div> 
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
    </div>
  )
}

export default AddUser
