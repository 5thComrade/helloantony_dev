import React from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useGlobalContext } from "../../context";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  const { path, isSidebarOpen, setIsSidebarOpen } = useGlobalContext();

  return (
    <nav className={isSidebarOpen ? classes.displaySidebar : classes.Sidebar}>
      <div className={classes.container}>
        <IconContext.Provider
          value={{ size: "48px", className: classes.closeIcon }}
        >
          <IoCloseSharp onClick={() => setIsSidebarOpen(false)} />
        </IconContext.Provider>
        <ul className={classes.navLinks}>
          <li>
            <Link
              to="/"
              className={path === "home" ? "active" : null}
              onClick={() => setIsSidebarOpen(false)}
            >
              home
            </Link>
          </li>
          <hr />
          <li>
            <Link
              to="/about"
              className={path === "about" ? "active" : null}
              onClick={() => setIsSidebarOpen(false)}
            >
              about
            </Link>
          </li>
          <hr />
          <li>
            <Link
              to="/projects"
              className={path === "projects" ? "active" : null}
              onClick={() => setIsSidebarOpen(false)}
            >
              projects
            </Link>
          </li>
          <hr />
          <li>
            <Link
              to="/contact"
              className={path === "contact" ? "active" : null}
              onClick={() => setIsSidebarOpen(false)}
            >
              contact
            </Link>
          </li>
          <hr />
        </ul>
        <div className={classes.socialLinks}>
          <a
            href="https://facebook.com/tony.chiramel.009"
            target="_blank"
            rel="noreferrer"
          >
            <IconContext.Provider
              value={{ size: "32px", className: classes.socialLink }}
            >
              <FaFacebookSquare />
            </IconContext.Provider>
          </a>
          <a
            href="https://github.com/5thComrade"
            target="_blank"
            rel="noreferrer"
          >
            <IconContext.Provider
              value={{ size: "32px", className: classes.socialLink }}
            >
              <FaGithubSquare />
            </IconContext.Provider>
          </a>
          <a
            href="https://www.linkedin.com/in/antony-chiramel-a40a3a169"
            target="_blank"
            rel="noreferrer"
          >
            <IconContext.Provider
              value={{ size: "32px", className: classes.socialLink }}
            >
              <FaLinkedin />
            </IconContext.Provider>
          </a>
          <a
            href="https://www.instagram.com/5th_comrade/"
            target="_blank"
            rel="noreferrer"
          >
            <IconContext.Provider
              value={{ size: "32px", className: classes.socialLink }}
            >
              <FaInstagram />
            </IconContext.Provider>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
