import '../components/style/personagem.css';
import ImgQualquer from '../components/assets/VandaVision.jpg'
import { Container,Row,Col} from 'react-bootstrap';
import Rodape from '../components/Rodape';

function Personagem() {
  return (
    <div className='profile'>
    
      <Row>
        <img className='profile-header' src={ImgQualquer} alt=''></img>
      </Row>
      
      <Row>
        <Col className='profile-title'>
          <h1>Profile</h1>
          <h4>I'm a creative ​multitasking developer</h4>
        </Col>
      </Row>
    <Container className='profile-details'>
      <Row>
        <Col>
          <h3>About me</h3>
          <h6>I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. Vitae sapien pellentesque habitant morbi tristique senectus et. Aenean sed adipiscing diam donec adipiscing tristique risus.</h6>
        </Col>
        <Col>
          <div>
            <img className='profile-photo' src={ImgQualquer} alt=''></img>
          </div>
        </Col>
        <Col>
          <h3>Details</h3>
          
          <h5>Name:</h5>
          <h6>Jack Norton</h6>
          
          <h5>Age:</h5>
          <h6>33 years</h6>
          
          <h5>Location:</h5>
          <h6>'s-Hertogenbosch, The Netherlands, Earth</h6>

        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Personagem;
