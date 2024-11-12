import React, { useEffect, useState } from 'react'
import BookCard from '../books/BookCard';
import "../../index.css"
import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const categories = [
    "Choose a genre",
    "Business",
    "Fiction",
    "Horror",
    "Adventure",
]

const TopSales = () => {

    const [books,setBooks] = useState([]);
    const [selectedCategory,setSelectedCategory] = useState("Choose a genre");
    const [filteredbooks,setFilteredBooks] = useState(books)

    useEffect(()=>{
        fetch("books.json")
        .then( res => res.json())
        .then((data) => setBooks(data))
    },[])

    useEffect(()=>{
        let filteredbooks = selectedCategory === "Choose a genre" ? books : books.filter(book => book.category === selectedCategory.toLowerCase());
        setFilteredBooks(filteredbooks)
    },[selectedCategory,books])

    

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
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
        
     
            
            { filteredbooks.length > 0 &&
            filteredbooks.map(book=>(
                <SwiperSlide key={book}><BookCard  book={book} /></SwiperSlide>
              
            ))
            }
             </Swiper>
         
    </div>
  )
}

export default TopSales