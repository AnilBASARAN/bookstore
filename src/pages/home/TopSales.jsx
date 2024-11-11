import React, { useEffect, useState } from 'react'
import BookCard from '../books/BookCard';
import "../../index.css"

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


    useEffect(()=>{
        fetch("books.json")
        .then( res => res.json())
        .then((data) => setBooks(data))
    },[])

    let filteredbooks = selectedCategory === "Choose a genre" ? books : books.filter(book => book.category === selectedCategory.toLowerCase());
    console.log(filteredbooks);
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
      
            
            {
            filteredbooks.map(book=>(
              <BookCard key={book} book={book} />
            ))
            }
            
         
    </div>
  )
}

export default TopSales