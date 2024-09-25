import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../redux/reducers/productsSlice";

export function RemoveProductDialog({ productName, productId }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  const dispatch = useDispatch();

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleOpen}
        className="text-white bg-red-900 border-none"
      >
        Delete
      </Button>
      <Dialog open={open} handler={handleOpen} className="dark:bg-gray-800">
        <DialogHeader className="dark:text-white">
          Are you ready to remove {productName}
        </DialogHeader>
        <DialogFooter className="flex gap-3">
          <Button
            variant="outlined"
            onClick={handleOpen}
            className="mr-1 dark:border-white dark:text-white"
          >
            Cancel
          </Button>
          <Button
            variant="filled"
            className="bg-red-900"
            onClick={() => {
              dispatch(deleteProduct(productId));
              handleOpen();
            }}
          >
            Remove
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
