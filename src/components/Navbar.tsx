import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiSearchLine } from "react-icons/ri";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import avatarImg from "../assets/avatar.png";
import { useSelector } from 'react-redux';

const currentUser = false;

const Navbar = () => {

 const cartItems = useSelector(state => state.cart.cartItems);

let cartLength = cartItems.length || 0 ;

  const [isDropdownOpen,setIsDropdownOpen] = useState(false);


  const navigation = [
    {name: "Dashboard",href:"/dashboard"},
    {name: "About",href:"/about"},
    {name: "Orders",href:"/orders"},
    {name: "Cart Page",href:"/cart"},
    {name: "Check Out",href:"/checkout"},
  ]

  return (
    <header className=' max-w-screen-2xl mx-auto px-4 py-6'>
      <nav className='flex justify-between items-center'>

        <div className='flex items-center md:gap-16 gap-4 '>

        <Link to="/">
        <HiBars3CenterLeft
        className='size-6'
        />
        </Link>

        <div className='relative sm:w-72 w-40 space-x-2'>
        <RiSearchLine className='absolute inline-block left-3 inset-y-2' />
        <input type='text' placeholder='Search here' className=' bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none '/>
        </div>

        </div>
        <div className='relative md:space-x-3 space-x-2 flex items-center gap-2'>
          <div>
        {
          currentUser ?
          <>
          <button
          onClick={()=>setIsDropdownOpen(!isDropdownOpen)}
          >
            <img src={avatarImg} alt='' className= {` size-7 rounded-full ${currentUser ? "ring-2 ring-blue-500": ""}`} />
          </button>


        {
          isDropdownOpen && (
            <div className='absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40' >
              <ul className='p-2' >
                {
                  navigation.map(item => (
                    <li
                    className='px-4 py-2 text-sm hover:bg-gray-100'
                    onClick={() => setIsDropdownOpen(false)}
                    key={item.name}
                  >
                    <Link to={item.href} className='block w-full h-full'>
                      {item.name}
                    </Link>
                  </li>
                  ))
                }
              </ul>
            </div>
          )
        }

          </>: <Link to={"/login"} ><HiOutlineUser className='size-6' /></Link> 
          
        }
        </div>
        <button className='text-red-600 hidden sm:block'>
          <FaHeart />
        </button>

        <Link
        className='bg-primary rounded-sm p-1 sm:px-6 flex items-center px-2' 
        to={"/cart"} >
        <HiShoppingCart />
        <span className='sm:ml-1 semi-bold text-sm'>{cartLength}</span>
        </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar