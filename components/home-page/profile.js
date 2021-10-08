import Image from "next/image";
import React from "react";
import classes from "./profile.module.css";

export default function Profile() {
  return (
    <section className={classes.profile}>
      <div className={classes.image}>
        <Image
          src="/images/site/Abel.png"
          alt="an Image showing Abel"
          width={300}
          height={300}
        ></Image>
      </div>
      <h1>Hello, I&apos;m Abel </h1>
      <p>I blog about web development - especially frontend framework.</p>
    </section>
  );
}
