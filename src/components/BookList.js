import BookShow from "./BookShow";

function BookList({books,onSubmit,onEdit}){
    const renderedbooks=books.map((book)=>{
        return <BookShow key={book.id} book={book} onSubmit={onSubmit} onEdit={onEdit}/>
    })
    return (
        <div className="book-list">{renderedbooks}</div>
    )
}
export default BookList;