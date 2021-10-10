import React, { useState } from "react";
import classes from "./contact-form.module.css";

export default function ContactForm() {
  const URL = "/api/contact";

  const [inputEmail, setInputEmail] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  function sendMessageHandler(e) {
    e.preventDefault();

    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        email: inputEmail,
        name: inputName,
        message: inputMessage,
      }),
      headers: {
        "Content-Type": "application/json", // 백엔드에서 JSON 데이터가 올 것이라고 전달해 주고 파싱이 제대로 되도록 알려줌
      },
    });
  }

  return (
    <section className={classes.contact}>
      <h1>What can I do for you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={inputEmail}
              onChange={(event) => setInputEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={inputName}
              onChange={(event) => setInputName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            rows="5"
            value={inputMessage}
            onChange={(event) => setInputMessage(event.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send message</button>
        </div>
      </form>
    </section>
  );
}
