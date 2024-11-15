import { useEffect, useState } from 'react'
import BookCard from '../books/BookCard';
import "../../index.css"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';


const categories = [
    "Choose a genre",
    "Business",
    "Fiction",
    "Horror",
    "Adventure",
]

const TopSales = () => {


    const [selectedCategory,setSelectedCategory] = useState("Choose a genre");


const {data:books = []} = useFetchAllBooksQuery();
console.log(books);


  let filteredbooks = selectedCategory === "Choose a genre" ? books : books.filter(book => book.category === selectedCategory.toLowerCase());


  return (
    <div className='py-10'>
        <h2 className='text-3xl font-semibold mb-6'>TopSales</h2>
        {/* category filtering */}
        <div>
            <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            className='border bg-[#EAEAEA border-gray-300 rounded-md px-4 py-2 focus:outline-none' 
             name="category"
              id="category">
                {
                    categories.map(category=> (
                <option
                value={category}
                key={category}
                >
                    {category}
                </option>
                    ))
                }
            </select>
        </div>
      
        <Swiper
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination,Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        
        
      >
        
        
     
            
            { filteredbooks.length > 0 &&
            filteredbooks.map((book,index)=>(
                <SwiperSlide className='  py-4' key={index}><BookCard  book={book} /></SwiperSlide>
              
            ))
            }
            
             </Swiper>
         
    </div>
  )
}

export default TopSales