import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Invoice({ invoiceProps }) {
  const { totalPrice, totalTax } = invoiceProps;

  return (
    <div className="border border-gray-200 dark:border-gray-600 rounded-lg lg:w-80 p-6 bg-gray-100 dark:bg-gray-800 font-sans h-fit w-full">
      {/* Delivery Section */}
      <h3 className="mb-4 text-lg font-semibold dark:text-white">Summary</h3>

      {/* Separator */}
      <hr className="border-t border-gray-300 dark:border-gray-600 my-4" />

      {/* Invoice Details */}
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="dark:text-gray-300">Subtotal</span>
          <span className="dark:text-gray-300">${totalPrice}</span>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span className="dark:text-gray-300">Delivery</span>
          <span className="dark:text-gray-300">$0.00</span>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span className="dark:text-gray-300">Tax</span>
          <span className="dark:text-gray-300">+ ${totalTax}</span>
        </div>
      </div>

      {/* Separator */}
      <hr className="border-t border-gray-300 dark:border-gray-600 my-4" />

      {/* Total Section */}
      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-semibold dark:text-white">Total</h3>
        <h3 className="text-lg font-semibold dark:text-white">
          ${totalPrice - totalTax}
        </h3>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col gap-2">
        <Button className="w-full bg-blue-700 text-white rounded-lg text-sm">
          Proceed to checkout
        </Button>
        <Link to="/shop">
          <Button className="w-full bg-white dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 border border-blue-600 text-blue-600 p-2 rounded-lg text-sm">
            Continue shopping
          </Button>
        </Link>
      </div>
    </div>
  );
}
