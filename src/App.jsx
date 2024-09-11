import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CartOrder from "./component/CartOrder";
import { addToCart } from "./cartSlice";
import { incrementQuant, decrementQuant } from "./cartSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
//import Badge, { BadgeProps } from '@mui/material/Badge';
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
// import { StyledBadge } from './StyledBadge';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function ProductData() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const ProductData = [
    {
      id: 1,
      image: "bag.png",
      itemName: "Bag",
      price: "Rs. 599",
    },
    {
      id: 2,
      image: "dress.png",
      itemName: "Skirt-Top",
      price: "Rs. 799",
    },
    {
      id: 3,
      image: "dress2.png",
      itemName: "Women-Dress",
      price: "Rs. 1100",
    },
    {
      id: 4,
      image: "groucery.png",
      itemName: "Kitehen-item",
      price: "Rs. 499",
    },
    {
      id: 5,
      image: "menDress.png",
      itemName: "Formal-Court",
      price: "Rs. 1099",
    },
    {
      id: 6,
      image: "blutooth.png",
      itemName: "Neck-Band Blutooth",
      price: "Rs. 1999",
    },
  ];

  const handleIncrementQuant = (id) => {
    dispatch(incrementQuant(id));
  };

  const handleDecrementQuant = (id) => {
    dispatch(decrementQuant(id));
  };

  const getTotalCartQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <div className=" ">
      {/* Home-Page */}
      <div className=" block lg:hidden md:block m-7">
        {/* nav-bar */}
        <div className=" flex flex-row justify-between w-full">
          <div className=" flex gap-2">
            <h1 className=" text-[#2b5e78]  font-extrabold font-serif text-5xl text">
              Cart
            </h1>
            <h2 className=" font-normal text-4xl   text-[#2b5e78]">Craft</h2>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div>
                <IconButton aria-label="cart">
                  <StyledBadge
                    badgeContent={getTotalCartQuantity()}
                    color="secondary"
                  >
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className=" bg-white shadow-lg rounded-lg  w-[20rem] mr-2 max-w-md ">
              {cart.length === 0 ? (
                <DropdownMenuLabel className="text-center text-gray-500 ">
                  No items in cart
                </DropdownMenuLabel>
              ) : (
                <div>
                  <ul className=" w-full">
                    {cart.map((product, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center p-2 border-b last:border-none w-full"
                      >
                        {/* Image and Product Info */}
                        <div className="flex items-center space-x-3">
                          <img
                            src={product.image}
                            alt={product.itemName}
                            className="w-16 h-20 rounded-md "
                          />
                          <div className=" flex flex-col gap-1">
                            <p className="font-semibold">{product.itemName}</p>
                            <p className="text-sm text-gray-500">
                              {product.price} x {product.quantity}
                            </p>
                            <p className="font-semibold">
                              Total:{" "}
                              {product.price.replace("Rs. ", "") *
                                product.quantity}
                            </p>
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2 border border-[#2b5e78] rounded-md ">
                          <button
                            onClick={() => handleDecrementQuant(product.id)}
                            className="bg-red-500 text-white px-2 rounded hover:bg-red-700"
                          >
                            -
                          </button>
                          <span className="text-gray-600">
                            {product.quantity}
                          </span>
                          <button
                            onClick={() => handleIncrementQuant(product.id)}
                            className="bg-green-500 text-white px-2 rounded hover:bg-green-700"
                          >
                            +
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center p-2 border-t">
                    <p className="font-semibold">Grand Total:</p>
                    <p className="font-semibold">
                      Rs.{" "}
                      {cart.reduce(
                        (acc, item) =>
                          acc + item.price.replace("Rs. ", "") * item.quantity,
                        0
                      )}
                    </p>
                  </div>
                </div>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton> */}
        <div className=" border border-slate-950 rounded-sm mt-5">
          <input
            type="text"
            id="myInput"
            placeholder="Search Prodcut"
            className=" h-11 w-full p-2 text-xl"
          />
        </div>

        <div className=" flex flex-row w-full gap-2 mt-5 items-center">
          <div className=" flex w-full  font-medium gap-2 justify-center items-center">
            <h1 className=" text-lg ">Men</h1>
            <i class="fa-solid fa-caret-down "></i>
          </div>
          <div className=" flex w-full text-center font-medium gap-2  justify-center items-center">
            <h1 className=" text-lg"> Women</h1>
            <i class="fa-solid fa-caret-down"></i>
          </div>
          <div className=" flex  w-full text-center font-medium gap-2 justify-center items-center">
            <h1 className=" text-lg">Baby-Kids</h1>
            <i class="fa-solid fa-caret-down"></i>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3  gap-4 mt-4 w-full ">
          {ProductData?.map((item, index) => (
            <CartOrder
              key={index}
              image={item.image}
              itemName={item.itemName}
              price={item.price}
              id={item.id}
              onClick={() => handleAddToCart(item)}
            />
          ))}
        </div>

        <div></div>
      </div>
      <div className=" lg:block hidden md:hidden justify-center items-center ">
        <h1 className="text-4xl text-center text-red-800">
          Website not supported on this device
        </h1>
        <p className="  text-center items-center">
          {" "}
          Please access this website on a mobile or tablet device.
        </p>
      </div>
    </div>
  );
}

export default ProductData;
