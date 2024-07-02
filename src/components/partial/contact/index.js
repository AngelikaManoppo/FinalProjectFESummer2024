import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Contact = () => {
  const [contactEmail, setcontactEmail] = useState("");
  const [contactLinkedin, setcontactLinkedin] = useState("");

  useEffect(() => {
    const db = getDatabase();
    const contactEmailRef = ref(db, "contactEmail/");
    onValue(contactEmailRef, (snapshot) => {
      const data = snapshot.val();
      setcontactEmail(data);
    });
    const contactLinkedinRef = ref(db, "contactLinkedin/");
    onValue(contactLinkedinRef, (snapshot) => {
      const data = snapshot.val();
      setcontactLinkedin(data);
    });
  }, []);

  return (
    <section id="contact">
    <p className="section__text__p1">Get in Touch</p>
    <h1 className="title">Contact Me</h1>
    <div className="contact-info-upper-container">
      <div className="contact-info-container">
        <img src="./images/email.png" alt="Email icon" className="icon contact-icon email-icon" />
        <p><a href="gmail:angelikamanoppo02@gmail.com">{contactEmail}</a></p>
      </div>
      <div className="contact-info-container">
        <img src="./images/linkedin.png" alt="LinkedIn icon" className="icon contact-icon" />
        <p><a href="https://www.linkedin.com/in/angelika-manoppo-a553a6317/">{contactLinkedin}</a></p>
      </div>
    </div>
  </section>
  )
}

export default Contact