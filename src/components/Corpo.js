import Slider from './Slider';
import Rodape from './Rodape';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import './style/corpo.css';

function Corpo() {
  return (
    <div className='body-corpo'>
      <Slider/>
      <Container>
        <Row>
          <Col xs={6}>
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
          <Col xs={6}>
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
      <Rodape/>
    </div>
  );
}

export default Corpo;