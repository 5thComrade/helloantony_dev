import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { BsList } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useGlobalContext } from "../../context";

const Navbar = () => {
  const { path, setIsSidebarOpen } = useGlobalContext();

  return (
    <nav
      className={classes.Navbar}
      style={
        path === "home"
          ? { background: "transparent" }
          : { background: "#000000" }
      }
    >
      <div className={classes.container}>
        <Link to="/">
          <h1>
            Antony <span>Chiramel</span>
          </h1>
        </Link>
        <IconContext.Provider
          value={{ size: "48px", className: classes.hamburger }}
        >
          <BsList onClick={() => setIsSidebarOpen(true)} />
        </IconContext.Provider>
        <ul className={classes.navLinks}>
          <li>
            <Link to="/" className={path === "home" ? "active" : null}>
              home
            </Link>
          </li>
          <li>
            <Link to="/about" className={path === "about" ? "active" : null}>
              about
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={path === "projects" ? "active" : null}
            >
              projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={path === "contact" ? "active" : null}
            >
              contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
