import React, { useContext, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./Dashboard.css";
import { AuthContext } from "../../store/auth-context";
import ManageAllBlogs from "../../pages/ManageAllBlogs/ManageAllBlogs";
import AddNewBlog from "../AddNewBlog/AddNewBlog";
const Dashboard = () => {
  const { user, setUser } = useContext(AuthContext);
  const [toggle, setToggle] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("JWT");
    setUser({});
  };

  const toggleSidebar = () => {
    setToggle(!toggle);
  };
  const toggleStyle1 = toggle ? { marginLeft: "0" } : { marginLeft: "-17rem" };
  const toggleStyle2 = toggle
    ? { width: "calc(100% - 17rem)", marginLeft: "17rem" }
    : { width: "100%", marginLeft: "0" };
  return (
    <React.Fragment>
      <div
        className="vertical-nav bg-white dashboard"
        id="sidebar"
        style={toggleStyle1}
      >
        <div className="py-4 px-3 mb-4 bg-light">
          <div className="media d-flex align-items-center">
            <img
              loading="lazy"
              src={"https://i.ibb.co/rw2NtKq/avatar.jpg"}
              alt={user.name}
              width="80"
              height="80"
              className="me-3 rounded-circle img-thumbnail shadow-sm"
            />
            <div className="media-body">
              <h4 className="m-0">{user.name}</h4>
            </div>
          </div>
        </div>

        <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">
          Dashboard
        </p>

        <ul className="nav flex-column bg-white mb-0">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link text-dark  dashlink">
              <i className="fas fa-home me-3 text-primary fa-fw"></i>
              Home
            </NavLink>
          </li>
          {user.role === "admin" ? (
            <React.Fragment>
              <li className="nav-item">
                <NavLink to={`blogs`} className="nav-link text-dark dashlink">
                  <i className="fas fa-comments me-3 text-primary fa-fw"></i>
                  All Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={`add-new-blog`}
                  className="nav-link text-dark dashlink"
                >
                  <i className="fas fa-comments me-3 text-primary fa-fw"></i>
                  Add a new blog
                </NavLink>
              </li>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <li className="nav-item">
                <NavLink
                  to={`guest-post`}
                  className="nav-link text-dark dashlink"
                >
                  <i className="fas fa-comments me-3 text-primary fa-fw"></i>
                  Guest Posts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={`brand-link`}
                  className="nav-link text-dark dashlink"
                >
                  <i className="fas fa-comments me-3 text-primary fa-fw"></i>
                  Brand Link
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={`hero-link`}
                  className="nav-link text-dark dashlink"
                >
                  <i className="fas fa-comments me-3 text-primary fa-fw"></i>
                  Hero Link
                </NavLink>
              </li>
            </React.Fragment>
          )}
          <li className="nav-item" onClick={handleLogout}>
            <span
              className="nav-link text-dark dashlink"
              style={{ cursor: "pointer" }}
            >
              <i className="fas fa-sign-out-alt me-3 text-primary fa-fw"></i>{" "}
              Logout
            </span>
          </li>
        </ul>
      </div>

      <div className="page-content p-5" id="content" style={toggleStyle2}>
        <button
          id="sidebarCollapse"
          type="button"
          className="btn button-secondary"
          onClick={toggleSidebar}
        >
          <i className="fa fa-bars me-2"></i>
          <small className="text-uppercase font-weight-bold">Toggle</small>
        </button>
        <Routes>
          <Route path={`blogs`} element={<ManageAllBlogs />} />
          <Route path={`add-new-blog`} element={<AddNewBlog />} />
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
