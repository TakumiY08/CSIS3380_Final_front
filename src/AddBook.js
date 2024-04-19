import React, {useState} from 'react'
import axios from 'axios'
import { URL } from './url'

export default function AddBook() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [description, setDescirption] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        const newBook = {
            title: title,
            author: author,
            description: description,
        }

        axios
        .post(URL + '/', newBook)
        .then((res) => {window.location = '/'})
    }

    return (
        <div class="CreateBook">
      <div class="container">
        <div class="row">
          <div class="col-md-8 m-auto">
            <br /><a class="btn btn-info float-left" href="/">Show BooK List</a>
          </div>
          <div class="col-md-8 m-auto">
            <h1 class="display-4 text-center">Add Book</h1>
            <p class="lead text-center">Create new book</p>
            <form onSubmit={onSubmit}>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="title"
                  required
                  class="form-control"
                  value={title}
                  spellcheck="false"
                  data-ms-editor="true"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  required
                  class="form-control"
                  value={author}
                  spellcheck="false"
                  data-ms-editor="true"
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Describe this book"
                  name="description"
                  class="form-control"
                  value={description}
                  spellcheck="false"
                  data-ms-editor="true"
                  onChange={(e) => setDescirption(e.target.value)}
                />
              </div>
              <input type="submit" class="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}