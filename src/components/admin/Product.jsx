import React, {useState} from 'react'
import {
    Typography,
    Chip,
    Avatar,
    IconButton,
    Tooltip,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    
  } from "@material-tailwind/react";
import { MdDeleteForever } from "react-icons/md";
import { deleteProduct } from '../../../redux/reducers/productsSlice';
import { useDispatch} from 'react-redux';
import { ProductCard } from '../ProductCard';
const Product = ({product:{imgUrl, name, rating, price, id, description}, classes}) => {
    const {count, rate} = rating;
  const dispatch = useDispatch();
  const [view, setView] = useState(false);
  const viewProd = ()=> setView(!view);
  return (
    
    <tr>
        <td className={classes}>
            <div className="flex items-center gap-3">
            <Avatar
                src={imgUrl}
                alt={name}
                size="md"
                className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
            />
            <Typography
                variant="small"
                color="blue-gray"
                className="font-bold"
            >
                {name}
            </Typography>
            </div>
        </td>
        <td className={classes}>
            <Typography
            variant="small"
            color="blue-gray"
            className="font-normal"
            >
            {count}
            </Typography>
        </td>
        <td className={classes}>
            <Typography
            variant="small"
            color="blue-gray"
            className="font-normal"
            >
            {price}$
            </Typography>
        </td>
        <td className={classes}>
            <div className="w-max">
            <Chip
                size="sm"
                variant="ghost"
                value={rate}
                color={
                    rate > 4
                      ? "green"
                      : rate > 2
                      ? "amber"
                      : "red"
                  }
            />
            </div>
        </td>
        
        <td className={classes}>
            <Button onClick={viewProd}>View</Button>
      <Dialog open={view} handler={viewProd}>
        <DialogHeader>{name}</DialogHeader>
        <DialogBody>
          <ProductCard productProps={{imgUrl, name, rating, price, id, description}}/>
        </DialogBody>
      </Dialog>
            <Tooltip content="Delete Product">
            <IconButton variant="text" onClick={()=>{dispatch(deleteProduct(id));}}>
                <MdDeleteForever className="h-6 w-6" />
            </IconButton>
            </Tooltip>
            
        </td>
    </tr>
  )
}

export default Product
