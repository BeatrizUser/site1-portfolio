import { Container, Navbar, Form, Nav, FormControl, Button, Row} from 'react-bootstrap';
import Logo from './assets/logoMarvel.png'
import './style/navmenu.css'


function NavMenu() {
    return (
    <Navbar className="NavBar" bg="dark" variant="dark">

        <Container className="NavBar-Container">
          <Row xs={1} md={4}>
            <Navbar.Brand href="#home" >
              <img alt="" src={Logo} width="30" height="30" className="d-inline-block align-top"/>
              <spam className="NavBar-Logo">Projeto Marvel</spam>
            </Navbar.Brand>
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
            <Form className="d-flex" md="auto">
              <FormControl type="search" placeholder="Search" className="me-2" aria-label="Procurar" style={{width: "auto"}}/>
              <Button variant="dark">Busca</Button>
            </Form>
          </Row>
        </Container>
    </Navbar>
    );
  }
  
  export default NavMenu;