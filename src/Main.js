import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { URL } from './url';
import { Link } from 'react-router-dom';

const BookCard = (props) => {
    return (
        <div class="card-container">
          <img
            src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
            alt="Books"
            height="200"
          />
          <div class="desc">
            <h2><a href="/show-book/123id">{props.book.title}</a></h2>
            <h3>{props.book.author}</h3>
            <p>{props.book.description}<button onClick={()=>{props.delete(props.book._id)}}>X</button></p>
            
          </div>
        </div>
    )
}

export default function BookList() {
    const [books, setBooks] = useState([]);
    const [bookCount, setBookCount] = useState(0);
  
    useEffect(() => {
      axios
        .get(URL + '/')
        .then((res) => {
          setBooks(res.data);
        })
        .catch((err) => {
          console.log('Error from BookList');
        });
    }, []);

    const deleteBook = (id) => {
        axios
        .delete(URL + `/${id}`)

        setBooks(books.filter((i) => i._id !== id))
    }
  
    const bookList =
      books.length === 0
        ? 'there is no book record!'
        : books.map((book, k) => <BookCard book={book} key={k} delete={deleteBook}/>);
  
    return (
      <div className='BookList'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <br />
              <h2 className='display-4 text-center'>Books in the List</h2>
              <h3 className='display-4 text-center'>{books.length}</h3>
            </div>
  
            <div className='col-md-11'>
              <Link
                to='/create-book'
                className='btn btn-outline-warning float-right'
              >
                + Add New Book
              </Link>
              <br />
              <br />
              <hr />
            </div>
          </div>
  
          <div className='list'>{bookList}</div>
        </div>
      </div>
    );
  }