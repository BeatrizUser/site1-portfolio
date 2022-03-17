import '../components/style/home.css';

import { Container, Navbar, Form, Nav, FormControl, Button} from 'react-bootstrap';
import Logo from '../components/assets/logoMarvel.png'
import '../components/style/navmenu.css'

import Corpo from '../components/Corpo';
import Slider from '../components/Slider';
import Rodape from '../components/Rodape';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

import PersonagemPage from '../pages/Personagem'
import AboutPage from '../pages/About'


export default function Index() {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img alt="" src={Logo} className="logo d-inline-block align-top" />
            <span className="NavBar-Logo">Projeto Marvel</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">Home</Link>
              <Link to="/personagens">Personagens</Link>
              <Link to="/about">Sobre</Link>               
            </Nav>
              <Form className="d-flex align-center" md="auto">
                <FormControl type="search" placeholder="Search" className="me-2" aria-label="Procurar" style={{ width: "auto" }} />
                <Button variant="dark">Busca</Button>
              </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route path="/personagens">
          <Personagem/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>

      <Rodape/>

    </Router>
  );
}

function Home(){
  return (
    <>
      <Slider/>
      <Corpo/>
    </>
  )
}
function Personagem(){
  return (
    <>
      <PersonagemPage />
    </>
  )
}
function About(){
  return(
    <>
      <AboutPage/>
    </>
  )
}