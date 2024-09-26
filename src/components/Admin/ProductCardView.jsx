import React from "react";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import { IoIosStar } from "react-icons/io";

export function ProductCardView({ imgUrl, name, price, description, rate }) {
  return (
    <Card className="w-96 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <CardHeader shadow={false} floated={false} className="h-72">
        <img
          src={imgUrl}
          alt="card-image"
          className="h-full w-full object-cover"
        />
        <div className="!absolute top-4 right-4 flex flex-row-reverse items-end gap-3">
          <div className="flex gap-2">
            <Typography color="white" className="w-5 h-5">
              {rate}
            </Typography>
            <IoIosStar className="text-[#fac12e] w-6 h-6" />
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography
            color="blue-gray"
            className="font-medium dark:text-gray-200 break-words max-w-[80%]"
          >
            {name}
          </Typography>
          <Typography
            color="blue-gray"
            className="font-medium dark:text-gray-200 w-fit"
          >
            $ {price}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 dark:text-gray-400 w-full break-words"
        >
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}
