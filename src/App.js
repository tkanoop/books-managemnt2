import {useEffect, useState} from'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import axios from'axios'

function App(){
    const [books,setBooks]=useState([])


    const fetchBooks = async () =>{
        const response =await axios.get('http://localhost:3001/books')
        setBooks(response.data)
    }

    useEffect(()=>{
        fetchBooks()
    },[])

    const editBookById=async(id,newTitle)=>{
       const response= await axios.put(`http://localhost:3001/books/${id}`,{
            title:newTitle
        })
        const updatedData=books.map((book)=>{
            if(book.id===id){
                return {...book,...response.data}
            }
            console.log(book);
                return book
            
        })
        setBooks(updatedData)
    }




    const deleteBookById=async(id)=>{
        await axios.delete(`http://localhost:3001/books/${id}`)
        const updatedBooks=books.filter((book)=>{
            return book.id !==id
        })
        setBooks(updatedBooks)


    }





    const handleClick=async(term)=>{
      
      const response=await axios.post('http://localhost:3001/books',{
        title:term,

      })
    
   
      
      
        const updateBooks=[
            ...books,response.data
        ]
        setBooks(updateBooks)
        console.log(books);
    }

    return (
        <div className='app'>
            <BookCreate onSubmit={handleClick}/>
            <BookList books={books} onSubmit={deleteBookById} onEdit={editBookById}/>
           
        </div>
    )
}
export default App