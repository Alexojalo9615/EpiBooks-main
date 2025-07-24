import { useParams, Link } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';
import fantasy from '../dati/fantasy.json';
import CommentArea from './CommentArea';

const BookDetails = () => {
  const { id } = useParams();
  const book = fantasy.find(b => b.asin === id);

  if (!book) {
    return <h2>Libro non trovato!</h2>;
  }

  return (
    <Container className="py-5">
      <Link to="/" className="btn btn-outline-dark mb-4">
        ← Torna alla Home
      </Link>
      <Card className="border-0 shadow-sm">
        <div className="row g-0">
          <div className="col-md-3">
            <div
              className="card-image-container"
              style={{
                height: "500px",
                backgroundImage: `url(${book.img})`,
                backgroundRepeat: "no-repeat", 
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "0.375rem 0 0 0.375rem"
              }}
            />
          </div>
          <div className="col-md-8">
            <Card.Body className="p-4">
              <h2 className="mb-4">{book.title}</h2>
              <div className="mb-4">
                <p className="mb-2">
                  <strong>Categoria:</strong> <span className="badge bg-secondary">{book.category}</span>
                </p>
                <p className="mb-2">
                  <strong>Prezzo:</strong> <span className="text-primary">${book.price}</span>
                </p>
                <p className="mb-0">
                  <strong>ASIN:</strong> <code>{book.asin}</code>
                </p>
              </div>
            </Card.Body>
          </div>
        </div>
      </Card>
      <div className="mt-5">
        <CommentArea asin={book.asin} bookTitle={book.title} />
      </div>
    </Container>
  );
};

export default BookDetails;