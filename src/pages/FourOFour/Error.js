import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import classes from "./Error.module.css";

const Error = () => {
  const { setPath } = useGlobalContext();

  useEffect(() => {
    setPath("");
    // eslint-disable-next-line
  }, []);

  return (
    <section className={classes.Error}>
      <div className={classes.container}>
        <h1 className={classes.heading}>404</h1>
        <p className={classes.home}>oops! looks like you are lost</p>
        <div className={classes.center}>
          <Link to="/" className={classes.homeButton}>
            go home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
