/* eslint-disable react/prop-types */

import {FiShoppingCart} from "react-icons/fi"
import { getImgUrl } from '../../utils/getImgUrl'
import {Link} from "react-router-dom"
import "../../index.css"
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/features/cart/cartSlice'

const BookCard = ({book}) => {

  const dispatch = useDispatch();

  const handleAddtoCart = (product) =>{
    dispatch(addToCart(product))
  } 

  // Instead of using book.description.length directly
// Check if book.description exists first
const descriptionLength = book.description ? book.description.length : 0;

// Then, use this safely in your component



  return (
    <div className=" flex p-2 m-2 items-center justify-center  rounded-lg transition-shadow duration-300">
  <div
    className="flex flex-col items-center justify-center bg-slate-100 rounded-lg sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4"
  >
    <div className="sm:h-48 sm:flex-shrink-0  border rounded-md">
    <Link to={`/books/${book._id}`}>
        <img
          
          src={getImgUrl(book.coverImage)}
          alt=""
          className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
        />
      </Link>
    </div>

    <div className=' text-xl flex flex-col items-start p-4 md:w-[450px] justify-start md:p-2'>
      <Link to={`/books/${book._id}`}><h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
      {book.title}
        </h3></Link>
        {
        descriptionLength < 0 ?  <p> &quot;No description available.&quot; </p> : <p className="text-gray-600 w-42 mb-5">{descriptionLength > 80 ? `${book.description.slice(0,60)}...`: book.description}</p> 
        }
          
      
      <p className="font-medium mb-5">
      {`${"$ "} ${book.newPrice}`} <span className="line-through font-normal ml-2"> {`${"$ "} ${book.oldPrice}`}</span>
      </p>
      <button
      onClick={()=> handleAddtoCart(book)}
       className="btn-primary px-6 space-x-1 flex items-center gap-1 ">
        <FiShoppingCart className="" />
        <span>Add to Cart</span>
      </button>
    </div>
  </div>
</div>
  )
}

export default BookCard