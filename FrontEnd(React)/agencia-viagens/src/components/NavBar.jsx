
import { Container, Nav, Navbar } from "react-bootstrap";

function NavBar() {


  return (
    <header>

      <Navbar className="my-0 BgcolorGradientNavBar shadowNavBar " expand="lg">
        <Container>
          <Navbar.Brand className="text-warning" href='/'>Brasil Sem Fronteiras</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-warning" href='/Destinos'>Destinos</Nav.Link>
              <Nav.Link className="text-warning" href='/DestinosPromo'>Promoções</Nav.Link>
              <Nav.Link className="text-warning" href='/SuporteUsuario'>Fale Conosco</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </header>

  );
}



export default NavBar;