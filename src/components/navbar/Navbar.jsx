import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './Navbar.module.css'

function NavbarComponent() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container className="p-2">
        <img width={200} src='logo-ver.png' />
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;