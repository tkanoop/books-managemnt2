import { useState } from "react";

function BookCreate({onSubmit}){

    const [term,setTerm]=useState('')


    const handleSubmit=(event)=>{
        event.preventDefault()
        onSubmit(term)
        setTerm('')
    }
    const handleChange=(event)=>{
        setTerm(event.target.value)
    }




    return (
        <div className="book-create">
            <h3>Add A Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input value={term} onChange={handleChange}/>
                <button>Create!</button>

            </form>
        </div>
    )
}
export default BookCreate;