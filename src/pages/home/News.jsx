import React from 'react'

import news1 from "../../assets/news/news-1.png"
import news2 from "../../assets/news/news-2.png"
import news3 from "../../assets/news/news-3.png"
import news4 from "../../assets/news/news-4.png"


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
import BookCard from '../books/BookCard'
import { Link } from 'react-router-dom'

const news = [
    {
        "id": 1,
        "title": "Global Climate Summit Calls for Urgent Action",
        "description": "World leaders gather at the Global Climate Summit to discuss urgent strategies to combat climate change, focusing on reducing carbon emissions and fostering renewable energy solutions.",
        "image": news1
    },
    {
        "id": 2,
        "title": "Breakthrough in AI Technology Announced",
        "description": "A major breakthrough in artificial intelligence has been announced by researchers, with new advancements promising to revolutionize industries from healthcare to finance.",
        "image": news2
    },
    {
        "id": 3,
        "title": "New Space Mission Aims to Explore Distant Galaxies",
        "description": "NASA has unveiled plans for a new space mission that will aim to explore distant galaxies, with hopes of uncovering insights into the origins of the universe.",
        "image": news3
    },
    {
        "id": 4,
        "title": "Stock Markets Reach Record Highs Amid Economic Recovery",
        "description": "Global stock markets have reached record highs as signs of economic recovery continue to emerge following the challenges posed by the global pandemic.",
        "image": news4
    },
    {
        "id": 5,
        "title": "Innovative New Smartphone Released by Leading Tech Company",
        "description": "A leading tech company has released its latest smartphone model, featuring cutting-edge technology, improved battery life, and a sleek new design.",
        "image": news2
    }
]

const News = () => {
  return (
    <div className='py-16'>
        <h2 className='text-3xl font-semibold mb-6'>News</h2>

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
         slidesPerView: 2,
         spaceBetween: 50,
       },
       1180: {
         slidesPerView: 2,
         spaceBetween: 50,
       },
     }}
     
     
   >
     
     
  
         
         { 
         news.map(article=>(
             <SwiperSlide key={article}>
                <div className='mainContainer flex justify-between items-center'>
                <div className='leftSide p-2 m-2 w-64 '  > <img src={article.image} /> </div>
                <div className='rightSide flex flex-col justify-between' >
                    <Link to={"/"} className='text-xl font-bold py-4'>{article.title}</Link>
                    <div className='w-24 h-[4px] bg-primary mb-5' ></div> 
                    <div className='text-lg'>{article.description.slice(0,100)}</div>
                    
                </div>
                </div>
                </SwiperSlide>
           
         ))
         }
         
          </Swiper>
    </div>
  )
}

export default News