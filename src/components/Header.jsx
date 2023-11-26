import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MdSportsBaseball } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#103820", padding: "1.5rem" }}
    >
      <Container>
        <Navbar.Brand
          href=""
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            fontWeight: "bold",
          }}
        >
          <MdSportsBaseball size={40} />
          Green Scape
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              style={{ color: "white", paddingRight: "25px" }}
              href="#home"
            >
              <Link style={{ textDecoration: 'none', color: 'white' }} to={'/'}>Home</Link>
            </Nav.Link>
            <Nav.Link
              style={{ color: "white", paddingRight: "25px" }}
              href="#link"
            >
              <Link style={{ textDecoration: 'none', color: 'white' }} to={'/about'}>About</Link>            </Nav.Link>
            <Nav.Link
              style={{ color: "white", paddingRight: "25px" }}
              href="#link"
            >
              <Link style={{ textDecoration: 'none', color: 'white' }} to={'/book'}>Book Now</Link>
            </Nav.Link>
            <Nav.Link
              style={{ color: "white", paddingRight: "25px" }}
              href="#link"
            >
              <Link style={{ textDecoration: 'none', color: 'white' }} to={'/contact'}>Contact</Link>
            </Nav.Link>
            <Nav.Link
              style={{ color: "white", paddingRight: "25px" }}
              href="#link"
            >
              <Link style={{ textDecoration: 'none', color: 'white' }} to={'/login'}>login</Link>

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;