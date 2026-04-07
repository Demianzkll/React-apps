import React, { useRef, useContext, useEffect } from "react";
import { AppContext } from "./AppContext";

export default function Accesscontrol() {
  const secretInput = useRef(null);
  const { message, setMessage, isAuthorized, setIsAuthorized } = useContext(AppContext);

  const secret_code = 123;

  const handleSubmit = () => {
    const entered = secretInput.current.value;

    if (parseInt(entered) === secret_code) {
      setIsAuthorized(true);
      setMessage("Авторизація успішна!");
    } else {
      setIsAuthorized(false);
      setMessage("Невірний код!");
    }
  };

  useEffect(() => {
    secretInput.current.focus();
  }, []);

  return (
    <>
      <div>{message}</div>
      
      <input 
        ref={secretInput}
        type="text"
      />

      <button type="button" onClick={handleSubmit}>
        SEND
      </button>

      <div>Статус: {isAuthorized ? "Авторизовано" : "Не авторизовано"}</div>
    </>
  );
}
