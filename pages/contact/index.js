import React, { Fragment } from "react";
import ContactForm from "../../components/contact/contact-form";
import Head from "next/head";

export default function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact me</title>
        <meta
          name="description"
          content="Send me messages about your questions or something else "
        ></meta>
      </Head>
      <ContactForm></ContactForm>
    </Fragment>
  );
}
