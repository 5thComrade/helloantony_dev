import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./About.module.css";
import { IconContext } from "react-icons";
import { BsForwardFill } from "react-icons/bs";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import cts from "../../assets/Cognizant.svg";
import tls from "../../assets/tl_logo.png";

import { useGlobalContext } from "../../context";

const About = () => {
  const { setPath } = useGlobalContext();

  useEffect(() => {
    setPath("about");
  }, []);

  return (
    <section className={classes.About}>
      <div className={classes.container}>
        <div className={classes.Me}>
          <div className={classes.bio}>
            <h1 className={classes.heading}>about me</h1>
            <p>
              I turn your ideas into{" "}
              <span>Minimum Viable Software Products</span>, on time and on
              budget.
            </p>
            <br />
            <p>
              My elixir is <span>Tea</span> and weapons are <span>AdobeXD</span>
              , <span>VSCode</span>, and <span>Breaking Bad</span>.
            </p>
            <p>
              I follow football and I know for sure,{" "}
              <span>Manchester is Red</span>.
            </p>
            <br />
            <p>
              Most beautiful city is <span>Bengaluru</span> and most beautiful
              language, <span>JavaScript</span>.
            </p>
          </div>
          <a href="#worked">
            <IconContext.Provider
              value={{ size: "80px", className: classes.downArrow }}
            >
              <FaRegArrowAltCircleDown />
            </IconContext.Provider>
          </a>
        </div>
        <hr />
        {/* Worked With Section */}
        <div className={classes.Worked} id="worked">
          <div className={classes.Me}>
            <h1 className={classes.heading}>worked with</h1>
            <div className={classes.logos}>
              <img src={cts} alt="cognizant" className={classes.logo} />
              <img src={tls} alt="teamlease" className={classes.logo} />
            </div>
            <br />
            <hr />
            {/* Services Section */}
            <h1 className={classes.heading}>my services</h1>
            <div className={classes.services}>
              <div>
                <p>
                  <span className={classes.point}></span>web development
                </p>
                <p>
                  <span className={classes.point}></span>UI/UX design
                </p>
                <p>
                  <span className={classes.point}></span>e-commerce website
                  design
                </p>
                <p>
                  <span className={classes.point}></span>business development
                </p>
              </div>
              <div>
                <p>
                  <span className={classes.point}></span>infrastructure
                  management
                </p>
                <p>
                  <span className={classes.point}></span>SEO optimization
                </p>
                <p>
                  <span className={classes.point}></span>help you finish your
                  pizza
                </p>
              </div>
            </div>
            <br />
            <hr />
            <br />
            {/* next page button */}
            <div className={classes.nextPage}>
              <p>Still doubt my skills?</p>
              <Link to="/projects" className={classes.nextButton}>
                Projects
                <IconContext.Provider value={{ size: "32px" }}>
                  <BsForwardFill />
                </IconContext.Provider>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
