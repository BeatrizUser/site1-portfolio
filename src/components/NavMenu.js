import Logo from './assets/logoMarvel.png'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import './style/navmenu.css'


function NavMenu() {
    return (
    <Navbar className="NavBar" bg="dark" variant="dark">

        <Container className="NavBar-Container">
          <Navbar.Brand href="#home">
            <img className="NavBar-LogoTipo" alt="" src={Logo} width="30" height="30" className="d-inline-block align-top"/>
            <spam className="NavBar-Logo">Projeto Marvel</spam>
          </Navbar.Brand>
        </Container>

        <Container className="text-center mt-6 mb-6">
          <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1">Novidades</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2">Sobre</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>

        <Container>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Procurar" style={{width: "auto"}}/>
            <Button variant="outline-secondary">Busca</Button>
          </Form>
        </Container>

    </Navbar>
    );
  }
  
  export default NavMenu;