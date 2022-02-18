import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './style/navmenu.css'


function NavMenu() {
    return (
    <Navbar className="NavBar" bg="secondary" variant="dark">

        <Container className="text-center mt-6 mb-6">
          <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/home">Personagens</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1">Filmes</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2">Séries</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>

    </Navbar>
    );
  }
  
  export default NavMenu;