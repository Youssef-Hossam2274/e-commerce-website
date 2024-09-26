import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function ProductShoppingCard({
  productProps,
  count,
  handleChangeAmount,
  handleDeleteCartItem,
}) {
  const { id, imgUrl, name, price } = productProps;

  return (
    <div className="flex w-full py-6 px-4 shadow-md rounded-md bg-gray-100 dark:bg-gray-800">
      {/* Image Section */}
      <div className="w-28 h-28 mr-4">
        <img
          src={imgUrl}
          alt={name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Product Info Section */}
      <div className="flex flex-col justify-between flex-grow">
        {/* Product Title and Price */}
        <div>
          <div className="flex justify-between">
            <Typography variant="h6" className="font-bold dark:text-white">
              {name}
            </Typography>
            <Typography variant="h6" className="font-bold dark:text-white">
              $ {count * price}
            </Typography>
          </div>
          <div className="flex items-center space-x-2">
            <Typography className="text-lg font-semibold dark:text-gray-300">
              $ {price}
            </Typography>
            <Typography className="text-green-400 dark:text-green-500">
              In Stock
            </Typography>
          </div>
        </div>

        {/* Quantity and Action Buttons */}
        <div className="flex justify-between items-center mt-4">
          {/* Quantity Controls */}
          <div className="flex items-center justify-between border-2 border-[#ececec] dark:border-gray-600">
            <Button
              size="sm"
              variant="text"
              disabled={count === 1}
              onClick={() => {
                handleChangeAmount(id, -1);
              }}
            >
              <FaMinus className="dark:text-white" size={15} />
            </Button>
            <Typography className="font-semibold dark:text-white">
              {count}
            </Typography>
            <Button
              size="sm"
              variant="text"
              onClick={() => {
                handleChangeAmount(id, 1);
              }}
            >
              <FaPlus className="dark:text-white" size={15} />
            </Button>
          </div>

          {/* Save/Delete Buttons */}
          <Button
            variant="text"
            color="red"
            className="text-red-500 dark:text-red-400 p-3"
            onClick={() => {
              handleDeleteCartItem(id);
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
