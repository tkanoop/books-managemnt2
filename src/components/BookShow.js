import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({book,onSubmit,onEdit}){


    const[showEdit,setShowEdit]=useState(false)
    const handleEdit=()=>{
        setShowEdit(!showEdit)
    }
  

    const deleteBook=()=>{
        onSubmit(book.id)
    }

        const handleSubmit=(id,newTitle)=>{
            setShowEdit(false)
            onEdit(id,newTitle)
        }
    
    let content=<h3>{book.title}</h3>
    if(showEdit){
        content=<BookEdit onSubmit={handleSubmit}  book={book} />
    }
    return (
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/150/150`} alt="image"/>
            {content}
          
            <div className="actions">
                <button className="edit" onClick={handleEdit}>edit</button>
                <button className="delete" onClick={deleteBook}>
                    Delete

                </button>
            </div>
            </div>
    )
}
export default BookShow;