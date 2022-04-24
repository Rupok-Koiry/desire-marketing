import React, { useContext } from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo/logo.png";
import { AuthContext } from "../../store/auth-context";
import classes from "./Header.module.css";
const Header = () => {
  const { user, setUser } = useContext(AuthContext);
  const handleLogout = () => {
    localStorage.removeItem("JWT");
    setUser({});
  };
  return (
    <header>
      <Navbar bg="light" expand="lg" fixed="top" className={classes.navbar}>
        <Container>
          <NavLink to="/" className="navbar-brand">
            <img
              src={logo}
              height="50"
              className="d-inline-block align-top"
              alt="Desire Marketing logo"
            />
          </NavLink>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`ms-auto ${classes.nav_link_container}`}>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              {user.role === "admin" && (
                <NavLink to="/dashboard" className="nav-link">
                  Dashboard
                </NavLink>
              )}
              <NavLink to="/about" className="nav-link">
                About us
              </NavLink>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavLink to="/another-first" className="dropdown-item">
                  Another Action
                </NavLink>
                <NavLink to="/another-second" className="dropdown-item">
                  Another Action
                </NavLink>
                <NavLink to="/another-third" className="dropdown-item">
                  Another Action
                </NavLink>
                <NavDropdown.Divider />
                <NavLink to="/another-fourth" className="dropdown-item">
                  Another Action
                </NavLink>
              </NavDropdown>
              <NavLink to="/blog" className="nav-link">
                Blog
              </NavLink>

              {user.email ? (
                <Button
                  className="btn button-secondary btn-sm"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              ) : (
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              )}
              <Button className="btn button-primary ms-3 btn-sm">
                BUY LINKS
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
