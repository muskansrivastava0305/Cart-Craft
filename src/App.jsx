import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CartOrder from "./component/CartOrder";
import { addToCart } from "./cartSlice";
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

// const StyledBadgeIconButton = styled(Badge)(({ theme }) => ({
//   '& .MuiBadge-badge': {
//     // add your custom styles for the IconButton badge here
//     right: 0,
//     top: 0,
//     border: `none`,
//     padding: '0 2px',
//   },
// }));

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

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const getTotalCartQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };
  // console.log(handleAddToCart)

  return (
    <div className=" ">
      {/* Home-Page */}
      <div className=" block lg:hidden md:block m-7">
        {/* nav-bar */}
        <div className=" flex flex-row justify-between">
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
                  <StyledBadge badgeContent={getTotalCartQuantity()} color="secondary">
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
            <li className=" flex">
              {cart.length === 0 ? (
                <DropdownMenuLabel>No items in cart</DropdownMenuLabel>
              ) : (
               
                cart.map((product, index) => (
                  <DropdownMenuItem key={index}>
                    <CartOrder
                      key={product.id}
                      image={product.image}
                      itemName={product.itemName}
                      price={product.price}
                      id={product.id}
                      
                    />
                   
                  </DropdownMenuItem>
                ))
              )}
               </li>
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

        <div className=" flex flex-row w-full gap-2 mt-7 ml-10">
          <div className=" flex w-full  font-medium gap-2 items-center">
            <h1 className=" text-lg">Men</h1>
            <i class="fa-solid fa-caret-down"></i>
          </div>
          <div className=" flex w-full text-center font-medium gap-2  items-center">
            <h1 className=" text-lg"> Women</h1>
            <i class="fa-solid fa-caret-down"></i>
          </div>
          <div className=" flex  w-full text-center font-medium gap-2  items-center">
            <h1 className=" text-lg">Baby-Kids</h1>
            <i class="fa-solid fa-caret-down"></i>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3  gap-4 mt-7 ">
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
