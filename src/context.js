import React, { useState, useContext } from "react";
import emailjs, { init } from "emailjs-com";
import validator from "validator";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [path, setPath] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [message, setMessage] = useState({
    name: "",
    email: "",
    text: "",
  });
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [projectYear, setProjectYear] = useState(2021);

  const handleSubmit = (e) => {
    e.preventDefault();
    init("user_fYt095UpiVJ0Jl86oMnEq");
    if (message.name === "") {
      setIsError(true);
      setError("Please provide your name");
      setTimeout(() => {
        setIsError(false);
        setError("");
      }, 3000);
      return;
    }

    if (!validator.isEmail(message.email)) {
      setIsError(true);
      setError("Please provide a valid email");
      setTimeout(() => {
        setIsError(false);
        setError("");
      }, 3000);
      return;
    }

    setIsError(false);
    let templateParams = {
      to_email: message.email,
      to_name: message.name,
    };
    let messageParams = {
      from_name: message.name,
      from_email: message.email,
      from_message: message.text,
    };
    emailjs.send("service_jwh9inb", "template_x8ywtfn", messageParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        if (response.status === 200) {
          emailjs
            .send("service_jwh9inb", "template_xh8t5kb", templateParams)
            .then(
              function (response) {
                console.log("SUCCESS!", response.status, response.text);
              },
              function (error) {
                console.log("FAILED...", error);
              }
            );
        }
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );

    setMessage((oldState) => {
      return { ...oldState, name: "", email: "", text: "" };
    });
    setIsError(true);
    setError(`Hey ${message.name}, I have sent you an email`);
    setTimeout(() => {
      setIsError(false);
      setError("");
    }, 5000);
    return;
  };

  return (
    <AppContext.Provider
      value={{
        path,
        setPath,
        isSidebarOpen,
        setIsSidebarOpen,
        message,
        setMessage,
        handleSubmit,
        isError,
        error,
        projectYear,
        setProjectYear,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
