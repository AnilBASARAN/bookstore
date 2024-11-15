import  { useEffect, useState } from 'react'
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
import BookCard from '../books/BookCard';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

const Recommended = () => {


  const {data:books = []} = useFetchAllBooksQuery();
  console.log(books);

  return (
    <div className='py-16'>
        <h2 className='text-3xl font-semibold mb-6'>Recommended for your</h2>
        <Swiper
     
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
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        
        
      >
        
        
     
            
            { books.length > 0 &&
            books.slice(5,10).map((book,index)=>(
                <SwiperSlide key={index}><BookCard  book={book} /></SwiperSlide>
              
            ))
            }
            
             </Swiper>
    </div>
  )
}

export default Recommended