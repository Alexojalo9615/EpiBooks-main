import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SingleBook = ({ book }) => {
  return (
    <Link to={`/book/${book.asin}`} style={{ textDecoration: 'none' }}>
      <Card className="h-100 shadow-sm hover-card">
        <div 
          className="card-image-container" 
          style={{ 
            height: "500px",
            backgroundImage: `url(${book.img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderTopLeftRadius: "calc(0.375rem - 1px)",
            borderTopRightRadius: "calc(0.375rem - 1px)"
          }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title 
            style={{ 
              color: 'black',
              fontSize: '1rem',
              minHeight: '3rem',
              marginBottom: '0.5rem'
            }}
          >
            {book.title}
          </Card.Title>
          <div className="mt-auto">
            <p className="text-muted mb-0">${book.price}</p>
          </div>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default SingleBook
