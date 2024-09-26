import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateUser } from "../../redux/reducers/usersSlice";
import emptyCartImage from "../img/cart/undraw_empty_cart_co35.svg";
import { Button, Typography } from "@material-tailwind/react";
import Invoice from "../components/ShoppingCart/Invoice";
import ProductShoppingCard from "../components/ShoppingCart/ProductShoppingCard";

export default function ShoppingCartPage() {
  const { currentUser } = useSelector((state) => state.users);
  const { products } = useSelector((state) => state.products);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = localStorage.getItem("id");
    if (!userId) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    setCart((prevCart) => []);
    products?.map((product) => {
      const currentProductCart = currentUser?.cart.find(
        (productCart) => productCart.productId === product.id
      );
      if (currentProductCart) {
        const newCartProduct = { product, count: currentProductCart.count };
        setCart((prevCart) => [...prevCart, newCartProduct]);
      }
    });
  }, [currentUser, products]);

  const invoice = useMemo(() => {
    const TAX_RATE = 0.1;

    const totalPrice = cart.reduce(
      (acc, { count, product: { price } }) => acc + count * price,
      0
    );

    const totalTax = totalPrice * TAX_RATE;

    return { totalPrice, totalTax };
  }, [cart]);

  const handleChangeAmount = (productId, amount) => {
    const newCart = cart.map((cartItem) => {
      if (cartItem.product.id === productId) {
        cartItem.count += amount;
      }
      return cartItem;
    });
    setCart(newCart);
    const updatedCart = newCart.map((cartItem) => {
      return { productId: cartItem.product.id, count: cartItem.count };
    });

    const updatedUser = { ...currentUser, cart: updatedCart };
    dispatch(updateUser(updatedUser));
  };

  const handleDeleteCartItem = (productId) => {
    const newCart = cart.filter(({ product: { id } }) => id !== productId);
    setCart(newCart);
    const updatedCart = newCart.map((cartItem) => {
      return { productId: cartItem.product.id, count: cartItem.count };
    });

    const updatedUser = { ...currentUser, cart: updatedCart };
    dispatch(updateUser(updatedUser));
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center gap-8 px-12 py-20">
      {cart.length ? (
        <>
          <div className="flex flex-col gap-6 lg:w-[600px]">
            {cart.map(({ product, count }, index) => {
              return (
                <ProductShoppingCard
                  key={index}
                  productProps={product}
                  count={count}
                  handleChangeAmount={handleChangeAmount}
                  handleDeleteCartItem={handleDeleteCartItem}
                />
              );
            })}
          </div>

          <div className="flex bg-transparent justify-center">
            <Invoice invoiceProps={invoice} />
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-between h-full gap-10 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={emptyCartImage}
              alt="Empty Cart"
              className="w-52 h-auto"
            />
          </div>

          <div className="text-center">
            <Typography className="text-gray-800 font-bold mb-2 dark:text-white text-3xl">
              Cart's Feeling Light
            </Typography>
            <Typography className="text-gray-500 mb-4">
              Your cart is longing for some company. Begin your shopping
              adventure now!
            </Typography>

            <Link to="/shop" className="inline-block">
              <Button className="bg-blue-700 hover:bg-blue-800 text-white  rounded-lg">
                Explore our Products
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
