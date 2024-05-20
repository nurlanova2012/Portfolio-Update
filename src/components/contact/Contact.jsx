import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_r8zraml", "template_qbfzjim", form.current, {
        publicKey: "SRMpSGeugY0B3tYMo",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__list">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>nurlanova2012@gmail.com</h5>
            <a href="mailto:nurlanova2012@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__list">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Aizirek Nurlanbekova</h5>
            <a href="https://m.me/aizirek.nurlanova" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__list">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+996 500 041056</h5>
            <a
              href="https://api.whatsapp.com/send?phone+996500041056"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} action="">
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button className="btn btn-primary" type="submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
