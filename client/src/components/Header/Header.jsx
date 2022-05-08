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
    <header className="sticky-top">
      <Navbar bg="light" expand="lg" className={classes.navbar}>
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
              <NavLink to="/about" className="nav-link">
                About us
              </NavLink>
              {user.email && (
                <NavLink to="/dashboard" className="nav-link">
                  Dashboard
                </NavLink>
              )}
              {/* services dropdown starts */}
              <li className="nav-item dropdown" id="myDropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="/"
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    {" "}
                    <a className="dropdown-item" href="/">
                      {" "}
                      Link Building &raquo;{" "}
                    </a>
                    <ul className="submenu dropdown-menu">
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/link-building-service"
                        >
                          Link Building Service
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/guest-posting-service"
                        >
                          Guest Posting Service
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/niche-edits-service"
                        >
                          Niche Edits Service
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/igaming-link-building"
                        >
                          Igaming Link Building
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/pbn-link-service"
                        >
                          PBN Link Service
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="/">
                      {" "}
                      Digital Marketing &raquo;{" "}
                    </a>
                    <ul className="submenu dropdown-menu">
                      <li>
                        <NavLink className="dropdown-item" to="/seo-services">
                          Seo Services
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/web-development-services"
                        >
                          Web Development Services
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/facebook-advertisement-service"
                        >
                          Facebook Advertisement Service
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* services dropdown Ends */}

              <NavLink to="/blog" className="nav-link">
                Case Studies
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                Contact Us
              </NavLink>

              {user.email ? (
                <Button
                  className="btn button-secondary btn-sm"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              ) : (
                <NavLink to="/login" className="btn button-primary btn-sm">
                  Login
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
