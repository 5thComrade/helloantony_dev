import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Particles from "../../components/Particles/Particles";
import classes from "./Home.module.css";
import { IconContext } from "react-icons";
import { BsForwardFill } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useGlobalContext } from "../../context";

const Home = () => {
  const { setPath } = useGlobalContext();
  const [words] = useState([
    "Web Designer",
    "Frontend Developer",
    "Chai lover",
  ]);
  const [word, setWord] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const type = (displayWord) => {
    setTimeout(() => {
      setWord(displayWord.substring(0, word.length + 1));
    }, 200);
  };

  const deleteWord = () => {
    if (word === "") {
      setIndex((oldIndex) => {
        if (oldIndex === 0) {
          return 1;
        } else if (oldIndex === 2) {
          return 0;
        } else {
          return oldIndex + 1;
        }
      });
      setIsDeleting(false);
    } else {
      if (word === words[index]) {
        setTimeout(() => {
          setWord((oldWord) => oldWord.substring(0, oldWord.length - 1));
        }, 2000);
      } else {
        setTimeout(() => {
          setWord((oldWord) => oldWord.substring(0, oldWord.length - 1));
        }, 200);
      }
    }
  };

  useEffect(() => {
    if (word !== words[index] && !isDeleting) {
      type(words[index]);
    } else {
      setIsDeleting(true);
      deleteWord();
    }
    // eslint-disable-next-line
  }, [word, index]);

  useEffect(() => {
    setPath("home");
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      <Particles />
      <div className={classes.center}>
        <div className={classes.container}>
          <h1>Hi,</h1>
          <h1>
            I am Antony <span>Chiramel.</span>
          </h1>
          <h1>
            I am a <span className={classes.skill}>{word}</span>
          </h1>
          <Link to="/about" className={classes.nextButton}>
            About Me
            <IconContext.Provider value={{ size: "32px" }}>
              <BsForwardFill />
            </IconContext.Provider>
          </Link>
          <Link to="/contact" className={classes.contactButton}>
            <IconContext.Provider value={{ size: "64px" }}>
              <BiMessageSquareDetail />
            </IconContext.Provider>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
