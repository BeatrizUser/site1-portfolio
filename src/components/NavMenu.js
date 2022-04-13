import { Container, Navbar, Form, Nav, FormControl, Button} from 'react-bootstrap';
import Logo from './assets/logoMarvel.png'
import './style/navmenu.css'


function NavMenu() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="" src={Logo} className="logo d-inline-block align-top" />
            <span className="NavBar-Logo">Projeto Marvel</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='menu-animado' href="/home">Home</Nav.Link>
              <Nav.Link className='menu-animado' eventKey="link-2">Sobre</Nav.Link>               
            </Nav>
              <Form className="d-flex align-center" md="auto">
                <FormControl type="search" placeholder="Search" className="me-2" aria-label="Procurar" style={{ width: "50vw"}} />
                <Button variant="dark">Busca</Button>
              </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavMenu;