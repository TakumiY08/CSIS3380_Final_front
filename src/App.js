import "bootstrap/dist/css/bootstrap.min.css";
// import 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
import './style.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BookList from "./Main";
import AddBook from "./AddBook";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<BookList />} />
        <Route path='create-book' element={<AddBook />} /> 
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
