import { Container, Row, Col, Card} from 'react-bootstrap';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import './style/corpo.css';

function Corpo() {
  return (
    <div className='Corpo-Topo'>
      <Container className='Corpo-Conteudo1'>
        <Row>
          <Col xs={6} className='Corpo-Coluna1-2'>
            <Card>
              <Card.Body>
                <Card.Title>Personagens</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} className='Corpo-Coluna2-2'>
            <Card>
              <Card.Body>
                <Card.Title>Novidades</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Corpo;