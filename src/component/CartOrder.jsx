import { useDispatch, useSelector } from "react-redux";
import { incrementQuant, decrementQuant, addToCart } from "@/cartSlice";

const CartOrder = ({ id, image, itemName, price }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  const product = cart.find((item) => item.id === id);

  const handleAddToCart = () => {
    dispatch(addToCart({ id, image, itemName, price }));
  };

  return (
    <div className="border shadow-md p-5 rounded-lg">
      <div className="w-full h-64 border rounded-3xl">
        <img src={image} alt={itemName} className="w-full h-full object-cover rounded-3xl" />
      </div>
      <div className="flex justify-between mt-3">
        <h1>{itemName}</h1>
        <h1>{price}</h1>
      </div>

      
      
      {product ? (
        <div className="flex justify-between mt-3">
          <button onClick={() => dispatch(decrementQuant(id))} className="px-2 py-1 bg-red-700 text-white rounded">-</button>
          <input value={product.quantity} readOnly className="text-center w-12"/>
          <button onClick={() => dispatch(incrementQuant(id))} className="px-2 py-1 bg-green-700 text-white rounded">+</button>
        </div>
      ) : (
        <button onClick={handleAddToCart} className="mt-3 bg-[#2b5e78] text-white py-2 px-4 rounded w-full hover:bg-red-300 hover:text-black font-bold">Add to Cart</button>
      )}
    </div>
  );
};

export default CartOrder;













// import { decrementQuant, incrementQuant } from "@/cartSlice";
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { incrementQuant, decrementQuant, addToCart } from "@/cartSlice";

// export const CartOrder = ({ id, image, itemName, price, onClick }) => {
//   const cart = useSelector((state) => state.cart);
//   const product = cart?.find((item) => item.id === id);
//   console.log(cart);
//   const dispatch = useDispatch();

//   const handleIncrementQuant = (id) => {
//     dispatch(incrementQuant(id));
//   };

//   const handleDecrementQuant = (id) => {
//     dispatch(decrementQuant(id));
//   };

//    const handleAddToCart = (product) => {
//     dispatch(addToCart(product));
//   };
//   return (
//     <div className=" border shadow-gray-300 shadow-md w-full h-full p-5  rounded-lg ">
//       <div className=" w-full h-64 justify-center items-center border rounded-3xl">
//         <img
//           src={image}
//           alt=""
//           className="  border rounded-3xl w-64 h-64 self-center"
//         />
//       </div>
//       <div className=" flex flex-row justify-between mt-3 w-full">
//         <h1 className=" font-medium ">{itemName}</h1>
//         <h1 className=" font-bold text-lg">{price}</h1>
//       </div>
//       {/* <div className=" hover:cursor-pointer hover:bg-red-600 w-full  bg-[#2b5e78] text-yellow-50 
//       text-lg font-semibold items-center text-center border rounded-md mt-3 h-9">
//         <p>{cart}</p>
//       </div> */}


// {product ? (
//         <div className="flex justify-between mt-3">
//           <button onClick={() => dispatch(decrementQuant(id))} className="px-2 py-1 bg-red-700 text-white rounded">-</button>
//           <input value={product.quantity} readOnly className="text-center w-12"/>
//           <button onClick={() => dispatch(incrementQuant(id))} className="px-2 py-1 bg-green-700 text-white rounded">+</button>
//         </div>
//       ) : (
//         <button onClick={() => dispatch(addToCart({ id, image, itemName, price }))} className="mt-3 bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
//       )}

//       {/* {product ? (
//         <div className="flex flex-row justify-between w-52 border border-gray-200 shadow-md h-10 m-3  button rounded-lg text-center">
//           <button
//             className=" bg-red-900 text-white font-bold text-2xl w-10 hover:shadow-xl hover:bg-green-400 hover:text-black  button rounded-s-lg"
//             onClick={() => handleDecrementQuant(id)}
//           >
//             -
//           </button>

//           <input
//             name="quantity"
//             type="text"
//             value= {product.quantity} className=" w-16 text-center text-xl bg-slate-200"
//           />

//           <button
//             className=" bg-red-900 text-white w-10 text-center hover:bg-red-400  hover:shadow-xl hover:text-black button rounded-e-lg font-bold text-2xl "
//             onClick={() => handleIncrementQuant(id)}
//           >
//             +
//           </button>
//         </div>
//       ) : (
//         <div
//           onClick={() => handleAddToCart(product)}
//           className="bg-[#2b5e78] text-white button rounded-lg h-8 w-52 text-center  hover:bg-red-400 hover:text-black m-3"
//         >
//           <button>Add to cart</button>
//         </div>
//       )} */}
//     </div>
//   );
// };

// export default CartOrder;
