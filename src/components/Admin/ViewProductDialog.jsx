import React from "react";
import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import { ProductCardView } from "./ProductCardView";

export function ViewProductDialog({ imgUrl, name, price, description, rate }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button
        variant="filled"
        onClick={handleOpen}
        className="dark:bg-gray-700 dark:text-white"
      >
        View
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <DialogBody className="flex justify-center">
          <ProductCardView
            name={name}
            imgUrl={imgUrl}
            price={price}
            description={description}
            rate={rate}
          />
        </DialogBody>
      </Dialog>
    </>
  );
}
