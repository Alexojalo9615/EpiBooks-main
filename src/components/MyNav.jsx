import { Navbar, Nav, Container, Form } from 'react-bootstrap'
import { BookContext } from './BookContext.jsx'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const MyNav = () => {
  const { searchQuery, setSearchQuery } = useContext(BookContext)
  const navigate = useNavigate()

  const goBack = () =>{
    navigate(-1)
  }

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary mb-3"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={goBack} >Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Form.Group>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}



export default MyNav
