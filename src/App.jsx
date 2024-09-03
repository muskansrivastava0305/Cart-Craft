import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CartOrder from './component/CartOrder'

function App(props) {
  console.log("cartItems", props.cartItems)
      

  const ProductData = [
    {
      image : "bag.png",
      itemName: "Bag",
      price: "Rs. 599",
      cart : "Add to Cart"
    },
    {
      image : "dress.png",
      itemName: "Skirt-Top",
      price: "Rs. 799",
      cart : "Add to Cart"
    },
    {
      image: "dress2.png",
      itemName: "Women-Dress",
      price: "Rs. 1100",
      cart : "Add to Cart"
    },
    {
      image: "groucery.png",
      itemName: "Kitehen-item",
      price: "Rs. 499",
      cart : "Add to Cart"
    },
    {
      image: "menDress.png",
      itemName: "Formal-Court",
      price: "Rs. 1099",
      cart : "Add to Cart"
    },
    {
      image: "blutooth.png",
      itemName: "Neck-Band Blutooth",
      price: "Rs. 1999",
      cart : "Add to Cart"
    }
  ]

  return (
    <div className=' '>
      {/* Home-Page */}
      <div className=' block lg:hidden md:block m-7'>
        {/* nav-bar */}
        <div className=' flex flex-row justify-between'>
          <div className=' flex gap-2'>
            <h1 className=' text-[#2b5e78]  font-extrabold font-serif text-5xl text'>Cart</h1>
            <h2 className=' font-normal text-4xl   text-[#2b5e78]'>Craft</h2>
          </div>
          <div className=' w-16'>
            <img src=' cart.webp' alt='' />
            <h1 className=' bg-red-700'>0</h1>
          </div>
        </div>

        <div className=' border border-slate-950 rounded-sm mt-5'>
          <input type="text" id="myInput" placeholder="Search Prodcut" className=' h-11 w-full p-2 text-xl' />
        </div>

        <div className=' flex flex-row w-full gap-2 mt-7 ml-10'>
          <div className=' flex w-full  font-medium gap-2 items-center'>
            <h1 className=' text-lg'>Men</h1>
            <i class="fa-solid fa-caret-down"></i>
          </div>
          <div className=' flex w-full text-center font-medium gap-2  items-center'>
            <h1 className=' text-lg'> Women</h1>
            <i class="fa-solid fa-caret-down"></i>
          </div>
          <div className=' flex  w-full text-center font-medium gap-2  items-center'>
            <h1 className=' text-lg'>Baby-Kids</h1>
            <i class="fa-solid fa-caret-down"></i>
          </div>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3  gap-4 mt-7 '>
           {ProductData?.map((item,index)=>(
            <CartOrder
            key={index}
            image={item.image}            
            itemName={item.itemName}
            price={item.price}
            cart={item.cart}
            />
           ))}

          {/* <div className=' border shadow-gray-300 shadow-md w-full h-full p-5'>
            <div className=' w-full '>
              <img src='bag.png' alt='' />
            </div>
            <div className=' flex flex-row justify-between mt-3'>
            <h1 className=' font-medium '>Colleg Bag</h1>
            <h1 className=' font-semibold text-lg'>Rs.599</h1>
            </div>
            <div className=' w-full  bg-[#2b5e78] text-yellow-50 text-lg font-semibold items-center text-center border rounded-md mt-3 h-9'>
              <p>Add to cart</p>
            </div>
          </div> */}
          {/* <div className=' border shadow-gray-300 shadow-md w-full h-full p-5'>
            <div className=' w-full '>
              <img src='dress.png' alt='' />
            </div>
            <div className=' flex flex-row justify-between mt-3'>
            <h1 className=' font-medium '>Top-Skirt</h1>
            <h1 className=' font-semibold text-lg'>Rs.799</h1>
            </div>
            <div className=' w-full  bg-[#2b5e78] text-yellow-50 text-lg font-semibold items-center text-center border rounded-md mt-3 h-9'>
              <p>Add to cart</p>
            </div>
          </div> */}
          
        </div>

      </div>
      <div className=" lg:block hidden md:hidden justify-center items-center ">
      <h1 className="text-4xl text-center text-red-800">Website not supported on this device</h1>
      <p className='  text-center items-center'> Please access this website on a mobile or tablet device.</p>
    </div>
    </div>
    
  )
}

export default App
