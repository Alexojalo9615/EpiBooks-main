import { useState } from 'react'
import { Button, ListGroup, Form } from 'react-bootstrap'

const SingleComment = ({ comment }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedComment, setEditedComment] = useState(comment.comment)
  
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzllZDJlM2UwNDliMDAwMTUyNzA5YjEiLCJpYXQiOjE3MDAwMDAwMDAsImV4cCI6MTg1MDAwMDAwMH0.C-H1sSwTJIm8PSYwtArZbOzmc3KNN5GOBfflMpZz_jY',
          },
        }
      )
      if (response.ok) {
        alert('La recensione è stata elimata!')
      } else {
        throw new Error('La recensione non è stata eliminata!')
      }
    } catch (error) {
      alert(error)
    }
  }

  const updateComment = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + comment._id,
        {
          method: 'PUT',
          body: JSON.stringify({
            comment: editedComment,
            rate: comment.rate,
          }),
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzllZDJlM2UwNDliMDAwMTUyNzA5YjEiLCJpYXQiOjE3MDAwMDAwMDAsImV4cCI6MTg1MDAwMDAwMH0.C-H1sSwTJIm8PSYwtArZbOzmc3KNN5GOBfflMpZz_jY',
          },
        }
      )
      if (response.ok) {
        alert('Commento modificato con successo!')
        setIsEditing(false)
      } else {
        throw new Error('Errore nella modifica del commento')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
    {isEditing ? (
      <Form onSubmit={updateComment} className="d-flex w-100">
        <Form.Control
          type="text"
          value={editedComment}
          onChange={(e) => setEditedComment(e.target.value)}
          className="me-2"
        />
        <Button type="submit" variant="success" className="me-2">
          Salva
        </Button>
        <Button variant="secondary" onClick={() => setIsEditing(false)}>
          Annulla
        </Button>
      </Form>
    ) : (
      <>
        <div className="ms-2 me-auto">
          <div className="fw-bold">{comment.comment}</div>
          <small className="text-muted">Voto: {comment.rate}</small>
        </div>
        <Button
          variant="danger"
          className="ms-2"
          onClick={() => deleteComment(comment._id)}
        >
          Elimina
        </Button>
        <Button 
          variant="primary" 
          className="ms-2"
          onClick={() => setIsEditing(true)}
        >
          Modifica
        </Button>
      </>
    )}
  </ListGroup.Item>
  )
}

export default SingleComment
