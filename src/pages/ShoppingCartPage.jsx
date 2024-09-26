import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ProductCard } from "../components/ProductCard";

export default function ShoppingCartPage() {
  const { currentUser } = useSelector((state) => state.users);
  const { products } = useSelector((state) => state.products);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    products?.map((product) => {
      if (currentUser?.cart.includes(product.id)) {
        setCart((prevCart) => [...prevCart, product]);
      }
    });
  }, [currentUser, products]);

  console.log(cart);
  return (
    <div>
      {cart.map((product) => {
        return <ProductCard key={product.id} productProps={product} />;
      })}
    </div>
  );
}
