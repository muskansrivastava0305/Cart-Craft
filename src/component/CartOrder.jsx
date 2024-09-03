import React from 'react'

export const CartOrder = ({image,itemName,price,cart}) => {
  return (
    <div className=' border shadow-gray-300 shadow-md w-full h-full p-5  rounded-lg '>
    <div className=' w-full h-64 justify-center items-center border rounded-3xl'>
      <img src={image} alt='' className='  w-64 h-64 self-center' />
    </div>
    <div className=' flex flex-row justify-between mt-3 w-full'>
    <h1 className=' font-medium '>{itemName}</h1>
    <h1 className=' font-bold text-lg'>{price}</h1>
    </div>
    <div className=' w-full  bg-[#2b5e78] text-yellow-50 text-lg font-semibold items-center text-center border rounded-md mt-3 h-9'>
      <p>{cart}</p>
    </div>
  </div>
  )
}

export default CartOrder;
