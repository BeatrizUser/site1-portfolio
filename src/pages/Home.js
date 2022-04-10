import '../components/style/home.css';

import { Container, Navbar, Form, Nav, FormControl, Button} from 'react-bootstrap';
import Logo from '../components/assets/logoMarvel.png'
import '../components/style/navmenu.css'

import Corpo from '../components/Corpo';
import Slider from '../components/Slider';
import Rodape from '../components/Rodape';
import Busca from './Busca';

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

import PersonagemPage from '../pages/Personagem'
import AboutPage from '../pages/About'

import { useHistory } from 'react-router-dom';

const App = () => {
  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    history.push(`/results?q=${event.target.campoBusca.value}`);
    history.go(0);
  }

  return (
    <div>
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
            <Form onSubmit={onSubmit} className="d-flex align-center" md="auto">
              <FormControl name='campoBusca' type="search" placeholder="Search" className="me-2" aria-label="Procurar" style={{ width: "auto" }} />
              <Button variant="dark" type='submit'>Busca</Button>
            </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Switch>
      <Route path="/personagens/:id" component={PersonagemPage} />
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/results" component={Busca} />
      <Route path="/">
        <Home/>
      </Route>
    </Switch>

    <Rodape/>
  </div>
  )
}

export default function Index() {


  return (
    <Router>
      <App/>
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