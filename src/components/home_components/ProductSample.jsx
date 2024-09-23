import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { useSelector } from "react-redux";
import { ProductCard } from "../ProductCard";

const ProductSample = () => {
  const productsSample = useSelector((store) => store.products.products).slice(
    0,
    4
  );

  return (
    <div className="flex flex-wrap lg:flex-nowrap p-12 justify-center items-center lg:justify-between gap-12">
      {productsSample.map((product) => {
        return <ProductCard key={product.id} productProps={product} />;
      })}
    </div>
  );
};

export default ProductSample;
