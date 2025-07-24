import { Alert } from 'react-bootstrap'

const Welcome = () => (
  <Alert variant="dark" className="text-center mb-4">
    <div className="py-3">
      <h1 className="display-4">Benvenuti in EpiBooks!</h1>
      <p className="lead mb-0">La tua libreria digitale di riferimento</p>
    </div>
  </Alert>
)

export default Welcome