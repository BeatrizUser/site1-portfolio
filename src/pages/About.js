import '../components/style/about.css';
import { Container,Row,Col} from 'react-bootstrap';
import LogoMarvel from '../components/assets/logoMarvel.png'


function About() {
  return (
      <section className='about-section'>
        <div className='objeto'>
          <span className='objeto-span'></span>
        </div>

        <Container className='about-container'>

          <Row className='row about-row1'>
            <Col className='col about-row1-col1'>
              <h2>Esta é uma página sobre este projeto</h2>
            </Col>
          </Row>

          <Row className='row about-row2'>
            <Col sm={8} className='col about-row2-col1'>
              <h3>Objetivo</h3>
              <h4>This describes the purpose of your business as it relates to the industry or market you serve.</h4>
            </Col>
            <Col sm={3}className='col about-row2-col2'>
              <h3>Visão</h3>
              <h4>The future of your business is outlined in this section.</h4>
            </Col>
          </Row>

          <Row className='row about-row3'>
            <Col sm={12} md={3} className='col about-row3-col1'>
              <h3>Linguagens</h3>
              <img src={LogoMarvel}></img>
            </Col>
            <Col sm={12} md={8} className='col about-row3-col2'>
              <Row className='row about-row3-col2-row1'>
                O que aprendi com o projeto?
              </Row>
              <Row className='row about-row3-col2-row2'>
                Quanto tempo levei para concluir o projeto?
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
  );
}

export default About;