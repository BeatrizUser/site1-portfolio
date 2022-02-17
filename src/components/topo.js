import Logo from './assets/logoMarvel.png'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import  'bootstrap/dist/css/bootstrap.min.css' ;
import './style/topo.css'

function Topo() {
    return (
    <Navbar className="NavBar" bg="dark" variant="dark">
        <Container className="NavBar-Container">
          <Navbar.Brand href="#home">
            <img className="NavBar-LogoTipo" alt="" src={Logo} width="30" height="30" className="d-inline-block align-top"/>
            <spam className="NavBar-Logo">Projeto Marvel</spam>
          </Navbar.Brand>
        </Container>
    </Navbar>
    );
  }
  
  export default Topo;