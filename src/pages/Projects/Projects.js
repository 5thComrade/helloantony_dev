import React, { useEffect } from "react";
import { useGlobalContext } from "../../context";
import data from "../../projectsData";
import { IconContext } from "react-icons";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import classes from "./Projects.module.css";

const Projects = () => {
  const { setPath, projectYear, setProjectYear } = useGlobalContext();

  useEffect(() => {
    setPath("projects");
    // eslint-disable-next-line
  }, []);

  const reduceYear = () => {
    if (projectYear === 2021) {
      console.log("Cannot reduce");
    } else {
      setProjectYear((oldYear) => oldYear - 1);
    }
  };

  const increaseYear = () => {
    if (projectYear === 2030) {
      console.log("Cannot Increase");
    } else {
      setProjectYear((oldYear) => oldYear + 1);
    }
  };

  return (
    <section className={classes.Projects}>
      <div className={classes.container}>
        <h2 className={classes.heading}>my work</h2>
        <div className={classes.year}>
          <button
            className={classes.arrow}
            onClick={reduceYear}
            disabled={projectYear === 2021}
          >
            <IconContext.Provider
              value={{ size: "40px", className: classes.socialLink }}
            >
              <IoIosArrowDropleftCircle />
            </IconContext.Provider>
          </button>
          <p className={classes.year_display}>{projectYear}</p>
          <button
            className={classes.arrow}
            onClick={increaseYear}
            disabled={projectYear === 2022}
          >
            <IconContext.Provider
              value={{ size: "40px", className: classes.socialLink }}
            >
              <IoIosArrowDroprightCircle />
            </IconContext.Provider>
          </button>
        </div>
        <div className={data[projectYear] ? classes.projectsSection : null}>
          {data[projectYear] ? (
            data[projectYear].map((project) => {
              return (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  key={project.name}
                >
                  <article className={classes.project}>
                    <img
                      src={project.img}
                      alt={project.name}
                      className={classes.image}
                    />
                    <div className={classes.info}>
                      <p>
                        <span>Name:</span> {project.name}
                      </p>
                      <p>
                        <span>Description:</span> {project.description}
                      </p>
                      <p>
                        <span>Type:</span> {project.type}
                      </p>
                    </div>
                  </article>
                </a>
              );
            })
          ) : (
            <h1 className={classes.headingProjects}>No Projects</h1>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
