import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import BooksDetails from './BooksDetails'
import AuthorDetails from './AuthorDetails'
import AddBook from './AddBook'
import AddAuthor from './AddAuthor'
import EditBook from './EditBook'
import EditAuthor from './EditAuthor'


export default function Navbar() {  
    const navigate=useNavigate()
  return (
    <section>
    <nav className='bg-black'>
        <ul className='flex justify-center'>
            <li><button onClick={()=>navigate('./')} className='p-2 m-2 font-poppins text-white'>Books</button></li>
            <li><button onClick={()=>navigate('./author')} className='p-2 m-2 font-poppins text-white'>Authors</button></li>
            <li><button onClick={()=>navigate('./addbook')} className='p-2 m-2 font-poppins text-white'>AddBook</button></li>
            <li><button onClick={()=>navigate('./addauthor')} className='p-2 m-2 font-poppins text-white'>AddAuthor</button></li>
        </ul>
    </nav>
        <Routes>
            <Route path='/' element={<BooksDetails />}/>
            <Route path='/author' element={<AuthorDetails />}/>
            <Route path='/addbook' element={<AddBook />}/>
            <Route path='/addauthor' element={<AddAuthor />}/>
            <Route path='/editbook/:bookid' element={<EditBook />}/>
            <Route path='/editauthor/:authorid' element={<EditAuthor />}/>
        </Routes>
    </section>
  )
}
