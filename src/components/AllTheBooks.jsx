import { Col, Row } from 'react-bootstrap'
import fantasy from '../dati/fantasy.json'
import SingleBook from './SingleBook'
import { BookContext } from './BookContext.jsx'
import { useContext } from 'react'

const AllTheBooks = () => {
  const { searchQuery } = useContext(BookContext)
  const filteredBooks = fantasy.filter((b) => 
    b.title.toLowerCase().includes((searchQuery || '').toLowerCase())
  )

  return (
    <Row className="g-2 mt-3">
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => (
          <Col xs={12} md={3} key={book.asin}>
            <SingleBook book={book} />
          </Col>
        ))
      ) : (
        <Col xs={12}>
          <h2>Nessun libro trovato</h2>
        </Col>
      )}
    </Row>
  )
}

export default AllTheBooks
