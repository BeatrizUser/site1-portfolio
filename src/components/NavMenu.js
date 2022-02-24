import { Container, Navbar,NavDropdown, Form, Nav, FormControl, Button, Row} from 'react-bootstrap';
import Logo from './assets/logoMarvel.png'
import './style/navmenu.css'


function NavMenu() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="" src={Logo} className="logo d-inline-block align-top" />
            <spam className="NavBar-Logo">Projeto Marvel</spam>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link eventKey="link-1">Novidades</Nav.Link>
              <Nav.Link eventKey="link-2">Sobre</Nav.Link>               
            </Nav>
              <Form className="d-flex align-center" md="auto">
                <FormControl type="search" placeholder="Search" className="me-2" aria-label="Procurar" style={{ width: "auto" }} />
                <Button variant="dark">Busca</Button>
              </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavMenu;