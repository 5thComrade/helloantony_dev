import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context";
import { IconContext } from "react-icons";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import classes from "./Contact.module.css";

const Contact = () => {
  const {
    setPath,
    message,
    setMessage,
    handleSubmit,
    isError,
    error,
  } = useGlobalContext();

  const [word, setWord] = useState("Say Hi!");

  useEffect(() => {
    setPath("contact");
    // eslint-disable-next-line
  }, []);

  return (
    <section className={classes.Contact}>
      <div className={classes.container}>
        <h1 className={classes.heading}>Ola amigo!</h1>

        <form className={classes.inputForm}>
          <input
            name="name"
            className={classes.input}
            placeholder="name (required)"
            type="text"
            value={message.name}
            onChange={(e) => {
              setMessage({ ...message, name: e.target.value });
            }}
          />
          <input
            name="email"
            className={classes.input}
            placeholder="email (required)"
            type="email"
            value={message.email}
            onChange={(e) => {
              setMessage({ ...message, email: e.target.value });
            }}
          />
          <textarea
            name="message"
            className={classes.textArea}
            placeholder="your message"
            value={message.text}
            onChange={(e) => {
              setMessage({ ...message, text: e.target.value });
            }}
          ></textarea>
          <p className={classes.error}>{isError ? error : null}</p>
          <button
            type="submit"
            className={classes.submitBtn}
            onMouseEnter={() => setWord("Let's get coffee!")}
            onMouseLeave={() => setWord("Say Hi!")}
            onClick={(e) => handleSubmit(e)}
            disabled={isError}
          >
            {word}
          </button>
        </form>
        <div className={classes.socialLinks}>
          <a
            href="https://facebook.com/tony.chiramel.009"
            target="_blank"
            rel="noreferrer"
          >
            <IconContext.Provider
              value={{ size: "40px", className: classes.socialLink }}
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
              value={{ size: "40px", className: classes.socialLink }}
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
              value={{ size: "40px", className: classes.socialLink }}
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
              value={{ size: "40px", className: classes.socialLink }}
            >
              <FaInstagram />
            </IconContext.Provider>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
