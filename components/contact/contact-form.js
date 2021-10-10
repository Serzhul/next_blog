import React, { useState, useEffect } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

async function sendContact(contactData) {
  const URL = "/api/contact";

  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(contactData),
    headers: {
      "Content-Type": "application/json", // 백엔드에서 JSON 데이터가 올 것이라고 전달해 주고 파싱이 제대로 되도록 알려줌
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
}

export default function ContactForm() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState(""); // pending, success, error
  const [requestError, setRequestError] = useState("");

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestError(null);
        setRequestStatus(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(e) {
    e.preventDefault();

    setRequestStatus("pending");

    try {
      await sendContact({
        email: inputEmail,
        name: inputName,
        message: inputMessage,
      });
      setRequestStatus("success");
      setInputMessage("");
      setInputEmail("");
      setInputName("");
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  }

  let notificationData;

  if (requestStatus === "pending") {
    notificationData = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way",
    };
  }

  if (requestStatus === "success") {
    notificationData = {
      status: "success",
      title: "Success!",

      message: "Your message sent successfully!",
    };
  }

  if (requestStatus === "error") {
    notificationData = {
      status: "error",
      title: "Some error happened!",
      message: requestError,
    };
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
      {notificationData && (
        <Notification
          status={notificationData.status}
          title={notificationData.title}
          message={notificationData.message}
        ></Notification>
      )}
    </section>
  );
}
