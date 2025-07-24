import './App.css';
import MyNavbar from './components/MyNav.jsx';
import {Container} from 'react-bootstrap';
import AllTheBooks from './components/AllTheBooks.jsx';
import BookProvider from './components/BookContext.jsx';
import BookDetails from './components/BookDetails.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import MyFooter from './components/MyFooter';


function App() {
  return (
    <BrowserRouter>
      <BookProvider>
        <div className="d-flex flex-column min-vh-100">
          <MyNavbar />
          <main className="flex-grow-1">
            <Container>
              <Welcome />
              <Routes>
                <Route path="/" element={<AllTheBooks />} />
                <Route path="/book/:id" element={<BookDetails />} />
              </Routes>
            </Container>
          </main>
          <MyFooter />
        </div>
      </BookProvider>
    </BrowserRouter>
  )
}

export default App;
