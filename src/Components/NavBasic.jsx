import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBasic() {
  return (
    <Navbar expand="lg" className="bg-black border-bottom border-light">
      <Container>
        <Navbar.Brand className="text-white" href="#home">MarcoVonku DJ.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link className="text-white" href="#home">Servicios</Nav.Link>
            <Nav.Link className="text-white" href="#link">Galeria</Nav.Link>
            <Nav.Link className="text-white" href="#action/3.1">Clienetes</Nav.Link>
            <Nav.Link className="text-white" href="#action/3.2">Contacto</Nav.Link>
            <Nav.Link className="text-white" href="#action/3.3"></Nav.Link>
            <Nav.Link className="text-white" href="#action/3.4"></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBasic;